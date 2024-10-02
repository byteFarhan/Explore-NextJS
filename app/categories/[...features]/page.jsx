import React from "react";

const page = ({ params }) => {
  // console.log(params);
  //In the case of catch all segment (params) will return a object which contain an array named as dynamic folder's name.(in this case the array will named as features because the folder name is [...features]). And all dynamic routes will available as array element. And we can render conditional contants based on different routes.
  const { features } = params;
  // console.log(features);

  if (features.length === 3) {
    return (
      <div>
        <h1 className="my-4 text-3xl font-semibold">
          This is {features[2]} route!
        </h1>
      </div>
    );
  } else if (features.length === 2) {
    return (
      <div>
        <h1 className="my-4 text-3xl font-semibold">
          This is {features[1]} route!
        </h1>
      </div>
    );
    // } else if (features.length > 2) {
  } else {
    return (
      <div>
        <h1 className="my-4 text-3xl font-semibold">
          This is {features[features.length - 1]} route!
        </h1>
      </div>
    );
  }
  // } else if (features.length === 1) {
  //   return (
  //     <div>
  //       <h1 className="my-4 text-3xl font-semibold">
  //         This is {features[0]} route!
  //       </h1>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1 className="my-4 text-3xl font-semibold">
        This is categories features page!
      </h1>
    </div>
  );
};

export default page;
