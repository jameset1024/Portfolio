import * as React from "react";
import { Link, withRouter } from "react-router-dom";
import {NavSlide} from "../buttons/AnimationBTNs";

export default class MainNav extends React.Component<any, any>{
	render(){
		return(
			<header className={'ejt_mainHeader'}>
				<NavSlide/>
				
				<div className={'ejt_logo'}>
					<Link to={'/'}>E</Link>
				</div>
				
				<nav>
					<ul>
						<li>
							<Link to={'/about'}>
								About
							</Link>
						</li>
						<li>
							<Link to={'/skills'}>
								Skills
							</Link>
						</li>
						<li>
							<Link to={'/work'}>
								Work
							</Link>
						</li>
						<li>
							<Link to={'/contact'}>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
				
				<div className={'ejt_social'}>
					<div className={'d-flex'}>
						<a href={'https://github.com/jameset1024'} target={'_blank'}>
							<i className={'fab fa-github'}></i>
						</a>
						<a href={'https://www.linkedin.com/in/erikthomas1024/'} target={'_blank'}>
							<i className={'fab fa-linkedin-in'}></i>
						</a>
					</div>
				</div>
			</header>
		);
	}
}
