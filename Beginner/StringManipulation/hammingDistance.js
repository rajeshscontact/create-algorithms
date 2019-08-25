export const hammingDistance = (firstString, secondString) => {
    if (firstString.length !== secondString.length) {
        return null
    }

    let result = 0
    for(let i=0; i<= firstString.length - 1; i++) {
        if (firstString[i].toLowerCase() !== secondString[i].toLowerCase()) {
            result ++
        }
    }

    return result
}
