class Api{
    constructor(url){
        this.url = '/v1/'+url+'/';
        this.x = async (url, body = null) => { 
            return await fetch(this.url + url,{
                method: this.method, body, headers: { 'Content-Type': 'application/json' }
            }).then(res => res.json()); 
        }
        this.get = async (id = '') => { this.method= 'GET';return await this.x(id) };
        this.post = async (id = '', body) => { this.method = 'POST'; return await this.x(id,JSON.stringify(body)) }; 
        this.put = async (id, body) =>  { this.method = 'PUT'; return await this.x(id,JSON.stringify(body)) }; 
        this.delete = async (id) => { this.method = 'DELETE'; return await this.x(id) };
        this.q = async (name) => { this.method = 'POST'; return await this.x(name); };
    }
}

const Ingredient = new Api('ingredient');
const Recipe = new Api('recipe');
const Price = new Api('price');

export { Ingredient, Recipe, Price };
