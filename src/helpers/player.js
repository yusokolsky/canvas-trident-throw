import {
  downKeyPressed,
  leftKeyPressed,
  rightKeyPressed,
  upKeyPressed,
} from "./keyDownHandlers";
import { Trident } from "./trident";

export let Player = {
  position: {
    x: 0,
    y: 0,
  },
  size: 150,
  text: "Player",
  color: "yellow",
};

export const playerDraw = (ctx) => {
  if (upKeyPressed) Player.position.y -= 5;
  else if (leftKeyPressed) Player.position.x -= 5;
  else if (rightKeyPressed) Player.position.x += 5;
  else if (downKeyPressed) Player.position.y += 5;
  if (!Trident.isNeedToThrow) {
    Trident.position.x = Player.position.x;
    Trident.position.y = Player.position.y;
  }
  ctx.beginPath();
  ctx.arc(
    Player.position.x,
    Player.position.y,
    Player.size,
    0,
    2 * Math.PI,
    false
  );
  ctx.fillStyle = Player.color;
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();
};