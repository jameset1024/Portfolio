export type ExperienceInterface = {
  title: string;
  description: string;
  date: string;
  link?: string;
  logo: string;
  position: string;
  location: string;
  skills: string[];
}

export const Experience: ExperienceInterface[] = [
  {
    title: 'Nearby Creative',
    date: 'March 2019 - Present',
    link: 'https://nearbycreative.com',
    position: 'VP of Engineering',
    logo: 'https://erik-portfolio.s3.amazonaws.com/Nearby.png',
    location: 'Pittsburgh, PA',
    description: 'Manage engineering client relationships, applications, infrastructure, and deployments. Ensure that all enngineering best practices are being implemented on both internal and external projects.',
    skills: ['PHP', 'Javascript', 'Node', 'React', 'React Native', 'Iac', 'AWS', 'Python', 'Nest']
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
];
