 !function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                n.d(r, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 94)
}([function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return i
    }
    )),
    n.d(t, "a", (function() {
        return o
    }
    )),
    n.d(t, "d", (function() {
        return a
    }
    )),
    n.d(t, "f", (function() {
        return s
    }
    )),
    n.d(t, "c", (function() {
        return c
    }
    )),
    n.d(t, "e", (function() {
        return u
    }
    ));
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    var r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    };
    function i(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var o = function() {
        return (o = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }
        ).apply(this, arguments)
    };
    function a(e, t) {
        var n = {};
        for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
        }
        return n
    }
    function s(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , n = t && e[t]
          , r = 0;
        if (n)
            return n.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }
    function c(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, i, o = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
                a.push(r.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i)
                    throw i.error
            }
        }
        return a
    }
    function u() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(c(arguments[t]));
        return e
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "l", (function() {
        return _
    }
    )),
    n.d(t, "f", (function() {
        return O
    }
    )),
    n.d(t, "c", (function() {
        return E
    }
    )),
    n.d(t, "j", (function() {
        return S
    }
    )),
    n.d(t, "k", (function() {
        return j
    }
    )),
    n.d(t, "i", (function() {
        return x
    }
    )),
    n.d(t, "g", (function() {
        return k
    }
    )),
    n.d(t, "h", (function() {
        return C
    }
    )),
    n.d(t, "b", (function() {
        return T
    }
    )),
    n.d(t, "d", (function() {
        return R
    }
    )),
    n.d(t, "n", (function() {
        return I
    }
    )),
    n.d(t, "e", (function() {
        return A
    }
    )),
    n.d(t, "a", (function() {
        return L
    }
    )),
    n.d(t, "m", (function() {
        return N
    }
    )),
    n.d(t, "p", (function() {
        return B
    }
    )),
    n.d(t, "o", (function() {
        return F
    }
    ));
    class r {
        constructor() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "keyval-store"
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "keyval";
            this.storeName = t,
            this._dbp = new Promise((n,r)=>{
                var i = indexedDB.open(e, 1);
                i.onerror = ()=>r(i.error),
                i.onsuccess = ()=>n(i.result),
                i.onupgradeneeded = ()=>{
                    i.result.createObjectStore(t)
                }
            }
            )
        }
        _withIDBStore(e, t) {
            return this._dbp.then(n=>new Promise((r,i)=>{
                var o = n.transaction(this.storeName, e);
                o.oncomplete = ()=>r(),
                o.onabort = o.onerror = ()=>i(o.error),
                t(o.objectStore(this.storeName))
            }
            ))
        }
    }
    var i;
    function o() {
        return i || (i = new r),
        i
    }
    function a(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o();
        return n._withIDBStore("readonly", n=>{
            t = n.get(e)
        }
        ).then(()=>t.result)
    }
    function s(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o();
        return n._withIDBStore("readwrite", n=>{
            n.put(t, e)
        }
        )
    }
    var c = n(96)
      , u = n(6)
      , f = n(2)
      , l = n(3)
      , h = n(25);
    function p(e, t, n, r, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i)
    }
    function d(e) {
        return function() {
            var t = this
              , n = arguments;
            return new Promise((function(r, i) {
                var o = e.apply(t, n);
                function a(e) {
                    p(o, r, i, a, s, "next", e)
                }
                function s(e) {
                    p(o, r, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    var {CDN_CONFIG: v, WIDGET_CONFIG: y, STORED_FIDS: g} = l.g
      , m = new Map
      , b = new Set
      , _ = new Map
      , w = new r(l.d,l.e)
      , O = ()=>_.get("propertyId")
      , E = ()=>_.get(v)
      , S = e=>e === u.a.STORAGE_ORIGIN
      , j = e=>e === u.a.WEBSEED_ORIGIN
      , x = ()=>!0 === _.get("seeder")
      , k = e=>(_.get("ingestibleFileTypes") || new Set).has(e);
    function C(e) {
        return e.split("/").filter(e=>e).length >= 2
    }
    var T = [403, 404];
    function R(e) {
        return P.apply(this, arguments)
    }
    function P() {
        return (P = d((function*(e) {
            var {clientId: t} = e;
            if (!t)
                return null;
            var n = yield self.clients.get(t);
            return n || null
        }
        ))).apply(this, arguments)
    }
    Object(c.a)(function() {
        var e = d((function*(e) {
            var t = yield R(e);
            t && t.postMessage({
                arcEvent: y
            })
        }
        ));
        return function(t) {
            return e.apply(this, arguments)
        }
    }(), 1e3, {
        leading: !0
    });
    var I = Object(c.a)(function() {
        var e = d((function*(e) {
            var t = yield R(e);
            t && t.postMessage({
                arcEvent: g
            })
        }
        ));
        return function(t) {
            return e.apply(this, arguments)
        }
    }(), 1e3);
    function A(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {origin: r, pathname: i, href: o} = e;
        if (S(r))
            t = i;
        else {
            var {bucket: a, key: s} = Object(f.c)(o, n);
            if (!Object(f.i)(s))
                return null;
            t = a && s ? "/".concat(a, "/").concat(s) : null
        }
        return t
    }
    function L(e) {
        if (!m.has(e))
            return !0;
        var t = m.get(e);
        return !t || b.has(t)
    }
    function N(e, t, n) {
        return D.apply(this, arguments)
    }
    function D() {
        return (D = d((function*(e, t, n) {
            m.set(e, t),
            n && b.add(t);
            var r = (yield a("clientTabIds", w)) || new Map;
            if (r.set(e, t),
            m = r,
            yield s("clientTabIds", r, w),
            n) {
                var i = (yield a("tabsPredatingSw", w)) || new Set;
                i.add(t),
                b = i,
                yield s("tabsPredatingSw", i, w)
            }
        }
        ))).apply(this, arguments)
    }
    function B(e) {
        return M.apply(this, arguments)
    }
    function M() {
        return (M = d((function*(e) {
            m.delete(e);
            var t = (yield a("clientTabIds", w)) || new Map;
            t.delete(e),
            m = t,
            yield s("clientTabIds", t, w)
        }
        ))).apply(this, arguments)
    }
    function F() {
        return U.apply(this, arguments)
    }
    function U() {
        return (U = d((function*() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            yield Promise.all([K(), q(e).then(e=>W(e)), z(t)])
        }
        ))).apply(this, arguments)
    }
    function q(e) {
        return H.apply(this, arguments)
    }
    function H() {
        return (H = d((function*(e) {
            var t = e || (yield a("propertyId", w));
            return _.set("propertyId", t),
            t
        }
        ))).apply(this, arguments)
    }
    function W(e) {
        return G.apply(this, arguments)
    }
    function G() {
        return (G = d((function*(e) {
            var t = yield a(v, w);
            _.set(v, t),
            h.a.getCdnConfig(e).then(e=>(_.set(v, e),
            s(v, e, w))).catch(()=>{}
            )
        }
        ))).apply(this, arguments)
    }
    function z(e) {
        return Y.apply(this, arguments)
    }
    function Y() {
        return (Y = d((function*(e) {
            var t = null === e ? yield a("seeder", w) : e;
            _.set("seeder", t);
            var n = Object.values(l.a).flat();
            !1 === t && (n = n.concat(l.c)),
            _.set("ingestibleFileTypes", new Set(n))
        }
        ))).apply(this, arguments)
    }
    function K() {
        return J.apply(this, arguments)
    }
    function J() {
        return (J = d((function*() {
            var [e=new Map,t=new Set,n] = yield Promise.all([a("clientTabIds", w), a("tabsPredatingSw", w), clients.matchAll({
                includeUncontrolled: !0,
                type: "window"
            })])
              , r = new Map;
            n.forEach(t=>{
                e.has(t.id) && r.set(t.id, e.get(t.id))
            }
            );
            var i = new Set(r.values())
              , o = new Set([...t].filter(e=>i.has(e)));
            m = r,
            b = o,
            yield Promise.all([s("tabsPredatingSw", o, w), s("clientTabIds", r, w)])
        }
        ))).apply(this, arguments)
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "h", (function() {
        return r
    }
    )),
    n.d(t, "k", (function() {
        return i
    }
    )),
    n.d(t, "j", (function() {
        return o
    }
    )),
    n.d(t, "a", (function() {
        return a
    }
    )),
    n.d(t, "d", (function() {
        return s
    }
    )),
    n.d(t, "f", (function() {
        return c
    }
    )),
    n.d(t, "b", (function() {
        return u
    }
    )),
    n.d(t, "c", (function() {
        return f
    }
    )),
    n.d(t, "e", (function() {
        return l
    }
    )),
    n.d(t, "i", (function() {
        return h
    }
    )),
    n.d(t, "g", (function() {
        return p
    }
    ));
    console.log;
    var r = e=>parseInt(e) === e;
    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        return new Promise(n=>setTimeout(()=>n(t), e))
    }
    function o(e, t, n) {
        var r, i = new Promise((e,i)=>{
            r = setTimeout(()=>{
                var e = new Error("Promise timed out");
                i(n || e)
            }
            , t)
        }
        );
        return Promise.race([e, i]).finally(()=>clearTimeout(r))
    }
    class a {
        constructor() {
            this.promise = new Promise((e,t)=>{
                this.reject = t,
                this.resolve = e
            }
            )
        }
    }
    function s(e) {
        var {name: t, message: n, stack: r} = e;
        return {
            name: t,
            message: n,
            stack: r
        }
    }
    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = Object.keys(t.mappings);
        return n.some(t=>e === t || e.endsWith("." + t))
    }
    function u(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , {mappings: n} = t;
        if (!(e in n)) {
            var r = Object.values(n)[0];
            n[e] = r
        }
    }
    function f(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , {host: n, origin: r, href: i} = new URL(e)
          , o = {
            bucket: null,
            key: null
        };
        for (var [a,s] of Object.entries(t.mappings))
            if (n === a || n.endsWith("." + a)) {
                o.bucket = s,
                o.key = n + i.replace(r, "");
                break
            }
        return o
    }
    function l(e) {
        "/" !== e.charAt(0) && (e = "/" + e);
        var [t,n,...r] = e.split("/")
          , i = encodeURIComponent(r.join("/"));
        return e = "/".concat(n, "/").concat(i)
    }
    var h = e=>e && e.length <= 1024;
    function p(e) {
        return !!e.includes("/transparent.gif?ray=")
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }
    )),
    n.d(t, "c", (function() {
        return i
    }
    )),
    n.d(t, "g", (function() {
        return a
    }
    )),
    n.d(t, "j", (function() {
        return s
    }
    )),
    n.d(t, "i", (function() {
        return c
    }
    )),
    n.d(t, "b", (function() {
        return u
    }
    )),
    n.d(t, "k", (function() {
        return f
    }
    )),
    n.d(t, "d", (function() {
        return h
    }
    )),
    n.d(t, "e", (function() {
        return p
    }
    )),
    n.d(t, "f", (function() {
        return d
    }
    )),
    n.d(t, "h", (function() {
        return v
    }
    ));
    var r = {
        images: ["bmp", "jpeg", "jpg", "ttf", "pict", "svg", "webp", "eps", "svgz", "gif", "png", "ico", "tif", "tiff", "bpg", "avif", "jxl"],
        video: ["mp4", "3gp", "webm", "mkv", "flv", "f4v", "f4p", "f4bogv", "drc", "avi", "mov", "qt", "wmv", "amv", "mpg", "mp2", "mpeg", "mpe", "m2v", "m4v", "3g2", "gifv", "mpv", "av1", "ts", "tsv", "tsa", "m2t", "m3u8"],
        audio: ["mid", "midi", "aac", "aiff", "flac", "m4a", "m4p", "mp3", "ogg", "oga", "mogg", "opus", "ra", "rm", "wav", "webm", "f4a", "pat"],
        interchange: ["json", "yaml", "xml", "csv", "toml", "ini", "bson", "asn1", "ubj"],
        archives: ["jar", "iso", "tar", "tgz", "tbz2", "tlz", "gz", "bz2", "xz", "lz", "z", "7z", "apk", "dmg", "rar", "lzma", "txz", "zip", "zipx"],
        documents: ["pdf", "ps", "doc", "docx", "ppt", "pptx", "xls", "otf", "xlsx"],
        other: ["srt", "swf"]
    }
      , i = ["js", "cjs", "mjs", "css"]
      , o = "arc:"
      , a = {
        COMLINK_INIT: "".concat(o, "comlink:init"),
        NODE_ID: "".concat(o, ":nodeId"),
        CLIENT_TEARDOWN: "".concat(o, "client:teardown"),
        CLIENT_TAB_ID: "".concat(o, "client:tabId"),
        CDN_CONFIG: "".concat(o, "cdn:config"),
        P2P_CLIENT_READY: "".concat(o, "cdn:ready"),
        STORED_FIDS: "".concat(o, "cdn:storedFids"),
        SW_HEALTH_CHECK: "".concat(o, "cdn:healthCheck"),
        WIDGET_CONFIG: "".concat(o, "widget:config"),
        WIDGET_INIT: "".concat(o, "widget:init"),
        WIDGET_UI_LOAD: "".concat(o, "widget:load"),
        BROKER_LOAD: "".concat(o, "broker:load"),
        RENDER_FILE: "".concat(o, "inlay:renderFile"),
        FILE_RENDERED: "".concat(o, "inlay:fileRendered")
    }
      , s = "serviceWorker"
      , c = "/".concat("shared-worker", ".js")
      , u = "/".concat("dedicated-worker", ".js")
      , f = "/".concat("arc-sw-core", ".js")
      , l = "".concat("arc-sw", ".js")
      , h = ("/".concat(l),
    "/".concat("arc-sw"),
    "arc-db")
      , p = "key-val-store"
      , d = 2 ** 17
      , v = "".concat("https://warden.arc.io", "/mailbox/propertySession");
    "".concat("https://warden.arc.io", "/mailbox/transfers")
}
, , function(e, t, n) {
    "use strict";
    function r(e) {
        switch (Object.prototype.toString.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return v(e, Error)
        }
    }
    function i(e) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(e)
    }
    function o(e) {
        return "[object DOMError]" === Object.prototype.toString.call(e)
    }
    function a(e) {
        return "[object DOMException]" === Object.prototype.toString.call(e)
    }
    function s(e) {
        return "[object String]" === Object.prototype.toString.call(e)
    }
    function c(e) {
        return null === e || "object" != typeof e && "function" != typeof e
    }
    function u(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }
    function f(e) {
        return "undefined" != typeof Event && v(e, Event)
    }
    function l(e) {
        return "undefined" != typeof Element && v(e, Element)
    }
    function h(e) {
        return "[object RegExp]" === Object.prototype.toString.call(e)
    }
    function p(e) {
        return Boolean(e && e.then && "function" == typeof e.then)
    }
    function d(e) {
        return u(e) && "nativeEvent"in e && "preventDefault"in e && "stopPropagation"in e
    }
    function v(e, t) {
        try {
            return e instanceof t
        } catch (e) {
            return !1
        }
    }
    n.d(t, "d", (function() {
        return r
    }
    )),
    n.d(t, "e", (function() {
        return i
    }
    )),
    n.d(t, "a", (function() {
        return o
    }
    )),
    n.d(t, "b", (function() {
        return a
    }
    )),
    n.d(t, "k", (function() {
        return s
    }
    )),
    n.d(t, "i", (function() {
        return c
    }
    )),
    n.d(t, "h", (function() {
        return u
    }
    )),
    n.d(t, "f", (function() {
        return f
    }
    )),
    n.d(t, "c", (function() {
        return l
    }
    )),
    n.d(t, "j", (function() {
        return h
    }
    )),
    n.d(t, "m", (function() {
        return p
    }
    )),
    n.d(t, "l", (function() {
        return d
    }
    )),
    n.d(t, "g", (function() {
        return v
    }
    ))
}
, function(e, t, n) {
    "use strict";
    var r = Object({
        ACCOUNT_ORIGIN: "https://account.arc.io",
        BANDWIDTH_WARDEN_ORIGIN: "https://warden.arc.io",
        COGNITO_APP_ID: "431634imeo45noat90ccl0lkep",
        COGNITO_REGION: "us-east-2",
        COGNITO_IDENTITY_POOL_ID: "us-east-2:cec1bb4c-3aa1-4d9a-87df-b75ae59441d0",
        COGNITO_USER_POOL_ID: "us-east-2_3sKO4HOjv",
        COMMIT_HASH: "8505c15",
        CORE_ORIGIN: "https://core.arc.io",
        DEMO_VUE_ORIGIN: "https://demo.arc.io",
        DOCS_ORIGIN: "https://docs.arc.io",
        FIREBASE_API_KEY: "AIzaSyCGmeUDT5F7Bq77JvXlN8IXBwJjIXJwvcI",
        GA_TID_HOMEPAGE: "UA-123508647-1",
        GA_TID_USER_TIMING: "UA-123508647-2",
        GATEWAY_ORIGIN: "https://gateway.arc.io",
        GOOGLE_PROJECT_FIRESTORE_ID: "prod-firestore-arc",
        HOMEPAGE_ORIGIN: "https://arc.io",
        INLAY_ORIGIN: "https://inlay.arc.io",
        NODE_ENV: "production",
        OVERMIND_ORIGIN: "https://overmind.arc.io",
        PORTAL_VUE_ORIGIN: "https://portal.arc.io",
        PORTAL_ORIGIN: "https://portal.arc.io",
        NODE_REPORT_MAILBOX_ORIGIN: "https://warden.arc.io",
        ROOT_DOMAIN: "arc.io",
        SOCKETCLUSTER_HOSTNAME: "socket.arc.io",
        SOCKETCLUSTER_PORT: "443",
        STATIC_ORIGIN: "https://static.arc.io",
        STORAGE_ORIGIN: "https://storage.arc.io",
        STRIPE_CLIENT_ID: "ca_DMhwnlBqMfP4Vx8mJF4M1nGxTNU5263W",
        STRIPE_PUBLISHABLE_KEY: "pk_live_Df4EdjIuSE8fW21HyuwWhJcm",
        SW_ORIGIN: "https://arc.io",
        TCDN_ORIGIN: "https://tcdn.arc.io",
        TRACKER_ANNOUNCE_URL: "wss://tkr.arc.io/announce",
        TRACKER_ORIGIN: "https://tkr.arc.io",
        WEBSEED_ORIGIN: "https://webseed.arc.io",
        WIDGET_ORIGIN: "https://arc.io",
        DEBUG: "false"
    });
    r.IS_PROD = "production" === r.NODE_ENV,
    t.a = r
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "e", (function() {
            return o
        }
        )),
        n.d(t, "i", (function() {
            return a
        }
        )),
        n.d(t, "h", (function() {
            return s
        }
        )),
        n.d(t, "d", (function() {
            return c
        }
        )),
        n.d(t, "c", (function() {
            return u
        }
        )),
        n.d(t, "b", (function() {
            return f
        }
        )),
        n.d(t, "a", (function() {
            return l
        }
        )),
        n.d(t, "f", (function() {
            return h
        }
        )),
        n.d(t, "g", (function() {
            return p
        }
        ));
        var r = n(24)
          , i = (n(18),
        {});
        function o() {
            return Object(r.b)() ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : i
        }
        function a() {
            var e = o()
              , t = e.crypto || e.msCrypto;
            if (void 0 !== t && t.getRandomValues) {
                var n = new Uint16Array(8);
                t.getRandomValues(n),
                n[3] = 4095 & n[3] | 16384,
                n[4] = 16383 & n[4] | 32768;
                var r = function(e) {
                    for (var t = e.toString(16); t.length < 4; )
                        t = "0" + t;
                    return t
                };
                return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
            }
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            }
            ))
        }
        function s(e) {
            if (!e)
                return {};
            var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!t)
                return {};
            var n = t[6] || ""
              , r = t[8] || "";
            return {
                host: t[4],
                path: t[5],
                protocol: t[2],
                relative: t[5] + n + r
            }
        }
        function c(e) {
            if (e.message)
                return e.message;
            if (e.exception && e.exception.values && e.exception.values[0]) {
                var t = e.exception.values[0];
                return t.type && t.value ? t.type + ": " + t.value : t.type || t.value || e.event_id || "<unknown>"
            }
            return e.event_id || "<unknown>"
        }
        function u(e) {
            var t = o();
            if (!("console"in t))
                return e();
            var n = t.console
              , r = {};
            ["debug", "info", "warn", "error", "log", "assert"].forEach((function(e) {
                e in t.console && n[e].__sentry_original__ && (r[e] = n[e],
                n[e] = n[e].__sentry_original__)
            }
            ));
            var i = e();
            return Object.keys(r).forEach((function(e) {
                n[e] = r[e]
            }
            )),
            i
        }
        function f(e, t, n) {
            e.exception = e.exception || {},
            e.exception.values = e.exception.values || [],
            e.exception.values[0] = e.exception.values[0] || {},
            e.exception.values[0].value = e.exception.values[0].value || t || "",
            e.exception.values[0].type = e.exception.values[0].type || n || "Error"
        }
        function l(e, t) {
            void 0 === t && (t = {});
            try {
                e.exception.values[0].mechanism = e.exception.values[0].mechanism || {},
                Object.keys(t).forEach((function(n) {
                    e.exception.values[0].mechanism[n] = t[n]
                }
                ))
            } catch (e) {}
        }
        function h() {
            try {
                return document.location.href
            } catch (e) {
                return ""
            }
        }
        function p(e, t) {
            if (!t)
                return 6e4;
            var n = parseInt("" + t, 10);
            if (!isNaN(n))
                return 1e3 * n;
            var r = Date.parse("" + t);
            return isNaN(r) ? 6e4 : r - e
        }
    }
    ).call(this, n(8))
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return u
    }
    )),
    n.d(t, "b", (function() {
        return y
    }
    )),
    n.d(t, "c", (function() {
        return c
    }
    )),
    n.d(t, "d", (function() {
        return l
    }
    ));
    var r = Symbol("Comlink.proxy")
      , i = Symbol("Comlink.endpoint")
      , o = Symbol("Comlink.releaseProxy")
      , a = Symbol("Comlink.thrown")
      , s = e=>"object" == typeof e && null !== e || "function" == typeof e
      , c = new Map([["proxy", {
        canHandle: e=>s(e) && e[r],
        serialize(e) {
            var {port1: t, port2: n} = new MessageChannel;
            return u(e, t),
            [n, [n]]
        },
        deserialize: e=>(e.start(),
        l(e))
    }], ["throw", {
        canHandle: e=>s(e) && a in e,
        serialize(e) {
            var {value: t} = e;
            return [t instanceof Error ? {
                isError: !0,
                value: {
                    message: t.message,
                    name: t.name,
                    stack: t.stack
                }
            } : {
                isError: !1,
                value: t
            }, []]
        },
        deserialize(e) {
            if (e.isError)
                throw Object.assign(new Error(e.value.message), e.value);
            throw e.value
        }
    }]]);
    function u(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : self;
        t.addEventListener("message", (function n(r) {
            if (r && r.data) {
                var i, {id: o, type: s, path: c} = Object.assign({
                    path: []
                }, r.data), l = (r.data.argumentList || []).map(m);
                try {
                    var h = c.slice(0, -1).reduce((e,t)=>e[t], e)
                      , p = c.reduce((e,t)=>e[t], e);
                    switch (s) {
                    case "GET":
                        i = p;
                        break;
                    case "SET":
                        h[c.slice(-1)[0]] = m(r.data.value),
                        i = !0;
                        break;
                    case "APPLY":
                        i = p.apply(h, l);
                        break;
                    case "CONSTRUCT":
                        var d;
                        i = y(new p(...l));
                        break;
                    case "ENDPOINT":
                        var {port1: b, port2: _} = new MessageChannel;
                        u(e, _),
                        i = v(b, [b]);
                        break;
                    case "RELEASE":
                        i = void 0;
                        break;
                    default:
                        return
                    }
                } catch (d) {
                    i = {
                        value: d,
                        [a]: 0
                    }
                }
                Promise.resolve(i).catch(e=>({
                    value: e,
                    [a]: 0
                })).then(e=>{
                    var [r,i] = g(e);
                    t.postMessage(Object.assign(Object.assign({}, r), {
                        id: o
                    }), i),
                    "RELEASE" === s && (t.removeEventListener("message", n),
                    f(t))
                }
                )
            }
        }
        )),
        t.start && t.start()
    }
    function f(e) {
        (function(e) {
            return "MessagePort" === e.constructor.name
        }
        )(e) && e.close()
    }
    function l(e, t) {
        return function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
              , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {}
              , a = !1
              , s = new Proxy(r,{
                get(r, i) {
                    if (h(a),
                    i === o)
                        return ()=>b(t, {
                            type: "RELEASE",
                            path: n.map(e=>e.toString())
                        }).then(()=>{
                            f(t),
                            a = !0
                        }
                        );
                    if ("then" === i) {
                        if (0 === n.length)
                            return {
                                then: ()=>s
                            };
                        var c = b(t, {
                            type: "GET",
                            path: n.map(e=>e.toString())
                        }).then(m);
                        return c.then.bind(c)
                    }
                    return e(t, [...n, i])
                },
                set(e, r, i) {
                    h(a);
                    var [o,s] = g(i);
                    return b(t, {
                        type: "SET",
                        path: [...n, r].map(e=>e.toString()),
                        value: o
                    }, s).then(m)
                },
                apply(r, o, s) {
                    h(a);
                    var c = n[n.length - 1];
                    if (c === i)
                        return b(t, {
                            type: "ENDPOINT"
                        }).then(m);
                    if ("bind" === c)
                        return e(t, n.slice(0, -1));
                    var [u,f] = p(s);
                    return b(t, {
                        type: "APPLY",
                        path: n.map(e=>e.toString()),
                        argumentList: u
                    }, f).then(m)
                },
                construct(e, r) {
                    h(a);
                    var [i,o] = p(r);
                    return b(t, {
                        type: "CONSTRUCT",
                        path: n.map(e=>e.toString()),
                        argumentList: i
                    }, o).then(m)
                }
            });
            return s
        }(e, [], t)
    }
    function h(e) {
        if (e)
            throw new Error("Proxy has been released and is not useable")
    }
    function p(e) {
        var t, n = e.map(g);
        return [n.map(e=>e[0]), (t = n.map(e=>e[1]),
        Array.prototype.concat.apply([], t))]
    }
    var d = new WeakMap;
    function v(e, t) {
        return d.set(e, t),
        e
    }
    function y(e) {
        return Object.assign(e, {
            [r]: !0
        })
    }
    function g(e) {
        for (var [t,n] of c)
            if (n.canHandle(e)) {
                var [r,i] = n.serialize(e);
                return [{
                    type: "HANDLER",
                    name: t,
                    value: r
                }, i]
            }
        return [{
            type: "RAW",
            value: e
        }, d.get(e) || []]
    }
    function m(e) {
        switch (e.type) {
        case "HANDLER":
            return c.get(e.name).deserialize(e.value);
        case "RAW":
            return e.value
        }
    }
    function b(e, t, n) {
        return new Promise(r=>{
            var i = new Array(4).fill(0).map(()=>Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
            e.addEventListener("message", (function t(n) {
                n.data && n.data.id && n.data.id === i && (e.removeEventListener("message", t),
                r(n.data))
            }
            )),
            e.start && e.start(),
            e.postMessage(Object.assign({
                id: i
            }, t), n)
        }
        )
    }
}
, function(e, t) {
    var n, r, i = e.exports = {};
    function o() {
        throw new Error("setTimeout has not been defined")
    }
    function a() {
        throw new Error("clearTimeout has not been defined")
    }
    function s(e) {
        if (n === setTimeout)
            return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var c, u = [], f = !1, l = -1;
    function h() {
        f && c && (f = !1,
        c.length ? u = c.concat(u) : l = -1,
        u.length && p())
    }
    function p() {
        if (!f) {
            var e = s(h);
            f = !0;
            for (var t = u.length; t; ) {
                for (c = u,
                u = []; ++l < t; )
                    c && c[l].run();
                l = -1,
                t = u.length
            }
            c = null,
            f = !1,
            function(e) {
                if (r === clearTimeout)
                    return clearTimeout(e);
                if ((r === a || !r) && clearTimeout)
                    return r = clearTimeout,
                    clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(e)
        }
    }
    function d(e, t) {
        this.fun = e,
        this.array = t
    }
    function v() {}
    i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        u.push(new d(e,t)),
        1 !== u.length || f || s(p)
    }
    ,
    d.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    i.title = "browser",
    i.browser = !0,
    i.env = {},
    i.argv = [],
    i.version = "",
    i.versions = {},
    i.on = v,
    i.addListener = v,
    i.once = v,
    i.off = v,
    i.removeListener = v,
    i.removeAllListeners = v,
    i.emit = v,
    i.prependListener = v,
    i.prependOnceListener = v,
    i.listeners = function(e) {
        return []
    }
    ,
    i.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    i.cwd = function() {
        return "/"
    }
    ,
    i.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    i.umask = function() {
        return 0
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t, n, r, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i)
    }
    function i(e) {
        return function() {
            var t = this
              , n = arguments;
            return new Promise((function(i, o) {
                var a = e.apply(t, n);
                function s(e) {
                    r(a, i, o, s, c, "next", e)
                }
                function c(e) {
                    r(a, i, o, s, c, "throw", e)
                }
                s(void 0)
            }
            ))
        }
    }
    n.d(t, "c", (function() {
        return o
    }
    )),
    n.d(t, "b", (function() {
        return s
    }
    )),
    n.d(t, "a", (function() {
        return c
    }
    ));
    console.log;
    function o(e) {
        return a.apply(this, arguments)
    }
    function a() {
        return (a = i((function*(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (Number.isFinite(t.timeout)) {
                var n = new AbortController;
                t.signal = n.signal,
                setTimeout(()=>n.abort(), t.timeout)
            }
            var r = yield fetch(e, t);
            if (r.status >= 400) {
                var i = new Error(r.statusText || r.status);
                throw i.response = r,
                i
            }
            return r
        }
        ))).apply(this, arguments)
    }
    var s = {
        _searchParams() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href
              , {searchParams: t} = new URL(e);
            return t
        },
        exists(e, t) {
            return this._searchParams(t).has(e)
        },
        get(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
              , n = arguments.length > 2 ? arguments[2] : void 0;
            return this._searchParams(n).get(e) || t
        },
        isTruthy(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = arguments.length > 2 ? arguments[2] : void 0
              , r = this._searchParams(n);
            return r.has(e) ? ["1", "true"].includes(r.get(e).toLowerCase()) : t
        },
        asNumber(e, t, n) {
            var r = this._searchParams(n);
            return r.has(e) ? Number(r.get(e)) : t
        }
    };
    function c(e) {
        return e.startsWith("https://arc.io/demo")
    }
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
        var r = n(55)
          , i = n(56)
          , o = n(31);
        function a() {
            return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }
        function s(e, t) {
            if (a() < t)
                throw new RangeError("Invalid typed array length");
            return c.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = c.prototype : (null === e && (e = new c(t)),
            e.length = t),
            e
        }
        function c(e, t, n) {
            if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c))
                return new c(e,t,n);
            if ("number" == typeof e) {
                if ("string" == typeof t)
                    throw new Error("If encoding is specified then the first argument must be a string");
                return l(this, e)
            }
            return u(this, e, t, n)
        }
        function u(e, t, n, r) {
            if ("number" == typeof t)
                throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
                if (t.byteLength,
                n < 0 || t.byteLength < n)
                    throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0))
                    throw new RangeError("'length' is out of bounds");
                t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t,n) : new Uint8Array(t,n,r);
                c.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = c.prototype : e = h(e, t);
                return e
            }(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
                "string" == typeof n && "" !== n || (n = "utf8");
                if (!c.isEncoding(n))
                    throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | d(t, n)
                  , i = (e = s(e, r)).write(t, n);
                i !== r && (e = e.slice(0, i));
                return e
            }(e, t, n) : function(e, t) {
                if (c.isBuffer(t)) {
                    var n = 0 | p(t.length);
                    return 0 === (e = s(e, n)).length || t.copy(e, 0, 0, n),
                    e
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length"in t)
                        return "number" != typeof t.length || (r = t.length) != r ? s(e, 0) : h(e, t);
                    if ("Buffer" === t.type && o(t.data))
                        return h(e, t.data)
                }
                var r;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(e, t)
        }
        function f(e) {
            if ("number" != typeof e)
                throw new TypeError('"size" argument must be a number');
            if (e < 0)
                throw new RangeError('"size" argument must not be negative')
        }
        function l(e, t) {
            if (f(t),
            e = s(e, t < 0 ? 0 : 0 | p(t)),
            !c.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < t; ++n)
                    e[n] = 0;
            return e
        }
        function h(e, t) {
            var n = t.length < 0 ? 0 : 0 | p(t.length);
            e = s(e, n);
            for (var r = 0; r < n; r += 1)
                e[r] = 255 & t[r];
            return e
        }
        function p(e) {
            if (e >= a())
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
            return 0 | e
        }
        function d(e, t) {
            if (c.isBuffer(e))
                return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
                return e.byteLength;
            "string" != typeof e && (e = "" + e);
            var n = e.length;
            if (0 === n)
                return 0;
            for (var r = !1; ; )
                switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return U(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return q(e).length;
                default:
                    if (r)
                        return U(e).length;
                    t = ("" + t).toLowerCase(),
                    r = !0
                }
        }
        function v(e, t, n) {
            var r = !1;
            if ((void 0 === t || t < 0) && (t = 0),
            t > this.length)
                return "";
            if ((void 0 === n || n > this.length) && (n = this.length),
            n <= 0)
                return "";
            if ((n >>>= 0) <= (t >>>= 0))
                return "";
            for (e || (e = "utf8"); ; )
                switch (e) {
                case "hex":
                    return T(this, t, n);
                case "utf8":
                case "utf-8":
                    return x(this, t, n);
                case "ascii":
                    return k(this, t, n);
                case "latin1":
                case "binary":
                    return C(this, t, n);
                case "base64":
                    return j(this, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return R(this, t, n);
                default:
                    if (r)
                        throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(),
                    r = !0
                }
        }
        function y(e, t, n) {
            var r = e[t];
            e[t] = e[n],
            e[n] = r
        }
        function g(e, t, n, r, i) {
            if (0 === e.length)
                return -1;
            if ("string" == typeof n ? (r = n,
            n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
            n = +n,
            isNaN(n) && (n = i ? 0 : e.length - 1),
            n < 0 && (n = e.length + n),
            n >= e.length) {
                if (i)
                    return -1;
                n = e.length - 1
            } else if (n < 0) {
                if (!i)
                    return -1;
                n = 0
            }
            if ("string" == typeof t && (t = c.from(t, r)),
            c.isBuffer(t))
                return 0 === t.length ? -1 : m(e, t, n, r, i);
            if ("number" == typeof t)
                return t &= 255,
                c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : m(e, [t], n, r, i);
            throw new TypeError("val must be string, number or Buffer")
        }
        function m(e, t, n, r, i) {
            var o, a = 1, s = e.length, c = t.length;
            if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                if (e.length < 2 || t.length < 2)
                    return -1;
                a = 2,
                s /= 2,
                c /= 2,
                n /= 2
            }
            function u(e, t) {
                return 1 === a ? e[t] : e.readUInt16BE(t * a)
            }
            if (i) {
                var f = -1;
                for (o = n; o < s; o++)
                    if (u(e, o) === u(t, -1 === f ? 0 : o - f)) {
                        if (-1 === f && (f = o),
                        o - f + 1 === c)
                            return f * a
                    } else
                        -1 !== f && (o -= o - f),
                        f = -1
            } else
                for (n + c > s && (n = s - c),
                o = n; o >= 0; o--) {
                    for (var l = !0, h = 0; h < c; h++)
                        if (u(e, o + h) !== u(t, h)) {
                            l = !1;
                            break
                        }
                    if (l)
                        return o
                }
            return -1
        }
        function b(e, t, n, r) {
            n = Number(n) || 0;
            var i = e.length - n;
            r ? (r = Number(r)) > i && (r = i) : r = i;
            var o = t.length;
            if (o % 2 != 0)
                throw new TypeError("Invalid hex string");
            r > o / 2 && (r = o / 2);
            for (var a = 0; a < r; ++a) {
                var s = parseInt(t.substr(2 * a, 2), 16);
                if (isNaN(s))
                    return a;
                e[n + a] = s
            }
            return a
        }
        function _(e, t, n, r) {
            return H(U(t, e.length - n), e, n, r)
        }
        function w(e, t, n, r) {
            return H(function(e) {
                for (var t = [], n = 0; n < e.length; ++n)
                    t.push(255 & e.charCodeAt(n));
                return t
            }(t), e, n, r)
        }
        function O(e, t, n, r) {
            return w(e, t, n, r)
        }
        function E(e, t, n, r) {
            return H(q(t), e, n, r)
        }
        function S(e, t, n, r) {
            return H(function(e, t) {
                for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a)
                    n = e.charCodeAt(a),
                    r = n >> 8,
                    i = n % 256,
                    o.push(i),
                    o.push(r);
                return o
            }(t, e.length - n), e, n, r)
        }
        function j(e, t, n) {
            return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
        }
        function x(e, t, n) {
            n = Math.min(e.length, n);
            for (var r = [], i = t; i < n; ) {
                var o, a, s, c, u = e[i], f = null, l = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                if (i + l <= n)
                    switch (l) {
                    case 1:
                        u < 128 && (f = u);
                        break;
                    case 2:
                        128 == (192 & (o = e[i + 1])) && (c = (31 & u) << 6 | 63 & o) > 127 && (f = c);
                        break;
                    case 3:
                        o = e[i + 1],
                        a = e[i + 2],
                        128 == (192 & o) && 128 == (192 & a) && (c = (15 & u) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (c < 55296 || c > 57343) && (f = c);
                        break;
                    case 4:
                        o = e[i + 1],
                        a = e[i + 2],
                        s = e[i + 3],
                        128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (c = (15 & u) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && c < 1114112 && (f = c)
                    }
                null === f ? (f = 65533,
                l = 1) : f > 65535 && (f -= 65536,
                r.push(f >>> 10 & 1023 | 55296),
                f = 56320 | 1023 & f),
                r.push(f),
                i += l
            }
            return function(e) {
                var t = e.length;
                if (t <= 4096)
                    return String.fromCharCode.apply(String, e);
                var n = ""
                  , r = 0;
                for (; r < t; )
                    n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
                return n
            }(r)
        }
        t.Buffer = c,
        t.SlowBuffer = function(e) {
            +e != e && (e = 0);
            return c.alloc(+e)
        }
        ,
        t.INSPECT_MAX_BYTES = 50,
        c.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                },
                42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(),
        t.kMaxLength = a(),
        c.poolSize = 8192,
        c._augment = function(e) {
            return e.__proto__ = c.prototype,
            e
        }
        ,
        c.from = function(e, t, n) {
            return u(null, e, t, n)
        }
        ,
        c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype,
        c.__proto__ = Uint8Array,
        "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
            value: null,
            configurable: !0
        })),
        c.alloc = function(e, t, n) {
            return function(e, t, n, r) {
                return f(t),
                t <= 0 ? s(e, t) : void 0 !== n ? "string" == typeof r ? s(e, t).fill(n, r) : s(e, t).fill(n) : s(e, t)
            }(null, e, t, n)
        }
        ,
        c.allocUnsafe = function(e) {
            return l(null, e)
        }
        ,
        c.allocUnsafeSlow = function(e) {
            return l(null, e)
        }
        ,
        c.isBuffer = function(e) {
            return !(null == e || !e._isBuffer)
        }
        ,
        c.compare = function(e, t) {
            if (!c.isBuffer(e) || !c.isBuffer(t))
                throw new TypeError("Arguments must be Buffers");
            if (e === t)
                return 0;
            for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
                if (e[i] !== t[i]) {
                    n = e[i],
                    r = t[i];
                    break
                }
            return n < r ? -1 : r < n ? 1 : 0
        }
        ,
        c.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }
        ,
        c.concat = function(e, t) {
            if (!o(e))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length)
                return c.alloc(0);
            var n;
            if (void 0 === t)
                for (t = 0,
                n = 0; n < e.length; ++n)
                    t += e[n].length;
            var r = c.allocUnsafe(t)
              , i = 0;
            for (n = 0; n < e.length; ++n) {
                var a = e[n];
                if (!c.isBuffer(a))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(r, i),
                i += a.length
            }
            return r
        }
        ,
        c.byteLength = d,
        c.prototype._isBuffer = !0,
        c.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2)
                y(this, t, t + 1);
            return this
        }
        ,
        c.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
                y(this, t, t + 3),
                y(this, t + 1, t + 2);
            return this
        }
        ,
        c.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
                y(this, t, t + 7),
                y(this, t + 1, t + 6),
                y(this, t + 2, t + 5),
                y(this, t + 3, t + 4);
            return this
        }
        ,
        c.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? x(this, 0, e) : v.apply(this, arguments)
        }
        ,
        c.prototype.equals = function(e) {
            if (!c.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === c.compare(this, e)
        }
        ,
        c.prototype.inspect = function() {
            var e = ""
              , n = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "),
            this.length > n && (e += " ... ")),
            "<Buffer " + e + ">"
        }
        ,
        c.prototype.compare = function(e, t, n, r, i) {
            if (!c.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === r && (r = 0),
            void 0 === i && (i = this.length),
            t < 0 || n > e.length || r < 0 || i > this.length)
                throw new RangeError("out of range index");
            if (r >= i && t >= n)
                return 0;
            if (r >= i)
                return -1;
            if (t >= n)
                return 1;
            if (this === e)
                return 0;
            for (var o = (i >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), s = Math.min(o, a), u = this.slice(r, i), f = e.slice(t, n), l = 0; l < s; ++l)
                if (u[l] !== f[l]) {
                    o = u[l],
                    a = f[l];
                    break
                }
            return o < a ? -1 : a < o ? 1 : 0
        }
        ,
        c.prototype.includes = function(e, t, n) {
            return -1 !== this.indexOf(e, t, n)
        }
        ,
        c.prototype.indexOf = function(e, t, n) {
            return g(this, e, t, n, !0)
        }
        ,
        c.prototype.lastIndexOf = function(e, t, n) {
            return g(this, e, t, n, !1)
        }
        ,
        c.prototype.write = function(e, t, n, r) {
            if (void 0 === t)
                r = "utf8",
                n = this.length,
                t = 0;
            else if (void 0 === n && "string" == typeof t)
                r = t,
                n = this.length,
                t = 0;
            else {
                if (!isFinite(t))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0,
                isFinite(n) ? (n |= 0,
                void 0 === r && (r = "utf8")) : (r = n,
                n = void 0)
            }
            var i = this.length - t;
            if ((void 0 === n || n > i) && (n = i),
            e.length > 0 && (n < 0 || t < 0) || t > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var o = !1; ; )
                switch (r) {
                case "hex":
                    return b(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return _(this, e, t, n);
                case "ascii":
                    return w(this, e, t, n);
                case "latin1":
                case "binary":
                    return O(this, e, t, n);
                case "base64":
                    return E(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return S(this, e, t, n);
                default:
                    if (o)
                        throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(),
                    o = !0
                }
        }
        ,
        c.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
        function k(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var i = t; i < n; ++i)
                r += String.fromCharCode(127 & e[i]);
            return r
        }
        function C(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var i = t; i < n; ++i)
                r += String.fromCharCode(e[i]);
            return r
        }
        function T(e, t, n) {
            var r = e.length;
            (!t || t < 0) && (t = 0),
            (!n || n < 0 || n > r) && (n = r);
            for (var i = "", o = t; o < n; ++o)
                i += F(e[o]);
            return i
        }
        function R(e, t, n) {
            for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2)
                i += String.fromCharCode(r[o] + 256 * r[o + 1]);
            return i
        }
        function P(e, t, n) {
            if (e % 1 != 0 || e < 0)
                throw new RangeError("offset is not uint");
            if (e + t > n)
                throw new RangeError("Trying to access beyond buffer length")
        }
        function I(e, t, n, r, i, o) {
            if (!c.isBuffer(e))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > i || t < o)
                throw new RangeError('"value" argument is out of bounds');
            if (n + r > e.length)
                throw new RangeError("Index out of range")
        }
        function A(e, t, n, r) {
            t < 0 && (t = 65535 + t + 1);
            for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i)
                e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
        }
        function L(e, t, n, r) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i)
                e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
        }
        function N(e, t, n, r, i, o) {
            if (n + r > e.length)
                throw new RangeError("Index out of range");
            if (n < 0)
                throw new RangeError("Index out of range")
        }
        function D(e, t, n, r, o) {
            return o || N(e, 0, n, 4),
            i.write(e, t, n, r, 23, 4),
            n + 4
        }
        function B(e, t, n, r, o) {
            return o || N(e, 0, n, 8),
            i.write(e, t, n, r, 52, 8),
            n + 8
        }
        c.prototype.slice = function(e, t) {
            var n, r = this.length;
            if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            t < e && (t = e),
            c.TYPED_ARRAY_SUPPORT)
                (n = this.subarray(e, t)).__proto__ = c.prototype;
            else {
                var i = t - e;
                n = new c(i,void 0);
                for (var o = 0; o < i; ++o)
                    n[o] = this[o + e]
            }
            return n
        }
        ,
        c.prototype.readUIntLE = function(e, t, n) {
            e |= 0,
            t |= 0,
            n || P(e, t, this.length);
            for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                r += this[e + o] * i;
            return r
        }
        ,
        c.prototype.readUIntBE = function(e, t, n) {
            e |= 0,
            t |= 0,
            n || P(e, t, this.length);
            for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); )
                r += this[e + --t] * i;
            return r
        }
        ,
        c.prototype.readUInt8 = function(e, t) {
            return t || P(e, 1, this.length),
            this[e]
        }
        ,
        c.prototype.readUInt16LE = function(e, t) {
            return t || P(e, 2, this.length),
            this[e] | this[e + 1] << 8
        }
        ,
        c.prototype.readUInt16BE = function(e, t) {
            return t || P(e, 2, this.length),
            this[e] << 8 | this[e + 1]
        }
        ,
        c.prototype.readUInt32LE = function(e, t) {
            return t || P(e, 4, this.length),
            (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }
        ,
        c.prototype.readUInt32BE = function(e, t) {
            return t || P(e, 4, this.length),
            16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }
        ,
        c.prototype.readIntLE = function(e, t, n) {
            e |= 0,
            t |= 0,
            n || P(e, t, this.length);
            for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                r += this[e + o] * i;
            return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)),
            r
        }
        ,
        c.prototype.readIntBE = function(e, t, n) {
            e |= 0,
            t |= 0,
            n || P(e, t, this.length);
            for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256); )
                o += this[e + --r] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)),
            o
        }
        ,
        c.prototype.readInt8 = function(e, t) {
            return t || P(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }
        ,
        c.prototype.readInt16LE = function(e, t) {
            t || P(e, 2, this.length);
            var n = this[e] | this[e + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }
        ,
        c.prototype.readInt16BE = function(e, t) {
            t || P(e, 2, this.length);
            var n = this[e + 1] | this[e] << 8;
            return 32768 & n ? 4294901760 | n : n
        }
        ,
        c.prototype.readInt32LE = function(e, t) {
            return t || P(e, 4, this.length),
            this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }
        ,
        c.prototype.readInt32BE = function(e, t) {
            return t || P(e, 4, this.length),
            this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }
        ,
        c.prototype.readFloatLE = function(e, t) {
            return t || P(e, 4, this.length),
            i.read(this, e, !0, 23, 4)
        }
        ,
        c.prototype.readFloatBE = function(e, t) {
            return t || P(e, 4, this.length),
            i.read(this, e, !1, 23, 4)
        }
        ,
        c.prototype.readDoubleLE = function(e, t) {
            return t || P(e, 8, this.length),
            i.read(this, e, !0, 52, 8)
        }
        ,
        c.prototype.readDoubleBE = function(e, t) {
            return t || P(e, 8, this.length),
            i.read(this, e, !1, 52, 8)
        }
        ,
        c.prototype.writeUIntLE = function(e, t, n, r) {
            (e = +e,
            t |= 0,
            n |= 0,
            r) || I(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var i = 1
              , o = 0;
            for (this[t] = 255 & e; ++o < n && (i *= 256); )
                this[t + o] = e / i & 255;
            return t + n
        }
        ,
        c.prototype.writeUIntBE = function(e, t, n, r) {
            (e = +e,
            t |= 0,
            n |= 0,
            r) || I(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var i = n - 1
              , o = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
                this[t + i] = e / o & 255;
            return t + n
        }
        ,
        c.prototype.writeUInt8 = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || I(this, e, t, 1, 255, 0),
            c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            this[t] = 255 & e,
            t + 1
        }
        ,
        c.prototype.writeUInt16LE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || I(this, e, t, 2, 65535, 0),
            c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8) : A(this, e, t, !0),
            t + 2
        }
        ,
        c.prototype.writeUInt16BE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || I(this, e, t, 2, 65535, 0),
            c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
            this[t + 1] = 255 & e) : A(this, e, t, !1),
            t + 2
        }
        ,
        c.prototype.writeUInt32LE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || I(this, e, t, 4, 4294967295, 0),
            c.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
            this[t + 2] = e >>> 16,
            this[t + 1] = e >>> 8,
            this[t] = 255 & e) : L(this, e, t, !0),
            t + 4
        }
        ,
        c.prototype.writeUInt32BE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || I(this, e, t, 4, 4294967295, 0),
            c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e) : L(this, e, t, !1),
            t + 4
        }
        ,
        c.prototype.writeIntLE = function(e, t, n, r) {
            if (e = +e,
            t |= 0,
            !r) {
                var i = Math.pow(2, 8 * n - 1);
                I(this, e, t, n, i - 1, -i)
            }
            var o = 0
              , a = 1
              , s = 0;
            for (this[t] = 255 & e; ++o < n && (a *= 256); )
                e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
                this[t + o] = (e / a >> 0) - s & 255;
            return t + n
        }
        ,
        c.prototype.writeIntBE = function(e, t, n, r) {
            if (e = +e,
            t |= 0,
            !r) {
                var i = Math.pow(2, 8 * n - 1);
                I(this, e, t, n, i - 1, -i)
            }
            var o = n - 1
              , a = 1
              , s = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
                e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
                this[t + o] = (e / a >> 0) - s & 255;
            return t + n
        }
        ,
        c.prototype.writeInt8 = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || I(this, e, t, 1, 127, -128),
            c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            this[t] = 255 & e,
            t + 1
        }
        ,
        c.prototype.writeInt16LE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || I(this, e, t, 2, 32767, -32768),
            c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8) : A(this, e, t, !0),
            t + 2
        }
        ,
        c.prototype.writeInt16BE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || I(this, e, t, 2, 32767, -32768),
            c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
            this[t + 1] = 255 & e) : A(this, e, t, !1),
            t + 2
        }
        ,
        c.prototype.writeInt32LE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || I(this, e, t, 4, 2147483647, -2147483648),
            c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            this[t + 2] = e >>> 16,
            this[t + 3] = e >>> 24) : L(this, e, t, !0),
            t + 4
        }
        ,
        c.prototype.writeInt32BE = function(e, t, n) {
            return e = +e,
            t |= 0,
            n || I(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e) : L(this, e, t, !1),
            t + 4
        }
        ,
        c.prototype.writeFloatLE = function(e, t, n) {
            return D(this, e, t, !0, n)
        }
        ,
        c.prototype.writeFloatBE = function(e, t, n) {
            return D(this, e, t, !1, n)
        }
        ,
        c.prototype.writeDoubleLE = function(e, t, n) {
            return B(this, e, t, !0, n)
        }
        ,
        c.prototype.writeDoubleBE = function(e, t, n) {
            return B(this, e, t, !1, n)
        }
        ,
        c.prototype.copy = function(e, t, n, r) {
            if (n || (n = 0),
            r || 0 === r || (r = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            r > 0 && r < n && (r = n),
            r === n)
                return 0;
            if (0 === e.length || 0 === this.length)
                return 0;
            if (t < 0)
                throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length)
                throw new RangeError("sourceStart out of bounds");
            if (r < 0)
                throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length),
            e.length - t < r - n && (r = e.length - t + n);
            var i, o = r - n;
            if (this === e && n < t && t < r)
                for (i = o - 1; i >= 0; --i)
                    e[i + t] = this[i + n];
            else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                for (i = 0; i < o; ++i)
                    e[i + t] = this[i + n];
            else
                Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
            return o
        }
        ,
        c.prototype.fill = function(e, t, n, r) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (r = t,
                t = 0,
                n = this.length) : "string" == typeof n && (r = n,
                n = this.length),
                1 === e.length) {
                    var i = e.charCodeAt(0);
                    i < 256 && (e = i)
                }
                if (void 0 !== r && "string" != typeof r)
                    throw new TypeError("encoding must be a string");
                if ("string" == typeof r && !c.isEncoding(r))
                    throw new TypeError("Unknown encoding: " + r)
            } else
                "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < n)
                throw new RangeError("Out of range index");
            if (n <= t)
                return this;
            var o;
            if (t >>>= 0,
            n = void 0 === n ? this.length : n >>> 0,
            e || (e = 0),
            "number" == typeof e)
                for (o = t; o < n; ++o)
                    this[o] = e;
            else {
                var a = c.isBuffer(e) ? e : U(new c(e,r).toString())
                  , s = a.length;
                for (o = 0; o < n - t; ++o)
                    this[o + t] = a[o % s]
            }
            return this
        }
        ;
        var M = /[^+\/0-9A-Za-z-_]/g;
        function F(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }
        function U(e, t) {
            var n;
            t = t || 1 / 0;
            for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
                if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                    if (!i) {
                        if (n > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === r) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        i = n;
                        continue
                    }
                    if (n < 56320) {
                        (t -= 3) > -1 && o.push(239, 191, 189),
                        i = n;
                        continue
                    }
                    n = 65536 + (i - 55296 << 10 | n - 56320)
                } else
                    i && (t -= 3) > -1 && o.push(239, 191, 189);
                if (i = null,
                n < 128) {
                    if ((t -= 1) < 0)
                        break;
                    o.push(n)
                } else if (n < 2048) {
                    if ((t -= 2) < 0)
                        break;
                    o.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((t -= 3) < 0)
                        break;
                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112))
                        throw new Error("Invalid code point");
                    if ((t -= 4) < 0)
                        break;
                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return o
        }
        function q(e) {
            return r.toByteArray(function(e) {
                if ((e = function(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                }(e).replace(M, "")).length < 2)
                    return "";
                for (; e.length % 4 != 0; )
                    e += "=";
                return e
            }(e))
        }
        function H(e, t, n, r) {
            for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i)
                t[i + n] = e[i];
            return i
        }
    }
    ).call(this, n(8))
}
, function(e, t, n) {
    /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
    var r = n(12)
      , i = r.Buffer;
    function o(e, t) {
        for (var n in e)
            t[n] = e[n]
    }
    function a(e, t, n) {
        return i(e, t, n)
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = r : (o(r, t),
    t.Buffer = a),
    a.prototype = Object.create(i.prototype),
    o(i, a),
    a.from = function(e, t, n) {
        if ("number" == typeof e)
            throw new TypeError("Argument must not be a number");
        return i(e, t, n)
    }
    ,
    a.alloc = function(e, t, n) {
        if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
        var r = i(e);
        return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0),
        r
    }
    ,
    a.allocUnsafe = function(e) {
        if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
        return i(e)
    }
    ,
    a.allocUnsafeSlow = function(e) {
        if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
        return r.SlowBuffer(e)
    }
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "c", (function() {
            return u
        }
        )),
        n.d(t, "f", (function() {
            return f
        }
        )),
        n.d(t, "e", (function() {
            return p
        }
        )),
        n.d(t, "d", (function() {
            return y
        }
        )),
        n.d(t, "b", (function() {
            return g
        }
        )),
        n.d(t, "a", (function() {
            return m
        }
        ));
        var r = n(0)
          , i = n(30)
          , o = n(5)
          , a = n(46)
          , s = n(28)
          , c = n(18);
        function u(e, t, n) {
            if (t in e) {
                var r = e[t]
                  , i = n(r);
                if ("function" == typeof i)
                    try {
                        i.prototype = i.prototype || {},
                        Object.defineProperties(i, {
                            __sentry_original__: {
                                enumerable: !1,
                                value: r
                            }
                        })
                    } catch (e) {}
                e[t] = i
            }
        }
        function f(e) {
            return Object.keys(e).map((function(t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
            }
            )).join("&")
        }
        function l(e) {
            if (Object(o.d)(e)) {
                var t = e
                  , n = {
                    message: t.message,
                    name: t.name,
                    stack: t.stack
                };
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                return n
            }
            if (Object(o.f)(e)) {
                var a = e
                  , s = {};
                s.type = a.type;
                try {
                    s.target = Object(o.c)(a.target) ? Object(i.a)(a.target) : Object.prototype.toString.call(a.target)
                } catch (e) {
                    s.target = "<unknown>"
                }
                try {
                    s.currentTarget = Object(o.c)(a.currentTarget) ? Object(i.a)(a.currentTarget) : Object.prototype.toString.call(a.currentTarget)
                } catch (e) {
                    s.currentTarget = "<unknown>"
                }
                for (var r in "undefined" != typeof CustomEvent && Object(o.g)(e, CustomEvent) && (s.detail = a.detail),
                a)
                    Object.prototype.hasOwnProperty.call(a, r) && (s[r] = a);
                return s
            }
            return e
        }
        function h(e) {
            return function(e) {
                return ~-encodeURI(e).split(/%..|./).length
            }(JSON.stringify(e))
        }
        function p(e, t, n) {
            void 0 === t && (t = 3),
            void 0 === n && (n = 102400);
            var r = y(e, t);
            return h(r) > n ? p(e, t - 1, n) : r
        }
        function d(t, n) {
            return "domain" === n && t && "object" == typeof t && t._events ? "[Domain]" : "domainEmitter" === n ? "[DomainEmitter]" : void 0 !== e && t === e ? "[Global]" : "undefined" != typeof window && t === window ? "[Window]" : "undefined" != typeof document && t === document ? "[Document]" : Object(o.l)(t) ? "[SyntheticEvent]" : "number" == typeof t && t != t ? "[NaN]" : void 0 === t ? "[undefined]" : "function" == typeof t ? "[Function: " + Object(s.a)(t) + "]" : "symbol" == typeof t ? "[" + String(t) + "]" : "bigint" == typeof t ? "[BigInt: " + String(t) + "]" : t
        }
        function v(e, t, n, r) {
            if (void 0 === n && (n = 1 / 0),
            void 0 === r && (r = new a.a),
            0 === n)
                return function(e) {
                    var t = Object.prototype.toString.call(e);
                    if ("string" == typeof e)
                        return e;
                    if ("[object Object]" === t)
                        return "[Object]";
                    if ("[object Array]" === t)
                        return "[Array]";
                    var n = d(e);
                    return Object(o.i)(n) ? n : t
                }(t);
            if (null != t && "function" == typeof t.toJSON)
                return t.toJSON();
            var i = d(t, e);
            if (Object(o.i)(i))
                return i;
            var s = l(t)
              , c = Array.isArray(t) ? [] : {};
            if (r.memoize(t))
                return "[Circular ~]";
            for (var u in s)
                Object.prototype.hasOwnProperty.call(s, u) && (c[u] = v(u, s[u], n - 1, r));
            return r.unmemoize(t),
            c
        }
        function y(e, t) {
            try {
                return JSON.parse(JSON.stringify(e, (function(e, n) {
                    return v(e, n, t)
                }
                )))
            } catch (e) {
                return "**non-serializable**"
            }
        }
        function g(e, t) {
            void 0 === t && (t = 40);
            var n = Object.keys(l(e));
            if (n.sort(),
            !n.length)
                return "[object has no keys]";
            if (n[0].length >= t)
                return Object(c.d)(n[0], t);
            for (var r = n.length; r > 0; r--) {
                var i = n.slice(0, r).join(", ");
                if (!(i.length > t))
                    return r === n.length ? i : Object(c.d)(i, t)
            }
            return ""
        }
        function m(e) {
            var t, n;
            if (Object(o.h)(e)) {
                var i = e
                  , a = {};
                try {
                    for (var s = Object(r.f)(Object.keys(i)), c = s.next(); !c.done; c = s.next()) {
                        var u = c.value;
                        void 0 !== i[u] && (a[u] = m(i[u]))
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        c && !c.done && (n = s.return) && n.call(s)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
                return a
            }
            return Array.isArray(e) ? e.map(m) : e
        }
    }
    ).call(this, n(8))
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return At
    }
    )),
    n.d(t, "b", (function() {
        return Nt
    }
    ));
    var r = {};
    n.r(r),
    n.d(r, "FunctionToString", (function() {
        return it
    }
    )),
    n.d(r, "InboundFilters", (function() {
        return at
    }
    ));
    var i = {};
    n.r(i),
    n.d(i, "GlobalHandlers", (function() {
        return ut
    }
    )),
    n.d(i, "TryCatch", (function() {
        return ct
    }
    )),
    n.d(i, "Breadcrumbs", (function() {
        return nt
    }
    )),
    n.d(i, "LinkedErrors", (function() {
        return ft
    }
    )),
    n.d(i, "UserAgent", (function() {
        return ht
    }
    ));
    var o = {};
    n.r(o),
    n.d(o, "BaseTransport", (function() {
        return Re
    }
    )),
    n.d(o, "FetchTransport", (function() {
        return Pe
    }
    )),
    n.d(o, "XHRTransport", (function() {
        return Ie
    }
    ));
    var a = {};
    n.r(a),
    n.d(a, "Severity", (function() {
        return s
    }
    )),
    n.d(a, "Status", (function() {
        return c
    }
    )),
    n.d(a, "addGlobalEventProcessor", (function() {
        return m
    }
    )),
    n.d(a, "addBreadcrumb", (function() {
        return M
    }
    )),
    n.d(a, "captureException", (function() {
        return L
    }
    )),
    n.d(a, "captureEvent", (function() {
        return D
    }
    )),
    n.d(a, "captureMessage", (function() {
        return N
    }
    )),
    n.d(a, "configureScope", (function() {
        return B
    }
    )),
    n.d(a, "getHubFromCarrier", (function() {
        return P
    }
    )),
    n.d(a, "getCurrentHub", (function() {
        return T
    }
    )),
    n.d(a, "Hub", (function() {
        return x
    }
    )),
    n.d(a, "makeMain", (function() {
        return C
    }
    )),
    n.d(a, "Scope", (function() {
        return y
    }
    )),
    n.d(a, "startTransaction", (function() {
        return Y
    }
    )),
    n.d(a, "SDK_VERSION", (function() {
        return K
    }
    )),
    n.d(a, "setContext", (function() {
        return F
    }
    )),
    n.d(a, "setExtra", (function() {
        return H
    }
    )),
    n.d(a, "setExtras", (function() {
        return U
    }
    )),
    n.d(a, "setTag", (function() {
        return W
    }
    )),
    n.d(a, "setTags", (function() {
        return q
    }
    )),
    n.d(a, "setUser", (function() {
        return G
    }
    )),
    n.d(a, "withScope", (function() {
        return z
    }
    )),
    n.d(a, "BrowserClient", (function() {
        return rt
    }
    )),
    n.d(a, "injectReportDialog", (function() {
        return Me
    }
    )),
    n.d(a, "eventFromException", (function() {
        return be
    }
    )),
    n.d(a, "eventFromMessage", (function() {
        return _e
    }
    )),
    n.d(a, "defaultIntegrations", (function() {
        return pt
    }
    )),
    n.d(a, "forceLoad", (function() {
        return gt
    }
    )),
    n.d(a, "init", (function() {
        return dt
    }
    )),
    n.d(a, "lastEventId", (function() {
        return yt
    }
    )),
    n.d(a, "onLoad", (function() {
        return mt
    }
    )),
    n.d(a, "showReportDialog", (function() {
        return vt
    }
    )),
    n.d(a, "flush", (function() {
        return bt
    }
    )),
    n.d(a, "close", (function() {
        return _t
    }
    )),
    n.d(a, "wrap", (function() {
        return wt
    }
    )),
    n.d(a, "SDK_NAME", (function() {
        return Ot
    }
    )),
    n.d(a, "Integrations", (function() {
        return jt
    }
    )),
    n.d(a, "Transports", (function() {
        return o
    }
    ));
    var s, c, u = n(0);
    !function(e) {
        e.Fatal = "fatal",
        e.Error = "error",
        e.Warning = "warning",
        e.Log = "log",
        e.Info = "info",
        e.Debug = "debug",
        e.Critical = "critical"
    }(s || (s = {})),
    function(e) {
        e.fromString = function(t) {
            switch (t) {
            case "debug":
                return e.Debug;
            case "info":
                return e.Info;
            case "warn":
            case "warning":
                return e.Warning;
            case "error":
                return e.Error;
            case "fatal":
                return e.Fatal;
            case "critical":
                return e.Critical;
            case "log":
            default:
                return e.Log
            }
        }
    }(s || (s = {})),
    function(e) {
        e.Unknown = "unknown",
        e.Skipped = "skipped",
        e.Success = "success",
        e.RateLimit = "rate_limit",
        e.Invalid = "invalid",
        e.Failed = "failed"
    }(c || (c = {})),
    function(e) {
        e.fromHttpCode = function(t) {
            return t >= 200 && t < 300 ? e.Success : 429 === t ? e.RateLimit : t >= 400 && t < 500 ? e.Invalid : t >= 500 ? e.Failed : e.Unknown
        }
    }(c || (c = {}));
    var f, l = n(5), h = n(95);
    !function(e) {
        e.PENDING = "PENDING",
        e.RESOLVED = "RESOLVED",
        e.REJECTED = "REJECTED"
    }(f || (f = {}));
    var p, d = function() {
        function e(e) {
            var t = this;
            this._state = f.PENDING,
            this._handlers = [],
            this._resolve = function(e) {
                t._setResult(f.RESOLVED, e)
            }
            ,
            this._reject = function(e) {
                t._setResult(f.REJECTED, e)
            }
            ,
            this._setResult = function(e, n) {
                t._state === f.PENDING && (Object(l.m)(n) ? n.then(t._resolve, t._reject) : (t._state = e,
                t._value = n,
                t._executeHandlers()))
            }
            ,
            this._attachHandler = function(e) {
                t._handlers = t._handlers.concat(e),
                t._executeHandlers()
            }
            ,
            this._executeHandlers = function() {
                if (t._state !== f.PENDING) {
                    var e = t._handlers.slice();
                    t._handlers = [],
                    e.forEach((function(e) {
                        e.done || (t._state === f.RESOLVED && e.onfulfilled && e.onfulfilled(t._value),
                        t._state === f.REJECTED && e.onrejected && e.onrejected(t._value),
                        e.done = !0)
                    }
                    ))
                }
            }
            ;
            try {
                e(this._resolve, this._reject)
            } catch (e) {
                this._reject(e)
            }
        }
        return e.resolve = function(t) {
            return new e((function(e) {
                e(t)
            }
            ))
        }
        ,
        e.reject = function(t) {
            return new e((function(e, n) {
                n(t)
            }
            ))
        }
        ,
        e.all = function(t) {
            return new e((function(n, r) {
                if (Array.isArray(t))
                    if (0 !== t.length) {
                        var i = t.length
                          , o = [];
                        t.forEach((function(t, a) {
                            e.resolve(t).then((function(e) {
                                o[a] = e,
                                0 === (i -= 1) && n(o)
                            }
                            )).then(null, r)
                        }
                        ))
                    } else
                        n([]);
                else
                    r(new TypeError("Promise.all requires an array as input."))
            }
            ))
        }
        ,
        e.prototype.then = function(t, n) {
            var r = this;
            return new e((function(e, i) {
                r._attachHandler({
                    done: !1,
                    onfulfilled: function(n) {
                        if (t)
                            try {
                                return void e(t(n))
                            } catch (e) {
                                return void i(e)
                            }
                        else
                            e(n)
                    },
                    onrejected: function(t) {
                        if (n)
                            try {
                                return void e(n(t))
                            } catch (e) {
                                return void i(e)
                            }
                        else
                            i(t)
                    }
                })
            }
            ))
        }
        ,
        e.prototype.catch = function(e) {
            return this.then((function(e) {
                return e
            }
            ), e)
        }
        ,
        e.prototype.finally = function(t) {
            var n = this;
            return new e((function(e, r) {
                var i, o;
                return n.then((function(e) {
                    o = !1,
                    i = e,
                    t && t()
                }
                ), (function(e) {
                    o = !0,
                    i = e,
                    t && t()
                }
                )).then((function() {
                    o ? r(i) : e(i)
                }
                ))
            }
            ))
        }
        ,
        e.prototype.toString = function() {
            return "[object SyncPromise]"
        }
        ,
        e
    }(), v = n(7), y = function() {
        function e() {
            this._notifyingListeners = !1,
            this._scopeListeners = [],
            this._eventProcessors = [],
            this._breadcrumbs = [],
            this._user = {},
            this._tags = {},
            this._extra = {},
            this._contexts = {}
        }
        return e.clone = function(t) {
            var n = new e;
            return t && (n._breadcrumbs = Object(u.e)(t._breadcrumbs),
            n._tags = Object(u.a)({}, t._tags),
            n._extra = Object(u.a)({}, t._extra),
            n._contexts = Object(u.a)({}, t._contexts),
            n._user = t._user,
            n._level = t._level,
            n._span = t._span,
            n._session = t._session,
            n._transactionName = t._transactionName,
            n._fingerprint = t._fingerprint,
            n._eventProcessors = Object(u.e)(t._eventProcessors)),
            n
        }
        ,
        e.prototype.addScopeListener = function(e) {
            this._scopeListeners.push(e)
        }
        ,
        e.prototype.addEventProcessor = function(e) {
            return this._eventProcessors.push(e),
            this
        }
        ,
        e.prototype.setUser = function(e) {
            return this._user = e || {},
            this._session && this._session.update({
                user: e
            }),
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.getUser = function() {
            return this._user
        }
        ,
        e.prototype.setTags = function(e) {
            return this._tags = Object(u.a)(Object(u.a)({}, this._tags), e),
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.setTag = function(e, t) {
            var n;
            return this._tags = Object(u.a)(Object(u.a)({}, this._tags), ((n = {})[e] = t,
            n)),
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.setExtras = function(e) {
            return this._extra = Object(u.a)(Object(u.a)({}, this._extra), e),
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.setExtra = function(e, t) {
            var n;
            return this._extra = Object(u.a)(Object(u.a)({}, this._extra), ((n = {})[e] = t,
            n)),
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.setFingerprint = function(e) {
            return this._fingerprint = e,
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.setLevel = function(e) {
            return this._level = e,
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.setTransactionName = function(e) {
            return this._transactionName = e,
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.setTransaction = function(e) {
            return this.setTransactionName(e)
        }
        ,
        e.prototype.setContext = function(e, t) {
            var n;
            return null === t ? delete this._contexts[e] : this._contexts = Object(u.a)(Object(u.a)({}, this._contexts), ((n = {})[e] = t,
            n)),
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.setSpan = function(e) {
            return this._span = e,
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.getSpan = function() {
            return this._span
        }
        ,
        e.prototype.getTransaction = function() {
            var e, t, n, r, i = this.getSpan();
            return (null === (e = i) || void 0 === e ? void 0 : e.transaction) ? null === (t = i) || void 0 === t ? void 0 : t.transaction : (null === (r = null === (n = i) || void 0 === n ? void 0 : n.spanRecorder) || void 0 === r ? void 0 : r.spans[0]) ? i.spanRecorder.spans[0] : void 0
        }
        ,
        e.prototype.setSession = function(e) {
            return e ? this._session = e : delete this._session,
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.getSession = function() {
            return this._session
        }
        ,
        e.prototype.update = function(t) {
            if (!t)
                return this;
            if ("function" == typeof t) {
                var n = t(this);
                return n instanceof e ? n : this
            }
            return t instanceof e ? (this._tags = Object(u.a)(Object(u.a)({}, this._tags), t._tags),
            this._extra = Object(u.a)(Object(u.a)({}, this._extra), t._extra),
            this._contexts = Object(u.a)(Object(u.a)({}, this._contexts), t._contexts),
            t._user && Object.keys(t._user).length && (this._user = t._user),
            t._level && (this._level = t._level),
            t._fingerprint && (this._fingerprint = t._fingerprint)) : Object(l.h)(t) && (t = t,
            this._tags = Object(u.a)(Object(u.a)({}, this._tags), t.tags),
            this._extra = Object(u.a)(Object(u.a)({}, this._extra), t.extra),
            this._contexts = Object(u.a)(Object(u.a)({}, this._contexts), t.contexts),
            t.user && (this._user = t.user),
            t.level && (this._level = t.level),
            t.fingerprint && (this._fingerprint = t.fingerprint)),
            this
        }
        ,
        e.prototype.clear = function() {
            return this._breadcrumbs = [],
            this._tags = {},
            this._extra = {},
            this._user = {},
            this._contexts = {},
            this._level = void 0,
            this._transactionName = void 0,
            this._fingerprint = void 0,
            this._span = void 0,
            this._session = void 0,
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.addBreadcrumb = function(e, t) {
            var n = Object(u.a)({
                timestamp: Object(h.a)()
            }, e);
            return this._breadcrumbs = void 0 !== t && t >= 0 ? Object(u.e)(this._breadcrumbs, [n]).slice(-t) : Object(u.e)(this._breadcrumbs, [n]),
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.clearBreadcrumbs = function() {
            return this._breadcrumbs = [],
            this._notifyScopeListeners(),
            this
        }
        ,
        e.prototype.applyToEvent = function(e, t) {
            var n;
            if (this._extra && Object.keys(this._extra).length && (e.extra = Object(u.a)(Object(u.a)({}, this._extra), e.extra)),
            this._tags && Object.keys(this._tags).length && (e.tags = Object(u.a)(Object(u.a)({}, this._tags), e.tags)),
            this._user && Object.keys(this._user).length && (e.user = Object(u.a)(Object(u.a)({}, this._user), e.user)),
            this._contexts && Object.keys(this._contexts).length && (e.contexts = Object(u.a)(Object(u.a)({}, this._contexts), e.contexts)),
            this._level && (e.level = this._level),
            this._transactionName && (e.transaction = this._transactionName),
            this._span) {
                e.contexts = Object(u.a)({
                    trace: this._span.getTraceContext()
                }, e.contexts);
                var r = null === (n = this._span.transaction) || void 0 === n ? void 0 : n.name;
                r && (e.tags = Object(u.a)({
                    transaction: r
                }, e.tags))
            }
            return this._applyFingerprint(e),
            e.breadcrumbs = Object(u.e)(e.breadcrumbs || [], this._breadcrumbs),
            e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0,
            this._notifyEventProcessors(Object(u.e)(g(), this._eventProcessors), e, t)
        }
        ,
        e.prototype._notifyEventProcessors = function(e, t, n, r) {
            var i = this;
            return void 0 === r && (r = 0),
            new d((function(o, a) {
                var s = e[r];
                if (null === t || "function" != typeof s)
                    o(t);
                else {
                    var c = s(Object(u.a)({}, t), n);
                    Object(l.m)(c) ? c.then((function(t) {
                        return i._notifyEventProcessors(e, t, n, r + 1).then(o)
                    }
                    )).then(null, a) : i._notifyEventProcessors(e, c, n, r + 1).then(o).then(null, a)
                }
            }
            ))
        }
        ,
        e.prototype._notifyScopeListeners = function() {
            var e = this;
            this._notifyingListeners || (this._notifyingListeners = !0,
            this._scopeListeners.forEach((function(t) {
                t(e)
            }
            )),
            this._notifyingListeners = !1)
        }
        ,
        e.prototype._applyFingerprint = function(e) {
            e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [],
            this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
            e.fingerprint && !e.fingerprint.length && delete e.fingerprint
        }
        ,
        e
    }();
    function g() {
        var e = Object(v.e)();
        return e.__SENTRY__ = e.__SENTRY__ || {},
        e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || [],
        e.__SENTRY__.globalEventProcessors
    }
    function m(e) {
        g().push(e)
    }
    !function(e) {
        e.Ok = "ok",
        e.Exited = "exited",
        e.Crashed = "crashed",
        e.Abnormal = "abnormal"
    }(p || (p = {}));
    var b = Object(v.e)()
      , _ = "Sentry Logger "
      , w = function() {
        function e() {
            this._enabled = !1
        }
        return e.prototype.disable = function() {
            this._enabled = !1
        }
        ,
        e.prototype.enable = function() {
            this._enabled = !0
        }
        ,
        e.prototype.log = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            this._enabled && Object(v.c)((function() {
                b.console.log(_ + "[Log]: " + e.join(" "))
            }
            ))
        }
        ,
        e.prototype.warn = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            this._enabled && Object(v.c)((function() {
                b.console.warn(_ + "[Warn]: " + e.join(" "))
            }
            ))
        }
        ,
        e.prototype.error = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            this._enabled && Object(v.c)((function() {
                b.console.error(_ + "[Error]: " + e.join(" "))
            }
            ))
        }
        ,
        e
    }();
    b.__SENTRY__ = b.__SENTRY__ || {};
    var O = b.__SENTRY__.logger || (b.__SENTRY__.logger = new w)
      , E = n(24)
      , S = n(14)
      , j = function() {
        function e(e) {
            this.errors = 0,
            this.sid = Object(v.i)(),
            this.timestamp = Date.now(),
            this.started = Date.now(),
            this.duration = 0,
            this.status = p.Ok,
            this.init = !0,
            e && this.update(e)
        }
        return e.prototype.update = function(e) {
            void 0 === e && (e = {}),
            e.user && (e.user.ip_address && (this.ipAddress = e.user.ip_address),
            e.did || (this.did = e.user.id || e.user.email || e.user.username)),
            this.timestamp = e.timestamp || Date.now(),
            e.sid && (this.sid = 32 === e.sid.length ? e.sid : Object(v.i)()),
            void 0 !== e.init && (this.init = e.init),
            e.did && (this.did = "" + e.did),
            "number" == typeof e.started && (this.started = e.started),
            "number" == typeof e.duration ? this.duration = e.duration : this.duration = this.timestamp - this.started,
            e.release && (this.release = e.release),
            e.environment && (this.environment = e.environment),
            e.ipAddress && (this.ipAddress = e.ipAddress),
            e.userAgent && (this.userAgent = e.userAgent),
            "number" == typeof e.errors && (this.errors = e.errors),
            e.status && (this.status = e.status)
        }
        ,
        e.prototype.close = function(e) {
            e ? this.update({
                status: e
            }) : this.status === p.Ok ? this.update({
                status: p.Exited
            }) : this.update()
        }
        ,
        e.prototype.toJSON = function() {
            return Object(S.a)({
                sid: "" + this.sid,
                init: this.init,
                started: new Date(this.started).toISOString(),
                timestamp: new Date(this.timestamp).toISOString(),
                status: this.status,
                errors: this.errors,
                did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                duration: this.duration,
                attrs: Object(S.a)({
                    release: this.release,
                    environment: this.environment,
                    ip_address: this.ipAddress,
                    user_agent: this.userAgent
                })
            })
        }
        ,
        e
    }()
      , x = function() {
        function e(e, t, n) {
            void 0 === t && (t = new y),
            void 0 === n && (n = 3),
            this._version = n,
            this._stack = [{}],
            this.getStackTop().scope = t,
            this.bindClient(e)
        }
        return e.prototype.isOlderThan = function(e) {
            return this._version < e
        }
        ,
        e.prototype.bindClient = function(e) {
            this.getStackTop().client = e,
            e && e.setupIntegrations && e.setupIntegrations()
        }
        ,
        e.prototype.pushScope = function() {
            var e = y.clone(this.getScope());
            return this.getStack().push({
                client: this.getClient(),
                scope: e
            }),
            e
        }
        ,
        e.prototype.popScope = function() {
            return !(this.getStack().length <= 1) && !!this.getStack().pop()
        }
        ,
        e.prototype.withScope = function(e) {
            var t = this.pushScope();
            try {
                e(t)
            } finally {
                this.popScope()
            }
        }
        ,
        e.prototype.getClient = function() {
            return this.getStackTop().client
        }
        ,
        e.prototype.getScope = function() {
            return this.getStackTop().scope
        }
        ,
        e.prototype.getStack = function() {
            return this._stack
        }
        ,
        e.prototype.getStackTop = function() {
            return this._stack[this._stack.length - 1]
        }
        ,
        e.prototype.captureException = function(e, t) {
            var n = this._lastEventId = Object(v.i)()
              , r = t;
            if (!t) {
                var i = void 0;
                try {
                    throw new Error("Sentry syntheticException")
                } catch (e) {
                    i = e
                }
                r = {
                    originalException: e,
                    syntheticException: i
                }
            }
            return this._invokeClient("captureException", e, Object(u.a)(Object(u.a)({}, r), {
                event_id: n
            })),
            n
        }
        ,
        e.prototype.captureMessage = function(e, t, n) {
            var r = this._lastEventId = Object(v.i)()
              , i = n;
            if (!n) {
                var o = void 0;
                try {
                    throw new Error(e)
                } catch (e) {
                    o = e
                }
                i = {
                    originalException: e,
                    syntheticException: o
                }
            }
            return this._invokeClient("captureMessage", e, t, Object(u.a)(Object(u.a)({}, i), {
                event_id: r
            })),
            r
        }
        ,
        e.prototype.captureEvent = function(e, t) {
            var n = this._lastEventId = Object(v.i)();
            return this._invokeClient("captureEvent", e, Object(u.a)(Object(u.a)({}, t), {
                event_id: n
            })),
            n
        }
        ,
        e.prototype.lastEventId = function() {
            return this._lastEventId
        }
        ,
        e.prototype.addBreadcrumb = function(e, t) {
            var n = this.getStackTop()
              , r = n.scope
              , i = n.client;
            if (r && i) {
                var o = i.getOptions && i.getOptions() || {}
                  , a = o.beforeBreadcrumb
                  , s = void 0 === a ? null : a
                  , c = o.maxBreadcrumbs
                  , f = void 0 === c ? 100 : c;
                if (!(f <= 0)) {
                    var l = Object(h.a)()
                      , p = Object(u.a)({
                        timestamp: l
                    }, e)
                      , d = s ? Object(v.c)((function() {
                        return s(p, t)
                    }
                    )) : p;
                    null !== d && r.addBreadcrumb(d, Math.min(f, 100))
                }
            }
        }
        ,
        e.prototype.setUser = function(e) {
            var t = this.getScope();
            t && t.setUser(e)
        }
        ,
        e.prototype.setTags = function(e) {
            var t = this.getScope();
            t && t.setTags(e)
        }
        ,
        e.prototype.setExtras = function(e) {
            var t = this.getScope();
            t && t.setExtras(e)
        }
        ,
        e.prototype.setTag = function(e, t) {
            var n = this.getScope();
            n && n.setTag(e, t)
        }
        ,
        e.prototype.setExtra = function(e, t) {
            var n = this.getScope();
            n && n.setExtra(e, t)
        }
        ,
        e.prototype.setContext = function(e, t) {
            var n = this.getScope();
            n && n.setContext(e, t)
        }
        ,
        e.prototype.configureScope = function(e) {
            var t = this.getStackTop()
              , n = t.scope
              , r = t.client;
            n && r && e(n)
        }
        ,
        e.prototype.run = function(e) {
            var t = C(this);
            try {
                e(this)
            } finally {
                C(t)
            }
        }
        ,
        e.prototype.getIntegration = function(e) {
            var t = this.getClient();
            if (!t)
                return null;
            try {
                return t.getIntegration(e)
            } catch (t) {
                return O.warn("Cannot retrieve integration " + e.id + " from the current Hub"),
                null
            }
        }
        ,
        e.prototype.startSpan = function(e) {
            return this._callExtensionMethod("startSpan", e)
        }
        ,
        e.prototype.startTransaction = function(e, t) {
            return this._callExtensionMethod("startTransaction", e, t)
        }
        ,
        e.prototype.traceHeaders = function() {
            return this._callExtensionMethod("traceHeaders")
        }
        ,
        e.prototype.captureSession = function(e) {
            if (void 0 === e && (e = !1),
            e)
                return this.endSession();
            this._sendSessionUpdate()
        }
        ,
        e.prototype.endSession = function() {
            var e, t, n, r, i;
            null === (n = null === (t = null === (e = this.getStackTop()) || void 0 === e ? void 0 : e.scope) || void 0 === t ? void 0 : t.getSession()) || void 0 === n || n.close(),
            this._sendSessionUpdate(),
            null === (i = null === (r = this.getStackTop()) || void 0 === r ? void 0 : r.scope) || void 0 === i || i.setSession()
        }
        ,
        e.prototype.startSession = function(e) {
            var t = this.getStackTop()
              , n = t.scope
              , r = t.client
              , i = r && r.getOptions() || {}
              , o = i.release
              , a = i.environment
              , s = new j(Object(u.a)(Object(u.a)({
                release: o,
                environment: a
            }, n && {
                user: n.getUser()
            }), e));
            if (n) {
                var c = n.getSession && n.getSession();
                c && c.status === p.Ok && c.update({
                    status: p.Exited
                }),
                this.endSession(),
                n.setSession(s)
            }
            return s
        }
        ,
        e.prototype._sendSessionUpdate = function() {
            var e = this.getStackTop()
              , t = e.scope
              , n = e.client;
            if (t) {
                var r = t.getSession && t.getSession();
                r && n && n.captureSession && n.captureSession(r)
            }
        }
        ,
        e.prototype._invokeClient = function(e) {
            for (var t, n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
            var i = this.getStackTop()
              , o = i.scope
              , a = i.client;
            a && a[e] && (t = a)[e].apply(t, Object(u.e)(n, [o]))
        }
        ,
        e.prototype._callExtensionMethod = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            var r = k()
              , i = r.__SENTRY__;
            if (i && i.extensions && "function" == typeof i.extensions[e])
                return i.extensions[e].apply(this, t);
            O.warn("Extension method " + e + " couldn't be found, doing nothing.")
        }
        ,
        e
    }();
    function k() {
        var e = Object(v.e)();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        },
        e
    }
    function C(e) {
        var t = k()
          , n = P(t);
        return I(t, e),
        n
    }
    function T() {
        var e = k();
        return R(e) && !P(e).isOlderThan(3) || I(e, new x),
        Object(E.b)() ? function(e) {
            var t, n, r;
            try {
                var i = null === (r = null === (n = null === (t = k().__SENTRY__) || void 0 === t ? void 0 : t.extensions) || void 0 === n ? void 0 : n.domain) || void 0 === r ? void 0 : r.active;
                if (!i)
                    return P(e);
                if (!R(i) || P(i).isOlderThan(3)) {
                    var o = P(e).getStackTop();
                    I(i, new x(o.client,y.clone(o.scope)))
                }
                return P(i)
            } catch (t) {
                return P(e)
            }
        }(e) : P(e)
    }
    function R(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }
    function P(e) {
        return e && e.__SENTRY__ && e.__SENTRY__.hub || (e.__SENTRY__ = e.__SENTRY__ || {},
        e.__SENTRY__.hub = new x),
        e.__SENTRY__.hub
    }
    function I(e, t) {
        return !!e && (e.__SENTRY__ = e.__SENTRY__ || {},
        e.__SENTRY__.hub = t,
        !0)
    }
    function A(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
        var r = T();
        if (r && r[e])
            return r[e].apply(r, Object(u.e)(t));
        throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
    }
    function L(e, t) {
        var n;
        try {
            throw new Error("Sentry syntheticException")
        } catch (e) {
            n = e
        }
        return A("captureException", e, {
            captureContext: t,
            originalException: e,
            syntheticException: n
        })
    }
    function N(e, t) {
        var n;
        try {
            throw new Error(e)
        } catch (e) {
            n = e
        }
        var r = "string" != typeof t ? {
            captureContext: t
        } : void 0;
        return A("captureMessage", e, "string" == typeof t ? t : void 0, Object(u.a)({
            originalException: e,
            syntheticException: n
        }, r))
    }
    function D(e) {
        return A("captureEvent", e)
    }
    function B(e) {
        A("configureScope", e)
    }
    function M(e) {
        A("addBreadcrumb", e)
    }
    function F(e, t) {
        A("setContext", e, t)
    }
    function U(e) {
        A("setExtras", e)
    }
    function q(e) {
        A("setTags", e)
    }
    function H(e, t) {
        A("setExtra", e, t)
    }
    function W(e, t) {
        A("setTag", e, t)
    }
    function G(e) {
        A("setUser", e)
    }
    function z(e) {
        A("withScope", e)
    }
    function Y(e, t) {
        return A("startTransaction", Object(u.a)({}, e), t)
    }
    var K = "6.3.0"
      , J = Object.setPrototypeOf || ({
        __proto__: []
    }instanceof Array ? function(e, t) {
        return e.__proto__ = t,
        e
    }
    : function(e, t) {
        for (var n in t)
            e.hasOwnProperty(n) || (e[n] = t[n]);
        return e
    }
    );
    var X = function(e) {
        function t(t) {
            var n = this.constructor
              , r = e.call(this, t) || this;
            return r.message = t,
            r.name = n.prototype.constructor.name,
            J(r, n.prototype),
            r
        }
        return Object(u.b)(t, e),
        t
    }(Error)
      , $ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/
      , V = function() {
        function e(e) {
            "string" == typeof e ? this._fromString(e) : this._fromComponents(e),
            this._validate()
        }
        return e.prototype.toString = function(e) {
            void 0 === e && (e = !1);
            var t = this
              , n = t.host
              , r = t.path
              , i = t.pass
              , o = t.port
              , a = t.projectId;
            return t.protocol + "://" + t.publicKey + (e && i ? ":" + i : "") + "@" + n + (o ? ":" + o : "") + "/" + (r ? r + "/" : r) + a
        }
        ,
        e.prototype._fromString = function(e) {
            var t = $.exec(e);
            if (!t)
                throw new X("Invalid Dsn");
            var n = Object(u.c)(t.slice(1), 6)
              , r = n[0]
              , i = n[1]
              , o = n[2]
              , a = void 0 === o ? "" : o
              , s = n[3]
              , c = n[4]
              , f = void 0 === c ? "" : c
              , l = ""
              , h = n[5]
              , p = h.split("/");
            if (p.length > 1 && (l = p.slice(0, -1).join("/"),
            h = p.pop()),
            h) {
                var d = h.match(/^\d+/);
                d && (h = d[0])
            }
            this._fromComponents({
                host: s,
                pass: a,
                path: l,
                projectId: h,
                port: f,
                protocol: r,
                publicKey: i
            })
        }
        ,
        e.prototype._fromComponents = function(e) {
            "user"in e && !("publicKey"in e) && (e.publicKey = e.user),
            this.user = e.publicKey || "",
            this.protocol = e.protocol,
            this.publicKey = e.publicKey || "",
            this.pass = e.pass || "",
            this.host = e.host,
            this.port = e.port || "",
            this.path = e.path || "",
            this.projectId = e.projectId
        }
        ,
        e.prototype._validate = function() {
            var e = this;
            if (["protocol", "publicKey", "host", "projectId"].forEach((function(t) {
                if (!e[t])
                    throw new X("Invalid Dsn: " + t + " missing")
            }
            )),
            !this.projectId.match(/^\d+$/))
                throw new X("Invalid Dsn: Invalid projectId " + this.projectId);
            if ("http" !== this.protocol && "https" !== this.protocol)
                throw new X("Invalid Dsn: Invalid protocol " + this.protocol);
            if (this.port && isNaN(parseInt(this.port, 10)))
                throw new X("Invalid Dsn: Invalid port " + this.port)
        }
        ,
        e
    }()
      , Z = n(18)
      , Q = [];
    function ee(e) {
        var t = {};
        return function(e) {
            var t = e.defaultIntegrations && Object(u.e)(e.defaultIntegrations) || []
              , n = e.integrations
              , r = [];
            if (Array.isArray(n)) {
                var i = n.map((function(e) {
                    return e.name
                }
                ))
                  , o = [];
                t.forEach((function(e) {
                    -1 === i.indexOf(e.name) && -1 === o.indexOf(e.name) && (r.push(e),
                    o.push(e.name))
                }
                )),
                n.forEach((function(e) {
                    -1 === o.indexOf(e.name) && (r.push(e),
                    o.push(e.name))
                }
                ))
            } else
                "function" == typeof n ? (r = n(t),
                r = Array.isArray(r) ? r : [r]) : r = Object(u.e)(t);
            var a = r.map((function(e) {
                return e.name
            }
            ));
            return -1 !== a.indexOf("Debug") && r.push.apply(r, Object(u.e)(r.splice(a.indexOf("Debug"), 1))),
            r
        }(e).forEach((function(e) {
            t[e.name] = e,
            function(e) {
                -1 === Q.indexOf(e.name) && (e.setupOnce(m, T),
                Q.push(e.name),
                O.log("Integration installed: " + e.name))
            }(e)
        }
        )),
        t
    }
    var te = function() {
        function e(e, t) {
            this._integrations = {},
            this._processing = 0,
            this._backend = new e(t),
            this._options = t,
            t.dsn && (this._dsn = new V(t.dsn))
        }
        return e.prototype.captureException = function(e, t, n) {
            var r = this
              , i = t && t.event_id;
            return this._process(this._getBackend().eventFromException(e, t).then((function(e) {
                return r._captureEvent(e, t, n)
            }
            )).then((function(e) {
                i = e
            }
            ))),
            i
        }
        ,
        e.prototype.captureMessage = function(e, t, n, r) {
            var i = this
              , o = n && n.event_id
              , a = Object(l.i)(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n);
            return this._process(a.then((function(e) {
                return i._captureEvent(e, n, r)
            }
            )).then((function(e) {
                o = e
            }
            ))),
            o
        }
        ,
        e.prototype.captureEvent = function(e, t, n) {
            var r = t && t.event_id;
            return this._process(this._captureEvent(e, t, n).then((function(e) {
                r = e
            }
            ))),
            r
        }
        ,
        e.prototype.captureSession = function(e) {
            "string" != typeof e.release ? O.warn("Discarded session because of missing or non-string release") : (this._sendSession(e),
            e.update({
                init: !1
            }))
        }
        ,
        e.prototype.getDsn = function() {
            return this._dsn
        }
        ,
        e.prototype.getOptions = function() {
            return this._options
        }
        ,
        e.prototype.flush = function(e) {
            var t = this;
            return this._isClientProcessing(e).then((function(n) {
                return t._getBackend().getTransport().close(e).then((function(e) {
                    return n && e
                }
                ))
            }
            ))
        }
        ,
        e.prototype.close = function(e) {
            var t = this;
            return this.flush(e).then((function(e) {
                return t.getOptions().enabled = !1,
                e
            }
            ))
        }
        ,
        e.prototype.setupIntegrations = function() {
            this._isEnabled() && (this._integrations = ee(this._options))
        }
        ,
        e.prototype.getIntegration = function(e) {
            try {
                return this._integrations[e.id] || null
            } catch (t) {
                return O.warn("Cannot retrieve integration " + e.id + " from the current Client"),
                null
            }
        }
        ,
        e.prototype._updateSessionFromEvent = function(e, t) {
            var n, r, i, o = !1, a = !1, s = t.exception && t.exception.values;
            if (s) {
                a = !0;
                try {
                    for (var c = Object(u.f)(s), f = c.next(); !f.done; f = c.next()) {
                        var l = f.value.mechanism;
                        if (l && !1 === l.handled) {
                            o = !0;
                            break
                        }
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        f && !f.done && (r = c.return) && r.call(c)
                    } finally {
                        if (n)
                            throw n.error
                    }
                }
            }
            var h = t.user;
            if (!e.userAgent) {
                var d = t.request ? t.request.headers : {};
                for (var v in d)
                    if ("user-agent" === v.toLowerCase()) {
                        i = d[v];
                        break
                    }
            }
            e.update(Object(u.a)(Object(u.a)({}, o && {
                status: p.Crashed
            }), {
                user: h,
                userAgent: i,
                errors: e.errors + Number(a || o)
            })),
            this.captureSession(e)
        }
        ,
        e.prototype._sendSession = function(e) {
            this._getBackend().sendSession(e)
        }
        ,
        e.prototype._isClientProcessing = function(e) {
            var t = this;
            return new d((function(n) {
                var r = 0
                  , i = setInterval((function() {
                    0 == t._processing ? (clearInterval(i),
                    n(!0)) : (r += 1,
                    e && r >= e && (clearInterval(i),
                    n(!1)))
                }
                ), 1)
            }
            ))
        }
        ,
        e.prototype._getBackend = function() {
            return this._backend
        }
        ,
        e.prototype._isEnabled = function() {
            return !1 !== this.getOptions().enabled && void 0 !== this._dsn
        }
        ,
        e.prototype._prepareEvent = function(e, t, n) {
            var r = this
              , i = this.getOptions().normalizeDepth
              , o = void 0 === i ? 3 : i
              , a = Object(u.a)(Object(u.a)({}, e), {
                event_id: e.event_id || (n && n.event_id ? n.event_id : Object(v.i)()),
                timestamp: e.timestamp || Object(h.a)()
            });
            this._applyClientOptions(a),
            this._applyIntegrationsMetadata(a);
            var s = t;
            n && n.captureContext && (s = y.clone(s).update(n.captureContext));
            var c = d.resolve(a);
            return s && (c = s.applyToEvent(a, n)),
            c.then((function(e) {
                return "number" == typeof o && o > 0 ? r._normalizeEvent(e, o) : e
            }
            ))
        }
        ,
        e.prototype._normalizeEvent = function(e, t) {
            if (!e)
                return null;
            var n = Object(u.a)(Object(u.a)(Object(u.a)(Object(u.a)(Object(u.a)({}, e), e.breadcrumbs && {
                breadcrumbs: e.breadcrumbs.map((function(e) {
                    return Object(u.a)(Object(u.a)({}, e), e.data && {
                        data: Object(S.d)(e.data, t)
                    })
                }
                ))
            }), e.user && {
                user: Object(S.d)(e.user, t)
            }), e.contexts && {
                contexts: Object(S.d)(e.contexts, t)
            }), e.extra && {
                extra: Object(S.d)(e.extra, t)
            });
            return e.contexts && e.contexts.trace && (n.contexts.trace = e.contexts.trace),
            n
        }
        ,
        e.prototype._applyClientOptions = function(e) {
            var t = this.getOptions()
              , n = t.environment
              , r = t.release
              , i = t.dist
              , o = t.maxValueLength
              , a = void 0 === o ? 250 : o;
            "environment"in e || (e.environment = "environment"in t ? n : "production"),
            void 0 === e.release && void 0 !== r && (e.release = r),
            void 0 === e.dist && void 0 !== i && (e.dist = i),
            e.message && (e.message = Object(Z.d)(e.message, a));
            var s = e.exception && e.exception.values && e.exception.values[0];
            s && s.value && (s.value = Object(Z.d)(s.value, a));
            var c = e.request;
            c && c.url && (c.url = Object(Z.d)(c.url, a))
        }
        ,
        e.prototype._applyIntegrationsMetadata = function(e) {
            var t = e.sdk
              , n = Object.keys(this._integrations);
            t && n.length > 0 && (t.integrations = n)
        }
        ,
        e.prototype._sendEvent = function(e) {
            this._getBackend().sendEvent(e)
        }
        ,
        e.prototype._captureEvent = function(e, t, n) {
            return this._processEvent(e, t, n).then((function(e) {
                return e.event_id
            }
            ), (function(e) {
                O.error(e)
            }
            ))
        }
        ,
        e.prototype._processEvent = function(e, t, n) {
            var r = this
              , i = this.getOptions()
              , o = i.beforeSend
              , a = i.sampleRate;
            if (!this._isEnabled())
                return d.reject(new X("SDK not enabled, will not send event."));
            var s = "transaction" === e.type;
            return !s && "number" == typeof a && Math.random() > a ? d.reject(new X("Discarding event because it's not included in the random sample (sampling rate = " + a + ")")) : this._prepareEvent(e, n, t).then((function(e) {
                if (null === e)
                    throw new X("An event processor returned null, will not send event.");
                if (t && t.data && !0 === t.data.__sentry__ || s || !o)
                    return e;
                var n = o(e, t);
                if (void 0 === n)
                    throw new X("`beforeSend` method has to return `null` or a valid event.");
                return Object(l.m)(n) ? n.then((function(e) {
                    return e
                }
                ), (function(e) {
                    throw new X("beforeSend rejected with " + e)
                }
                )) : n
            }
            )).then((function(e) {
                if (null === e)
                    throw new X("`beforeSend` returned `null`, will not send event.");
                var t = n && n.getSession && n.getSession();
                return !s && t && r._updateSessionFromEvent(t, e),
                r._sendEvent(e),
                e
            }
            )).then(null, (function(e) {
                if (e instanceof X)
                    throw e;
                throw r.captureException(e, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: e
                }),
                new X("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
            }
            ))
        }
        ,
        e.prototype._process = function(e) {
            var t = this;
            this._processing += 1,
            e.then((function(e) {
                return t._processing -= 1,
                e
            }
            ), (function(e) {
                return t._processing -= 1,
                e
            }
            ))
        }
        ,
        e
    }()
      , ne = function() {
        function e() {}
        return e.prototype.sendEvent = function(e) {
            return d.resolve({
                reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                status: c.Skipped
            })
        }
        ,
        e.prototype.close = function(e) {
            return d.resolve(!0)
        }
        ,
        e
    }()
      , re = function() {
        function e(e) {
            this._options = e,
            this._options.dsn || O.warn("No DSN provided, backend will not do anything."),
            this._transport = this._setupTransport()
        }
        return e.prototype.eventFromException = function(e, t) {
            throw new X("Backend has to implement `eventFromException` method")
        }
        ,
        e.prototype.eventFromMessage = function(e, t, n) {
            throw new X("Backend has to implement `eventFromMessage` method")
        }
        ,
        e.prototype.sendEvent = function(e) {
            this._transport.sendEvent(e).then(null, (function(e) {
                O.error("Error while sending event: " + e)
            }
            ))
        }
        ,
        e.prototype.sendSession = function(e) {
            this._transport.sendSession ? this._transport.sendSession(e).then(null, (function(e) {
                O.error("Error while sending session: " + e)
            }
            )) : O.warn("Dropping session because custom transport doesn't implement sendSession")
        }
        ,
        e.prototype.getTransport = function() {
            return this._transport
        }
        ,
        e.prototype._setupTransport = function() {
            return new ne
        }
        ,
        e
    }();
    function ie() {
        if (!("fetch"in Object(v.e)()))
            return !1;
        try {
            return new Headers,
            new Request(""),
            new Response,
            !0
        } catch (e) {
            return !1
        }
    }
    function oe(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }
    function ae() {
        if (!ie())
            return !1;
        try {
            return new Request("_",{
                referrerPolicy: "origin"
            }),
            !0
        } catch (e) {
            return !1
        }
    }
    var se = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
      , ce = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
      , ue = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
      , fe = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
      , le = /\((\S*)(?::(\d+))(?::(\d+))\)/
      , he = /Minified React error #\d+;/i;
    function pe(e) {
        var t = null
          , n = 0;
        e && ("number" == typeof e.framesToPop ? n = e.framesToPop : he.test(e.message) && (n = 1));
        try {
            if (t = function(e) {
                if (!e || !e.stacktrace)
                    return null;
                for (var t, n = e.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, o = n.split("\n"), a = [], s = 0; s < o.length; s += 2) {
                    var c = null;
                    (t = r.exec(o[s])) ? c = {
                        url: t[2],
                        func: t[3],
                        args: [],
                        line: +t[1],
                        column: null
                    } : (t = i.exec(o[s])) && (c = {
                        url: t[6],
                        func: t[3] || t[4],
                        args: t[5] ? t[5].split(",") : [],
                        line: +t[1],
                        column: +t[2]
                    }),
                    c && (!c.func && c.line && (c.func = "?"),
                    a.push(c))
                }
                if (!a.length)
                    return null;
                return {
                    message: ve(e),
                    name: e.name,
                    stack: a
                }
            }(e))
                return de(t, n)
        } catch (e) {}
        try {
            if (t = function(e) {
                if (!e || !e.stack)
                    return null;
                for (var t, n, r, i = [], o = e.stack.split("\n"), a = 0; a < o.length; ++a) {
                    if (n = se.exec(o[a])) {
                        var s = n[2] && 0 === n[2].indexOf("native");
                        n[2] && 0 === n[2].indexOf("eval") && (t = le.exec(n[2])) && (n[2] = t[1],
                        n[3] = t[2],
                        n[4] = t[3]);
                        var c = n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2]
                          , u = n[1] || "?"
                          , f = -1 !== u.indexOf("safari-extension")
                          , l = -1 !== u.indexOf("safari-web-extension");
                        (f || l) && (u = -1 !== u.indexOf("@") ? u.split("@")[0] : "?",
                        c = f ? "safari-extension:" + c : "safari-web-extension:" + c),
                        r = {
                            url: c,
                            func: u,
                            args: s ? [n[2]] : [],
                            line: n[3] ? +n[3] : null,
                            column: n[4] ? +n[4] : null
                        }
                    } else if (n = ue.exec(o[a]))
                        r = {
                            url: n[2],
                            func: n[1] || "?",
                            args: [],
                            line: +n[3],
                            column: n[4] ? +n[4] : null
                        };
                    else {
                        if (!(n = ce.exec(o[a])))
                            continue;
                        n[3] && n[3].indexOf(" > eval") > -1 && (t = fe.exec(n[3])) ? (n[1] = n[1] || "eval",
                        n[3] = t[1],
                        n[4] = t[2],
                        n[5] = "") : 0 !== a || n[5] || void 0 === e.columnNumber || (i[0].column = e.columnNumber + 1),
                        r = {
                            url: n[3],
                            func: n[1] || "?",
                            args: n[2] ? n[2].split(",") : [],
                            line: n[4] ? +n[4] : null,
                            column: n[5] ? +n[5] : null
                        }
                    }
                    !r.func && r.line && (r.func = "?"),
                    i.push(r)
                }
                if (!i.length)
                    return null;
                return {
                    message: ve(e),
                    name: e.name,
                    stack: i
                }
            }(e))
                return de(t, n)
        } catch (e) {}
        return {
            message: ve(e),
            name: e && e.name,
            stack: [],
            failed: !0
        }
    }
    function de(e, t) {
        try {
            return Object(u.a)(Object(u.a)({}, e), {
                stack: e.stack.slice(t)
            })
        } catch (t) {
            return e
        }
    }
    function ve(e) {
        var t = e && e.message;
        return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
    }
    function ye(e) {
        var t = me(e.stack)
          , n = {
            type: e.name,
            value: e.message
        };
        return t && t.length && (n.stacktrace = {
            frames: t
        }),
        void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"),
        n
    }
    function ge(e) {
        return {
            exception: {
                values: [ye(e)]
            }
        }
    }
    function me(e) {
        if (!e || !e.length)
            return [];
        var t = e
          , n = t[0].func || ""
          , r = t[t.length - 1].func || "";
        return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (t = t.slice(1)),
        -1 !== r.indexOf("sentryWrapped") && (t = t.slice(0, -1)),
        t.slice(0, 50).map((function(e) {
            return {
                colno: null === e.column ? void 0 : e.column,
                filename: e.url || t[0].url,
                function: e.func || "?",
                in_app: !0,
                lineno: null === e.line ? void 0 : e.line
            }
        }
        )).reverse()
    }
    function be(e, t, n) {
        var r = we(t, n && n.syntheticException || void 0, {
            attachStacktrace: e.attachStacktrace
        });
        return Object(v.a)(r, {
            handled: !0,
            type: "generic"
        }),
        r.level = s.Error,
        n && n.event_id && (r.event_id = n.event_id),
        d.resolve(r)
    }
    function _e(e, t, n, r) {
        void 0 === n && (n = s.Info);
        var i = Oe(t, r && r.syntheticException || void 0, {
            attachStacktrace: e.attachStacktrace
        });
        return i.level = n,
        r && r.event_id && (i.event_id = r.event_id),
        d.resolve(i)
    }
    function we(e, t, n) {
        var r;
        if (void 0 === n && (n = {}),
        Object(l.e)(e) && e.error)
            return r = ge(pe(e = e.error));
        if (Object(l.a)(e) || Object(l.b)(e)) {
            var i = e
              , o = i.name || (Object(l.a)(i) ? "DOMError" : "DOMException")
              , a = i.message ? o + ": " + i.message : o;
            return r = Oe(a, t, n),
            Object(v.b)(r, a),
            "code"in i && (r.tags = Object(u.a)(Object(u.a)({}, r.tags), {
                "DOMException.code": "" + i.code
            })),
            r
        }
        return Object(l.d)(e) ? r = ge(pe(e)) : Object(l.h)(e) || Object(l.f)(e) ? (r = function(e, t, n) {
            var r = {
                exception: {
                    values: [{
                        type: Object(l.f)(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                        value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Object(S.b)(e)
                    }]
                },
                extra: {
                    __serialized__: Object(S.e)(e)
                }
            };
            if (t) {
                var i = me(pe(t).stack);
                r.stacktrace = {
                    frames: i
                }
            }
            return r
        }(e, t, n.rejection),
        Object(v.a)(r, {
            synthetic: !0
        }),
        r) : (r = Oe(e, t, n),
        Object(v.b)(r, "" + e, void 0),
        Object(v.a)(r, {
            synthetic: !0
        }),
        r)
    }
    function Oe(e, t, n) {
        void 0 === n && (n = {});
        var r = {
            message: e
        };
        if (n.attachStacktrace && t) {
            var i = me(pe(t).stack);
            r.stacktrace = {
                frames: i
            }
        }
        return r
    }
    function Ee(e) {
        if (e.metadata && e.metadata.sdk) {
            var t = e.metadata.sdk;
            return {
                name: t.name,
                version: t.version
            }
        }
    }
    function Se(e, t) {
        return t ? (e.sdk = e.sdk || {
            name: t.name,
            version: t.version
        },
        e.sdk.name = e.sdk.name || t.name,
        e.sdk.version = e.sdk.version || t.version,
        e.sdk.integrations = Object(u.e)(e.sdk.integrations || [], t.integrations || []),
        e.sdk.packages = Object(u.e)(e.sdk.packages || [], t.packages || []),
        e) : e
    }
    function je(e, t) {
        var n = Ee(t);
        return {
            body: JSON.stringify(Object(u.a)({
                sent_at: (new Date).toISOString()
            }, n && {
                sdk: n
            })) + "\n" + JSON.stringify({
                type: "session"
            }) + "\n" + JSON.stringify(e),
            type: "session",
            url: t.getEnvelopeEndpointWithUrlEncodedAuth()
        }
    }
    function xe(e, t) {
        var n = Ee(t)
          , r = e.type || "event"
          , i = "transaction" === r
          , o = e.debug_meta || {}
          , a = o.transactionSampling
          , s = Object(u.d)(o, ["transactionSampling"])
          , c = a || {}
          , f = c.method
          , l = c.rate;
        0 === Object.keys(s).length ? delete e.debug_meta : e.debug_meta = s;
        var h = {
            body: JSON.stringify(n ? Se(e, t.metadata.sdk) : e),
            type: r,
            url: i ? t.getEnvelopeEndpointWithUrlEncodedAuth() : t.getStoreEndpointWithUrlEncodedAuth()
        };
        if (i) {
            var p = JSON.stringify(Object(u.a)({
                event_id: e.event_id,
                sent_at: (new Date).toISOString()
            }, n && {
                sdk: n
            })) + "\n" + JSON.stringify({
                type: e.type,
                sample_rates: [{
                    id: f,
                    rate: l
                }]
            }) + "\n" + h.body;
            h.body = p
        }
        return h
    }
    var ke = function() {
        function e(e, t) {
            void 0 === t && (t = {}),
            this.dsn = e,
            this._dsnObject = new V(e),
            this.metadata = t
        }
        return e.prototype.getDsn = function() {
            return this._dsnObject
        }
        ,
        e.prototype.getBaseApiEndpoint = function() {
            var e = this._dsnObject
              , t = e.protocol ? e.protocol + ":" : ""
              , n = e.port ? ":" + e.port : "";
            return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/"
        }
        ,
        e.prototype.getStoreEndpoint = function() {
            return this._getIngestEndpoint("store")
        }
        ,
        e.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
            return this.getStoreEndpoint() + "?" + this._encodedAuth()
        }
        ,
        e.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
            return this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
        }
        ,
        e.prototype.getStoreEndpointPath = function() {
            var e = this._dsnObject;
            return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
        }
        ,
        e.prototype.getRequestHeaders = function(e, t) {
            var n = this._dsnObject
              , r = ["Sentry sentry_version=7"];
            return r.push("sentry_client=" + e + "/" + t),
            r.push("sentry_key=" + n.publicKey),
            n.pass && r.push("sentry_secret=" + n.pass),
            {
                "Content-Type": "application/json",
                "X-Sentry-Auth": r.join(", ")
            }
        }
        ,
        e.prototype.getReportDialogEndpoint = function(e) {
            void 0 === e && (e = {});
            var t = this._dsnObject
              , n = this.getBaseApiEndpoint() + "embed/error-page/"
              , r = [];
            for (var i in r.push("dsn=" + t.toString()),
            e)
                if ("dsn" !== i)
                    if ("user" === i) {
                        if (!e.user)
                            continue;
                        e.user.name && r.push("name=" + encodeURIComponent(e.user.name)),
                        e.user.email && r.push("email=" + encodeURIComponent(e.user.email))
                    } else
                        r.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
            return r.length ? n + "?" + r.join("&") : n
        }
        ,
        e.prototype._getEnvelopeEndpoint = function() {
            return this._getIngestEndpoint("envelope")
        }
        ,
        e.prototype._getIngestEndpoint = function(e) {
            return "" + this.getBaseApiEndpoint() + this._dsnObject.projectId + "/" + e + "/"
        }
        ,
        e.prototype._encodedAuth = function() {
            var e = {
                sentry_key: this._dsnObject.publicKey,
                sentry_version: "7"
            };
            return Object(S.f)(e)
        }
        ,
        e
    }()
      , Ce = function() {
        function e(e) {
            this._limit = e,
            this._buffer = []
        }
        return e.prototype.isReady = function() {
            return void 0 === this._limit || this.length() < this._limit
        }
        ,
        e.prototype.add = function(e) {
            var t = this;
            return this.isReady() ? (-1 === this._buffer.indexOf(e) && this._buffer.push(e),
            e.then((function() {
                return t.remove(e)
            }
            )).then(null, (function() {
                return t.remove(e).then(null, (function() {}
                ))
            }
            )),
            e) : d.reject(new X("Not adding Promise due to buffer limit reached."))
        }
        ,
        e.prototype.remove = function(e) {
            return this._buffer.splice(this._buffer.indexOf(e), 1)[0]
        }
        ,
        e.prototype.length = function() {
            return this._buffer.length
        }
        ,
        e.prototype.drain = function(e) {
            var t = this;
            return new d((function(n) {
                var r = setTimeout((function() {
                    e && e > 0 && n(!1)
                }
                ), e);
                d.all(t._buffer).then((function() {
                    clearTimeout(r),
                    n(!0)
                }
                )).then(null, (function() {
                    n(!0)
                }
                ))
            }
            ))
        }
        ,
        e
    }()
      , Te = {
        event: "error",
        transaction: "transaction",
        session: "session"
    }
      , Re = function() {
        function e(e) {
            this.options = e,
            this._buffer = new Ce(30),
            this._rateLimits = {},
            this._api = new ke(e.dsn,e._metadata),
            this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
        }
        return e.prototype.sendEvent = function(e) {
            throw new X("Transport Class has to implement `sendEvent` method")
        }
        ,
        e.prototype.close = function(e) {
            return this._buffer.drain(e)
        }
        ,
        e.prototype._handleResponse = function(e) {
            var t = e.requestType
              , n = e.response
              , r = e.headers
              , i = e.resolve
              , o = e.reject
              , a = c.fromHttpCode(n.status);
            this._handleRateLimit(r) && O.warn("Too many requests, backing off until: " + this._disabledUntil(t)),
            a !== c.Success ? o(n) : i({
                status: a
            })
        }
        ,
        e.prototype._disabledUntil = function(e) {
            var t = Te[e];
            return this._rateLimits[t] || this._rateLimits.all
        }
        ,
        e.prototype._isRateLimited = function(e) {
            return this._disabledUntil(e) > new Date(Date.now())
        }
        ,
        e.prototype._handleRateLimit = function(e) {
            var t, n, r, i, o = Date.now(), a = e["x-sentry-rate-limits"], s = e["retry-after"];
            if (a) {
                try {
                    for (var c = Object(u.f)(a.trim().split(",")), f = c.next(); !f.done; f = c.next()) {
                        var l = f.value.split(":", 2)
                          , h = parseInt(l[0], 10)
                          , p = 1e3 * (isNaN(h) ? 60 : h);
                        try {
                            for (var d = (r = void 0,
                            Object(u.f)(l[1].split(";"))), y = d.next(); !y.done; y = d.next()) {
                                var g = y.value;
                                this._rateLimits[g || "all"] = new Date(o + p)
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                y && !y.done && (i = d.return) && i.call(d)
                            } finally {
                                if (r)
                                    throw r.error
                            }
                        }
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        f && !f.done && (n = c.return) && n.call(c)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
                return !0
            }
            return !!s && (this._rateLimits.all = new Date(o + Object(v.g)(o, s)),
            !0)
        }
        ,
        e
    }();
    var Pe = function(e) {
        function t(t, n) {
            void 0 === n && (n = function() {
                var e, t, n = Object(v.e)();
                if (oe(n.fetch))
                    return n.fetch.bind(n);
                var r = n.document
                  , i = n.fetch;
                if ("function" == typeof (null === (e = r) || void 0 === e ? void 0 : e.createElement))
                    try {
                        var o = r.createElement("iframe");
                        o.hidden = !0,
                        r.head.appendChild(o),
                        (null === (t = o.contentWindow) || void 0 === t ? void 0 : t.fetch) && (i = o.contentWindow.fetch),
                        r.head.removeChild(o)
                    } catch (e) {
                        O.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                    }
                return i.bind(n)
            }());
            var r = e.call(this, t) || this;
            return r._fetch = n,
            r
        }
        return Object(u.b)(t, e),
        t.prototype.sendEvent = function(e) {
            return this._sendRequest(xe(e, this._api), e)
        }
        ,
        t.prototype.sendSession = function(e) {
            return this._sendRequest(je(e, this._api), e)
        }
        ,
        t.prototype._sendRequest = function(e, t) {
            var n = this;
            if (this._isRateLimited(e.type))
                return Promise.reject({
                    event: t,
                    type: e.type,
                    reason: "Transport locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                    status: 429
                });
            var r = {
                body: e.body,
                method: "POST",
                referrerPolicy: ae() ? "origin" : ""
            };
            return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters),
            void 0 !== this.options.headers && (r.headers = this.options.headers),
            this._buffer.add(new d((function(t, i) {
                n._fetch(e.url, r).then((function(r) {
                    var o = {
                        "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": r.headers.get("Retry-After")
                    };
                    n._handleResponse({
                        requestType: e.type,
                        response: r,
                        headers: o,
                        resolve: t,
                        reject: i
                    })
                }
                )).catch(i)
            }
            )))
        }
        ,
        t
    }(Re)
      , Ie = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Object(u.b)(t, e),
        t.prototype.sendEvent = function(e) {
            return this._sendRequest(xe(e, this._api), e)
        }
        ,
        t.prototype.sendSession = function(e) {
            return this._sendRequest(je(e, this._api), e)
        }
        ,
        t.prototype._sendRequest = function(e, t) {
            var n = this;
            return this._isRateLimited(e.type) ? Promise.reject({
                event: t,
                type: e.type,
                reason: "Transport locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                status: 429
            }) : this._buffer.add(new d((function(t, r) {
                var i = new XMLHttpRequest;
                for (var o in i.onreadystatechange = function() {
                    if (4 === i.readyState) {
                        var o = {
                            "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                            "retry-after": i.getResponseHeader("Retry-After")
                        };
                        n._handleResponse({
                            requestType: e.type,
                            response: i,
                            headers: o,
                            resolve: t,
                            reject: r
                        })
                    }
                }
                ,
                i.open("POST", e.url),
                n.options.headers)
                    n.options.headers.hasOwnProperty(o) && i.setRequestHeader(o, n.options.headers[o]);
                i.send(e.body)
            }
            )))
        }
        ,
        t
    }(Re)
      , Ae = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Object(u.b)(t, e),
        t.prototype.eventFromException = function(e, t) {
            return be(this._options, e, t)
        }
        ,
        t.prototype.eventFromMessage = function(e, t, n) {
            return void 0 === t && (t = s.Info),
            _e(this._options, e, t, n)
        }
        ,
        t.prototype._setupTransport = function() {
            if (!this._options.dsn)
                return e.prototype._setupTransport.call(this);
            var t = Object(u.a)(Object(u.a)({}, this._options.transportOptions), {
                dsn: this._options.dsn,
                _metadata: this._options._metadata
            });
            return this._options.transport ? new this._options.transport(t) : ie() ? new Pe(t) : new Ie(t)
        }
        ,
        t
    }(re)
      , Le = 0;
    function Ne() {
        return Le > 0
    }
    function De() {
        Le += 1,
        setTimeout((function() {
            Le -= 1
        }
        ))
    }
    function Be(e, t, n) {
        if (void 0 === t && (t = {}),
        "function" != typeof e)
            return e;
        try {
            if (e.__sentry__)
                return e;
            if (e.__sentry_wrapped__)
                return e.__sentry_wrapped__
        } catch (t) {
            return e
        }
        var r = function() {
            var r = Array.prototype.slice.call(arguments);
            try {
                n && "function" == typeof n && n.apply(this, arguments);
                var i = r.map((function(e) {
                    return Be(e, t)
                }
                ));
                return e.handleEvent ? e.handleEvent.apply(this, i) : e.apply(this, i)
            } catch (e) {
                throw De(),
                z((function(n) {
                    n.addEventProcessor((function(e) {
                        var n = Object(u.a)({}, e);
                        return t.mechanism && (Object(v.b)(n, void 0, void 0),
                        Object(v.a)(n, t.mechanism)),
                        n.extra = Object(u.a)(Object(u.a)({}, n.extra), {
                            arguments: r
                        }),
                        n
                    }
                    )),
                    L(e)
                }
                )),
                e
            }
        };
        try {
            for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i])
        } catch (e) {}
        e.prototype = e.prototype || {},
        r.prototype = e.prototype,
        Object.defineProperty(e, "__sentry_wrapped__", {
            enumerable: !1,
            value: r
        }),
        Object.defineProperties(r, {
            __sentry__: {
                enumerable: !1,
                value: !0
            },
            __sentry_original__: {
                enumerable: !1,
                value: e
            }
        });
        try {
            Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                get: function() {
                    return e.name
                }
            })
        } catch (e) {}
        return r
    }
    function Me(e) {
        if (void 0 === e && (e = {}),
        e.eventId)
            if (e.dsn) {
                var t = document.createElement("script");
                t.async = !0,
                t.src = new ke(e.dsn).getReportDialogEndpoint(e),
                e.onLoad && (t.onload = e.onLoad),
                (document.head || document.body).appendChild(t)
            } else
                O.error("Missing dsn option in showReportDialog call");
        else
            O.error("Missing eventId option in showReportDialog call")
    }
    var Fe, Ue = n(28), qe = Object(v.e)(), He = {}, We = {};
    function Ge(e) {
        if (!We[e])
            switch (We[e] = !0,
            e) {
            case "console":
                !function() {
                    if (!("console"in qe))
                        return;
                    ["debug", "info", "warn", "error", "log", "assert"].forEach((function(e) {
                        e in qe.console && Object(S.c)(qe.console, e, (function(t) {
                            return function() {
                                for (var n = [], r = 0; r < arguments.length; r++)
                                    n[r] = arguments[r];
                                Ye("console", {
                                    args: n,
                                    level: e
                                }),
                                t && Function.prototype.apply.call(t, qe.console, n)
                            }
                        }
                        ))
                    }
                    ))
                }();
                break;
            case "dom":
                !function() {
                    if (!("document"in qe))
                        return;
                    var e = Ye.bind(null, "dom")
                      , t = Ve(e, !0);
                    qe.document.addEventListener("click", t, !1),
                    qe.document.addEventListener("keypress", t, !1),
                    ["EventTarget", "Node"].forEach((function(t) {
                        var n = qe[t] && qe[t].prototype;
                        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Object(S.c)(n, "addEventListener", (function(t) {
                            return function(n, r, i) {
                                if ("click" === n || "keypress" == n)
                                    try {
                                        var o = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}
                                          , a = o[n] = o[n] || {
                                            refCount: 0
                                        };
                                        if (!a.handler) {
                                            var s = Ve(e);
                                            a.handler = s,
                                            t.call(this, n, s, i)
                                        }
                                        a.refCount += 1
                                    } catch (e) {}
                                return t.call(this, n, r, i)
                            }
                        }
                        )),
                        Object(S.c)(n, "removeEventListener", (function(e) {
                            return function(t, n, r) {
                                if ("click" === t || "keypress" == t)
                                    try {
                                        var i = this.__sentry_instrumentation_handlers__ || {}
                                          , o = i[t];
                                        o && (o.refCount -= 1,
                                        o.refCount <= 0 && (e.call(this, t, o.handler, r),
                                        o.handler = void 0,
                                        delete i[t]),
                                        0 === Object.keys(i).length && delete this.__sentry_instrumentation_handlers__)
                                    } catch (e) {}
                                return e.call(this, t, n, r)
                            }
                        }
                        )))
                    }
                    ))
                }();
                break;
            case "xhr":
                !function() {
                    if (!("XMLHttpRequest"in qe))
                        return;
                    var e = []
                      , t = []
                      , n = XMLHttpRequest.prototype;
                    Object(S.c)(n, "open", (function(n) {
                        return function() {
                            for (var r = [], i = 0; i < arguments.length; i++)
                                r[i] = arguments[i];
                            var o = this
                              , a = r[1];
                            o.__sentry_xhr__ = {
                                method: Object(l.k)(r[0]) ? r[0].toUpperCase() : r[0],
                                url: r[1]
                            },
                            Object(l.k)(a) && "POST" === o.__sentry_xhr__.method && a.match(/sentry_key/) && (o.__sentry_own_request__ = !0);
                            var s = function() {
                                if (4 === o.readyState) {
                                    try {
                                        o.__sentry_xhr__ && (o.__sentry_xhr__.status_code = o.status)
                                    } catch (e) {}
                                    try {
                                        var n = e.indexOf(o);
                                        if (-1 !== n) {
                                            e.splice(n);
                                            var i = t.splice(n)[0];
                                            o.__sentry_xhr__ && void 0 !== i[0] && (o.__sentry_xhr__.body = i[0])
                                        }
                                    } catch (e) {}
                                    Ye("xhr", {
                                        args: r,
                                        endTimestamp: Date.now(),
                                        startTimestamp: Date.now(),
                                        xhr: o
                                    })
                                }
                            };
                            return "onreadystatechange"in o && "function" == typeof o.onreadystatechange ? Object(S.c)(o, "onreadystatechange", (function(e) {
                                return function() {
                                    for (var t = [], n = 0; n < arguments.length; n++)
                                        t[n] = arguments[n];
                                    return s(),
                                    e.apply(o, t)
                                }
                            }
                            )) : o.addEventListener("readystatechange", s),
                            n.apply(o, r)
                        }
                    }
                    )),
                    Object(S.c)(n, "send", (function(n) {
                        return function() {
                            for (var r = [], i = 0; i < arguments.length; i++)
                                r[i] = arguments[i];
                            return e.push(this),
                            t.push(r),
                            Ye("xhr", {
                                args: r,
                                startTimestamp: Date.now(),
                                xhr: this
                            }),
                            n.apply(this, r)
                        }
                    }
                    ))
                }();
                break;
            case "fetch":
                !function() {
                    if (!function() {
                        if (!ie())
                            return !1;
                        var e = Object(v.e)();
                        if (oe(e.fetch))
                            return !0;
                        var t = !1
                          , n = e.document;
                        if (n && "function" == typeof n.createElement)
                            try {
                                var r = n.createElement("iframe");
                                r.hidden = !0,
                                n.head.appendChild(r),
                                r.contentWindow && r.contentWindow.fetch && (t = oe(r.contentWindow.fetch)),
                                n.head.removeChild(r)
                            } catch (e) {
                                O.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                            }
                        return t
                    }())
                        return;
                    Object(S.c)(qe, "fetch", (function(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++)
                                t[n] = arguments[n];
                            var r = {
                                args: t,
                                fetchData: {
                                    method: Ke(t),
                                    url: Je(t)
                                },
                                startTimestamp: Date.now()
                            };
                            return Ye("fetch", Object(u.a)({}, r)),
                            e.apply(qe, t).then((function(e) {
                                return Ye("fetch", Object(u.a)(Object(u.a)({}, r), {
                                    endTimestamp: Date.now(),
                                    response: e
                                })),
                                e
                            }
                            ), (function(e) {
                                throw Ye("fetch", Object(u.a)(Object(u.a)({}, r), {
                                    endTimestamp: Date.now(),
                                    error: e
                                })),
                                e
                            }
                            ))
                        }
                    }
                    ))
                }();
                break;
            case "history":
                !function() {
                    if (e = Object(v.e)(),
                    t = e.chrome,
                    n = t && t.app && t.app.runtime,
                    r = "history"in e && !!e.history.pushState && !!e.history.replaceState,
                    n || !r)
                        return;
                    var e, t, n, r;
                    var i = qe.onpopstate;
                    function o(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++)
                                t[n] = arguments[n];
                            var r = t.length > 2 ? t[2] : void 0;
                            if (r) {
                                var i = Fe
                                  , o = String(r);
                                Fe = o,
                                Ye("history", {
                                    from: i,
                                    to: o
                                })
                            }
                            return e.apply(this, t)
                        }
                    }
                    qe.onpopstate = function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        var n = qe.location.href
                          , r = Fe;
                        if (Fe = n,
                        Ye("history", {
                            from: r,
                            to: n
                        }),
                        i)
                            try {
                                return i.apply(this, e)
                            } catch (e) {}
                    }
                    ,
                    Object(S.c)(qe.history, "pushState", o),
                    Object(S.c)(qe.history, "replaceState", o)
                }();
                break;
            case "error":
                Ze = qe.onerror,
                qe.onerror = function(e, t, n, r, i) {
                    return Ye("error", {
                        column: r,
                        error: i,
                        line: n,
                        msg: e,
                        url: t
                    }),
                    !!Ze && Ze.apply(this, arguments)
                }
                ;
                break;
            case "unhandledrejection":
                Qe = qe.onunhandledrejection,
                qe.onunhandledrejection = function(e) {
                    return Ye("unhandledrejection", e),
                    !Qe || Qe.apply(this, arguments)
                }
                ;
                break;
            default:
                O.warn("unknown instrumentation type:", e)
            }
    }
    function ze(e) {
        e && "string" == typeof e.type && "function" == typeof e.callback && (He[e.type] = He[e.type] || [],
        He[e.type].push(e.callback),
        Ge(e.type))
    }
    function Ye(e, t) {
        var n, r;
        if (e && He[e])
            try {
                for (var i = Object(u.f)(He[e] || []), o = i.next(); !o.done; o = i.next()) {
                    var a = o.value;
                    try {
                        a(t)
                    } catch (t) {
                        O.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + Object(Ue.a)(a) + "\nError: " + t)
                    }
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    o && !o.done && (r = i.return) && r.call(i)
                } finally {
                    if (n)
                        throw n.error
                }
            }
    }
    function Ke(e) {
        return void 0 === e && (e = []),
        "Request"in qe && Object(l.g)(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }
    function Je(e) {
        return void 0 === e && (e = []),
        "string" == typeof e[0] ? e[0] : "Request"in qe && Object(l.g)(e[0], Request) ? e[0].url : String(e[0])
    }
    var Xe, $e;
    function Ve(e, t) {
        return void 0 === t && (t = !1),
        function(n) {
            if (n && $e !== n && !function(e) {
                if ("keypress" !== e.type)
                    return !1;
                try {
                    var t = e.target;
                    if (!t || !t.tagName)
                        return !0;
                    if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable)
                        return !1
                } catch (e) {}
                return !0
            }(n)) {
                var r = "keypress" === n.type ? "input" : n.type;
                (void 0 === Xe || function(e, t) {
                    if (!e)
                        return !0;
                    if (e.type !== t.type)
                        return !0;
                    try {
                        if (e.target !== t.target)
                            return !0
                    } catch (e) {}
                    return !1
                }($e, n)) && (e({
                    event: n,
                    name: r,
                    global: t
                }),
                $e = n),
                clearTimeout(Xe),
                Xe = qe.setTimeout((function() {
                    Xe = void 0
                }
                ), 1e3)
            }
        }
    }
    var Ze = null;
    var Qe = null;
    var et, tt = n(30), nt = function() {
        function e(t) {
            this.name = e.id,
            this._options = Object(u.a)({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0
            }, t)
        }
        return e.prototype.addSentryBreadcrumb = function(e) {
            this._options.sentry && T().addBreadcrumb({
                category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                event_id: e.event_id,
                level: e.level,
                message: Object(v.d)(e)
            }, {
                event: e
            })
        }
        ,
        e.prototype.setupOnce = function() {
            var e = this;
            this._options.console && ze({
                callback: function() {
                    for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    e._consoleBreadcrumb.apply(e, Object(u.e)(t))
                },
                type: "console"
            }),
            this._options.dom && ze({
                callback: function() {
                    for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    e._domBreadcrumb.apply(e, Object(u.e)(t))
                },
                type: "dom"
            }),
            this._options.xhr && ze({
                callback: function() {
                    for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    e._xhrBreadcrumb.apply(e, Object(u.e)(t))
                },
                type: "xhr"
            }),
            this._options.fetch && ze({
                callback: function() {
                    for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    e._fetchBreadcrumb.apply(e, Object(u.e)(t))
                },
                type: "fetch"
            }),
            this._options.history && ze({
                callback: function() {
                    for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    e._historyBreadcrumb.apply(e, Object(u.e)(t))
                },
                type: "history"
            })
        }
        ,
        e.prototype._consoleBreadcrumb = function(e) {
            var t = {
                category: "console",
                data: {
                    arguments: e.args,
                    logger: "console"
                },
                level: s.fromString(e.level),
                message: Object(Z.b)(e.args, " ")
            };
            if ("assert" === e.level) {
                if (!1 !== e.args[0])
                    return;
                t.message = "Assertion failed: " + (Object(Z.b)(e.args.slice(1), " ") || "console.assert"),
                t.data.arguments = e.args.slice(1)
            }
            T().addBreadcrumb(t, {
                input: e.args,
                level: e.level
            })
        }
        ,
        e.prototype._domBreadcrumb = function(e) {
            var t;
            try {
                t = e.event.target ? Object(tt.a)(e.event.target) : Object(tt.a)(e.event)
            } catch (e) {
                t = "<unknown>"
            }
            0 !== t.length && T().addBreadcrumb({
                category: "ui." + e.name,
                message: t
            }, {
                event: e.event,
                name: e.name,
                global: e.global
            })
        }
        ,
        e.prototype._xhrBreadcrumb = function(e) {
            if (e.endTimestamp) {
                if (e.xhr.__sentry_own_request__)
                    return;
                var t = e.xhr.__sentry_xhr__ || {}
                  , n = t.method
                  , r = t.url
                  , i = t.status_code
                  , o = t.body;
                T().addBreadcrumb({
                    category: "xhr",
                    data: {
                        method: n,
                        url: r,
                        status_code: i
                    },
                    type: "http"
                }, {
                    xhr: e.xhr,
                    input: o
                })
            } else
                ;
        }
        ,
        e.prototype._fetchBreadcrumb = function(e) {
            e.endTimestamp && (e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method || (e.error ? T().addBreadcrumb({
                category: "fetch",
                data: e.fetchData,
                level: s.Error,
                type: "http"
            }, {
                data: e.error,
                input: e.args
            }) : T().addBreadcrumb({
                category: "fetch",
                data: Object(u.a)(Object(u.a)({}, e.fetchData), {
                    status_code: e.response.status
                }),
                type: "http"
            }, {
                input: e.args,
                response: e.response
            })))
        }
        ,
        e.prototype._historyBreadcrumb = function(e) {
            var t = Object(v.e)()
              , n = e.from
              , r = e.to
              , i = Object(v.h)(t.location.href)
              , o = Object(v.h)(n)
              , a = Object(v.h)(r);
            o.path || (o = i),
            i.protocol === a.protocol && i.host === a.host && (r = a.relative),
            i.protocol === o.protocol && i.host === o.host && (n = o.relative),
            T().addBreadcrumb({
                category: "navigation",
                data: {
                    from: n,
                    to: r
                }
            })
        }
        ,
        e.id = "Breadcrumbs",
        e
    }(), rt = function(e) {
        function t(t) {
            void 0 === t && (t = {});
            return t._metadata = t._metadata || {},
            t._metadata.sdk = t._metadata.sdk || {
                name: "sentry.javascript.browser",
                packages: [{
                    name: "npm:@sentry/browser",
                    version: K
                }],
                version: K
            },
            e.call(this, Ae, t) || this
        }
        return Object(u.b)(t, e),
        t.prototype.showReportDialog = function(e) {
            void 0 === e && (e = {}),
            Object(v.e)().document && (this._isEnabled() ? Me(Object(u.a)(Object(u.a)({}, e), {
                dsn: e.dsn || this.getDsn()
            })) : O.error("Trying to call showReportDialog with Sentry Client disabled"))
        }
        ,
        t.prototype._prepareEvent = function(t, n, r) {
            return t.platform = t.platform || "javascript",
            e.prototype._prepareEvent.call(this, t, n, r)
        }
        ,
        t.prototype._sendEvent = function(t) {
            var n = this.getIntegration(nt);
            n && n.addSentryBreadcrumb(t),
            e.prototype._sendEvent.call(this, t)
        }
        ,
        t
    }(te), it = function() {
        function e() {
            this.name = e.id
        }
        return e.prototype.setupOnce = function() {
            et = Function.prototype.toString,
            Function.prototype.toString = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                var n = this.__sentry_original__ || this;
                return et.apply(n, e)
            }
        }
        ,
        e.id = "FunctionToString",
        e
    }(), ot = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/], at = function() {
        function e(t) {
            void 0 === t && (t = {}),
            this._options = t,
            this.name = e.id
        }
        return e.prototype.setupOnce = function() {
            m((function(t) {
                var n = T();
                if (!n)
                    return t;
                var r = n.getIntegration(e);
                if (r) {
                    var i = n.getClient()
                      , o = i ? i.getOptions() : {}
                      , a = r._mergeOptions(o);
                    if (r._shouldDropEvent(t, a))
                        return null
                }
                return t
            }
            ))
        }
        ,
        e.prototype._shouldDropEvent = function(e, t) {
            return this._isSentryError(e, t) ? (O.warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(v.d)(e)),
            !0) : this._isIgnoredError(e, t) ? (O.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(v.d)(e)),
            !0) : this._isDeniedUrl(e, t) ? (O.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + Object(v.d)(e) + ".\nUrl: " + this._getEventFilterUrl(e)),
            !0) : !this._isAllowedUrl(e, t) && (O.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + Object(v.d)(e) + ".\nUrl: " + this._getEventFilterUrl(e)),
            !0)
        }
        ,
        e.prototype._isSentryError = function(e, t) {
            if (!t.ignoreInternal)
                return !1;
            try {
                return e && e.exception && e.exception.values && e.exception.values[0] && "SentryError" === e.exception.values[0].type || !1
            } catch (e) {
                return !1
            }
        }
        ,
        e.prototype._isIgnoredError = function(e, t) {
            return !(!t.ignoreErrors || !t.ignoreErrors.length) && this._getPossibleEventMessages(e).some((function(e) {
                return t.ignoreErrors.some((function(t) {
                    return Object(Z.a)(e, t)
                }
                ))
            }
            ))
        }
        ,
        e.prototype._isDeniedUrl = function(e, t) {
            if (!t.denyUrls || !t.denyUrls.length)
                return !1;
            var n = this._getEventFilterUrl(e);
            return !!n && t.denyUrls.some((function(e) {
                return Object(Z.a)(n, e)
            }
            ))
        }
        ,
        e.prototype._isAllowedUrl = function(e, t) {
            if (!t.allowUrls || !t.allowUrls.length)
                return !0;
            var n = this._getEventFilterUrl(e);
            return !n || t.allowUrls.some((function(e) {
                return Object(Z.a)(n, e)
            }
            ))
        }
        ,
        e.prototype._mergeOptions = function(e) {
            return void 0 === e && (e = {}),
            {
                allowUrls: Object(u.e)(this._options.whitelistUrls || [], this._options.allowUrls || [], e.whitelistUrls || [], e.allowUrls || []),
                denyUrls: Object(u.e)(this._options.blacklistUrls || [], this._options.denyUrls || [], e.blacklistUrls || [], e.denyUrls || []),
                ignoreErrors: Object(u.e)(this._options.ignoreErrors || [], e.ignoreErrors || [], ot),
                ignoreInternal: void 0 === this._options.ignoreInternal || this._options.ignoreInternal
            }
        }
        ,
        e.prototype._getPossibleEventMessages = function(e) {
            if (e.message)
                return [e.message];
            if (e.exception)
                try {
                    var t = e.exception.values && e.exception.values[0] || {}
                      , n = t.type
                      , r = void 0 === n ? "" : n
                      , i = t.value
                      , o = void 0 === i ? "" : i;
                    return ["" + o, r + ": " + o]
                } catch (t) {
                    return O.error("Cannot extract message for event " + Object(v.d)(e)),
                    []
                }
            return []
        }
        ,
        e.prototype._getEventFilterUrl = function(e) {
            try {
                if (e.stacktrace) {
                    var t = e.stacktrace.frames;
                    return t && t[t.length - 1].filename || null
                }
                if (e.exception) {
                    var n = e.exception.values && e.exception.values[0].stacktrace && e.exception.values[0].stacktrace.frames;
                    return n && n[n.length - 1].filename || null
                }
                return null
            } catch (t) {
                return O.error("Cannot extract url for event " + Object(v.d)(e)),
                null
            }
        }
        ,
        e.id = "InboundFilters",
        e
    }();
    var st = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
      , ct = function() {
        function e(t) {
            this.name = e.id,
            this._options = Object(u.a)({
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0
            }, t)
        }
        return e.prototype.setupOnce = function() {
            var e = Object(v.e)();
            (this._options.setTimeout && Object(S.c)(e, "setTimeout", this._wrapTimeFunction.bind(this)),
            this._options.setInterval && Object(S.c)(e, "setInterval", this._wrapTimeFunction.bind(this)),
            this._options.requestAnimationFrame && Object(S.c)(e, "requestAnimationFrame", this._wrapRAF.bind(this)),
            this._options.XMLHttpRequest && "XMLHttpRequest"in e && Object(S.c)(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)),
            this._options.eventTarget) && (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : st).forEach(this._wrapEventTarget.bind(this))
        }
        ,
        e.prototype._wrapTimeFunction = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                var r = t[0];
                return t[0] = Be(r, {
                    mechanism: {
                        data: {
                            function: Object(Ue.a)(e)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }),
                e.apply(this, t)
            }
        }
        ,
        e.prototype._wrapRAF = function(e) {
            return function(t) {
                return e.call(this, Be(t, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: Object(Ue.a)(e)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }))
            }
        }
        ,
        e.prototype._wrapEventTarget = function(e) {
            var t = Object(v.e)()
              , n = t[e] && t[e].prototype;
            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Object(S.c)(n, "addEventListener", (function(t) {
                return function(n, r, i) {
                    try {
                        "function" == typeof r.handleEvent && (r.handleEvent = Be(r.handleEvent.bind(r), {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: Object(Ue.a)(r),
                                    target: e
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }))
                    } catch (e) {}
                    return t.call(this, n, Be(r, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: Object(Ue.a)(r),
                                target: e
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), i)
                }
            }
            )),
            Object(S.c)(n, "removeEventListener", (function(e) {
                return function(t, n, r) {
                    var i, o = n;
                    try {
                        var a = null === (i = o) || void 0 === i ? void 0 : i.__sentry_wrapped__;
                        a && e.call(this, t, a, r)
                    } catch (e) {}
                    return e.call(this, t, o, r)
                }
            }
            )))
        }
        ,
        e.prototype._wrapXHR = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                var r = this
                  , i = ["onload", "onerror", "onprogress", "onreadystatechange"];
                return i.forEach((function(e) {
                    e in r && "function" == typeof r[e] && Object(S.c)(r, e, (function(t) {
                        var n = {
                            mechanism: {
                                data: {
                                    function: e,
                                    handler: Object(Ue.a)(t)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        };
                        return t.__sentry_original__ && (n.mechanism.data.handler = Object(Ue.a)(t.__sentry_original__)),
                        Be(t, n)
                    }
                    ))
                }
                )),
                e.apply(this, t)
            }
        }
        ,
        e.id = "TryCatch",
        e
    }()
      , ut = function() {
        function e(t) {
            this.name = e.id,
            this._onErrorHandlerInstalled = !1,
            this._onUnhandledRejectionHandlerInstalled = !1,
            this._options = Object(u.a)({
                onerror: !0,
                onunhandledrejection: !0
            }, t)
        }
        return e.prototype.setupOnce = function() {
            Error.stackTraceLimit = 50,
            this._options.onerror && (O.log("Global Handler attached: onerror"),
            this._installGlobalOnErrorHandler()),
            this._options.onunhandledrejection && (O.log("Global Handler attached: onunhandledrejection"),
            this._installGlobalOnUnhandledRejectionHandler())
        }
        ,
        e.prototype._installGlobalOnErrorHandler = function() {
            var t = this;
            this._onErrorHandlerInstalled || (ze({
                callback: function(n) {
                    var r = n.error
                      , i = T()
                      , o = i.getIntegration(e)
                      , a = r && !0 === r.__sentry_own_request__;
                    if (o && !Ne() && !a) {
                        var s = i.getClient()
                          , c = Object(l.i)(r) ? t._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : t._enhanceEventWithInitialFrame(we(r, void 0, {
                            attachStacktrace: s && s.getOptions().attachStacktrace,
                            rejection: !1
                        }), n.url, n.line, n.column);
                        Object(v.a)(c, {
                            handled: !1,
                            type: "onerror"
                        }),
                        i.captureEvent(c, {
                            originalException: r
                        })
                    }
                },
                type: "error"
            }),
            this._onErrorHandlerInstalled = !0)
        }
        ,
        e.prototype._installGlobalOnUnhandledRejectionHandler = function() {
            var t = this;
            this._onUnhandledRejectionHandlerInstalled || (ze({
                callback: function(n) {
                    var r = n;
                    try {
                        "reason"in n ? r = n.reason : "detail"in n && "reason"in n.detail && (r = n.detail.reason)
                    } catch (e) {}
                    var i = T()
                      , o = i.getIntegration(e)
                      , a = r && !0 === r.__sentry_own_request__;
                    if (!o || Ne() || a)
                        return !0;
                    var c = i.getClient()
                      , u = Object(l.i)(r) ? t._eventFromRejectionWithPrimitive(r) : we(r, void 0, {
                        attachStacktrace: c && c.getOptions().attachStacktrace,
                        rejection: !0
                    });
                    u.level = s.Error,
                    Object(v.a)(u, {
                        handled: !1,
                        type: "onunhandledrejection"
                    }),
                    i.captureEvent(u, {
                        originalException: r
                    })
                },
                type: "unhandledrejection"
            }),
            this._onUnhandledRejectionHandlerInstalled = !0)
        }
        ,
        e.prototype._eventFromIncompleteOnError = function(e, t, n, r) {
            var i, o = Object(l.e)(e) ? e.message : e;
            if (Object(l.k)(o)) {
                var a = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                a && (i = a[1],
                o = a[2])
            }
            var s = {
                exception: {
                    values: [{
                        type: i || "Error",
                        value: o
                    }]
                }
            };
            return this._enhanceEventWithInitialFrame(s, t, n, r)
        }
        ,
        e.prototype._eventFromRejectionWithPrimitive = function(e) {
            return {
                exception: {
                    values: [{
                        type: "UnhandledRejection",
                        value: "Non-Error promise rejection captured with value: " + String(e)
                    }]
                }
            }
        }
        ,
        e.prototype._enhanceEventWithInitialFrame = function(e, t, n, r) {
            e.exception = e.exception || {},
            e.exception.values = e.exception.values || [],
            e.exception.values[0] = e.exception.values[0] || {},
            e.exception.values[0].stacktrace = e.exception.values[0].stacktrace || {},
            e.exception.values[0].stacktrace.frames = e.exception.values[0].stacktrace.frames || [];
            var i = isNaN(parseInt(r, 10)) ? void 0 : r
              , o = isNaN(parseInt(n, 10)) ? void 0 : n
              , a = Object(l.k)(t) && t.length > 0 ? t : Object(v.f)();
            return 0 === e.exception.values[0].stacktrace.frames.length && e.exception.values[0].stacktrace.frames.push({
                colno: i,
                filename: a,
                function: "?",
                in_app: !0,
                lineno: o
            }),
            e
        }
        ,
        e.id = "GlobalHandlers",
        e
    }()
      , ft = function() {
        function e(t) {
            void 0 === t && (t = {}),
            this.name = e.id,
            this._key = t.key || "cause",
            this._limit = t.limit || 5
        }
        return e.prototype.setupOnce = function() {
            m((function(t, n) {
                var r = T().getIntegration(e);
                return r ? r._handler(t, n) : t
            }
            ))
        }
        ,
        e.prototype._handler = function(e, t) {
            if (!(e.exception && e.exception.values && t && Object(l.g)(t.originalException, Error)))
                return e;
            var n = this._walkErrorTree(t.originalException, this._key);
            return e.exception.values = Object(u.e)(n, e.exception.values),
            e
        }
        ,
        e.prototype._walkErrorTree = function(e, t, n) {
            if (void 0 === n && (n = []),
            !Object(l.g)(e[t], Error) || n.length + 1 >= this._limit)
                return n;
            var r = ye(pe(e[t]));
            return this._walkErrorTree(e[t], t, Object(u.e)([r], n))
        }
        ,
        e.id = "LinkedErrors",
        e
    }()
      , lt = Object(v.e)()
      , ht = function() {
        function e() {
            this.name = e.id
        }
        return e.prototype.setupOnce = function() {
            m((function(t) {
                var n, r, i;
                if (T().getIntegration(e)) {
                    if (!lt.navigator && !lt.location && !lt.document)
                        return t;
                    var o = (null === (n = t.request) || void 0 === n ? void 0 : n.url) || (null === (r = lt.location) || void 0 === r ? void 0 : r.href)
                      , a = (lt.document || {}).referrer
                      , s = (lt.navigator || {}).userAgent
                      , c = Object(u.a)(Object(u.a)(Object(u.a)({}, null === (i = t.request) || void 0 === i ? void 0 : i.headers), a && {
                        Referer: a
                    }), s && {
                        "User-Agent": s
                    })
                      , f = Object(u.a)(Object(u.a)({}, o && {
                        url: o
                    }), {
                        headers: c
                    });
                    return Object(u.a)(Object(u.a)({}, t), {
                        request: f
                    })
                }
                return t
            }
            ))
        }
        ,
        e.id = "UserAgent",
        e
    }()
      , pt = [new r.InboundFilters, new r.FunctionToString, new ct, new nt, new ut, new ft, new ht];
    function dt(e) {
        if (void 0 === e && (e = {}),
        void 0 === e.defaultIntegrations && (e.defaultIntegrations = pt),
        void 0 === e.release) {
            var t = Object(v.e)();
            t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (e.release = t.SENTRY_RELEASE.id)
        }
        void 0 === e.autoSessionTracking && (e.autoSessionTracking = !0),
        function(e, t) {
            !0 === t.debug && O.enable();
            var n = T()
              , r = new e(t);
            n.bindClient(r)
        }(rt, e),
        e.autoSessionTracking && function() {
            if (void 0 === Object(v.e)().document)
                return void O.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
            var e = T();
            "startSession"in e && (e.startSession(),
            e.captureSession(),
            ze({
                callback: function() {
                    e.startSession(),
                    e.captureSession()
                },
                type: "history"
            }))
        }()
    }
    function vt(e) {
        void 0 === e && (e = {}),
        e.eventId || (e.eventId = T().lastEventId());
        var t = T().getClient();
        t && t.showReportDialog(e)
    }
    function yt() {
        return T().lastEventId()
    }
    function gt() {}
    function mt(e) {
        e()
    }
    function bt(e) {
        var t = T().getClient();
        return t ? t.flush(e) : d.reject(!1)
    }
    function _t(e) {
        var t = T().getClient();
        return t ? t.close(e) : d.reject(!1)
    }
    function wt(e) {
        return Be(e)()
    }
    var Ot = "sentry.javascript.browser"
      , Et = {}
      , St = Object(v.e)();
    St.Sentry && St.Sentry.Integrations && (Et = St.Sentry.Integrations);
    var jt = Object(u.a)(Object(u.a)(Object(u.a)({}, Et), r), i)
      , xt = n(6)
      , kt = [/extensions\//i, /-extension:\/\//i];
    function Ct(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Tt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var {NODE_ENV: Rt, COMMIT_HASH: Pt} = xt.a
      , It = ["SecurityError IDBFactory.open() called in an invalid security context"]
      , At = a;
    function Lt(e) {
        !At.SDK_NAME && self.Sentry && (At = self.Sentry),
        At.init(function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ct(Object(n), !0).forEach((function(t) {
                    Tt(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ct(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }({
            dsn: "https://7e5c2fad7a564ff8bffd4effc2abb26d@sentry.arc.io/2",
            enabled: "production" === Rt,
            environment: Rt,
            release: Pt,
            maxBreadcrumbs: 5,
            ignoreErrors: It,
            autoSessionTracking: !1,
            denyUrls: kt,
            blacklistUrls: kt
        }, e))
    }
    function Nt() {
        Lt({})
    }
}
, function(e, t) {
    "function" == typeof Object.create ? e.exports = function(e, t) {
        t && (e.super_ = t,
        e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }))
    }
    : e.exports = function(e, t) {
        if (t) {
            e.super_ = t;
            var n = function() {};
            n.prototype = t.prototype,
            e.prototype = new n,
            e.prototype.constructor = e
        }
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return i
    }
    )),
    n.d(t, "c", (function() {
        return o
    }
    )),
    n.d(t, "b", (function() {
        return a
    }
    )),
    n.d(t, "a", (function() {
        return s
    }
    ));
    var r = n(5);
    function i(e, t) {
        return void 0 === t && (t = 0),
        "string" != typeof e || 0 === t || e.length <= t ? e : e.substr(0, t) + "..."
    }
    function o(e, t) {
        var n = e
          , r = n.length;
        if (r <= 150)
            return n;
        t > r && (t = r);
        var i = Math.max(t - 60, 0);
        i < 5 && (i = 0);
        var o = Math.min(i + 140, r);
        return o > r - 5 && (o = r),
        o === r && (i = Math.max(o - 140, 0)),
        n = n.slice(i, o),
        i > 0 && (n = "'{snip} " + n),
        o < r && (n += " {snip}"),
        n
    }
    function a(e, t) {
        if (!Array.isArray(e))
            return "";
        for (var n = [], r = 0; r < e.length; r++) {
            var i = e[r];
            try {
                n.push(String(i))
            } catch (e) {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(t)
    }
    function s(e, t) {
        return !!Object(r.k)(e) && (Object(r.j)(t) ? t.test(e) : "string" == typeof t && -1 !== e.indexOf(t))
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return l
    }
    )),
    n.d(t, "a", (function() {
        return p
    }
    )),
    n.d(t, "c", (function() {
        return g
    }
    )),
    n.d(t, "d", (function() {
        return b
    }
    ));
    var r = n(16)
      , i = n(2)
      , o = n(25)
      , a = n(1);
    function s(e, t, n, r, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i)
    }
    function c(e) {
        return function() {
            var t = this
              , n = arguments;
            return new Promise((function(r, i) {
                var o = e.apply(t, n);
                function a(e) {
                    s(o, r, i, a, c, "next", e)
                }
                function c(e) {
                    s(o, r, i, a, c, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    n(22)("arc:sw");
    var u = new Map
      , f = new Set;
    function l(e) {
        return h.apply(this, arguments)
    }
    function h() {
        return (h = c((function*(e) {
            var {urlObj: t, cdnConfig: n={}} = e
              , {autoCdnConfig: r} = n
              , i = Object(a.e)(t, r);
            if (!i)
                return null;
            var o = yield v(e, i);
            return o ? (o.path = i,
            o) : null
        }
        ))).apply(this, arguments)
    }
    function p(e, t) {
        return d.apply(this, arguments)
    }
    function d() {
        return (d = c((function*(e, t) {
            var n = Object(a.e)(e, t);
            u.delete(n)
        }
        ))).apply(this, arguments)
    }
    function v(e, t) {
        return y.apply(this, arguments)
    }
    function y() {
        return (y = c((function*(e, t) {
            if (u.has(t))
                return u.get(t);
            var n = o.a.getFileInfo(t).then(e=>(null != e && e.torrentFileObj && u.set(t, e),
            e)).catch(t=>{
                var n;
                return 404 === (null === (n = t.response) || void 0 === n ? void 0 : n.status) && e.ingestAutoCDN && g(e),
                null
            }
            )
              , r = Promise.race([Object(i.k)(500), n]);
            return u.set(t, r),
            r
        }
        ))).apply(this, arguments)
    }
    function g(e) {
        return m.apply(this, arguments)
    }
    function m() {
        return (m = c((function*(e) {
            var t = e.urlObj.href;
            if (!f.has(t)) {
                f.add(t);
                try {
                    yield Object(i.k)(3e3);
                    var {propertyId: n} = e;
                    yield o.a.ingestAutoCdnResource(t, n)
                } catch (e) {
                    r.a.captureException(e)
                }
            }
        }
        ))).apply(this, arguments)
    }
    function b(e) {
        return f.has(e.urlObj.href)
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(27)
      , i = Object.keys || function(e) {
        var t = [];
        for (var n in e)
            t.push(n);
        return t
    }
    ;
    e.exports = l;
    var o = Object.create(n(23));
    o.inherits = n(17);
    var a = n(36)
      , s = n(40);
    o.inherits(l, a);
    for (var c = i(s.prototype), u = 0; u < c.length; u++) {
        var f = c[u];
        l.prototype[f] || (l.prototype[f] = s.prototype[f])
    }
    function l(e) {
        if (!(this instanceof l))
            return new l(e);
        a.call(this, e),
        s.call(this, e),
        e && !1 === e.readable && (this.readable = !1),
        e && !1 === e.writable && (this.writable = !1),
        this.allowHalfOpen = !0,
        e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once("end", h)
    }
    function h() {
        this.allowHalfOpen || this._writableState.ended || r.nextTick(p, this)
    }
    function p(e) {
        e.end()
    }
    Object.defineProperty(l.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    }),
    Object.defineProperty(l.prototype, "destroyed", {
        get: function() {
            return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
        },
        set: function(e) {
            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e,
            this._writableState.destroyed = e)
        }
    }),
    l.prototype._destroy = function(e, t) {
        this.push(null),
        this.end(),
        r.nextTick(t, e)
    }
}
, , function(e, t, n) {
    (function(r) {
        var i;
        t.formatArgs = function(t) {
            if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff),
            !this.useColors)
                return;
            var n = "color: " + this.color;
            t.splice(1, 0, n, "color: inherit");
            var r = 0
              , i = 0;
            t[0].replace(/%[a-zA-Z%]/g, e=>{
                "%%" !== e && (r++,
                "%c" === e && (i = r))
            }
            ),
            t.splice(i, 0, n)
        }
        ,
        t.save = function(e) {
            try {
                e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
            } catch (e) {}
        }
        ,
        t.load = function() {
            var e;
            try {
                e = t.storage.getItem("debug")
            } catch (e) {}
            !e && void 0 !== r && "env"in r && (e = "false");
            return e
        }
        ,
        t.useColors = function() {
            if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs))
                return !0;
            if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
                return !1;
            return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }
        ,
        t.storage = function() {
            try {
                return localStorage
            } catch (e) {}
        }(),
        t.destroy = (i = !1,
        ()=>{
            i || (i = !0,
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
        }
        ),
        t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
        t.log = console.debug || console.log || (()=>{}
        ),
        e.exports = n(53)(t);
        var {formatters: o} = e.exports;
        o.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }
    }
    ).call(this, n(10))
}
, function(e, t, n) {
    (function(e) {
        function n(e) {
            return Object.prototype.toString.call(e)
        }
        t.isArray = function(e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === n(e)
        }
        ,
        t.isBoolean = function(e) {
            return "boolean" == typeof e
        }
        ,
        t.isNull = function(e) {
            return null === e
        }
        ,
        t.isNullOrUndefined = function(e) {
            return null == e
        }
        ,
        t.isNumber = function(e) {
            return "number" == typeof e
        }
        ,
        t.isString = function(e) {
            return "string" == typeof e
        }
        ,
        t.isSymbol = function(e) {
            return "symbol" == typeof e
        }
        ,
        t.isUndefined = function(e) {
            return void 0 === e
        }
        ,
        t.isRegExp = function(e) {
            return "[object RegExp]" === n(e)
        }
        ,
        t.isObject = function(e) {
            return "object" == typeof e && null !== e
        }
        ,
        t.isDate = function(e) {
            return "[object Date]" === n(e)
        }
        ,
        t.isError = function(e) {
            return "[object Error]" === n(e) || e instanceof Error
        }
        ,
        t.isFunction = function(e) {
            return "function" == typeof e
        }
        ,
        t.isPrimitive = function(e) {
            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
        }
        ,
        t.isBuffer = e.isBuffer
    }
    ).call(this, n(12).Buffer)
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function r() {
            return "[object process]" === Object.prototype.toString.call(void 0 !== e ? e : 0)
        }
        function i(e, t) {
            return e.require(t)
        }
        n.d(t, "b", (function() {
            return r
        }
        )),
        n.d(t, "a", (function() {
            return i
        }
        ))
    }
    ).call(this, n(10))
}
, function(e, t, n) {
    "use strict";
    var r = n(13)
      , i = n(11)
      , o = n(2)
      , a = n(49)
      , s = n.n(a);
    function c(e) {
        var t = r.Buffer.from(e, "base64");
        return s()(t)
    }
    var u = n(6);
    function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? f(Object(n), !0).forEach((function(t) {
                h(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function p(e, t) {
        if (null == e)
            return {};
        var n, r, i = function(e, t) {
            if (null == e)
                return {};
            var n, r, i = {}, o = Object.keys(e);
            for (r = 0; r < o.length; r++)
                n = o[r],
                t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++)
                n = o[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }
    function d(e, t, n, r, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i)
    }
    function v(e) {
        return function() {
            var t = this
              , n = arguments;
            return new Promise((function(r, i) {
                var o = e.apply(t, n);
                function a(e) {
                    d(o, r, i, a, s, "next", e)
                }
                function s(e) {
                    d(o, r, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    var {GATEWAY_ORIGIN: y} = u.a;
    function g() {
        return (g = v((function*(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            e = Object(o.e)(e);
            var n = "".concat(y, "/fileInfo").concat(e)
              , a = {
                credentials: "omit",
                timeout: t
            }
              , s = yield Object(i.c)(n, a)
              , u = yield s.json()
              , {b64TorrentFile: f, b64CipherKey: h} = u
              , d = p(u, ["b64TorrentFile", "b64CipherKey"])
              , v = c(f)
              , g = null;
            return h && (g = r.Buffer.from(h, "base64")),
            l(l({}, d), {}, {
                torrentFileObj: v,
                cipherKey: g,
                expiresAt: new Date(d.expiresAt)
            })
        }
        ))).apply(this, arguments)
    }
    function m() {
        return (m = v((function*(e) {
            var t = {};
            if (!e)
                return t;
            var n = y + "/cdnConfig/" + e
              , r = yield Object(i.c)(n, {
                credentials: "omit"
            });
            return t = yield r.json()
        }
        ))).apply(this, arguments)
    }
    function b() {
        return (b = v((function*(e, t) {
            var n = new URL("".concat(y, "/autoCdnIngest"));
            n.searchParams.set("url", e),
            n.searchParams.set("propertyId", t);
            return Object(i.c)(n.href, {
                credentials: "omit"
            })
        }
        ))).apply(this, arguments)
    }
    t.a = {
        getFileInfo: function(e) {
            return g.apply(this, arguments)
        },
        getCdnConfig: function(e) {
            return m.apply(this, arguments)
        },
        ingestAutoCdnResource: function(e, t) {
            return b.apply(this, arguments)
        }
    }
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", (function() {
            return x
        }
        )),
        n.d(t, "d", (function() {
            return D
        }
        )),
        n.d(t, "b", (function() {
            return B
        }
        )),
        n.d(t, "c", (function() {
            return F
        }
        ));
        var r = n(9)
          , i = n(50)
          , o = n.n(i)
          , a = n(1)
          , s = n(3)
          , c = n(11)
          , u = n(2)
          , f = n(19)
          , l = n(6);
        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach((function(t) {
                    d(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function d(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function v(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a)
                  , c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, i)
        }
        function y(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, i) {
                    var o = e.apply(t, n);
                    function a(e) {
                        v(o, r, i, a, s, "next", e)
                    }
                    function s(e) {
                        v(o, r, i, a, s, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        var {STORAGE_ORIGIN: g} = l.a
          , {STORED_FIDS: m} = s.g
          , b = n(22)("arc:sw")
          , _ = ()=>{}
        ;
        class w extends Error {
        }
        class O extends Error {
        }
        var E = 1e3
          , S = 1e3
          , j = 3e3;
        class x {
            constructor(e) {
                this.ctx = e,
                this.controller = null,
                this.isControllerClosed = !1,
                this.enqueuedBytesCount = 0,
                this.fileStreamsMap = {},
                this.streamKey = null,
                this.initialBackstopStreamKey = null,
                this.backstopURL = null,
                this.backstopCDNFetch = null,
                this.backstopCDNReader = null,
                this.backstopCDNRequestAborted = !1,
                this.contentLength = null,
                this.fileSizeParsedFromBackstop = null,
                this.handoffByteIndex = null,
                this.handoffPerformed = !1,
                this.handoffChunkFound = !1,
                this.p2pClientRpc = null,
                this.fileInfo = {},
                this.numP2PBytesInHandoffOverlap = 0,
                this.p2pFileStream = null,
                this.p2pBuffer = [],
                this.p2pDownloadTimeout = null,
                this.torrentOpts = null,
                this.wasTorrentCreated = !1,
                this.p2pRetryAttempt = 0,
                this.originServerReader = null,
                this.originServerRetryAttempt = 0,
                this.requestedRange = {},
                this.filePath = Object(a.e)(this.urlObj, this.autoCdnConfig)
            }
            get event() {
                return this.ctx.event || {}
            }
            get urlObj() {
                return this.ctx.urlObj || {}
            }
            get pathname() {
                return this.urlObj.pathname
            }
            get request() {
                return this.event.request || {}
            }
            get clientId() {
                return this.event.clientId || ""
            }
            get widgetConfig() {
                return this.ctx.widgetConfig || {}
            }
            get cdnConfig() {
                return this.ctx.cdnConfig || {}
            }
            get autoCdnConfig() {
                return this.cdnConfig.autoCdnConfig || {}
            }
            get propertyId() {
                return this.ctx.propertyId || ""
            }
            get isSeeder() {
                return this.ctx.isSeeder
            }
            get torrentFile() {
                return this.fileInfo.torrentFileObj || {}
            }
            get fid() {
                return this.fileInfo.fid || ""
            }
            get fileKey() {
                return "file:".concat(this.clientId, "-").concat(this.fid)
            }
            get fileStreamsKey() {
                return "fileStream:".concat(this.clientId, "-").concat(this.filePath)
            }
            get disableSeedingTimeoutKey() {
                return "disableSeedingTimeout:".concat(this.fileKey)
            }
            get fileSize() {
                return this.torrentFile.length || this.fileSizeParsedFromBackstop || 0
            }
            get chunkSize() {
                return this.torrentFile.pieceLength || 0
            }
            get lastByteIndex() {
                return Math.max(this.fileSize - 1, 0)
            }
            get rangeStart() {
                return this.requestedRange.start || 0
            }
            get rangeEnd() {
                return this.requestedRange.end || this.lastByteIndex
            }
            get remainingFileRange() {
                var e = Math.max(this.enqueuedBytesCount, this.handoffByteIndex || 0);
                return {
                    start: this.rangeStart + e,
                    end: this.rangeEnd
                }
            }
            get timeToFirstByte() {
                var {timing: e} = this.backstopCDNFetch;
                return (e.end - e.start) / 1e3
            }
            get timeElapsed() {
                return (Date.now() - this.backstopCDNFetch.timing.start) / 1e3
            }
            get avgDownloadSpeed() {
                return this.enqueuedBytesCount / this.timeElapsed
            }
            get avgBytesPerRoundTrip() {
                return Math.ceil(this.avgDownloadSpeed * this.timeToFirstByte)
            }
            get p2pBufferHasChunks() {
                return this.p2pBuffer.length > 0
            }
            get shouldHandoffToP2PNetwork() {
                return !this.handoffPerformed && null !== this.handoffByteIndex && this.enqueuedBytesCount >= this.handoffByteIndex && this.enoughBytesRemainToWarrantHandoff
            }
            get handoffByteIndexOverflow() {
                return this.enqueuedBytesCount - this.handoffByteIndex
            }
            get enoughBytesRemainToWarrantHandoff() {
                return this.handoffByteIndex + 2 * this.chunkSize < this.contentLength
            }
            get responseOptions() {
                return this.backstopCDNFetch.resp || {}
            }
            fetchFromBackstopCDN(e) {
                var t = this;
                return y((function*() {
                    b("fetching from backstop cdn:", t.pathname, t.ctx);
                    var n = !t.backstopURL;
                    n && t._createBackstopURL(),
                    t.backstopCDNRequestAborted = !1;
                    var r = new AbortController
                      , i = {
                        method: t.request.method,
                        headers: t.request.headers,
                        referrer: t.request.referrer,
                        referrerPolicy: t.request.referrerPolicy,
                        cache: t.request.cache,
                        redirect: t.request.redirect,
                        integrity: t.request.integrity,
                        mode: "cors",
                        credentials: "omit",
                        signal: r.signal
                    };
                    e && (i.headers = i.headers || {},
                    i.headers.range = "bytes=".concat(e.start, "-").concat(e.end));
                    var o = Date.now()
                      , a = yield Object(c.c)(t.backstopURL.href, i)
                      , s = Date.now();
                    t.backstopCDNFetch = {
                        resp: a,
                        timing: {
                            start: o,
                            end: s
                        },
                        abort: ()=>r.abort()
                    },
                    n && t._parseRequestedRange(a.headers),
                    t.backstopCDNReader = a.body.getReader();
                    var u = t.backstopCDNReader;
                    t.streamKey = C(e || t.requestedRange, t.filePath);
                    var f = t.streamKey;
                    n && (t.initialBackstopStreamKey = "".concat("initial", ":").concat(t.streamKey),
                    f = t.initialBackstopStreamKey,
                    u = t),
                    t.fileStreamsMap = k(t.fileStreamsKey, f, u)
                }
                ))()
            }
            streamFromBackstopCDN(e) {
                var t = this;
                return y((function*() {
                    for (t.controller = t.controller || e; ; ) {
                        var {value: n, done: r, err: i} = yield t._readNextBackstopCDNChunk();
                        if (i) {
                            t.backstopCDNRequestAborted || (b("backstop read error:", t.pathname, i),
                            t._abortBackstopRequest(),
                            t._teardownP2PDownload(),
                            t._performFallbackOriginServerRequest());
                            break
                        }
                        if (r) {
                            t._completeDownload();
                            break
                        }
                        if (t._enqueueChunk(n),
                        t.shouldHandoffToP2PNetwork) {
                            t._performHandoff();
                            break
                        }
                    }
                }
                ))()
            }
            fetchFromP2PNetwork(e, t) {
                var n = this;
                return y((function*() {
                    if (!n.backstopCDNRequestAborted && !n.isControllerClosed) {
                        b("fetching from p2p network", n.pathname, n.ctx),
                        n.p2pClientRpc = e,
                        n.fileInfo = t,
                        n._createTorrentOptions();
                        try {
                            yield n._streamFromP2PNetwork()
                        } catch (e) {
                            n._onP2PError(e)
                        }
                    }
                }
                ))()
            }
            cancel() {
                var e, t, n;
                return this._completeDownload(!1),
                null === (e = this.backstopCDNReader) || void 0 === e || e.cancel().catch(_),
                null === (t = this.p2pFileStream) || void 0 === t || t.destroy().catch(_),
                null === (n = this.originServerReader) || void 0 === n || n.cancel().catch(_),
                Promise.resolve()
            }
            _createBackstopURL() {
                this.backstopURL = new URL(g + Object(u.e)(this.filePath)),
                this.backstopURL.searchParams.set("_arc_client", s.j),
                this.backstopURL.searchParams.set("propertyId", this.propertyId)
            }
            _parseRequestedRange(e) {
                this.contentLength = parseInt(e.get("content-length")) || null;
                var t = e.get("content-range");
                this.fileSizeParsedFromBackstop = t ? parseInt(t.split("/").pop()) || null : this.contentLength,
                this.requestedRange = D(this.request, this.fileSizeParsedFromBackstop)
            }
            _readNextBackstopCDNChunk() {
                var e = this;
                return y((function*() {
                    try {
                        return yield e.backstopCDNReader.read()
                    } catch (e) {
                        return {
                            err: e
                        }
                    }
                }
                ))()
            }
            _enqueueChunk(e) {
                !this.isControllerClosed && e && (this.controller.enqueue(e),
                this.enqueuedBytesCount += e.length)
            }
            _performHandoff() {
                b("performing handoff", this.pathname),
                this.p2pBufferHasChunks && this._abortBackstopRequest(),
                this._enqueueChunksFromP2PBuffer(),
                this.handoffPerformed = !0
            }
            _abortBackstopRequest() {
                b("aborting backstop cdn request", this.pathname),
                this.backstopCDNFetch.abort(),
                this.backstopCDNRequestAborted = !0
            }
            _createTorrentOptions() {
                if (this.torrentOpts = {
                    skipWaitingForBroker: !1
                },
                a.l.has(m)) {
                    var e = a.l.get(m).has(this.fid);
                    this.torrentOpts.skipWaitingForBroker = !e
                }
            }
            _streamFromP2PNetwork(e) {
                var t = this;
                return y((function*() {
                    var n = yield t._getP2PProxyFile();
                    if (t.wasTorrentCreated = !0,
                    t._clearDisableSeedingTimeout(),
                    null !== t.handoffByteIndex || (t._calculateHandoffByteIndex(),
                    t.enoughBytesRemainToWarrantHandoff)) {
                        var r = {
                            type: "bytes",
                            start: e || t.rangeStart + t.handoffByteIndex,
                            end: t.rangeEnd
                        };
                        t.streamKey = C(r, t.filePath),
                        t.p2pFileStream = yield t._createP2PFileStream(n, r),
                        yield P(t.p2pFileStream, n, (function() {
                            return t._onP2PData(...arguments)
                        }
                        )),
                        t._createP2PDownloadTimeout(),
                        t.fileStreamsMap = k(t.fileStreamsKey, t.streamKey, t.p2pFileStream)
                    } else
                        b("won't perform handoff -- too close to end of download", t.pathname)
                }
                ))()
            }
            _getP2PProxyFile() {
                var e = this;
                return y((function*() {
                    var t = T(e.fileKey, e.fileInfo, e.p2pClientRpc, e.torrentOpts);
                    return yield Object(u.j)(t, E, new O("proxy file request timed out"))
                }
                ))()
            }
            _calculateHandoffByteIndex() {
                var e = (this.enqueuedBytesCount + 1 * this.avgBytesPerRoundTrip) / this.chunkSize
                  , t = Object(u.h)(e) ? e + 1 : Math.ceil(e);
                this.handoffByteIndex = 0 === this.enqueuedBytesCount ? 0 : t * this.chunkSize,
                b("calculated handoff byte index:", this.pathname, "estimated-hbi=".concat(this.handoffByteIndex), "enqueued=".concat(this.enqueuedBytesCount), "chunk=".concat(this.chunkSize), "file=".concat(this.fileSize))
            }
            _createP2PFileStream(e, t) {
                return y((function*() {
                    var n = e.createReadStream(t);
                    return yield Object(u.j)(n, S, new O("file stream request timed out"))
                }
                ))()
            }
            _onP2PData(e, t) {
                if (this._clearP2PDownloadTimeout(),
                !this.isControllerClosed)
                    if (e)
                        this._onP2PError(e);
                    else {
                        if (!this.handoffPerformed)
                            return this._bufferP2PChunk(t),
                            void (0 === this.enqueuedBytesCount && (b("backstop too slow -- first p2p chunk won", this.pathname),
                            this._performHandoff(),
                            this.handoffChunkFound = !0));
                        if (t) {
                            if (this.backstopCDNRequestAborted || this._abortBackstopRequest(),
                            this.p2pBufferHasChunks)
                                return this._bufferP2PChunk(t),
                                void this._enqueueChunksFromP2PBuffer();
                            (this.handoffChunkFound || (t = this._getSectionOfP2PChunkToEnqueue(t))) && this._enqueueChunk(t)
                        } else
                            this._completeDownload()
                    }
            }
            _createP2PDownloadTimeout() {
                this._clearP2PDownloadTimeout(),
                this.p2pDownloadTimeout = setTimeout(()=>{
                    var e = new O("first p2p chunk took too long");
                    this._onP2PError(e)
                }
                , j)
            }
            _clearP2PDownloadTimeout() {
                null !== this.p2pDownloadTimeout && (clearTimeout(this.p2pDownloadTimeout),
                this.p2pDownloadTimeout = null)
            }
            _createDisableSeedingTimeout() {
                this._clearDisableSeedingTimeout();
                var e = this.disableSeedingTimeoutKey
                  , t = setTimeout(()=>{
                    this._teardownP2PDownload(),
                    a.l.delete(e)
                }
                , 3e3);
                a.l.set(e, t)
            }
            _clearDisableSeedingTimeout() {
                var e = this.disableSeedingTimeoutKey;
                if (a.l.has(e)) {
                    var t = a.l.get(e);
                    clearTimeout(t),
                    a.l.delete(e)
                }
            }
            _bufferP2PChunk(e) {
                this.p2pBufferHasChunks || b("buffering p2p chunks", this.pathname),
                this.p2pBuffer.push(e)
            }
            _enqueueChunksFromP2PBuffer() {
                for (; this.p2pBufferHasChunks; ) {
                    var e = this.p2pBuffer.shift();
                    if (!e) {
                        this._completeDownload();
                        break
                    }
                    (e = this._getSectionOfP2PChunkToEnqueue(e)) && this._enqueueChunk(e)
                }
            }
            _getSectionOfP2PChunkToEnqueue(e) {
                var t = this.handoffByteIndexOverflow;
                if (this.numP2PBytesInHandoffOverlap += e.length,
                this.numP2PBytesInHandoffOverlap < t)
                    return null;
                if (this.numP2PBytesInHandoffOverlap === t)
                    return this._logOfficialHandoffPosition(),
                    this.handoffChunkFound = !0,
                    null;
                if (this.handoffChunkFound)
                    return e;
                var n = this.numP2PBytesInHandoffOverlap - t
                  , r = e.slice(e.length - n);
                return this.handoffChunkFound = !0,
                this._logOfficialHandoffPosition(),
                r
            }
            _onP2PError(e) {
                var t = this;
                return y((function*() {
                    b("p2p error:", t.pathname, e),
                    t._clearP2PDownloadTimeout();
                    var n = e instanceof w
                      , r = e instanceof O
                      , i = t._teardownP2PDownload();
                    return t.backstopCDNRequestAborted ? !n && !r && t.p2pRetryAttempt < 3 ? (yield i,
                    void t._retryP2PDownload()) : (t._performFallbackBackstopCDNRequest(),
                    void (n && Object(f.a)(t.urlObj, t.autoCdnConfig))) : (b("abandoning p2p download to continue initial backstop request", t.pathname),
                    void (t.handoffPerformed && t.streamFromBackstopCDN()))
                }
                ))()
            }
            _retryP2PDownload() {
                this.p2pRetryAttempt++;
                var e = this.remainingFileRange;
                b("retrying p2p download:", this.pathname, "start=".concat(e.start), "end=".concat(e.end), "attempt=".concat(this.p2pRetryAttempt, "/").concat(3)),
                this._streamFromP2PNetwork(e.start)
            }
            _teardownP2PDownload() {
                var e = this;
                return y((function*() {
                    try {
                        yield e.p2pClientRpc.stopTorrentingFile(e.torrentFile)
                    } catch (e) {}
                    a.l.delete(e.fileKey)
                }
                ))()
            }
            _performFallbackBackstopCDNRequest() {
                var e = this;
                return y((function*() {
                    var t = e.remainingFileRange;
                    b("falling back to backstop cdn to complete download:", e.pathname, "start=".concat(t.start), "end=".concat(t.end));
                    try {
                        yield e.fetchFromBackstopCDN(t)
                    } catch (t) {
                        return b(e.pathname, t),
                        void e._performFallbackOriginServerRequest()
                    }
                    e.streamFromBackstopCDN()
                }
                ))()
            }
            _performFallbackOriginServerRequest() {
                var e = this;
                return y((function*() {
                    var t = e.remainingFileRange;
                    b("falling back to origin server to complete download:", e.pathname, "start=".concat(t.start), "end=".concat(t.end), "attempt=".concat(e.originServerRetryAttempt, "/").concat(3)),
                    e.originServerReader = yield A(e.request, t, e.fileSize, (function() {
                        return e._onOriginServerData(...arguments)
                    }
                    )),
                    e.streamKey = C(t, e.filePath),
                    e.fileStreamsMap = k(e.fileStreamsKey, e.streamKey, e.originServerReader)
                }
                ))()
            }
            _onOriginServerData(e, t) {
                this.isControllerClosed || (e ? this._onOriginServerError(e) : t ? this._enqueueChunk(t) : this._completeDownload())
            }
            _onOriginServerError(e) {
                b("origin server error:", this.pathname, e),
                this.originServerRetryAttempt++,
                this.originServerRetryAttempt < 3 && this._performFallbackOriginServerRequest()
            }
            _completeDownload() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (!this.isControllerClosed) {
                    this.isControllerClosed = !0;
                    try {
                        this.controller.close()
                    } catch (e) {
                        b("error closing controller", this.pathname, e)
                    }
                    this._clearP2PDownloadTimeout(),
                    e && this.streamKey && (delete this.fileStreamsMap[this.streamKey],
                    delete this.fileStreamsMap[this.initialBackstopStreamKey]);
                    var t = 0 === Object.keys(this.fileStreamsMap).length;
                    !this.isSeeder && this.wasTorrentCreated && t && this._createDisableSeedingTimeout(),
                    b("download closed:", this.pathname, "".concat(this.rangeStart, "-").concat(this.rangeEnd, "/").concat(this.fileSize))
                }
            }
            _logOfficialHandoffPosition() {
                b("officially handing off to p2p:", this.pathname, "estimated-hbi=".concat(this.handoffByteIndex), "actual-hbi=".concat(this.enqueuedBytesCount))
            }
        }
        function k(e, t, n) {
            a.l.has(e) || a.l.set(e, {});
            var r = a.l.get(e)
              , i = t.startsWith("initial");
            for (var o in r) {
                var s = r[o] || {};
                o.startsWith("initial") && !i || (s.destroy ? s.destroy().catch(_) : s.cancel && s.cancel().catch(_),
                delete r[o])
            }
            return r[t] = n,
            r
        }
        function C(e, t) {
            if ("start"in e && "end"in e) {
                var {start: n, end: r} = e;
                return "".concat(n, "-").concat(r)
            }
            return t
        }
        function T(e, t, n, r) {
            return R.apply(this, arguments)
        }
        function R() {
            return (R = y((function*(e, t, n, r) {
                var i;
                return a.l.has(e) ? i = a.l.get(e) : (i = yield n.getProxiedFile(t, s.j, r),
                a.l.set(e, i)),
                i
            }
            ))).apply(this, arguments)
        }
        function P(e, t, n) {
            return I.apply(this, arguments)
        }
        function I() {
            return (I = y((function*(e, t, n) {
                var i = []
                  , o = e;
                function a(e, t) {
                    return e ? (n(e),
                    void (n = _)) : t ? n(null, t) : (n(null, null),
                    void (n = _))
                }
                o.on("readable", r.b(y((function*() {
                    var e = o.read();
                    i.push(e);
                    var t = yield e;
                    if (t)
                        try {
                            n(null, t)
                        } catch (e) {
                            b(e)
                        }
                }
                )))),
                o.on("end", r.b(y((function*() {
                    yield Promise.all(i),
                    a(null, null)
                }
                )))),
                o.on("error", r.b(e=>{
                    a(e)
                }
                )),
                t.once("webseedErr", r.b(e=>{
                    o.destroy(),
                    a(new w(e.message))
                }
                ))
            }
            ))).apply(this, arguments)
        }
        function A(e, t, n, r) {
            return L.apply(this, arguments)
        }
        function L() {
            return (L = y((function*(t, n, r, i) {
                var o = {
                    headers: {}
                }
                  , {start: a, end: s} = n
                  , c = s - a + 1
                  , u = c !== r;
                u && (o.headers.range = "bytes=".concat(a, "-").concat(s));
                var f = yield fetch(t.url, o)
                  , l = 206 === f.status;
                if (l && f.headers.has("content-length")) {
                    var h = Number(f.headers.get("content-length"));
                    l = l && h === c
                }
                b("pipeFromOriginServer, requiresRangeReq: ".concat(u, ", "), "isRangeResponse: ".concat(l, ", "), n);
                var p = e=>e;
                u && !l && (p = N(a, s));
                var d = f.body.getReader();
                e.nextTick(y((function*() {
                    for (; ; ) {
                        var {done: e, value: t} = yield d.read();
                        if (e) {
                            g();
                            break
                        }
                        var n = p(t);
                        if (i(null, n),
                        null === n) {
                            g();
                            break
                        }
                    }
                }
                )));
                var v = !1;
                function g() {
                    v || (v = !0,
                    i(null, null),
                    d.cancel())
                }
                return d
            }
            ))).apply(this, arguments)
        }
        function N(e, t) {
            var n = 0
              , r = e
              , i = new Uint8Array(0);
            return o=>{
                var a = o.length;
                if (n < e) {
                    var s = Math.min(a, e - n);
                    return n += s,
                    s < a ? o.slice(s) : i
                }
                if (r < t) {
                    var c = Math.min(a, t - r);
                    return r += c,
                    c < a ? o.slice(0, c) : o
                }
                return null
            }
        }
        function D(e, t) {
            var n = {}
              , r = e.headers || {};
            if (r.has("range")) {
                var i = r.get("range")
                  , a = o()(t, i);
                if ("bytes" === a.type && a[0])
                    n = a[0]
            }
            return n
        }
        function B(e, t, n, r) {
            return M.apply(this, arguments)
        }
        function M() {
            return (M = y((function*(e, t, n, r) {
                var {request: i, clientId: o} = e.event
                  , {fid: s, torrentFileObj: c} = n
                  , u = {
                    skipWaitingForBroker: !1
                };
                if (a.l.has(m)) {
                    var l = a.l.get(m).has(s);
                    u.skipWaitingForBroker = !l
                }
                var h, d, v = "file:".concat(o, "-").concat(s), g = "fileStream:".concat(o, "-").concat(s), _ = C(r, s), O = c.length, E = 0, S = !1, j = 0, x = {};
                function R() {
                    return (R = y((function*(o) {
                        h = yield T(v, n, t, u);
                        try {
                            d = yield h.createReadStream(r)
                        } catch (e) {
                            return void l(e)
                        }
                        function s(e, t) {
                            if (!S)
                                return e ? l(e) : t ? (o.enqueue(t),
                                void (E += t.length)) : void function() {
                                    try {
                                        o.close(),
                                        S = !0,
                                        delete x[_]
                                    } catch (e) {
                                        b(e)
                                    }
                                }()
                        }
                        function l(e) {
                            return m.apply(this, arguments)
                        }
                        function m() {
                            return (m = y((function*(o) {
                                b("onError", o);
                                try {
                                    yield t.stopTorrentingFile(c)
                                } catch (o) {}
                                a.l.delete(v);
                                var l = O - 1
                                  , y = p({}, r)
                                  , m = y.start || 0;
                                if (y.start = m + E,
                                y.end = y.end || l,
                                !(o instanceof w) && j < 3)
                                    j++,
                                    b("Retry stream attempt: ".concat(j, ". ") + "initialStart: ".concat(m, ", ") + "enqueued:".concat(E, ", ") + "clonedRange: ".concat(y)),
                                    h = yield T(v, n, t, u),
                                    d = yield h.createReadStream(y),
                                    yield P(d, h, s),
                                    x = k(g, _, d);
                                else {
                                    var S = yield A(i, y, O, s);
                                    x = k(g, _, S);
                                    var {autoCdnConfig: C} = e.cdnConfig;
                                    Object(f.a)(e.urlObj, C)
                                }
                            }
                            ))).apply(this, arguments)
                        }
                        yield P(d, h, s),
                        x = k(g, _, d)
                    }
                    ))).apply(this, arguments)
                }
                return new ReadableStream({
                    start: function(e) {
                        return R.apply(this, arguments)
                    },
                    cancel: function(e) {
                        b("".concat(pathname, ": fileStream CANCELLED"), e),
                        d.destroy()
                    }
                })
            }
            ))).apply(this, arguments)
        }
        function F(e, t, n) {
            var r = {
                headers: e.headers || {}
            };
            if ("start"in t && "end"in t) {
                var {start: i, end: o} = t;
                r.status = 206,
                r.statusText = "Partial Content",
                r.headers = p(p({
                    "accept-ranges": "bytes",
                    "content-type": "application/octet-stream; charset=UTF-8"
                }, r.headers), {}, {
                    "content-length": o - i + 1,
                    "content-range": "bytes ".concat(i, "-").concat(o, "/").concat(n)
                })
            }
            return r
        }
    }
    ).call(this, n(10))
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        void 0 === t || !t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = {
            nextTick: function(e, n, r, i) {
                if ("function" != typeof e)
                    throw new TypeError('"callback" argument must be a function');
                var o, a, s = arguments.length;
                switch (s) {
                case 0:
                case 1:
                    return t.nextTick(e);
                case 2:
                    return t.nextTick((function() {
                        e.call(null, n)
                    }
                    ));
                case 3:
                    return t.nextTick((function() {
                        e.call(null, n, r)
                    }
                    ));
                case 4:
                    return t.nextTick((function() {
                        e.call(null, n, r, i)
                    }
                    ));
                default:
                    for (o = new Array(s - 1),
                    a = 0; a < o.length; )
                        o[a++] = arguments[a];
                    return t.nextTick((function() {
                        e.apply(null, o)
                    }
                    ))
                }
            }
        } : e.exports = t
    }
    ).call(this, n(10))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }
    ));
    function r(e) {
        try {
            return e && "function" == typeof e && e.name || "<anonymous>"
        } catch (e) {
            return "<anonymous>"
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(76)
      , i = n(78);
    function o() {
        this.protocol = null,
        this.slashes = null,
        this.auth = null,
        this.host = null,
        this.port = null,
        this.hostname = null,
        this.hash = null,
        this.search = null,
        this.query = null,
        this.pathname = null,
        this.path = null,
        this.href = null
    }
    t.parse = b,
    t.resolve = function(e, t) {
        return b(e, !1, !0).resolve(t)
    }
    ,
    t.resolveObject = function(e, t) {
        return e ? b(e, !1, !0).resolveObject(t) : t
    }
    ,
    t.format = function(e) {
        i.isString(e) && (e = b(e));
        return e instanceof o ? e.format() : o.prototype.format.call(e)
    }
    ,
    t.Url = o;
    var a = /^([a-z0-9.+-]+:)/i
      , s = /:[0-9]*$/
      , c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/
      , u = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"])
      , f = ["'"].concat(u)
      , l = ["%", "/", "?", ";", "#"].concat(f)
      , h = ["/", "?", "#"]
      , p = /^[+a-z0-9A-Z_-]{0,63}$/
      , d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
      , v = {
        javascript: !0,
        "javascript:": !0
    }
      , y = {
        javascript: !0,
        "javascript:": !0
    }
      , g = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0
    }
      , m = n(43);
    function b(e, t, n) {
        if (e && i.isObject(e) && e instanceof o)
            return e;
        var r = new o;
        return r.parse(e, t, n),
        r
    }
    o.prototype.parse = function(e, t, n) {
        if (!i.isString(e))
            throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
        var o = e.indexOf("?")
          , s = -1 !== o && o < e.indexOf("#") ? "?" : "#"
          , u = e.split(s);
        u[0] = u[0].replace(/\\/g, "/");
        var b = e = u.join(s);
        if (b = b.trim(),
        !n && 1 === e.split("#").length) {
            var _ = c.exec(b);
            if (_)
                return this.path = b,
                this.href = b,
                this.pathname = _[1],
                _[2] ? (this.search = _[2],
                this.query = t ? m.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "",
                this.query = {}),
                this
        }
        var w = a.exec(b);
        if (w) {
            var O = (w = w[0]).toLowerCase();
            this.protocol = O,
            b = b.substr(w.length)
        }
        if (n || w || b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var E = "//" === b.substr(0, 2);
            !E || w && y[w] || (b = b.substr(2),
            this.slashes = !0)
        }
        if (!y[w] && (E || w && !g[w])) {
            for (var S, j, x = -1, k = 0; k < h.length; k++) {
                -1 !== (C = b.indexOf(h[k])) && (-1 === x || C < x) && (x = C)
            }
            -1 !== (j = -1 === x ? b.lastIndexOf("@") : b.lastIndexOf("@", x)) && (S = b.slice(0, j),
            b = b.slice(j + 1),
            this.auth = decodeURIComponent(S)),
            x = -1;
            for (k = 0; k < l.length; k++) {
                var C;
                -1 !== (C = b.indexOf(l[k])) && (-1 === x || C < x) && (x = C)
            }
            -1 === x && (x = b.length),
            this.host = b.slice(0, x),
            b = b.slice(x),
            this.parseHost(),
            this.hostname = this.hostname || "";
            var T = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!T)
                for (var R = this.hostname.split(/\./), P = (k = 0,
                R.length); k < P; k++) {
                    var I = R[k];
                    if (I && !I.match(p)) {
                        for (var A = "", L = 0, N = I.length; L < N; L++)
                            I.charCodeAt(L) > 127 ? A += "x" : A += I[L];
                        if (!A.match(p)) {
                            var D = R.slice(0, k)
                              , B = R.slice(k + 1)
                              , M = I.match(d);
                            M && (D.push(M[1]),
                            B.unshift(M[2])),
                            B.length && (b = "/" + B.join(".") + b),
                            this.hostname = D.join(".");
                            break
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(),
            T || (this.hostname = r.toASCII(this.hostname));
            var F = this.port ? ":" + this.port : ""
              , U = this.hostname || "";
            this.host = U + F,
            this.href += this.host,
            T && (this.hostname = this.hostname.substr(1, this.hostname.length - 2),
            "/" !== b[0] && (b = "/" + b))
        }
        if (!v[O])
            for (k = 0,
            P = f.length; k < P; k++) {
                var q = f[k];
                if (-1 !== b.indexOf(q)) {
                    var H = encodeURIComponent(q);
                    H === q && (H = escape(q)),
                    b = b.split(q).join(H)
                }
            }
        var W = b.indexOf("#");
        -1 !== W && (this.hash = b.substr(W),
        b = b.slice(0, W));
        var G = b.indexOf("?");
        if (-1 !== G ? (this.search = b.substr(G),
        this.query = b.substr(G + 1),
        t && (this.query = m.parse(this.query)),
        b = b.slice(0, G)) : t && (this.search = "",
        this.query = {}),
        b && (this.pathname = b),
        g[O] && this.hostname && !this.pathname && (this.pathname = "/"),
        this.pathname || this.search) {
            F = this.pathname || "";
            var z = this.search || "";
            this.path = F + z
        }
        return this.href = this.format(),
        this
    }
    ,
    o.prototype.format = function() {
        var e = this.auth || "";
        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"),
        e += "@");
        var t = this.protocol || ""
          , n = this.pathname || ""
          , r = this.hash || ""
          , o = !1
          , a = "";
        this.host ? o = e + this.host : this.hostname && (o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"),
        this.port && (o += ":" + this.port)),
        this.query && i.isObject(this.query) && Object.keys(this.query).length && (a = m.stringify(this.query));
        var s = this.search || a && "?" + a || "";
        return t && ":" !== t.substr(-1) && (t += ":"),
        this.slashes || (!t || g[t]) && !1 !== o ? (o = "//" + (o || ""),
        n && "/" !== n.charAt(0) && (n = "/" + n)) : o || (o = ""),
        r && "#" !== r.charAt(0) && (r = "#" + r),
        s && "?" !== s.charAt(0) && (s = "?" + s),
        t + o + (n = n.replace(/[?#]/g, (function(e) {
            return encodeURIComponent(e)
        }
        ))) + (s = s.replace("#", "%23")) + r
    }
    ,
    o.prototype.resolve = function(e) {
        return this.resolveObject(b(e, !1, !0)).format()
    }
    ,
    o.prototype.resolveObject = function(e) {
        if (i.isString(e)) {
            var t = new o;
            t.parse(e, !1, !0),
            e = t
        }
        for (var n = new o, r = Object.keys(this), a = 0; a < r.length; a++) {
            var s = r[a];
            n[s] = this[s]
        }
        if (n.hash = e.hash,
        "" === e.href)
            return n.href = n.format(),
            n;
        if (e.slashes && !e.protocol) {
            for (var c = Object.keys(e), u = 0; u < c.length; u++) {
                var f = c[u];
                "protocol" !== f && (n[f] = e[f])
            }
            return g[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"),
            n.href = n.format(),
            n
        }
        if (e.protocol && e.protocol !== n.protocol) {
            if (!g[e.protocol]) {
                for (var l = Object.keys(e), h = 0; h < l.length; h++) {
                    var p = l[h];
                    n[p] = e[p]
                }
                return n.href = n.format(),
                n
            }
            if (n.protocol = e.protocol,
            e.host || y[e.protocol])
                n.pathname = e.pathname;
            else {
                for (var d = (e.pathname || "").split("/"); d.length && !(e.host = d.shift()); )
                    ;
                e.host || (e.host = ""),
                e.hostname || (e.hostname = ""),
                "" !== d[0] && d.unshift(""),
                d.length < 2 && d.unshift(""),
                n.pathname = d.join("/")
            }
            if (n.search = e.search,
            n.query = e.query,
            n.host = e.host || "",
            n.auth = e.auth,
            n.hostname = e.hostname || e.host,
            n.port = e.port,
            n.pathname || n.search) {
                var v = n.pathname || ""
                  , m = n.search || "";
                n.path = v + m
            }
            return n.slashes = n.slashes || e.slashes,
            n.href = n.format(),
            n
        }
        var b = n.pathname && "/" === n.pathname.charAt(0)
          , _ = e.host || e.pathname && "/" === e.pathname.charAt(0)
          , w = _ || b || n.host && e.pathname
          , O = w
          , E = n.pathname && n.pathname.split("/") || []
          , S = (d = e.pathname && e.pathname.split("/") || [],
        n.protocol && !g[n.protocol]);
        if (S && (n.hostname = "",
        n.port = null,
        n.host && ("" === E[0] ? E[0] = n.host : E.unshift(n.host)),
        n.host = "",
        e.protocol && (e.hostname = null,
        e.port = null,
        e.host && ("" === d[0] ? d[0] = e.host : d.unshift(e.host)),
        e.host = null),
        w = w && ("" === d[0] || "" === E[0])),
        _)
            n.host = e.host || "" === e.host ? e.host : n.host,
            n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname,
            n.search = e.search,
            n.query = e.query,
            E = d;
        else if (d.length)
            E || (E = []),
            E.pop(),
            E = E.concat(d),
            n.search = e.search,
            n.query = e.query;
        else if (!i.isNullOrUndefined(e.search)) {
            if (S)
                n.hostname = n.host = E.shift(),
                (T = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = T.shift(),
                n.host = n.hostname = T.shift());
            return n.search = e.search,
            n.query = e.query,
            i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
            n.href = n.format(),
            n
        }
        if (!E.length)
            return n.pathname = null,
            n.search ? n.path = "/" + n.search : n.path = null,
            n.href = n.format(),
            n;
        for (var j = E.slice(-1)[0], x = (n.host || e.host || E.length > 1) && ("." === j || ".." === j) || "" === j, k = 0, C = E.length; C >= 0; C--)
            "." === (j = E[C]) ? E.splice(C, 1) : ".." === j ? (E.splice(C, 1),
            k++) : k && (E.splice(C, 1),
            k--);
        if (!w && !O)
            for (; k--; k)
                E.unshift("..");
        !w || "" === E[0] || E[0] && "/" === E[0].charAt(0) || E.unshift(""),
        x && "/" !== E.join("/").substr(-1) && E.push("");
        var T, R = "" === E[0] || E[0] && "/" === E[0].charAt(0);
        S && (n.hostname = n.host = R ? "" : E.length ? E.shift() : "",
        (T = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = T.shift(),
        n.host = n.hostname = T.shift()));
        return (w = w || n.host && E.length) && !R && E.unshift(""),
        E.length ? n.pathname = E.join("/") : (n.pathname = null,
        n.path = null),
        i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
        n.auth = e.auth || n.auth,
        n.slashes = n.slashes || e.slashes,
        n.href = n.format(),
        n
    }
    ,
    o.prototype.parseHost = function() {
        var e = this.host
          , t = s.exec(e);
        t && (":" !== (t = t[0]) && (this.port = t.substr(1)),
        e = e.substr(0, e.length - t.length)),
        e && (this.hostname = e)
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }
    ));
    var r = n(5);
    function i(e) {
        try {
            for (var t = e, n = [], r = 0, i = 0, a = " > ".length, s = void 0; t && r++ < 5 && !("html" === (s = o(t)) || r > 1 && i + n.length * a + s.length >= 80); )
                n.push(s),
                i += s.length,
                t = t.parentNode;
            return n.reverse().join(" > ")
        } catch (e) {
            return "<unknown>"
        }
    }
    function o(e) {
        var t, n, i, o, a, s = e, c = [];
        if (!s || !s.tagName)
            return "";
        if (c.push(s.tagName.toLowerCase()),
        s.id && c.push("#" + s.id),
        (t = s.className) && Object(r.k)(t))
            for (n = t.split(/\s+/),
            a = 0; a < n.length; a++)
                c.push("." + n[a]);
        var u = ["type", "name", "title", "alt"];
        for (a = 0; a < u.length; a++)
            i = u[a],
            (o = s.getAttribute(i)) && c.push("[" + i + '="' + o + '"]');
        return c.join("")
    }
}
, function(e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == n.call(e)
    }
}
, function(e, t, n) {
    (function(e) {
        var r = n(65)
          , i = n(34)
          , o = n(74)
          , a = n(75)
          , s = n(29)
          , c = t;
        c.request = function(t, n) {
            t = "string" == typeof t ? s.parse(t) : o(t);
            var i = -1 === e.location.protocol.search(/^https?:$/) ? "http:" : ""
              , a = t.protocol || i
              , c = t.hostname || t.host
              , u = t.port
              , f = t.path || "/";
            c && -1 !== c.indexOf(":") && (c = "[" + c + "]"),
            t.url = (c ? a + "//" + c : "") + (u ? ":" + u : "") + f,
            t.method = (t.method || "GET").toUpperCase(),
            t.headers = t.headers || {};
            var l = new r(t);
            return n && l.on("response", n),
            l
        }
        ,
        c.get = function(e, t) {
            var n = c.request(e, t);
            return n.end(),
            n
        }
        ,
        c.ClientRequest = r,
        c.IncomingMessage = i.IncomingMessage,
        c.Agent = function() {}
        ,
        c.Agent.defaultMaxSockets = 4,
        c.globalAgent = new c.Agent,
        c.STATUS_CODES = a,
        c.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"]
    }
    ).call(this, n(8))
}
, function(e, t, n) {
    (function(e) {
        t.fetch = s(e.fetch) && s(e.ReadableStream),
        t.writableStream = s(e.WritableStream),
        t.abortController = s(e.AbortController),
        t.blobConstructor = !1;
        try {
            new Blob([new ArrayBuffer(1)]),
            t.blobConstructor = !0
        } catch (e) {}
        var n;
        function r() {
            if (void 0 !== n)
                return n;
            if (e.XMLHttpRequest) {
                n = new e.XMLHttpRequest;
                try {
                    n.open("GET", e.XDomainRequest ? "/" : "https://example.com")
                } catch (e) {
                    n = null
                }
            } else
                n = null;
            return n
        }
        function i(e) {
            var t = r();
            if (!t)
                return !1;
            try {
                return t.responseType = e,
                t.responseType === e
            } catch (e) {}
            return !1
        }
        var o = void 0 !== e.ArrayBuffer
          , a = o && s(e.ArrayBuffer.prototype.slice);
        function s(e) {
            return "function" == typeof e
        }
        t.arraybuffer = t.fetch || o && i("arraybuffer"),
        t.msstream = !t.fetch && a && i("ms-stream"),
        t.mozchunkedarraybuffer = !t.fetch && o && i("moz-chunked-arraybuffer"),
        t.overrideMimeType = t.fetch || !!r() && s(r().overrideMimeType),
        t.vbArray = s(e.VBArray),
        n = null
    }
    ).call(this, n(8))
}
, function(e, t, n) {
    (function(e, r, i) {
        var o = n(33)
          , a = n(17)
          , s = n(35)
          , c = t.readyStates = {
            UNSENT: 0,
            OPENED: 1,
            HEADERS_RECEIVED: 2,
            LOADING: 3,
            DONE: 4
        }
          , u = t.IncomingMessage = function(t, n, a, c) {
            var u = this;
            if (s.Readable.call(u),
            u._mode = a,
            u.headers = {},
            u.rawHeaders = [],
            u.trailers = {},
            u.rawTrailers = [],
            u.on("end", (function() {
                e.nextTick((function() {
                    u.emit("close")
                }
                ))
            }
            )),
            "fetch" === a) {
                if (u._fetchResponse = n,
                u.url = n.url,
                u.statusCode = n.status,
                u.statusMessage = n.statusText,
                n.headers.forEach((function(e, t) {
                    u.headers[t.toLowerCase()] = e,
                    u.rawHeaders.push(t, e)
                }
                )),
                o.writableStream) {
                    var f = new WritableStream({
                        write: function(e) {
                            return new Promise((function(t, n) {
                                u._destroyed ? n() : u.push(new r(e)) ? t() : u._resumeFetch = t
                            }
                            ))
                        },
                        close: function() {
                            i.clearTimeout(c),
                            u._destroyed || u.push(null)
                        },
                        abort: function(e) {
                            u._destroyed || u.emit("error", e)
                        }
                    });
                    try {
                        return void n.body.pipeTo(f).catch((function(e) {
                            i.clearTimeout(c),
                            u._destroyed || u.emit("error", e)
                        }
                        ))
                    } catch (e) {}
                }
                var l = n.body.getReader();
                !function e() {
                    l.read().then((function(t) {
                        if (!u._destroyed) {
                            if (t.done)
                                return i.clearTimeout(c),
                                void u.push(null);
                            u.push(new r(t.value)),
                            e()
                        }
                    }
                    )).catch((function(e) {
                        i.clearTimeout(c),
                        u._destroyed || u.emit("error", e)
                    }
                    ))
                }()
            } else {
                if (u._xhr = t,
                u._pos = 0,
                u.url = t.responseURL,
                u.statusCode = t.status,
                u.statusMessage = t.statusText,
                t.getAllResponseHeaders().split(/\r?\n/).forEach((function(e) {
                    var t = e.match(/^([^:]+):\s*(.*)/);
                    if (t) {
                        var n = t[1].toLowerCase();
                        "set-cookie" === n ? (void 0 === u.headers[n] && (u.headers[n] = []),
                        u.headers[n].push(t[2])) : void 0 !== u.headers[n] ? u.headers[n] += ", " + t[2] : u.headers[n] = t[2],
                        u.rawHeaders.push(t[1], t[2])
                    }
                }
                )),
                u._charset = "x-user-defined",
                !o.overrideMimeType) {
                    var h = u.rawHeaders["mime-type"];
                    if (h) {
                        var p = h.match(/;\s*charset=([^;])(;|$)/);
                        p && (u._charset = p[1].toLowerCase())
                    }
                    u._charset || (u._charset = "utf-8")
                }
            }
        }
        ;
        a(u, s.Readable),
        u.prototype._read = function() {
            var e = this._resumeFetch;
            e && (this._resumeFetch = null,
            e())
        }
        ,
        u.prototype._onXHRProgress = function() {
            var e = this
              , t = e._xhr
              , n = null;
            switch (e._mode) {
            case "text:vbarray":
                if (t.readyState !== c.DONE)
                    break;
                try {
                    n = new i.VBArray(t.responseBody).toArray()
                } catch (e) {}
                if (null !== n) {
                    e.push(new r(n));
                    break
                }
            case "text":
                try {
                    n = t.responseText
                } catch (t) {
                    e._mode = "text:vbarray";
                    break
                }
                if (n.length > e._pos) {
                    var o = n.substr(e._pos);
                    if ("x-user-defined" === e._charset) {
                        for (var a = new r(o.length), s = 0; s < o.length; s++)
                            a[s] = 255 & o.charCodeAt(s);
                        e.push(a)
                    } else
                        e.push(o, e._charset);
                    e._pos = n.length
                }
                break;
            case "arraybuffer":
                if (t.readyState !== c.DONE || !t.response)
                    break;
                n = t.response,
                e.push(new r(new Uint8Array(n)));
                break;
            case "moz-chunked-arraybuffer":
                if (n = t.response,
                t.readyState !== c.LOADING || !n)
                    break;
                e.push(new r(new Uint8Array(n)));
                break;
            case "ms-stream":
                if (n = t.response,
                t.readyState !== c.LOADING)
                    break;
                var u = new i.MSStreamReader;
                u.onprogress = function() {
                    u.result.byteLength > e._pos && (e.push(new r(new Uint8Array(u.result.slice(e._pos)))),
                    e._pos = u.result.byteLength)
                }
                ,
                u.onload = function() {
                    e.push(null)
                }
                ,
                u.readAsArrayBuffer(n)
            }
            e._xhr.readyState === c.DONE && "ms-stream" !== e._mode && e.push(null)
        }
    }
    ).call(this, n(10), n(12).Buffer, n(8))
}
, function(e, t, n) {
    (t = e.exports = n(36)).Stream = t,
    t.Readable = t,
    t.Writable = n(40),
    t.Duplex = n(20),
    t.Transform = n(42),
    t.PassThrough = n(72)
}
, function(e, t, n) {
    "use strict";
    (function(t, r) {
        var i = n(27);
        e.exports = b;
        var o, a = n(31);
        b.ReadableState = m;
        n(37).EventEmitter;
        var s = function(e, t) {
            return e.listeners(t).length
        }
          , c = n(38)
          , u = n(13).Buffer
          , f = t.Uint8Array || function() {}
        ;
        var l = Object.create(n(23));
        l.inherits = n(17);
        var h = n(66)
          , p = void 0;
        p = h && h.debuglog ? h.debuglog("stream") : function() {}
        ;
        var d, v = n(67), y = n(39);
        l.inherits(b, c);
        var g = ["error", "close", "destroy", "pause", "resume"];
        function m(e, t) {
            e = e || {};
            var r = t instanceof (o = o || n(20));
            this.objectMode = !!e.objectMode,
            r && (this.objectMode = this.objectMode || !!e.readableObjectMode);
            var i = e.highWaterMark
              , a = e.readableHighWaterMark
              , s = this.objectMode ? 16 : 16384;
            this.highWaterMark = i || 0 === i ? i : r && (a || 0 === a) ? a : s,
            this.highWaterMark = Math.floor(this.highWaterMark),
            this.buffer = new v,
            this.length = 0,
            this.pipes = null,
            this.pipesCount = 0,
            this.flowing = null,
            this.ended = !1,
            this.endEmitted = !1,
            this.reading = !1,
            this.sync = !0,
            this.needReadable = !1,
            this.emittedReadable = !1,
            this.readableListening = !1,
            this.resumeScheduled = !1,
            this.destroyed = !1,
            this.defaultEncoding = e.defaultEncoding || "utf8",
            this.awaitDrain = 0,
            this.readingMore = !1,
            this.decoder = null,
            this.encoding = null,
            e.encoding && (d || (d = n(41).StringDecoder),
            this.decoder = new d(e.encoding),
            this.encoding = e.encoding)
        }
        function b(e) {
            if (o = o || n(20),
            !(this instanceof b))
                return new b(e);
            this._readableState = new m(e,this),
            this.readable = !0,
            e && ("function" == typeof e.read && (this._read = e.read),
            "function" == typeof e.destroy && (this._destroy = e.destroy)),
            c.call(this)
        }
        function _(e, t, n, r, i) {
            var o, a = e._readableState;
            null === t ? (a.reading = !1,
            function(e, t) {
                if (t.ended)
                    return;
                if (t.decoder) {
                    var n = t.decoder.end();
                    n && n.length && (t.buffer.push(n),
                    t.length += t.objectMode ? 1 : n.length)
                }
                t.ended = !0,
                E(e)
            }(e, a)) : (i || (o = function(e, t) {
                var n;
                r = t,
                u.isBuffer(r) || r instanceof f || "string" == typeof t || void 0 === t || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk"));
                var r;
                return n
            }(a, t)),
            o ? e.emit("error", o) : a.objectMode || t && t.length > 0 ? ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === u.prototype || (t = function(e) {
                return u.from(e)
            }(t)),
            r ? a.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : w(e, a, t, !0) : a.ended ? e.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1,
            a.decoder && !n ? (t = a.decoder.write(t),
            a.objectMode || 0 !== t.length ? w(e, a, t, !1) : j(e, a)) : w(e, a, t, !1))) : r || (a.reading = !1));
            return function(e) {
                return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
            }(a)
        }
        function w(e, t, n, r) {
            t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n),
            e.read(0)) : (t.length += t.objectMode ? 1 : n.length,
            r ? t.buffer.unshift(n) : t.buffer.push(n),
            t.needReadable && E(e)),
            j(e, t)
        }
        Object.defineProperty(b.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._readableState && this._readableState.destroyed
            },
            set: function(e) {
                this._readableState && (this._readableState.destroyed = e)
            }
        }),
        b.prototype.destroy = y.destroy,
        b.prototype._undestroy = y.undestroy,
        b.prototype._destroy = function(e, t) {
            this.push(null),
            t(e)
        }
        ,
        b.prototype.push = function(e, t) {
            var n, r = this._readableState;
            return r.objectMode ? n = !0 : "string" == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = u.from(e, t),
            t = ""),
            n = !0),
            _(this, e, t, !1, n)
        }
        ,
        b.prototype.unshift = function(e) {
            return _(this, e, null, !0, !1)
        }
        ,
        b.prototype.isPaused = function() {
            return !1 === this._readableState.flowing
        }
        ,
        b.prototype.setEncoding = function(e) {
            return d || (d = n(41).StringDecoder),
            this._readableState.decoder = new d(e),
            this._readableState.encoding = e,
            this
        }
        ;
        function O(e, t) {
            return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
                return e >= 8388608 ? e = 8388608 : (e--,
                e |= e >>> 1,
                e |= e >>> 2,
                e |= e >>> 4,
                e |= e >>> 8,
                e |= e >>> 16,
                e++),
                e
            }(e)),
            e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0,
            0))
        }
        function E(e) {
            var t = e._readableState;
            t.needReadable = !1,
            t.emittedReadable || (p("emitReadable", t.flowing),
            t.emittedReadable = !0,
            t.sync ? i.nextTick(S, e) : S(e))
        }
        function S(e) {
            p("emit readable"),
            e.emit("readable"),
            T(e)
        }
        function j(e, t) {
            t.readingMore || (t.readingMore = !0,
            i.nextTick(x, e, t))
        }
        function x(e, t) {
            for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (p("maybeReadMore read 0"),
            e.read(0),
            n !== t.length); )
                n = t.length;
            t.readingMore = !1
        }
        function k(e) {
            p("readable nexttick read 0"),
            e.read(0)
        }
        function C(e, t) {
            t.reading || (p("resume read 0"),
            e.read(0)),
            t.resumeScheduled = !1,
            t.awaitDrain = 0,
            e.emit("resume"),
            T(e),
            t.flowing && !t.reading && e.read(0)
        }
        function T(e) {
            var t = e._readableState;
            for (p("flow", t.flowing); t.flowing && null !== e.read(); )
                ;
        }
        function R(e, t) {
            return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length),
            t.buffer.clear()) : n = function(e, t, n) {
                var r;
                e < t.head.data.length ? (r = t.head.data.slice(0, e),
                t.head.data = t.head.data.slice(e)) : r = e === t.head.data.length ? t.shift() : n ? function(e, t) {
                    var n = t.head
                      , r = 1
                      , i = n.data;
                    e -= i.length;
                    for (; n = n.next; ) {
                        var o = n.data
                          , a = e > o.length ? o.length : e;
                        if (a === o.length ? i += o : i += o.slice(0, e),
                        0 === (e -= a)) {
                            a === o.length ? (++r,
                            n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n,
                            n.data = o.slice(a));
                            break
                        }
                        ++r
                    }
                    return t.length -= r,
                    i
                }(e, t) : function(e, t) {
                    var n = u.allocUnsafe(e)
                      , r = t.head
                      , i = 1;
                    r.data.copy(n),
                    e -= r.data.length;
                    for (; r = r.next; ) {
                        var o = r.data
                          , a = e > o.length ? o.length : e;
                        if (o.copy(n, n.length - e, 0, a),
                        0 === (e -= a)) {
                            a === o.length ? (++i,
                            r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r,
                            r.data = o.slice(a));
                            break
                        }
                        ++i
                    }
                    return t.length -= i,
                    n
                }(e, t);
                return r
            }(e, t.buffer, t.decoder),
            n);
            var n
        }
        function P(e) {
            var t = e._readableState;
            if (t.length > 0)
                throw new Error('"endReadable()" called on non-empty stream');
            t.endEmitted || (t.ended = !0,
            i.nextTick(I, t, e))
        }
        function I(e, t) {
            e.endEmitted || 0 !== e.length || (e.endEmitted = !0,
            t.readable = !1,
            t.emit("end"))
        }
        function A(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }
        b.prototype.read = function(e) {
            p("read", e),
            e = parseInt(e, 10);
            var t = this._readableState
              , n = e;
            if (0 !== e && (t.emittedReadable = !1),
            0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
                return p("read: emitReadable", t.length, t.ended),
                0 === t.length && t.ended ? P(this) : E(this),
                null;
            if (0 === (e = O(e, t)) && t.ended)
                return 0 === t.length && P(this),
                null;
            var r, i = t.needReadable;
            return p("need readable", i),
            (0 === t.length || t.length - e < t.highWaterMark) && p("length less than watermark", i = !0),
            t.ended || t.reading ? p("reading or ended", i = !1) : i && (p("do read"),
            t.reading = !0,
            t.sync = !0,
            0 === t.length && (t.needReadable = !0),
            this._read(t.highWaterMark),
            t.sync = !1,
            t.reading || (e = O(n, t))),
            null === (r = e > 0 ? R(e, t) : null) ? (t.needReadable = !0,
            e = 0) : t.length -= e,
            0 === t.length && (t.ended || (t.needReadable = !0),
            n !== e && t.ended && P(this)),
            null !== r && this.emit("data", r),
            r
        }
        ,
        b.prototype._read = function(e) {
            this.emit("error", new Error("_read() is not implemented"))
        }
        ,
        b.prototype.pipe = function(e, t) {
            var n = this
              , o = this._readableState;
            switch (o.pipesCount) {
            case 0:
                o.pipes = e;
                break;
            case 1:
                o.pipes = [o.pipes, e];
                break;
            default:
                o.pipes.push(e)
            }
            o.pipesCount += 1,
            p("pipe count=%d opts=%j", o.pipesCount, t);
            var c = (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? f : b;
            function u(t, r) {
                p("onunpipe"),
                t === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0,
                p("cleanup"),
                e.removeListener("close", g),
                e.removeListener("finish", m),
                e.removeListener("drain", l),
                e.removeListener("error", y),
                e.removeListener("unpipe", u),
                n.removeListener("end", f),
                n.removeListener("end", b),
                n.removeListener("data", v),
                h = !0,
                !o.awaitDrain || e._writableState && !e._writableState.needDrain || l())
            }
            function f() {
                p("onend"),
                e.end()
            }
            o.endEmitted ? i.nextTick(c) : n.once("end", c),
            e.on("unpipe", u);
            var l = function(e) {
                return function() {
                    var t = e._readableState;
                    p("pipeOnDrain", t.awaitDrain),
                    t.awaitDrain && t.awaitDrain--,
                    0 === t.awaitDrain && s(e, "data") && (t.flowing = !0,
                    T(e))
                }
            }(n);
            e.on("drain", l);
            var h = !1;
            var d = !1;
            function v(t) {
                p("ondata"),
                d = !1,
                !1 !== e.write(t) || d || ((1 === o.pipesCount && o.pipes === e || o.pipesCount > 1 && -1 !== A(o.pipes, e)) && !h && (p("false write response, pause", n._readableState.awaitDrain),
                n._readableState.awaitDrain++,
                d = !0),
                n.pause())
            }
            function y(t) {
                p("onerror", t),
                b(),
                e.removeListener("error", y),
                0 === s(e, "error") && e.emit("error", t)
            }
            function g() {
                e.removeListener("finish", m),
                b()
            }
            function m() {
                p("onfinish"),
                e.removeListener("close", g),
                b()
            }
            function b() {
                p("unpipe"),
                n.unpipe(e)
            }
            return n.on("data", v),
            function(e, t, n) {
                if ("function" == typeof e.prependListener)
                    return e.prependListener(t, n);
                e._events && e._events[t] ? a(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n)
            }(e, "error", y),
            e.once("close", g),
            e.once("finish", m),
            e.emit("pipe", n),
            o.flowing || (p("pipe resume"),
            n.resume()),
            e
        }
        ,
        b.prototype.unpipe = function(e) {
            var t = this._readableState
              , n = {
                hasUnpiped: !1
            };
            if (0 === t.pipesCount)
                return this;
            if (1 === t.pipesCount)
                return e && e !== t.pipes || (e || (e = t.pipes),
                t.pipes = null,
                t.pipesCount = 0,
                t.flowing = !1,
                e && e.emit("unpipe", this, n)),
                this;
            if (!e) {
                var r = t.pipes
                  , i = t.pipesCount;
                t.pipes = null,
                t.pipesCount = 0,
                t.flowing = !1;
                for (var o = 0; o < i; o++)
                    r[o].emit("unpipe", this, n);
                return this
            }
            var a = A(t.pipes, e);
            return -1 === a || (t.pipes.splice(a, 1),
            t.pipesCount -= 1,
            1 === t.pipesCount && (t.pipes = t.pipes[0]),
            e.emit("unpipe", this, n)),
            this
        }
        ,
        b.prototype.on = function(e, t) {
            var n = c.prototype.on.call(this, e, t);
            if ("data" === e)
                !1 !== this._readableState.flowing && this.resume();
            else if ("readable" === e) {
                var r = this._readableState;
                r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0,
                r.emittedReadable = !1,
                r.reading ? r.length && E(this) : i.nextTick(k, this))
            }
            return n
        }
        ,
        b.prototype.addListener = b.prototype.on,
        b.prototype.resume = function() {
            var e = this._readableState;
            return e.flowing || (p("resume"),
            e.flowing = !0,
            function(e, t) {
                t.resumeScheduled || (t.resumeScheduled = !0,
                i.nextTick(C, e, t))
            }(this, e)),
            this
        }
        ,
        b.prototype.pause = function() {
            return p("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing && (p("pause"),
            this._readableState.flowing = !1,
            this.emit("pause")),
            this
        }
        ,
        b.prototype.wrap = function(e) {
            var t = this
              , n = this._readableState
              , r = !1;
            for (var i in e.on("end", (function() {
                if (p("wrapped end"),
                n.decoder && !n.ended) {
                    var e = n.decoder.end();
                    e && e.length && t.push(e)
                }
                t.push(null)
            }
            )),
            e.on("data", (function(i) {
                (p("wrapped data"),
                n.decoder && (i = n.decoder.write(i)),
                n.objectMode && null == i) || (n.objectMode || i && i.length) && (t.push(i) || (r = !0,
                e.pause()))
            }
            )),
            e)
                void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(i));
            for (var o = 0; o < g.length; o++)
                e.on(g[o], this.emit.bind(this, g[o]));
            return this._read = function(t) {
                p("wrapped _read", t),
                r && (r = !1,
                e.resume())
            }
            ,
            this
        }
        ,
        Object.defineProperty(b.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._readableState.highWaterMark
            }
        }),
        b._fromList = R
    }
    ).call(this, n(8), n(10))
}
, function(e, t, n) {
    "use strict";
    var r, i = "object" == typeof Reflect ? Reflect : null, o = i && "function" == typeof i.apply ? i.apply : function(e, t, n) {
        return Function.prototype.apply.call(e, t, n)
    }
    ;
    r = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    }
    : function(e) {
        return Object.getOwnPropertyNames(e)
    }
    ;
    var a = Number.isNaN || function(e) {
        return e != e
    }
    ;
    function s() {
        s.init.call(this)
    }
    e.exports = s,
    e.exports.once = function(e, t) {
        return new Promise((function(n, r) {
            function i(n) {
                e.removeListener(t, o),
                r(n)
            }
            function o() {
                "function" == typeof e.removeListener && e.removeListener("error", i),
                n([].slice.call(arguments))
            }
            g(e, t, o, {
                once: !0
            }),
            "error" !== t && function(e, t, n) {
                "function" == typeof e.on && g(e, "error", t, n)
            }(e, i, {
                once: !0
            })
        }
        ))
    }
    ,
    s.EventEmitter = s,
    s.prototype._events = void 0,
    s.prototype._eventsCount = 0,
    s.prototype._maxListeners = void 0;
    var c = 10;
    function u(e) {
        if ("function" != typeof e)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }
    function f(e) {
        return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
    }
    function l(e, t, n, r) {
        var i, o, a, s;
        if (u(n),
        void 0 === (o = e._events) ? (o = e._events = Object.create(null),
        e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n),
        o = e._events),
        a = o[t]),
        void 0 === a)
            a = o[t] = n,
            ++e._eventsCount;
        else if ("function" == typeof a ? a = o[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n),
        (i = f(e)) > 0 && a.length > i && !a.warned) {
            a.warned = !0;
            var c = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            c.name = "MaxListenersExceededWarning",
            c.emitter = e,
            c.type = t,
            c.count = a.length,
            s = c,
            console && console.warn && console.warn(s)
        }
        return e
    }
    function h() {
        if (!this.fired)
            return this.target.removeListener(this.type, this.wrapFn),
            this.fired = !0,
            0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }
    function p(e, t, n) {
        var r = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: t,
            listener: n
        }
          , i = h.bind(r);
        return i.listener = n,
        r.wrapFn = i,
        i
    }
    function d(e, t, n) {
        var r = e._events;
        if (void 0 === r)
            return [];
        var i = r[t];
        return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function(e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                t[n] = e[n].listener || e[n];
            return t
        }(i) : y(i, i.length)
    }
    function v(e) {
        var t = this._events;
        if (void 0 !== t) {
            var n = t[e];
            if ("function" == typeof n)
                return 1;
            if (void 0 !== n)
                return n.length
        }
        return 0
    }
    function y(e, t) {
        for (var n = new Array(t), r = 0; r < t; ++r)
            n[r] = e[r];
        return n
    }
    function g(e, t, n, r) {
        if ("function" == typeof e.on)
            r.once ? e.once(t, n) : e.on(t, n);
        else {
            if ("function" != typeof e.addEventListener)
                throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
            e.addEventListener(t, (function i(o) {
                r.once && e.removeEventListener(t, i),
                n(o)
            }
            ))
        }
    }
    Object.defineProperty(s, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return c
        },
        set: function(e) {
            if ("number" != typeof e || e < 0 || a(e))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            c = e
        }
    }),
    s.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
        this._eventsCount = 0),
        this._maxListeners = this._maxListeners || void 0
    }
    ,
    s.prototype.setMaxListeners = function(e) {
        if ("number" != typeof e || e < 0 || a(e))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e,
        this
    }
    ,
    s.prototype.getMaxListeners = function() {
        return f(this)
    }
    ,
    s.prototype.emit = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
            t.push(arguments[n]);
        var r = "error" === e
          , i = this._events;
        if (void 0 !== i)
            r = r && void 0 === i.error;
        else if (!r)
            return !1;
        if (r) {
            var a;
            if (t.length > 0 && (a = t[0]),
            a instanceof Error)
                throw a;
            var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
            throw s.context = a,
            s
        }
        var c = i[e];
        if (void 0 === c)
            return !1;
        if ("function" == typeof c)
            o(c, this, t);
        else {
            var u = c.length
              , f = y(c, u);
            for (n = 0; n < u; ++n)
                o(f[n], this, t)
        }
        return !0
    }
    ,
    s.prototype.addListener = function(e, t) {
        return l(this, e, t, !1)
    }
    ,
    s.prototype.on = s.prototype.addListener,
    s.prototype.prependListener = function(e, t) {
        return l(this, e, t, !0)
    }
    ,
    s.prototype.once = function(e, t) {
        return u(t),
        this.on(e, p(this, e, t)),
        this
    }
    ,
    s.prototype.prependOnceListener = function(e, t) {
        return u(t),
        this.prependListener(e, p(this, e, t)),
        this
    }
    ,
    s.prototype.removeListener = function(e, t) {
        var n, r, i, o, a;
        if (u(t),
        void 0 === (r = this._events))
            return this;
        if (void 0 === (n = r[e]))
            return this;
        if (n === t || n.listener === t)
            0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e],
            r.removeListener && this.emit("removeListener", e, n.listener || t));
        else if ("function" != typeof n) {
            for (i = -1,
            o = n.length - 1; o >= 0; o--)
                if (n[o] === t || n[o].listener === t) {
                    a = n[o].listener,
                    i = o;
                    break
                }
            if (i < 0)
                return this;
            0 === i ? n.shift() : function(e, t) {
                for (; t + 1 < e.length; t++)
                    e[t] = e[t + 1];
                e.pop()
            }(n, i),
            1 === n.length && (r[e] = n[0]),
            void 0 !== r.removeListener && this.emit("removeListener", e, a || t)
        }
        return this
    }
    ,
    s.prototype.off = s.prototype.removeListener,
    s.prototype.removeAllListeners = function(e) {
        var t, n, r;
        if (void 0 === (n = this._events))
            return this;
        if (void 0 === n.removeListener)
            return 0 === arguments.length ? (this._events = Object.create(null),
            this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]),
            this;
        if (0 === arguments.length) {
            var i, o = Object.keys(n);
            for (r = 0; r < o.length; ++r)
                "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
            return this.removeAllListeners("removeListener"),
            this._events = Object.create(null),
            this._eventsCount = 0,
            this
        }
        if ("function" == typeof (t = n[e]))
            this.removeListener(e, t);
        else if (void 0 !== t)
            for (r = t.length - 1; r >= 0; r--)
                this.removeListener(e, t[r]);
        return this
    }
    ,
    s.prototype.listeners = function(e) {
        return d(this, e, !0)
    }
    ,
    s.prototype.rawListeners = function(e) {
        return d(this, e, !1)
    }
    ,
    s.listenerCount = function(e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : v.call(e, t)
    }
    ,
    s.prototype.listenerCount = v,
    s.prototype.eventNames = function() {
        return this._eventsCount > 0 ? r(this._events) : []
    }
}
, function(e, t, n) {
    e.exports = n(37).EventEmitter
}
, function(e, t, n) {
    "use strict";
    var r = n(27);
    function i(e, t) {
        e.emit("error", t)
    }
    e.exports = {
        destroy: function(e, t) {
            var n = this
              , o = this._readableState && this._readableState.destroyed
              , a = this._writableState && this._writableState.destroyed;
            return o || a ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || r.nextTick(i, this, e),
            this) : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(e || null, (function(e) {
                !t && e ? (r.nextTick(i, n, e),
                n._writableState && (n._writableState.errorEmitted = !0)) : t && t(e)
            }
            )),
            this)
        },
        undestroy: function() {
            this._readableState && (this._readableState.destroyed = !1,
            this._readableState.reading = !1,
            this._readableState.ended = !1,
            this._readableState.endEmitted = !1),
            this._writableState && (this._writableState.destroyed = !1,
            this._writableState.ended = !1,
            this._writableState.ending = !1,
            this._writableState.finished = !1,
            this._writableState.errorEmitted = !1)
        }
    }
}
, function(e, t, n) {
    "use strict";
    (function(t, r, i) {
        var o = n(27);
        function a(e) {
            var t = this;
            this.next = null,
            this.entry = null,
            this.finish = function() {
                !function(e, t, n) {
                    var r = e.entry;
                    e.entry = null;
                    for (; r; ) {
                        var i = r.callback;
                        t.pendingcb--,
                        i(n),
                        r = r.next
                    }
                    t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
                }(t, e)
            }
        }
        e.exports = m;
        var s, c = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? r : o.nextTick;
        m.WritableState = g;
        var u = Object.create(n(23));
        u.inherits = n(17);
        var f = {
            deprecate: n(71)
        }
          , l = n(38)
          , h = n(13).Buffer
          , p = i.Uint8Array || function() {}
        ;
        var d, v = n(39);
        function y() {}
        function g(e, t) {
            s = s || n(20),
            e = e || {};
            var r = t instanceof s;
            this.objectMode = !!e.objectMode,
            r && (this.objectMode = this.objectMode || !!e.writableObjectMode);
            var i = e.highWaterMark
              , u = e.writableHighWaterMark
              , f = this.objectMode ? 16 : 16384;
            this.highWaterMark = i || 0 === i ? i : r && (u || 0 === u) ? u : f,
            this.highWaterMark = Math.floor(this.highWaterMark),
            this.finalCalled = !1,
            this.needDrain = !1,
            this.ending = !1,
            this.ended = !1,
            this.finished = !1,
            this.destroyed = !1;
            var l = !1 === e.decodeStrings;
            this.decodeStrings = !l,
            this.defaultEncoding = e.defaultEncoding || "utf8",
            this.length = 0,
            this.writing = !1,
            this.corked = 0,
            this.sync = !0,
            this.bufferProcessing = !1,
            this.onwrite = function(e) {
                !function(e, t) {
                    var n = e._writableState
                      , r = n.sync
                      , i = n.writecb;
                    if (function(e) {
                        e.writing = !1,
                        e.writecb = null,
                        e.length -= e.writelen,
                        e.writelen = 0
                    }(n),
                    t)
                        !function(e, t, n, r, i) {
                            --t.pendingcb,
                            n ? (o.nextTick(i, r),
                            o.nextTick(S, e, t),
                            e._writableState.errorEmitted = !0,
                            e.emit("error", r)) : (i(r),
                            e._writableState.errorEmitted = !0,
                            e.emit("error", r),
                            S(e, t))
                        }(e, n, r, t, i);
                    else {
                        var a = O(n);
                        a || n.corked || n.bufferProcessing || !n.bufferedRequest || w(e, n),
                        r ? c(_, e, n, a, i) : _(e, n, a, i)
                    }
                }(t, e)
            }
            ,
            this.writecb = null,
            this.writelen = 0,
            this.bufferedRequest = null,
            this.lastBufferedRequest = null,
            this.pendingcb = 0,
            this.prefinished = !1,
            this.errorEmitted = !1,
            this.bufferedRequestCount = 0,
            this.corkedRequestsFree = new a(this)
        }
        function m(e) {
            if (s = s || n(20),
            !(d.call(m, this) || this instanceof s))
                return new m(e);
            this._writableState = new g(e,this),
            this.writable = !0,
            e && ("function" == typeof e.write && (this._write = e.write),
            "function" == typeof e.writev && (this._writev = e.writev),
            "function" == typeof e.destroy && (this._destroy = e.destroy),
            "function" == typeof e.final && (this._final = e.final)),
            l.call(this)
        }
        function b(e, t, n, r, i, o, a) {
            t.writelen = r,
            t.writecb = a,
            t.writing = !0,
            t.sync = !0,
            n ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
            t.sync = !1
        }
        function _(e, t, n, r) {
            n || function(e, t) {
                0 === t.length && t.needDrain && (t.needDrain = !1,
                e.emit("drain"))
            }(e, t),
            t.pendingcb--,
            r(),
            S(e, t)
        }
        function w(e, t) {
            t.bufferProcessing = !0;
            var n = t.bufferedRequest;
            if (e._writev && n && n.next) {
                var r = t.bufferedRequestCount
                  , i = new Array(r)
                  , o = t.corkedRequestsFree;
                o.entry = n;
                for (var s = 0, c = !0; n; )
                    i[s] = n,
                    n.isBuf || (c = !1),
                    n = n.next,
                    s += 1;
                i.allBuffers = c,
                b(e, t, !0, t.length, i, "", o.finish),
                t.pendingcb++,
                t.lastBufferedRequest = null,
                o.next ? (t.corkedRequestsFree = o.next,
                o.next = null) : t.corkedRequestsFree = new a(t),
                t.bufferedRequestCount = 0
            } else {
                for (; n; ) {
                    var u = n.chunk
                      , f = n.encoding
                      , l = n.callback;
                    if (b(e, t, !1, t.objectMode ? 1 : u.length, u, f, l),
                    n = n.next,
                    t.bufferedRequestCount--,
                    t.writing)
                        break
                }
                null === n && (t.lastBufferedRequest = null)
            }
            t.bufferedRequest = n,
            t.bufferProcessing = !1
        }
        function O(e) {
            return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
        }
        function E(e, t) {
            e._final((function(n) {
                t.pendingcb--,
                n && e.emit("error", n),
                t.prefinished = !0,
                e.emit("prefinish"),
                S(e, t)
            }
            ))
        }
        function S(e, t) {
            var n = O(t);
            return n && (!function(e, t) {
                t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++,
                t.finalCalled = !0,
                o.nextTick(E, e, t)) : (t.prefinished = !0,
                e.emit("prefinish")))
            }(e, t),
            0 === t.pendingcb && (t.finished = !0,
            e.emit("finish"))),
            n
        }
        u.inherits(m, l),
        g.prototype.getBuffer = function() {
            for (var e = this.bufferedRequest, t = []; e; )
                t.push(e),
                e = e.next;
            return t
        }
        ,
        function() {
            try {
                Object.defineProperty(g.prototype, "buffer", {
                    get: f.deprecate((function() {
                        return this.getBuffer()
                    }
                    ), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                })
            } catch (e) {}
        }(),
        "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (d = Function.prototype[Symbol.hasInstance],
        Object.defineProperty(m, Symbol.hasInstance, {
            value: function(e) {
                return !!d.call(this, e) || this === m && (e && e._writableState instanceof g)
            }
        })) : d = function(e) {
            return e instanceof this
        }
        ,
        m.prototype.pipe = function() {
            this.emit("error", new Error("Cannot pipe, not readable"))
        }
        ,
        m.prototype.write = function(e, t, n) {
            var r, i = this._writableState, a = !1, s = !i.objectMode && (r = e,
            h.isBuffer(r) || r instanceof p);
            return s && !h.isBuffer(e) && (e = function(e) {
                return h.from(e)
            }(e)),
            "function" == typeof t && (n = t,
            t = null),
            s ? t = "buffer" : t || (t = i.defaultEncoding),
            "function" != typeof n && (n = y),
            i.ended ? function(e, t) {
                var n = new Error("write after end");
                e.emit("error", n),
                o.nextTick(t, n)
            }(this, n) : (s || function(e, t, n, r) {
                var i = !0
                  , a = !1;
                return null === n ? a = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || t.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")),
                a && (e.emit("error", a),
                o.nextTick(r, a),
                i = !1),
                i
            }(this, i, e, n)) && (i.pendingcb++,
            a = function(e, t, n, r, i, o) {
                if (!n) {
                    var a = function(e, t, n) {
                        e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = h.from(t, n));
                        return t
                    }(t, r, i);
                    r !== a && (n = !0,
                    i = "buffer",
                    r = a)
                }
                var s = t.objectMode ? 1 : r.length;
                t.length += s;
                var c = t.length < t.highWaterMark;
                c || (t.needDrain = !0);
                if (t.writing || t.corked) {
                    var u = t.lastBufferedRequest;
                    t.lastBufferedRequest = {
                        chunk: r,
                        encoding: i,
                        isBuf: n,
                        callback: o,
                        next: null
                    },
                    u ? u.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
                    t.bufferedRequestCount += 1
                } else
                    b(e, t, !1, s, r, i, o);
                return c
            }(this, i, s, e, t, n)),
            a
        }
        ,
        m.prototype.cork = function() {
            this._writableState.corked++
        }
        ,
        m.prototype.uncork = function() {
            var e = this._writableState;
            e.corked && (e.corked--,
            e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || w(this, e))
        }
        ,
        m.prototype.setDefaultEncoding = function(e) {
            if ("string" == typeof e && (e = e.toLowerCase()),
            !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                throw new TypeError("Unknown encoding: " + e);
            return this._writableState.defaultEncoding = e,
            this
        }
        ,
        Object.defineProperty(m.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }),
        m.prototype._write = function(e, t, n) {
            n(new Error("_write() is not implemented"))
        }
        ,
        m.prototype._writev = null,
        m.prototype.end = function(e, t, n) {
            var r = this._writableState;
            "function" == typeof e ? (n = e,
            e = null,
            t = null) : "function" == typeof t && (n = t,
            t = null),
            null != e && this.write(e, t),
            r.corked && (r.corked = 1,
            this.uncork()),
            r.ending || r.finished || function(e, t, n) {
                t.ending = !0,
                S(e, t),
                n && (t.finished ? o.nextTick(n) : e.once("finish", n));
                t.ended = !0,
                e.writable = !1
            }(this, r, n)
        }
        ,
        Object.defineProperty(m.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._writableState && this._writableState.destroyed
            },
            set: function(e) {
                this._writableState && (this._writableState.destroyed = e)
            }
        }),
        m.prototype.destroy = v.destroy,
        m.prototype._undestroy = v.undestroy,
        m.prototype._destroy = function(e, t) {
            this.end(),
            t(e)
        }
    }
    ).call(this, n(10), n(69).setImmediate, n(8))
}
, function(e, t, n) {
    "use strict";
    var r = n(13).Buffer
      , i = r.isEncoding || function(e) {
        switch ((e = "" + e) && e.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return !0;
        default:
            return !1
        }
    }
    ;
    function o(e) {
        var t;
        switch (this.encoding = function(e) {
            var t = function(e) {
                if (!e)
                    return "utf8";
                for (var t; ; )
                    switch (e) {
                    case "utf8":
                    case "utf-8":
                        return "utf8";
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return "utf16le";
                    case "latin1":
                    case "binary":
                        return "latin1";
                    case "base64":
                    case "ascii":
                    case "hex":
                        return e;
                    default:
                        if (t)
                            return;
                        e = ("" + e).toLowerCase(),
                        t = !0
                    }
            }(e);
            if ("string" != typeof t && (r.isEncoding === i || !i(e)))
                throw new Error("Unknown encoding: " + e);
            return t || e
        }(e),
        this.encoding) {
        case "utf16le":
            this.text = c,
            this.end = u,
            t = 4;
            break;
        case "utf8":
            this.fillLast = s,
            t = 4;
            break;
        case "base64":
            this.text = f,
            this.end = l,
            t = 3;
            break;
        default:
            return this.write = h,
            void (this.end = p)
        }
        this.lastNeed = 0,
        this.lastTotal = 0,
        this.lastChar = r.allocUnsafe(t)
    }
    function a(e) {
        return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
    }
    function s(e) {
        var t = this.lastTotal - this.lastNeed
          , n = function(e, t, n) {
            if (128 != (192 & t[0]))
                return e.lastNeed = 0,
                "�";
            if (e.lastNeed > 1 && t.length > 1) {
                if (128 != (192 & t[1]))
                    return e.lastNeed = 1,
                    "�";
                if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                    return e.lastNeed = 2,
                    "�"
            }
        }(this, e);
        return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed),
        this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length),
        void (this.lastNeed -= e.length))
    }
    function c(e, t) {
        if ((e.length - t) % 2 == 0) {
            var n = e.toString("utf16le", t);
            if (n) {
                var r = n.charCodeAt(n.length - 1);
                if (r >= 55296 && r <= 56319)
                    return this.lastNeed = 2,
                    this.lastTotal = 4,
                    this.lastChar[0] = e[e.length - 2],
                    this.lastChar[1] = e[e.length - 1],
                    n.slice(0, -1)
            }
            return n
        }
        return this.lastNeed = 1,
        this.lastTotal = 2,
        this.lastChar[0] = e[e.length - 1],
        e.toString("utf16le", t, e.length - 1)
    }
    function u(e) {
        var t = e && e.length ? this.write(e) : "";
        if (this.lastNeed) {
            var n = this.lastTotal - this.lastNeed;
            return t + this.lastChar.toString("utf16le", 0, n)
        }
        return t
    }
    function f(e, t) {
        var n = (e.length - t) % 3;
        return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n,
        this.lastTotal = 3,
        1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2],
        this.lastChar[1] = e[e.length - 1]),
        e.toString("base64", t, e.length - n))
    }
    function l(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
    }
    function h(e) {
        return e.toString(this.encoding)
    }
    function p(e) {
        return e && e.length ? this.write(e) : ""
    }
    t.StringDecoder = o,
    o.prototype.write = function(e) {
        if (0 === e.length)
            return "";
        var t, n;
        if (this.lastNeed) {
            if (void 0 === (t = this.fillLast(e)))
                return "";
            n = this.lastNeed,
            this.lastNeed = 0
        } else
            n = 0;
        return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
    }
    ,
    o.prototype.end = function(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + "�" : t
    }
    ,
    o.prototype.text = function(e, t) {
        var n = function(e, t, n) {
            var r = t.length - 1;
            if (r < n)
                return 0;
            var i = a(t[r]);
            if (i >= 0)
                return i > 0 && (e.lastNeed = i - 1),
                i;
            if (--r < n || -2 === i)
                return 0;
            if ((i = a(t[r])) >= 0)
                return i > 0 && (e.lastNeed = i - 2),
                i;
            if (--r < n || -2 === i)
                return 0;
            if ((i = a(t[r])) >= 0)
                return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3),
                i;
            return 0
        }(this, e, t);
        if (!this.lastNeed)
            return e.toString("utf8", t);
        this.lastTotal = n;
        var r = e.length - (n - this.lastNeed);
        return e.copy(this.lastChar, 0, r),
        e.toString("utf8", t, r)
    }
    ,
    o.prototype.fillLast = function(e) {
        if (this.lastNeed <= e.length)
            return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal);
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
        this.lastNeed -= e.length
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = a;
    var r = n(20)
      , i = Object.create(n(23));
    function o(e, t) {
        var n = this._transformState;
        n.transforming = !1;
        var r = n.writecb;
        if (!r)
            return this.emit("error", new Error("write callback called multiple times"));
        n.writechunk = null,
        n.writecb = null,
        null != t && this.push(t),
        r(e);
        var i = this._readableState;
        i.reading = !1,
        (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
    }
    function a(e) {
        if (!(this instanceof a))
            return new a(e);
        r.call(this, e),
        this._transformState = {
            afterTransform: o.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        },
        this._readableState.needReadable = !0,
        this._readableState.sync = !1,
        e && ("function" == typeof e.transform && (this._transform = e.transform),
        "function" == typeof e.flush && (this._flush = e.flush)),
        this.on("prefinish", s)
    }
    function s() {
        var e = this;
        "function" == typeof this._flush ? this._flush((function(t, n) {
            c(e, t, n)
        }
        )) : c(this, null, null)
    }
    function c(e, t, n) {
        if (t)
            return e.emit("error", t);
        if (null != n && e.push(n),
        e._writableState.length)
            throw new Error("Calling transform done when ws.length != 0");
        if (e._transformState.transforming)
            throw new Error("Calling transform done when still transforming");
        return e.push(null)
    }
    i.inherits = n(17),
    i.inherits(a, r),
    a.prototype.push = function(e, t) {
        return this._transformState.needTransform = !1,
        r.prototype.push.call(this, e, t)
    }
    ,
    a.prototype._transform = function(e, t, n) {
        throw new Error("_transform() is not implemented")
    }
    ,
    a.prototype._write = function(e, t, n) {
        var r = this._transformState;
        if (r.writecb = n,
        r.writechunk = e,
        r.writeencoding = t,
        !r.transforming) {
            var i = this._readableState;
            (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
        }
    }
    ,
    a.prototype._read = function(e) {
        var t = this._transformState;
        null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0,
        this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
    }
    ,
    a.prototype._destroy = function(e, t) {
        var n = this;
        r.prototype._destroy.call(this, e, (function(e) {
            t(e),
            n.emit("close")
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    t.decode = t.parse = n(79),
    t.encode = t.stringify = n(80)
}
, function(e, t, n) {
    var r;
    "undefined" != typeof self && self,
    r = function() {
        return function(e) {
            var t = {};
            function n(r) {
                if (t[r])
                    return t[r].exports;
                var i = t[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(i.exports, i, i.exports, n),
                i.l = !0,
                i.exports
            }
            return n.m = e,
            n.c = t,
            n.d = function(e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            }
            ,
            n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
                ;
                return n.d(t, "a", t),
                t
            }
            ,
            n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            n.p = "",
            n(n.s = 3)
        }([function(e, t, n) {
            var r = n(5)
              , i = n(1)
              , o = i.toHex
              , a = i.ceilHeapSize
              , s = n(6)
              , c = function(e) {
                for (e += 9; e % 64 > 0; e += 1)
                    ;
                return e
            }
              , u = function(e, t) {
                var n = new Int32Array(e,t + 320,5)
                  , r = new Int32Array(5)
                  , i = new DataView(r.buffer);
                return i.setInt32(0, n[0], !1),
                i.setInt32(4, n[1], !1),
                i.setInt32(8, n[2], !1),
                i.setInt32(12, n[3], !1),
                i.setInt32(16, n[4], !1),
                r
            }
              , f = function() {
                function e(t) {
                    if (function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    (t = t || 65536) % 64 > 0)
                        throw new Error("Chunk size must be a multiple of 128 bit");
                    this._offset = 0,
                    this._maxChunkLen = t,
                    this._padMaxChunkLen = c(t),
                    this._heap = new ArrayBuffer(a(this._padMaxChunkLen + 320 + 20)),
                    this._h32 = new Int32Array(this._heap),
                    this._h8 = new Int8Array(this._heap),
                    this._core = new r({
                        Int32Array: Int32Array
                    },{},this._heap)
                }
                return e.prototype._initState = function(e, t) {
                    this._offset = 0;
                    var n = new Int32Array(e,t + 320,5);
                    n[0] = 1732584193,
                    n[1] = -271733879,
                    n[2] = -1732584194,
                    n[3] = 271733878,
                    n[4] = -1009589776
                }
                ,
                e.prototype._padChunk = function(e, t) {
                    var n = c(e)
                      , r = new Int32Array(this._heap,0,n >> 2);
                    return function(e, t) {
                        var n = new Uint8Array(e.buffer)
                          , r = t % 4
                          , i = t - r;
                        switch (r) {
                        case 0:
                            n[i + 3] = 0;
                        case 1:
                            n[i + 2] = 0;
                        case 2:
                            n[i + 1] = 0;
                        case 3:
                            n[i + 0] = 0
                        }
                        for (var o = 1 + (t >> 2); o < e.length; o++)
                            e[o] = 0
                    }(r, e),
                    function(e, t, n) {
                        e[t >> 2] |= 128 << 24 - (t % 4 << 3),
                        e[14 + (2 + (t >> 2) & -16)] = n / (1 << 29) | 0,
                        e[15 + (2 + (t >> 2) & -16)] = n << 3
                    }(r, e, t),
                    n
                }
                ,
                e.prototype._write = function(e, t, n, r) {
                    s(e, this._h8, this._h32, t, n, r || 0)
                }
                ,
                e.prototype._coreCall = function(e, t, n, r, i) {
                    var o = n;
                    this._write(e, t, n),
                    i && (o = this._padChunk(n, r)),
                    this._core.hash(o, this._padMaxChunkLen)
                }
                ,
                e.prototype.rawDigest = function(e) {
                    var t = e.byteLength || e.length || e.size || 0;
                    this._initState(this._heap, this._padMaxChunkLen);
                    var n = 0
                      , r = this._maxChunkLen;
                    for (n = 0; t > n + r; n += r)
                        this._coreCall(e, n, r, t, !1);
                    return this._coreCall(e, n, t - n, t, !0),
                    u(this._heap, this._padMaxChunkLen)
                }
                ,
                e.prototype.digest = function(e) {
                    return o(this.rawDigest(e).buffer)
                }
                ,
                e.prototype.digestFromString = function(e) {
                    return this.digest(e)
                }
                ,
                e.prototype.digestFromBuffer = function(e) {
                    return this.digest(e)
                }
                ,
                e.prototype.digestFromArrayBuffer = function(e) {
                    return this.digest(e)
                }
                ,
                e.prototype.resetState = function() {
                    return this._initState(this._heap, this._padMaxChunkLen),
                    this
                }
                ,
                e.prototype.append = function(e) {
                    var t = 0
                      , n = e.byteLength || e.length || e.size || 0
                      , r = this._offset % this._maxChunkLen
                      , i = void 0;
                    for (this._offset += n; t < n; )
                        i = Math.min(n - t, this._maxChunkLen - r),
                        this._write(e, t, i, r),
                        t += i,
                        (r += i) === this._maxChunkLen && (this._core.hash(this._maxChunkLen, this._padMaxChunkLen),
                        r = 0);
                    return this
                }
                ,
                e.prototype.getState = function() {
                    var e = void 0;
                    if (this._offset % this._maxChunkLen)
                        e = this._heap.slice(0);
                    else {
                        var t = new Int32Array(this._heap,this._padMaxChunkLen + 320,5);
                        e = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength)
                    }
                    return {
                        offset: this._offset,
                        heap: e
                    }
                }
                ,
                e.prototype.setState = function(e) {
                    return this._offset = e.offset,
                    20 === e.heap.byteLength ? new Int32Array(this._heap,this._padMaxChunkLen + 320,5).set(new Int32Array(e.heap)) : this._h32.set(new Int32Array(e.heap)),
                    this
                }
                ,
                e.prototype.rawEnd = function() {
                    var e = this._offset
                      , t = e % this._maxChunkLen
                      , n = this._padChunk(t, e);
                    this._core.hash(n, this._padMaxChunkLen);
                    var r = u(this._heap, this._padMaxChunkLen);
                    return this._initState(this._heap, this._padMaxChunkLen),
                    r
                }
                ,
                e.prototype.end = function() {
                    return o(this.rawEnd().buffer)
                }
                ,
                e
            }();
            e.exports = f,
            e.exports._core = r
        }
        , function(e, t) {
            for (var n = new Array(256), r = 0; r < 256; r++)
                n[r] = (r < 16 ? "0" : "") + r.toString(16);
            e.exports.toHex = function(e) {
                for (var t = new Uint8Array(e), r = new Array(e.byteLength), i = 0; i < r.length; i++)
                    r[i] = n[t[i]];
                return r.join("")
            }
            ,
            e.exports.ceilHeapSize = function(e) {
                var t = 0;
                if (e <= 65536)
                    return 65536;
                if (e < 16777216)
                    for (t = 1; t < e; t <<= 1)
                        ;
                else
                    for (t = 16777216; t < e; t += 16777216)
                        ;
                return t
            }
            ,
            e.exports.isDedicatedWorkerScope = function(e) {
                var t = "WorkerGlobalScope"in e && e instanceof e.WorkerGlobalScope
                  , n = "SharedWorkerGlobalScope"in e && e instanceof e.SharedWorkerGlobalScope
                  , r = "ServiceWorkerGlobalScope"in e && e instanceof e.ServiceWorkerGlobalScope;
                return t && !n && !r
            }
        }
        , function(e, t, n) {
            e.exports = function() {
                var e = n(0)
                  , t = !0;
                return self.onmessage = function(n) {
                    if (t) {
                        var r = n.data.data
                          , i = n.data.file
                          , o = n.data.id;
                        if (void 0 !== o && (i || r)) {
                            var a = n.data.blockSize || 4194304
                              , s = new e(a);
                            s.resetState();
                            var c = function(e, t) {
                                e ? self.postMessage({
                                    id: o,
                                    error: e.name
                                }) : self.postMessage({
                                    id: o,
                                    hash: t
                                })
                            };
                            r && function(e, t, n) {
                                try {
                                    n(null, e.digest(t))
                                } catch (e) {
                                    return n(e)
                                }
                            }(s, r, c),
                            i && function e(t, n, r, i, o) {
                                var a = new self.FileReader;
                                a.onloadend = function() {
                                    if (a.error)
                                        return o(a.error);
                                    var s = a.result;
                                    n += a.result.byteLength;
                                    try {
                                        t.append(s)
                                    } catch (e) {
                                        return void o(e)
                                    }
                                    n < i.size ? e(t, n, r, i, o) : o(null, t.end())
                                }
                                ,
                                a.readAsArrayBuffer(i.slice(n, n + r))
                            }(s, 0, a, i, c)
                        }
                    }
                }
                ,
                function() {
                    t = !1
                }
            }
        }
        , function(e, t, n) {
            var r = n(4)
              , i = n(0)
              , o = n(7)
              , a = n(2)
              , s = n(1).isDedicatedWorkerScope
              , c = "undefined" != typeof self && s(self);
            i.disableWorkerBehaviour = c ? a() : function() {}
            ,
            i.createWorker = function() {
                var e = r(2)
                  , t = e.terminate;
                return e.terminate = function() {
                    URL.revokeObjectURL(e.objectURL),
                    t.call(e)
                }
                ,
                e
            }
            ,
            i.createHash = o,
            e.exports = i
        }
        , function(e, t, n) {
            function r(e) {
                var t = {};
                function n(r) {
                    if (t[r])
                        return t[r].exports;
                    var i = t[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(i.exports, i, i.exports, n),
                    i.l = !0,
                    i.exports
                }
                n.m = e,
                n.c = t,
                n.i = function(e) {
                    return e
                }
                ,
                n.d = function(e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                }
                ,
                n.r = function(e) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
                ,
                n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
                    ;
                    return n.d(t, "a", t),
                    t
                }
                ,
                n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                n.p = "/",
                n.oe = function(e) {
                    throw console.error(e),
                    e
                }
                ;
                var r = n(n.s = ENTRY_MODULE);
                return r.default || r
            }
            function i(e) {
                return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
            }
            function o(e, t, r) {
                var o = {};
                o[r] = [];
                var a = t.toString()
                  , s = a.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);
                if (!s)
                    return o;
                for (var c, u = s[1], f = new RegExp("(\\\\n|\\W)" + i(u) + "\\((/\\*.*?\\*/)?s?.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)","g"); c = f.exec(a); )
                    "dll-reference" !== c[3] && o[r].push(c[3]);
                for (f = new RegExp("\\(" + i(u) + '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\((/\\*.*?\\*/)?s?.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)',"g"); c = f.exec(a); )
                    e[c[2]] || (o[r].push(c[1]),
                    e[c[2]] = n(c[1]).m),
                    o[c[2]] = o[c[2]] || [],
                    o[c[2]].push(c[4]);
                return o
            }
            function a(e) {
                return Object.keys(e).reduce((function(t, n) {
                    return t || e[n].length > 0
                }
                ), !1)
            }
            e.exports = function(e, t) {
                t = t || {};
                var i = {
                    main: n.m
                }
                  , s = t.all ? {
                    main: Object.keys(i)
                } : function(e, t) {
                    for (var n = {
                        main: [t]
                    }, r = {
                        main: []
                    }, i = {
                        main: {}
                    }; a(n); )
                        for (var s = Object.keys(n), c = 0; c < s.length; c++) {
                            var u = s[c]
                              , f = n[u].pop();
                            if (i[u] = i[u] || {},
                            !i[u][f] && e[u][f]) {
                                i[u][f] = !0,
                                r[u] = r[u] || [],
                                r[u].push(f);
                                for (var l = o(e, e[u][f], u), h = Object.keys(l), p = 0; p < h.length; p++)
                                    n[h[p]] = n[h[p]] || [],
                                    n[h[p]] = n[h[p]].concat(l[h[p]])
                            }
                        }
                    return r
                }(i, e)
                  , c = "";
                Object.keys(s).filter((function(e) {
                    return "main" !== e
                }
                )).forEach((function(e) {
                    for (var t = 0; s[e][t]; )
                        t++;
                    s[e].push(t),
                    i[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",
                    c = c + "var " + e + " = (" + r.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + s[e].map((function(t) {
                        return JSON.stringify(t) + ": " + i[e][t].toString()
                    }
                    )).join(",") + "});\n"
                }
                )),
                c = c + "(" + r.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + s.main.map((function(e) {
                    return JSON.stringify(e) + ": " + i.main[e].toString()
                }
                )).join(",") + "})(self);";
                var u = new window.Blob([c],{
                    type: "text/javascript"
                });
                if (t.bare)
                    return u;
                var f = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(u)
                  , l = new window.Worker(f);
                return l.objectURL = f,
                l
            }
        }
        , function(e, t) {
            e.exports = function(e, t, n) {
                "use asm";
                var r = new e.Int32Array(n);
                function i(e, t) {
                    e = e | 0;
                    t = t | 0;
                    var n = 0
                      , i = 0
                      , o = 0
                      , a = 0
                      , s = 0
                      , c = 0
                      , u = 0
                      , f = 0
                      , l = 0
                      , h = 0
                      , p = 0
                      , d = 0
                      , v = 0
                      , y = 0;
                    o = r[t + 320 >> 2] | 0;
                    s = r[t + 324 >> 2] | 0;
                    u = r[t + 328 >> 2] | 0;
                    l = r[t + 332 >> 2] | 0;
                    p = r[t + 336 >> 2] | 0;
                    for (n = 0; (n | 0) < (e | 0); n = n + 64 | 0) {
                        a = o;
                        c = s;
                        f = u;
                        h = l;
                        d = p;
                        for (i = 0; (i | 0) < 64; i = i + 4 | 0) {
                            y = r[n + i >> 2] | 0;
                            v = ((o << 5 | o >>> 27) + (s & u | ~s & l) | 0) + ((y + p | 0) + 1518500249 | 0) | 0;
                            p = l;
                            l = u;
                            u = s << 30 | s >>> 2;
                            s = o;
                            o = v;
                            r[e + i >> 2] = y
                        }
                        for (i = e + 64 | 0; (i | 0) < (e + 80 | 0); i = i + 4 | 0) {
                            y = (r[i - 12 >> 2] ^ r[i - 32 >> 2] ^ r[i - 56 >> 2] ^ r[i - 64 >> 2]) << 1 | (r[i - 12 >> 2] ^ r[i - 32 >> 2] ^ r[i - 56 >> 2] ^ r[i - 64 >> 2]) >>> 31;
                            v = ((o << 5 | o >>> 27) + (s & u | ~s & l) | 0) + ((y + p | 0) + 1518500249 | 0) | 0;
                            p = l;
                            l = u;
                            u = s << 30 | s >>> 2;
                            s = o;
                            o = v;
                            r[i >> 2] = y
                        }
                        for (i = e + 80 | 0; (i | 0) < (e + 160 | 0); i = i + 4 | 0) {
                            y = (r[i - 12 >> 2] ^ r[i - 32 >> 2] ^ r[i - 56 >> 2] ^ r[i - 64 >> 2]) << 1 | (r[i - 12 >> 2] ^ r[i - 32 >> 2] ^ r[i - 56 >> 2] ^ r[i - 64 >> 2]) >>> 31;
                            v = ((o << 5 | o >>> 27) + (s ^ u ^ l) | 0) + ((y + p | 0) + 1859775393 | 0) | 0;
                            p = l;
                            l = u;
                            u = s << 30 | s >>> 2;
                            s = o;
                            o = v;
                            r[i >> 2] = y
                        }
                        for (i = e + 160 | 0; (i | 0) < (e + 240 | 0); i = i + 4 | 0) {
                            y = (r[i - 12 >> 2] ^ r[i - 32 >> 2] ^ r[i - 56 >> 2] ^ r[i - 64 >> 2]) << 1 | (r[i - 12 >> 2] ^ r[i - 32 >> 2] ^ r[i - 56 >> 2] ^ r[i - 64 >> 2]) >>> 31;
                            v = ((o << 5 | o >>> 27) + (s & u | s & l | u & l) | 0) + ((y + p | 0) - 1894007588 | 0) | 0;
                            p = l;
                            l = u;
                            u = s << 30 | s >>> 2;
                            s = o;
                            o = v;
                            r[i >> 2] = y
                        }
                        for (i = e + 240 | 0; (i | 0) < (e + 320 | 0); i = i + 4 | 0) {
                            y = (r[i - 12 >> 2] ^ r[i - 32 >> 2] ^ r[i - 56 >> 2] ^ r[i - 64 >> 2]) << 1 | (r[i - 12 >> 2] ^ r[i - 32 >> 2] ^ r[i - 56 >> 2] ^ r[i - 64 >> 2]) >>> 31;
                            v = ((o << 5 | o >>> 27) + (s ^ u ^ l) | 0) + ((y + p | 0) - 899497514 | 0) | 0;
                            p = l;
                            l = u;
                            u = s << 30 | s >>> 2;
                            s = o;
                            o = v;
                            r[i >> 2] = y
                        }
                        o = o + a | 0;
                        s = s + c | 0;
                        u = u + f | 0;
                        l = l + h | 0;
                        p = p + d | 0
                    }
                    r[t + 320 >> 2] = o;
                    r[t + 324 >> 2] = s;
                    r[t + 328 >> 2] = u;
                    r[t + 332 >> 2] = l;
                    r[t + 336 >> 2] = p
                }
                return {
                    hash: i
                }
            }
        }
        , function(e, t) {
            var n = this
              , r = void 0;
            "undefined" != typeof self && void 0 !== self.FileReaderSync && (r = new self.FileReaderSync);
            var i = function(e, t, n, r, i, o) {
                var a = void 0
                  , s = o % 4
                  , c = (i + s) % 4
                  , u = i - c;
                switch (s) {
                case 0:
                    t[o] = e[r + 3];
                case 1:
                    t[o + 1 - (s << 1) | 0] = e[r + 2];
                case 2:
                    t[o + 2 - (s << 1) | 0] = e[r + 1];
                case 3:
                    t[o + 3 - (s << 1) | 0] = e[r]
                }
                if (!(i < c + (4 - s))) {
                    for (a = 4 - s; a < u; a = a + 4 | 0)
                        n[o + a >> 2 | 0] = e[r + a] << 24 | e[r + a + 1] << 16 | e[r + a + 2] << 8 | e[r + a + 3];
                    switch (c) {
                    case 3:
                        t[o + u + 1 | 0] = e[r + u + 2];
                    case 2:
                        t[o + u + 2 | 0] = e[r + u + 1];
                    case 1:
                        t[o + u + 3 | 0] = e[r + u]
                    }
                }
            };
            e.exports = function(e, t, o, a, s, c) {
                if ("string" == typeof e)
                    return function(e, t, n, r, i, o) {
                        var a = void 0
                          , s = o % 4
                          , c = (i + s) % 4
                          , u = i - c;
                        switch (s) {
                        case 0:
                            t[o] = e.charCodeAt(r + 3);
                        case 1:
                            t[o + 1 - (s << 1) | 0] = e.charCodeAt(r + 2);
                        case 2:
                            t[o + 2 - (s << 1) | 0] = e.charCodeAt(r + 1);
                        case 3:
                            t[o + 3 - (s << 1) | 0] = e.charCodeAt(r)
                        }
                        if (!(i < c + (4 - s))) {
                            for (a = 4 - s; a < u; a = a + 4 | 0)
                                n[o + a >> 2] = e.charCodeAt(r + a) << 24 | e.charCodeAt(r + a + 1) << 16 | e.charCodeAt(r + a + 2) << 8 | e.charCodeAt(r + a + 3);
                            switch (c) {
                            case 3:
                                t[o + u + 1 | 0] = e.charCodeAt(r + u + 2);
                            case 2:
                                t[o + u + 2 | 0] = e.charCodeAt(r + u + 1);
                            case 1:
                                t[o + u + 3 | 0] = e.charCodeAt(r + u)
                            }
                        }
                    }(e, t, o, a, s, c);
                if (e instanceof Array)
                    return i(e, t, o, a, s, c);
                if (n && n.Buffer && n.Buffer.isBuffer(e))
                    return i(e, t, o, a, s, c);
                if (e instanceof ArrayBuffer)
                    return i(new Uint8Array(e), t, o, a, s, c);
                if (e.buffer instanceof ArrayBuffer)
                    return i(new Uint8Array(e.buffer,e.byteOffset,e.byteLength), t, o, a, s, c);
                if (e instanceof Blob)
                    return function(e, t, n, i, o, a) {
                        var s = void 0
                          , c = a % 4
                          , u = (o + c) % 4
                          , f = o - u
                          , l = new Uint8Array(r.readAsArrayBuffer(e.slice(i, i + o)));
                        switch (c) {
                        case 0:
                            t[a] = l[3];
                        case 1:
                            t[a + 1 - (c << 1) | 0] = l[2];
                        case 2:
                            t[a + 2 - (c << 1) | 0] = l[1];
                        case 3:
                            t[a + 3 - (c << 1) | 0] = l[0]
                        }
                        if (!(o < u + (4 - c))) {
                            for (s = 4 - c; s < f; s = s + 4 | 0)
                                n[a + s >> 2 | 0] = l[s] << 24 | l[s + 1] << 16 | l[s + 2] << 8 | l[s + 3];
                            switch (u) {
                            case 3:
                                t[a + f + 1 | 0] = l[f + 2];
                            case 2:
                                t[a + f + 2 | 0] = l[f + 1];
                            case 1:
                                t[a + f + 3 | 0] = l[f]
                            }
                        }
                    }(e, t, o, a, s, c);
                throw new Error("Unsupported data type.")
            }
        }
        , function(e, t, n) {
            var r = n(0)
              , i = n(1).toHex
              , o = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    this._rusha = new r,
                    this._rusha.resetState()
                }
                return e.prototype.update = function(e) {
                    return this._rusha.append(e),
                    this
                }
                ,
                e.prototype.digest = function(e) {
                    var t = this._rusha.rawEnd().buffer;
                    if (!e)
                        return t;
                    if ("hex" === e)
                        return i(t);
                    throw new Error("unsupported digest encoding")
                }
                ,
                e
            }();
            e.exports = function() {
                return new o
            }
        }
        ])
    }
    ,
    e.exports = r()
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function r() {
            var t = Promise.resolve();
            e.nextTick = function(e) {
                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                    r[i - 1] = arguments[i];
                t.then(()=>{
                    e(...r)
                }
                )
            }
            ,
            e.nextTickAsync = ()=>t.then()
        }
        n.d(t, "a", (function() {
            return r
        }
        ))
    }
    ).call(this, n(10))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }
    ));
    var r = function() {
        function e() {
            this._hasWeakSet = "function" == typeof WeakSet,
            this._inner = this._hasWeakSet ? new WeakSet : []
        }
        return e.prototype.memoize = function(e) {
            if (this._hasWeakSet)
                return !!this._inner.has(e) || (this._inner.add(e),
                !1);
            for (var t = 0; t < this._inner.length; t++) {
                if (this._inner[t] === e)
                    return !0
            }
            return this._inner.push(e),
            !1
        }
        ,
        e.prototype.unmemoize = function(e) {
            if (this._hasWeakSet)
                this._inner.delete(e);
            else
                for (var t = 0; t < this._inner.length; t++)
                    if (this._inner[t] === e) {
                        this._inner.splice(t, 1);
                        break
                    }
        }
        ,
        e
    }()
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.a = n
    }
    ).call(this, n(8))
}
, function(e, t, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty
      , i = "~";
    function o() {}
    function a(e, t, n) {
        this.fn = e,
        this.context = t,
        this.once = n || !1
    }
    function s(e, t, n, r, o) {
        if ("function" != typeof n)
            throw new TypeError("The listener must be a function");
        var s = new a(n,r || e,o)
          , c = i ? i + t : t;
        return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], s] : e._events[c].push(s) : (e._events[c] = s,
        e._eventsCount++),
        e
    }
    function c(e, t) {
        0 == --e._eventsCount ? e._events = new o : delete e._events[t]
    }
    function u() {
        this._events = new o,
        this._eventsCount = 0
    }
    Object.create && (o.prototype = Object.create(null),
    (new o).__proto__ || (i = !1)),
    u.prototype.eventNames = function() {
        var e, t, n = [];
        if (0 === this._eventsCount)
            return n;
        for (t in e = this._events)
            r.call(e, t) && n.push(i ? t.slice(1) : t);
        return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
    }
    ,
    u.prototype.listeners = function(e) {
        var t = i ? i + e : e
          , n = this._events[t];
        if (!n)
            return [];
        if (n.fn)
            return [n.fn];
        for (var r = 0, o = n.length, a = new Array(o); r < o; r++)
            a[r] = n[r].fn;
        return a
    }
    ,
    u.prototype.listenerCount = function(e) {
        var t = i ? i + e : e
          , n = this._events[t];
        return n ? n.fn ? 1 : n.length : 0
    }
    ,
    u.prototype.emit = function(e, t, n, r, o, a) {
        var s = i ? i + e : e;
        if (!this._events[s])
            return !1;
        var c, u, f = this._events[s], l = arguments.length;
        if (f.fn) {
            switch (f.once && this.removeListener(e, f.fn, void 0, !0),
            l) {
            case 1:
                return f.fn.call(f.context),
                !0;
            case 2:
                return f.fn.call(f.context, t),
                !0;
            case 3:
                return f.fn.call(f.context, t, n),
                !0;
            case 4:
                return f.fn.call(f.context, t, n, r),
                !0;
            case 5:
                return f.fn.call(f.context, t, n, r, o),
                !0;
            case 6:
                return f.fn.call(f.context, t, n, r, o, a),
                !0
            }
            for (u = 1,
            c = new Array(l - 1); u < l; u++)
                c[u - 1] = arguments[u];
            f.fn.apply(f.context, c)
        } else {
            var h, p = f.length;
            for (u = 0; u < p; u++)
                switch (f[u].once && this.removeListener(e, f[u].fn, void 0, !0),
                l) {
                case 1:
                    f[u].fn.call(f[u].context);
                    break;
                case 2:
                    f[u].fn.call(f[u].context, t);
                    break;
                case 3:
                    f[u].fn.call(f[u].context, t, n);
                    break;
                case 4:
                    f[u].fn.call(f[u].context, t, n, r);
                    break;
                default:
                    if (!c)
                        for (h = 1,
                        c = new Array(l - 1); h < l; h++)
                            c[h - 1] = arguments[h];
                    f[u].fn.apply(f[u].context, c)
                }
        }
        return !0
    }
    ,
    u.prototype.on = function(e, t, n) {
        return s(this, e, t, n, !1)
    }
    ,
    u.prototype.once = function(e, t, n) {
        return s(this, e, t, n, !0)
    }
    ,
    u.prototype.removeListener = function(e, t, n, r) {
        var o = i ? i + e : e;
        if (!this._events[o])
            return this;
        if (!t)
            return c(this, o),
            this;
        var a = this._events[o];
        if (a.fn)
            a.fn !== t || r && !a.once || n && a.context !== n || c(this, o);
        else {
            for (var s = 0, u = [], f = a.length; s < f; s++)
                (a[s].fn !== t || r && !a[s].once || n && a[s].context !== n) && u.push(a[s]);
            u.length ? this._events[o] = 1 === u.length ? u[0] : u : c(this, o)
        }
        return this
    }
    ,
    u.prototype.removeAllListeners = function(e) {
        var t;
        return e ? (t = i ? i + e : e,
        this._events[t] && c(this, t)) : (this._events = new o,
        this._eventsCount = 0),
        this
    }
    ,
    u.prototype.off = u.prototype.removeListener,
    u.prototype.addListener = u.prototype.on,
    u.prefixed = i,
    u.EventEmitter = u,
    e.exports = u
}
, function(e, t, n) {
    (function(t, r) {
        /*! parse-torrent. MIT License. WebTorrent LLC <https://webtorrent.io/opensource> */
        var i = n(57)
          , o = n(60)
          , a = n(61)
          , s = n(62)
          , c = n(84)
          , u = n(88)
          , f = n(89);
        function l(e) {
            if ("string" == typeof e && /^(stream-)?magnet:/.test(e)) {
                var n = c(e);
                if (!n.infoHash)
                    throw new Error("Invalid torrent identifier");
                return n
            }
            if ("string" == typeof e && (/^[a-f0-9]{40}$/i.test(e) || /^[a-z2-7]{32}$/i.test(e)))
                return c("magnet:?xt=urn:btih:".concat(e));
            if (t.isBuffer(e) && 20 === e.length)
                return c("magnet:?xt=urn:btih:".concat(e.toString("hex")));
            if (t.isBuffer(e))
                return function(e) {
                    t.isBuffer(e) && (e = i.decode(e));
                    p(e.info, "info"),
                    p(e.info["name.utf-8"] || e.info.name, "info.name"),
                    p(e.info["piece length"], "info['piece length']"),
                    p(e.info.pieces, "info.pieces"),
                    e.info.files ? e.info.files.forEach(e=>{
                        p("number" == typeof e.length, "info.files[0].length"),
                        p(e["path.utf-8"] || e.path, "info.files[0].path")
                    }
                    ) : p("number" == typeof e.info.length, "info.length");
                    var n = {
                        info: e.info,
                        infoBuffer: i.encode(e.info),
                        name: (e.info["name.utf-8"] || e.info.name).toString(),
                        announce: []
                    };
                    n.infoHash = f.sync(n.infoBuffer),
                    n.infoHashBuffer = t.from(n.infoHash, "hex"),
                    void 0 !== e.info.private && (n.private = !!e.info.private);
                    e["creation date"] && (n.created = new Date(1e3 * e["creation date"]));
                    e["created by"] && (n.createdBy = e["created by"].toString());
                    t.isBuffer(e.comment) && (n.comment = e.comment.toString());
                    Array.isArray(e["announce-list"]) && e["announce-list"].length > 0 ? e["announce-list"].forEach(e=>{
                        e.forEach(e=>{
                            n.announce.push(e.toString())
                        }
                        )
                    }
                    ) : e.announce && n.announce.push(e.announce.toString());
                    t.isBuffer(e["url-list"]) && (e["url-list"] = e["url-list"].length > 0 ? [e["url-list"]] : []);
                    n.urlList = (e["url-list"] || []).map(e=>e.toString()),
                    n.announce = Array.from(new Set(n.announce)),
                    n.urlList = Array.from(new Set(n.urlList));
                    var r = e.info.files || [e.info];
                    n.files = r.map((e,t)=>{
                        var i = [].concat(n.name, e["path.utf-8"] || e.path || []).map(e=>e.toString());
                        return {
                            path: u.join.apply(null, [u.sep].concat(i)).slice(1),
                            name: i[i.length - 1],
                            length: e.length,
                            offset: r.slice(0, t).reduce(h, 0)
                        }
                    }
                    ),
                    n.length = r.reduce(h, 0);
                    var o = n.files[n.files.length - 1];
                    return n.pieceLength = e.info["piece length"],
                    n.lastPieceLength = (o.offset + o.length) % n.pieceLength || n.pieceLength,
                    n.pieces = function(e) {
                        for (var t = [], n = 0; n < e.length; n += 20)
                            t.push(e.slice(n, n + 20).toString("hex"));
                        return t
                    }(e.info.pieces),
                    n
                }(e);
            if (e && e.infoHash)
                return e.infoHash = e.infoHash.toLowerCase(),
                e.announce || (e.announce = []),
                "string" == typeof e.announce && (e.announce = [e.announce]),
                e.urlList || (e.urlList = []),
                e;
            throw new Error("Invalid torrent identifier")
        }
        function h(e, t) {
            return e + t.length
        }
        function p(e, t) {
            if (!e)
                throw new Error("Torrent is missing required field: ".concat(t))
        }
        e.exports = l,
        e.exports.remote = function(e, t) {
            var n;
            if ("function" != typeof t)
                throw new Error("second argument must be a Function");
            try {
                n = l(e)
            } catch (e) {}
            n && n.infoHash ? r.nextTick(()=>{
                t(null, n)
            }
            ) : (i = e,
            "undefined" != typeof Blob && i instanceof Blob ? o(e, (e,n)=>{
                if (e)
                    return t(new Error("Error converting Blob: ".concat(e.message)));
                c(n)
            }
            ) : "function" == typeof s && /^https?:/.test(e) ? s.concat({
                url: e,
                timeout: 3e4,
                headers: {
                    "user-agent": "WebTorrent (https://webtorrent.io)"
                }
            }, (e,n,r)=>{
                if (e)
                    return t(new Error("Error downloading torrent: ".concat(e.message)));
                c(r)
            }
            ) : "function" == typeof a.readFile && "string" == typeof e ? a.readFile(e, (e,n)=>{
                if (e)
                    return t(new Error("Invalid torrent identifier"));
                c(n)
            }
            ) : r.nextTick(()=>{
                t(new Error("Invalid torrent identifier"))
            }
            ));
            var i;
            function c(e) {
                try {
                    n = l(e)
                } catch (e) {
                    return t(e)
                }
                n && n.infoHash ? t(null, n) : t(new Error("Invalid torrent identifier"))
            }
        }
        ,
        e.exports.toMagnetURI = c.encode,
        e.exports.toTorrentFile = function(e) {
            var n = {
                info: e.info
            };
            n["announce-list"] = (e.announce || []).map(e=>(n.announce || (n.announce = e),
            [e = t.from(e, "utf8")])),
            n["url-list"] = e.urlList || [],
            void 0 !== e.private && (n.private = Number(e.private));
            e.created && (n["creation date"] = e.created.getTime() / 1e3 | 0);
            e.createdBy && (n["created by"] = e.createdBy);
            e.comment && (n.comment = e.comment);
            return i.encode(n)
        }
        ,
        t.alloc(0)
    }
    ).call(this, n(12).Buffer, n(10))
}
, function(e, t, n) {
    "use strict";
    /*!
 * range-parser
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015-2016 Douglas Christopher Wilson
 * MIT Licensed
 */
    function r(e, t) {
        return {
            start: e.start,
            end: e.end,
            index: t
        }
    }
    function i(e) {
        return {
            start: e.start,
            end: e.end
        }
    }
    function o(e, t) {
        return e.index - t.index
    }
    function a(e, t) {
        return e.start - t.start
    }
    e.exports = function(e, t, n) {
        if ("string" != typeof t)
            throw new TypeError("argument str must be a string");
        var s = t.indexOf("=");
        if (-1 === s)
            return -2;
        var c = t.slice(s + 1).split(",")
          , u = [];
        u.type = t.slice(0, s);
        for (var f = 0; f < c.length; f++) {
            var l = c[f].split("-")
              , h = parseInt(l[0], 10)
              , p = parseInt(l[1], 10);
            isNaN(h) ? (h = e - p,
            p = e - 1) : isNaN(p) && (p = e - 1),
            p > e - 1 && (p = e - 1),
            isNaN(h) || isNaN(p) || h > p || h < 0 || u.push({
                start: h,
                end: p
            })
        }
        if (u.length < 1)
            return -1;
        return n && n.combine ? function(e) {
            for (var t = e.map(r).sort(a), n = 0, s = 1; s < t.length; s++) {
                var c = t[s]
                  , u = t[n];
                c.start > u.end + 1 ? t[++n] = c : c.end > u.end && (u.end = c.end,
                u.index = Math.min(u.index, c.index))
            }
            t.length = n + 1;
            var f = t.sort(o).map(i);
            return f.type = e.type,
            f
        }(u) : u
    }
}
, , function(e, t) {
    e.exports = function(e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }),
            Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }),
            Object.defineProperty(t, "exports", {
                enumerable: !0
            }),
            t.webpackPolyfill = 1
        }
        return t
    }
}
, function(e, t, n) {
    e.exports = function(e) {
        function t(e) {
            var n, i = null;
            function o() {
                for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
                    r[i] = arguments[i];
                if (o.enabled) {
                    var a = o
                      , s = Number(new Date)
                      , c = s - (n || s);
                    a.diff = c,
                    a.prev = n,
                    a.curr = s,
                    n = s,
                    r[0] = t.coerce(r[0]),
                    "string" != typeof r[0] && r.unshift("%O");
                    var u = 0;
                    r[0] = r[0].replace(/%([a-zA-Z%])/g, (e,n)=>{
                        if ("%%" === e)
                            return "%";
                        u++;
                        var i = t.formatters[n];
                        if ("function" == typeof i) {
                            var o = r[u];
                            e = i.call(a, o),
                            r.splice(u, 1),
                            u--
                        }
                        return e
                    }
                    ),
                    t.formatArgs.call(a, r);
                    var f = a.log || t.log;
                    f.apply(a, r)
                }
            }
            return o.namespace = e,
            o.useColors = t.useColors(),
            o.color = t.selectColor(e),
            o.extend = r,
            o.destroy = t.destroy,
            Object.defineProperty(o, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: ()=>null === i ? t.enabled(e) : i,
                set: e=>{
                    i = e
                }
            }),
            "function" == typeof t.init && t.init(o),
            o
        }
        function r(e, n) {
            var r = t(this.namespace + (void 0 === n ? ":" : n) + e);
            return r.log = this.log,
            r
        }
        function i(e) {
            return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
        }
        return t.debug = t,
        t.default = t,
        t.coerce = function(e) {
            if (e instanceof Error)
                return e.stack || e.message;
            return e
        }
        ,
        t.disable = function() {
            var e = [...t.names.map(i), ...t.skips.map(i).map(e=>"-" + e)].join(",");
            return t.enable(""),
            e
        }
        ,
        t.enable = function(e) {
            var n;
            t.save(e),
            t.names = [],
            t.skips = [];
            var r = ("string" == typeof e ? e : "").split(/[\s,]+/)
              , i = r.length;
            for (n = 0; n < i; n++)
                r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
        }
        ,
        t.enabled = function(e) {
            if ("*" === e[e.length - 1])
                return !0;
            var n, r;
            for (n = 0,
            r = t.skips.length; n < r; n++)
                if (t.skips[n].test(e))
                    return !1;
            for (n = 0,
            r = t.names.length; n < r; n++)
                if (t.names[n].test(e))
                    return !0;
            return !1
        }
        ,
        t.humanize = n(54),
        t.destroy = function() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
        }
        ,
        Object.keys(e).forEach(n=>{
            t[n] = e[n]
        }
        ),
        t.names = [],
        t.skips = [],
        t.formatters = {},
        t.selectColor = function(e) {
            for (var n = 0, r = 0; r < e.length; r++)
                n = (n << 5) - n + e.charCodeAt(r),
                n |= 0;
            return t.colors[Math.abs(n) % t.colors.length]
        }
        ,
        t.enable(t.load()),
        t
    }
}
, function(e, t) {
    var n = 1e3
      , r = 6e4
      , i = 60 * r
      , o = 24 * i;
    function a(e, t, n, r) {
        var i = t >= 1.5 * n;
        return Math.round(e / n) + " " + r + (i ? "s" : "")
    }
    e.exports = function(e, t) {
        t = t || {};
        var s = typeof e;
        if ("string" === s && e.length > 0)
            return function(e) {
                if ((e = String(e)).length > 100)
                    return;
                var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                if (!t)
                    return;
                var a = parseFloat(t[1]);
                switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return 315576e5 * a;
                case "weeks":
                case "week":
                case "w":
                    return 6048e5 * a;
                case "days":
                case "day":
                case "d":
                    return a * o;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return a * i;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return a * r;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return a * n;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return a;
                default:
                    return
                }
            }(e);
        if ("number" === s && isFinite(e))
            return t.long ? function(e) {
                var t = Math.abs(e);
                if (t >= o)
                    return a(e, t, o, "day");
                if (t >= i)
                    return a(e, t, i, "hour");
                if (t >= r)
                    return a(e, t, r, "minute");
                if (t >= n)
                    return a(e, t, n, "second");
                return e + " ms"
            }(e) : function(e) {
                var t = Math.abs(e);
                if (t >= o)
                    return Math.round(e / o) + "d";
                if (t >= i)
                    return Math.round(e / i) + "h";
                if (t >= r)
                    return Math.round(e / r) + "m";
                if (t >= n)
                    return Math.round(e / n) + "s";
                return e + "ms"
            }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}
, function(e, t, n) {
    "use strict";
    t.byteLength = function(e) {
        var t = u(e)
          , n = t[0]
          , r = t[1];
        return 3 * (n + r) / 4 - r
    }
    ,
    t.toByteArray = function(e) {
        var t, n, r = u(e), a = r[0], s = r[1], c = new o(function(e, t, n) {
            return 3 * (t + n) / 4 - n
        }(0, a, s)), f = 0, l = s > 0 ? a - 4 : a;
        for (n = 0; n < l; n += 4)
            t = i[e.charCodeAt(n)] << 18 | i[e.charCodeAt(n + 1)] << 12 | i[e.charCodeAt(n + 2)] << 6 | i[e.charCodeAt(n + 3)],
            c[f++] = t >> 16 & 255,
            c[f++] = t >> 8 & 255,
            c[f++] = 255 & t;
        2 === s && (t = i[e.charCodeAt(n)] << 2 | i[e.charCodeAt(n + 1)] >> 4,
        c[f++] = 255 & t);
        1 === s && (t = i[e.charCodeAt(n)] << 10 | i[e.charCodeAt(n + 1)] << 4 | i[e.charCodeAt(n + 2)] >> 2,
        c[f++] = t >> 8 & 255,
        c[f++] = 255 & t);
        return c
    }
    ,
    t.fromByteArray = function(e) {
        for (var t, n = e.length, i = n % 3, o = [], a = 0, s = n - i; a < s; a += 16383)
            o.push(f(e, a, a + 16383 > s ? s : a + 16383));
        1 === i ? (t = e[n - 1],
        o.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1],
        o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
        return o.join("")
    }
    ;
    for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, c = a.length; s < c; ++s)
        r[s] = a[s],
        i[a.charCodeAt(s)] = s;
    function u(e) {
        var t = e.length;
        if (t % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        var n = e.indexOf("=");
        return -1 === n && (n = t),
        [n, n === t ? 0 : 4 - n % 4]
    }
    function f(e, t, n) {
        for (var i, o, a = [], s = t; s < n; s += 3)
            i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]),
            a.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
        return a.join("")
    }
    i["-".charCodeAt(0)] = 62,
    i["_".charCodeAt(0)] = 63
}
, function(e, t) {
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    t.read = function(e, t, n, r, i) {
        var o, a, s = 8 * i - r - 1, c = (1 << s) - 1, u = c >> 1, f = -7, l = n ? i - 1 : 0, h = n ? -1 : 1, p = e[t + l];
        for (l += h,
        o = p & (1 << -f) - 1,
        p >>= -f,
        f += s; f > 0; o = 256 * o + e[t + l],
        l += h,
        f -= 8)
            ;
        for (a = o & (1 << -f) - 1,
        o >>= -f,
        f += r; f > 0; a = 256 * a + e[t + l],
        l += h,
        f -= 8)
            ;
        if (0 === o)
            o = 1 - u;
        else {
            if (o === c)
                return a ? NaN : 1 / 0 * (p ? -1 : 1);
            a += Math.pow(2, r),
            o -= u
        }
        return (p ? -1 : 1) * a * Math.pow(2, o - r)
    }
    ,
    t.write = function(e, t, n, r, i, o) {
        var a, s, c, u = 8 * o - i - 1, f = (1 << u) - 1, l = f >> 1, h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : o - 1, d = r ? 1 : -1, v = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t),
        isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0,
        a = f) : (a = Math.floor(Math.log(t) / Math.LN2),
        t * (c = Math.pow(2, -a)) < 1 && (a--,
        c *= 2),
        (t += a + l >= 1 ? h / c : h * Math.pow(2, 1 - l)) * c >= 2 && (a++,
        c /= 2),
        a + l >= f ? (s = 0,
        a = f) : a + l >= 1 ? (s = (t * c - 1) * Math.pow(2, i),
        a += l) : (s = t * Math.pow(2, l - 1) * Math.pow(2, i),
        a = 0)); i >= 8; e[n + p] = 255 & s,
        p += d,
        s /= 256,
        i -= 8)
            ;
        for (a = a << i | s,
        u += i; u > 0; e[n + p] = 255 & a,
        p += d,
        a /= 256,
        u -= 8)
            ;
        e[n + p - d] |= 128 * v
    }
}
, function(e, t, n) {
    var r = e.exports;
    r.encode = n(58),
    r.decode = n(59),
    r.byteLength = r.encodingLength = function(e) {
        return r.encode(e).length
    }
}
, function(e, t, n) {
    var r = n(13).Buffer;
    function i(e, t, n) {
        var o = []
          , a = null;
        return i._encode(o, e),
        a = r.concat(o),
        i.bytes = a.length,
        r.isBuffer(t) ? (a.copy(t, n),
        t) : a
    }
    i.bytes = -1,
    i._floatConversionDetected = !1,
    i.getType = function(e) {
        return r.isBuffer(e) ? "buffer" : Array.isArray(e) ? "array" : ArrayBuffer.isView(e) ? "arraybufferview" : e instanceof Number ? "number" : e instanceof Boolean ? "boolean" : e instanceof ArrayBuffer ? "arraybuffer" : typeof e
    }
    ,
    i._encode = function(e, t) {
        if (null != t)
            switch (i.getType(t)) {
            case "buffer":
                i.buffer(e, t);
                break;
            case "object":
                i.dict(e, t);
                break;
            case "array":
                i.list(e, t);
                break;
            case "string":
                i.string(e, t);
                break;
            case "number":
            case "boolean":
                i.number(e, t);
                break;
            case "arraybufferview":
                i.buffer(e, r.from(t.buffer, t.byteOffset, t.byteLength));
                break;
            case "arraybuffer":
                i.buffer(e, r.from(t))
            }
    }
    ;
    var o = r.from("e")
      , a = r.from("d")
      , s = r.from("l");
    i.buffer = function(e, t) {
        e.push(r.from(t.length + ":"), t)
    }
    ,
    i.string = function(e, t) {
        e.push(r.from(r.byteLength(t) + ":" + t))
    }
    ,
    i.number = function(e, t) {
        var n = 2147483648 * (t / 2147483648 << 0) + (t % 2147483648 << 0);
        e.push(r.from("i" + n + "e")),
        n === t || i._floatConversionDetected || (i._floatConversionDetected = !0,
        console.warn('WARNING: Possible data corruption detected with value "' + t + '":', 'Bencoding only defines support for integers, value was converted to "' + n + '"'),
        console.trace())
    }
    ,
    i.dict = function(e, t) {
        e.push(a);
        for (var n, r = 0, s = Object.keys(t).sort(), c = s.length; r < c; r++)
            null != t[n = s[r]] && (i.string(e, n),
            i._encode(e, t[n]));
        e.push(o)
    }
    ,
    i.list = function(e, t) {
        var n = 0
          , r = t.length;
        for (e.push(s); n < r; n++)
            null != t[n] && i._encode(e, t[n]);
        e.push(o)
    }
    ,
    e.exports = i
}
, function(e, t, n) {
    var r = n(13).Buffer;
    function i(e, t, n) {
        for (var r = 0, i = 1, o = t; o < n; o++) {
            var a = e[o];
            if (a < 58 && a >= 48)
                r = 10 * r + (a - 48);
            else if (o !== t || 43 !== a) {
                if (o !== t || 45 !== a) {
                    if (46 === a)
                        break;
                    throw new Error("not a number: buffer[" + o + "] = " + a)
                }
                i = -1
            }
        }
        return r * i
    }
    function o(e, t, n, i) {
        return null == e || 0 === e.length ? null : ("number" != typeof t && null == i && (i = t,
        t = void 0),
        "number" != typeof n && null == i && (i = n,
        n = void 0),
        o.position = 0,
        o.encoding = i || null,
        o.data = r.isBuffer(e) ? e.slice(t, n) : r.from(e),
        o.bytes = o.data.length,
        o.next())
    }
    o.bytes = 0,
    o.position = 0,
    o.data = null,
    o.encoding = null,
    o.next = function() {
        switch (o.data[o.position]) {
        case 100:
            return o.dictionary();
        case 108:
            return o.list();
        case 105:
            return o.integer();
        default:
            return o.buffer()
        }
    }
    ,
    o.find = function(e) {
        for (var t = o.position, n = o.data.length, r = o.data; t < n; ) {
            if (r[t] === e)
                return t;
            t++
        }
        throw new Error('Invalid data: Missing delimiter "' + String.fromCharCode(e) + '" [0x' + e.toString(16) + "]")
    }
    ,
    o.dictionary = function() {
        o.position++;
        for (var e = {}; 101 !== o.data[o.position]; )
            e[o.buffer()] = o.next();
        return o.position++,
        e
    }
    ,
    o.list = function() {
        o.position++;
        for (var e = []; 101 !== o.data[o.position]; )
            e.push(o.next());
        return o.position++,
        e
    }
    ,
    o.integer = function() {
        var e = o.find(101)
          , t = i(o.data, o.position + 1, e);
        return o.position += e + 1 - o.position,
        t
    }
    ,
    o.buffer = function() {
        var e = o.find(58)
          , t = i(o.data, o.position, e)
          , n = ++e + t;
        return o.position = n,
        o.encoding ? o.data.toString(o.encoding, e, n) : o.data.slice(e, n)
    }
    ,
    e.exports = o
}
, function(e, t, n) {
    (function(t) {
        /*! blob-to-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
        e.exports = function(e, n) {
            if ("undefined" == typeof Blob || !(e instanceof Blob))
                throw new Error("first argument must be a Blob");
            if ("function" != typeof n)
                throw new Error("second argument must be a function");
            var r = new FileReader;
            r.addEventListener("loadend", (function e(i) {
                r.removeEventListener("loadend", e, !1),
                i.error ? n(i.error) : n(null, t.from(r.result))
            }
            ), !1),
            r.readAsArrayBuffer(e)
        }
    }
    ).call(this, n(12).Buffer)
}
, function(e, t) {}
, function(e, t, n) {
    (function(t) {
        e.exports = l;
        var r = n(63)
          , i = n(64)
          , o = n(32)
          , a = n(81)
          , s = n(82)
          , c = n(43)
          , u = n(29)
          , f = e=>null !== e && "object" == typeof e && "function" == typeof e.pipe;
        function l(e, n) {
            if (e = Object.assign({
                maxRedirects: 10
            }, "string" == typeof e ? {
                url: e
            } : e),
            n = s(n),
            e.url) {
                var {hostname: r, port: h, protocol: p, auth: d, path: v} = u.parse(e.url);
                delete e.url,
                r || h || p || d ? Object.assign(e, {
                    hostname: r,
                    port: h,
                    protocol: p,
                    auth: d,
                    path: v
                }) : e.path = v
            }
            var y, g = {
                "accept-encoding": "gzip, deflate"
            };
            e.headers && Object.keys(e.headers).forEach(t=>g[t.toLowerCase()] = e.headers[t]),
            e.headers = g,
            e.body ? y = e.json && !f(e.body) ? JSON.stringify(e.body) : e.body : e.form && (y = "string" == typeof e.form ? e.form : c.stringify(e.form),
            e.headers["content-type"] = "application/x-www-form-urlencoded"),
            y && (e.method || (e.method = "POST"),
            f(y) || (e.headers["content-length"] = t.byteLength(y)),
            e.json && !e.form && (e.headers["content-type"] = "application/json")),
            delete e.body,
            delete e.form,
            e.json && (e.headers.accept = "application/json"),
            e.method && (e.method = e.method.toUpperCase());
            var m = ("https:" === e.protocol ? a : o).request(e, t=>{
                if (!1 !== e.followRedirects && t.statusCode >= 300 && t.statusCode < 400 && t.headers.location)
                    return e.url = t.headers.location,
                    delete e.headers.host,
                    t.resume(),
                    "POST" === e.method && [301, 302].includes(t.statusCode) && (e.method = "GET",
                    delete e.headers["content-length"],
                    delete e.headers["content-type"]),
                    0 == e.maxRedirects-- ? n(new Error("too many redirects")) : l(e, n);
                var r = "function" == typeof i && "HEAD" !== e.method;
                n(null, r ? i(t) : t)
            }
            );
            return m.on("timeout", ()=>{
                m.abort(),
                n(new Error("Request timed out"))
            }
            ),
            m.on("error", n),
            f(y) ? y.on("error", n).pipe(m) : m.end(y),
            m
        }
        l.concat = (e,t)=>l(e, (n,i)=>{
            if (n)
                return t(n);
            r(i, (n,r)=>{
                if (n)
                    return t(n);
                if (e.json)
                    try {
                        r = JSON.parse(r.toString())
                    } catch (n) {
                        return t(n, i, r)
                    }
                t(null, i, r)
            }
            )
        }
        ),
        ["get", "post", "put", "patch", "head", "delete"].forEach(e=>{
            l[e] = (t,n)=>("string" == typeof t && (t = {
                url: t
            }),
            l(Object.assign({
                method: e.toUpperCase()
            }, t), n))
        }
        )
    }
    ).call(this, n(12).Buffer)
}
, function(e, t, n) {
    (function(t) {
        /*! simple-concat. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
        e.exports = function(e, n) {
            var r = [];
            e.on("data", (function(e) {
                r.push(e)
            }
            )),
            e.once("end", (function() {
                n && n(null, t.concat(r)),
                n = null
            }
            )),
            e.once("error", (function(e) {
                n && n(e),
                n = null
            }
            ))
        }
    }
    ).call(this, n(12).Buffer)
}
, function(e, t) {}
, function(e, t, n) {
    (function(t, r, i) {
        var o = n(33)
          , a = n(17)
          , s = n(34)
          , c = n(35)
          , u = n(73)
          , f = s.IncomingMessage
          , l = s.readyStates;
        var h = e.exports = function(e) {
            var n, r = this;
            c.Writable.call(r),
            r._opts = e,
            r._body = [],
            r._headers = {},
            e.auth && r.setHeader("Authorization", "Basic " + new t(e.auth).toString("base64")),
            Object.keys(e.headers).forEach((function(t) {
                r.setHeader(t, e.headers[t])
            }
            ));
            var i = !0;
            if ("disable-fetch" === e.mode || "requestTimeout"in e && !o.abortController)
                i = !1,
                n = !0;
            else if ("prefer-streaming" === e.mode)
                n = !1;
            else if ("allow-wrong-content-type" === e.mode)
                n = !o.overrideMimeType;
            else {
                if (e.mode && "default" !== e.mode && "prefer-fast" !== e.mode)
                    throw new Error("Invalid value for opts.mode");
                n = !0
            }
            r._mode = function(e, t) {
                return o.fetch && t ? "fetch" : o.mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : o.msstream ? "ms-stream" : o.arraybuffer && e ? "arraybuffer" : o.vbArray && e ? "text:vbarray" : "text"
            }(n, i),
            r._fetchTimer = null,
            r.on("finish", (function() {
                r._onFinish()
            }
            ))
        }
        ;
        a(h, c.Writable),
        h.prototype.setHeader = function(e, t) {
            var n = e.toLowerCase();
            -1 === p.indexOf(n) && (this._headers[n] = {
                name: e,
                value: t
            })
        }
        ,
        h.prototype.getHeader = function(e) {
            var t = this._headers[e.toLowerCase()];
            return t ? t.value : null
        }
        ,
        h.prototype.removeHeader = function(e) {
            delete this._headers[e.toLowerCase()]
        }
        ,
        h.prototype._onFinish = function() {
            var e = this;
            if (!e._destroyed) {
                var n = e._opts
                  , a = e._headers
                  , s = null;
                "GET" !== n.method && "HEAD" !== n.method && (s = o.arraybuffer ? u(t.concat(e._body)) : o.blobConstructor ? new r.Blob(e._body.map((function(e) {
                    return u(e)
                }
                )),{
                    type: (a["content-type"] || {}).value || ""
                }) : t.concat(e._body).toString());
                var c = [];
                if (Object.keys(a).forEach((function(e) {
                    var t = a[e].name
                      , n = a[e].value;
                    Array.isArray(n) ? n.forEach((function(e) {
                        c.push([t, e])
                    }
                    )) : c.push([t, n])
                }
                )),
                "fetch" === e._mode) {
                    var f = null;
                    if (o.abortController) {
                        var h = new AbortController;
                        f = h.signal,
                        e._fetchAbortController = h,
                        "requestTimeout"in n && 0 !== n.requestTimeout && (e._fetchTimer = r.setTimeout((function() {
                            e.emit("requestTimeout"),
                            e._fetchAbortController && e._fetchAbortController.abort()
                        }
                        ), n.requestTimeout))
                    }
                    r.fetch(e._opts.url, {
                        method: e._opts.method,
                        headers: c,
                        body: s || void 0,
                        mode: "cors",
                        credentials: n.withCredentials ? "include" : "same-origin",
                        signal: f
                    }).then((function(t) {
                        e._fetchResponse = t,
                        e._connect()
                    }
                    ), (function(t) {
                        r.clearTimeout(e._fetchTimer),
                        e._destroyed || e.emit("error", t)
                    }
                    ))
                } else {
                    var p = e._xhr = new r.XMLHttpRequest;
                    try {
                        p.open(e._opts.method, e._opts.url, !0)
                    } catch (t) {
                        return void i.nextTick((function() {
                            e.emit("error", t)
                        }
                        ))
                    }
                    "responseType"in p && (p.responseType = e._mode.split(":")[0]),
                    "withCredentials"in p && (p.withCredentials = !!n.withCredentials),
                    "text" === e._mode && "overrideMimeType"in p && p.overrideMimeType("text/plain; charset=x-user-defined"),
                    "requestTimeout"in n && (p.timeout = n.requestTimeout,
                    p.ontimeout = function() {
                        e.emit("requestTimeout")
                    }
                    ),
                    c.forEach((function(e) {
                        p.setRequestHeader(e[0], e[1])
                    }
                    )),
                    e._response = null,
                    p.onreadystatechange = function() {
                        switch (p.readyState) {
                        case l.LOADING:
                        case l.DONE:
                            e._onXHRProgress()
                        }
                    }
                    ,
                    "moz-chunked-arraybuffer" === e._mode && (p.onprogress = function() {
                        e._onXHRProgress()
                    }
                    ),
                    p.onerror = function() {
                        e._destroyed || e.emit("error", new Error("XHR error"))
                    }
                    ;
                    try {
                        p.send(s)
                    } catch (t) {
                        return void i.nextTick((function() {
                            e.emit("error", t)
                        }
                        ))
                    }
                }
            }
        }
        ,
        h.prototype._onXHRProgress = function() {
            (function(e) {
                try {
                    var t = e.status;
                    return null !== t && 0 !== t
                } catch (e) {
                    return !1
                }
            }
            )(this._xhr) && !this._destroyed && (this._response || this._connect(),
            this._response._onXHRProgress())
        }
        ,
        h.prototype._connect = function() {
            var e = this;
            e._destroyed || (e._response = new f(e._xhr,e._fetchResponse,e._mode,e._fetchTimer),
            e._response.on("error", (function(t) {
                e.emit("error", t)
            }
            )),
            e.emit("response", e._response))
        }
        ,
        h.prototype._write = function(e, t, n) {
            this._body.push(e),
            n()
        }
        ,
        h.prototype.abort = h.prototype.destroy = function() {
            this._destroyed = !0,
            r.clearTimeout(this._fetchTimer),
            this._response && (this._response._destroyed = !0),
            this._xhr ? this._xhr.abort() : this._fetchAbortController && this._fetchAbortController.abort()
        }
        ,
        h.prototype.end = function(e, t, n) {
            "function" == typeof e && (n = e,
            e = void 0),
            c.Writable.prototype.end.call(this, e, t, n)
        }
        ,
        h.prototype.flushHeaders = function() {}
        ,
        h.prototype.setTimeout = function() {}
        ,
        h.prototype.setNoDelay = function() {}
        ,
        h.prototype.setSocketKeepAlive = function() {}
        ;
        var p = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"]
    }
    ).call(this, n(12).Buffer, n(8), n(10))
}
, function(e, t) {}
, function(e, t, n) {
    "use strict";
    var r = n(13).Buffer
      , i = n(68);
    e.exports = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.head = null,
            this.tail = null,
            this.length = 0
        }
        return e.prototype.push = function(e) {
            var t = {
                data: e,
                next: null
            };
            this.length > 0 ? this.tail.next = t : this.head = t,
            this.tail = t,
            ++this.length
        }
        ,
        e.prototype.unshift = function(e) {
            var t = {
                data: e,
                next: this.head
            };
            0 === this.length && (this.tail = t),
            this.head = t,
            ++this.length
        }
        ,
        e.prototype.shift = function() {
            if (0 !== this.length) {
                var e = this.head.data;
                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                --this.length,
                e
            }
        }
        ,
        e.prototype.clear = function() {
            this.head = this.tail = null,
            this.length = 0
        }
        ,
        e.prototype.join = function(e) {
            if (0 === this.length)
                return "";
            for (var t = this.head, n = "" + t.data; t = t.next; )
                n += e + t.data;
            return n
        }
        ,
        e.prototype.concat = function(e) {
            if (0 === this.length)
                return r.alloc(0);
            if (1 === this.length)
                return this.head.data;
            for (var t, n, i, o = r.allocUnsafe(e >>> 0), a = this.head, s = 0; a; )
                t = a.data,
                n = o,
                i = s,
                t.copy(n, i),
                s += a.data.length,
                a = a.next;
            return o
        }
        ,
        e
    }(),
    i && i.inspect && i.inspect.custom && (e.exports.prototype[i.inspect.custom] = function() {
        var e = i.inspect({
            length: this.length
        });
        return this.constructor.name + " " + e
    }
    )
}
, function(e, t) {}
, function(e, t, n) {
    (function(e) {
        var r = void 0 !== e && e || "undefined" != typeof self && self || window
          , i = Function.prototype.apply;
        function o(e, t) {
            this._id = e,
            this._clearFn = t
        }
        t.setTimeout = function() {
            return new o(i.call(setTimeout, r, arguments),clearTimeout)
        }
        ,
        t.setInterval = function() {
            return new o(i.call(setInterval, r, arguments),clearInterval)
        }
        ,
        t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        }
        ,
        o.prototype.unref = o.prototype.ref = function() {}
        ,
        o.prototype.close = function() {
            this._clearFn.call(r, this._id)
        }
        ,
        t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId),
            e._idleTimeout = t
        }
        ,
        t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId),
            e._idleTimeout = -1
        }
        ,
        t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout((function() {
                e._onTimeout && e._onTimeout()
            }
            ), t))
        }
        ,
        n(70),
        t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate,
        t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }
    ).call(this, n(8))
}
, function(e, t, n) {
    (function(e, t) {
        !function(e, n) {
            "use strict";
            if (!e.setImmediate) {
                var r, i, o, a, s, c = 1, u = {}, f = !1, l = e.document, h = Object.getPrototypeOf && Object.getPrototypeOf(e);
                h = h && h.setTimeout ? h : e,
                "[object process]" === {}.toString.call(e.process) ? r = function(e) {
                    t.nextTick((function() {
                        d(e)
                    }
                    ))
                }
                : !function() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0
                          , n = e.onmessage;
                        return e.onmessage = function() {
                            t = !1
                        }
                        ,
                        e.postMessage("", "*"),
                        e.onmessage = n,
                        t
                    }
                }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(e) {
                    d(e.data)
                }
                ,
                r = function(e) {
                    o.port2.postMessage(e)
                }
                ) : l && "onreadystatechange"in l.createElement("script") ? (i = l.documentElement,
                r = function(e) {
                    var t = l.createElement("script");
                    t.onreadystatechange = function() {
                        d(e),
                        t.onreadystatechange = null,
                        i.removeChild(t),
                        t = null
                    }
                    ,
                    i.appendChild(t)
                }
                ) : r = function(e) {
                    setTimeout(d, 0, e)
                }
                : (a = "setImmediate$" + Math.random() + "$",
                s = function(t) {
                    t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && d(+t.data.slice(a.length))
                }
                ,
                e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s),
                r = function(t) {
                    e.postMessage(a + t, "*")
                }
                ),
                h.setImmediate = function(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
                        t[n] = arguments[n + 1];
                    var i = {
                        callback: e,
                        args: t
                    };
                    return u[c] = i,
                    r(c),
                    c++
                }
                ,
                h.clearImmediate = p
            }
            function p(e) {
                delete u[e]
            }
            function d(e) {
                if (f)
                    setTimeout(d, 0, e);
                else {
                    var t = u[e];
                    if (t) {
                        f = !0;
                        try {
                            !function(e) {
                                var t = e.callback
                                  , n = e.args;
                                switch (n.length) {
                                case 0:
                                    t();
                                    break;
                                case 1:
                                    t(n[0]);
                                    break;
                                case 2:
                                    t(n[0], n[1]);
                                    break;
                                case 3:
                                    t(n[0], n[1], n[2]);
                                    break;
                                default:
                                    t.apply(void 0, n)
                                }
                            }(t)
                        } finally {
                            p(e),
                            f = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }
    ).call(this, n(8), n(10))
}
, function(e, t, n) {
    (function(t) {
        function n(e) {
            try {
                if (!t.localStorage)
                    return !1
            } catch (e) {
                return !1
            }
            var n = t.localStorage[e];
            return null != n && "true" === String(n).toLowerCase()
        }
        e.exports = function(e, t) {
            if (n("noDeprecation"))
                return e;
            var r = !1;
            return function() {
                if (!r) {
                    if (n("throwDeprecation"))
                        throw new Error(t);
                    n("traceDeprecation") ? console.trace(t) : console.warn(t),
                    r = !0
                }
                return e.apply(this, arguments)
            }
        }
    }
    ).call(this, n(8))
}
, function(e, t, n) {
    "use strict";
    e.exports = o;
    var r = n(42)
      , i = Object.create(n(23));
    function o(e) {
        if (!(this instanceof o))
            return new o(e);
        r.call(this, e)
    }
    i.inherits = n(17),
    i.inherits(o, r),
    o.prototype._transform = function(e, t, n) {
        n(null, e)
    }
}
, function(e, t, n) {
    var r = n(12).Buffer;
    e.exports = function(e) {
        if (e instanceof Uint8Array) {
            if (0 === e.byteOffset && e.byteLength === e.buffer.byteLength)
                return e.buffer;
            if ("function" == typeof e.buffer.slice)
                return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
        }
        if (r.isBuffer(e)) {
            for (var t = new Uint8Array(e.length), n = e.length, i = 0; i < n; i++)
                t[i] = e[i];
            return t.buffer
        }
        throw new Error("Argument must be a Buffer")
    }
}
, function(e, t) {
    e.exports = function() {
        for (var e = {}, t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r)
                n.call(r, i) && (e[i] = r[i])
        }
        return e
    }
    ;
    var n = Object.prototype.hasOwnProperty
}
, function(e, t) {
    e.exports = {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Unordered Collection",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required"
    }
}
, function(e, t, n) {
    (function(e, r) {
        var i;
        /*! https://mths.be/punycode v1.4.1 by @mathias */
        !function(o) {
            t && t.nodeType,
            e && e.nodeType;
            var a = "object" == typeof r && r;
            a.global !== a && a.window !== a && a.self;
            var s, c = 2147483647, u = /^xn--/, f = /[^\x20-\x7E]/, l = /[\x2E\u3002\uFF0E\uFF61]/g, h = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
            }, p = Math.floor, d = String.fromCharCode;
            function v(e) {
                throw new RangeError(h[e])
            }
            function y(e, t) {
                for (var n = e.length, r = []; n--; )
                    r[n] = t(e[n]);
                return r
            }
            function g(e, t) {
                var n = e.split("@")
                  , r = "";
                return n.length > 1 && (r = n[0] + "@",
                e = n[1]),
                r + y((e = e.replace(l, ".")).split("."), t).join(".")
            }
            function m(e) {
                for (var t, n, r = [], i = 0, o = e.length; i < o; )
                    (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o ? 56320 == (64512 & (n = e.charCodeAt(i++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t),
                    i--) : r.push(t);
                return r
            }
            function b(e) {
                return y(e, (function(e) {
                    var t = "";
                    return e > 65535 && (t += d((e -= 65536) >>> 10 & 1023 | 55296),
                    e = 56320 | 1023 & e),
                    t += d(e)
                }
                )).join("")
            }
            function _(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
            }
            function w(e, t, n) {
                var r = 0;
                for (e = n ? p(e / 700) : e >> 1,
                e += p(e / t); e > 455; r += 36)
                    e = p(e / 35);
                return p(r + 36 * e / (e + 38))
            }
            function O(e) {
                var t, n, r, i, o, a, s, u, f, l, h, d = [], y = e.length, g = 0, m = 128, _ = 72;
                for ((n = e.lastIndexOf("-")) < 0 && (n = 0),
                r = 0; r < n; ++r)
                    e.charCodeAt(r) >= 128 && v("not-basic"),
                    d.push(e.charCodeAt(r));
                for (i = n > 0 ? n + 1 : 0; i < y; ) {
                    for (o = g,
                    a = 1,
                    s = 36; i >= y && v("invalid-input"),
                    ((u = (h = e.charCodeAt(i++)) - 48 < 10 ? h - 22 : h - 65 < 26 ? h - 65 : h - 97 < 26 ? h - 97 : 36) >= 36 || u > p((c - g) / a)) && v("overflow"),
                    g += u * a,
                    !(u < (f = s <= _ ? 1 : s >= _ + 26 ? 26 : s - _)); s += 36)
                        a > p(c / (l = 36 - f)) && v("overflow"),
                        a *= l;
                    _ = w(g - o, t = d.length + 1, 0 == o),
                    p(g / t) > c - m && v("overflow"),
                    m += p(g / t),
                    g %= t,
                    d.splice(g++, 0, m)
                }
                return b(d)
            }
            function E(e) {
                var t, n, r, i, o, a, s, u, f, l, h, y, g, b, O, E = [];
                for (y = (e = m(e)).length,
                t = 128,
                n = 0,
                o = 72,
                a = 0; a < y; ++a)
                    (h = e[a]) < 128 && E.push(d(h));
                for (r = i = E.length,
                i && E.push("-"); r < y; ) {
                    for (s = c,
                    a = 0; a < y; ++a)
                        (h = e[a]) >= t && h < s && (s = h);
                    for (s - t > p((c - n) / (g = r + 1)) && v("overflow"),
                    n += (s - t) * g,
                    t = s,
                    a = 0; a < y; ++a)
                        if ((h = e[a]) < t && ++n > c && v("overflow"),
                        h == t) {
                            for (u = n,
                            f = 36; !(u < (l = f <= o ? 1 : f >= o + 26 ? 26 : f - o)); f += 36)
                                O = u - l,
                                b = 36 - l,
                                E.push(d(_(l + O % b, 0))),
                                u = p(O / b);
                            E.push(d(_(u, 0))),
                            o = w(n, g, r == i),
                            n = 0,
                            ++r
                        }
                    ++n,
                    ++t
                }
                return E.join("")
            }
            s = {
                version: "1.4.1",
                ucs2: {
                    decode: m,
                    encode: b
                },
                decode: O,
                encode: E,
                toASCII: function(e) {
                    return g(e, (function(e) {
                        return f.test(e) ? "xn--" + E(e) : e
                    }
                    ))
                },
                toUnicode: function(e) {
                    return g(e, (function(e) {
                        return u.test(e) ? O(e.slice(4).toLowerCase()) : e
                    }
                    ))
                }
            },
            void 0 === (i = function() {
                return s
            }
            .call(t, n, t, e)) || (e.exports = i)
        }()
    }
    ).call(this, n(77)(e), n(8))
}
, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = {
        isString: function(e) {
            return "string" == typeof e
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e
        },
        isNull: function(e) {
            return null === e
        },
        isNullOrUndefined: function(e) {
            return null == e
        }
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    e.exports = function(e, t, n, o) {
        t = t || "&",
        n = n || "=";
        var a = {};
        if ("string" != typeof e || 0 === e.length)
            return a;
        var s = /\+/g;
        e = e.split(t);
        var c = 1e3;
        o && "number" == typeof o.maxKeys && (c = o.maxKeys);
        var u = e.length;
        c > 0 && u > c && (u = c);
        for (var f = 0; f < u; ++f) {
            var l, h, p, d, v = e[f].replace(s, "%20"), y = v.indexOf(n);
            y >= 0 ? (l = v.substr(0, y),
            h = v.substr(y + 1)) : (l = v,
            h = ""),
            p = decodeURIComponent(l),
            d = decodeURIComponent(h),
            r(a, p) ? i(a[p]) ? a[p].push(d) : a[p] = [a[p], d] : a[p] = d
        }
        return a
    }
    ;
    var i = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
}
, function(e, t, n) {
    "use strict";
    var r = function(e) {
        switch (typeof e) {
        case "string":
            return e;
        case "boolean":
            return e ? "true" : "false";
        case "number":
            return isFinite(e) ? e : "";
        default:
            return ""
        }
    };
    e.exports = function(e, t, n, s) {
        return t = t || "&",
        n = n || "=",
        null === e && (e = void 0),
        "object" == typeof e ? o(a(e), (function(a) {
            var s = encodeURIComponent(r(a)) + n;
            return i(e[a]) ? o(e[a], (function(e) {
                return s + encodeURIComponent(r(e))
            }
            )).join(t) : s + encodeURIComponent(r(e[a]))
        }
        )).join(t) : s ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(e)) : ""
    }
    ;
    var i = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
    ;
    function o(e, t) {
        if (e.map)
            return e.map(t);
        for (var n = [], r = 0; r < e.length; r++)
            n.push(t(e[r], r));
        return n
    }
    var a = Object.keys || function(e) {
        var t = [];
        for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        return t
    }
}
, function(e, t, n) {
    var r = n(32)
      , i = n(29)
      , o = e.exports;
    for (var a in r)
        r.hasOwnProperty(a) && (o[a] = r[a]);
    function s(e) {
        if ("string" == typeof e && (e = i.parse(e)),
        e.protocol || (e.protocol = "https:"),
        "https:" !== e.protocol)
            throw new Error('Protocol "' + e.protocol + '" not supported. Expected "https:"');
        return e
    }
    o.request = function(e, t) {
        return e = s(e),
        r.request.call(this, e, t)
    }
    ,
    o.get = function(e, t) {
        return e = s(e),
        r.get.call(this, e, t)
    }
}
, function(e, t, n) {
    var r = n(83);
    function i(e) {
        var t = function t() {
            return t.called ? t.value : (t.called = !0,
            t.value = e.apply(this, arguments))
        };
        return t.called = !1,
        t
    }
    function o(e) {
        var t = function t() {
            if (t.called)
                throw new Error(t.onceError);
            return t.called = !0,
            t.value = e.apply(this, arguments)
        }
          , n = e.name || "Function wrapped with `once`";
        return t.onceError = n + " shouldn't be called more than once",
        t.called = !1,
        t
    }
    e.exports = r(i),
    e.exports.strict = r(o),
    i.proto = i((function() {
        Object.defineProperty(Function.prototype, "once", {
            value: function() {
                return i(this)
            },
            configurable: !0
        }),
        Object.defineProperty(Function.prototype, "onceStrict", {
            value: function() {
                return o(this)
            },
            configurable: !0
        })
    }
    ))
}
, function(e, t) {
    e.exports = function e(t, n) {
        if (t && n)
            return e(t)(n);
        if ("function" != typeof t)
            throw new TypeError("need wrapper function");
        return Object.keys(t).forEach((function(e) {
            r[e] = t[e]
        }
        )),
        r;
        function r() {
            for (var e = new Array(arguments.length), n = 0; n < e.length; n++)
                e[n] = arguments[n];
            var r = t.apply(this, e)
              , i = e[e.length - 1];
            return "function" == typeof r && r !== i && Object.keys(i).forEach((function(e) {
                r[e] = i[e]
            }
            )),
            r
        }
    }
}
, function(e, t, n) {
    (function(t) {
        /*! magnet-uri. MIT License. WebTorrent LLC <https://webtorrent.io/opensource> */
        e.exports = o,
        e.exports.decode = o,
        e.exports.encode = function(e) {
            (e = Object.assign({}, e)).infoHashBuffer && (e.xt = "urn:btih:".concat(e.infoHashBuffer.toString("hex")));
            e.infoHash && (e.xt = "urn:btih:".concat(e.infoHash));
            e.name && (e.dn = e.name);
            e.keywords && (e.kt = e.keywords);
            e.announce && (e.tr = e.announce);
            e.urlList && (e.ws = e.urlList,
            delete e.as);
            e.peerAddresses && (e["x.pe"] = e.peerAddresses);
            e.x && e.x.pe && (e["x.pe"] = e.x.pe);
            var t = "magnet:?";
            return Object.keys(e).filter(e=>2 === e.length || "x.pe" === e).forEach((n,r)=>{
                var o = Array.isArray(e[n]) ? e[n] : [e[n]];
                o.forEach((e,i)=>{
                    (r > 0 || i > 0) && ("kt" !== n && "so" !== n || 0 === i) && (t += "&"),
                    "dn" === n && (e = encodeURIComponent(e).replace(/%20/g, "+")),
                    "tr" !== n && "xs" !== n && "as" !== n && "ws" !== n || (e = encodeURIComponent(e)),
                    "kt" === n && (e = encodeURIComponent(e)),
                    "so" !== n && (t += "kt" === n && i > 0 ? "+".concat(e) : "".concat(n, "=").concat(e))
                }
                ),
                "so" === n && (t += "".concat(n, "=").concat(i.compose(o)))
            }
            ),
            t
        }
        ;
        var r = n(85)
          , i = n(87);
        function o(e) {
            var n, o = {}, a = e.split("magnet:?")[1];
            ((a && a.length >= 0 ? a.split("&") : []).forEach(e=>{
                var t = e.split("=");
                if (2 === t.length) {
                    var n = t[0]
                      , r = t[1];
                    "dn" === n && (r = decodeURIComponent(r).replace(/\+/g, " ")),
                    "tr" !== n && "xs" !== n && "as" !== n && "ws" !== n || (r = decodeURIComponent(r)),
                    "kt" === n && (r = decodeURIComponent(r).split("+")),
                    "ix" === n && (r = Number(r)),
                    "so" === n && (r = i.parse(decodeURIComponent(r).split(","))),
                    o[n] ? (Array.isArray(o[n]) || (o[n] = [o[n]]),
                    o[n].push(r)) : o[n] = r
                }
            }
            ),
            o["x.pe"] && (o["x.pe"] = Array.isArray(o["x.pe"]) ? Array.from(new Set(o["x.pe"])) : [o["x.pe"]]),
            o.xt) && (Array.isArray(o.xt) ? o.xt : [o.xt]).forEach(e=>{
                if (n = e.match(/^urn:btih:(.{40})/))
                    o.infoHash = n[1].toLowerCase();
                else if (n = e.match(/^urn:btih:(.{32})/)) {
                    var i = r.decode(n[1]);
                    o.infoHash = t.from(i, "binary").toString("hex")
                }
            }
            );
            return o.infoHash && (o.infoHashBuffer = t.from(o.infoHash, "hex")),
            o.dn && (o.name = o.dn),
            o.kt && (o.keywords = o.kt),
            o["x.pe"] && (o.peerAddresses = o["x.pe"]),
            "string" == typeof o.tr ? o.announce = [o.tr] : Array.isArray(o.tr) ? o.announce = o.tr : o.announce = [],
            o.urlList = [],
            ("string" == typeof o.as || Array.isArray(o.as)) && (o.urlList = o.urlList.concat(o.as)),
            ("string" == typeof o.ws || Array.isArray(o.ws)) && (o.urlList = o.urlList.concat(o.ws)),
            o.announce = Array.from(new Set(o.announce)),
            o.urlList = Array.from(new Set(o.urlList)),
            o["x.pe"] && (o.x = {
                pe: o["x.pe"]
            },
            delete o["x.pe"]),
            o
        }
    }
    ).call(this, n(12).Buffer)
}
, function(e, t, n) {
    var r = n(86);
    t.encode = r.encode,
    t.decode = r.decode
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];
        t.encode = function(t) {
            e.isBuffer(t) || (t = new e(t));
            for (var n, r, i = 0, o = 0, a = 0, s = 0, c = new e(8 * (n = t,
            r = Math.floor(n.length / 5),
            n.length % 5 == 0 ? r : r + 1)); i < t.length; ) {
                var u = t[i];
                a > 3 ? (s = (s = u & 255 >> a) << (a = (a + 5) % 8) | (i + 1 < t.length ? t[i + 1] : 0) >> 8 - a,
                i++) : (s = u >> 8 - (a + 5) & 31,
                0 === (a = (a + 5) % 8) && i++),
                c[o] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(s),
                o++
            }
            for (i = o; i < c.length; i++)
                c[i] = 61;
            return c
        }
        ,
        t.decode = function(t) {
            var r, i = 0, o = 0, a = 0;
            e.isBuffer(t) || (t = new e(t));
            for (var s = new e(Math.ceil(5 * t.length / 8)), c = 0; c < t.length && 61 !== t[c]; c++) {
                var u = t[c] - 48;
                if (!(u < n.length))
                    throw new Error("Invalid input - it is not base32 encoded string");
                o = n[u],
                i <= 3 ? 0 === (i = (i + 5) % 8) ? (r |= o,
                s[a] = r,
                a++,
                r = 0) : r |= 255 & o << 8 - i : (r |= 255 & o >>> (i = (i + 5) % 8),
                s[a] = r,
                a++,
                r = 255 & o << 8 - i)
            }
            return s.slice(0, a)
        }
    }
    ).call(this, n(12).Buffer)
}
, function(e, t) {
    function n(e) {
        return e.reduce((e,t,n,r)=>{
            var i = t.split("-").map(e=>parseInt(e));
            return e.concat(function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                return Array.from({
                    length: t - e + 1
                }, (t,n)=>n + e)
            }(...i))
        }
        , [])
    }
    e.exports = n,
    e.exports.parse = n,
    e.exports.compose = function(e) {
        return e.reduce((e,t,n,r)=>(0 !== n && t === r[n - 1] + 1 || e.push([]),
        e[e.length - 1].push(t),
        e), []).map(e=>e.length > 1 ? "".concat(e[0], "-").concat(e[e.length - 1]) : "".concat(e[0]))
    }
}
, function(e, t, n) {
    (function(e) {
        function n(e, t) {
            for (var n = 0, r = e.length - 1; r >= 0; r--) {
                var i = e[r];
                "." === i ? e.splice(r, 1) : ".." === i ? (e.splice(r, 1),
                n++) : n && (e.splice(r, 1),
                n--)
            }
            if (t)
                for (; n--; n)
                    e.unshift("..");
            return e
        }
        function r(e, t) {
            if (e.filter)
                return e.filter(t);
            for (var n = [], r = 0; r < e.length; r++)
                t(e[r], r, e) && n.push(e[r]);
            return n
        }
        t.resolve = function() {
            for (var t = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
                var a = o >= 0 ? arguments[o] : e.cwd();
                if ("string" != typeof a)
                    throw new TypeError("Arguments to path.resolve must be strings");
                a && (t = a + "/" + t,
                i = "/" === a.charAt(0))
            }
            return (i ? "/" : "") + (t = n(r(t.split("/"), (function(e) {
                return !!e
            }
            )), !i).join("/")) || "."
        }
        ,
        t.normalize = function(e) {
            var o = t.isAbsolute(e)
              , a = "/" === i(e, -1);
            return (e = n(r(e.split("/"), (function(e) {
                return !!e
            }
            )), !o).join("/")) || o || (e = "."),
            e && a && (e += "/"),
            (o ? "/" : "") + e
        }
        ,
        t.isAbsolute = function(e) {
            return "/" === e.charAt(0)
        }
        ,
        t.join = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return t.normalize(r(e, (function(e, t) {
                if ("string" != typeof e)
                    throw new TypeError("Arguments to path.join must be strings");
                return e
            }
            )).join("/"))
        }
        ,
        t.relative = function(e, n) {
            function r(e) {
                for (var t = 0; t < e.length && "" === e[t]; t++)
                    ;
                for (var n = e.length - 1; n >= 0 && "" === e[n]; n--)
                    ;
                return t > n ? [] : e.slice(t, n - t + 1)
            }
            e = t.resolve(e).substr(1),
            n = t.resolve(n).substr(1);
            for (var i = r(e.split("/")), o = r(n.split("/")), a = Math.min(i.length, o.length), s = a, c = 0; c < a; c++)
                if (i[c] !== o[c]) {
                    s = c;
                    break
                }
            var u = [];
            for (c = s; c < i.length; c++)
                u.push("..");
            return (u = u.concat(o.slice(s))).join("/")
        }
        ,
        t.sep = "/",
        t.delimiter = ":",
        t.dirname = function(e) {
            if ("string" != typeof e && (e += ""),
            0 === e.length)
                return ".";
            for (var t = e.charCodeAt(0), n = 47 === t, r = -1, i = !0, o = e.length - 1; o >= 1; --o)
                if (47 === (t = e.charCodeAt(o))) {
                    if (!i) {
                        r = o;
                        break
                    }
                } else
                    i = !1;
            return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : e.slice(0, r)
        }
        ,
        t.basename = function(e, t) {
            var n = function(e) {
                "string" != typeof e && (e += "");
                var t, n = 0, r = -1, i = !0;
                for (t = e.length - 1; t >= 0; --t)
                    if (47 === e.charCodeAt(t)) {
                        if (!i) {
                            n = t + 1;
                            break
                        }
                    } else
                        -1 === r && (i = !1,
                        r = t + 1);
                return -1 === r ? "" : e.slice(n, r)
            }(e);
            return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)),
            n
        }
        ,
        t.extname = function(e) {
            "string" != typeof e && (e += "");
            for (var t = -1, n = 0, r = -1, i = !0, o = 0, a = e.length - 1; a >= 0; --a) {
                var s = e.charCodeAt(a);
                if (47 !== s)
                    -1 === r && (i = !1,
                    r = a + 1),
                    46 === s ? -1 === t ? t = a : 1 !== o && (o = 1) : -1 !== t && (o = -1);
                else if (!i) {
                    n = a + 1;
                    break
                }
            }
            return -1 === t || -1 === r || 0 === o || 1 === o && t === r - 1 && t === n + 1 ? "" : e.slice(t, r)
        }
        ;
        var i = "b" === "ab".substr(-1) ? function(e, t, n) {
            return e.substr(t, n)
        }
        : function(e, t, n) {
            return t < 0 && (t = e.length + t),
            e.substr(t, n)
        }
    }
    ).call(this, n(10))
}
, function(e, t, n) {
    var r = n(44)
      , i = n(90)
      , o = new r
      , a = "undefined" != typeof window ? window : self
      , s = a.crypto || a.msCrypto || {}
      , c = s.subtle || s.webkitSubtle;
    function u(e) {
        return o.digest(e)
    }
    try {
        c.digest({
            name: "sha-1"
        }, new Uint8Array).catch((function() {
            c = !1
        }
        ))
    } catch (e) {
        c = !1
    }
    e.exports = function(e, t) {
        c ? ("string" == typeof e && (e = function(e) {
            for (var t = e.length, n = new Uint8Array(t), r = 0; r < t; r++)
                n[r] = e.charCodeAt(r);
            return n
        }(e)),
        c.digest({
            name: "sha-1"
        }, e).then((function(e) {
            t(function(e) {
                for (var t = e.length, n = [], r = 0; r < t; r++) {
                    var i = e[r];
                    n.push((i >>> 4).toString(16)),
                    n.push((15 & i).toString(16))
                }
                return n.join("")
            }(new Uint8Array(e)))
        }
        ), (function() {
            t(u(e))
        }
        ))) : "undefined" != typeof window ? i(e, (function(n, r) {
            t(n ? u(e) : r)
        }
        )) : queueMicrotask(()=>t(u(e)))
    }
    ,
    e.exports.sync = u
}
, function(e, t, n) {
    var r, i, o, a = n(44);
    e.exports = function(e, t) {
        r || (r = a.createWorker(),
        i = 1,
        o = {},
        r.onmessage = function(e) {
            var t = e.data.id
              , n = o[t];
            delete o[t],
            null != e.data.error ? n(new Error("Rusha worker error: " + e.data.error)) : n(null, e.data.hash)
        }
        ),
        o[i] = t,
        r.postMessage({
            id: i,
            data: e
        }),
        i += 1
    }
}
, , , , function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(9)
      , i = n(2);
    var o = n(6)
      , a = n(45)
      , s = n(16)
      , c = n(11)
      , u = n(96)
      , f = (console.log,
    self.performance);
    new class {
        constructor() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , {id: t="", enabled: n=!0} = e;
            this.prefix = "arc:" + t,
            this.prefix.endsWith(":") || (this.prefix += ":"),
            this.enabled = n,
            this.mark = this.mark.bind(this),
            this.markOnce = this.markOnce.bind(this),
            this.markStart = this.markStart.bind(this),
            this.toJSON = this.toJSON.bind(this),
            this.markEndAndMeasure = this.markEndAndMeasure.bind(this)
        }
        enable() {
            this.enabled = !0
        }
        disable() {
            this.enabled = !1
        }
        mark(e) {
            this.enabled && f.mark(this.prefix + e)
        }
        measure(e, t, n) {
            if (this.enabled)
                try {
                    f.measure(this.prefix + e, t, n)
                } catch (e) {}
        }
        markOnce(e) {
            if (this.enabled) {
                var t = this.prefix + e;
                0 === performance.getEntriesByName(t).length && performance.mark(t)
            }
        }
        markStart(e) {
            if (!this.enabled)
                return ()=>{}
                ;
            var t = this.prefix + e
              , n = Math.random().toString(36).substring(2, 5)
              , r = "".concat(t, ":").concat(n)
              , i = r + ":start"
              , o = r + ":end";
            return f.mark(i),
            ()=>this.markEndAndMeasure(t, i, o)
        }
        markEndAndMeasure(e, t, n) {
            if (this.enabled) {
                f.mark(n);
                try {
                    f.measure(e, t, n)
                } catch (e) {}
                f.clearMarks(t),
                f.clearMarks(n)
            }
        }
        toJSON() {
            return this.enabled ? {
                entries: f.getEntries().filter(e=>e.name.startsWith(this.prefix)).map(e=>e.toJSON()),
                timeOrigin: f.timeOrigin
            } : {}
        }
    }
    ;
    var l = self.performance
      , h = (console.log,
    null)
      , p = !1
      , d = {
        v: 1,
        tid: o.a.GA_TID_USER_TIMING
    }
      , v = "measure"
      , y = "networkRequest"
      , g = "staticAsset"
      , m = "load:network"
      , b = "load:cache"
      , _ = []
      , w = Object(u.a)(()=>{
        if (h) {
            if (!p && "undefined" != typeof window) {
                p = !0;
                var e = {
                    t: "pageview",
                    dl: window.location.href
                };
                document.referrer && (e.dr = document.referrer),
                _.push(e)
            }
            for (; _.length > 0; ) {
                var t = {
                    method: "POST",
                    body: _.splice(0, 20).map(e=>(e.cid = h,
                    Object.assign(e, d),
                    new URLSearchParams(e).toString())).join("\n")
                };
                o.a.IS_PROD && fetch("https://www.google-analytics.com/batch", t).catch(()=>{}
                )
            }
        }
    }
    , 3e3);
    function O(e) {
        return e.map(e=>e instanceof PerformanceResourceTiming ? function(e) {
            var t, {name: n, duration: r} = e;
            if (r < 0 || !n)
                return null;
            try {
                t = new URL(n)
            } catch (e) {
                return null
            }
            var {origin: i, pathname: a} = t
              , s = {
                utc: v,
                utt: r
            };
            if (i !== o.a.GATEWAY_ORIGIN)
                return null;
            s.utc = y,
            s.utv = function(e) {
                return !(e.transferSize > 0) && (e.decodedBodySize > 0 || e.duration < 15)
            }(e) ? b : m;
            var [c,u=""] = a.split("/");
            s.utl = "gateway/".concat(u);
            if (["region", "autoCdnIngest"].includes(u))
                return null;
            return s
        }(e) : e instanceof PerformanceMeasure ? function(e) {
            var {name: t, duration: n} = e;
            if (!t.startsWith("arc:") || n < 0)
                return null;
            var [r,i,o] = t.split(":")
              , a = {
                utc: v,
                utt: n,
                utv: o,
                utl: i
            };
            i.includes("tracker") ? a.utc = y : [".js", ".html", ".css"].some(e=>i.includes(e)) && (a.utc = g);
            return a
        }(e) : (PerformanceMark,
        null)).filter(Boolean).filter(()=>Math.random() < .005).map(e=>(e.utt = Math.round(1e3 * e.utt),
        e.t = "timing",
        e))
    }
    var E = {
        init: function() {
            if ("PerformanceObserver"in self) {
                var e = e=>{
                    var t = O(e);
                    _.push(...t),
                    w()
                }
                ;
                new PerformanceObserver(t=>{
                    e(t.getEntries())
                }
                ).observe({
                    entryTypes: ["measure", "resource"]
                }),
                e(l.getEntries())
            }
        },
        hasClientId: function() {
            return null !== h
        },
        setClientId: function(e) {
            h = e,
            w()
        }
    }
      , S = n(3)
      , j = n(48)
      , x = n.n(j);
    function k(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function C(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? k(Object(n), !0).forEach((function(t) {
                T(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function R(e, t, n, r, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i)
    }
    function P(e) {
        return function() {
            var t = this
              , n = arguments;
            return new Promise((function(r, i) {
                var o = e.apply(t, n);
                function a(e) {
                    R(o, r, i, a, s, "next", e)
                }
                function s(e) {
                    R(o, r, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    var {COMLINK_INIT: I} = S.g;
    function A(e) {
        return L.apply(this, arguments)
    }
    function L() {
        return (L = P((function*(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
              , o = new MessageChannel
              , a = new MessageChannel
              , s = o.port2
              , c = a.port2
              , u = {
                arcEvent: I,
                wrappedPort: s,
                exposedPort: c
            };
            "undefined" != typeof window && (u.parentUrl = window.location.href);
            var f = [s, c]
              , l = [u, f];
            null !== n && l.splice(1, 0, n),
            e.postMessage(...l);
            var h = r.d(o.port1)
              , p = new i.a
              , d = p.resolve
              , v = p.reject
              , y = C(C({}, t), {}, {
                _confirmRpc: d,
                _rejectRpc: v
            });
            return r.a(y, a.port1),
            yield p.promise,
            h
        }
        ))).apply(this, arguments)
    }
    function N(e, t, n, r, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i)
    }
    function D(e) {
        return function() {
            var t = this
              , n = arguments;
            return new Promise((function(r, i) {
                var o = e.apply(t, n);
                function a(e) {
                    N(o, r, i, a, s, "next", e)
                }
                function s(e) {
                    N(o, r, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    var B = n(22)("arc:sw")
      , {P2P_CLIENT_READY: M} = (console.log,
    S.g)
      , F = new x.a
      , U = new Set
      , q = new Map
      , H = e=>e + M;
    function W(e) {
        return G.apply(this, arguments)
    }
    function G() {
        return (G = D((function*(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , {id: n} = e
              , r = null
              , a = U.has(n);
            if (!a) {
                var s = o.a.IS_PROD ? 500 : 5e3;
                r = Object(i.j)(z(e), s, new Error("waitForP2pClient timed out")).catch(e=>B(e.message))
            }
            var c = null;
            if (q.has(n))
                c = q.get(n);
            else
                try {
                    var u = 150;
                    c = yield Object(i.j)(A(e), u, new Error("establishDuplexRpcWith timed out"))
                } catch (e) {
                    B(e.message)
                }
            if (c)
                q.set(n, c);
            else if (a)
                q.delete(n),
                c = null;
            else {
                var f = performance.now();
                try {
                    c = yield r
                } catch (e) {
                    B(e)
                }
                var l = performance.now()
                  , h = "Blocked request for ".concat(Math.round(l - f), "ms.")
                  , p = "waitFor p2pC: ".concat(c ? "success!" : "timed out");
                B("".concat(h, " ").concat(p, ": ").concat(t))
            }
            return c
        }
        ))).apply(this, arguments)
    }
    function z(e) {
        return Y.apply(this, arguments)
    }
    function Y() {
        return (Y = D((function*(e) {
            return new Promise(t=>{
                var n = H(e.id);
                F.once(n, t)
            }
            )
        }
        ))).apply(this, arguments)
    }
    addEventListener("message", function() {
        var e = D((function*(e) {
            if (e.data) {
                var {arcEvent: t} = e.data;
                if (t === M) {
                    var n = e.source;
                    q.delete(n.id);
                    var r = yield W(n, M);
                    if (!r)
                        return void B("p2pC announced ready but sw couldnt confirm if active");
                    var i = H(n.id);
                    U.add(n.id),
                    F.emit(i, r)
                }
            }
        }
        ));
        return function(t) {
            return e.apply(this, arguments)
        }
    }());
    var K = n(1);
    function J(e, t, n, r, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i)
    }
    function X(e) {
        return function() {
            var t = this
              , n = arguments;
            return new Promise((function(r, i) {
                var o = e.apply(t, n);
                function a(e) {
                    J(o, r, i, a, s, "next", e)
                }
                function s(e) {
                    J(o, r, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    var $ = n(22)("arc:sw")
      , V = !0
      , Z = new i.a;
    function Q() {
        return (Q = X((function*() {
            var e, t, n;
            if (null !== (e = self.location) && void 0 !== e && e.href) {
                var r = new URL(self.location.href);
                t = r.searchParams.get("propertyId"),
                r.searchParams.has("seeder") && (n = "true" === r.searchParams.get("seeder")),
                !!t && (self.addEventListener("install", ()=>self.skipWaiting()),
                self.addEventListener("activate", ()=>self.clients.claim()))
            }
            var o = Date.now();
            try {
                yield Object(i.j)(Object(K.o)(t, n), 500, new Error("Restoring sw config timed out"))
            } catch (e) {
                $(e)
            } finally {
                var a = Date.now();
                $("Restoring sw config took ".concat(a - o, "ms")),
                V = !1,
                Z.resolve()
            }
        }
        ))).apply(this, arguments)
    }
    var ee = ()=>Z.promise
      , te = n(19)
      , ne = n(26);
    function re(e, t) {
        if (null == e)
            return {};
        var n, r, i = function(e, t) {
            if (null == e)
                return {};
            var n, r, i = {}, o = Object.keys(e);
            for (r = 0; r < o.length; r++)
                n = o[r],
                t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++)
                n = o[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }
    function ie(e, t, n, r, i, o, a) {
        try {
            var s = e[o](a)
              , c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i)
    }
    function oe(e) {
        return function() {
            var t = this
              , n = arguments;
            return new Promise((function(r, i) {
                var o = e.apply(t, n);
                function a(e) {
                    ie(o, r, i, a, s, "next", e)
                }
                function s(e) {
                    ie(o, r, i, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    var ae = n(22)
      , se = ae("arc:sw")
      , {WIDGET_CONFIG: ce, STORED_FIDS: ue, SW_HEALTH_CHECK: fe, NODE_ID: le, CLIENT_TEARDOWN: he, CLIENT_TAB_ID: pe} = (console.log,
    S.g)
      , {STORAGE_ORIGIN: de, COMMIT_HASH: ve, IS_PROD: ye} = o.a;
    ye || ae.enable("arc:sw"),
    function() {
        Q.apply(this, arguments)
    }(),
    Object(s.b)(),
    r.c.set("error", {
        canHandle: e=>e instanceof Error,
        serialize: e=>[Object(i.d)(e), []],
        deserialize: e=>Object.assign(Error(), e)
    }),
    r.c.set("babelError", {
        canHandle: e=>e && 1 === e.length && e[0]instanceof Error,
        serialize: e=>[[Object(i.d)(e[0])], []],
        deserialize: e=>[Object.assign(Error(), e[0])]
    }),
    Object(a.a)(),
    E.init(),
    s.a.configureScope(e=>{
        e.setTag("arcClient", S.j)
    }
    );
    var ge = new Map
      , me = 0
      , be = !1;
    addEventListener("message", function() {
        var e = oe((function*(e) {
            if (e.data) {
                var t = e.source
                  , n = e.data
                  , {arcEvent: r} = n
                  , i = re(n, ["arcEvent"]);
                switch (r && se("arcEvent from client: ".concat(r, " "), i),
                r) {
                case ce:
                    ge.set(t.id, i.widgetConfig);
                    break;
                case ue:
                    K.l.set(ue, new Set(i.storedFids));
                    break;
                case le:
                    E.setClientId(i.nodeId);
                    break;
                case fe:
                    t.postMessage({
                        arcEvent: fe
                    });
                    break;
                case he:
                    Object(K.p)(t.id);
                    break;
                case pe:
                    Object(K.m)(t.id, i.tabId, i.tabPredatesSw)
                }
            }
        }
        ));
        return function(t) {
            return e.apply(this, arguments)
        }
    }()),
    addEventListener("fetch", e=>{
        var {url: t} = e.request;
        _e(e) || Object(i.g)(t) || (t !== S.h ? function(e) {
            try {
                var {request: t} = e
                  , {url: n} = t;
                if ("navigate" === t.mode)
                    return (e=>{
                        var {searchParams: t} = new URL(e);
                        t.has("swDebug") && (me = Number(t.get("swDebug")),
                        ae.enable("arc:sw"),
                        se("Enabling debug level ".concat(me, ". sw gitHash: ").concat(ve)));
                        t.has("dh") && (be = ["1", "true"].includes(t.get("dh").toLowerCase())) && se("Enabling dynamic handoff")
                    }
                    )(n),
                    !1;
                var r = "same-origin" === t.mode;
                return !!(self.ReadableStream && "GET" === t.method && !r)
            } catch (e) {
                return se("meetsInterceptionPreconditions err %O", e),
                s.a.captureException(e),
                !1
            }
        }(e) && (V ? function(e) {
            Ee.apply(this, arguments)
        }(e) : function(e) {
            try {
                var t = Oe(e);
                if (t.doIntercept)
                    return t.range = e.request.headers.get("range"),
                    void e.respondWith(xe(t));
                me >= 2 && se("not intercepting: ".concat(t.urlObj.href), t)
            } catch (e) {
                se("interceptSync err %O", e),
                s.a.captureException(e)
            }
        }(e)) : e.respondWith(function(e) {
            return Se.apply(this, arguments)
        }(e)))
    }
    ),
    addEventListener("error", e=>{
        se("sw err", e)
    }
    );
    var _e = e=>{
        var t;
        return "imgflip.com" === (null === (t = self.location) || void 0 === t ? void 0 : t.hostname) || e.request.referrer.includes("imgflip.com") || e.request.url.includes("imgflip.com")
    }
      , we = ()=>be || !Object(K.i)();
    function Oe(e) {
        var t, n, r, o, a, {request: s, clientId: u} = e, {url: f, referrer: l} = s, h = new URL(f), {host: p, origin: d, pathname: v} = h, y = {
            event: e,
            urlObj: h,
            propertyId: Object(K.f)(),
            cdnConfig: Object(K.c)(),
            isSeeder: Object(K.i)(),
            widgetConfig: ge.get(u),
            doIntercept: !1
        };
        if ("active" !== (null === (t = y.cdnConfig) || void 0 === t ? void 0 : t.widgetState))
            return y;
        if (s.headers.has("range") && Object(K.a)(u))
            return y.clientPredatesSw = !0,
            y;
        var g = null === (n = null === (r = y.widgetConfig) || void 0 === r ? void 0 : r.CDN) || void 0 === n || n
          , m = null === (o = null === (a = y.widgetConfig) || void 0 === a ? void 0 : a.fulfillP2P) || void 0 === o || o;
        if (g && Object(K.j)(d) && Object(K.h)(v))
            y.interceptStorage = !0;
        else if (g && Object(K.k)(d) && Object(c.a)(l))
            y.interceptWebseed = !0;
        else if (y.cdnConfig) {
            var {autoCdnConfig: b} = y.cdnConfig;
            if (y.fileExt = v.split(".").pop().trim().toLowerCase(),
            g && y.propertyId && null != b && b.mappings) {
                var _, w = null === (_ = self.location) || void 0 === _ ? void 0 : _.host;
                Object(i.b)(w, b);
                var O = Object(i.f)(p, b) && Object(K.g)(y.fileExt);
                y.ingestAutoCDN = O,
                y.interceptAutoCDN = O && m
            }
        }
        return y.doIntercept = y.interceptStorage || y.interceptAutoCDN || y.interceptWebseed,
        y
    }
    function Ee() {
        return (Ee = oe((function*(e) {
            e.respondWith(oe((function*() {
                try {
                    yield ee();
                    var t = Oe(e);
                    return t.doIntercept ? xe(t) : fetch(e.request)
                } catch (t) {
                    return se("interceptAsync err %O", t),
                    s.a.captureException(t),
                    fetch(e.request)
                }
            }
            ))())
        }
        ))).apply(this, arguments)
    }
    function Se() {
        return (Se = oe((function*(e) {
            se("handling sendBeacon", e);
            var {clientId: t} = e
              , n = yield clients.matchAll({
                includeUncontrolled: !0,
                type: "window"
            });
            return 0 === (n = n.filter(e=>e.id !== t)).length ? fetch(e.request) : new Response(null)
        }
        ))).apply(this, arguments)
    }
    var je = e=>{
        var t, n = K.b;
        return "AbortError" === e.name || !!n.includes(null === (t = e.response) || void 0 === t ? void 0 : t.status)
    }
    ;
    function xe(e) {
        return ke.apply(this, arguments)
    }
    function ke() {
        return (ke = oe((function*(e) {
            var t = null;
            try {
                e.interceptAutoCDN || e.interceptStorage ? (t = we() ? yield Ce(e) : yield Re(e),
                Object(K.n)(e.event)) : e.interceptWebseed && (t = yield De(e)),
                t = t || (yield Le(e))
            } catch (n) {
                se("".concat(e.urlObj.pathname, ": fetchFile err %O"), n),
                je(n) || s.a.captureException(n),
                t = yield Le(e)
            }
            return t
        }
        ))).apply(this, arguments)
    }
    function Ce(e) {
        return Te.apply(this, arguments)
    }
    function Te() {
        return (Te = oe((function*(e) {
            var {pathname: t} = e.urlObj || {};
            if (Object(te.d)(e))
                return se("file was ingested in current session -- skipping", t),
                null;
            var n = new ne.a(e);
            try {
                yield n.fetchFromBackstopCDN()
            } catch (t) {
                var r;
                throw K.b.includes(null === (r = t.response) || void 0 === r ? void 0 : r.status) && e.ingestAutoCDN && Object(te.c)(e),
                t
            }
            Me(e).then(function() {
                var e = oe((function*(e) {
                    var {p2pClientRpc: r, fileInfo: i, shouldDownloadP2P: o} = e;
                    o ? n.fetchFromP2PNetwork(r, i) : se("download shouldn't be handed off to p2p", t)
                }
                ));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }());
            var i = new ReadableStream({
                start(e) {
                    n.streamFromBackstopCDN(e)
                },
                cancel() {
                    n.cancel()
                }
            });
            return new Response(i,n.responseOptions)
        }
        ))).apply(this, arguments)
    }
    function Re(e) {
        return Pe.apply(this, arguments)
    }
    function Pe() {
        return (Pe = oe((function*(e) {
            var t = e.event.request
              , {p2pClientRpc: n, fileInfo: r, fileSize: i, shouldDownloadP2P: o, pathname: a} = yield Me(e);
            if (!r)
                return null;
            if (!o)
                return Ie(e, r);
            if (!n)
                return null;
            var s = Object(ne.d)(t, i)
              , c = yield Object(ne.b)(e, n, r, s);
            if (!c)
                return null;
            var u = Object(ne.c)(r.metadata, s, i);
            return se("fetchFromP2P: ".concat(a), e),
            new Response(c,u)
        }
        ))).apply(this, arguments)
    }
    function Ie(e, t) {
        return Ae.apply(this, arguments)
    }
    function Ae() {
        return (Ae = oe((function*(e, t) {
            var {propertyId: n} = e
              , r = Object(i.e)(t.path)
              , o = new URL(de + r);
            o.searchParams.set("_arc_client", S.j),
            o.searchParams.set("propertyId", n),
            se("fetchFromStorageOrigin: ".concat(e.urlObj.pathname), e);
            var a = e.event.request
              , s = {
                method: a.method,
                headers: a.headers,
                referrer: a.referrer,
                referrerPolicy: a.referrerPolicy,
                cache: a.cache,
                redirect: a.redirect,
                integrity: a.integrity,
                mode: "cors",
                credentials: "omit"
            };
            return Object(c.c)(o.href, s)
        }
        ))).apply(this, arguments)
    }
    function Le(e) {
        return Ne.apply(this, arguments)
    }
    function Ne() {
        return (Ne = oe((function*(e) {
            var {request: t} = e.event
              , {pathname: n} = e.urlObj
              , {destination: r} = t;
            return e.interceptStorage && ["video", "audio"].includes(r) && (t = new Request(t,{
                mode: "cors",
                credentials: "omit"
            })),
            se("fetchFromOriginServer: ".concat(n), e),
            fetch(t)
        }
        ))).apply(this, arguments)
    }
    function De(e) {
        return Be.apply(this, arguments)
    }
    function Be() {
        return (Be = oe((function*(e) {
            return Object(c.c)(e.event.request, {
                cache: "no-store"
            })
        }
        ))).apply(this, arguments)
    }
    function Me(e) {
        return Fe.apply(this, arguments)
    }
    function Fe() {
        return (Fe = oe((function*(e) {
            var {pathname: t} = e.urlObj
              , n = {
                p2pClientRpc: null,
                fileInfo: null,
                fileSize: null,
                shouldDownloadP2P: !1,
                pathname: t
            }
              , r = yield Object(K.d)(e.event);
            if (!r)
                return se("client from fetch event came up empty", e),
                n;
            var i = W(r, t)
              , o = yield Object(te.b)(e);
            if (!o)
                return se("fileInfo came up empty", e),
                n;
            var {isApprovedSite: a=!1} = e.cdnConfig
              , {torrentFileObj: s} = o
              , {length: c, urlList: u} = s;
            if (n.fileInfo = o,
            n.fileSize = c,
            (c < S.f || !a) && u.length)
                return n;
            var f = yield i;
            return f ? (n.shouldDownloadP2P = !0,
            n.p2pClientRpc = f,
            n) : (se("rpc to p2p client came up empty", e),
            n)
        }
        ))).apply(this, arguments)
    }
    self.ArcServiceWorker = class {
        static init() {}
    }
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", (function() {
            return c
        }
        ));
        var r = n(7)
          , i = n(24)
          , o = {
            nowSeconds: function() {
                return Date.now() / 1e3
            }
        };
        var a = Object(i.b)() ? function() {
            try {
                return Object(i.a)(e, "perf_hooks").performance
            } catch (e) {
                return
            }
        }() : function() {
            var e = Object(r.e)().performance;
            if (e && e.now)
                return {
                    now: function() {
                        return e.now()
                    },
                    timeOrigin: Date.now() - e.now()
                }
        }()
          , s = void 0 === a ? o : {
            nowSeconds: function() {
                return (a.timeOrigin + a.now()) / 1e3
            }
        }
          , c = o.nowSeconds.bind(o);
        s.nowSeconds.bind(s),
        function() {
            var e = Object(r.e)().performance;
            if (e) {
                var t = e.now()
                  , n = Date.now()
                  , i = e.timeOrigin ? Math.abs(e.timeOrigin + t - n) : 36e5
                  , o = i < 36e5
                  , a = e.timing && e.timing.navigationStart
                  , s = "number" == typeof a ? Math.abs(a + t - n) : 36e5;
                return o || s < 36e5 ? i <= s ? ("timeOrigin",
                e.timeOrigin) : ("navigationStart",
                a) : ("dateNow",
                n)
            }
            "none"
        }()
    }
    ).call(this, n(52)(e))
}
, function(e, t, n) {
    "use strict";
    var r = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
      , i = n(47)
      , o = "object" == typeof self && self && self.Object === Object && self
      , a = i.a || o || Function("return this")()
      , s = function() {
        return a.Date.now()
    }
      , c = /\s/;
    var u = function(e) {
        for (var t = e.length; t-- && c.test(e.charAt(t)); )
            ;
        return t
    }
      , f = /^\s+/;
    var l = function(e) {
        return e ? e.slice(0, u(e) + 1).replace(f, "") : e
    }
      , h = a.Symbol
      , p = Object.prototype
      , d = p.hasOwnProperty
      , v = p.toString
      , y = h ? h.toStringTag : void 0;
    var g = function(e) {
        var t = d.call(e, y)
          , n = e[y];
        try {
            e[y] = void 0;
            var r = !0
        } catch (e) {}
        var i = v.call(e);
        return r && (t ? e[y] = n : delete e[y]),
        i
    }
      , m = Object.prototype.toString;
    var b = function(e) {
        return m.call(e)
    }
      , _ = h ? h.toStringTag : void 0;
    var w = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : _ && _ in Object(e) ? g(e) : b(e)
    };
    var O = function(e) {
        return null != e && "object" == typeof e
    };
    var E = function(e) {
        return "symbol" == typeof e || O(e) && "[object Symbol]" == w(e)
    }
      , S = /^[-+]0x[0-9a-f]+$/i
      , j = /^0b[01]+$/i
      , x = /^0o[0-7]+$/i
      , k = parseInt;
    var C = function(e) {
        if ("number" == typeof e)
            return e;
        if (E(e))
            return NaN;
        if (r(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = r(t) ? t + "" : t
        }
        if ("string" != typeof e)
            return 0 === e ? e : +e;
        e = l(e);
        var n = j.test(e);
        return n || x.test(e) ? k(e.slice(2), n ? 2 : 8) : S.test(e) ? NaN : +e
    }
      , T = Math.max
      , R = Math.min;
    t.a = function(e, t, n) {
        var i, o, a, c, u, f, l = 0, h = !1, p = !1, d = !0;
        if ("function" != typeof e)
            throw new TypeError("Expected a function");
        function v(t) {
            var n = i
              , r = o;
            return i = o = void 0,
            l = t,
            c = e.apply(r, n)
        }
        function y(e) {
            return l = e,
            u = setTimeout(m, t),
            h ? v(e) : c
        }
        function g(e) {
            var n = e - f;
            return void 0 === f || n >= t || n < 0 || p && e - l >= a
        }
        function m() {
            var e = s();
            if (g(e))
                return b(e);
            u = setTimeout(m, function(e) {
                var n = t - (e - f);
                return p ? R(n, a - (e - l)) : n
            }(e))
        }
        function b(e) {
            return u = void 0,
            d && i ? v(e) : (i = o = void 0,
            c)
        }
        function _() {
            var e = s()
              , n = g(e);
            if (i = arguments,
            o = this,
            f = e,
            n) {
                if (void 0 === u)
                    return y(f);
                if (p)
                    return clearTimeout(u),
                    u = setTimeout(m, t),
                    v(f)
            }
            return void 0 === u && (u = setTimeout(m, t)),
            c
        }
        return t = C(t) || 0,
        r(n) && (h = !!n.leading,
        a = (p = "maxWait"in n) ? T(C(n.maxWait) || 0, t) : a,
        d = "trailing"in n ? !!n.trailing : d),
        _.cancel = function() {
            void 0 !== u && clearTimeout(u),
            l = 0,
            i = f = o = u = void 0
        }
        ,
        _.flush = function() {
            return void 0 === u ? c : b(s())
        }
        ,
        _
    }
}
]);
