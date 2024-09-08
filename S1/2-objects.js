const o = new Object()
o.firstName = "Tom"
o.lastName = "Lau"
o.isTeaching = false
o.greet = function(){
    console.log('hi!')
}

const o2 = {}
o2.firstName = "tOm"
o2['lastName'] = "lAu"
const key = 'isTeaching'
o2[key] = false
o2['greet'] = function(){
    console.log('hi!!')
}

const o3 = {
    firstName: "toM",
    lastName: "laU",
    isTeaching: false,
    greet: function(){
        console.log("hi!!!")
    }
}

console.log(o, o2, o3)

