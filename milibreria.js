//Creando foreach...
export const myEach = {};

myEach.each = (array,callback) => {
    for(let i = 0; i < array.length; i++){
        callback(array[i]);
    }
}


//Creando Filter...
export const myFilter = {}

myFilter.filt = (array,callback) => {
    const newArray = [];
    for(let i = 0; i < array.length; i++){
        if(callback(array[i]) === true){
            newArray.push(array[i]);
        }
    }
    return newArray
}


//Creando Map...
export const myMap = {};

myMap.mp = (array,callback) =>{
    const newArr = [];
    for(let i = 0; i < array.length; i++){
        callback(newArr.push(array[i]));
    }
    return newArr;
}

//Creando Find...
export const MyFind = {
    fnd: (array,callback) => {
        let newData = '';
        for(let i = 0; i < array.length; i++){
            if(callback(array[i]) === true){
               return newData = array[i];
            }else{
                undefined
            }
        }
    }
}

//Creando FindIndex...
export const MyFindIndex = {
    fndI: (array,callback) => {
        let index = ''
        for(let i = 0; i < array.length; i++){
            if(callback(array[i]) === true){
                return index = i;
            }else{
                undefined
            }
        }
    }
}

//Creando Contains/Includes...
export const MyContains = {
    contain: (array,callback) => {
        for(let i = 0; i < array.length; i++){
            if(callback(array[i]) === true){
                return true;
            }else{
                false;
            }
        }
    }
}

//Creando Pluck...
export function getMyPluck(objectArray,propety){
    return objectArray[propety];
}


//Creando whitOut
export const MyWhitOut = {}

MyWhitOut.Wout = (array,callback) => {
    for(let i = 0; i < array.length; i++){
        if(callback(array[i]) === true){
         array.splice(i,1);
        }
    }
    return array;
}