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


 /**
  * This represents a fraction.
  *
  * The constructor will normalize and shorten the fraction.
  *
  * @class
  * @param {number} x - numerator
  * @param {number} y - denominator
  * @throws {Error}
  * @since 0.1.0
  */
function Fraction(x, y) {

    let _numerator = 0;
    let _denominator = 0;

    const _gcd = (a, b) => {
        a = (a > 0) ? a :-a;
        b = (b > 0) ? b :-b;

        while (b != 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    };

    if (y === 0) {
        throw Error('Denominator cannot be 0.');
    }

    if ((x < 0 && y < 0) || (x > 0 && y < 0)) {
        x = -x;
        y = -y;
    }

    let d = _gcd(x, y);
    _numerator = x/d;
    _denominator = y/d;

    /**
     * Getter for numerator.
     *
     * @returns {number} numerator.
     * @since 0.1.0
     */
    this.numerator = function () {
        return _numerator;
    };

    /**
     * getter for denominator.
     *
     * @returns {number} denominator.
     * @since 0.1.0
     */
    this.denominator = function () {
        return _denominator;
    };

    /**
     * A string representation of a fraction.
     *
     * @returns {string} the fraction as a string.
     * @since 0.1.0
     */
    this.toString = function () {
        return _numerator.toString() + "/" + _denominator.toString();
    };

    /**
     * Calculate a floating-point number of the representation.
     *
     * @returns {number} a floating-point representation of the fraction.
     * @since 0.1.0
     */
    this.toNumber = function () {
        return _numerator / _denominator;
    };

    /**
     * Add two fractions.
     *
     * @param {Fraction} f Right side of expression.
     * @returns {Fraction} The sum.
     * @throws {Error}
     * @since 0.1.0
     */
    this.add = function (f) {
        if (!(f instanceof Fraction)) {
            throw Error('Argument is not an instance of Fraction.');
        }
        return new Fraction(_denominator*f.numerator() + f.denominator()*_numerator, _denominator*f.denominator());
    };

    /**
     * Subtract one fraction from another fraction
     *
     * @param {Fraction} f Right side of expression.
     * @returns {Fraction} The difference.
     * @throws {Error}
     * @since 0.1.0
     */
    this.sub = function (f) {
        if (!(f instanceof Fraction)) {
            throw Error('Argument is not an instance of Fraction.');
        }
        return new Fraction(f.denominator()*_numerator - _denominator*f.numerator(), _denominator*f.denominator());
    };
    /**
     * Multiply two fractions.
     *
     * @param {Fraction} f Right side of expression.
     * @returns {Fraction} The product.
     * @throws {Error}
     * @since 0.1.0
     */
    this.mul = function (f) {
        if (!(f instanceof Fraction)) {
            throw Error('Argument is not an instance of Fraction.');
        }
        return new Fraction(_numerator*f.numerator(), _denominator*f.denominator());
    };

    /**
     * Divide one fraction by another fraction.
     *
     * @param {Fraction} f Right side of expression.
     * @returns {Fraction} The result.
     * @throws {Error}
     * @since 0.1.0
     */
    this.div = function (f) {
        if (!(f instanceof Fraction)) {
            throw Error('Argument is not an instance of Fraction.');
        }
        return new Fraction(_numerator*f.denominator(), _denominator*f.numerator());
    };
}

module.exports = Fraction;
