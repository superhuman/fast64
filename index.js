/*
 Copyright Conrad Irwin <conrad@superhuman.com>
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*
 Copyright Vassilis Petroulias [DRDigit]
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
var B64 = {
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  lookup: null,
  rlookup: null,
  encode: function (s) {
    var buffer = typeof s === 'string' ? B64.toUtf8(s) : s
    var position = -1
    var result
    var len
    var nan0, nan1, nan2

    if (!B64.rlookup) {
      B64.rlookup = new Array(125)
      len = B64.alphabet.length
      while (++position < len) { B64.rlookup[position] = B64.alphabet.charCodeAt(position) }
      position = -1
    }

    len = buffer.length

    result = new Uint8Array(new ArrayBuffer(Math.ceil(len / 3) * 4))
    var i = 0

    while (++position < len) {
      nan0 = buffer[position]
      nan1 = buffer[++position]
      result[i++] = B64.rlookup[nan0 >> 2]
      result[i++] = B64.rlookup[((nan0 & 3) << 4) | (nan1 >> 4)]
      if (isNaN(nan1)) {
        result[i++] = B64.rlookup[64]
        result[i++] = B64.rlookup[64]
      } else {
        nan2 = buffer[++position]
        result[i++] = B64.rlookup[((nan1 & 15) << 2) | (nan2 >> 6)]
        result[i++] = B64.rlookup[(isNaN(nan2)) ? 64 : nan2 & 63]
      }
    }
    return new TextDecoder('utf8').decode(result)
  },
  decode: function (s, options) {
    s = s.replace(/\s/g, '')
    if (s.length % 4) {
      throw new Error('InvalidLengthError: decode failed: The string to be decoded is not the correct length for a base64 encoded string.')
    }
    if (/[^A-Za-z0-9+\/\-_=]/g.test(s)) { // eslint-disable-line
      throw new Error('InvalidCharacterError: decode failed: The string contains characters invalid in a base64 encoded string.')
    }

    return B64.decodeCommon(s, options)
  },
  toUtf8: function (s) {
    return new TextEncoder('utf8').encode(s)
  },
  decodeCommon: function (s, options) {
    var position = -1
    var array = new ArrayBuffer(s.length / 4 * 3)
    var len
    var buffer = new Uint8Array(array)
    var i = 0
    var enc0, enc1, enc2, enc3

    if (!B64.lookup) {
      len = B64.alphabet.length
      B64.lookup = new Array(125)
      B64.lookup['-'.charCodeAt(0)] = 62
      B64.lookup['_'.charCodeAt(0)] = 63
      while (++position < len) { B64.lookup[B64.alphabet.charCodeAt(position)] = position }
      position = -1
    }

    len = s.length
    while (++position < len) {
      enc0 = B64.lookup[s.charCodeAt(position)]
      enc1 = B64.lookup[s.charCodeAt(++position)]
      buffer[i++] = (enc0 << 2) | (enc1 >> 4)
      enc2 = B64.lookup[s.charCodeAt(++position)]
      if (enc2 === 64) { break }
      buffer[i++] = ((enc1 & 15) << 4) | (enc2 >> 2)
      enc3 = B64.lookup[s.charCodeAt(++position)]
      if (enc3 === 64) { break }
      buffer[i++] = ((enc2 & 3) << 6) | enc3
    }

    var uint8Array = new Uint8Array(array, 0, i)

    if (options && options.uint8Array) {
      return uint8Array
    }

    return new TextDecoder('utf8').decode(uint8Array)
  }
}

var B64url = {
  decode: function (input, options) {
    // Pad out with standard base64 required padding characters
    var pad = input.length % 4
    if (pad) {
      if (pad === 1) {
        throw new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding')
      }
      input += new Array(5 - pad).join('=')
    }

    if (/[^A-Za-z0-9\-_=]/g.test(input)) {
      throw new Error('InvalidCharacterError: urldecode failed: The string contains characters invalid in a base64 encoded string.')
    }

    return B64.decodeCommon(input, options)
  },

  encode: function (input) {
    var output = B64.encode(input)
    return output
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .split('=', 1)[0]
  }
}

module.exports = {
  decode: B64.decode,
  encode: B64.encode,
  urldecode: B64url.decode,
  urlencode: B64url.encode
}
