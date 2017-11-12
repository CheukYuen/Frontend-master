let pubSub = {};

(function (myObject) {
  let topics = {};
  let subUid = -1;

  myObject.public = function (topic, args) {
    if (!topics[topic]) {
      return
    }
    let subscribers = topics[topic];
    let len = subscribers ? subscribers.length : 0;

    while (len--) {
      subscribers[len].func(topic, args)
    }


    return this
  };


  myObject.subscribe = function (topic, func) {
    if (!topics[topic]) {
      topics[topic] = [];
    }

    let token = (++subUid).toString();
    topics[topic].push({
      token: token,
      func: func
    });

    return token
  };


  myObject.unSubscribe = function (token) {
    for (let m in topics) {
      if (topics[m]) {
        for (let i = 0; i < topics[m].length; i++) {
          if(topics[m][i].token === token){
            topics[m].splice(i, 1);
            return token
          }
        }
      }
    }

    return this;
  }

})(pubSub);


function logger(topic, message) {
  console.log(`Leon: ${topic}: ${message}`);
}


let subscriber = pubSub.subscribe('weather/message', logger);

let pub1 = pubSub.public('weather/message', 'Hi there');
let pub2 = pubSub.public('weather/message', 'Second');


pubSub.unSubscribe(subscriber);

pubSub.public('weather/message', 'Three');

