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

function Fraction(x, y) {

    var that = this;

    function gcd(a, b) {
        while (b != 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    if (y === 0) {
        throw Error('Denominator cannot be 0.');
    }

    var d = gcd(x, y);
    this._numerator = x/d;
    this._denominator = y/d;
};

Fraction.prototype.toString = function () {
    return this._numerator.toString() + "/" + this._denominator.toString();
}

Fraction.prototype.toNumber = function () {
    return this._numerator / this._denominator;
}

Fraction.prototype.add = function (f) {
    return new Fraction(this._denominator*f._numerator + f._denominator*this._numerator, this._denominator*f._denominator);
};

Fraction.prototype.sub = function (f) {
    return new Fraction(f._denominator*this._numerator - this._denominator*f._numerator, this._denominator*f._denominator);
};

Fraction.prototype.mul = function (f) {
    return new Fraction(this._numerator*f._numerator, this._denominator*f._denominator);
};

Fraction.prototype.div = function (f) {
    return new Fraction(this._numerator*f._denominator, this._denominator*f._numerator);
};

module.exports = Fraction;