
// Variáveis para manipulação do DOM
let elementosForm = document.querySelectorAll("input");
let verificador = document.querySelectorAll(".verificar");
let verificadorMaster = document.querySelector(".verificarMaster");

// Variáveis das Mensagens exibidas
let campoCheck = "*Campo Obrigatório*";
let checkGeral = "Campos obrigatórios não registrados.";
let sucessoLogin = "Sucesso!";


let i = 0;
let checker = true;

//Função para checar se cada campo possui informação preenchida
checkFields = () => {
  while(i < elementosForm.length) {
    if (elementosForm[i].value.trim().length == 0) {
      verificador[i].innerHTML = `<p class="teste">${campoCheck}<p>`;
      document.querySelectorAll("input")[i].style.marginBottom = 0;
      checker = false;
    } 
    i++;
  }

  successRegister(checker);
};

//Função para limpar o formulário
clearForm = () => {
  for (let i = 0; i < elementosForm.length; i++) {
    elementosForm[i].value = "";
  }
}

//Função para retornar mensagem de sucesso para os campos informados.
successRegister = (checker) => {
    if(checker){
      verificadorMaster.innerHTML = `<p class="success">${sucessoLogin}<p>`;
      clearForm();
    }
    else{
      verificadorMaster.innerHTML = `<p class="testeMaster">${checkGeral}<p>`;
    }
}

