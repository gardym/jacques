### jaques

Refreshin' your tea, guv'nor?

#### Install

    $ npm install jaques -g

#### Search your json.

    $ jaq --help

    $ jaq "" file.json
    file.json
    [ { id: '1234', color: { rgb: [Object] } } ]
    
    $ jaq "[0]" file.json
    file.json
    { id: '1234', color: { rgb: { r: '00', g: 'f4', b: '00' } } }

    $ jaq "[0].color.rgb" file.json
    tmp/file.json
    { r: '00', g: 'f4', b: '00' }

    $ jaq "length" file.json
    file.json
    1

    $ curl -s https://api.github.com/users/gardym/orgs | jaq "[0].login"
    vanderhuge-industries

#### Licence?

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>Just kidding.

