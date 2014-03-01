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


#### Licence?

Just kidding.
