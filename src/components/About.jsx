import React from "react";
import { useParams } from "react-router-dom";
import { users } from "../data";

export default function About() {
  const Params = useParams();
  const newData = users.find((el) => el.id === Number(Params.id));
  return (
    <div>
      <h1>{newData.address}</h1>
      <h1>{newData.lastname}</h1>
      <h1>{newData.name}</h1>
    </div>
  );
}
