import * as React from "react";
import PopoverSkills from "./PopoverSkills";
import { skills } from "../../data/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab);

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
			// @ts-ignore
			return <div className={'col-md-1-5 col-3'} key={e} onClick={this.skillDisplay.bind(this, e)}><FontAwesomeIcon icon={['fab', e]} className={'fab ' + e} data-for={'skills'} data-tip={skills[e].title} /></div>
		})

		return (
			<>
				<div className={'row skills-component'}>
					{ icons }
				</div>
				<PopoverSkills trigger={this.state.popupDisplay} content={this.state.popupContent} parent={this} />
			</>
		);
	}
}
