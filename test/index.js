function linked_list() { 
    var longitud = 0;
    var inicio = null;


    var Nodo = function(elem) { 
        this.elem = elem;
        this.next = null;
    };



    this.inicio = function() { 
        return inicio;
    };

    this.anadir = function(elem) {
        var nodo = new Nodo(elem) //Crea un nodo

        if(inicio === null) { 
            inicio = nodo;
        } //Checa si el inicio de la lista esta vacio, en caso de que si el nodo pasa a ser el primer elemento

        else { 
            var nodo_actual = inicio;

            while (nodo_actual.next) {
                nodo_actual = nodo_actual.next;
            }

            nodo_actual.next = nodo;
        }

        longitud++ //Se le añade +1 a la longitud de la lista
    };


    this.quitar = function(elem) {
        var nodo_actual = inicio;
        var nodo_anterior;

        if (nodo_actual.elem === elem) { 
            inicio = nodo_actual.next;
            
        }

        else { 
            while(nodo_actual.elem !== elem) {
                nodo_anterior = nodo_actual;
                nodo_actual = nodo_actual.next;
            }

            nodo_anterior.next = nodo_actual.next;
        }

        longitud--
    };


    this.recorrer = function(elem) {
        var nodo_actual = inicio;

        if (nodo_actual.elem === elem) {
            return nodo_actual.elem
        }

        while (nodo_actual.next) {

            nodo_actual = nodo_actual.next
            if (nodo_actual.elem === elem) {
                return nodo_actual.elem
            }

            
        }        

    };

    this.getLongitud = function() { 
        if (longitud > 0) { 
            var editText = document.getElementById("h2").innerHTML = ""
        } 

        else { 
            editText = document.getElementById("h2").innerHTML = "La lista esta vacia"
        }
    }


}

var lista = new linked_list();

var boton_anadir = document.getElementById("anadir").addEventListener("click", function() {
    var valor = document.getElementById("valor_anadir");
    alert("Elemento añadido con exito")

    
    lista.anadir(valor.value)
    lista.getLongitud()
    console.log(lista.inicio())

    var mostrar = document.getElementById("p").innerHTML = lista.recorrer(valor.value);


});


var boton_quitar = document.getElementById("quitar").addEventListener("click", function() {


    var valor = document.getElementById("valor_quitar");

    try {
        lista.quitar(valor.value)
        alert("Elemento borrado con exito")
    } catch (error) {
        console.error("Error: Elemento no encontrado en la lista")
        alert("Ingrese un elemento que se encuentre en la lista")
    }


    

    console.log(lista.inicio())
});