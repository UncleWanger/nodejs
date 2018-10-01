console.log('a扫地');

console.log('b点菜');

setTimeout(function () {
    console.log('b点菜 settimeout');
},0);

process.nextTick(function () {
    console.log('b点菜 nexttick');
});
console.log('c买菜');

console.log('d烧菜');
setImmediate()