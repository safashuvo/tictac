let item = document.querySelectorAll('.item');
let again = document.querySelector('#again');
let para = document.querySelector('p');
let body = document.querySelector('body');
let start = document.querySelector('.start');
let end = document.querySelector('.end');
let invisible = document.querySelector('.invisible');
let startBtn = document.querySelector('#startBtn');
let choose = document.querySelector('.choose');
let friend = document.querySelector('.friend');
let computer = document.querySelector('.computer');
let difficulty = document.querySelector('.difficulty');
let easy = document.querySelector('.easy');
let hard = document.querySelector('.hard');
let hardPage = document.querySelector('.hardPage');
let back = document.querySelector('#back');
// Initial value set for item
for (let i = 0; i < 9; i++) {
   item[i].textContent = '';
}
// Calling Starting Page
setTimeout(() => {
   start.style.display = 'block';
}, 1000);
startBtn.addEventListener('click', (e) => {
   e.preventDefault();
   start.style.display = 'none';
   choose.style.display = 'block';
});
friend.addEventListener('click', (e) => {
   e.preventDefault();
   choose.style.display = 'none';
   let x = 0;
   for (let i = 0; i < 9; i++) {
      item[i].addEventListener('click', () => {
         if (x % 2 == 0) {
            item[i].textContent = 'X';
            x++;
            if (item[i].textContent == 'X') {
               item[i].style.color = '#ffffff';
            }
         } else {
            item[i].textContent = 'O';
            x++;
            if (item[i].textContent == 'O') {
               item[i].style.color = 'red';
            }
         }
         if (
            item[0].textContent == item[1].textContent &&
            item[1].textContent == item[2].textContent &&
            item[0].textContent != '' &&
            item[1].textContent != '' &&
            item[2].textContent != ''
         ) {
            para.innerHTML = `${item[0].textContent} is winer`;
            invisible.style.display = 'block';
            setTimeout(() => {
               end.style.display = 'block';
               invisible.style.display = 'none';
            }, 1000);
         } else if (
            item[3].textContent == item[4].textContent &&
            item[4].textContent == item[5].textContent &&
            item[3].textContent != '' &&
            item[4].textContent != '' &&
            item[5].textContent != ''
         ) {
            para.innerHTML = `${item[3].textContent} is winer`;
            invisible.style.display = 'block';
            setTimeout(() => {
               end.style.display = 'block';
               invisible.style.display = 'none';
            }, 1000);
         } else if (
            item[6].textContent == item[7].textContent &&
            item[7].textContent == item[8].textContent &&
            item[6].textContent != '' &&
            item[7].textContent != '' &&
            item[8].textContent != ''
         ) {
            para.innerHTML = `${item[6].textContent} is winer`;
            invisible.style.display = 'block';
            setTimeout(() => {
               end.style.display = 'block';
               invisible.style.display = 'none';
            }, 1000);
         } else if (
            item[0].textContent == item[3].textContent &&
            item[3].textContent == item[6].textContent &&
            item[0].textContent != '' &&
            item[3].textContent != '' &&
            item[6].textContent != ''
         ) {
            para.innerHTML = `${item[0].textContent} is winer`;
            invisible.style.display = 'block';
            setTimeout(() => {
               end.style.display = 'block';
               invisible.style.display = 'none';
            }, 1000);
         } else if (
            item[1].textContent == item[4].textContent &&
            item[4].textContent == item[7].textContent &&
            item[1].textContent != '' &&
            item[4].textContent != '' &&
            item[7].textContent != ''
         ) {
            para.innerHTML = `${item[1].textContent} is winer`;
            invisible.style.display = 'block';
            setTimeout(() => {
               end.style.display = 'block';
               invisible.style.display = 'none';
            }, 1000);
         } else if (
            item[2].textContent == item[5].textContent &&
            item[5].textContent == item[8].textContent &&
            item[2].textContent != '' &&
            item[5].textContent != '' &&
            item[8].textContent != ''
         ) {
            para.innerHTML = `${item[2].textContent} is winer`;
            invisible.style.display = 'block';
            setTimeout(() => {
               end.style.display = 'block';
               invisible.style.display = 'none';
            }, 1000);
         } else if (
            item[0].textContent == item[4].textContent &&
            item[4].textContent == item[8].textContent &&
            item[0].textContent != '' &&
            item[4].textContent != '' &&
            item[8].textContent != ''
         ) {
            para.innerHTML = `${item[0].textContent} is winer`;
            invisible.style.display = 'block';
            setTimeout(() => {
               end.style.display = 'block';
               invisible.style.display = 'none';
            }, 1000);
         } else if (
            item[2].textContent == item[4].textContent &&
            item[4].textContent == item[6].textContent &&
            item[2].textContent != '' &&
            item[4].textContent != '' &&
            item[6].textContent != ''
         ) {
            para.innerHTML = `${item[2].textContent} is winer`;
            invisible.style.display = 'block';
            setTimeout(() => {
               end.style.display = 'block';
               invisible.style.display = 'none';
            }, 1000);
         } else {
            if (
               item[0].textContent != '' &&
               item[1].textContent != '' &&
               item[2].textContent != '' &&
               item[3].textContent != '' &&
               item[4].textContent != '' &&
               item[5].textContent != '' &&
               item[6].textContent != '' &&
               item[7].textContent != '' &&
               item[8].textContent != ''
            ) {
               para.innerHTML = 'Tie Match';
               setTimeout(() => {
                  end.style.display = 'block';
               }, 1000);
            }
         }
      });
   }
});

