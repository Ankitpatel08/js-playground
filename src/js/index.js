import '../scss/styles.scss';

document.querySelector('button').addEventListener('click', () => alert('test'));

let numbers = [1,2,3,4,5];

let sum = 0;
let result = numbers.reduce((number, sum) => number + sum);

console.log('sum', sum);
console.log(result);

class Person {
    constructor() {
        this.printPersons();
    }

    getPersonsData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (false) {
                    let persons = [{
                        name: 'Ankit'
                    }, {
                        name: 'Akshay'
                    }];
    
                    resolve(persons);
                } else {
                    reject(new Error('data not found'));
                }
            },5000);
        });
    }

    async printPersons() {
        let persons = await this.getPersonsData();
        console.log(persons);

        // this.getPersonsData().then(data => {
        //     data.forEach(element => {
        //         console.log(element.name);
        //     });
        // }).catch(err => {
        //     console.log(err);
        // });
    }
}

new Person();