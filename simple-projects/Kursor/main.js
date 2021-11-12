/*
const TypeWriter = function(txtElement,words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait);
    this.type();
    this.isDeleting = false;
}

TypeWriter.prototype.type = function(){

    const current = this.wordIndex % this.words.length;

    const fullTxt = this.words[current];

    // console.log(fullTxt);

    if(this.isDeleting){
        //remove char
        this.txt = fullTxt.substring(0, this.txt.length -1);

    } else{
        //add char
        this.txt = fullTxt.substring(0, this.txt.length +1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 300;

    if(this.isDeleting){
        typeSpeed /= 2;
    }

    if(!this.isDeleting && this.txt === fullTxt){
        this.typeSpeed = this.wait;
        this.isDeleting = true;
    }else if(this.isDeleting && this.txt ===''){
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 700;
    }

    setTimeout(() =>this.type(), typeSpeed);
}

document.addEventListener('DOMContentLoaded', function(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
});

*/


class TypeWriter{
    constructor(txtElement,words, wait = 3000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait);
        this.type();
        this.isDeleting = false;
    }

    type(){
        
    const current = this.wordIndex % this.words.length;

    const fullTxt = this.words[current];

    // console.log(fullTxt);

    if(this.isDeleting){
        //remove char
        this.txt = fullTxt.substring(0, this.txt.length -1);

    } else{
        //add char
        this.txt = fullTxt.substring(0, this.txt.length +1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 300;

    if(this.isDeleting){
        typeSpeed /= 2;
    }

    if(!this.isDeleting && this.txt === fullTxt){
        this.typeSpeed = this.wait;
        this.isDeleting = true;
    }else if(this.isDeleting && this.txt ===''){
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 700;
    }

    setTimeout(() =>this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', function(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
});

