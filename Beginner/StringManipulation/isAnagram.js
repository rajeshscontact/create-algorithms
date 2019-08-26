export const isAnagramUsingRegex = (word1, word2) => {
    if (word1.length !== word2.length) {
        return false
    }

     return sanitizeString(word1) === sanitizeString(word2)
}

export const isAnagramUsingMap = (word1, word2) => {
    if (word1.length !== word2.length) {
        return false
    }

    const word1Map = getCharMap(word1)
    const word2Map = getCharMap(word2)

    for(let char in word1Map) {
        if (word1Map[char] !== word2Map[char]) {
            return false
        }
    }

    return true
}

const sanitizeString = (word) => word.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('')

const getCharMap = (word) => {
    const charMap = {}

    for (let char of word.toLowerCase()) {
        if(charMap.hasOwnProperty(char)){
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    return charMap
}
