const btn = document.querySelector('.btn');
const sectionA =document.getElementById('section');
function toggleForm(){
    let container = document.querySelector('.container');
    container.classList.toggle('active')
    //containerにクラスactiveを追加している
    sectionA.classList.toggle('colors')
   
}
