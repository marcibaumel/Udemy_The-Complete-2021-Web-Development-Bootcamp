//jshint esversion:6

const superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperhero = superheroes.random();
var mySupervillain = supervillains.random();

console.log(mySuperhero+" vs "+ mySupervillain);