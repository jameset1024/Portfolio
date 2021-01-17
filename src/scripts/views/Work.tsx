import * as React from "react";
import {WrapFull} from "../components/elements/Tags";

export default class Work extends React.Component<any, any>{
	
	componentDidMount() {
		document.body.className = 'work';
	}
	
	render(){
		return(
			<>
				<WrapFull className={'workSection'}>
					
				</WrapFull>
			</>
		)
	}
}
