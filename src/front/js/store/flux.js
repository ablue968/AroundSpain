const baseUrl = "https://3001-db50ee9a-4622-43a4-a94c-fe473bbebbf2.ws-eu03.gitpod.io/api";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {},
		actions: {
			newUser(data) {
				const endpoint = `${baseUrl}/users`;
				const config = {
					method: "POST",
					body: JSON.stringify({
						user_name: data.user_name,
						first_name: data.first_name,
						email: data.email,
						country: data.country,
						languages: data.languages,
						password: data.password,
						active: data.active
					}),
					headers: {
						"Content-Type": "aplication/json",
						"Access-Control-Allow-Origin": "*"
					}
				};
				//falta el fetch
			}
		}
	};
};

export default getState;
