import { request } from 'https://cdn.pika.dev/@octokit/request';

async function getReleases() {
	const result = await request("GET /repos/{owner}/{repo}/releases", {
		owner: "MorganGrundy",
		repo: "MosaicMagnifique"
	});
	
	var releaseDiv = document.getElementById("releases");
	
	for (var release of result.data) {
		console.log(release);
		
		releaseDiv.innerHTML = releaseDiv.innerHTML + "<br>" + release.name;
	};
}

getReleases();