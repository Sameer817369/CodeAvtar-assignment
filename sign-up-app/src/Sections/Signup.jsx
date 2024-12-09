// Import necessary components and constants
import Cardlayout from "../components/Cardlayout";
import OtpLayout from "../components/OtpLayout";
import { cards } from "../Constants/Index";

const Signup = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen py-10 pr-20">
        {/* Cards Section */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Background gradient with card layout */}
          <div className="flex-1 bg-gradient-to-b from-gray-700 via-purple-700 to-orange-500 text-white px-16 flex flex-col items-center justify-center">
            {/* Back button */}
            <div className="self-start mb-4">
              <button className="text-gray-300 mb-20">← Back</button>
            </div>

            {/* Title for the card layout */}
            <h1 className="text-2xl font-semibold text-gray-300 mb-10 text-center">
              Layout Cards
            </h1>

            {/* Display a grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Map over cards array to dynamically render Cardlayout components */}
              {cards.map((card) => (
                <Cardlayout key={card.name} {...card} />
              ))}
            </div>
          </div>
        </div>

        {/* OTP Form Section */}
        {<OtpLayout />}
      </div>
    </>
  );
};

export default Signup;
