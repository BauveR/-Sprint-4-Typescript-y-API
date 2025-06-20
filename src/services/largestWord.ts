export function getLargestWord(text: string):string{
    const words = text.match(/\b\w+\b/g) || [];
    let largest = "";

    for (const word of words) {
        if(word.length > largest.length){
            largest =word;
        }
    }
    return largest;
}