#### JSON (JavaScript Object Notation)
- Formato de dados leve e amplamente utilizado para representar informações estruturadas.

Exemplo:
```json
{
  "titulo": "Introdução ao JSON",
  "autor": "Maria Santos",
  "conteudo": "JSON é um formato de dados amplamente usado...",
  "tags": ["JSON", "formatos de dados", "programação"],
  "data_publicacao": "2023-08-14"
}

#### Json-server
- O json-server é uma ferramenta que permite criar rapidamente uma API REST falsa (fake) usando um arquivo JSON como fonte de dados. Isso permite simular interações com uma API backend real sem precisar configurar um servidor completo.
Link para baixar: https://www.npmjs.com/package/json-server

$ npm install -g json-server

Principais Comandos do json-server
    json-server arquivo.json    : Inicia um servidor JSON baseado no conteúdo do arquivo JSON fornecido.
    json-server --watch arquivo.json     Inicia o servidor JSON e observa alterações no arquivo para atualizar a API em tempo real.
    json-server --port numero_da_porta  : Especifica uma porta diferente para o servidor em vez da porta padrão 3000.
    json-server --routes arquivo_de_rotas.json  : Permite personalizar as rotas da API usando um arquivo de definições de rotas.
    json-server --middlewares arquivo_middleware.js : Adiciona funcionalidades extras ao servidor usando middlewares definidos em um arquivo JavaScript.

Nota: O json-server é destinado à simulação de desenvolvimento e testes, não sendo adequado para cenários de produção ou aplicações complexas.


#### REST (Representational State Transfer)
    O REST é um modelo de arquitetura que fornece diretrizes para sistemas distribuídos se comunicarem diretamente.
- O cliente precisa fazer a requisição para o servidor para enviar ou modificar dados.
- Utiliza um verbo ou método HTTP (4 tipos: GET, POST, PUT, DELETE) que define que tipo de operação o servidor irá realizar.
- Inclui um header, que contém informações sobre a requisição.
- Utiliza um path (caminho ou rota) para o servidor.
- Inclui informações no corpo da requisição.

##### Como realizar uma solicitação utilizando XMLHttpRequest e fetch (mais recente)?
import { HttpClientModule } from '@angular/common/http';
// Método ngOnInit é chamado assim que a página é carregada

###### XMLHttpRequest (Mais antigo):
O XMLHttpRequest é uma maneira mais antiga de realizar solicitações assíncronas em JavaScript. Aqui está um exemplo de como usá-lo:
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var response = JSON.parse(xhr.responseText);
    console.log(response);
  } else {
    console.error('Request failed with status:', xhr.status);
  }
};

xhr.onerror = function () {
  console.error('Request failed');
};

xhr.send();

##### Fetch (Mais recente):
- O fetch é uma API mais moderna e flexível para realizar solicitações assíncronas em JavaScript. Ele retorna uma Promessa, tornando o código mais legível e fácil de lidar. Aqui está um exemplo de como usá-lo:

fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Request failed with status:' + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Request failed:', error);
  });

O fetch também suporta várias opções de configuração, como definir o método da solicitação, cabeçalhos e corpo. Aqui está um exemplo:
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ key: 'value' })
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Request failed:', error);
  });
