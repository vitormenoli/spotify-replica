# Spotify Replica

![Spotify Image](https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg)

Uma réplica do Spotify desenvolvida durante **4 dias** com base nas aulas da **Jornada Fullstack** do canal [Hashtag Programação](https://www.youtube.com/@HashtagProgramacao).  
O projeto possui um **frontend** que reproduz uma interface semelhante à do Spotify e um **backend** que gerencia uma API integrada a um banco de dados **MongoDB**.

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
- [Contato](#contato)

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
  - Possivelmente frameworks/bundlers modernos (ex.: Vite)

- **Backend:**
  - Node.js
  - Frameworks e bibliotecas (ex.: Express)
  - MongoDB para armazenamento dos dados

- **Ferramentas e Outras Tecnologias:**
  - Git para controle de versão
  - NPM/Yarn para gerenciamento de dependências

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