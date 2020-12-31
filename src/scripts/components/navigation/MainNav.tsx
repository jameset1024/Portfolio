import * as React from "react";
import {NavSlide} from "../buttons/AnimationBTNs";

export default class MainNav extends React.Component<any, any>{
	render(){
		return(
			<header className={'ejt_mainHeader'}>
				<NavSlide/>
				
				<div className={'ejt_logo'}>
					<a href={'/'}>E</a>
				</div>
				
				<nav>
					<ul>
						<li>
							<a href={'/about'}>About</a>
						</li>
						<li>
							<a href={'/skills'}>Skills</a>
						</li>
						<li>
							<a href={'/work'}>Work</a>
						</li>
						<li>
							<a href={'/contact'}>Contact</a>
						</li>
					</ul>
				</nav>
				
				<div className={'ejt_social'}>
					<div className={'d-flex'}>
						<a href={'https://github.com/jameset1024'}>
							<i className={'fab fa-github'}></i>
						</a>
						<a href={'https://www.linkedin.com/in/erikthomas1024/'}>
							<i className={'fab fa-linkedin-in'}></i>
						</a>
					</div>
				</div>
			</header>
		);
	}
}
