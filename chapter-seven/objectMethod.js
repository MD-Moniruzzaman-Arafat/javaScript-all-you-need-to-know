var obj = {
    name: 'arafat',
    id: 20212203007,
    intake: 38
}

// console.log(Object.keys(obj));
// console.log(Object.keys(obj));
// console.log(Object.entries(obj));

var obj2 = Object.assign({}, obj);
obj2.name = 'kamal'
console.log(obj2)
console.log(obj)