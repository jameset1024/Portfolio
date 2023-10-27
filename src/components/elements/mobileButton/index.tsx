import React, {MouseEventHandler} from "react";
import "./styles.sass";

type MobileButtonType = {
  active: MouseEventHandler<HTMLButtonElement>
  btnRef: React.MutableRefObject<HTMLButtonElement|null>
}

export default function MobileButton({active, btnRef}: MobileButtonType) {
  return (
    <button className="menu btn1" data-menu="1" onClick={active} ref={btnRef}>
      <div className="icon-left"></div>
      <div className="icon-right"></div>
    </button>
  );
}
