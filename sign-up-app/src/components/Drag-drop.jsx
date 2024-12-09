/* eslint-disable react/prop-types */
import { useState } from "react";
import { copy } from "../assets/Images";

const Dragdrop = ({ label, required }) => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Handle drag over event to change styles when dragging
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // Handle drag leave event to reset styles when dragging leaves
  const handleDragLeave = () => {
    setIsDragging(false);
  };

  // Handle drop event and update the file state
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  return (
    <div className="mt-6">
      <label className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={`border-2 border-dashed ${
          isDragging ? "border-gray-700" : "border-gray-200"
        } rounded-lg p-20 mt-2 text-center flex items-center justify-center flex-col`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="bg-gray-200 rounded-full w-14 h-14 flex items-center justify-center mb-4">
          <img src={copy} width={30} height={30} alt="Copy Icon" />
        </div>

        <p className="text-sm text-gray-500">
          <button className="text-black underline cursor-pointer">
            Click to upload
          </button>{" "}
          or drag and drop
        </p>
        <p className="text-sm text-gray-400 pt-1">Maximum file size 50 MB</p>

        {/* Show selected file name */}
        {file && <p className="text-sm text-gray-700 mt-2">{file.name}</p>}
      </div>
    </div>
  );
};

export default Dragdrop;
