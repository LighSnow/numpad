let inp = document.getElementById('numberInput');
// let numberCall = inp.value;
let numberWrapper = document.querySelector('.number');
let numbers = document.querySelectorAll('span');
let callBtn = document.querySelector('.call');
let deleteBtn = document.querySelector('.delete');

numbers.forEach((number) => {
  let numberAttr = number.getAttribute('data-number');
  number.addEventListener('click', function () {
    let inpVal = inp.value + numberAttr;
    if (inpVal.length < 11) {
      inp.value += numberAttr;
    }
  });
});

callBtn.addEventListener('click', function (e) {
  callBtn.setAttribute('href', 'tel:+' + inp.value);
});

deleteBtn.addEventListener('click', function () {
  inp.value = inp.value.slice(0, inp.value.length - 1);
});