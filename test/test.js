
describe("encode", function () {


    it("should work for long strings of HTML", function () {
        expect(Base64.encode("<div id=\"mocha\"><ul id=\"mocha-stats\"><li class=\"progress\"><canvas width=\"80\" height=\"80\" style=\"width: 40px; height: 40px;\"></canvas></li><li class=\"passes\"><a href=\"javascript:void(0);\">passes:</a> <em>2</em></li><li class=\"failures\"><a href=\"javascript:void(0);\">failures:</a> <em>0</em></li><li class=\"duration\">duration: <em>0.02</em>s</li></ul><ul id=\"mocha-report\"><li class=\"suite\"><h1><a href=\"/0/js/fast64/test/index.html?grep=decode\">decode</a></h1><ul><li class=\"test pass fast\"><h2>should work on simple cases<span class=\"duration\">1ms</span> <a href=\"/0/js/fast64/test/index.html?grep=decode%20should%20work%20on%20simple%20cases\" class=\"replay\">‣</a></h2><pre style=\"display: none;\"><code>expect(Base<span class=\"number\">64</span>.encode(\"hi\")).to.equal(\"aGk=\");</code></pre></li><li class=\"test pass fast\"><h2>should work on emoji<span class=\"duration\">0ms</span> <a href=\"/0/js/fast64/test/index.html?grep=decode%20should%20work%20on%20emoji\" class=\"replay\">‣</a></h2><pre style=\"display: none;\"><code>expect(Base<span class=\"number\">64</span>.encode(\"💓\")).to.equal(\"<span class=\"number\">8</span>J+Skw==\");</code></pre></li></ul></li></ul></div>\n\n<script>\n  mocha.run();\n</script>\n\n")).to.equal("PGRpdiBpZD0ibW9jaGEiPjx1bCBpZD0ibW9jaGEtc3RhdHMiPjxsaSBjbGFzcz0icHJvZ3Jlc3MiPjxjYW52YXMgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBzdHlsZT0id2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsiPjwvY2FudmFzPjwvbGk+PGxpIGNsYXNzPSJwYXNzZXMiPjxhIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKTsiPnBhc3Nlczo8L2E+IDxlbT4yPC9lbT48L2xpPjxsaSBjbGFzcz0iZmFpbHVyZXMiPjxhIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKTsiPmZhaWx1cmVzOjwvYT4gPGVtPjA8L2VtPjwvbGk+PGxpIGNsYXNzPSJkdXJhdGlvbiI+ZHVyYXRpb246IDxlbT4wLjAyPC9lbT5zPC9saT48L3VsPjx1bCBpZD0ibW9jaGEtcmVwb3J0Ij48bGkgY2xhc3M9InN1aXRlIj48aDE+PGEgaHJlZj0iLzAvanMvZmFzdDY0L3Rlc3QvaW5kZXguaHRtbD9ncmVwPWRlY29kZSI+ZGVjb2RlPC9hPjwvaDE+PHVsPjxsaSBjbGFzcz0idGVzdCBwYXNzIGZhc3QiPjxoMj5zaG91bGQgd29yayBvbiBzaW1wbGUgY2FzZXM8c3BhbiBjbGFzcz0iZHVyYXRpb24iPjFtczwvc3Bhbj4gPGEgaHJlZj0iLzAvanMvZmFzdDY0L3Rlc3QvaW5kZXguaHRtbD9ncmVwPWRlY29kZSUyMHNob3VsZCUyMHdvcmslMjBvbiUyMHNpbXBsZSUyMGNhc2VzIiBjbGFzcz0icmVwbGF5Ij7igKM8L2E+PC9oMj48cHJlIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+PGNvZGU+ZXhwZWN0KEJhc2U8c3BhbiBjbGFzcz0ibnVtYmVyIj42NDwvc3Bhbj4uZW5jb2RlKCJoaSIpKS50by5lcXVhbCgiYUdrPSIpOzwvY29kZT48L3ByZT48L2xpPjxsaSBjbGFzcz0idGVzdCBwYXNzIGZhc3QiPjxoMj5zaG91bGQgd29yayBvbiBlbW9qaTxzcGFuIGNsYXNzPSJkdXJhdGlvbiI+MG1zPC9zcGFuPiA8YSBocmVmPSIvMC9qcy9mYXN0NjQvdGVzdC9pbmRleC5odG1sP2dyZXA9ZGVjb2RlJTIwc2hvdWxkJTIwd29yayUyMG9uJTIwZW1vamkiIGNsYXNzPSJyZXBsYXkiPuKAozwvYT48L2gyPjxwcmUgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48Y29kZT5leHBlY3QoQmFzZTxzcGFuIGNsYXNzPSJudW1iZXIiPjY0PC9zcGFuPi5lbmNvZGUoIvCfkpMiKSkudG8uZXF1YWwoIjxzcGFuIGNsYXNzPSJudW1iZXIiPjg8L3NwYW4+SitTa3c9PSIpOzwvY29kZT48L3ByZT48L2xpPjwvdWw+PC9saT48L3VsPjwvZGl2PgoKPHNjcmlwdD4KICBtb2NoYS5ydW4oKTsKPC9zY3JpcHQ+Cgo=");

    });

    it("should work on simple cases", function () {
        expect(Base64.encode("hi")).to.equal("aGk=");
    });

    it("should work on emoji", function () {
        expect(Base64.encode("💓")).to.equal("8J+Skw==");
    });

    it('should encode uint8 arrays', function () {
      expect(Base64.encode(new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x00]))).to.equal('iVBORwA=')
    })
});

