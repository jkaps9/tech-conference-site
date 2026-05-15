// ===== SITE CONSTANTS =====
export const SITE = {
	title: "DevHorizon",
	tagline: "Three-day engineer conference",
	description: "A three-day conference for engineers who build the interfaces humans use every day.",
	url: "https://devhorizon26.netlify.app/",
	author: "DevHorizon",
	locale: "en",
};

// ===== BUSINESS INFO =====
export const BUSINESS = {
	name: SITE.title,
	email: "info@pearlriverweb.com",
	phoneForTel: "555-867-5309",
	phoneFormatted: "(555) 867-5309",
	logo: "/assets/favicons/favicon.svg",
	address: {
		lineOne: "Pier 70",
		lineTwo: "",
		city: "San Francisco",
		state: "CA",
		zip: "",
		mapLink: "https://maps.app.goo.gl/a25o47tp5RzJ2URJ7",
	},
	socials: {
		facebook: "https://www.facebook.com/",
		instagram: "https://www.instagram.com/",
	},
};

// ===== SEO DEFAULTS =====
export const SEO = {
	title: SITE.title,
	description: SITE.description,
};

// ===== OPEN GRAPH DEFAULTS =====
export const OG = {
	locale: "en_US",
	image: "/assets/social.png", // Default fallback social image located in public/
};