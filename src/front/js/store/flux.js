const baseUrl = "https://3001-a5f21c8a-030e-4c63-9e36-15e21ec3cc73.ws-eu03.gitpod.io/api";
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
