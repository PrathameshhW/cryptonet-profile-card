import React from "react";

const Loader = () => {
  return (
    <div role="status">
      <div className="h-8 w-8 animate-spin rounded-full border-r-4 border-pink-500 "></div>
    </div>
  );
};

export default Loader;
