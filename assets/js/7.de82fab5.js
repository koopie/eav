(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{167:function(a,t,s){"use strict";s.r(t);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"dashboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dashboard","aria-hidden":"true"}},[a._v("#")]),a._v(" Dashboard")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#introduction"}},[a._v("Introduction")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#upgrading"}},[a._v("Upgrading Dashboard")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#installation"}},[a._v("Installation")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#configuration"}},[a._v("Configuration")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#dashboard-authorization"}},[a._v("Dashboard Authorization")])])])])]),a._v(" "),s("p",[s("a",{attrs:{name:"introduction"}})]),a._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),s("p",[a._v("EAV Dashboard provides a beautiful dashboard for your EAV package. Dashboard allows you to easily add, update, sort and remove attributes, set, group.")]),a._v(" "),s("p",{attrs:{align:"center"}},[s("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/YK7XAKwXelA",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.youtube.com/watch?v=YK7XAKwXelA",target:"_blank"}},[a._v('"Eav Dashboard" Preview')]),a._v(" on YouTube.")]),a._v(" "),s("p",[s("a",{attrs:{name:"installation"}})]),a._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),s("p",[a._v("You may use Composer to install Dashboard into your Laravel project:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("composer require sunel/eav-dashboard\n")])])]),s("p",[a._v("After installing Dashboard, publish its assets using the "),s("code",[a._v("eav-dash:publish")]),a._v(" Artisan command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("php artisan eav-dash:publish\n")])])]),s("p",[s("a",{attrs:{name:"upgrading"}})]),a._v(" "),s("h4",{attrs:{id:"upgrading-dashboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-dashboard","aria-hidden":"true"}},[a._v("#")]),a._v(" Upgrading Dashboard")]),a._v(" "),s("p",[a._v("When upgrading you should re-publish Dashboard's assets:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("php artisan eav-dash:publish --clean\n")])])]),s("p",[s("a",{attrs:{name:"configuration"}})]),a._v(" "),s("h3",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[a._v("#")]),a._v(" Configuration")]),a._v(" "),s("blockquote",[s("p",[a._v("Yet to be added")])]),a._v(" "),s("p",[s("a",{attrs:{name:"dashboard-authorization"}})]),a._v(" "),s("h3",{attrs:{id:"dashboard-authorization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dashboard-authorization","aria-hidden":"true"}},[a._v("#")]),a._v(" Dashboard Authorization")]),a._v(" "),s("p",[a._v("EAV Dashboard exposes a dashboard at "),s("code",[a._v("/eav/dashboard/")]),a._v(". By default, you will only be able to access this dashboard in the "),s("code",[a._v("local")]),a._v(" environment. Within your "),s("code",[a._v("app/Providers/EAVDashboardServiceProvider.php")]),a._v(" file, there is a "),s("code",[a._v("gate")]),a._v(" method. This authorization gate controls access to Dashboard in "),s("strong",[a._v("non-local")]),a._v(" environments. You are free to modify this gate as needed to restrict access to your Dashboard installation:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[a._v("    "),s("span",{attrs:{class:"token comment"}},[a._v("/**\n     * Register the Dashboard gate.\n     *\n     * This gate determines who can access Dashboard in non-local environments.\n     *\n     * @return void\n     */")]),a._v("\n    "),s("span",{attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),s("span",{attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{attrs:{class:"token function"}},[a._v("gate")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        Gate"),s("span",{attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{attrs:{class:"token function"}},[a._v("define")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[a._v("'viewEavDash'")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token variable"}},[a._v("$user")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),s("span",{attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{attrs:{class:"token function"}},[a._v("in_array")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token variable"}},[a._v("$user")]),s("span",{attrs:{class:"token operator"}},[a._v("-")]),s("span",{attrs:{class:"token operator"}},[a._v(">")]),s("span",{attrs:{class:"token property"}},[a._v("email")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n                "),s("span",{attrs:{class:"token single-quoted-string string"}},[a._v("'sunelbe@gmail.com'")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}],!1,null,null,null);r.options.__file="dashboard.md";t.default=r.exports}}]);