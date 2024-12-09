// Import necessary libraries and assets
import { useState, useRef } from "react";
import { logo } from "../assets/Images";
import { useNavigate } from "react-router-dom";

const OtpLayout = () => {
  // State to store the 6-digit OTP entered by the user
  const [otp, setOtp] = useState(new Array(6).fill(""));

  // useRef to manage references for input fields to control focus
  const nextref = useRef([]);

  // useNavigate for programmatic navigation
  const navigate = useNavigate();

  /**
   * Handle input change in the OTP fields
   * - Validates that only numeric values are accepted
   * - Updates the OTP state
   * - Moves the focus to the next field automatically
   */
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (isNaN(value)) return; // Ignore non-numeric inputs

    // Update the OTP state with the new value
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Automatically focus the next field if value is entered
    if (value && nextref.current[index + 1]) {
      nextref.current[index + 1].focus();
    }
  };

  /**
   * Handle keydown events in the OTP fields
   * - Moves the focus to the previous field on backspace
   * - Only when the current field is empty
   */
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index]) {
      if (nextref.current[index - 1]) {
        nextref.current[index - 1].focus();
      }
    }
  };

  /**
   * Handle the "Verify" button click
   * - Checks if all OTP fields are filled
   * - If valid, navigate to the next step; otherwise, show an alert
   */
  const handelClick = () => {
    if (otp.every((digit) => digit !== "")) {
      navigate("/SteeperLayout"); // Navigate to the next layout
    } else {
      alert("Please enter the OTP."); // Show an alert if OTP is incomplete
    }
  };

  return (
    <div className="flex-[0.6] bg-white p-10 pt-14 flex flex-col">
      {/* Logo */}
      <img src={logo} width={180} alt="Logo" className="mb-20" />

      {/* Header */}
      <h2 className="text-2xl font-bold mb-2 text-black">Verify your Email</h2>
      <p className="text-gray-500 mb-6 text-sm text-left">
        Please enter the 6-digit code we just sent to g*******@xyz.com
      </p>

      {/* OTP Input Fields */}
      <div className="flex items-center space-x-6 mb-6">
        {otp.map((data, index) => (
          <div key={index} className="relative">
            <input
              ref={(e) => (nextref.current[index] = e)} // Assign reference to each input
              type="text"
              maxLength="1" // Limit input to a single character
              value={data}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl focus:outline-none focus:ring focus:ring-red-500"
            />
            {/* Add a "-" symbol after the third OTP field */}
            {index === 2 && (
              <span className="absolute top-1/2 -right-5 transform -translate-y-1/4 text-black text-4xl font-bold">
                &#175;
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Verify Button */}
      <button
        onClick={handelClick}
        className="w-[82%] bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 active:bg-red-500"
      >
        Verify
      </button>

      {/* Timer and Resend Link */}
      <p className="text-gray-500 text-[13px] mt-4">
        Wait 1:39 seconds before requesting a new code.{" "}
        <a href="#" className="text-blue-500 underline">
          Resend Code
        </a>
      </p>

      {/* Footer */}
      <footer className="text-gray-400 text-xs mt-auto">
        By continuing, you’re agreeing to Nobody’s{" "}
        <span className="text-blue-500">
          <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a>
        </span>
        <div className="mt-1 text-center mr-24">
          and
          <a href="#" className="text-blue-500">
            Cookie Policy
          </a>
          .
        </div>
      </footer>
    </div>
  );
};

export default OtpLayout;
