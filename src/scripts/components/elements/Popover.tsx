import * as React from "react";
import Skills from "./Skills";
import { Spring } from "react-spring/renderprops-universal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type PopoverType = {
	trigger: boolean,
	parent: Skills,
	content: {
		title: string,
		description: string,
		rating: number
	}
}

type StateType = {
	fadeIn: boolean,
	rating: boolean
}

/**
 *
 * Handles the skills popover on the about page
 *
 */
export default class Popover extends React.Component<PopoverType, StateType>{

	state = {
		fadeIn: false,
		rating: false
	}
	
	slideInToggle = () => this.props.parent.setState( state => ({slideIn: !state.slideIn}));

	fadeInToggle = () => this.setState(state => ({fadeIn: !state.fadeIn}));

	ratingToggle = () => this.setState( state => ({rating: !state.rating}));
	
	fadeCallback() {
		if( this.state.fadeIn ){
			this.ratingToggle();
		} else {
			this.slideInToggle();
		}
	}
	
	closeBtn() {
		this.ratingToggle();
		this.fadeInToggle();
	}
	
	slideCallback() {
		if( ! this.props.parent.state.slideIn ){
			this.props.parent.setState({popupDisplay: false});
		}else{
			this.fadeInToggle();
		}
	}

	ratingCallback() {
		const rating: HTMLElement = document.querySelector('.ratingBar');
		if(!rating.classList.contains('active')){
			rating.classList.add('active');
		}
	}

	render() {
		if(this.props.trigger) {

			const { fadeIn, rating } = this.state;

			return (
				<Spring from={{ width: '0%' }} to={{width: this.props.parent.state.slideIn ? '100%' : '0%'}} onRest={() => this.slideCallback()}>

					{ props =>
						<div className={'popoverModal'} style={props}>
							<Spring from={{opacity: 0}} to={{opacity: fadeIn ? 1 : 0}} onRest={() => this.fadeCallback()}>

								{ propsFade =>
									<div className={'popoverContainer'} style={ propsFade }>
										<div className={'popoverClose'} onClick={this.closeBtn.bind(this)}><FontAwesomeIcon icon={faTimes} /></div>

										<div className={'popoverContents'}>
											<h4>{this.props.content.title}</h4>

											<div className={'ratingDescription'}>Skill Rating:</div>

											<div className={'skillRating'} >
												<Spring
													from={{width: '0%', number: 0}}
													to={{width: rating ? this.props.content.rating + '%' : '0%', number: rating ? this.props.content.rating : 0}}
													onRest={() => this.ratingCallback()}
												>
													{ props => <div className={'ratingBar'} data-rating={Math.ceil(props.number) + '%'} style={props} /> }
												</Spring>
											</div>

											<p>{this.props.content.description}</p>
										</div>
									</div>
								}
							</Spring>
						</div>
					}
				</Spring>
			);
		}

		return (<></>);
	}
}
