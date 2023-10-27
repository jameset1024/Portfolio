import * as React from "react";
import ExperienceDrawer from "@app/components/interactives/experience_drawer";
import {Experience as Ex} from "@app/data/experience";
import "./styles.sass";

export default function Experience() {
  return (
    <section className={'experience-section'} id={'experience'}>
      <div className={'section-header-wrap'}>
        <div className={'section-header-text'}>
          Experience
        </div>
      </div>

      <div className={'experience-wrap'}>
        <div className={'wrapper'}>
          <p>Over the years I've worked at many companies either directly, as a contractor, or as a freelancer. Each position was enlightening in it's own way allowing me to learn and grow with this industry. These are some of the more recent positions that I held where I was performing daily activities.</p>

          <ExperienceDrawer data={Ex}/>
        </div>
      </div>
    </section>
  )
}
