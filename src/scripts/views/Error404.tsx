import * as React from "react";
import { WrapFull } from "../components/elements/Tags";
import { Link, withRouter } from "react-router-dom";
import {handleLoading, hideLoading} from "../controllers/Loading";
import {SyntheticEvent} from "react";

type FormSubmit = {
	[name: string]: string,
	email: string,
	subject: string,
	message: string
}


class Error404 extends React.Component<any, FormSubmit>{

	async componentDidMount() {
		document.body.className = 'error404';
		await hideLoading();
	}

	render(){
		return(
			<>
				<WrapFull className={'errorPage'}>
					<div className={'col-12'}>
						<h1>404</h1>
						<p>Page Not Found</p>
						<Link to={'/'} className={'btn blue'} onClick={( e: SyntheticEvent ) => handleLoading( '/', this, e)}>Home</Link>
					</div>
				</WrapFull>
			</>
		)
	}
}

export default withRouter(Error404);
