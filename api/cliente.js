 // get
 const listarClientes = () => {
     const url = `http://localhost:4000/clientes`;

     return fetch(url)
         .then(resposta => {
             return resposta.json()
         })
         .then(json => {
             return json
         })
 }

 //post
 const cadastrarClientes = (nome, cpf) => {
     const url = `http://localhost:4000/clientes/cliente`;
     const json = JSON.stringify({
         nome: nome,
         cpf: cpf
     });

     return fetch(url, {
             method: 'POST',
             headers: {
                 'Content-type': 'application/json'
             },
             body: json
         })
         .then(resposta => {
             return resposta.body;
         });
 }

 //delete

 const deletaCliente = id => {
     const url = `http://localhost:4000/clientes/cliente/${id}`;

     return fetch(url, {
         method: 'DELETE',
     });
 }

 const detalhaCliente = id => {
     const url = `http://localhost:4000/clientes/cliente/${id}`;

     return fetch(url, {
             method: 'GET'
         })
         .then(resposta => {
             return resposta.json()
         });
 }

 //put

 const editaCliente = (id, cpf, nome) => {
     const url = `http://localhost:4000/clientes/cliente/${id}`;

     const json = JSON.stringify({
         nome: nome,
         cpf: cpf
     });

     return fetch(url, {
         method: 'PUT',
         headers: {
             'Content-type': 'application/json'
         },
         body: json
     })

 }