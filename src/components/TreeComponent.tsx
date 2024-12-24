import React from "react";
import { ILeaf } from "../types";
import "./TreeComponent.css";
import { Html } from "react-konva-utils";

interface TreeComponentProps {
  item: ILeaf;
}

const TreeComponent: React.FC<TreeComponentProps> = ({ item }) => {
  return (
    <Html>
      <div
        className="tree-component"
        onMouseDown={(e) => e.preventDefault()}
        style={{ position: "absolute", left: item.x, top: item.y }}
      >
        <img src="" alt="" />
        <span className="tree-component__text">{item.text}</span>
      </div>
    </Html>
  );
};

export default TreeComponent;
