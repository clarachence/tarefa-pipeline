#🚀 Projeto: Pipeline de CI/CD da Calculadora#
Este projeto demonstra a implementação de um pipeline de Integração Contínua (CI) e Entrega Contínua (CD), automatizando o processo de testes e deploy para uma aplicação de calculadora simples.

O objetivo é garantir que cada alteração no código seja validada automaticamente e, em seguida, publicada em um ambiente de produção (Vercel) de forma rápida e confiável.

##📂 Estrutura do Projeto##
A estrutura do diretório está organizada de forma clara para separar o código da aplicação, os testes e a configuração do pipeline:

tarefa-pipeline/
├── .github/
│   └── workflows/
│       └── ci.yml             # Configuração do pipeline CI/CD
├── src/
│   ├── calculadora.js         # Lógica da calculadora
│   └── index.html             # Interface web da aplicação
├── tests/
│   └── calculadora.test.js    # Testes unitários com Jest
├── package.json               # Gerenciamento de dependências
├── package-lock.json
└── README.md
##⚙️ O Pipeline de CI/CD em Ação##
O pipeline é orquestrado pelo GitHub Actions e é acionado a cada git push para a branch main.

Ele executa os seguintes jobs em sequência:

###1. Build e Testes (build)###
Instalação: npm install para instalar todas as dependências.

Execução de Testes: npm test para rodar os testes unitários da calculadora.js com o Jest.

Status: Apenas se esta etapa for bem-sucedida, o pipeline prosseguirá para o deploy.

###2. Deploy (deploy)###
Pré-condição: Este job depende do sucesso do build.

Publicação: Utiliza as credenciais seguras do Vercel (secrets) para publicar a aplicação.

Resultado: A aplicação é automaticamente atualizada e fica disponível online.

🌐 Acesse a Aplicação
A versão mais recente da calculadora, publicada pelo pipeline, pode ser acessada através do link do Vercel:

➡️ LINK DO SEU PROJETO NO VERCEL

Substitua o texto [LINK DO SEU PROJETO NO VERCEL] pelo link real da sua aplicação.

🤝 Como Contribuir para o Projeto
Se você deseja adicionar uma nova funcionalidade ou corrigir um bug, siga o fluxo de trabalho abaixo:

Clone o repositório:

Bash

git clone https://github.com/clarachence/tarefa-pipeline.git
cd tarefa-pipeline
Instale as dependências:

Bash

npm install
Faça suas alterações:

Modifique o código em src/.

Adicione ou atualize os testes em tests/ para cobrir suas mudanças.

Verifique os testes localmente:

Antes de enviar, certifique-se de que tudo está funcionando:

Bash

npm test
Faça o commit e o push:

Adicione os arquivos alterados:

Bash

git add .
Crie um commit com uma mensagem clara:

Bash

git commit -m "feat: Adiciona funcionalidade de multiplicação"
Envie suas mudanças:

Bash

git push origin main
O pipeline de CI/CD se encarregará do resto, testando seu código e fazendo o deploy se tudo estiver correto.
