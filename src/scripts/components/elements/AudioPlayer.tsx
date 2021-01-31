import * as React from "react";
import ReactTooltip from "react-tooltip";

export default class AudioPlayer extends React.Component<any, any>{

	state = {
		playing: false,
		max: '0:30',
		current: '0:00'
	}

	componentDidMount() {
		this.audioControls();
	}

	audioControls(){
		const audioControls = new Audio(this.props.spotify.item.preview_url);
		const tracker: HTMLElement = document.querySelector('.audioTracker');

		//Handle the playing and stopping of the song
		document.querySelector('.audioButton').addEventListener('click', e => {
			e.preventDefault();

			if( ! this.state.playing ) {
				audioControls.play().catch(e => console.log(e));
			} else {
				audioControls.pause();
			}

			this.setState((state: { playing: boolean; }) => ({playing: !state.playing}));
		});

		audioControls.addEventListener('timeupdate', _ => {
			tracker.setAttribute('style', '--current-track:' + Math.round((audioControls.currentTime / 30) * 100) + '%');

			let time = Math.floor(audioControls.currentTime) < 10 ? '0' : '';
			this.setState({current: '0:' + time + Math.floor(audioControls.currentTime)});

			if(Math.floor(audioControls.currentTime) === 30){
				this.setState({playing: false, current: '0:00'});
				tracker.setAttribute('style', '--current-track:0');
			}
		});
	}

	render(){
		return (
			<>
				<div className={'audioPlayer'}>
					<div className={'audioImage'}>
						<img src={this.props.spotify.item.album.images[0].url} alt={this.props.spotify.item.album.drive} />
					</div>
					<div className={'audioData'}>
						<div className={'audioInner'}>
							<div className={'audioLabel'}>
								<h4>I'm Current Listen To</h4>
							</div>
							<div className={'audioLink'}>
								<a href={this.props.spotify.item.external_urls.spotify} target={'_blank'}>
									<i className={'fab fa-spotify'} />
								</a>
							</div>

							<div className={'audioInfo'}>
								<div className={'audioTrackInfo'}>
									<div className={'audioButton'} data-for={'preview'} data-tip={ !this.state.playing ? 'Preview' : 'Stop Preview' }>
										{(() => {
											if(this.state.playing){
												return (<i className={'fas fa-stop fa-fw'}/>);
											}

											return (<i className={'fas fa-play fa-fw'}/>);
										})()}
									</div>

									<div className={'audioTrackData'}>
										<div className={'audioMainData'}>
											<div className={'audioTitle'}>{this.props.spotify.item.name}</div>
											<div className={'audioArtist'}>{this.props.spotify.item.album.artists[0].name}</div>
										</div>
										<div className={'audioMeta'}>
											<div className={'audioAlbum'}>Album: {this.props.spotify.item.album.name}</div>
										</div>
									</div>
								</div>

								<div className={'audioTracker'} />
								<div className={'audioTimeWrap'}>
									<div className={'audioTime'}>
										{this.state.current} / {this.state.max}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ReactTooltip id={'preview'} backgroundColor={'#49a0d9'}/>
			</>
		);
	}
}
