const remoteURL = "http://localhost:8088";

export default class APIManager {
//target: json parameter to query                       eg. "users", "articles", "tasks"    -   must be in string format
//id: target/id;                                        eg. 1   -   must be in number format
//expandArray: array of paramters to expand on          eg. ["task", "article"]     -   must be in string format

getById(target, id, expandArray = []){
    //add traling string of expand parameters for non-empty expandArray
    let expandQuery = expandArray.length > 0 ? "?" : "";
    if(expandArray.length > 0) {
        expandArray.forEach((elem) => {
                expandQuery += `_expand=${elem}&`;
            });
    }
    let url = `${remoteURL}/${target}/${id}/${expandQuery}`;
    return fetch(url).then((res) => res.json());
}

getAll(target, expandArray = []) {
    let expandQuery = expandArray.length > 0 ? "?" : "";
    if (expandArray.length > 0) {
        expandArray.forEach((elem) => {
            expandQuery += `_expand=${elem}&`;
        });
    }
    let url = `${remoteURL}/${target}/${expandQuery}`;
    return fetch(url).then((res) => res.json());
}

getAllByUserId(target, userId, expandArray = []) {
    let queryParamaters = "?";
    if (expandArray.length > 0) {
        expandArray.forEach((elem) => {
            queryParamaters += `_expand=${elem}&`;
        });
    }
    queryParamaters += `userId=${userId}`;
    let url = `${remoteURL}/${target}/${queryParamaters}`;
    return fetch(url).then((res) => res.json());
}

getAllByUserArray(target, userArray, expandArray = []) {
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"));
    let queryString = "?";
    userArray = [...userArray, currentUserId];
    userArray.forEach((userId) => {
        queryString += `userId=${userId}&`;
    });

    if (expandArray.length > 0) {
        expandArray.forEach((elem) => {
            queryString += `_expand=${elem}&`;
        });
    }
    let url = `${remoteURL}/${target}/${queryString}`;
    return fetch(url).then((res) => res.json());
}

getRandomId(target) {
    return fetch(`${remoteURL}/${target}`)
        .then((result) => result.json())
        .then((objArray) => {
            const randomIndex = Math.floor(Math.random() * objArray.length);
            const randomObj = objArray[randomIndex];
            return randomObj.id;
        });
}

delete(target, id) {
    return fetch(`${remoteURL}/${target}/${id}`, {
        method: "DELETE",
    }).then((result) => result.json());
}

addEntry(target, newEntry) {
    return fetch(`${remoteURL}/${target}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry),
    }).then((response) => response.json());
}

updateEntry(target, updatedEntry) {
    return fetch(`${remoteURL}/${target}/${updatedEntry.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEntry),
    }).then((response) => response.json());
}


getAllRidesByPark(target, parkId, expandArray = []) {
    let expandQuery = expandArray.length > 0 ? "?" : "";
    if (expandArray.length > 0) {
        expandArray.forEach((elem) => {
            expandQuery += `_expand=${elem}&`;
        });
    }
    let url = `${remoteURL}/${target}/${expandQuery}`;
    return fetch(url).then((res) => res.json());
}




}