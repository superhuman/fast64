
This immodestly claims to be the fastest in-browser utf-8 safe Base64
decoding library. If you can beat it in the latest version of Chrome, please
send a pull request :).

I built it as part of the [Superhuman](https://superhuman.com) email client,
as a significant portion of our CPU-burn goes into Base64 parsing.

It's based on mythic work by DRDigit (Vassilis Petroulias). (I say mythic,
because its origins are shrouded in mystery), but uses modern browser
features (namely `TextEncoder`, `TextDecoder`, `Uint8Array`, and
`ArrayBuffer`) to beat the original by a very healthy multiplier.

Installation
============

```
npm install fast64
```

Usage
=====

```js
var fast64 = require('base64');

// For standard base64
base64 = fast64.encode(string);
string = fast64.decode(base64);
// If you want to decode till Uint8Array and skip the UTF8 decoding.
// This is useful in cases where you need Uint8Array for eg. create blob out of Uint8Array result.
uint8Array = fast64.decode(base64, {uint8Array:true});


// For URL-safe base64 (-_ in place of +/, and no padding)
base64 = fast64.urlencode(string);
string = fast64.urldecode(base64);
// If you want to decode till Uint8Array and skip the UTF8 decoding.
// This is useful in cases where you need Uint8Array for eg. create blob out of Uint8Array result.
uint8Array = fast64.urldecode(base64, {uint8Array:true});
```

Testing
=======

If you want to develop this package, you can run the tests in-browser:

```
npm install
open test/test.html
```
