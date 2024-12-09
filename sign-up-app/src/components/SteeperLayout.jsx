// Import necessary components and constants
import { useRef, useState } from "react";
import { registration_steps } from "../Constants/Index";
import BusinessForm from "../Sections/BusinessForm";

const SteeperLayout = () => {
  // State to track the current step in the process
  const [currentStep, setCurrentStep] = useState(2);
  // State to track whether the process is complete
  const [isComplete, setIsComplete] = useState(false);
  // Reference for each step to handle focus or other DOM manipulations
  const stepRef = useRef([]);

  // Function to handle moving to the next step
  const handleNextStep = () => {
    // If not on the last step, increase the current step number
    if (currentStep < registration_steps.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsComplete(true); // Mark as complete when reaching the final step
    }
  };

  // Function to handle moving to the previous step
  const handlePrevStep = () => {
    // If not at the first step and not complete, go back to the previous step
    if (currentStep > 1 && !isComplete) {
      setCurrentStep((curr) => curr - 1);
    }
  };

  // Function to calculate the progress bar width based on the current step
  const calculateProgressBarWidth = () =>
    ((currentStep - 1) / (registration_steps.length - 1)) * 100;

  // Function to determine the step status (active, completed, or pending)
  const getStepStatus = (index) => {
    // Completed or current step
    if (currentStep > index + 1 || isComplete) return "bg-green-500 ";
    // Active step (currently focused)
    if (currentStep === index + 1) return "bg-white border-4 border-green-500";
    // Pending step
    return "bg-white border-4 border-gray-300";
  };

  // Component to render the content of the active step
  const ActiveComponent = () => {
    const activeStep = registration_steps[currentStep - 1];
    return activeStep ? (
      <div className="mt-12">
        {currentStep === 2 ? <BusinessForm /> : activeStep.detail}
        {/* If current step is 2, show BusinessForm; otherwise, show other step content */}
      </div>
    ) : null;
  };

  // If there are no steps, return null (do nothing)
  if (!registration_steps.length) return null;

  return (
    <div className="w-[60%] mx-auto">
      <div className="relative flex items-center justify-between mb-5 mt-3">
        {/* Progress Bar */}
        <div className="absolute top-1/4 left-0 transform -translate-y-1/4 w-full h-1 bg-gray-200">
          <div
            className="h-full bg-green-500 transition-all ease-in-out duration-300"
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>

        {/* Loop through the registration steps and render each step */}
        {registration_steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (stepRef.current[index] = el)} // Store references to each step element
            className="relative z-10 flex flex-col items-center"
          >
            {/* Circle representing step */}
            <div
              className={`w-6 h-6 rounded-full text-white flex justify-evenly items-center ${getStepStatus(
                index
              )}`}
            >
              {currentStep > index + 1 || isComplete ? (
                <span>&#10003;</span> // Show checkmark if step is completed
              ) : (
                ""
              )}
            </div>
            {/* Step name */}
            <div className="text-xs mt-2">{step.name}</div>
          </div>
        ))}
      </div>

      {/* Render the content of the active step */}
      <ActiveComponent />

      {/* Navigation buttons for going through steps */}
      {!isComplete && (
        <div className="grid-flow-row space-x-[750px] mb-8 mt-5">
          {/* Button to go to the previous step */}
          <button
            onClick={handlePrevStep}
            disabled={currentStep === 1}
            className={`py-2 px-4 border border-black rounded-lg text-xs text-black ${
              currentStep === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100 active:bg-white"
            }`}
          >
            Previous
          </button>

          {/* Button to go to the next step */}
          <button
            onClick={handleNextStep}
            className="py-2 px-6 ml-5 rounded-lg text-xs text-white bg-red-500 hover:bg-red-600 active:bg-red-500"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default SteeperLayout;
