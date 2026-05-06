// node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var o;
var r;
var e;
var f;
var c;
var s;
var a;
var h;
var p = {};
var v = [];
var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var d = Array.isArray;
function w(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function g(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l2, u2, t2) {
  var i2, o2, r2, e2 = {};
  for (r2 in u2)
    r2 == "key" ? i2 = u2[r2] : r2 == "ref" ? o2 = u2[r2] : e2[r2] = u2[r2];
  if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), typeof l2 == "function" && l2.defaultProps != null)
    for (r2 in l2.defaultProps)
      e2[r2] === undefined && (e2[r2] = l2.defaultProps[r2]);
  return m(l2, e2, i2, o2, null);
}
function m(n2, t2, i2, o2, r2) {
  var e2 = { type: n2, props: t2, key: i2, ref: o2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: undefined, __v: r2 == null ? ++u : r2, __i: -1, __u: 0 };
  return r2 == null && l.vnode != null && l.vnode(e2), e2;
}
function k(n2) {
  return n2.children;
}
function x(n2, l2) {
  this.props = n2, this.context = l2;
}
function S(n2, l2) {
  if (l2 == null)
    return n2.__ ? S(n2.__, n2.__i + 1) : null;
  for (var u2;l2 < n2.__k.length; l2++)
    if ((u2 = n2.__k[l2]) != null && u2.__e != null)
      return u2.__e;
  return typeof n2.type == "function" ? S(n2) : null;
}
function C(n2) {
  var l2, u2;
  if ((n2 = n2.__) != null && n2.__c != null) {
    for (n2.__e = n2.__c.base = null, l2 = 0;l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return C(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !$.__r++ || o != l.debounceRendering) && ((o = l.debounceRendering) || r)($);
}
function $() {
  for (var n2, u2, t2, o2, r2, f2, c2, s2 = 1;i.length; )
    i.length > s2 && i.sort(e), n2 = i.shift(), s2 = i.length, n2.__d && (t2 = undefined, o2 = undefined, r2 = (o2 = (u2 = n2).__v).__e, f2 = [], c2 = [], u2.__P && ((t2 = w({}, o2)).__v = o2.__v + 1, l.vnode && l.vnode(t2), O(u2.__P, t2, o2, u2.__n, u2.__P.namespaceURI, 32 & o2.__u ? [r2] : null, f2, r2 == null ? S(o2) : r2, !!(32 & o2.__u), c2), t2.__v = o2.__v, t2.__.__k[t2.__i] = t2, N(f2, t2, c2), o2.__e = o2.__ = null, t2.__e != r2 && C(t2)));
  $.__r = 0;
}
function I(n2, l2, u2, t2, i2, o2, r2, e2, f2, c2, s2) {
  var a2, h2, y2, d2, w2, g2, _2, m2 = t2 && t2.__k || v, b = l2.length;
  for (f2 = P(u2, l2, m2, f2, b), a2 = 0;a2 < b; a2++)
    (y2 = u2.__k[a2]) != null && (h2 = y2.__i == -1 ? p : m2[y2.__i] || p, y2.__i = a2, g2 = O(n2, y2, h2, i2, o2, r2, e2, f2, c2, s2), d2 = y2.__e, y2.ref && h2.ref != y2.ref && (h2.ref && B(h2.ref, null, y2), s2.push(y2.ref, y2.__c || d2, y2)), w2 == null && d2 != null && (w2 = d2), (_2 = !!(4 & y2.__u)) || h2.__k === y2.__k ? f2 = A(y2, f2, n2, _2) : typeof y2.type == "function" && g2 !== undefined ? f2 = g2 : d2 && (f2 = d2.nextSibling), y2.__u &= -7);
  return u2.__e = w2, f2;
}
function P(n2, l2, u2, t2, i2) {
  var o2, r2, e2, f2, c2, s2 = u2.length, a2 = s2, h2 = 0;
  for (n2.__k = new Array(i2), o2 = 0;o2 < i2; o2++)
    (r2 = l2[o2]) != null && typeof r2 != "boolean" && typeof r2 != "function" ? (typeof r2 == "string" || typeof r2 == "number" || typeof r2 == "bigint" || r2.constructor == String ? r2 = n2.__k[o2] = m(null, r2, null, null, null) : d(r2) ? r2 = n2.__k[o2] = m(k, { children: r2 }, null, null, null) : r2.constructor === undefined && r2.__b > 0 ? r2 = n2.__k[o2] = m(r2.type, r2.props, r2.key, r2.ref ? r2.ref : null, r2.__v) : n2.__k[o2] = r2, f2 = o2 + h2, r2.__ = n2, r2.__b = n2.__b + 1, e2 = null, (c2 = r2.__i = L(r2, u2, f2, a2)) != -1 && (a2--, (e2 = u2[c2]) && (e2.__u |= 2)), e2 == null || e2.__v == null ? (c2 == -1 && (i2 > s2 ? h2-- : i2 < s2 && h2++), typeof r2.type != "function" && (r2.__u |= 4)) : c2 != f2 && (c2 == f2 - 1 ? h2-- : c2 == f2 + 1 ? h2++ : (c2 > f2 ? h2-- : h2++, r2.__u |= 4))) : n2.__k[o2] = null;
  if (a2)
    for (o2 = 0;o2 < s2; o2++)
      (e2 = u2[o2]) != null && (2 & e2.__u) == 0 && (e2.__e == t2 && (t2 = S(e2)), D(e2, e2));
  return t2;
}
function A(n2, l2, u2, t2) {
  var i2, o2;
  if (typeof n2.type == "function") {
    for (i2 = n2.__k, o2 = 0;i2 && o2 < i2.length; o2++)
      i2[o2] && (i2[o2].__ = n2, l2 = A(i2[o2], l2, u2, t2));
    return l2;
  }
  n2.__e != l2 && (t2 && (l2 && n2.type && !l2.parentNode && (l2 = S(n2)), u2.insertBefore(n2.__e, l2 || null)), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (l2 != null && l2.nodeType == 8);
  return l2;
}
function L(n2, l2, u2, t2) {
  var i2, o2, r2, e2 = n2.key, f2 = n2.type, c2 = l2[u2], s2 = c2 != null && (2 & c2.__u) == 0;
  if (c2 === null && e2 == null || s2 && e2 == c2.key && f2 == c2.type)
    return u2;
  if (t2 > (s2 ? 1 : 0)) {
    for (i2 = u2 - 1, o2 = u2 + 1;i2 >= 0 || o2 < l2.length; )
      if ((c2 = l2[r2 = i2 >= 0 ? i2-- : o2++]) != null && (2 & c2.__u) == 0 && e2 == c2.key && f2 == c2.type)
        return r2;
  }
  return -1;
}
function T(n2, l2, u2) {
  l2[0] == "-" ? n2.setProperty(l2, u2 == null ? "" : u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || y.test(l2) ? u2 : u2 + "px";
}
function j(n2, l2, u2, t2, i2) {
  var o2, r2;
  n:
    if (l2 == "style")
      if (typeof u2 == "string")
        n2.style.cssText = u2;
      else {
        if (typeof t2 == "string" && (n2.style.cssText = t2 = ""), t2)
          for (l2 in t2)
            u2 && l2 in u2 || T(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            t2 && u2[l2] == t2[l2] || T(n2.style, l2, u2[l2]);
      }
    else if (l2[0] == "o" && l2[1] == "n")
      o2 = l2 != (l2 = l2.replace(f, "$1")), r2 = l2.toLowerCase(), l2 = r2 in n2 || l2 == "onFocusOut" || l2 == "onFocusIn" ? r2.slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = c, n2.addEventListener(l2, o2 ? a : s, o2)) : n2.removeEventListener(l2, o2 ? a : s, o2);
    else {
      if (i2 == "http://www.w3.org/2000/svg")
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (l2 != "width" && l2 != "height" && l2 != "href" && l2 != "list" && l2 != "form" && l2 != "tabIndex" && l2 != "download" && l2 != "rowSpan" && l2 != "colSpan" && l2 != "role" && l2 != "popover" && l2 in n2)
        try {
          n2[l2] = u2 == null ? "" : u2;
          break n;
        } catch (n3) {}
      typeof u2 == "function" || (u2 == null || u2 === false && l2[4] != "-" ? n2.removeAttribute(l2) : n2.setAttribute(l2, l2 == "popover" && u2 == 1 ? "" : u2));
    }
}
function F(n2) {
  return function(u2) {
    if (this.l) {
      var t2 = this.l[u2.type + n2];
      if (u2.t == null)
        u2.t = c++;
      else if (u2.t < t2.u)
        return;
      return t2(l.event ? l.event(u2) : u2);
    }
  };
}
function O(n2, u2, t2, i2, o2, r2, e2, f2, c2, s2) {
  var a2, h2, p2, v2, y2, _2, m2, b, S2, C2, M2, $2, P2, A2, H, L2, T2, j2 = u2.type;
  if (u2.constructor !== undefined)
    return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r2 = [f2 = u2.__e = t2.__e]), (a2 = l.__b) && a2(u2);
  n:
    if (typeof j2 == "function")
      try {
        if (b = u2.props, S2 = "prototype" in j2 && j2.prototype.render, C2 = (a2 = j2.contextType) && i2[a2.__c], M2 = a2 ? C2 ? C2.props.value : a2.__ : i2, t2.__c ? m2 = (h2 = u2.__c = t2.__c).__ = h2.__E : (S2 ? u2.__c = h2 = new j2(b, M2) : (u2.__c = h2 = new x(b, M2), h2.constructor = j2, h2.render = E), C2 && C2.sub(h2), h2.state || (h2.state = {}), h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), S2 && h2.__s == null && (h2.__s = h2.state), S2 && j2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = w({}, h2.__s)), w(h2.__s, j2.getDerivedStateFromProps(b, h2.__s))), v2 = h2.props, y2 = h2.state, h2.__v = u2, p2)
          S2 && j2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), S2 && h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
        else {
          if (S2 && j2.getDerivedStateFromProps == null && b !== v2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(b, M2), u2.__v == t2.__v || !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(b, h2.__s, M2) === false) {
            for (u2.__v != t2.__v && (h2.props = b, h2.state = h2.__s, h2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.some(function(n3) {
              n3 && (n3.__ = u2);
            }), $2 = 0;$2 < h2._sb.length; $2++)
              h2.__h.push(h2._sb[$2]);
            h2._sb = [], h2.__h.length && e2.push(h2);
            break n;
          }
          h2.componentWillUpdate != null && h2.componentWillUpdate(b, h2.__s, M2), S2 && h2.componentDidUpdate != null && h2.__h.push(function() {
            h2.componentDidUpdate(v2, y2, _2);
          });
        }
        if (h2.context = M2, h2.props = b, h2.__P = n2, h2.__e = false, P2 = l.__r, A2 = 0, S2) {
          for (h2.state = h2.__s, h2.__d = false, P2 && P2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H = 0;H < h2._sb.length; H++)
            h2.__h.push(h2._sb[H]);
          h2._sb = [];
        } else
          do {
            h2.__d = false, P2 && P2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++A2 < 25);
        h2.state = h2.__s, h2.getChildContext != null && (i2 = w(w({}, i2), h2.getChildContext())), S2 && !p2 && h2.getSnapshotBeforeUpdate != null && (_2 = h2.getSnapshotBeforeUpdate(v2, y2)), L2 = a2, a2 != null && a2.type === k && a2.key == null && (L2 = V(a2.props.children)), f2 = I(n2, d(L2) ? L2 : [L2], u2, t2, i2, o2, r2, e2, f2, c2, s2), h2.base = u2.__e, u2.__u &= -161, h2.__h.length && e2.push(h2), m2 && (h2.__E = h2.__ = null);
      } catch (n3) {
        if (u2.__v = null, c2 || r2 != null)
          if (n3.then) {
            for (u2.__u |= c2 ? 160 : 128;f2 && f2.nodeType == 8 && f2.nextSibling; )
              f2 = f2.nextSibling;
            r2[r2.indexOf(f2)] = null, u2.__e = f2;
          } else {
            for (T2 = r2.length;T2--; )
              g(r2[T2]);
            z(u2);
          }
        else
          u2.__e = t2.__e, u2.__k = t2.__k, n3.then || z(u2);
        l.__e(n3, u2, t2);
      }
    else
      r2 == null && u2.__v == t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : f2 = u2.__e = q(t2.__e, u2, t2, i2, o2, r2, e2, c2, s2);
  return (a2 = l.diffed) && a2(u2), 128 & u2.__u ? undefined : f2;
}
function z(n2) {
  n2 && n2.__c && (n2.__c.__e = true), n2 && n2.__k && n2.__k.forEach(z);
}
function N(n2, u2, t2) {
  for (var i2 = 0;i2 < t2.length; i2++)
    B(t2[i2], t2[++i2], t2[++i2]);
  l.__c && l.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l.__e(n3, u3.__v);
    }
  });
}
function V(n2) {
  return typeof n2 != "object" || n2 == null || n2.__b && n2.__b > 0 ? n2 : d(n2) ? n2.map(V) : w({}, n2);
}
function q(u2, t2, i2, o2, r2, e2, f2, c2, s2) {
  var a2, h2, v2, y2, w2, _2, m2, b = i2.props || p, k2 = t2.props, x2 = t2.type;
  if (x2 == "svg" ? r2 = "http://www.w3.org/2000/svg" : x2 == "math" ? r2 = "http://www.w3.org/1998/Math/MathML" : r2 || (r2 = "http://www.w3.org/1999/xhtml"), e2 != null) {
    for (a2 = 0;a2 < e2.length; a2++)
      if ((w2 = e2[a2]) && "setAttribute" in w2 == !!x2 && (x2 ? w2.localName == x2 : w2.nodeType == 3)) {
        u2 = w2, e2[a2] = null;
        break;
      }
  }
  if (u2 == null) {
    if (x2 == null)
      return document.createTextNode(k2);
    u2 = document.createElementNS(r2, x2, k2.is && k2), c2 && (l.__m && l.__m(t2, e2), c2 = false), e2 = null;
  }
  if (x2 == null)
    b === k2 || c2 && u2.data == k2 || (u2.data = k2);
  else {
    if (e2 = e2 && n.call(u2.childNodes), !c2 && e2 != null)
      for (b = {}, a2 = 0;a2 < u2.attributes.length; a2++)
        b[(w2 = u2.attributes[a2]).name] = w2.value;
    for (a2 in b)
      if (w2 = b[a2], a2 == "children")
        ;
      else if (a2 == "dangerouslySetInnerHTML")
        v2 = w2;
      else if (!(a2 in k2)) {
        if (a2 == "value" && "defaultValue" in k2 || a2 == "checked" && "defaultChecked" in k2)
          continue;
        j(u2, a2, null, w2, r2);
      }
    for (a2 in k2)
      w2 = k2[a2], a2 == "children" ? y2 = w2 : a2 == "dangerouslySetInnerHTML" ? h2 = w2 : a2 == "value" ? _2 = w2 : a2 == "checked" ? m2 = w2 : c2 && typeof w2 != "function" || b[a2] === w2 || j(u2, a2, w2, b[a2], r2);
    if (h2)
      c2 || v2 && (h2.__html == v2.__html || h2.__html == u2.innerHTML) || (u2.innerHTML = h2.__html), t2.__k = [];
    else if (v2 && (u2.innerHTML = ""), I(t2.type == "template" ? u2.content : u2, d(y2) ? y2 : [y2], t2, i2, o2, x2 == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r2, e2, f2, e2 ? e2[0] : i2.__k && S(i2, 0), c2, s2), e2 != null)
      for (a2 = e2.length;a2--; )
        g(e2[a2]);
    c2 || (a2 = "value", x2 == "progress" && _2 == null ? u2.removeAttribute("value") : _2 != null && (_2 !== u2[a2] || x2 == "progress" && !_2 || x2 == "option" && _2 != b[a2]) && j(u2, a2, _2, b[a2], r2), a2 = "checked", m2 != null && m2 != u2[a2] && j(u2, a2, m2, b[a2], r2));
  }
  return u2;
}
function B(n2, u2, t2) {
  try {
    if (typeof n2 == "function") {
      var i2 = typeof n2.__u == "function";
      i2 && n2.__u(), i2 && u2 == null || (n2.__u = n2(u2));
    } else
      n2.current = u2;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function D(n2, u2, t2) {
  var i2, o2;
  if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current != n2.__e || B(i2, null, u2)), (i2 = n2.__c) != null) {
    if (i2.componentWillUnmount)
      try {
        i2.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u2);
      }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k)
    for (o2 = 0;o2 < i2.length; o2++)
      i2[o2] && D(i2[o2], u2, t2 || typeof n2.type != "function");
  t2 || g(n2.__e), n2.__c = n2.__ = n2.__e = undefined;
}
function E(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function G(u2, t2, i2) {
  var o2, r2, e2, f2;
  t2 == document && (t2 = document.documentElement), l.__ && l.__(u2, t2), r2 = (o2 = typeof i2 == "function") ? null : i2 && i2.__k || t2.__k, e2 = [], f2 = [], O(t2, u2 = (!o2 && i2 || t2).__k = _(k, null, [u2]), r2 || p, p, t2.namespaceURI, !o2 && i2 ? [i2] : r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, e2, !o2 && i2 ? i2 : r2 ? r2.__e : t2.firstChild, o2, f2), N(e2, u2, f2);
}
n = v.slice, l = { __e: function(n2, l2, u2, t2) {
  for (var i2, o2, r2;l2 = l2.__; )
    if ((i2 = l2.__c) && !i2.__)
      try {
        if ((o2 = i2.constructor) && o2.getDerivedStateFromError != null && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), i2.componentDidCatch != null && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2)
          return i2.__E = i2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u = 0, t = function(n2) {
  return n2 != null && n2.constructor === undefined;
}, x.prototype.setState = function(n2, l2) {
  var u2;
  u2 = this.__s != null && this.__s != this.state ? this.__s : this.__s = w({}, this.state), typeof n2 == "function" && (n2 = n2(w({}, u2), this.props)), n2 && w(u2, n2), n2 != null && this.__v && (l2 && this._sb.push(l2), M(this));
}, x.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
}, x.prototype.render = k, i = [], r = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;

// node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = l;
var e2 = c2.__b;
var a2 = c2.__r;
var v2 = c2.diffed;
var l2 = c2.__c;
var m2 = c2.unmount;
var s2 = c2.__;
function p2(n2, t3) {
  c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
  var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n2 >= u3.__.length && u3.__.push({}), u3.__[n2];
}
function d2(n2) {
  return o2 = 1, h2(D2, n2);
}
function h2(n2, u3, i3) {
  var o3 = p2(t2++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : D2(undefined, u3), function(n3) {
    var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
    t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r2, !r2.__f)) {
    var f3 = function(n3, t3, r3) {
      if (!o3.__c.__H)
        return true;
      var u4 = o3.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u4.every(function(n4) {
        return !n4.__N;
      }))
        return !c3 || c3.call(this, n3, t3, r3);
      var i4 = o3.__c.props !== n3;
      return u4.forEach(function(n4) {
        if (n4.__N) {
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = undefined, t4 !== n4.__[0] && (i4 = true);
        }
      }), c3 && c3.call(this, n3, t3, r3) || i4;
    };
    r2.__f = true;
    var { shouldComponentUpdate: c3, componentWillUpdate: e3 } = r2;
    r2.componentWillUpdate = function(n3, t3, r3) {
      if (this.__e) {
        var u4 = c3;
        c3 = undefined, f3(n3, t3, r3), c3 = u4;
      }
      e3 && e3.call(this, n3, t3, r3);
    }, r2.shouldComponentUpdate = f3;
  }
  return o3.__N || o3.__;
}
function y2(n2, u3) {
  var i3 = p2(t2++, 3);
  !c2.__s && C2(i3.__H, u3) && (i3.__ = n2, i3.u = u3, r2.__H.__h.push(i3));
}
function A2(n2) {
  return o2 = 5, T2(function() {
    return { current: n2 };
  }, []);
}
function T2(n2, r3) {
  var u3 = p2(t2++, 7);
  return C2(u3.__H, r3) && (u3.__ = n2(), u3.__H = r3, u3.__h = n2), u3.__;
}
function j2() {
  for (var n2;n2 = f2.shift(); )
    if (n2.__P && n2.__H)
      try {
        n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
      } catch (t3) {
        n2.__H.__h = [], c2.__e(t3, n2.__v);
      }
}
c2.__b = function(n2) {
  r2 = null, e2 && e2(n2);
}, c2.__ = function(n2, t3) {
  n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
}, c2.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var i3 = (r2 = n2.__c).__H;
  i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = undefined;
  })) : (i3.__h.forEach(z2), i3.__h.forEach(B2), i3.__h = [], t2 = 0)), u2 = r2;
}, c2.diffed = function(n2) {
  v2 && v2(n2);
  var t3 = n2.__c;
  t3 && t3.__H && (t3.__H.__h.length && (f2.push(t3) !== 1 && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
    n3.u && (n3.__H = n3.u), n3.u = undefined;
  })), u2 = r2 = null;
}, c2.__c = function(n2, t3) {
  t3.some(function(n3) {
    try {
      n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B2(n4);
      });
    } catch (r3) {
      t3.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t3 = [], c2.__e(r3, n3.__v);
    }
  }), l2 && l2(n2, t3);
}, c2.unmount = function(n2) {
  m2 && m2(n2);
  var t3, r3 = n2.__c;
  r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
    try {
      z2(n3);
    } catch (n4) {
      t3 = n4;
    }
  }), r3.__H = undefined, t3 && c2.__e(t3, r3.__v));
};
var k2 = typeof requestAnimationFrame == "function";
function w2(n2) {
  var t3, r3 = function() {
    clearTimeout(u3), k2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u3 = setTimeout(r3, 35);
  k2 && (t3 = requestAnimationFrame(r3));
}
function z2(n2) {
  var t3 = r2, u3 = n2.__c;
  typeof u3 == "function" && (n2.__c = undefined, u3()), r2 = t3;
}
function B2(n2) {
  var t3 = r2;
  n2.__c = n2.__(), r2 = t3;
}
function C2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
    return t4 !== n2[r3];
  });
}
function D2(n2, t3) {
  return typeof t3 == "function" ? t3(n2) : t3;
}

