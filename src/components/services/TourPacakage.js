import axios from 'axios';


let getAllTourPackagesURL = "http://localhost:8080/travelgo/getAllTourPackages"; 
let getTourPackagessByIdURL = "http://localhost:8080/travelgo/getTourPackages/";
let UpdateTourPackagesByIdURL = "http://localhost:8080/travelgo/UpdateTourPackages/";



export async function UpdateTourPackages(id,data) {
    const alldata = {
      
        
        

        title:data.title,
        description:data.description,
        topic:data.topic,


    };

    return await axios.patch(UpdateTourPackagesByIdURL + id,alldata);
}




export async function getAllTourPackages() { 
    return await axios.get(getAllTourPackagesURL);
}

export async function getTourPackages(id) { 
    return await axios.get(getTourPackagessByIdURL + id);
}



