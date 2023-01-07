const divTela = document.querySelector(".tela");

window.onmousemove = (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const percentX = (mouseX / window.innerWidth);
  const percentY = (mouseY / window.innerHeight);

  const maxWidth = (divTela.offsetWidth - window.innerWidth);
  const maxHeight = (divTela.offsetHeight - window.innerHeight);

  const panX = (maxWidth * percentX * -1);
  const panY = (maxHeight * percentY * -1);

  divTela.style.transform = `translate(${panX}px, ${panY}px)`

  divTela.animate(
    {
      transform: `translate(${panX}px, ${panY}px)`
    },
    {
      duration: 4000,
      fill: "forwards",
      easing: "ease"
    }
  )
}