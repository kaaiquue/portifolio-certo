const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
// setInterval(()=>{

// },1);
setInterval(() => {
  const dateToday = new Date();

  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();


  horas.textContent = hr;
  minutos.textContent = minutos;
  segundos.textContent = sec


}, 1);