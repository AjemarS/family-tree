import React from "react";
import "./TreeComponent.css";
import { Html } from "react-konva-utils";

interface AddTreeComponentProps {
  item: {
    x: number;
    y: number;
  };
}

const AddTreeComponent: React.FC<AddTreeComponentProps> = ({ item }) => {
  return (
    <Html>
      <div
        className="add-tree-component"
        onMouseDown={(e) => e.preventDefault()}
        style={{ position: "absolute", left: item.x, top: item.y }}
      >
        <span className="add-tree-component__btn">+</span>
        <span className="add-tree-component__text">Add ancestor</span>
      </div>
    </Html>
  );
};

export default AddTreeComponent;
