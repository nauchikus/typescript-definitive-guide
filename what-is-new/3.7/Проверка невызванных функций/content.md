## Проверка не вызванных функций
Случаются случаи, когда разработчики по невнимательности или из-за невнятно выбранных названий забывают вызывать функции, что может привести к трудновыявляемому багу.

```ts
interface IUser {
    isAuthorized(): boolean;
}

function someAction(user: IUser) {
    /**
     * Разработчик подумал, что isAuthorized
     * это поле или свойство объекта, но не метод.
     *
     * Учитывая многообразие языков программирования
     * с различными конвенциями именования, такая ошибка
     * не является надуманной для недавно пришедших в
     * ECMScript комьюнити.
     */
    if (user.isAuthorized) {
        /**
         * гость смог выполнить действия требующие
         * привилегии авторизованного пользователя.
         */
    }
}
```

Поэтому начиная с _TypeScript_ `v3.7` компилятор расценивает подобные ситуации как ошибку.

```ts
interface IUser {
    isAuthorized(): boolean;
}

function someAction(user: IUser) {
    /**
     * [TypeScript < v3.7]
     * > Ok! Трудно выявляемая ошибка,
     *
     * [TypeScript >= v3.7]
     * > Error!
     * This condition will always return true since the
     * function is always defined. Did you mean to call
     * it instead?
     */
    if (user.isAuthorized) {
    }
}
```

Но поскольку подобное изменение является значимым, новое поведение нацелено исключительно на выражения расположенные в условном операторе `if`.

```ts
interface IUser {
    name: string;

    isAuthorized(): boolean;
}

function someAction(user: IUser) {
    /**
     * [TypeScript >= v3.7]
     * > Error
     */
    if (user.isAuthorized) {
    }

    /**
     * name эквивалентно undefined
     * хотя в реальности должно
     * иметь значение 'guest'.
     */
    let name = user.isAuthorized ? user.name : 'guest';
}
```

Кроме того, оно не работает с необязательными членами и при установленным в `false` опции компилятора `--strictNullChecks`.

```ts
interface IUser {
    isAuthorized?(): boolean; // необязательный член
}

function someAction(user: IUser) {
    /**
     * [TypeScript < v3.7]
     * > Ok! Трудно выявляемая ошибка,
     *
     * [TypeScript >= v3.7]
     * > Ok! Трудно выявляемая ошибка,
     */
    if (user.isAuthorized) {
    }
}
```

Также же ошибки не возникает если не вызванная функция вызывается далее в условном блоке.

```ts
interface IUser {
    isAuthorized(): boolean;
}

function someAction(user: IUser) {
    // Error
    if (user.isAuthorized) {
    }

    // Ok
    if (user.isAuthorized) {
        user.isAuthorized();
    }

    // Ok!, ???
    if (user.isAuthorized) {
        user.isAuthorized;
    }

    // Error
    if (user.isAuthorized) {
    } else {
        user.isAuthorized();
    }

    // Error
    if (user.isAuthorized) {
    }

    user.isAuthorized();
}
```

В случаях когда подобный сценарий является преднамеренным, как например при тестировании, то не вызванную функцию можно проверять на `null` или `undefined`, а также прибегнуть к двойному отрицанию и тем самым дать понять, что действия являются обдуманными.

```ts
interface IUser {
    isAuthorized(): boolean;
}

function someAction(user: IUser) {
    // Ok
    if (user.isAuthorized !== null) {
    }

    // Ok
    if (user.isAuthorized !== undefined) {
    }

    // Ok
    if (!!user.isAuthorized) {
    }
}
```
