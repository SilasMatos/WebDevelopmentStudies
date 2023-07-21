function consultaEndereco(){
    let cep = document.querySelector('#cep').value
   

    if(cep.length !== 8){
        alert('CEP invalido!')
        return
    }
    let url =`https://viacep.com.br/ws/${cep}/json/`

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            getEndereco(data)
        }
        )
    })
}

function getEndereco(dados){
    let resultado = document.querySelector('#resultado')
    if (dados.erro) {
        alert('Não foi possivel econtrar esse endereço')
    }
    else{
    resultado.innerHTML = ` <p>Endereço: ${dados.logradouro}</p>
                            <p>Complemeto: ${dados.complemento}</p>
                            <p>Bairro: ${dados.bairro}</p>
                            <p>Cidade: ${dados.localidade} -  ${dados.uf}</p> `
    }
}