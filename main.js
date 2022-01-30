let item = document.querySelectorAll('.item');
let again = document.querySelector('#again');
let para = document.querySelector('p');
let body = document.querySelector('body');
let start = document.querySelector('.start');
let end = document.querySelector('.end');
let invisible = document.querySelector('.invisible');
let startBtn = document.querySelector('#startBtn');
// body.onload(
setTimeout(() => {
   start.style.display = 'block';
}, 1000);
// );
startBtn.addEventListener('click', (e) => {
   e.preventDefault();
   start.style.display = 'none';
});
for (let i = 0; i < 9; i++) {
   item[i].textContent = '';
}
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

again.addEventListener('click', (e) => {
   e.preventDefault();
   for (let i = 0; i < 9; i++) {
      item[i].textContent = '';
      x = 0;
   }
   end.style.display = 'none';
});
