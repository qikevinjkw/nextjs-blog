/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useCallback, useEffect, useState } from "react";
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
    refetchInterval: 5,
  });
  const [numLikes, setNumLikes] = useState<number | undefined>();
  //   const [hasLiked, setHasLiked] = useState(false);
  const [justLiked, setJustLiked] = useState(false);
  const [numTimesLiked, setNumTimesLiked] = useState(0);
  const updateLikeCount = useCallback((toSetLikeCount: number) => {
    setNumLikes((curLikeCount) => {
      if (curLikeCount === undefined || toSetLikeCount > curLikeCount) {
        return toSetLikeCount;
      }
      return curLikeCount;
    });
  }, []);

  useEffect(() => {
    if (data) {
      console.log("update like to ", data.hits);
      updateLikeCount(data.hits);
    }
  }, [data]);

  const handleClick = () => {
    if (justLiked) {
      return;
    }
    // if (!hasLiked) {
    //   setHasLiked(true);
    setNumLikes((prev) => prev + 1);
    // }
    setJustLiked(true);
    setTimeout(() => {
      setJustLiked(false);
    }, 600);
    setNumTimesLiked((prev) => prev + 1);
    fetch(`/api/register-hit?slug=${slug}&clientId=${clientId}`)
      .then((resp) => resp.json())
      .then((resp: LikesResp) => {
        if (resp.hits) {
          updateLikeCount(resp.hits);
        }
      });
  };

  return numLikes !== undefined ? (
    <ColDiv
      css={css`
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
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
