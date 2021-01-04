import * as React from "react";
import Popover from "./Popover";
import { skills } from "../../data/skills";


export default class Skills extends React.Component<any, any>{

	state = {
		popupDisplay: false,
		popupContent: {
			title: "",
			description: "",
			rating: 0
		}
	}

	skillDisplay( type: string ){
		this.setState({
			popupDisplay: true,
			popupContent: skills[type]
		});
	}

	render(){

		const icons = Object.keys(skills).map( (e: string) => {
			return <div className={'col-md-1-5 col-sm-3'} key={e} onClick={this.skillDisplay.bind(this, e)}><i className={'fab ' + e}></i></div>
		})

		return (
			<>
				<div className={'row skills-component'}>
					{ icons }
				</div>
				<Popover trigger={this.state.popupDisplay} content={this.state.popupContent} parent={this} />
			</>
		);
	}
}
