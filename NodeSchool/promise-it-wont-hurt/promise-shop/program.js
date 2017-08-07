var promise = new Promise(function (fulfill, reject) {
  // Your solution here
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'))
});

function onReject (error) {
  // Your solution here
  console.log(error)
}

// Your solution here
promise.then(console.log, onReject)