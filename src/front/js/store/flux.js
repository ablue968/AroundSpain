const baseUrl = "https://3001-db50ee9a-4622-43a4-a94c-fe473bbebbf2.ws-eu03.gitpod.io/api";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {},
		actions: {
			newUser(data) {
				console.log(data);
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
					.then(data => console.log(data));
			}
		}
	};
};

export default getState;
