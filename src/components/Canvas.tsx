import Konva from "konva";
import React, { useState, useEffect } from "react";
import { Layer, Stage } from "react-konva";
import TreeComponent from "./TreeComponent";
import AddTreeComponent from "./AddTreeComponent";
import Popup from "./Popup/Popup";
import AncestorForm from "./AncestorForm/AncestorForm";
import { StageState } from "../types";

const Canvas: React.FC = () => {
  const [ancestors, setAncestors] = useState<StageState["items"]>([]);

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [layerPosition, setLayerPosition] = useState({ x: 0, y: 0 });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
      <Popup
        onClose={() => setIsPopupOpen(false)}
        isOpen={isPopupOpen}
        content={
          <AncestorForm
            handleSubmit={(formData) => {
              setAncestors((ancestors) => [
                ...ancestors,
                {
                  id: 1,
                  item: {
                    x: 0,
                    y: 0,
                    text: formData.name,
                    Meta: {
                      name: formData.name,
                      gender: formData.gender,
                      dateOfBirth: formData.dateOfBirth,
                      description: formData.description,
                      image: formData.image ? URL.createObjectURL(formData.image) : null,
                    },
                  },
                },
              ]);
              console.log(ancestors);
              setIsPopupOpen(false);
            }}
          />
        }
      >
        <Stage
          width={dimensions.width}
          height={dimensions.height}
          draggable
          onDragMove={handleDragMove}
          style={{ cursor: "move", overflow: "hidden" }}
        >
          <Layer x={layerPosition.x} y={layerPosition.y}>
            {ancestors.map((component) => (
              <TreeComponent key={component.id} item={component.item} />
            ))}

            <AddTreeComponent
              item={{ x: 750, y: 250 }}
              handleClick={() => {
                setIsPopupOpen(!isPopupOpen);
              }}
            />
          </Layer>
        </Stage>
      </Popup>
    </div>
  );
};

export default Canvas;
