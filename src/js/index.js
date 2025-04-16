const copyButton = document.getElementById("copyButton");

copyButton.addEventListener("click", () => {
  // Selecionar o texto que você quer copiar (por exemplo, de um elemento com id="textoACopiar")
  const textoACopiar = document.getElementById("textoACopiar").textContent;

  // Copiar o texto para a área de transferência
  navigator.clipboard.writeText(textoACopiar)
    .then(() => {
      // Opcional: exibir uma mensagem ao usuário
      alert("Pix copiado com sucesso! (pix do meu filho Gabriel da Silva Camozzato). Por favor verificar o nome antes de tranferir");
    })
    .catch((error) => {
      // Opcional: lidar com erros, se necessário
      console.error("Erro ao copiar para a área de transferência:", error);
    });
});