import React, { useEffect, useState } from "react";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
} from "firebase/database";
import { getAuth } from "firebase/auth";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
const Friends = () => {
  let db = getDatabase();
  let auth = getAuth();
  let [friends, setFriends] = useState([]);
  useEffect(() => {
    const usersRef = ref(db, "friends");
    onValue(usersRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (
          auth.currentUser.uid == item.val().receiverid ||
          auth.currentUser.uid == item.val().senderid
        ) {
          arr.push(item.val());
        }
      });
      setFriends(arr);
    });
  }, []);

  return (
    <div className="shadow-lg shadow-black-500/50 p-5 h-[455px] overflow-y-auto scrollbar-hide rounded-3xl mt-5">
      <div className="flex justify-between">
        <h3 className="font-nunito font-semibold text-xl">
          Friends
        </h3>

        <span>
          <Link to="#">
            <BiDotsVerticalRounded className="font-nunito font-semibold text-[28px] cursor-pointer text-primary" />
          </Link>
        </span>
      </div>

      {friends.map((item) => (
        <div className="flex justify-between items-center border-b border-solid pb-1.5 m-5">
          <div className="flex items-center gap-5">
            <picture>
              <img
                src="images/profileimg.png"
                alt="profile-01"
                className="w-[70px] h-[70px] rounded"
              />
            </picture>
            <div>
              <h3 className="font-nunito font-bold text-lg">
                {auth.currentUser.uid == item.senderid ? (
                  <h1>{item.receivername} </h1>
                ) : (
                  <h1>{item.sendername} </h1>
                )}
              </h3>
              <p className="font-nunito font-normal text-sm text-[#4D4D4D]">Hi Guys, Wassup!</p>
            </div>
          </div>
          <div>
            <span className="font-nunito font-normal text-xs text-[#4D4D4D]">Today, 8:56pm</span>
          </div>
        </div>
      ))}


    </div>
  );
};

export default Friends;
