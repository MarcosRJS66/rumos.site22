function enviarWhatsApp(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;
  const texto = `Olá! Me chamo ${nome}. Meu e-mail é ${email}. Gostaria de informações: ${mensagem}`;
  const url = `https://wa.me/5548988788879?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
  return false;
}