



 let arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];

 for (let i = 0; i < arr.length; i++) {
      if (arr[i].length < 5) {
           continue;    
         }
         console.log(arr[i]);
        }




let arr = [2, -3, 5, 11, 1, -30, -11, 100, -1, -3, -4];

 for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
           continue;
        }
        console.log(arr[i]);
    }


let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if(arr[i][j >0]) {
            console.log(arr[i][j])
        }
    }
}


let words = ['Madrid', 'Rome', 'Berlin', 'Barcelona', 'Milan', 'Batumi']
let str = 'm';
function find (words, str) {
    str = str.split('');
    return words.filter(function(word) {
        return str.every(function(char) {
            return word.toLowerCase().includes(char);
        });
    });
}
const output = find(words, str);
console.log(output);


function capitalize(words) {
    const final = words.reduce((accumulated, currentWord, index) => {
        if (index % 2 === 1) {
            return accumulated + ' ' + currentWord.toUpperCase();
        } else {
            return accumulated + ' ' + currentWord;
        }
    }, '');
    return final;

}
console.log(capitalize(['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit.', 'Nullam', 'lectus', 'quam']));


let users = [
    {name: 'giorgi', age: 16},
    {name: 'levani', age: 90},
    {name: 'nino', age: 30},
    {name: 'otari', age: 11},
    {name: 'mari', age: 28}
  ]

  let ageFilter = []
  users.map(function (users) {
    if (users.age > 18) {
        ageFilter.push(users.name)
    }
})

console.log(ageFilter)

