import React from "react";
import "./CodeDisplay.css";

interface CodeDisplayProps {
  title: string;
  problemCode: string;
  solutionCode: string;
}

export const CodeDisplay: React.FC<CodeDisplayProps> = ({
  title,
  problemCode,
  solutionCode,
}) => {
  return (
    <div className="code-display">
      <h2>{title}</h2>
      <div className="code-section">
        <h3>Problem</h3>
        <pre>{problemCode}</pre>
      </div>
      <div className="code-section">
        <h3>Solution</h3>
        <pre>{solutionCode}</pre>
      </div>
    </div>
  );
};
