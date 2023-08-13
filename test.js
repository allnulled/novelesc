const { Aventura, Contexto, Objeto, Decision } = require(__dirname + "/novelesc.js");
const aventura = new Aventura("Juego");
const contexto_de_casa = aventura.agregar_contexto(aventura, "Casa", {});
const contexto_de_playa = aventura.agregar_contexto(aventura, "Playa", {});
const contexto_de_bar = aventura.agregar_contexto(aventura, "Bar", {});
const contexto_de_restaurante = aventura.agregar_contexto(aventura, "Restaurante", {});
const contexto_de_farmacia = aventura.agregar_contexto(aventura, "Farmacia", {});
const contexto_de_supermercado = aventura.agregar_contexto(aventura, "Supermercado", {});
const contexto_de_casino = aventura.agregar_contexto(aventura, "Casino", {});
const contexto_de_calle_mayo = aventura.agregar_contexto(aventura, "Calle mayor", {});
const contexto_de_escaleras = aventura.agregar_contexto(aventura, "Escaleras", {});
const contexto_de_parque_1 = aventura.agregar_contexto(aventura, "Parque 1", {});

console.log(contexto_de_casa);
contexto_de_casa.agregar_objeto(aventura, "entrada", {
    salir_por: function() {
        aventura.pantalla.sacar("Salir por la entrada del lugar es una opción.");
    }
});
contexto_de_playa.agregar_objeto(aventura, "entrada", {
    salir_por: function() {
        aventura.pantalla.sacar("Salir por la entrada del lugar es una opción.");
    }
});
contexto_de_bar.agregar_objeto(aventura, "entrada", {
    salir_por: function() {
        aventura.pantalla.sacar("Salir por la entrada del lugar es una opción.");
    }
});
contexto_de_restaurante.agregar_objeto(aventura, "entrada", {
    salir_por: function() {
        aventura.pantalla.sacar("Salir por la entrada del lugar es una opción.");
    }
});
contexto_de_farmacia.agregar_objeto(aventura, "entrada", {
    salir_por: function() {
        aventura.pantalla.sacar("Salir por la entrada del lugar es una opción.");
    }
});
contexto_de_supermercado.agregar_objeto(aventura, "entrada", {
    salir_por: function() {
        aventura.pantalla.sacar("Salir por la entrada del lugar es una opción.");
    }
});
contexto_de_casino.agregar_objeto(aventura, "entrada", {
    salir_por: function() {
        aventura.pantalla.sacar("Salir por la entrada del lugar es una opción.");
    }
});
contexto_de_calle_mayo.agregar_objeto(aventura, "entrada", {
    salir_por: function() {
        aventura.pantalla.sacar("Salir por la entrada del lugar es una opción.");
    }
});
contexto_de_escaleras.agregar_objeto(aventura, "entrada", {
    salir_por: function() {
        aventura.pantalla.sacar("Salir por la entrada del lugar es una opción.");
    }
});
contexto_de_parque_1.agregar_objeto(aventura, "entrada", {
    salir_por: function() {
        aventura.pantalla.sacar("Salir por la entrada del lugar es una opción.");
    }
});

console.log(Object.keys(aventura.contextos));

aventura.cambiar_a_contexto("Bar");