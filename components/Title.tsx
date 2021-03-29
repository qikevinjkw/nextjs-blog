/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const svgVariants: Variants = {
  animate: {
    scale: 6,
    opacity: 1,
    transition: {
      type: "spring",
      staggerChildren: 0.1,
    },
  },
};
const pathVariants: Variants = {
  initial: {
    pathLength: 0,
    fill: "none",
    stroke: "#5773ff",
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};
export function Title() {
  return (
    <Link href="/" passHref>
      <div
        css={css`
          text-decoration: none;
          cursor: pointer;
        `}
      >
        <motion.svg
          viewBox="-5 -5 20 20"
          width="35"
          height="8"
          variants={svgVariants}
          initial="initial"
          animate="animate"
        >
          <motion.path
            variants={pathVariants}
            d="M8.13601 0.788C8.15201 0.868 8.13201 0.94 8.07601 1.004C8.02801 1.06 7.91601 1.136 7.74001 1.232C7.38001 1.408 7.17601 1.54 7.12801 1.628C7.08801 1.66 6.99601 1.728 6.85201 1.832C6.71601 1.936 6.54401 2.064 6.33601 2.216C6.02401 2.424 5.75201 2.62 5.52001 2.804C5.29601 2.988 5.14801 3.128 5.07601 3.224C5.05201 3.224 5.02001 3.236 4.98001 3.26C4.94801 3.284 4.92001 3.292 4.89601 3.284C4.88001 3.292 4.84401 3.316 4.78801 3.356C4.73201 3.396 4.69201 3.432 4.66801 3.464C4.64401 3.528 4.60401 3.592 4.54801 3.656C4.50001 3.712 4.44001 3.736 4.36801 3.728C4.21601 3.808 3.91601 4.028 3.46801 4.388C3.52401 5.004 3.68001 5.544 3.93601 6.008C4.16801 6.52 4.40401 6.896 4.64401 7.136C4.81201 7.32 4.96801 7.464 5.11201 7.568C5.26401 7.672 5.38001 7.724 5.46001 7.724C5.53201 7.748 5.63201 7.804 5.76001 7.892C5.88801 7.98 5.95601 8.052 5.96401 8.108C5.97201 8.124 5.97601 8.156 5.97601 8.204C5.97601 8.324 5.95601 8.412 5.91601 8.468C5.88401 8.524 5.85601 8.564 5.83201 8.588C5.80801 8.62 5.76801 8.636 5.71201 8.636C5.62401 8.636 5.51601 8.604 5.38801 8.54C5.26001 8.548 5.04001 8.428 4.72801 8.18C4.41601 7.932 4.17601 7.704 4.00801 7.496C3.79201 7.184 3.60401 6.9 3.44401 6.644C3.29201 6.388 3.17601 6.108 3.09601 5.804C3.06401 5.66 3.00401 5.444 2.91601 5.156C2.86001 5.004 2.82801 4.896 2.82001 4.832V4.604L2.67601 4.964C2.66801 4.988 2.61601 5.12 2.52001 5.36C2.43201 5.6 2.30401 6.024 2.13601 6.632L1.94401 7.256C1.76001 7.832 1.63601 8.196 1.57201 8.348C1.51601 8.5 1.45601 8.576 1.39201 8.576C1.36001 8.576 1.31601 8.556 1.26001 8.516C1.21201 8.484 1.17601 8.46 1.15201 8.444C1.08801 8.404 1.04401 8.368 1.02001 8.336C0.996009 8.304 0.984009 8.264 0.984009 8.216C0.984009 8.16 1.00401 8.06 1.04401 7.916C1.03601 7.812 1.04401 7.712 1.06801 7.616C1.09201 7.52 1.10401 7.464 1.10401 7.448C1.16001 7.448 1.18801 7.384 1.18801 7.256C1.18801 7.192 1.22401 7.052 1.29601 6.836L1.40401 6.464L1.54801 6.116C1.63601 5.892 1.68001 5.772 1.68001 5.756C1.68001 5.652 1.73201 5.52 1.83601 5.36C1.86801 5.264 1.89601 5.16 1.92001 5.048C1.94401 4.936 1.95601 4.844 1.95601 4.772C1.97201 4.732 2.01601 4.64 2.08801 4.496C2.16001 4.352 2.21201 4.208 2.24401 4.064C2.25201 4.024 2.26401 3.98 2.28001 3.932C2.30401 3.884 2.32801 3.824 2.35201 3.752L2.74801 2.672L2.92801 2.264C2.94401 2.224 2.99601 2.1 3.08401 1.892C3.18001 1.684 3.24401 1.58 3.27601 1.58V1.448C3.27601 1.416 3.32001 1.312 3.40801 1.136L3.55201 0.848C3.61601 0.744 3.66401 0.644 3.69601 0.548C3.73601 0.444 3.76001 0.376 3.76801 0.344C3.77601 0.328 3.79201 0.3 3.81601 0.26C3.84001 0.22 3.86801 0.184 3.90001 0.152C3.98801 0.0879998 4.06801 0.0559998 4.14001 0.0559998C4.25201 0.0559998 4.34801 0.136 4.42801 0.296C4.48401 0.408 4.51201 0.508 4.51201 0.596C4.51201 0.676 4.47601 0.772 4.40401 0.884C4.13201 1.468 3.85601 2.068 3.57601 2.684C3.30401 3.3 3.16801 3.656 3.16801 3.752L3.57601 3.452C3.78401 3.244 4.11601 2.968 4.57201 2.624L6.04801 1.424C6.27201 1.312 6.53601 1.136 6.84001 0.896C6.92001 0.848 6.98401 0.804 7.03201 0.764C7.08001 0.724 7.12001 0.696 7.15201 0.68C7.20001 0.64 7.29601 0.572 7.44001 0.476C7.58401 0.372 7.67601 0.324 7.71601 0.332C7.80401 0.292 7.90001 0.332 8.00401 0.452C8.10801 0.572 8.15201 0.684 8.13601 0.788Z"
            stroke-width="0.01"
          />
          <motion.path
            variants={pathVariants}
            d="M8.8081 7.58C8.6081 7.756 8.3681 7.844 8.0881 7.844C7.8881 7.844 7.6961 7.796 7.5121 7.7C7.3361 7.604 7.1881 7.472 7.0681 7.304C6.9641 7.176 6.8881 7.032 6.8401 6.872C6.7921 6.712 6.7681 6.516 6.7681 6.284C6.7681 6.204 6.7761 6.044 6.7921 5.804C6.8161 5.508 6.9121 5.2 7.0801 4.88C7.2561 4.56 7.4721 4.276 7.7281 4.028C7.9841 3.772 8.2361 3.596 8.4841 3.5C8.6121 3.42 8.7281 3.38 8.8321 3.38C8.8881 3.38 8.9441 3.384 9.0001 3.392C9.0561 3.4 9.1161 3.408 9.1801 3.416C9.3561 3.44 9.4881 3.476 9.5761 3.524C9.6721 3.564 9.7521 3.628 9.8161 3.716C10.0161 3.916 10.1161 4.148 10.1161 4.412C10.0841 4.604 9.9601 4.824 9.7441 5.072C9.5281 5.32 9.2681 5.52 8.9641 5.672C8.8201 5.72 8.6561 5.744 8.4721 5.744C8.2241 5.744 8.0241 5.692 7.8721 5.588C7.8001 5.564 7.7441 5.552 7.7041 5.552C7.6321 5.552 7.5761 5.6 7.5361 5.696C7.5041 5.792 7.4721 5.968 7.4401 6.224C7.4321 6.28 7.4281 6.36 7.4281 6.464C7.4281 6.872 7.5641 7.096 7.8361 7.136C8.0201 7.176 8.1521 7.196 8.2321 7.196C8.3281 7.196 8.4361 7.164 8.5561 7.1L8.7841 6.968C8.8321 6.944 8.8761 6.912 8.9161 6.872C8.9561 6.832 8.9921 6.796 9.0241 6.764C9.0401 6.748 9.0641 6.724 9.0961 6.692C9.1281 6.652 9.1561 6.628 9.1801 6.62C9.2121 6.604 9.2401 6.596 9.2641 6.596C9.2961 6.596 9.3321 6.616 9.3721 6.656C9.4121 6.688 9.4441 6.712 9.4681 6.728C9.5401 6.728 9.5561 6.78 9.5161 6.884C9.4761 6.98 9.3881 7.096 9.2521 7.232C9.1241 7.36 8.9761 7.476 8.8081 7.58ZM8.7961 5.036C8.9321 4.98 9.0681 4.88 9.2041 4.736C9.3481 4.592 9.4201 4.472 9.4201 4.376C9.4201 4.28 9.3841 4.2 9.3121 4.136C9.2401 4.072 9.1401 4.04 9.0121 4.04C8.9161 4.04 8.8441 4.048 8.7961 4.064C8.6841 4.096 8.5521 4.184 8.4001 4.328C8.2481 4.464 8.1161 4.604 8.0041 4.748C7.8921 4.892 7.8481 4.976 7.8721 5C7.9121 5.072 8.0681 5.108 8.3401 5.108C8.5241 5.108 8.6761 5.084 8.7961 5.036Z"
            stroke-width="0.01"
          />
          <motion.path
            variants={pathVariants}
            d="M11.5944 7.268C11.5064 7.204 11.3944 6.936 11.2584 6.464C11.1304 5.992 11.0304 5.536 10.9584 5.096C10.9264 4.928 10.8624 4.7 10.7664 4.412C10.7344 4.284 10.7184 4.196 10.7184 4.148C10.7184 4.004 10.7784 3.896 10.8984 3.824C10.9304 3.8 10.9744 3.784 11.0304 3.776C11.0944 3.76 11.1464 3.756 11.1864 3.764C11.3624 3.828 11.5224 4.316 11.6664 5.228C11.6904 5.46 11.7264 5.668 11.7744 5.852C11.8224 6.036 11.8504 6.144 11.8584 6.176C11.8824 6.224 11.9104 6.276 11.9424 6.332C11.9744 6.38 12.0104 6.404 12.0504 6.404C12.0744 6.404 12.1024 6.388 12.1344 6.356C12.2864 6.204 12.4504 6.012 12.6264 5.78C12.8184 5.516 12.9504 5.34 13.0224 5.252C13.1104 5.116 13.2264 4.956 13.3704 4.772C13.3944 4.74 13.4504 4.664 13.5384 4.544C13.6264 4.424 13.7104 4.324 13.7904 4.244C13.8704 4.156 13.9384 4.104 13.9944 4.088C14.0184 4.08 14.0544 4.076 14.1024 4.076C14.2384 4.076 14.3064 4.132 14.3064 4.244C14.3064 4.348 14.2344 4.504 14.0904 4.712C14.0424 4.776 13.9904 4.864 13.9344 4.976C13.8864 5.08 13.8544 5.14 13.8384 5.156C13.7504 5.332 13.5864 5.58 13.3464 5.9C13.1144 6.22 12.9584 6.42 12.8784 6.5C12.8624 6.516 12.7944 6.572 12.6744 6.668C12.5624 6.764 12.4584 6.88 12.3624 7.016C12.1064 7.256 11.9224 7.376 11.8104 7.376C11.7384 7.376 11.6664 7.34 11.5944 7.268Z"
            stroke-width="0.01"
          />
          <motion.path
            variants={pathVariants}
            d="M16.5511 2.84C16.5271 2.864 16.5031 2.876 16.4791 2.876C16.4471 2.876 16.3951 2.852 16.3231 2.804C16.2431 2.796 16.1351 2.728 15.9991 2.6C15.8711 2.464 15.8071 2.376 15.8071 2.336C15.7911 2.176 15.8151 2.004 15.8791 1.82C15.9431 1.636 16.0591 1.54 16.2271 1.532C16.2511 1.532 16.2831 1.54 16.3231 1.556C16.3631 1.564 16.4311 1.588 16.5271 1.628C16.5431 1.66 16.5751 1.728 16.6231 1.832C16.6791 1.936 16.7191 2.036 16.7431 2.132C16.7751 2.228 16.7911 2.316 16.7911 2.396C16.7911 2.588 16.7111 2.736 16.5511 2.84ZM15.1951 7.628C15.0751 7.628 14.9671 7.552 14.8711 7.4C14.7831 7.248 14.7311 7.096 14.7151 6.944C14.7471 6.64 14.7711 6.424 14.7871 6.296C14.8511 6 14.9511 5.596 15.0871 5.084C15.2311 4.564 15.3191 4.272 15.3511 4.208C15.3751 4.168 15.4111 4.148 15.4591 4.148C15.5071 4.148 15.5591 4.164 15.6151 4.196C15.6711 4.228 15.7191 4.264 15.7591 4.304C15.8231 4.392 15.8551 4.492 15.8551 4.604C15.8551 4.772 15.7751 5.124 15.6151 5.66C15.5031 6.06 15.4311 6.344 15.3991 6.512C15.3671 6.68 15.3551 6.86 15.3631 7.052C15.3551 7.108 15.3391 7.204 15.3151 7.34C15.2991 7.468 15.2831 7.548 15.2671 7.58C15.2511 7.612 15.2271 7.628 15.1951 7.628Z"
            stroke-width="0.01"
          />
          <motion.path
            variants={pathVariants}
            d="M20.5294 7.856C20.4094 7.856 20.2854 7.764 20.1574 7.58C20.0374 7.388 19.9774 7.2 19.9774 7.016C19.9774 6.888 20.0054 6.66 20.0614 6.332C20.1254 5.996 20.2014 5.668 20.2894 5.348C20.3374 5.204 20.3614 5.1 20.3614 5.036C20.3614 4.996 20.3454 4.976 20.3134 4.976C20.2814 4.976 20.1854 5.024 20.0254 5.12C19.7694 5.256 19.5934 5.38 19.4974 5.492C19.4574 5.524 19.3934 5.58 19.3054 5.66C19.2174 5.74 19.1374 5.804 19.0654 5.852C18.9134 5.972 18.7094 6.148 18.4534 6.38C18.2054 6.604 18.0014 6.796 17.8414 6.956C17.7934 7.044 17.7254 7.088 17.6374 7.088C17.6134 7.088 17.5774 7.08 17.5294 7.064C17.4334 7.04 17.3494 6.988 17.2774 6.908C17.2054 6.82 17.1694 6.728 17.1694 6.632C17.1694 6.512 17.2374 6.26 17.3734 5.876C17.5174 5.492 17.6934 5.072 17.9014 4.616C17.9334 4.56 17.9614 4.48 17.9854 4.376C18.0094 4.264 18.0214 4.16 18.0214 4.064C18.0214 4.008 18.0334 3.944 18.0574 3.872C18.0814 3.8 18.1094 3.748 18.1414 3.716C18.1654 3.676 18.2014 3.656 18.2494 3.656C18.3534 3.656 18.4414 3.716 18.5134 3.836C18.6414 3.956 18.7054 4.108 18.7054 4.292C18.7054 4.444 18.6614 4.64 18.5734 4.88C18.5174 4.992 18.4734 5.084 18.4414 5.156C18.4174 5.22 18.4014 5.264 18.3934 5.288C18.4174 5.288 18.5214 5.232 18.7054 5.12L19.0054 4.94L19.3654 4.664C19.5494 4.52 19.6534 4.448 19.6774 4.448C19.7094 4.448 19.7494 4.436 19.7974 4.412C19.8454 4.388 19.8854 4.36 19.9174 4.328C19.9414 4.304 19.9614 4.288 19.9774 4.28C20.0014 4.272 20.0174 4.268 20.0254 4.268C20.0334 4.268 20.0534 4.264 20.0854 4.256C20.1174 4.248 20.1454 4.232 20.1694 4.208C20.2014 4.176 20.2574 4.16 20.3374 4.16C20.4494 4.16 20.5614 4.196 20.6734 4.268C20.7854 4.34 20.8414 4.42 20.8414 4.508C20.8414 4.532 20.8494 4.556 20.8654 4.58C20.8814 4.596 20.8934 4.608 20.9014 4.616C20.9334 4.616 20.9614 4.66 20.9854 4.748C21.0094 4.828 21.0214 4.928 21.0214 5.048C21.0214 5.224 21.0014 5.372 20.9614 5.492C20.9614 5.58 20.9454 5.692 20.9134 5.828C20.8814 5.964 20.8614 6.052 20.8534 6.092L20.7814 6.404C20.6774 6.724 20.6254 6.988 20.6254 7.196C20.6254 7.356 20.6574 7.48 20.7214 7.568C20.7374 7.6 20.7454 7.632 20.7454 7.664C20.7454 7.712 20.7254 7.756 20.6854 7.796C20.6534 7.836 20.6014 7.856 20.5294 7.856Z"
            stroke-width="0.01"
          />
          <motion.path
            variants={pathVariants}
            d="M26.39 8.552C26.238 8.512 26.098 8.444 25.97 8.348C25.842 8.252 25.69 8.112 25.514 7.928C25.354 7.744 25.246 7.556 25.19 7.364C25.142 7.172 25.118 6.944 25.118 6.68C25.118 6.272 25.206 5.764 25.382 5.156C25.566 4.54 25.79 4.008 26.054 3.56L26.414 2.9C26.462 2.756 26.582 2.524 26.774 2.204C26.966 1.884 27.146 1.628 27.314 1.436C27.434 1.26 27.59 1.076 27.782 0.884C27.982 0.692 28.178 0.528 28.37 0.392C28.394 0.384 28.446 0.36 28.526 0.32C28.606 0.28 28.694 0.252 28.79 0.236C28.894 0.22 29.014 0.212 29.15 0.212C29.614 0.212 29.994 0.392 30.29 0.752C30.586 1.112 30.734 1.56 30.734 2.096C30.734 2.192 30.718 2.352 30.686 2.576C30.694 2.6 30.698 2.64 30.698 2.696C30.698 2.728 30.694 2.756 30.686 2.78C30.686 2.796 30.686 2.808 30.686 2.816C30.686 2.848 30.674 2.884 30.65 2.924C30.634 2.964 30.63 2.996 30.638 3.02C30.622 3.044 30.614 3.108 30.614 3.212C30.614 3.3 30.622 3.448 30.638 3.656C30.646 3.728 30.65 3.824 30.65 3.944C30.65 4.096 30.626 4.24 30.578 4.376C30.538 4.512 30.454 4.692 30.326 4.916C30.31 4.948 30.266 5.036 30.194 5.18C30.13 5.324 30.094 5.436 30.086 5.516C29.886 5.86 29.622 6.248 29.294 6.68C29.198 6.8 29.13 6.904 29.09 6.992C29.05 7.08 29.046 7.136 29.078 7.16C29.086 7.216 29.202 7.304 29.426 7.424C29.642 7.536 29.798 7.632 29.894 7.712C29.998 7.792 30.066 7.868 30.098 7.94C30.13 8.012 30.146 8.104 30.146 8.216C30.178 8.328 30.194 8.388 30.194 8.396C30.194 8.444 30.158 8.468 30.086 8.468C30.046 8.492 30.002 8.504 29.954 8.504C29.77 8.504 29.466 8.352 29.042 8.048C28.754 7.76 28.566 7.616 28.478 7.616C28.43 7.616 28.386 7.656 28.346 7.736C28.346 7.768 28.298 7.828 28.202 7.916C28.106 8.004 28.002 8.08 27.89 8.144C27.61 8.368 27.402 8.52 27.266 8.6C27.13 8.68 27.006 8.72 26.894 8.72C26.766 8.72 26.598 8.664 26.39 8.552ZM26.558 7.904C26.678 7.936 26.83 7.9 27.014 7.796C27.206 7.692 27.486 7.496 27.854 7.208C27.958 7.152 28.022 7.104 28.046 7.064C28.07 7.024 28.074 6.972 28.058 6.908C27.978 6.692 27.938 6.5 27.938 6.332C27.938 6.26 27.946 6.212 27.962 6.188C27.986 6.164 28.014 6.172 28.046 6.212C28.07 6.212 28.09 6.22 28.106 6.236C28.13 6.252 28.142 6.264 28.142 6.272L28.226 6.26C28.29 6.26 28.342 6.316 28.382 6.428L28.466 6.572L28.838 6.128C29.142 5.776 29.298 5.556 29.306 5.468C29.362 5.412 29.414 5.344 29.462 5.264C29.51 5.184 29.542 5.136 29.558 5.12C29.59 5.088 29.622 5.032 29.654 4.952C29.694 4.864 29.718 4.788 29.726 4.724C29.75 4.612 29.762 4.54 29.762 4.508C29.762 4.46 29.73 4.392 29.666 4.304C29.57 4.208 29.522 4.116 29.522 4.028C29.522 3.964 29.546 3.892 29.594 3.812C29.698 3.652 29.798 3.42 29.894 3.116C29.998 2.804 30.058 2.564 30.074 2.396C30.098 2.236 30.11 2.096 30.11 1.976C30.11 1.712 30.07 1.496 29.99 1.328C29.91 1.152 29.81 1.048 29.69 1.016C29.402 0.952 29.23 0.924 29.174 0.932C29.174 0.956 29.158 0.976 29.126 0.992C29.094 1.008 29.05 1.02 28.994 1.028C28.722 1.116 28.406 1.368 28.046 1.784C27.694 2.2 27.346 2.736 27.002 3.392C26.81 3.728 26.654 4.036 26.534 4.316C26.422 4.588 26.314 4.888 26.21 5.216C26.114 5.512 26.026 5.82 25.946 6.14C25.874 6.46 25.842 6.68 25.85 6.8C25.85 7.056 25.91 7.284 26.03 7.484C26.158 7.676 26.334 7.816 26.558 7.904Z"
            stroke-width="0.01"
          />
          <motion.path
            variants={pathVariants}
            d="M32.9928 2.864C32.8408 2.864 32.6848 2.784 32.5248 2.624C32.3728 2.456 32.2968 2.284 32.2968 2.108C32.2968 2.068 32.3448 1.976 32.4408 1.832C32.5368 1.688 32.5848 1.608 32.5848 1.592C32.6408 1.592 32.6888 1.596 32.7288 1.604C32.7688 1.612 32.8168 1.628 32.8728 1.652C32.9448 1.812 33.0568 1.976 33.2088 2.144C33.2568 2.208 33.3008 2.268 33.3408 2.324C33.3808 2.38 33.4008 2.428 33.4008 2.468C33.4008 2.604 33.3928 2.696 33.3768 2.744C33.3688 2.792 33.3368 2.824 33.2808 2.84C33.2328 2.856 33.1368 2.864 32.9928 2.864ZM31.2288 7.412C31.2048 7.412 31.1728 7.404 31.1328 7.388C31.0928 7.372 31.0648 7.36 31.0488 7.352C31.0488 7.328 31.0368 7.288 31.0128 7.232C30.9968 7.168 30.9888 7.128 30.9888 7.112C30.9248 7.08 30.8928 7.04 30.8928 6.992C30.8928 6.952 30.9048 6.896 30.9288 6.824C31.0328 6.64 31.2168 6.224 31.4808 5.576C31.7448 4.92 31.8928 4.532 31.9248 4.412C31.9248 4.38 31.9368 4.34 31.9608 4.292C31.9848 4.244 32.0128 4.204 32.0448 4.172C32.0768 4.14 32.1128 4.124 32.1528 4.124C32.2408 4.124 32.3208 4.184 32.3928 4.304C32.4728 4.424 32.5128 4.556 32.5128 4.7C32.5128 4.796 32.4208 5.072 32.2368 5.528C32.0608 5.976 31.8608 6.428 31.6368 6.884C31.6048 6.948 31.5568 7.04 31.4928 7.16C31.4368 7.28 31.3928 7.352 31.3608 7.376C31.3288 7.4 31.2848 7.412 31.2288 7.412Z"
            stroke-width="0.01"
          />
        </motion.svg>
      </div>
    </Link>
  );
}
