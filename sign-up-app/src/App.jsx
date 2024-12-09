// Import necessary components and constants
import Signup from "./Sections/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SteeperLayout from "./components/SteeperLayout";

function App() {
  return (
    <BrowserRouter>
      {/* Setting up routing for the app */}
      <Routes>
        {/* Define the route for the Signup page */}
        <Route path="/" element={<Signup />} />
        {/* Define the route for the SteeperLayout page */}
        <Route path="/SteeperLayout" element={<SteeperLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
