// const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
// const numbers = ['1', '2', '3', '4', '5','6']

// const a = alphabet[0]
// const b = alphabet[1]

// const [a, b, c] = alphabet

// const[a,,c, ...rest]= alphabet //Skip the second element and rest operator

// console.log(a)
// console.log(c)
// console.log(rest)

// const newArray = [...alphabet, ...numbers] //spread operator

// const newArray=alphabet.concat(numbers)
// console.log(newArray);


// function sumAndMultiply(a,b) {
//     return [a+b, a*b]
// }

// const array = sumAndMultiply(2,3)
// console.log(array)

// const[sum, mutiply, division="No division"] = sumAndMultiply(2,3)

// console.log(sum)
// console.log(mutiply)
// console.log(division)

const personOne = {
    name: 'Kyle',
    age: 24,
    address :{
        city: 'Somewhere',
        state: 'One of them'
    }
}

const personTwo = {
    name: 'Sally',
    age: 32,
    favoriteFood: 'Rice',
    address :{
        city: 'Somewhere else',
        state: 'Another one of them'
    }
}

// const {name:firstName,age, favoriteFood} = personTwo

// const {name:firstName,age, ...rest} = personTwo

// console.log(firstName)
// console.log(age)
// console.log(rest)


// const personThree = {...personOne, ...personTwo}
// console.log(personThree)

function printUser({name, age, favoriteFood='Watermelon'}){
    console.log(`name is: ${name}. Age is ${age}. favoriteFood is ${favoriteFood}`)
}

printUser(personTwo)

