interface Projects {
	[index: string]: {
		title: string,
		description: string,
		link: string,
		languages: object,
		image: string,
		company: string
	}
}

export const projects: Projects = {
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
		image: "encore.png",
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
		image: "venture.png",
		company: "Shift Collaborative"
	},
	sustainable: {
		title: "Sustainable Pittsburg",
		description: "",
		link: "https://sustainablepghrestaurants.org/site/restaurant-finder/",
		languages: [
			"PHP",
			"WordPress",
			"JS"
		],
		image: "sustainable.png",
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
		image: "scopd.png",
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
		image: "minstrel.png",
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
		image: "msa.png",
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
		image: "argpgh.png",
		company: "Bright Thought"
	}
}
