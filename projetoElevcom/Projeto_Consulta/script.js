
function search() {
  document.getElementById("txtPesquisar-hp").focus();
  const searchTerm = document.getElementById("txtPesquisar-hp").value.toUpperCase();
  // lista de estados do Brasil
  const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES',
    'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  // objeto mapeando cada estado para o arquivo HTML correspondente
  const estadoToHtml = {
    'SP': 'clientesEstados/clientesSP.html',
    'RJ': 'clientesEstados/clientesRJ.html',
    'SC': 'clientesEstados/clientesSC.html',
    // adicione mais estados e arquivos HTML aqui
  };

  for (let i = 0; i < estados.length; i++) {
    const estado = estados[i];
    if (estado.startsWith(searchTerm)) {
      const htmlFile = estadoToHtml[estado];
      if (htmlFile) {
        window.location.href = htmlFile; //COMO UTILIZAR ESSE SCRIPT//
        return;
      }
    }
  }

  alert('Nenhum cliente encontrado para o UF digitado.');
}



function voltarInicio() {

  var diretorioAtual = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1); 

  if (diretorioAtual == "Projeto_Consulta.html") {
    window.location.href = "index.html";
  } else if (diretorioAtual == "clientesEstado.html" ) {
    window.location.href = "../index.html";
  } else {
    // se não estiver em nenhum diretório específico, redirecionar para "index.html"
    window.location.href = "../../index.html";
  }
}



