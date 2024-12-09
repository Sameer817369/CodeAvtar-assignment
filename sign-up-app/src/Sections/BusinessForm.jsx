// Import necessary components and constants
import Dragdrop from "../components/Drag-drop";
import FormLayout from "../components/FormLayout";
import { formFields } from "../Constants/Index";

const BusinessForm = () => {
  return (
    // Main container for the page layout with centered content
    <div className="min-h-screen flex flex-col items-center bg-white p-6">
      {/* Header Section */}
      <div className="max-w-4xl w-full p-4 rounded-lg py-20">
        {/* Page title */}
        <h1 className="text-2xl font-bold text-black mb-2">
          Tell us more about your business
        </h1>

        {/* Introductory text */}
        <p className="text-gray-500 mb-8 text-sm">
          Your info is like the Wi-Fi password—totally crucial for keeping
          things running, impressing the money folks, and making sure you get
          top-notch service without any buffering!
        </p>

        {/* Form Section */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dynamically rendering form fields from formFields array */}
          {formFields.map((field, index) => (
            <FormLayout key={index} field={field} />
          ))}
        </form>

        {/* File Upload Section */}
        {/* Drag-and-drop for uploading certification */}
        <Dragdrop label="Certification of Incorporation" required={true} />

        {/* Drag-and-drop for uploading company logo */}
        <Dragdrop label="Company Logo" required={true} />
      </div>
    </div>
  );
};

export default BusinessForm;
