const clock = document.querySelector('.clock');

const tick = () => {
  const now = new Date();
  
  
  const s = now.getSeconds();
  const m = now.getMinutes();
  const h = now.getHours();

  const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span> 
  `
  clock.innerHTML = html;
};

setInterval(tick, 1000);