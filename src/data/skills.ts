import React from "react";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faServer, faDesktop, faCloud } from "@fortawesome/free-solid-svg-icons";


type SkillType = {
  title: string;
  description: string;
  icon: IconDefinition;
  technologies: Array<string>
}

export const Skills: SkillType[] = [
  {
    title: 'Front-End<br />Development',
    description: 'I started my career with FE development and I continue to exercise those skills with come of these technologies: ',
    icon: faDesktop,
    technologies: [
      'React', 'Gatsby', 'Sass', 'JS', 'Less', 'Vue', 'NextJs'
    ]
  },
  {
    title: 'Back-End /<br />Software Engineering',
    description: 'Serverside engineering has been a great passion of mine in order to develop APIs and functional login using tools such as:',
    icon: faServer,
    technologies: [
      'PHP','Laravel','Node','NestJs','Python','Typescript'
    ]
  },
  {
    title: 'DevOps<br />Engineering',
    description: 'Skilled in organizing, implementing, and deploying architecture solutions using a variety of tools such as:',
    icon: faCloud,
    technologies: [
      'AWS','AWS CLI','Serverless','Terraform','Ansible','Docker'
    ]
  }
];
