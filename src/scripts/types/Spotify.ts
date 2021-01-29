export interface StateType {
	spotify: {
		currentlyPlaying ?: {
			"context": {
				"external_urls": {
					"spotify": string
				},
				"href": string,
				"type": string,
				"uri": string
			},
			"timestamp": number,
			"progress_ms": number,
			"is_playing": boolean,
			"currently_playing_type": string,
			"item": {
				"album": {
					"album_type": string,
					"external_urls": {
						"spotify": string
					},
					"href": string,
					"id": string,
					"images": { height: number, url: string, width: number }[],
					"name": string,
					"type": string,
					"uri": string
				},
				"artists": {external_urls: {spotify: string}, href: string, id: string, name: string, type: string, uri: string}[],
				"available_markets": [],
				"disc_number": number,
				"duration_ms": number,
				"explicit": boolean,
				"external_ids": {
					"isrc": string
				},
				"external_urls": {
					"spotify": string
				},
				"href": string,
				"id": string,
				"name": string,
				"popularity": number,
				"preview_url": string,
				"track_number": number,
				"type": string,
				"uri": string
			}
		},
		playHistory ?: {
			items: {
				"track": {
					"album": {
						"album_type": string,
						"external_urls": {
							"spotify": string
						},
						"href": string,
						"id": string,
						"images": { height: number, url: string, width: number }[],
						"name": string,
						"type": string,
						"uri": string
					},
					"artists": {external_urls: {spotify: string}, href: string, id: string, name: string, type: string, uri: string}[],
					"available_markets": [],
					"disc_number": number,
					"duration_ms": number,
					"explicit": boolean,
					"external_ids": {
						"isrc": string
					},
					"external_urls": {
						"spotify": string
					},
					"href": string,
					"id": string,
					"name": string,
					"popularity": number,
					"preview_url": string,
					"track_number": number,
					"type": string,
					"uri": string
				},
				"played_at": string,
				"context": {
					"external_urls": {
						"spotify": string
					},
					"href": string,
					"type": string,
					"uri": string
				}
			}[]
		}
	}
}