// node_modules/@preact/signals-core/dist/signals-core.module.js
var i3 = Symbol.for("preact-signals");
function t3() {
  if (!(s3 > 1)) {
    var i4, t4 = false;
    while (h3 !== undefined) {
      var r3 = h3;
      h3 = undefined;
      f3++;
      while (r3 !== undefined) {
        var o3 = r3.o;
        r3.o = undefined;
        r3.f &= -3;
        if (!(8 & r3.f) && c3(r3))
          try {
            r3.c();
          } catch (r4) {
            if (!t4) {
              i4 = r4;
              t4 = true;
            }
          }
        r3 = o3;
      }
    }
    f3 = 0;
    s3--;
    if (t4)
      throw i4;
  } else
    s3--;
}
function r3(i4) {
  if (s3 > 0)
    return i4();
  s3++;
  try {
    return i4();
  } finally {
    t3();
  }
}
var o3 = undefined;
function n2(i4) {
  var t4 = o3;
  o3 = undefined;
  try {
    return i4();
  } finally {
    o3 = t4;
  }
}
var h3 = undefined;
var s3 = 0;
var f3 = 0;
var v3 = 0;
function e3(i4) {
  if (o3 !== undefined) {
    var t4 = i4.n;
    if (t4 === undefined || t4.t !== o3) {
      t4 = { i: 0, S: i4, p: o3.s, n: undefined, t: o3, e: undefined, x: undefined, r: t4 };
      if (o3.s !== undefined)
        o3.s.n = t4;
      o3.s = t4;
      i4.n = t4;
      if (32 & o3.f)
        i4.S(t4);
      return t4;
    } else if (t4.i === -1) {
      t4.i = 0;
      if (t4.n !== undefined) {
        t4.n.p = t4.p;
        if (t4.p !== undefined)
          t4.p.n = t4.n;
        t4.p = o3.s;
        t4.n = undefined;
        o3.s.n = t4;
        o3.s = t4;
      }
      return t4;
    }
  }
}
function u3(i4, t4) {
  this.v = i4;
  this.i = 0;
  this.n = undefined;
  this.t = undefined;
  this.W = t4 == null ? undefined : t4.watched;
  this.Z = t4 == null ? undefined : t4.unwatched;
  this.name = t4 == null ? undefined : t4.name;
}
u3.prototype.brand = i3;
u3.prototype.h = function() {
  return true;
};
u3.prototype.S = function(i4) {
  var t4 = this, r4 = this.t;
  if (r4 !== i4 && i4.e === undefined) {
    i4.x = r4;
    this.t = i4;
    if (r4 !== undefined)
      r4.e = i4;
    else
      n2(function() {
        var i5;
        (i5 = t4.W) == null || i5.call(t4);
      });
  }
};
u3.prototype.U = function(i4) {
  var t4 = this;
  if (this.t !== undefined) {
    var { e: r4, x: o4 } = i4;
    if (r4 !== undefined) {
      r4.x = o4;
      i4.e = undefined;
    }
    if (o4 !== undefined) {
      o4.e = r4;
      i4.x = undefined;
    }
    if (i4 === this.t) {
      this.t = o4;
      if (o4 === undefined)
        n2(function() {
          var i5;
          (i5 = t4.Z) == null || i5.call(t4);
        });
    }
  }
};
u3.prototype.subscribe = function(i4) {
  var t4 = this;
  return E2(function() {
    var r4 = t4.value, n3 = o3;
    o3 = undefined;
    try {
      i4(r4);
    } finally {
      o3 = n3;
    }
  }, { name: "sub" });
};
u3.prototype.valueOf = function() {
  return this.value;
};
u3.prototype.toString = function() {
  return this.value + "";
};
u3.prototype.toJSON = function() {
  return this.value;
};
u3.prototype.peek = function() {
  var i4 = o3;
  o3 = undefined;
  try {
    return this.value;
  } finally {
    o3 = i4;
  }
};
Object.defineProperty(u3.prototype, "value", { get: function() {
  var i4 = e3(this);
  if (i4 !== undefined)
    i4.i = this.i;
  return this.v;
}, set: function(i4) {
  if (i4 !== this.v) {
    if (f3 > 100)
      throw new Error("Cycle detected");
    this.v = i4;
    this.i++;
    v3++;
    s3++;
    try {
      for (var r4 = this.t;r4 !== undefined; r4 = r4.x)
        r4.t.N();
    } finally {
      t3();
    }
  }
} });
function d3(i4, t4) {
  return new u3(i4, t4);
}
function c3(i4) {
  for (var t4 = i4.s;t4 !== undefined; t4 = t4.n)
    if (t4.S.i !== t4.i || !t4.S.h() || t4.S.i !== t4.i)
      return true;
  return false;
}
function a3(i4) {
  for (var t4 = i4.s;t4 !== undefined; t4 = t4.n) {
    var r4 = t4.S.n;
    if (r4 !== undefined)
      t4.r = r4;
    t4.S.n = t4;
    t4.i = -1;
    if (t4.n === undefined) {
      i4.s = t4;
      break;
    }
  }
}
function l3(i4) {
  var t4 = i4.s, r4 = undefined;
  while (t4 !== undefined) {
    var o4 = t4.p;
    if (t4.i === -1) {
      t4.S.U(t4);
      if (o4 !== undefined)
        o4.n = t4.n;
      if (t4.n !== undefined)
        t4.n.p = o4;
    } else
      r4 = t4;
    t4.S.n = t4.r;
    if (t4.r !== undefined)
      t4.r = undefined;
    t4 = o4;
  }
  i4.s = r4;
}
function y3(i4, t4) {
  u3.call(this, undefined);
  this.x = i4;
  this.s = undefined;
  this.g = v3 - 1;
  this.f = 4;
  this.W = t4 == null ? undefined : t4.watched;
  this.Z = t4 == null ? undefined : t4.unwatched;
  this.name = t4 == null ? undefined : t4.name;
}
y3.prototype = new u3;
y3.prototype.h = function() {
  this.f &= -3;
  if (1 & this.f)
    return false;
  if ((36 & this.f) == 32)
    return true;
  this.f &= -5;
  if (this.g === v3)
    return true;
  this.g = v3;
  this.f |= 1;
  if (this.i > 0 && !c3(this)) {
    this.f &= -2;
    return true;
  }
  var i4 = o3;
  try {
    a3(this);
    o3 = this;
    var t4 = this.x();
    if (16 & this.f || this.v !== t4 || this.i === 0) {
      this.v = t4;
      this.f &= -17;
      this.i++;
    }
  } catch (i5) {
    this.v = i5;
    this.f |= 16;
    this.i++;
  }
  o3 = i4;
  l3(this);
  this.f &= -2;
  return true;
};
y3.prototype.S = function(i4) {
  if (this.t === undefined) {
    this.f |= 36;
    for (var t4 = this.s;t4 !== undefined; t4 = t4.n)
      t4.S.S(t4);
  }
  u3.prototype.S.call(this, i4);
};
y3.prototype.U = function(i4) {
  if (this.t !== undefined) {
    u3.prototype.U.call(this, i4);
    if (this.t === undefined) {
      this.f &= -33;
      for (var t4 = this.s;t4 !== undefined; t4 = t4.n)
        t4.S.U(t4);
    }
  }
};
y3.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var i4 = this.t;i4 !== undefined; i4 = i4.x)
      i4.t.N();
  }
};
Object.defineProperty(y3.prototype, "value", { get: function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  var i4 = e3(this);
  this.h();
  if (i4 !== undefined)
    i4.i = this.i;
  if (16 & this.f)
    throw this.v;
  return this.v;
} });
function w3(i4, t4) {
  return new y3(i4, t4);
}
function _2(i4) {
  var r4 = i4.u;
  i4.u = undefined;
  if (typeof r4 == "function") {
    s3++;
    var n3 = o3;
    o3 = undefined;
    try {
      r4();
    } catch (t4) {
      i4.f &= -2;
      i4.f |= 8;
      b(i4);
      throw t4;
    } finally {
      o3 = n3;
      t3();
    }
  }
}
function b(i4) {
  for (var t4 = i4.s;t4 !== undefined; t4 = t4.n)
    t4.S.U(t4);
  i4.x = undefined;
  i4.s = undefined;
  _2(i4);
}
function g2(i4) {
  if (o3 !== this)
    throw new Error("Out-of-order effect");
  l3(this);
  o3 = i4;
  this.f &= -2;
  if (8 & this.f)
    b(this);
  t3();
}
function p3(i4, t4) {
  this.x = i4;
  this.u = undefined;
  this.s = undefined;
  this.o = undefined;
  this.f = 32;
  this.name = t4 == null ? undefined : t4.name;
}
p3.prototype.c = function() {
  var i4 = this.S();
  try {
    if (8 & this.f)
      return;
    if (this.x === undefined)
      return;
    var t4 = this.x();
    if (typeof t4 == "function")
      this.u = t4;
  } finally {
    i4();
  }
};
p3.prototype.S = function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  this.f |= 1;
  this.f &= -9;
  _2(this);
  a3(this);
  s3++;
  var i4 = o3;
  o3 = this;
  return g2.bind(this, i4);
};
p3.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 2;
    this.o = h3;
    h3 = this;
  }
};
p3.prototype.d = function() {
  this.f |= 8;
  if (!(1 & this.f))
    b(this);
};
p3.prototype.dispose = function() {
  this.d();
};
function E2(i4, t4) {
  var r4 = new p3(i4, t4);
  try {
    r4.c();
  } catch (i5) {
    r4.d();
    throw i5;
  }
  var o4 = r4.d.bind(r4);
  o4[Symbol.dispose] = o4;
  return o4;
}

