/* eslint-disable react/prop-types */
// Cardlayout component to display card content

const Cardlayout = ({ imgURL, country, title, name, location }) => {
  return (
    // Card container with styling for gradient background, border, and shadow
    <div className="p-4 rounded-lg shadow-lg bg-gradient-to-t from-purple-700/40 via-purple-600/30 to-transparent backdrop-blur-sm border border-purple-500/30">
      {/* Displaying the image with rounded corners */}
      <img src={imgURL} width={50} height={50} className="rounded-md" />

      {/* Country name displayed as the card title */}
      <h2 className="text-lg font-semibold mb-2 flex items-center">
        {country}
      </h2>

      {/* Subtitle or additional description */}
      <p className="-mt-1 text-gray-300 text-sm">{title}</p>

      {/* Footer content displaying additional information */}
      <div className="mt-3 text-gray-300 text-xs leading-5">
        <p>{name}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Cardlayout;
