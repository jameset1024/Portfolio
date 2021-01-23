interface Projects {
	[index: string]: {
		title: string,
		description: string,
		link: string,
		languages: object,
		logo: string,
		image: string,
		company: string,
		background: string
	}
}

export const projects: Projects = {
	forging: {
		title: "Forging PGH",
		description: "",
		link: "https://forgingpgh.org",
		languages: [
			"JS",
			"PHP",
			"WordPress"
		],
		logo: "forgingpgh-logo.png",
		image: "forging.png",
		background: "#FFFFFF",
		company: "Thought Form"
	},
	encore: {
		title: "Encore Global",
		description: "",
		link: "https://encoreglobal.com/",
		languages: [
			"React",
			"JS",
			"PHP",
			"WordPress"
		],
		logo: "encore-logo.png",
		image: "encore.png",
		background: "#e2e2e2",
		company: "Cognistx"
	},
	venture: {
		title: "Venture Outdoors",
		description: "",
		link: "https://ventureoutdoors.org/",
		languages: [
			"JS",
			"PHP",
			"WordPress"
		],
		logo: "venture-logo.png",
		image: "venture.png",
		background: "#FFFFFF",
		company: "Shift Collaborative"
	},
	sustainable: {
		title: "Sustainable Pittsburgh",
		description: "",
		link: "https://sustainablepghrestaurants.org/site/restaurant-finder/",
		languages: [
			"PHP",
			"WordPress",
			"JS"
		],
		logo: "spr-logo.png",
		image: "sustainable.png",
		background: "#E4F1F1",
		company: "Shift Collaborative"
	},
	scopd: {
		title: "Scopd",
		description: "",
		link: "https://apps.apple.com/us/app/scopd/id1498082593",
		languages: [
			"PHP",
			"ReactNative",
			"Laravel"
		],
		logo: "scopd-logo.png",
		image: "scopd.png",
		background: "#eceef4",
		company: "Nearby Creative"
	},
	minstrel: {
		title: "Minstrel School",
		description: "",
		link: "https://minstrelschool.com/",
		languages: [
			"PHP",
			"WordPress",
			"JS"
		],
		logo: "forgingpgh-logo.png",
		image: "minstrel.png",
		background: "#FFFFFF",
		company: "Bright Thought"
	},
	msa: {
		title: "MSA",
		description: "",
		link: "https://blog.msasafety.com/",
		languages: [
			"PHP",
			"WordPress",
			"JS"
		],
		logo: "msa-logo.png",
		image: "msa.png",
		background: "#000000",
		company: "Shift Collaborative"
	},
	apogee: {
		title: "Apogee Resources Group",
		description: "",
		link: "http://argpgh.com/",
		languages: [
			"PHP",
			"WordPress",
			"JS"
		],
		logo: "apogee-logo.png",
		image: "argpgh.png",
		background: "#FFFFFF",
		company: "Bright Thought"
	}
}
