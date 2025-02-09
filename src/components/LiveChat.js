import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addLiveMessages } from "../redux/liveChatSlice";
import generateMessage from "../utilis/helper";
import { LuSendHorizontal } from "react-icons/lu";

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveMessages = useSelector((state) => state.liveChat?.liveMessages); // Get messages from Redux store
  // console.log("liveMessages", liveMessages);

  const [sendMessage, setSendMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      const newMessage = generateMessage(); // Generate new message
      // console.log(newMessage);
      dispatch(addLiveMessages(newMessage)); // Add to Redux store
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []); // Empty dependency array to run only once

  const handleSendmessage = (e) => {
    e.preventDefault();
    dispatch(
      addLiveMessages({
        user: "suganya",
        message: sendMessage,
      })
    );
    setSendMessage("");
  };

  return (
    <div className="w-4/12 ml-10">
      <h1 className="font-medium pb-2">Live Chat Messages</h1>
      <div className="flex flex-col-reverse h-96 w-80 p-2 border border-black overflow-y-scroll">
        {liveMessages?.map((message, i) => {
          return (
            <div key={i} className="chat-message flex my-2">
              <span className="text-2xl">
                <FaUserCircle />
              </span>
              <h1 className="mx-4 font-bold">{message.user}</h1>
              <p>{message.message}</p>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSendmessage} className="flex my-4">
        <input
          onChange={(e) => setSendMessage(e.target.value)}
          value={sendMessage}
          className="pb-2 w-72 border-b-2 outline-none mr-4"
          type="text"
          placeholder="Type message..."
        />
        <button className="hover:opacity-60">
          <LuSendHorizontal />
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
