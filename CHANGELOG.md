# novelesc


v0.0.1: 13 DE AGOSTO DE 2023 A LAS 17:42.

 - La primera versión permite crear Aventura, agregarle Contexto, y al contexto agregarlo Objeto y Decision.
 - El test muestra que puede verse la lista de lugares o contextos.
 - Está pensado para que los almacenes de estos, sean objetos, por tanto tengan un id. No arrays. Objetos. OK.


v0.0.2: 13 DE AGOSTO DE 2023 A LAS 18:32.
 - Tracea y se emiten entrada y salida de contexto.

v0.0.3: 13 DE AGOSTO DE 2023 A LAS 18:34.
 - Se aporta un ejemplo más o menos ilustrativo en el fichero de test.
 - Se añade un README.md también.

v0.0.4: 14 DE AGOSTO DE 2023 A LAS 18:57.
 [x] Se pueden añadir contextos con /
 [x] Existe el método de obtener_contextos_adyacentes...
    [x] que pillará solo los contextos con el mismo árbol de /.
    [x] que pillará también los contextos con el árbol inmediato anterior según el árbol /.

v0.0.5: 14 DE AGOSTO DE 2023 A LAS 19:32+20:11.
 [x] Se listan las acciones de contexto
 [x] Se listan las decisiones de contexto
 [x] Se listan los objetos de contexto
 [x] Se pueden crear acciones, decisiones y objetos a la vez que el contexto, mediante extensión simple (parámetro «otros»).

v0.0.6: 14 DE AGOSTO DE 2023 A LAS 20:11.
 [ ] Se inicia el método «jugar» de la aventura que:
    [ ] es compatible con nodejs mediante la entrada de texto normal
    [ ] es compatible con HTML5 mediante una aplicación vue2js/calo.
