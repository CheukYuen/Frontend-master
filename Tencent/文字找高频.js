let str = ` am using a JPG overlay with a reduced opacity for an effect, however I want it as an effect only and make the content below that div clickable. Is that possible, thanks :)))
Thanks for your comments everyone. I guess I'll have to think of something else because the JPEG covers the whole page :)';`


function highFrequency(str) {
  let hashmap = {};
  let data = str.split(' ');
  for(let i = 0; i < data.length; i++){
    if(!hashmap[data[i]]){
      hashmap[data[i]] = 1;
    } else {
      hashmap[data[i]] += 1
    }
  }
  let word;
  let max = 0;
  for(let key in hashmap){
    if(hashmap[key] > max){
      max = hashmap[key];
      word = key;
    }
  }

  console.log('Word:' , word);
  console.log('Count:' , max);
}

highFrequency(str);