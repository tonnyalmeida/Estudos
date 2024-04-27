window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    document.querySelector('body').style.backgroundPositionY = offset * 0.7 + 'px'; // Você pode ajustar o fator 0.7 para controlar a velocidade do efeito de parallax
  });
  