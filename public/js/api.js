// main api function get "this" configuration to send to the api

const api = async () => {
    return await fetch(
        hostname + this.url + this.id,
        {
            method: this.method,
            body: (this.body) ? JSON.stringify(this.body) : null,
            headers: { 'Content-Type': 'application/json' }
        }
    )
    .then(res => res.json())
    .then(data => {return data})
    .catch(console.log)
}

// general functions based on api function, changing this.method, this.body and this.id 
// it can send to the api function the information. 

const get = (id) => {
    this.method = 'GET';
    this.body = null;
    this.id = id;
    return api()
}
const all = () => {
    this.method = 'GET'
    this.body = null
    this.id = ''
    return api() 
}
const put = (id,body) => {
    this.method = 'PUT';
    this.body = body;
    this.id = id;
    return api()
}
const add = (body) => {
    this.method = 'POST';
    this.body = body;
    this.id = '';
    return api()
}
const del = (id) => {
    this.method = 'DELETE';
    this.body = null;
    this.id = id;
    return api()
}
const search = (name) => {
    this.method = 'POST';
    this.body = null;
    this.id = name;
    return api()
}