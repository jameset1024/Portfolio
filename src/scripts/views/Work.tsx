import * as React from "react";
import { WrapFull } from "../components/elements/Tags";
import { hideLoading } from "../controllers/Loading";
import { projects } from "../data/projects";

export default class Work extends React.Component<any, any>{

	async componentDidMount() {
		document.body.className = 'work';
		this.calcHeight();
		await hideLoading();
	}

	calcHeight(){
		let cols = document.querySelectorAll('.col-md-6'),
		height = window.innerHeight / 3;
		
		cols.forEach( (e: HTMLElement) => {
			e.style.height = height + 'px';
		});
		
	}
	
	showProject( name: string ){}

	render(){
		return(
			<>
				<WrapFull className={'workSection'}>
					{Object.keys(projects).map( (e, i) => {
						return (
							<div className={'col-md-6'} key={i} onClick={this.showProject.bind(this, e)}>
								<img src={'./dist/img/' + projects[e].image} alt={projects[e].title} />

								<div className={'projectCover'} >
									<h2>{projects[e].title}</h2>
								</div>
							</div>
						);
					})}
				</WrapFull>
			</>
		)
	}
}
