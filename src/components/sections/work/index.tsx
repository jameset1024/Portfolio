import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {WorkData} from "@app/data/work";
import './styles.sass';

const WorkPage = () => {
  return (
    <section className={'workSection'} id={'work'}>
      <div className={'section-header-wrap'}>
        <div className={'section-header-text'}>Work</div>
      </div>

      <div className={'workContainer'}>
        <div className={'sectionDescription'}>
          <p>Over the years I've worked on a large number of projects. Most were backend systems not accessible to the public so displaying those are challenging. Here are some of the more recent projects that I've worked or are working on.</p>
        </div>

        <div className={'workWrapper'}>
          { WorkData.map((e, i) => {
            return (
              <div className={'workItem ' + ((i % 2) === 0 ? 'right' : 'left')} key={`workitem-${i}`}>
                <div className={'workItemInner'}>
                  <div className={'workImage'}>
                    <a href={e.link} target={'_blank'}>
                      <img src={e.image} alt={e.title} />
                    </a>
                  </div>

                  <div className={'workInfo'}>
                    <div className={'workInfoWrapper'}>
                      <h6>{e.type}</h6>
                      <h2>{e.title}</h2>

                      <div className={'description'}>{e.description}</div>

                      <ul>
                        {e.tags.map((e,i) => <li key={`tags-${i}`}>{e}</li>)}
                      </ul>

                      <div className={'meta'}>
                        <a href={e.link} target={'_blank'}>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} fixedWidth />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default WorkPage;
