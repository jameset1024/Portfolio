import * as React from "react";

export default class TrackList extends React.Component<any, any>{
	render(){
		return(
			<div className={'trackList'}>
				{
					this.props.spotify.items.map( ( e: any, i: number ) => {
						return (
							<div className={'trackListItem'} key={i}>
								<div className={'trackImage'}>
									<img src={e.track.album.images[1].url} alt={e.track.album.name} />
								</div>
								<div className={'trackData'}>
									<div className={'trackTitle'}>{e.track.name}</div>
									<div className={'trackArtist'}>{e.track.album.artists[0].name}</div>
								</div>
								<div className={'trackLink'}>
									<a href={e.track.external_urls.spotify} target={'_black'}>
										<i className={'fab fa-spotify'} />
									</a>
								</div>
							</div>
						);
					})
				}
			</div>
		);
	}
}
