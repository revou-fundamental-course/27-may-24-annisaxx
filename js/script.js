// INI JAVASCRIPT

function formValidation() {
 //   let tidak permanen, evolusi dari var, untuk browser versi modern, ramah memori dibanding var
 //   var tidak permanen, nenek moyang 'let', dipakai khusus untuk browser versi lama
 //   const permanen, sekali dideklarasi tidak bisa diubah
 // let nameInput = document.getElementById('name-input');
 let nameInput = document.querySelector("#name-input").value;
 // console.log(nameInput); 
 if (nameInput == null || nameInput == '') {
    alert('Inputan Kosong');
 } else {
    console.log(nameInput);
 }
}

let indexSlide = 1;
showBanner(1);

function nextSlide(n) {
   showBanner(indexSlide += n);
}
function showBanner(indexBanner) {
  let listImage = document.getElementsByClassName('banner-img')
  if (indexBanner > listImage.length) indexSlide = 1;

   let index = 0;
   while(index < listImage.length) {
      listImage[index].style.display='none';
      index++;
   }

   listImage[indexSlide - 1].style.display='block';
   console.log('Index' + (indexSlide - 1) + 'adalah index image yang ditampilkan');
}

setInterval(() => nextSlide(1), 5000);