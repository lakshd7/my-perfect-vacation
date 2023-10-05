const image = document.querySelector('.title .background');
document.addEventListener('mousemove', (e) => {
  const moveX = (e.pageX * -1 / 15);
  const moveY = (e.pageY * -1 / 15);
  image.style.backgroundPosition = `${moveX}px ${moveY}px`;
});