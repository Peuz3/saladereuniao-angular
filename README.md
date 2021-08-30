# ClientRoom

Angular CLI: 12.2.1
Node: 14.17.5
Package Manager: npm 6.14.14

## Criando Um Projeto
ng new cliente-room

Would you like to add Angular routing? No

Which stylesheet format would you like to use? CSS

## Criando serviços de room
ng g s room

## Gerando componentes da aplicação:
ng g c create-room
ng g c room-details
ng g c room-list
ng g c update-room

## Instalação do Bootstrap(Estilização) e Jquery(Manipulação de botões)
npm install bootstrap jquery --save

## No arquivo angular.json acrescentar
    styles: "node_modules/bootstrap/dist/css/bootstrap.min.css"
    scripts: 
	    "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"

## Url de navegação: http://localhost:4200/rooms



