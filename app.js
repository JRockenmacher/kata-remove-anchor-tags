// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples:

// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// // returns 'www.codewars.com?page=1' 
// removeUrlAnchor('www.codewars.com?page=1')

const test1 = 'www.codewars.com#about'
const test2 = 'www.codewars.com/katas/'

function removeUrlAnchor(url){
  //if(url contains '#' delete it and everything after)
  for(let i = 0; i<url.length; i++){
    // console.log(url[i])
    if(url[i] === '#'){
      // redefine variable instead then return it after for loop is complete
      url = url.split('#')[0]
    }
  }
  return url
}

// test split() method
// console.log(test.split('#')[0])

//test to see what is going on with the '/'

// console.log(typeof('/'))

// test function
console.log(removeUrlAnchor(test1))
