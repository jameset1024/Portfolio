export type ExperienceInterface = {
  title: string;
  description: string;
  date: string;
  link?: string;
  logo: string;
  position: string;
  location: string;
  skills: string[];
  currentDescription?: string;
}

export const Experience: ExperienceInterface[] = [
  {
    title: 'Nearby Creative',
    date: 'March 2019 - Present',
    link: 'https://nearbycreative.com',
    position: 'VP of Engineering',
    logo: 'https://erik-portfolio.s3.amazonaws.com/experience/Nearby.png',
    location: 'Pittsburgh, PA',
    description: 'Manage engineering client relationships, applications, infrastructure, and deployments. Ensure that all engineering best practices are being implemented on both internal and external projects.',
    currentDescription: 'My current position at this small consulting company has been were I\'ve exponentially grown my skills over the past number of years. The projects I\'ve worked on have been both challenging and very fulfilling to be a part of.',
    skills: ['PHP', 'Javascript', 'Node', 'React', 'React Native', 'Iac', 'AWS', 'Python', 'Nest', 'SASS']
  },
  {
    title: 'Bright Thought, LLC',
    date: 'June 2014 - Present',
    link: 'https://brightthought.co',
    location: 'Pittsburgh, PA',
    position: 'Owner',
    logo: 'https://erik-portfolio.s3.amazonaws.com/bt-logo.svg',
    description: 'Manage client projects from ideation to production deployment. Provide on-going support for client websites/applications on an on-going basis.',
    skills: ['PHP', 'Javascript', 'Node', 'React', 'Iac', 'AWS', 'WordPress', 'Gatsby']
  },
  {
    title: 'Ascender',
    date: 'February 2020 - Present',
    link: 'https://ascenderpgh.com',
    location: 'Pittsburgh, PA',
    position: 'Contractor',
    logo: 'https://erik-portfolio.s3.amazonaws.com/experience/ascender.svg',
    description: 'Manage Ascenders online presense which includes WordPress and Plugin updates managing hosting and making necessary code changes.',
    skills: ['PHP', 'Javascript', 'Wordpress', 'SASS']
  },
  {
    title: 'Cognistx',
    date: 'May 2018 - October 2022',
    link: 'https://www.cognistx.com',
    location: 'Remote',
    position: 'Contractor',
    logo: 'https://erik-portfolio.s3.amazonaws.com/experience/cognistx.png',
    description: 'Develop custom and dynamic WordPress themes as well as Plugins. Establish code standards and methodologies to integrate third party tools into custom themes.',
    skills: ['WordPress', 'PHP', 'Javascript', 'React', 'AWS', 'Jenkins']
  },
  {
    title: 'Duquesne Light Company',
    link: 'https://www.duquesnelight.com',
    date: 'January 2018 - August 2018',
    location: 'Pittsburgh, PA',
    position: 'Contractor',
    logo: 'https://erik-portfolio.s3.amazonaws.com/experience/dlc-logo.png',
    description: 'Developed styled intranet pages using CSS and JS in a .NET environment. During this time I worked on a team of 6 in a scrum style environment.',
    skills: ['CSS', 'JS']
  },
  {
    title: 'Shift Collaborative',
    date: 'December 2016 - October 2019',
    link: 'https://shiftcollaborative.com',
    location: 'Pittsburgh, PA',
    position: 'Contractor',
    logo: 'https://erik-portfolio.s3.amazonaws.com/experience/shift.png',
    description: 'As a contractor for Shift, I created custom WordPress themes and Plugins as well as custom backend processing applications. Within my responsibilities I also handled all client support issues pertaining to WordPress installations.',
    skills: ['WorPress', 'JQuery', 'CSS', 'PHP']
  }
];
