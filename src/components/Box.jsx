import React from "react";

const Box = ({
  color,
  special,
  image,
  title,
  p,
  btn,
  cols,
  textColor,
  borderColor,
}) => {
  return (
    <div
      className={`grid ${color} text-${textColor} text-center grid-cols-1 gap-4 mt-6 md:${cols} w-full`}
    >
      <img src={image} alt="image" className={`md:${special}`} />
      <div className="flex flex-col items-center justify-center my-8 px-7">
        <h3 className="text-3xl uppercase md:text-4xl"> {title} </h3>
        <p className="w-3/4 my-10 text-xl"> {p}</p>
        <a
          href="#"
          className={`btn border-[.5px] border-${borderColor}
        `}
        >
          {btn}
        </a>
      </div>
    </div>
  );
};

export default Box;
