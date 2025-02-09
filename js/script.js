let one = document.querySelector(" .one");
let INPUT01 = document.querySelector(" .one input");
let error01 = document.querySelector(" .one .error");
let button01 = document.querySelector(" .one button");



let two = document.querySelector(" .two");
let heading02 = document.querySelector(" .two h2");
let INPUT02 = document.querySelector(" .two input");
let error02 = document.querySelector(" .two .error");
let button02 = document.querySelector(" .two button");




let three = document.querySelector(" .three");
let INPUT03 = document.querySelector(" .three input");
let error03 = document.querySelector(" .three .error");
let button03 = document.querySelector(" .three button");


let four = document.querySelector(" .four");
let heading04 = document.querySelector(" .four h2");
let INPUT04 = document.querySelector(" .four input");
let error04 = document.querySelector(" .four .error");
let button04 = document.querySelector(" .four button");


let result = document.querySelector(" .result");
let winner = document.querySelector(" .result h2");
let playerOneValue = document.querySelector(" .result p");

let chance = 5


button01.addEventListener("click", function () {
  if (INPUT01.value == "") {

    error01.innerHTML = "Please enter your name..!"
  } else {
    one.style.display = "none"
    two.style.display = "flex"
    heading02.innerHTML = INPUT01.value

  }

})


button02.addEventListener("click", function () {
  if (INPUT02.value == "") {
    error02.innerHTML = "Enter  a number  between 0 to 9..! "
  } else {

    if (INPUT02.value >= 0 && INPUT02.value <= 9) {
      two.style.display = "none"
      three.style.display = "flex"
    } else {
      error02.innerHTML = "Enter  a number  between 0 to 9..!"
    }
  }

})

button03.addEventListener("click", function () {
  if (INPUT03.value == "") {
    error03.innerHTML = "Enter your name..!"
  } else {
    three.style.display = "none"
    four.style.display = "flex"
    heading04.innerHTML = INPUT03.value
  }
})

button04.addEventListener("click", function () {
  if (INPUT04.value == "") {
    error04.innerHTML = "Guess the number between 0 to 9..!"
  } else {
    if (INPUT04.value >= 0 && INPUT04.value <= 9) {

      error04.innerHTML = "try again"
      INPUT04.value = ""


      if (INPUT04.value == INPUT02.value) {
        // player two win

        four.style.display = "none"
        result.style.display = "flex"
        winner.innerHTML = `player ${INPUT03.value} is win..!`
        playerOneValue.innerHTML = `player one number is  ${INPUT02.value}`


      } else {
        let chanceLeft = document.querySelector(".ChanceLeft")
        chance = chance - 1
        chanceLeft.innerHTML = `Chance left: ${chance}`
        INPUT04.value = ""

        if (chance == 0) {
          // player one win

          four.style.display = "none"
          result.style.display = "flex"
          winner.innerHTML = `player ${INPUT01.value} is win..!`
          playerOneValue.innerHTML = `player one number is  ${INPUT02.value}`

        }


      }

    } else {
      error04.innerHTML = "Guess the number between 0 to 9..!"
    }
  }
})


// console.log(INPUT01,error01,button01,one);





















