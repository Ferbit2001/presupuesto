export class Receta {
    constructor(name, ingredients = [], duration = null, image = null, preparation = null){
        this.name = name;
        this.ingredients = ingredients;
        this.duration = duration;
        this.preparation = preparation;
    }
}

export class Ingrediente {
    constructor(name, carbs, protein, fat, calories, category=null, grams_per_unit=null) {
        this.name = name;
        this.carbs = carbs;
        this.protein = protein;
        this.fat = fat;
        this.calories = calories;
        this.category = category;
        this.grams_per_unit = grams_per_unit;
    }
}

export class Precio {
    constructor(name, price = null, shop = null, price_per_unit = null, unit = null, quantity = null) {
        this.name = name;
        this.price = price;
        this.shop = shop;
        this.price_per_unit = price_per_unit;
        this.unit = unit;
        this.quantity = quantity;
   }
}