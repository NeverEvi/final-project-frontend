const baseUrl = "https://pokeapi.co/api/v2/pokemon"
export function request(url, options) {
	return fetch(url, options).then(getResponse);
}
export const getResponse = (res) => {
	if (res.ok) {
		return res.json();
	} else {
		return Promise.reject(`Error: ${res.status}`);
	}
};
export const getPokemon = (id) => {
    const pokeApi = request(`${baseUrl}/${id}`)
    return pokeApi;
}
export const getFlavor = (id) => {
    const pokeApi = request(`${baseUrl}-species/${id}`)
    return pokeApi;
}