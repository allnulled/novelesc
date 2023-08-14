const { Aventura, Contexto, Objeto, Decision } = require(__dirname + "/novelesc.js");
const aventura = new Aventura("Juego normal");
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

aventura.cambiar_a_contexto("Bar");