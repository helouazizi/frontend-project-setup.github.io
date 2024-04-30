let shownBtn = document.getElementById('shown-btn');
let links = document.querySelector('.links');
let btn = document.querySelector('.btn');
let hidenBtn = document.createElement('button');
    hidenBtn.textContent = 'close';

shownBtn.addEventListener('click',function(){
    links.classList.toggle('show');
    /*this.onclick = function(){
        links.classList.add('hide')
    }*/
    
}) 