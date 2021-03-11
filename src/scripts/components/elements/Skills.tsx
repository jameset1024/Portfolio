import * as React from "react";
import Popover from "./Popover";
import { skills } from "../../data/skills";
import ReactTooltip from "react-tooltip";

type SkillsType = {
	popupDisplay: boolean,
	popupContent: {
		title: string,
		description: string,
		rating: number
	},
	slideIn: boolean
};

export default class Skills extends React.Component<any, SkillsType>{

	state = {
		popupDisplay: false,
		popupContent: {
			title: "",
			description: "",
			rating: 0
		},
		slideIn: false
	}

	skillDisplay( type: string ){
		this.setState({
			popupDisplay: true,
			popupContent: skills[type],
			slideIn: true
		});
	}

	render(){

		const icons = Object.keys(skills).map( (e: string) => {
			return <div className={'col-md-1-5 col-3'} key={e} onClick={this.skillDisplay.bind(this, e)}><i className={'fab ' + e} data-for={'skills'} data-tip={skills[e].title} /></div>
		})

		return (
			<>
				<div className={'row skills-component'}>
					{ icons }
				</div>
				<Popover trigger={this.state.popupDisplay} content={this.state.popupContent} parent={this} />
				<ReactTooltip id={'skills'} backgroundColor={'#49a0d9'}/>
			</>
		);
	}
}
