import * as React from "react";
import { Wrap } from "../components/elements/Tags";
import Skills from "../components/elements/Skills";

export default class About extends React.Component<any, any>{

	state = {

	};

	componentDidMount() {
		document.body.className = 'about';
	}
	
	render(){
		return(
			<>
				<Wrap className={'aboutIntro'}>
					<div className={'col-md-5'}>
						<h2>About Me</h2>
						<p>Hi there, I've been professionally engineer the internet for over 8 years of my life. I've started my career building basic websites, working my way up to engineering APIs, mobile applications and web applications.</p>
						<p>Having worked with various company's in various sectors I've been exposed to numerous technologies, development practices and methodologies, and workflows it has allowed me to become a more well rounded developer.</p>
						<p>I'm currently a full time employee of Nearby Creative but I'm always open to contract projects. If you want to learn more about my skills or things I'm personally interested in keep scrolling and thank for checking out my site.</p>
					</div>
					<div className={'col-md-6 offset-md-1'}></div>
				</Wrap>
				
				<Wrap className={'aboutSkills'}>
					<div className={'col-md-6 d-flex align-center'}>
						<Skills/>
					</div>
					<div className={'col-md-5 offset-md-1'}>
						<h2>Skills</h2>
						<p>Over the years I have worked with multiple technologies on various projects which has improved my abilities as a full stack developer.</p>
						<p>My current primary development focus is on backend and I've been working towards shifting from PHP to using Node. I'm also very skilled with from technologies such as Sass and React.</p>
						<p>Click on any of the icons learn more about my proficiencies within that technology.</p>
					</div>
				</Wrap>
			</>
		)
	}
}
