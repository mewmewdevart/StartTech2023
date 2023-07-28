##### ========= COMANDOS DO TERMINAL
Checando versoes:
$ npm -v
$ node -v

Instalando o framework:
$ npm install nome-do-modulo
// npm install @angular/cli
// flag -c no npm install -g para instalar globalmente
! Possivel criar pacotes e disponibilizar elas na comunidade para ser baixado.

Criando um novo projeto Angular:
$ ng new nome-projeto
> Would you like to add Angular routing? Y/n
> Which stylesheet format would you like to use? SaSS
! Estudar sobre a diferença entre: CSS, SCS, SASS, LESS

##### ========= ARQUIVOS GERADOS PELO PROJETO
node_modules/
src/
    app/
        app-routing.module.ts : Controla a navegação na aplicação.
        app.component.sass : Define o estilo específico do componente principal.
        app.component.spec.ts : Contém os testes para o componente principal.
        app.component.ts : Implementa a lógica do componente principal.
        app.module.ts : Módulo raiz que agrupa os componentes e outros recursos da aplicação.


Desenvolve > Buildar a aplicação
ng generate component nome_page
// ng generate component home
// ng generate component contact

#### Material UI: https://material.angular.io/

$ ng add @angular/material


// Separar componente por componente antes de iniciar o projeto, pesque os ts necessarios