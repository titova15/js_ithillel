var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services.calculatePrices = function() {
    let total = 0;
    let min = Infinity;
    let max = -Infinity;

    for (let service in this) {
        if (this.hasOwnProperty(service) && typeof this[service] === 'string') {
            let price = parseFloat(this[service]);

            total += price;

            if (price < min) {
                min = price;
            }

            if (price > max) {
                max = price;
            }
        }
    }

    return {
        total: total + ' грн',
        min: min + ' грн',
        max: max + ' грн'
    };
};

let prices = services.calculatePrices();
console.log('Total Price:', prices.total);
console.log('Min Price:', prices.min); 
console.log('Max Price:', prices.max); 

services['Розбити скло'] = '200 грн';

prices = services.calculatePrices();
console.log('Total Price:', prices.total); 
console.log('Min Price:', prices.min); 
console.log('Max Price:', prices.max); 
