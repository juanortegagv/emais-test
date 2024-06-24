import "./App.css";
import React, { useState } from "react";
import { CodeDisplay } from "./components/CodeDisplay";
import { ExplanationDisplay } from "./components/ExplanationDisplay";
import {
  ProblemCodes,
  SolutionCodes,
  Explanations,
  tests,
} from "./constants/enums";

const App: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  const handleButtonClick = (test: string) => {
    setSelectedTest(test);
  };

  return (
    <div className="container">
      <h1>EMAIS TEST</h1>
      <div>
        {tests.map((test) => (
          <button key={test.id} onClick={() => handleButtonClick(test.id)}>
            {test.name}
          </button>
        ))}
      </div>
      {selectedTest && (
        <>
          <CodeDisplay
            title={selectedTest}
            problemCode={
              ProblemCodes[selectedTest as keyof typeof ProblemCodes]
            }
            solutionCode={
              SolutionCodes[selectedTest as keyof typeof SolutionCodes]
            }
          />
          <ExplanationDisplay
            title={`${selectedTest} Explanation`}
            explanation={
              Explanations[selectedTest as keyof typeof Explanations]
            }
          />
        </>
      )}
    </div>
  );
};

export default App;
