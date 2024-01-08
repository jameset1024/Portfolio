import React, {useState} from 'react';
import {ExperienceInterface} from "@app/data/experience";
import "./styles.sass";

type ExperienceData = {
  data: ExperienceInterface[]
}
const ExperienceDrawer = ({data}: ExperienceData) => {
  const [active, setActive] = useState(0);

  return (
    <div className={'experience-drawer'}>
      <div className={'experience-navigation'} role={'tablist'}>
        {data.map((e, i) => {
          return (
            <div
              className={'nav-item' + (active === i ? ' active' : '' )}
              key={`nav-item-${i}`}
              role={'tab'}
              onClick={() => setActive(i)}>
              <div className={'title'}>{e.title}</div>
            </div>
          )
        })}
      </div>
      <div className={'experience-content'}>
        {data.map((e, i) => {
          return (
            <div className={'content-item' + (active === i ? ' active' : '' )} key={`${i}-drawer-item`} role={'tabpanel'}>
              <h4>{e.position}  - <a href={e.link} target={'_blank'}>{e.title}</a></h4>
              <div className={'timeframe'}>{e.date}</div>
              <ul>
                {e.description.map((o, k) => {
                  return <li key={`description-item-${k}`}>{o}</li>
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default ExperienceDrawer;
