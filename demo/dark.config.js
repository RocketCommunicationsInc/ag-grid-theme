const baseUrl = "http://localhost:3000/";

const scenarios = [
	{
		label: 'home',
		url: baseUrl,
		misMatchThreshold: 1e-10,
		requireSameDimensions: false,
	}
];

const projectId = "dark";
module.exports = {
	id: projectId,
	scenarios,
	paths: {
		bitmaps_reference: `backstop_data/snapshots/${projectId}`,
		bitmaps_test: `backstop_data/bitmaps_test/${projectId}`,
		ci_report: "backstop_data/ci_report",
		engine_scripts: "backstop_data/engine_scripts",
		html_report: `backstop_data/html_report/${projectId}`,
	},
	report: ["browser"],
	engine: "puppeteer",
	engineOptions: {
		args: ["--no-sandbox"],
	},
	asyncCaptureLimit: 10,
	asyncCompareLimit: 100,
	viewports: [
		{
			height: 768,
			label: "PC",
			width: 1920,
		},
	],
};
