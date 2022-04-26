import API from "./api"

const AuthService = {
    login: (data) => {
        // data is user info without password displayed with json web token
        return  API.post("/login", data)
            // retrieve data from the promise and set header and local storage
            .then(({data}) => {
                setHeaderAndStorage(data)
                return data;
            })
            .catch(err => {
                console.log("Auth service err", err);
                throw err;
            })
    },
    
    register: (data) => {
        return  API.post("/register", data)
            .then(({data}) => {
                setHeaderAndStorage(data)
                return data;
            })
            .catch(err => {
                console.log("Auth service err", err);
                throw err;
            })
    },

    logout: () => {
        API.defaults.headers["Authorization"] = '';
        localStorage.clear();
    }
}

const setHeaderAndStorage = ({user,token}) => {
    API.defaults.headers["Authorization"] = `Bearer ${token}`;
    // The localStorage read-only property of the window interface 
    // allows you to access a Storage object for the Document's origin,
    // the stored data is saved across browser sessions.

    // Storage.setItem() accesses the current domain's local Storage object
    // and adds a data item to it
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
}

export default AuthService