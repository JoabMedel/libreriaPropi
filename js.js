import {myEach,myFilter,myMap,MyFind,MyFindIndex,MyContains,MyWhitOut,getMyPluck} from './milibreria.js';


const arreglo = [1,2,3,4,5,6,8,12];

const objects = [{name:'Joab',age:20},{name:'Luis',age:25},{name:'Alan',age:21}]

const newobject = {name:'Arturo',age:40}

//My Foreach...
myEach.each(arreglo, (number)=>{
    // console.log(number);
})

//My Filter...
const filterElements = myFilter.filt(arreglo, newnumbers => newnumbers > 2);
// console.log(filterElements);

//My map...
const mapElements = myMap.mp(arreglo, numbersmap => numbersmap);
// console.log(mapElements);

//My Find...
const FindElements = MyFind.fnd(arreglo, element => element > 3);
// console.log(FindElements);

//My FindIndex...
const FindIndexElement = MyFindIndex.fndI(arreglo, index => index > 2);
// console.log(FindIndexElement);

//My contains/includes.
const ContainsElement = MyContains.contain(objects, element => element.name === 'Luis');
// console.log(ContainsElement);

//My Pluck...
console.log(getMyPluck(newobject,'name'));

//My WhithOut...
const ContainsWhithOut = MyWhitOut.Wout(arreglo,element => element === 8);
// console.log(ContainsWhithOut);