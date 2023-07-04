import React from "react";
import "./styles.scss";

type MobileButtonType = {
  active: (e) => void
}

export default function MobileButton({active}: MobileButtonType) {
  return (
    <div className="menu btn1" data-menu="1" onClick={active}>
      <div className="icon-left"></div>
      <div className="icon-right"></div>
    </div>
  );
}