describe("decode", function () {
    it("should work on simple cases", function () {
        expect(Base64.decode("aGk=")).to.equal("hi");
    });

    it("should work on emoji", function () {
        expect(Base64.decode("8J+Skw==")).to.equal("💓");
    });

    it("should work for long strings of HTML", function () {
        expect(Base64.decode(
            "PGRpdiBpZD0ibW9jaGEiPjx1bCBpZD0ibW9jaGEtc3RhdHMiPjxsaSBjbGFzcz0icHJvZ3Jlc3MiPjxjYW52YXMgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBzdHlsZT0id2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsiPjwvY2FudmFzPjwvbGk+PGxpIGNsYXNzPSJwYXNzZXMiPjxhIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKTsiPnBhc3Nlczo8L2E+IDxlbT4yPC9lbT48L2xpPjxsaSBjbGFzcz0iZmFpbHVyZXMiPjxhIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKTsiPmZhaWx1cmVzOjwvYT4gPGVtPjA8L2VtPjwvbGk+PGxpIGNsYXNzPSJkdXJhdGlvbiI+ZHVyYXRpb246IDxlbT4wLjAyPC9lbT5zPC9saT48L3VsPjx1bCBpZD0ibW9jaGEtcmVwb3J0Ij48bGkgY2xhc3M9InN1aXRlIj48aDE+PGEgaHJlZj0iLzAvanMvZmFzdDY0L3Rlc3QvaW5kZXguaHRtbD9ncmVwPWRlY29kZSI+ZGVjb2RlPC9hPjwvaDE+PHVsPjxsaSBjbGFzcz0idGVzdCBwYXNzIGZhc3QiPjxoMj5zaG91bGQgd29yayBvbiBzaW1wbGUgY2FzZXM8c3BhbiBjbGFzcz0iZHVyYXRpb24iPjFtczwvc3Bhbj4gPGEgaHJlZj0iLzAvanMvZmFzdDY0L3Rlc3QvaW5kZXguaHRtbD9ncmVwPWRlY29kZSUyMHNob3VsZCUyMHdvcmslMjBvbiUyMHNpbXBsZSUyMGNhc2VzIiBjbGFzcz0icmVwbGF5Ij7igKM8L2E+PC9oMj48cHJlIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+PGNvZGU+ZXhwZWN0KEJhc2U8c3BhbiBjbGFzcz0ibnVtYmVyIj42NDwvc3Bhbj4uZW5jb2RlKCJoaSIpKS50by5lcXVhbCgiYUdrPSIpOzwvY29kZT48L3ByZT48L2xpPjxsaSBjbGFzcz0idGVzdCBwYXNzIGZhc3QiPjxoMj5zaG91bGQgd29yayBvbiBlbW9qaTxzcGFuIGNsYXNzPSJkdXJhdGlvbiI+MG1zPC9zcGFuPiA8YSBocmVmPSIvMC9qcy9mYXN0NjQvdGVzdC9pbmRleC5odG1sP2dyZXA9ZGVjb2RlJTIwc2hvdWxkJTIwd29yayUyMG9uJTIwZW1vamkiIGNsYXNzPSJyZXBsYXkiPuKAozwvYT48L2gyPjxwcmUgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48Y29kZT5leHBlY3QoQmFzZTxzcGFuIGNsYXNzPSJudW1iZXIiPjY0PC9zcGFuPi5lbmNvZGUoIvCfkpMiKSkudG8uZXF1YWwoIjxzcGFuIGNsYXNzPSJudW1iZXIiPjg8L3NwYW4+SitTa3c9PSIpOzwvY29kZT48L3ByZT48L2xpPjwvdWw+PC9saT48L3VsPjwvZGl2PgoKPHNjcmlwdD4KICBtb2NoYS5ydW4oKTsKPC9zY3JpcHQ+Cgo="
        )).to.equal(
    "<div id=\"mocha\"><ul id=\"mocha-stats\"><li class=\"progress\"><canvas width=\"80\" height=\"80\" style=\"width: 40px; height: 40px;\"></canvas></li><li class=\"passes\"><a href=\"javascript:void(0);\">passes:</a> <em>2</em></li><li class=\"failures\"><a href=\"javascript:void(0);\">failures:</a> <em>0</em></li><li class=\"duration\">duration: <em>0.02</em>s</li></ul><ul id=\"mocha-report\"><li class=\"suite\"><h1><a href=\"/0/js/fast64/test/index.html?grep=decode\">decode</a></h1><ul><li class=\"test pass fast\"><h2>should work on simple cases<span class=\"duration\">1ms</span> <a href=\"/0/js/fast64/test/index.html?grep=decode%20should%20work%20on%20simple%20cases\" class=\"replay\">‣</a></h2><pre style=\"display: none;\"><code>expect(Base<span class=\"number\">64</span>.encode(\"hi\")).to.equal(\"aGk=\");</code></pre></li><li class=\"test pass fast\"><h2>should work on emoji<span class=\"duration\">0ms</span> <a href=\"/0/js/fast64/test/index.html?grep=decode%20should%20work%20on%20emoji\" class=\"replay\">‣</a></h2><pre style=\"display: none;\"><code>expect(Base<span class=\"number\">64</span>.encode(\"💓\")).to.equal(\"<span class=\"number\">8</span>J+Skw==\");</code></pre></li></ul></li></ul></div>\n\n<script>\n  mocha.run();\n</script>\n\n");
    });

    it("should return Uint8Array if option param uint8Array is passed with value true", function () {
        result = Base64.decode("aGk=", {uint8Array:true})
        expect(result instanceof Uint8Array).to.equal(true);
        expect(result[0]).to.equal(104);
        expect(result[1]).to.equal(105);
    });
});

