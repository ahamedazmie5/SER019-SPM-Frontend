import axios from 'axios';


let getAllUsersURL = "http://localhost:8080/user/getAllUsers"; 
let getUserByIdURL = "http://localhost:8080/user/getUserById/";
let updateUserByIdURL = "http://localhost:8080/user/updateUserById/";



export async function updateUserById(id,data) {
    const alldata = {
      
        
        
        Fullname: data.Fullname,
        pNumber: data.pNumber,
        email: data.email,


    };

    return await axios.patch(updateUserByIdURL + id,alldata);
}




export async function getAllUsers() { 
    return await axios.get(getAllUsersURL);
}

export async function getUser(id) { 
    return await axios.get(getUserByIdURL + id);
}