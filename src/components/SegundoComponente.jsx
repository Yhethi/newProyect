import React from "react";

export const SegundoComponente = () => {
  return (
    <div className="flex w-[100%] gap-4 p-4">
      <div className="bg-[#ffffffaa] hover:bg-[#ffffffdd] cursor-pointer duration-200 w-[100%] grid place-content-center h-[300px] rounded-md">
        <h1 className="">Banner izquierdo</h1>
      </div>
      <div className="bg-[#ffffffaa] hover:bg-[#ffffffdd] cursor-pointer duration-200 w-[100%] grid place-content-center h-[300px] rounded-md">
        <h1 className="">Banner derecho</h1>
      </div>
    </div>
  );
};
