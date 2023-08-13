const { Aventura, Contexto, Objeto, Decision } = require(__dirname + "/novelesc.js");
const aventura = new Aventura("Juego");
aventura.agregar_contexto("Casa", {});
aventura.agregar_contexto("Playa", {});
aventura.agregar_contexto("Bar", {});
aventura.agregar_contexto("Restaurante", {});
aventura.agregar_contexto("Farmacia", {});
aventura.agregar_contexto("Supermercado", {});
aventura.agregar_contexto("Casino", {});
aventura.agregar_contexto("Calle mayor", {});

console.log(Object.keys(aventura.contextos));

aventura.cambiar_a_contexto("Bar");