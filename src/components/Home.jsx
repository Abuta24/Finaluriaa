import React from "react";
import Memo from "./Memo";
import Reducer from "./Reducer";
import Parent from "./Parent";
import Todo from "./Todo";
import Show from "./Show";
import Greeting from "./Greeting";
import { users } from "../data";
import { Link } from "react-router-dom";
import Useref from "./Useref";
import Timer from "./Timer";
import Posts from "./Posts";

export default function Home() {
  return (
    <div>
      {/* <Greeting name={"rame"}/> */}
      {/* <Show /> */}
      {/* <Todo /> */}
      {/* <Parent /> */}
      {/* <Reducer /> */}
      {/* <Memo /> */}
      {/* {users.map((el) => (
        <div key={el.id}>
            <Link to={`/${el.id}`}>{el.name}</Link>
        </div>
      ))} */}
      {/* <Useref /> */}
      {/* <Timer /> */}
      <Posts />
    </div>
  );
}
