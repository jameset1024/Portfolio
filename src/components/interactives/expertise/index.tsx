import React from "react";
import './styles.scss';
import { Skills } from "@app/data/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Expertise() {
  return (
    <div className={'wrapper expertise-main-wrapper'}>
      <div className={'expertise-meta'}>
        <h2>My Expertise</h2>
        <p>Over the years I have found my skills being more honed while also learning a number of new things. Here are what I think are my notable skills.</p>
      </div>

      <div className={'expertise-wrapper'}>
        {Skills.map((e,i) => {
          return (
            <div key={`expertise-${i}`}>
              <div className={'inner-expertise'}>
                <div className={'icon'}><FontAwesomeIcon icon={e.icon} /></div>
                <h2 dangerouslySetInnerHTML={{__html: e.title}} />

                <div className={'description'}>{e.description}</div>

                <div className={'technologies'}>
                  {e.technologies.map((e,i) => {
                    return <span key={`technologies-${i}`}>{e}</span>
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