describe("urldecode", function () {
    it("should work on simple cases", function () {
        expect(Base64.urldecode("aGk")).to.equal("hi");
    });

    it("should work on emoji", function () {
        expect(Base64.urldecode("8J-Skw")).to.equal("💓");
    });

    it("should work for long strings of HTML", function () {
        expect(Base64.urldecode(
            "PGRpdiBpZD0ibW9jaGEiPjx1bCBpZD0ibW9jaGEtc3RhdHMiPjxsaSBjbGFzcz0icHJvZ3Jlc3MiPjxjYW52YXMgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBzdHlsZT0id2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsiPjwvY2FudmFzPjwvbGk-PGxpIGNsYXNzPSJwYXNzZXMiPjxhIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKTsiPnBhc3Nlczo8L2E-IDxlbT4yPC9lbT48L2xpPjxsaSBjbGFzcz0iZmFpbHVyZXMiPjxhIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKTsiPmZhaWx1cmVzOjwvYT4gPGVtPjA8L2VtPjwvbGk-PGxpIGNsYXNzPSJkdXJhdGlvbiI-ZHVyYXRpb246IDxlbT4wLjAyPC9lbT5zPC9saT48L3VsPjx1bCBpZD0ibW9jaGEtcmVwb3J0Ij48bGkgY2xhc3M9InN1aXRlIj48aDE-PGEgaHJlZj0iLzAvanMvZmFzdDY0L3Rlc3QvaW5kZXguaHRtbD9ncmVwPWRlY29kZSI-ZGVjb2RlPC9hPjwvaDE-PHVsPjxsaSBjbGFzcz0idGVzdCBwYXNzIGZhc3QiPjxoMj5zaG91bGQgd29yayBvbiBzaW1wbGUgY2FzZXM8c3BhbiBjbGFzcz0iZHVyYXRpb24iPjFtczwvc3Bhbj4gPGEgaHJlZj0iLzAvanMvZmFzdDY0L3Rlc3QvaW5kZXguaHRtbD9ncmVwPWRlY29kZSUyMHNob3VsZCUyMHdvcmslMjBvbiUyMHNpbXBsZSUyMGNhc2VzIiBjbGFzcz0icmVwbGF5Ij7igKM8L2E-PC9oMj48cHJlIHN0eWxlPSJkaXNwbGF5OiBub25lOyI-PGNvZGU-ZXhwZWN0KEJhc2U8c3BhbiBjbGFzcz0ibnVtYmVyIj42NDwvc3Bhbj4uZW5jb2RlKCJoaSIpKS50by5lcXVhbCgiYUdrPSIpOzwvY29kZT48L3ByZT48L2xpPjxsaSBjbGFzcz0idGVzdCBwYXNzIGZhc3QiPjxoMj5zaG91bGQgd29yayBvbiBlbW9qaTxzcGFuIGNsYXNzPSJkdXJhdGlvbiI-MG1zPC9zcGFuPiA8YSBocmVmPSIvMC9qcy9mYXN0NjQvdGVzdC9pbmRleC5odG1sP2dyZXA9ZGVjb2RlJTIwc2hvdWxkJTIwd29yayUyMG9uJTIwZW1vamkiIGNsYXNzPSJyZXBsYXkiPuKAozwvYT48L2gyPjxwcmUgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48Y29kZT5leHBlY3QoQmFzZTxzcGFuIGNsYXNzPSJudW1iZXIiPjY0PC9zcGFuPi5lbmNvZGUoIvCfkpMiKSkudG8uZXF1YWwoIjxzcGFuIGNsYXNzPSJudW1iZXIiPjg8L3NwYW4-SitTa3c9PSIpOzwvY29kZT48L3ByZT48L2xpPjwvdWw-PC9saT48L3VsPjwvZGl2PgoKPHNjcmlwdD4KICBtb2NoYS5ydW4oKTsKPC9zY3JpcHQ-Cgo"
        )).to.equal(
    "<div id=\"mocha\"><ul id=\"mocha-stats\"><li class=\"progress\"><canvas width=\"80\" height=\"80\" style=\"width: 40px; height: 40px;\"></canvas></li><li class=\"passes\"><a href=\"javascript:void(0);\">passes:</a> <em>2</em></li><li class=\"failures\"><a href=\"javascript:void(0);\">failures:</a> <em>0</em></li><li class=\"duration\">duration: <em>0.02</em>s</li></ul><ul id=\"mocha-report\"><li class=\"suite\"><h1><a href=\"/0/js/fast64/test/index.html?grep=decode\">decode</a></h1><ul><li class=\"test pass fast\"><h2>should work on simple cases<span class=\"duration\">1ms</span> <a href=\"/0/js/fast64/test/index.html?grep=decode%20should%20work%20on%20simple%20cases\" class=\"replay\">‣</a></h2><pre style=\"display: none;\"><code>expect(Base<span class=\"number\">64</span>.encode(\"hi\")).to.equal(\"aGk=\");</code></pre></li><li class=\"test pass fast\"><h2>should work on emoji<span class=\"duration\">0ms</span> <a href=\"/0/js/fast64/test/index.html?grep=decode%20should%20work%20on%20emoji\" class=\"replay\">‣</a></h2><pre style=\"display: none;\"><code>expect(Base<span class=\"number\">64</span>.encode(\"💓\")).to.equal(\"<span class=\"number\">8</span>J+Skw==\");</code></pre></li></ul></li></ul></div>\n\n<script>\n  mocha.run();\n</script>\n\n");

    });

    it("should return Uint8Array if option param uint8Array is passed with value true", function () {
        result = Base64.urldecode("aGk", {uint8Array:true})
        expect(result instanceof Uint8Array).to.equal(true);
        expect(result[0]).to.equal(104);
        expect(result[1]).to.equal(105);
    });
});

