export const reverseStringUsingSplit = (input) => [...input].reverse().join('')

export const reverseStringUsingLoop = (input) => {
    let stringInReverse = ''

    for(let i = input.length -1 ; i>=0; i--) {
        stringInReverse = `${stringInReverse}${input[i]}`
    }

    return stringInReverse
}

export const reverseWithRecursive = (input) => {
    return input === '' ? '' : reverseWithRecursive(input.substr(1)) + input[0]
}

export const reverseUsingReduce = (input) => [...input].reduce((acc, curr) => curr+acc, '')
