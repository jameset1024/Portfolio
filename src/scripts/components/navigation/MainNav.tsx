import * as React from "react";
import { Link, withRouter } from "react-router-dom";
import { NavSlide } from "../buttons/AnimationBTNs";
import { handleLoading, showLoading } from "../../controllers/Loading";
import {SyntheticEvent} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

class MainNav extends React.Component<any, any>{
	
	componentDidMount() {
		window.onpopstate = async ( e:PopStateEvent ) => {
			e.preventDefault();

			await showLoading();
		}
	}

	render(){
		return(
			<header className={'ejt_mainHeader'}>
				<NavSlide />
				
				<div className={'ejt_logo'}>
					<Link to={'/'} onClick={( e: SyntheticEvent ) => handleLoading( '/', this, e)}>E</Link>
				</div>
				
				<nav className={'ejt_mainNavigation'}>
					<ul>
						<li>
							<Link to={'/about'}  onClick={(e: SyntheticEvent) => handleLoading( '/about', this, e)}>
								About
							</Link>
						</li>
						<li>
							<Link to={'/work'} onClick={(e: SyntheticEvent) => handleLoading( '/work', this, e)}>
								Work
							</Link>
						</li>
						<li>
							<Link to={'/contact'} onClick={(e: SyntheticEvent) => handleLoading( '/contact', this, e)}>
								Contact
							</Link>
						</li>
						{/*<li>
							<Link to={'/what-im-up-to'} onClick={(e: SyntheticEvent) => handleLoading( '/what-im-up-to', this, e)}>
								What I'm Up To
							</Link>
						</li>*/}
					</ul>
				</nav>
				
				<div className={'ejt_social'}>
					<div className={'d-flex'}>
						<a href={'https://github.com/jameset1024'} target={'_blank'}>
							<FontAwesomeIcon icon={ faGithub } />
						</a>
						<a href={'https://www.linkedin.com/in/erikthomas1024/'} target={'_blank'}>
							<FontAwesomeIcon icon={ faLinkedinIn } />
						</a>
					</div>
				</div>
			</header>
		);
	}
}

export default withRouter(MainNav);
