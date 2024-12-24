import Konva from "konva";
import React, { useState, useEffect } from "react";
import { Layer, Stage } from "react-konva";
import TreeComponent from "./TreeComponent";
import { INITIAL_STAGE_STATE } from "../config/EXAMPLE_STAGE_STATE";
import AddTreeComponent from "./AddTreeComponent";

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

  return (
    <div>
      <Stage
        width={dimensions.width}
        height={dimensions.height}
        draggable
        onDragMove={handleDragMove}
        style={{ cursor: "move" }}
      >
        <Layer x={layerPosition.x} y={layerPosition.y}>
          {INITIAL_STAGE_STATE.map((component) => (
            <TreeComponent key={component.id} item={component.item} />
          ))}
          <AddTreeComponent item={{ x: 1000, y: 250 }} />
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
