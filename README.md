# Spotify Replica

<img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" width="350px">

Uma réplica do Spotify desenvolvida durante **4 dias** com base nas aulas da **Jornada Fullstack** do canal [Hashtag Programação](https://www.youtube.com/@HashtagProgramacao).  
O projeto possui um **frontend** que reproduz uma interface semelhante à do Spotify e um **backend** que gerencia uma API integrada a um banco de dados **MongoDB**.

> **Confira o site do projeto hospedado na Netlify: [vmspotify.netlify.app](https://vmspotify.netlify.app)** 🎵

---

## Sumário

- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Execução](#instalação-e-execução)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Considerações Importantes](#considerações-importantes)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Créditos](#créditos)

---

## Descrição

Este projeto é uma réplica inspirada na interface do Spotify. Embora não seja uma cópia exata, ele busca capturar a essência e a experiência de uso da plataforma original. Foi desenvolvido seguindo os ensinamentos do canal Hashtag Programação, onde cada etapa do desenvolvimento é cuidadosamente explicada.

O **frontend** foi criado para simular a página principal do Spotify, enquanto o **backend** gerencia uma API que interage com um banco de dados **MongoDB** para armazenar informações sobre músicas e artistas.

---

## Funcionalidades

- **Interface Inspirada no Spotify:**  
  Página com design e navegação similares à do Spotify.

- **API para Gerenciamento de Músicas:**  
  - Cada artista possui 10 músicas cadastradas.
  - Cada registro de música possui os campos: **nome**, **duração**, **imagem**, **artista** e **ID**.
  - **Observação:** Embora sejam cadastradas 10 músicas por artista, o arquivo de áudio (.mp3) utilizado é o mesmo para todas elas.

- **Integração com MongoDB:**  
  Armazenamento e gerenciamento dos dados musicais.

- **Projeto 100% Funcional:**  
  Apesar da limitação com os arquivos de áudio, todas as demais funcionalidades estão operando normalmente.

---

## Tecnologias

- **Frontend:**
  - HTML5, CSS3 e JavaScript
  - Vite e React JS

- **Backend:**
  - Node.js
  - Frameworks e bibliotecas (ex.: Express)
  - MongoDB para armazenamento dos dados

- **Ferramentas e Outras Tecnologias:**
  - Git para controle de versão
  - NPM para gerenciamento de dependências

---

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalados:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [MongoDB](https://www.mongodb.com/) (local ou via serviço de nuvem)
- Git

---

## Instalação e Execução

### Frontend

1. **Acesse a pasta do frontend:**

   ```bash
   cd frontend
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```
   > **O projeto deverá estar disponível geralmente em `http://localhost:3000` (verifique o terminal para a porta correta).**

### Backend

1. **Acesse a pasta do backend:**

   ```bash
   cd backend
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` dentro da pasta `backend` (caso não exista) e adicione as configurações necessárias, por exemplo:
   ```bash
   PORT=3000
   MONGODB_URI=your-mongodb-connection-string
   ```
   
4. **Inicie o servidor do backend:**

   ```bash
   npm start
   ```
   > **O servidor iniciará na porta definida no arquivo `.env` (por padrão, 3000).**

## Estrutura do Projeto

   ```perl
   / (raiz)
   ├── frontend/             # Código fonte do frontend
   ├── backend/              # Código fonte do backend e API
   ├── package.json          # Dependências e scripts da raiz
   ├── package-lock.json     # Lockfile das dependências (pode ser ignorado se preferir)
   ├── node_modules/         # Dependências instaladas (geralmente ignoradas)
   ├── .gitignore            # Arquivo de configuração para ignorar arquivos no Git
   └── README.md             # Documentação do projeto
   ```

## Considerações Importantes

* **Áudio Repetido**:
Cada artista possui 10 músicas cadastradas, porém todas utilizam o mesmo arquivo de áudio (.mp3). Essa é uma limitação proposital do projeto para fins de demonstração.

* **Dados Musicais**:
No banco de dados, cada música é registrada com os campos: nome, duração, imagem, artista e ID.

* **Desenvolvimento Rápido**:
O projeto foi desenvolvido em um curto período (4 dias) e como parte de um desafio formativo. Alguns aprimoramentos e funcionalidades extras podem ser implementados futuramente.

* **Inspiração**:
O projeto foi fortemente inspirado nas aulas do canal Hashtag Programação, que oferecem conteúdos práticos e dinâmicos para o desenvolvimento fullstack.

## Contribuição

Contribuições são sempre bem-vindas! Se você deseja melhorar ou estender o projeto, siga os passos abaixo:

1. **Fork** o repositório.
2. Crie uma **branch** para sua feature: `git checkout -b minha-feature`.
3. Faça os **commits** com suas alterações: `git commit -m 'Adiciona nova feature`'.
4. Envie a branch para o repositório remoto: `git push origin minha-feature`.
5. Abra um **Pull Request**.

## Licença
Distribuído sob a licença MIT. Veja o arquivo LICENSE para mais informações.

## Créditos
* Desenvolvido por Vitor Menoli seguindo os passos de referência da [Hashtag Programação](https://www.youtube.com/@HashtagProgramacao).

* **Nota:** Este projeto foi criado para fins educacionais e demonstrativos, seguindo as orientações e práticas apresentadas na Jornada Fullstack do canal Hashtag Programação.