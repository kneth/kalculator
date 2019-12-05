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

 const Fraction = require('./fraction');

 test('create and shorten fractions', () => {
     let f1 = new Fraction(2, 4);
     expect(f1._numerator).toBe(1);
     expect(f1._denominator).toBe(2);
     expect(f1.toString()).toBe('1/2');
     expect(f1.toNumber()).toBeCloseTo(0.5, 7);

     let f2 = new Fraction(8, 28);
     expect(f2._numerator).toBe(2);
     expect(f2._denominator).toBe(7);
     expect(f2.toString()).toBe('2/7');
     expect(f2.toNumber()).toBeCloseTo(0.2857142857, 7);
 });

 test('denominator cannot be zero', () => {
    expect(() => {
        let f = new Fraction(2, 0);
    }).toThrow();
 });

 test('add two fractions', () => {
    let f1 = new Fraction(1, 2);
    let f2 = new Fraction(2, 3);
    let f3 = f1.add(f2);
    expect(f3 instanceof Fraction).toBeTruthy();
    expect(f3._numerator).toBe(7);
    expect(f3._denominator).toBe(6);
 });

 test('substract fractions', () => {
    let f1 = new Fraction(2, 3);
    let f2 = new Fraction(1, 2);
    let f3 = f1.sub(f2);
    expect(f3 instanceof Fraction).toBeTruthy();
    expect(f3._numerator).toBe(1);
    expect(f3._denominator).toBe(6);
 });

 test('multiply fractions', () => {
     let f1 = new Fraction(2, 3);
     let f2 = new Fraction(3, 4);
     let f3 = f1.mul(f2);
     expect(f3 instanceof Fraction).toBeTruthy();
     expect(f3._numerator).toBe(1);
     expect(f3._denominator).toBe(2);
 });

 test('divide fractions', () => {
    let f1 = new Fraction(2, 3);
    let f2 = new Fraction(3, 4);
    let f3 = f1.div(f2);
    expect(f3 instanceof Fraction).toBeTruthy();
    expect(f3._numerator).toBe(8);
    expect(f3._denominator).toBe(9);
 });