computer.addEventListener('click', (e) => {
   e.preventDefault();
   choose.style.display = 'none';
   difficulty.style.display = 'block';
});
easy.addEventListener('click', (e) => {
   e.preventDefault();
   difficulty.style.display = 'none';
   /////////////////////
   for (let i = 0; i < 9; i++) {
      item[i].addEventListener('click', () => {
         if (true) {
            item[i].textContent = 'X';
            if (item[i].textContent == 'X') {
               item[i].style.color = '#ffffff';
            }
            while (true) {
               if (
                  item[0].textContent != '' &&
                  item[1].textContent != '' &&
                  item[2].textContent != '' &&
                  item[3].textContent != '' &&
                  item[4].textContent != '' &&
                  item[5].textContent != '' &&
                  item[6].textContent != '' &&
                  item[7].textContent != '' &&
                  item[8].textContent != ''
               ) {
                  break;
               }
               let ranNum = Math.random();
               let ranRou = Math.round(ranNum * 10) % 9;
               if (item[ranRou].textContent === '') {
                  setTimeout(() => {
                     item[ranRou].textContent = 'O';
                     item[ranRou].style.color = 'red';
                  }, 500);
                  break;
               }
            }
         }
         if (
            item[0].textContent == item[1].textContent &&
            item[1].textContent == item[2].textContent &&
            item[0].textContent != '' &&
            item[1].textContent != '' &&
            item[2].textContent != ''
         ) {
            para.innerHTML = `${item[0].textContent} is winer`;
            invisible.style.display = 'block';
            setTimeout(() => {
               end.style.display = 'block';
               invisible.style.display = 'none';
            }, 1000);
         } else if (
            item[3].textContent == item[4].textContent &&
            item[4].textContent == item[5].textContent &&
            item[3].textContent != '' &&
            item[4].textContent != '' &&
            item[5].textContent != ''
         ) {
            para.innerHTML = `${item[3].textContent} is winer`;
            invisible.style.display = 'block';
            setTimeout(() => {
               end.style.display = 'block';
               invisible.style.display = 'none';
            }, 1000);
         } else if (
            item[6].textContent == item[7].textContent &&
            item[7].textContent == item[8].textContent &&
            item[6].textContent != '' &&
            item[7].textContent != '' &&
            item[8].textContent != ''
         ) {
            para.innerHTML = `${item[6].textContent} is winer`;
            invisible.style.display = 'block';
            setTimeout(() => {
               end.style.display = 'block';
               invisible.style.display = 'none';
            }, 1000);
         } else if (
            item[0].textContent == item[3].textContent &&
            item[3].textContent == item[6].textContent &&
            item[0].textContent != '' &&
            item[3].textContent != '' &&
            item[6].textContent != ''
         ) {
            para.innerHTML = `${item[0].textContent} is winer`;
            invisible.style.display = 'block';
            setTimeout(() => {
               end.style.display = 'block';
               invisible.style.display = 'none';
            }, 1000);
         } else if (
            item[1].textContent == item[4].textContent &&
            item[4].textContent == item[7].textContent &&
            item[1].textContent != '' &&
            item[4].textContent != '' &&
            item[7].textContent != ''
         ) {
            para.innerHTML = `${item[1].textContent} is winer`;
            invisible.style.display = 'block';
            setTimeout(() => {
               end.style.display = 'block';
               invisible.style.display = 'none';
            }, 1000);
         } else if (
            item[2].textContent == item[5].textContent &&
            item[5].textContent == item[8].textContent &&
            item[2].textContent != '' &&
            item[5].textContent != '' &&
            item[8].textContent != ''
         ) {
            para.innerHTML = `${item[2].textContent} is winer`;
            invisible.style.display = 'block';
            setTimeout(() => {
               end.style.display = 'block';
               invisible.style.display = 'none';
            }, 1000);
         } else if (
            item[0].textContent == item[4].textContent &&
            item[4].textContent == item[8].textContent &&
            item[0].textContent != '' &&
            item[4].textContent != '' &&
            item[8].textContent != ''
         ) {
            para.innerHTML = `${item[0].textContent} is winer`;
            invisible.style.display = 'block';
            setTimeout(() => {
               end.style.display = 'block';
               invisible.style.display = 'none';
            }, 1000);
         } else if (
            item[2].textContent == item[4].textContent &&
            item[4].textContent == item[6].textContent &&
            item[2].textContent != '' &&
            item[4].textContent != '' &&
            item[6].textContent != ''
         ) {
            para.innerHTML = `${item[2].textContent} is winer`;
            invisible.style.display = 'block';
            setTimeout(() => {
               end.style.display = 'block';
               invisible.style.display = 'none';
            }, 1000);
         } else {
            if (
               item[0].textContent != '' &&
               item[1].textContent != '' &&
               item[2].textContent != '' &&
               item[3].textContent != '' &&
               item[4].textContent != '' &&
               item[5].textContent != '' &&
               item[6].textContent != '' &&
               item[7].textContent != '' &&
               item[8].textContent != ''
            ) {
               para.innerHTML = 'Tie Match';
               setTimeout(() => {
                  end.style.display = 'block';
               }, 1000);
            }
         }
      });
   }
   //////////////////////
});
hard.addEventListener('click', (e) => {
   e.preventDefault();
   difficulty.style.display = 'none';
   hardPage.style.display = 'block';
});
back.addEventListener('click', (e) => {
   e.preventDefault();
   difficulty.style.display = 'block';
   hardPage.style.display = 'none';
});
//Reset Game
again.addEventListener('click', (e) => {
   e.preventDefault();
   for (let i = 0; i < 9; i++) {
      item[i].textContent = '';
      x = 0;
   }
   end.style.display = 'none';
});
