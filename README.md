# Calculadora JavaScript

Projeto desenvolvido em **JavaScript** com o objetivo de praticar conceitos fundamentais da linguagem, criação de funções, modularização, testes unitários e análise estática de código utilizando **ESLint**.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

# Sobre o projeto

Este projeto consiste na implementação de uma calculadora simples em JavaScript, desenvolvida para exercitar conceitos básicos de programação, organização modular do código e validação de funcionalidades por meio de testes.

Além da implementação das operações matemáticas, o projeto utiliza o **ESLint** para promover boas práticas de desenvolvimento e identificar possíveis problemas durante a escrita do código.

# Funcionalidades

- Implementação de operações matemáticas
- Organização das funções em módulos
- Exportação de funções utilizando CommonJS
- Testes unitários simples
- Validação do código com ESLint

# Estrutura do projeto

```text
calculadora
│
├── index.js          # Implementação das funções da calculadora
├── unitario.js       # Testes unitários
├── package.json
├── package-lock.json
├── .eslintrc.json
└── README.md
```

# Tecnologias utilizadas

- JavaScript (ES6+)
- Node.js
- ESLint

# Conceitos praticados

Durante o desenvolvimento foram aplicados conceitos como:

- Funções em JavaScript
- Arrow Functions
- Modularização de código
- CommonJS (`module.exports`)
- Importação de módulos (`require`)
- Testes unitários básicos
- Análise estática de código
- Boas práticas de desenvolvimento

# Como executar

## 1. Clone o repositório

```bash
git clone https://github.com/anaalthoff/calculadora-teste.git
```

## 2. Acesse o projeto

```bash
cd calculadora-teste
```

## 3. Instale as dependências

```bash
npm install
```

## 4. Execute a aplicação

```bash
node index.js
```

## 5. Execute os testes

```bash
node unitario.js
```

## 6. Executar o ESLint

```bash
npm run lint
```

# Objetivos de aprendizagem

Este projeto foi desenvolvido para praticar:

- Programação em JavaScript
- Estruturação de projetos Node.js
- Criação de funções reutilizáveis
- Modularização de código
- Testes unitários
- Qualidade de código com ESLint

# Melhorias futuras

Como evolução do projeto, podem ser implementadas funcionalidades como:

- Adição das operações de subtração, multiplicação e potência
- Tratamento de divisão por zero
- Testes automatizados utilizando Jest
- Interface gráfica para interação do usuário
- Cobertura de testes
- Integração contínua (CI)
