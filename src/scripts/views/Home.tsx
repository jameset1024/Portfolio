import * as React from "react";

export default class Home extends React.Component<any, any>{
	
	state = {
			
	};
	
	componentDidMount() {
		document.body.className = 'home';
	}
	
	

	render(){
		return(
			<>
				<div className={'homeIntro'}>
					<h1>Hi! I'm Erik</h1>
					<h2>I'm a software engineer that loves to build all things</h2>
				</div>
			</>
		)
	}
}
