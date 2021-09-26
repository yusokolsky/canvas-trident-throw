import { Trident } from "./trident";

export let upKeyPressed = false;
export let leftKeyPressed = false;
export let rightKeyPressed = false;
export let downKeyPressed = false;

export let clientX = 0;
export let clientY = 0;

export const keyDownHandler = (e) => {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightKeyPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftKeyPressed = true;
  } else if (e.key === "Up" || e.key === "ArrowUp") {
    upKeyPressed = true;
  } else if (e.key === "Down" || e.key === "ArrowDown") {
    downKeyPressed = true;
  }
};

export const keyUpHandler = (e) => {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightKeyPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftKeyPressed = false;
  } else if (e.key === "Up" || e.key === "ArrowUp") {
    upKeyPressed = false;
  } else if (e.key === "Down" || e.key === "ArrowDown") {
    downKeyPressed = false;
  }
};

export const mouseClick = (e) => {
  if (!Trident.isNeedToThrow) {
    clientX = e.clientX;
    clientY = e.clientY;
    Trident.isNeedToThrow = true;
  }
};
