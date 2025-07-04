/*!
 * docsify-plugin-flexible-alerts
 * v1.1.1
 * https://github.com/fzankl/docsify-plugin-flexible-alerts#readme
 * (c) 2022 Fabian Zankl
 * MIT license
 */
! function() {
    "use strict";

    function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, t(e)
    }! function(t, e) {
        void 0 === e && (e = {});
        var a = e.insertAt;
        if (t && "undefined" != typeof document) {
            var o = document.head || document.getElementsByTagName("head")[0],
                l = document.createElement("style");
            l.type = "text/css", "top" === a && o.firstChild ? o.insertBefore(l, o.firstChild) : o.appendChild(l), l.styleSheet ? l.styleSheet.cssText = t : l.appendChild(document.createTextNode(t))
        }
    }(".alert{word-wrap:break-word;display:block;margin-bottom:1rem!important;padding:.75rem 1.25rem!important;position:relative;word-break:break-word}.alert>*{max-width:100%}.alert>:first-child{margin-top:0}.alert>:last-child{margin-bottom:0}.alert:before{content:unset!important}.alert+.alert{margin-top:-.25rem!important}.alert p{margin-bottom:.5rem;margin-top:.5rem}.alert .title{align-items:center;display:flex;flex-wrap:wrap;font-weight:600;margin:0}.icon{background-repeat:no-repeat;display:inline-block;height:16px;margin-right:.5rem;width:16px}.alert.callout{background:var(--background);border:1px solid #eee;border-left-width:.25rem;border-radius:.25rem}.alert.callout.note{border-left-color:#17a2b8!important}.alert.callout.note .title{color:#17a2b8}.alert.callout.note .icon-note{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='1em' height='1em' viewBox='0 0 16 16' fill='%2317a2b8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'/%3E%3C/svg%3E\")}.alert.callout.tip{border-left-color:#28a745!important}.alert.callout.tip .title{color:#28a745}.alert.callout.tip .icon-tip{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='1em' height='1em' viewBox='0 0 352 512' fill='%2328a745' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z'/%3E%3C/svg%3E\")}.alert.callout.warning{border-left-color:#f0ad4e!important}.alert.callout.warning .title{color:#f0ad4e}.alert.callout.warning .icon-warning{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='1em' height='1em' viewBox='0 0 17 16' fill='%23f0ad4e' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z'/%3E%3C/svg%3E\")}.alert.callout.attention{border-left-color:#dc3545!important}.alert.callout.attention .title{color:#dc3545}.alert.callout.attention .icon-attention{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='1em' height='1em' viewBox='0 0 16 16' fill='%23dc3545' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/%3E%3Cpath fill-rule='evenodd' d='M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E\")}.alert.flat{background-color:#e2e3e5;border:1px solid #d6d8db;border-radius:.125rem;color:#383d41}.alert.flat.note{background-color:#cdeefd;border-color:#b4e6fc;color:#02587f}.alert.flat.note .title{color:#01354d}.alert.flat.note .icon-note{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='1em' height='1em' viewBox='0 0 16 16' fill='%2301354d' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'/%3E%3C/svg%3E\")}.alert.flat.tip{background-color:#dbefdc;border-color:#c9e7cb;color:#285b2a}.alert.flat.tip .title{color:#18381a}.alert.flat.tip .icon-tip{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='1em' height='1em' viewBox='0 0 352 512' fill='%2318381a' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z'/%3E%3C/svg%3E\")}.alert.flat.warning{background-color:#ffddd3;border-color:#ffc9ba;color:#852d12}.alert.flat.warning .title{color:#581e0c}.alert.flat.warning .icon-warning{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='1em' height='1em' viewBox='0 0 17 16' fill='%23581e0c' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z'/%3E%3C/svg%3E\")}.alert.flat.attention{background-color:#fdd9d7;border-color:#fcc2bf;color:#7f231c}.alert.flat.attention .title{color:#551713}.alert.flat.attention .icon-attention{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='1em' height='1em' viewBox='0 0 16 16' fill='%23551713' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/%3E%3Cpath fill-rule='evenodd' d='M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E\")}"),
    function() {
        var e = {
            style: "callout",
            note: {
                label: "Note",
                icon: "icon-note",
                className: "note"
            },
            tip: {
                label: "Tip",
                icon: "icon-tip",
                className: "tip"
            },
            warning: {
                label: "Warning",
                icon: "icon-warning",
                className: "warning"
            },
            attention: {
                label: "Attention",
                icon: "icon-attention",
                className: "attention"
            },
            typeMappings: {
                info: "note",
                danger: "attention"
            }
        };

        function a(t, e) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (var l in e) try {
                e[l].constructor === Object && o < 1 ? t[l] = a(t[l], e[l], o + 1) : t[l] = e[l]
            } catch (a) {
                t[l] = e[l]
            }
            return t
        }
        window.$docsify = window.$docsify || {}, window.$docsify.plugins = [].concat((function(o, l) {
            var r = a(e, l.config["flexible-alerts"] || l.config.flexibleAlerts),
                i = function(t, e, a, o) {
                    var l = (t || "").match(new RegExp("".concat(e, ":(([\\s\\w\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF-]*))")));
                    return l ? o ? o(l[1]) : l[1] : o ? o(a) : a
                };
            o.afterEach((function(e, a) {
                a(e.replace(/<\s*blockquote[^>]*>[\s]+?(?:<p>)?\[!(\w*)((?:\|[\w*:[\s\w\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]*)*?)\]([\s\S]*?)(?:<\/p>)?<\s*\/\s*blockquote>/g, (function(e, a, o, n) {
                    !r[a.toLowerCase()] && r.typeMappings[a.toLowerCase()] && (a = r.typeMappings[a.toLowerCase()]);
                    var c = r[a.toLowerCase()];
                    if (!c) return e;
                    var d = i(o, "style", r.style),
                        s = i(o, "iconVisibility", "visible", (function(t) {
                            return "hidden" !== t
                        })),
                        g = i(o, "labelVisibility", "visible", (function(t) {
                            return "hidden" !== t
                        })),
                        m = i(o, "label", c.label),
                        u = i(o, "icon", c.icon),
                        f = i(o, "className", c.className);
                    if ("object" === t(m)) {
                        var p = Object.keys(m).filter((function(t) {
                            return l.route.path.indexOf(t) > -1
                        }));
                        p && p.length > 0 ? m = m[p[0]] : (g = !1, s = !1)
                    }
                    var w = '<span class="icon '.concat(u, '"></span>'),
                        h = '<p class="title">'.concat(s ? w : "").concat(g ? m : "", "</p>");
                    return '<div class="alert '.concat(d, " ").concat(f, '">\n            ').concat(s || g ? h : "", "\n            <p>").concat(n, "</p>\n          </div>")
                })))
            }))
        }), window.$docsify.plugins)
    }()
}();
//# sourceMappingURL=docsify-plugin-flexible-alerts.min.js.map
