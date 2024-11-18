import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";

import { TiMessages } from "react-icons/ti";
import Message from "./Message";
import useListernMessages from "../../hooks/useListernMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListernMessages();
  const lastMessageRef = useRef();
  //console.log("Messages: ", messages);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className=" px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef} className="">
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <div className="flex flex-col items-center justify-center p-2">
          <TiMessages className="text-5xl md:text-6xl text-green-500  " />
          <p className="pl-6 text-gray-400">
            Send a message to start a conversation...
          </p>
        </div>
      )}
    </div>
  );
};

export default Messages;
