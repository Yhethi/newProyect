import React from "react";

export const PrimerComponente = (data) => {
  const valor = data.parentToChild;
  console.log(data.parentToChild);
  return (
    <h1 className="text-3xl p-4">
      <li className="list-none flex flex-row gap-2 justify-end">
        <u className="w-[300px] bg-[#fff] rounded-lg text-center no-underline font-serif">
          <a href="#" className="">
            {valor}
          </a>
        </u>
        <u className="w-[300px] bg-[#fff] rounded-lg text-center no-underline font-serif">
          <a href="#" className="">
            dos
          </a>
        </u>
        <u className="w-[300px] bg-[#fff] rounded-lg text-center no-underline font-serif">
          <a href="#" className="">
            tres
          </a>
        </u>
        <u className="w-[300px] bg-[#fff] rounded-lg text-center no-underline font-serif">
          <a href="#" className="">
            cuatro
          </a>
        </u>
      </li>
    </h1>
  );
};
