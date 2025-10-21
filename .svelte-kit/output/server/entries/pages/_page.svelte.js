import { X as sanitize_props, Y as rest_props, Z as attributes, _ as clsx, $ as ensure_array_like, a0 as element, a1 as slot, a2 as bind_props, a3 as spread_props, W as attr, a4 as store_get, a5 as unsubscribe_stores } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import { f as fallback } from "../../chunks/utils2.js";
import { e as escape_html } from "../../chunks/context.js";
/**
 * @license lucide-svelte v0.546.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  $$renderer.component(($$renderer2) => {
    let name = fallback($$props["name"], void 0);
    let color = fallback($$props["color"], "currentColor");
    let size = fallback($$props["size"], 24);
    let strokeWidth = fallback($$props["strokeWidth"], 2);
    let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
    let iconNode = fallback($$props["iconNode"], () => [], true);
    const mergeClasses = (...classes) => classes.filter((className, index, array) => {
      return Boolean(className) && array.indexOf(className) === index;
    }).join(" ");
    $$renderer2.push(`<svg${attributes(
      {
        ...defaultAttributes,
        ...$$restProps,
        width: size,
        height: size,
        stroke: color,
        "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        class: clsx(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
      },
      void 0,
      void 0,
      void 0,
      3
    )}><!--[-->`);
    const each_array = ensure_array_like(iconNode);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [tag, attrs] = each_array[$$index];
      element($$renderer2, tag, () => {
        $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
      });
    }
    $$renderer2.push(`<!--]--><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></svg>`);
    bind_props($$props, {
      name,
      color,
      size,
      strokeWidth,
      absoluteStrokeWidth,
      iconNode
    });
  });
}
function Eye($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.546.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "eye" },
    $$sanitized_props,
    {
      /**
       * @component @name Eye
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMi4wNjIgMTIuMzQ4YTEgMSAwIDAgMSAwLS42OTYgMTAuNzUgMTAuNzUgMCAwIDEgMTkuODc2IDAgMSAxIDAgMCAxIDAgLjY5NiAxMC43NSAxMC43NSAwIDAgMS0xOS44NzYgMCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/eye
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Search($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.546.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "m21 21-4.34-4.34" }],
    ["circle", { "cx": "11", "cy": "11", "r": "8" }]
  ];
  Icon($$renderer, spread_props([
    { name: "search" },
    $$sanitized_props,
    {
      /**
       * @component @name Search
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjEgMjEtNC4zNC00LjM0IiAvPgogIDxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/search
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const results = writable([]);
    const loading = writable(false);
    const error = writable(null);
    const heroCharacters = writable([]);
    const modalOpen = writable(false);
    const modalCharacter = writable(null);
    let searchQuery = "";
    let charactersCache = [];
    async function fetchAllCharacters() {
      loading.set(true);
      try {
        const promises = [];
        for (let id = 1; id <= 427; id++) {
          promises.push(fetch(`https://futuramaapi.com/api/characters/${id}`).then((res) => res.ok ? res.json() : null).catch(() => null));
        }
        const allChars = (await Promise.all(promises)).filter(Boolean);
        charactersCache = allChars;
        const heroIds = [1, 425, 16, 424, 420, 423];
        heroCharacters.set(allChars.filter((c) => heroIds.includes(c.id)));
      } catch (err) {
        error.set(err.message || "Failed to fetch characters");
      } finally {
        loading.set(false);
      }
    }
    fetchAllCharacters();
    $$renderer2.push(`<header class="flex flex-col sm:flex-row justify-between items-center p-2 sm:p-4 bg-gray-900 border-b-2 border-lime-500 fixed top-0 w-full z-10 gap-3 sm:gap-0"><h1 class="text-xl sm:text-2xl font-bold text-lime-400 font-mono text-center sm:text-left">Futurama Character Finder</h1> <div class="relative w-full sm:w-[50%] mt-2 sm:mt-0"><input type="text"${attr("value", searchQuery)} placeholder="Search character by name..." class="p-2 pl-4 pr-10 rounded-md border border-lime-600 bg-gray-800 text-white w-full placeholder-gray-500 focus:ring-lime-400 focus:border-lime-400 font-mono transition-all"/> <button class="absolute right-2 top-1/2 -translate-y-1/2 text-lime-400 hover:text-lime-200 transition-colors cursor-pointer pr-1.5" aria-label="Search">`);
    Search($$renderer2, { size: 20 });
    $$renderer2.push(`<!----></button></div></header> <main class="p-4 min-h-screen bg-gray-950 text-white font-mono pt-38 sm:pt-24 pb-20 sm:pb-32">`);
    if (store_get($$store_subs ??= {}, "$loading", loading)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-center text-lime-400 text-lg">Loading crew...</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (store_get($$store_subs ??= {}, "$error", error)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-red-500 text-center">${escape_html(store_get($$store_subs ??= {}, "$error", error))}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (searchQuery.trim() && !store_get($$store_subs ??= {}, "$results", results).length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-center text-gray-500 text-lg">Character not found, not even in the 31st Century.</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (!store_get($$store_subs ??= {}, "$results", results).length) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8"><!--[-->`);
        const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$heroCharacters", heroCharacters));
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let char = each_array[$$index];
          $$renderer2.push(`<div class="bg-gray-800 p-4 rounded-lg shadow-lg shadow-lime-900/40 flex flex-col items-center relative border-2 border-lime-800 transform transition-transform hover:scale-105"><img${attr("src", char.image)}${attr("alt", char.name)} class="w-32 h-32 object-contain rounded-full mb-4 border-4 border-lime-600"/> <h2 class="text-xl font-bold mb-1 text-lime-400">${escape_html(char.name)}</h2> <button class="absolute top-2 right-2 bg-lime-600 p-2 rounded-full hover:bg-lime-700 text-white transition-colors cursor-pointer" aria-label="View details">`);
          Eye($$renderer2, { size: 20 });
          $$renderer2.push(`<!----></button></div>`);
        }
        $$renderer2.push(`<!--]--></section>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--> `);
    if (store_get($$store_subs ??= {}, "$results", results).length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8"><!--[-->`);
      const each_array_1 = ensure_array_like(store_get($$store_subs ??= {}, "$results", results));
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let char = each_array_1[$$index_1];
        $$renderer2.push(`<div class="bg-gray-800 p-4 rounded-lg shadow-lg shadow-lime-900/40 flex flex-col items-center relative border-2 border-lime-800 transform transition-transform hover:scale-105"><img${attr("src", char.image)}${attr("alt", char.name)} class="w-32 h-32 object-contain rounded-full mb-4 border-4 border-lime-600"/> <h2 class="text-xl font-bold mb-1 text-lime-400">${escape_html(char.name)}</h2> <button class="absolute top-2 right-2 bg-lime-600 p-2 text-xl rounded-full hover:bg-lime-700 transition-colors" aria-label="View details">`);
        Eye($$renderer2, { size: 20, class: "text-white" });
        $$renderer2.push(`<!----></button></div>`);
      }
      $$renderer2.push(`<!--]--></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></main> <footer class="w-full p-4 bg-gray-900 text-center text-gray-400 font-mono border-t-2 border-lime-700 fixed bottom-0"><p class="mb-2 text-sm sm:text-base">Made by Andreas Yuji Fujiki</p> <div class="flex sm:flex-row justify-center items-center gap-2 sm:gap-6"><a href="https://github.com/andreas-yuji-fujiki-dev" target="_blank" rel="noopener noreferrer" class="text-lime-400 hover:text-lime-300 transition-colors hover:underline text-sm sm:text-base">GitHub</a> <a href="https://www.linkedin.com/in/andreas-yuji-fujiki-dev/" target="_blank" rel="noopener noreferrer" class="text-lime-400 hover:text-lime-300 transition-colors hover:underline text-sm sm:text-base">LinkedIn</a></div></footer> `);
    if (store_get($$store_subs ??= {}, "$modalOpen", modalOpen) && store_get($$store_subs ??= {}, "$modalCharacter", modalCharacter)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 text-white font-mono" role="button" tabindex="0" aria-label="close modal"><div class="bg-gray-800 p-6 rounded-lg shadow-2xl shadow-lime-900/50 w-96 relative border-4 border-lime-600" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1"><h2 id="modal-title" class="text-3xl font-bold mb-4 text-lime-400 text-center">${escape_html(store_get($$store_subs ??= {}, "$modalCharacter", modalCharacter).name)}</h2> <img${attr("src", store_get($$store_subs ??= {}, "$modalCharacter", modalCharacter).image)}${attr("alt", store_get($$store_subs ??= {}, "$modalCharacter", modalCharacter).name)} class="w-40 h-40 object-contain rounded-full mb-4 mx-auto border-4 border-lime-500"/> <p class="text-lg"><strong class="text-lime-500">Id:</strong> ${escape_html(store_get($$store_subs ??= {}, "$modalCharacter", modalCharacter).id)}</p> <p class="text-lg"><strong class="text-lime-500">Status:</strong> ${escape_html(store_get($$store_subs ??= {}, "$modalCharacter", modalCharacter).status)}</p> <p class="text-lg"><strong class="text-lime-500">Gender:</strong> ${escape_html(store_get($$store_subs ??= {}, "$modalCharacter", modalCharacter).gender)}</p> <p class="text-lg"><strong class="text-lime-500">Species:</strong> ${escape_html(store_get($$store_subs ??= {}, "$modalCharacter", modalCharacter).species)}</p> <button class="mt-6 bg-red-600 hover:bg-lime-700 px-6 py-2 rounded-lg font-bold w-full uppercase tracking-wider transition-colors cursor-pointer">Close</button></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
