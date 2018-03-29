var obj = {foo: "bar", bas: 42};
console.log(Object.values(obj));
//["bar", 42]

var obj = {0: 'a', 1: 'b', 2: 'c'};
console.log(Object.values(obj));
//["a", "b", "c"]

var obj = {100: 'a', 2: 'b', 7: 'c'};
console.log(Object.values(obj));
//["b", "c", "a"]

var obj = {'a': 100, 2: 'b', 7: 'c', 'e': 5};
console.log(Object.values(obj));
//["b", "c", 100, 5]

var my_obj = Object.create({}, {getFoo: {value: function(){return this.foo;}}});
my_obj.foo = "bar";
console.log(Object.values(my_obj));
//["bar"]

console.log(Object.values("foo"));
//["f", "o", "o"]