// node_modules/@preact/signals/dist/signals.module.js
var h4;
var l4;
var p4;
var m3 = typeof window != "undefined" && !!window.__PREACT_SIGNALS_DEVTOOLS__;
var _3 = [];
E2(function() {
  h4 = this.N;
})();
function g3(i4, t4) {
  l[i4] = t4.bind(null, l[i4] || function() {});
}
function y4(i4) {
  if (p4)
    p4();
  p4 = i4 && i4.S();
}
function b2(i4) {
  var n3 = this, r4 = i4.data, o4 = useSignal(r4);
  o4.value = r4;
  var e4 = T2(function() {
    var i5 = n3, r5 = n3.__v;
    while (r5 = r5.__)
      if (r5.__c) {
        r5.__c.__$f |= 4;
        break;
      }
    var f4 = w3(function() {
      var i6 = o4.value.value;
      return i6 === 0 ? 0 : i6 === true ? "" : i6 || "";
    }), e5 = w3(function() {
      return !Array.isArray(f4.value) && !t(f4.value);
    }), u5 = E2(function() {
      this.N = M2;
      if (e5.value) {
        var n4 = f4.value;
        if (i5.__v && i5.__v.__e && i5.__v.__e.nodeType === 3)
          i5.__v.__e.data = n4;
      }
    }), c5 = n3.__$u.d;
    n3.__$u.d = function() {
      u5();
      c5.call(this);
    };
    return [e5, f4];
  }, []), u4 = e4[0], c4 = e4[1];
  return u4.value ? c4.peek() : c4.value;
}
b2.displayName = "ReactiveTextNode";
Object.defineProperties(u3.prototype, { constructor: { configurable: true, value: undefined }, type: { configurable: true, value: b2 }, props: { configurable: true, get: function() {
  return { data: this };
} }, __b: { configurable: true, value: 1 } });
g3("__b", function(i4, n3) {
  if (m3 && typeof n3.type == "function")
    window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent();
  if (typeof n3.type == "string") {
    var t4, r4 = n3.props;
    for (var f4 in r4)
      if (f4 !== "children") {
        var o4 = r4[f4];
        if (o4 instanceof u3) {
          if (!t4)
            n3.__np = t4 = {};
          t4[f4] = o4;
          r4[f4] = o4.peek();
        }
      }
  }
  i4(n3);
});
g3("__r", function(i4, n3) {
  if (m3 && typeof n3.type == "function")
    window.__PREACT_SIGNALS_DEVTOOLS__.enterComponent(n3);
  if (n3.type !== k) {
    y4();
    var t4, f4 = n3.__c;
    if (f4) {
      f4.__$f &= -2;
      if ((t4 = f4.__$u) === undefined)
        f4.__$u = t4 = function(i5) {
          var n4;
          E2(function() {
            n4 = this;
          });
          n4.c = function() {
            f4.__$f |= 1;
            f4.setState({});
          };
          return n4;
        }();
    }
    l4 = f4;
    y4(t4);
  }
  i4(n3);
});
g3("__e", function(i4, n3, t4, r4) {
  if (m3)
    window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent();
  y4();
  l4 = undefined;
  i4(n3, t4, r4);
});
g3("diffed", function(i4, n3) {
  if (m3 && typeof n3.type == "function")
    window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent();
  y4();
  l4 = undefined;
  var t4;
  if (typeof n3.type == "string" && (t4 = n3.__e)) {
    var { __np: r4, props: f4 } = n3;
    if (r4) {
      var o4 = t4.U;
      if (o4)
        for (var e4 in o4) {
          var u4 = o4[e4];
          if (u4 !== undefined && !(e4 in r4)) {
            u4.d();
            o4[e4] = undefined;
          }
        }
      else {
        o4 = {};
        t4.U = o4;
      }
      for (var a4 in r4) {
        var c4 = o4[a4], v4 = r4[a4];
        if (c4 === undefined) {
          c4 = k3(t4, a4, v4, f4);
          o4[a4] = c4;
        } else
          c4.o(v4, f4);
      }
    }
  }
  i4(n3);
});
function k3(i4, n3, t4, r4) {
  var f4 = n3 in i4 && i4.ownerSVGElement === undefined, o4 = d3(t4);
  return { o: function(i5, n4) {
    o4.value = i5;
    r4 = n4;
  }, d: E2(function() {
    this.N = M2;
    var t5 = o4.value.value;
    if (r4[n3] !== t5) {
      r4[n3] = t5;
      if (f4)
        i4[n3] = t5;
      else if (t5 != null && (t5 !== false || n3[4] === "-"))
        i4.setAttribute(n3, t5);
      else
        i4.removeAttribute(n3);
    }
  }) };
}
g3("unmount", function(i4, n3) {
  if (typeof n3.type == "string") {
    var t4 = n3.__e;
    if (t4) {
      var r4 = t4.U;
      if (r4) {
        t4.U = undefined;
        for (var f4 in r4) {
          var o4 = r4[f4];
          if (o4)
            o4.d();
        }
      }
    }
  } else {
    var e4 = n3.__c;
    if (e4) {
      var u4 = e4.__$u;
      if (u4) {
        e4.__$u = undefined;
        u4.d();
      }
    }
  }
  i4(n3);
});
g3("__h", function(i4, n3, t4, r4) {
  if (r4 < 3 || r4 === 9)
    n3.__$f |= 2;
  i4(n3, t4, r4);
});
x.prototype.shouldComponentUpdate = function(i4, n3) {
  var t4 = this.__$u, r4 = t4 && t4.s !== undefined;
  for (var f4 in n3)
    return true;
  if (this.__f || typeof this.u == "boolean" && this.u === true) {
    var o4 = 2 & this.__$f;
    if (!(r4 || o4 || 4 & this.__$f))
      return true;
    if (1 & this.__$f)
      return true;
  } else {
    if (!(r4 || 4 & this.__$f))
      return true;
    if (3 & this.__$f)
      return true;
  }
  for (var e4 in i4)
    if (e4 !== "__source" && i4[e4] !== this.props[e4])
      return true;
  for (var u4 in this.props)
    if (!(u4 in i4))
      return true;
  return false;
};
function useSignal(i4, n3) {
  return d2(function() {
    return d3(i4, n3);
  })[0];
}
var A3 = function(i4) {
  queueMicrotask(function() {
    queueMicrotask(i4);
  });
};
function F2() {
  r3(function() {
    var i4;
    while (i4 = _3.shift())
      h4.call(i4);
  });
}
function M2() {
  if (_3.push(this) === 1)
    (l.requestAnimationFrame || A3)(F2);
}

