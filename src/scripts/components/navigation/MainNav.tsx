import * as React from "react";
import { Link } from "react-router-dom";
import {NavSlide} from "../buttons/AnimationBTNs";

export default class MainNav extends React.Component<any, any>{
	render(){
		return(
			<header className={'ejt_mainHeader'}>
				<NavSlide/>
				
				<div className={'ejt_logo'}>
					<Link to={'/'}>E</Link>
				</div>
				
				<nav className={'ejt_mainNavigation'}>
					<ul>
						<li>
							<Link to={'/about'}>
								About
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
						<li>
							<Link to={'/what-im-up-to'}>
								What I'm Up To
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
