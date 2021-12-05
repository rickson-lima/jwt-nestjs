# Autenticação JWT com NestJs

Importar o TypeORM na raiz do app.module prove conexao para todo o app

A lib @nestjs/config e responsavel por fazer imports do arquivo .env no Nestjs

O Repository referencia uma Entity que representa uma tabela do banco de dados

A funcao Merge do TypeORM combina a entidade com o dado novo passado

Libs para validacao de campos do DTO: class-validator e class-transformer

iHateRegex.io > para receitas prontas de validacoes

O BeforeInsert executa metodos antes de o TypeORM inserir um novo dado no banco

O Synchronize = true nao deve ser usado em producao

Libs de autenticacao do NestJs: @nestjs/passport | passport | passport-local | passport-jwt

- O NestjPassport provider que auxilia na autenticacao

- passport-local faz integracao entre o passport e o nestjs

- passport-local pega email e senha e faz validacao no banco

- passport jwt extrai do header authorization e permite a comunicacao com os endpoints
