import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { getAuth } from "firebase/auth";

import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
const UserList = () => {
  const db = getDatabase();
  let auth = getAuth();

  let [userslist, setUserslist] = useState([]);

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
            <button className="font-nunito font-bold text-md text-white bg-primary px-2.5 py-1.5 rounded">
              +
            </button>
          </div>
        </div>
      ))}

    </div>
  );
};

export default UserList;
