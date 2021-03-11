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
	minstrel: {
		title: "Minstrel School",
		description: "A custom WordPress theme built for selling music lessons and musical tracks.",
		link: "https://minstrelschool.com/",
		languages: [
			"PHP",
			"WordPress",
			"JS"
		],
		logo: "https://erik-portfolio.s3.amazonaws.com/minstrel-logo.png",
		image: "https://erik-portfolio.s3.amazonaws.com/minstrel.png",
		background: "#000000",
		company: "Bright Thought"
	},
	encore: {
		title: "Encore Global",
		description: "A highly customized WordPress theme created for a global event company. This was a collective effort of developers working on the backend dashboard and front end functionality.",
		link: "https://encoreglobal.com/",
		languages: [
			"React",
			"JS",
			"PHP",
			"WordPress"
		],
		logo: "https://erik-portfolio.s3.amazonaws.com/encore-logo.png",
		image: "https://erik-portfolio.s3.amazonaws.com/encore.png",
		background: "#e2e2e2",
		company: "Cognistx"
	},
	venture: {
		title: "Venture Outdoors",
		description: "A custom WordPress theme that was built to integrate with third-party service Salesforce and Authorize.net. The website was primarily built to accept outing reservations and payments.",
		link: "https://ventureoutdoors.org/",
		languages: [
			"JS",
			"PHP",
			"WordPress"
		],
		logo: "https://erik-portfolio.s3.amazonaws.com/venture-logo.png",
		image: "https://erik-portfolio.s3.amazonaws.com/venture.png",
		background: "#FFFFFF",
		company: "Shift Collaborative"
	},
	sustainable: {
		title: "Sustainable Pittsburgh",
		description: "A custom section of the site that was built to display restaurants based on their sustainable score and link to their individual restaurant landing page.",
		link: "https://sustainablepghrestaurants.org/site/restaurant-finder/",
		languages: [
			"PHP",
			"WordPress",
			"JS"
		],
		logo: "https://erik-portfolio.s3.amazonaws.com/spr-logo.png",
		image: "https://erik-portfolio.s3.amazonaws.com/sustainable.png",
		background: "#E4F1F1",
		company: "Shift Collaborative"
	},
	scopd: {
		title: "Scopd",
		description: "A mobile application build in ReactNative that connects people in businesses and college campuses. A chat feature was also built into the app using Laravel and Node on the backend of the service.",
		link: "https://apps.apple.com/us/app/scopd/id1498082593",
		languages: [
			"PHP",
			"ReactNative",
			"Laravel"
		],
		logo: "https://erik-portfolio.s3.amazonaws.com/scopd-logo.png",
		image: "https://erik-portfolio.s3.amazonaws.com/scopd.png",
		background: "#eceef4",
		company: "Nearby Creative"
	},
	forging: {
		title: "Forging PGH",
		description: "A custom WordPress theme created for the City Of Pittsburgh geared towards accessibility and custom functionality.",
		link: "https://forgingpgh.org",
		languages: [
			"JS",
			"PHP",
			"WordPress"
		],
		logo: "https://erik-portfolio.s3.amazonaws.com/forgingpgh-logo.png",
		image: "https://erik-portfolio.s3.amazonaws.com/forging.png",
		background: "#FFFFFF",
		company: "Thought Form"
	},
	msa: {
		title: "MSA",
		description: "A custom blog theme for for a Safety company with custom filtering.",
		link: "https://blog.msasafety.com/",
		languages: [
			"PHP",
			"WordPress",
			"JS"
		],
		logo: "https://erik-portfolio.s3.amazonaws.com/msa-logo.png",
		image: "https://erik-portfolio.s3.amazonaws.com/msa.png",
		background: "#000000",
		company: "Shift Collaborative"
	},
	apogee: {
		title: "Apogee Resources Group",
		description: "A custom WordPress theme for a local staffing agency.",
		link: "http://argpgh.com/",
		languages: [
			"PHP",
			"WordPress",
			"JS"
		],
		logo: "https://erik-portfolio.s3.amazonaws.com/apogee-logo.png",
		image: "https://erik-portfolio.s3.amazonaws.com/argpgh.png",
		background: "#FFFFFF",
		company: "Bright Thought"
	}
}