describe("urlencode", function () {

    it("should work for long strings of HTML", function () {
        expect(Base64.urlencode(
    "<div id=\"mocha\"><ul id=\"mocha-stats\"><li class=\"progress\"><canvas width=\"80\" height=\"80\" style=\"width: 40px; height: 40px;\"></canvas></li><li class=\"passes\"><a href=\"javascript:void(0);\">passes:</a> <em>2</em></li><li class=\"failures\"><a href=\"javascript:void(0);\">failures:</a> <em>0</em></li><li class=\"duration\">duration: <em>0.02</em>s</li></ul><ul id=\"mocha-report\"><li class=\"suite\"><h1><a href=\"/0/js/fast64/test/index.html?grep=decode\">decode</a></h1><ul><li class=\"test pass fast\"><h2>should work on simple cases<span class=\"duration\">1ms</span> <a href=\"/0/js/fast64/test/index.html?grep=decode%20should%20work%20on%20simple%20cases\" class=\"replay\">‣</a></h2><pre style=\"display: none;\"><code>expect(Base<span class=\"number\">64</span>.encode(\"hi\")).to.equal(\"aGk=\");</code></pre></li><li class=\"test pass fast\"><h2>should work on emoji<span class=\"duration\">0ms</span> <a href=\"/0/js/fast64/test/index.html?grep=decode%20should%20work%20on%20emoji\" class=\"replay\">‣</a></h2><pre style=\"display: none;\"><code>expect(Base<span class=\"number\">64</span>.encode(\"💓\")).to.equal(\"<span class=\"number\">8</span>J+Skw==\");</code></pre></li></ul></li></ul></div>\n\n<script>\n  mocha.run();\n</script>\n\n"


        )).to.equal(
            "PGRpdiBpZD0ibW9jaGEiPjx1bCBpZD0ibW9jaGEtc3RhdHMiPjxsaSBjbGFzcz0icHJvZ3Jlc3MiPjxjYW52YXMgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBzdHlsZT0id2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsiPjwvY2FudmFzPjwvbGk-PGxpIGNsYXNzPSJwYXNzZXMiPjxhIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKTsiPnBhc3Nlczo8L2E-IDxlbT4yPC9lbT48L2xpPjxsaSBjbGFzcz0iZmFpbHVyZXMiPjxhIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKTsiPmZhaWx1cmVzOjwvYT4gPGVtPjA8L2VtPjwvbGk-PGxpIGNsYXNzPSJkdXJhdGlvbiI-ZHVyYXRpb246IDxlbT4wLjAyPC9lbT5zPC9saT48L3VsPjx1bCBpZD0ibW9jaGEtcmVwb3J0Ij48bGkgY2xhc3M9InN1aXRlIj48aDE-PGEgaHJlZj0iLzAvanMvZmFzdDY0L3Rlc3QvaW5kZXguaHRtbD9ncmVwPWRlY29kZSI-ZGVjb2RlPC9hPjwvaDE-PHVsPjxsaSBjbGFzcz0idGVzdCBwYXNzIGZhc3QiPjxoMj5zaG91bGQgd29yayBvbiBzaW1wbGUgY2FzZXM8c3BhbiBjbGFzcz0iZHVyYXRpb24iPjFtczwvc3Bhbj4gPGEgaHJlZj0iLzAvanMvZmFzdDY0L3Rlc3QvaW5kZXguaHRtbD9ncmVwPWRlY29kZSUyMHNob3VsZCUyMHdvcmslMjBvbiUyMHNpbXBsZSUyMGNhc2VzIiBjbGFzcz0icmVwbGF5Ij7igKM8L2E-PC9oMj48cHJlIHN0eWxlPSJkaXNwbGF5OiBub25lOyI-PGNvZGU-ZXhwZWN0KEJhc2U8c3BhbiBjbGFzcz0ibnVtYmVyIj42NDwvc3Bhbj4uZW5jb2RlKCJoaSIpKS50by5lcXVhbCgiYUdrPSIpOzwvY29kZT48L3ByZT48L2xpPjxsaSBjbGFzcz0idGVzdCBwYXNzIGZhc3QiPjxoMj5zaG91bGQgd29yayBvbiBlbW9qaTxzcGFuIGNsYXNzPSJkdXJhdGlvbiI-MG1zPC9zcGFuPiA8YSBocmVmPSIvMC9qcy9mYXN0NjQvdGVzdC9pbmRleC5odG1sP2dyZXA9ZGVjb2RlJTIwc2hvdWxkJTIwd29yayUyMG9uJTIwZW1vamkiIGNsYXNzPSJyZXBsYXkiPuKAozwvYT48L2gyPjxwcmUgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48Y29kZT5leHBlY3QoQmFzZTxzcGFuIGNsYXNzPSJudW1iZXIiPjY0PC9zcGFuPi5lbmNvZGUoIvCfkpMiKSkudG8uZXF1YWwoIjxzcGFuIGNsYXNzPSJudW1iZXIiPjg8L3NwYW4-SitTa3c9PSIpOzwvY29kZT48L3ByZT48L2xpPjwvdWw-PC9saT48L3VsPjwvZGl2PgoKPHNjcmlwdD4KICBtb2NoYS5ydW4oKTsKPC9zY3JpcHQ-Cgo"
);

    });

    it("should work on simple cases", function () {
        expect(Base64.urlencode("hi")).to.equal("aGk");
    });

    it("should work on emoji", function () {
        expect(Base64.urlencode("💓")).to.equal("8J-Skw");
    });

});
