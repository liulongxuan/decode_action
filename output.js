//Wed Feb 11 2026 11:55:40 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("小明计算器");
(() => {
  function b(r) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (u) {
      {
        return typeof u;
      }
    } : function (u) {
      {
        return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
      }
    };
    return b(r);
  }
  function c() {
    "use strict";

    c = function () {
      {
        return C;
      }
    };
    var B;
    var C = {};
    var D = Object.prototype;
    var F = D.hasOwnProperty;
    var G = Object.defineProperty || function (ac, ad, ae) {
      {
        ac[ad] = ae.value;
      }
    };
    var H = "function" == typeof Symbol ? Symbol : {};
    var I = H.iterator || "@@iterator";
    var J = H.asyncIterator || "@@asyncIterator";
    var K = H.toStringTag || "@@toStringTag";
    function M(ac, ad, ae) {
      {
        var af = {
          value: ae,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(ac, ad, af);
        return ac[ad];
      }
    }
    try {
      M({}, "");
    } catch (ad) {
      M = function (af, ag, ah) {
        {
          return af[ag] = ah;
        }
      };
    }
    function N(af, ag, ah, ai) {
      {
        var ak = ag && ag.prototype instanceof X ? ag : X;
        var al = Object.create(ak.prototype);
        var am = new aa(ai || []);
        G(al, "_invoke", {
          value: a6(af, ah, am)
        });
        return al;
      }
    }
    function P(af, ag, ah) {
      {
        try {
          {
            return {
              type: "normal",
              arg: af.call(ag, ah)
            };
          }
        } catch (am) {
          {
            var aj = {
              type: "throw",
              arg: am
            };
            return aj;
          }
        }
      }
    }
    C.wrap = N;
    var Q = "suspendedStart";
    var R = "suspendedYield";
    var U = "executing";
    var V = "completed";
    var W = {};
    function X() {}
    function Y() {}
    function Z() {}
    var a0 = {};
    M(a0, I, function () {
      return this;
    });
    var a1 = Object.getPrototypeOf;
    var a2 = a1 && a1(a1(ab([])));
    a2 && a2 !== D && F.call(a2, I) && (a0 = a2);
    Z.prototype = X.prototype = Object.create(a0);
    var a3 = Z.prototype;
    function a4(af) {
      {
        ["next", "throw", "return"].forEach(function (ai) {
          {
            M(af, ai, function (ak) {
              {
                return this._invoke(ai, ak);
              }
            });
          }
        });
      }
    }
    function a5(af, ag) {
      {
        function aj(ak, al, am, an) {
          {
            var ap = P(af[ak], af, al);
            if ("throw" !== ap.type) {
              {
                var aq = ap.arg;
                var ar = aq.value;
                return ar && "object" == b(ar) && F.call(ar, "__await") ? ag.resolve(ar.__await).then(function (as) {
                  {
                    aj("next", as, am, an);
                  }
                }, function (as) {
                  {
                    aj("throw", as, am, an);
                  }
                }) : ag.resolve(ar).then(function (as) {
                  {
                    aq.value = as;
                    am(aq);
                  }
                }, function (as) {
                  {
                    return aj("throw", as, am, an);
                  }
                });
              }
            }
            an(ap.arg);
          }
        }
        var ai;
        G(this, "_invoke", {
          value: function (ak, al) {
            {
              function ao() {
                {
                  return new ag(function (ap, aq) {
                    {
                      aj(ak, al, ap, aq);
                    }
                  });
                }
              }
              return ai = ai ? ai.then(ao, ao) : ao();
            }
          }
        });
      }
    }
    function a6(af, ag, ah) {
      {
        var aj = Q;
        return function (ak, al) {
          {
            if (aj === U) {
              throw Error("Generator is already running");
            }
            if (aj === V) {
              {
                if ("throw" === ak) {
                  throw al;
                }
                var an = {
                  value: B,
                  done: true
                };
                return an;
              }
            }
            for (ah.method = ak, ah.arg = al;;) {
              {
                var ao = ah.delegate;
                if (ao) {
                  {
                    var ap = a7(ao, ah);
                    if (ap) {
                      {
                        if (ap === W) {
                          continue;
                        }
                        return ap;
                      }
                    }
                  }
                }
                if ("next" === ah.method) {
                  ah.sent = ah._sent = ah.arg;
                } else {
                  if ("throw" === ah.method) {
                    {
                      if (aj === Q) {
                        throw aj = V, ah.arg;
                      }
                      ah.dispatchException(ah.arg);
                    }
                  } else {
                    "return" === ah.method && ah.abrupt("return", ah.arg);
                  }
                }
                aj = U;
                var aq = P(af, ag, ah);
                if ("normal" === aq.type) {
                  {
                    if (aj = ah.done ? V : R, aq.arg === W) {
                      continue;
                    }
                    var ar = {
                      value: aq.arg,
                      done: ah.done
                    };
                    return ar;
                  }
                }
                "throw" === aq.type && (aj = V, ah.method = "throw", ah.arg = aq.arg);
              }
            }
          }
        };
      }
    }
    function a7(af, ag) {
      {
        var aj = ag.method;
        var ak = af.iterator[aj];
        if (ak === B) {
          ag.delegate = null;
          "throw" === aj && af.iterator.return && (ag.method = "return", ag.arg = B, a7(af, ag), "throw" === ag.method) || "return" !== aj && (ag.method = "throw", ag.arg = new TypeError("The iterator does not provide a '" + aj + "' method"));
          return W;
        }
        var al = P(ak, af.iterator, ag.arg);
        if ("throw" === al.type) {
          ag.method = "throw";
          ag.arg = al.arg;
          ag.delegate = null;
          return W;
        }
        var am = al.arg;
        return am ? am.done ? (ag[af.resultName] = am.value, ag.next = af.nextLoc, "return" !== ag.method && (ag.method = "next", ag.arg = B), ag.delegate = null, W) : am : (ag.method = "throw", ag.arg = new TypeError("iterator result is not an object"), ag.delegate = null, W);
      }
    }
    function a8(af) {
      {
        var ah = {
          tryLoc: af[0]
        };
        1 in af && (ah.catchLoc = af[1]);
        2 in af && (ah.finallyLoc = af[2], ah.afterLoc = af[3]);
        this.tryEntries.push(ah);
      }
    }
    function a9(af) {
      {
        var ag = af.completion || {};
        ag.type = "normal";
        delete ag.arg;
        af.completion = ag;
      }
    }
    function aa(af) {
      {
        var ag = {
          tryLoc: "root"
        };
        this.tryEntries = [ag];
        af.forEach(a8, this);
        this.reset(true);
      }
    }
    function ab(af) {
      {
        if (af || "" === af) {
          {
            var ah = af[I];
            if (ah) {
              return ah.call(af);
            }
            if ("function" == typeof af.next) {
              return af;
            }
            if (!isNaN(af.length)) {
              {
                var ai = -1;
                var aj = function al() {
                  {
                    for (; ++ai < af.length;) {
                      if (F.call(af, ai)) {
                        al.value = af[ai];
                        al.done = false;
                        return al;
                      }
                    }
                    al.value = B;
                    al.done = true;
                    return al;
                  }
                };
                return aj.next = aj;
              }
            }
          }
        }
        throw new TypeError(b(af) + " is not iterable");
      }
    }
    Y.prototype = Z;
    G(a3, "constructor", {
      value: Z,
      configurable: true
    });
    G(Z, "constructor", {
      value: Y,
      configurable: true
    });
    Y.displayName = M(Z, K, "GeneratorFunction");
    C.isGeneratorFunction = function (af) {
      {
        var ah = "function" == typeof af && af.constructor;
        return !!ah && (ah === Y || "GeneratorFunction" === (ah.displayName || ah.name));
      }
    };
    C.mark = function (af) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(af, Z) : (af.__proto__ = Z, M(af, K, "GeneratorFunction"));
        af.prototype = Object.create(a3);
        return af;
      }
    };
    C.awrap = function (af) {
      {
        var ag = {
          __await: af
        };
        return ag;
      }
    };
    a4(a5.prototype);
    M(a5.prototype, J, function () {
      {
        return this;
      }
    });
    C.AsyncIterator = a5;
    C.async = function (af, ag, ah, ai, aj) {
      {
        undefined === aj && (aj = Promise);
        var al = new a5(N(af, ag, ah, ai), aj);
        return C.isGeneratorFunction(ag) ? al : al.next().then(function (am) {
          return am.done ? am.value : al.next();
        });
      }
    };
    a4(a3);
    M(a3, K, "Generator");
    M(a3, I, function () {
      {
        return this;
      }
    });
    M(a3, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    C.keys = function (af) {
      {
        var ah = Object(af);
        var ai = [];
        for (var aj in ah) ai.push(aj);
        ai.reverse();
        return function ak() {
          {
            for (; ai.length;) {
              {
                var am = ai.pop();
                if (am in ah) {
                  ak.value = am;
                  ak.done = false;
                  return ak;
                }
              }
            }
            ak.done = true;
            return ak;
          }
        };
      }
    };
    C.values = ab;
    aa.prototype = {
      constructor: aa,
      reset: function (af) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = B, this.done = false, this.delegate = null, this.method = "next", this.arg = B, this.tryEntries.forEach(a9), !af) {
            for (var ag in this) "t" === ag.charAt(0) && F.call(this, ag) && !isNaN(+ag.slice(1)) && (this[ag] = B);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var ag = this.tryEntries[0].completion;
          if ("throw" === ag.type) {
            throw ag.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (af) {
        {
          if (this.done) {
            throw af;
          }
          var ah = this;
          function ao(ap, aq) {
            {
              ak.type = "throw";
              ak.arg = af;
              ah.next = ap;
              aq && (ah.method = "next", ah.arg = B);
              return !!aq;
            }
          }
          for (var ai = this.tryEntries.length - 1; ai >= 0; --ai) {
            {
              var aj = this.tryEntries[ai];
              var ak = aj.completion;
              if ("root" === aj.tryLoc) {
                return ao("end");
              }
              if (aj.tryLoc <= this.prev) {
                {
                  var al = F.call(aj, "catchLoc");
                  var am = F.call(aj, "finallyLoc");
                  if (al && am) {
                    {
                      if (this.prev < aj.catchLoc) {
                        return ao(aj.catchLoc, true);
                      }
                      if (this.prev < aj.finallyLoc) {
                        return ao(aj.finallyLoc);
                      }
                    }
                  } else {
                    if (al) {
                      {
                        if (this.prev < aj.catchLoc) {
                          return ao(aj.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!am) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aj.finallyLoc) {
                          return ao(aj.finallyLoc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (af, ag) {
        {
          for (var ai = this.tryEntries.length - 1; ai >= 0; --ai) {
            {
              var aj = this.tryEntries[ai];
              if (aj.tryLoc <= this.prev && F.call(aj, "finallyLoc") && this.prev < aj.finallyLoc) {
                {
                  var ak = aj;
                  break;
                }
              }
            }
          }
          ak && ("break" === af || "continue" === af) && ak.tryLoc <= ag && ag <= ak.finallyLoc && (ak = null);
          var al = ak ? ak.completion : {};
          al.type = af;
          al.arg = ag;
          return ak ? (this.method = "next", this.next = ak.finallyLoc, W) : this.complete(al);
        }
      },
      complete: function (af, ag) {
        {
          if ("throw" === af.type) {
            throw af.arg;
          }
          "break" === af.type || "continue" === af.type ? this.next = af.arg : "return" === af.type ? (this.rval = this.arg = af.arg, this.method = "return", this.next = "end") : "normal" === af.type && ag && (this.next = ag);
          return W;
        }
      },
      finish: function (af) {
        {
          for (var ah = this.tryEntries.length - 1; ah >= 0; --ah) {
            {
              var ai = this.tryEntries[ah];
              if (ai.finallyLoc === af) {
                this.complete(ai.completion, ai.afterLoc);
                a9(ai);
                return W;
              }
            }
          }
        }
      },
      catch: function (af) {
        {
          for (var ai = this.tryEntries.length - 1; ai >= 0; --ai) {
            {
              var aj = this.tryEntries[ai];
              if (aj.tryLoc === af) {
                {
                  var ak = aj.completion;
                  if ("throw" === ak.type) {
                    {
                      var al = ak.arg;
                      a9(aj);
                    }
                  }
                  return al;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (af, ag, ah) {
        this.delegate = {
          iterator: ab(af),
          resultName: ag,
          nextLoc: ah
        };
        "next" === this.method && (this.arg = B);
        return W;
      }
    };
    return C;
  }
  function d(r, s) {
    return g(r) || f(r, s) || i(r, s) || e();
  }
  function e() {
    {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
  }
  function f(s, v) {
    {
      var x = null == s ? null : "undefined" != typeof Symbol && s[Symbol.iterator] || s["@@iterator"];
      if (null != x) {
        {
          var y;
          var z;
          var A;
          var B;
          var C = [];
          var D = true;
          var E = false;
          try {
            {
              if (A = (x = x.call(s)).next, 0 === v) {
                {
                  if (Object(x) !== x) {
                    return;
                  }
                  D = false;
                }
              } else {
                for (; !(D = (y = A.call(x)).done) && (C.push(y.value), C.length !== v); D = true) {}
              }
            }
          } catch (I) {
            E = true;
            z = I;
          } finally {
            {
              try {
                {
                  if (!D && null != x.return && (B = x.return(), Object(B) !== B)) {
                    return;
                  }
                }
              } finally {
                {
                  if (E) {
                    throw z;
                  }
                }
              }
            }
          }
          return C;
        }
      }
    }
  }
  function g(r) {
    {
      if (Array.isArray(r)) {
        return r;
      }
    }
  }
  function h(s, v) {
    var w = {
      GtRoN: function (D, E) {
        return D - E;
      },
      sCXsF: function (D, E) {
        return D >= E;
      },
      lqUBs: function (D, E) {
        return D === E;
      },
      LXDYy: function (D, E) {
        return D(E);
      },
      FMidc: "illegal catch attempt",
      nMfye: function (D, E) {
        return D === E;
      },
      luiNt: "throw",
      qcAig: "return",
      uJkce: function (D, E, F) {
        return D(E, F);
      },
      mACMC: function (D, E) {
        return D !== E;
      },
      ghgAx: function (D, E) {
        return D + E;
      },
      PBxFH: "The iterator does not provide a '",
      fWshv: "' method",
      bKQDP: function (D, E, F, G) {
        return D(E, F, G);
      },
      iDgvk: "next",
      sCvKR: "iterator result is not an object",
      nYWfv: "pZRDO",
      RxBqm: "GeneratorFunction"
    };
    var x = "undefined" != typeof Symbol && s[Symbol.iterator] || s["@@iterator"];
    if (!x) {
      {
        if (Array.isArray(s) || (x = i(s)) || v && s && "number" == typeof s.length) {
          {
            x && (s = x);
            var y = 0;
            var z = function () {};
            return {
              s: z,
              n: function () {
                {
                  var G = {
                    done: true
                  };
                  return y >= s.length ? G : {
                    done: false,
                    value: s[y++]
                  };
                }
              },
              e: function (F) {
                {
                  throw F;
                }
              },
              f: z
            };
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
    }
    var A;
    var B = true;
    var C = false;
    return {
      s: function () {
        {
          x = x.call(s);
        }
      },
      n: function () {
        {
          var F = x.next();
          B = F.done;
          return F;
        }
      },
      e: function (F) {
        C = true;
        A = F;
      },
      f: function () {
        try {
          B || null == x.return || x.return();
        } finally {
          if (C) {
            throw A;
          }
        }
      }
    };
  }
  function i(s, u) {
    if (s) {
      if ("string" == typeof s) {
        return j(s, u);
      }
      var v = {}.toString.call(s).slice(8, -1);
      "Object" === v && s.constructor && (v = s.constructor.name);
      return "Map" === v || "Set" === v ? Array.from(s) : "Arguments" === v || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v) ? j(s, u) : undefined;
    }
  }
  function j(s, u) {
    (null == u || u > s.length) && (u = s.length);
    for (var v = 0, w = Array(u); v < u; v++) {
      w[v] = s[v];
    }
    return w;
  }
  function k(s, v, w, x, y, z, A) {
    try {
      var B = s[z](A);
      var C = B.value;
    } catch (D) {
      return void w(D);
    }
    B.done ? v(C) : Promise.resolve(C).then(x, y);
  }
  function l(r) {
    return function () {
      var w = this;
      var x = arguments;
      return new Promise(function (y, z) {
        var A = r.apply(w, x);
        function B(D) {
          k(A, y, z, B, C, "next", D);
        }
        function C(D) {
          k(A, y, z, B, C, "throw", D);
        }
        B(undefined);
      });
    };
  }
  var m = "VyODgyMjMzHuAZGlmZmMDkdOG=";
  function n() {
    var s = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 10;
    var u = new Date();
    u.setFullYear(u.getFullYear() + s);
    var v = u.getFullYear();
    var w = String(u.getMonth() + 1).padStart(2, "0");
    var x = String(u.getDate()).padStart(2, "0");
    return "".concat(v, "-").concat(w, "-").concat(x);
  }
  function o(s, u) {
    var v = m + s + "1";
    return u.MD5(v).toString();
  }
  function p() {
    return q.apply(this, arguments);
  }
  function q() {
    q = l(c().mark(function r() {
      var u;
      var v;
      var w;
      return c().wrap(function x(y) {
        for (;;) {
          switch (y.prev = y.next) {
            case 0:
              if (w = (null === (u = (v = $).getdata) || undefined === u ? undefined : u.call(v, "Utils_Code")) || "", !w || !w.length) {
                y.next = 4;
                break;
              }
              eval(w);
              return y.abrupt("return", creatUtils());
            case 4:
              return y.abrupt("return", new Promise(function (A) {
                $.getScript("https://cdn.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Utils.js").then(function (C) {
                  var D;
                  var E;
                  null === (D = (E = $).setdata) || undefined === D || D.call(E, C, "Utils_Code");
                  eval(C);
                  A(creatUtils());
                });
              }));
            case 5:
            case "end":
              return y.stop();
          }
        }
      }, r);
    }));
    return q.apply(this, arguments);
  }
  l(c().mark(function r() {
    var w;
    var x;
    var z;
    var A;
    var B;
    var C;
    var D;
    var E;
    var F;
    var G;
    var H;
    var I;
    var J;
    var K;
    var L;
    var M;
    var N;
    var O;
    return c().wrap(function (P) {
      for (;;) {
        switch (P.prev = P.next) {
          case 0:
            P.prev = 0;
            w = $request.url;
            x = $request.body || "";
            P.next = 5;
            return p();
          case 5:
            if (z = P.sent, z) {
              P.next = 9;
              break;
            }
            $done({});
            return P.abrupt("return");
          case 9:
            if (A = z.createCryptoJS(), B = {}, C = "", !w.includes("/XMGetMeCount.ashx")) {
              P.next = 44;
              break;
            }
            if (D = "", !x) {
              P.next = 35;
              break;
            }
            E = x.split("&");
            F = h(E);
            P.prev = 17;
            F.s();
          case 19:
            if ((G = F.n()).done) {
              P.next = 27;
              break;
            }
            if (H = G.value, I = H.split("="), J = d(I, 2), K = J[0], L = J[1], "imei" !== K) {
              P.next = 25;
              break;
            }
            D = decodeURIComponent(L);
            return P.abrupt("break", 27);
          case 25:
            P.next = 19;
            break;
          case 27:
            P.next = 32;
            break;
          case 29:
            P.prev = 29;
            P.t0 = P.catch(17);
            F.e(P.t0);
          case 32:
            P.prev = 32;
            F.f();
            return P.finish(32);
          case 35:
            if (D) {
              P.next = 38;
              break;
            }
            $done({});
            return P.abrupt("return");
          case 38:
            M = o(D, A);
            N = n(10);
            B = {
              des: "永久会员",
              result: {
                Token: M,
                VipEnd: N,
                VipEndDes: "永久会员"
              },
              code: 1
            };
            C = JSON.stringify(B);
            P.next = 46;
            break;
          case 44:
            $done({});
            return P.abrupt("return");
          case 46:
            O = {
              "Content-Type": "application/json; charset=utf-8",
              Date: new Date().toUTCString(),
              Connection: "keep-alive",
              "Content-Length": String(C.length)
            };
            "undefined" != typeof $httpClient ? $done({
              response: {
                status: 200,
                headers: O,
                body: C
              }
            }) : $done({
              status: "HTTP/1.1 200 OK",
              headers: O,
              body: C
            });
            P.next = 53;
            break;
          case 50:
            P.prev = 50;
            P.t1 = P.catch(0);
            $done({});
          case 53:
          case "end":
            return P.stop();
        }
      }
    }, r, null, [[0, 50], [17, 29, 32, 35]]);
  }))();
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, a) => {
        s.call(this, t, (t, s, r) => {
          t ? a(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const a = this.getdata(t);
      if (a) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, a) => e(a));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let a = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        a = a ? a.replace(/\n/g, "").trim() : a;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [i, o] = a.split("@");
        const n = {
          url: `http://${o}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": i,
            Accept: "*/*"
          },
          timeout: r
        };
        this.post(n, (t, e, a) => s(a));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const a = !s && this.fs.existsSync(e);
        if (!s && !a) {
          return {};
        }
        {
          const a = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(a));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const a = !s && this.fs.existsSync(e);
        const r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : a ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const a = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of a) if (r = Object(r)[t], undefined === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, a) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[a + 1]) >> 0 == +e[a + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, a] = /^@(.*?)\.(.*?)$/.exec(t);
        const r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, a, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, a, r] = /^@(.*?)\.(.*?)$/.exec(e);
        const i = this.getval(a);
        const o = a ? "null" === i ? null : i || "{}" : "{}";
        try {
          const e = JSON.parse(o);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), a);
        } catch (e) {
          const i = {};
          this.lodash_set(i, r, t);
          s = this.setval(JSON.stringify(i), a);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
              statusCode: a,
              statusCode: r,
              headers: i,
              rawBody: o
            } = t;
            const n = s.decode(o, this.encoding);
            e(null, {
              status: a,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: a,
              response: r
            } = t;
            e(a, r, r && s.decode(r.rawBody, this.encoding));
          });
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let a = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: r,
            ...i
          } = t;
          this.got[s](r, i).then(t => {
            const {
              statusCode: s,
              statusCode: r,
              headers: i,
              rawBody: o
            } = t;
            const n = a.decode(o, this.encoding);
            e(null, {
              status: s,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: r
            } = t;
            e(s, r, r && a.decode(r.rawBody, this.encoding));
          });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let a = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in a) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[e] : ("00" + a[e]).substr(("" + a[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let a = t[s];
        null != a && "" !== a && ("object" == typeof a && (a = JSON.stringify(a)), e += `${s}=${a}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", a = "", r) {
      const i = t => {
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  let e = t.url || t.openUrl || t["open-url"];
                  return {
                    url: e
                  };
                }
              case "Loon":
                {
                  let e = t.openUrl || t.url || t["open-url"];
                  let s = t.mediaUrl || t["media-url"];
                  return {
                    openUrl: e,
                    mediaUrl: s
                  };
                }
              case "Quantumult X":
                {
                  let e = t["open-url"] || t.url || t.openUrl;
                  let s = t["media-url"] || t.mediaUrl;
                  let a = t["update-pasteboard"] || t.updatePasteboard;
                  return {
                    "open-url": e,
                    "media-url": s,
                    "update-pasteboard": a
                  };
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, a, i(r));
            break;
          case "Quantumult X":
            $notify(e, s, a, i(r));
            break;
          case "Node.js":
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        a && t.push(a);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, t.stack);
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime();
      const s = (e - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}