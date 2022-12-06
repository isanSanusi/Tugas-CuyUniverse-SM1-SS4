function saklar() {
  // RUANG TAMU
  let toggleA = document.getElementById("default-toggleA");
  let toggle1 = document.getElementById("default-toggle1");
  let toggle2 = document.getElementById("default-toggle2");
  let toggle3 = document.getElementById("default-toggle3");
  let toggle4 = document.getElementById("default-toggle4");
  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");
  let lampu4 = document.getElementById("lampu4");
  if (toggle1.checked) {
    lampu1.src = "assets/image/nyala.png";
  } else {
    lampu1.src = "assets/image/mati.png";
  }
  if (toggle2.checked) {
    lampu2.src = "assets/image/nyala.png";
  } else {
    lampu2.src = "assets/image/mati.png";
  }
  if (toggle3.checked) {
    lampu3.src = "assets/image/nyala.png";
  } else {
    lampu3.src = "assets/image/mati.png";
  }
  if (toggle4.checked) {
    lampu4.src = "assets/image/nyala.png";
  } else {
    lampu4.src = "assets/image/mati.png";
  }
  if (toggleA.checked) {
    lampu1.src = "assets/image/nyala.png";
    lampu2.src = "assets/image/nyala.png";
    lampu3.src = "assets/image/nyala.png";
    lampu4.src = "assets/image/nyala.png";
  }

  // RUANG KELUARGA
  let toggleB = document.getElementById("default-toggleB");
  let toggle5 = document.getElementById("default-toggle5");
  let toggle6 = document.getElementById("default-toggle6");
  let toggle7 = document.getElementById("default-toggle7");
  let lampu5 = document.getElementById("lampu5");
  let lampu6 = document.getElementById("lampu6");
  let lampu7 = document.getElementById("lampu7");
  if (toggle5.checked) {
    lampu5.src = "assets/image/nyala.png";
  } else {
    lampu5.src = "assets/image/mati.png";
  }
  if (toggle6.checked) {
    lampu6.src = "assets/image/nyala.png";
  } else {
    lampu6.src = "assets/image/mati.png";
  }
  if (toggle7.checked) {
    lampu7.src = "assets/image/nyala.png";
  } else {
    lampu7.src = "assets/image/mati.png";
  }
  if (toggleB.checked) {
    lampu5.src = "assets/image/nyala.png";
    lampu6.src = "assets/image/nyala.png";
    lampu7.src = "assets/image/nyala.png";
  }

  // KAMAR TIDUR
  let toggleC = document.getElementById("default-toggleC");
  let toggle8 = document.getElementById("default-toggle8");
  let toggle9 = document.getElementById("default-toggle9");
  let lampu8 = document.getElementById("lampu8");
  let lampu9 = document.getElementById("lampu9");
  if (toggle8.checked) {
    lampu8.src = "assets/image/nyala.png";
  } else {
    lampu8.src = "assets/image/mati.png";
  }
  if (toggle9.checked) {
    lampu9.src = "assets/image/nyala.png";
  } else {
    lampu9.src = "assets/image/mati.png";
  }
  if (toggleC.checked) {
    lampu8.src = "assets/image/nyala.png";
    lampu9.src = "assets/image/nyala.png";
  }

  // RUANG MAKAN
  let toggleD = document.getElementById("default-toggleD");
  let toggle10 = document.getElementById("default-toggle10");
  let lampu10 = document.getElementById("lampu10");
  if (toggle10.checked) {
    lampu10.src = "assets/image/nyala.png";
  } else {
    lampu10.src = "assets/image/mati.png";
  }
  if (toggleD.checked) {
    lampu10.src = "assets/image/nyala.png";
  }
}
