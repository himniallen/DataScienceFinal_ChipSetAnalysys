import {
  S as dr,
  i as gr,
  s as mr,
  e as _,
  k as R,
  t as C,
  c as w,
  a as y,
  d as g,
  m as V,
  h as E,
  b as m,
  f as qn,
  g as Ft,
  J as c,
  j as Ae,
  n as rr,
  K as Nt,
  L as Ue,
  M as Fe,
  x as Kr,
  y as jr,
  z as $r,
  r as ti,
  p as ei,
  N as Wn,
  C as ni,
  O as yi,
  w as Ns,
  P as Me,
  Q as mo,
  R as Gn,
  T as vo,
  U as yo,
  V as Cs,
  W as Es,
  X as As,
} from "../chunks/index-99a66179.js";
function jn(t, e) {
  return t == null || e == null
    ? NaN
    : t < e
    ? -1
    : t > e
    ? 1
    : t >= e
    ? 0
    : NaN;
}
function Us(t, e) {
  return t == null || e == null
    ? NaN
    : e < t
    ? -1
    : e > t
    ? 1
    : e >= t
    ? 0
    : NaN;
}
function _i(t) {
  let e, n, r;
  t.length !== 2
    ? ((e = jn), (n = (s, u) => jn(t(s), u)), (r = (s, u) => t(s) - u))
    : ((e = t === jn || t === Us ? t : Fs), (n = t), (r = t));
  function i(s, u, l = 0, f = s.length) {
    if (l < f) {
      if (e(u, u) !== 0) return f;
      do {
        const h = (l + f) >>> 1;
        n(s[h], u) < 0 ? (l = h + 1) : (f = h);
      } while (l < f);
    }
    return l;
  }
  function o(s, u, l = 0, f = s.length) {
    if (l < f) {
      if (e(u, u) !== 0) return f;
      do {
        const h = (l + f) >>> 1;
        n(s[h], u) <= 0 ? (l = h + 1) : (f = h);
      } while (l < f);
    }
    return l;
  }
  function a(s, u, l = 0, f = s.length) {
    const h = i(s, u, l, f - 1);
    return h > l && r(s[h - 1], u) > -r(s[h], u) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function Fs() {
  return 0;
}
function zs(t) {
  return t === null ? NaN : +t;
}
const Is = _i(jn),
  Ls = Is.right;
_i(zs).center;
var Hs = Ls;
class _o extends Map {
  constructor(e, n = Ys) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: n },
      }),
      e != null)
    )
      for (const [r, i] of e) this.set(r, i);
  }
  get(e) {
    return super.get(wo(this, e));
  }
  has(e) {
    return super.has(wo(this, e));
  }
  set(e, n) {
    return super.set(Rs(this, e), n);
  }
  delete(e) {
    return super.delete(Vs(this, e));
  }
}
function wo({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : n;
}
function Rs({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : (t.set(r, n), n);
}
function Vs({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) && ((n = t.get(r)), t.delete(r)), n;
}
function Ys(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
var ri = Math.sqrt(50),
  ii = Math.sqrt(10),
  oi = Math.sqrt(2);
function ai(t, e, n) {
  var r,
    i = -1,
    o,
    a,
    s;
  if (((e = +e), (t = +t), (n = +n), t === e && n > 0)) return [t];
  if (
    ((r = e < t) && ((o = t), (t = e), (e = o)),
    (s = wa(t, e, n)) === 0 || !isFinite(s))
  )
    return [];
  if (s > 0) {
    let u = Math.round(t / s),
      l = Math.round(e / s);
    for (
      u * s < t && ++u, l * s > e && --l, a = new Array((o = l - u + 1));
      ++i < o;

    )
      a[i] = (u + i) * s;
  } else {
    s = -s;
    let u = Math.round(t * s),
      l = Math.round(e * s);
    for (
      u / s < t && ++u, l / s > e && --l, a = new Array((o = l - u + 1));
      ++i < o;

    )
      a[i] = (u + i) / s;
  }
  return r && a.reverse(), a;
}
function wa(t, e, n) {
  var r = (e - t) / Math.max(0, n),
    i = Math.floor(Math.log(r) / Math.LN10),
    o = r / Math.pow(10, i);
  return i >= 0
    ? (o >= ri ? 10 : o >= ii ? 5 : o >= oi ? 2 : 1) * Math.pow(10, i)
    : -Math.pow(10, -i) / (o >= ri ? 10 : o >= ii ? 5 : o >= oi ? 2 : 1);
}
function si(t, e, n) {
  var r = Math.abs(e - t) / Math.max(0, n),
    i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
    o = r / i;
  return (
    o >= ri ? (i *= 10) : o >= ii ? (i *= 5) : o >= oi && (i *= 2),
    e < t ? -i : i
  );
}
function It(t, e) {
  let n;
  if (e === void 0)
    for (const r of t)
      r != null && (n < r || (n === void 0 && r >= r)) && (n = r);
  else {
    let r = -1;
    for (let i of t)
      (i = e(i, ++r, t)) != null &&
        (n < i || (n === void 0 && i >= i)) &&
        (n = i);
  }
  return n;
}
function be(t, e) {
  let n;
  if (e === void 0)
    for (const r of t)
      r != null && (n > r || (n === void 0 && r >= r)) && (n = r);
  else {
    let r = -1;
    for (let i of t)
      (i = e(i, ++r, t)) != null &&
        (n > i || (n === void 0 && i >= i)) &&
        (n = i);
  }
  return n;
}
function Os(t) {
  return t;
}
var Hr = 1,
  Rr = 2,
  li = 3,
  Dn = 4,
  bo = 1e-6;
function qs(t) {
  return "translate(" + t + ",0)";
}
function Ws(t) {
  return "translate(0," + t + ")";
}
function Gs(t) {
  return (e) => +t(e);
}
function Bs(t, e) {
  return (
    (e = Math.max(0, t.bandwidth() - e * 2) / 2),
    t.round() && (e = Math.round(e)),
    (n) => +t(n) + e
  );
}
function Xs() {
  return !this.__axis;
}
function ba(t, e) {
  var n = [],
    r = null,
    i = null,
    o = 6,
    a = 6,
    s = 3,
    u = typeof window != "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5,
    l = t === Hr || t === Dn ? -1 : 1,
    f = t === Dn || t === Rr ? "x" : "y",
    h = t === Hr || t === li ? qs : Ws;
  function p(d) {
    var k = r == null ? (e.ticks ? e.ticks.apply(e, n) : e.domain()) : r,
      S = i == null ? (e.tickFormat ? e.tickFormat.apply(e, n) : Os) : i,
      F = Math.max(o, 0) + s,
      z = e.range(),
      B = +z[0] + u,
      O = +z[z.length - 1] + u,
      W = (e.bandwidth ? Bs : Gs)(e.copy(), u),
      H = d.selection ? d.selection() : d,
      M = H.selectAll(".domain").data([null]),
      Y = H.selectAll(".tick").data(k, e).order(),
      nt = Y.exit(),
      Q = Y.enter().append("g").attr("class", "tick"),
      Z = Y.select("line"),
      D = Y.select("text");
    (M = M.merge(
      M.enter()
        .insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "currentColor")
    )),
      (Y = Y.merge(Q)),
      (Z = Z.merge(
        Q.append("line")
          .attr("stroke", "currentColor")
          .attr(f + "2", l * o)
      )),
      (D = D.merge(
        Q.append("text")
          .attr("fill", "currentColor")
          .attr(f, l * F)
          .attr("dy", t === Hr ? "0em" : t === li ? "0.71em" : "0.32em")
      )),
      d !== H &&
        ((M = M.transition(d)),
        (Y = Y.transition(d)),
        (Z = Z.transition(d)),
        (D = D.transition(d)),
        (nt = nt
          .transition(d)
          .attr("opacity", bo)
          .attr("transform", function (J) {
            return isFinite((J = W(J)))
              ? h(J + u)
              : this.getAttribute("transform");
          })),
        Q.attr("opacity", bo).attr("transform", function (J) {
          var et = this.parentNode.__axis;
          return h((et && isFinite((et = et(J))) ? et : W(J)) + u);
        })),
      nt.remove(),
      M.attr(
        "d",
        t === Dn || t === Rr
          ? a
            ? "M" + l * a + "," + B + "H" + u + "V" + O + "H" + l * a
            : "M" + u + "," + B + "V" + O
          : a
          ? "M" + B + "," + l * a + "V" + u + "H" + O + "V" + l * a
          : "M" + B + "," + u + "H" + O
      ),
      Y.attr("opacity", 1).attr("transform", function (J) {
        return h(W(J) + u);
      }),
      Z.attr(f + "2", l * o),
      D.attr(f, l * F).text(S),
      H.filter(Xs)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", t === Rr ? "start" : t === Dn ? "end" : "middle"),
      H.each(function () {
        this.__axis = W;
      });
  }
  return (
    (p.scale = function (d) {
      return arguments.length ? ((e = d), p) : e;
    }),
    (p.ticks = function () {
      return (n = Array.from(arguments)), p;
    }),
    (p.tickArguments = function (d) {
      return arguments.length
        ? ((n = d == null ? [] : Array.from(d)), p)
        : n.slice();
    }),
    (p.tickValues = function (d) {
      return arguments.length
        ? ((r = d == null ? null : Array.from(d)), p)
        : r && r.slice();
    }),
    (p.tickFormat = function (d) {
      return arguments.length ? ((i = d), p) : i;
    }),
    (p.tickSize = function (d) {
      return arguments.length ? ((o = a = +d), p) : o;
    }),
    (p.tickSizeInner = function (d) {
      return arguments.length ? ((o = +d), p) : o;
    }),
    (p.tickSizeOuter = function (d) {
      return arguments.length ? ((a = +d), p) : a;
    }),
    (p.tickPadding = function (d) {
      return arguments.length ? ((s = +d), p) : s;
    }),
    (p.offset = function (d) {
      return arguments.length ? ((u = +d), p) : u;
    }),
    p
  );
}
function Zs(t) {
  return ba(li, t);
}
function Qs(t) {
  return ba(Dn, t);
}
var Js = { value: () => {} };
function xa() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new $n(n);
}
function $n(t) {
  this._ = t;
}
function Ks(t, e) {
  return t
    .trim()
    .split(/^|\s+/)
    .map(function (n) {
      var r = "",
        i = n.indexOf(".");
      if (
        (i >= 0 && ((r = n.slice(i + 1)), (n = n.slice(0, i))),
        n && !e.hasOwnProperty(n))
      )
        throw new Error("unknown type: " + n);
      return { type: n, name: r };
    });
}
$n.prototype = xa.prototype = {
  constructor: $n,
  on: function (t, e) {
    var n = this._,
      r = Ks(t + "", n),
      i,
      o = -1,
      a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; )
        if ((i = (t = r[o]).type) && (i = js(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++o < a; )
      if ((i = (t = r[o]).type)) n[i] = xo(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = xo(n[i], t.name, null);
    return this;
  },
  copy: function () {
    var t = {},
      e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new $n(t);
  },
  call: function (t, e) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, o; r < i; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(e, n);
  },
  apply: function (t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(e, n);
  },
};
function js(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e) return i.value;
}
function xo(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      (t[r] = Js), (t = t.slice(0, r).concat(t.slice(r + 1)));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var ui = "http://www.w3.org/1999/xhtml",
  ko = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: ui,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
  };
function vr(t) {
  var e = (t += ""),
    n = e.indexOf(":");
  return (
    n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)),
    ko.hasOwnProperty(e) ? { space: ko[e], local: t } : t
  );
}
function $s(t) {
  return function () {
    var e = this.ownerDocument,
      n = this.namespaceURI;
    return n === ui && e.documentElement.namespaceURI === ui
      ? e.createElement(t)
      : e.createElementNS(n, t);
  };
}
function tl(t) {
  return function () {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ka(t) {
  var e = vr(t);
  return (e.local ? tl : $s)(e);
}
function el() {}
function wi(t) {
  return t == null
    ? el
    : function () {
        return this.querySelector(t);
      };
}
function nl(t) {
  typeof t != "function" && (t = wi(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (
      var o = e[i], a = o.length, s = (r[i] = new Array(a)), u, l, f = 0;
      f < a;
      ++f
    )
      (u = o[f]) &&
        (l = t.call(u, u.__data__, f, o)) &&
        ("__data__" in u && (l.__data__ = u.__data__), (s[f] = l));
  return new Jt(r, this._parents);
}
function rl(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function il() {
  return [];
}
function Ma(t) {
  return t == null
    ? il
    : function () {
        return this.querySelectorAll(t);
      };
}
function ol(t) {
  return function () {
    return rl(t.apply(this, arguments));
  };
}
function al(t) {
  typeof t == "function" ? (t = ol(t)) : (t = Ma(t));
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var a = e[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new Jt(r, i);
}
function Ta(t) {
  return function () {
    return this.matches(t);
  };
}
function Da(t) {
  return function (e) {
    return e.matches(t);
  };
}
var sl = Array.prototype.find;
function ll(t) {
  return function () {
    return sl.call(this.children, t);
  };
}
function ul() {
  return this.firstElementChild;
}
function cl(t) {
  return this.select(t == null ? ul : ll(typeof t == "function" ? t : Da(t)));
}
var fl = Array.prototype.filter;
function hl() {
  return Array.from(this.children);
}
function pl(t) {
  return function () {
    return fl.call(this.children, t);
  };
}
function dl(t) {
  return this.selectAll(
    t == null ? hl : pl(typeof t == "function" ? t : Da(t))
  );
}
function gl(t) {
  typeof t != "function" && (t = Ta(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = (r[i] = []), u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new Jt(r, this._parents);
}
function Sa(t) {
  return new Array(t.length);
}
function ml() {
  return new Jt(this._enter || this._groups.map(Sa), this._parents);
}
function ir(t, e) {
  (this.ownerDocument = t.ownerDocument),
    (this.namespaceURI = t.namespaceURI),
    (this._next = null),
    (this._parent = t),
    (this.__data__ = e);
}
ir.prototype = {
  constructor: ir,
  appendChild: function (t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function (t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function (t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function (t) {
    return this._parent.querySelectorAll(t);
  },
};
function vl(t) {
  return function () {
    return t;
  };
}
function yl(t, e, n, r, i, o) {
  for (var a = 0, s, u = e.length, l = o.length; a < l; ++a)
    (s = e[a]) ? ((s.__data__ = o[a]), (r[a] = s)) : (n[a] = new ir(t, o[a]));
  for (; a < u; ++a) (s = e[a]) && (i[a] = s);
}
function _l(t, e, n, r, i, o, a) {
  var s,
    u,
    l = new Map(),
    f = e.length,
    h = o.length,
    p = new Array(f),
    d;
  for (s = 0; s < f; ++s)
    (u = e[s]) &&
      ((p[s] = d = a.call(u, u.__data__, s, e) + ""),
      l.has(d) ? (i[s] = u) : l.set(d, u));
  for (s = 0; s < h; ++s)
    (d = a.call(t, o[s], s, o) + ""),
      (u = l.get(d))
        ? ((r[s] = u), (u.__data__ = o[s]), l.delete(d))
        : (n[s] = new ir(t, o[s]));
  for (s = 0; s < f; ++s) (u = e[s]) && l.get(p[s]) === u && (i[s] = u);
}
function wl(t) {
  return t.__data__;
}
function bl(t, e) {
  if (!arguments.length) return Array.from(this, wl);
  var n = e ? _l : yl,
    r = this._parents,
    i = this._groups;
  typeof t != "function" && (t = vl(t));
  for (
    var o = i.length,
      a = new Array(o),
      s = new Array(o),
      u = new Array(o),
      l = 0;
    l < o;
    ++l
  ) {
    var f = r[l],
      h = i[l],
      p = h.length,
      d = xl(t.call(f, f && f.__data__, l, r)),
      k = d.length,
      S = (s[l] = new Array(k)),
      F = (a[l] = new Array(k)),
      z = (u[l] = new Array(p));
    n(f, h, S, F, z, d, e);
    for (var B = 0, O = 0, W, H; B < k; ++B)
      if ((W = S[B])) {
        for (B >= O && (O = B + 1); !(H = F[O]) && ++O < k; );
        W._next = H || null;
      }
  }
  return (a = new Jt(a, r)), (a._enter = s), (a._exit = u), a;
}
function xl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function kl() {
  return new Jt(this._exit || this._groups.map(Sa), this._parents);
}
function Ml(t, e, n) {
  var r = this.enter(),
    i = this,
    o = this.exit();
  return (
    typeof t == "function"
      ? ((r = t(r)), r && (r = r.selection()))
      : (r = r.append(t + "")),
    e != null && ((i = e(i)), i && (i = i.selection())),
    n == null ? o.remove() : n(o),
    r && i ? r.merge(i).order() : i
  );
}
function Tl(t) {
  for (
    var e = t.selection ? t.selection() : t,
      n = this._groups,
      r = e._groups,
      i = n.length,
      o = r.length,
      a = Math.min(i, o),
      s = new Array(i),
      u = 0;
    u < a;
    ++u
  )
    for (
      var l = n[u], f = r[u], h = l.length, p = (s[u] = new Array(h)), d, k = 0;
      k < h;
      ++k
    )
      (d = l[k] || f[k]) && (p[k] = d);
  for (; u < i; ++u) s[u] = n[u];
  return new Jt(s, this._parents);
}
function Dl() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) &&
        (o &&
          a.compareDocumentPosition(o) ^ 4 &&
          o.parentNode.insertBefore(a, o),
        (o = a));
  return this;
}
function Sl(t) {
  t || (t = Pl);
  function e(h, p) {
    return h && p ? t(h.__data__, p.__data__) : !h - !p;
  }
  for (
    var n = this._groups, r = n.length, i = new Array(r), o = 0;
    o < r;
    ++o
  ) {
    for (
      var a = n[o], s = a.length, u = (i[o] = new Array(s)), l, f = 0;
      f < s;
      ++f
    )
      (l = a[f]) && (u[f] = l);
    u.sort(e);
  }
  return new Jt(i, this._parents).order();
}
function Pl(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Nl() {
  var t = arguments[0];
  return (arguments[0] = this), t.apply(null, arguments), this;
}
function Cl() {
  return Array.from(this);
}
function El() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Al() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Ul() {
  return !this.node();
}
function Fl(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function zl(t) {
  return function () {
    this.removeAttribute(t);
  };
}
function Il(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ll(t, e) {
  return function () {
    this.setAttribute(t, e);
  };
}
function Hl(t, e) {
  return function () {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Rl(t, e) {
  return function () {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Vl(t, e) {
  return function () {
    var n = e.apply(this, arguments);
    n == null
      ? this.removeAttributeNS(t.space, t.local)
      : this.setAttributeNS(t.space, t.local, n);
  };
}
function Yl(t, e) {
  var n = vr(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each(
    (e == null
      ? n.local
        ? Il
        : zl
      : typeof e == "function"
      ? n.local
        ? Vl
        : Rl
      : n.local
      ? Hl
      : Ll)(n, e)
  );
}
function Pa(t) {
  return (
    (t.ownerDocument && t.ownerDocument.defaultView) ||
    (t.document && t) ||
    t.defaultView
  );
}
function Ol(t) {
  return function () {
    this.style.removeProperty(t);
  };
}
function ql(t, e, n) {
  return function () {
    this.style.setProperty(t, e, n);
  };
}
function Wl(t, e, n) {
  return function () {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Gl(t, e, n) {
  return arguments.length > 1
    ? this.each(
        (e == null ? Ol : typeof e == "function" ? Wl : ql)(
          t,
          e,
          n == null ? "" : n
        )
      )
    : hn(this.node(), t);
}
function hn(t, e) {
  return (
    t.style.getPropertyValue(e) ||
    Pa(t).getComputedStyle(t, null).getPropertyValue(e)
  );
}
function Bl(t) {
  return function () {
    delete this[t];
  };
}
function Xl(t, e) {
  return function () {
    this[t] = e;
  };
}
function Zl(t, e) {
  return function () {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : (this[t] = n);
  };
}
function Ql(t, e) {
  return arguments.length > 1
    ? this.each((e == null ? Bl : typeof e == "function" ? Zl : Xl)(t, e))
    : this.node()[t];
}
function Na(t) {
  return t.trim().split(/^|\s+/);
}
function bi(t) {
  return t.classList || new Ca(t);
}
function Ca(t) {
  (this._node = t), (this._names = Na(t.getAttribute("class") || ""));
}
Ca.prototype = {
  add: function (t) {
    var e = this._names.indexOf(t);
    e < 0 &&
      (this._names.push(t),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function (t) {
    var e = this._names.indexOf(t);
    e >= 0 &&
      (this._names.splice(e, 1),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function (t) {
    return this._names.indexOf(t) >= 0;
  },
};
function Ea(t, e) {
  for (var n = bi(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Aa(t, e) {
  for (var n = bi(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Jl(t) {
  return function () {
    Ea(this, t);
  };
}
function Kl(t) {
  return function () {
    Aa(this, t);
  };
}
function jl(t, e) {
  return function () {
    (e.apply(this, arguments) ? Ea : Aa)(this, t);
  };
}
function $l(t, e) {
  var n = Na(t + "");
  if (arguments.length < 2) {
    for (var r = bi(this.node()), i = -1, o = n.length; ++i < o; )
      if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? jl : e ? Jl : Kl)(n, e));
}
function tu() {
  this.textContent = "";
}
function eu(t) {
  return function () {
    this.textContent = t;
  };
}
function nu(t) {
  return function () {
    var e = t.apply(this, arguments);
    this.textContent = e == null ? "" : e;
  };
}
function ru(t) {
  return arguments.length
    ? this.each(t == null ? tu : (typeof t == "function" ? nu : eu)(t))
    : this.node().textContent;
}
function iu() {
  this.innerHTML = "";
}
function ou(t) {
  return function () {
    this.innerHTML = t;
  };
}
function au(t) {
  return function () {
    var e = t.apply(this, arguments);
    this.innerHTML = e == null ? "" : e;
  };
}
function su(t) {
  return arguments.length
    ? this.each(t == null ? iu : (typeof t == "function" ? au : ou)(t))
    : this.node().innerHTML;
}
function lu() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function uu() {
  return this.each(lu);
}
function cu() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function fu() {
  return this.each(cu);
}
function hu(t) {
  var e = typeof t == "function" ? t : ka(t);
  return this.select(function () {
    return this.appendChild(e.apply(this, arguments));
  });
}
function pu() {
  return null;
}
function du(t, e) {
  var n = typeof t == "function" ? t : ka(t),
    r = e == null ? pu : typeof e == "function" ? e : wi(e);
  return this.select(function () {
    return this.insertBefore(
      n.apply(this, arguments),
      r.apply(this, arguments) || null
    );
  });
}
function gu() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function mu() {
  return this.each(gu);
}
function vu() {
  var t = this.cloneNode(!1),
    e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function yu() {
  var t = this.cloneNode(!0),
    e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function _u(t) {
  return this.select(t ? yu : vu);
}
function wu(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function bu(t) {
  return function (e) {
    t.call(this, e, this.__data__);
  };
}
function xu(t) {
  return t
    .trim()
    .split(/^|\s+/)
    .map(function (e) {
      var n = "",
        r = e.indexOf(".");
      return (
        r >= 0 && ((n = e.slice(r + 1)), (e = e.slice(0, r))),
        { type: e, name: n }
      );
    });
}
function ku(t) {
  return function () {
    var e = this.__on;
    if (!!e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        (o = e[n]),
          (!t.type || o.type === t.type) && o.name === t.name
            ? this.removeEventListener(o.type, o.listener, o.options)
            : (e[++r] = o);
      ++r ? (e.length = r) : delete this.__on;
    }
  };
}
function Mu(t, e, n) {
  return function () {
    var r = this.__on,
      i,
      o = bu(e);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options),
            this.addEventListener(i.type, (i.listener = o), (i.options = n)),
            (i.value = e);
          return;
        }
    }
    this.addEventListener(t.type, o, n),
      (i = { type: t.type, name: t.name, value: e, listener: o, options: n }),
      r ? r.push(i) : (this.__on = [i]);
  };
}
function Tu(t, e, n) {
  var r = xu(t + ""),
    i,
    o = r.length,
    a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, f; u < l; ++u)
        for (i = 0, f = s[u]; i < o; ++i)
          if ((a = r[i]).type === f.type && a.name === f.name) return f.value;
    }
    return;
  }
  for (s = e ? Mu : ku, i = 0; i < o; ++i) this.each(s(r[i], e, n));
  return this;
}
function Ua(t, e, n) {
  var r = Pa(t),
    i = r.CustomEvent;
  typeof i == "function"
    ? (i = new i(e, n))
    : ((i = r.document.createEvent("Event")),
      n
        ? (i.initEvent(e, n.bubbles, n.cancelable), (i.detail = n.detail))
        : i.initEvent(e, !1, !1)),
    t.dispatchEvent(i);
}
function Du(t, e) {
  return function () {
    return Ua(this, t, e);
  };
}
function Su(t, e) {
  return function () {
    return Ua(this, t, e.apply(this, arguments));
  };
}
function Pu(t, e) {
  return this.each((typeof e == "function" ? Su : Du)(t, e));
}
function* Nu() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Fa = [null];
function Jt(t, e) {
  (this._groups = t), (this._parents = e);
}
function zn() {
  return new Jt([[document.documentElement]], Fa);
}
function Cu() {
  return this;
}
Jt.prototype = zn.prototype = {
  constructor: Jt,
  select: nl,
  selectAll: al,
  selectChild: cl,
  selectChildren: dl,
  filter: gl,
  data: bl,
  enter: ml,
  exit: kl,
  join: Ml,
  merge: Tl,
  selection: Cu,
  order: Dl,
  sort: Sl,
  call: Nl,
  nodes: Cl,
  node: El,
  size: Al,
  empty: Ul,
  each: Fl,
  attr: Yl,
  style: Gl,
  property: Ql,
  classed: $l,
  text: ru,
  html: su,
  raise: uu,
  lower: fu,
  append: hu,
  insert: du,
  remove: mu,
  clone: _u,
  datum: wu,
  on: Tu,
  dispatch: Pu,
  [Symbol.iterator]: Nu,
};
function xe(t) {
  return typeof t == "string"
    ? new Jt([[document.querySelector(t)]], [document.documentElement])
    : new Jt([[t]], Fa);
}
function yr(t, e, n) {
  (t.prototype = e.prototype = n), (n.constructor = t);
}
function xi(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function _n() {}
var Re = 0.7,
  pn = 1 / Re,
  cn = "\\s*([+-]?\\d+)\\s*",
  En = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  ge = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  Eu = /^#([0-9a-f]{3,8})$/,
  Au = new RegExp(`^rgb\\(${cn},${cn},${cn}\\)$`),
  Uu = new RegExp(`^rgb\\(${ge},${ge},${ge}\\)$`),
  Fu = new RegExp(`^rgba\\(${cn},${cn},${cn},${En}\\)$`),
  zu = new RegExp(`^rgba\\(${ge},${ge},${ge},${En}\\)$`),
  Iu = new RegExp(`^hsl\\(${En},${ge},${ge}\\)$`),
  Lu = new RegExp(`^hsla\\(${En},${ge},${ge},${En}\\)$`),
  Mo = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
yr(_n, Ve, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: To,
  formatHex: To,
  formatHex8: Hu,
  formatHsl: Ru,
  formatRgb: Do,
  toString: Do,
});
function To() {
  return this.rgb().formatHex();
}
function Hu() {
  return this.rgb().formatHex8();
}
function Ru() {
  return Ia(this).formatHsl();
}
function Do() {
  return this.rgb().formatRgb();
}
function Ve(t) {
  var e, n;
  return (
    (t = (t + "").trim().toLowerCase()),
    (e = Eu.exec(t))
      ? ((n = e[1].length),
        (e = parseInt(e[1], 16)),
        n === 6
          ? So(e)
          : n === 3
          ? new qt(
              ((e >> 8) & 15) | ((e >> 4) & 240),
              ((e >> 4) & 15) | (e & 240),
              ((e & 15) << 4) | (e & 15),
              1
            )
          : n === 8
          ? Bn(
              (e >> 24) & 255,
              (e >> 16) & 255,
              (e >> 8) & 255,
              (e & 255) / 255
            )
          : n === 4
          ? Bn(
              ((e >> 12) & 15) | ((e >> 8) & 240),
              ((e >> 8) & 15) | ((e >> 4) & 240),
              ((e >> 4) & 15) | (e & 240),
              (((e & 15) << 4) | (e & 15)) / 255
            )
          : null)
      : (e = Au.exec(t))
      ? new qt(e[1], e[2], e[3], 1)
      : (e = Uu.exec(t))
      ? new qt((e[1] * 255) / 100, (e[2] * 255) / 100, (e[3] * 255) / 100, 1)
      : (e = Fu.exec(t))
      ? Bn(e[1], e[2], e[3], e[4])
      : (e = zu.exec(t))
      ? Bn((e[1] * 255) / 100, (e[2] * 255) / 100, (e[3] * 255) / 100, e[4])
      : (e = Iu.exec(t))
      ? Co(e[1], e[2] / 100, e[3] / 100, 1)
      : (e = Lu.exec(t))
      ? Co(e[1], e[2] / 100, e[3] / 100, e[4])
      : Mo.hasOwnProperty(t)
      ? So(Mo[t])
      : t === "transparent"
      ? new qt(NaN, NaN, NaN, 0)
      : null
  );
}
function So(t) {
  return new qt((t >> 16) & 255, (t >> 8) & 255, t & 255, 1);
}
function Bn(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new qt(t, e, n, r);
}
function za(t) {
  return (
    t instanceof _n || (t = Ve(t)),
    t ? ((t = t.rgb()), new qt(t.r, t.g, t.b, t.opacity)) : new qt()
  );
}
function ci(t, e, n, r) {
  return arguments.length === 1 ? za(t) : new qt(t, e, n, r == null ? 1 : r);
}
function qt(t, e, n, r) {
  (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
}
yr(
  qt,
  ci,
  xi(_n, {
    brighter(t) {
      return (
        (t = t == null ? pn : Math.pow(pn, t)),
        new qt(this.r * t, this.g * t, this.b * t, this.opacity)
      );
    },
    darker(t) {
      return (
        (t = t == null ? Re : Math.pow(Re, t)),
        new qt(this.r * t, this.g * t, this.b * t, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new qt(Le(this.r), Le(this.g), Le(this.b), or(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: Po,
    formatHex: Po,
    formatHex8: Vu,
    formatRgb: No,
    toString: No,
  })
);
function Po() {
  return `#${Ie(this.r)}${Ie(this.g)}${Ie(this.b)}`;
}
function Vu() {
  return `#${Ie(this.r)}${Ie(this.g)}${Ie(this.b)}${Ie(
    (isNaN(this.opacity) ? 1 : this.opacity) * 255
  )}`;
}
function No() {
  const t = or(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Le(this.r)}, ${Le(this.g)}, ${Le(
    this.b
  )}${t === 1 ? ")" : `, ${t})`}`;
}
function or(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Le(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Ie(t) {
  return (t = Le(t)), (t < 16 ? "0" : "") + t.toString(16);
}
function Co(t, e, n, r) {
  return (
    r <= 0
      ? (t = e = n = NaN)
      : n <= 0 || n >= 1
      ? (t = e = NaN)
      : e <= 0 && (t = NaN),
    new le(t, e, n, r)
  );
}
function Ia(t) {
  if (t instanceof le) return new le(t.h, t.s, t.l, t.opacity);
  if ((t instanceof _n || (t = Ve(t)), !t)) return new le();
  if (t instanceof le) return t;
  t = t.rgb();
  var e = t.r / 255,
    n = t.g / 255,
    r = t.b / 255,
    i = Math.min(e, n, r),
    o = Math.max(e, n, r),
    a = NaN,
    s = o - i,
    u = (o + i) / 2;
  return (
    s
      ? (e === o
          ? (a = (n - r) / s + (n < r) * 6)
          : n === o
          ? (a = (r - e) / s + 2)
          : (a = (e - n) / s + 4),
        (s /= u < 0.5 ? o + i : 2 - o - i),
        (a *= 60))
      : (s = u > 0 && u < 1 ? 0 : a),
    new le(a, s, u, t.opacity)
  );
}
function Yu(t, e, n, r) {
  return arguments.length === 1 ? Ia(t) : new le(t, e, n, r == null ? 1 : r);
}
function le(t, e, n, r) {
  (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
}
yr(
  le,
  Yu,
  xi(_n, {
    brighter(t) {
      return (
        (t = t == null ? pn : Math.pow(pn, t)),
        new le(this.h, this.s, this.l * t, this.opacity)
      );
    },
    darker(t) {
      return (
        (t = t == null ? Re : Math.pow(Re, t)),
        new le(this.h, this.s, this.l * t, this.opacity)
      );
    },
    rgb() {
      var t = (this.h % 360) + (this.h < 0) * 360,
        e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * e,
        i = 2 * n - r;
      return new qt(
        Vr(t >= 240 ? t - 240 : t + 120, i, r),
        Vr(t, i, r),
        Vr(t < 120 ? t + 240 : t - 120, i, r),
        this.opacity
      );
    },
    clamp() {
      return new le(Eo(this.h), Xn(this.s), Xn(this.l), or(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const t = or(this.opacity);
      return `${t === 1 ? "hsl(" : "hsla("}${Eo(this.h)}, ${
        Xn(this.s) * 100
      }%, ${Xn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
    },
  })
);
function Eo(t) {
  return (t = (t || 0) % 360), t < 0 ? t + 360 : t;
}
function Xn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Vr(t, e, n) {
  return (
    (t < 60
      ? e + ((n - e) * t) / 60
      : t < 180
      ? n
      : t < 240
      ? e + ((n - e) * (240 - t)) / 60
      : e) * 255
  );
}
const Ou = Math.PI / 180,
  qu = 180 / Math.PI;
var La = -0.14861,
  ki = 1.78277,
  Mi = -0.29227,
  _r = -0.90649,
  An = 1.97294,
  Ao = An * _r,
  Uo = An * ki,
  Fo = ki * Mi - _r * La;
function Wu(t) {
  if (t instanceof He) return new He(t.h, t.s, t.l, t.opacity);
  t instanceof qt || (t = za(t));
  var e = t.r / 255,
    n = t.g / 255,
    r = t.b / 255,
    i = (Fo * r + Ao * e - Uo * n) / (Fo + Ao - Uo),
    o = r - i,
    a = (An * (n - i) - Mi * o) / _r,
    s = Math.sqrt(a * a + o * o) / (An * i * (1 - i)),
    u = s ? Math.atan2(a, o) * qu - 120 : NaN;
  return new He(u < 0 ? u + 360 : u, s, i, t.opacity);
}
function ze(t, e, n, r) {
  return arguments.length === 1 ? Wu(t) : new He(t, e, n, r == null ? 1 : r);
}
function He(t, e, n, r) {
  (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
}
yr(
  He,
  ze,
  xi(_n, {
    brighter(t) {
      return (
        (t = t == null ? pn : Math.pow(pn, t)),
        new He(this.h, this.s, this.l * t, this.opacity)
      );
    },
    darker(t) {
      return (
        (t = t == null ? Re : Math.pow(Re, t)),
        new He(this.h, this.s, this.l * t, this.opacity)
      );
    },
    rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * Ou,
        e = +this.l,
        n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
        r = Math.cos(t),
        i = Math.sin(t);
      return new qt(
        255 * (e + n * (La * r + ki * i)),
        255 * (e + n * (Mi * r + _r * i)),
        255 * (e + n * (An * r)),
        this.opacity
      );
    },
  })
);
var wr = (t) => () => t;
function Ha(t, e) {
  return function (n) {
    return t + n * e;
  };
}
function Gu(t, e, n) {
  return (
    (t = Math.pow(t, n)),
    (e = Math.pow(e, n) - t),
    (n = 1 / n),
    function (r) {
      return Math.pow(t + r * e, n);
    }
  );
}
function Bu(t, e) {
  var n = e - t;
  return n
    ? Ha(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n)
    : wr(isNaN(t) ? e : t);
}
function Xu(t) {
  return (t = +t) == 1
    ? fn
    : function (e, n) {
        return n - e ? Gu(e, n, t) : wr(isNaN(e) ? n : e);
      };
}
function fn(t, e) {
  var n = e - t;
  return n ? Ha(t, n) : wr(isNaN(t) ? e : t);
}
var ar = (function t(e) {
  var n = Xu(e);
  function r(i, o) {
    var a = n((i = ci(i)).r, (o = ci(o)).r),
      s = n(i.g, o.g),
      u = n(i.b, o.b),
      l = fn(i.opacity, o.opacity);
    return function (f) {
      return (
        (i.r = a(f)), (i.g = s(f)), (i.b = u(f)), (i.opacity = l(f)), i + ""
      );
    };
  }
  return (r.gamma = t), r;
})(1);
function Zu(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0,
    r = e.slice(),
    i;
  return function (o) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - o) + e[i] * o;
    return r;
  };
}
function Qu(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Ju(t, e) {
  var n = e ? e.length : 0,
    r = t ? Math.min(n, t.length) : 0,
    i = new Array(r),
    o = new Array(n),
    a;
  for (a = 0; a < r; ++a) i[a] = br(t[a], e[a]);
  for (; a < n; ++a) o[a] = e[a];
  return function (s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function Ku(t, e) {
  var n = new Date();
  return (
    (t = +t),
    (e = +e),
    function (r) {
      return n.setTime(t * (1 - r) + e * r), n;
    }
  );
}
function se(t, e) {
  return (
    (t = +t),
    (e = +e),
    function (n) {
      return t * (1 - n) + e * n;
    }
  );
}
function ju(t, e) {
  var n = {},
    r = {},
    i;
  (t === null || typeof t != "object") && (t = {}),
    (e === null || typeof e != "object") && (e = {});
  for (i in e) i in t ? (n[i] = br(t[i], e[i])) : (r[i] = e[i]);
  return function (o) {
    for (i in n) r[i] = n[i](o);
    return r;
  };
}
var fi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Yr = new RegExp(fi.source, "g");
function $u(t) {
  return function () {
    return t;
  };
}
function tc(t) {
  return function (e) {
    return t(e) + "";
  };
}
function Ra(t, e) {
  var n = (fi.lastIndex = Yr.lastIndex = 0),
    r,
    i,
    o,
    a = -1,
    s = [],
    u = [];
  for (t = t + "", e = e + ""; (r = fi.exec(t)) && (i = Yr.exec(e)); )
    (o = i.index) > n &&
      ((o = e.slice(n, o)), s[a] ? (s[a] += o) : (s[++a] = o)),
      (r = r[0]) === (i = i[0])
        ? s[a]
          ? (s[a] += i)
          : (s[++a] = i)
        : ((s[++a] = null), u.push({ i: a, x: se(r, i) })),
      (n = Yr.lastIndex);
  return (
    n < e.length && ((o = e.slice(n)), s[a] ? (s[a] += o) : (s[++a] = o)),
    s.length < 2
      ? u[0]
        ? tc(u[0].x)
        : $u(e)
      : ((e = u.length),
        function (l) {
          for (var f = 0, h; f < e; ++f) s[(h = u[f]).i] = h.x(l);
          return s.join("");
        })
  );
}
function br(t, e) {
  var n = typeof e,
    r;
  return e == null || n === "boolean"
    ? wr(e)
    : (n === "number"
        ? se
        : n === "string"
        ? (r = Ve(e))
          ? ((e = r), ar)
          : Ra
        : e instanceof Ve
        ? ar
        : e instanceof Date
        ? Ku
        : Qu(e)
        ? Zu
        : Array.isArray(e)
        ? Ju
        : (typeof e.valueOf != "function" && typeof e.toString != "function") ||
          isNaN(e)
        ? ju
        : se)(t, e);
}
function Va(t, e) {
  return (
    (t = +t),
    (e = +e),
    function (n) {
      return Math.round(t * (1 - n) + e * n);
    }
  );
}
var zo = 180 / Math.PI,
  hi = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function Ya(t, e, n, r, i, o) {
  var a, s, u;
  return (
    (a = Math.sqrt(t * t + e * e)) && ((t /= a), (e /= a)),
    (u = t * n + e * r) && ((n -= t * u), (r -= e * u)),
    (s = Math.sqrt(n * n + r * r)) && ((n /= s), (r /= s), (u /= s)),
    t * r < e * n && ((t = -t), (e = -e), (u = -u), (a = -a)),
    {
      translateX: i,
      translateY: o,
      rotate: Math.atan2(e, t) * zo,
      skewX: Math.atan(u) * zo,
      scaleX: a,
      scaleY: s,
    }
  );
}
var Zn;
function ec(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(
    t + ""
  );
  return e.isIdentity ? hi : Ya(e.a, e.b, e.c, e.d, e.e, e.f);
}
function nc(t) {
  return t == null ||
    (Zn || (Zn = document.createElementNS("http://www.w3.org/2000/svg", "g")),
    Zn.setAttribute("transform", t),
    !(t = Zn.transform.baseVal.consolidate()))
    ? hi
    : ((t = t.matrix), Ya(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Oa(t, e, n, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, f, h, p, d, k) {
    if (l !== h || f !== p) {
      var S = d.push("translate(", null, e, null, n);
      k.push({ i: S - 4, x: se(l, h) }, { i: S - 2, x: se(f, p) });
    } else (h || p) && d.push("translate(" + h + e + p + n);
  }
  function a(l, f, h, p) {
    l !== f
      ? (l - f > 180 ? (f += 360) : f - l > 180 && (l += 360),
        p.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: se(l, f) }))
      : f && h.push(i(h) + "rotate(" + f + r);
  }
  function s(l, f, h, p) {
    l !== f
      ? p.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: se(l, f) })
      : f && h.push(i(h) + "skewX(" + f + r);
  }
  function u(l, f, h, p, d, k) {
    if (l !== h || f !== p) {
      var S = d.push(i(d) + "scale(", null, ",", null, ")");
      k.push({ i: S - 4, x: se(l, h) }, { i: S - 2, x: se(f, p) });
    } else (h !== 1 || p !== 1) && d.push(i(d) + "scale(" + h + "," + p + ")");
  }
  return function (l, f) {
    var h = [],
      p = [];
    return (
      (l = t(l)),
      (f = t(f)),
      o(l.translateX, l.translateY, f.translateX, f.translateY, h, p),
      a(l.rotate, f.rotate, h, p),
      s(l.skewX, f.skewX, h, p),
      u(l.scaleX, l.scaleY, f.scaleX, f.scaleY, h, p),
      (l = f = null),
      function (d) {
        for (var k = -1, S = p.length, F; ++k < S; ) h[(F = p[k]).i] = F.x(d);
        return h.join("");
      }
    );
  };
}
var rc = Oa(ec, "px, ", "px)", "deg)"),
  ic = Oa(nc, ", ", ")", ")");
function qa(t) {
  return (function e(n) {
    n = +n;
    function r(i, o) {
      var a = t((i = ze(i)).h, (o = ze(o)).h),
        s = fn(i.s, o.s),
        u = fn(i.l, o.l),
        l = fn(i.opacity, o.opacity);
      return function (f) {
        return (
          (i.h = a(f)),
          (i.s = s(f)),
          (i.l = u(Math.pow(f, n))),
          (i.opacity = l(f)),
          i + ""
        );
      };
    }
    return (r.gamma = e), r;
  })(1);
}
qa(Bu);
var Wa = qa(fn),
  dn = 0,
  Sn = 0,
  bn = 0,
  Ga = 1e3,
  sr,
  Pn,
  lr = 0,
  Ye = 0,
  xr = 0,
  Un = typeof performance == "object" && performance.now ? performance : Date,
  Ba =
    typeof window == "object" && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (t) {
          setTimeout(t, 17);
        };
function Ti() {
  return Ye || (Ba(oc), (Ye = Un.now() + xr));
}
function oc() {
  Ye = 0;
}
function ur() {
  this._call = this._time = this._next = null;
}
ur.prototype = Xa.prototype = {
  constructor: ur,
  restart: function (t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    (n = (n == null ? Ti() : +n) + (e == null ? 0 : +e)),
      !this._next &&
        Pn !== this &&
        (Pn ? (Pn._next = this) : (sr = this), (Pn = this)),
      (this._call = t),
      (this._time = n),
      pi();
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), pi());
  },
};
function Xa(t, e, n) {
  var r = new ur();
  return r.restart(t, e, n), r;
}
function ac() {
  Ti(), ++dn;
  for (var t = sr, e; t; )
    (e = Ye - t._time) >= 0 && t._call.call(void 0, e), (t = t._next);
  --dn;
}
function Io() {
  (Ye = (lr = Un.now()) + xr), (dn = Sn = 0);
  try {
    ac();
  } finally {
    (dn = 0), lc(), (Ye = 0);
  }
}
function sc() {
  var t = Un.now(),
    e = t - lr;
  e > Ga && ((xr -= e), (lr = t));
}
function lc() {
  for (var t, e = sr, n, r = 1 / 0; e; )
    e._call
      ? (r > e._time && (r = e._time), (t = e), (e = e._next))
      : ((n = e._next), (e._next = null), (e = t ? (t._next = n) : (sr = n)));
  (Pn = t), pi(r);
}
function pi(t) {
  if (!dn) {
    Sn && (Sn = clearTimeout(Sn));
    var e = t - Ye;
    e > 24
      ? (t < 1 / 0 && (Sn = setTimeout(Io, t - Un.now() - xr)),
        bn && (bn = clearInterval(bn)))
      : (bn || ((lr = Un.now()), (bn = setInterval(sc, Ga))), (dn = 1), Ba(Io));
  }
}
function Lo(t, e, n) {
  var r = new ur();
  return (
    (e = e == null ? 0 : +e),
    r.restart(
      (i) => {
        r.stop(), t(i + e);
      },
      e,
      n
    ),
    r
  );
}
var uc = xa("start", "end", "cancel", "interrupt"),
  cc = [],
  Za = 0,
  Ho = 1,
  di = 2,
  tr = 3,
  Ro = 4,
  gi = 5,
  er = 6;
function kr(t, e, n, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  fc(t, n, {
    name: e,
    index: r,
    group: i,
    on: uc,
    tween: cc,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Za,
  });
}
function Di(t, e) {
  var n = ue(t, e);
  if (n.state > Za) throw new Error("too late; already scheduled");
  return n;
}
function me(t, e) {
  var n = ue(t, e);
  if (n.state > tr) throw new Error("too late; already running");
  return n;
}
function ue(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function fc(t, e, n) {
  var r = t.__transition,
    i;
  (r[e] = n), (n.timer = Xa(o, 0, n.time));
  function o(l) {
    (n.state = Ho),
      n.timer.restart(a, n.delay, n.time),
      n.delay <= l && a(l - n.delay);
  }
  function a(l) {
    var f, h, p, d;
    if (n.state !== Ho) return u();
    for (f in r)
      if (((d = r[f]), d.name === n.name)) {
        if (d.state === tr) return Lo(a);
        d.state === Ro
          ? ((d.state = er),
            d.timer.stop(),
            d.on.call("interrupt", t, t.__data__, d.index, d.group),
            delete r[f])
          : +f < e &&
            ((d.state = er),
            d.timer.stop(),
            d.on.call("cancel", t, t.__data__, d.index, d.group),
            delete r[f]);
      }
    if (
      (Lo(function () {
        n.state === tr &&
          ((n.state = Ro), n.timer.restart(s, n.delay, n.time), s(l));
      }),
      (n.state = di),
      n.on.call("start", t, t.__data__, n.index, n.group),
      n.state === di)
    ) {
      for (
        n.state = tr, i = new Array((p = n.tween.length)), f = 0, h = -1;
        f < p;
        ++f
      )
        (d = n.tween[f].value.call(t, t.__data__, n.index, n.group)) &&
          (i[++h] = d);
      i.length = h + 1;
    }
  }
  function s(l) {
    for (
      var f =
          l < n.duration
            ? n.ease.call(null, l / n.duration)
            : (n.timer.restart(u), (n.state = gi), 1),
        h = -1,
        p = i.length;
      ++h < p;

    )
      i[h].call(t, f);
    n.state === gi && (n.on.call("end", t, t.__data__, n.index, n.group), u());
  }
  function u() {
    (n.state = er), n.timer.stop(), delete r[e];
    for (var l in r) return;
    delete t.__transition;
  }
}
function hc(t, e) {
  var n = t.__transition,
    r,
    i,
    o = !0,
    a;
  if (!!n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        o = !1;
        continue;
      }
      (i = r.state > di && r.state < gi),
        (r.state = er),
        r.timer.stop(),
        r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group),
        delete n[a];
    }
    o && delete t.__transition;
  }
}
function pc(t) {
  return this.each(function () {
    hc(this, t);
  });
}
function dc(t, e) {
  var n, r;
  return function () {
    var i = me(this, t),
      o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === e) {
          (r = r.slice()), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function gc(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function () {
    var o = me(this, t),
      a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: e, value: n }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === e) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    o.tween = i;
  };
}
function mc(t, e) {
  var n = this._id;
  if (((t += ""), arguments.length < 2)) {
    for (var r = ue(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t) return a.value;
    return null;
  }
  return this.each((e == null ? dc : gc)(n, t, e));
}
function Si(t, e, n) {
  var r = t._id;
  return (
    t.each(function () {
      var i = me(this, r);
      (i.value || (i.value = {}))[e] = n.apply(this, arguments);
    }),
    function (i) {
      return ue(i, r).value[e];
    }
  );
}
function Qa(t, e) {
  var n;
  return (
    typeof e == "number"
      ? se
      : e instanceof Ve
      ? ar
      : (n = Ve(e))
      ? ((e = n), ar)
      : Ra
  )(t, e);
}
function vc(t) {
  return function () {
    this.removeAttribute(t);
  };
}
function yc(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local);
  };
}
function _c(t, e, n) {
  var r,
    i = n + "",
    o;
  return function () {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : (o = e((r = a), n));
  };
}
function wc(t, e, n) {
  var r,
    i = n + "",
    o;
  return function () {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : (o = e((r = a), n));
  };
}
function bc(t, e, n) {
  var r, i, o;
  return function () {
    var a,
      s = n(this),
      u;
    return s == null
      ? void this.removeAttribute(t)
      : ((a = this.getAttribute(t)),
        (u = s + ""),
        a === u
          ? null
          : a === r && u === i
          ? o
          : ((i = u), (o = e((r = a), s))));
  };
}
function xc(t, e, n) {
  var r, i, o;
  return function () {
    var a,
      s = n(this),
      u;
    return s == null
      ? void this.removeAttributeNS(t.space, t.local)
      : ((a = this.getAttributeNS(t.space, t.local)),
        (u = s + ""),
        a === u
          ? null
          : a === r && u === i
          ? o
          : ((i = u), (o = e((r = a), s))));
  };
}
function kc(t, e) {
  var n = vr(t),
    r = n === "transform" ? ic : Qa;
  return this.attrTween(
    t,
    typeof e == "function"
      ? (n.local ? xc : bc)(n, r, Si(this, "attr." + t, e))
      : e == null
      ? (n.local ? yc : vc)(n)
      : (n.local ? wc : _c)(n, r, e)
  );
}
function Mc(t, e) {
  return function (n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Tc(t, e) {
  return function (n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Dc(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Tc(t, o)), n;
  }
  return (i._value = e), i;
}
function Sc(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Mc(t, o)), n;
  }
  return (i._value = e), i;
}
function Pc(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = vr(t);
  return this.tween(n, (r.local ? Dc : Sc)(r, e));
}
function Nc(t, e) {
  return function () {
    Di(this, t).delay = +e.apply(this, arguments);
  };
}
function Cc(t, e) {
  return (
    (e = +e),
    function () {
      Di(this, t).delay = e;
    }
  );
}
function Ec(t) {
  var e = this._id;
  return arguments.length
    ? this.each((typeof t == "function" ? Nc : Cc)(e, t))
    : ue(this.node(), e).delay;
}
function Ac(t, e) {
  return function () {
    me(this, t).duration = +e.apply(this, arguments);
  };
}
function Uc(t, e) {
  return (
    (e = +e),
    function () {
      me(this, t).duration = e;
    }
  );
}
function Fc(t) {
  var e = this._id;
  return arguments.length
    ? this.each((typeof t == "function" ? Ac : Uc)(e, t))
    : ue(this.node(), e).duration;
}
function zc(t, e) {
  if (typeof e != "function") throw new Error();
  return function () {
    me(this, t).ease = e;
  };
}
function Ic(t) {
  var e = this._id;
  return arguments.length ? this.each(zc(e, t)) : ue(this.node(), e).ease;
}
function Lc(t, e) {
  return function () {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    me(this, t).ease = n;
  };
}
function Hc(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Lc(this._id, t));
}
function Rc(t) {
  typeof t != "function" && (t = Ta(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = (r[i] = []), u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new Se(r, this._parents, this._name, this._id);
}
function Vc(t) {
  if (t._id !== this._id) throw new Error();
  for (
    var e = this._groups,
      n = t._groups,
      r = e.length,
      i = n.length,
      o = Math.min(r, i),
      a = new Array(r),
      s = 0;
    s < o;
    ++s
  )
    for (
      var u = e[s], l = n[s], f = u.length, h = (a[s] = new Array(f)), p, d = 0;
      d < f;
      ++d
    )
      (p = u[d] || l[d]) && (h[d] = p);
  for (; s < r; ++s) a[s] = e[s];
  return new Se(a, this._parents, this._name, this._id);
}
function Yc(t) {
  return (t + "")
    .trim()
    .split(/^|\s+/)
    .every(function (e) {
      var n = e.indexOf(".");
      return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
    });
}
function Oc(t, e, n) {
  var r,
    i,
    o = Yc(e) ? Di : me;
  return function () {
    var a = o(this, t),
      s = a.on;
    s !== r && (i = (r = s).copy()).on(e, n), (a.on = i);
  };
}
function qc(t, e) {
  var n = this._id;
  return arguments.length < 2
    ? ue(this.node(), n).on.on(t)
    : this.each(Oc(n, t, e));
}
function Wc(t) {
  return function () {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Gc() {
  return this.on("end.remove", Wc(this._id));
}
function Bc(t) {
  var e = this._name,
    n = this._id;
  typeof t != "function" && (t = wi(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (
      var s = r[a], u = s.length, l = (o[a] = new Array(u)), f, h, p = 0;
      p < u;
      ++p
    )
      (f = s[p]) &&
        (h = t.call(f, f.__data__, p, s)) &&
        ("__data__" in f && (h.__data__ = f.__data__),
        (l[p] = h),
        kr(l[p], e, n, p, l, ue(f, n)));
  return new Se(o, this._parents, e, n);
}
function Xc(t) {
  var e = this._name,
    n = this._id;
  typeof t != "function" && (t = Ma(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, f, h = 0; h < l; ++h)
      if ((f = u[h])) {
        for (
          var p = t.call(f, f.__data__, h, u),
            d,
            k = ue(f, n),
            S = 0,
            F = p.length;
          S < F;
          ++S
        )
          (d = p[S]) && kr(d, e, n, S, p, k);
        o.push(p), a.push(f);
      }
  return new Se(o, a, e, n);
}
var Zc = zn.prototype.constructor;
function Qc() {
  return new Zc(this._groups, this._parents);
}
function Jc(t, e) {
  var n, r, i;
  return function () {
    var o = hn(this, t),
      a = (this.style.removeProperty(t), hn(this, t));
    return o === a ? null : o === n && a === r ? i : (i = e((n = o), (r = a)));
  };
}
function Ja(t) {
  return function () {
    this.style.removeProperty(t);
  };
}
function Kc(t, e, n) {
  var r,
    i = n + "",
    o;
  return function () {
    var a = hn(this, t);
    return a === i ? null : a === r ? o : (o = e((r = a), n));
  };
}
function jc(t, e, n) {
  var r, i, o;
  return function () {
    var a = hn(this, t),
      s = n(this),
      u = s + "";
    return (
      s == null && (u = s = (this.style.removeProperty(t), hn(this, t))),
      a === u ? null : a === r && u === i ? o : ((i = u), (o = e((r = a), s)))
    );
  };
}
function $c(t, e) {
  var n,
    r,
    i,
    o = "style." + e,
    a = "end." + o,
    s;
  return function () {
    var u = me(this, t),
      l = u.on,
      f = u.value[o] == null ? s || (s = Ja(e)) : void 0;
    (l !== n || i !== f) && (r = (n = l).copy()).on(a, (i = f)), (u.on = r);
  };
}
function tf(t, e, n) {
  var r = (t += "") == "transform" ? rc : Qa;
  return e == null
    ? this.styleTween(t, Jc(t, r)).on("end.style." + t, Ja(t))
    : typeof e == "function"
    ? this.styleTween(t, jc(t, r, Si(this, "style." + t, e))).each(
        $c(this._id, t)
      )
    : this.styleTween(t, Kc(t, r, e), n).on("end.style." + t, null);
}
function ef(t, e, n) {
  return function (r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function nf(t, e, n) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && ef(t, a, n)), r;
  }
  return (o._value = e), o;
}
function rf(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, nf(t, e, n == null ? "" : n));
}
function of(t) {
  return function () {
    this.textContent = t;
  };
}
function af(t) {
  return function () {
    var e = t(this);
    this.textContent = e == null ? "" : e;
  };
}
function sf(t) {
  return this.tween(
    "text",
    typeof t == "function"
      ? af(Si(this, "text", t))
      : of(t == null ? "" : t + "")
  );
}
function lf(t) {
  return function (e) {
    this.textContent = t.call(this, e);
  };
}
function uf(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && lf(i)), e;
  }
  return (r._value = t), r;
}
function cf(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, uf(t));
}
function ff() {
  for (
    var t = this._name,
      e = this._id,
      n = Ka(),
      r = this._groups,
      i = r.length,
      o = 0;
    o < i;
    ++o
  )
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if ((u = a[l])) {
        var f = ue(u, e);
        kr(u, t, n, l, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease,
        });
      }
  return new Se(r, this._parents, t, n);
}
function hf() {
  var t,
    e,
    n = this,
    r = n._id,
    i = n.size();
  return new Promise(function (o, a) {
    var s = { value: a },
      u = {
        value: function () {
          --i === 0 && o();
        },
      };
    n.each(function () {
      var l = me(this, r),
        f = l.on;
      f !== t &&
        ((e = (t = f).copy()),
        e._.cancel.push(s),
        e._.interrupt.push(s),
        e._.end.push(u)),
        (l.on = e);
    }),
      i === 0 && o();
  });
}
var pf = 0;
function Se(t, e, n, r) {
  (this._groups = t), (this._parents = e), (this._name = n), (this._id = r);
}
function Ka() {
  return ++pf;
}
var ke = zn.prototype;
Se.prototype = {
  constructor: Se,
  select: Bc,
  selectAll: Xc,
  selectChild: ke.selectChild,
  selectChildren: ke.selectChildren,
  filter: Rc,
  merge: Vc,
  selection: Qc,
  transition: ff,
  call: ke.call,
  nodes: ke.nodes,
  node: ke.node,
  size: ke.size,
  empty: ke.empty,
  each: ke.each,
  on: qc,
  attr: kc,
  attrTween: Pc,
  style: tf,
  styleTween: rf,
  text: sf,
  textTween: cf,
  remove: Gc,
  tween: mc,
  delay: Ec,
  duration: Fc,
  ease: Ic,
  easeVarying: Hc,
  end: hf,
  [Symbol.iterator]: ke[Symbol.iterator],
};
function df(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var gf = { time: null, delay: 0, duration: 250, ease: df };
function mf(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode)) throw new Error(`transition ${e} not found`);
  return n;
}
function vf(t) {
  var e, n;
  t instanceof Se
    ? ((e = t._id), (t = t._name))
    : ((e = Ka()), ((n = gf).time = Ti()), (t = t == null ? null : t + ""));
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && kr(u, t, e, l, a, n || mf(u, e));
  return new Se(r, this._parents, t, e);
}
zn.prototype.interrupt = pc;
zn.prototype.transition = vf;
var Vo = {},
  Or = {},
  qr = 34,
  xn = 10,
  Wr = 13;
function ja(t) {
  return new Function(
    "d",
    "return {" +
      t
        .map(function (e, n) {
          return JSON.stringify(e) + ": d[" + n + '] || ""';
        })
        .join(",") +
      "}"
  );
}
function yf(t, e) {
  var n = ja(t);
  return function (r, i) {
    return e(n(r), i, t);
  };
}
function Yo(t) {
  var e = Object.create(null),
    n = [];
  return (
    t.forEach(function (r) {
      for (var i in r) i in e || n.push((e[i] = i));
    }),
    n
  );
}
function Xt(t, e) {
  var n = t + "",
    r = n.length;
  return r < e ? new Array(e - r + 1).join(0) + n : n;
}
function _f(t) {
  return t < 0 ? "-" + Xt(-t, 6) : t > 9999 ? "+" + Xt(t, 6) : Xt(t, 4);
}
function wf(t) {
  var e = t.getUTCHours(),
    n = t.getUTCMinutes(),
    r = t.getUTCSeconds(),
    i = t.getUTCMilliseconds();
  return isNaN(t)
    ? "Invalid Date"
    : _f(t.getUTCFullYear()) +
        "-" +
        Xt(t.getUTCMonth() + 1, 2) +
        "-" +
        Xt(t.getUTCDate(), 2) +
        (i
          ? "T" +
            Xt(e, 2) +
            ":" +
            Xt(n, 2) +
            ":" +
            Xt(r, 2) +
            "." +
            Xt(i, 3) +
            "Z"
          : r
          ? "T" + Xt(e, 2) + ":" + Xt(n, 2) + ":" + Xt(r, 2) + "Z"
          : n || e
          ? "T" + Xt(e, 2) + ":" + Xt(n, 2) + "Z"
          : "");
}
function bf(t) {
  var e = new RegExp(
      '["' +
        t +
        `
\r]`
    ),
    n = t.charCodeAt(0);
  function r(h, p) {
    var d,
      k,
      S = i(h, function (F, z) {
        if (d) return d(F, z - 1);
        (k = F), (d = p ? yf(F, p) : ja(F));
      });
    return (S.columns = k || []), S;
  }
  function i(h, p) {
    var d = [],
      k = h.length,
      S = 0,
      F = 0,
      z,
      B = k <= 0,
      O = !1;
    h.charCodeAt(k - 1) === xn && --k, h.charCodeAt(k - 1) === Wr && --k;
    function W() {
      if (B) return Or;
      if (O) return (O = !1), Vo;
      var M,
        Y = S,
        nt;
      if (h.charCodeAt(Y) === qr) {
        for (
          ;
          (S++ < k && h.charCodeAt(S) !== qr) || h.charCodeAt(++S) === qr;

        );
        return (
          (M = S) >= k
            ? (B = !0)
            : (nt = h.charCodeAt(S++)) === xn
            ? (O = !0)
            : nt === Wr && ((O = !0), h.charCodeAt(S) === xn && ++S),
          h.slice(Y + 1, M - 1).replace(/""/g, '"')
        );
      }
      for (; S < k; ) {
        if ((nt = h.charCodeAt((M = S++))) === xn) O = !0;
        else if (nt === Wr) (O = !0), h.charCodeAt(S) === xn && ++S;
        else if (nt !== n) continue;
        return h.slice(Y, M);
      }
      return (B = !0), h.slice(Y, k);
    }
    for (; (z = W()) !== Or; ) {
      for (var H = []; z !== Vo && z !== Or; ) H.push(z), (z = W());
      (p && (H = p(H, F++)) == null) || d.push(H);
    }
    return d;
  }
  function o(h, p) {
    return h.map(function (d) {
      return p
        .map(function (k) {
          return f(d[k]);
        })
        .join(t);
    });
  }
  function a(h, p) {
    return (
      p == null && (p = Yo(h)),
      [p.map(f).join(t)].concat(o(h, p)).join(`
`)
    );
  }
  function s(h, p) {
    return (
      p == null && (p = Yo(h)),
      o(h, p).join(`
`)
    );
  }
  function u(h) {
    return h.map(l).join(`
`);
  }
  function l(h) {
    return h.map(f).join(t);
  }
  function f(h) {
    return h == null
      ? ""
      : h instanceof Date
      ? wf(h)
      : e.test((h += ""))
      ? '"' + h.replace(/"/g, '""') + '"'
      : h;
  }
  return {
    parse: r,
    parseRows: i,
    format: a,
    formatBody: s,
    formatRows: u,
    formatRow: l,
    formatValue: f,
  };
}
var xf = bf(","),
  kf = xf.parseRows;
function Mf(t) {
  return Math.abs((t = Math.round(t))) >= 1e21
    ? t.toLocaleString("en").replace(/,/g, "")
    : t.toString(10);
}
function cr(t, e) {
  if (
    (n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0
  )
    return null;
  var n,
    r = t.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)];
}
function gn(t) {
  return (t = cr(Math.abs(t))), t ? t[1] : NaN;
}
function Tf(t, e) {
  return function (n, r) {
    for (
      var i = n.length, o = [], a = 0, s = t[0], u = 0;
      i > 0 &&
      s > 0 &&
      (u + s + 1 > r && (s = Math.max(1, r - u)),
      o.push(n.substring((i -= s), i + s)),
      !((u += s + 1) > r));

    )
      s = t[(a = (a + 1) % t.length)];
    return o.reverse().join(e);
  };
}
function Df(t) {
  return function (e) {
    return e.replace(/[0-9]/g, function (n) {
      return t[+n];
    });
  };
}
var Sf =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Fn(t) {
  if (!(e = Sf.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new Pi({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10],
  });
}
Fn.prototype = Pi.prototype;
function Pi(t) {
  (this.fill = t.fill === void 0 ? " " : t.fill + ""),
    (this.align = t.align === void 0 ? ">" : t.align + ""),
    (this.sign = t.sign === void 0 ? "-" : t.sign + ""),
    (this.symbol = t.symbol === void 0 ? "" : t.symbol + ""),
    (this.zero = !!t.zero),
    (this.width = t.width === void 0 ? void 0 : +t.width),
    (this.comma = !!t.comma),
    (this.precision = t.precision === void 0 ? void 0 : +t.precision),
    (this.trim = !!t.trim),
    (this.type = t.type === void 0 ? "" : t.type + "");
}
Pi.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function Pf(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), (i = n);
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var $a;
function Nf(t, e) {
  var n = cr(t, e);
  if (!n) return t + "";
  var r = n[0],
    i = n[1],
    o = i - ($a = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    a = r.length;
  return o === a
    ? r
    : o > a
    ? r + new Array(o - a + 1).join("0")
    : o > 0
    ? r.slice(0, o) + "." + r.slice(o)
    : "0." + new Array(1 - o).join("0") + cr(t, Math.max(0, e + o - 1))[0];
}
function Oo(t, e) {
  var n = cr(t, e);
  if (!n) return t + "";
  var r = n[0],
    i = n[1];
  return i < 0
    ? "0." + new Array(-i).join("0") + r
    : r.length > i + 1
    ? r.slice(0, i + 1) + "." + r.slice(i + 1)
    : r + new Array(i - r.length + 2).join("0");
}
var qo = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Mf,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Oo(t * 100, e),
  r: Oo,
  s: Nf,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16),
};
function Wo(t) {
  return t;
}
var Go = Array.prototype.map,
  Bo = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "\xB5",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function Cf(t) {
  var e =
      t.grouping === void 0 || t.thousands === void 0
        ? Wo
        : Tf(Go.call(t.grouping, Number), t.thousands + ""),
    n = t.currency === void 0 ? "" : t.currency[0] + "",
    r = t.currency === void 0 ? "" : t.currency[1] + "",
    i = t.decimal === void 0 ? "." : t.decimal + "",
    o = t.numerals === void 0 ? Wo : Df(Go.call(t.numerals, String)),
    a = t.percent === void 0 ? "%" : t.percent + "",
    s = t.minus === void 0 ? "\u2212" : t.minus + "",
    u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(h) {
    h = Fn(h);
    var p = h.fill,
      d = h.align,
      k = h.sign,
      S = h.symbol,
      F = h.zero,
      z = h.width,
      B = h.comma,
      O = h.precision,
      W = h.trim,
      H = h.type;
    H === "n"
      ? ((B = !0), (H = "g"))
      : qo[H] || (O === void 0 && (O = 12), (W = !0), (H = "g")),
      (F || (p === "0" && d === "=")) && ((F = !0), (p = "0"), (d = "="));
    var M =
        S === "$"
          ? n
          : S === "#" && /[boxX]/.test(H)
          ? "0" + H.toLowerCase()
          : "",
      Y = S === "$" ? r : /[%p]/.test(H) ? a : "",
      nt = qo[H],
      Q = /[defgprs%]/.test(H);
    O =
      O === void 0
        ? 6
        : /[gprs]/.test(H)
        ? Math.max(1, Math.min(21, O))
        : Math.max(0, Math.min(20, O));
    function Z(D) {
      var J = M,
        et = Y,
        ht,
        wt,
        St;
      if (H === "c") (et = nt(D) + et), (D = "");
      else {
        D = +D;
        var ot = D < 0 || 1 / D < 0;
        if (
          ((D = isNaN(D) ? u : nt(Math.abs(D), O)),
          W && (D = Pf(D)),
          ot && +D == 0 && k !== "+" && (ot = !1),
          (J =
            (ot ? (k === "(" ? k : s) : k === "-" || k === "(" ? "" : k) + J),
          (et =
            (H === "s" ? Bo[8 + $a / 3] : "") +
            et +
            (ot && k === "(" ? ")" : "")),
          Q)
        ) {
          for (ht = -1, wt = D.length; ++ht < wt; )
            if (((St = D.charCodeAt(ht)), 48 > St || St > 57)) {
              (et = (St === 46 ? i + D.slice(ht + 1) : D.slice(ht)) + et),
                (D = D.slice(0, ht));
              break;
            }
        }
      }
      B && !F && (D = e(D, 1 / 0));
      var ut = J.length + D.length + et.length,
        ct = ut < z ? new Array(z - ut + 1).join(p) : "";
      switch (
        (B &&
          F &&
          ((D = e(ct + D, ct.length ? z - et.length : 1 / 0)), (ct = "")),
        d)
      ) {
        case "<":
          D = J + D + et + ct;
          break;
        case "=":
          D = J + ct + D + et;
          break;
        case "^":
          D = ct.slice(0, (ut = ct.length >> 1)) + J + D + et + ct.slice(ut);
          break;
        default:
          D = ct + J + D + et;
          break;
      }
      return o(D);
    }
    return (
      (Z.toString = function () {
        return h + "";
      }),
      Z
    );
  }
  function f(h, p) {
    var d = l(((h = Fn(h)), (h.type = "f"), h)),
      k = Math.max(-8, Math.min(8, Math.floor(gn(p) / 3))) * 3,
      S = Math.pow(10, -k),
      F = Bo[8 + k / 3];
    return function (z) {
      return d(S * z) + F;
    };
  }
  return { format: l, formatPrefix: f };
}
var Qn, Ni, ts;
Ef({ thousands: ",", grouping: [3], currency: ["$", ""] });
function Ef(t) {
  return (Qn = Cf(t)), (Ni = Qn.format), (ts = Qn.formatPrefix), Qn;
}
function Af(t) {
  return Math.max(0, -gn(Math.abs(t)));
}
function Uf(t, e) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(gn(e) / 3))) * 3 - gn(Math.abs(t))
  );
}
function Ff(t, e) {
  return (
    (t = Math.abs(t)), (e = Math.abs(e) - t), Math.max(0, gn(e) - gn(t)) + 1
  );
}
function In(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function es(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
    default: {
      this.domain(t),
        typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
  }
  return this;
}
const Xo = Symbol("implicit");
function Nn() {
  var t = new _o(),
    e = [],
    n = [],
    r = Xo;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== Xo) return r;
      t.set(o, (a = e.push(o) - 1));
    }
    return n[a % n.length];
  }
  return (
    (i.domain = function (o) {
      if (!arguments.length) return e.slice();
      (e = []), (t = new _o());
      for (const a of o) t.has(a) || t.set(a, e.push(a) - 1);
      return i;
    }),
    (i.range = function (o) {
      return arguments.length ? ((n = Array.from(o)), i) : n.slice();
    }),
    (i.unknown = function (o) {
      return arguments.length ? ((r = o), i) : r;
    }),
    (i.copy = function () {
      return Nn(e, n).unknown(r);
    }),
    In.apply(i, arguments),
    i
  );
}
function zf(t) {
  return function () {
    return t;
  };
}
function If(t) {
  return +t;
}
var Zo = [0, 1];
function ie(t) {
  return t;
}
function mi(t, e) {
  return (e -= t = +t)
    ? function (n) {
        return (n - t) / e;
      }
    : zf(isNaN(e) ? NaN : 0.5);
}
function Lf(t, e) {
  var n;
  return (
    t > e && ((n = t), (t = e), (e = n)),
    function (r) {
      return Math.max(t, Math.min(e, r));
    }
  );
}
function Hf(t, e, n) {
  var r = t[0],
    i = t[1],
    o = e[0],
    a = e[1];
  return (
    i < r ? ((r = mi(i, r)), (o = n(a, o))) : ((r = mi(r, i)), (o = n(o, a))),
    function (s) {
      return o(r(s));
    }
  );
}
function Rf(t, e, n) {
  var r = Math.min(t.length, e.length) - 1,
    i = new Array(r),
    o = new Array(r),
    a = -1;
  for (
    t[r] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
    ++a < r;

  )
    (i[a] = mi(t[a], t[a + 1])), (o[a] = n(e[a], e[a + 1]));
  return function (s) {
    var u = Hs(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function Mr(t, e) {
  return e
    .domain(t.domain())
    .range(t.range())
    .interpolate(t.interpolate())
    .clamp(t.clamp())
    .unknown(t.unknown());
}
function Ci() {
  var t = Zo,
    e = Zo,
    n = br,
    r,
    i,
    o,
    a = ie,
    s,
    u,
    l;
  function f() {
    var p = Math.min(t.length, e.length);
    return (
      a !== ie && (a = Lf(t[0], t[p - 1])),
      (s = p > 2 ? Rf : Hf),
      (u = l = null),
      h
    );
  }
  function h(p) {
    return p == null || isNaN((p = +p))
      ? o
      : (u || (u = s(t.map(r), e, n)))(r(a(p)));
  }
  return (
    (h.invert = function (p) {
      return a(i((l || (l = s(e, t.map(r), se)))(p)));
    }),
    (h.domain = function (p) {
      return arguments.length ? ((t = Array.from(p, If)), f()) : t.slice();
    }),
    (h.range = function (p) {
      return arguments.length ? ((e = Array.from(p)), f()) : e.slice();
    }),
    (h.rangeRound = function (p) {
      return (e = Array.from(p)), (n = Va), f();
    }),
    (h.clamp = function (p) {
      return arguments.length ? ((a = p ? !0 : ie), f()) : a !== ie;
    }),
    (h.interpolate = function (p) {
      return arguments.length ? ((n = p), f()) : n;
    }),
    (h.unknown = function (p) {
      return arguments.length ? ((o = p), h) : o;
    }),
    function (p, d) {
      return (r = p), (i = d), f();
    }
  );
}
function ns() {
  return Ci()(ie, ie);
}
function Vf(t, e, n, r) {
  var i = si(t, e, n),
    o;
  switch (((r = Fn(r == null ? ",f" : r)), r.type)) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(e));
      return (
        r.precision == null && !isNaN((o = Uf(i, a))) && (r.precision = o),
        ts(r, a)
      );
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null &&
        !isNaN((o = Ff(i, Math.max(Math.abs(t), Math.abs(e))))) &&
        (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null &&
        !isNaN((o = Af(i))) &&
        (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Ni(r);
}
function Ei(t) {
  var e = t.domain;
  return (
    (t.ticks = function (n) {
      var r = e();
      return ai(r[0], r[r.length - 1], n == null ? 10 : n);
    }),
    (t.tickFormat = function (n, r) {
      var i = e();
      return Vf(i[0], i[i.length - 1], n == null ? 10 : n, r);
    }),
    (t.nice = function (n) {
      n == null && (n = 10);
      var r = e(),
        i = 0,
        o = r.length - 1,
        a = r[i],
        s = r[o],
        u,
        l,
        f = 10;
      for (
        s < a && ((l = a), (a = s), (s = l), (l = i), (i = o), (o = l));
        f-- > 0;

      ) {
        if (((l = wa(a, s, n)), l === u)) return (r[i] = a), (r[o] = s), e(r);
        if (l > 0) (a = Math.floor(a / l) * l), (s = Math.ceil(s / l) * l);
        else if (l < 0) (a = Math.ceil(a * l) / l), (s = Math.floor(s * l) / l);
        else break;
        u = l;
      }
      return t;
    }),
    t
  );
}
function vi() {
  var t = ns();
  return (
    (t.copy = function () {
      return Mr(t, vi());
    }),
    In.apply(t, arguments),
    Ei(t)
  );
}
function rs(t, e) {
  t = t.slice();
  var n = 0,
    r = t.length - 1,
    i = t[n],
    o = t[r],
    a;
  return (
    o < i && ((a = n), (n = r), (r = a), (a = i), (i = o), (o = a)),
    (t[n] = e.floor(i)),
    (t[r] = e.ceil(o)),
    t
  );
}
function Qo(t) {
  return Math.log(t);
}
function Jo(t) {
  return Math.exp(t);
}
function Yf(t) {
  return -Math.log(-t);
}
function Of(t) {
  return -Math.exp(-t);
}
function qf(t) {
  return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
}
function Wf(t) {
  return t === 10 ? qf : t === Math.E ? Math.exp : (e) => Math.pow(t, e);
}
function Gf(t) {
  return t === Math.E
    ? Math.log
    : (t === 10 && Math.log10) ||
        (t === 2 && Math.log2) ||
        ((t = Math.log(t)), (e) => Math.log(e) / t);
}
function Ko(t) {
  return (e, n) => -t(-e, n);
}
function is(t) {
  const e = t(Qo, Jo),
    n = e.domain;
  let r = 10,
    i,
    o;
  function a() {
    return (
      (i = Gf(r)),
      (o = Wf(r)),
      n()[0] < 0 ? ((i = Ko(i)), (o = Ko(o)), t(Yf, Of)) : t(Qo, Jo),
      e
    );
  }
  return (
    (e.base = function (s) {
      return arguments.length ? ((r = +s), a()) : r;
    }),
    (e.domain = function (s) {
      return arguments.length ? (n(s), a()) : n();
    }),
    (e.ticks = (s) => {
      const u = n();
      let l = u[0],
        f = u[u.length - 1];
      const h = f < l;
      h && ([l, f] = [f, l]);
      let p = i(l),
        d = i(f),
        k,
        S;
      const F = s == null ? 10 : +s;
      let z = [];
      if (!(r % 1) && d - p < F) {
        if (((p = Math.floor(p)), (d = Math.ceil(d)), l > 0)) {
          for (; p <= d; ++p)
            for (k = 1; k < r; ++k)
              if (((S = p < 0 ? k / o(-p) : k * o(p)), !(S < l))) {
                if (S > f) break;
                z.push(S);
              }
        } else
          for (; p <= d; ++p)
            for (k = r - 1; k >= 1; --k)
              if (((S = p > 0 ? k / o(-p) : k * o(p)), !(S < l))) {
                if (S > f) break;
                z.push(S);
              }
        z.length * 2 < F && (z = ai(l, f, F));
      } else z = ai(p, d, Math.min(d - p, F)).map(o);
      return h ? z.reverse() : z;
    }),
    (e.tickFormat = (s, u) => {
      if (
        (s == null && (s = 10),
        u == null && (u = r === 10 ? "s" : ","),
        typeof u != "function" &&
          (!(r % 1) && (u = Fn(u)).precision == null && (u.trim = !0),
          (u = Ni(u))),
        s === 1 / 0)
      )
        return u;
      const l = Math.max(1, (r * s) / e.ticks().length);
      return (f) => {
        let h = f / o(Math.round(i(f)));
        return h * r < r - 0.5 && (h *= r), h <= l ? u(f) : "";
      };
    }),
    (e.nice = () =>
      n(
        rs(n(), {
          floor: (s) => o(Math.floor(i(s))),
          ceil: (s) => o(Math.ceil(i(s))),
        })
      )),
    e
  );
}
function de() {
  const t = is(Ci()).domain([1, 10]);
  return (t.copy = () => Mr(t, de()).base(t.base())), In.apply(t, arguments), t;
}
function jo(t) {
  return function (e) {
    return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
  };
}
function Bf(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function Xf(t) {
  return t < 0 ? -t * t : t * t;
}
function Zf(t) {
  var e = t(ie, ie),
    n = 1;
  function r() {
    return n === 1 ? t(ie, ie) : n === 0.5 ? t(Bf, Xf) : t(jo(n), jo(1 / n));
  }
  return (
    (e.exponent = function (i) {
      return arguments.length ? ((n = +i), r()) : n;
    }),
    Ei(e)
  );
}
function os() {
  var t = Zf(Ci());
  return (
    (t.copy = function () {
      return Mr(t, os()).exponent(t.exponent());
    }),
    In.apply(t, arguments),
    t
  );
}
function Jn() {
  return os.apply(null, arguments).exponent(0.5);
}
var Gr = new Date(),
  Br = new Date();
function Vt(t, e, n, r) {
  function i(o) {
    return t((o = arguments.length === 0 ? new Date() : new Date(+o))), o;
  }
  return (
    (i.floor = function (o) {
      return t((o = new Date(+o))), o;
    }),
    (i.ceil = function (o) {
      return t((o = new Date(o - 1))), e(o, 1), t(o), o;
    }),
    (i.round = function (o) {
      var a = i(o),
        s = i.ceil(o);
      return o - a < s - o ? a : s;
    }),
    (i.offset = function (o, a) {
      return e((o = new Date(+o)), a == null ? 1 : Math.floor(a)), o;
    }),
    (i.range = function (o, a, s) {
      var u = [],
        l;
      if (
        ((o = i.ceil(o)),
        (s = s == null ? 1 : Math.floor(s)),
        !(o < a) || !(s > 0))
      )
        return u;
      do u.push((l = new Date(+o))), e(o, s), t(o);
      while (l < o && o < a);
      return u;
    }),
    (i.filter = function (o) {
      return Vt(
        function (a) {
          if (a >= a) for (; t(a), !o(a); ) a.setTime(a - 1);
        },
        function (a, s) {
          if (a >= a)
            if (s < 0) for (; ++s <= 0; ) for (; e(a, -1), !o(a); );
            else for (; --s >= 0; ) for (; e(a, 1), !o(a); );
        }
      );
    }),
    n &&
      ((i.count = function (o, a) {
        return (
          Gr.setTime(+o), Br.setTime(+a), t(Gr), t(Br), Math.floor(n(Gr, Br))
        );
      }),
      (i.every = function (o) {
        return (
          (o = Math.floor(o)),
          !isFinite(o) || !(o > 0)
            ? null
            : o > 1
            ? i.filter(
                r
                  ? function (a) {
                      return r(a) % o === 0;
                    }
                  : function (a) {
                      return i.count(0, a) % o === 0;
                    }
              )
            : i
        );
      })),
    i
  );
}
var fr = Vt(
  function () {},
  function (t, e) {
    t.setTime(+t + e);
  },
  function (t, e) {
    return e - t;
  }
);
fr.every = function (t) {
  return (
    (t = Math.floor(t)),
    !isFinite(t) || !(t > 0)
      ? null
      : t > 1
      ? Vt(
          function (e) {
            e.setTime(Math.floor(e / t) * t);
          },
          function (e, n) {
            e.setTime(+e + n * t);
          },
          function (e, n) {
            return (n - e) / t;
          }
        )
      : fr
  );
};
var Qf = fr;
fr.range;
const Te = 1e3,
  oe = Te * 60,
  De = oe * 60,
  Oe = De * 24,
  Ai = Oe * 7,
  $o = Oe * 30,
  Xr = Oe * 365;
var as = Vt(
    function (t) {
      t.setTime(t - t.getMilliseconds());
    },
    function (t, e) {
      t.setTime(+t + e * Te);
    },
    function (t, e) {
      return (e - t) / Te;
    },
    function (t) {
      return t.getUTCSeconds();
    }
  ),
  Cn = as;
as.range;
var ss = Vt(
    function (t) {
      t.setTime(t - t.getMilliseconds() - t.getSeconds() * Te);
    },
    function (t, e) {
      t.setTime(+t + e * oe);
    },
    function (t, e) {
      return (e - t) / oe;
    },
    function (t) {
      return t.getMinutes();
    }
  ),
  ls = ss;
ss.range;
var us = Vt(
    function (t) {
      t.setTime(
        t - t.getMilliseconds() - t.getSeconds() * Te - t.getMinutes() * oe
      );
    },
    function (t, e) {
      t.setTime(+t + e * De);
    },
    function (t, e) {
      return (e - t) / De;
    },
    function (t) {
      return t.getHours();
    }
  ),
  cs = us;
us.range;
var fs = Vt(
    (t) => t.setHours(0, 0, 0, 0),
    (t, e) => t.setDate(t.getDate() + e),
    (t, e) =>
      (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * oe) / Oe,
    (t) => t.getDate() - 1
  ),
  Tr = fs;
fs.range;
function We(t) {
  return Vt(
    function (e) {
      e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
        e.setHours(0, 0, 0, 0);
    },
    function (e, n) {
      e.setDate(e.getDate() + n * 7);
    },
    function (e, n) {
      return (
        (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * oe) / Ai
      );
    }
  );
}
var Dr = We(0),
  hr = We(1),
  Jf = We(2),
  Kf = We(3),
  mn = We(4),
  jf = We(5),
  $f = We(6);
Dr.range;
hr.range;
Jf.range;
Kf.range;
mn.range;
jf.range;
$f.range;
var hs = Vt(
    function (t) {
      t.setDate(1), t.setHours(0, 0, 0, 0);
    },
    function (t, e) {
      t.setMonth(t.getMonth() + e);
    },
    function (t, e) {
      return (
        e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12
      );
    },
    function (t) {
      return t.getMonth();
    }
  ),
  ps = hs;
hs.range;
var Ui = Vt(
  function (t) {
    t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  },
  function (t, e) {
    t.setFullYear(t.getFullYear() + e);
  },
  function (t, e) {
    return e.getFullYear() - t.getFullYear();
  },
  function (t) {
    return t.getFullYear();
  }
);
Ui.every = function (t) {
  return !isFinite((t = Math.floor(t))) || !(t > 0)
    ? null
    : Vt(
        function (e) {
          e.setFullYear(Math.floor(e.getFullYear() / t) * t),
            e.setMonth(0, 1),
            e.setHours(0, 0, 0, 0);
        },
        function (e, n) {
          e.setFullYear(e.getFullYear() + n * t);
        }
      );
};
var qe = Ui;
Ui.range;
var ds = Vt(
    function (t) {
      t.setUTCSeconds(0, 0);
    },
    function (t, e) {
      t.setTime(+t + e * oe);
    },
    function (t, e) {
      return (e - t) / oe;
    },
    function (t) {
      return t.getUTCMinutes();
    }
  ),
  th = ds;
ds.range;
var gs = Vt(
    function (t) {
      t.setUTCMinutes(0, 0, 0);
    },
    function (t, e) {
      t.setTime(+t + e * De);
    },
    function (t, e) {
      return (e - t) / De;
    },
    function (t) {
      return t.getUTCHours();
    }
  ),
  eh = gs;
gs.range;
var ms = Vt(
    function (t) {
      t.setUTCHours(0, 0, 0, 0);
    },
    function (t, e) {
      t.setUTCDate(t.getUTCDate() + e);
    },
    function (t, e) {
      return (e - t) / Oe;
    },
    function (t) {
      return t.getUTCDate() - 1;
    }
  ),
  Fi = ms;
ms.range;
function Ge(t) {
  return Vt(
    function (e) {
      e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
        e.setUTCHours(0, 0, 0, 0);
    },
    function (e, n) {
      e.setUTCDate(e.getUTCDate() + n * 7);
    },
    function (e, n) {
      return (n - e) / Ai;
    }
  );
}
var zi = Ge(0),
  pr = Ge(1),
  nh = Ge(2),
  rh = Ge(3),
  vn = Ge(4),
  ih = Ge(5),
  oh = Ge(6);
zi.range;
pr.range;
nh.range;
rh.range;
vn.range;
ih.range;
oh.range;
var vs = Vt(
    function (t) {
      t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
    },
    function (t, e) {
      t.setUTCMonth(t.getUTCMonth() + e);
    },
    function (t, e) {
      return (
        e.getUTCMonth() -
        t.getUTCMonth() +
        (e.getUTCFullYear() - t.getUTCFullYear()) * 12
      );
    },
    function (t) {
      return t.getUTCMonth();
    }
  ),
  ah = vs;
vs.range;
var Ii = Vt(
  function (t) {
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  },
  function (t, e) {
    t.setUTCFullYear(t.getUTCFullYear() + e);
  },
  function (t, e) {
    return e.getUTCFullYear() - t.getUTCFullYear();
  },
  function (t) {
    return t.getUTCFullYear();
  }
);
Ii.every = function (t) {
  return !isFinite((t = Math.floor(t))) || !(t > 0)
    ? null
    : Vt(
        function (e) {
          e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
            e.setUTCMonth(0, 1),
            e.setUTCHours(0, 0, 0, 0);
        },
        function (e, n) {
          e.setUTCFullYear(e.getUTCFullYear() + n * t);
        }
      );
};
var yn = Ii;
Ii.range;
function ys(t, e, n, r, i, o) {
  const a = [
    [Cn, 1, Te],
    [Cn, 5, 5 * Te],
    [Cn, 15, 15 * Te],
    [Cn, 30, 30 * Te],
    [o, 1, oe],
    [o, 5, 5 * oe],
    [o, 15, 15 * oe],
    [o, 30, 30 * oe],
    [i, 1, De],
    [i, 3, 3 * De],
    [i, 6, 6 * De],
    [i, 12, 12 * De],
    [r, 1, Oe],
    [r, 2, 2 * Oe],
    [n, 1, Ai],
    [e, 1, $o],
    [e, 3, 3 * $o],
    [t, 1, Xr],
  ];
  function s(l, f, h) {
    const p = f < l;
    p && ([l, f] = [f, l]);
    const d = h && typeof h.range == "function" ? h : u(l, f, h),
      k = d ? d.range(l, +f + 1) : [];
    return p ? k.reverse() : k;
  }
  function u(l, f, h) {
    const p = Math.abs(f - l) / h,
      d = _i(([, , F]) => F).right(a, p);
    if (d === a.length) return t.every(si(l / Xr, f / Xr, h));
    if (d === 0) return Qf.every(Math.max(si(l, f, h), 1));
    const [k, S] = a[p / a[d - 1][2] < a[d][2] / p ? d - 1 : d];
    return k.every(S);
  }
  return [s, u];
}
ys(yn, ah, zi, Fi, eh, th);
const [sh, lh] = ys(qe, ps, Dr, Tr, cs, ls);
function Zr(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return e.setFullYear(t.y), e;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function Qr(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return e.setUTCFullYear(t.y), e;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function kn(t, e, n) {
  return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function uh(t) {
  var e = t.dateTime,
    n = t.date,
    r = t.time,
    i = t.periods,
    o = t.days,
    a = t.shortDays,
    s = t.months,
    u = t.shortMonths,
    l = Mn(i),
    f = Tn(i),
    h = Mn(o),
    p = Tn(o),
    d = Mn(a),
    k = Tn(a),
    S = Mn(s),
    F = Tn(s),
    z = Mn(u),
    B = Tn(u),
    O = {
      a: ot,
      A: ut,
      b: ct,
      B: Dt,
      c: null,
      d: oa,
      e: oa,
      f: Ah,
      g: Oh,
      G: Wh,
      H: Nh,
      I: Ch,
      j: Eh,
      L: _s,
      m: Uh,
      M: Fh,
      p: st,
      q: Ct,
      Q: la,
      s: ua,
      S: zh,
      u: Ih,
      U: Lh,
      V: Hh,
      w: Rh,
      W: Vh,
      x: null,
      X: null,
      y: Yh,
      Y: qh,
      Z: Gh,
      "%": sa,
    },
    W = {
      a: Pt,
      A: zt,
      b: xt,
      B: vt,
      c: null,
      d: aa,
      e: aa,
      f: Qh,
      g: o0,
      G: s0,
      H: Bh,
      I: Xh,
      j: Zh,
      L: bs,
      m: Jh,
      M: Kh,
      p: bt,
      q: Ht,
      Q: la,
      s: ua,
      S: jh,
      u: $h,
      U: t0,
      V: e0,
      w: n0,
      W: r0,
      x: null,
      X: null,
      y: i0,
      Y: a0,
      Z: l0,
      "%": sa,
    },
    H = {
      a: Z,
      A: D,
      b: J,
      B: et,
      c: ht,
      d: ra,
      e: ra,
      f: Th,
      g: na,
      G: ea,
      H: ia,
      I: ia,
      j: bh,
      L: Mh,
      m: wh,
      M: xh,
      p: Q,
      q: _h,
      Q: Sh,
      s: Ph,
      S: kh,
      u: dh,
      U: gh,
      V: mh,
      w: ph,
      W: vh,
      x: wt,
      X: St,
      y: na,
      Y: ea,
      Z: yh,
      "%": Dh,
    };
  (O.x = M(n, O)),
    (O.X = M(r, O)),
    (O.c = M(e, O)),
    (W.x = M(n, W)),
    (W.X = M(r, W)),
    (W.c = M(e, W));
  function M(T, N) {
    return function (X) {
      var b = [],
        lt = -1,
        K = 0,
        rt = T.length,
        v,
        it,
        I;
      for (X instanceof Date || (X = new Date(+X)); ++lt < rt; )
        T.charCodeAt(lt) === 37 &&
          (b.push(T.slice(K, lt)),
          (it = ta[(v = T.charAt(++lt))]) != null
            ? (v = T.charAt(++lt))
            : (it = v === "e" ? " " : "0"),
          (I = N[v]) && (v = I(X, it)),
          b.push(v),
          (K = lt + 1));
      return b.push(T.slice(K, lt)), b.join("");
    };
  }
  function Y(T, N) {
    return function (X) {
      var b = kn(1900, void 0, 1),
        lt = nt(b, T, (X += ""), 0),
        K,
        rt;
      if (lt != X.length) return null;
      if ("Q" in b) return new Date(b.Q);
      if ("s" in b) return new Date(b.s * 1e3 + ("L" in b ? b.L : 0));
      if (
        (N && !("Z" in b) && (b.Z = 0),
        "p" in b && (b.H = (b.H % 12) + b.p * 12),
        b.m === void 0 && (b.m = "q" in b ? b.q : 0),
        "V" in b)
      ) {
        if (b.V < 1 || b.V > 53) return null;
        "w" in b || (b.w = 1),
          "Z" in b
            ? ((K = Qr(kn(b.y, 0, 1))),
              (rt = K.getUTCDay()),
              (K = rt > 4 || rt === 0 ? pr.ceil(K) : pr(K)),
              (K = Fi.offset(K, (b.V - 1) * 7)),
              (b.y = K.getUTCFullYear()),
              (b.m = K.getUTCMonth()),
              (b.d = K.getUTCDate() + ((b.w + 6) % 7)))
            : ((K = Zr(kn(b.y, 0, 1))),
              (rt = K.getDay()),
              (K = rt > 4 || rt === 0 ? hr.ceil(K) : hr(K)),
              (K = Tr.offset(K, (b.V - 1) * 7)),
              (b.y = K.getFullYear()),
              (b.m = K.getMonth()),
              (b.d = K.getDate() + ((b.w + 6) % 7)));
      } else
        ("W" in b || "U" in b) &&
          ("w" in b || (b.w = "u" in b ? b.u % 7 : "W" in b ? 1 : 0),
          (rt =
            "Z" in b
              ? Qr(kn(b.y, 0, 1)).getUTCDay()
              : Zr(kn(b.y, 0, 1)).getDay()),
          (b.m = 0),
          (b.d =
            "W" in b
              ? ((b.w + 6) % 7) + b.W * 7 - ((rt + 5) % 7)
              : b.w + b.U * 7 - ((rt + 6) % 7)));
      return "Z" in b
        ? ((b.H += (b.Z / 100) | 0), (b.M += b.Z % 100), Qr(b))
        : Zr(b);
    };
  }
  function nt(T, N, X, b) {
    for (var lt = 0, K = N.length, rt = X.length, v, it; lt < K; ) {
      if (b >= rt) return -1;
      if (((v = N.charCodeAt(lt++)), v === 37)) {
        if (
          ((v = N.charAt(lt++)),
          (it = H[v in ta ? N.charAt(lt++) : v]),
          !it || (b = it(T, X, b)) < 0)
        )
          return -1;
      } else if (v != X.charCodeAt(b++)) return -1;
    }
    return b;
  }
  function Q(T, N, X) {
    var b = l.exec(N.slice(X));
    return b ? ((T.p = f.get(b[0].toLowerCase())), X + b[0].length) : -1;
  }
  function Z(T, N, X) {
    var b = d.exec(N.slice(X));
    return b ? ((T.w = k.get(b[0].toLowerCase())), X + b[0].length) : -1;
  }
  function D(T, N, X) {
    var b = h.exec(N.slice(X));
    return b ? ((T.w = p.get(b[0].toLowerCase())), X + b[0].length) : -1;
  }
  function J(T, N, X) {
    var b = z.exec(N.slice(X));
    return b ? ((T.m = B.get(b[0].toLowerCase())), X + b[0].length) : -1;
  }
  function et(T, N, X) {
    var b = S.exec(N.slice(X));
    return b ? ((T.m = F.get(b[0].toLowerCase())), X + b[0].length) : -1;
  }
  function ht(T, N, X) {
    return nt(T, e, N, X);
  }
  function wt(T, N, X) {
    return nt(T, n, N, X);
  }
  function St(T, N, X) {
    return nt(T, r, N, X);
  }
  function ot(T) {
    return a[T.getDay()];
  }
  function ut(T) {
    return o[T.getDay()];
  }
  function ct(T) {
    return u[T.getMonth()];
  }
  function Dt(T) {
    return s[T.getMonth()];
  }
  function st(T) {
    return i[+(T.getHours() >= 12)];
  }
  function Ct(T) {
    return 1 + ~~(T.getMonth() / 3);
  }
  function Pt(T) {
    return a[T.getUTCDay()];
  }
  function zt(T) {
    return o[T.getUTCDay()];
  }
  function xt(T) {
    return u[T.getUTCMonth()];
  }
  function vt(T) {
    return s[T.getUTCMonth()];
  }
  function bt(T) {
    return i[+(T.getUTCHours() >= 12)];
  }
  function Ht(T) {
    return 1 + ~~(T.getUTCMonth() / 3);
  }
  return {
    format: function (T) {
      var N = M((T += ""), O);
      return (
        (N.toString = function () {
          return T;
        }),
        N
      );
    },
    parse: function (T) {
      var N = Y((T += ""), !1);
      return (
        (N.toString = function () {
          return T;
        }),
        N
      );
    },
    utcFormat: function (T) {
      var N = M((T += ""), W);
      return (
        (N.toString = function () {
          return T;
        }),
        N
      );
    },
    utcParse: function (T) {
      var N = Y((T += ""), !0);
      return (
        (N.toString = function () {
          return T;
        }),
        N
      );
    },
  };
}
var ta = { "-": "", _: " ", 0: "0" },
  Yt = /^\s*\d+/,
  ch = /^%/,
  fh = /[\\^$*+?|[\]().{}]/g;
function mt(t, e, n) {
  var r = t < 0 ? "-" : "",
    i = (r ? -t : t) + "",
    o = i.length;
  return r + (o < n ? new Array(n - o + 1).join(e) + i : i);
}
function hh(t) {
  return t.replace(fh, "\\$&");
}
function Mn(t) {
  return new RegExp("^(?:" + t.map(hh).join("|") + ")", "i");
}
function Tn(t) {
  return new Map(t.map((e, n) => [e.toLowerCase(), n]));
}
function ph(t, e, n) {
  var r = Yt.exec(e.slice(n, n + 1));
  return r ? ((t.w = +r[0]), n + r[0].length) : -1;
}
function dh(t, e, n) {
  var r = Yt.exec(e.slice(n, n + 1));
  return r ? ((t.u = +r[0]), n + r[0].length) : -1;
}
function gh(t, e, n) {
  var r = Yt.exec(e.slice(n, n + 2));
  return r ? ((t.U = +r[0]), n + r[0].length) : -1;
}
function mh(t, e, n) {
  var r = Yt.exec(e.slice(n, n + 2));
  return r ? ((t.V = +r[0]), n + r[0].length) : -1;
}
function vh(t, e, n) {
  var r = Yt.exec(e.slice(n, n + 2));
  return r ? ((t.W = +r[0]), n + r[0].length) : -1;
}
function ea(t, e, n) {
  var r = Yt.exec(e.slice(n, n + 4));
  return r ? ((t.y = +r[0]), n + r[0].length) : -1;
}
function na(t, e, n) {
  var r = Yt.exec(e.slice(n, n + 2));
  return r ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function yh(t, e, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
  return r
    ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), n + r[0].length)
    : -1;
}
function _h(t, e, n) {
  var r = Yt.exec(e.slice(n, n + 1));
  return r ? ((t.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function wh(t, e, n) {
  var r = Yt.exec(e.slice(n, n + 2));
  return r ? ((t.m = r[0] - 1), n + r[0].length) : -1;
}
function ra(t, e, n) {
  var r = Yt.exec(e.slice(n, n + 2));
  return r ? ((t.d = +r[0]), n + r[0].length) : -1;
}
function bh(t, e, n) {
  var r = Yt.exec(e.slice(n, n + 3));
  return r ? ((t.m = 0), (t.d = +r[0]), n + r[0].length) : -1;
}
function ia(t, e, n) {
  var r = Yt.exec(e.slice(n, n + 2));
  return r ? ((t.H = +r[0]), n + r[0].length) : -1;
}
function xh(t, e, n) {
  var r = Yt.exec(e.slice(n, n + 2));
  return r ? ((t.M = +r[0]), n + r[0].length) : -1;
}
function kh(t, e, n) {
  var r = Yt.exec(e.slice(n, n + 2));
  return r ? ((t.S = +r[0]), n + r[0].length) : -1;
}
function Mh(t, e, n) {
  var r = Yt.exec(e.slice(n, n + 3));
  return r ? ((t.L = +r[0]), n + r[0].length) : -1;
}
function Th(t, e, n) {
  var r = Yt.exec(e.slice(n, n + 6));
  return r ? ((t.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function Dh(t, e, n) {
  var r = ch.exec(e.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Sh(t, e, n) {
  var r = Yt.exec(e.slice(n));
  return r ? ((t.Q = +r[0]), n + r[0].length) : -1;
}
function Ph(t, e, n) {
  var r = Yt.exec(e.slice(n));
  return r ? ((t.s = +r[0]), n + r[0].length) : -1;
}
function oa(t, e) {
  return mt(t.getDate(), e, 2);
}
function Nh(t, e) {
  return mt(t.getHours(), e, 2);
}
function Ch(t, e) {
  return mt(t.getHours() % 12 || 12, e, 2);
}
function Eh(t, e) {
  return mt(1 + Tr.count(qe(t), t), e, 3);
}
function _s(t, e) {
  return mt(t.getMilliseconds(), e, 3);
}
function Ah(t, e) {
  return _s(t, e) + "000";
}
function Uh(t, e) {
  return mt(t.getMonth() + 1, e, 2);
}
function Fh(t, e) {
  return mt(t.getMinutes(), e, 2);
}
function zh(t, e) {
  return mt(t.getSeconds(), e, 2);
}
function Ih(t) {
  var e = t.getDay();
  return e === 0 ? 7 : e;
}
function Lh(t, e) {
  return mt(Dr.count(qe(t) - 1, t), e, 2);
}
function ws(t) {
  var e = t.getDay();
  return e >= 4 || e === 0 ? mn(t) : mn.ceil(t);
}
function Hh(t, e) {
  return (t = ws(t)), mt(mn.count(qe(t), t) + (qe(t).getDay() === 4), e, 2);
}
function Rh(t) {
  return t.getDay();
}
function Vh(t, e) {
  return mt(hr.count(qe(t) - 1, t), e, 2);
}
function Yh(t, e) {
  return mt(t.getFullYear() % 100, e, 2);
}
function Oh(t, e) {
  return (t = ws(t)), mt(t.getFullYear() % 100, e, 2);
}
function qh(t, e) {
  return mt(t.getFullYear() % 1e4, e, 4);
}
function Wh(t, e) {
  var n = t.getDay();
  return (
    (t = n >= 4 || n === 0 ? mn(t) : mn.ceil(t)),
    mt(t.getFullYear() % 1e4, e, 4)
  );
}
function Gh(t) {
  var e = t.getTimezoneOffset();
  return (
    (e > 0 ? "-" : ((e *= -1), "+")) +
    mt((e / 60) | 0, "0", 2) +
    mt(e % 60, "0", 2)
  );
}
function aa(t, e) {
  return mt(t.getUTCDate(), e, 2);
}
function Bh(t, e) {
  return mt(t.getUTCHours(), e, 2);
}
function Xh(t, e) {
  return mt(t.getUTCHours() % 12 || 12, e, 2);
}
function Zh(t, e) {
  return mt(1 + Fi.count(yn(t), t), e, 3);
}
function bs(t, e) {
  return mt(t.getUTCMilliseconds(), e, 3);
}
function Qh(t, e) {
  return bs(t, e) + "000";
}
function Jh(t, e) {
  return mt(t.getUTCMonth() + 1, e, 2);
}
function Kh(t, e) {
  return mt(t.getUTCMinutes(), e, 2);
}
function jh(t, e) {
  return mt(t.getUTCSeconds(), e, 2);
}
function $h(t) {
  var e = t.getUTCDay();
  return e === 0 ? 7 : e;
}
function t0(t, e) {
  return mt(zi.count(yn(t) - 1, t), e, 2);
}
function xs(t) {
  var e = t.getUTCDay();
  return e >= 4 || e === 0 ? vn(t) : vn.ceil(t);
}
function e0(t, e) {
  return (t = xs(t)), mt(vn.count(yn(t), t) + (yn(t).getUTCDay() === 4), e, 2);
}
function n0(t) {
  return t.getUTCDay();
}
function r0(t, e) {
  return mt(pr.count(yn(t) - 1, t), e, 2);
}
function i0(t, e) {
  return mt(t.getUTCFullYear() % 100, e, 2);
}
function o0(t, e) {
  return (t = xs(t)), mt(t.getUTCFullYear() % 100, e, 2);
}
function a0(t, e) {
  return mt(t.getUTCFullYear() % 1e4, e, 4);
}
function s0(t, e) {
  var n = t.getUTCDay();
  return (
    (t = n >= 4 || n === 0 ? vn(t) : vn.ceil(t)),
    mt(t.getUTCFullYear() % 1e4, e, 4)
  );
}
function l0() {
  return "+0000";
}
function sa() {
  return "%";
}
function la(t) {
  return +t;
}
function ua(t) {
  return Math.floor(+t / 1e3);
}
var sn, ks;
u0({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
});
function u0(t) {
  return (
    (sn = uh(t)), (ks = sn.format), sn.parse, sn.utcFormat, sn.utcParse, sn
  );
}
function c0(t) {
  return new Date(t);
}
function f0(t) {
  return t instanceof Date ? +t : +new Date(+t);
}
function Ms(t, e, n, r, i, o, a, s, u, l) {
  var f = ns(),
    h = f.invert,
    p = f.domain,
    d = l(".%L"),
    k = l(":%S"),
    S = l("%I:%M"),
    F = l("%I %p"),
    z = l("%a %d"),
    B = l("%b %d"),
    O = l("%B"),
    W = l("%Y");
  function H(M) {
    return (
      u(M) < M
        ? d
        : s(M) < M
        ? k
        : a(M) < M
        ? S
        : o(M) < M
        ? F
        : r(M) < M
        ? i(M) < M
          ? z
          : B
        : n(M) < M
        ? O
        : W
    )(M);
  }
  return (
    (f.invert = function (M) {
      return new Date(h(M));
    }),
    (f.domain = function (M) {
      return arguments.length ? p(Array.from(M, f0)) : p().map(c0);
    }),
    (f.ticks = function (M) {
      var Y = p();
      return t(Y[0], Y[Y.length - 1], M == null ? 10 : M);
    }),
    (f.tickFormat = function (M, Y) {
      return Y == null ? H : l(Y);
    }),
    (f.nice = function (M) {
      var Y = p();
      return (
        (!M || typeof M.range != "function") &&
          (M = e(Y[0], Y[Y.length - 1], M == null ? 10 : M)),
        M ? p(rs(Y, M)) : f
      );
    }),
    (f.copy = function () {
      return Mr(f, Ms(t, e, n, r, i, o, a, s, u, l));
    }),
    f
  );
}
function h0() {
  return In.apply(
    Ms(sh, lh, qe, ps, Dr, Tr, cs, ls, Cn, ks).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments
  );
}
function Ts() {
  var t = 0,
    e = 1,
    n,
    r,
    i,
    o,
    a = ie,
    s = !1,
    u;
  function l(h) {
    return h == null || isNaN((h = +h))
      ? u
      : a(
          i === 0
            ? 0.5
            : ((h = (o(h) - n) * i), s ? Math.max(0, Math.min(1, h)) : h)
        );
  }
  (l.domain = function (h) {
    return arguments.length
      ? (([t, e] = h),
        (n = o((t = +t))),
        (r = o((e = +e))),
        (i = n === r ? 0 : 1 / (r - n)),
        l)
      : [t, e];
  }),
    (l.clamp = function (h) {
      return arguments.length ? ((s = !!h), l) : s;
    }),
    (l.interpolator = function (h) {
      return arguments.length ? ((a = h), l) : a;
    });
  function f(h) {
    return function (p) {
      var d, k;
      return arguments.length ? (([d, k] = p), (a = h(d, k)), l) : [a(0), a(1)];
    };
  }
  return (
    (l.range = f(br)),
    (l.rangeRound = f(Va)),
    (l.unknown = function (h) {
      return arguments.length ? ((u = h), l) : u;
    }),
    function (h) {
      return (
        (o = h), (n = h(t)), (r = h(e)), (i = n === r ? 0 : 1 / (r - n)), l
      );
    }
  );
}
function Ds(t, e) {
  return e
    .domain(t.domain())
    .interpolator(t.interpolator())
    .clamp(t.clamp())
    .unknown(t.unknown());
}
function nr() {
  var t = Ei(Ts()(ie));
  return (
    (t.copy = function () {
      return Ds(t, nr());
    }),
    es.apply(t, arguments)
  );
}
function Ss() {
  var t = is(Ts()).domain([1, 10]);
  return (
    (t.copy = function () {
      return Ds(t, Ss()).base(t.base());
    }),
    es.apply(t, arguments)
  );
}
function p0(t) {
  for (var e = (t.length / 6) | 0, n = new Array(e), r = 0; r < e; )
    n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
var Jr = p0("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
  Kn = Wa(ze(-100, 0.75, 0.35), ze(80, 1.5, 0.8));
Wa(ze(260, 0.75, 0.35), ze(80, 1.5, 0.8));
ze();
function un(t, e, n) {
  (this.k = t), (this.x = e), (this.y = n);
}
un.prototype = {
  constructor: un,
  scale: function (t) {
    return t === 1 ? this : new un(this.k * t, this.x, this.y);
  },
  translate: function (t, e) {
    return (t === 0) & (e === 0)
      ? this
      : new un(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function (t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function (t) {
    return t * this.k + this.x;
  },
  applyY: function (t) {
    return t * this.k + this.y;
  },
  invert: function (t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function (t) {
    return (t - this.x) / this.k;
  },
  invertY: function (t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function (t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function (t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function () {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  },
};
new un(1, 0, 0);
un.prototype;
function d0(t) {
  let e,
    n,
    r,
    i,
    o,
    a = t[0].name + "",
    s,
    u,
    l,
    f,
    h,
    p,
    d,
    k = t[0].releaseDate + "",
    S,
    F,
    z,
    B,
    O,
    W,
    H,
    M = t[0].freq + "",
    Y,
    nt,
    Q,
    Z,
    D,
    J,
    et,
    ht,
    wt = t[0].transistors + "",
    St,
    ot,
    ut,
    ct,
    Dt,
    st,
    Ct,
    Pt,
    zt = t[0].dieSize + "",
    xt,
    vt,
    bt,
    Ht,
    T,
    N,
    X,
    b,
    lt,
    K,
    rt = t[0].tdp + "",
    v,
    it,
    I;
  return {
    c() {
      (e = _("div")),
        (n = _("div")),
        (r = _("span")),
        (i = R()),
        (o = _("span")),
        (s = C(a)),
        (u = R()),
        (l = _("div")),
        (f = _("span")),
        (h = C("Release:")),
        (p = R()),
        (d = _("span")),
        (S = C(k)),
        (F = R()),
        (z = _("div")),
        (B = _("span")),
        (O = C("Frequency:")),
        (W = R()),
        (H = _("span")),
        (Y = C(M)),
        (nt = C(" GHz")),
        (Q = R()),
        (Z = _("div")),
        (D = _("span")),
        (J = C("Transistors:")),
        (et = R()),
        (ht = _("span")),
        (St = C(wt)),
        (ot = C(" million")),
        (ut = R()),
        (ct = _("div")),
        (Dt = _("span")),
        (st = C("Die Size:")),
        (Ct = R()),
        (Pt = _("span")),
        (xt = C(zt)),
        (vt = C(" mm")),
        (bt = _("sup")),
        (Ht = C("2")),
        (T = R()),
        (N = _("div")),
        (X = _("span")),
        (b = C("TDP:")),
        (lt = R()),
        (K = _("span")),
        (v = C(rt)),
        (it = C(" W")),
        this.h();
    },
    l(U) {
      e = w(U, "DIV", { class: !0, style: !0 });
      var L = y(e);
      n = w(L, "DIV", {});
      var A = y(n);
      (r = w(A, "SPAN", { class: !0 })),
        y(r).forEach(g),
        (i = V(A)),
        (o = w(A, "SPAN", { class: !0 }));
      var q = y(o);
      (s = E(q, a)),
        q.forEach(g),
        A.forEach(g),
        (u = V(L)),
        (l = w(L, "DIV", {}));
      var $ = y(l);
      f = w($, "SPAN", { class: !0 });
      var tt = y(f);
      (h = E(tt, "Release:")),
        tt.forEach(g),
        (p = V($)),
        (d = w($, "SPAN", { class: !0 }));
      var P = y(d);
      (S = E(P, k)),
        P.forEach(g),
        $.forEach(g),
        (F = V(L)),
        (z = w(L, "DIV", {}));
      var dt = y(z);
      B = w(dt, "SPAN", { class: !0 });
      var kt = y(B);
      (O = E(kt, "Frequency:")),
        kt.forEach(g),
        (W = V(dt)),
        (H = w(dt, "SPAN", { class: !0 }));
      var Tt = y(H);
      (Y = E(Tt, M)),
        (nt = E(Tt, " GHz")),
        Tt.forEach(g),
        dt.forEach(g),
        (Q = V(L)),
        (Z = w(L, "DIV", {}));
      var ft = y(Z);
      D = w(ft, "SPAN", { class: !0 });
      var j = y(D);
      (J = E(j, "Transistors:")),
        j.forEach(g),
        (et = V(ft)),
        (ht = w(ft, "SPAN", { class: !0 }));
      var pt = y(ht);
      (St = E(pt, wt)),
        (ot = E(pt, " million")),
        pt.forEach(g),
        ft.forEach(g),
        (ut = V(L)),
        (ct = w(L, "DIV", {}));
      var Et = y(ct);
      Dt = w(Et, "SPAN", { class: !0 });
      var Mt = y(Dt);
      (st = E(Mt, "Die Size:")),
        Mt.forEach(g),
        (Ct = V(Et)),
        (Pt = w(Et, "SPAN", { class: !0 }));
      var Wt = y(Pt);
      (xt = E(Wt, zt)), (vt = E(Wt, " mm")), (bt = w(Wt, "SUP", {}));
      var At = y(bt);
      (Ht = E(At, "2")),
        At.forEach(g),
        Wt.forEach(g),
        Et.forEach(g),
        (T = V(L)),
        (N = w(L, "DIV", {}));
      var yt = y(N);
      X = w(yt, "SPAN", { class: !0 });
      var Ut = y(X);
      (b = E(Ut, "TDP:")),
        Ut.forEach(g),
        (lt = V(yt)),
        (K = w(yt, "SPAN", { class: !0 }));
      var x = y(K);
      (v = E(x, rt)),
        (it = E(x, " W")),
        x.forEach(g),
        yt.forEach(g),
        L.forEach(g),
        this.h();
    },
    h() {
      m(r, "class", "header svelte-1b8uvt"),
        m(o, "class", "value-product svelte-1b8uvt"),
        m(f, "class", "header svelte-1b8uvt"),
        m(d, "class", "value svelte-1b8uvt"),
        m(B, "class", "header svelte-1b8uvt"),
        m(H, "class", "value svelte-1b8uvt"),
        m(D, "class", "header svelte-1b8uvt"),
        m(ht, "class", "value svelte-1b8uvt"),
        m(Dt, "class", "header svelte-1b8uvt"),
        m(Pt, "class", "value svelte-1b8uvt"),
        m(X, "class", "header svelte-1b8uvt"),
        m(K, "class", "value svelte-1b8uvt"),
        m(
          e,
          "class",
          (I = "tooltip " + (t[1] ? "show" : "hide") + " svelte-1b8uvt")
        ),
        qn(e, "left", t[2] + 2 + "px"),
        qn(e, "top", t[3] + 2 + "px");
    },
    m(U, L) {
      Ft(U, e, L),
        c(e, n),
        c(n, r),
        c(n, i),
        c(n, o),
        c(o, s),
        c(e, u),
        c(e, l),
        c(l, f),
        c(f, h),
        c(l, p),
        c(l, d),
        c(d, S),
        c(e, F),
        c(e, z),
        c(z, B),
        c(B, O),
        c(z, W),
        c(z, H),
        c(H, Y),
        c(H, nt),
        c(e, Q),
        c(e, Z),
        c(Z, D),
        c(D, J),
        c(Z, et),
        c(Z, ht),
        c(ht, St),
        c(ht, ot),
        c(e, ut),
        c(e, ct),
        c(ct, Dt),
        c(Dt, st),
        c(ct, Ct),
        c(ct, Pt),
        c(Pt, xt),
        c(Pt, vt),
        c(Pt, bt),
        c(bt, Ht),
        c(e, T),
        c(e, N),
        c(N, X),
        c(X, b),
        c(N, lt),
        c(N, K),
        c(K, v),
        c(K, it);
    },
    p(U, [L]) {
      L & 1 && a !== (a = U[0].name + "") && Ae(s, a),
        L & 1 && k !== (k = U[0].releaseDate + "") && Ae(S, k),
        L & 1 && M !== (M = U[0].freq + "") && Ae(Y, M),
        L & 1 && wt !== (wt = U[0].transistors + "") && Ae(St, wt),
        L & 1 && zt !== (zt = U[0].dieSize + "") && Ae(xt, zt),
        L & 1 && rt !== (rt = U[0].tdp + "") && Ae(v, rt),
        L & 2 &&
          I !==
            (I = "tooltip " + (U[1] ? "show" : "hide") + " svelte-1b8uvt") &&
          m(e, "class", I),
        L & 4 && qn(e, "left", U[2] + 2 + "px"),
        L & 8 && qn(e, "top", U[3] + 2 + "px");
    },
    i: rr,
    o: rr,
    d(U) {
      U && g(e);
    },
  };
}
function g0(t, e, n) {
  let { product: r } = e,
    { show: i = !1 } = e,
    { x: o = 0 } = e,
    { y: a = 0 } = e;
  return (
    (t.$$set = (s) => {
      "product" in s && n(0, (r = s.product)),
        "show" in s && n(1, (i = s.show)),
        "x" in s && n(2, (o = s.x)),
        "y" in s && n(3, (a = s.y));
    }),
    [r, i, o, a]
  );
}
class m0 extends dr {
  constructor(e) {
    super(), gr(this, e, g0, d0, mr, { product: 0, show: 1, x: 2, y: 3 });
  }
}
function ca(t, e, n) {
  const r = t.slice();
  return (r[49] = e[n]), r;
}
function fa(t, e, n) {
  const r = t.slice();
  return (r[49] = e[n]), r;
}
function ha(t, e, n) {
  const r = t.slice();
  return (r[49] = e[n]), r;
}
function pa(t, e, n) {
  const r = t.slice();
  return (r[49] = e[n]), r;
}
function da(t) {
  let e,
    n = t[49] + "",
    r,
    i,
    o,
    a;
  function s() {
    return t[26](t[49]);
  }
  return {
    c() {
      (e = _("button")), (r = C(n)), this.h();
    },
    l(u) {
      e = w(u, "BUTTON", { class: !0 });
      var l = y(e);
      (r = E(l, n)), l.forEach(g), this.h();
    },
    h() {
      m(
        e,
        "class",
        (i =
          "btn " +
          (t[2] === t[49] ? "btn-primary" : "btn-outline-primary") +
          " svelte-pesovp")
      );
    },
    m(u, l) {
      Ft(u, e, l), c(e, r), o || ((a = Nt(e, "click", s)), (o = !0));
    },
    p(u, l) {
      (t = u),
        l[0] & 4 &&
          i !==
            (i =
              "btn " +
              (t[2] === t[49] ? "btn-primary" : "btn-outline-primary") +
              " svelte-pesovp") &&
          m(e, "class", i);
    },
    d(u) {
      u && g(e), (o = !1), a();
    },
  };
}
function ga(t) {
  let e,
    n = t[49] + "",
    r,
    i,
    o,
    a;
  function s() {
    return t[27](t[49]);
  }
  return {
    c() {
      (e = _("button")), (r = C(n)), this.h();
    },
    l(u) {
      e = w(u, "BUTTON", { class: !0 });
      var l = y(e);
      (r = E(l, n)), l.forEach(g), this.h();
    },
    h() {
      m(
        e,
        "class",
        (i =
          "btn " +
          (t[3] === t[49] ? "btn-primary" : "btn-outline-primary") +
          " svelte-pesovp")
      );
    },
    m(u, l) {
      Ft(u, e, l), c(e, r), o || ((a = Nt(e, "click", s)), (o = !0));
    },
    p(u, l) {
      (t = u),
        l[0] & 8 &&
          i !==
            (i =
              "btn " +
              (t[3] === t[49] ? "btn-primary" : "btn-outline-primary") +
              " svelte-pesovp") &&
          m(e, "class", i);
    },
    d(u) {
      u && g(e), (o = !1), a();
    },
  };
}
function ma(t) {
  let e,
    n = t[49] + "",
    r,
    i,
    o,
    a;
  function s() {
    return t[29](t[49]);
  }
  return {
    c() {
      (e = _("button")), (r = C(n)), this.h();
    },
    l(u) {
      e = w(u, "BUTTON", { class: !0 });
      var l = y(e);
      (r = E(l, n)), l.forEach(g), this.h();
    },
    h() {
      m(
        e,
        "class",
        (i =
          "btn " +
          (t[4] === t[49] ? "btn-primary" : "btn-outline-primary") +
          " svelte-pesovp")
      );
    },
    m(u, l) {
      Ft(u, e, l), c(e, r), o || ((a = Nt(e, "click", s)), (o = !0));
    },
    p(u, l) {
      (t = u),
        l[0] & 16 &&
          i !==
            (i =
              "btn " +
              (t[4] === t[49] ? "btn-primary" : "btn-outline-primary") +
              " svelte-pesovp") &&
          m(e, "class", i);
    },
    d(u) {
      u && g(e), (o = !1), a();
    },
  };
}
function va(t) {
  let e,
    n = t[49] + "",
    r,
    i,
    o,
    a;
  function s() {
    return t[31](t[49]);
  }
  return {
    c() {
      (e = _("button")), (r = C(n)), this.h();
    },
    l(u) {
      e = w(u, "BUTTON", { class: !0 });
      var l = y(e);
      (r = E(l, n)), l.forEach(g), this.h();
    },
    h() {
      m(
        e,
        "class",
        (i =
          "btn " +
          (t[5] === t[49] ? "btn-primary" : "btn-outline-primary") +
          " svelte-pesovp")
      );
    },
    m(u, l) {
      Ft(u, e, l), c(e, r), o || ((a = Nt(e, "click", s)), (o = !0));
    },
    p(u, l) {
      (t = u),
        l[0] & 32 &&
          i !==
            (i =
              "btn " +
              (t[5] === t[49] ? "btn-primary" : "btn-outline-primary") +
              " svelte-pesovp") &&
          m(e, "class", i);
    },
    d(u) {
      u && g(e), (o = !1), a();
    },
  };
}
function ya(t) {
  let e, n, r, i, o, a, s, u;
  return {
    c() {
      (e = _("div")),
        (n = _("div")),
        (r = C("Color Property: ")),
        (i = C(t[4])),
        (o = R()),
        (a = Ue("svg")),
        this.h();
    },
    l(l) {
      e = w(l, "DIV", {});
      var f = y(e);
      n = w(f, "DIV", { class: !0 });
      var h = y(n);
      (r = E(h, "Color Property: ")),
        (i = E(h, t[4])),
        h.forEach(g),
        (o = V(f)),
        (a = Fe(f, "svg", { width: !0, height: !0 })),
        y(a).forEach(g),
        f.forEach(g),
        this.h();
    },
    h() {
      m(n, "class", "legend-label svelte-pesovp"),
        m(a, "width", (s = re + "px")),
        m(a, "height", (u = t[14] + "px"));
    },
    m(l, f) {
      Ft(l, e, f), c(e, n), c(n, r), c(n, i), c(e, o), c(e, a), t[32](a);
    },
    p(l, f) {
      f[0] & 16 && Ae(i, l[4]),
        f[0] & 16384 && u !== (u = l[14] + "px") && m(a, "height", u);
    },
    d(l) {
      l && g(e), t[32](null);
    },
  };
}
function _a(t) {
  let e, n, r, i, o, a, s, u;
  return {
    c() {
      (e = _("div")),
        (n = _("div")),
        (r = C("Size Property: ")),
        (i = C(t[5])),
        (o = R()),
        (a = Ue("svg")),
        this.h();
    },
    l(l) {
      e = w(l, "DIV", { class: !0 });
      var f = y(e);
      n = w(f, "DIV", { class: !0 });
      var h = y(n);
      (r = E(h, "Size Property: ")),
        (i = E(h, t[5])),
        h.forEach(g),
        (o = V(f)),
        (a = Fe(f, "svg", { width: !0, height: !0 })),
        y(a).forEach(g),
        f.forEach(g),
        this.h();
    },
    h() {
      m(n, "class", "legend-label svelte-pesovp"),
        m(a, "width", (s = re + "px")),
        m(a, "height", (u = t[15] + "px")),
        m(e, "class", "mt-4");
    },
    m(l, f) {
      Ft(l, e, f), c(e, n), c(n, r), c(n, i), c(e, o), c(e, a), t[33](a);
    },
    p(l, f) {
      f[0] & 32 && Ae(i, l[5]),
        f[0] & 32768 && u !== (u = l[15] + "px") && m(a, "height", u);
    },
    d(l) {
      l && g(e), t[33](null);
    },
  };
}
function v0(t) {
  let e,
    n,
    r,
    i,
    o,
    a,
    s,
    u,
    l,
    f,
    h,
    p,
    d,
    k,
    S,
    F,
    z,
    B,
    O,
    W,
    H,
    M,
    Y,
    nt,
    Q,
    Z,
    D,
    J,
    et,
    ht,
    wt,
    St,
    ot,
    ut,
    ct,
    Dt,
    st,
    Ct,
    Pt,
    zt,
    xt,
    vt,
    bt,
    Ht,
    T,
    N,
    X,
    b,
    lt,
    K,
    rt,
    v,
    it,
    I,
    U,
    L,
    A,
    q,
    $,
    tt,
    P,
    dt,
    kt,
    Tt = t[20],
    ft = [];
  for (let x = 0; x < Tt.length; x += 1) ft[x] = da(pa(t, Tt, x));
  let j = t[21],
    pt = [];
  for (let x = 0; x < j.length; x += 1) pt[x] = ga(ha(t, j, x));
  let Et = t[22],
    Mt = [];
  for (let x = 0; x < Et.length; x += 1) Mt[x] = ma(fa(t, Et, x));
  let Wt = t[23],
    At = [];
  for (let x = 0; x < Wt.length; x += 1) At[x] = va(ca(t, Wt, x));
  X = new m0({ props: { product: t[19], x: t[17], y: t[18], show: t[16] } });
  let yt = t[4] !== "None" && ya(t),
    Ut = t[5] !== "None" && _a(t);
  return {
    c() {
      (e = _("div")),
        (n = _("div")),
        (r = _("span")),
        (i = C("Dataset")),
        (o = R()),
        (a = _("button")),
        (s = C("CPU")),
        (l = R()),
        (f = _("button")),
        (h = C("GPU")),
        (d = R()),
        (k = _("div")),
        (S = _("div")),
        (F = _("span")),
        (z = C("X-Axis")),
        (B = R());
      for (let x = 0; x < ft.length; x += 1) ft[x].c();
      (O = R()),
        (W = _("div")),
        (H = _("div")),
        (M = _("span")),
        (Y = C("Y-Axis")),
        (nt = R());
      for (let x = 0; x < pt.length; x += 1) pt[x].c();
      (Q = R()),
        (Z = _("div")),
        (D = _("div")),
        (J = _("span")),
        (et = C("Color")),
        (ht = R()),
        (wt = _("button")),
        (St = C("None")),
        (ut = R());
      for (let x = 0; x < Mt.length; x += 1) Mt[x].c();
      (ct = R()),
        (Dt = _("div")),
        (st = _("div")),
        (Ct = _("span")),
        (Pt = C("Size")),
        (zt = R()),
        (xt = _("button")),
        (vt = C("None")),
        (Ht = R());
      for (let x = 0; x < At.length; x += 1) At[x].c();
      (T = R()),
        (N = _("div")),
        Kr(X.$$.fragment),
        (b = R()),
        yt && yt.c(),
        (lt = R()),
        Ut && Ut.c(),
        (K = R()),
        (rt = _("div")),
        (v = _("btn")),
        (it = _("i")),
        (I = R()),
        (U = Ue("svg")),
        (L = Ue("g")),
        (A = Ue("text")),
        (q = Ue("g")),
        ($ = Ue("text")),
        (tt = Ue("g")),
        this.h();
    },
    l(x) {
      e = w(x, "DIV", { class: !0 });
      var at = y(e);
      n = w(at, "DIV", { class: !0 });
      var gt = y(n);
      r = w(gt, "SPAN", { class: !0 });
      var G = y(r);
      (i = E(G, "Dataset")),
        G.forEach(g),
        (o = V(gt)),
        (a = w(gt, "BUTTON", { class: !0 }));
      var Rt = y(a);
      (s = E(Rt, "CPU")),
        Rt.forEach(g),
        (l = V(gt)),
        (f = w(gt, "BUTTON", { class: !0 }));
      var ve = y(f);
      (h = E(ve, "GPU")),
        ve.forEach(g),
        gt.forEach(g),
        at.forEach(g),
        (d = V(x)),
        (k = w(x, "DIV", { class: !0 }));
      var ye = y(k);
      S = w(ye, "DIV", { class: !0 });
      var Pe = y(S);
      F = w(Pe, "SPAN", { class: !0 });
      var Be = y(F);
      (z = E(Be, "X-Axis")), Be.forEach(g), (B = V(Pe));
      for (let Lt = 0; Lt < ft.length; Lt += 1) ft[Lt].l(Pe);
      Pe.forEach(g),
        ye.forEach(g),
        (O = V(x)),
        (W = w(x, "DIV", { class: !0 }));
      var Zt = y(W);
      H = w(Zt, "DIV", { class: !0 });
      var ae = y(H);
      M = w(ae, "SPAN", { class: !0 });
      var Xe = y(M);
      (Y = E(Xe, "Y-Axis")), Xe.forEach(g), (nt = V(ae));
      for (let Lt = 0; Lt < pt.length; Lt += 1) pt[Lt].l(ae);
      ae.forEach(g),
        Zt.forEach(g),
        (Q = V(x)),
        (Z = w(x, "DIV", { class: !0 }));
      var Ze = y(Z);
      D = w(Ze, "DIV", { class: !0 });
      var Ot = y(D);
      J = w(Ot, "SPAN", { class: !0 });
      var Qe = y(J);
      (et = E(Qe, "Color")),
        Qe.forEach(g),
        (ht = V(Ot)),
        (wt = w(Ot, "BUTTON", { class: !0 }));
      var _e = y(wt);
      (St = E(_e, "None")), _e.forEach(g), (ut = V(Ot));
      for (let Lt = 0; Lt < Mt.length; Lt += 1) Mt[Lt].l(Ot);
      Ot.forEach(g),
        Ze.forEach(g),
        (ct = V(x)),
        (Dt = w(x, "DIV", { class: !0 }));
      var Je = y(Dt);
      st = w(Je, "DIV", { class: !0 });
      var ce = y(st);
      Ct = w(ce, "SPAN", { class: !0 });
      var we = y(Ct);
      (Pt = E(we, "Size")),
        we.forEach(g),
        (zt = V(ce)),
        (xt = w(ce, "BUTTON", { class: !0 }));
      var Ke = y(xt);
      (vt = E(Ke, "None")), Ke.forEach(g), (Ht = V(ce));
      for (let Lt = 0; Lt < At.length; Lt += 1) At[Lt].l(ce);
      ce.forEach(g), Je.forEach(g), (T = V(x)), (N = w(x, "DIV", {}));
      var Kt = y(N);
      jr(X.$$.fragment, Kt),
        (b = V(Kt)),
        yt && yt.l(Kt),
        (lt = V(Kt)),
        Ut && Ut.l(Kt),
        (K = V(Kt)),
        (rt = w(Kt, "DIV", { class: !0 }));
      var Ne = y(rt);
      v = w(Ne, "BTN", { class: !0 });
      var fe = y(v);
      (it = w(fe, "I", { class: !0 })),
        y(it).forEach(g),
        fe.forEach(g),
        (I = V(Ne)),
        (U = Fe(Ne, "svg", { width: !0, height: !0 }));
      var jt = y(U);
      (L = Fe(jt, "g", { "font-size": !0 })),
        y(L).forEach(g),
        (A = Fe(jt, "text", { "font-size": !0 })),
        y(A).forEach(g),
        (q = Fe(jt, "g", { "font-size": !0 })),
        y(q).forEach(g),
        ($ = Fe(jt, "text", { "font-size": !0 })),
        y($).forEach(g),
        (tt = Fe(jt, "g", {})),
        y(tt).forEach(g),
        jt.forEach(g),
        Ne.forEach(g),
        Kt.forEach(g),
        this.h();
    },
    h() {
      m(r, "class", "input-group-text"),
        m(
          a,
          "class",
          (u =
            "btn " +
            (t[0] ? "btn-primary" : "btn-outline-primary") +
            " svelte-pesovp")
        ),
        m(
          f,
          "class",
          (p =
            "btn " +
            (t[1] ? "btn-primary" : "btn-outline-primary") +
            " svelte-pesovp")
        ),
        m(n, "class", "btn-group"),
        m(e, "class", "btn-row svelte-pesovp"),
        m(F, "class", "input-group-text"),
        m(S, "class", "btn-group"),
        m(k, "class", "btn-row svelte-pesovp"),
        m(M, "class", "input-group-text"),
        m(H, "class", "btn-group"),
        m(W, "class", "btn-row svelte-pesovp"),
        m(J, "class", "input-group-text"),
        m(
          wt,
          "class",
          (ot =
            "btn " +
            (t[4] === "None" ? "btn-primary" : "btn-outline-primary") +
            " svelte-pesovp")
        ),
        m(D, "class", "btn-group"),
        m(Z, "class", "btn-row svelte-pesovp"),
        m(Ct, "class", "input-group-text"),
        m(
          xt,
          "class",
          (bt =
            "btn " +
            (t[5] === "None" ? "btn-primary" : "btn-outline-primary") +
            " svelte-pesovp")
        ),
        m(st, "class", "btn-group"),
        m(Dt, "class", "btn-row svelte-pesovp"),
        m(it, "class", "fa-solid fa-download"),
        m(v, "class", "btn btn-primary download-btn svelte-pesovp"),
        m(L, "font-size", "14"),
        m(A, "font-size", "14"),
        m(q, "font-size", "14"),
        m($, "font-size", "14"),
        m(U, "width", re + "px"),
        m(U, "height", Qt + "px"),
        m(rt, "class", "graph-container svelte-pesovp");
    },
    m(x, at) {
      Ft(x, e, at),
        c(e, n),
        c(n, r),
        c(r, i),
        c(n, o),
        c(n, a),
        c(a, s),
        c(n, l),
        c(n, f),
        c(f, h),
        Ft(x, d, at),
        Ft(x, k, at),
        c(k, S),
        c(S, F),
        c(F, z),
        c(S, B);
      for (let gt = 0; gt < ft.length; gt += 1) ft[gt].m(S, null);
      Ft(x, O, at), Ft(x, W, at), c(W, H), c(H, M), c(M, Y), c(H, nt);
      for (let gt = 0; gt < pt.length; gt += 1) pt[gt].m(H, null);
      Ft(x, Q, at),
        Ft(x, Z, at),
        c(Z, D),
        c(D, J),
        c(J, et),
        c(D, ht),
        c(D, wt),
        c(wt, St),
        c(D, ut);
      for (let gt = 0; gt < Mt.length; gt += 1) Mt[gt].m(D, null);
      Ft(x, ct, at),
        Ft(x, Dt, at),
        c(Dt, st),
        c(st, Ct),
        c(Ct, Pt),
        c(st, zt),
        c(st, xt),
        c(xt, vt),
        c(st, Ht);
      for (let gt = 0; gt < At.length; gt += 1) At[gt].m(st, null);
      Ft(x, T, at),
        Ft(x, N, at),
        $r(X, N, null),
        c(N, b),
        yt && yt.m(N, null),
        c(N, lt),
        Ut && Ut.m(N, null),
        c(N, K),
        c(N, rt),
        c(rt, v),
        c(v, it),
        c(rt, I),
        c(rt, U),
        c(U, L),
        t[35](L),
        c(U, A),
        t[36](A),
        c(U, q),
        t[37](q),
        c(U, $),
        t[38]($),
        c(U, tt),
        t[39](tt),
        t[40](U),
        (P = !0),
        dt ||
          ((kt = [
            Nt(a, "click", t[24]),
            Nt(f, "click", t[25]),
            Nt(wt, "click", t[28]),
            Nt(xt, "click", t[30]),
            Nt(v, "click", t[34]),
          ]),
          (dt = !0));
    },
    p(x, at) {
      if (
        ((!P ||
          (at[0] & 1 &&
            u !==
              (u =
                "btn " +
                (x[0] ? "btn-primary" : "btn-outline-primary") +
                " svelte-pesovp"))) &&
          m(a, "class", u),
        (!P ||
          (at[0] & 2 &&
            p !==
              (p =
                "btn " +
                (x[1] ? "btn-primary" : "btn-outline-primary") +
                " svelte-pesovp"))) &&
          m(f, "class", p),
        at[0] & 1048580)
      ) {
        Tt = x[20];
        let G;
        for (G = 0; G < Tt.length; G += 1) {
          const Rt = pa(x, Tt, G);
          ft[G]
            ? ft[G].p(Rt, at)
            : ((ft[G] = da(Rt)), ft[G].c(), ft[G].m(S, null));
        }
        for (; G < ft.length; G += 1) ft[G].d(1);
        ft.length = Tt.length;
      }
      if (at[0] & 2097160) {
        j = x[21];
        let G;
        for (G = 0; G < j.length; G += 1) {
          const Rt = ha(x, j, G);
          pt[G]
            ? pt[G].p(Rt, at)
            : ((pt[G] = ga(Rt)), pt[G].c(), pt[G].m(H, null));
        }
        for (; G < pt.length; G += 1) pt[G].d(1);
        pt.length = j.length;
      }
      if (
        ((!P ||
          (at[0] & 16 &&
            ot !==
              (ot =
                "btn " +
                (x[4] === "None" ? "btn-primary" : "btn-outline-primary") +
                " svelte-pesovp"))) &&
          m(wt, "class", ot),
        at[0] & 4194320)
      ) {
        Et = x[22];
        let G;
        for (G = 0; G < Et.length; G += 1) {
          const Rt = fa(x, Et, G);
          Mt[G]
            ? Mt[G].p(Rt, at)
            : ((Mt[G] = ma(Rt)), Mt[G].c(), Mt[G].m(D, null));
        }
        for (; G < Mt.length; G += 1) Mt[G].d(1);
        Mt.length = Et.length;
      }
      if (
        ((!P ||
          (at[0] & 32 &&
            bt !==
              (bt =
                "btn " +
                (x[5] === "None" ? "btn-primary" : "btn-outline-primary") +
                " svelte-pesovp"))) &&
          m(xt, "class", bt),
        at[0] & 8388640)
      ) {
        Wt = x[23];
        let G;
        for (G = 0; G < Wt.length; G += 1) {
          const Rt = ca(x, Wt, G);
          At[G]
            ? At[G].p(Rt, at)
            : ((At[G] = va(Rt)), At[G].c(), At[G].m(st, null));
        }
        for (; G < At.length; G += 1) At[G].d(1);
        At.length = Wt.length;
      }
      const gt = {};
      at[0] & 524288 && (gt.product = x[19]),
        at[0] & 131072 && (gt.x = x[17]),
        at[0] & 262144 && (gt.y = x[18]),
        at[0] & 65536 && (gt.show = x[16]),
        X.$set(gt),
        x[4] !== "None"
          ? yt
            ? yt.p(x, at)
            : ((yt = ya(x)), yt.c(), yt.m(N, lt))
          : yt && (yt.d(1), (yt = null)),
        x[5] !== "None"
          ? Ut
            ? Ut.p(x, at)
            : ((Ut = _a(x)), Ut.c(), Ut.m(N, K))
          : Ut && (Ut.d(1), (Ut = null));
    },
    i(x) {
      P || (ti(X.$$.fragment, x), (P = !0));
    },
    o(x) {
      ei(X.$$.fragment, x), (P = !1);
    },
    d(x) {
      x && g(e),
        x && g(d),
        x && g(k),
        Wn(ft, x),
        x && g(O),
        x && g(W),
        Wn(pt, x),
        x && g(Q),
        x && g(Z),
        Wn(Mt, x),
        x && g(ct),
        x && g(Dt),
        Wn(At, x),
        x && g(T),
        x && g(N),
        ni(X),
        yt && yt.d(),
        Ut && Ut.d(),
        t[35](null),
        t[36](null),
        t[37](null),
        t[38](null),
        t[39](null),
        t[40](null),
        (dt = !1),
        yi(kt);
    },
  };
}
let re = 1e3,
  Qt = 500,
  Bt = 80,
  ee = 80,
  ln = 40,
  ne = 40;
function y0(t, e) {
  t.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const n = t.outerHTML,
    r = `<?xml version="1.0" standalone="no"?>\r
`,
    i = new Blob([r, n], { type: "image/svg+xml;charset=utf-8" }),
    o = URL.createObjectURL(i),
    a = document.createElement("a");
  (a.href = o),
    (a.download = e),
    document.body.appendChild(a),
    a.click(),
    document.body.removeChild(a);
}
function _0(t, e, n) {
  let r = [],
    i,
    o,
    a,
    s,
    u,
    l,
    f,
    h,
    p = 0,
    d = 0,
    k = !1,
    S = 0,
    F = 0,
    z = {};
  const B = new Map([
    ["Release Date", "releaseDate"],
    ["TDP (W)", "tdp"],
    ["Die Size (mm^2)", "dieSize"],
    ["Transistors (million)", "transistors"],
    ["Freq (MHz)", "freq"],
    ["FP16 GFLOPS", "fp16Perf"],
    ["FP32 GFLOPS", "fp32Perf"],
    ["FP64 GFLOPS", "fp64Perf"],
    ["Process Size (nm)", "processSize"],
    ["Vendor", "vendor"],
    ["Foundry", "foundry"],
    ["Type", "type"],
    ["Product", "name"],
  ]);
  let O = [
      "Release Date",
      "TDP (W)",
      "Die Size (mm^2)",
      "Transistors (million)",
      "Freq (MHz)",
    ],
    W = [
      "TDP (W)",
      "Die Size (mm^2)",
      "Transistors (million)",
      "Freq (MHz)",
      "FP16 GFLOPS",
      "FP32 GFLOPS",
      "FP64 GFLOPS",
    ],
    H = [
      "Type",
      "Vendor",
      "Foundry",
      "Process Size (nm)",
      "TDP (W)",
      "Die Size (mm^2)",
      "Transistors (million)",
      "Freq (MHz)",
    ],
    M = ["TDP (W)", "Die Size (mm^2)", "Transistors (million)", "Freq (MHz)"],
    { cpuDataSelected: Y = !0 } = e,
    { gpuDataSelected: nt = !0 } = e,
    { xAxisProperty: Q = "Release Date" } = e,
    { yAxisProperty: Z = "Transistors (million)" } = e,
    { colorProperty: D = "Type" } = e,
    { sizeProperty: J = "None" } = e;
  Ns(async () => {
    (r = await et()), ht();
  });
  async function et() {
    const it = await (await fetch("data.csv")).text(),
      I = kf(it),
      U = I[0],
      L = I.slice(1).map((A) => {
        const q = {
          name: "",
          vendor: "",
          type: "",
          processSize: "",
          releaseDate: null,
          transistors: 0,
          dieSize: 0,
          tdp: 0,
          fp32Perf: 0,
          fp64Perf: 0,
          fp16Perf: 0,
          freq: 0,
          foundry: "",
        };
        return (
          U.forEach(($, tt) => {
            switch ($) {
              case "Release Date":
                const P = new Date(A[tt]);
                isNaN(P.getTime())
                  ? (q.releaseDate = null)
                  : (q.releaseDate = P);
                break;
              case "Transistors (million)":
                if (A[tt].includes("x")) {
                  const [dt, kt] = A[tt].split("x");
                  q.transistors = +dt * +kt;
                  break;
                }
                (q.transistors = +A[tt]),
                  q.transistors === 0 && (q.transistors = NaN);
                break;
              case "Die Size (mm^2)":
                (q.dieSize = +A[tt]), q.dieSize === 0 && (q.dieSize = NaN);
                break;
              case "TDP (W)":
                (q.tdp = +A[tt]), q.tdp === 0 && (q.tdp = NaN);
                break;
              case "FP32 GFLOPS":
                (q.fp32Perf = +A[tt]), q.fp32Perf === 0 && (q.fp32Perf = NaN);
                break;
              case "FP64 GFLOPS":
                (q.fp64Perf = +A[tt]), q.fp64Perf === 0 && (q.fp64Perf = NaN);
                break;
              case "FP16 GFLOPS":
                (q.fp16Perf = +A[tt]), q.fp16Perf === 0 && (q.fp16Perf = NaN);
                break;
              case "Freq (GHz)":
                (q.freq = +A[tt]), q.freq === 0 && (q.freq = NaN);
                break;
              case "Foundry":
                q.foundry = A[tt];
                break;
              case "Product":
                q.name = A[tt];
                break;
              case "Vendor":
                q.vendor = A[tt];
                break;
              case "Type":
                q.type = A[tt];
                break;
              case "Process Size (nm)":
                q.processSize = A[tt];
                break;
              default:
                console.error("Unknown key: " + $);
                break;
            }
          }),
          q
        );
      });
    return console.log(L), L;
  }
  function ht() {
    const v = St(r),
      [it, I, U, L] = wt(v),
      A = xe(h)
        .selectAll("circle")
        .data(v, ($) => `${$.index}`);
    A.enter()
      .append("circle")
      .attr("cx", ($) => {
        let tt = $[B.get(Q)];
        return it(tt) + Bt;
      })
      .attr("cy", Qt - ee + ne)
      .attr("r", 5)
      .attr("fill", ($) => (U ? U($[D]) : "#4287f5"))
      .attr("opacity", 0.1)
      .on("mouseover", ($, tt) => {
        n(19, (z = tt)),
          n(17, (S = $.pageX)),
          n(18, (F = $.pageY)),
          n(16, (k = !0));
      })
      .on("mouseout", () => {
        n(16, (k = !1));
      })
      .merge(A)
      .transition()
      .duration(500)
      .attr("cx", ($) => {
        let tt = $[B.get(Q)];
        return it(tt) + Bt;
      })
      .attr("cy", ($) => I($[B.get(Z)]) + ne)
      .attr("r", ($) => {
        if (J === "None") return 5;
        const tt = L($[B.get(J)]);
        return tt < 0 ? 0 : tt;
      })
      .attr("fill", ($) => (U ? U($[B.get(D)]) : "#4287f5")),
      A.exit()
        .transition()
        .duration(500)
        .attr("opacity", 0)
        .attr("cy", ne)
        .remove();
  }
  function wt(v) {
    let it, I, U, L;
    switch (Q) {
      case "Release Date":
        it = h0()
          .domain([be(v, (P) => P.releaseDate), It(v, (P) => P.releaseDate)])
          .range([0, re - Bt - ln]);
        break;
      case "TDP (W)":
        it = de()
          .domain([be(v, (P) => P.tdp), It(v, (P) => P.tdp)])
          .range([0, re - Bt - ln]);
        break;
      case "Die Size (mm^2)":
        it = de()
          .domain([50, It(v, (P) => P.dieSize)])
          .range([0, re - Bt - ln]);
        break;
      case "Transistors (million)":
        it = de()
          .domain([be(v, (P) => P.transistors), It(v, (P) => P.transistors)])
          .range([0, re - Bt - ln]);
        break;
      case "Freq (MHz)":
        it = vi()
          .domain([0, It(v, (P) => P.freq)])
          .range([0, re - Bt - ln]);
        break;
      default:
        console.error("Unknown xAxisProperty");
    }
    switch (Z) {
      case "TDP (W)":
        I = de()
          .domain([be(v, (P) => P.tdp), It(v, (P) => P.tdp)])
          .range([Qt - ee - ne, 0]);
        break;
      case "Die Size (mm^2)":
        I = de()
          .domain([50, It(v, (P) => P.dieSize)])
          .range([Qt - ee - ne, 0]);
        break;
      case "Transistors (million)":
        I = de()
          .domain([be(v, (P) => P.transistors), It(v, (P) => P.transistors)])
          .range([Qt - ee - ne, 0]);
        break;
      case "Freq (MHz)":
        I = vi()
          .domain([0, It(v, (P) => P.freq)])
          .range([Qt - ee - ne, 0]);
        break;
      case "FP16 GFLOPS":
        n(0, (Y = !1)),
          (I = de()
            .domain([be(v, (P) => P.fp16Perf), It(v, (P) => P.fp16Perf)])
            .range([Qt - ee - ne, 0]));
        break;
      case "FP32 GFLOPS":
        n(0, (Y = !1)),
          (I = de()
            .domain([be(v, (P) => P.fp32Perf), It(v, (P) => P.fp32Perf)])
            .range([Qt - ee - ne, 0]));
        break;
      case "FP64 GFLOPS":
        n(0, (Y = !1)),
          (I = de()
            .domain([be(v, (P) => P.fp64Perf), It(v, (P) => P.fp64Perf)])
            .range([Qt - ee - ne, 0]));
        break;
      default:
        console.error("Unknown yAxisProperty " + Z);
    }
    let A = [];
    switch (D) {
      case "None":
        n(14, (p = 0));
        break;
      case "Process Size (nm)":
        const P = [...new Set(v.map((j) => j.processSize))];
        P.sort((j, pt) => (pt > j ? 1 : -1)),
          (U = Nn().domain(P).range(Jr)),
          ot(P, U);
        break;
      case "TDP (W)":
        (A = [0, It(v, (j) => j.tdp)]), (U = nr(Kn).domain(A)), ot(A, U, !0);
        break;
      case "Die Size (mm^2)":
        (A = [50, It(v, (j) => j.dieSize)]),
          (U = nr(Kn).domain(A)),
          ot(A, U, !0);
        break;
      case "Transistors (million)":
        (A = [be(v, (j) => j.transistors), It(v, (j) => j.transistors)]),
          (U = Ss(Kn).domain(A)),
          ot(A, U, !0);
        break;
      case "Freq (MHz)":
        (A = [0, It(v, (j) => j.freq)]), (U = nr(Kn).domain(A)), ot(A, U, !0);
        break;
      case "Foundry":
        let dt = [...new Set(v.map((j) => j.foundry))];
        (dt = dt.filter((j) => j !== null)),
          (U = Nn().domain(dt).range(Jr)),
          ot(dt, U, !1, !0);
        break;
      case "Vendor":
        let kt = ["Intel", "AMD", "ATI", "NVIDIA", "Other"],
          Tt = [
            "rgb(2, 109, 191)",
            "rgb(216, 0, 49)",
            "rgb(253, 2, 1)",
            "rgb(118, 185, 0)",
            "rgb(128, 128, 128)",
          ];
        (U = Nn().domain(kt).range(Tt)), ot(kt, U, !1, !0);
        break;
      case "Type":
        let ft = ["CPU", "GPU"];
        (U = Nn().domain(ft).range(Jr)), ot(ft, U);
        break;
    }
    const q = 15;
    switch (J) {
      case "None":
        n(15, (d = 0));
        break;
      case "TDP (W)":
        (A = [0, It(v, (P) => P.tdp)]),
          (L = Jn().domain(A).range([0, q])),
          ut(A, L);
        break;
      case "Die Size (mm^2)":
        (A = [50, It(v, (P) => P.dieSize)]),
          (L = Jn().domain(A).range([0, q])),
          ut(A, L);
        break;
      case "Transistors (million)":
        (A = [0, It(v, (P) => P.transistors)]),
          (L = Jn().domain(A).range([0, q])),
          ut(A, L);
        break;
      case "Freq (MHz)":
        (A = [0, It(v, (P) => P.freq)]),
          (L = Jn().domain(A).range([0, q])),
          ut(A, L);
        break;
    }
    const $ = Zs(it).tickSize(-Qt + ee + ne),
      tt = Qs(I).tickSize(-re + Bt + ln);
    return (
      xe(o)
        .call($)
        .attr(
          "transform",
          `translate(
					${Bt}, 
					${Qt - ee}
				)`
        )
        .call((P) => P.selectAll("text").attr("font-size", "14"))
        .call((P) =>
          P.selectAll(".tick line")
            .attr("stroke-opacity", 0.1)
            .attr("stroke-dasharray", "2,2")
        ),
      xe(s)
        .attr("x", re / 2)
        .attr("y", Qt - ee / 2)
        .text(Q),
      xe(a)
        .call(tt)
        .attr("transform", `translate(${Bt}, ${ne})`)
        .call((P) => P.selectAll("text").attr("font-size", "14"))
        .call((P) =>
          P.selectAll(".tick line")
            .attr("stroke-opacity", 0.1)
            .attr("stroke-dasharray", "2,2")
        ),
      xe(u)
        .attr("transform", `translate(40, ${(Qt - ee) / 2}) rotate(-90)`)
        .attr("text-anchor", "middle")
        .text(Z),
      [it, I, U, L]
    );
  }
  function St(v) {
    return v.filter(
      (I) =>
        !(
          (!Y && I.type === "CPU") ||
          (!nt && I.type === "GPU") ||
          (Q === "Release Date" && I.releaseDate === null) ||
          ((Q === "Freq (MHz)" ||
            Z === "Freq (MHz)" ||
            D === "Freq (MHz)" ||
            J === "Freq (MHz)") &&
            (I.freq === null || I.freq === 0 || isNaN(I.freq))) ||
          ((Q === "Transistors (million)" ||
            Z === "Transistors (million)" ||
            D === "Transistors (million)" ||
            J === "Transistors (million)") &&
            (I.transistors === null ||
              I.transistors === 0 ||
              isNaN(I.transistors))) ||
          ((Q === "TDP (W)" ||
            Z === "TDP (W)" ||
            D === "TDP (W)" ||
            J === "TDP (W)") &&
            (I.tdp === null || I.tdp === 0 || isNaN(I.tdp))) ||
          ((Q === "Die Size (mm^2)" ||
            Z === "Die Size (mm^2)" ||
            D === "Die Size (mm^2)" ||
            J === "Die Size (mm^2)") &&
            (I.dieSize === null || I.dieSize === 0 || isNaN(I.dieSize))) ||
          ((Q === "Process Size (nm)" ||
            Z === "Process Size (nm)" ||
            D === "Process Size (nm)" ||
            J === "Process Size (nm)") &&
            (I.processSize === null || I.processSize === "")) ||
          (Z === "FP16 GFLOPS" &&
            (I.fp16Perf === null || I.fp16Perf === 0 || isNaN(I.fp16Perf))) ||
          (Z === "FP32 GFLOPS" &&
            (I.fp32Perf === null || I.fp32Perf === 0 || isNaN(I.fp32Perf))) ||
          (Z === "FP64 GFLOPS" &&
            (I.fp64Perf === null || I.fp64Perf === 0 || isNaN(I.fp64Perf)))
        )
    );
  }
  function ot(v, it, I = !1, U = !1) {
    let L = v;
    if (I) {
      const Tt = v[0],
        j = (v[v.length - 1] - Tt) / 10;
      L = [];
      for (let pt = 0; pt < 10; pt++) L.push(Tt + pt * j);
    }
    let A = 60;
    U && (A = 90);
    let q = 55;
    const $ = 30,
      tt = Math.floor((re - $ * 2 - Bt) / A),
      P = Math.ceil(L.length / tt);
    n(14, (p = P * q + 5)), xe(l).selectAll("*").remove();
    const dt = xe(l)
      .selectAll("g")
      .data(L)
      .enter()
      .append("g")
      .attr("text-anchor", "middle")
      .attr("transform", (kt, Tt) => {
        const ft = Math.floor(Tt / tt),
          j = Tt % tt;
        return `translate(
					${$ + j * A + Bt + $}, 
					${$ + ft * q}
				)`;
      });
    dt
      .append("circle")
      .attr("r", 10)
      .attr("cy", 0)
      .attr("cx", 0)
      .attr("fill", (kt) => it(kt)),
      dt
        .append("text")
        .attr("x", 0)
        .attr("y", 28)
        .text((kt) =>
          typeof kt == "string" || kt instanceof String
            ? kt
            : kt === null
            ? 0
            : kt.toFixed(0)
        );
  }
  function ut(v, it, I = !1) {
    let U = v;
    const L = 10,
      A = v[0],
      $ = (v[v.length - 1] - A) / L;
    U = [];
    for (let j = 0; j < L; j++) U.push(A + j * $);
    let tt = 60;
    I && (tt = 90);
    let P = 55;
    const dt = 30,
      kt = Math.floor((re - dt * 2 - Bt) / tt),
      Tt = Math.ceil(U.length / kt);
    n(15, (d = Tt * P + 5)), xe(f).selectAll("*").remove();
    const ft = xe(f)
      .selectAll("g")
      .data(U)
      .enter()
      .append("g")
      .attr("text-anchor", "middle")
      .attr("transform", (j, pt) => {
        const Et = Math.floor(pt / kt),
          Mt = pt % kt;
        return `translate(
					${dt + Mt * tt + Bt + dt}, 
					${dt + Et * P}
				)`;
      });
    ft
      .append("circle")
      .attr("r", (j) => it(j))
      .attr("cy", 0)
      .attr("cx", 0)
      .attr("fill", "#4287f5"),
      ft
        .append("text")
        .attr("x", 0)
        .attr("y", 28)
        .text((j) =>
          typeof j == "string" || j instanceof String
            ? j
            : j === null
            ? 0
            : j.toFixed(0)
        );
  }
  const ct = () => {
      n(0, (Y = !Y));
    },
    Dt = () => {
      n(1, (nt = !nt));
    },
    st = (v) => {
      n(2, (Q = v));
    },
    Ct = (v) => {
      n(3, (Z = v));
    },
    Pt = () => {
      n(4, (D = "None"));
    },
    zt = (v) => {
      n(4, (D = v));
    },
    xt = () => {
      n(5, (J = "None"));
    },
    vt = (v) => {
      n(5, (J = v));
    };
  function bt(v) {
    Me[v ? "unshift" : "push"](() => {
      (l = v), n(11, l);
    });
  }
  function Ht(v) {
    Me[v ? "unshift" : "push"](() => {
      (f = v), n(12, f);
    });
  }
  const T = () => {
    y0(i, "chip_database_vis.svg");
  };
  function N(v) {
    Me[v ? "unshift" : "push"](() => {
      (o = v), n(7, o);
    });
  }
  function X(v) {
    Me[v ? "unshift" : "push"](() => {
      (s = v), n(9, s);
    });
  }
  function b(v) {
    Me[v ? "unshift" : "push"](() => {
      (a = v), n(8, a);
    });
  }
  function lt(v) {
    Me[v ? "unshift" : "push"](() => {
      (u = v), n(10, u);
    });
  }
  function K(v) {
    Me[v ? "unshift" : "push"](() => {
      (h = v), n(13, h);
    });
  }
  function rt(v) {
    Me[v ? "unshift" : "push"](() => {
      (i = v), n(6, i);
    });
  }
  return (
    (t.$$set = (v) => {
      "cpuDataSelected" in v && n(0, (Y = v.cpuDataSelected)),
        "gpuDataSelected" in v && n(1, (nt = v.gpuDataSelected)),
        "xAxisProperty" in v && n(2, (Q = v.xAxisProperty)),
        "yAxisProperty" in v && n(3, (Z = v.yAxisProperty)),
        "colorProperty" in v && n(4, (D = v.colorProperty)),
        "sizeProperty" in v && n(5, (J = v.sizeProperty));
    }),
    (t.$$.update = () => {
      t.$$.dirty[0] & 63 && ht();
    }),
    [
      Y,
      nt,
      Q,
      Z,
      D,
      J,
      i,
      o,
      a,
      s,
      u,
      l,
      f,
      h,
      p,
      d,
      k,
      S,
      F,
      z,
      O,
      W,
      H,
      M,
      ct,
      Dt,
      st,
      Ct,
      Pt,
      zt,
      xt,
      vt,
      bt,
      Ht,
      T,
      N,
      X,
      b,
      lt,
      K,
      rt,
    ]
  );
}
class w0 extends dr {
  constructor(e) {
    super(),
      gr(
        this,
        e,
        _0,
        v0,
        mr,
        {
          cpuDataSelected: 0,
          gpuDataSelected: 1,
          xAxisProperty: 2,
          yAxisProperty: 3,
          colorProperty: 4,
          sizeProperty: 5,
        },
        null,
        [-1, -1]
      );
  }
}
function b0(t) {
  let e,
    n,
    r,
    i,
    o,
    a,
    s,
    u,
    l,
    f,
    h,
    p,
    d,
    k,
    S,
    F,
    z,
    B,
    O,
    W,
    H,
    M,
    Y,
    nt,
    Q,
    Z,
    D,
    J,
    et,
    ht,
    wt,
    St,
    ot,
    ut,
    ct,
    Dt,
    st,
    Ct,
    Pt,
    zt,
    xt;
  return {
    c() {
      (e = _("div")),
        (n = _("div")),
        (r = _("div")),
        (i = _("div")),
        (o = _("h5")),
        (a = C("Download the Dataset")),
        (s = R()),
        (u = _("button")),
        (l = R()),
        (f = _("div")),
        (h = _("form")),
        (p = _("div")),
        (d = _("label")),
        (k = C("Full Name")),
        (S = R()),
        (F = _("input")),
        (z = R()),
        (B = _("div")),
        (O = _("label")),
        (W = C("Affliation")),
        (H = R()),
        (M = _("input")),
        (Y = R()),
        (nt = _("div")),
        (Q = _("input")),
        (Z = R()),
        (D = _("label")),
        (J = C("I agree with the ")),
        (et = _("a")),
        (ht = C("Data Usage Agreement")),
        (wt = C(".")),
        (St = R()),
        (ot = _("div")),
        (ut = _("button")),
        (ct = C("Close")),
        (Dt = R()),
        (st = _("button")),
        (Ct = C("Download")),
        this.h();
    },
    l(vt) {
      e = w(vt, "DIV", { class: !0, tabindex: !0 });
      var bt = y(e);
      n = w(bt, "DIV", { class: !0 });
      var Ht = y(n);
      r = w(Ht, "DIV", { class: !0 });
      var T = y(r);
      i = w(T, "DIV", { class: !0 });
      var N = y(i);
      o = w(N, "H5", { class: !0 });
      var X = y(o);
      (a = E(X, "Download the Dataset")),
        X.forEach(g),
        (s = V(N)),
        (u = w(N, "BUTTON", {
          type: !0,
          class: !0,
          "data-bs-dismiss": !0,
          "aria-label": !0,
        })),
        y(u).forEach(g),
        N.forEach(g),
        (l = V(T)),
        (f = w(T, "DIV", { class: !0 }));
      var b = y(f);
      h = w(b, "FORM", {});
      var lt = y(h);
      p = w(lt, "DIV", { class: !0 });
      var K = y(p);
      d = w(K, "LABEL", { for: !0, class: !0 });
      var rt = y(d);
      (k = E(rt, "Full Name")),
        rt.forEach(g),
        (S = V(K)),
        (F = w(K, "INPUT", { type: !0, class: !0, id: !0 })),
        K.forEach(g),
        (z = V(lt)),
        (B = w(lt, "DIV", { class: !0 }));
      var v = y(B);
      O = w(v, "LABEL", { for: !0, class: !0 });
      var it = y(O);
      (W = E(it, "Affliation")),
        it.forEach(g),
        (H = V(v)),
        (M = w(v, "INPUT", { type: !0, class: !0, id: !0 })),
        v.forEach(g),
        (Y = V(lt)),
        (nt = w(lt, "DIV", { class: !0 }));
      var I = y(nt);
      (Q = w(I, "INPUT", { type: !0, class: !0, id: !0 })),
        (Z = V(I)),
        (D = w(I, "LABEL", { class: !0, for: !0 }));
      var U = y(D);
      (J = E(U, "I agree with the ")),
        (et = w(U, "A", { href: !0, download: !0 }));
      var L = y(et);
      (ht = E(L, "Data Usage Agreement")),
        L.forEach(g),
        (wt = E(U, ".")),
        U.forEach(g),
        I.forEach(g),
        lt.forEach(g),
        b.forEach(g),
        (St = V(T)),
        (ot = w(T, "DIV", { class: !0 }));
      var A = y(ot);
      ut = w(A, "BUTTON", { type: !0, class: !0, "data-bs-dismiss": !0 });
      var q = y(ut);
      (ct = E(q, "Close")),
        q.forEach(g),
        (Dt = V(A)),
        (st = w(A, "BUTTON", { type: !0, class: !0 }));
      var $ = y(st);
      (Ct = E($, "Download")),
        $.forEach(g),
        A.forEach(g),
        T.forEach(g),
        Ht.forEach(g),
        bt.forEach(g),
        this.h();
    },
    h() {
      m(o, "class", "modal-title"),
        m(u, "type", "button"),
        m(u, "class", "btn-close"),
        m(u, "data-bs-dismiss", "modal"),
        m(u, "aria-label", "Close"),
        m(i, "class", "modal-header"),
        m(d, "for", "name-input"),
        m(d, "class", "form-label"),
        m(F, "type", "text"),
        m(F, "class", "form-control"),
        m(F, "id", "name-input"),
        m(p, "class", "mb-3"),
        m(O, "for", "affiliation-input"),
        m(O, "class", "form-label"),
        m(M, "type", "text"),
        m(M, "class", "form-control"),
        m(M, "id", "affiliation-input"),
        m(B, "class", "mb-3"),
        m(Q, "type", "checkbox"),
        m(Q, "class", "form-check-input"),
        m(Q, "id", "aggre-input"),
        m(et, "href", "agreement.txt"),
        m(et, "download", ""),
        m(D, "class", "form-check-label"),
        m(D, "for", "agree-input"),
        m(nt, "class", "mb-3 form-check"),
        m(f, "class", "modal-body"),
        m(ut, "type", "button"),
        m(ut, "class", "btn btn-secondary"),
        m(ut, "data-bs-dismiss", "modal"),
        m(st, "type", "button"),
        m(st, "class", "btn btn-primary"),
        (st.disabled = Pt = !t[1]),
        m(ot, "class", "modal-footer"),
        m(r, "class", "modal-content"),
        m(n, "class", "modal-dialog"),
        m(e, "class", "modal svelte-476mkb"),
        m(e, "tabindex", "-1"),
        mo(e, "show", t[0]);
    },
    m(vt, bt) {
      Ft(vt, e, bt),
        c(e, n),
        c(n, r),
        c(r, i),
        c(i, o),
        c(o, a),
        c(i, s),
        c(i, u),
        c(r, l),
        c(r, f),
        c(f, h),
        c(h, p),
        c(p, d),
        c(d, k),
        c(p, S),
        c(p, F),
        Gn(F, t[2]),
        c(h, z),
        c(h, B),
        c(B, O),
        c(O, W),
        c(B, H),
        c(B, M),
        Gn(M, t[3]),
        c(h, Y),
        c(h, nt),
        c(nt, Q),
        (Q.checked = t[4]),
        c(nt, Z),
        c(nt, D),
        c(D, J),
        c(D, et),
        c(et, ht),
        c(D, wt),
        c(r, St),
        c(r, ot),
        c(ot, ut),
        c(ut, ct),
        c(ot, Dt),
        c(ot, st),
        c(st, Ct),
        zt ||
          ((xt = [
            Nt(u, "click", vo(t[8])),
            Nt(F, "input", t[9]),
            Nt(F, "input", t[5]),
            Nt(M, "input", t[10]),
            Nt(M, "input", t[5]),
            Nt(Q, "change", t[11]),
            Nt(Q, "input", t[12]),
            Nt(ut, "click", vo(t[7])),
            Nt(st, "click", t[13]),
          ]),
          (zt = !0));
    },
    p(vt, [bt]) {
      bt & 4 && F.value !== vt[2] && Gn(F, vt[2]),
        bt & 8 && M.value !== vt[3] && Gn(M, vt[3]),
        bt & 16 && (Q.checked = vt[4]),
        bt & 2 && Pt !== (Pt = !vt[1]) && (st.disabled = Pt),
        bt & 1 && mo(e, "show", vt[0]);
    },
    i: rr,
    o: rr,
    d(vt) {
      vt && g(e), (zt = !1), yi(xt);
    },
  };
}
function x0(t, e, n) {
  let { show: r } = e,
    i = !1,
    o = "",
    a = "",
    s = !1;
  function u() {
    console.log(`validating..., ${o}, ${a}, ${s}`),
      o.length > 0 && a.length > 0 && s
        ? (console.log("validated"), n(1, (i = !0)))
        : n(1, (i = !1));
  }
  async function l() {
    if ((console.log("submitting..."), u(), !i)) return;
    const B = await (
      await fetch(
        "/download?" +
          new URLSearchParams({ name: o, affiliation: a, agreed: String(s) })
      )
    ).json();
    if ((console.log(B), B.error)) {
      B.error;
      return;
    }
    n(0, (r = !1));
    const W = await (await fetch("data.csv")).text(),
      H = new Blob([W], { type: "text/csv" }),
      M = URL.createObjectURL(H),
      Y = document.createElement("a");
    (Y.href = M), (Y.download = "chip_dataset.csv"), Y.click();
  }
  function f(z) {
    yo.call(this, t, z);
  }
  function h(z) {
    yo.call(this, t, z);
  }
  function p() {
    (o = this.value), n(2, o);
  }
  function d() {
    (a = this.value), n(3, a);
  }
  function k() {
    (s = this.checked), n(4, s);
  }
  const S = () => {
      n(4, (s = !s)), u();
    },
    F = () => l();
  return (
    (t.$$set = (z) => {
      "show" in z && n(0, (r = z.show));
    }),
    [r, i, o, a, s, u, l, f, h, p, d, k, S, F]
  );
}
class k0 extends dr {
  constructor(e) {
    super(), gr(this, e, x0, b0, mr, { show: 0 });
  }
}
function M0(t) {
  let e,
    n,
    r,
    i,
    o,
    a,
    s,
    u,
    l,
    f,
    h,
    p,
    d,
    k,
    S,
    F,
    z,
    B,
    O,
    W,
    H,
    M,
    Y,
    nt,
    Q,
    Z,
    D,
    J,
    et,
    ht,
    wt,
    St,
    ot,
    ut,
    ct,
    Dt,
    st,
    Ct,
    Pt,
    zt,
    xt,
    vt,
    bt,
    Ht,
    T,
    N,
    X,
    b,
    lt,
    K,
    rt,
    v,
    it,
    I,
    U,
    L,
    A,
    q,
    $,
    tt,
    P,
    dt,
    kt,
    Tt,
    ft,
    j,
    pt,
    Et,
    Mt,
    Wt,
    At,
    yt,
    Ut,
    x,
    at,
    gt,
    G,
    Rt,
    ve,
    ye,
    Pe,
    Be,
    Zt,
    ae,
    Xe,
    Ze,
    Ot,
    Qe,
    _e,
    Je,
    ce,
    we,
    Ke,
    Kt,
    Ne,
    fe,
    jt,
    Lt,
    Sr,
    he,
    je,
    Pr,
    Nr,
    Ce,
    Cr,
    $e,
    Er,
    Ar,
    Ur,
    tn,
    Fr,
    Ln,
    zr,
    Li;
  function Ps(_t) {
    t[7](_t);
  }
  let Hi = {};
  return (
    t[6] !== void 0 && (Hi.show = t[6]),
    (i = new k0({ props: Hi })),
    Me.push(() => Cs(i, "show", Ps)),
    i.$on("click", t[8]),
    (N = new w0({
      props: {
        cpuDataSelected: t[0],
        gpuDataSelected: t[1],
        xAxisProperty: t[2],
        yAxisProperty: t[3],
        sizeProperty: t[5],
        colorProperty: t[4],
      },
    })),
    {
      c() {
        (e = _("script")),
          (n = C(`window.smartlook ||
			(function (d) {
				var o = (smartlook = function () {
						o.api.push(arguments);
					}),
					h = d.getElementsByTagName('head')[0];
				var c = d.createElement('script');
				o.api = new Array();
				c.async = true;
				c.type = 'text/javascript';
				c.charset = 'utf-8';
				c.src = 'https://web-sdk.smartlook.com/recorder.js';
				h.appendChild(c);
			})(document);
		smartlook('init', '6d9869e8e6de80f60330dc4c62724ab52a03aec2', {
			region: 'eu'
		});`)),
          (r = R()),
          Kr(i.$$.fragment),
          (a = R()),
          (s = _("div")),
          (u = _("div")),
          (l = _("div")),
          (f = _("h1")),
          (h = _("i")),
          (p = C(" The CHIP Dataset")),
          (d = R()),
          (k = _("p")),
          (S =
            C(`We provide a dataset with 2231 CPUs and 2714 GPUs to help researchers
				understand the development trend of CPUs and GPUs. The dataset is last
				updated in Jan 2024.`)),
          (F = R()),
          (z = _("p")),
          (B = C("Here are some interesting findings:")),
          (O = R()),
          (W = _("ul")),
          (H = _("li")),
          (M = _("u")),
          (Y = C("Moore's Law still holds, especially in GPUs.")),
          (nt = R()),
          (Q = _("li")),
          (Z = _("u")),
          (D = C("Dannard Scaling is still valid in general.")),
          (J = R()),
          (et = _("li")),
          (ht = _("u")),
          (wt = C("CPUs have higher frequencies, but GPUs are catching up.")),
          (St = R()),
          (ot = _("li")),
          (ut = _("u")),
          (ct = C("GPU performance doubles every 1.5 years.")),
          (Dt = R()),
          (st = _("li")),
          (Ct = _("u")),
          (Pt = C(`GPU performance improvement is a joint effect of smaller
						transistors, larger die size, and higher frequency.`)),
          (zt = R()),
          (xt = _("li")),
          (vt = _("u")),
          (bt =
            C(`High-end GPUs tends to first use new semiconductor technologies.
						Low-end GPUs may use old technologies for a few years.`)),
          (Ht = R()),
          (T = _("div")),
          Kr(N.$$.fragment),
          (X = R()),
          (b = _("div")),
          (lt = _("div")),
          (K = R()),
          (rt = _("div")),
          (v = _("div")),
          (it = _("i")),
          (I = C(" The CHIP Dataset")),
          (U = R()),
          (L = _("p")),
          (A = C("Dataset delivered by ")),
          (q = _("a")),
          ($ = C("Yifan Sun")),
          (tt = C(`,
				Nicolas Bohm Agostini, Shi Dong, and David Kaeli.`)),
          (P = R()),
          (dt = _("p")),
          (kt = C("Visualization created by ")),
          (Tt = _("a")),
          (ft = C("Yifan Sun")),
          (j = C(" and Zhuoyan Zheng.")),
          (pt = R()),
          (Et = _("div")),
          (Mt = _("div")),
          (Wt = C("Publication")),
          (At = R()),
          (yt = _("p")),
          (Ut = C("Cite our paper ")),
          (x = _("a")),
          (at = _("i")),
          (gt = C("Summarizing CPU and GPU Design Trends with Product Data")),
          (G = C(".")),
          (Rt = R()),
          (ve = _("p")),
          (ye = _("a")),
          (Pe = C("[bibtex]")),
          (Be = R()),
          (Zt = _("div")),
          (ae = _("div")),
          (Xe = C("Dataset")),
          (Ze = R()),
          (Ot = _("p")),
          (Qe = C("Data collected mainly from ")),
          (_e = _("a")),
          (Je = C("TechPowerUp")),
          (ce = C(`
				and `)),
          (we = _("a")),
          (Ke = C("WikiChip.org")),
          (Kt = C(".")),
          (Ne = R()),
          (fe = _("p")),
          (jt = _("u")),
          (Lt = C("Download the dataset.")),
          (Sr = R()),
          (he = _("div")),
          (je = _("div")),
          (Pr = C("Permission")),
          (Nr = R()),
          (Ce = _("p")),
          (Cr = C("The dataset is protected under a CC BY-ND 4.0 style ")),
          ($e = _("a")),
          (Er = C("agreement")),
          (Ar = C(".")),
          (Ur = R()),
          (tn = _("p")),
          (Fr =
            C(`Figures downloaded from this visualization tool follows a CC BY 4.0
				license.`)),
          this.h();
      },
      l(_t) {
        const Gt = Es('[data-svelte="svelte-1w18l7x"]', document.head);
        e = w(Gt, "SCRIPT", { type: !0 });
        var wn = y(e);
        (n = E(
          wn,
          `window.smartlook ||
			(function (d) {
				var o = (smartlook = function () {
						o.api.push(arguments);
					}),
					h = d.getElementsByTagName('head')[0];
				var c = d.createElement('script');
				o.api = new Array();
				c.async = true;
				c.type = 'text/javascript';
				c.charset = 'utf-8';
				c.src = 'https://web-sdk.smartlook.com/recorder.js';
				h.appendChild(c);
			})(document);
		smartlook('init', '6d9869e8e6de80f60330dc4c62724ab52a03aec2', {
			region: 'eu'
		});`
        )),
          wn.forEach(g),
          Gt.forEach(g),
          (r = V(_t)),
          jr(i.$$.fragment, _t),
          (a = V(_t)),
          (s = w(_t, "DIV", { class: !0 }));
        var $t = y(s);
        u = w($t, "DIV", { class: !0 });
        var Hn = y(u);
        l = w(Hn, "DIV", { class: !0 });
        var Ee = y(l);
        f = w(Ee, "H1", { class: !0 });
        var Ir = y(f);
        (h = w(Ir, "I", { class: !0 })),
          y(h).forEach(g),
          (p = E(Ir, " The CHIP Dataset")),
          Ir.forEach(g),
          (d = V(Ee)),
          (k = w(Ee, "P", { class: !0 }));
        var Ri = y(k);
        (S = E(
          Ri,
          `We provide a dataset with 2231 CPUs and 2714 GPUs to help researchers
				understand the development trend of CPUs and GPUs. The dataset is last
				updated in Jan 2024.`
        )),
          Ri.forEach(g),
          (F = V(Ee)),
          (z = w(Ee, "P", { class: !0 }));
        var Vi = y(z);
        (B = E(Vi, "Here are some interesting findings:")),
          Vi.forEach(g),
          (O = V(Ee)),
          (W = w(Ee, "UL", {}));
        var te = y(W);
        H = w(te, "LI", { class: !0 });
        var Yi = y(H);
        M = w(Yi, "U", {});
        var Oi = y(M);
        (Y = E(Oi, "Moore's Law still holds, especially in GPUs.")),
          Oi.forEach(g),
          Yi.forEach(g),
          (nt = V(te)),
          (Q = w(te, "LI", { class: !0 }));
        var qi = y(Q);
        Z = w(qi, "U", {});
        var Wi = y(Z);
        (D = E(Wi, "Dannard Scaling is still valid in general.")),
          Wi.forEach(g),
          qi.forEach(g),
          (J = V(te)),
          (et = w(te, "LI", { class: !0 }));
        var Gi = y(et);
        ht = w(Gi, "U", {});
        var Bi = y(ht);
        (wt = E(Bi, "CPUs have higher frequencies, but GPUs are catching up.")),
          Bi.forEach(g),
          Gi.forEach(g),
          (St = V(te)),
          (ot = w(te, "LI", { class: !0 }));
        var Xi = y(ot);
        ut = w(Xi, "U", {});
        var Zi = y(ut);
        (ct = E(Zi, "GPU performance doubles every 1.5 years.")),
          Zi.forEach(g),
          Xi.forEach(g),
          (Dt = V(te)),
          (st = w(te, "LI", { class: !0 }));
        var Qi = y(st);
        Ct = w(Qi, "U", {});
        var Ji = y(Ct);
        (Pt = E(
          Ji,
          `GPU performance improvement is a joint effect of smaller
						transistors, larger die size, and higher frequency.`
        )),
          Ji.forEach(g),
          Qi.forEach(g),
          (zt = V(te)),
          (xt = w(te, "LI", { class: !0 }));
        var Ki = y(xt);
        vt = w(Ki, "U", {});
        var ji = y(vt);
        (bt = E(
          ji,
          `High-end GPUs tends to first use new semiconductor technologies.
						Low-end GPUs may use old technologies for a few years.`
        )),
          ji.forEach(g),
          Ki.forEach(g),
          te.forEach(g),
          Ee.forEach(g),
          (Ht = V(Hn)),
          (T = w(Hn, "DIV", { class: !0 }));
        var $i = y(T);
        jr(N.$$.fragment, $i),
          $i.forEach(g),
          Hn.forEach(g),
          (X = V($t)),
          (b = w($t, "DIV", { class: !0 }));
        var pe = y(b);
        (lt = w(pe, "DIV", { class: !0 })),
          y(lt).forEach(g),
          (K = V(pe)),
          (rt = w(pe, "DIV", { class: !0 }));
        var en = y(rt);
        v = w(en, "DIV", { class: !0 });
        var Lr = y(v);
        (it = w(Lr, "I", { class: !0 })),
          y(it).forEach(g),
          (I = E(Lr, " The CHIP Dataset")),
          Lr.forEach(g),
          (U = V(en)),
          (L = w(en, "P", { class: !0 }));
        var Rn = y(L);
        (A = E(Rn, "Dataset delivered by ")), (q = w(Rn, "A", { href: !0 }));
        var to = y(q);
        ($ = E(to, "Yifan Sun")),
          to.forEach(g),
          (tt = E(
            Rn,
            `,
				Nicolas Bohm Agostini, Shi Dong, and David Kaeli.`
          )),
          Rn.forEach(g),
          (P = V(en)),
          (dt = w(en, "P", { class: !0 }));
        var Vn = y(dt);
        (kt = E(Vn, "Visualization created by ")),
          (Tt = w(Vn, "A", { href: !0 }));
        var eo = y(Tt);
        (ft = E(eo, "Yifan Sun")),
          eo.forEach(g),
          (j = E(Vn, " and Zhuoyan Zheng.")),
          Vn.forEach(g),
          en.forEach(g),
          (pt = V(pe)),
          (Et = w(pe, "DIV", { class: !0 }));
        var nn = y(Et);
        Mt = w(nn, "DIV", { class: !0 });
        var no = y(Mt);
        (Wt = E(no, "Publication")),
          no.forEach(g),
          (At = V(nn)),
          (yt = w(nn, "P", { class: !0 }));
        var Yn = y(yt);
        (Ut = E(Yn, "Cite our paper ")),
          (x = w(Yn, "A", { href: !0, target: !0 }));
        var ro = y(x);
        at = w(ro, "I", {});
        var io = y(at);
        (gt = E(io, "Summarizing CPU and GPU Design Trends with Product Data")),
          io.forEach(g),
          ro.forEach(g),
          (G = E(Yn, ".")),
          Yn.forEach(g),
          (Rt = V(nn)),
          (ve = w(nn, "P", { class: !0 }));
        var oo = y(ve);
        ye = w(oo, "A", { href: !0 });
        var ao = y(ye);
        (Pe = E(ao, "[bibtex]")),
          ao.forEach(g),
          oo.forEach(g),
          nn.forEach(g),
          (Be = V(pe)),
          (Zt = w(pe, "DIV", { class: !0 }));
        var rn = y(Zt);
        ae = w(rn, "DIV", { class: !0 });
        var so = y(ae);
        (Xe = E(so, "Dataset")),
          so.forEach(g),
          (Ze = V(rn)),
          (Ot = w(rn, "P", { class: !0 }));
        var on = y(Ot);
        (Qe = E(on, "Data collected mainly from ")),
          (_e = w(on, "A", { href: !0 }));
        var lo = y(_e);
        (Je = E(lo, "TechPowerUp")),
          lo.forEach(g),
          (ce = E(
            on,
            `
				and `
          )),
          (we = w(on, "A", { href: !0 }));
        var uo = y(we);
        (Ke = E(uo, "WikiChip.org")),
          uo.forEach(g),
          (Kt = E(on, ".")),
          on.forEach(g),
          (Ne = V(rn)),
          (fe = w(rn, "P", { class: !0 }));
        var co = y(fe);
        jt = w(co, "U", {});
        var fo = y(jt);
        (Lt = E(fo, "Download the dataset.")),
          fo.forEach(g),
          co.forEach(g),
          rn.forEach(g),
          (Sr = V(pe)),
          (he = w(pe, "DIV", { class: !0 }));
        var an = y(he);
        je = w(an, "DIV", { class: !0 });
        var ho = y(je);
        (Pr = E(ho, "Permission")),
          ho.forEach(g),
          (Nr = V(an)),
          (Ce = w(an, "P", { class: !0 }));
        var On = y(Ce);
        (Cr = E(On, "The dataset is protected under a CC BY-ND 4.0 style ")),
          ($e = w(On, "A", { href: !0 }));
        var po = y($e);
        (Er = E(po, "agreement")),
          po.forEach(g),
          (Ar = E(On, ".")),
          On.forEach(g),
          (Ur = V(an)),
          (tn = w(an, "P", { class: !0 }));
        var go = y(tn);
        (Fr = E(
          go,
          `Figures downloaded from this visualization tool follows a CC BY 4.0
				license.`
        )),
          go.forEach(g),
          an.forEach(g),
          pe.forEach(g),
          $t.forEach(g),
          this.h();
      },
      h() {
        m(e, "type", "text/javascript"),
          m(h, "class", "fa-solid fa-microchip"),
          m(f, "class", "svelte-15sok8e"),
          m(k, "class", "svelte-15sok8e"),
          m(z, "class", "svelte-15sok8e"),
          m(H, "class", "clickable svelte-15sok8e"),
          m(Q, "class", "clickable svelte-15sok8e"),
          m(et, "class", "clickable svelte-15sok8e"),
          m(ot, "class", "clickable svelte-15sok8e"),
          m(st, "class", "clickable svelte-15sok8e"),
          m(xt, "class", "clickable svelte-15sok8e"),
          m(l, "class", "col-3 left-col"),
          m(T, "class", "col-9 mt-4"),
          m(u, "class", "row"),
          m(lt, "class", "col-1"),
          m(it, "class", "fa-solid fa-microchip"),
          m(v, "class", "h5"),
          m(q, "href", "https://syifan.github.io"),
          m(L, "class", "svelte-15sok8e"),
          m(Tt, "href", "https://syifan.github.io"),
          m(dt, "class", "svelte-15sok8e"),
          m(rt, "class", "col-2 text-left svelte-15sok8e"),
          m(Mt, "class", "h6"),
          m(x, "href", "https://arxiv.org/abs/1911.11313"),
          m(x, "target", "_blank"),
          m(yt, "class", "svelte-15sok8e"),
          m(ye, "href", "chip_dataset.bib"),
          m(ve, "class", "svelte-15sok8e"),
          m(Et, "class", "col col-2 text-left svelte-15sok8e"),
          m(ae, "class", "h6"),
          m(_e, "href", "https://www.techpowerup.com/"),
          m(we, "href", "https://en.wikichip.org/wiki/WikiChip"),
          m(Ot, "class", "svelte-15sok8e"),
          m(fe, "class", "clickable svelte-15sok8e"),
          m(Zt, "class", "col col-2 text-left svelte-15sok8e"),
          m(je, "class", "h6"),
          m($e, "href", "agreement.txt"),
          m(Ce, "class", "svelte-15sok8e"),
          m(tn, "class", "svelte-15sok8e"),
          m(he, "class", "col col-2 text-left svelte-15sok8e"),
          m(b, "class", "row footer svelte-15sok8e"),
          m(s, "class", "container-fluid");
      },
      m(_t, Gt) {
        c(document.head, e),
          c(e, n),
          Ft(_t, r, Gt),
          $r(i, _t, Gt),
          Ft(_t, a, Gt),
          Ft(_t, s, Gt),
          c(s, u),
          c(u, l),
          c(l, f),
          c(f, h),
          c(f, p),
          c(l, d),
          c(l, k),
          c(k, S),
          c(l, F),
          c(l, z),
          c(z, B),
          c(l, O),
          c(l, W),
          c(W, H),
          c(H, M),
          c(M, Y),
          c(W, nt),
          c(W, Q),
          c(Q, Z),
          c(Z, D),
          c(W, J),
          c(W, et),
          c(et, ht),
          c(ht, wt),
          c(W, St),
          c(W, ot),
          c(ot, ut),
          c(ut, ct),
          c(W, Dt),
          c(W, st),
          c(st, Ct),
          c(Ct, Pt),
          c(W, zt),
          c(W, xt),
          c(xt, vt),
          c(vt, bt),
          c(u, Ht),
          c(u, T),
          $r(N, T, null),
          c(s, X),
          c(s, b),
          c(b, lt),
          c(b, K),
          c(b, rt),
          c(rt, v),
          c(v, it),
          c(v, I),
          c(rt, U),
          c(rt, L),
          c(L, A),
          c(L, q),
          c(q, $),
          c(L, tt),
          c(rt, P),
          c(rt, dt),
          c(dt, kt),
          c(dt, Tt),
          c(Tt, ft),
          c(dt, j),
          c(b, pt),
          c(b, Et),
          c(Et, Mt),
          c(Mt, Wt),
          c(Et, At),
          c(Et, yt),
          c(yt, Ut),
          c(yt, x),
          c(x, at),
          c(at, gt),
          c(yt, G),
          c(Et, Rt),
          c(Et, ve),
          c(ve, ye),
          c(ye, Pe),
          c(b, Be),
          c(b, Zt),
          c(Zt, ae),
          c(ae, Xe),
          c(Zt, Ze),
          c(Zt, Ot),
          c(Ot, Qe),
          c(Ot, _e),
          c(_e, Je),
          c(Ot, ce),
          c(Ot, we),
          c(we, Ke),
          c(Ot, Kt),
          c(Zt, Ne),
          c(Zt, fe),
          c(fe, jt),
          c(jt, Lt),
          c(b, Sr),
          c(b, he),
          c(he, je),
          c(je, Pr),
          c(he, Nr),
          c(he, Ce),
          c(Ce, Cr),
          c(Ce, $e),
          c($e, Er),
          c(Ce, Ar),
          c(he, Ur),
          c(he, tn),
          c(tn, Fr),
          (Ln = !0),
          zr ||
            ((Li = [
              Nt(H, "click", t[9]),
              Nt(Q, "click", t[10]),
              Nt(et, "click", t[11]),
              Nt(ot, "click", t[12]),
              Nt(st, "click", t[13]),
              Nt(xt, "click", t[14]),
              Nt(fe, "click", t[15]),
            ]),
            (zr = !0));
      },
      p(_t, [Gt]) {
        const wn = {};
        !o && Gt & 64 && ((o = !0), (wn.show = _t[6]), As(() => (o = !1))),
          i.$set(wn);
        const $t = {};
        Gt & 1 && ($t.cpuDataSelected = _t[0]),
          Gt & 2 && ($t.gpuDataSelected = _t[1]),
          Gt & 4 && ($t.xAxisProperty = _t[2]),
          Gt & 8 && ($t.yAxisProperty = _t[3]),
          Gt & 32 && ($t.sizeProperty = _t[5]),
          Gt & 16 && ($t.colorProperty = _t[4]),
          N.$set($t);
      },
      i(_t) {
        Ln || (ti(i.$$.fragment, _t), ti(N.$$.fragment, _t), (Ln = !0));
      },
      o(_t) {
        ei(i.$$.fragment, _t), ei(N.$$.fragment, _t), (Ln = !1);
      },
      d(_t) {
        g(e),
          _t && g(r),
          ni(i, _t),
          _t && g(a),
          _t && g(s),
          ni(N),
          (zr = !1),
          yi(Li);
      },
    }
  );
}
function T0(t, e, n) {
  let r = !0,
    i = !0,
    o = "Release Date",
    a = "Transistors (million)",
    s = "Type",
    u = "None",
    l = !1;
  function f(O) {
    (l = O), n(6, l);
  }
  return [
    r,
    i,
    o,
    a,
    s,
    u,
    l,
    f,
    () => {
      n(6, (l = !1));
    },
    () => {
      n(0, (r = !0)),
        n(1, (i = !0)),
        n(2, (o = "Release Date")),
        n(3, (a = "Transistors (million)")),
        n(4, (s = "Type")),
        n(5, (u = "None"));
    },
    () => {
      n(0, (r = !0)),
        n(1, (i = !0)),
        n(2, (o = "Die Size (mm^2)")),
        n(3, (a = "TDP (W)")),
        n(4, (s = "Type")),
        n(5, (u = "None"));
    },
    () => {
      n(0, (r = !0)),
        n(1, (i = !0)),
        n(2, (o = "Release Date")),
        n(3, (a = "Freq (MHz)")),
        n(4, (s = "Type")),
        n(5, (u = "None"));
    },
    () => {
      n(0, (r = !1)),
        n(1, (i = !0)),
        n(2, (o = "Release Date")),
        n(3, (a = "FP32 GFLOPS")),
        n(4, (s = "Vendor")),
        n(5, (u = "Die Size (mm^2)"));
    },
    () => {
      n(0, (r = !1)),
        n(1, (i = !0)),
        n(2, (o = "Transistors (million)")),
        n(3, (a = "FP32 GFLOPS")),
        n(4, (s = "Freq (MHz)")),
        n(5, (u = "Die Size (mm^2)"));
    },
    () => {
      n(0, (r = !1)),
        n(1, (i = !0)),
        n(2, (o = "Release Date")),
        n(3, (a = "Transistors (million)")),
        n(4, (s = "Process Size (nm)")),
        n(5, (u = "None"));
    },
    () => n(6, (l = !l)),
  ];
}
class S0 extends dr {
  constructor(e) {
    super(), gr(this, e, T0, M0, mr, {});
  }
}
export { S0 as default };
