import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { COMMENTS_DATA } from "../utilis/commentsData";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Comments = ({ data }) => {
  const [showReply, setShowReply] = useState(false);

  return (
    <div className="flex my-4 items-start bg-gray-100 p-2">
      <span className="text-4xl">
        <FaUserCircle />
      </span>
      <div>
        <div className="mx-3">
          <h1 className="font-bold">{data.name}</h1>
          <p>{data.comment}</p>
          {data.replies.length > 0 && (
            <p
              onClick={() => setShowReply(!showReply)}
              className="cursor-pointer text-blue-600 flex items-center"
            >
              <span className="mx-1"> Reply ({data.replies.length})</span>
              {showReply ? <FaCaretDown /> : <FaCaretUp />}
            </p>
          )}
        </div>

        {/* Render replies only when showReply is true */}
        {showReply && data.replies.length > 0 && (
          <div className="ml-10 w-full">
            <CommentList commentDataList={data.replies} />
          </div>
        )}
      </div>
    </div>
  );
};

// Recursive Component for Nested Comments
const CommentList = ({ commentDataList }) => {
  return commentDataList.map((comment, i) => (
    <div key={i} className="border-l-2">
      <Comments data={comment} />
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="mt-5 mb-20">
      <h1 className="font-bold text-xl">
        <span className="mr-2">{COMMENTS_DATA.length}</span>Comments
      </h1>
      <CommentList commentDataList={COMMENTS_DATA} />
    </div>
  );
};

export default CommentsContainer;
