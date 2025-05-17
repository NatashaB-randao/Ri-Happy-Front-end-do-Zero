/* Objetos em JavaScript
    Objetos são estruturas de dados que permitem armazenar dados e funcionalidades relacionadas
    em uma única entidade. Eles são compostos por pares de chave-valor, onde a chave é uma string
    e o valor pode ser de qualquer tipo de dado, incluindo outros objetos, funções, arrays, etc. */


/*
const natasha = {
    name: "Natasha",
    age: 26,
    job: "Developer",
}

console.log(natasha.name);
console.log(natasha.age);   
console.log(natasha.job);

natasha.height = 1.67;
console.log(natasha)
*/

/*
const pessoa = {
    name: "Natasha",
    age: 26,
    job: "Developer",

    describe: function() {
        console.log(`My name is ${this.name}, I am ${this.age} years old and I work as a ${this.job}.`);
    }
}

pessoa.name = "Ana";
pessoa.age = 30;

pessoa.describe();
*/

/*
const pessoa = {
    name: "Natasha",
    age: 26,
    job: "Developer",

    describe: function() {
        console.log(`My name is ${this.name}, I am ${this.age} years old and I work as a ${this.job}.`);
    }
}

const atributo = 'age';
console.log(pessoa[atributo]); // Acessando a propriedade usando colchetes
*/

/* Classes em JavaScript
    Classes são uma forma de criar objetos em JavaScript. Elas são uma forma de definir um molde 
    para criar objetos, permitindo encapsular dados e funcionalidades relacionadas em uma única entidade.
*/


class Pessoa {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    describe() {
        console.log(`My name is ${this.name}, I am ${this.age} years old and I work as a ${this.job}.`);
    }
}

const pessoa = {
    name: "Natasha",
    age: 26,
    job: "Developer",

    describe: function() {
        console.log(`My name is ${this.name}, I am ${this.age} years old and I work as a ${this.job}.`);
    }
}

const atributo = 'age';
console.log(pessoa[atributo]); // Acessando a propriedade usando colchetes