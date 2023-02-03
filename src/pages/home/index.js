import React, { useEffect, useState } from "react";
import BlockUser from "../../components/BlockUser";
import FriendRequest from "../../components/FriendRequest";
import Friends from "../../components/Friends";
import Group from "../../components/Group";
import MyGroups from "../../components/MyGroups";
import Search from "../../components/Search";
import Sidebar from "../../components/Sidebar";
import UserList from "../../components/UserList";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  let navigate = useNavigate();
  let [verify, setVerify] = useState(false);
  const userData = useSelector((state) => state.userLoginInfo.userInfo);

  useEffect(() => {
    if (userData === null) {
      navigate("/login");
    } else if (userData.emailVerified) {
      setVerify(true);
    }
  }, []);

  return (
    userData !== null && (
      <>
        {verify ? (
          <div className="xl:flex justify-between p-2.5 xl:p-0">
            <div className="xl:w-[186px]">
              <Sidebar active="home" />
            </div>
            <div className="xl:w-[540px]">
              <Search />
              <Group />
              <FriendRequest />
            </div>
            <div className="xl:w-[540px]">
              <Friends />
              <MyGroups />
            </div>
            <div className="xl:w-[540px]">
              <UserList />
              <BlockUser />
            </div>
          </div>
        ) : (
          <div className="text-center mt-10">
            <span className="bg-primary rounded p-5 text-5xl font-nuncio font-bold text-white inline-block">
              Please Verify Your Email
            </span>
          </div>
        )}
      </>
    )
  );
};

export default Home;
