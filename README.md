# Tindog Backend

## 📋 Pré-requisitos

Certifique-se de ter os seguintes requisitos instalados antes de prosseguir:

#### 1. Npm
#### 2. Yarn
Instale globalmente via Npm:

```
$ npm install -g yarn
```
Verifique a instalação do Yarn:
```
$ yarn -v
```
#### 3. Docker e Docker Compose


## Configuração do Banco de Dados
Para executar o banco de dados, utilize o Docker Compose com o seguinte comando:
```
$ docker-compose up -d
```

## Atualização Eslint
A configuração de "eslint.autoFixOnSave" no Visual Studio Code não está mais funcionando para realizar correções automáticas no código. Em vez disso, utilize a seguinte configuração no arquivo settings.json do VSCode:
```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll": true
},
```

## 🔧 Instalação
Após garantir que todos os requisitos estão instalados e o banco de dados está em execução, execute o seguinte comando para instalar as dependências do projeto:
```
$ yarn install
```

## ⚙️ Execução
Para iniciar o projeto, utilize o seguinte comando:
```
$ yarn dev
```

