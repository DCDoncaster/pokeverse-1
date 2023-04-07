import { default as swr } from "swr";

async function fetcher(...args) {
	const response = await fetch(...args);
	return response.json();
}

function useSWR(url) {
	return swr(url, fetcher);
}

export { useSWR as default, swr as useSWR, fetcher };
