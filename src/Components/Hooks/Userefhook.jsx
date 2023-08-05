import React, { useRef } from "react";

export const Userefhook = () => {
  const focupoint = useRef(null);
  console.log(focupoint);
  const HandlerFocuschainge = () => {
    focupoint.current.value = "this is Texarea write leeter wise info";
    focupoint.current.focus();
  };

  return (
    <>
      <label htmlFor="">Username</label>

      <textarea ref={focupoint} id="" cols="30" rows="10"></textarea>
      <button onClick={HandlerFocuschainge}>ACTION</button>
    </>
  );
};
