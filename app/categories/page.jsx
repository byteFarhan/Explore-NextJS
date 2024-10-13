import React from "react";
export const metadata = {
  title: "Categories",
};

const CategoriesPage = () => {
  return (
    <div>
      <h1 className="my-4 text-3xl font-semibold">This is categories page!</h1>
      <p>In this page i have applied Next.JS catch all segment concept.</p>
      <p className="my-2">{`You can try! Add dynamic routes after "/categories" route as many as you can.`}</p>
    </div>
  );
};

export default CategoriesPage;
