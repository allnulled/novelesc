const Pantalla = function (aventura, otros = {}) {
    this.aventura = aventura;
    Object.assign(this, otros);
    this.sacar = (...args) => {
        console.log("[" + this.aventura.id + "]", ...args);
        return this;
    };
    this.meter = (...args) => {
        return require("readline-sync").question(...args);
    };
    return this;
};

const Objeto = function (aventura, id, otros = {}) {
    if (!(aventura instanceof Aventura)) {
        throw new Error("No se puede «constructor» en «Contexto» porque «aventura» no es una instancia de «Aventura» sino «" + aventura + "»");
    }
    if (typeof id !== "string") {
        throw new Error("No se puede «constructor» en «Contexto» porque «id» no es un string sino «" + typeof id + "»");
    }
    this.aventura = aventura;
    this.id = id;
    Object.assign(this, otros);
    return this;
};

const Accion = function (aventura, id, otros = {}) {
    if (!(aventura instanceof Aventura)) {
        throw new Error("No se puede «constructor» en «Accion» porque «aventura» no es una instancia de «Aventura» sino «" + aventura + "»");
    }
    if (typeof id !== "string") {
        throw new Error("No se puede «constructor» en «Accion» porque «id» no es un string sino «" + typeof id + "»");
    }
    this.aventura = aventura;
    this.id = id;
    Object.assign(this, otros);
    return this;
};

const Decision = function (aventura, id, otros = {}) {
    if (!(aventura instanceof Aventura)) {
        throw new Error("No se puede «constructor» en «Decision» porque «aventura» no es una instancia de «Aventura» sino «" + aventura + "»");
    }
    if (typeof id !== "string") {
        throw new Error("No se puede «constructor» en «Decision» porque «id» no es un string sino «" + typeof id + "»");
    }
    this.aventura = aventura;
    this.id = id;
    Object.assign(this, otros);
    return this;
};

const Contexto = function (aventura, id, otros = {}) {
    if (!(aventura instanceof Aventura)) {
        throw new Error("No se puede «constructor» en «Contexto» porque «aventura» no es una instancia de «Aventura» sino «" + aventura + "»");
    }
    if (typeof id !== "string") {
        throw new Error("No se puede «constructor» en «Contexto» porque «id» no es un string sino «" + typeof id + "»");
    }
    this.aventura = aventura;
    this.id = id;
    Object.assign(this, otros);
    this.objetos = {};
    this.acciones = {};
    this.decisiones = {};
    
    this.al_activarse = () => {
        this.aventura.pantalla.sacar("Entrando en contexto «" + this.id + "»")
        return this;
    };
    
    this.agregar_objeto = (objeto) => {
        if (!(objeto instanceof Objeto)) {
            throw new Error("No se puede «agregar_objeto» en «Contexto» porque no es una instancia de «Objeto» sino «" + objeto + "»");
        }
        this.objetos[objeto.nombre] = objeto;
        return this;
    };
    
    this.agregar_accion = (accion) => {
        if (!(accion instanceof Accion)) {
            throw new Error("No se puede «agregar_accion» en «Contexto» porque no es una instancia de «Accion» sino «" + accion + "»");
        }
        this.acciones[accion.nombre] = accion;
        return this;
    };
    
    this.agregar_decision = (decision) => {
        if (!(decision instanceof Decision)) {
            throw new Error("No se puede «agregar_decision» en «Contexto» porque no es una instancia de «Decision» sino «" + decision + "»");
        }
        this.decisiones[decision.nombre] = decision;
        return this;
    };
    
    return this;
};

const Aventura = function(id, otros = {}) {
    this.id = id;
    Object.assign(this, otros);
    this.pantalla = new Pantalla(this);
    this.contexto_activo = undefined;
    this.contextos = {};

    this.cambiar_a_contexto = (contexto_nombre) => {
        if (typeof contexto_nombre !== "string") {
            throw new Error("No se puede «cambiar_a_contexto» en «Aventura» porque no es un string sino «" + typeof contexto + "»");
        }
        if (!(contexto_nombre in this.contextos)) {
            throw new Error("No se puede «cambiar_a_contexto» en «Aventura» porque no se encuentra como contexto a «" + contexto_nombre + "»");
        }
        this.contexto_activo = this.contextos[contexto_nombre];
        this.contexto_activo.al_activarse();
        return this;
    };

    this.agregar_contexto = (id, ...args) => {
        const contexto = Contexto(this, id, ...args);
        this.contextos[contexto.id] = contexto;
        return this;
    };
    
    this.crear_accion = (id, ...args) =>{
        return Accion(this, id, ...args);
    };
    
    this.crear_objeto = (id, ...args) => {
        return Objeto(this, id, ...args);
    };
    
    this.crear_decision = (id, ...args) => {
        return Decision(this, id, ...args);
    };
    
    return this;
};

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