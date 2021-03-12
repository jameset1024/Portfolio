import * as React from "react";
import {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
					<a href={"#"} onClick={this.closeModal.bind(this)}><FontAwesomeIcon icon={faTimes}/></a>
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
