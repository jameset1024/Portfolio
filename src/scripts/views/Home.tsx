import * as React from "react";
import {Link, withRouter} from "react-router-dom";
import {handleLoading, hideLoading} from "../controllers/Loading";
import {Main, Wrap} from "../components/elements/Tags";
import {SyntheticEvent} from "react";

class Home extends React.Component<any, any>{

	state = {
		loading:true
	}

	componentDidMount() {
		document.body.className = 'home';

		hideLoading().then( _ => {
			this.setState({loading: false});
		});
	}

	render(){
		if( ! this.state.loading ) {
			return (
				<Main>
					<Wrap className={'homeIntro'}>
						<div className={'col-lg-6'}>
							<h6>Hello! My Name Is</h6>
							<h1>Erik Thomas</h1>
							<p>I'm a full stack software engineer building things for the web
								since <strong>2009</strong>. Based in Charlotte, NC I build custom web and mobile
								application along with the occasional WordPress theme or plugin.</p>

							<Link to={'/contact'} onClick={(e: SyntheticEvent) => handleLoading('/contact', this, e)}
								  className={'btn'}>
								Contact Me
							</Link>
						</div>
					</Wrap>
				</Main>
			)
		}

		return (<></>)
	}
}

export default withRouter(Home);
