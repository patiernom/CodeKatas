/**
 * Created by Marco on 15/02/2015.
 */
describe("money functional example", function() {
    it("multiply dollars by scalar", function() {
        var m_money = multiply(createMoney('CHF'), 10, 2);

        expect(m_money.amount).equals(20);
        expect(m_money.currency).equals('CHF');
    });

    it("equality", function() {
        var a = multiply(createMoney('CHF'), 10, 2);
        var b = createMoney('CHF')(20);
        expect(equals(b, a)).to.be.true;
        var c = createMoney('USD')(6);
        expect(equals(c,a)).to.be.false;
        var d = createMoney('CHF')(6);
        expect(equals(c,d)).to.be.false;
        expect(equals(d,c)).to.be.false;
    });
});
