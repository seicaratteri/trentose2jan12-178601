var getArea = require('./area');

/* 
    Partizioni valide
    So che con due numeri si comporterà sempre allo stesso modo
*/

test('Due numeri', function() {
    expect(getArea([5, 10])).toBe(50);
});

/* Partizioni invalide */

test('Due numeri di cui uno minore di 0', function() {
    expect(getArea([4, -4])).toBe(-1);
});

test('Nessun parametro passato', function() {
    expect(getArea()).toBe(-1);
});

test('Una stringa e un numero', function() { 
    expect(getArea(["92", 77])).toBe(-1);
});

test('Solo un parametro passato', function() {
    expect(getArea([81])).toBe(-1);
});

/* 
    Boundary value
    Dato che gli input possono essere >= 0, provo -1,0,1
*/

test('Il primo parametro è -1', function() {
    expect(getArea([-1, 22])).toBe(-1);
});

test('Il secondo parametro è -1', function() {
    expect(getArea([36, -1])).toBe(-1);
});

test('Il primo parametro è 0', function() {
    expect(getArea([0, 7])).toBe(0);
});

test('Il secondo parametro è 0', function() {
    expect(getArea([7, 0])).toBe(0);
});

test('Il primo parametro è 1', function() {
    expect(getArea([1, 9])).toBe(9);
});

test('Il secondo parametro è 1', function() {
    expect(getArea([12, 1])).toBe(12);
});