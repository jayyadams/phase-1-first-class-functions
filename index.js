function receivesAFunction(DamiTheMayoBoi) {
    return DamiTheMayoBoi();
}
function returnsANamedFunction() {
    return function receivesAFunction(DamiTheMayoBoi){   
    }
}
function returnsAnAnonymousFunction() {
    return function () {
    }
}