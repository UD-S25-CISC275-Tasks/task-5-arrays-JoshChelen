/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    //const bookEnd:number[] = numbers.filter;
    if (numbers.length === 0) return [];
    const bookEnd = [numbers[0], numbers[numbers.length - 1]];
    return bookEnd;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled: number[] = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const parsedInts: number[] = numbers.map((val: string): number =>
        isNaN(Number(val)) ? 0 : Number(val),
    );
    return parsedInts;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollar: string[] = amounts.map((amount: string): string =>
        amount.replace("$", ""),
    );
    return stringsToIntegers(noDollar);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const filtered: string[] = messages.reduce(
        (result: string[], message: string) => {
            if (message.endsWith("?")) {
                console.log("skipped");
            } else if (message.endsWith("!")) {
                result.push(message.toUpperCase());
            } else {
                result.push(message);
            }
            return result;
        },
        [],
    );
    return filtered;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords: number = words.reduce(
        (counter: number, message: string) =>
            message.length < 4 ? ++counter : counter,
        0,
    );

    return shortWords;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) return true;

    const acceptedColors: string[] = ["red", "blue", "green"];
    const result: boolean = colors.every((color: string): boolean =>
        acceptedColors.includes(color),
    );

    return result;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) return "0=0";

    const sum: number = addends.reduce(
        (total: number, current: number) => total + current,
        0,
    );

    const plusify: string = addends
        .map((num, i) => {
            if (i === 0) return String(num);
            return `+${num}`;
        })
        .join("");

    return `${sum}=${plusify}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum: number = 0;
    let passedNegative: boolean = false;

    let output: number[] = values.reduce((output: number[], value: number) => {
        output.push(value);

        if (value < 0 && !passedNegative) {
            passedNegative = true;
            output.push(sum);
        } else if (!passedNegative) sum += value;

        return output;
    }, []);

    if (passedNegative == false) {
        output.push(sum);
    }
    /*let output: number[] = values.reduce((output: number[], value: number) => {
        output.push(value);

        if (!passedNegative && value < 0) {
            passedNegative = true;
            output.push(value);
        } else if (!passedNegative) {
            sum += value;
        }

        return output;
    }, []);*/

    return output;
}
