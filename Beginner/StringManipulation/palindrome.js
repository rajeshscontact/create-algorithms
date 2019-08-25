export const isPalindromeUsingReverse = (text) => {
    const reverseText = text.split('').reverse().join('')

    return text === reverseText
}

export const isPalindromeUsingReduce = (text) => {
    const reverseText = [...text].reduce((acc, curr) => curr+acc, '')

    return text === reverseText
}

export const isPalindromeUsingLoop = (text) => {
    const textArray = text.split('')

    const result = textArray.every((char, index) => {
        return char === textArray[textArray.length - 1 - index]
    })

    return result
}

export const isPalindromeUsingLoopOptimized = (text) => {
    const textLen = text.length

    for (let i=0; i<=textLen/2; i++){
      if (text[i] !== text[textLen-1-i]) {
          return false
      }
    }


    return true
}
