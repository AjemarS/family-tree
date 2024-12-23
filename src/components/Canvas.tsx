import Konva from "konva";
import React, { useState, useEffect } from "react";
import { Layer, Rect, Stage } from "react-konva";

// Initial state of future component
const INITIAL_STATE = {
  width: 100,
  height: 100,
  fill: "red",
  shadowBlur: 10,
};

const Canvas: React.FC = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [layerPosition, setLayerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Adding feature to drag inside the layer
  const handleDragMove = (e: Konva.KonvaEventObject<DragEvent>) => {
    setLayerPosition({
      x: e.target.x(),
      y: e.target.y(),
    });
  };

  const handleRectMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    e.cancelBubble = true;
  };

  return (
    <div>
      <Stage
        width={dimensions.width}
        height={dimensions.height}
        draggable
        onDragMove={handleDragMove}
      >
        <Layer x={layerPosition.x} y={layerPosition.y}>
          <Rect
            x={dimensions.width / 2 - INITIAL_STATE.width / 2}
            y={dimensions.height / 2 - INITIAL_STATE.height / 2}
            width={INITIAL_STATE.width}
            height={INITIAL_STATE.height}
            fill={INITIAL_STATE.fill}
            shadowBlur={INITIAL_STATE.shadowBlur}
            onMouseDown={handleRectMouseDown}
          />
          <Rect
            x={50}
            y={50}
            width={INITIAL_STATE.width}
            height={INITIAL_STATE.height}
            fill={INITIAL_STATE.fill}
            shadowBlur={INITIAL_STATE.shadowBlur}
            onMouseDown={handleRectMouseDown}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
