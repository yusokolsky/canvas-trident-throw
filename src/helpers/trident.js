import { clientX, clientY } from "./keyDownHandlers";
import { difference } from "./functions";
import { cx, cy } from "../App";

export let Trident = {
  position: {
    x: 0,
    y: 0,
  },
  isNeedToThrow: false,
};

export const tridentDraw = (ctx) => {
  ctx.beginPath();
  if (Trident.isNeedToThrow) {
    const rect = ctx.canvas.getBoundingClientRect();
    const x = clientX - rect.left - cx;
    const y = clientY - rect.top - cy;
    const TridentShotAngle = Math.atan2(x, y);
    const TridentVelocityX = Math.sin(TridentShotAngle) * 0.5;
    const TridentVelocityY = Math.cos(TridentShotAngle) * 0.5;
    const isNearX = difference(Trident.position.x, x) < 10;
    const isNearY = difference(Trident.position.y, y) < 10;
    const speed = isNearY || isNearY ? 15 : 5;
    if (!isNearX) Trident.position.x += TridentVelocityX * speed;
    if (!isNearY) Trident.position.y += TridentVelocityY * speed;
    if (isNearY && isNearY) {
      Trident.isNeedToThrow = false;
    }
  }

  ctx.moveTo(Trident.position.x, Trident.position.y);
  ctx.lineTo(Trident.position.x + 300, Trident.position.y);
  ctx.moveTo(Trident.position.x + 250, Trident.position.y + -40);
  ctx.lineTo(Trident.position.x + 250, Trident.position.y + 40);
  ctx.moveTo(Trident.position.x + 250, Trident.position.y + -40);
  ctx.lineTo(Trident.position.x + 300, Trident.position.y + -40);
  ctx.moveTo(Trident.position.x + 250, Trident.position.y + 40);
  ctx.lineTo(Trident.position.x + 300, Trident.position.y + 40);
  ctx.lineWidth = 15;
  ctx.stroke();
  ctx.closePath();
};