// let p = document.createElement('p');

// document.body.prepend(p);
// let num = 0;
// p.innerHTML = num;

// document.body.addEventListener('keydown', (event) => {
//   if(event.keyCode == 32) {
//     event.preventDefault()
//     num +=1;
    
//       p.style.color = 'red';
    
    
//     p.innerHTML = num;
//   }
  

// })

// let teamMembers = document.querySelector('.team__members');
// let elements = document.getElementsByClassName('team-cards__element');

// teamMembers.addEventListener('click', event => {
//   let target = event.target;
// for(let i = 0; i < elements.length; i++) {
//   if(elements[i] == target) {
//     elements[i].classList.target('team-cards__photo-active');
//     console.log('target!')
//   }
// }
 
// })


const photos = document.getElementsByClassName('team-cards__photo');
const discription = document.getElementsByClassName('team-cards__discription');
const teamCards = document.querySelector('.team-cards');

if(window.innerWidth <= 375) {
  photos[1].classList.remove('team-cards__photo-active');
  photos[1].classList.add('opacity');

  // discription[1].classList.remove('team-cards__discription-active');

  document.addEventListener('click', event => {
    let target = event.target;
  
    for( let i = 0; i < photos.length; i++) {
      if(photos[i] == target) {
        Array.prototype.forEach.call(photos, elm => {
          elm.classList.remove('opacity');
  
        });
  
        Array.prototype.forEach.call(discription, elm => {
          elm.classList.remove('team-cards__discription-active');
        });
  
        photos[i].classList.add('opacity');
              discription[i].classList.add('team-cards__discription-active');
      }
    }
  })
}
if(window.innerWidth > 375) {
  document.addEventListener('click', event => {
    let target = event.target;
  
    for( let i = 0; i < photos.length; i++) {
      if(photos[i] == target) {
        Array.prototype.forEach.call(photos, elm => {
          elm.classList.remove('team-cards__photo-active');
  
        });
  
        Array.prototype.forEach.call(discription, elm => {
          elm.classList.remove('team-cards__discription-active');
        });
  
        photos[i].classList.add('team-cards__photo-active');
              discription[i].classList.add('team-cards__discription-active');
      }
    }
  })
}





// alert(window.innerWidth);