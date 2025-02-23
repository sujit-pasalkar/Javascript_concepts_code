let obj = {
    id: 1
};

obj.__proto__ = {name :'proto_sujit'}
obj.prototype = {name :'proto_sujit2'}


console.log(obj.name)


function Person(name){
    this.name = name;
}

let p = new Person('sujit')
Person.prototype.abc = function(){return 'hi from proto abc'}
 console.log(p);



let a = {sujit:'sujit'}
a.__proto__.name = function(){return 'hi '+ this.sujit} // will name() functiom in a object
 