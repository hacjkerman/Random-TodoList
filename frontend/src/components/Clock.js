import React from "react";

function Clock(prop) {
  const time = prop.time;
  return (
    <div className="w-120 flex justify-between items-center">
      <div className="flex justify-center items-center rounded-full h-60 w-60 bg-gray-200">
        <img
          src="https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
          alt=""
          className="absolute w-60 h-60 rounded-full z-10"
        />
        <h1 className="z-20 text-white font-serif font-bold text-4xl">
          {time}
        </h1>
      </div>
    </div>
  );
}

export default Clock;