// src/logic/calculator.ts
var SOCIAL_COSTS_RATE = 0.3142;
var FULL_VAT_RATE = 0.25;
var DEDUCTIBLE_VAT_FACTOR = 0.5;
var calculateDeduction = (state) => {
  const { inputs, settings } = state;
  const { carPrice, residualValuePercent, marginalTaxPercent, benefitValue, workDrivingKm = 0, inputMode, leaseCostExclVat } = inputs;
  const {
    annualInterestRate,
    monthlyExtraCosts,
    promotionDeduction,
    taxFreeMileageAllowance = 2.5,
    taxedMileageAllowance = 1.2,
    fuelCompensationRate = 1.2
  } = settings;
  let monthlyLeaseCost = 0;
  let leaseExpense = 0;
  let residualValue = 0;
  let principal = 0;
  let monthlyInterestOnRV = 0;
  let monthlyAnnuity = 0;
  if (inputMode === "DIRECT_LEASE") {
    monthlyLeaseCost = leaseCostExclVat * (1 + FULL_VAT_RATE);
    leaseExpense = leaseCostExclVat + leaseCostExclVat * FULL_VAT_RATE * DEDUCTIBLE_VAT_FACTOR;
  } else {
    const monthlyInterestRate = (annualInterestRate || 0) / 100 / 12;
    residualValue = carPrice * (residualValuePercent / 100);
    principal = carPrice - residualValue;
    const n3 = 36;
    monthlyInterestOnRV = residualValue * monthlyInterestRate;
    if (monthlyInterestRate === 0) {
      monthlyAnnuity = principal / n3;
    } else {
      monthlyAnnuity = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, n3) / (Math.pow(1 + monthlyInterestRate, n3) - 1);
    }
    monthlyLeaseCost = monthlyInterestOnRV + monthlyAnnuity;
    const netLease = monthlyLeaseCost / (1 + FULL_VAT_RATE);
    const vatAmount = monthlyLeaseCost - netLease;
    leaseExpense = netLease + vatAmount * DEDUCTIBLE_VAT_FACTOR;
  }
  const totalFuelCompensation = workDrivingKm * fuelCompensationRate;
  const totalCompanyCost = leaseExpense + monthlyExtraCosts + benefitValue * SOCIAL_COSTS_RATE + totalFuelCompensation;
  const workDrivingAllowance = workDrivingKm * taxFreeMileageAllowance + workDrivingKm * taxedMileageAllowance * (1 + SOCIAL_COSTS_RATE);
  const grossSalaryDeduction = (totalCompanyCost - promotionDeduction - workDrivingAllowance) / (1 + SOCIAL_COSTS_RATE);
  const netCostToEmployee = grossSalaryDeduction * (1 - marginalTaxPercent / 100) + benefitValue * marginalTaxPercent / 100;
  const privateCarReferenceCompensation = workDrivingKm * (taxFreeMileageAllowance + taxedMileageAllowance * (1 - marginalTaxPercent / 100));
  return {
    monthlyLeaseCost,
    totalCompanyCost,
    grossSalaryDeduction,
    netCostToEmployee,
    totalFuelCompensation,
    privateCarReferenceCompensation,
    details: {
      leaseExpense,
      residualValue,
      principal,
      monthlyInterestOnRV,
      monthlyAnnuity,
      socialCostsOnBenefit: benefitValue * SOCIAL_COSTS_RATE,
      workDrivingAllowance
    }
  };
};

