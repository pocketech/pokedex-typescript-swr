(this["webpackJsonpswr-pokedex"]=this["webpackJsonpswr-pokedex"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),o=n.n(c),a=n(4),s=n.n(a),i=n(2),d=(n(10),"https://pokeapi.co/api/v2"),l=function(e,t){var n=t?d+e+"/"+t:d+e,r=Object(i.b)(n);return{data:r.data,error:r.error}},j=function(e){var t=e.pokemon.name,n=l("/pokemon",t),c=n.data;return n.error?Object(r.jsx)("h1",{children:"Something went wrong!"}):c?Object(r.jsxs)("div",{className:"relative w-48 p-4 overflow-hidden text-center text-yellow-300 duration-200 ease-in-out bg-white border-t-2 border-b-2 border-red-200 rounded-lg shadow-lg cursor-pointer hover:scale-105",children:[Object(r.jsxs)("span",{className:"absolute top-0 left-0 w-12 p-1 font-bold text-white bg-red-300 rounded-br-lg",children:["#",c.id]}),Object(r.jsx)("img",{className:"block w-40 m-auto",src:c.sprites.front_default,alt:t}),Object(r.jsx)("h1",{className:"text-3xl font-bold text-gray-700 capitalize",children:t}),Object(r.jsx)("span",{className:"text-xl text-red-300",children:c.types.map((function(e){return e.type.name})).join(", ")})]}):Object(r.jsx)("h1",{children:"Loading..."})},u=function(){var e=l("/pokemon"),t=e.data;return e.error?Object(r.jsx)("h1",{children:"Something went wrong!"}):t?Object(r.jsxs)("main",{className:"max-w-6xl p-4 mx-auto my-8 text-center",children:[Object(r.jsx)("h1",{className:"mb-8 text-3xl text-center text-gray-600 uppercase",children:"Pokedex"}),Object(r.jsx)("div",{className:"grid items-center justify-center gap-6 grid-cols-fit-card",children:t.results.map((function(e){return Object(r.jsx)(j,{pokemon:e},e.name)}))})]}):Object(r.jsx)("h1",{children:"Loading..."})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(i.a,{value:{fetcher:function(e){return fetch(e).then((function(e){return e.json()}))}},children:Object(r.jsx)(u,{})})}),document.getElementById("root")),x()}},[[11,1,2]]]);
//# sourceMappingURL=main.984cc74e.chunk.js.map