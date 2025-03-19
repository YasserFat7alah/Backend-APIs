const memoryStorage = require('memorystorage');

const store = new memoryStorage('Ya-Notes');


exports.getKeys = (store) => {
    var keys = [];
    for (var i=0; i<store.length; i++) {
        var key = store.key(i);
        keys.push(key);
    }
    return keys;
};

exports.getValues = (store) => {
    var values = [];
    for (var i=0; i < store.length; i++) {
         var value = store.getItem(store.key(i));
        values.push(value);
    }
    return values;
};


exports.store = store; // Export the notesStorage