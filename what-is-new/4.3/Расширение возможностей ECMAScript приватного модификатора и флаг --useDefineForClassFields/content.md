## Расширение возможностей ECMAScript приватного модификатора и флаг --useDefineForClassFields

До текущего момента _TypeScript_ позволял применять нативный _ECMAScript_ модификатор доступа `private` (`#`) только к полям экземпляра.

`````ts
/**
 * >=v4.3
 * 
 * [*] Error!
 */
class T {
    /** члены класса */

    static #CLASS_FIELD = ""; // [*]
    static get #classProp(){ // [*]
        return T.#CLASS_FIELD;
    }
    static set #classProp(value: string){ // [*]
    }
    static #classMethod(){ // [*]

    }


    /** члены экземпляра класса */

    #instanceField = "";

    get #instanceProp(){ // [*]
        return this.#instanceField;
    }
    set #instanceProp(value: string){ // [*]
    }

    #instanceMethod(){ // [*]

    }
}
`````

Начиная с текущей версии, данный модификатор можно применить ко всем членам, как экземпляра, так и класса. Единственный неочевидный момент связан с полями класса, поскольку их модифицирование возможно только при активации нового флага `--useDefineForClassFields`. 


`````ts
/**
 * >=v4.3
 * 
 * Ok! Но с одной оговоркой. [*] Для
 * разрешения нативных приватных полей класса
 * следует активировать флаг --useDefineForClassFields,
 * иначе возникнет ошибка.
 */
class T {
    /** члены класса */

    static #CLASS_FIELD = ""; // [*]
    static get #classProp(){
        return T.#CLASS_FIELD;
    }
    static set #classProp(value: string){
    }
    static #classMethod(){

    }


    /** члены экземпляра класса */

    #instanceField = "";

    get #instanceProp(){
        return this.#instanceField;
    }
    set #instanceProp(value: string){
    }

    #instanceMethod(){

    }
}

`````