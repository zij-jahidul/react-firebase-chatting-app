import React from "react";
import Sidebar from "../../components/Sidebar";
import JoinGroupList from "../../components/JoinGroupList";
import Friends from "../../components/Friends";
// import Chat from "../../components/Chat";

const Message = () => {
  return (
    <div className="flex">
      <div className="max-w-[186px]">
        <Sidebar active="message" />
      </div>
      <div className="max-w-[540px]">
        <JoinGroupList />
        <Friends />
      </div>
      <div className="max-w-[1140px]">{/* <Chat /> */}</div>
    </div>
  );
};

export default Message;
