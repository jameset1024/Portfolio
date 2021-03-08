import * as React from "react";
import {Link, withRouter} from "react-router-dom";
import {NavSlide} from "../buttons/AnimationBTNs";
import {handleLoading} from "../../controllers/Loading";
import {SyntheticEvent} from "react";

class MainNav extends React.Component<any, any>{
	
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

export default withRouter(MainNav);
