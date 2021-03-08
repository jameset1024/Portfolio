import * as React from "react";
import {Main, Wrap} from "../components/elements/Tags";
import Skills from "../components/elements/Skills";
import Experience from "../components/elements/Experience";
import {hideLoading} from "../controllers/Loading";

type SectionTypes =  {
	[about: string]: string,
	skills: string,
	experience: string
}

type PositionTypes = {
	[aboutIntro: string]: number,
	aboutSkills: number,
	aboutExperience: number
};

export default class About extends React.Component<any, any>{

	main: HTMLElement;

	positions: PositionTypes = {
		aboutIntro: 0,
		aboutSkills: 0,
		aboutExperience: 0
	};

	sections: SectionTypes = {
		about: "aboutIntro",
		skills: "aboutSkills",
		experience: "aboutExperience"
	}

	async componentDidMount() {
		document.body.className = 'about';
		this.main = document.querySelector('main');
		this.watchPosition();
		await hideLoading();
	}

	componentWillUnmount() {
		this.main.removeEventListener('click', this.mapScroll.bind(this));
	}

	watchPosition(){
		for(var i in this.sections){
			let position: HTMLElement = document.querySelector('.' + this.sections[i]);
			this.positions[this.sections[i]] = position.offsetTop;
		}

		this.main.addEventListener('scroll', this.mapScroll.bind(this));
	}

	mapScroll( e:any ){
		let dHeight = window.innerHeight;

		for(let i in this.positions){
			if(e.target.scrollTop >= (this.positions[i] * .8) && e.target.scrollTop < (this.positions[i] + dHeight)){
				let el = document.getElementById(i);
				if(!el.classList.contains('active')){
					document.querySelectorAll('.aboutNavItem').forEach( e => {
						e.classList.remove('active');
					});

					el.classList.add('active');
				}
			}
		}
	}

	scrollToPosition( element: string ){
		document.querySelector('main').scrollTo({
			top: this.positions[element],
			left: 0,
			behavior: "smooth"
		});
	}

	render(){
		return(
			<>
				<div className={'pageNav'}>
					<ul>
						{Object.keys(this.sections).map( (k, i) => {
							return <li id={this.sections[k]} className={i === 0 ? 'aboutNavItem active' : 'aboutNavItem'} key={this.sections[k]} onClick={() => {this.scrollToPosition( this.sections[k] )}}><span>{k}</span></li>
						})}
					</ul>
				</div>
				
				<Main>
					<Wrap className={'aboutIntro'}>
						<div className={'col-md-5'}>
							<h2>About Me</h2>
							<p>Hi there, I've been professionally engineer the internet for over 8 years of my life. I've started my career building basic websites, working my way up to engineering APIs, mobile applications and web applications.</p>
							<p>Having worked with various company's in various sectors I've been exposed to numerous technologies, development practices and methodologies, and workflows it has allowed me to become a more well rounded developer.</p>
							<p>I'm currently a full time employee of Nearby Creative but I'm always open to contract projects. If you want to learn more about my skills or things I'm personally interested in keep scrolling and thank for checking out my site.</p>
						</div>
						<div className={'col-md-6 offset-md-1'}>
							<div className={'profileImage'}>
								<img src={'https://erik-portfolio.s3.amazonaws.com/erik.jpg'} alt={'Erik Thomas Profile Image'} />
							</div>
						</div>
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

					<Wrap className={'aboutExperience'}>
						<div className={'col-md-5'}>
							<h2>Experience</h2>
							<p>Over the years I had the opportunity to work with some amazing companies, where each experience allowed me to grow as a developer.</p>
							<p>There are so many new skills, practices, and technologies that I've used and learned further expanding my developer toolkit.</p>
							<p>To learn more click on one of the logos or download a copy of my resume by clicking the button below.</p>
							<a href={'#'} className={'btn blue'}>View My Resume</a>
						</div>
						<div className={'col-md-6 offset-md-1'}>
							<Experience />
						</div>
					</Wrap>
				</Main>
			</>
		)
	}
}
