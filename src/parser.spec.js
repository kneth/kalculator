/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const nearley = require("nearley");
const parser = require("./parser.js");

const Fraction = require('./fraction');

describe('Parsing fracrion', () => {
    let calc;

    beforeEach(() => {
        calc = new nearley.Parser(nearley.Grammar.fromCompiled(parser));
    });

    ['a', ')', '1/2+*1/2', '1/2**1/2'].forEach(expr => {
        test(`illegal expression: ${expr}`, () => {
            expect(() => {
                calc.feed(expr);
            }).toThrow();
        });
    });

    [
        { expr: '1',                           result: new Fraction(1, 1) },
        { expr: '2/4',                         result: new Fraction(1, 2) },
        { expr: '1 - 1/2',                     result: new Fraction(1, 2) },
        { expr: '(1/2 + 2/3) * 3/4',           result: new Fraction(7, 8) },
        { expr: '(4/4 - 1/2) * 2/3',           result: new Fraction(1, 3) },
        { expr: '(4/4 - 1/2) * (1/3 + 1/3)',   result: new Fraction(1, 3) },
        { expr: '(1 - 1/2) * (2 * 1/3)',       result: new Fraction(1, 3) }
    ].forEach((t) => {
        test(`expr: ${t.expr}`, () => {
            calc.feed(t.expr);
            const f = calc.results[0];
            expect(f.numerator()).toBe(t.result.numerator());
            expect(f.denominator()).toBe(t.result.denominator());
        });
    });
});