//1  for (let i = 100; i >= 0; i = i - 2) {
//     document.write(i + '<br>');
// }

//2 for (let i = 100; i >= 0; i--) {
//     if (i % 2 === 0) {
//         document.write(i + '<br>');
//     }
// }

//3 for (let i = 100; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     document.write(i + '<br>');
// }

//4  let i = 0;
// while (i <= 100) {
//     document.write(i + '<br>');
//     i++;
// }

// let j = 0;
// do {
//     document.write(j + '<br>');
//     j++;    
// } while (i <= 100);    


//5  let a = parseFloat(prompt('Enter A'));
// while(isNaN(a)) {
//     alert('Please enter number');
//     a = parseFloat(prompt('Enter A'));
// }
// document.write(a);

//6 let a;  
// do {
//     alert('Please enter number');
//     a = parseFloat(prompt('Enter A'));
// } while(isNaN(a))
// document.write(a);

function prn(value) {
    document.write(value + '<br>');
}

let products = ['Tesla Model X', 
                'Porshe Panamera',
                'McLaren F1'];
products.push('Ferrari LaFerrari');
products[4] = 'Bugatti Veyron';
products[5] = 'ZAZ Lanos';
prn(products.length);

// for (let i = 0; i < products.length; i++) {
//     if (products[i] === undefined) {
//         continue;
//     }
//     prn(products[i]);
// }

//запис по старому
// products.forEach(function(element){
//     document.write(element + '<br>');
// }); 

// запис по новому
// products.forEach( el => document.write(el + '<br>') );


//      const printVal = el => document.write(el + '<br>');

//      products.forEach(pr  );

// const printVal = function(element){
//     document.write(element + '<br>');
// };

// products.forEach(printVal);


// while(products.length > 0) {
//     prn(products.pop());
// }
// prn(products.length);



// products.sort();
// prn(products);


// словник
// // let cars = {};

// // cars['favourite'] = 'McLaren F1';
// // cars['everyday'] = 'Nissan Leaf';
// // cars['holiday'] = 'Jeep Wrangler';

// // let carsLength = 0;
// // for (let key in cars) {
// //     carsLength++;
// //     prn(key + ': ' + cars[key]);
// // }
// // prn(carsLength);

// // cars['holiday'] = 'Toyota Tundra';

// // for (let key in cars) {
// //     prn(key + ': ' + cars[key]);
// // }



//  об'єкт
// let teslaX = {};
// teslaX.year = 2017;
// teslaX.make = 'Tesla';
// teslaX.model = 'X';
// teslaX.color = 'red';
// teslaX.run = function() {
//     prn(this.make + ' ' + this.model + ' is running!!!');
// }

// teslaX.run();



// function run() {
//     prn(this.make + ' ' + this.model + ' is running!!!');
// }

// let teslaX = {};
// teslaX.year = 2017;
// teslaX.make = 'Tesla';
// teslaX.model = 'X';
// teslaX.color = 'red';
// teslaX.run = run;

// teslaX.run();
// run();




// другий спосіб створити об'єкт
// let ferrari = {
//     year: 2017,
//     make: 'Ferrari',
//     model: 'LaFerrari',
//     color: 'red',
//     run: run
// }

// ferrari.run();


// третій спосіб створити об'єкт
// function Car(make, model, year, color) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.run = run;
//     return this;
// }

// let porshe = new Car('Posrche', 'Panamera', 2015, 'silver');
// let p911 = Car('Posrche', '911', 2010, 'red');

// porshe.run();
// run();


// четвертий спосіб створення обьєктів
// let porshe = new Car('Posrche', 'Panamera', 2015, 'silver');
// let p911 = Object.create(porshe);
// p911.model = '911';
// porshe.model = 'Ferrari';
// p911.run();


// п'ятий спосіб створення об'єктів
class SuperCar {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        return this;
    }
    run() {
        prn(this.make + ' ' + this.model + ' is running!!!');
    }
}

let bugatti = new SuperCar('Bugatti', 'Veyron', 2017, 'silver');
bugatti.run();
