import React from "react";
import './styles.sass';

export default function Sending () {
  return (
    <div className="sending-container" data-testid={'sending-animation'}>
      <div className="box">
        <div className="border one"></div>
        <div className="border two"></div>
        <div className="border three"></div>
        <div className="border four"></div>

        <div className="line one"></div>
        <div className="line two"></div>
        <div className="line three"></div>
      </div>
    </div>
  );
}
