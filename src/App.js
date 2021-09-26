import Canvas from "react-canvas-dom";
import { playerDraw } from "./helpers/player";
import {
  keyDownHandler,
  keyUpHandler,
  mouseClick,
} from "./helpers/keyDownHandlers";
import { tridentDraw } from "./helpers/trident";

export let cx;
export let cy;

const draw = (ctx, i) => {
  ctx.clearRect(
    -ctx.canvas.width / 2,
    -ctx.canvas.height / 2,
    ctx.canvas.width,
    ctx.canvas.height
  );
  if (i === 1) {
    cx = ctx.canvas.width * 0.5;
    cy = ctx.canvas.height * 0.5;
    ctx.translate(cx, cy);
  }
  playerDraw(ctx);
  tridentDraw(ctx);
};

document.addEventListener("click", mouseClick, false);
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

const App = () => {
  return (
    <Canvas
      draw={draw}
      height={window.innerHeight - 50}
      width={window.innerWidth - 50}
    />
  );
};

export default App;
