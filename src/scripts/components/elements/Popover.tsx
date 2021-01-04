import * as React from "react";
import Skills from "./Skills";

type PopoverType = {
	trigger: boolean,
	parent: Skills,
	content: {
		title: string,
		description: string,
		rating: number
	}
}

export default class Popover extends React.Component<PopoverType>{

	componentDidUpdate(prevProps: Readonly<PopoverType>, prevState: Readonly<{}>, snapshot?: any) {
		if(this.props.trigger){
			this.activate();
		}
	}

	async watchAnimation ( el: HTMLElement): Promise<boolean>{
		return new Promise((resolve, reject) => {
			el.addEventListener('transitionend', e => {
				return resolve(true);
			});
		});
	}


	async animate(): Promise<boolean>{
		const modal: HTMLElement = document.querySelector('.popoverModal');
		const container: HTMLElement = document.querySelector('.popoverContainer');
		
		if (modal.clientWidth > 0) {
			container.classList.remove('display');
			await this.watchAnimation(container);
			modal.classList.remove('active');
			await this.watchAnimation(modal);

		} else {
			modal.classList.add('active');
			await this.watchAnimation(modal);
			container.classList.add('display');
			await this.watchAnimation(container);
		}


		return true;
	}


	async closeModal(){
		let result = await this.animate();
		if(result){
			setTimeout(() => { this.props.parent.setState({popupDisplay: false}) }, 500);
		}
	}

	activate(){
		this.animate().then();
	}

	render(){
		if(this.props.trigger) {

			return (
				<div className={'popoverModal'}>
					<div className={'popoverContainer'}>
						<div className={'popoverClose'} onClick={this.closeModal.bind(this)}><i className={'fas fa-times'}></i></div>
						<div className={'popoverContents'}>
							<h4>{this.props.content.title}</h4>
							<p>{this.props.content.description}</p>
						</div>
					</div>
				</div>
			);
		}

		return (<></>);
	}
}
