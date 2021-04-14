const baseUrl = "https://3001-chocolate-urial-jd5bvptg.ws-eu03.gitpod.io/api"; //process.env.BACKEND_URL; para que funcione con heroku
const searchWiki = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search="; // lo que se añade debe ser después de search
const wikiUrl2 = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&origin=*&titles="; // lo que se añade debe ser después de search
const tiempoEs = "https://www.el-tiempo.net/api/json/v2/provincias"; //añadida api el tiempo.es provincias/[codprov]/municipios/[COD_GEO]
const wikiLink = "https://en.wikipedia.org/wiki/";
const holidayApiKey = "f9592d0d29934527b7d8bf7e270d5063";
const token = localStorage.getItem("token");
//for the getHoliday function 
const d = new Date();
const day = d.getDate()
const month = d.getMonth() + 1;
const year = d.getFullYear();
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			favorites: [],
			posts: [],
			cities: [],
			likes: [],
			loginUser: 1,
			cityWeather: {},
			cityInfo: [],
			goWiki: []
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
						callback(data);
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
						setStore({
							token: data.token,
							loginUser: data.id
						});
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
				const actions = getActions();
				let detail = store.cities.filter(city => {
					return city.city_name === cityName;
				})[0];

				actions.getweathercity(detail.ine_url);
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
					.then(data => setStore({ posts: data }));
			},
			publishPost(data) {
				const store = getStore();
				const actions = getActions();
				const endpoint = `${baseUrl}/posts`;
				let headers = {
					"Content-Type": "application/json"
				};
				headers["Authorization"] = `Bearer ${store.token}`;
				const config = {
					method: "POST",
					body: JSON.stringify({
						city_id: data.cityId,
						text: data.text
					}),
					headers: headers
				};
				fetch(endpoint, config)
					.then(response => response.json())
					.then(() => {
						actions.postCity(data.cityId);
					});
			},
			getLikesUser(id_user) {
				const endpoint = `${baseUrl}/users/${id_user}/likes`;
				const config = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				///////////////////////// FETCH
				fetch(endpoint, config).then(response => response.json());
				//.then(data => console.log(data));
			},

			getweathercity(url) {
				//let weatherData = {};
				const endpoint = url;
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => setStore({ cityWeather: data }));
			},

			getCityInfo(city_name) {
				const endpoint = `${wikiUrl2}${city_name}&format=json`;
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => {
						let page = data.query.pages;
						let pageId = Object.keys(page)[0];
						let content = page[pageId].extract;
						setStore({ cityInfo: content });
						setStore({ goWiki: `${wikiLink}${city_name}` });
					});
			},

			getHoliday(city_name) {
                const api_key = "f9592d0d29934527b7d8bf7e270d5063"
                const endpoint = `https://holidays.abstractapi.com/v1?api_key=${api_key}&country=ES&year=${year}&month=${month}&day=${day}`
                //const endpoint = `https://holidays.abstractapi.com/v1?api_key=${api_key}&country=ES&year=${year}&month=05&day=2`
                const config = {
                        method: "GET"
                    };
                fetch(endpoint, config)
                    .then(response => response.json())
                    .then(data => {
                        const info = data[0].type
                        const dateMonth = data[0].date_month
                        console.log(dateMonth)
                        if(dateMonth > month){
                            document.getElementById("holiday").innerHTML = `${info}: ${data[0].name}`;
                            console.log(info)
                        }
                    })
			}
		}
	};
};
export default getState;
