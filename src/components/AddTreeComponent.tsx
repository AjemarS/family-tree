import React from "react";
import "./TreeComponent.css";
import { Html } from "react-konva-utils";

interface AddTreeComponentProps {
  item: {
    x: number;
    y: number;
  };
  handleClick: (isPopupOpen: boolean) => void;
}

const AddTreeComponent: React.FC<AddTreeComponentProps> = ({ item, handleClick }) => {
  return (
    <Html>
      <div
        className="add-tree-component"
        onMouseDown={(e) => e.preventDefault()}
        style={{ position: "absolute", left: item.x, top: item.y }}
        onClick={(isPopupOpen) => handleClick(!isPopupOpen)}
      >
        <span className="add-tree-component__btn">+</span>
        <span className="add-tree-component__text">Add ancestor</span>
      </div>
    </Html>
  );
};

export default AddTreeComponent;
