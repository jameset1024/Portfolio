import React from "react";
import "./styles.scss";

type MobileButtonType = {
  active: (e) => void,
  btnRef: React.MutableRefObject<HTMLDivElement|null>
}

export default function MobileButton({active, btnRef}: MobileButtonType) {
  return (
    <div className="menu btn1" data-menu="1" onClick={active} ref={btnRef}>
      <div className="icon-left"></div>
      <div className="icon-right"></div>
    </div>
  );
}
