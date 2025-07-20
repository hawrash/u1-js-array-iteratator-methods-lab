const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];
const people = [
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William',
];
const travelMethods = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];
const devs = [
  { name: 'Alex', year: 1988 },
  { name: 'Dani', year: 1986 },
  { name: 'Matt', year: 1970 },
  { name: 'Wes', year: 2015 },
];
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];
//EX1
let veryOldInventors = [];
veryOldInventors=inventors.filter(inventor=>{
    return inventor.year>=1500 && inventor.year<1600;
})

console.log('Exercise 1 my result: ', veryOldInventors);
//EX2
let inventorNames = [];
inventorNames = inventors.map(({ first, last }) => ({ first, last }));

console.log('Exercise 2 my result: ', inventorNames);
//EX3
let sortedByBirthYear = [];
sortedByBirthYear=inventors.sort((a, b) => a.year - b.year);

console.log('Exercise 3 my result: ', sortedByBirthYear);
//EX4
let inventorNamedAda = {};
inventorNamedAda=inventors.find(Fname=>{
    return Fname.first==='Ada'
})
console.log('Exercise 4 my result: ', inventorNamedAda);
//EX5
let firstLast = [];
firstLast=people.map(name=>{
    const [L,F]=name.split(',');
    return `${F} ${L}`; 
})
console.log('Exercise 5 my result: ', firstLast);
//EX6
let isAdultPresent = null;
const currentYear = new Date().getFullYear(); 
isAdultPresent=devs.some(dev=>{
    return currentYear-dev.year>=18;
})
console.log('Exercise 6 my result: ', isAdultPresent);
//EX7
let isEveryone19OrOlder = null;
const currentYearEx2 = new Date().getFullYear();
isEveryone19OrOlder=devs.every(dev=>{
    return currentYearEx2-dev.year>=19;
})
console.log('Exercise 7 my result: ', isEveryone19OrOlder);
//EX8
let commentById = {};
commentById=comments.find(comment=>{
    return comment.id===823423;
})
console.log('Exercise 8 my result: ', commentById);
//EX9
let idx = null;
idx=comments.findIndex(comment=>{
    return comment.id===123523;
})
console.log('Exercise 9 my result: ', idx);
//EX10
let totalYearsLived = 0;
totalYearsLived=inventors.reduce((acc,inventor)=>{
    const lifeS=inventor.passed-inventor.year;
    return acc=acc+lifeS
},0);
console.log('Level Up 1 my result: ', totalYearsLived);
//EX11
let travelMethodCounts = {};
travelMethodCounts=travelMethods.reduce((acc,method)=>{
    if(acc[method]){
        acc[method]=acc[method]+1;
    }
    else{
        acc[method]=1;
    }
    return acc;
},{});
console.log('Level Up 2 my result: ', travelMethodCounts);
