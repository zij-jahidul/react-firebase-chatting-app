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
const BlockUser = () => {
  let db = getDatabase();
  let auth = getAuth();
  let [blockusers, setBlockusers] = useState([]);

  useEffect(() => {
    const usersRef = ref(db, "blockusers");
    onValue(usersRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (item.val().blockbyid == auth.currentUser.uid) {
          arr.push({
            id: item.key,
            block: item.val().block,
            blockid: item.val().blockid,
          });
        } else {
          arr.push({
            id: item.key,
            block: item.val().blockby,
            blockbyid: item.val().blockbyid,
          });
        }
      });
      setBlockusers(arr);
    });
  }, []);

  let handleUnblock = (item) => {
    set(push(ref(db, "friends")), {
      sendername: item.block,
      senderid: item.blockid,
      receiverid: auth.currentUser.uid,
      receivername: auth.currentUser.displayName,
      date: `${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}`,
    }).then(() => {
      remove(ref(db, "blockusers/" + item.id));
    });
  };

  return (
    <div className="shadow-lg shadow-black-500/50 p-5 h-[435px] overflow-y-auto scrollbar-hide rounded-3xl mt-5">
      <div className="flex justify-between">
        <h3 className="font-nunito font-semibold text-xl">Block User</h3>

        <span>
          <Link to="#">
            <BiDotsVerticalRounded className="font-nunito font-semibold text-[28px] cursor-pointer text-primary" />
          </Link>
        </span>
      </div>

      {blockusers.map((item) => (
        <div className="flex justify-between items-center border-b border-solid pb-1 m-5">
          <div className="flex items-center gap-5">
            <picture>
              <img
                src="images/profileimg.png"
                alt="profile-01"
                className="w-[70px] h-[70px] rounded"
              />
            </picture>
            <div>
              <h3 className="font-nunito font-bold text-lg">{item.block}</h3>
              <p className="font-nunito font-normal text-sm text-[#4D4D4D]">
                Hi Guys, Wassup!
              </p>
            </div>
          </div>
          <div>
            {!item.blockbyid && (
              <button
                onClick={() => handleUnblock(item)}
                className="font-nunito font-bold text-md text-white bg-primary p-1.5 rounded"
              >
                Unblock
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlockUser;
