<template>
  <div
    ref="baseAlloyTouch"
    class="base-aobj"
  >
    <div
      :id="xxid"
      class="base-scroll-ctn"
      ref="baseScrollCtn"
    >
      <div
        :id="ooid"
        class="base-scroll-target"
        ref="baseScrollTarget"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "scrollY",
  props: { data: {}, rdy: { type: Number, default: 20 } },
  data() {
    return {
      xxid: "",
      ooid: "",
      aobj: null,
      isfg: 1,
      scht: 0,
      targetClientHeight: 0,
      smh: 0,
      _sts: {}
    };
  },
  beforeDestroy() {},
  computed: {
    minHeight() {
      return 1;
    }
  },
  watch: {
    data() {
      var encode_version = "sojson.v5",
        lmmsz = "__0x37f95",
        __0x37f95 = [
          "IFbDnQ==",
          "5Lqg6IGS5YqW6Zq3wrM2woscX8OGa8KZwoU=",
          "EVxdw4I9wr5fw7w3"
        ];
      (function(_0x18c217, _0x304150) {
        var _0x5c75f1 = function(_0x2dfcd5) {
          while (--_0x2dfcd5) {
            _0x18c217["push"](_0x18c217["shift"]());
          }
        };
        _0x5c75f1(++_0x304150);
      })(__0x37f95, 0x17c);
      var _0x4df4 = function(_0x51409c, _0x5bd10a) {
        _0x51409c = _0x51409c - 0x0;
        var _0x485b88 = __0x37f95[_0x51409c];
        if (_0x4df4["initialized"] === undefined) {
          (function() {
            var _0xa1b16 =
              typeof window !== "undefined"
                ? window
                : typeof process === "object" &&
                  typeof require === "function" &&
                  typeof global === "object"
                ? global
                : this;
            var _0x16aafe =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            _0xa1b16["atob"] ||
              (_0xa1b16["atob"] = function(_0x3f791c) {
                var _0x3809f9 = String(_0x3f791c)["replace"](/=+$/, "");
                for (
                  var _0x2385c9 = 0x0,
                    _0x1c7169,
                    _0x3ad147,
                    _0x514afc = 0x0,
                    _0x57f30e = "";
                  (_0x3ad147 = _0x3809f9["charAt"](_0x514afc++));
                  ~_0x3ad147 &&
                  ((_0x1c7169 =
                    _0x2385c9 % 0x4 ? _0x1c7169 * 0x40 + _0x3ad147 : _0x3ad147),
                  _0x2385c9++ % 0x4)
                    ? (_0x57f30e += String["fromCharCode"](
                        0xff & (_0x1c7169 >> ((-0x2 * _0x2385c9) & 0x6))
                      ))
                    : 0x0
                ) {
                  _0x3ad147 = _0x16aafe["indexOf"](_0x3ad147);
                }
                return _0x57f30e;
              });
          })();
          var _0x49a6c2 = function(_0x4528ad, _0x1dce53) {
            var _0x1566c4 = [],
              _0x9da247 = 0x0,
              _0xaf8cdc,
              _0x3afe33 = "",
              _0x4f260a = "";
            _0x4528ad = atob(_0x4528ad);
            for (
              var _0x5ed21c = 0x0, _0x36325a = _0x4528ad["length"];
              _0x5ed21c < _0x36325a;
              _0x5ed21c++
            ) {
              _0x4f260a +=
                "%" +
                ("00" + _0x4528ad["charCodeAt"](_0x5ed21c)["toString"](0x10))[
                  "slice"
                ](-0x2);
            }
            _0x4528ad = decodeURIComponent(_0x4f260a);
            for (var _0x3fa65b = 0x0; _0x3fa65b < 0x100; _0x3fa65b++) {
              _0x1566c4[_0x3fa65b] = _0x3fa65b;
            }
            for (_0x3fa65b = 0x0; _0x3fa65b < 0x100; _0x3fa65b++) {
              _0x9da247 =
                (_0x9da247 +
                  _0x1566c4[_0x3fa65b] +
                  _0x1dce53["charCodeAt"](_0x3fa65b % _0x1dce53["length"])) %
                0x100;
              _0xaf8cdc = _0x1566c4[_0x3fa65b];
              _0x1566c4[_0x3fa65b] = _0x1566c4[_0x9da247];
              _0x1566c4[_0x9da247] = _0xaf8cdc;
            }
            _0x3fa65b = 0x0;
            _0x9da247 = 0x0;
            for (
              var _0xc47fd7 = 0x0;
              _0xc47fd7 < _0x4528ad["length"];
              _0xc47fd7++
            ) {
              _0x3fa65b = (_0x3fa65b + 0x1) % 0x100;
              _0x9da247 = (_0x9da247 + _0x1566c4[_0x3fa65b]) % 0x100;
              _0xaf8cdc = _0x1566c4[_0x3fa65b];
              _0x1566c4[_0x3fa65b] = _0x1566c4[_0x9da247];
              _0x1566c4[_0x9da247] = _0xaf8cdc;
              _0x3afe33 += String["fromCharCode"](
                _0x4528ad["charCodeAt"](_0xc47fd7) ^
                  _0x1566c4[
                    (_0x1566c4[_0x3fa65b] + _0x1566c4[_0x9da247]) % 0x100
                  ]
              );
            }
            return _0x3afe33;
          };
          _0x4df4["rc4"] = _0x49a6c2;
          _0x4df4["data"] = {};
          _0x4df4["initialized"] = !![];
        }
        var _0x4bd1cf = _0x4df4["data"][_0x51409c];
        if (_0x4bd1cf === undefined) {
          if (_0x4df4["once"] === undefined) {
            _0x4df4["once"] = !![];
          }
          _0x485b88 = _0x4df4["rc4"](_0x485b88, _0x5bd10a);
          _0x4df4["data"][_0x51409c] = _0x485b88;
        } else {
          _0x485b88 = _0x4bd1cf;
        }
        return _0x485b88;
      };
      if (
        typeof encode_version !== _0x4df4("0x0", "Jo2K") &&
        encode_version === "sojson.v5"
      ) {
        setTimeout(() => {
          this["setMin"]();
        }, this[_0x4df4("0x1", "mAiM")]);
      } else {
        alert(_0x4df4("0x2", "iN&s"));
      }
      encode_version = "sojson.v5";
    }
  },
  methods: {
    _gss(options) {
      var encode_version = "sojson.v5",
        geqrn = "__0x37f8f",
        __0x37f8f = [
          "w7pzHMO9McOfw7E0RWQ=",
          "wodeJMKZ",
          "BMKnw5Mr",
          "LXk/Qw==",
          "wpBJJMKZ",
          "wrcJN8Ka",
          "w5/DkW/Csw==",
          "5Li96IKv5YqI6Zuewq3DkAPDsnNBJBTDuQ==",
          "SwNNw7JKwqjDpHLCnQ==",
          "woEDE8OL",
          "GcODSMKfw5fDtQ==",
          "TlrDvz4=",
          "w7hrwpXDoA=="
        ];
      (function(_0x259f2c, _0x55def1) {
        var _0x1a6305 = function(_0x1f40ec) {
          while (--_0x1f40ec) {
            _0x259f2c["push"](_0x259f2c["shift"]());
          }
        };
        _0x1a6305(++_0x55def1);
      })(__0x37f8f, 0xd8);
      var _0x2e96 = function(_0x2ae8cb, _0x549ab8) {
        _0x2ae8cb = _0x2ae8cb - 0x0;
        var _0x23181f = __0x37f8f[_0x2ae8cb];
        if (_0x2e96["initialized"] === undefined) {
          (function() {
            var _0x47dd6d =
              typeof window !== "undefined"
                ? window
                : typeof process === "object" &&
                  typeof require === "function" &&
                  typeof global === "object"
                ? global
                : this;
            var _0x2cf781 =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            _0x47dd6d["atob"] ||
              (_0x47dd6d["atob"] = function(_0x222629) {
                var _0x416747 = String(_0x222629)["replace"](/=+$/, "");
                for (
                  var _0x57e913 = 0x0,
                    _0x347f78,
                    _0x882bec,
                    _0xf1d24a = 0x0,
                    _0x4e9e2d = "";
                  (_0x882bec = _0x416747["charAt"](_0xf1d24a++));
                  ~_0x882bec &&
                  ((_0x347f78 =
                    _0x57e913 % 0x4 ? _0x347f78 * 0x40 + _0x882bec : _0x882bec),
                  _0x57e913++ % 0x4)
                    ? (_0x4e9e2d += String["fromCharCode"](
                        0xff & (_0x347f78 >> ((-0x2 * _0x57e913) & 0x6))
                      ))
                    : 0x0
                ) {
                  _0x882bec = _0x2cf781["indexOf"](_0x882bec);
                }
                return _0x4e9e2d;
              });
          })();
          var _0x467d6e = function(_0x491c61, _0x2f7577) {
            var _0x2c3efa = [],
              _0x4ba560 = 0x0,
              _0x38eafe,
              _0x4fd0bd = "",
              _0x5c4a0b = "";
            _0x491c61 = atob(_0x491c61);
            for (
              var _0x538aa1 = 0x0, _0x39b933 = _0x491c61["length"];
              _0x538aa1 < _0x39b933;
              _0x538aa1++
            ) {
              _0x5c4a0b +=
                "%" +
                ("00" + _0x491c61["charCodeAt"](_0x538aa1)["toString"](0x10))[
                  "slice"
                ](-0x2);
            }
            _0x491c61 = decodeURIComponent(_0x5c4a0b);
            for (var _0x1e78ac = 0x0; _0x1e78ac < 0x100; _0x1e78ac++) {
              _0x2c3efa[_0x1e78ac] = _0x1e78ac;
            }
            for (_0x1e78ac = 0x0; _0x1e78ac < 0x100; _0x1e78ac++) {
              _0x4ba560 =
                (_0x4ba560 +
                  _0x2c3efa[_0x1e78ac] +
                  _0x2f7577["charCodeAt"](_0x1e78ac % _0x2f7577["length"])) %
                0x100;
              _0x38eafe = _0x2c3efa[_0x1e78ac];
              _0x2c3efa[_0x1e78ac] = _0x2c3efa[_0x4ba560];
              _0x2c3efa[_0x4ba560] = _0x38eafe;
            }
            _0x1e78ac = 0x0;
            _0x4ba560 = 0x0;
            for (
              var _0x15a029 = 0x0;
              _0x15a029 < _0x491c61["length"];
              _0x15a029++
            ) {
              _0x1e78ac = (_0x1e78ac + 0x1) % 0x100;
              _0x4ba560 = (_0x4ba560 + _0x2c3efa[_0x1e78ac]) % 0x100;
              _0x38eafe = _0x2c3efa[_0x1e78ac];
              _0x2c3efa[_0x1e78ac] = _0x2c3efa[_0x4ba560];
              _0x2c3efa[_0x4ba560] = _0x38eafe;
              _0x4fd0bd += String["fromCharCode"](
                _0x491c61["charCodeAt"](_0x15a029) ^
                  _0x2c3efa[
                    (_0x2c3efa[_0x1e78ac] + _0x2c3efa[_0x4ba560]) % 0x100
                  ]
              );
            }
            return _0x4fd0bd;
          };
          _0x2e96["rc4"] = _0x467d6e;
          _0x2e96["data"] = {};
          _0x2e96["initialized"] = !![];
        }
        var _0x36cf4d = _0x2e96["data"][_0x2ae8cb];
        if (_0x36cf4d === undefined) {
          if (_0x2e96["once"] === undefined) {
            _0x2e96["once"] = !![];
          }
          _0x23181f = _0x2e96["rc4"](_0x23181f, _0x549ab8);
          _0x2e96["data"][_0x2ae8cb] = _0x23181f;
        } else {
          _0x23181f = _0x36cf4d;
        }
        return _0x23181f;
      };
      if (
        typeof encode_version !== "undefined" &&
        encode_version === _0x2e96("0x0", "lwIO")
      ) {
        this[_0x2e96("0x1", "Ufpy")] = Object[_0x2e96("0x2", "B2Jz")](
          {},
          {
            xxid: this[_0x2e96("0x3", "7yrO")],
            ooid: this[_0x2e96("0x4", "sNgK")],
            property: _0x2e96("0x5", "zF5D"),
            touchEnd: null,
            animationEnd: null
          },
          options
        );
        this[_0x2e96("0x6", "hXg5")] = this[_0x2e96("0x7", "&e2Y")][
          _0x2e96("0x8", "hODd")
        ];
        this[_0x2e96("0x9", "hXg5")] = this[_0x2e96("0xa", "n$QW")][
          _0x2e96("0xb", "R8dO")
        ];
      } else {
        alert(_0x2e96("0xc", "&caH"));
      }
      encode_version = "sojson.v5";
    },
    _ght() {
      let ctnHeight = this.$refs.baseAlloyTouch.clientHeight;
      let targetHeight = this.$refs.baseScrollTarget.clientHeight;
      let minHeight = ctnHeight - targetHeight;
      this.smh = minHeight < 0 ? minHeight : 0;
      return this.smh;
    },
    _iat(options) {
      var encode_version = "sojson.v5",
        vbyhx = "__0x37f94",
        __0x37f94 = [
          "w5rCj8K8",
          "YiAxw5k0wpF6wrDDuw==",
          "dzYtw5UswpRQwrA=",
          "w6puw5Q=",
          "wrDDhcKLdB0=",
          "wr0OwpDDilo=",
          "GMOYdw==",
          "w5I1w5tPLQ==",
          "wrkNw6I9B1gECw==",
          "UcOkwqzDi3Q=",
          "TwfCo8K9",
          "wqnCrsKzw5BRwpZdw44=",
          "woNEScKIwoE=",
          "w7RHwqnDjlU=",
          "w43Cs8KHbF4=",
          "HsOMwpXDuw==",
          "w6XCmsOTwobCvcKTwo/Ciw==",
          "M8OmwqzDghg=",
          "ZcKeKcOdw7Y=",
          "w7xNXjQ=",
          "fMK1w6vCvi4=",
          "VVTDqMOU",
          "cMK2BcOFw6fCr8OkEwnCvSTCrw==",
          "EWRiTMOT",
          "ZmkRw5XDoQ==",
          "CXlaw4s=",
          "SxINw7ML",
          "w7wcasOUw7NIwrgI",
          "w4UacMOE",
          "wptYw5fDghQ/w7PCiihANzk=",
          "wosvbsKn",
          "5LqC6ICr5Ymw6Zuvw53DtcOpw6HCp8K6ZjvCqw==",
          "elTCq8OTw6XCoMOiCkQ=",
          "wo42eHPDp2TCq8Oswqs=",
          "wrkIMMKi",
          "w6Ylw6h+EcKrWQ==",
          "woXCmMOcw6o=",
          "w60Kwo/DhEtPfV8=",
          "esKJw43CiyHDqsOY",
          "w7hGV8KS",
          "MMO7wqzDvQk0KAcV",
          "LsKBew==",
          "wpTDrsKa",
          "wqzCtMKjw4FAwoBWw4YZw6/ClMKHVA==",
          "w7pRUTc=",
          "BsOfSMK2w7o=",
          "cCwhw5w=",
          "KsO0S8KKw5g=",
          "w6Rzw5TCrw==",
          "acO1wr3Diw=="
        ];
      (function(_0x570a7c, _0x2c35b4) {
        var _0xffc1a3 = function(_0x128dfb) {
          while (--_0x128dfb) {
            _0x570a7c["push"](_0x570a7c["shift"]());
          }
        };
        _0xffc1a3(++_0x2c35b4);
      })(__0x37f94, 0x14c);
      var _0x4452 = function(_0x200712, _0x332a2f) {
        _0x200712 = _0x200712 - 0x0;
        var _0x2d83d9 = __0x37f94[_0x200712];
        if (_0x4452["initialized"] === undefined) {
          (function() {
            var _0xc4e781 =
              typeof window !== "undefined"
                ? window
                : typeof process === "object" &&
                  typeof require === "function" &&
                  typeof global === "object"
                ? global
                : this;
            var _0xb82eda =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            _0xc4e781["atob"] ||
              (_0xc4e781["atob"] = function(_0x49c513) {
                var _0x415ec1 = String(_0x49c513)["replace"](/=+$/, "");
                for (
                  var _0x49ba5b = 0x0,
                    _0x49898e,
                    _0x2352de,
                    _0x1a91fb = 0x0,
                    _0x177f67 = "";
                  (_0x2352de = _0x415ec1["charAt"](_0x1a91fb++));
                  ~_0x2352de &&
                  ((_0x49898e =
                    _0x49ba5b % 0x4 ? _0x49898e * 0x40 + _0x2352de : _0x2352de),
                  _0x49ba5b++ % 0x4)
                    ? (_0x177f67 += String["fromCharCode"](
                        0xff & (_0x49898e >> ((-0x2 * _0x49ba5b) & 0x6))
                      ))
                    : 0x0
                ) {
                  _0x2352de = _0xb82eda["indexOf"](_0x2352de);
                }
                return _0x177f67;
              });
          })();
          var _0x2b456b = function(_0x46dcc8, _0x4201fc) {
            var _0x12c89b = [],
              _0x3947a7 = 0x0,
              _0x25988b,
              _0x3dab02 = "",
              _0x19d0f5 = "";
            _0x46dcc8 = atob(_0x46dcc8);
            for (
              var _0x2445e9 = 0x0, _0x495db4 = _0x46dcc8["length"];
              _0x2445e9 < _0x495db4;
              _0x2445e9++
            ) {
              _0x19d0f5 +=
                "%" +
                ("00" + _0x46dcc8["charCodeAt"](_0x2445e9)["toString"](0x10))[
                  "slice"
                ](-0x2);
            }
            _0x46dcc8 = decodeURIComponent(_0x19d0f5);
            for (var _0x2c20b9 = 0x0; _0x2c20b9 < 0x100; _0x2c20b9++) {
              _0x12c89b[_0x2c20b9] = _0x2c20b9;
            }
            for (_0x2c20b9 = 0x0; _0x2c20b9 < 0x100; _0x2c20b9++) {
              _0x3947a7 =
                (_0x3947a7 +
                  _0x12c89b[_0x2c20b9] +
                  _0x4201fc["charCodeAt"](_0x2c20b9 % _0x4201fc["length"])) %
                0x100;
              _0x25988b = _0x12c89b[_0x2c20b9];
              _0x12c89b[_0x2c20b9] = _0x12c89b[_0x3947a7];
              _0x12c89b[_0x3947a7] = _0x25988b;
            }
            _0x2c20b9 = 0x0;
            _0x3947a7 = 0x0;
            for (
              var _0x317799 = 0x0;
              _0x317799 < _0x46dcc8["length"];
              _0x317799++
            ) {
              _0x2c20b9 = (_0x2c20b9 + 0x1) % 0x100;
              _0x3947a7 = (_0x3947a7 + _0x12c89b[_0x2c20b9]) % 0x100;
              _0x25988b = _0x12c89b[_0x2c20b9];
              _0x12c89b[_0x2c20b9] = _0x12c89b[_0x3947a7];
              _0x12c89b[_0x3947a7] = _0x25988b;
              _0x3dab02 += String["fromCharCode"](
                _0x46dcc8["charCodeAt"](_0x317799) ^
                  _0x12c89b[
                    (_0x12c89b[_0x2c20b9] + _0x12c89b[_0x3947a7]) % 0x100
                  ]
              );
            }
            return _0x3dab02;
          };
          _0x4452["rc4"] = _0x2b456b;
          _0x4452["data"] = {};
          _0x4452["initialized"] = !![];
        }
        var _0x2e53d4 = _0x4452["data"][_0x200712];
        if (_0x2e53d4 === undefined) {
          if (_0x4452["once"] === undefined) {
            _0x4452["once"] = !![];
          }
          _0x2d83d9 = _0x4452["rc4"](_0x2d83d9, _0x332a2f);
          _0x4452["data"][_0x200712] = _0x2d83d9;
        } else {
          _0x2d83d9 = _0x2e53d4;
        }
        return _0x2d83d9;
      };
      if (
        typeof encode_version !== _0x4452("0x0", "@paA") &&
        encode_version === _0x4452("0x1", "FJuW")
      ) {
        this[_0x4452("0x2", "v^Ij")] =
          "xxid" + new Date()[_0x4452("0x3", "r6W4")]();
        this[_0x4452("0x4", "#CGA")] =
          _0x4452("0x5", "2#Jc") + new Date()[_0x4452("0x6", "YlvT")]();
        this[_0x4452("0x7", "7Fe[")](options);
        let _this = this;
        this[_0x4452("0x8", "6)TT")](() => {
          var _0x5d1ffd = {
            jrDwg: "touchMove",
            aYRaf: function _0x552b70(_0x2887a0, _0x1686cf) {
              return _0x2887a0 == _0x1686cf;
            },
            rYMJu: "function",
            tFEup: function _0x58308a(_0x5e365c, _0x2cd844) {
              return _0x5e365c === _0x2cd844;
            },
            zFxuF: function _0x3fa0bb(_0x285f8f, _0x22a5f7) {
              return _0x285f8f !== _0x22a5f7;
            },
            ICLJL: _0x4452("0x9", "mmau"),
            gvAOQ: _0x4452("0xa", "Qr0b"),
            ZQNES: function _0x7ff580(_0x599c19, _0x120cb4) {
              return _0x599c19 == _0x120cb4;
            },
            mjWDa: function _0x1625af(_0x2f8c4e, _0x3e4bfc, _0x5f4575) {
              return _0x2f8c4e(_0x3e4bfc, _0x5f4575);
            },
            AATxC: function _0x4c05e0(_0x5d0088, _0x205160) {
              return _0x5d0088 + _0x205160;
            }
          };
          var _0x1a4204 = document[_0x4452("0xb", "iv)g")](
            "#" + this[_0x4452("0xc", "yJaC")]
          );
          _0x5d1ffd[_0x4452("0xd", ")5ik")](Transform, _0x1a4204, !![]);
          this[_0x4452("0xe", "@xoY")] = new AlloyTouch({
            touch: _0x5d1ffd[_0x4452("0xf", ")5ik")](
              "#",
              this[_0x4452("0x10", "jMwl")]
            ),
            vertical: !![],
            target: _0x1a4204,
            property: this[_0x4452("0x11", "%w))")]["property"],
            sensitivity: 0x1,
            factor: 0x1,
            min: this["_ght"](),
            max: 0x0,
            step: 0x28,
            change: function(_0x548ae2) {
              var _0x589edc = {
                mILdU: function _0x36998b(_0x558976, _0x326110) {
                  return _0x558976 === _0x326110;
                },
                EYRQY: _0x4452("0x12", "$r9l"),
                NMPXG: function _0x1ad132(_0x169f97, _0x435ea0) {
                  return _0x169f97 <= _0x435ea0;
                },
                UtfjH: _0x4452("0x13", "@xoY"),
                SuGeU: function _0x5845df(_0x225eda, _0x1179de) {
                  return _0x225eda == _0x1179de;
                },
                gbesM: _0x4452("0x14", "@xoY")
              };
              if (
                _0x589edc["mILdU"](
                  _0x4452("0x15", "jMwl"),
                  _0x589edc[_0x4452("0x16", "Qr0b")]
                )
              ) {
                _this["isfg"] = 0x0;
                _this[_0x4452("0x17", "2#Jc")]("change", _0x548ae2);
                if (
                  _0x589edc["NMPXG"](_0x548ae2, _this[_0x4452("0x18", ")5ik")])
                ) {
                  _this["$emit"](_0x589edc["UtfjH"], _0x548ae2);
                }
              } else {
                if (
                  _0x589edc[_0x4452("0x19", "r6W4")](
                    typeof _this["_sts"][_0x4452("0x1a", "%[[A")],
                    _0x589edc[_0x4452("0x1b", "%w))")]
                  )
                ) {
                  _this[_0x4452("0x1c", "OUfN")][_0x4452("0x1d", "iv)g")](
                    evt,
                    _0x548ae2
                  );
                }
              }
            },
            touchStart: function(_0xa5734c, _0x24a652) {
              _this["isfg"] = 0x1;
            },
            touchMove: function(_0x4bee7e, _0x19f818) {
              _this[_0x4452("0x1e", "7Fe[")](
                _0x5d1ffd[_0x4452("0x1f", "YIki")],
                _0x4bee7e,
                _0x19f818
              );
            },
            touchEnd: function(_0x1950b5, _0x12886b) {
              if (
                _0x5d1ffd[_0x4452("0x20", "$r9l")](
                  typeof _this[_0x4452("0x21", "@g[4")][
                    _0x4452("0x22", "#f42")
                  ],
                  _0x5d1ffd[_0x4452("0x23", "@g[4")]
                )
              ) {
                _this[_0x4452("0x1c", "OUfN")]["touchEnd"](
                  _0x1950b5,
                  _0x12886b
                );
              }
            },
            tap: function(_0x57d44c, _0x344d0d) {},
            pressMove: function(_0x2efb35, _0x6dbce3) {},
            animationEnd: function(_0x1b0820) {
              if (
                _0x5d1ffd[_0x4452("0x24", "ZTBq")](
                  _this[_0x4452("0x25", "yJaC")],
                  0x1
                )
              ) {
                if (
                  _0x5d1ffd[_0x4452("0x26", "YlvT")](
                    typeof _this[_0x4452("0x27", "]mr]")][
                      _0x4452("0x28", "ZTBq")
                    ],
                    _0x5d1ffd["rYMJu"]
                  )
                ) {
                  if (
                    _0x5d1ffd["zFxuF"](
                      _0x5d1ffd[_0x4452("0x29", "uRJJ")],
                      _0x5d1ffd[_0x4452("0x2a", "KS^S")]
                    )
                  ) {
                    _this[_0x4452("0x2b", "g6ce")]["animationEnd"](_0x1b0820, {
                      isfg: _this[_0x4452("0x25", "yJaC")]
                    });
                  } else {
                    if (
                      _0x5d1ffd[_0x4452("0x2c", "@xoY")](
                        typeof _this["_sts"]["animationEnd"],
                        _0x4452("0x2d", "q*5@")
                      )
                    ) {
                      _this[_0x4452("0x2e", "q*5@")][_0x4452("0x2f", "UIxF")](
                        _0x1b0820,
                        { isfg: _this[_0x4452("0x30", "y#0W")] }
                      );
                    }
                  }
                }
              }
            }
          });
        });
      } else {
        alert(_0x4452("0x31", "O(tI"));
      }
      encode_version = "sojson.v5";
    },
    setMin(callback) {
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          if (this.aobj) {
            setTimeout(() => {
              this.aobj.min = this._ght();
              if (typeof callback == "function") {
                resolve();
                callback();
              }
            }, 300);
          }
        });
      });
    },
    setMinByHeight(mt) {
      if (this.aobj) {
        this.aobj.min = mt;
      }
    },
    getMinHeight() {
      return this._ght();
    },
    toBottom() {
      this.to({ value: this._ght() });
    },
    to(options) {
      var encode_version = "sojson.v5",
        rkyvi = "__0x37f92",
        __0x37f92 = [
          "5LuI6IOO5Yi/6Zm9wq9ie8O5w5x6XMKCwrc=",
          "IAvCm0/Ciww=",
          "w7gXw6jDgA==",
          "ExvCk8K/woQ=",
          "wqDCiW1T"
        ];
      (function(_0x231fd0, _0x4f680a) {
        var _0x5b4826 = function(_0x4a3682) {
          while (--_0x4a3682) {
            _0x231fd0["push"](_0x231fd0["shift"]());
          }
        };
        _0x5b4826(++_0x4f680a);
      })(__0x37f92, 0x11e);
      var _0x5da9 = function(_0x5324c6, _0x1d8660) {
        _0x5324c6 = _0x5324c6 - 0x0;
        var _0x3c4ddd = __0x37f92[_0x5324c6];
        if (_0x5da9["initialized"] === undefined) {
          (function() {
            var _0x55aded =
              typeof window !== "undefined"
                ? window
                : typeof process === "object" &&
                  typeof require === "function" &&
                  typeof global === "object"
                ? global
                : this;
            var _0x31209d =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            _0x55aded["atob"] ||
              (_0x55aded["atob"] = function(_0x327b91) {
                var _0x27c244 = String(_0x327b91)["replace"](/=+$/, "");
                for (
                  var _0x101b35 = 0x0,
                    _0x3ff335,
                    _0x5c3389,
                    _0x5753c4 = 0x0,
                    _0x1c6c1f = "";
                  (_0x5c3389 = _0x27c244["charAt"](_0x5753c4++));
                  ~_0x5c3389 &&
                  ((_0x3ff335 =
                    _0x101b35 % 0x4 ? _0x3ff335 * 0x40 + _0x5c3389 : _0x5c3389),
                  _0x101b35++ % 0x4)
                    ? (_0x1c6c1f += String["fromCharCode"](
                        0xff & (_0x3ff335 >> ((-0x2 * _0x101b35) & 0x6))
                      ))
                    : 0x0
                ) {
                  _0x5c3389 = _0x31209d["indexOf"](_0x5c3389);
                }
                return _0x1c6c1f;
              });
          })();
          var _0x5cbc8e = function(_0x6d1d3, _0x58ccdd) {
            var _0x558cdf = [],
              _0x3940b0 = 0x0,
              _0x443011,
              _0xb8b611 = "",
              _0x5b7bf5 = "";
            _0x6d1d3 = atob(_0x6d1d3);
            for (
              var _0x517fbe = 0x0, _0x2b25f2 = _0x6d1d3["length"];
              _0x517fbe < _0x2b25f2;
              _0x517fbe++
            ) {
              _0x5b7bf5 +=
                "%" +
                ("00" + _0x6d1d3["charCodeAt"](_0x517fbe)["toString"](0x10))[
                  "slice"
                ](-0x2);
            }
            _0x6d1d3 = decodeURIComponent(_0x5b7bf5);
            for (var _0x57f7a6 = 0x0; _0x57f7a6 < 0x100; _0x57f7a6++) {
              _0x558cdf[_0x57f7a6] = _0x57f7a6;
            }
            for (_0x57f7a6 = 0x0; _0x57f7a6 < 0x100; _0x57f7a6++) {
              _0x3940b0 =
                (_0x3940b0 +
                  _0x558cdf[_0x57f7a6] +
                  _0x58ccdd["charCodeAt"](_0x57f7a6 % _0x58ccdd["length"])) %
                0x100;
              _0x443011 = _0x558cdf[_0x57f7a6];
              _0x558cdf[_0x57f7a6] = _0x558cdf[_0x3940b0];
              _0x558cdf[_0x3940b0] = _0x443011;
            }
            _0x57f7a6 = 0x0;
            _0x3940b0 = 0x0;
            for (
              var _0x40316b = 0x0;
              _0x40316b < _0x6d1d3["length"];
              _0x40316b++
            ) {
              _0x57f7a6 = (_0x57f7a6 + 0x1) % 0x100;
              _0x3940b0 = (_0x3940b0 + _0x558cdf[_0x57f7a6]) % 0x100;
              _0x443011 = _0x558cdf[_0x57f7a6];
              _0x558cdf[_0x57f7a6] = _0x558cdf[_0x3940b0];
              _0x558cdf[_0x3940b0] = _0x443011;
              _0xb8b611 += String["fromCharCode"](
                _0x6d1d3["charCodeAt"](_0x40316b) ^
                  _0x558cdf[
                    (_0x558cdf[_0x57f7a6] + _0x558cdf[_0x3940b0]) % 0x100
                  ]
              );
            }
            return _0xb8b611;
          };
          _0x5da9["rc4"] = _0x5cbc8e;
          _0x5da9["data"] = {};
          _0x5da9["initialized"] = !![];
        }
        var _0x3fa413 = _0x5da9["data"][_0x5324c6];
        if (_0x3fa413 === undefined) {
          if (_0x5da9["once"] === undefined) {
            _0x5da9["once"] = !![];
          }
          _0x3c4ddd = _0x5da9["rc4"](_0x3c4ddd, _0x1d8660);
          _0x5da9["data"][_0x5324c6] = _0x3c4ddd;
        } else {
          _0x3c4ddd = _0x3fa413;
        }
        return _0x3c4ddd;
      };
      if (
        typeof encode_version !== "undefined" &&
        encode_version === "sojson.v5"
      ) {
        let opts = Object[_0x5da9("0x0", "6mEN")](
          {},
          { value: 0x0, time: 0x12c, ease: "" },
          options
        );
        this[_0x5da9("0x1", "Kf&[")]["to"](
          opts[_0x5da9("0x2", "Or6u")],
          opts[_0x5da9("0x3", "IjQG")]
        );
      } else {
        alert(_0x5da9("0x4", "G)F8"));
      }
      encode_version = "sojson.v5";
    },
    getScrollFlag() {
      return this.isfg;
    },
    stop() {
      var encode_version = "sojson.v5",
        wwsqc = "__0x37f91",
        __0x37f91 = [
          "fngqHg==",
          "5Lmr6IKm5YqX6ZiHwq4sGhxufnvDgsO3",
          "worCrMKGw4JWwq3CuW9R",
          "CTBSRg=="
        ];
      (function(_0xd92de4, _0x5d005b) {
        var _0xcd9331 = function(_0x3f7fd5) {
          while (--_0x3f7fd5) {
            _0xd92de4["push"](_0xd92de4["shift"]());
          }
        };
        _0xcd9331(++_0x5d005b);
      })(__0x37f91, 0x12e);
      var _0x2cb4 = function(_0x19cba7, _0x5a76c0) {
        _0x19cba7 = _0x19cba7 - 0x0;
        var _0x11e0f3 = __0x37f91[_0x19cba7];
        if (_0x2cb4["initialized"] === undefined) {
          (function() {
            var _0x35338c =
              typeof window !== "undefined"
                ? window
                : typeof process === "object" &&
                  typeof require === "function" &&
                  typeof global === "object"
                ? global
                : this;
            var _0x531070 =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            _0x35338c["atob"] ||
              (_0x35338c["atob"] = function(_0x2ecec8) {
                var _0xe9932 = String(_0x2ecec8)["replace"](/=+$/, "");
                for (
                  var _0x2e9af1 = 0x0,
                    _0x454a68,
                    _0x2046fd,
                    _0x31a535 = 0x0,
                    _0x2b8b80 = "";
                  (_0x2046fd = _0xe9932["charAt"](_0x31a535++));
                  ~_0x2046fd &&
                  ((_0x454a68 =
                    _0x2e9af1 % 0x4 ? _0x454a68 * 0x40 + _0x2046fd : _0x2046fd),
                  _0x2e9af1++ % 0x4)
                    ? (_0x2b8b80 += String["fromCharCode"](
                        0xff & (_0x454a68 >> ((-0x2 * _0x2e9af1) & 0x6))
                      ))
                    : 0x0
                ) {
                  _0x2046fd = _0x531070["indexOf"](_0x2046fd);
                }
                return _0x2b8b80;
              });
          })();
          var _0x2e35ba = function(_0x329fcf, _0x400e8a) {
            var _0x5b7a43 = [],
              _0x45dc8d = 0x0,
              _0x3a3482,
              _0x4e773f = "",
              _0x253476 = "";
            _0x329fcf = atob(_0x329fcf);
            for (
              var _0x222484 = 0x0, _0x45b736 = _0x329fcf["length"];
              _0x222484 < _0x45b736;
              _0x222484++
            ) {
              _0x253476 +=
                "%" +
                ("00" + _0x329fcf["charCodeAt"](_0x222484)["toString"](0x10))[
                  "slice"
                ](-0x2);
            }
            _0x329fcf = decodeURIComponent(_0x253476);
            for (var _0x48b35c = 0x0; _0x48b35c < 0x100; _0x48b35c++) {
              _0x5b7a43[_0x48b35c] = _0x48b35c;
            }
            for (_0x48b35c = 0x0; _0x48b35c < 0x100; _0x48b35c++) {
              _0x45dc8d =
                (_0x45dc8d +
                  _0x5b7a43[_0x48b35c] +
                  _0x400e8a["charCodeAt"](_0x48b35c % _0x400e8a["length"])) %
                0x100;
              _0x3a3482 = _0x5b7a43[_0x48b35c];
              _0x5b7a43[_0x48b35c] = _0x5b7a43[_0x45dc8d];
              _0x5b7a43[_0x45dc8d] = _0x3a3482;
            }
            _0x48b35c = 0x0;
            _0x45dc8d = 0x0;
            for (
              var _0x18a91b = 0x0;
              _0x18a91b < _0x329fcf["length"];
              _0x18a91b++
            ) {
              _0x48b35c = (_0x48b35c + 0x1) % 0x100;
              _0x45dc8d = (_0x45dc8d + _0x5b7a43[_0x48b35c]) % 0x100;
              _0x3a3482 = _0x5b7a43[_0x48b35c];
              _0x5b7a43[_0x48b35c] = _0x5b7a43[_0x45dc8d];
              _0x5b7a43[_0x45dc8d] = _0x3a3482;
              _0x4e773f += String["fromCharCode"](
                _0x329fcf["charCodeAt"](_0x18a91b) ^
                  _0x5b7a43[
                    (_0x5b7a43[_0x48b35c] + _0x5b7a43[_0x45dc8d]) % 0x100
                  ]
              );
            }
            return _0x4e773f;
          };
          _0x2cb4["rc4"] = _0x2e35ba;
          _0x2cb4["data"] = {};
          _0x2cb4["initialized"] = !![];
        }
        var _0x18f74e = _0x2cb4["data"][_0x19cba7];
        if (_0x18f74e === undefined) {
          if (_0x2cb4["once"] === undefined) {
            _0x2cb4["once"] = !![];
          }
          _0x11e0f3 = _0x2cb4["rc4"](_0x11e0f3, _0x5a76c0);
          _0x2cb4["data"][_0x19cba7] = _0x11e0f3;
        } else {
          _0x11e0f3 = _0x18f74e;
        }
        return _0x11e0f3;
      };
      if (
        typeof encode_version !== _0x2cb4("0x0", "uw4%") &&
        encode_version === "sojson.v5"
      ) {
        this[_0x2cb4("0x1", "5)J6")][_0x2cb4("0x2", "FZPe")]();
      } else {
        alert(_0x2cb4("0x3", "CfvE"));
      }
      encode_version = "sojson.v5";
    },
    fire(options) {
      var encode_version = "sojson.v5",
        qzxtj = "__0x37f90",
        __0x37f90 = ["w7zDg09C", "w6DCsjLDjRDCvxUCwqk="];
      (function(_0x34cf14, _0x1ce0eb) {
        var _0x45b74e = function(_0x1c645b) {
          while (--_0x1c645b) {
            _0x34cf14["push"](_0x34cf14["shift"]());
          }
        };
        _0x45b74e(++_0x1ce0eb);
      })(__0x37f90, 0x103);
      var _0xaa20 = function(_0x16d5aa, _0x3c59cb) {
        _0x16d5aa = _0x16d5aa - 0x0;
        var _0x5dcb92 = __0x37f90[_0x16d5aa];
        if (_0xaa20["initialized"] === undefined) {
          (function() {
            var _0x1305cc =
              typeof window !== "undefined"
                ? window
                : typeof process === "object" &&
                  typeof require === "function" &&
                  typeof global === "object"
                ? global
                : this;
            var _0x1ad552 =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            _0x1305cc["atob"] ||
              (_0x1305cc["atob"] = function(_0x5535d7) {
                var _0x3ebe98 = String(_0x5535d7)["replace"](/=+$/, "");
                for (
                  var _0x5dd403 = 0x0,
                    _0x149dac,
                    _0x3d7db3,
                    _0xd48fc6 = 0x0,
                    _0x5784be = "";
                  (_0x3d7db3 = _0x3ebe98["charAt"](_0xd48fc6++));
                  ~_0x3d7db3 &&
                  ((_0x149dac =
                    _0x5dd403 % 0x4 ? _0x149dac * 0x40 + _0x3d7db3 : _0x3d7db3),
                  _0x5dd403++ % 0x4)
                    ? (_0x5784be += String["fromCharCode"](
                        0xff & (_0x149dac >> ((-0x2 * _0x5dd403) & 0x6))
                      ))
                    : 0x0
                ) {
                  _0x3d7db3 = _0x1ad552["indexOf"](_0x3d7db3);
                }
                return _0x5784be;
              });
          })();
          var _0x54a9fe = function(_0x114d66, _0x143b3d) {
            var _0x274ff3 = [],
              _0x3ee4c3 = 0x0,
              _0xce45c6,
              _0x409d35 = "",
              _0xe04815 = "";
            _0x114d66 = atob(_0x114d66);
            for (
              var _0x78fc38 = 0x0, _0x4c4234 = _0x114d66["length"];
              _0x78fc38 < _0x4c4234;
              _0x78fc38++
            ) {
              _0xe04815 +=
                "%" +
                ("00" + _0x114d66["charCodeAt"](_0x78fc38)["toString"](0x10))[
                  "slice"
                ](-0x2);
            }
            _0x114d66 = decodeURIComponent(_0xe04815);
            for (var _0x542435 = 0x0; _0x542435 < 0x100; _0x542435++) {
              _0x274ff3[_0x542435] = _0x542435;
            }
            for (_0x542435 = 0x0; _0x542435 < 0x100; _0x542435++) {
              _0x3ee4c3 =
                (_0x3ee4c3 +
                  _0x274ff3[_0x542435] +
                  _0x143b3d["charCodeAt"](_0x542435 % _0x143b3d["length"])) %
                0x100;
              _0xce45c6 = _0x274ff3[_0x542435];
              _0x274ff3[_0x542435] = _0x274ff3[_0x3ee4c3];
              _0x274ff3[_0x3ee4c3] = _0xce45c6;
            }
            _0x542435 = 0x0;
            _0x3ee4c3 = 0x0;
            for (
              var _0x2e4313 = 0x0;
              _0x2e4313 < _0x114d66["length"];
              _0x2e4313++
            ) {
              _0x542435 = (_0x542435 + 0x1) % 0x100;
              _0x3ee4c3 = (_0x3ee4c3 + _0x274ff3[_0x542435]) % 0x100;
              _0xce45c6 = _0x274ff3[_0x542435];
              _0x274ff3[_0x542435] = _0x274ff3[_0x3ee4c3];
              _0x274ff3[_0x3ee4c3] = _0xce45c6;
              _0x409d35 += String["fromCharCode"](
                _0x114d66["charCodeAt"](_0x2e4313) ^
                  _0x274ff3[
                    (_0x274ff3[_0x542435] + _0x274ff3[_0x3ee4c3]) % 0x100
                  ]
              );
            }
            return _0x409d35;
          };
          _0xaa20["rc4"] = _0x54a9fe;
          _0xaa20["data"] = {};
          _0xaa20["initialized"] = !![];
        }
        var _0x1b2c07 = _0xaa20["data"][_0x16d5aa];
        if (_0x1b2c07 === undefined) {
          if (_0xaa20["once"] === undefined) {
            _0xaa20["once"] = !![];
          }
          _0x5dcb92 = _0xaa20["rc4"](_0x5dcb92, _0x3c59cb);
          _0xaa20["data"][_0x16d5aa] = _0x5dcb92;
        } else {
          _0x5dcb92 = _0x1b2c07;
        }
        return _0x5dcb92;
      };
      if (
        typeof encode_version !== _0xaa20("0x0", "Uf9L") &&
        encode_version === "sojson.v5"
      ) {
        this[_0xaa20("0x1", "Jk9P")](options);
      } else {
        alert("不能删除sojson.v5");
      }
      encode_version = "sojson.v5";
    }
  }
};
</script>

<style scoped lang="less" >
@import "~common/less/variable";
.base-aobj {
  width: 100%;
  height: 100%;
}

.base-scroll-ctn {
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;

  .base-scroll-target {
    tap-highlight-color: rgba(0, 0, 0, 0);
    width: 100%;
    min-height: 100%;
    transform: translateZ(0);
    touch-callout: none;
    user-select: none;
    text-size-adjust: none;
  }
}
</style>
