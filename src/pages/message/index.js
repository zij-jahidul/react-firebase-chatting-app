import React from "react";
import Sidebar from "../../components/Sidebar";

const Message = () => {
  return (
    <div className="flex">
      <div className="max-w-[186px]">
        <Sidebar active="message" />
      </div>
      <div className="max-w-[427px]">
        <h2>Message Page</h2>
      </div>
      <div className="max-w-[344px]">
        <h2>Message Page</h2>
      </div>
      <div className="max-w-[344px]">
        <h2>Message Page</h2>
      </div>
    </div>
  );
};

export default Message;
