export type ExperienceInterface = {
  title: string;
  description: Array<string>;
  date: string;
  link: string;
  position: string;
}

export const Experience: ExperienceInterface[] = [
  {
    title: 'Nearby Creative',
    date: '2019 - Present',
    link: 'https://nearbycreative.com',
    position: 'Lead Software Engineer',
    description: [
      'Engages as a lead full-stack engineer on a VC-backed telehealth organization in migrating vendor services onshore, while upgrading to best-of-class technologies: MongoDB, Express, Node, Laravel, React, Webpack, AWS, Kubernetes, and Docker.',
      'Deploys tooling such as Docker, PHP 7, Javascript, and AWS Services (EC2, ECS, SQS/SNS, Lambda, Code Pipeline, S3, and Cloud Formation Templates) for a New York-based Health Intelligence Company involved in the diagnosis of cancer and hereditary diseases.',
      'Lead engineer on web and mobile applications project teams of 3-5, supporting numerous clients in med-tech, ed-tech, and e-commerce using many front-end and back-end technologies in LAMP and MERN stacks.',
      'Executes numerous full-stack refactors and migrations of enterprise web systems with high traffic and uptime requirements.',
      'Augments many client engineering teams as a Senior Engineering Consultant and Lead Engineer or team sizes spanning 3-40+.'
    ]
  },
  {
    title: 'Bright Thought, LLC',
    date: '2014 - Present',
    link: 'https://brightthought.co',
    position: 'Owner',
    description: [
      'Develops Bootstrap website using custom HTML, CSS, Vanilla JS, jQuery, PHP, and AJAX code/markup.',
      'Produces efficient, dynamic WordPress websites with customized back-end functionality and the dashboard.'
    ]
  },
  {
    title: 'Duquesne Light Company',
    link: 'https://www.duquesnelight.com',
    date: 'January 2018 - August 2018',
    position: 'Contract Web Developer',
    description: [
      'Provided front-end development of a new intranet platform in a .NET environment.',
      'Contributed high-level ideas and methods to enhance platform and sped up development times of the project.'
    ]
  },
  {
    title: 'Shift Collaborative',
    date: '2016 - 2019',
    link: 'https://shiftcollaborative.com',
    position: 'Contract Web Developer',
    description: [
      'Developed and managed custom WordPress themes and plugins for clients on an ad-hoc basis',
      'Created PHP tools to solve high-level'
    ]
  },
  {
    title: 'MarcUSA(9RoofTops)',
    date: '2015 - 2016',
    link: 'https://shiftcollaborative.com',
    position: 'Contract Web Developer',
    description: [
      'Developed and managed custom WordPress themes and plugins for clients on an ad-hoc basis',
      'Created PHP tools to solve high-level'
    ]
  }
];
