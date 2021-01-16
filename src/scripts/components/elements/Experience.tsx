import * as React from "react";
import Modal from "./Modal";
import {Ascender, Cognistx, DLC, Marc, Nearby, Shift} from "../experience";


type ExperienceType = {
	[nearby: string] : string
	cognistx: string,
	ascender: string,
	dlc: string,
	marc: string,
	shift: string
};

type ExperienceStateType = {
	modalDisplay: boolean,
	company: string
}

export default class Experience extends React.Component<any, ExperienceStateType>{
	
	state = {
		modalDisplay: false,
		company: 'nearby'
	}
	
	companies: ExperienceType = {
		nearby: "Nearby.png",
		cognistx: "cognistx.png",
		ascender: "ascender.svg",
		dlc: "dlc-logo.png",
		marc: "marc-usa.png",
		shift: "shift.png"
	}
	
	experienceClick ( company: string ){
		this.setState({modalDisplay: true, company: company});
	}
	
	render(){
		
		const images = Object.keys(this.companies).map( e => {
			return <div className={'col-md-4 col-sm-6 d-flex justify-content-center align-items-center'} key={e}><img src={'./dist/img/' + this.companies[e]} onClick={() => this.experienceClick(e) }/></div>
		});
		
		const company: string = this.state.company;
		
		return (
			<>
				<div className={'row companyIcons'}>
					{ images }
				</div>
				<Modal display={this.state.modalDisplay} parent={this}>
					{(() => {
						switch( company ){
							case 'nearby':
								return <Nearby />
								break;
							case 'cognistx':
								return <Cognistx />
								break;
							case 'ascender':
								return <Ascender />
								break;
							case 'dlc':
								return <DLC />
								break;
							case 'marc':
								return <Marc />
								break;
							case 'shift':
								return <Shift />
								break;
							default : 
								return <></>
							break;
						}
					})()}
				</Modal>
			</>
		);
	}
}
