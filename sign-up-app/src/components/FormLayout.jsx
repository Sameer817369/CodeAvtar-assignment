/* eslint-disable react/prop-types */

const FormLayout = ({ field }) => {
  const { label, type, placeholder, required, options } = field;

  // Common label
  const Label = () => (
    <label className="text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
  );

  // Common input
  const InputField = () => (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-gray-300 rounded-lg p-2"
    />
  );

  // Common dropdown
  const DropdownField = () => (
    <select className="border text-gray-400 border-gray-300 rounded-lg p-2 focus:text-black focus:ring-black focus:border-black">
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  // Common textarea
  const TextareaField = () => (
    <textarea
      placeholder={placeholder}
      className="border border-gray-300 rounded-lg p-8 w-full "
    />
  );

  // Conditional rendering based on field type
  switch (type) {
    case "text":
      return (
        <div className="flex flex-col">
          <Label />
          <InputField />
        </div>
      );
    case "number":
      return (
        <div className="flex flex-col">
          <Label />
          <InputField />
        </div>
      );

    case "dropdown":
      return (
        <div className="flex flex-col">
          <Label />
          <DropdownField />
        </div>
      );
    case "textarea":
      return (
        <>
          <div className="flex flex-col">
            <Label />
            <div className="mt-1">
              <TextareaField />
            </div>
          </div>
        </>
      );
    default:
      return null;
  }
};

export default FormLayout;
