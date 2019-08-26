export const twoSumBruteForce = (arr, total) => {
    for (let i=0; i<=arr.length-1; i++) {
        for(let j=i+1; j<=arr.length-1; j++){
            if(arr[i] + arr[j] === total){
                return [arr[i], arr[j]]
            }
        }
    }

    return null
}

export const twoSumOptimized = (arr, total) => {
    const previousValues = {}

    for (let i=0; i<=arr.length-1; i++) {
        const momentum = total - arr[i]

        if (previousValues[momentum]) {
            return [momentum, arr[i]]
        }

        previousValues[arr[i]] = true
    }

    return null
}
