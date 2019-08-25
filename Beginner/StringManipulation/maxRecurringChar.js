export const maxRecurringCharUsingLoop = (input) => {
    if(!input) {
        return 0
    }

    let charMap = {}

    for (let char of input){
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    let maxCount = 0
    let maxChar = ''

   for(let char in charMap) {
       if(charMap[char] > maxCount) {
           maxCount = charMap[char]
           maxChar = char
       }
   }

   return maxChar

}

export const maxRecurringCharUsingArray = (input) => {
    if(!input) {
        return 0
    }

    let charMap = {}

    for (let char of input){
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    const charArray = Object.keys(charMap)
    const valueArray = Object.values(charMap)
    const maxCount = Math.max(...valueArray)

    return charArray[valueArray.indexOf(maxCount)]

}
