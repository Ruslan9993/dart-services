
 $(function(){
  $('.slider').slick({
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 2,
      autoplay: false,
      
  });
});



function initAccordion(accordionElem){
  
  //when panel is clicked, handlePanelClick is called.          

  function handlePanelClick(event){
      showPanel(event.currentTarget);
  }

//Hide currentPanel and show new panel.  
  
  function showPanel(panel){
    //Hide current one. First time it will be null. 
     var expandedPanel = accordionElem.querySelector(".active");
     if (expandedPanel){
         expandedPanel.classList.remove("active");
     }

     //Show new one
     panel.classList.add("active");

  }

  var allPanelElems = accordionElem.querySelectorAll(".panel");
  for (var i = 0; i < allPanelElems.length; i++){
       allPanelElems[i].addEventListener("click", handlePanelClick);
  }

  //By Default Show first panel
  showPanel(allPanelElems[0])

}

initAccordion(document.getElementById("services__accordion"));

// function check(array, erase) {

//   let final__array = [];

//   for(let i = 0; i < array.length; i++) {

//     let flag = plus(array.slice(0, i + 1));
//     console.log(flag);
//     if(flag !== erase) {
//       final__array.push(flag)
//     }
//     console.log(final__array)
    
//   }
//   return final__array;
// }

// function plus(arr) {
//   let summa = 0;
//   for(el of arr) {
//     summa += el;
//   }
//   return summa;
// }

// [  1,2,4,6,7,9,10  ]


// console.log(check([1,2,3,4], 6));

// let image = document.querySelector('.head__video-img');
// // alert(window.innerWidth)
// const video = document.querySelector('video');


// image.addEventListener('click', () => {
//   video.setAttribute('controls', '');
//   video.play();
//   image.style.display = 'none'
// })



// function sum(array) {
//   let result = 0;

//   for(el of array) {
//     result += el;
//   }
  
//   return result;
// }
// function checkArray(array, erase) {
//   let final__array = [];
//   for(let i = 0; i < array.length; i++) {
//     let flag = sum(array.slice(0, i + 1));
//     if(flag !== erase) {
     

//       final__array.push(flag);
//     }
  
//   }
  
//   return final__array;
// }



// alert(checkArray([1,2,3,4], 6));


// let team__members = document.querySelector('.team__members-head');

// let img = team__members.getElementsByTagName('img');

// img.addEventListener('click', doIt);
// function doIt() {
//   for( let i = 0; i < img.length; i++ ) {
//     img[i].classList.toggle('active__show');
//   }
// }
