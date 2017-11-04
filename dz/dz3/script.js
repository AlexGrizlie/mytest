var blocks = document.querySelectorAll('.block');
(function(){
    for(var i = 0; i < blocks.length; i++){
      blocks[i].onclick = function(event){
      //  елемент   действие (фукция что-то делает)        значение
          clickUsery(event);
      }
    }
}())
// function + имя функции(если есть) + параметры + тело функции
// function myFoo (param1, parametr2) {выполеение кода, вывод в консоль param1, parametr2 }
function clickUsery(event){
  if(event.target.className.includes('coco') || event.target.className.includes('xoxo')) {
    return
  }
   event.target.classList.add('coco');
   setTimeout(function() {
     var coco = document.querySelectorAll('.coco').length;
     var xoxo = document.querySelectorAll('.xoxo').length;
     var vicislenie = blocks.length - coco - xoxo;
     var rand = Math.round(Math.random() * (vicislenie - 1) + 1) -1;
     var addX = document.querySelectorAll(".block:not(.coco):not(.xoxo)");
      if(addX.length){
        addX[rand].classList.add('xoxo');
      }
   }, 1000);
}
