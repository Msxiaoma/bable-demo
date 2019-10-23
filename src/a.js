const arr = [1, 2, 3]
let a
let test = () => {
    a = arr.map(n => n ** 2);
    return a
}
export {test};