(()=>{
    const mongoose = require('mongoose');
    const {URI,config} = require('../config')

    mongoose.connect(URI, config)
        .then(()=>{console.log('*****Conectado*****')})
        .catch((err)=>{console.error(err)})
    // do nothing till the connection is established
    while(mongoose.connection.readyState !== 1) {
        require('deasync').sleep(100);
    }
})();


const controller = require('../controller');

let testFood = {
    "_id": "62f164783b358927bbd6cee5",
    "calories": 4,
    "carbs": 1,
    "fat": 3,
    "name": "test",
    "protein": 2
}

describe('Food', () => {
    it('should get test food', async () => {
        let {name, calories, carbs, fat, protein} = await controller.get(testFood._id);
        expect(name).toEqual(testFood.name);
        expect(calories).toEqual(testFood.calories);
        expect(carbs).toEqual(testFood.carbs);
        expect(fat).toEqual(testFood.fat);
        expect(protein).toEqual(testFood.protein);
    });
});