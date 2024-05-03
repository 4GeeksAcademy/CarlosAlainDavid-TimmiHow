const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: undefined,
			authenticatedUser: undefined,
			localStorageCheck: undefined,
			errorMessages: null,
			successMessages: null,
			courses: undefined,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

			logIn: async (body) => {
				const response = await fetch(
					process.env.BACKEND_URL + "/api/log-ins", {
					method: "POST",
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json"
					}
				}
				);
				if (response.status !== 201) return false;
				const myBody = await response.json();
				setStore({ token: myBody.access_token });
				setStore({ authenticatedUser: myBody });
				localStorage.setItem("token", myBody.access_token)
				localStorage.setItem("username", myBody.username)
				localStorage.setItem("role", myBody.role)

				return true;
			},

			register: async (body) => {
				const response = await fetch(
					process.env.BACKEND_URL + "/api/register", {
					method: "POST",
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json"
					}
				}
				);

				const data = await response.json();
				if (response.status !== 201) {
					setStore({ errorMessages: data.message });
					return false;
				} else {
					setStore({ successMessages: data.message });
					return true;
				}



			},

			checkTokenOnLocalStorage: () => {
				if (localStorage.getItem("username")) {
					setStore({ username: localStorage.getItem("username") });
				}
				if (localStorage.getItem("role")) {
					setStore({ role: localStorage.getItem("role") });
				}
				if (localStorage.getItem("token")) {
					setStore({ token: localStorage.getItem("token") });
				}
				setStore({ localStorageCheck: true });
			},

			fecthPrivateEndPoint: async () => {
				const store = getStore();
				const response = await fetch(
					process.env.BACKEND_URL + "/api/private", {
					headers: {
						"Content-Type": "aplication/json",
						"Authorization": "Bearer " + store.token
					}
				}
				);
				const body = await response.json();
				setStore({ privateData: body.message });
			},

			logUserOut: () => {
				setStore({
					token: undefined,
					authenticatedUser: undefined
				});
				if (localStorage.getItem("token")) {
					localStorage.removeItem("token");
				}
				if (localStorage.getItem("username")) {
					localStorage.removeItem("username");
				}
				if (localStorage.getItem("role")) {
					localStorage.removeItem("role");
				}
			},
			getCourses: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/courses")
					const data = await resp.json()
					setStore({ courses: data })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading courses from backend", error);
				}

				// console.log("Error loading courses from backend", error);
			},

			getCustomerCourses: async (id) => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + `/api/consumer/${id}`)
					const data = await resp.json()
					setStore({ consumerCourses: data })

					return data;
				} catch (error) {
					console.log("Error loading courses from backend", error);
				}

			},

			resetEndPointsMsg: () => { setStore({ errorMessages: null, successMessages: null }) },
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
