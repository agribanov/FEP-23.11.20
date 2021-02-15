function createPromisedTimer(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('fired in' + ms), ms);
    });
}

const timer1 = createPromisedTimer(2000);

// timer1.then(() => {
//     console.log('time1 fired');
//     const timer2 = createPromisedTimer(1000);

//     timer2.then(() => {
//         console.log('timer2 fired');
//         const timer3 = createPromisedTimer(1000);

//         timer3
//             .then(() => {
//                 console.log('timer3 fired');
//             })
//             .then(() => console.log('All timers fired'));
//     });
// });

timer1
    .then((msg) => {
        console.log(msg);
        return createPromisedTimer(1000);
    })
    .then((msg) => {
        console.log(msg);
        return createPromisedTimer(1000);
    })
    .then((msg) => console.log(msg))
    .then(() => console.log('All timers fired'))
    .catch(() => console.log('catched error'));

// const promised = new Promise(function (resolve, reject) {

// promised
//     .then((msg) => console.log('resolved', msg))
//     .catch((msg) => console.log('rejected', msg));

// // class MyPromise{
// //     constructor(fn){
// //         fn(this.resolve, this.reject)
//     }

//     resolve(){
//         this.callFunctionFromThen()
//     }

//     reject(){
//         this.callFunctionFromCatch()
//     }

//     then(fn){}
//     catch(fn){}
// }
