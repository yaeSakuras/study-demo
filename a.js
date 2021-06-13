const obj = {}
const func = () => {
}
const arr = []

function foo() {
    return Array.prototype.slice.call(arguments)
}

function numbersCloseEnoughToEqual(n1, n2) {
    return Math.abs(n1 - n2) < Number.EPSILON
}

if (!Number.isInteger) {
    Number.isInteger = function (num) {
        return typeof num == 'number' && num % 1 == 0
    }
}

if (!Number.isSafeInteger) {
    Number.isSafeInteger = function (num) {
        return Number.isInteger(num) &&
            Math.abs(num) <= Number.MAX_SAFE_INTEGER
    }
}

function foo() {
    undefined = 2 // 非常糟糕的做法!
}

foo()


if (!Number.isNaN) {
    Number.isNaN = function (n) {
        return (typeof n === 'number' && window.isNaN(n))
    }
}
var a = 2 / 'foo'
var b = 'foo'
Number.isNaN(a) // true Number.isNaN( b ); // false——好!