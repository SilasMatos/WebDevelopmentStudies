var numero = 2

var pessoa = {
    nome: "Maria",
    endereco: {
      rua: "Rua Principal",
      cidade: "São Paulo"
    }
  };
  
  var numero = pessoa.endereco?.numero;
  console.log(numero); // Irá exibir undefined caso não exista o atributo "numero"
  