"use client";

const Button = () => {
  return (
    <button
      onClick={() => console.log("I've clicked the button.")}
      className="px-4 py-2 my-6 text-xl font-medium text-white bg-green-600 rounded"
    >
      Click Me
    </button>
  );
};

export default Button;
