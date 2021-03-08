import * as React from "react";
import {hideLoading} from "../controllers/Loading";
import {Main, WrapFull} from "../components/elements/Tags";
import axios from "axios";
import {StateType} from "../types/Spotify";
import {spotify} from "../data/test";
import AudioPlayer from "../components/elements/AudioPlayer";
import TrackList from "../components/elements/TrackList";


export default class UpTo extends React.Component<any, any>{

	state: StateType = {
		spotify: {}
	}

	async componentDidMount() {
		document.body.className = 'upto';

		/*try {
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
		}*/

		this.setState({spotify: spotify});
		await hideLoading();
	}

	render(){
		return(
			<Main>
				<WrapFull className={'uptoSection'}>
					<div className={'col-md-6 currentMusic d-flex align-items-center'}>
						<div className={'musicWrap'}>
							<h2>Music I Work To</h2>
							{(() => {
								if(typeof this.state.spotify.currentlyPlaying !== 'undefined' && typeof this.state.spotify.currentlyPlaying.item !== 'undefined') {
									return (
										<>
											<AudioPlayer spotify={this.state.spotify.currentlyPlaying} />
										</>
									);
								}
								return (<></>);
							})()}

							{(() => {
								if(typeof this.state.spotify.playHistory !== 'undefined' && typeof this.state.spotify.playHistory.items !== 'undefined') {
									return (
										<>
											<TrackList spotify={this.state.spotify.playHistory} />
										</>
									);
								}
								return (<></>);
							})()}
						</div>
					</div>
					<div className={'col-md-6 currentlyWatching'}>
						<h2>Shows I'm Watching</h2>
						<div className={'watchingContainer'}>
							<img src={'https://erik-portfolio.s3.amazonaws.com/wandavision.jpg'} alt={'WandaVision'} />
							<img src={'https://erik-portfolio.s3.amazonaws.com/rickandmorty.jpg'} alt={'WandaVision'} />
							<img src={'https://erik-portfolio.s3.amazonaws.com/archer.jpg'} alt={'WandaVision'} />
						</div>
					</div>
				</WrapFull>
			</Main>
		)
	}
}
