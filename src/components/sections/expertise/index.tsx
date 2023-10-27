import React from "react";
import './styles.sass';
import { Skills } from "@app/data/skills";

export default function Expertise() {
  return (
    <section className={'expertise-section'}>
      <div className={'expertise-main-wrapper'}>
        <div className={'wrapper'}>
          <div className={'expertise-meta'}>
            <h2>Technologies and Frameworks</h2>
            <p>Here are some the things that I've had the change to work with over the years</p>
          </div>

          <div className={'expertise-wrapper'}>
            <ul>
              {Skills.map((e,i) => {
                return <li key={`technologies-${i}`}>{e}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
