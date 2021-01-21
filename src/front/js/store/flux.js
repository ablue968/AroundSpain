const baseUrl = "https://3001-c69b3bcb-28ef-4afe-be9f-2350b9b6ac84.ws-eu03.gitpod.io/api";

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
					.then(response => response.json())
					.then(data => {
						console.log(data, "usuario creado");
						callback();
					});
			},

			login(data, callback) {
				const actions = getActions();
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
						actions.test();
						callback();
						console.log(data, "usuario logeado y redirigido al home");
					});
			},

			logOut() {
				localStorage.removeItem("token");
				setStore({ token: null });
			},

			addFav(item) {
				//añadir a la lista
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

			//HE CREADO EL FETCH DE API, para cuando consigamos ver como carajo funciona el ine
			population() {
				const store = getStore();
				const endpoint = `${cityPopulationURL}`;
				const config = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => console.log("DATOS DE POBLACION", data));
			},
			getAllCities() {
				const store = getStore();
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
						console.log("cities", data);
						setStore({ cities: data });
					});
			},

			postCity(id) {
				const endpoint = `${baseUrl}/cities/${id}/posts`;
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
						setStore({ posts: data });
					});
			},

			// Creo que test se puede borrar
			test() {
				const store = getStore();
				console.log({ TOKEN_TEST: store.token }, "token que recibe para el login");
				const endpoint = `${baseUrl}/test`;
				const config = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					}
				};
				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => console.log(data, "este es el test"));
			}
		}
	};
};

export default getState;
