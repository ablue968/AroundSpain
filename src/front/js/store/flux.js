const baseUrl = "https://3001-d3f276b0-2b6e-4741-a0ef-819bc021e31a.ws-eu03.gitpod.io/api";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {},
		actions: {
			newUser(data) {
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
			},

			login(data) {
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
				///////////////////////// FETCH
				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => console.log(data));
			}
		}
	};
};

export default getState;
