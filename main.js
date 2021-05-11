const takeMeThereBtn = document.querySelector('#take-me-there');
// takeMeThereBtn.addEventListener('click', (event) => {
//     event.preventDefault();

//     window.scrollBy({
//         top: window.innerHeight,
//         left: 0,
//         behavior: 'smooth'
//     })
// })

// hoisting
function x() {
    console.log(x);

    var x = 10;
}

x();

// reference
const obj1 = { name: 'John' };
const obj2 = { name: 'John' };

console.log(obj1 == obj2);

// coersion
const x = 1;
const y = '1';

console.log(x == y)

// transorm var vs let vs const
const z = [1, 2, 3];
z.push(10);
console.log(z);

// deny hoisting
console.log(a);
console.log(b);

var a = 10;
let b = 20;