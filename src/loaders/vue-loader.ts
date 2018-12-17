export const VueLoader = {
    get(url: string) {
        const options: RequestInit = {
            method: 'GET',
            // mode: 'no-cors',
            headers: {
                // 'Content-type': 'application/json',
                'Content-type': 'text/plain'
                // 'Access-Control-Allow-Credentials':'*',
                // 'Access-Control-Allow-Origin':'*'
            }
        };

        return fetch(url, options).then(response => response);
    }
};
