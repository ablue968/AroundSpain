const baseUrl = "https://3001-fce8c995-0e4e-416e-a040-75b77a567f6e.ws-eu03.gitpod.io/api";

const cityPopulationURL = null; //LA API DEL INE ES UN CAOS
const weatherCity = null; // en https://www.el-tiempo.net/api tenemos toda lo relacionado con tiempo, es más facil que la del ine
//
const token = localStorage.getItem("token");

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			favorites: [],
			posts: [],
			cities: []
		},
		actions: {
			newUser(data, callback) {
				const endpoint = `${baseUrl}/users`;
				const config = {
					method: "POST",
					body: JSON.stringify({
						user_name: data.username,
						first_name: data.firstName,
						last_name: data.lastName,
						email: data.email,
						country: data.country,
						languages: data.languages,
						password: data.password
					}),
					headers: {
						"Content-Type": "application/json"
					}
				};
				///////////////////////// FETCH
				fetch(endpoint, config)
					.then(response => {
						if (!response.ok) {
							throw Error("veamos que aparece");
						}
						return response.json();
					})
					.then(data => {
						console.log(data, "usuario creado");
						callback();
					})
					.catch(error => {
						console.log(error);
					});
			},

			login(data, callback) {
				console.log(data, "inicio del flux, data que recibe");
				const endpoint = `${baseUrl}/login`;
				const config = {
					method: "POST",
					body: JSON.stringify({
						email: data.email,
						password: data.password
					}),
					headers: {
						"Content-Type": "application/json"
					}
				};

				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => {
						setStore({ token: data.token });
						localStorage.setItem("token", data.token);
						callback();
					});
			},

			logOut() {
				localStorage.removeItem("token");
				setStore({ token: null });
			},

			addFav(item) {
				const actions = getActions();
				const store = getStore();
				if (store.token) {
					let newList = store.favorites;

					newList.push(item);
					newList = [...new Set(newList)];
					setStore({ favorites: newList });
				}
				//debo crear action que sea para llevar al login
			},

			cityDetail(cityName) {
				//añadir a la lista
				const store = getStore();

				let detail = store.cities.filter(city => {
					return city.city_name === cityName;
				})[0];

				return detail;
			},

			deleteFav(item) {
				//eliminar de la lista
				const store = getStore();
				let newList = store.favorites.filter(element => {
					return element != item;
				});
				setStore({ favorites: newList });
				//console.log(store.favorites);
			},

			deleteAllFav() {
				//eliminar de la lista
				setStore({ favorites: [] });
				//console.log(store.favorites);
			},

			getAllCities() {
				const endpoint = `${baseUrl}/cities`;
				const config = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => {
						setStore({ cities: data });
					});
			},

			postCity(city_id) {
				const endpoint = `${baseUrl}/cities/${city_id}/posts`;
				const config = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				///////////////////////// FETCH
				fetch(endpoint, config)
					.then(response => response.json())

					.then(data => {
						console.log("data del post en flux", data);
						setStore({ posts: data });
					});
			}
		}
	};
};

export default getState;
