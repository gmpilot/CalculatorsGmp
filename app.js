// button Select
let btne = document.querySelector("#btne");
let btndark = document.querySelector("#btnmd1");
let btnlight = document.querySelector("#btnmd2");
let btnw = document.querySelector("#btnwl");
let btnc = document.querySelector("#btncl");
//
let num1 = document.querySelectorAll(".number1");
//
let opr = document.querySelectorAll(".operator1");
// button select end

// div select
let divType = document.querySelector("#cla-header-head");
let divResult = document.querySelector("#cla-header-foot");
// div select end

// body select
let body1 = document.querySelector("#body-div");
let body2 = document.querySelector("#cla-body");
// body select end

// Dark Mood section
btndark.addEventListener("click", function () {
  body1.style.backgroundColor = "black";
  body2.style.backgroundColor = "deeppink";
});

btnlight.addEventListener("click", function () {
  body1.style.backgroundColor = "rgb(71, 7, 73)";
  body2.style.backgroundColor = "blue";
});
// Dark Mood Section End

// w section
btnw.addEventListener("click", function () {
  divType.innerHTML = "Welcome!";
  divResult.innerHTML = "To Extrovert GMP";
});
// w section end

// C section //Bug
btnc.addEventListener("click", function () {
  divResult.innerHTML = ``;
  divType.innerHTML = ``;
  count = 0;
  prev = "";
  next = "";
});
// C section end

// -----------------------Calculator Start------------------
let prev = "";
let next = "";
let count = 0;
let opr2 = "";
// ---------------------------variable-----------------------------
//
for (let i = 0; i < opr.length; i++) {
  opr[i].addEventListener("click", function () {
    divType.innerHTML = prev + opr[i].innerHTML + next;
    opr2 = opr[i].innerHTML;
    count = 1;
  });
}

// ---------------------start-----------------

for (let j = 0; j < num1.length; j++) {
  num1[j].addEventListener("click", function () {
    if (count == 0) {
      prev = prev + num1[j].innerHTML;
      divType.innerHTML = prev;
    } else {
      next = next + num1[j].innerHTML;
      divType.innerHTML = prev + opr2 + next;
    }
  });
}

// ------------ Result -------------

btne.addEventListener("click", function () {
  let a = parseFloat(prev);
  let b = parseFloat(next);
  //
  switch (opr2) {
    case "+":
      divResult.innerHTML = `= ${a + b}`;
      break;
    case "-":
      divResult.innerHTML = `= ${a - b}`;
      break;
    case "x":
      divResult.innerHTML = `= ${a * b}`;
      break;
    case "/":
      divResult.innerHTML = `= ${a / b}`;
      break;

    default:
      break;
  }
});
