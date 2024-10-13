document.addEventListener("DOMContentLoaded", function () {
  const formListar = document.getElementById("form-listar");
  const formCadastrar = document.getElementById("form-cadastrar");
  const formAtualizar = document.getElementById("form-atualizar");
  const formExcluir = document.getElementById("form-excluir");
  const resultadoDiv = document.getElementById("resultado");

  // Função para listar pets
  function listarPets() {
    fetch("http://localhost:8080/pet/listar")
      .then((response) => response.json())
      .then((data) => {
        exibirListaPets(data);
      })
      .catch((error) => {
        console.error("Erro ao listar os pets:", error);
      });
  }

  // Função para exibir a lista de pets
  function exibirListaPets(data) {
    resultadoDiv.innerHTML = "";
    if (data.pet && data.pet.length > 0) {
      const lista = document.createElement("ul");
      data.pet.forEach((pet) => {
        const listItem = document.createElement("li");
        listItem.textContent = `ID: ${pet.id}, Nome: ${pet.nome}, Raça: ${pet.raca}, Histórico: ${pet.historicoDoPet}, Sexo: ${pet.sexo}`;
        lista.appendChild(listItem);
      });
      resultadoDiv.appendChild(lista);
    } else {
      const mensagemParagrafo = document.createElement("p");
      mensagemParagrafo.textContent = "Nenhum pet encontrado.";
      resultadoDiv.appendChild(mensagemParagrafo);
    }
  }

  // Listar pets ao carregar a página
  listarPets();

  // Cadastrar um novo pet
  formCadastrar.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const novoPet = {
      id: 0, // Temporariamente define o ID como 0, será ajustado depois
      nome: formData.get("nome"),
      raca: formData.get("raca"),
      historicoDoPet: formData.get("historico"),
      sexo: formData.get("sexo"),
    };

    // Validar a raça para conter apenas letras antes de enviar a solicitação
    if (!/^[a-zA-Z]+$/.test(novoPet.raca)) {
      alert("A raça só deve conter letras.");
      return; // Não envia a solicitação se a validação falhar
    }

    // Obter o ID correto baseado na quantidade atual de pets
    fetch("http://localhost:8080/pet/listar")
      .then((response) => response.json())
      .then((data) => {
        novoPet.id = data.pet.length + 1;
        console.log("Dados do novo pet:", novoPet); // Verificar os dados antes de enviar a solicitação

        fetch("http://localhost:8080/pet/cadastrar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(novoPet),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                "Erro ao cadastrar o pet: " + response.statusText
              );
            }
            return response.json();
          })
          .then((data) => {
            const petCadastrado = `ID: ${data.id}, Nome: ${data.nome}, Histórico: ${data.historicoDoPet}, Sexo: ${data.sexo}`;
            alert("Pet cadastrado com sucesso:\n" + petCadastrado);
            console.log(data);
            listarPets(); // Atualizar lista de pets após o cadastro
            formCadastrar.reset(); // Limpar o formulário
          })
          .catch((error) => {
            console.error("Erro ao cadastrar o pet:", error.message); // Registrar a mensagem de erro no console
            alert("Erro ao cadastrar o pet: " + error.message);
          });
      })
      .catch((error) => {
        console.error("Erro ao obter a lista de pets:", error);
      });
  });

  // Atualizar um pet
  formAtualizar.addEventListener("submit", function (event) {
    event.preventDefault();
    const petId = document.getElementById("id-atualizar").value;
    const novoNome = document.getElementById("novo-nome").value;
    const novaRaca = document.getElementById("nova-raca").value;
    const novoHistorico = document.getElementById("novo-historico").value;
    const novoSexo = document.getElementById("novo-sexo").value;

    // Verificar se os campos não estão vazios
    if (!petId || !novoNome || !novaRaca || !novoHistorico || !novoSexo) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const dadosAtualizados = {
      nome: novoNome,
      raca: novaRaca,
      historicoDoPet: novoHistorico,
      sexo: novoSexo,
    };

    console.log("Dados enviados para a API:", JSON.stringify(dadosAtualizados));

    fetch(`http://localhost:8080/pet/atualizar/${petId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosAtualizados),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao atualizar o pet: " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        alert("Pet atualizado com sucesso!");
        console.log("Resposta da API:", data);
        listarPets(); // Atualizar lista de pets após a atualização
        formAtualizar.reset(); // Limpar o formulário
      })
      .catch((error) => {
        console.error("Erro ao atualizar o pet:", error.message);
        alert("Erro ao atualizar o pet: " + error.message);
      });
  });

  // Excluir um pet
  formExcluir.addEventListener("submit", function (event) {
    event.preventDefault();
    const petId = document.getElementById("id-excluir").value;

    fetch(`http://localhost:8080/pet/delete/${petId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Pet excluído com sucesso!");
        console.log(data);

        // Reatribuir IDs após exclusão
        fetch("http://localhost:8080/pet/listar")
          .then((response) => response.json())
          .then((data) => {
            const petsAtualizados = data.pet.map((pet, index) => {
              pet.id = index + 1; // Reatribuir IDs de forma crescente
              return pet;
            });

            // Atualizar todos os pets com novos IDs
            Promise.all(
              petsAtualizados.map((pet) =>
                fetch(`http://localhost:8080/pet/atualizar/${pet.id}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(pet),
                })
              )
            )
              .then(() => {
                listarPets(); // Atualizar lista de pets após reatribuição de IDs
                formExcluir.reset(); // Limpar o formulário
              })
              .catch((error) => {
                console.error(
                  "Erro ao reatribuir IDs dos pets:",
                  error.message
                );
              });
          })
          .catch((error) => {
            console.error("Erro ao obter a lista de pets:", error);
          });
      })
      .catch((error) => {
        alert("Erro ao excluir o pet: " + error.message);
      });
  });

  // Evento para limpar a lista quando o botão for clicado
  document.getElementById("limparLista").addEventListener("click", function () {
    resultadoDiv.innerHTML = ""; // Limpa a div de resultados
  });
});
