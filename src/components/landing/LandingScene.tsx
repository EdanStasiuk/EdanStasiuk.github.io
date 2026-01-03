import { useRef } from "react";
import LayerOne from "./LayerOne";
import LayerTwo from "./LayerTwo";
import LayerThree from "./LayerThree";
import LayerZero from "./LayerZero";

export default function LandingScene() {
  const sceneRef = useRef<HTMLDivElement>(null);

  return (
    <div
    ref={sceneRef}
    className="w-full h-full absolute bottom-0 left-0"
    >
        <LayerZero sceneRef={sceneRef} />
        <LayerOne sceneRef={sceneRef} />
        <LayerTwo sceneRef={sceneRef} />
        <LayerThree sceneRef={sceneRef} />
    </div>
  );
};
