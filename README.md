<!-- Title & Description -->
<h1 align="center">ClimaTempo APP</h1>
<p align="center">Aplicativo para acessar informações meteorológicas.</p>

<!-- Badges -->
<p align="center">
  
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/pedroibribas/weather-app?color=blue">
  
  <img alt="License" src="https://img.shields.io/github/license/pedroibribas/weather-app?style=flat-square&color=blue">
 
  <a href="https://floating-plateau-59695.herokuapp.com/">
    <img alt="Website" src="https://img.shields.io/website?style=flat-square&url=https%3A%2F%2Ffloating-plateau-59695.herokuapp.com%2F">
  </a>
  
</p>

<!-- Tabela de conteúdos -->
<p align="center">
  <a href="#objetivo">Objetivo</a> &#xa0; | &#xa0;
  <a href="#aviso">Aviso</a> &#xa0; | &#xa0;
  <a href="#screenshots">Screenshots</a> &#xa0; | &#xa0;
  <a href="#pré-requisitos">Pré-requisitos</a> &#xa0; | &#xa0;
  <a href="#rodando-o-servidor">Rodando o servidor</a> &#xa0; | &#xa0;
  <a href="#tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#contribuição">Contribuição</a> &#xa0; | &#xa0;
  <a href="#autor">Autor</a> &#xa0; | &#xa0;
  <a href="#licença">Licença</a>
</p>

<br>

## Objetivo

Este é um aplicativo de clima-tempo em língua pt-BR.  

Nele, o usuário busca pelo nome de uma cidade e o app gera informações meteriológicas sobre a localidade, como temperatura, descrição do tempo, velocidade do vento e humidade.

O meu objetivo foi praticar o framework Express e o consumo de API de terceiros no backend. Portanto, o app tem fins educacionais e não tem a intenção imediata de explorar todas as funcionalidades de um app profissional do gênero.

Em suma, o servidor recebe o nome da cidade buscado pelo usuário no formulário, passa-o como `query` da URL da requisição HTTP, e os dados obtidos são renderizados com código HTML/JS pelos arquivos EJS.

## Aviso

- **A chave-API que eu usei no deploy foi removida do arquivo `app.js` deste repositório público por motivos de segurança.**

## Screenshots

- Tela inicial
<img width="325px" src="./assets/github/screenshots/ss-initial-screen.jpg">

- Resultado normal da pesquisa
<img width="325px" src="./assets/github/screenshots/ss-success.jpg">

- Mensagem de erro caso o usuário erre o nome da cidade
<img width="325px" src="./assets/github/screenshots/ss-error.jpg">

## Pré-requisitos

Antes de começar, você vai precisar de [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e um editor para o código, como [VSCode](https://code.visualstudio.com/).

## Rodando o servidor

```bash
# Clone o repositório com HTTPS
$ git clone https://github.com/pedroibribas/weather-app

# Clone o repositório com SSH
$ git clone git@github.com:pedroibribas/weather-app.git

# Acesse a pasta do projeto
$ cd weather-app

# Instale todas as dependências
$ npm install

# Gera uma API KEY no site OpenWheter <https://openweathermap.org/appid>

# Configure a API KEY gerada como variável de ambiente
$ export API_KEY={API_KEY_EXEMPLO}

# Execute a aplicação
$ npm start

# O servidor será inicializado em <http://localhost:3000>
```

## Tecnologias

As seguintes tecnologias foram usadas nos projeto:

- [NodeJS](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/)
- [Https](https://nodejs.org/api/https.html)
- [EJS](https://ejs.co/)
- [OpenWeather API](https://openweathermap.org/)
- [Heroku](https://www.heroku.com/platform)

## Contribuição

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/viniciussbpc" target="_blank">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/43794537?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>Vinícius Santos</b></sub>
      </a>
    </td>
  </tr>
</table>

## Autor
**Pedro Ribas**  
<a href="https://linkedin.com/in/pedroibribas/" target="_blank">
  <img align="center" src="https://img.shields.io/badge/-pedroibribas-blue?style=flat&logo=linkedin" alt="linkedin"/>
</a>
<a href="https://instagram.com/pedroivo.ribas/" target="_blank">
  <img align="center" src="https://img.shields.io/badge/-pedroibribas-%23E4405F?style=flat&logo=instagram&logoColor=white" alt="instagram"/>
</a>


## Licença

Este projeto está sob licença [MIT](LICENSE).

Feito com :heart: por <a href="https://github.com/pedroibribas" target="_blank">Pedro Ribas</a>.
