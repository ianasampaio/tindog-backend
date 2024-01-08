# Tindog Backend

## 📋 Pré-requisitos

Certifique-se de ter os seguintes requisitos instalados antes de prosseguir:

#### 1. Docker e Docker Compose
#### 2. Npm
#### 3. Yarn
Instale globalmente via Npm:

```
npm install -g yarn
```
Verifique a instalação do Yarn:
```
yarn -v
```

## Configuração do Banco de Dados
Para executar o banco de dados, utilize os seguintes comando:
```
make up
```
```
make createdb
```
Veja o arquivo Makefile para verificar a função de cada comando.

## Executando Migrações
Antes de executar migrações, certifique-se de que seu banco de dados PostgreSQL está configurado e acessível. Ajuste a string de conexão no comando conforme necessário.
```
make migrateup
```

Este comando aplicará quaisquer migrações pendentes e atualizará o esquema do banco de dados.

## Criando Nova Migração
Para criar uma nova migração, utilize o seguinte comando. Isso criará um arquivo SQL na pasta de migrações com o nome fornecido.

```
migrate create -ext sql -dir src/database/migrations add_user_table
```
Ajuste o nome add_user_table conforme necessário para refletir o propósito da migração.

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
yarn install
```

## ⚙️ Execução
Para iniciar o projeto, utilize o seguinte comando:
```
yarn dev
```