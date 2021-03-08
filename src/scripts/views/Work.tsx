import * as React from "react";
import {Main, WrapFull} from "../components/elements/Tags";
import { hideLoading } from "../controllers/Loading";
import { projects } from "../data/projects";
import Modal from "../components/elements/Modal";
import Project from "../components/elements/Project";

type WorkStateType = {
	modalDisplay: boolean,
	active: {
		title: string,
		description: string,
		link: string,
		languages: object,
		logo: string,
		image: string,
		company: string,
		background: string
	}
}

export default class Work extends React.Component<any, WorkStateType>{

	state = {
		modalDisplay: false,
		active: {
			title: '',
			description: '',
			link: '',
			languages: {},
			logo: '',
			image: '',
			company: '',
			background: ''
		}
	}

	async componentDidMount() {
		document.body.className = 'work';
		this.calcHeight();
		await hideLoading();
	}

	calcHeight(){
		let cols = document.querySelectorAll('.col-md-3'),
		height = window.innerHeight / 2;
		
		cols.forEach( (e: HTMLElement) => {
			e.style.height = height + 'px';
		});
		
	}
	
	showProject( name: string ){
		this.setState({
			modalDisplay: true,
			active: projects[name]
		});
	}

	render(){
		return(
			<Main>
				<WrapFull className={'workSection'}>
					{Object.keys(projects).map( (e, i) => {
						return (
							<div className={'col-md-3 '} key={i} onClick={this.showProject.bind(this, e)} style={{backgroundColor: projects[e].background}}>
								<img src={ projects[e].logo } alt={projects[e].title} />

								<div className={'projectCover'} >
									<h2>{projects[e].title}</h2>
								</div>
							</div>
						);
					})}
				</WrapFull>

				<Modal display={this.state.modalDisplay} parent={this}>
					<Project project={this.state.active} />
				</Modal>
			</Main>
		)
	}
}
