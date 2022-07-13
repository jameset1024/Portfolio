import * as React from "react";
import { Spring } from "react-spring/renderprops-universal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {Ascender, Cognistx, DLC, Marc, Nearby, Shift} from "../experience";
import Experience from "./Experience";

type PopoverType = {
	trigger: boolean,
	parent: Experience,
	company: string
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
export default class PopoverExperience extends React.Component<PopoverType, StateType>{

	state = {
		fadeIn: false,
		rating: false,
	}

	slideInToggle = () => this.props.parent.setState( (state: { slideIn: boolean }) => ({slideIn: !state.slideIn}));

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
			this.props.parent.setState({display: false});
		}else{
			this.fadeInToggle();
		}
	}

	render() {
		if(this.props.trigger) {

			const { fadeIn } = this.state;

			return (
				<Spring from={{ width: '0%' }} to={{width: this.props.parent.state.slideIn ? '100%' : '0%'}} onRest={() => this.slideCallback()}>

					{ props =>
						<div className={'popoverModal experiencePopover'} style={props}>
							<Spring from={{opacity: 0}} to={{opacity: fadeIn ? 1 : 0}} onRest={() => this.fadeCallback()}>

								{ propsFade =>
									<div className={'popoverContainer'} style={ propsFade }>
										<div className={'popoverClose'} onClick={this.closeBtn.bind(this)}><FontAwesomeIcon icon={faTimes} /></div>

										<div className={'popoverContents'}>
											{(() => {
												switch (this.props.company) {
													case 'nearby':
														return <Nearby/>
													case 'cognistx':
														return <Cognistx/>
													case 'ascender':
														return <Ascender/>
													case 'dlc':
														return <DLC/>
													case 'marc':
														return <Marc/>
													case 'shift':
														return <Shift/>
													default :
														return <></>
												}
											})()}
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
