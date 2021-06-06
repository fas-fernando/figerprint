#Cadastro de Pacientes Covid-19 - Fingerprint
-------
###Instalar Dependências

**Descrição:** Para instlar as dependências é necessário clonar o projeto em um diretório no computador.

###Pre-requisitos
- Instalar o NodeJS na versão 14.
- Instalar o MySQL na versão 8.0.

-----

###Importando o Banco de Dados

1. Acesse o terminal do seu sistema e insira o diretório onde o projeto está acessando as pastas `/api/database`.

2. Agora será necessário acessar o serviço do MySQL com o comando `mysql -u nome_user -p` > Enter. Irá solicitar a senha.

3. Com acesso ao MySQL basta digitar o comando `source ./pacientes-2021-06-05.sql`. Pronto, o banco de dados está importado no com sucesso.

###Inicio do processo

1. Necessário acessar a pasta interna do projeto **api**. Com acesso a essa pasta no terminal executar o comando `npm install`.

2. Após a instalação das dependências no mesmo terminal executar o comando `node index.js`, assim será executado o servidor da **api** que pode ser acessado no navegado como [http://localhost:3000](http://localhost:3000).