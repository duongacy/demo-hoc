import React, { Fragment } from "react";

interface IBlockWrapperProps {
  title?: string;
}
const BlockWrapper: React.FC<IBlockWrapperProps> = ({ children, title }) => {
  return (
    <div className="row p-2 m-2 border">
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default BlockWrapper;
