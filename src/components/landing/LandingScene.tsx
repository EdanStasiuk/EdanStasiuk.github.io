import { useRef } from "react";
import { useScroll } from "../../Utils/hooks/useScroll";
import LayerOne from "./LayerOne";
import LayerTwo from "./LayerTwo";
import LayerThree from "./LayerThree";
import LayerZero from "./LayerZero";
import LayerFour from "./LayerFour";

export default function LandingScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const scrollY = useScroll();

  return (
    <div ref={sceneRef} className="fixed inset-0 w-full h-full pointer-events-none">
      {/* Furthest layer to closest layer */}
      <LayerFour sceneRef={sceneRef} scrollY={scrollY} />
      <LayerThree sceneRef={sceneRef} scrollY={scrollY} />
      <LayerTwo sceneRef={sceneRef} scrollY={scrollY} />
      <LayerOne sceneRef={sceneRef} scrollY={scrollY} />
      <LayerZero sceneRef={sceneRef} scrollY={scrollY} />
    </div>
  );
}