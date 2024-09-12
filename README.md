# Desafio de Desenvolvimento de Aplicação - Gestão de Leads

Este desafio tem como objetivo demonstrar as habilidades em desenvolvimento de aplicações FrontEnd. A aplicação desenvolvida é responsável por gerenciar a manutenção de Leads, implementando uma interface de usuário que segue uma arquitetura previamente definida.

## Para acessar o projeto

- **Código Fonte:** [Repositório](https://github.com/dudafurtado/leads-juscash-web)
- **Website:** [Deploy](https://leads-juscash-web.vercel.app/)
  [Deploy 2](https://leads-juscash-web-git-main-dudafurtados-projects.vercel.app/)
  [Deploy 3](https://leads-juscash-jx9yi1hmu-dudafurtados-projects.vercel.app/)

## Tecnologias Utilizadas

- **Framework:** React
- **Persistência:** LocalStorage do navegador
- **Bibliotecas:** NanoId, CryptoJs, e React Hot Toast

## Funcionalidades Principais

- **Cadastro de Leads:** A aplicação permite a criação de novos Leads com campos obrigatórios e validados, utilizando uma interface intuitiva e funcional.
- **Gerenciamento de Leads:** Os Leads podem ser gerenciados através de uma tabela dividida em três status: Cliente Potencial, Dados Confirmados, e Análise do Lead. Os Leads podem ser arrastados entre as colunas, alterando seu status.
- **Validação de Formulários:** Todos os campos obrigatórios são validados, com critérios específicos para campos como "Password", que deve conter ao menos 8 caracteres, incluindo um caracter especial, um número e um alfanumérico.
- **Modal de Visualização:** Ao clicar no nome de um Lead, uma modal é aberta com as informações detalhadas e preenchidas, permitindo a edição e visualização dos dados.

## Estrutura do Projeto

- **Componentes:** Os componentes são organizados seguindo o princípio de responsabilidade única, garantindo coesão e separação de responsabilidades. Componentes de apresentação gráfica (GUI) são mantidos em arquivos separados de Controladores e Serviços.
- **Arquitetura:** A arquitetura da aplicação segue uma abordagem modular, onde cada componente é responsável por uma parte específica da aplicação. A visualização, regras de apresentação e fluxo de comportamento são implementados em componentes separados.

## Regras de Negócio

- **Fluxo de Leads:**

  - Um Lead pode ser criado com o status "Cliente Potencial".
  - Um Lead com status "Cliente Potencial" pode ser movido para "Dados Confirmados".
  - Um Lead com status "Dados Confirmados" pode ser movido para "Análise do Lead".
  - Não é permitido mover Leads em ordem inversa ou pular status.

- **Cadastro de Lead:**

  - Todos os campos são obrigatórios.
  - A senha deve ter ao menos 8 caracteres, incluindo um especial, um número, e um alfanumérico.
  - Senha e confirmação de senha devem ser iguais.
  - Opções de oportunidades podem ser marcadas/desmarcadas individualmente através de CheckBoxes.

- **Persistência:**
  - Os dados são persistidos no LocalStorage do navegador, garantindo que os Leads e usuários criados sejam mantidos entre sessões.

## Como Rodar o Projeto

### Requisitos

- Node.js (versão LTS recomendada)
- Gerenciador de pacotes npm ou yarn

### Passos

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie a aplicação:**

   ```bash
   npm start
   # ou
   yarn start
   ```

4. **Acesse a aplicação:**
   Abra o navegador e acesse <http://localhost:3000>.

## Deploy

A aplicação está pronta e deployada na Vercel.

## Diferenciais

- **Documentação Técnica:** Para um diferencial, foi criada uma documentação técnica consolidada das regras de negócio aqui no Readme.
- **Fidelidade ao Protótipo:** A aplicação busca atingir a maior fidelidade possível ao protótipo fornecido.
