/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useAppInit } from "../providers/AppInitProvider";
import styled from "@emotion/styled";

const ColDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
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
  const [justLiked, setJustLiked] = useState(false);

  useEffect(() => {
    console.log("like data", data);
    if (data) {
      setNumLikes(data.hits);
      setHasLiked(data.userHasLiked);
      console.log("has liked", data.userHasLiked);
    }
  }, [data]);

  return numLikes !== undefined ? (
    <ColDiv
      css={css`
        span::after {
          content: "+1";
          color: transparent;
          transition: all 0.4s ease-in-out;
          font-size: 12px;
          position: absolute;
          right: 26px;
          top: 32px;
        }
        span.just-liked::after {
          color: #08ef08;
          transition: all 0.3s ease-in-out;
        }
      `}
    >
      <button
        disabled={hasLiked}
        onClick={() => {
          if (!hasLiked) {
            setHasLiked(true);
            setNumLikes((prev) => prev + 1);
          }
          setJustLiked(true);
          setTimeout(() => {
            setJustLiked(false);
          }, 700);
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
      <span className={justLiked ? "just-liked" : ""}>{numLikes}</span>
    </ColDiv>
  ) : null;
}
