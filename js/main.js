// let products = [
//     {
//         name: "milk",
//         type: "milk"
//     },
//     {
//         name: "baranina",
//         type: "meat"
//     },
//     {
//         name: "potato",
//         type: "vegetable"
//     },
//     {
//         name: "tvorog",
//         type: "milk"
//     },
//     {
//         name: "govyadina",
//         type: "meat"
//     },
//     {
//         name: "tomato",
//         type: "vegetable"
//     },
//     {
//         name: "yogurt",
//         type: "milk"
//     },
//     {
//         name: "kuryatina",
//         type: "meat"
//     },
//     {
//         name: "kotleta",
//         type: "meat"
//     },
//     {
//         name: "cucumber",
//         type: "vegetable"
//     },
// ]


// let categories = [
//     {
//         type: "vegetable",
//         count: 0,
//         arr: []
//     },
//     {
//         type: "meat",
//         count: 0,
//         arr: []
//     },
//     {
//         type: "milk",
//         count: 0,
//         arr: []
//     },
// ]

// for(let product of products) {
    
// }

// for(let product of products) {

//     for(let item of categories) {
//         if(item.type === product.type) {
//             item.count++
//             item.arr.push(product.name)
//         }
//     }

//     // for(let item of categories) {
//     //     if(item.type === products.type) {
//     //         arr.push(item)
//     //     } 
//     // }
// }

// console.table(categories);

// дз 

let arr = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },

    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM',
        count: 0
    },
    {
        course: 'PROGRAMMING',
        count: 0
    },
    {
        course: '     3DSMAX',
        count: 0
    },
    {
        course: ' DIZAYN',
        count: 0
    },
    {       
        course: '   BACKEND',
        count: 0
    },
]

for(let item of arr) {
    for(let item of categories) {
        item.course.trim()
        item.course.toLocaleUpperCase()
        if(item.faculity === categories.course) {
            item.count++
        }
    }
}

// let lines = 7;
// let str = " ";
// let star = "*";
// for (let i = 0; i < lines; i++) {
//   str += star;
//   console.log(str);
// }

// function tornadoTriangle(n) {
//     for (let i = 0; i <= n; i++) {
//       for (let j = n; j >= i; j--) {
//         document.write('*');
//       }
//       document.write('<br>');
//     }
//   }
// tornadoTriangle(5);

// console.log(lines);

// for(let i = 0; i <= 5; i--) {
   
// }
// for (let k = 5; k <= i; k--) {
//     document.write(`* `)
//     }
//     document.write(`<br>`)

let i = 5;
while (i > 0) {
    let a = '';
    let b = ' '.repeat(5 - i);
    for (let j = 1; j <= i; j++) {
        a += '* ';
    }
    console.log(b + a);
    i--;
}

// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         document.write(`${i} * ${j} = ${i * j} <br>`)
//     }
//     document.write(`<br>`)
// }