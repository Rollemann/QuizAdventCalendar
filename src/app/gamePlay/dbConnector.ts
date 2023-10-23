const url = "http://localhost:8090/api/collections/";

export async function getDBData(urlExtension: string) {
    const opt: RequestInit = {
        method: 'GET', 
        cache: 'no-cache' 
    };
    return fetch(url + urlExtension, opt)
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}

export async function setDBData(urlExtension: string, body: Object) {
    const opt: RequestInit = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        cache: 'no-cache',
        body: JSON.stringify(body)
    };
    await fetch(url + urlExtension, opt);
}