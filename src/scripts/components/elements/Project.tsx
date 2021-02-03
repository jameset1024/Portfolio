import * as React from "react";

type ProjectType = {
	project: {
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

export default class Project extends React.Component<ProjectType, any> {
	
	render() {
		return (
			<div className={'projectModal'}>
				<div className={'row'}>
					<div className={'col-12 mb-3'}>
						<img src={this.props.project.image} alt={this.props.project.title} />
					</div>
					<div className={'col-12'}>
						<h3>{this.props.project.title}</h3>
						<p>{ this.props.project.description }</p>
						
						<div className={'metadata'}>
							<div className={'metadataItem'}><span>Company: </span> {this.props.project.company}</div>
							<div className={'metadataItem'}><span>Code:</span> <ul>{Object.values(this.props.project.languages).map( (e: string) => { return <li>{e}</li>})}</ul></div>
						</div>
					</div>
					<div className={'col-12'}>
						<a href={this.props.project.link} target={'_blank'}>View Website</a>
					</div>
				</div>
			</div>
		);
	}
}
