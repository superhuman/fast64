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
var LookupFactory = {
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  buildRlookup: function (url) {
    if (!LookupFactory.rlookup) {
      var position = -1
      var len = LookupFactory.alphabet.length
      LookupFactory.rlookup = new Array(125)
      while (++position < len) { LookupFactory.rlookup[position] = LookupFactory.alphabet.charCodeAt(position) }
      if (url) {
        LookupFactory.urlrlookup = Object.clone(LookupFactory.rlookup, true)
        LookupFactory.urlrlookup[62] = '-'.charCodeAt(0)
        LookupFactory.urlrlookup[63] = '_'.charCodeAt(0)
        return LookupFactory.urlrlookup
      }
      return LookupFactory.rlookup
    }
  },

  buildLookup: function () {
    if (!LookupFactory.lookup) {
      var position = -1
      var len = LookupFactory.alphabet.length
      LookupFactory.lookup = new Array(125)
      while (++position < len) { LookupFactory.lookup[LookupFactory.alphabet.charCodeAt(position)] = position }
      // we dont need to special case these as they are not overlapping
      LookupFactory.lookup['-'.charCodeAt(0)] = 62
      LookupFactory.lookup['_'.charCodeAt(0)] = 63
    }
    return LookupFactory.lookup
  }
}

module.exports = {
  buildRlookup: LookupFactory.buildRlookup,
  buildLookup: LookupFactory.buildLookup
}
