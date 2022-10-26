import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { getAuth } from "firebase/auth";

import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
const UserList = () => {
  const db = getDatabase();
  let auth = getAuth();

  let [userslist, setUserslist] = useState([]);
  let [friend, setFriend] = useState([]);
  let [friendlist, setFriendlist] = useState([]);

  useEffect(() => {
    const usersRef = ref(db, "users/");
    onValue(usersRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (item.key !== auth.currentUser.uid) {
          arr.push({ ...item.val(), id: item.key });
        }
      });
      setUserslist(arr);
    });
  }, []);

  let handleFriendRequest = (item) => {
    set(push(ref(db, "friendrequest")), {
      sendername: auth.currentUser.displayName,
      senderid: auth.currentUser.uid,
      receiverid: item.id,
      receivername: item.name,
    });
  };

  useEffect(() => {
    const friendRef = ref(db, "friendrequest/");
    onValue(friendRef, (snapshot) => {
      let friendArr = [];
      snapshot.forEach((item) => {
        friendArr.push(item.val().receiverid + item.val().senderid);
      });
      setFriend(friendArr);
    });
  }, []);


  useEffect(() => {
    // let friendRequestArr2 = []
    const friendRef = ref(db, "friends");
    onValue(friendRef, (snapshot) => {
      let friendArr = [];
      snapshot.forEach((item) => {
        friendArr.push(item.val().receiverid + item.val().senderid);
      });
      setFriendlist(friendArr);
    });
  }, []);


  return (
    <div className="shadow-lg shadow-black-500/50 p-5 h-[455px] overflow-y-auto scrollbar-hide rounded-3xl mt-5">
      <div className="flex justify-between">
        <h3 className="font-nunito font-semibold text-xl">
          Users
        </h3>

        <span>
          <Link to="#">
            <BiDotsVerticalRounded className="font-nunito font-semibold text-[28px] text-primary cursor-pointer" />
          </Link>
        </span>
      </div>

      {userslist.map((item) => (
        <div className="flex justify-between items-center border-b border-solid pb-1.5 m-5">
          <div className="flex items-center gap-5">
            <picture>
              <img
                src={item.photoURL}
                alt="profile-01"
                className="w-[70px] h-[70px] rounded-full"
              />
            </picture>
            <div>
              <h3 className="font-nunito font-bold text-lg">{item.name}</h3>
              <p className="font-nunito font-normal text-sm text-[#4D4D4D]">{item.email}</p>
            </div>
          </div>
          <div>

            {friendlist.includes(item.id + auth.currentUser.uid) ||
              friendlist.includes(auth.currentUser.uid + item.id) ? (
              <button className="font-nunito font-bold text-md text-white bg-primary px-2.5 py-1.5 rounded">
                Friend
              </button>
            ) : friend.includes(item.id + auth.currentUser.uid) ||
              friend.includes(auth.currentUser.uid + item.id) ? (
              <button className="font-nunito font-bold text-md text-white bg-primary px-2.5 py-1.5 rounded">
                Pending
              </button>
            ) : (
              <button
                onClick={() => handleFriendRequest(item)}
                className="font-nunito font-bold text-md text-white bg-primary px-2.5 py-1.5 rounded"
              >
                Send Request
              </button>
            )}


          </div>
        </div>
      ))}

    </div>
  );
};

export default UserList;
