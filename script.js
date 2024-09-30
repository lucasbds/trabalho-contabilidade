JAVASCRIPT;
document
  .getElementById('lancamentoForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const data = document.getElementById('data').value;
    const descricao = document.getElementById('descricao').value;
    const debito = document.getElementById('debito').value;
    const credito = document.getElementById('credito').value;
    const valor = parseFloat(document.getElementById('valor').value);

    // Aqui você pode adicionar a lógica para armazenar os dados em um banco de dados

    console.log(
      `Lançamento: ${data}, ${descricao}, ${debito}, ${credito}, ${valor}`,
    );

    // Limpa o formulário
    this.reset();
  });
