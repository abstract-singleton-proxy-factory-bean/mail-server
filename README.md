# MAIL SERVER

API de e-mail para o projeto de ALPOO do 4° semestre

## Como executar?

1. Baixe as dependências executando:

```sh
$ npm i
```

2. Crie um arquivo `.env` com as seguintes variáveis:

```sh
EMAIL_USER='...'
EMAIL_PASS='...'
```

3. Execute a aplicação com o comando:

```sh
$ npm run start
```

## Endpoints

### Mail

- URL base: http://localhost:3317/mail?name=$NAME&email=$EMAIL
- Exemplo de URL: http://localhost:3317/mail?name=Eder&email=eder@mail.com

| Parâmetros | Tipo   |
| ---------- | ------ |
| name       | string |
| email      | string |

## Autor

| ![Eder Lima](https://github.com/Nxrth-x.png?size=100) | ![Élida Castro](https://github.com/elidacastro.png?size=100) | ![Vinícius Henrique](https://github.com/indiano-jpg.png?size=100) |
| ----------------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------- |
| [Eder Lima](https://github.com/Nxrth-x)               | [Élida Castro](https://github.com/elidacastro)               | [Vinícius Henrique](https://github.com/indiano-jpg)               |
