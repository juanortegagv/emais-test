import React from "react";
import "./ExplanationDisplay.css";

interface ExplanationDisplayProps {
  title: string;
  explanation: string;
}

export const ExplanationDisplay: React.FC<ExplanationDisplayProps> = ({
  title,
  explanation,
}) => {
  return (
    <div className="explanation-display">
      <h2>{title}</h2>
      <div className="explanation-section">
        <pre>{explanation}</pre>
      </div>
    </div>
  );
};
