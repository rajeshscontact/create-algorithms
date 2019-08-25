const vowels = ['a', 'e', 'i', 'o', 'u'];

export const vowelCountUsingLoop = (input) => {
    let count = 0;

    if (!input.length) {
        return count
    }

    for (let i=0; i<=input.length-1; i++) {
       if (vowels.indexOf(input[i].toLowerCase()) >= 0) {
           count ++;
       }
    }

    return count
};

export const vowelCountsUsingRegex = (input) => {
    const matchingInstances = input.match(/[aeiou]/gi)

    return matchingInstances ? matchingInstances.length : 0
};
