# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https:#www.gnu.org/licenses/>.

@builtin "whitespace.ne" # `_` means arbitrary amount of whitespace
@builtin "number.ne"     # `int`, `decimal`, and `percentage` number primitives

@{%
const Fraction = require('./fraction');
%}

# start
main    -> sum                       {% function (d) { return d[0]; } %}

# parenthesis
expr    -> "(" _ sum _ ")"           {% function (d) { return d[2]; } %}
        |  value                     {% function (d) { return d[0]; } %}


# multiplication and division
product -> product _ "*" _ expr      {% function (d) { return d[0].mul(d[4]); } %}
        |  product _ "/" _ expr      {% function (d) { return d[0].div(d[4]); } %}
        |  expr                      {% function (d) { return d[0]; } %}

# addition and substraction
sum     -> sum _ "+" _ expr          {% function (d) { return d[0].add(d[4]); } %}
        |  sum _ "-" _ expr          {% function (d) { return d[0].sub(d[4]); } %}
        |  product                   {% function (d) { return d[0]; } %}

# a fraction or a number
value   -> fraction                  {% function (d) { return d[0]; } %}
        |  int                       {% function (d) { return new Fraction(d[0], 1); } %}

# a fraction
fraction -> int _ "/" _ int          {% function (d) { return new Fraction(d[0], d[4]); } %}
