var obj = {
    name: 'arafat',
    id: 20212203007,
    intake: 38
}

// console.log('name' in obj);
// console.log('dp' in obj);

for (var key in obj) {
    console.log(key + ' = ' + obj[key])
}