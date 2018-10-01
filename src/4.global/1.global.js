console.log();

// process.stdout.write("hello");
// console.log(process.pid);
// process.stdin.on('data', function (data) {
//     console.log(data);
// });

process.on('uncaughtException', function (e) {
    console.log('unCaughtException',e)
});
process.argv.forEach(function (val, index, array) {
    console.log(val,index,array);
});

// process.kill(process.pid);

process.on('exit', exit);

function exit(){
    console.log('推出前执行');
}


console.log('步骤1');
console.log('步骤2');

    console.log(a);

console.log('步骤3能打印吗');

