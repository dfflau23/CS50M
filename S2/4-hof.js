function map(arr, fn){
    const newArr = []

    arr.forEach(function(val) {
        newArr.push(fn(val))
    })

    return newArr
}

function addOne(num){ return num + 1}

const x = [1, 2, 3, 4]

console.log(map(x,addOne))