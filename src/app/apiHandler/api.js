import { API, API_PROD } from "../../backend";
import axios from "axios";


export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("token", JSON.stringify(data.data));
        next();
    }
};

export const isAutheticated = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("token")) {
        // console.log("Local Storage : ", JSON.parse(localStorage.getItem("token")))
        return JSON.parse(localStorage.getItem("token"));
    } else {
        return false;
    }
};


export const createTax = data => {
    return axios.post(`${API}/admin/tax/manage/tax/create`, data)
        .then((res) => {
            console.log("yes", res)
            return res
        })
        .catch((err) => {
            console.log("Couldn't create Tax")
        });
}

//Package API

export const createPackage = data => {
    return axios.post(`${API}/admin/manage/pacakge/create`, data)
        .then((res) => {
            console.log("yes", res)
            return res
        })
        .catch((err) => {
            console.log("Couldn't create Package")
        });
}


export const getUserToken = () => {
    return JSON.parse(localStorage.getItem("token")).token
}


// *? Admin Auth
export const signin = data => {
    return axios.post(`${API}/signin`, data)
        .then((res) => {
            // console.log(res)
            return res;
        })
        .catch((err) => {
            console.log("Error couldn't perform authendicated")
        });
}

export const signout = () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("token");
    }
}



// ** Profile Status
export const isProfileCompleted = async() => {
    const id = await getUserIdFromToken();

    return axios.get(`${API}/profile/status/${id}`)
        .then((res) => {
            console.log(res.data.status)
            return res.data.status
        })
        .catch((err) => {
            console.log("Error in Profile Checkking: ", err)
        })

}

export const getProfileId = async() => {
    const Id = await getUserIdFromToken();
    let Token = await getUserToken()
    return axios.get(`${API}/profile/id`, { headers: { Authorization: `Bearer ${Token}` } })
        .then(res => {
            console.log(res)
            return res.data.id
        })
        .catch(err => {
            console.log(err)
        })
}

export const getProfileData = async() => {
    const Id = await getUserIdFromToken();
    let Token = await getUserToken()
    return axios.get(`${API}/profile/data`, { headers: { Authorization: `Bearer ${Token}` } })
        .then(res => {
            console.log(res)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}


// ** Get User Id
export const getUserIdFromToken = () => {
    // console.log("OKOK: ", JSON.parse(localStorage.getItem("token")).user)
    return JSON.parse(localStorage.getItem("token")).user._id
}

// *? Create Profile

export const createRestaurantProfile = async(data) => {
    let Token = await getUserToken()
    return axios.post(`${API}/create/restaurant`, data, { headers: { Authorization: `Bearer ${Token}` } })
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
        })
}

// *? Create Menu
export const createMenuInRestaurant = async(data) => {
    let Token = await getUserToken()
    return axios.post(`${API}/create/menu`, data, { headers: { Authorization: `Bearer ${Token}` } })
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
        })
}

// *? Edit Menu
export const editMenuInRestaurant = async(data) => {
    let Token = await getUserToken()
    return axios.put(`${API}/edit/menu/${data.menuid}`, data, { headers: { Authorization: `Bearer ${Token}` } })
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
        })
}


// *? Delete Menu
export const deleteMenuInRestaurant = async(data) => {
    let Token = await getUserToken();
    return axios.delete(`${API}/delete/menu/${data.id}`, { headers: { Authorization: `Bearer ${Token}` } })
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
        })
}


// ** Get All Menu

export const getAllMenus = async() => {
    let Token = await getUserToken()
    return axios.get(`${API}/all/menu/1234`, { headers: { Authorization: `Bearer ${Token}` } }).then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
        })
}

// ** Get A Menu

export const getAMenu = async(menuId) => {
    let Token = await getUserToken()
    let profileId = await getProfileId();
    return axios.get(`${API}/a/menu/${profileId}/menuid/${menuId}`, { headers: { Authorization: `Bearer ${Token}` } })
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
        })
}