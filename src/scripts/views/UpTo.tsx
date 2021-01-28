import * as React from "react";
import {hideLoading} from "../controllers/Loading";
import {Wrap} from "../components/elements/Tags";
import axios from "axios";
import {StateType} from "../types/Spotify";


export default class UpTo extends React.Component<any, any>{

	state: StateType = {
		spotify: {}
	}

	async componentDidMount() {
		document.body.className = 'upto';

		try {
			let spotify = await axios({
				url: `${process.env.ENDPOINT}/getSpotify`,
				method: 'GET'
			});

			if (spotify.status === 200) {
				this.setState({
					spotify: spotify.data
				})
			}
		} catch ( e ){
			console.log(e.response);
		}

		await hideLoading();
	}

	render(){
		return(
			<>
				<Wrap className={'uptoSection'}>
					<div className={'col-md-6'}>
						<h2>What I'm Listening Too</h2>
						{(() => {
							if(typeof this.state.spotify.currentlyPlaying !== 'undefined' && typeof this.state.spotify.currentlyPlaying.item !== 'undefined') {
								return (
									<>
										<video title={this.state.spotify.currentlyPlaying.item.name} src={this.state.spotify.currentlyPlaying.item.preview_url} controls width={'100%'} />
									</>
								);
							}

							return (<></>);
						})()}
					</div>
				</Wrap>
			</>
		)
	}
}
