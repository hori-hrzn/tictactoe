let estadomenuLateral = "cerrado"

window.addEventListener("click", function(event){
    // console.log(event.target.id)
    switch (event.target.id) {
        // Mostrar / esconder menú lateral
        case "imgMenu":
            console.log("Soy el menú!")
            if (estadomenuLateral=="cerrado") {
                estadomenuLateral="abierto"
                $("#menuLateral").removeClass("invisible");

            }
            else {
                estadomenuLateral="cerrado"
                $("#menuLateral").addClass("invisible");

            }
            break;
    
        default:
            break;
    }
})