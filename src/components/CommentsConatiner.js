import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { COMMENTS_DATA } from "../utilis/commentsData";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { data } from "react-router-dom";

const Comments = ({ data, id }) => {
  const [replies, setReplies] = useState([]);
  const [showReply, setShowReply] = useState(false);

  const dispalyData = data?.snippet;

  // console.log(id);

  // console.log("111", replyId);
  useEffect(() => {
    fetchReplies();
  }, []);

  const fetchReplies = async () => {
    try {
      const result = await fetch(
        `https://www.googleapis.com/youtube/v3/comments?part=snippet&parentId=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&maxResults=50`
      );
      const json = await result.json();

      if (json?.items) {
        setReplies(json?.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("second", replies);
  return (
    <div className="flex my-4 items-start bg-gray-100 p-2">
      <span className="text-4xl">
        <FaUserCircle />
      </span>
      <div>
        <div className="mx-3">
          <h1 className="font-bold">{dispalyData?.authorDisplayName}</h1>
          <p>{dispalyData?.textOriginal}</p>
          {replies?.length > 0 && (
            <p
              onClick={() => setShowReply(!showReply)}
              className="cursor-pointer text-blue-600 flex items-center"
            >
              <span className="mx-1"> Reply ({replies?.length})</span>
              {showReply ? <FaCaretDown /> : <FaCaretUp />}
            </p>
          )}
        </div>

        {/* Render replies only when showReply is true */}
        {showReply && replies?.length > 0 && (
          <div className="ml-10 w-full">
            <CommentList commentDataList={replies} />
          </div>
        )}
      </div>
    </div>
  );
};

// Recursive Component for Nested Comments
const CommentList = ({ commentDataList }) => {
  return commentDataList?.map((comment, i) => (
    <div key={i} className="border-l-2">
      <Comments
        data={
          comment.snippet.topLevelComment
            ? comment.snippet.topLevelComment
            : comment
        }
        id={
          comment.snippet?.topLevelComment?.id
            ? comment.snippet?.topLevelComment?.id
            : comment.id
        }
      />
    </div>
  ));
};

const CommentsContainer = ({ comments }) => {
  // console.log("first", comments);
  return (
    <div className=" mb-20">
      <h1 className="font-bold text-xl">
        <span className="mr-2">{comments?.length}</span>Comments
      </h1>
      <CommentList commentDataList={comments} />
    </div>
  );
};

export default CommentsContainer;
