import React from "react";

const DisplayComment = ({ comment }) => {
  return (
    <div className="my-3 space-y-1">
      <p className="text-sm font-medium text-blue-700 lowercase">
        {comment.email}
      </p>
      <p className="text-gray-800">{comment.body}</p>
    </div>
  );
};

export default DisplayComment;
