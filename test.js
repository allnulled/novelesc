const { Aventura, Contexto, Objeto, Decision } = require(__dirname + "/novelesc.js");
const aventura = new Aventura("Juego normal");
const contexto_de_ciudad_nativa_casa = aventura.agregar_contexto(aventura, "Ciudad nativa/Casa", {});
const contexto_de_ciudad_nativa_playa = aventura.agregar_contexto(aventura, "Ciudad nativa/Playa", {});
const contexto_de_ciudad_nativa_bar = aventura.agregar_contexto(aventura, "Ciudad nativa/Bar", {});
const contexto_de_ciudad_nativa_restaurante = aventura.agregar_contexto(aventura, "Ciudad nativa/Restaurante", {});
const contexto_de_ciudad_nativa_farmacia = aventura.agregar_contexto(aventura, "Ciudad nativa/Farmacia", {});
const contexto_de_ciudad_nativa_supermercado = aventura.agregar_contexto(aventura, "Ciudad nativa/Supermercado", {});
const contexto_de_ciudad_nativa_casino = aventura.agregar_contexto(aventura, "Ciudad nativa/Casino", {});
const contexto_de_ciudad_nativa_calle_mayo = aventura.agregar_contexto(aventura, "Ciudad nativa/Calle mayor", {});
const contexto_de_ciudad_nativa_escaleras = aventura.agregar_contexto(aventura, "Ciudad nativa/Escaleras", {});
const contexto_de_ciudad_nativa_parque_1 = aventura.agregar_contexto(aventura, "Ciudad nativa/Parque 1", {});
const contexto_de_ciudad_nativa = aventura.agregar_contexto(aventura, "Ciudad nativa", {});
const contexto_de_coche = aventura.agregar_contexto(aventura, "Coche", {});

console.log(contexto_de_ciudad_nativa_casa);



aventura.cambiar_a_contexto("Ciudad nativa/Bar");
aventura.cambiar_a_contexto("Ciudad nativa/Farmacia");
aventura.cambiar_a_contexto("Ciudad nativa/Restaurante");
aventura.cambiar_a_contexto("Ciudad nativa/Parque 1");
aventura.listar_contextos_adyacentes();
aventura.cambiar_a_contexto("Ciudad nativa");
aventura.listar_contextos_adyacentes();
aventura.cambiar_a_contexto("Coche");
aventura.listar_contextos_adyacentes();