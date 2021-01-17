const baseUrl = "https://3001-ec11b293-8fe5-4d8f-a1a6-73c81007f0a9.ws-eu03.gitpod.io/api";
const cityPopulationURL = null; //LA API DEL INE ES UN CAOS
const weatherCity = null; // en https://www.el-tiempo.net/api tenemos toda lo relacionado con tiempo, es más facil que la del ine
//

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null
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
						console.log(data);
						callback();
					});
			},

			login(data) {
				const actions = getActions();
				console.log(data, "Desde flux en login");
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
					});
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

			// Creo que test se puede borrar
			test() {
				const store = getStore();
				console.log({ TOKEN_TEST: store.token });
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
					.then(data => console.log(data));
			}
		}
	};
};

export default getState;
