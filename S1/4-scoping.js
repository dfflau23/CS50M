thisIsHoisted()

const thisisAConst = 50

//thisisAConst++ // error!

const constObj = {}

constObj.a = 'a'

let thisisALet = 51
thisisALet = 50
console.log(thisisALet)

//let thisisALet = 50 //errors!

var thisisAVar = 50
thisisAVar = 51
var thisisAVar = 52

function thisIsHoisted(){
    console.log('this is a function declared at the bottom of the file')
}