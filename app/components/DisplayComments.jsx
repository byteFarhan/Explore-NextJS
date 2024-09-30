import React from "react";
import DisplayComment from "./DisplayComment";

const DisplayComments = async ({ commentsPromiss }) => {
  const comments = await commentsPromiss;
  return (
    <div>
      {comments.map((comment) => (
        <DisplayComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default DisplayComments;
