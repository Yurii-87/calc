"use strict"
const input = document.querySelector('.calc__input-line');
const cline = document.querySelector('.cline');
const cline1 = document.querySelector('.cline-1');
const division = document.querySelector('.division'); // /
const multiply = document.querySelector('.multiply'); // *
const minus = document.querySelector('.minus'); // -
const plus = document.querySelector('.plus'); // +
const result = document.querySelector('.result'); // =

const btns = document.querySelectorAll('.number');
const arrControls = [division, multiply, minus, plus,];

let res = "";
let arr = []; // поле ввода выражения при работе с калькулятором

btns.forEach(el => {
   el.onclick = click;
});

arrControls.forEach(el => {
   el.onclick = arrContr;
});
// ввод в поле значения кнопки
function click(e) {
   if (input.value == "+" || input.value == "-" || input.value == "/" || input.value == "*") {
      let b = input.value;
      arr.push(b);
      input.value = "";
   }
   let a = this.innerHTML;
   input.value += a;
   e.preventDefault();
}
// очистить поле ввода и добавить в массив с выраженями текущее значение.
function arrContr(e) {
   if (input.value.length) {
      const a = input.value;
      arr.push(a);
      input.value = this.innerHTML;
   }
   e.preventDefault();
}

// вычисление результата
result.onclick = resultat;
function resultat(e) {
   const a = input.value;
   arr.push(a);
   if (arr.length == 3) {
      const [r1, r2, r3] = arr;
      if (r2 == "+") {
         res = `${+r1 + (+r3)}`;
         input.value = res;
      }
      if (r2 == "-") {
         res = `${+r1 - (+r3)}`;
         input.value = res;
      }
      if (r2 == "*") {
         res = `${+r1 * (+r3)}`;
         input.value = res;
      }
      if (r2 == "/") {
         res = `${+r1 / (+r3)}`;
         input.value = res;
      }
   }
   cliner();
   e.preventDefault();
}

// полная очистка

cline.onclick = fullCliner;

function fullCliner(e) {
   cliner()
   input.value = "";
   e.preventDefault();
}

function cliner() {
   for (let index = arr.length; index > 0; index--) {
      arr.pop();
   }
}

// чистка символа
cline1.onclick = rmSimbol;

function rmSimbol(e) {
   if (input.value.length) {
      let a = input.value;
      let b = a.split('');
      b.pop();
      let c = b.join('');
      input.value = c;
   } else {
      return false;
   }
   e.preventDefault();
}