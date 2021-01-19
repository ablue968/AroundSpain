const baseUrl = "https://3001-c8ae4f6f-3ea8-4d8e-b228-3b0c990ce626.ws-eu03.gitpod.io/api";
const cityPopulationURL = null; //LA API DEL INE ES UN CAOS
const weatherCity = null; // en https://www.el-tiempo.net/api tenemos toda lo relacionado con tiempo, es más facil que la del ine
//
const token = localStorage.getItem("token");
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			favorites: [],
			posts: []
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
						password: data.password,
						active: true,
						avatar: null
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
				if (store.favorites.includes(item) == true) {
					let newList = store.favorites.filter((element, index) => {
						return element != item;
					});
					setStore({ favorites: newList });
				} else {
					const newList = [...store.favorites];
					newList.push(item);
					setStore({ favorites: newList });
				}
				//console.log(store.favorites);
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
