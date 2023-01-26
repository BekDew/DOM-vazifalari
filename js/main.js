let elInput = document.querySelector('.inpute');
let elBtn = document.querySelector('.btn');
let elNatija = document.querySelector('.natija');


elBtn.addEventListener('click', () => {
    let res = elInput.value.replaceAll(" ", "");
    elNatija.textContent = `Natija: ${res}`;
    elInput.value = "";
});

let elSecond = document.querySelector('.second');
let elBtn2 = document.querySelector('.btn2');
let elNatija2 = document.querySelector('.natija2');
let elStr = document.querySelector('.returns');


elBtn2.addEventListener('click', () => {
    let position = elStr.value;
    let wrap = elSecond.value
    let count = [];
    let word = position.split(' ');
    for (let i = 0; i < word.length; i++) {
        if (word[i] === wrap) {
            count += i + ",";
        } else {
            console.log(`bosh`);
        }
    }


    elNatija2.textContent = `Natija: ${count}`;
    console.log(word);
    elSecond.value = "";
    elStr.value = "";
});


let elThreed = document.querySelector('.threed');
let elBtn3 = document.querySelector('.btn3');
let elNatija3 = document.querySelector('.natija3');
let elStr2 = document.querySelector('.returns2');

elBtn3.addEventListener('click', function () {
    let conteynr = elStr2.value;
    let word2 = conteynr.includes(elThreed.value)
    elNatija3.textContent = `Natija: ${word2}`;
    elThreed.value = "";
    elStr2.value = "";
});

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    var inputValueFirst = elFormInput.value.trim();
    var inputValueSecond = elFormInputTwo.value.trim();
    
    var inputIndexFirst = elText.textContent.indexOf(inputValueFirst)
    var inputIndexSecond = elText.textContent.indexOf(inputValueSecond);


    elResult.textContent = elText.textContent.substring(inputIndexFirst, inputIndexSecond);

});

var elBtn5 = document.querySelector('.btn5');
var elText = document.querySelector('.texts');
var elFourth = document.querySelector('.fourth');
var elFourth2 = document.querySelector('.fourth2');
var elOutput = document.querySelector('.output');



    elBtn5.addEventListener("click", function () { 
        if(elFourth.value == "" && elFourth2.value== ""){
            elOutput.textContent = bo'sh yoki matnda yo'q narsa kiritilgan;
        }
        else{
            var text = elText.textContent;
        var start = elFourth.value;
        var end = elFourth2.value;
        var start = elFourth.value;
        var resalts = text.slice(text.indexOf(start), text.indexOf(end));
        elOutput.textContent = Siz kutgan natija : ${resalts};
        elFourth.value =""
        elFourth2.value =""

        }
    });
