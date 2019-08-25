export const capitalizeSentenseUsingLoop = (text) => {
    let result = null;

    text.toLowerCase().split(' ').forEach((word) => {
        if (result === null) {
            result = `${word[0].toUpperCase()}${word.substr(1)}`
        } else {
            result = `${result} ${word[0].toUpperCase()}${word.substr(1)}`
        }
    });
    return result
};

export const capitalizeSentenseUsingLoopAndJoin = (text) => {
    const wordsArray = []


    text.toLowerCase().split(' ').forEach((word) => {
        wordsArray.push(`${word[0].toUpperCase()}${word.slice(1)}`)
    });
    return wordsArray.join(' ')
};

export const capitalizeSentenseUsingMap = (text) => {
    const wordsArray = text.toLowerCase().split(' ').map((word) => `${word[0].toUpperCase()}${word.slice(1)}`);

    return wordsArray.join(' ')
};

export const capitalizeSentenseUsingMapAndReplace = (text) => {
    const wordsArray = text.toLowerCase().split(' ').map((word) => word.replace(word[0], word[0].toUpperCase()));

    return wordsArray.join(' ')
};
