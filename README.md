# Tindog Backend

## 📋 Pré-requisitos

Certifique-se de ter os seguintes requisitos instalados antes de prosseguir:

#### 1. Docker e Docker Compose
#### 2. Npm
#### 3. Yarn
Instale globalmente via Npm:

```
$ npm install -g yarn
```
Verifique a instalação do Yarn:
```
$ yarn -v
```


## Configuração do Banco de Dados
Para executar o banco de dados, utilize os seguintes comando:
```
$ make up
```
```
$ make setup-db
```
```
$ make create-users-table
```

Veja o arquivo Makefile para verificar a função de cada comando.

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

