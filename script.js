// vai aparecer os números no display
function insert(num){
  let res = document.getElementById("display").innerHTML += `${num}`;
}

// Vai limpar todos os números dos display
function clean(){
   let limpar = document.getElementById("display").innerHTML = "";
}

// Vai apagar o último o número do display
function back(){
   let res = document.getElementById("display");
   res.innerHTML =  res.innerHTML.slice(0, -1);
}

// Vai calcular os números
function calcular() {
    let res = document.getElementById("display");
    if (res.innerHTML !== "") {
        try {
            // Substitui 'x' por '*' para fazer multiplicação funcionar
            let resultado = eval(res.innerHTML.replace(/x/g, '*'));
            res.innerHTML = resultado;
        } catch (e) {
            res.innerHTML = "Erro";
        }
    } else {
        res.innerHTML = "Erro";
    }
}