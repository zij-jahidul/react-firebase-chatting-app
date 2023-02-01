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
const FriendRequest = () => {
  let db = getDatabase();
  let auth = getAuth();
  let [friendrequest, setFriendrequest] = useState([]);
  useEffect(() => {
    const usersRef = ref(db, "friendrequest/");
    onValue(usersRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        console.log(item.val());
        if (item.val().receiverid === auth.currentUser.uid) {
          arr.push({ ...item.val(), id: item.key });
        }
      });
      setFriendrequest(arr);
    });
  }, []);

  let handleAcceptFriendRequest = (item) => {
    set(push(ref(db, "friends")), {
      id: item.id,
      sendername: item.sendername,
      senderid: item.senderid,
      receiverid: item.receiverid,
      receivername: item.receivername,
      date: `${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}`,
    }).then(() => {
      remove(ref(db, "friendrequest/" + item.id));
    });
  };

  return (
    <div className="shadow-lg shadow-black-500/50 p-5 h-[435px] overflow-y-auto scrollbar-hide rounded-3xl mt-5">
      <div className="flex justify-between">
        <h3 className="font-nuncio font-semibold text-xl">Friend Request</h3>

        <span>
          <Link to="#">
            <BiDotsVerticalRounded className="font-nuncio font-semibold text-[28px] cursor-pointer text-primary" />
          </Link>
        </span>
      </div>

      {friendrequest.map((item) => (
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
              <h3 className="font-nuncio font-bold text-lg">
                {item.sendername}
              </h3>
              <p className="font-nuncio font-normal text-sm text-[#4D4D4D]">
                example@gmail.com
              </p>
            </div>
          </div>

          <div>
            <button
              onClick={() => handleAcceptFriendRequest(item)}
              className="font-nuncio font-bold text-md text-white bg-primary p-1.5 rounded"
            >
              Accept
            </button>
          </div>
        </div>
      ))}

      {friendrequest.length === 0 && (
        <h2 className="text-red-500 flex justify-center mt-10 font-nuncio font-bold text-2xl">
          No Friend Request Here
        </h2>
      )}
    </div>
  );
};

export default FriendRequest;
