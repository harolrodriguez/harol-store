import { keyframes } from "@emotion/react";

export function revealToBottom() {
  return keyframes`
      from {
          transform: scaleY(100%) scaleX(101%);
      }
      to {
          transform: scaleY(0%) scaleX(101%);
      }`;
}

export function revealToRight() {
  return keyframes`
      from {
          transform: scaleX(100%) scaleY(101%);
      }
      to {
          transform: scaleX(0%) scaleY(101%);
      }`;
}
