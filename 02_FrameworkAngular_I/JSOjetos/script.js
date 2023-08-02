let objUsuario = {
    nome: "Jorge da Silva",
    idade: 37,
    sexo: "masculino",
    endereco: {
      rua: "Rua das Acácias",
      numero: 0
    }
  }
  
  let template = `
    <ul>
      <li>Nome: ${objUsuario.nome}</li>
      <li>Idade: ${objUsuario.idade}</li>
      <li>Sexo: ${objUsuario.sexo}</li>
      <li>Endereço: ${objUsuario.endereco.rua}, ${objUsuario.endereco.numero}</li>
    </ul>
   `
  
  const docRef = document.getElementById("usuario");
  docRef.innerHTML = template;
  
  objUsuario.nome = "Maria da Silva";
  objUsuario.idade = 27;
  objUsuario.sexo = "feminino";
  objUsuario.endereco.rua = "Av. Paulista";
  objUsuario.endereco.numero = 5000;
  
  template = `
    <hr>
    <ul>
      <li>Nome: ${objUsuario.nome}</li>
      <li>Idade: ${objUsuario.idade}</li>
      <li>Sexo: ${objUsuario.sexo}</li>
      <li>Endereço: ${objUsuario.endereco.rua}, ${objUsuario.endereco.numero}</li>
      </ul>
  `
  
  docRef.innerHTML += template;