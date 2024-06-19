const obj = {
    country: 'Croatia',
    city: 'Split',
    street: 'Zagrebacka',

    getInfo: function() {
        for (let key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }
};

obj.getInfo();
obj.buildingNumber = 16;
obj.getInfo();
