import React, {MouseEventHandler} from "react";
import "./styles.sass";

type MobileButtonType = {
  active: MouseEventHandler<HTMLButtonElement>
  isActive: boolean
}

export default function MobileButton({active, isActive}: MobileButtonType) {
  return (
    <button className={"menu btn1 " + (isActive ? 'open' : '')} data-menu="1" onClick={active}>
      <div className="icon-left"></div>
      <div className="icon-right"></div>
    </button>
  );
}
