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
        if (a === b) {
            return a;
        } else {
            if (a > b) {
                return gcd(a-b, b);
            } else {
                return gcd(a, b-a);
            }
        }
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
    return new Fraction(this._denominator*f._numerator+f._denominator*this._numerator, this._denominator*f._denominator);
};

Fraction.prototype.sub = function (f) {
    return new Fraction(this._denominator*f._numerator-f._denominator*this._numerator, this._denominator*f._denominator);
};

Fraction.prototype.mul = function (f) {
    return new Fraction(this._numerator*f._numerator, this._denominator*f._denominator);
};

Fraction.prototype.div = function (f) {
    return new Fraction(this._numerator*f._denominator, this._denominator*f._numerator);
};

module.exports = Fraction;