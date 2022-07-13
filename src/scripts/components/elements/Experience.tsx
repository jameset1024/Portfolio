import * as React from "react";
import {About} from "../../views";
import PopoverExperience from "./PopoverExperience";


type ExperienceType = {
	[nearby: string] : string
	cognistx: string,
	ascender: string,
	dlc: string,
	marc: string,
	shift: string
};

type PropsType = {
	parent: About,
}

export default class Experience extends React.Component<PropsType, any>{
    state = {
        slideIn: false,
        company: "nearby",
        display: false
    }

	companies: ExperienceType = {
		nearby: "https://erik-portfolio.s3.amazonaws.com/Nearby.png",
		cognistx: "https://erik-portfolio.s3.amazonaws.com/cognistx.png",
		ascender: "https://erik-portfolio.s3.amazonaws.com/ascender.svg",
		dlc: "https://erik-portfolio.s3.amazonaws.com/dlc-logo.png",
		marc: "https://erik-portfolio.s3.amazonaws.com/marc-usa.png",
		shift: "https://erik-portfolio.s3.amazonaws.com/shift.png"
	}

	experienceClick ( company: string ){
        this.setState({
            company: company,
            slideIn: true,
            display: true
        })
	}

	render(){

		const images = Object.keys(this.companies).map( e => {
			return <div className={'col-md-4 col-6 d-flex justify-content-center align-items-center'} key={e}><img src={this.companies[e]} alt={e + ' Logo'} onClick={() => this.experienceClick(e) }/></div>
		});

		return (
			<>
				<div className={'row companyIcons'}>
					{ images }
				</div>
				<PopoverExperience trigger={this.state.display} company={this.state.company}  parent={this}/>
			</>
		);
	}
}
