import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "40px" }}>
      <h1>Fabio Prado de Araújo</h1>
      <p>Trabalho entregue com sucesso utilizando GitHub Actions e GitHub Pages.</p>

      <h2>Resumo dos principais passos</h2>
      <ul>
        <li>Configuração do repositório no GitHub</li>
        <li>Criação do arquivo pipeline.yml</li>
        <li>Commit e push para a branch main</li>
        <li>Execução automática do GitHub Actions</li>
        <li>Deploy para GitHub Pages</li>
      </ul>

      <h2>Steps do pipeline</h2>
      <ol>
        <li>Checkout do repositório</li>
        <li>Setup do Node.js</li>
        <li>Instalação das dependências</li>
        <li>Execução de testes</li>
        <li>Build da aplicação</li>
        <li>Deploy para GitHub Pages</li>
        <li>Notificação de sucesso</li>
      </ol>
    </div>
  );
}

export default App;