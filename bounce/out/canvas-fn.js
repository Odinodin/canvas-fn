;(function(){
var f, aa = this;
function n(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
var ba = "closure_uid_" + (1E9 * Math.random() >>> 0), ca = 0;
function da(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ea(a, b) {
  null != a && this.append.apply(this, arguments);
}
ea.prototype.na = "";
ea.prototype.append = function(a, b, c) {
  this.na += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.na += arguments[d];
    }
  }
  return this;
};
ea.prototype.toString = function() {
  return this.na;
};
var fa = null;
function ga() {
  return new ia(null, 5, [ja, !0, ka, !0, la, !1, ma, !1, na, null], null);
}
function r(a) {
  return null != a && !1 !== a;
}
function s(a, b) {
  return a[n(null == b ? null : b)] ? !0 : a._ ? !0 : t ? !1 : null;
}
function oa(a) {
  return null == a ? null : a.constructor;
}
function u(a, b) {
  var c = oa(b), c = r(r(c) ? c.jb : c) ? c.ib : n(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function pa(a) {
  var b = a.ib;
  return r(b) ? b : "" + w(a);
}
function x(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var qa = {}, ra = {};
function sa(a) {
  if (a ? a.A : a) {
    return a.A(a);
  }
  var b;
  b = sa[n(null == a ? null : a)];
  if (!b && (b = sa._, !b)) {
    throw u("ICounted.-count", a);
  }
  return b.call(null, a);
}
function ta(a, b) {
  if (a ? a.F : a) {
    return a.F(a, b);
  }
  var c;
  c = ta[n(null == a ? null : a)];
  if (!c && (c = ta._, !c)) {
    throw u("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var va = {}, y = function() {
  function a(a, b, c) {
    if (a ? a.M : a) {
      return a.M(a, b, c);
    }
    var h;
    h = y[n(null == a ? null : a)];
    if (!h && (h = y._, !h)) {
      throw u("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.C : a) {
      return a.C(a, b);
    }
    var c;
    c = y[n(null == a ? null : a)];
    if (!c && (c = y._, !c)) {
      throw u("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), wa = {};
function z(a) {
  if (a ? a.P : a) {
    return a.P(a);
  }
  var b;
  b = z[n(null == a ? null : a)];
  if (!b && (b = z._, !b)) {
    throw u("ISeq.-first", a);
  }
  return b.call(null, a);
}
function A(a) {
  if (a ? a.R : a) {
    return a.R(a);
  }
  var b;
  b = A[n(null == a ? null : a)];
  if (!b && (b = A._, !b)) {
    throw u("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var xa = {}, ya = function() {
  function a(a, b, c) {
    if (a ? a.I : a) {
      return a.I(a, b, c);
    }
    var h;
    h = ya[n(null == a ? null : a)];
    if (!h && (h = ya._, !h)) {
      throw u("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.H : a) {
      return a.H(a, b);
    }
    var c;
    c = ya[n(null == a ? null : a)];
    if (!c && (c = ya._, !c)) {
      throw u("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function za(a, b, c) {
  if (a ? a.oa : a) {
    return a.oa(a, b, c);
  }
  var d;
  d = za[n(null == a ? null : a)];
  if (!d && (d = za._, !d)) {
    throw u("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Aa = {}, Ba = {};
function Ca(a) {
  if (a ? a.Wa : a) {
    return a.Wa();
  }
  var b;
  b = Ca[n(null == a ? null : a)];
  if (!b && (b = Ca._, !b)) {
    throw u("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Da(a) {
  if (a ? a.Xa : a) {
    return a.Xa();
  }
  var b;
  b = Da[n(null == a ? null : a)];
  if (!b && (b = Da._, !b)) {
    throw u("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ea = {};
function Fa(a, b, c) {
  if (a ? a.Ua : a) {
    return a.Ua(a, b, c);
  }
  var d;
  d = Fa[n(null == a ? null : a)];
  if (!d && (d = Fa._, !d)) {
    throw u("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Ga(a) {
  if (a ? a.bb : a) {
    return a.state;
  }
  var b;
  b = Ga[n(null == a ? null : a)];
  if (!b && (b = Ga._, !b)) {
    throw u("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Ha = {};
function Ia(a) {
  if (a ? a.J : a) {
    return a.J(a);
  }
  var b;
  b = Ia[n(null == a ? null : a)];
  if (!b && (b = Ia._, !b)) {
    throw u("IMeta.-meta", a);
  }
  return b.call(null, a);
}
function Ja(a, b) {
  if (a ? a.L : a) {
    return a.L(a, b);
  }
  var c;
  c = Ja[n(null == a ? null : a)];
  if (!c && (c = Ja._, !c)) {
    throw u("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Ka = {}, La = function() {
  function a(a, b, c) {
    if (a ? a.O : a) {
      return a.O(a, b, c);
    }
    var h;
    h = La[n(null == a ? null : a)];
    if (!h && (h = La._, !h)) {
      throw u("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.N : a) {
      return a.N(a, b);
    }
    var c;
    c = La[n(null == a ? null : a)];
    if (!c && (c = La._, !c)) {
      throw u("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Ma(a, b) {
  if (a ? a.s : a) {
    return a.s(a, b);
  }
  var c;
  c = Ma[n(null == a ? null : a)];
  if (!c && (c = Ma._, !c)) {
    throw u("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function Na(a) {
  if (a ? a.v : a) {
    return a.v(a);
  }
  var b;
  b = Na[n(null == a ? null : a)];
  if (!b && (b = Na._, !b)) {
    throw u("IHash.-hash", a);
  }
  return b.call(null, a);
}
var Oa = {};
function Pa(a) {
  if (a ? a.w : a) {
    return a.w(a);
  }
  var b;
  b = Pa[n(null == a ? null : a)];
  if (!b && (b = Pa._, !b)) {
    throw u("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var Qa = {};
function B(a, b) {
  if (a ? a.$a : a) {
    return a.$a(0, b);
  }
  var c;
  c = B[n(null == a ? null : a)];
  if (!c && (c = B._, !c)) {
    throw u("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var Ra = {};
function Sa(a, b, c) {
  if (a ? a.t : a) {
    return a.t(a, b, c);
  }
  var d;
  d = Sa[n(null == a ? null : a)];
  if (!d && (d = Sa._, !d)) {
    throw u("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Ta(a, b, c) {
  if (a ? a.Za : a) {
    return a.Za(0, b, c);
  }
  var d;
  d = Ta[n(null == a ? null : a)];
  if (!d && (d = Ta._, !d)) {
    throw u("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function Ua(a) {
  if (a ? a.za : a) {
    return a.za(a);
  }
  var b;
  b = Ua[n(null == a ? null : a)];
  if (!b && (b = Ua._, !b)) {
    throw u("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function Va(a, b) {
  if (a ? a.Aa : a) {
    return a.Aa(a, b);
  }
  var c;
  c = Va[n(null == a ? null : a)];
  if (!c && (c = Va._, !c)) {
    throw u("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function Wa(a) {
  if (a ? a.Ba : a) {
    return a.Ba(a);
  }
  var b;
  b = Wa[n(null == a ? null : a)];
  if (!b && (b = Wa._, !b)) {
    throw u("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Xa(a, b, c) {
  if (a ? a.sa : a) {
    return a.sa(a, b, c);
  }
  var d;
  d = Xa[n(null == a ? null : a)];
  if (!d && (d = Xa._, !d)) {
    throw u("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Ya(a, b, c) {
  if (a ? a.Ya : a) {
    return a.Ya(0, b, c);
  }
  var d;
  d = Ya[n(null == a ? null : a)];
  if (!d && (d = Ya._, !d)) {
    throw u("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Za(a) {
  if (a ? a.Va : a) {
    return a.Va();
  }
  var b;
  b = Za[n(null == a ? null : a)];
  if (!b && (b = Za._, !b)) {
    throw u("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function $a(a) {
  if (a ? a.Ea : a) {
    return a.Ea(a);
  }
  var b;
  b = $a[n(null == a ? null : a)];
  if (!b && (b = $a._, !b)) {
    throw u("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function ab(a) {
  if (a ? a.Fa : a) {
    return a.Fa(a);
  }
  var b;
  b = ab[n(null == a ? null : a)];
  if (!b && (b = ab._, !b)) {
    throw u("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function bb(a) {
  if (a ? a.Da : a) {
    return a.Da(a);
  }
  var b;
  b = bb[n(null == a ? null : a)];
  if (!b && (b = bb._, !b)) {
    throw u("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function cb(a) {
  this.kb = a;
  this.n = 0;
  this.f = 1073741824;
}
cb.prototype.$a = function(a, b) {
  return this.kb.append(b);
};
function D(a) {
  var b = new ea;
  a.t(null, new cb(b), ga());
  return "" + w(b);
}
function db(a, b) {
  if (r(eb.a ? eb.a(a, b) : eb.call(null, a, b))) {
    return 0;
  }
  var c = r(a.G) ? !1 : !0;
  if (r(c ? b.G : c)) {
    return-1;
  }
  if (r(a.G)) {
    if (!r(b.G)) {
      return 1;
    }
    c = fb.a ? fb.a(a.G, b.G) : fb.call(null, a.G, b.G);
    return 0 === c ? fb.a ? fb.a(a.name, b.name) : fb.call(null, a.name, b.name) : c;
  }
  return gb ? fb.a ? fb.a(a.name, b.name) : fb.call(null, a.name, b.name) : null;
}
function hb(a, b, c, d, e) {
  this.G = a;
  this.name = b;
  this.fa = c;
  this.ga = d;
  this.ma = e;
  this.f = 2154168321;
  this.n = 4096;
}
f = hb.prototype;
f.t = function(a, b) {
  return B(b, this.fa);
};
f.v = function() {
  var a = this.ga;
  return null != a ? a : this.ga = a = ib.a ? ib.a(G.d ? G.d(this.G) : G.call(null, this.G), G.d ? G.d(this.name) : G.call(null, this.name)) : ib.call(null, G.d ? G.d(this.G) : G.call(null, this.G), G.d ? G.d(this.name) : G.call(null, this.name));
};
f.L = function(a, b) {
  return new hb(this.G, this.name, this.fa, this.ga, b);
};
f.J = function() {
  return this.ma;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return ya.c(c, this, null);
      case 3:
        return ya.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.d = function(a) {
  return ya.c(a, this, null);
};
f.a = function(a, b) {
  return ya.c(a, this, b);
};
f.s = function(a, b) {
  return b instanceof hb ? this.fa === b.fa : !1;
};
f.toString = function() {
  return this.fa;
};
function H(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 8388608 || a.Ta)) {
    return a.w(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new jb(a, 0);
  }
  if (s(Oa, a)) {
    return Pa(a);
  }
  if (t) {
    throw Error([w(a), w("is not ISeqable")].join(""));
  }
  return null;
}
function I(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 64 || a.ra)) {
    return a.P(null);
  }
  a = H(a);
  return null == a ? null : z(a);
}
function J(a) {
  return null != a ? a && (a.f & 64 || a.ra) ? a.R(null) : (a = H(a)) ? A(a) : K : K;
}
function L(a) {
  return null == a ? null : a && (a.f & 128 || a.rb) ? a.ba(null) : H(J(a));
}
var eb = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || Ma(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (L(e)) {
            a = d, d = I(e), e = L(e);
          } else {
            return b.a(d, I(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.o = 2;
    a.k = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a);
    };
    a.h = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.h(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 2;
  b.k = c.k;
  b.d = function() {
    return!0;
  };
  b.a = a;
  b.h = c.h;
  return b;
}();
ra["null"] = !0;
sa["null"] = function() {
  return 0;
};
Date.prototype.s = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
Ma.number = function(a, b) {
  return a === b;
};
Ha["function"] = !0;
Ia["function"] = function() {
  return null;
};
qa["function"] = !0;
Na._ = function(a) {
  return a[ba] || (a[ba] = ++ca);
};
var kb = function() {
  function a(a, b, c, d) {
    for (var l = sa(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, y.a(a, d)) : b.call(null, c, y.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = sa(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, y.a(a, l)) : b.call(null, c, y.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = sa(a);
    if (0 === c) {
      return b.pa ? "" : b.call(null);
    }
    for (var d = y.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, y.a(a, l)) : b.call(null, d, y.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.j = a;
  return d;
}(), lb = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.pa ? "" : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.j = a;
  return d;
}();
function mb(a) {
  return a ? a.f & 2 || a.ya ? !0 : a.f ? !1 : s(ra, a) : s(ra, a);
}
function nb(a) {
  return a ? a.f & 16 || a.qa ? !0 : a.f ? !1 : s(va, a) : s(va, a);
}
function jb(a, b) {
  this.b = a;
  this.g = b;
  this.n = 0;
  this.f = 166199550;
}
f = jb.prototype;
f.v = function() {
  return ob.d ? ob.d(this) : ob.call(null, this);
};
f.ba = function() {
  return this.g + 1 < this.b.length ? new jb(this.b, this.g + 1) : null;
};
f.F = function(a, b) {
  return N.a ? N.a(b, this) : N.call(null, b, this);
};
f.toString = function() {
  return D(this);
};
f.N = function(a, b) {
  return lb.j(this.b, b, this.b[this.g], this.g + 1);
};
f.O = function(a, b, c) {
  return lb.j(this.b, b, c, this.g);
};
f.w = function() {
  return this;
};
f.A = function() {
  return this.b.length - this.g;
};
f.P = function() {
  return this.b[this.g];
};
f.R = function() {
  return this.g + 1 < this.b.length ? new jb(this.b, this.g + 1) : K;
};
f.s = function(a, b) {
  return O.a ? O.a(this, b) : O.call(null, this, b);
};
f.C = function(a, b) {
  var c = b + this.g;
  return c < this.b.length ? this.b[c] : null;
};
f.M = function(a, b, c) {
  a = b + this.g;
  return a < this.b.length ? this.b[a] : c;
};
var pb = function() {
  function a(a, b) {
    return b < a.length ? new jb(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}(), M = function() {
  function a(a, b) {
    return pb.a(a, b);
  }
  function b(a) {
    return pb.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
Ma._ = function(a, b) {
  return a === b;
};
var qb = function() {
  function a(a, b) {
    return null != a ? ta(a, b) : ta(K, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (r(e)) {
          a = b.a(a, d), d = I(e), e = L(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.o = 2;
    a.k = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a);
    };
    a.h = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.h(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 2;
  b.k = c.k;
  b.a = a;
  b.h = c.h;
  return b;
}();
function Q(a) {
  if (null != a) {
    if (a && (a.f & 2 || a.ya)) {
      a = a.A(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (s(ra, a)) {
            a = sa(a);
          } else {
            if (t) {
              a: {
                a = H(a);
                for (var b = 0;;) {
                  if (mb(a)) {
                    a = b + sa(a);
                    break a;
                  }
                  a = L(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var rb = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return H(a) ? I(a) : c;
      }
      if (nb(a)) {
        return y.c(a, b, c);
      }
      if (H(a)) {
        a = L(a), b -= 1;
      } else {
        return t ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (H(a)) {
          return I(a);
        }
        throw Error("Index out of bounds");
      }
      if (nb(a)) {
        return y.a(a, b);
      }
      if (H(a)) {
        var c = L(a), h = b - 1;
        a = c;
        b = h;
      } else {
        if (t) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), sb = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.f & 16 || a.qa)) {
        return a.M(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (s(va, a)) {
        return y.a(a, b);
      }
      if (t) {
        if (a ? a.f & 64 || a.ra || (a.f ? 0 : s(wa, a)) : s(wa, a)) {
          return rb.c(a, b, c);
        }
        throw Error([w("nth not supported on this type "), w(pa(oa(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.f & 16 || a.qa)) {
      return a.C(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (s(va, a)) {
      return y.a(a, b);
    }
    if (t) {
      if (a ? a.f & 64 || a.ra || (a.f ? 0 : s(wa, a)) : s(wa, a)) {
        return rb.a(a, b);
      }
      throw Error([w("nth not supported on this type "), w(pa(oa(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), R = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.cb) ? a.I(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : s(xa, a) ? ya.c(a, b, c) : t ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.cb) ? a.H(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : s(xa, a) ? ya.a(a, b) : null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), vb = function() {
  function a(a, b, c) {
    return null != a ? za(a, b, c) : ub.a ? ub.a([b], [c]) : ub.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = M(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.c(a, d, e), r(l)) {
          d = I(l), e = I(L(l)), l = L(L(l));
        } else {
          return a;
        }
      }
    }
    a.o = 3;
    a.k = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var l = I(a);
      a = J(a);
      return c(b, d, l, a);
    };
    a.h = c;
    return a;
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.h(b, e, g, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 3;
  b.k = c.k;
  b.c = a;
  b.h = c.h;
  return b;
}();
function wb(a) {
  var b = "function" == n(a);
  return b ? b : a ? r(r(null) ? null : a.mb) ? !0 : a.vb ? !1 : s(qa, a) : s(qa, a);
}
function xb(a) {
  var b = null != a;
  return(b ? a ? a.f & 131072 || a.fb || (a.f ? 0 : s(Ha, a)) : s(Ha, a) : b) ? Ia(a) : null;
}
var yb = {}, zb = 0;
function G(a) {
  if (a && (a.f & 4194304 || a.pb)) {
    a = a.v(null);
  } else {
    if ("number" === typeof a) {
      a = Math.floor(a) % 2147483647;
    } else {
      if (!0 === a) {
        a = 1;
      } else {
        if (!1 === a) {
          a = 0;
        } else {
          if ("string" === typeof a) {
            255 < zb && (yb = {}, zb = 0);
            var b = yb[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              yb[a] = b;
              zb += 1;
            }
            a = b;
          } else {
            a = null == a ? 0 : t ? Na(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function Ab(a) {
  return a ? a.f & 16384 || a.tb ? !0 : a.f ? !1 : s(Ea, a) : s(Ea, a);
}
function Bb(a) {
  return a ? a.n & 512 || a.nb ? !0 : !1 : !1;
}
function Cb(a) {
  var b = [];
  da(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function Db(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function Eb(a) {
  return r(a) ? !0 : !1;
}
function fb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (oa(a) === oa(b)) {
    return a && (a.n & 2048 || a.wa) ? a.xa(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (t) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var Fb = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = fb(sb.a(a, h), sb.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var g = Q(a), h = Q(b);
    return g < h ? -1 : g > h ? 1 : t ? c.j(a, b, g, 0) : null;
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.j = a;
  return c;
}(), S = function() {
  function a(a, b, c) {
    for (c = H(c);;) {
      if (c) {
        b = a.a ? a.a(b, I(c)) : a.call(null, b, I(c)), c = L(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = H(b);
    return c ? Gb.c ? Gb.c(a, I(c), L(c)) : Gb.call(null, a, I(c), L(c)) : a.pa ? "" : a.call(null);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Gb = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.hb) ? c.O(null, a, b) : c instanceof Array ? lb.c(c, a, b) : "string" === typeof c ? lb.c(c, a, b) : s(Ka, c) ? La.c(c, a, b) : t ? S.c(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.hb) ? b.N(null, a) : b instanceof Array ? lb.a(b, a) : "string" === typeof b ? lb.a(b, a) : s(Ka, b) ? La.a(b, a) : t ? S.a(a, b) : null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Hb(a) {
  return 0 <= (a - a % 2) / 2 ? Math.floor.d ? Math.floor.d((a - a % 2) / 2) : Math.floor.call(null, (a - a % 2) / 2) : Math.ceil.d ? Math.ceil.d((a - a % 2) / 2) : Math.ceil.call(null, (a - a % 2) / 2);
}
function Ib(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function Jb(a) {
  var b = 1;
  for (a = H(a);;) {
    if (a && 0 < b) {
      b -= 1, a = L(a);
    } else {
      return a;
    }
  }
}
var w = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new ea(b.d(a)), l = d;;) {
        if (r(l)) {
          e = e.append(b.d(I(l))), l = L(l);
        } else {
          return e.toString();
        }
      }
    }
    a.o = 1;
    a.k = function(a) {
      var b = I(a);
      a = J(a);
      return c(b, a);
    };
    a.h = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.h(b, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 1;
  b.k = c.k;
  b.pa = function() {
    return "";
  };
  b.d = a;
  b.h = c.h;
  return b;
}();
function O(a, b) {
  return Eb((b ? b.f & 16777216 || b.sb || (b.f ? 0 : s(Qa, b)) : s(Qa, b)) ? function() {
    for (var c = H(a), d = H(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (eb.a(I(c), I(d))) {
        c = L(c), d = L(d);
      } else {
        return t ? !1 : null;
      }
    }
  }() : null);
}
function ib(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function ob(a) {
  if (H(a)) {
    var b = G(I(a));
    for (a = L(a);;) {
      if (null == a) {
        return b;
      }
      b = ib(b, G(I(a)));
      a = L(a);
    }
  } else {
    return 0;
  }
}
function Kb(a) {
  var b = 0;
  for (a = H(a);;) {
    if (a) {
      var c = I(a), b = (b + (G(T.d ? T.d(c) : T.call(null, c)) ^ G(U.d ? U.d(c) : U.call(null, c)))) % 4503599627370496;
      a = L(a);
    } else {
      return b;
    }
  }
}
function Lb(a, b, c, d, e) {
  this.l = a;
  this.ta = b;
  this.ca = c;
  this.count = d;
  this.i = e;
  this.n = 0;
  this.f = 65937646;
}
f = Lb.prototype;
f.v = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ob(this);
};
f.ba = function() {
  return 1 === this.count ? null : this.ca;
};
f.F = function(a, b) {
  return new Lb(this.l, b, this, this.count + 1, null);
};
f.toString = function() {
  return D(this);
};
f.N = function(a, b) {
  return S.a(b, this);
};
f.O = function(a, b, c) {
  return S.c(b, c, this);
};
f.w = function() {
  return this;
};
f.A = function() {
  return this.count;
};
f.P = function() {
  return this.ta;
};
f.R = function() {
  return 1 === this.count ? K : this.ca;
};
f.s = function(a, b) {
  return O(this, b);
};
f.L = function(a, b) {
  return new Lb(b, this.ta, this.ca, this.count, this.i);
};
f.J = function() {
  return this.l;
};
function Mb(a) {
  this.l = a;
  this.n = 0;
  this.f = 65937614;
}
f = Mb.prototype;
f.v = function() {
  return 0;
};
f.ba = function() {
  return null;
};
f.F = function(a, b) {
  return new Lb(this.l, b, null, 1, null);
};
f.toString = function() {
  return D(this);
};
f.N = function(a, b) {
  return S.a(b, this);
};
f.O = function(a, b, c) {
  return S.c(b, c, this);
};
f.w = function() {
  return null;
};
f.A = function() {
  return 0;
};
f.P = function() {
  return null;
};
f.R = function() {
  return K;
};
f.s = function(a, b) {
  return O(this, b);
};
f.L = function(a, b) {
  return new Mb(b);
};
f.J = function() {
  return this.l;
};
var K = new Mb(null), Nb = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof jb && 0 === a.g) {
      b = a.b;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.P(null)), a = a.ba(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = K;;) {
      if (0 < a) {
        var g = a - 1, e = e.F(null, b[a - 1]);
        a = g;
      } else {
        return e;
      }
    }
  }
  a.o = 0;
  a.k = function(a) {
    a = H(a);
    return b(a);
  };
  a.h = b;
  return a;
}();
function Ob(a, b, c, d) {
  this.l = a;
  this.ta = b;
  this.ca = c;
  this.i = d;
  this.n = 0;
  this.f = 65929452;
}
f = Ob.prototype;
f.v = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ob(this);
};
f.ba = function() {
  return null == this.ca ? null : H(this.ca);
};
f.F = function(a, b) {
  return new Ob(null, b, this, this.i);
};
f.toString = function() {
  return D(this);
};
f.N = function(a, b) {
  return S.a(b, this);
};
f.O = function(a, b, c) {
  return S.c(b, c, this);
};
f.w = function() {
  return this;
};
f.P = function() {
  return this.ta;
};
f.R = function() {
  return null == this.ca ? K : this.ca;
};
f.s = function(a, b) {
  return O(this, b);
};
f.L = function(a, b) {
  return new Ob(b, this.ta, this.ca, this.i);
};
f.J = function() {
  return this.l;
};
function N(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.ra)) ? new Ob(null, a, b, null) : new Ob(null, a, H(b), null);
}
function V(a, b, c, d) {
  this.G = a;
  this.name = b;
  this.ea = c;
  this.ga = d;
  this.f = 2153775105;
  this.n = 4096;
}
f = V.prototype;
f.t = function(a, b) {
  return B(b, [w(":"), w(this.ea)].join(""));
};
f.v = function() {
  null == this.ga && (this.ga = ib(G(this.G), G(this.name)) + 2654435769);
  return this.ga;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return R.a(c, this);
      case 3:
        return R.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.d = function(a) {
  return R.a(a, this);
};
f.a = function(a, b) {
  return R.c(a, this, b);
};
f.s = function(a, b) {
  return b instanceof V ? this.ea === b.ea : !1;
};
f.toString = function() {
  return[w(":"), w(this.ea)].join("");
};
var Qb = function() {
  function a(a, b) {
    return new V(a, b, [w(r(a) ? [w(a), w("/")].join("") : null), w(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof V) {
      return a;
    }
    if (a instanceof hb) {
      var b;
      if (a && (a.n & 4096 || a.gb)) {
        b = a.G;
      } else {
        throw Error([w("Doesn't support namespace: "), w(a)].join(""));
      }
      return new V(b, Pb.d ? Pb.d(a) : Pb.call(null, a), a.fa, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new V(b[0], b[1], a, null) : new V(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
function Rb(a, b, c, d) {
  this.l = a;
  this.ua = b;
  this.p = c;
  this.i = d;
  this.n = 0;
  this.f = 32374988;
}
f = Rb.prototype;
f.v = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ob(this);
};
f.ba = function() {
  Pa(this);
  return null == this.p ? null : L(this.p);
};
f.F = function(a, b) {
  return N(b, this);
};
f.toString = function() {
  return D(this);
};
function Sb(a) {
  null != a.ua && (a.p = a.ua.pa ? "" : a.ua.call(null), a.ua = null);
  return a.p;
}
f.N = function(a, b) {
  return S.a(b, this);
};
f.O = function(a, b, c) {
  return S.c(b, c, this);
};
f.w = function() {
  Sb(this);
  if (null == this.p) {
    return null;
  }
  for (var a = this.p;;) {
    if (a instanceof Rb) {
      a = Sb(a);
    } else {
      return this.p = a, H(this.p);
    }
  }
};
f.P = function() {
  Pa(this);
  return null == this.p ? null : I(this.p);
};
f.R = function() {
  Pa(this);
  return null != this.p ? J(this.p) : K;
};
f.s = function(a, b) {
  return O(this, b);
};
f.L = function(a, b) {
  return new Rb(b, this.ua, this.p, this.i);
};
f.J = function() {
  return this.l;
};
function Tb(a, b) {
  this.Ca = a;
  this.end = b;
  this.n = 0;
  this.f = 2;
}
Tb.prototype.A = function() {
  return this.end;
};
Tb.prototype.add = function(a) {
  this.Ca[this.end] = a;
  return this.end += 1;
};
Tb.prototype.aa = function() {
  var a = new Ub(this.Ca, 0, this.end);
  this.Ca = null;
  return a;
};
function Ub(a, b, c) {
  this.b = a;
  this.q = b;
  this.end = c;
  this.n = 0;
  this.f = 524306;
}
f = Ub.prototype;
f.N = function(a, b) {
  return lb.j(this.b, b, this.b[this.q], this.q + 1);
};
f.O = function(a, b, c) {
  return lb.j(this.b, b, c, this.q);
};
f.Va = function() {
  if (this.q === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Ub(this.b, this.q + 1, this.end);
};
f.C = function(a, b) {
  return this.b[this.q + b];
};
f.M = function(a, b, c) {
  return 0 <= b && b < this.end - this.q ? this.b[this.q + b] : c;
};
f.A = function() {
  return this.end - this.q;
};
var Vb = function() {
  function a(a, b, c) {
    return new Ub(a, b, c);
  }
  function b(a, b) {
    return new Ub(a, b, a.length);
  }
  function c(a) {
    return new Ub(a, 0, a.length);
  }
  var d = null, d = function(d, g, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, g);
      case 3:
        return a.call(this, d, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.d = c;
  d.a = b;
  d.c = a;
  return d;
}();
function Wb(a, b, c, d) {
  this.aa = a;
  this.Y = b;
  this.l = c;
  this.i = d;
  this.f = 31850732;
  this.n = 1536;
}
f = Wb.prototype;
f.v = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ob(this);
};
f.ba = function() {
  if (1 < sa(this.aa)) {
    return new Wb(Za(this.aa), this.Y, this.l, null);
  }
  var a = Pa(this.Y);
  return null == a ? null : a;
};
f.F = function(a, b) {
  return N(b, this);
};
f.toString = function() {
  return D(this);
};
f.w = function() {
  return this;
};
f.P = function() {
  return y.a(this.aa, 0);
};
f.R = function() {
  return 1 < sa(this.aa) ? new Wb(Za(this.aa), this.Y, this.l, null) : null == this.Y ? K : this.Y;
};
f.Da = function() {
  return null == this.Y ? null : this.Y;
};
f.s = function(a, b) {
  return O(this, b);
};
f.L = function(a, b) {
  return new Wb(this.aa, this.Y, b, this.i);
};
f.J = function() {
  return this.l;
};
f.Ea = function() {
  return this.aa;
};
f.Fa = function() {
  return null == this.Y ? K : this.Y;
};
function Xb(a) {
  for (var b = [];;) {
    if (H(a)) {
      b.push(I(a)), a = L(a);
    } else {
      return b;
    }
  }
}
function Yb(a, b) {
  if (mb(a)) {
    return Q(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && H(c)) {
      c = L(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var $b = function Zb(b) {
  return null == b ? null : null == L(b) ? H(I(b)) : t ? N(I(b), Zb(L(b))) : null;
}, ac = function() {
  function a(a, b, c, d) {
    return N(a, N(b, N(c, d)));
  }
  function b(a, b, c) {
    return N(a, N(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, p) {
      var q = null;
      4 < arguments.length && (q = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, q);
    }
    function b(a, c, d, e, g) {
      return N(a, N(c, N(d, N(e, $b(g)))));
    }
    a.o = 4;
    a.k = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var p = I(a);
      a = J(a);
      return b(c, d, e, p, a);
    };
    a.h = b;
    return a;
  }(), c = function(c, g, h, k, l) {
    switch(arguments.length) {
      case 1:
        return H(c);
      case 2:
        return N(c, g);
      case 3:
        return b.call(this, c, g, h);
      case 4:
        return a.call(this, c, g, h, k);
      default:
        return d.h(c, g, h, k, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.o = 4;
  c.k = d.k;
  c.d = function(a) {
    return H(a);
  };
  c.a = function(a, b) {
    return N(a, b);
  };
  c.c = b;
  c.j = a;
  c.h = d.h;
  return c;
}();
function bc(a, b, c) {
  var d = H(c);
  if (0 === b) {
    return a.pa ? "" : a.call(null);
  }
  c = z(d);
  var e = A(d);
  if (1 === b) {
    return a.d ? a.d(c) : a.d ? a.d(c) : a.call(null, c);
  }
  var d = z(e), g = A(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = z(g), h = A(g);
  if (3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e);
  }
  var g = z(h), k = A(h);
  if (4 === b) {
    return a.j ? a.j(c, d, e, g) : a.j ? a.j(c, d, e, g) : a.call(null, c, d, e, g);
  }
  h = z(k);
  k = A(k);
  if (5 === b) {
    return a.B ? a.B(c, d, e, g, h) : a.B ? a.B(c, d, e, g, h) : a.call(null, c, d, e, g, h);
  }
  a = z(k);
  var l = A(k);
  if (6 === b) {
    return a.U ? a.U(c, d, e, g, h, a) : a.U ? a.U(c, d, e, g, h, a) : a.call(null, c, d, e, g, h, a);
  }
  var k = z(l), m = A(l);
  if (7 === b) {
    return a.ja ? a.ja(c, d, e, g, h, a, k) : a.ja ? a.ja(c, d, e, g, h, a, k) : a.call(null, c, d, e, g, h, a, k);
  }
  var l = z(m), p = A(m);
  if (8 === b) {
    return a.Ra ? a.Ra(c, d, e, g, h, a, k, l) : a.Ra ? a.Ra(c, d, e, g, h, a, k, l) : a.call(null, c, d, e, g, h, a, k, l);
  }
  var m = z(p), q = A(p);
  if (9 === b) {
    return a.Sa ? a.Sa(c, d, e, g, h, a, k, l, m) : a.Sa ? a.Sa(c, d, e, g, h, a, k, l, m) : a.call(null, c, d, e, g, h, a, k, l, m);
  }
  var p = z(q), v = A(q);
  if (10 === b) {
    return a.Ga ? a.Ga(c, d, e, g, h, a, k, l, m, p) : a.Ga ? a.Ga(c, d, e, g, h, a, k, l, m, p) : a.call(null, c, d, e, g, h, a, k, l, m, p);
  }
  var q = z(v), E = A(v);
  if (11 === b) {
    return a.Ha ? a.Ha(c, d, e, g, h, a, k, l, m, p, q) : a.Ha ? a.Ha(c, d, e, g, h, a, k, l, m, p, q) : a.call(null, c, d, e, g, h, a, k, l, m, p, q);
  }
  var v = z(E), C = A(E);
  if (12 === b) {
    return a.Ia ? a.Ia(c, d, e, g, h, a, k, l, m, p, q, v) : a.Ia ? a.Ia(c, d, e, g, h, a, k, l, m, p, q, v) : a.call(null, c, d, e, g, h, a, k, l, m, p, q, v);
  }
  var E = z(C), F = A(C);
  if (13 === b) {
    return a.Ja ? a.Ja(c, d, e, g, h, a, k, l, m, p, q, v, E) : a.Ja ? a.Ja(c, d, e, g, h, a, k, l, m, p, q, v, E) : a.call(null, c, d, e, g, h, a, k, l, m, p, q, v, E);
  }
  var C = z(F), P = A(F);
  if (14 === b) {
    return a.Ka ? a.Ka(c, d, e, g, h, a, k, l, m, p, q, v, E, C) : a.Ka ? a.Ka(c, d, e, g, h, a, k, l, m, p, q, v, E, C) : a.call(null, c, d, e, g, h, a, k, l, m, p, q, v, E, C);
  }
  var F = z(P), X = A(P);
  if (15 === b) {
    return a.La ? a.La(c, d, e, g, h, a, k, l, m, p, q, v, E, C, F) : a.La ? a.La(c, d, e, g, h, a, k, l, m, p, q, v, E, C, F) : a.call(null, c, d, e, g, h, a, k, l, m, p, q, v, E, C, F);
  }
  var P = z(X), ha = A(X);
  if (16 === b) {
    return a.Ma ? a.Ma(c, d, e, g, h, a, k, l, m, p, q, v, E, C, F, P) : a.Ma ? a.Ma(c, d, e, g, h, a, k, l, m, p, q, v, E, C, F, P) : a.call(null, c, d, e, g, h, a, k, l, m, p, q, v, E, C, F, P);
  }
  var X = z(ha), ua = A(ha);
  if (17 === b) {
    return a.Na ? a.Na(c, d, e, g, h, a, k, l, m, p, q, v, E, C, F, P, X) : a.Na ? a.Na(c, d, e, g, h, a, k, l, m, p, q, v, E, C, F, P, X) : a.call(null, c, d, e, g, h, a, k, l, m, p, q, v, E, C, F, P, X);
  }
  var ha = z(ua), tb = A(ua);
  if (18 === b) {
    return a.Oa ? a.Oa(c, d, e, g, h, a, k, l, m, p, q, v, E, C, F, P, X, ha) : a.Oa ? a.Oa(c, d, e, g, h, a, k, l, m, p, q, v, E, C, F, P, X, ha) : a.call(null, c, d, e, g, h, a, k, l, m, p, q, v, E, C, F, P, X, ha);
  }
  ua = z(tb);
  tb = A(tb);
  if (19 === b) {
    return a.Pa ? a.Pa(c, d, e, g, h, a, k, l, m, p, q, v, E, C, F, P, X, ha, ua) : a.Pa ? a.Pa(c, d, e, g, h, a, k, l, m, p, q, v, E, C, F, P, X, ha, ua) : a.call(null, c, d, e, g, h, a, k, l, m, p, q, v, E, C, F, P, X, ha, ua);
  }
  var mc = z(tb);
  A(tb);
  if (20 === b) {
    return a.Qa ? a.Qa(c, d, e, g, h, a, k, l, m, p, q, v, E, C, F, P, X, ha, ua, mc) : a.Qa ? a.Qa(c, d, e, g, h, a, k, l, m, p, q, v, E, C, F, P, X, ha, ua, mc) : a.call(null, c, d, e, g, h, a, k, l, m, p, q, v, E, C, F, P, X, ha, ua, mc);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var cc = function() {
  function a(a, b, c, d, e) {
    b = ac.j(b, c, d, e);
    c = a.o;
    return a.k ? (d = Yb(b, c + 1), d <= c ? bc(a, d, b) : a.k(b)) : a.apply(a, Xb(b));
  }
  function b(a, b, c, d) {
    b = ac.c(b, c, d);
    c = a.o;
    return a.k ? (d = Yb(b, c + 1), d <= c ? bc(a, d, b) : a.k(b)) : a.apply(a, Xb(b));
  }
  function c(a, b, c) {
    b = ac.a(b, c);
    c = a.o;
    if (a.k) {
      var d = Yb(b, c + 1);
      return d <= c ? bc(a, d, b) : a.k(b);
    }
    return a.apply(a, Xb(b));
  }
  function d(a, b) {
    var c = a.o;
    if (a.k) {
      var d = Yb(b, c + 1);
      return d <= c ? bc(a, d, b) : a.k(b);
    }
    return a.apply(a, Xb(b));
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, E) {
      var C = null;
      5 < arguments.length && (C = M(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, g, h, C);
    }
    function b(a, c, d, e, g, h) {
      c = N(c, N(d, N(e, N(g, $b(h)))));
      d = a.o;
      return a.k ? (e = Yb(c, d + 1), e <= d ? bc(a, e, c) : a.k(c)) : a.apply(a, Xb(c));
    }
    a.o = 5;
    a.k = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var g = I(a);
      a = L(a);
      var h = I(a);
      a = J(a);
      return b(c, d, e, g, h, a);
    };
    a.h = b;
    return a;
  }(), e = function(e, k, l, m, p, q) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, p);
      default:
        return g.h(e, k, l, m, p, M(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.o = 5;
  e.k = g.k;
  e.a = d;
  e.c = c;
  e.j = b;
  e.B = a;
  e.h = g.h;
  return e;
}();
function dc(a, b) {
  for (;;) {
    if (null == H(b)) {
      return!0;
    }
    if (r(a.d ? a.d(I(b)) : a.call(null, I(b)))) {
      var c = a, d = L(b);
      a = c;
      b = d;
    } else {
      return t ? !1 : null;
    }
  }
}
function ec(a) {
  return a;
}
var fc = function() {
  function a(a, b, c, e) {
    return new Rb(null, function() {
      var m = H(b), p = H(c), q = H(e);
      return m && p && q ? N(a.c ? a.c(I(m), I(p), I(q)) : a.call(null, I(m), I(p), I(q)), d.j(a, J(m), J(p), J(q))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Rb(null, function() {
      var e = H(b), m = H(c);
      return e && m ? N(a.a ? a.a(I(e), I(m)) : a.call(null, I(e), I(m)), d.c(a, J(e), J(m))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new Rb(null, function() {
      var c = H(b);
      if (c) {
        if (Bb(c)) {
          for (var e = $a(c), m = Q(e), p = new Tb(Array(m), 0), q = 0;;) {
            if (q < m) {
              var v = a.d ? a.d(y.a(e, q)) : a.call(null, y.a(e, q));
              p.add(v);
              q += 1;
            } else {
              break;
            }
          }
          e = p.aa();
          c = d.a(a, ab(c));
          return 0 === sa(e) ? c : new Wb(e, c, null, null);
        }
        return N(a.d ? a.d(I(c)) : a.call(null, I(c)), d.a(a, J(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, g, q) {
      var v = null;
      4 < arguments.length && (v = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, v);
    }
    function b(a, c, e, g, h) {
      return d.a(function(b) {
        return cc.a(a, b);
      }, function E(a) {
        return new Rb(null, function() {
          var b = d.a(H, a);
          return dc(ec, b) ? N(d.a(I, b), E(d.a(J, b))) : null;
        }, null, null);
      }(qb.h(h, g, M([e, c], 0))));
    }
    a.o = 4;
    a.k = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var g = I(a);
      a = J(a);
      return b(c, d, e, g, a);
    };
    a.h = b;
    return a;
  }(), d = function(d, h, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.h(d, h, k, l, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.o = 4;
  d.k = e.k;
  d.a = c;
  d.c = b;
  d.j = a;
  d.h = e.h;
  return d;
}(), gc = function() {
  function a(a, b, c, d, g, q) {
    var v = sb.c(b, 0, null);
    return(b = Jb(b)) ? vb.c(a, v, e.U(R.a(a, v), b, c, d, g, q)) : vb.c(a, v, c.j ? c.j(R.a(a, v), d, g, q) : c.call(null, R.a(a, v), d, g, q));
  }
  function b(a, b, c, d, g) {
    var q = sb.c(b, 0, null);
    return(b = Jb(b)) ? vb.c(a, q, e.B(R.a(a, q), b, c, d, g)) : vb.c(a, q, c.c ? c.c(R.a(a, q), d, g) : c.call(null, R.a(a, q), d, g));
  }
  function c(a, b, c, d) {
    var g = sb.c(b, 0, null);
    return(b = Jb(b)) ? vb.c(a, g, e.j(R.a(a, g), b, c, d)) : vb.c(a, g, c.a ? c.a(R.a(a, g), d) : c.call(null, R.a(a, g), d));
  }
  function d(a, b, c) {
    var d = sb.c(b, 0, null);
    return(b = Jb(b)) ? vb.c(a, d, e.c(R.a(a, d), b, c)) : vb.c(a, d, c.d ? c.d(R.a(a, d)) : c.call(null, R.a(a, d)));
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, E, C) {
      var F = null;
      6 < arguments.length && (F = M(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, g, h, E, F);
    }
    function b(a, c, d, g, h, k, C) {
      var F = sb.c(c, 0, null);
      return(c = Jb(c)) ? vb.c(a, F, cc.h(e, R.a(a, F), c, d, g, M([h, k, C], 0))) : vb.c(a, F, cc.h(d, R.a(a, F), g, h, k, M([C], 0)));
    }
    a.o = 6;
    a.k = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var g = I(a);
      a = L(a);
      var h = I(a);
      a = L(a);
      var C = I(a);
      a = J(a);
      return b(c, d, e, g, h, C, a);
    };
    a.h = b;
    return a;
  }(), e = function(e, k, l, m, p, q, v) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, m);
      case 5:
        return b.call(this, e, k, l, m, p);
      case 6:
        return a.call(this, e, k, l, m, p, q);
      default:
        return g.h(e, k, l, m, p, q, M(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.o = 6;
  e.k = g.k;
  e.c = d;
  e.j = c;
  e.B = b;
  e.U = a;
  e.h = g.h;
  return e;
}();
function hc(a, b) {
  this.m = a;
  this.b = b;
}
function ic(a) {
  return new hc(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function jc(a) {
  a = a.e;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function kc(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = ic(a);
    d.b[0] = c;
    c = d;
    b -= 5;
  }
}
var nc = function lc(b, c, d, e) {
  var g = new hc(d.m, x(d.b)), h = b.e - 1 >>> c & 31;
  5 === c ? g.b[h] = e : (d = d.b[h], b = null != d ? lc(b, c - 5, d, e) : kc(null, c - 5, e), g.b[h] = b);
  return g;
};
function oc(a, b) {
  throw Error([w("No item "), w(a), w(" in vector of length "), w(b)].join(""));
}
function pc(a, b) {
  if (0 <= b && b < a.e) {
    if (b >= jc(a)) {
      return a.D;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.b[b >>> d & 31], d = e
      } else {
        return c.b;
      }
    }
  } else {
    return oc(b, a.e);
  }
}
var rc = function qc(b, c, d, e, g) {
  var h = new hc(d.m, x(d.b));
  if (0 === c) {
    h.b[e & 31] = g;
  } else {
    var k = e >>> c & 31;
    b = qc(b, c - 5, d.b[k], e, g);
    h.b[k] = b;
  }
  return h;
};
function W(a, b, c, d, e, g) {
  this.l = a;
  this.e = b;
  this.shift = c;
  this.root = d;
  this.D = e;
  this.i = g;
  this.n = 4;
  this.f = 167668511;
}
f = W.prototype;
f.za = function() {
  return new sc(this.e, this.shift, tc.d ? tc.d(this.root) : tc.call(null, this.root), uc.d ? uc.d(this.D) : uc.call(null, this.D));
};
f.v = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ob(this);
};
f.H = function(a, b) {
  return y.c(this, b, null);
};
f.I = function(a, b, c) {
  return y.c(this, b, c);
};
f.oa = function(a, b, c) {
  if (0 <= b && b < this.e) {
    return jc(this) <= b ? (a = x(this.D), a[b & 31] = c, new W(this.l, this.e, this.shift, this.root, a, null)) : new W(this.l, this.e, this.shift, rc(this, this.shift, this.root, b, c), this.D, null);
  }
  if (b === this.e) {
    return ta(this, c);
  }
  if (t) {
    throw Error([w("Index "), w(b), w(" out of bounds  [0,"), w(this.e), w("]")].join(""));
  }
  return null;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.C(null, c);
      case 3:
        return this.M(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.d = function(a) {
  return this.C(null, a);
};
f.a = function(a, b) {
  return this.M(null, a, b);
};
f.F = function(a, b) {
  if (32 > this.e - jc(this)) {
    for (var c = this.D.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.D[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new W(this.l, this.e + 1, this.shift, this.root, d, null);
  }
  c = (d = this.e >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = ic(null), d.b[0] = this.root, e = kc(null, this.shift, new hc(null, this.D)), d.b[1] = e) : d = nc(this, this.shift, this.root, new hc(null, this.D));
  return new W(this.l, this.e + 1, c, d, [b], null);
};
f.Wa = function() {
  return y.a(this, 0);
};
f.Xa = function() {
  return y.a(this, 1);
};
f.toString = function() {
  return D(this);
};
f.N = function(a, b) {
  return kb.a(this, b);
};
f.O = function(a, b, c) {
  return kb.c(this, b, c);
};
f.w = function() {
  return 0 === this.e ? null : 32 > this.e ? M.d(this.D) : t ? Y.c ? Y.c(this, 0, 0) : Y.call(null, this, 0, 0) : null;
};
f.A = function() {
  return this.e;
};
f.Ua = function(a, b, c) {
  return za(this, b, c);
};
f.s = function(a, b) {
  return O(this, b);
};
f.L = function(a, b) {
  return new W(b, this.e, this.shift, this.root, this.D, this.i);
};
f.J = function() {
  return this.l;
};
f.C = function(a, b) {
  return pc(this, b)[b & 31];
};
f.M = function(a, b, c) {
  return 0 <= b && b < this.e ? y.a(this, b) : c;
};
var Z = new hc(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
function vc(a, b, c, d, e, g) {
  this.u = a;
  this.T = b;
  this.g = c;
  this.q = d;
  this.l = e;
  this.i = g;
  this.f = 32243948;
  this.n = 1536;
}
f = vc.prototype;
f.v = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ob(this);
};
f.ba = function() {
  if (this.q + 1 < this.T.length) {
    var a = Y.j ? Y.j(this.u, this.T, this.g, this.q + 1) : Y.call(null, this.u, this.T, this.g, this.q + 1);
    return null == a ? null : a;
  }
  return bb(this);
};
f.F = function(a, b) {
  return N(b, this);
};
f.toString = function() {
  return D(this);
};
f.N = function(a, b) {
  return kb.a(wc.c ? wc.c(this.u, this.g + this.q, Q(this.u)) : wc.call(null, this.u, this.g + this.q, Q(this.u)), b);
};
f.O = function(a, b, c) {
  return kb.c(wc.c ? wc.c(this.u, this.g + this.q, Q(this.u)) : wc.call(null, this.u, this.g + this.q, Q(this.u)), b, c);
};
f.w = function() {
  return this;
};
f.P = function() {
  return this.T[this.q];
};
f.R = function() {
  if (this.q + 1 < this.T.length) {
    var a = Y.j ? Y.j(this.u, this.T, this.g, this.q + 1) : Y.call(null, this.u, this.T, this.g, this.q + 1);
    return null == a ? K : a;
  }
  return ab(this);
};
f.Da = function() {
  var a = this.T.length, a = this.g + a < sa(this.u) ? Y.c ? Y.c(this.u, this.g + a, 0) : Y.call(null, this.u, this.g + a, 0) : null;
  return null == a ? null : a;
};
f.s = function(a, b) {
  return O(this, b);
};
f.L = function(a, b) {
  return Y.B ? Y.B(this.u, this.T, this.g, this.q, b) : Y.call(null, this.u, this.T, this.g, this.q, b);
};
f.Ea = function() {
  return Vb.a(this.T, this.q);
};
f.Fa = function() {
  var a = this.T.length, a = this.g + a < sa(this.u) ? Y.c ? Y.c(this.u, this.g + a, 0) : Y.call(null, this.u, this.g + a, 0) : null;
  return null == a ? K : a;
};
var Y = function() {
  function a(a, b, c, d, l) {
    return new vc(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new vc(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new vc(a, pc(a, b), b, c, null, null);
  }
  var d = null, d = function(d, g, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, g, h);
      case 4:
        return b.call(this, d, g, h, k);
      case 5:
        return a.call(this, d, g, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.j = b;
  d.B = a;
  return d;
}();
function xc(a, b, c, d, e) {
  this.l = a;
  this.Z = b;
  this.start = c;
  this.end = d;
  this.i = e;
  this.n = 0;
  this.f = 32400159;
}
f = xc.prototype;
f.v = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ob(this);
};
f.H = function(a, b) {
  return y.c(this, b, null);
};
f.I = function(a, b, c) {
  return y.c(this, b, c);
};
f.oa = function(a, b, c) {
  var d = this, e = d.start + b;
  return yc.B ? yc.B(d.l, vb.c(d.Z, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : yc.call(null, d.l, vb.c(d.Z, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.C(null, c);
      case 3:
        return this.M(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.d = function(a) {
  return this.C(null, a);
};
f.a = function(a, b) {
  return this.M(null, a, b);
};
f.F = function(a, b) {
  return yc.B ? yc.B(this.l, Fa(this.Z, this.end, b), this.start, this.end + 1, null) : yc.call(null, this.l, Fa(this.Z, this.end, b), this.start, this.end + 1, null);
};
f.toString = function() {
  return D(this);
};
f.N = function(a, b) {
  return kb.a(this, b);
};
f.O = function(a, b, c) {
  return kb.c(this, b, c);
};
f.w = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : N(y.a(a.Z, d), new Rb(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
f.A = function() {
  return this.end - this.start;
};
f.Ua = function(a, b, c) {
  return za(this, b, c);
};
f.s = function(a, b) {
  return O(this, b);
};
f.L = function(a, b) {
  return yc.B ? yc.B(b, this.Z, this.start, this.end, this.i) : yc.call(null, b, this.Z, this.start, this.end, this.i);
};
f.J = function() {
  return this.l;
};
f.C = function(a, b) {
  return 0 > b || this.end <= this.start + b ? oc(b, this.end - this.start) : y.a(this.Z, this.start + b);
};
f.M = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : y.c(this.Z, this.start + b, c);
};
function yc(a, b, c, d, e) {
  for (;;) {
    if (b instanceof xc) {
      c = b.start + c, d = b.start + d, b = b.Z;
    } else {
      var g = Q(b);
      if (0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new xc(a, b, c, d, e);
    }
  }
}
var wc = function() {
  function a(a, b, c) {
    return yc(null, a, b, c, null);
  }
  function b(a, b) {
    return c.c(a, b, Q(a));
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function tc(a) {
  return new hc({}, x(a.b));
}
function uc(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Db(a, 0, b, 0, a.length);
  return b;
}
var Ac = function zc(b, c, d, e) {
  d = b.root.m === d.m ? d : new hc(b.root.m, x(d.b));
  var g = b.e - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.b[g];
    b = null != h ? zc(b, c - 5, h, e) : kc(b.root.m, c - 5, e);
  }
  d.b[g] = b;
  return d;
};
function sc(a, b, c, d) {
  this.e = a;
  this.shift = b;
  this.root = c;
  this.D = d;
  this.f = 275;
  this.n = 88;
}
f = sc.prototype;
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.d = function(a) {
  return this.H(null, a);
};
f.a = function(a, b) {
  return this.I(null, a, b);
};
f.H = function(a, b) {
  return y.c(this, b, null);
};
f.I = function(a, b, c) {
  return y.c(this, b, c);
};
f.C = function(a, b) {
  if (this.root.m) {
    return pc(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
f.M = function(a, b, c) {
  return 0 <= b && b < this.e ? y.a(this, b) : c;
};
f.A = function() {
  if (this.root.m) {
    return this.e;
  }
  throw Error("count after persistent!");
};
f.Ya = function(a, b, c) {
  var d = this;
  if (d.root.m) {
    if (0 <= b && b < d.e) {
      return jc(this) <= b ? d.D[b & 31] = c : (a = function g(a, k) {
        var l = d.root.m === k.m ? k : new hc(d.root.m, x(k.b));
        if (0 === a) {
          l.b[b & 31] = c;
        } else {
          var m = b >>> a & 31, p = g(a - 5, l.b[m]);
          l.b[m] = p;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.e) {
      return Va(this, c);
    }
    if (t) {
      throw Error([w("Index "), w(b), w(" out of bounds for TransientVector of length"), w(d.e)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
f.sa = function(a, b, c) {
  return Ya(this, b, c);
};
f.Aa = function(a, b) {
  if (this.root.m) {
    if (32 > this.e - jc(this)) {
      this.D[this.e & 31] = b;
    } else {
      var c = new hc(this.root.m, this.D), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.D = d;
      if (this.e >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = kc(this.root.m, this.shift, c);
        this.root = new hc(this.root.m, d);
        this.shift = e;
      } else {
        this.root = Ac(this, this.shift, this.root, c);
      }
    }
    this.e += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
f.Ba = function() {
  if (this.root.m) {
    this.root.m = null;
    var a = this.e - jc(this), b = Array(a);
    Db(this.D, 0, b, 0, a);
    return new W(null, this.e, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Bc() {
  this.n = 0;
  this.f = 2097152;
}
Bc.prototype.s = function() {
  return!1;
};
var Cc = new Bc;
function Dc(a, b) {
  return Eb((null == b ? 0 : b ? b.f & 1024 || b.qb || (b.f ? 0 : s(Aa, b)) : s(Aa, b)) ? Q(a) === Q(b) ? dc(ec, fc.a(function(a) {
    return eb.a(R.c(b, I(a), Cc), I(L(a)));
  }, a)) : null : null);
}
function Ec(a, b) {
  var c = a.b;
  if (b instanceof V) {
    a: {
      for (var d = c.length, e = b.ea, g = 0;;) {
        if (d <= g) {
          c = -1;
          break a;
        }
        var h = c[g];
        if (h instanceof V && e === h.ea) {
          c = g;
          break a;
        }
        if (t) {
          g += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if ("string" == typeof b || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (t) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof hb) {
        a: {
          d = c.length;
          e = b.fa;
          for (g = 0;;) {
            if (d <= g) {
              c = -1;
              break a;
            }
            h = c[g];
            if (h instanceof hb && e === h.fa) {
              c = g;
              break a;
            }
            if (t) {
              g += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              if (t) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (t) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (eb.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (t) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function Fc(a, b, c) {
  this.b = a;
  this.g = b;
  this.ma = c;
  this.n = 0;
  this.f = 32374990;
}
f = Fc.prototype;
f.v = function() {
  return ob(this);
};
f.ba = function() {
  return this.g < this.b.length - 2 ? new Fc(this.b, this.g + 2, this.ma) : null;
};
f.F = function(a, b) {
  return N(b, this);
};
f.toString = function() {
  return D(this);
};
f.N = function(a, b) {
  return S.a(b, this);
};
f.O = function(a, b, c) {
  return S.c(b, c, this);
};
f.w = function() {
  return this;
};
f.A = function() {
  return(this.b.length - this.g) / 2;
};
f.P = function() {
  return new W(null, 2, 5, Z, [this.b[this.g], this.b[this.g + 1]], null);
};
f.R = function() {
  return this.g < this.b.length - 2 ? new Fc(this.b, this.g + 2, this.ma) : K;
};
f.s = function(a, b) {
  return O(this, b);
};
f.L = function(a, b) {
  return new Fc(this.b, this.g, b);
};
f.J = function() {
  return this.ma;
};
function ia(a, b, c, d) {
  this.l = a;
  this.e = b;
  this.b = c;
  this.i = d;
  this.n = 4;
  this.f = 16123663;
}
f = ia.prototype;
f.za = function() {
  return new Gc({}, this.b.length, x(this.b));
};
f.v = function() {
  var a = this.i;
  return null != a ? a : this.i = a = Kb(this);
};
f.H = function(a, b) {
  return ya.c(this, b, null);
};
f.I = function(a, b, c) {
  a = Ec(this, b);
  return-1 === a ? c : this.b[a + 1];
};
f.oa = function(a, b, c) {
  a = Ec(this, b);
  if (-1 === a) {
    if (this.e < Hc) {
      a = this.b;
      for (var d = a.length, e = Array(d + 2), g = 0;;) {
        if (g < d) {
          e[g] = a[g], g += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new ia(this.l, this.e + 1, e, null);
    }
    a = Ja;
    d = za;
    null != Ic ? Ic && (Ic.n & 4 || Ic.ob) ? (e = Gb.c(Va, Ua(Ic), this), e = Wa(e)) : e = Gb.c(ta, Ic, this) : e = Gb.c(qb, K, this);
    return a(d(e, b, c), this.l);
  }
  return c === this.b[a + 1] ? this : t ? (b = x(this.b), b[a + 1] = c, new ia(this.l, this.e, b, null)) : null;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.d = function(a) {
  return this.H(null, a);
};
f.a = function(a, b) {
  return this.I(null, a, b);
};
f.F = function(a, b) {
  return Ab(b) ? za(this, y.a(b, 0), y.a(b, 1)) : Gb.c(ta, this, b);
};
f.toString = function() {
  return D(this);
};
f.w = function() {
  return 0 <= this.b.length - 2 ? new Fc(this.b, 0, null) : null;
};
f.A = function() {
  return this.e;
};
f.s = function(a, b) {
  return Dc(this, b);
};
f.L = function(a, b) {
  return new ia(b, this.e, this.b, this.i);
};
f.J = function() {
  return this.l;
};
var Hc = 8;
function Gc(a, b, c) {
  this.ka = a;
  this.ia = b;
  this.b = c;
  this.n = 56;
  this.f = 258;
}
f = Gc.prototype;
f.sa = function(a, b, c) {
  if (r(this.ka)) {
    a = Ec(this, b);
    if (-1 === a) {
      if (this.ia + 2 <= 2 * Hc) {
        return this.ia += 2, this.b.push(b), this.b.push(c), this;
      }
      a = Jc.a ? Jc.a(this.ia, this.b) : Jc.call(null, this.ia, this.b);
      return Xa(a, b, c);
    }
    c !== this.b[a + 1] && (this.b[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
f.Aa = function(a, b) {
  if (r(this.ka)) {
    if (b ? b.f & 2048 || b.eb || (b.f ? 0 : s(Ba, b)) : s(Ba, b)) {
      return Xa(this, T.d ? T.d(b) : T.call(null, b), U.d ? U.d(b) : U.call(null, b));
    }
    for (var c = H(b), d = this;;) {
      var e = I(c);
      if (r(e)) {
        c = L(c), d = Xa(d, T.d ? T.d(e) : T.call(null, e), U.d ? U.d(e) : U.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
f.Ba = function() {
  if (r(this.ka)) {
    return this.ka = !1, new ia(null, Hb(this.ia), this.b, null);
  }
  throw Error("persistent! called twice");
};
f.H = function(a, b) {
  return ya.c(this, b, null);
};
f.I = function(a, b, c) {
  if (r(this.ka)) {
    return a = Ec(this, b), -1 === a ? c : this.b[a + 1];
  }
  throw Error("lookup after persistent!");
};
f.A = function() {
  if (r(this.ka)) {
    return Hb(this.ia);
  }
  throw Error("count after persistent!");
};
function Jc(a, b) {
  for (var c = Ua(Ic), d = 0;;) {
    if (d < a) {
      c = Xa(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Kc() {
  this.$ = !1;
}
function Lc(a, b) {
  return a === b ? !0 : a === b || a instanceof V && b instanceof V && a.ea === b.ea ? !0 : t ? eb.a(a, b) : null;
}
var Mc = function() {
  function a(a, b, c, h, k) {
    a = x(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = x(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, g, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 5:
        return a.call(this, c, e, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.B = a;
  return c;
}(), Nc = function() {
  function a(a, b, c, h, k, l) {
    a = a.la(b);
    a.b[c] = h;
    a.b[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.la(b);
    a.b[c] = h;
    return a;
  }
  var c = null, c = function(c, e, g, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, g, h);
      case 6:
        return a.call(this, c, e, g, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = b;
  c.U = a;
  return c;
}();
function Oc(a, b, c) {
  this.m = a;
  this.r = b;
  this.b = c;
}
f = Oc.prototype;
f.W = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = Ib(this.r & h - 1);
  if (0 === (this.r & h)) {
    var l = Ib(this.r);
    if (2 * l < this.b.length) {
      a = this.la(a);
      b = a.b;
      g.$ = !0;
      a: {
        for (c = 2 * (l - k), g = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[g];
          l -= 1;
          c -= 1;
          g -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.r |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Pc.W(a, b + 5, c, d, e, g);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.r >>> d & 1) && (k[d] = null != this.b[e] ? Pc.W(a, b + 5, G(this.b[e]), this.b[e], this.b[e + 1], g) : this.b[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Qc(a, l + 1, k);
    }
    return t ? (b = Array(2 * (l + 4)), Db(this.b, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Db(this.b, 2 * k, b, 2 * (k + 1), 2 * (l - k)), g.$ = !0, a = this.la(a), a.b = b, a.r |= h, a) : null;
  }
  l = this.b[2 * k];
  h = this.b[2 * k + 1];
  return null == l ? (l = h.W(a, b + 5, c, d, e, g), l === h ? this : Nc.j(this, a, 2 * k + 1, l)) : Lc(d, l) ? e === h ? this : Nc.j(this, a, 2 * k + 1, e) : t ? (g.$ = !0, Nc.U(this, a, 2 * k, null, 2 * k + 1, Rc.ja ? Rc.ja(a, b + 5, l, h, c, d, e) : Rc.call(null, a, b + 5, l, h, c, d, e))) : null;
};
f.va = function() {
  return Sc.d ? Sc.d(this.b) : Sc.call(null, this.b);
};
f.la = function(a) {
  if (a === this.m) {
    return this;
  }
  var b = Ib(this.r), c = Array(0 > b ? 4 : 2 * (b + 1));
  Db(this.b, 0, c, 0, 2 * b);
  return new Oc(a, this.r, c);
};
f.V = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = Ib(this.r & g - 1);
  if (0 === (this.r & g)) {
    var k = Ib(this.r);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = Pc.V(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.r >>> c & 1) && (h[c] = null != this.b[d] ? Pc.V(a + 5, G(this.b[d]), this.b[d], this.b[d + 1], e) : this.b[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Qc(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    Db(this.b, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    Db(this.b, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.$ = !0;
    return new Oc(null, this.r | g, a);
  }
  k = this.b[2 * h];
  g = this.b[2 * h + 1];
  return null == k ? (k = g.V(a + 5, b, c, d, e), k === g ? this : new Oc(null, this.r, Mc.c(this.b, 2 * h + 1, k))) : Lc(c, k) ? d === g ? this : new Oc(null, this.r, Mc.c(this.b, 2 * h + 1, d)) : t ? (e.$ = !0, new Oc(null, this.r, Mc.B(this.b, 2 * h, null, 2 * h + 1, Rc.U ? Rc.U(a + 5, k, g, b, c, d) : Rc.call(null, a + 5, k, g, b, c, d)))) : null;
};
f.ha = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.r & e)) {
    return d;
  }
  var g = Ib(this.r & e - 1), e = this.b[2 * g], g = this.b[2 * g + 1];
  return null == e ? g.ha(a + 5, b, c, d) : Lc(c, e) ? g : t ? d : null;
};
var Pc = new Oc(null, 0, []);
function Qc(a, b, c) {
  this.m = a;
  this.e = b;
  this.b = c;
}
f = Qc.prototype;
f.W = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.b[h];
  if (null == k) {
    return a = Nc.j(this, a, h, Pc.W(a, b + 5, c, d, e, g)), a.e += 1, a;
  }
  b = k.W(a, b + 5, c, d, e, g);
  return b === k ? this : Nc.j(this, a, h, b);
};
f.va = function() {
  return Tc.d ? Tc.d(this.b) : Tc.call(null, this.b);
};
f.la = function(a) {
  return a === this.m ? this : new Qc(a, this.e, x(this.b));
};
f.V = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.b[g];
  if (null == h) {
    return new Qc(null, this.e + 1, Mc.c(this.b, g, Pc.V(a + 5, b, c, d, e)));
  }
  a = h.V(a + 5, b, c, d, e);
  return a === h ? this : new Qc(null, this.e, Mc.c(this.b, g, a));
};
f.ha = function(a, b, c, d) {
  var e = this.b[b >>> a & 31];
  return null != e ? e.ha(a + 5, b, c, d) : d;
};
function Uc(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Lc(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Vc(a, b, c, d) {
  this.m = a;
  this.da = b;
  this.e = c;
  this.b = d;
}
f = Vc.prototype;
f.W = function(a, b, c, d, e, g) {
  if (c === this.da) {
    b = Uc(this.b, this.e, d);
    if (-1 === b) {
      if (this.b.length > 2 * this.e) {
        return a = Nc.U(this, a, 2 * this.e, d, 2 * this.e + 1, e), g.$ = !0, a.e += 1, a;
      }
      c = this.b.length;
      b = Array(c + 2);
      Db(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.$ = !0;
      g = this.e + 1;
      a === this.m ? (this.b = b, this.e = g, a = this) : a = new Vc(this.m, this.da, g, b);
      return a;
    }
    return this.b[b + 1] === e ? this : Nc.j(this, a, b + 1, e);
  }
  return(new Oc(a, 1 << (this.da >>> b & 31), [null, this, null, null])).W(a, b, c, d, e, g);
};
f.va = function() {
  return Sc.d ? Sc.d(this.b) : Sc.call(null, this.b);
};
f.la = function(a) {
  if (a === this.m) {
    return this;
  }
  var b = Array(2 * (this.e + 1));
  Db(this.b, 0, b, 0, 2 * this.e);
  return new Vc(a, this.da, this.e, b);
};
f.V = function(a, b, c, d, e) {
  return b === this.da ? (a = Uc(this.b, this.e, c), -1 === a ? (a = 2 * this.e, b = Array(a + 2), Db(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.$ = !0, new Vc(null, this.da, this.e + 1, b)) : eb.a(this.b[a], d) ? this : new Vc(null, this.da, this.e, Mc.c(this.b, a + 1, d))) : (new Oc(null, 1 << (this.da >>> a & 31), [null, this])).V(a, b, c, d, e);
};
f.ha = function(a, b, c, d) {
  a = Uc(this.b, this.e, c);
  return 0 > a ? d : Lc(c, this.b[a]) ? this.b[a + 1] : t ? d : null;
};
var Rc = function() {
  function a(a, b, c, h, k, l, m) {
    var p = G(c);
    if (p === k) {
      return new Vc(null, p, 2, [c, h, l, m]);
    }
    var q = new Kc;
    return Pc.W(a, b, p, c, h, q).W(a, b, k, l, m, q);
  }
  function b(a, b, c, h, k, l) {
    var m = G(b);
    if (m === h) {
      return new Vc(null, m, 2, [b, c, k, l]);
    }
    var p = new Kc;
    return Pc.V(a, m, b, c, p).V(a, h, k, l, p);
  }
  var c = null, c = function(c, e, g, h, k, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, g, h, k, l);
      case 7:
        return a.call(this, c, e, g, h, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.U = b;
  c.ja = a;
  return c;
}();
function Wc(a, b, c, d, e) {
  this.l = a;
  this.X = b;
  this.g = c;
  this.p = d;
  this.i = e;
  this.n = 0;
  this.f = 32374860;
}
f = Wc.prototype;
f.v = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ob(this);
};
f.F = function(a, b) {
  return N(b, this);
};
f.toString = function() {
  return D(this);
};
f.N = function(a, b) {
  return S.a(b, this);
};
f.O = function(a, b, c) {
  return S.c(b, c, this);
};
f.w = function() {
  return this;
};
f.P = function() {
  return null == this.p ? new W(null, 2, 5, Z, [this.X[this.g], this.X[this.g + 1]], null) : I(this.p);
};
f.R = function() {
  return null == this.p ? Sc.c ? Sc.c(this.X, this.g + 2, null) : Sc.call(null, this.X, this.g + 2, null) : Sc.c ? Sc.c(this.X, this.g, L(this.p)) : Sc.call(null, this.X, this.g, L(this.p));
};
f.s = function(a, b) {
  return O(this, b);
};
f.L = function(a, b) {
  return new Wc(b, this.X, this.g, this.p, this.i);
};
f.J = function() {
  return this.l;
};
var Sc = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Wc(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (r(h) && (h = h.va(), r(h))) {
            return new Wc(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Wc(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.c(a, 0, null);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.c = a;
  return c;
}();
function Xc(a, b, c, d, e) {
  this.l = a;
  this.X = b;
  this.g = c;
  this.p = d;
  this.i = e;
  this.n = 0;
  this.f = 32374860;
}
f = Xc.prototype;
f.v = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ob(this);
};
f.F = function(a, b) {
  return N(b, this);
};
f.toString = function() {
  return D(this);
};
f.N = function(a, b) {
  return S.a(b, this);
};
f.O = function(a, b, c) {
  return S.c(b, c, this);
};
f.w = function() {
  return this;
};
f.P = function() {
  return I(this.p);
};
f.R = function() {
  return Tc.j ? Tc.j(null, this.X, this.g, L(this.p)) : Tc.call(null, null, this.X, this.g, L(this.p));
};
f.s = function(a, b) {
  return O(this, b);
};
f.L = function(a, b) {
  return new Xc(b, this.X, this.g, this.p, this.i);
};
f.J = function() {
  return this.l;
};
var Tc = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (r(k) && (k = k.va(), r(k))) {
            return new Xc(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Xc(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.j(null, a, 0, null);
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.j = a;
  return c;
}();
function Yc(a, b, c, d, e, g) {
  this.l = a;
  this.e = b;
  this.root = c;
  this.Q = d;
  this.S = e;
  this.i = g;
  this.n = 4;
  this.f = 16123663;
}
f = Yc.prototype;
f.za = function() {
  return new Zc({}, this.root, this.e, this.Q, this.S);
};
f.v = function() {
  var a = this.i;
  return null != a ? a : this.i = a = Kb(this);
};
f.H = function(a, b) {
  return ya.c(this, b, null);
};
f.I = function(a, b, c) {
  return null == b ? this.Q ? this.S : c : null == this.root ? c : t ? this.root.ha(0, G(b), b, c) : null;
};
f.oa = function(a, b, c) {
  if (null == b) {
    return this.Q && c === this.S ? this : new Yc(this.l, this.Q ? this.e : this.e + 1, this.root, !0, c, null);
  }
  a = new Kc;
  b = (null == this.root ? Pc : this.root).V(0, G(b), b, c, a);
  return b === this.root ? this : new Yc(this.l, a.$ ? this.e + 1 : this.e, b, this.Q, this.S, null);
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.d = function(a) {
  return this.H(null, a);
};
f.a = function(a, b) {
  return this.I(null, a, b);
};
f.F = function(a, b) {
  return Ab(b) ? za(this, y.a(b, 0), y.a(b, 1)) : Gb.c(ta, this, b);
};
f.toString = function() {
  return D(this);
};
f.w = function() {
  if (0 < this.e) {
    var a = null != this.root ? this.root.va() : null;
    return this.Q ? N(new W(null, 2, 5, Z, [null, this.S], null), a) : a;
  }
  return null;
};
f.A = function() {
  return this.e;
};
f.s = function(a, b) {
  return Dc(this, b);
};
f.L = function(a, b) {
  return new Yc(b, this.e, this.root, this.Q, this.S, this.i);
};
f.J = function() {
  return this.l;
};
var Ic = new Yc(null, 0, null, !1, null, 0);
function ub(a, b) {
  for (var c = a.length, d = 0, e = Ua(Ic);;) {
    if (d < c) {
      var g = d + 1, e = e.sa(null, a[d], b[d]), d = g
    } else {
      return Wa(e);
    }
  }
}
function Zc(a, b, c, d, e) {
  this.m = a;
  this.root = b;
  this.count = c;
  this.Q = d;
  this.S = e;
  this.n = 56;
  this.f = 258;
}
f = Zc.prototype;
f.sa = function(a, b, c) {
  return $c(this, b, c);
};
f.Aa = function(a, b) {
  var c;
  a: {
    if (this.m) {
      if (b ? b.f & 2048 || b.eb || (b.f ? 0 : s(Ba, b)) : s(Ba, b)) {
        c = $c(this, T.d ? T.d(b) : T.call(null, b), U.d ? U.d(b) : U.call(null, b));
        break a;
      }
      c = H(b);
      for (var d = this;;) {
        var e = I(c);
        if (r(e)) {
          c = L(c), d = $c(d, T.d ? T.d(e) : T.call(null, e), U.d ? U.d(e) : U.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
f.Ba = function() {
  var a;
  if (this.m) {
    this.m = null, a = new Yc(null, this.count, this.root, this.Q, this.S, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
f.H = function(a, b) {
  return null == b ? this.Q ? this.S : null : null == this.root ? null : this.root.ha(0, G(b), b);
};
f.I = function(a, b, c) {
  return null == b ? this.Q ? this.S : c : null == this.root ? c : this.root.ha(0, G(b), b, c);
};
f.A = function() {
  if (this.m) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function $c(a, b, c) {
  if (a.m) {
    if (null == b) {
      a.S !== c && (a.S = c), a.Q || (a.count += 1, a.Q = !0);
    } else {
      var d = new Kc;
      b = (null == a.root ? Pc : a.root).W(a.m, 0, G(b), b, c, d);
      b !== a.root && (a.root = b);
      d.$ && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var ad = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    for (var b = H(a), e = Ua(Ic);;) {
      if (b) {
        a = L(L(b));
        var g = I(b), b = I(L(b)), e = Xa(e, g, b), b = a;
      } else {
        return Wa(e);
      }
    }
  }
  a.o = 0;
  a.k = function(a) {
    a = H(a);
    return b(a);
  };
  a.h = b;
  return a;
}();
function T(a) {
  return Ca(a);
}
function U(a) {
  return Da(a);
}
function Pb(a) {
  if (a && (a.n & 4096 || a.gb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([w("Doesn't support name: "), w(a)].join(""));
}
function bd(a, b, c, d, e, g, h) {
  var k = fa;
  try {
    fa = null == fa ? null : fa - 1;
    if (null != fa && 0 > fa) {
      return B(a, "#");
    }
    B(a, c);
    H(h) && (b.c ? b.c(I(h), a, g) : b.call(null, I(h), a, g));
    for (var l = L(h), m = na.d(g);l && (null == m || 0 !== m);) {
      B(a, d);
      b.c ? b.c(I(l), a, g) : b.call(null, I(l), a, g);
      var p = L(l);
      c = m - 1;
      l = p;
      m = c;
    }
    r(na.d(g)) && (B(a, d), b.c ? b.c("...", a, g) : b.call(null, "...", a, g));
    return B(a, e);
  } finally {
    fa = k;
  }
}
var cd = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = H(b), g = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = g.C(null, k);
        B(a, l);
        k += 1;
      } else {
        if (e = H(e)) {
          g = e, Bb(g) ? (e = $a(g), h = ab(g), g = e, l = Q(e), e = h, h = l) : (l = I(g), B(a, l), e = L(g), g = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.o = 1;
  a.k = function(a) {
    var d = I(a);
    a = J(a);
    return b(d, a);
  };
  a.h = b;
  return a;
}(), dd = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function ed(a) {
  return[w('"'), w(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return dd[a];
  })), w('"')].join("");
}
var $ = function fd(b, c, d) {
  if (null == b) {
    return B(c, "nil");
  }
  if (void 0 === b) {
    return B(c, "#\x3cundefined\x3e");
  }
  if (t) {
    r(function() {
      var c = R.a(d, la);
      return r(c) ? (c = b ? b.f & 131072 || b.fb ? !0 : b.f ? !1 : s(Ha, b) : s(Ha, b)) ? xb(b) : c : c;
    }()) && (B(c, "^"), fd(xb(b), c, d), B(c, " "));
    if (null == b) {
      return B(c, "nil");
    }
    if (b.jb) {
      return b.ub(c);
    }
    if (b && (b.f & 2147483648 || b.K)) {
      return b.t(null, c, d);
    }
    if (oa(b) === Boolean || "number" === typeof b) {
      return B(c, "" + w(b));
    }
    if (b.constructor === Object) {
      return B(c, "#js "), gd.j ? gd.j(fc.a(function(c) {
        return new W(null, 2, 5, Z, [Qb.d(c), b[c]], null);
      }, Cb(b)), fd, c, d) : gd.call(null, fc.a(function(c) {
        return new W(null, 2, 5, Z, [Qb.d(c), b[c]], null);
      }, Cb(b)), fd, c, d);
    }
    if (b instanceof Array) {
      return bd(c, fd, "#js [", " ", "]", d, b);
    }
    if ("string" == typeof b) {
      return r(ka.d(d)) ? B(c, ed(b)) : B(c, b);
    }
    if (wb(b)) {
      return cd.h(c, M(["#\x3c", "" + w(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + w(b);;) {
          if (Q(d) < c) {
            d = [w("0"), w(d)].join("");
          } else {
            return d;
          }
        }
      };
      return cd.h(c, M(['#inst "', "" + w(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? cd.h(c, M(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.K || (b.f ? 0 : s(Ra, b)) : s(Ra, b)) ? Sa(b, c, d) : t ? cd.h(c, M(["#\x3c", "" + w(b), "\x3e"], 0)) : null;
  }
  return null;
}, hd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    (b = null == a) || (b = H(a), b = r(b) ? !1 : !0);
    if (b) {
      b = "";
    } else {
      b = w;
      var e = ga(), g = new ea;
      a: {
        var h = new cb(g);
        $(I(a), h, e);
        a = H(L(a));
        for (var k = null, l = 0, m = 0;;) {
          if (m < l) {
            var p = k.C(null, m);
            B(h, " ");
            $(p, h, e);
            m += 1;
          } else {
            if (a = H(a)) {
              k = a, Bb(k) ? (a = $a(k), l = ab(k), k = a, p = Q(a), a = l, l = p) : (p = I(k), B(h, " "), $(p, h, e), a = L(k), k = null, l = 0), m = 0;
            } else {
              break a;
            }
          }
        }
      }
      b = "" + b(g);
    }
    return b;
  }
  a.o = 0;
  a.k = function(a) {
    a = H(a);
    return b(a);
  };
  a.h = b;
  return a;
}();
function gd(a, b, c, d) {
  return bd(c, function(a, c, d) {
    b.c ? b.c(Ca(a), c, d) : b.call(null, Ca(a), c, d);
    B(c, " ");
    return b.c ? b.c(Da(a), c, d) : b.call(null, Da(a), c, d);
  }, "{", ", ", "}", d, H(a));
}
jb.prototype.K = !0;
jb.prototype.t = function(a, b, c) {
  return bd(b, $, "(", " ", ")", c, this);
};
xc.prototype.K = !0;
xc.prototype.t = function(a, b, c) {
  return bd(b, $, "[", " ", "]", c, this);
};
Wb.prototype.K = !0;
Wb.prototype.t = function(a, b, c) {
  return bd(b, $, "(", " ", ")", c, this);
};
ia.prototype.K = !0;
ia.prototype.t = function(a, b, c) {
  return gd(this, $, b, c);
};
Rb.prototype.K = !0;
Rb.prototype.t = function(a, b, c) {
  return bd(b, $, "(", " ", ")", c, this);
};
Wc.prototype.K = !0;
Wc.prototype.t = function(a, b, c) {
  return bd(b, $, "(", " ", ")", c, this);
};
vc.prototype.K = !0;
vc.prototype.t = function(a, b, c) {
  return bd(b, $, "(", " ", ")", c, this);
};
Yc.prototype.K = !0;
Yc.prototype.t = function(a, b, c) {
  return gd(this, $, b, c);
};
W.prototype.K = !0;
W.prototype.t = function(a, b, c) {
  return bd(b, $, "[", " ", "]", c, this);
};
Lb.prototype.K = !0;
Lb.prototype.t = function(a, b, c) {
  return bd(b, $, "(", " ", ")", c, this);
};
Fc.prototype.K = !0;
Fc.prototype.t = function(a, b, c) {
  return bd(b, $, "(", " ", ")", c, this);
};
Mb.prototype.K = !0;
Mb.prototype.t = function(a, b) {
  return B(b, "()");
};
Ob.prototype.K = !0;
Ob.prototype.t = function(a, b, c) {
  return bd(b, $, "(", " ", ")", c, this);
};
Xc.prototype.K = !0;
Xc.prototype.t = function(a, b, c) {
  return bd(b, $, "(", " ", ")", c, this);
};
W.prototype.wa = !0;
W.prototype.xa = function(a, b) {
  return Fb.a(this, b);
};
xc.prototype.wa = !0;
xc.prototype.xa = function(a, b) {
  return Fb.a(this, b);
};
V.prototype.wa = !0;
V.prototype.xa = function(a, b) {
  return db(this, b);
};
hb.prototype.wa = !0;
hb.prototype.xa = function(a, b) {
  return db(this, b);
};
function id(a, b, c, d) {
  this.state = a;
  this.l = b;
  this.lb = c;
  this.ab = d;
  this.f = 2153938944;
  this.n = 2;
}
f = id.prototype;
f.v = function() {
  return this[ba] || (this[ba] = ++ca);
};
f.Za = function(a, b, c) {
  a = H(this.ab);
  for (var d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.C(null, g), k = sb.c(h, 0, null), h = sb.c(h, 1, null);
      h.j ? h.j(k, this, b, c) : h.call(null, k, this, b, c);
      g += 1;
    } else {
      if (a = H(a)) {
        Bb(a) ? (d = $a(a), a = ab(a), k = d, e = Q(d), d = k) : (d = I(a), k = sb.c(d, 0, null), h = sb.c(d, 1, null), h.j ? h.j(k, this, b, c) : h.call(null, k, this, b, c), a = L(a), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
f.t = function(a, b, c) {
  B(b, "#\x3cAtom: ");
  $(this.state, b, c);
  return B(b, "\x3e");
};
f.J = function() {
  return this.l;
};
f.bb = function() {
  return this.state;
};
f.s = function(a, b) {
  return this === b;
};
var kd = function() {
  function a(a) {
    return new id(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = (null == c ? 0 : c ? c.f & 64 || c.ra || (c.f ? 0 : s(wa, c)) : s(wa, c)) ? cc.a(ad, c) : c, e = R.a(d, jd), d = R.a(d, la);
      return new id(a, d, e, null);
    }
    a.o = 1;
    a.k = function(a) {
      var c = I(a);
      a = J(a);
      return b(c, a);
    };
    a.h = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.h(b, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 1;
  b.k = c.k;
  b.d = a;
  b.h = c.h;
  return b;
}();
var ma = new V(null, "dup", "dup"), ld = new V(null, "ball", "ball"), gb = new V(null, "default", "default"), md = new V(null, "y", "y"), nd = new V(null, "x", "x"), ja = new V(null, "flush-on-newline", "flush-on-newline"), na = new V(null, "print-length", "print-length"), t = new V(null, "else", "else"), ka = new V(null, "readably", "readably"), jd = new V(null, "validator", "validator"), la = new V(null, "meta", "meta");
var od = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return console.log(cc.a(w, a));
  }
  a.o = 0;
  a.k = function(a) {
    a = H(a);
    return b(a);
  };
  a.h = b;
  return a;
}();
var pd, qd, rd, sd;
function td() {
  return aa.navigator ? aa.navigator.userAgent : null;
}
sd = rd = qd = pd = !1;
var ud;
if (ud = td()) {
  var vd = aa.navigator;
  pd = 0 == ud.indexOf("Opera");
  qd = !pd && -1 != ud.indexOf("MSIE");
  rd = !pd && -1 != ud.indexOf("WebKit");
  sd = !pd && !rd && "Gecko" == vd.product;
}
var wd = pd, xd = qd, yd = sd, zd = rd;
function Ad() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var Bd;
a: {
  var Cd = "", Dd;
  if (wd && aa.opera) {
    var Ed = aa.opera.version, Cd = "function" == typeof Ed ? Ed() : Ed
  } else {
    if (yd ? Dd = /rv\:([^\);]+)(\)|;)/ : xd ? Dd = /MSIE\s+([^\);]+)(\)|;)/ : zd && (Dd = /WebKit\/(\S+)/), Dd) {
      var Fd = Dd.exec(td()), Cd = Fd ? Fd[1] : ""
    }
  }
  if (xd) {
    var Gd = Ad();
    if (Gd > parseFloat(Cd)) {
      Bd = String(Gd);
      break a;
    }
  }
  Bd = Cd;
}
var Hd = {};
function Id(a) {
  var b;
  if (!(b = Hd[a])) {
    b = 0;
    for (var c = String(Bd).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), g = 0;0 == b && g < e;g++) {
      var h = c[g] || "", k = d[g] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var p = l.exec(h) || ["", "", ""], q = m.exec(k) || ["", "", ""];
        if (0 == p[0].length && 0 == q[0].length) {
          break;
        }
        b = ((0 == p[1].length ? 0 : parseInt(p[1], 10)) < (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? -1 : (0 == p[1].length ? 0 : parseInt(p[1], 10)) > (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? 1 : 0) || ((0 == p[2].length) < (0 == q[2].length) ? -1 : (0 == p[2].length) > (0 == q[2].length) ? 1 : 0) || (p[2] < q[2] ? -1 : p[2] > q[2] ? 1 : 0);
      } while (0 == b);
    }
    b = Hd[a] = 0 <= b;
  }
  return b;
}
var Jd = aa.document, Kd = Jd && xd ? Ad() || ("CSS1Compat" == Jd.compatMode ? parseInt(Bd, 10) : 5) : void 0;
xd && Id("9");
!zd || Id("528");
yd && Id("1.9b") || xd && Id("8") || wd && Id("9.5") || zd && Id("528");
yd && !Id("8") || xd && Id("9");
!yd && !xd || xd && xd && 9 <= Kd || yd && Id("1.9.1");
xd && Id("9");
var Ld = function() {
  var a = window.requestAnimationFrame;
  if (r(a)) {
    return a;
  }
  a = window.oRequestAnimationFrame;
  if (r(a)) {
    return a;
  }
  a = window.mozRequestAnimationFrame;
  if (r(a)) {
    return a;
  }
  a = window.webkitRequestAnimationFrame;
  if (r(a)) {
    return a;
  }
  a = window.msRequestAnimationFrame;
  return r(a) ? a : function(a) {
    return setTimeout(a, 17);
  };
}();
var Md = document.createElement("div");
Md.innerHTML = "   \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a' style\x3d'top:1px;float:left;opacity:.55;'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
eb.a(Md.firstChild.nodeType, 3);
eb.a(Md.getElementsByTagName("tbody").length, 0);
eb.a(Md.getElementsByTagName("link").length, 0);
var Nd = new W(null, 3, 5, Z, [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"], null), Od = new W(null, 3, 5, Z, [1, "\x3ctable\x3e", "\x3c/table\x3e"], null), Pd = new W(null, 3, 5, Z, [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"], null);
ub(["col", gb, "tfoot", "caption", "optgroup", "legend", "area", "td", "thead", "th", "option", "tbody", "tr", "colgroup"], [new W(null, 3, 5, Z, [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"], null), new W(null, 3, 5, Z, [0, "", ""], null), Od, Od, Nd, new W(null, 3, 5, Z, [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"], null), new W(null, 3, 5, Z, [1, "\x3cmap\x3e", "\x3c/map\x3e"], null), Pd, Od, Pd, Nd, Od, new W(null, 3, 5, Z, [2, "\x3ctable\x3e\x3ctbody\x3e", 
"\x3c/tbody\x3e\x3c/table\x3e"], null), Od]);
var Qd = function() {
  function a(a, b) {
    return b < a.length ? new Rb(null, function() {
      return N(a.item(b), c.a(a, b + 1));
    }, null, null) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}(), Rd = function() {
  function a(a, b) {
    return b < a.length ? new Rb(null, function() {
      return N(a[b], c.a(a, b + 1));
    }, null, null) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
function Sd(a) {
  return r(a.item) ? Qd.d(a) : Rd.d(a);
}
r("undefined" != typeof NodeList) && (f = NodeList.prototype, f.Ta = !0, f.w = function() {
  return Sd(this);
}, f.qa = !0, f.C = function(a, b) {
  return this.item(b);
}, f.M = function(a, b, c) {
  return this.length <= b ? c : sb.a(this, b);
}, f.ya = !0, f.A = function() {
  return this.length;
});
r("undefined" != typeof StaticNodeList) && (f = StaticNodeList.prototype, f.Ta = !0, f.w = function() {
  return Sd(this);
}, f.qa = !0, f.C = function(a, b) {
  return this.item(b);
}, f.M = function(a, b, c) {
  return this.length <= b ? c : sb.a(this, b);
}, f.ya = !0, f.A = function() {
  return this.length;
});
r("undefined" != typeof HTMLCollection) && (f = HTMLCollection.prototype, f.Ta = !0, f.w = function() {
  return Sd(this);
}, f.qa = !0, f.C = function(a, b) {
  return this.item(b);
}, f.M = function(a, b, c) {
  return this.length <= b ? c : sb.a(this, b);
}, f.ya = !0, f.A = function() {
  return this.length;
});
var Td, Ud = Pb("draw-canvas");
Td = "string" == typeof Ud ? document.getElementById(Ud) : Ud;
var Vd = kd.d(new ia(null, 1, [ld, new ia(null, 2, [nd, 0, md, 0], null)], null));
function Wd() {
  var a = Ga(Vd);
  return gc.c(a, new W(null, 2, 5, Z, [ld, nd], null), function(a) {
    return((a + 1) % Td.width + Td.width) % Td.width;
  });
}
function Xd() {
  var a = Wd();
  return gc.c(a, new W(null, 2, 5, Z, [ld, md], null), function(a) {
    return((a + 1) % Td.height + Td.height) % Td.height;
  });
}
od.h(M(["Start animation"], 0));
(function Yd() {
  Ld.d ? Ld.d(Yd) : Ld.call(null, Yd);
  var b = Xd(), c = Vd.lb;
  if (null != c && !r(c.d ? c.d(b) : c.call(null, b))) {
    throw Error([w("Assert failed: "), w("Validator rejected reference state"), w("\n"), w(hd.h(M([Nb(new hb(null, "validate", "validate", 1233162959, null), new hb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = Vd.state;
  Vd.state = b;
  null != Vd.ab && Ta(Vd, c, b);
  var b = Ga(Vd), c = Td.getContext("2d"), d = Td.getAttribute("width"), e = Td.getAttribute("height");
  c.clearRect(0, 0, d, e);
  c.lineWidth = 5;
  c.beginPath();
  c.moveTo(0, 0);
  c.lineTo(0, e);
  c.lineTo(d, e);
  c.lineTo(d, 0);
  c.lineTo(0, 0);
  c.stroke();
  b = ld.d(b);
  c = "" + w("rgb(200,200,255)");
  d = Td.getContext("2d");
  d.fillStyle = c;
  d.beginPath();
  d.arc(b.d ? b.d(nd) : b.call(null, nd), b.d ? b.d(md) : b.call(null, md), 200, 0, 2 * Math.PI, !0);
  d.closePath();
  return d.fill();
})();

})();

//# sourceMappingURL=canvas-fn.js.map