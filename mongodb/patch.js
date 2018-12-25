var db = connect('school');
var start = Date.now();
var stus = [];
for (var i = 0; i < 1000; i++) {
    stus.push({
        name: 'boyu' + i,
        age: i
    });
}
db.students.insert(stus);
print('cost' + (Date.now() - start) / 1000 + 's')