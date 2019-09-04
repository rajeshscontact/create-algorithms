export const splitChunksWithSlice = (arr, chunkSize) => {

    const returnArr = []

    for (let i=0; i<=arr.length-1; i = i+chunkSize) {
        returnArr.push(arr.slice(i, i+chunkSize))
    }

    return returnArr
}

export const splitChunksWithSplice = (arr, chunkSize) => {

    const returnArr = []

    while(arr.length > 0) {
        returnArr.push(arr.splice(0, chunkSize))
    }

    return returnArr
}

export const splitChunksWithRecursion = (arr, chunkSize) => {

    if(arr.length <= chunkSize){
        return [arr]
    }

    return [arr.slice(0, chunkSize), ...splitChunksWithRecursion(arr.slice(chunkSize), chunkSize)]
}


