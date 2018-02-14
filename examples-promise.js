// function getTempCallback(location, callback) {
//     callback(undefined, 78)
//     callback('city ngga ada')
// }

// getTempCallback('Ciamis', function(err, temp) {
//     if (err) {
//         console.log('error', err)
//     } else {
//         console.log('succes', temp)
//     }
// });

// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(79)
//             reject('City Ngga Ada')
//         }, 1000)
//     });
// }

// getTempPromise('Ciamis').then(function(temp) {
//     console.log('promise sukses', temp)
// }, function(err) {
//     console.log('promise error', err)
// });

//Challenge Area
function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('A & B need to be Number');
        }
    });

}

addPromise(2, 3).then(function(sun) {
    console.log('sukses', sun);
}, function(err) {
    console.log('error', err);
});

addPromise('Herlan', 9).then(function(sun) {
    console.log('nOT Show up')
}, function(err) {
    console.log('This err', err)
});