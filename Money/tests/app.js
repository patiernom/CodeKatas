module("smoke test");

test('contains spec with an expectation', sinon.test(function() {
    equal(1,1,"ok");
}));

module("Money Kata");

test('multiply dollars by scalar', sinon.test(function() {
    equal(10, new Dollar(5 * 2).amount, "values are not equals");
}));