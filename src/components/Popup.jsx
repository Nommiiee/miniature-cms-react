import React from "react";
import { useState } from "react";

export default function Popup(props) {
  const { data } = props;

  return (
    <>
      <div
        className={`w-96 flex items-center justify-center p-2 absolute top-0 transform transition-all  ${
          data.err ? "bg-red-200 text-red-500" : "bg-green-200 text-green-500"
        }}`}
      >
        <div className="font-medium text-lg">{data.message}</div>
      </div>
    </>
  );
}
