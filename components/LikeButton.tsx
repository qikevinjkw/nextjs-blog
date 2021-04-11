/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useAppInit } from "../providers/AppInitProvider";
import styled from "@emotion/styled";
import { FlowerIcon } from "./FlowerIcon";
import { AnimatePresence, motion, Variants } from "framer-motion";

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

const getLikeVariants = (numTimesLiked: number): Variants => {
  return {
    initial: {
      opacity: 0.5,
    },
    animate: {
      //   scale: 1 + 0.1 * numTimesLiked,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
};

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
  const [numTimesLiked, setNumTimesLiked] = useState(0);

  useEffect(() => {
    console.log("like data", data);
    if (data) {
      setNumLikes(data.hits);
      setHasLiked(data.userHasLiked);
      console.log("has liked", data.userHasLiked);
    }
  }, [data]);

  const handleClick = () => {
    if (!hasLiked) {
      setHasLiked(true);
      setNumLikes((prev) => prev + 1);
    }
    setJustLiked(true);
    setTimeout(() => {
      setJustLiked(false);
    }, 600);
    setNumTimesLiked((prev) => prev + 1);
    fetch(`/api/register-hit?slug=${slug}&clientId=${clientId}`)
      .then((resp) => resp.json())
      .then((resp: LikesResp) => {
        console.log("resp", resp);
        if (resp.hits) {
          setNumLikes(resp.hits);
        }
      });
  };

  return numLikes !== undefined ? (
    <ColDiv
      css={css`
        span::after {
          content: "+1";
          color: transparent;
          transition: all 0.4s ease-in-out;
          font-size: 12px;
          position: absolute;
          right: 23px;
          top: 50px;
        }
        span.just-liked::after {
          color: #08ef08;
          transition: all 0.3s ease-in-out;
        }
      `}
    >
      <FlowerIcon onClick={handleClick} />
      <span>
        {numLikes}
        {/* <AnimatePresence>
          {justLiked && (
            <motion.span
              css={css`
                position: absolute;
                right: 19px;
                font-size: 12px;
                color: #08ef08;
              `}
              variants={getLikeVariants(Math.min(numTimesLiked, 5))}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              +1
            </motion.span>
          )}
        </AnimatePresence> */}
      </span>
    </ColDiv>
  ) : null;
}
