export const mergeArraysUsingSet = (...arrays) => {
    const jointArray = combineArrays(arrays)

    return [...new Set([...jointArray])]
}

export const mergeArraysUsingArray = (...arrays) => {
    const jointArray = combineArrays(arrays)

    return Array.from(new Set([...jointArray]))
}

export const mergeArraysUsingReduce = (...arrays) => {
    const jointArray = combineArrays(arrays)


    return jointArray.reduce((newArr, item) => {
        if (newArr.includes(item)){
            return newArr
        } else {
            return [...newArr, item]
        }
    }, [])
}

export const mergeArraysUsingFilter = (...arrays) => {
    const jointArray = combineArrays(arrays)

    return jointArray.filter((item, index) => jointArray.indexOf(item) === index)
}


const combineArrays = (arrays) => {
    let jointArray = []

    arrays.forEach((array) => {
        jointArray = [...jointArray, ...array]
    })

    return jointArray
}
