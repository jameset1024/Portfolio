import * as React from "react";
import {Component} from "react";

type ModalType = {
	display: boolean,
	parent: Component
}

export default class Modal extends React.Component<ModalType, any>{

	closeModal(){
		this.props.parent.setState({modalDisplay: false});
	}

	render(){
		return (
			<div className={'ejtModalCover' + (this.props.display ? ' active' : '')}>
				<div className={'modalClose'}>
					<a href={"#"} onClick={this.closeModal.bind(this)}><i className={'fas fa-times'}/></a>
				</div>

				<div className={'modalContainer'}>
					<div className={'content'}>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}