// src/state/store.ts
var STORAGE_KEY = "company-car-calc-settings";
var SAVES_STORAGE_KEY = "company-car-calc-saves";
var defaultInputs = {
  carPrice: 500000,
  residualValuePercent: 40,
  marginalTaxPercent: 50,
  benefitValue: 5000,
  workDrivingKm: 0,
  inputMode: "FROM_PRICE",
  leaseCostExclVat: 4000
};
var defaultSettings = {
  annualInterestRate: 5,
  monthlyExtraCosts: 1000,
  promotionDeduction: 1000,
  taxFreeMileageAllowance: 2.5,
  taxedMileageAllowance: 1.2,
  fuelCompensationRate: 1.2
};
var savedSettings = localStorage.getItem(STORAGE_KEY);
var initialSettings = savedSettings ? { ...defaultSettings, ...JSON.parse(savedSettings) } : defaultSettings;
var savedCalculationsRaw = localStorage.getItem(SAVES_STORAGE_KEY);
var initialSavedCalculations = savedCalculationsRaw ? JSON.parse(savedCalculationsRaw).map((calc) => ({
  ...calc,
  inputs: { ...defaultInputs, ...calc.inputs }
})) : [];
var inputs = d3({ ...defaultInputs });
var settings = d3(initialSettings);
var savedCalculations = d3(initialSavedCalculations);
E2(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings.value));
});
E2(() => {
  localStorage.setItem(SAVES_STORAGE_KEY, JSON.stringify(savedCalculations.value));
});
var calculationResult = w3(() => {
  const state = {
    inputs: inputs.value,
    settings: settings.value
  };
  return calculateDeduction(state);
});
var updateInput = (key, value) => {
  let validatedValue = value;
  if (key === "residualValuePercent") {
    validatedValue = Math.min(50, Math.max(30, validatedValue));
  } else if (key === "benefitValue") {
    validatedValue = Math.min(1e4, Math.max(0, validatedValue));
  } else if (key === "carPrice") {
    validatedValue = Math.min(1e6, Math.max(300000, validatedValue));
  } else if (key === "marginalTaxPercent") {
    validatedValue = Math.min(55, Math.max(30, validatedValue));
  } else if (key === "workDrivingKm") {
    validatedValue = Math.min(2500, Math.max(0, validatedValue));
  } else if (key === "leaseCostExclVat") {
    validatedValue = Math.min(20000, Math.max(1000, validatedValue));
  }
  inputs.value = { ...inputs.value, [key]: validatedValue };
};
var updateSetting = (key, value) => {
  if (value === "") {
    settings.value = {
      ...settings.value,
      [key]: defaultSettings[key]
    };
    return;
  }
  let val = Number(value);
  if (isNaN(val))
    val = defaultSettings[key];
  settings.value = { ...settings.value, [key]: val };
};
var resetSettings = () => {
  localStorage.removeItem(STORAGE_KEY);
  settings.value = { ...defaultSettings };
};
// node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var f4 = 0;
function u4(e4, t4, n3, o4, i4, u5) {
  t4 || (t4 = {});
  var a4, c4, p5 = t4;
  if ("ref" in p5)
    for (c4 in p5 = {}, t4)
      c4 == "ref" ? a4 = t4[c4] : p5[c4] = t4[c4];
  var l5 = { type: e4, props: p5, key: n3, ref: a4, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: undefined, __v: --f4, __i: -1, __u: 0, __source: i4, __self: u5 };
  if (typeof e4 == "function" && (a4 = e4.defaultProps))
    for (c4 in a4)
      p5[c4] === undefined && (p5[c4] = a4[c4]);
  return l.vnode && l.vnode(l5), l5;
}

