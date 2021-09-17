//jshint esversion:6

//CONSTS
const superheroes = require('superheroes');
const supervillains = require('supervillains');

//VARS
var mySuperhero = superheroes.random();
var mySupervillain = supervillains.random();

//LOG
console.log(mySuperhero+" vs "+ mySupervillain);