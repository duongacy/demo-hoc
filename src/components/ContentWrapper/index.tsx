import React from "react";

interface IContentWrapperProps {
  title?: string;
}
const ContentWrapper: React.FC<IContentWrapperProps> = ({
  children,
  title,
}) => {
  return (
    <div className="container py-5">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default ContentWrapper;
