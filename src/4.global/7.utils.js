var utils = require('util');

function Parent(){
    this.name = 'parent';
    this.age = 6;
    this.say = function () {
        console.log(this.name);
    };
}

Parent.prototype.showName = function(){
    console.log(this.name);
}

function Child(){
    this.name = 'child';

}

// Child.prototype = new Parent();
// var child = new Child();
// child.showName();
// console.log(child.age);
//
// console.log(child.__proto__.__proto__.__proto__ === Object.prototype)

/*
此方法的缺点： 不能传参，并且不能保护私有属性
 */


// Child.prototype = Object.create(Parent.prototype);
// var child = new Child();
// console.log(child.name + child.age);
//
// utils.inherits(Child, Parent);


function person(){
    name = 'jerry';
    parent = {
        name:'parent',
        sex:'male'
    }
}

person.prototype.toString = function () {
    console.log('this is ' + this.name);
};
var person = new person();
person.toString();
console.log(utils.inspect(person, true, 1, true));
