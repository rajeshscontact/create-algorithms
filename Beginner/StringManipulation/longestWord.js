export const longestWordUsingLoop = (sentence) => {
    if (!sentence) {
        return null
    }

    let longestWord = ''

    sentence.split(' ').forEach((word) => {
        if (word.length >= longestWord.length) {
            longestWord = word
        }
    })

    return longestWord
}

export const longestWordUsingReduce = (sentence) => {
    if (!sentence) {
        return null
    }

    return sentence.split(' ').reduce((acc, curr) => curr.length > acc.length ? curr : acc , '')
}

export const longestWordUsingSort = (sentence) => {
    if (!sentence) {
        return null
    }

    return sentence.split(' ').sort((word1, word2) => word2.length - word1.length)[0]
}
