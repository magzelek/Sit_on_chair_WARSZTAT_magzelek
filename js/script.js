document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

//zadanie1
  var hidMenu = document.getElementsByTagName('UL')[1];

  document.getElementById('oFirmieMenu').addEventListener('mouseover', function () {
    hidMenu.classList.add('vis');
  });

  document.getElementById('oFirmieMenu').addEventListener('mouseout', function () {
    hidMenu.classList.remove('vis');
  });

//zadanie2
  var hover = Array.from( document.getElementsByClassName('box') );
  var title = Array.from( document.getElementsByClassName('boxTitleContainer') );

  hover[0].addEventListener( 'mouseover', function() {
    title[0].classList.add('hid');
  } );

  hover[0].addEventListener( 'mouseout', function() {
    title[0].classList.remove('hid');
  } );

  hover[1].addEventListener( 'mouseover', function() {
    title[1].classList.add('hid');
  } );

  hover[1].addEventListener( 'mouseout', function() {
    title[1].classList.remove('hid');
  } );

//zadanie3
  var next = document.getElementsByClassName('moveRight')[0];
  var prev = document.getElementsByClassName('moveLeft')[0];

  var search = document.getElementsByClassName('productPhoto')[0];
  var liS = Array.from( search.getElementsByTagName('LI') );

  var pictureIndex = 0;

  var visibleElement = liS[0];

  visibleElement.classList.add('vis');

  function sliderNext() {
    liS[pictureIndex].classList.remove('vis');
    pictureIndex = (pictureIndex+1)%liS.length;
    liS[pictureIndex].classList.add('vis');
    console.log('klikniecie next');
  }

  function sliderPrev() {
    liS[pictureIndex].classList.remove('vis');
    pictureIndex = (liS.length-((liS.length+1)-(pictureIndex+1))%liS.length)-1;
    liS[pictureIndex].classList.add('vis');
    console.log('klikniecie prev');
  }

  next.addEventListener('click', sliderNext);
  prev.addEventListener('click', sliderPrev);

//zadanie4
var rodzaj = document.getElementsByClassName('drop_down_list')[0].getElementsByClassName('list_arrow')[0];
var kolor = document.getElementsByClassName('drop_down_list')[1].getElementsByClassName('list_arrow')[0];
var material = document.getElementsByClassName('drop_down_list')[2].getElementsByClassName('list_arrow')[0];


rodzaj.addEventListener('click', function() {
  document.getElementsByClassName('list_panel')[0].classList.toggle('hid');
});

kolor.addEventListener('click', function() {
  document.getElementsByClassName('list_panel')[1].classList.toggle('hid');
});

material.addEventListener('click', function() {
  document.getElementsByClassName('list_panel')[2].classList.toggle('hid');
});

function sumFinal() {
  var cena1 = Number(document.getElementsByClassName('title value')[0].innerHTML);
  var cena2 = Number(document.getElementsByClassName('color value')[0].innerHTML);
  var cena3 = Number(document.getElementsByClassName('pattern value')[0].innerHTML);
  var priceSum = 0;
  priceSum = cena1+cena2+cena3;
  document.getElementsByClassName('sum')[0].innerHTML=priceSum+" zł";
}

  //rodzaj
  var clair = document.getElementsByClassName('list_panel')[0].getElementsByTagName('LI')[0];
  var margarita = document.getElementsByClassName('list_panel')[0].getElementsByTagName('LI')[1];
  var selena = document.getElementsByClassName('list_panel')[0].getElementsByTagName('LI')[2];

  clair.addEventListener('click', function() {
    document.getElementsByClassName('list_label')[0].innerHTML="Clair";
    document.getElementsByClassName('title')[0].innerHTML="Clair";
    document.getElementsByClassName('title value')[0].innerHTML=500;
    sumFinal();
  } );

  margarita.addEventListener('click', function() {
    document.getElementsByClassName('list_label')[0].innerHTML="Margarita";
    document.getElementsByClassName('title')[0].innerHTML="Margarita";
    document.getElementsByClassName('title value')[0].innerHTML=450;
    sumFinal();
  } );

  selena.addEventListener('click', function() {
    document.getElementsByClassName('list_label')[0].innerHTML="Selena";
    document.getElementsByClassName('title')[0].innerHTML="Selena";
    document.getElementsByClassName('title value')[0].innerHTML=800;
    sumFinal();
  } );

  //kolor
  var czerwony = document.getElementsByClassName('list_panel')[1].getElementsByTagName('LI')[0];
  var czarny = document.getElementsByClassName('list_panel')[1].getElementsByTagName('LI')[1];
  var pomaranczowy = document.getElementsByClassName('list_panel')[1].getElementsByTagName('LI')[2];

  czerwony.addEventListener('click', function() {
    document.getElementsByClassName('list_label')[1].innerHTML="Czerwony";
    document.getElementsByClassName('color')[0].innerHTML="Czerwony";
    document.getElementsByClassName('color value')[0].innerHTML=0;
    sumFinal();
  } );

  czarny.addEventListener('click', function() {
    document.getElementsByClassName('list_label')[1].innerHTML="Czarny";
    document.getElementsByClassName('color')[0].innerHTML="Czarny";
    document.getElementsByClassName('color value')[0].innerHTML=50;
    sumFinal();
  } );

  pomaranczowy.addEventListener('click', function() {
    document.getElementsByClassName('list_label')[1].innerHTML="Pomarańczowy";
    document.getElementsByClassName('color')[0].innerHTML="Pomarańczowy";
    document.getElementsByClassName('color value')[0].innerHTML=50;
    sumFinal();
  } );

  //material
  var tkanina = document.getElementsByClassName('list_panel')[2].getElementsByTagName('LI')[0];
  var skora = document.getElementsByClassName('list_panel')[2].getElementsByTagName('LI')[1];

  tkanina.addEventListener('click', function() {
    document.getElementsByClassName('list_label')[2].innerHTML="Tkanina";
    document.getElementsByClassName('pattern')[0].innerHTML="Tkanina";
    document.getElementsByClassName('pattern value')[0].innerHTML=0;
    sumFinal();
  } );

  skora.addEventListener('click', function() {
    document.getElementsByClassName('list_label')[2].innerHTML="Skóra";
    document.getElementsByClassName('pattern')[0].innerHTML="Skóra";
    document.getElementsByClassName('pattern value')[0].innerHTML=200;
    sumFinal();
  } );





});
