
//----use async - promise
// async function test() {
//     return "hi";
// }
// test().then((data) => {
//     console.log(data);
// })


//----short handed code -use async
// let test = async () => "hi";

// test().then((data) => {
//     console.log(data);
// })

//----await method (Basic understanding )- This is used when using fetch data from server  and it takes time, so the await method is used to stop this code from continuing to the next code after completing that code and then running it.

// async function task() {
//     console.log("Task - 1");
//     await console.log("Task - 2");
//     console.log("Task - 3");
// }

// console.log("Task - 4");
// task();
// console.log("Task - 5");

//-----using local JSON file

// async function task() {
//     console.log("Task - 1");
//     const response = await fetch("data.json");
//     console.log("Task - 2");
//     const emps = await response.json();
//     return emps;
// }

// console.log("Task - 3");
// let a = task();
// console.log("Task - 4");
// console.log(a);

//------without consol.log massage only main function with promise

// async function task() {
//     const response = await fetch("data.json");
//     const emps = await response.json();
//     return emps;
// }
// task().then((res) => {
//     console.log(res);

// }).catch((error) => {
//     console.log(error);

// })


//----short handed code -  main function with promise
// async function task() {
//     return (await fetch("data.json")).json();
// }
// task().then((res) => {
//     console.log(res);

// }).catch((error) => {
//     console.log(error);

// })

//-----using try- catch method

async function task() {
    try {

        const response = await fetch("data.json");
        const emps = await response.json();
        return emps;
    } catch (error) {

        console.log(error);
    }
}
task().then((res) => {
    console.log(res);
})
