type WorkType = {
  title: string,
  description: string,
  tags: Array<string>,
  link: string,
  image: string,
  type: string
}

export const WorkData: WorkType[] = [
  {
    title: 'Encore Global',
    description: 'A highly customized Wordpress theme, custom API, and dynamic content generation. This site helped enhance and automate tools for their client and sales people alike.',
    tags: ['AWS', 'ExpressJs', 'React', 'Wordpress'],
    link: 'https://www.encoreglobal.com/',
    image: 'https://erik-portfolio.s3.amazonaws.com/projects/encore-global.jpg',
    type: 'Frontend / Backend'
  },
  {
    title: 'CardQuest',
    description: 'Custom e-commerce platform built in Laravel, allowing a fully customized product management experience.',
    tags: ['AWS', 'Javascript', 'React', 'Laravel'],
    link: 'https://cardquest.com/',
    image: 'https://erik-portfolio.s3.amazonaws.com/projects/cardquest.jpg',
    type: 'Frontend / Backend / DevOps'
  },
  {
    title: 'RnB Planet',
    description: "A passion project blog and music archive, built with Django, HTMX, and TailwindCSS. The site highlights R&B artists and utilizes Spotify's API to populate the artist data.",
    tags: ['AWS', 'Django', 'HTMX', 'TailwindCSS'],
    link: 'https://rnbplanet.com',
    image: 'https://erik-portfolio.s3.amazonaws.com/projects/rnbplanet.jpg',
    type: 'Frontend / Backend / DevOps'
  },
  {
    title: 'FruitStreet',
    description: 'A consumer quiz built to streamline the users experience for signing up for the companies services. The quiz makes calculations on the fly to determine eligibility into the program.',
    tags: ['Docker', 'Laravel', 'React', 'Node'],
    link: 'https://quiz.fruitstreet.com/quiz/d2c',
    image: 'https://erik-portfolio.s3.amazonaws.com/projects/fruitstreet.jpg',
    type: 'Frontend / Backend / DevOps'
  }
];
