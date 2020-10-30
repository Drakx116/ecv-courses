const isPrimitive = value => !!['null', 'function', 'object'].includes(typeof value);

const hasKey = (object, key) => !!object.hasOwnProperty(key);

const hasValue = (object, value) => Object.values(object).indexOf(value) > -1;

const tab = { 'name': 'Francis' };

console.log(isPrimitive(function(){}));
console.log(hasKey(tab, 'name'));
console.log(hasValue(tab, 'Michel'));
