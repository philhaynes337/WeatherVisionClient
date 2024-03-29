import config from "../ApiConfig";

const AuthService = {
  postLogin(credentials) {
      //console.log();
    return fetch(`${config.API_ENDPOINT}/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        'authorization': `Bearer ${config.API_KEY}`
      },
      body: JSON.stringify(credentials)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        'authorization': `Bearer ${config.API_KEY}`
      },
      body: JSON.stringify(user)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getUserId() {
    return fetch(`${config.API_ENDPOINT}/loggedin/test`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${config.API_KEY}`
      },

    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
        

  },
};

export default AuthService;