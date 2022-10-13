import axios from 'axios';


let getAllUsersURL = "http://localhost:8080/travelgo/user/getAllUsers"; 
let getUserByIdURL = "http://localhost:8080/travelgo/user/getUserById/";
let updateUserByIdURL = "http://localhost:8080/travelgo/travelgo/user/updateUserById/";



export async function UpdateUser(id,data) {
    const alldata = {
      
        
        

        email:data.email,
        userName:data.userName,
        contactNumber:data.contactNumber,


    };

    return await axios.patch(updateUserByIdURL + id,alldata);
}




export async function getAllUsers() { 
    return await axios.get(getAllUsersURL);
}

export async function getUser(id) { 
    return await axios.get(getTourPackagessByIdURL + id);
}