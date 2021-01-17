import * as React from "react";
import {Component, ComponentType, FunctionComponent} from "react";

type SplashType = {
	display: boolean
}

const SplashScreen: FunctionComponent<SplashType> = ({display, children}) => {
	return (
		<>
			<div className={'loadingScreen' + (display ? ' active' : '')}>
				<div>
					<div className={'bouncingText'}>
						<span>E</span>
					</div>
					
					<div className={'loadingText'}>Loading...</div>
				</div>
			</div>
			{children}
		</>
	);
}

const withSplashScreen = ( WrappedComponent: ComponentType ) => {
	return class extends Component<any, any>{
		constructor(props :any ) {
			super(props);

			this.state = {
				loading: true
			}
		}

		componentDidMount() {
			setTimeout(() => {
				this.setState({loading: false});
			}, 2000);
		}

		render(){
			return (
				<SplashScreen display={this.state.loading}>
					<WrappedComponent />
				</SplashScreen>
			);
		}
	}
}

export default withSplashScreen;
