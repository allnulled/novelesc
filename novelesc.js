/// ONELINER TO EXPORT AGGRESSIVELY:
(function (global, factory) { const modulo = factory(); if (typeof exports === "object" && typeof module !== "undefined") { module.exports = modulo; } if (typeof define === "function" && define.am) { define(factory); } if (typeof globalThis !== "undefined") { globalThis = modulo; } if (typeof global !== "undefined") { global.Comprueba = modulo; } if (typeof window !== "undefined") { window.Comprueba = modulo; } })(this, (function () {
        const Pantalla = function (aventura, id, otros = {}) {
        Validamos: {
            if (!(aventura instanceof Aventura)) {
                throw new Error("No se puede «constructor» en «Pantalla» porque «aventura» no es una instancia de «Aventura» sino «" + aventura + "»");
            }
            if (typeof id !== "string") {
                throw new Error("No se puede «constructor» en «Pantalla» porque «id» no es un string sino «" + typeof id + "»");
            }
        }
        Extramos_parametros: {
            this.aventura = aventura;
            Object.assign(this, otros);
        }
        Definimos_propiedades: {
            this.es_sistema_web_o_nodejs = typeof window ? "web" : "nodejs";
        }
        Definimos_funciones: {
            this.sacar = (...args) => {
                this.aventura.utils.trace("Pantalla.sacar(...)");
                console.log("[" + this.aventura.id + "]", ...args);
                return this;
            };
            this.meter = (...args) => {
                this.aventura.utils.trace("Pantalla.meter(...)");
                if (this.es_sistema_web_o_nodejs === "web") {
                    return require("readline-sync").question(...args);
                } else if (this.es_sistema_web_o_nodejs === "nodejs") {
                    return window.prompt(...args);
                } else {
                    throw new Error("Sistema huésped no identificado. Esto imposibilita el uso de «Novelesc» interactivo");
                }
            };
        }
        return this;
    };
    const Objeto = function (aventura, id, otros = {}) {
        Validamos: {
            if (!(aventura instanceof Aventura)) {
                throw new Error("No se puede «constructor» en «Objeto» porque «aventura» no es una instancia de «Aventura» sino «" + aventura + "»");
            }
            if (typeof id !== "string") {
                throw new Error("No se puede «constructor» en «Objeto» porque «id» no es un string sino «" + typeof id + "»");
            }
        }
        Extramos_parametros: {
            this.aventura = aventura;
            this.id = id;
            Object.assign(this, otros);
        }
        return this;
    };
    const Accion = function (aventura, id, otros = {}) {
        Validamos: {
            if (!(aventura instanceof Aventura)) {
                throw new Error("No se puede «constructor» en «Accion» porque «aventura» no es una instancia de «Aventura» sino «" + aventura + "»");
            }
            if (typeof id !== "string") {
                throw new Error("No se puede «constructor» en «Accion» porque «id» no es un string sino «" + typeof id + "»");
            }
        }
        Extramos_parametros: {
            this.aventura = aventura;
            this.id = id;
            Object.assign(this, otros);
        }
        return this;
    };
    const Decision = function (aventura, id, otros = {}) {
        Validamos: {
            if (!(aventura instanceof Aventura)) {
                throw new Error("No se puede «constructor» en «Decision» porque «aventura» no es una instancia de «Aventura» sino «" + aventura + "»");
            }
            if (typeof id !== "string") {
                throw new Error("No se puede «constructor» en «Decision» porque «id» no es un string sino «" + typeof id + "»");
            }
        }
        Extramos_parametros: {
            this.aventura = aventura;
            this.id = id;
            Object.assign(this, otros);
        }
        return this;
    };
    const Contexto = function (aventura, id, otros = {}) {
        Validamos: {
            if (!(aventura instanceof Aventura)) {
                throw new Error("No se puede «constructor» en «Contexto» porque «aventura» no es una instancia de «Aventura» sino «" + aventura + "»");
            }
            if (typeof id !== "string") {
                throw new Error("No se puede «constructor» en «Contexto» porque «id» no es un string sino «" + typeof id + "»");
            }
        }
        Extramos_parametros: {
            this.aventura = aventura;
            this.id = id;
            Object.assign(this, otros);
        }
        Definimos_propiedades: {
            this.objetos = {};
            this.acciones = {};
            this.decisiones = {};
        }
        Definimos_funciones: {
            this.al_activarse = () => {
                this.aventura.utils.trace("Contexto.al_activarse(...)");
                this.aventura.pantalla.sacar("Entrando en contexto «" + this.id + "»")
                return this;
            };
            this.al_desactivarse = () => {
                this.aventura.utils.trace("Contexto.al_desactivarse(...)");
                this.aventura.pantalla.sacar("Saliendo de contexto «" + this.id + "»")
                return this;
            };
            this.agregar_objeto = (aventura, id, otros) => {
                this.aventura.utils.trace("Contexto.agregar_objeto(...)");
                const objeto = new Objeto(aventura, id, otros);
                if (!(objeto instanceof Objeto)) {
                    throw new Error("No se puede «agregar_objeto» en «Contexto» porque no es una instancia de «Objeto» sino «" + objeto + "»");
                }
                this.objetos[objeto.nombre] = objeto;
                return this;
            };
            this.agregar_accion = (aventura, id, otros) => {
                this.aventura.utils.trace("Contexto.agregar_accion(...)");
                const accion = new Accion(aventura, id, otros);
                if (!(accion instanceof Accion)) {
                    throw new Error("No se puede «agregar_accion» en «Contexto» porque no es una instancia de «Accion» sino «" + accion + "»");
                }
                this.acciones[accion.nombre] = accion;
                return this;
            };
            this.agregar_decision = (aventura, id, otros) => {
                this.aventura.utils.trace("Contexto.agregar_decision(...)");
                const decision = new Decision(aventura, id, otros);
                if (!(decision instanceof Decision)) {
                    throw new Error("No se puede «agregar_decision» en «Contexto» porque no es una instancia de «Decision» sino «" + decision + "»");
                }
                this.decisiones[decision.nombre] = decision;
                return this;
            };
        }
        return this;
    };
    const Aventura = function (id, otros = {}) {
        Validamos: {
            if (typeof id !== "string") {
                throw new Error("No se puede «constructor» en «Aventura» porque «id» no es un string sino «" + typeof id + "»");
            }
        }
        Extramos_parametros: {
            this.id = id;
            this.aventura = this; // This invalidates normal JSONification.
            Object.assign(this, otros);
            this.pantalla = new Pantalla(this, id);
        }
        Definimos_propiedades: {
            this.contextos = {
                Inicial: new Contexto(this, "Inicial", {}, {
                    landing: true
                })
            };
            this.contexto_activo = this.contextos["Inicial"];
        }
        Definimos_funciones: {
            this.utils = {
                trace: function(id, ...args) {
                    console.log("[TRACE] " + id, ...args);
                }
            };
            this.cambiar_a_contexto = (contexto_nombre) => {
                this.aventura.utils.trace("Aventura.cambiar_a_contexto(...)");
                Validamos: {
                    if (typeof contexto_nombre !== "string") {
                        throw new Error("No se puede «cambiar_a_contexto» en «Aventura» porque no es un string sino «" + typeof contexto + "»");
                    }
                    if (!(contexto_nombre in this.contextos)) {
                        throw new Error("No se puede «cambiar_a_contexto» en «Aventura» porque no se encuentra como contexto a «" + contexto_nombre + "»");
                    }
                }
                Desactivamos_el_contexto: {
                    this.contexto_activo.al_desactivarse();
                }
                Cambiamos_de_contexto: {
                    this.contexto_activo = this.contextos[contexto_nombre];
                }
                Activamos_el_nuevo_contexto: {
                    this.contexto_activo.al_activarse();
                }
            }
            this.agregar_contexto = (aventura, id, ...args) => {
                this.aventura.utils.trace("Aventura.agregar_contexto(...)");
                Validamos: {
                    if (!(aventura instanceof Aventura)) {
                        throw new Error("No se puede «agregar_contexto» en «Contexto» porque «aventura» no es una instancia de «Aventura» sino «" + aventura + "»");
                    }
                    if (typeof id !== "string") {
                        throw new Error("No se puede «agregar_contexto» en «Contexto» porque «id» no es un string sino «" + typeof id + "»");
                    }
                }
                const contexto = new Contexto(this, id, ...args);
                this.contextos[contexto.id] = contexto;
                return contexto;
            };
            this.crear_accion = (aventura, id, ...args) => {
                Validamos: {
                    if (!(aventura instanceof Aventura)) {
                        throw new Error("No se puede «crear_accion» en «Contexto» porque «aventura» no es una instancia de «Aventura» sino «" + aventura + "»");
                    }
                    if (typeof id !== "string") {
                        throw new Error("No se puede «crear_accion» en «Contexto» porque «id» no es un string sino «" + typeof id + "»");
                    }
                }
                this.aventura.utils.trace("Aventura.crear_accion(...)");
                return new Accion(this, id, ...args);
            };
            this.crear_objeto = (aventura, id, ...args) => {
                Validamos: {
                    if (!(aventura instanceof Aventura)) {
                        throw new Error("No se puede «crear_objeto» en «Contexto» porque «aventura» no es una instancia de «Aventura» sino «" + aventura + "»");
                    }
                    if (typeof id !== "string") {
                        throw new Error("No se puede «crear_objeto» en «Contexto» porque «id» no es un string sino «" + typeof id + "»");
                    }
                }
                this.aventura.utils.trace("Aventura.crear_objeto(...)");
                return new Objeto(this, id, ...args);
            };
            this.crear_decision = (aventura, id, ...args) => {
                Validamos: {
                    if (!(aventura instanceof Aventura)) {
                        throw new Error("No se puede «crear_decision» en «Decision» porque «aventura» no es una instancia de «Aventura» sino «" + aventura + "»");
                    }
                    if (typeof id !== "string") {
                        throw new Error("No se puede «crear_decision» en «Decision» porque «id» no es un string sino «" + typeof id + "»");
                    }
                }
                this.aventura.utils.trace("Aventura.crear_decision(...)");
                return new Decision(this, id, ...args);
            };
        }
        return this;
    };
    return { Aventura, Contexto, Objeto, Decision };
}));