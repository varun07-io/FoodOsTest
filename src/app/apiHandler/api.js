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
        console.log("Local Storage : ", JSON.parse(localStorage.getItem("token")))
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



// *? Admin Auth
export const signin = data => {
    return axios.post(`${API}/signin`, data)
        .then((res) => {
            console.log(res)
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



// *? Branch

// ** Create Branch
export const createBranch = data => {
    return axios.post(`${API}/admin/manage/branch/create`, data)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log("Error in Creating Branch", err)
        });
}

// ** Edit Branch Password
export const editBranchPassword = data => {
    console.log(data)
    return axios.put(`${API}/admin/manage/branch/${data.branchname}/edit/password`, data)
        .then((res) => {
            return res;
        }).catch((err) => {
            console.log("Error couldn't edit the password")
        });
}

export const getAllBranch = data => {
    return axios.get(`${API}/admin/manage/branch/all`)
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            console.log("Error in fetching all branches");
        });
}

// *? Category

// ** Get All Categories

export const getAllCategories = data => {
    return axios.get(`${API}/admin/category/manage/all`)
        .then((res) => {
            // console.log("All Category", res.data.data);
            return res.data.data
        })
        .catch((error) => {
            console.log("Error getAllCategory", error)
        });
}

// ** Get A Category

export const getACategory = categoryId => {
    return axios.get(`${API}/admin/category/manage/all/${categoryId}`)
        .then((res) => {
            // console.log(res);
            return res.data.msg;
        })
        .catch((err) => {
            console.log(err)
        });
}


// Add category 
export const createCategory = data => {

    console.log(data)
    return axios.post(`${API}/admin/category/manage/create`, data)
        .then((res) => {
            console.log("create category response", res)
            return res;
        })
        .catch((error) => {
            console.log("create category error", error)
        })
}

// Delete category
export const deleteCategory = categoryId => {
    // console.log(categoryId);  /manage/delete/:categoryId
    return axios.delete(`${API}/admin/category/manage/delete/${categoryId}`)
        .then((res) => {
            return res;
        }).catch((err) => {

        })
}

// Edit category
export const editCategory = data => {
    console.log("Edit Category : ", data)
    return axios.put(`${API}/admin/category/manage/edit/${data.categoryId}`, data)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        });
}