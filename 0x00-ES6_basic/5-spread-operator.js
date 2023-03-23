export default function concatArrays(array1, array2, string) {
    const words = [...array1, ...array2, ...string];
    return words;
}