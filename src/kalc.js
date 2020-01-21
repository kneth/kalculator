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

const process = require('process');

const nearley = require("nearley");
const parser = require("./parser.js");

const p = new nearley.Parser(nearley.Grammar.fromCompiled(parser));
if (process.argv.length === 3) {
    const expr = process.argv[2];
    p.feed(expr);
    console.log(`${expr} = ${p.results[0].toString()}`);
} else {
    console.error(`Missing expression.`);
}

