const changeThemeBtn = document.querySelector("#change-theme");

//toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
};

changeThemeBtn.addEventListener("change" , function() {
    document.body.classList.toggle("dark");
    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark" , 1);
    }

});

//MODAL
const mostrarModal = () => {
    const modal = document.getElementById("fundo-modal");
    modal.classList.add("mostrar")
}

const abrirModal = document.getElementById("big_circle")
abrirModal.onclick = mostrarModal


const esconderModal = () =>{
    const modal = document.getElementById("fundo-modal");
    modal.classList.remove("mostrar")
}

const fecharModal = document.getElementById("fechar-modal")
fecharModal.onclick = esconderModal 

//descer
function descer(){
    window.scrollTo(0, 450);
}

//add tarefa:
var enviarBtn = document.getElementById("enviar");
var fundoCinza1 = document.getElementById("fundoCinza1");

enviarBtn.addEventListener("click", function() {
    var taskInput = document.getElementById("task");
    var descInput = document.getElementById("desc");
    var taskValue = taskInput.value;
    var descValue = descInput.value;

    var fundoBranco1 = document.createElement("div");
    fundoBranco1.className = "fundoBranco1";

    var botao = document.createElement("button");
    botao.className = "botao";
    botao.textContent = "Ler descrição";
    botao.className = "lerDesc"

    var taskParagraph = document.createElement("p");
    taskParagraph.className = "task-text";
    var taskStrong = document.createElement("strong");
    var descParagraph = document.createElement("p");
    descParagraph.className = "desc";
    var taskText = document.createTextNode(taskValue);
    var excluir = document.getElementById("excluir");

    taskStrong.appendChild(taskText);
    taskParagraph.appendChild(taskStrong);
    descParagraph.style.display = "none";



    fundoBranco1.appendChild(botao);
    fundoBranco1.appendChild(excluir);
    fundoBranco1.appendChild(taskParagraph);
    fundoBranco1.appendChild(descParagraph);

    fundoCinza1.appendChild(fundoBranco1);

    taskInput.value = "";
    descInput.value = "";

    botao.addEventListener("click", function() {
        descParagraph.textContent = descValue;
        descParagraph.style.display = "block";
    });
});
    

//responsivo:
if (window.matchMedia("(max-width: 768px)").matches) {
  
    document.addEventListener('DOMContentLoaded', function() {
    const abrirFrase = document.getElementById("big_rectangle");
    abrirFrase.onclick = mostrarFrase;
  
      var fechar = document.getElementById("fechar-modal");
      var frase = document.getElementById("frase");
  
      function mostrarFrase() {
      const frasal = document.getElementById("fundo-frase");
      frasal.classList.add("show");
      frasal.appendChild(fechar);
      frasal.appendChild(frase);
    }
  
  });
  
    document.addEventListener('DOMContentLoaded', function() {
    const fechaFrase = document.getElementById("fechar-modal");
    fechaFrase.onclick = fecharFrase;
  
    function fecharFrase() {
      const frasal = document.getElementById("fundo-frase");
      frasal.classList.remove("show");
      frasal.removeChild(frase);
      frasal.removeChild(fechar);
    }
  
  });   
  
  
  }
















