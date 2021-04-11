import { repeat } from "lodash";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useAppInit } from "../providers/AppInitProvider";

interface LikesResp {
  message?: string;
  hits?: number;
  userHasLiked: boolean;
}
export function LikeButton({ slug }: { slug: string }) {
  const { clientId } = useAppInit();
  const { data } = useQuery<LikesResp>({
    queryKey: slug,
    queryFn: (context) => {
      return fetch(
        `/api/get-hit?slug=${context.queryKey}&clientId=${clientId}`
      ).then((resp) => resp.json());
    },
  });
  const [numLikes, setNumLikes] = useState<number | undefined>();
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log("like data", data);
    if (data) {
      setNumLikes(data.hits);
      setHasLiked(data.userHasLiked);
      console.log("has liked", data.userHasLiked);
    }
  }, [data]);

  return numLikes !== undefined ? (
    <div>
      <button
        disabled={hasLiked}
        onClick={() => {
          if (!hasLiked) {
            setHasLiked(true);
            setNumLikes((prev) => prev + 1);
          }
          fetch(`/api/register-hit?slug=${slug}&clientId=${clientId}`)
            .then((resp) => resp.json())
            .then((resp: LikesResp) => {
              console.log("resp", resp);
              if (resp.hits) {
                setNumLikes(resp.hits);
              }
            });
        }}
      >
        Like
      </button>{" "}
      {numLikes}
    </div>
  ) : null;
}
