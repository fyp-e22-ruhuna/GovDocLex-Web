import React from "react";

import Sidebar from "../components/ChatSideBar";

const ChatbotPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex justify-end ">
      <div className="bg-white w-full text-black flex items-center justify-center text-xl">chat</div>
      <Sidebar />
    </div>
  );
};

export default ChatbotPage;
