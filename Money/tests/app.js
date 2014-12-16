module("smoke test");

test('contains spec with an expectation', sinon.test(function() {
    equals(1,1,"ok");
}));

module("Money Kata");

test('multiply dollars by scalar', sinon.test(function() {
    var five = new Dollar(5);

	ok(ten.equals(new Dollar(5 * 2)));
}));