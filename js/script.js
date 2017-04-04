document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  // var oFirmie = document.getElementsByTagName('LI')[0];
  // console.log(oFirmie);
  //
  // function showMenu() {
  //   var hidMenu = document.getElementsByTagName('UL')[1];
  //   hidMenu.classList.toggle('vis');
  //   console.log("klikniecie");
  // }
  //
  // oFirmie.addEventListener('click', showMenu);

  var hidMenu = document.getElementsByTagName('UL')[1];

  document.getElementsByTagName('LI')[0].addEventListener('mouseover', function () {
    hidMenu.classList.add('vis');
  });

  document.getElementsByTagName('LI')[0].addEventListener('mouseout', function () {
    hidMenu.classList.remove('vis');
  });

});
