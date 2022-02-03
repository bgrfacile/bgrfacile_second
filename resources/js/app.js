require('./bootstrap');

require('alpinejs');

require('./plugins/swiper');

require('./plugins/scrollReveal');

require('./plugins/darkMode');

require('./plugins/player');


// let prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-70px";
//     }
//     prevScrollpos = currentScrollPos;
// }


let c = document.querySelector("#c"), d = c.getContext("2d"), M = Math, P = M.PI, T = 2 * P, D = P / 180, Z = M.random, a = w = 640, h = 140, b = "#311", r = 100, v = O = i = j = 0, R = requestAnimationFrame; for (c.width = w, c.height = 140, B = []; 9 > j++;)B[j] = { j: 2 * Z(), y: Z() * w / 3 }; for (V = []; 25 > v++;)V[v] = Z() * w; F = a => d.fillStyle = a, A = () => d.beginPath(), U = () => { c.width = w, O += -.3, v = O * D, v < -P && (O = 0, i++), x = -2 * (r * M.cos(v)), y = r * M.sin(v), s = `${30 + -1.2 * y}%,${20 + -.3 * y}%)`, m = `${30 + -.1 * y}%,${20 + -.1 * y}%)`, n = `${-.5 * y}%,${50 + -.5 * y}%)`, F(`hsl(240,${i % 2 ? m : s}`), d.fillRect(0, 0, w, h), F(`hsl(40,${i % 2 ? n : s}`), d.arc(w / 2 + x, h + y, 20, 0, T), d.fill(), A(), B.map(a => { e = 9 * M.sin(a.j), a.j += .02, g = a.y, A(), d.arc(g, 50 + e, 20, 280 * D, 310 * D), d.arc(g + 26, 49 + e, 20, 230 * D, 260 * D), d.stroke(), g < w ? a.y += .3 : a.y = 0 }), F("#060"), A(), d.arc(520, 125, 30, 0, T), d.arc(560, 130, 21, 0, T), d.fill(), F("#050"), d.fillRect(0, 130, w, 10), A(), F(b), d.fillRect(128, 47, 10, 85), F("#060"), d.ellipse(133, 30, 30, 25, 0, 0, T), d.fill(), A(), F(b), d.fillRect(a, 128, 10, 3), 0 < a ? a -= i % 2 ? .3 : 0 : a = w, F("#f369"), V.map(a => { for (q = 0; 3 > q++;)A(), d.ellipse(a, 129, 5, 1, q, 0, T), d.fill() }), R(U) }, U()
