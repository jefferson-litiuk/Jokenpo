function jogar() {
    
    if (document.getElementById("pedra").checked == false &&
        document.getElementById("papel").checked == false &&
        document.getElementById("tesoura").checked == false) {
        alert("Selecione um opção");

    }
    else {//lógica Principal
        var sorteio = Math.floor(Math.random()*3);
        switch (sorteio) {
            case 0:
                document.getElementById("pc").src = "cppedra.jpg";
                break;
            case 1:
                document.getElementById("pc").src = "cppapel.jpg";
                break;
            case 2:
                document.getElementById("pc").src = "cptesoura.jpg";
                break;
        }
        //verificar  o vencedor ou declarar empate
        if((document.getElementById("pedra").checked == true && sorteio == 0) ||
        (document.getElementById("papel").checked == true && sorteio == 1) || 
        (document.getElementById("tesoura").checked == true && sorteio == 2)){
            document.getElementById("placar").innerHTML="Empate!!;"

        } else if ((document.getElementById("pedra").checked == true && sorteio == 2) ||
        (document.getElementById("papel").checked == true && sorteio == 0) || 
        (document.getElementById("tesoura").checked == true && sorteio == 1)){
            document.getElementById("placar").innerHTML="Jogador Venceu!!;"
        }else{
            document.getElementById("placar").innerHTML="Computador Venceu!!;"
        }


    }

}
function resetar() {
    document.getElementById("pc").src = "cp.jpg";
    document.getElementById("placar").innerHTML == "";

}