// src/components/SaveSplitButton.tsx
var SaveSplitButton = () => {
  const isNaming = useSignal(false);
  const name = useSignal("");
  const isDropdownOpen = useSignal(false);
  const containerRef = A2(null);
  y2(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen.value && containerRef.current && !containerRef.current.contains(event.target)) {
        isDropdownOpen.value = false;
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleSave = (e4) => {
    e4.preventDefault();
    if (!name.value.trim())
      return;
    const newSave = {
      id: Date.now().toString(),
      name: name.value.trim(),
      timestamp: Date.now(),
      inputs: { ...inputs.value }
    };
    savedCalculations.value = [newSave, ...savedCalculations.value];
    name.value = "";
    isNaming.value = false;
  };
  const handleRecall = (calc) => {
    inputs.value = { ...defaultInputs, ...calc.inputs };
    isDropdownOpen.value = false;
  };
  const handleDelete = (id, e4) => {
    e4.stopPropagation();
    savedCalculations.value = savedCalculations.value.filter((c4) => c4.id !== id);
  };
  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
  };
  if (isNaming.value) {
    return /* @__PURE__ */ u4("form", {
      onSubmit: handleSave,
      className: "d-flex gap-2 align-items-center",
      children: [
        /* @__PURE__ */ u4("input", {
          type: "text",
          className: "form-control form-control-sm",
          placeholder: "Calculation name...",
          value: name.value,
          onInput: (e4) => name.value = e4.currentTarget.value,
          autoFocus: true
        }, undefined, false, undefined, this),
        /* @__PURE__ */ u4("button", {
          type: "submit",
          className: "btn btn-primary btn-sm",
          children: "Save"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ u4("button", {
          type: "button",
          className: "btn btn-outline-secondary btn-sm",
          onClick: () => isNaming.value = false,
          children: "Cancel"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  return /* @__PURE__ */ u4("div", {
    className: "btn-group",
    ref: containerRef,
    children: [
      /* @__PURE__ */ u4("button", {
        type: "button",
        className: "btn btn-outline-primary",
        onClick: () => isNaming.value = true,
        children: [
          /* @__PURE__ */ u4("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-save me-2",
            viewBox: "0 0 16 16",
            children: /* @__PURE__ */ u4("path", {
              d: "M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l.646-.647a.5.5 0 0 1 .708.708l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708l.646.647V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          "Save"
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ u4("button", {
        type: "button",
        className: `btn btn-outline-primary dropdown-toggle dropdown-toggle-split ${isDropdownOpen.value ? "show" : ""}`,
        onClick: toggleDropdown,
        "aria-expanded": isDropdownOpen.value,
        children: /* @__PURE__ */ u4("span", {
          className: "visually-hidden",
          children: "Toggle Dropdown"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ u4("ul", {
        className: `dropdown-menu dropdown-menu-end shadow-sm ${isDropdownOpen.value ? "show" : ""}`,
        style: { minWidth: "250px", maxHeight: "300px", overflowY: "auto" },
        children: [
          /* @__PURE__ */ u4("h6", {
            className: "dropdown-header",
            children: "Saved Calculations"
          }, undefined, false, undefined, this),
          savedCalculations.value.length === 0 ? /* @__PURE__ */ u4("li", {
            children: /* @__PURE__ */ u4("span", {
              className: "dropdown-item-text text-muted small",
              children: "No saved items"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this) : savedCalculations.value.map((calc) => /* @__PURE__ */ u4("li", {
            className: "saved-calc-item position-relative",
            children: [
              /* @__PURE__ */ u4("button", {
                className: "dropdown-item d-flex justify-content-between align-items-center pe-5",
                type: "button",
                onClick: () => handleRecall(calc),
                children: /* @__PURE__ */ u4("div", {
                  className: "text-truncate",
                  children: [
                    /* @__PURE__ */ u4("div", {
                      className: "fw-bold small",
                      children: calc.name
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ u4("div", {
                      className: "xsmall text-muted",
                      style: { fontSize: "0.7rem" },
                      children: new Date(calc.timestamp).toLocaleDateString()
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ u4("button", {
                className: "btn btn-link text-danger position-absolute end-0 top-50 translate-middle-y me-2 p-1 delete-btn",
                onClick: (e4) => handleDelete(calc.id, e4),
                title: "Delete",
                children: /* @__PURE__ */ u4("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "14",
                  height: "14",
                  fill: "currentColor",
                  viewBox: "0 0 16 16",
                  children: [
                    /* @__PURE__ */ u4("path", {
                      d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ u4("path", {
                      d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this)
            ]
          }, calc.id, true, undefined, this))
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
};

// src/components/CalculationPage.tsx
var CalculationPage = () => {
  const showDetails = useSignal(false);
  return /* @__PURE__ */ u4("div", {
    className: "row",
    children: [
      /* @__PURE__ */ u4("div", {
        className: "col-md-6",
        children: /* @__PURE__ */ u4("div", {
          className: "card p-4 mb-4",
          children: [
            /* @__PURE__ */ u4("div", {
              className: "d-flex justify-content-between align-items-center mb-4",
              children: [
                /* @__PURE__ */ u4("h3", {
                  className: "mb-0",
                  children: "Car Details"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ u4(SaveSplitButton, {}, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ u4("div", {
              className: "btn-group w-100 mb-4",
              role: "group",
              children: [
                /* @__PURE__ */ u4("button", {
                  type: "button",
                  className: `btn ${inputs.value.inputMode === "FROM_PRICE" ? "btn-primary" : "btn-outline-primary"}`,
                  onClick: () => updateInput("inputMode", "FROM_PRICE"),
                  children: "Calculate from Price"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ u4("button", {
                  type: "button",
                  className: `btn ${inputs.value.inputMode === "DIRECT_LEASE" ? "btn-primary" : "btn-outline-primary"}`,
                  onClick: () => updateInput("inputMode", "DIRECT_LEASE"),
                  children: "Direct Lease Cost"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            inputs.value.inputMode === "FROM_PRICE" ? /* @__PURE__ */ u4(k, {
              children: [
                /* @__PURE__ */ u4("div", {
                  className: "mb-3",
                  children: [
                    /* @__PURE__ */ u4("label", {
                      className: "form-label",
                      children: [
                        "Car Price: ",
                        /* @__PURE__ */ u4("strong", {
                          children: [
                            inputs.value.carPrice.toLocaleString(),
                            " kr"
                          ]
                        }, undefined, true, undefined, this)
                      ]
                    }, undefined, true, undefined, this),
                    /* @__PURE__ */ u4("input", {
                      type: "range",
                      className: "form-range",
                      min: "300000",
                      max: "1000000",
                      step: "10000",
                      value: inputs.value.carPrice,
                      onInput: (e4) => updateInput("carPrice", Number(e4.currentTarget.value))
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ u4("div", {
                  className: "mb-3",
                  children: [
                    /* @__PURE__ */ u4("label", {
                      className: "form-label",
                      children: [
                        "Planned Residue after 3 years: ",
                        /* @__PURE__ */ u4("strong", {
                          children: [
                            inputs.value.residualValuePercent,
                            "%"
                          ]
                        }, undefined, true, undefined, this)
                      ]
                    }, undefined, true, undefined, this),
                    /* @__PURE__ */ u4("input", {
                      type: "range",
                      className: "form-range",
                      min: "30",
                      max: "50",
                      step: "5",
                      value: inputs.value.residualValuePercent,
                      onInput: (e4) => updateInput("residualValuePercent", Number(e4.currentTarget.value))
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this) : /* @__PURE__ */ u4("div", {
              className: "mb-3",
              children: [
                /* @__PURE__ */ u4("label", {
                  className: "form-label",
                  children: [
                    "Monthly Lease Cost (excl VAT): ",
                    /* @__PURE__ */ u4("strong", {
                      children: [
                        inputs.value.leaseCostExclVat.toLocaleString(),
                        " kr"
                      ]
                    }, undefined, true, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ u4("input", {
                  type: "range",
                  className: "form-range",
                  min: "1000",
                  max: "20000",
                  step: "100",
                  value: inputs.value.leaseCostExclVat,
                  onInput: (e4) => updateInput("leaseCostExclVat", Number(e4.currentTarget.value))
                }, undefined, false, undefined, this),
                /* @__PURE__ */ u4("div", {
                  className: "form-text",
                  children: "Enter the monthly cost from your dealer quote, excluding VAT."
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ u4("div", {
              className: "mb-3",
              children: [
                /* @__PURE__ */ u4("label", {
                  className: "form-label",
                  children: [
                    "Car Benefit Value: ",
                    /* @__PURE__ */ u4("strong", {
                      children: [
                        inputs.value.benefitValue.toLocaleString(),
                        " kr/month"
                      ]
                    }, undefined, true, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ u4("input", {
                  type: "range",
                  className: "form-range",
                  min: "0",
                  max: "10000",
                  step: "50",
                  value: inputs.value.benefitValue,
                  onInput: (e4) => updateInput("benefitValue", Number(e4.currentTarget.value))
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ u4("div", {
              className: "mb-3",
              children: [
                /* @__PURE__ */ u4("label", {
                  className: "form-label",
                  children: [
                    "Work Driving: ",
                    /* @__PURE__ */ u4("strong", {
                      children: [
                        (inputs.value.workDrivingKm ?? 0).toLocaleString(),
                        " km"
                      ]
                    }, undefined, true, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ u4("input", {
                  type: "range",
                  className: "form-range",
                  min: "0",
                  max: "2500",
                  step: "50",
                  value: inputs.value.workDrivingKm ?? 0,
                  onInput: (e4) => updateInput("workDrivingKm", Number(e4.currentTarget.value))
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ u4("div", {
              className: "mb-3",
              children: [
                /* @__PURE__ */ u4("label", {
                  className: "form-label",
                  children: [
                    "Marginal Tax: ",
                    /* @__PURE__ */ u4("strong", {
                      children: [
                        inputs.value.marginalTaxPercent,
                        "%"
                      ]
                    }, undefined, true, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ u4("input", {
                  type: "range",
                  className: "form-range",
                  min: "30",
                  max: "55",
                  step: "5",
                  value: inputs.value.marginalTaxPercent,
                  onInput: (e4) => updateInput("marginalTaxPercent", Number(e4.currentTarget.value))
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ u4("div", {
        className: "col-md-6",
        children: [
          /* @__PURE__ */ u4("div", {
            className: "card p-4 bg-light",
            children: [
              /* @__PURE__ */ u4("h3", {
                className: "mb-4",
                children: "Results"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ u4("div", {
                className: "mb-3 d-flex justify-content-between",
                children: [
                  /* @__PURE__ */ u4("span", {
                    children: "Monthly Lease Cost (inc VAT):"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ u4("span", {
                    className: "fw-bold",
                    children: [
                      Math.round(calculationResult.value.monthlyLeaseCost),
                      " kr"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ u4("div", {
                className: "mb-3 d-flex justify-content-between text-muted",
                children: [
                  /* @__PURE__ */ u4("span", {
                    children: "Total Company Cost:"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ u4("span", {
                    children: [
                      Math.round(calculationResult.value.totalCompanyCost),
                      " kr"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ u4("hr", {}, undefined, false, undefined, this),
              /* @__PURE__ */ u4("div", {
                className: "mb-3 d-flex justify-content-between text-primary h4",
                children: [
                  /* @__PURE__ */ u4("span", {
                    children: "Gross Salary Deduction:"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ u4("span", {
                    className: "fw-bold",
                    children: [
                      Math.round(calculationResult.value.grossSalaryDeduction),
                      " kr"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ u4("div", {
                className: "mb-3 d-flex justify-content-between text-success h4 border-top pt-3",
                children: [
                  /* @__PURE__ */ u4("span", {
                    children: "Net Cost to Employee:"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ u4("span", {
                    className: "fw-bold",
                    children: [
                      Math.round(calculationResult.value.netCostToEmployee),
                      " kr"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ u4("div", {
                className: "border-top pt-3 mt-3",
                children: /* @__PURE__ */ u4("div", {
                  className: "d-flex justify-content-between text-info h5",
                  children: [
                    /* @__PURE__ */ u4("span", {
                      children: "Fuel Compensation (Tax-free):"
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ u4("span", {
                      className: "fw-bold",
                      children: [
                        Math.round(calculationResult.value.totalFuelCompensation),
                        " kr"
                      ]
                    }, undefined, true, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ u4("div", {
                className: "alert alert-secondary mt-3 small",
                children: [
                  /* @__PURE__ */ u4("div", {
                    className: "d-flex justify-content-between",
                    children: [
                      /* @__PURE__ */ u4("span", {
                        children: "Post-tax Deduction:"
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ u4("span", {
                        children: [
                          Math.round(calculationResult.value.grossSalaryDeduction * (1 - inputs.value.marginalTaxPercent / 100)),
                          " kr"
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ u4("div", {
                    className: "d-flex justify-content-between",
                    children: [
                      /* @__PURE__ */ u4("span", {
                        children: "Tax on Benefit:"
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ u4("span", {
                        children: [
                          Math.round(inputs.value.benefitValue * inputs.value.marginalTaxPercent / 100),
                          " kr"
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ u4("div", {
                className: "border-top mt-3 pt-2",
                children: [
                  /* @__PURE__ */ u4("button", {
                    type: "button",
                    className: "btn btn-link btn-sm px-0 text-muted",
                    onClick: () => showDetails.value = !showDetails.value,
                    "aria-expanded": showDetails.value,
                    children: [
                      showDetails.value ? "Hide" : "Show",
                      " calculation details ",
                      /* @__PURE__ */ u4("span", {
                        children: showDetails.value ? "▲" : "▼"
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this),
                  showDetails.value && /* @__PURE__ */ u4("div", {
                    className: "mt-2 small text-muted",
                    children: [
                      /* @__PURE__ */ u4("div", {
                        className: "mb-3",
                        children: [
                          /* @__PURE__ */ u4("div", {
                            className: "fw-semibold mb-1 text-body",
                            children: "Company cost breakdown"
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ u4("div", {
                            className: "d-flex justify-content-between",
                            children: [
                              /* @__PURE__ */ u4("span", {
                                children: "Lease expense (net + ½ VAT):"
                              }, undefined, false, undefined, this),
                              /* @__PURE__ */ u4("span", {
                                children: [
                                  Math.round(calculationResult.value.details.leaseExpense).toLocaleString(),
                                  " kr"
                                ]
                              }, undefined, true, undefined, this)
                            ]
                          }, undefined, true, undefined, this),
                          inputs.value.inputMode === "FROM_PRICE" && /* @__PURE__ */ u4("div", {
                            className: "ms-3 border-start ps-2 my-1",
                            children: [
                              /* @__PURE__ */ u4("div", {
                                className: "d-flex justify-content-between",
                                children: [
                                  /* @__PURE__ */ u4("span", {
                                    children: [
                                      "Residual value (",
                                      inputs.value.residualValuePercent,
                                      "%):"
                                    ]
                                  }, undefined, true, undefined, this),
                                  /* @__PURE__ */ u4("span", {
                                    children: [
                                      Math.round(calculationResult.value.details.residualValue).toLocaleString(),
                                      " kr"
                                    ]
                                  }, undefined, true, undefined, this)
                                ]
                              }, undefined, true, undefined, this),
                              /* @__PURE__ */ u4("div", {
                                className: "d-flex justify-content-between",
                                children: [
                                  /* @__PURE__ */ u4("span", {
                                    children: "Principal (price − residual):"
                                  }, undefined, false, undefined, this),
                                  /* @__PURE__ */ u4("span", {
                                    children: [
                                      Math.round(calculationResult.value.details.principal).toLocaleString(),
                                      " kr"
                                    ]
                                  }, undefined, true, undefined, this)
                                ]
                              }, undefined, true, undefined, this),
                              /* @__PURE__ */ u4("div", {
                                className: "d-flex justify-content-between",
                                children: [
                                  /* @__PURE__ */ u4("span", {
                                    children: "Interest on residual (monthly):"
                                  }, undefined, false, undefined, this),
                                  /* @__PURE__ */ u4("span", {
                                    children: [
                                      Math.round(calculationResult.value.details.monthlyInterestOnRV).toLocaleString(),
                                      " kr"
                                    ]
                                  }, undefined, true, undefined, this)
                                ]
                              }, undefined, true, undefined, this),
                              /* @__PURE__ */ u4("div", {
                                className: "d-flex justify-content-between",
                                children: [
                                  /* @__PURE__ */ u4("span", {
                                    children: "Annuity on principal (monthly):"
                                  }, undefined, false, undefined, this),
                                  /* @__PURE__ */ u4("span", {
                                    children: [
                                      Math.round(calculationResult.value.details.monthlyAnnuity).toLocaleString(),
                                      " kr"
                                    ]
                                  }, undefined, true, undefined, this)
                                ]
                              }, undefined, true, undefined, this)
                            ]
                          }, undefined, true, undefined, this),
                          /* @__PURE__ */ u4("div", {
                            className: "d-flex justify-content-between",
                            children: [
                              /* @__PURE__ */ u4("span", {
                                children: "Extra costs:"
                              }, undefined, false, undefined, this),
                              /* @__PURE__ */ u4("span", {
                                children: [
                                  Math.round(settings.value.monthlyExtraCosts).toLocaleString(),
                                  " kr"
                                ]
                              }, undefined, true, undefined, this)
                            ]
                          }, undefined, true, undefined, this),
                          /* @__PURE__ */ u4("div", {
                            className: "d-flex justify-content-between",
                            children: [
                              /* @__PURE__ */ u4("span", {
                                children: [
                                  "Social costs on benefit (",
                                  (SOCIAL_COSTS_RATE * 100).toFixed(2),
                                  "%):"
                                ]
                              }, undefined, true, undefined, this),
                              /* @__PURE__ */ u4("span", {
                                children: [
                                  Math.round(calculationResult.value.details.socialCostsOnBenefit).toLocaleString(),
                                  " kr"
                                ]
                              }, undefined, true, undefined, this)
                            ]
                          }, undefined, true, undefined, this),
                          /* @__PURE__ */ u4("div", {
                            className: "d-flex justify-content-between",
                            children: [
                              /* @__PURE__ */ u4("span", {
                                children: "Fuel compensation:"
                              }, undefined, false, undefined, this),
                              /* @__PURE__ */ u4("span", {
                                children: [
                                  Math.round(calculationResult.value.totalFuelCompensation).toLocaleString(),
                                  " kr"
                                ]
                              }, undefined, true, undefined, this)
                            ]
                          }, undefined, true, undefined, this),
                          /* @__PURE__ */ u4("div", {
                            className: "d-flex justify-content-between fw-semibold text-body border-top mt-1 pt-1",
                            children: [
                              /* @__PURE__ */ u4("span", {
                                children: "= Total company cost:"
                              }, undefined, false, undefined, this),
                              /* @__PURE__ */ u4("span", {
                                children: [
                                  Math.round(calculationResult.value.totalCompanyCost).toLocaleString(),
                                  " kr"
                                ]
                              }, undefined, true, undefined, this)
                            ]
                          }, undefined, true, undefined, this)
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ u4("div", {
                        children: [
                          /* @__PURE__ */ u4("div", {
                            className: "fw-semibold mb-1 text-body",
                            children: "Deduction calculation"
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ u4("div", {
                            className: "d-flex justify-content-between",
                            children: [
                              /* @__PURE__ */ u4("span", {
                                children: "Total company cost:"
                              }, undefined, false, undefined, this),
                              /* @__PURE__ */ u4("span", {
                                children: [
                                  Math.round(calculationResult.value.totalCompanyCost).toLocaleString(),
                                  " kr"
                                ]
                              }, undefined, true, undefined, this)
                            ]
                          }, undefined, true, undefined, this),
                          settings.value.promotionDeduction !== 0 && /* @__PURE__ */ u4("div", {
                            className: "d-flex justify-content-between",
                            children: [
                              /* @__PURE__ */ u4("span", {
                                children: "− Promotion deduction:"
                              }, undefined, false, undefined, this),
                              /* @__PURE__ */ u4("span", {
                                children: [
                                  Math.round(settings.value.promotionDeduction).toLocaleString(),
                                  " kr"
                                ]
                              }, undefined, true, undefined, this)
                            ]
                          }, undefined, true, undefined, this),
                          inputs.value.workDrivingKm > 0 && /* @__PURE__ */ u4("div", {
                            className: "d-flex justify-content-between",
                            children: [
                              /* @__PURE__ */ u4("span", {
                                children: [
                                  "− Work driving allowance (",
                                  inputs.value.workDrivingKm,
                                  " km):"
                                ]
                              }, undefined, true, undefined, this),
                              /* @__PURE__ */ u4("span", {
                                children: [
                                  Math.round(calculationResult.value.details.workDrivingAllowance).toLocaleString(),
                                  " kr"
                                ]
                              }, undefined, true, undefined, this)
                            ]
                          }, undefined, true, undefined, this),
                          /* @__PURE__ */ u4("div", {
                            className: "d-flex justify-content-between",
                            children: [
                              /* @__PURE__ */ u4("span", {
                                children: [
                                  "÷ (1 + ",
                                  (SOCIAL_COSTS_RATE * 100).toFixed(2),
                                  "% social costs on deduction):"
                                ]
                              }, undefined, true, undefined, this),
                              /* @__PURE__ */ u4("span", {
                                children: (1 + SOCIAL_COSTS_RATE).toFixed(4)
                              }, undefined, false, undefined, this)
                            ]
                          }, undefined, true, undefined, this),
                          /* @__PURE__ */ u4("div", {
                            className: "d-flex justify-content-between fw-semibold text-body border-top mt-1 pt-1",
                            children: [
                              /* @__PURE__ */ u4("span", {
                                children: "= Gross salary deduction:"
                              }, undefined, false, undefined, this),
                              /* @__PURE__ */ u4("span", {
                                children: [
                                  Math.round(calculationResult.value.grossSalaryDeduction).toLocaleString(),
                                  " kr"
                                ]
                              }, undefined, true, undefined, this)
                            ]
                          }, undefined, true, undefined, this)
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ u4("div", {
            className: "alert alert-info mt-4",
            children: [
              /* @__PURE__ */ u4("h5", {
                className: "alert-heading h6 fw-bold",
                children: "Private Car Comparison (Reference)"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ u4("div", {
                className: "d-flex justify-content-between",
                children: [
                  /* @__PURE__ */ u4("span", {
                    children: "Theoretical Mileage Compensation:"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ u4("span", {
                    className: "fw-bold",
                    children: [
                      Math.round(calculationResult.value.privateCarReferenceCompensation).toLocaleString(),
                      " kr"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ u4("hr", {
                className: "my-2"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ u4("p", {
                className: "mb-0 xsmall text-muted",
                style: { fontSize: "0.75rem" },
                children: "Reference value showing what your tax-free reimbursement would be if driving a private car for the same work mileage."
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
};

// src/components/SettingsPage.tsx
var SettingsPage = () => {
  const data = settings.value;
  return /* @__PURE__ */ u4("div", {
    className: "card p-4 mx-auto",
    style: { maxWidth: "600px" },
    children: [
      /* @__PURE__ */ u4("div", {
        className: "d-flex justify-content-between align-items-center mb-4",
        children: [
          /* @__PURE__ */ u4("h3", {
            className: "mb-0",
            children: "Global Settings"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ u4("button", {
            className: "btn btn-outline-danger btn-sm",
            onClick: resetSettings,
            children: "Reset to Defaults"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ u4("div", {
        className: "mb-3",
        children: [
          /* @__PURE__ */ u4("label", {
            className: "form-label",
            children: "Annual Interest Rate (%)"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ u4("input", {
            type: "number",
            step: "any",
            className: "form-control",
            placeholder: "5.0",
            value: data.annualInterestRate,
            onInput: (e4) => updateSetting("annualInterestRate", e4.currentTarget.value)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ u4("div", {
        className: "mb-3",
        children: [
          /* @__PURE__ */ u4("label", {
            className: "form-label",
            children: "Monthly Extra Costs (kr)"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ u4("input", {
            type: "number",
            step: "any",
            className: "form-control",
            placeholder: "1000",
            value: data.monthlyExtraCosts,
            onInput: (e4) => updateSetting("monthlyExtraCosts", e4.currentTarget.value)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ u4("div", {
            className: "form-text",
            children: "e.g. insurance, service agreements"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ u4("div", {
        className: "mb-3",
        children: [
          /* @__PURE__ */ u4("label", {
            className: "form-label",
            children: "Promotion Deduction (kr)"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ u4("input", {
            type: "number",
            step: "any",
            className: "form-control",
            placeholder: "1000",
            value: data.promotionDeduction,
            onInput: (e4) => updateSetting("promotionDeduction", e4.currentTarget.value)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ u4("hr", {
        className: "my-4"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ u4("h4", {
        className: "mb-3",
        children: "Mileage Allowances"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ u4("div", {
        className: "mb-3",
        children: [
          /* @__PURE__ */ u4("label", {
            className: "form-label",
            children: "Tax-free mileage allowance (kr/km)"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ u4("input", {
            type: "number",
            step: "any",
            className: "form-control",
            placeholder: "2.5",
            value: data.taxFreeMileageAllowance,
            onInput: (e4) => updateSetting("taxFreeMileageAllowance", e4.currentTarget.value)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ u4("div", {
        className: "mb-3",
        children: [
          /* @__PURE__ */ u4("label", {
            className: "form-label",
            children: "Taxed mileage allowance (kr/km)"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ u4("input", {
            type: "number",
            step: "any",
            className: "form-control",
            placeholder: "1.2",
            value: data.taxedMileageAllowance,
            onInput: (e4) => updateSetting("taxedMileageAllowance", e4.currentTarget.value)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ u4("div", {
        className: "mb-3",
        children: [
          /* @__PURE__ */ u4("label", {
            className: "form-label",
            children: "Tax-exempt fuel compensation rate (kr/km)"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ u4("input", {
            type: "number",
            step: "any",
            className: "form-control",
            placeholder: "1.2",
            value: data.fuelCompensationRate,
            onInput: (e4) => updateSetting("fuelCompensationRate", e4.currentTarget.value)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ u4("div", {
        className: "alert alert-info mt-4",
        children: "Settings are automatically saved in your browser's local storage."
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};

// src/components/App.tsx
var App = () => {
  const page = useSignal("calculation");
  return /* @__PURE__ */ u4("div", {
    children: [
      /* @__PURE__ */ u4("nav", {
        className: "navbar navbar-expand navbar-dark bg-primary mb-4",
        children: /* @__PURE__ */ u4("div", {
          className: "container",
          children: [
            /* @__PURE__ */ u4("span", {
              className: "navbar-brand",
              children: "Car Calculator"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ u4("div", {
              className: "navbar-nav",
              children: [
                /* @__PURE__ */ u4("button", {
                  className: `nav-link btn btn-link ${page.value === "calculation" ? "active" : ""}`,
                  onClick: () => page.value = "calculation",
                  children: "Calculation"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ u4("button", {
                  className: `nav-link btn btn-link ${page.value === "settings" ? "active" : ""}`,
                  onClick: () => page.value = "settings",
                  children: "Settings"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ u4("div", {
        className: "container",
        children: page.value === "calculation" ? /* @__PURE__ */ u4(CalculationPage, {}, undefined, false, undefined, this) : /* @__PURE__ */ u4(SettingsPage, {}, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};

// src/index.tsx
var root = document.getElementById("app");
if (root) {
  G(/* @__PURE__ */ u4(App, {}, undefined, false, undefined, this), root);
}
