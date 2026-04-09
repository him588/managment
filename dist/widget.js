(function () {
  "use strict";
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      (t.appendChild(
        document.createTextNode(
          '@import"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap";/*! tailwindcss v4.2.2 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-400:oklch(70.4% .191 22.216);--color-red-500:oklch(63.7% .237 25.331);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-200:oklch(90.1% .076 70.697);--color-orange-500:oklch(70.5% .213 47.604);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:#fffbeb;--color-amber-100:#fef3c7;--color-amber-200:#fde68a;--color-amber-300:oklch(87.9% .169 91.605);--color-amber-400:#fbbf24;--color-amber-500:#f59e0b;--color-amber-600:#d97706;--color-amber-700:#b45309;--color-amber-900:#78350f;--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-400:oklch(76.5% .177 163.223);--color-emerald-500:oklch(69.6% .17 162.48);--color-blue-50:oklch(97% .014 254.604);--color-violet-600:oklch(54.1% .281 293.009);--color-rose-50:oklch(96.9% .015 12.422);--color-rose-100:oklch(94.1% .03 12.58);--color-rose-200:oklch(89.2% .058 10.001);--color-rose-600:oklch(58.6% .253 17.585);--color-slate-50:oklch(98.4% .003 247.858);--color-stone-50:#fafaf9;--color-stone-100:#f5f5f4;--color-stone-200:#e7e5e4;--color-stone-300:#d6d3d1;--color-stone-400:#a8a29e;--color-stone-500:#78716c;--color-stone-600:#57534e;--color-stone-700:#44403c;--color-stone-800:#292524;--color-stone-900:#1c1917;--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-md:28rem;--container-lg:32rem;--container-6xl:72rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-wide:.025em;--tracking-wider:.05em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--font-playfair:"Playfair Display", serif;--font-jakarta:"Plus Jakarta Sans", sans-serif;--animate-slideUp:slideUp .3s ease forwards}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing) * 0)}.-top-2{top:calc(var(--spacing) * -2)}.-top-8{top:calc(var(--spacing) * -8)}.top-0{top:calc(var(--spacing) * 0)}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.top-5{top:calc(var(--spacing) * 5)}.-right-2{right:calc(var(--spacing) * -2)}.right-0{right:calc(var(--spacing) * 0)}.right-3{right:calc(var(--spacing) * 3)}.right-4{right:calc(var(--spacing) * 4)}.right-6{right:calc(var(--spacing) * 6)}.bottom-0{bottom:calc(var(--spacing) * 0)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-6{bottom:calc(var(--spacing) * 6)}.left-0{left:calc(var(--spacing) * 0)}.left-1\\/2{left:50%}.left-3{left:calc(var(--spacing) * 3)}.left-6{left:calc(var(--spacing) * 6)}.z-10{z-index:10}.z-40{z-index:40}.z-50{z-index:50}.z-\\[49\\]{z-index:49}.m-0{margin:calc(var(--spacing) * 0)}.mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}.mx-auto{margin-inline:auto}.my-6{margin-block:calc(var(--spacing) * 6)}.mt-0{margin-top:calc(var(--spacing) * 0)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-5{margin-top:calc(var(--spacing) * 5)}.mt-\\[3px\\]{margin-top:3px}.mb-0{margin-bottom:calc(var(--spacing) * 0)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-1\\.5{margin-bottom:calc(var(--spacing) * 1.5)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-2\\.5{margin-bottom:calc(var(--spacing) * 2.5)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-3\\.5{margin-bottom:calc(var(--spacing) * 3.5)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-8{margin-bottom:calc(var(--spacing) * 8)}.mb-\\[3px\\]{margin-bottom:3px}.ml-1{margin-left:calc(var(--spacing) * 1)}.ml-auto{margin-left:auto}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-block{display:inline-block}.h-1{height:calc(var(--spacing) * 1)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-2{height:calc(var(--spacing) * 2)}.h-4{height:calc(var(--spacing) * 4)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-14{height:calc(var(--spacing) * 14)}.h-16{height:calc(var(--spacing) * 16)}.h-24{height:calc(var(--spacing) * 24)}.h-48{height:calc(var(--spacing) * 48)}.h-56{height:calc(var(--spacing) * 56)}.h-\\[3px\\]{height:3px}.h-\\[20px\\]{height:20px}.h-\\[26px\\]{height:26px}.h-full{height:100%}.max-h-\\[85vh\\]{max-height:85vh}.min-h-screen{min-height:100vh}.w-1\\.5{width:calc(var(--spacing) * 1.5)}.w-2{width:calc(var(--spacing) * 2)}.w-4{width:calc(var(--spacing) * 4)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-14{width:calc(var(--spacing) * 14)}.w-16{width:calc(var(--spacing) * 16)}.w-24{width:calc(var(--spacing) * 24)}.w-\\[3px\\]{width:3px}.w-\\[26px\\]{width:26px}.w-full{width:100%}.w-px{width:1px}.max-w-6xl{max-width:var(--container-6xl)}.max-w-lg{max-width:var(--container-lg)}.max-w-md{max-width:var(--container-md)}.max-w-sm{max-width:var(--container-sm)}.min-w-0{min-width:calc(var(--spacing) * 0)}.min-w-\\[18px\\]{min-width:18px}.min-w-\\[20px\\]{min-width:20px}.flex-1{flex:1}.flex-\\[2\\]{flex:2}.flex-shrink{flex-shrink:1}.flex-shrink-0,.shrink-0{flex-shrink:0}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-slideUp{animation:var(--animate-slideUp)}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-\\[repeat\\(auto-fill\\,minmax\\(260px\\,1fr\\)\\)\\]{grid-template-columns:repeat(auto-fill,minmax(260px,1fr))}.grid-cols-\\[repeat\\(auto-fit\\,minmax\\(120px\\,1fr\\)\\)\\]{grid-template-columns:repeat(auto-fit,minmax(120px,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-3\\.5{gap:calc(var(--spacing) * 3.5)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-\\[5px\\]{gap:5px}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}.self-stretch{align-self:stretch}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-3xl{border-radius:var(--radius-3xl)}.rounded-\\[7px\\]{border-radius:7px}.rounded-\\[10px\\]{border-radius:10px}.rounded-\\[11px\\]{border-radius:11px}.rounded-\\[14px\\]{border-radius:14px}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-t-\\[20px\\]{border-top-left-radius:20px;border-top-right-radius:20px}.rounded-b-\\[20px\\]{border-bottom-right-radius:20px;border-bottom-left-radius:20px}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l-\\[3px\\]{border-left-style:var(--tw-border-style);border-left-width:3px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-none{--tw-border-style:none;border-style:none}.border-\\[\\#f0edea\\]{border-color:#f0edea}.border-amber-100{border-color:var(--color-amber-100)}.border-amber-200{border-color:var(--color-amber-200)}.border-amber-400{border-color:var(--color-amber-400)}.border-emerald-500{border-color:var(--color-emerald-500)}.border-green-100{border-color:var(--color-green-100)}.border-green-200{border-color:var(--color-green-200)}.border-orange-200{border-color:var(--color-orange-200)}.border-orange-500{border-color:var(--color-orange-500)}.border-red-100{border-color:var(--color-red-100)}.border-rose-200{border-color:var(--color-rose-200)}.border-stone-50{border-color:var(--color-stone-50)}.border-stone-100{border-color:var(--color-stone-100)}.border-stone-200{border-color:var(--color-stone-200)}.border-violet-600{border-color:var(--color-violet-600)}.border-white\\/30{border-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.border-white\\/30{border-color:color-mix(in oklab,var(--color-white) 30%,transparent)}}.border-t-white{border-top-color:var(--color-white)}.bg-\\[\\#fffbf5\\]{background-color:#fffbf5}.bg-\\[rgba\\(28\\,25\\,23\\,0\\.35\\)\\]{background-color:#1c191759}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-100{background-color:var(--color-amber-100)}.bg-amber-400{background-color:var(--color-amber-400)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-amber-600{background-color:var(--color-amber-600)}.bg-emerald-500{background-color:var(--color-emerald-500)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-orange-50{background-color:var(--color-orange-50)}.bg-red-50{background-color:var(--color-red-50)}.bg-rose-50{background-color:var(--color-rose-50)}.bg-stone-50{background-color:var(--color-stone-50)}.bg-stone-100{background-color:var(--color-stone-100)}.bg-stone-300{background-color:var(--color-stone-300)}.bg-stone-900{background-color:var(--color-stone-900)}.bg-stone-900\\/30{background-color:#1c19174d}@supports (color:color-mix(in lab,red,red)){.bg-stone-900\\/30{background-color:color-mix(in oklab,var(--color-stone-900) 30%,transparent)}}.bg-stone-900\\/50{background-color:#1c191780}@supports (color:color-mix(in lab,red,red)){.bg-stone-900\\/50{background-color:color-mix(in oklab,var(--color-stone-900) 50%,transparent)}}.bg-stone-900\\/80{background-color:#1c1917cc}@supports (color:color-mix(in lab,red,red)){.bg-stone-900\\/80{background-color:color-mix(in oklab,var(--color-stone-900) 80%,transparent)}}.bg-white{background-color:var(--color-white)}.bg-white\\/30{background-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.bg-white\\/30{background-color:color-mix(in oklab,var(--color-white) 30%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-gradient-to-b{--tw-gradient-position:to bottom in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-amber-50{--tw-gradient-from:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-amber-100{--tw-gradient-from:var(--color-amber-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-amber-400{--tw-gradient-from:var(--color-amber-400);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-emerald-500{--tw-gradient-from:var(--color-emerald-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-stone-900\\/80{--tw-gradient-from:#1c1917cc}@supports (color:color-mix(in lab,red,red)){.from-stone-900\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-stone-900) 80%, transparent)}}.from-stone-900\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-amber-200{--tw-gradient-to:var(--color-amber-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-emerald-50{--tw-gradient-to:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-emerald-400{--tw-gradient-to:var(--color-emerald-400);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-50{--tw-gradient-to:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-500{--tw-gradient-to:var(--color-orange-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-50{--tw-gradient-to:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-stone-100{--tw-gradient-to:var(--color-stone-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-cover{object-fit:cover}.p-4{padding:calc(var(--spacing) * 4)}.p-5{padding:calc(var(--spacing) * 5)}.p-6{padding:calc(var(--spacing) * 6)}.p-7{padding:calc(var(--spacing) * 7)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[14px_16px\\]{padding:14px 16px}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.px-6{padding-inline:calc(var(--spacing) * 6)}.px-\\[7px\\]{padding-inline:7px}.px-\\[10px\\]{padding-inline:10px}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-3\\.5{padding-block:calc(var(--spacing) * 3.5)}.py-4{padding-block:calc(var(--spacing) * 4)}.py-10{padding-block:calc(var(--spacing) * 10)}.py-12{padding-block:calc(var(--spacing) * 12)}.py-16{padding-block:calc(var(--spacing) * 16)}.py-\\[9px\\]{padding-block:9px}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-2\\.5{padding-top:calc(var(--spacing) * 2.5)}.pt-3\\.5{padding-top:calc(var(--spacing) * 3.5)}.pt-6{padding-top:calc(var(--spacing) * 6)}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.text-center{text-align:center}.font-\\[DM_Sans\\,sans-serif\\]{font-family:DM Sans,sans-serif}.font-\\[DM_Serif_Display\\,serif\\]{font-family:DM Serif Display,serif}.font-sans{font-family:var(--font-sans)}.font-serif{font-family:var(--font-serif)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[13px\\]{font-size:13px}.text-\\[15px\\]{font-size:15px}.text-\\[25px\\]{font-size:25px}.text-\\[26px\\]{font-size:26px}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.06em\\]{--tw-tracking:.06em;letter-spacing:.06em}.tracking-\\[2px\\]{--tw-tracking:2px;letter-spacing:2px}.tracking-\\[4px\\]{--tw-tracking:4px;letter-spacing:4px}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.text-nowrap{text-wrap:nowrap}.whitespace-nowrap{white-space:nowrap}.text-amber-400{color:var(--color-amber-400)}.text-amber-600{color:var(--color-amber-600)}.text-amber-700{color:var(--color-amber-700)}.text-amber-900{color:var(--color-amber-900)}.text-emerald-500{color:var(--color-emerald-500)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-orange-500{color:var(--color-orange-500)}.text-orange-700{color:var(--color-orange-700)}.text-red-400{color:var(--color-red-400)}.text-red-500{color:var(--color-red-500)}.text-rose-600{color:var(--color-rose-600)}.text-stone-300{color:var(--color-stone-300)}.text-stone-400{color:var(--color-stone-400)}.text-stone-500{color:var(--color-stone-500)}.text-stone-600{color:var(--color-stone-600)}.text-stone-700{color:var(--color-stone-700)}.text-stone-800{color:var(--color-stone-800)}.text-stone-900{color:var(--color-stone-900)}.text-white{color:var(--color-white)}.text-white\\/90{color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.text-white\\/90{color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.uppercase{text-transform:uppercase}.italic{font-style:italic}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0_-12px_48px_rgba\\(120\\,83\\,30\\,0\\.15\\)\\]{--tw-shadow:0 -12px 48px var(--tw-shadow-color,#78531e26);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0_6px_20px_rgba\\(245\\,158\\,11\\,0\\.4\\)\\]{--tw-shadow:0 6px 20px var(--tw-shadow-color,#f59e0b66);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.duration-\\[180ms\\]{--tw-duration:.18s;transition-duration:.18s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}@media (hover:hover){.group-hover\\:scale-110:is(:where(.group):hover *){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}}.last\\:border-0:last-child{border-style:var(--tw-border-style);border-width:0}@media (hover:hover){.hover\\:-translate-y-0\\.5:hover{--tw-translate-y:calc(var(--spacing) * -.5);translate:var(--tw-translate-x) var(--tw-translate-y)}.hover\\:border-amber-200:hover{border-color:var(--color-amber-200)}.hover\\:border-amber-300:hover{border-color:var(--color-amber-300)}.hover\\:border-rose-200:hover{border-color:var(--color-rose-200)}.hover\\:border-stone-300:hover{border-color:var(--color-stone-300)}.hover\\:bg-amber-50:hover{background-color:var(--color-amber-50)}.hover\\:bg-amber-700:hover{background-color:var(--color-amber-700)}.hover\\:bg-rose-50:hover{background-color:var(--color-rose-50)}.hover\\:bg-rose-100:hover{background-color:var(--color-rose-100)}.hover\\:bg-stone-50:hover{background-color:var(--color-stone-50)}.hover\\:bg-stone-100:hover{background-color:var(--color-stone-100)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-amber-600:hover{color:var(--color-amber-600)}.hover\\:text-stone-500:hover{color:var(--color-stone-500)}.hover\\:text-stone-600:hover{color:var(--color-stone-600)}.hover\\:opacity-90:hover{opacity:.9}.hover\\:shadow-\\[0_8px_24px_rgba\\(120\\,83\\,30\\,0\\.10\\)\\]:hover{--tw-shadow:0 8px 24px var(--tw-shadow-color,#78531e1a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:shadow-\\[0_8px_28px_rgba\\(245\\,158\\,11\\,0\\.5\\)\\]:hover{--tw-shadow:0 8px 28px var(--tw-shadow-color,#f59e0b80);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}@media (min-width:40rem){.sm\\:block{display:block}.sm\\:items-center{align-items:center}}@media (min-width:48rem){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:64rem){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}}@keyframes fadeUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes scaleIn{0%{opacity:0;transform:scale(.93)}to{opacity:1;transform:scale(1)}}@keyframes slideUp{0%{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes slideLeft{0%{opacity:0;transform:translate(20px)}to{opacity:1;transform:translate(0)}}@keyframes shimmerText{0%{background-position:200%}to{background-position:-200%}}@keyframes shimmerSk{0%{background-position:-600px 0}to{background-position:600px 0}}@keyframes spin{to{transform:rotate(360deg)}}*,:before,:after{box-sizing:border-box}body{font-family:var(--font-jakarta);-webkit-font-smoothing:antialiased}.bg-mesh{background-color:#fffbf5;background-image:radial-gradient(at 15% 20%,#fbbf2421 0,#0000 55%),radial-gradient(at 85% 10%,#a7c6ac2e 0,#0000 50%),radial-gradient(at 60% 85%,#fbbf2414 0,#0000 45%),radial-gradient(at 5% 80%,#a7c6ac1f 0,#0000 50%)}.shimmer-text{-webkit-text-fill-color:transparent;background:linear-gradient(90deg,#92400e,#d97706 40%,#f59e0b,#d97706 60%,#92400e) 0 0/200%;-webkit-background-clip:text;background-clip:text;animation:4s linear infinite shimmerText}.skeleton{background:linear-gradient(90deg,#f5ede0 25%,#fef3c7,#f5ede0 75%) 0 0/600px 100%;border-radius:.75rem;animation:1.6s ease-in-out infinite shimmerSk}.btn-shine{cursor:pointer;background:linear-gradient(135deg,#f59e0b,#f97316);transition:opacity .2s,transform .1s;position:relative;overflow:hidden}.btn-shine:after{content:"";background:linear-gradient(105deg,#0000 40%,#ffffff40,#0000 60%) 200% 0/200% 100%;transition:background-position .5s;position:absolute;top:0;right:0;bottom:0;left:0}.btn-shine:hover:after{background-position:-200% 0}.btn-shine:hover{opacity:.93}.btn-shine:active{transform:scale(.98)}.btn-shine:disabled{opacity:.65;cursor:not-allowed}.ob-input{width:100%;font-family:var(--font-jakarta);color:#1c1917;background:#fffbeb80;border:1.5px solid #f5f5f4;border-radius:.75rem;outline:none;padding:12px 14px;font-size:14px;transition:border-color .2s,box-shadow .2s}.ob-input:focus{border-color:#fbbf24;box-shadow:0 0 0 3px #d977061a}.ob-input::placeholder{color:#a8a29e}.tab-pill{letter-spacing:.06em;text-transform:uppercase;cursor:pointer;color:#78716c;white-space:nowrap;font-size:11px;font-weight:600;font-family:var(--font-jakarta);background:0 0;border:none;border-radius:9999px;align-items:center;gap:6px;padding:8px 16px;transition:all .2s;display:flex}.tab-pill.active{color:#fff;background:linear-gradient(135deg,#f59e0b,#f97316);box-shadow:0 2px 8px #f59e0b4d}.d1{animation-delay:50ms}.d2{animation-delay:.12s}.d3{animation-delay:.2s}.d4{animation-delay:.28s}.d5{animation-delay:.36s}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background:#e7e5e4;border-radius:2px}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}',
        ),
      ),
        document.head.appendChild(t));
    }
  } catch (r) {
    console.error("vite-plugin-css-injected-by-js", r);
  }
})();
(function () {
  "use strict";
  var Tf = { exports: {} },
    La = {};
  /**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var W0 = Symbol.for("react.transitional.element"),
    I0 = Symbol.for("react.fragment");
  function jf(e, t, l) {
    var n = null;
    if (
      (l !== void 0 && (n = "" + l),
      t.key !== void 0 && (n = "" + t.key),
      "key" in t)
    ) {
      l = {};
      for (var a in t) a !== "key" && (l[a] = t[a]);
    } else l = t;
    return (
      (t = l.ref),
      { $$typeof: W0, type: e, key: n, ref: t !== void 0 ? t : null, props: l }
    );
  }
  ((La.Fragment = I0), (La.jsx = jf), (La.jsxs = jf), (Tf.exports = La));
  var f = Tf.exports,
    Af = { exports: {} },
    Ga = {},
    _f = { exports: {} },
    zf = {};
  /**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ ((function (e) {
    function t(j, H) {
      var M = j.length;
      j.push(H);
      e: for (; 0 < M; ) {
        var te = (M - 1) >>> 1,
          re = j[te];
        if (0 < a(re, H)) ((j[te] = H), (j[M] = re), (M = te));
        else break e;
      }
    }
    function l(j) {
      return j.length === 0 ? null : j[0];
    }
    function n(j) {
      if (j.length === 0) return null;
      var H = j[0],
        M = j.pop();
      if (M !== H) {
        j[0] = M;
        e: for (var te = 0, re = j.length, Je = re >>> 1; te < Je; ) {
          var ot = 2 * (te + 1) - 1,
            ql = j[ot],
            ut = ot + 1,
            Yl = j[ut];
          if (0 > a(ql, M))
            ut < re && 0 > a(Yl, ql)
              ? ((j[te] = Yl), (j[ut] = M), (te = ut))
              : ((j[te] = ql), (j[ot] = M), (te = ot));
          else if (ut < re && 0 > a(Yl, M))
            ((j[te] = Yl), (j[ut] = M), (te = ut));
          else break e;
        }
      }
      return H;
    }
    function a(j, H) {
      var M = j.sortIndex - H.sortIndex;
      return M !== 0 ? M : j.id - H.id;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == "object" && typeof performance.now == "function")
    ) {
      var u = performance;
      e.unstable_now = function () {
        return u.now();
      };
    } else {
      var i = Date,
        s = i.now();
      e.unstable_now = function () {
        return i.now() - s;
      };
    }
    var c = [],
      o = [],
      r = 1,
      p = null,
      d = 3,
      m = !1,
      g = !1,
      S = !1,
      E = !1,
      y = typeof setTimeout == "function" ? setTimeout : null,
      h = typeof clearTimeout == "function" ? clearTimeout : null,
      b = typeof setImmediate < "u" ? setImmediate : null;
    function v(j) {
      for (var H = l(o); H !== null; ) {
        if (H.callback === null) n(o);
        else if (H.startTime <= j)
          (n(o), (H.sortIndex = H.expirationTime), t(c, H));
        else break;
        H = l(o);
      }
    }
    function A(j) {
      if (((S = !1), v(j), !g))
        if (l(c) !== null) ((g = !0), O || ((O = !0), Ke()));
        else {
          var H = l(o);
          H !== null && Un(A, H.startTime - j);
        }
    }
    var O = !1,
      T = -1,
      z = 5,
      U = -1;
    function _() {
      return E ? !0 : !(e.unstable_now() - U < z);
    }
    function Ee() {
      if (((E = !1), O)) {
        var j = e.unstable_now();
        U = j;
        var H = !0;
        try {
          e: {
            ((g = !1), S && ((S = !1), h(T), (T = -1)), (m = !0));
            var M = d;
            try {
              t: {
                for (
                  v(j), p = l(c);
                  p !== null && !(p.expirationTime > j && _());
                ) {
                  var te = p.callback;
                  if (typeof te == "function") {
                    ((p.callback = null), (d = p.priorityLevel));
                    var re = te(p.expirationTime <= j);
                    if (((j = e.unstable_now()), typeof re == "function")) {
                      ((p.callback = re), v(j), (H = !0));
                      break t;
                    }
                    (p === l(c) && n(c), v(j));
                  } else n(c);
                  p = l(c);
                }
                if (p !== null) H = !0;
                else {
                  var Je = l(o);
                  (Je !== null && Un(A, Je.startTime - j), (H = !1));
                }
              }
              break e;
            } finally {
              ((p = null), (d = M), (m = !1));
            }
            H = void 0;
          }
        } finally {
          H ? Ke() : (O = !1);
        }
      }
    }
    var Ke;
    if (typeof b == "function")
      Ke = function () {
        b(Ee);
      };
    else if (typeof MessageChannel < "u") {
      var rl = new MessageChannel(),
        Ht = rl.port2;
      ((rl.port1.onmessage = Ee),
        (Ke = function () {
          Ht.postMessage(null);
        }));
    } else
      Ke = function () {
        y(Ee, 0);
      };
    function Un(j, H) {
      T = y(function () {
        j(e.unstable_now());
      }, H);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (j) {
        j.callback = null;
      }),
      (e.unstable_forceFrameRate = function (j) {
        0 > j || 125 < j
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
            )
          : (z = 0 < j ? Math.floor(1e3 / j) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return d;
      }),
      (e.unstable_next = function (j) {
        switch (d) {
          case 1:
          case 2:
          case 3:
            var H = 3;
            break;
          default:
            H = d;
        }
        var M = d;
        d = H;
        try {
          return j();
        } finally {
          d = M;
        }
      }),
      (e.unstable_requestPaint = function () {
        E = !0;
      }),
      (e.unstable_runWithPriority = function (j, H) {
        switch (j) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            j = 3;
        }
        var M = d;
        d = j;
        try {
          return H();
        } finally {
          d = M;
        }
      }),
      (e.unstable_scheduleCallback = function (j, H, M) {
        var te = e.unstable_now();
        switch (
          (typeof M == "object" && M !== null
            ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? te + M : te))
            : (M = te),
          j)
        ) {
          case 1:
            var re = -1;
            break;
          case 2:
            re = 250;
            break;
          case 5:
            re = 1073741823;
            break;
          case 4:
            re = 1e4;
            break;
          default:
            re = 5e3;
        }
        return (
          (re = M + re),
          (j = {
            id: r++,
            callback: H,
            priorityLevel: j,
            startTime: M,
            expirationTime: re,
            sortIndex: -1,
          }),
          M > te
            ? ((j.sortIndex = M),
              t(o, j),
              l(c) === null &&
                j === l(o) &&
                (S ? (h(T), (T = -1)) : (S = !0), Un(A, M - te)))
            : ((j.sortIndex = re),
              t(c, j),
              g || m || ((g = !0), O || ((O = !0), Ke()))),
          j
        );
      }),
      (e.unstable_shouldYield = _),
      (e.unstable_wrapCallback = function (j) {
        var H = d;
        return function () {
          var M = d;
          d = H;
          try {
            return j.apply(this, arguments);
          } finally {
            d = M;
          }
        };
      }));
  })(zf),
    (_f.exports = zf));
  var P0 = _f.exports,
    Of = { exports: {} },
    w = {};
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Ti = Symbol.for("react.transitional.element"),
    eh = Symbol.for("react.portal"),
    th = Symbol.for("react.fragment"),
    lh = Symbol.for("react.strict_mode"),
    nh = Symbol.for("react.profiler"),
    ah = Symbol.for("react.consumer"),
    uh = Symbol.for("react.context"),
    ih = Symbol.for("react.forward_ref"),
    sh = Symbol.for("react.suspense"),
    ch = Symbol.for("react.memo"),
    Rf = Symbol.for("react.lazy"),
    fh = Symbol.for("react.activity"),
    Df = Symbol.iterator;
  function oh(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Df && e[Df]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Cf = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Mf = Object.assign,
    Uf = {};
  function Ll(e, t, l) {
    ((this.props = e),
      (this.context = t),
      (this.refs = Uf),
      (this.updater = l || Cf));
  }
  ((Ll.prototype.isReactComponent = {}),
    (Ll.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (Ll.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }));
  function wf() {}
  wf.prototype = Ll.prototype;
  function ji(e, t, l) {
    ((this.props = e),
      (this.context = t),
      (this.refs = Uf),
      (this.updater = l || Cf));
  }
  var Ai = (ji.prototype = new wf());
  ((Ai.constructor = ji), Mf(Ai, Ll.prototype), (Ai.isPureReactComponent = !0));
  var Bf = Array.isArray;
  function _i() {}
  var F = { H: null, A: null, T: null, S: null },
    Hf = Object.prototype.hasOwnProperty;
  function zi(e, t, l) {
    var n = l.ref;
    return {
      $$typeof: Ti,
      type: e,
      key: t,
      ref: n !== void 0 ? n : null,
      props: l,
    };
  }
  function rh(e, t) {
    return zi(e.type, t, e.props);
  }
  function Oi(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ti;
  }
  function dh(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (l) {
        return t[l];
      })
    );
  }
  var qf = /\/+/g;
  function Ri(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? dh("" + e.key)
      : t.toString(36);
  }
  function mh(e) {
    switch (e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw e.reason;
      default:
        switch (
          (typeof e.status == "string"
            ? e.then(_i, _i)
            : ((e.status = "pending"),
              e.then(
                function (t) {
                  e.status === "pending" &&
                    ((e.status = "fulfilled"), (e.value = t));
                },
                function (t) {
                  e.status === "pending" &&
                    ((e.status = "rejected"), (e.reason = t));
                },
              )),
          e.status)
        ) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
        }
    }
    throw e;
  }
  function Gl(e, t, l, n, a) {
    var u = typeof e;
    (u === "undefined" || u === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else
      switch (u) {
        case "bigint":
        case "string":
        case "number":
          i = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Ti:
            case eh:
              i = !0;
              break;
            case Rf:
              return ((i = e._init), Gl(i(e._payload), t, l, n, a));
          }
      }
    if (i)
      return (
        (a = a(e)),
        (i = n === "" ? "." + Ri(e, 0) : n),
        Bf(a)
          ? ((l = ""),
            i != null && (l = i.replace(qf, "$&/") + "/"),
            Gl(a, t, l, "", function (o) {
              return o;
            }))
          : a != null &&
            (Oi(a) &&
              (a = rh(
                a,
                l +
                  (a.key == null || (e && e.key === a.key)
                    ? ""
                    : ("" + a.key).replace(qf, "$&/") + "/") +
                  i,
              )),
            t.push(a)),
        1
      );
    i = 0;
    var s = n === "" ? "." : n + ":";
    if (Bf(e))
      for (var c = 0; c < e.length; c++)
        ((n = e[c]), (u = s + Ri(n, c)), (i += Gl(n, t, l, u, a)));
    else if (((c = oh(e)), typeof c == "function"))
      for (e = c.call(e), c = 0; !(n = e.next()).done; )
        ((n = n.value), (u = s + Ri(n, c++)), (i += Gl(n, t, l, u, a)));
    else if (u === "object") {
      if (typeof e.then == "function") return Gl(mh(e), t, l, n, a);
      throw (
        (t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return i;
  }
  function Xa(e, t, l) {
    if (e == null) return e;
    var n = [],
      a = 0;
    return (
      Gl(e, n, "", "", function (u) {
        return t.call(l, u, a++);
      }),
      n
    );
  }
  function hh(e) {
    if (e._status === -1) {
      var t = e._result;
      ((t = t()),
        t.then(
          function (l) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = l));
          },
          function (l) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = l));
          },
        ),
        e._status === -1 && ((e._status = 0), (e._result = t)));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var Yf =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    yh = {
      map: Xa,
      forEach: function (e, t, l) {
        Xa(
          e,
          function () {
            t.apply(this, arguments);
          },
          l,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          Xa(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          Xa(e, function (t) {
            return t;
          }) || []
        );
      },
      only: function (e) {
        if (!Oi(e))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return e;
      },
    };
  ((w.Activity = fh),
    (w.Children = yh),
    (w.Component = Ll),
    (w.Fragment = th),
    (w.Profiler = nh),
    (w.PureComponent = ji),
    (w.StrictMode = lh),
    (w.Suspense = sh),
    (w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
    (w.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (e) {
        return F.H.useMemoCache(e);
      },
    }),
    (w.cache = function (e) {
      return function () {
        return e.apply(null, arguments);
      };
    }),
    (w.cacheSignal = function () {
      return null;
    }),
    (w.cloneElement = function (e, t, l) {
      if (e == null)
        throw Error(
          "The argument must be a React element, but you passed " + e + ".",
        );
      var n = Mf({}, e.props),
        a = e.key;
      if (t != null)
        for (u in (t.key !== void 0 && (a = "" + t.key), t))
          !Hf.call(t, u) ||
            u === "key" ||
            u === "__self" ||
            u === "__source" ||
            (u === "ref" && t.ref === void 0) ||
            (n[u] = t[u]);
      var u = arguments.length - 2;
      if (u === 1) n.children = l;
      else if (1 < u) {
        for (var i = Array(u), s = 0; s < u; s++) i[s] = arguments[s + 2];
        n.children = i;
      }
      return zi(e.type, a, n);
    }),
    (w.createContext = function (e) {
      return (
        (e = {
          $$typeof: uh,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (e.Provider = e),
        (e.Consumer = { $$typeof: ah, _context: e }),
        e
      );
    }),
    (w.createElement = function (e, t, l) {
      var n,
        a = {},
        u = null;
      if (t != null)
        for (n in (t.key !== void 0 && (u = "" + t.key), t))
          Hf.call(t, n) &&
            n !== "key" &&
            n !== "__self" &&
            n !== "__source" &&
            (a[n] = t[n]);
      var i = arguments.length - 2;
      if (i === 1) a.children = l;
      else if (1 < i) {
        for (var s = Array(i), c = 0; c < i; c++) s[c] = arguments[c + 2];
        a.children = s;
      }
      if (e && e.defaultProps)
        for (n in ((i = e.defaultProps), i)) a[n] === void 0 && (a[n] = i[n]);
      return zi(e, u, a);
    }),
    (w.createRef = function () {
      return { current: null };
    }),
    (w.forwardRef = function (e) {
      return { $$typeof: ih, render: e };
    }),
    (w.isValidElement = Oi),
    (w.lazy = function (e) {
      return { $$typeof: Rf, _payload: { _status: -1, _result: e }, _init: hh };
    }),
    (w.memo = function (e, t) {
      return { $$typeof: ch, type: e, compare: t === void 0 ? null : t };
    }),
    (w.startTransition = function (e) {
      var t = F.T,
        l = {};
      F.T = l;
      try {
        var n = e(),
          a = F.S;
        (a !== null && a(l, n),
          typeof n == "object" &&
            n !== null &&
            typeof n.then == "function" &&
            n.then(_i, Yf));
      } catch (u) {
        Yf(u);
      } finally {
        (t !== null && l.types !== null && (t.types = l.types), (F.T = t));
      }
    }),
    (w.unstable_useCacheRefresh = function () {
      return F.H.useCacheRefresh();
    }),
    (w.use = function (e) {
      return F.H.use(e);
    }),
    (w.useActionState = function (e, t, l) {
      return F.H.useActionState(e, t, l);
    }),
    (w.useCallback = function (e, t) {
      return F.H.useCallback(e, t);
    }),
    (w.useContext = function (e) {
      return F.H.useContext(e);
    }),
    (w.useDebugValue = function () {}),
    (w.useDeferredValue = function (e, t) {
      return F.H.useDeferredValue(e, t);
    }),
    (w.useEffect = function (e, t) {
      return F.H.useEffect(e, t);
    }),
    (w.useEffectEvent = function (e) {
      return F.H.useEffectEvent(e);
    }),
    (w.useId = function () {
      return F.H.useId();
    }),
    (w.useImperativeHandle = function (e, t, l) {
      return F.H.useImperativeHandle(e, t, l);
    }),
    (w.useInsertionEffect = function (e, t) {
      return F.H.useInsertionEffect(e, t);
    }),
    (w.useLayoutEffect = function (e, t) {
      return F.H.useLayoutEffect(e, t);
    }),
    (w.useMemo = function (e, t) {
      return F.H.useMemo(e, t);
    }),
    (w.useOptimistic = function (e, t) {
      return F.H.useOptimistic(e, t);
    }),
    (w.useReducer = function (e, t, l) {
      return F.H.useReducer(e, t, l);
    }),
    (w.useRef = function (e) {
      return F.H.useRef(e);
    }),
    (w.useState = function (e) {
      return F.H.useState(e);
    }),
    (w.useSyncExternalStore = function (e, t, l) {
      return F.H.useSyncExternalStore(e, t, l);
    }),
    (w.useTransition = function () {
      return F.H.useTransition();
    }),
    (w.version = "19.2.4"),
    (Of.exports = w));
  var R = Of.exports,
    Lf = { exports: {} },
    Te = {};
  /**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var ph = R;
  function Gf(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function qt() {}
  var je = {
      d: {
        f: qt,
        r: function () {
          throw Error(Gf(522));
        },
        D: qt,
        C: qt,
        L: qt,
        m: qt,
        X: qt,
        S: qt,
        M: qt,
      },
      p: 0,
      findDOMNode: null,
    },
    gh = Symbol.for("react.portal");
  function bh(e, t, l) {
    var n =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: gh,
      key: n == null ? null : "" + n,
      children: e,
      containerInfo: t,
      implementation: l,
    };
  }
  var wn = ph.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Qa(e, t) {
    if (e === "font") return "";
    if (typeof t == "string") return t === "use-credentials" ? t : "";
  }
  ((Te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = je),
    (Te.createPortal = function (e, t) {
      var l =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
        throw Error(Gf(299));
      return bh(e, t, null, l);
    }),
    (Te.flushSync = function (e) {
      var t = wn.T,
        l = je.p;
      try {
        if (((wn.T = null), (je.p = 2), e)) return e();
      } finally {
        ((wn.T = t), (je.p = l), je.d.f());
      }
    }),
    (Te.preconnect = function (e, t) {
      typeof e == "string" &&
        (t
          ? ((t = t.crossOrigin),
            (t =
              typeof t == "string"
                ? t === "use-credentials"
                  ? t
                  : ""
                : void 0))
          : (t = null),
        je.d.C(e, t));
    }),
    (Te.prefetchDNS = function (e) {
      typeof e == "string" && je.d.D(e);
    }),
    (Te.preinit = function (e, t) {
      if (typeof e == "string" && t && typeof t.as == "string") {
        var l = t.as,
          n = Qa(l, t.crossOrigin),
          a = typeof t.integrity == "string" ? t.integrity : void 0,
          u = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
        l === "style"
          ? je.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
              crossOrigin: n,
              integrity: a,
              fetchPriority: u,
            })
          : l === "script" &&
            je.d.X(e, {
              crossOrigin: n,
              integrity: a,
              fetchPriority: u,
              nonce: typeof t.nonce == "string" ? t.nonce : void 0,
            });
      }
    }),
    (Te.preinitModule = function (e, t) {
      if (typeof e == "string")
        if (typeof t == "object" && t !== null) {
          if (t.as == null || t.as === "script") {
            var l = Qa(t.as, t.crossOrigin);
            je.d.M(e, {
              crossOrigin: l,
              integrity: typeof t.integrity == "string" ? t.integrity : void 0,
              nonce: typeof t.nonce == "string" ? t.nonce : void 0,
            });
          }
        } else t == null && je.d.M(e);
    }),
    (Te.preload = function (e, t) {
      if (
        typeof e == "string" &&
        typeof t == "object" &&
        t !== null &&
        typeof t.as == "string"
      ) {
        var l = t.as,
          n = Qa(l, t.crossOrigin);
        je.d.L(e, l, {
          crossOrigin: n,
          integrity: typeof t.integrity == "string" ? t.integrity : void 0,
          nonce: typeof t.nonce == "string" ? t.nonce : void 0,
          type: typeof t.type == "string" ? t.type : void 0,
          fetchPriority:
            typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
          referrerPolicy:
            typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
          imageSrcSet:
            typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
          imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
          media: typeof t.media == "string" ? t.media : void 0,
        });
      }
    }),
    (Te.preloadModule = function (e, t) {
      if (typeof e == "string")
        if (t) {
          var l = Qa(t.as, t.crossOrigin);
          je.d.m(e, {
            as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
            crossOrigin: l,
            integrity: typeof t.integrity == "string" ? t.integrity : void 0,
          });
        } else je.d.m(e);
    }),
    (Te.requestFormReset = function (e) {
      je.d.r(e);
    }),
    (Te.unstable_batchedUpdates = function (e, t) {
      return e(t);
    }),
    (Te.useFormState = function (e, t, l) {
      return wn.H.useFormState(e, t, l);
    }),
    (Te.useFormStatus = function () {
      return wn.H.useHostTransitionStatus();
    }),
    (Te.version = "19.2.4"));
  function Xf() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xf);
      } catch (e) {
        console.error(e);
      }
  }
  (Xf(), (Lf.exports = Te));
  var xh = Lf.exports;
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var de = P0,
    Qf = R,
    vh = xh;
  function N(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function Zf(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Bn(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), t.flags & 4098 && (l = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function Vf(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Kf(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Jf(e) {
    if (Bn(e) !== e) throw Error(N(188));
  }
  function Sh(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Bn(e)), t === null)) throw Error(N(188));
      return t !== e ? null : e;
    }
    for (var l = e, n = t; ; ) {
      var a = l.return;
      if (a === null) break;
      var u = a.alternate;
      if (u === null) {
        if (((n = a.return), n !== null)) {
          l = n;
          continue;
        }
        break;
      }
      if (a.child === u.child) {
        for (u = a.child; u; ) {
          if (u === l) return (Jf(a), e);
          if (u === n) return (Jf(a), t);
          u = u.sibling;
        }
        throw Error(N(188));
      }
      if (l.return !== n.return) ((l = a), (n = u));
      else {
        for (var i = !1, s = a.child; s; ) {
          if (s === l) {
            ((i = !0), (l = a), (n = u));
            break;
          }
          if (s === n) {
            ((i = !0), (n = a), (l = u));
            break;
          }
          s = s.sibling;
        }
        if (!i) {
          for (s = u.child; s; ) {
            if (s === l) {
              ((i = !0), (l = u), (n = a));
              break;
            }
            if (s === n) {
              ((i = !0), (n = u), (l = a));
              break;
            }
            s = s.sibling;
          }
          if (!i) throw Error(N(189));
        }
      }
      if (l.alternate !== n) throw Error(N(190));
    }
    if (l.tag !== 3) throw Error(N(188));
    return l.stateNode.current === l ? e : t;
  }
  function kf(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = kf(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var W = Object.assign,
    Eh = Symbol.for("react.element"),
    Za = Symbol.for("react.transitional.element"),
    Hn = Symbol.for("react.portal"),
    Xl = Symbol.for("react.fragment"),
    $f = Symbol.for("react.strict_mode"),
    Di = Symbol.for("react.profiler"),
    Ff = Symbol.for("react.consumer"),
    gt = Symbol.for("react.context"),
    Ci = Symbol.for("react.forward_ref"),
    Mi = Symbol.for("react.suspense"),
    Ui = Symbol.for("react.suspense_list"),
    wi = Symbol.for("react.memo"),
    Yt = Symbol.for("react.lazy"),
    Bi = Symbol.for("react.activity"),
    Nh = Symbol.for("react.memo_cache_sentinel"),
    Wf = Symbol.iterator;
  function qn(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Wf && e[Wf]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Th = Symbol.for("react.client.reference");
  function Hi(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Th ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Xl:
        return "Fragment";
      case Di:
        return "Profiler";
      case $f:
        return "StrictMode";
      case Mi:
        return "Suspense";
      case Ui:
        return "SuspenseList";
      case Bi:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Hn:
          return "Portal";
        case gt:
          return e.displayName || "Context";
        case Ff:
          return (e._context.displayName || "Context") + ".Consumer";
        case Ci:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case wi:
          return (
            (t = e.displayName || null),
            t !== null ? t : Hi(e.type) || "Memo"
          );
        case Yt:
          ((t = e._payload), (e = e._init));
          try {
            return Hi(e(t));
          } catch {}
      }
    return null;
  }
  var Yn = Array.isArray,
    D = Qf.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = vh.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    dl = { pending: !1, data: null, method: null, action: null },
    qi = [],
    Ql = -1;
  function rt(e) {
    return { current: e };
  }
  function he(e) {
    0 > Ql || ((e.current = qi[Ql]), (qi[Ql] = null), Ql--);
  }
  function $(e, t) {
    (Ql++, (qi[Ql] = e.current), (e.current = t));
  }
  var dt = rt(null),
    Ln = rt(null),
    Lt = rt(null),
    Va = rt(null);
  function Ka(e, t) {
    switch (($(Lt, t), $(Ln, e), $(dt, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Nm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Nm(t)), (e = Tm(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (he(dt), $(dt, e));
  }
  function Zl() {
    (he(dt), he(Ln), he(Lt));
  }
  function Yi(e) {
    e.memoizedState !== null && $(Va, e);
    var t = dt.current,
      l = Tm(t, e.type);
    t !== l && ($(Ln, e), $(dt, l));
  }
  function Ja(e) {
    (Ln.current === e && (he(dt), he(Ln)),
      Va.current === e && (he(Va), (Oa._currentValue = dl)));
  }
  var Li, If;
  function ml(e) {
    if (Li === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ((Li = (t && t[1]) || ""),
          (If =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Li +
      e +
      If
    );
  }
  var Gi = !1;
  function Xi(e, t) {
    if (!e || Gi) return "";
    Gi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var p = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(p.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(p, []);
                } catch (m) {
                  var d = m;
                }
                Reflect.construct(e, [], p);
              } else {
                try {
                  p.call();
                } catch (m) {
                  d = m;
                }
                e.call(p.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (m) {
                d = m;
              }
              (p = e()) &&
                typeof p.catch == "function" &&
                p.catch(function () {});
            }
          } catch (m) {
            if (m && d && typeof m.stack == "string") return [m.stack, d.stack];
          }
          return [null, null];
        },
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name",
      );
      a &&
        a.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = n.DetermineComponentFrameRoot(),
        i = u[0],
        s = u[1];
      if (i && s) {
        var c = i.split(`
`),
          o = s.split(`
`);
        for (
          a = n = 0;
          n < c.length && !c[n].includes("DetermineComponentFrameRoot");
        )
          n++;
        for (; a < o.length && !o[a].includes("DetermineComponentFrameRoot"); )
          a++;
        if (n === c.length || a === o.length)
          for (
            n = c.length - 1, a = o.length - 1;
            1 <= n && 0 <= a && c[n] !== o[a];
          )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (c[n] !== o[a]) {
            if (n !== 1 || a !== 1)
              do
                if ((n--, a--, 0 > a || c[n] !== o[a])) {
                  var r =
                    `
` + c[n].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      r.includes("<anonymous>") &&
                      (r = r.replace("<anonymous>", e.displayName)),
                    r
                  );
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      ((Gi = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : "") ? ml(l) : "";
  }
  function jh(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ml(e.type);
      case 16:
        return ml("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? ml("Suspense Fallback")
          : ml("Suspense");
      case 19:
        return ml("SuspenseList");
      case 0:
      case 15:
        return Xi(e.type, !1);
      case 11:
        return Xi(e.type.render, !1);
      case 1:
        return Xi(e.type, !0);
      case 31:
        return ml("Activity");
      default:
        return "";
    }
  }
  function Pf(e) {
    try {
      var t = "",
        l = null;
      do ((t += jh(e, l)), (l = e), (e = e.return));
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  var Qi = Object.prototype.hasOwnProperty,
    Zi = de.unstable_scheduleCallback,
    Vi = de.unstable_cancelCallback,
    Ah = de.unstable_shouldYield,
    _h = de.unstable_requestPaint,
    Be = de.unstable_now,
    zh = de.unstable_getCurrentPriorityLevel,
    eo = de.unstable_ImmediatePriority,
    to = de.unstable_UserBlockingPriority,
    ka = de.unstable_NormalPriority,
    Oh = de.unstable_LowPriority,
    lo = de.unstable_IdlePriority,
    Rh = de.log,
    Dh = de.unstable_setDisableYieldValue,
    Gn = null,
    He = null;
  function Gt(e) {
    if (
      (typeof Rh == "function" && Dh(e),
      He && typeof He.setStrictMode == "function")
    )
      try {
        He.setStrictMode(Gn, e);
      } catch {}
  }
  var qe = Math.clz32 ? Math.clz32 : Uh,
    Ch = Math.log,
    Mh = Math.LN2;
  function Uh(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ch(e) / Mh) | 0)) | 0);
  }
  var $a = 256,
    Fa = 262144,
    Wa = 4194304;
  function hl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ia(e, t, l) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var a = 0,
      u = e.suspendedLanes,
      i = e.pingedLanes;
    e = e.warmLanes;
    var s = n & 134217727;
    return (
      s !== 0
        ? ((n = s & ~u),
          n !== 0
            ? (a = hl(n))
            : ((i &= s),
              i !== 0
                ? (a = hl(i))
                : l || ((l = s & ~e), l !== 0 && (a = hl(l)))))
        : ((s = n & ~u),
          s !== 0
            ? (a = hl(s))
            : i !== 0
              ? (a = hl(i))
              : l || ((l = n & ~e), l !== 0 && (a = hl(l)))),
      a === 0
        ? 0
        : t !== 0 &&
            t !== a &&
            !(t & u) &&
            ((u = a & -a),
            (l = t & -t),
            u >= l || (u === 32 && (l & 4194048) !== 0))
          ? t
          : a
    );
  }
  function Xn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function wh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function no() {
    var e = Wa;
    return ((Wa <<= 1), !(Wa & 62914560) && (Wa = 4194304), e);
  }
  function Ki(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Qn(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Bh(e, t, l, n, a, u) {
    var i = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var s = e.entanglements,
      c = e.expirationTimes,
      o = e.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var r = 31 - qe(l),
        p = 1 << r;
      ((s[r] = 0), (c[r] = -1));
      var d = o[r];
      if (d !== null)
        for (o[r] = null, r = 0; r < d.length; r++) {
          var m = d[r];
          m !== null && (m.lane &= -536870913);
        }
      l &= ~p;
    }
    (n !== 0 && ao(e, n, 0),
      u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(i & ~t)));
  }
  function ao(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var n = 31 - qe(t);
    ((e.entangledLanes |= t),
      (e.entanglements[n] = e.entanglements[n] | 1073741824 | (l & 261930)));
  }
  function uo(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var n = 31 - qe(l),
        a = 1 << n;
      ((a & t) | (e[n] & t) && (e[n] |= t), (l &= ~a));
    }
  }
  function io(e, t) {
    var l = t & -t;
    return ((l = l & 42 ? 1 : Ji(l)), l & (e.suspendedLanes | t) ? 0 : l);
  }
  function Ji(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function ki(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
    );
  }
  function so() {
    var e = X.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Jm(e.type));
  }
  function co(e, t) {
    var l = X.p;
    try {
      return ((X.p = e), t());
    } finally {
      X.p = l;
    }
  }
  var Xt = Math.random().toString(36).slice(2),
    ge = "__reactFiber$" + Xt,
    _e = "__reactProps$" + Xt,
    Vl = "__reactContainer$" + Xt,
    $i = "__reactEvents$" + Xt,
    Hh = "__reactListeners$" + Xt,
    qh = "__reactHandles$" + Xt,
    fo = "__reactResources$" + Xt,
    Zn = "__reactMarker$" + Xt;
  function Fi(e) {
    (delete e[ge], delete e[_e], delete e[$i], delete e[Hh], delete e[qh]);
  }
  function Kl(e) {
    var t = e[ge];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[Vl] || l[ge])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = Dm(e); e !== null; ) {
            if ((l = e[ge])) return l;
            e = Dm(e);
          }
        return t;
      }
      ((e = l), (l = e.parentNode));
    }
    return null;
  }
  function Jl(e) {
    if ((e = e[ge] || e[Vl])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Vn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(N(33));
  }
  function kl(e) {
    var t = e[fo];
    return (
      t ||
        (t = e[fo] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function ye(e) {
    e[Zn] = !0;
  }
  var oo = new Set(),
    ro = {};
  function yl(e, t) {
    ($l(e, t), $l(e + "Capture", t));
  }
  function $l(e, t) {
    for (ro[e] = t, e = 0; e < t.length; e++) oo.add(t[e]);
  }
  var Yh = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    mo = {},
    ho = {};
  function Lh(e) {
    return Qi.call(ho, e)
      ? !0
      : Qi.call(mo, e)
        ? !1
        : Yh.test(e)
          ? (ho[e] = !0)
          : ((mo[e] = !0), !1);
  }
  function Pa(e, t, l) {
    if (Lh(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var n = t.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function eu(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function bt(e, t, l, n) {
    if (n === null) e.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + n);
    }
  }
  function ke(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function yo(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Gh(e, t, l) {
    var n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var a = n.get,
        u = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (i) {
            ((l = "" + i), u.call(this, i));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (i) {
            l = "" + i;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Wi(e) {
    if (!e._valueTracker) {
      var t = yo(e) ? "checked" : "value";
      e._valueTracker = Gh(e, t, "" + e[t]);
    }
  }
  function po(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      n = "";
    return (
      e && (n = yo(e) ? (e.checked ? "true" : "false") : e.value),
      (e = n),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function tu(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Xh = /[\n"\\]/g;
  function $e(e) {
    return e.replace(Xh, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ii(e, t, l, n, a, u, i, s) {
    ((e.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (e.type = i)
        : e.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + ke(t))
          : e.value !== "" + ke(t) && (e.value = "" + ke(t))
        : (i !== "submit" && i !== "reset") || e.removeAttribute("value"),
      t != null
        ? Pi(e, i, ke(t))
        : l != null
          ? Pi(e, i, ke(l))
          : n != null && e.removeAttribute("value"),
      a == null && u != null && (e.defaultChecked = !!u),
      a != null &&
        (e.checked = a && typeof a != "function" && typeof a != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (e.name = "" + ke(s))
        : e.removeAttribute("name"));
  }
  function go(e, t, l, n, a, u, i, s) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) {
        Wi(e);
        return;
      }
      ((l = l != null ? "" + ke(l) : ""),
        (t = t != null ? "" + ke(t) : l),
        s || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = n ?? a),
      (n = typeof n != "function" && typeof n != "symbol" && !!n),
      (e.checked = s ? e.checked : !!n),
      (e.defaultChecked = !!n),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.name = i),
      Wi(e));
  }
  function Pi(e, t, l) {
    (t === "number" && tu(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function Fl(e, t, l, n) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < l.length; a++) t["$" + l[a]] = !0;
      for (l = 0; l < e.length; l++)
        ((a = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== a && (e[l].selected = a),
          a && n && (e[l].defaultSelected = !0));
    } else {
      for (l = "" + ke(l), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === l) {
          ((e[a].selected = !0), n && (e[a].defaultSelected = !0));
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function bo(e, t, l) {
    if (
      t != null &&
      ((t = "" + ke(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + ke(l) : "";
  }
  function xo(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(N(92));
        if (Yn(n)) {
          if (1 < n.length) throw Error(N(93));
          n = n[0];
        }
        l = n;
      }
      (l == null && (l = ""), (t = l));
    }
    ((l = ke(t)),
      (e.defaultValue = l),
      (n = e.textContent),
      n === l && n !== "" && n !== null && (e.value = n),
      Wi(e));
  }
  function Wl(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Qh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function vo(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? n
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : n
        ? e.setProperty(t, l)
        : typeof l != "number" || l === 0 || Qh.has(t)
          ? t === "float"
            ? (e.cssFloat = l)
            : (e[t] = ("" + l).trim())
          : (e[t] = l + "px");
  }
  function So(e, t, l) {
    if (t != null && typeof t != "object") throw Error(N(62));
    if (((e = e.style), l != null)) {
      for (var n in l)
        !l.hasOwnProperty(n) ||
          (t != null && t.hasOwnProperty(n)) ||
          (n.indexOf("--") === 0
            ? e.setProperty(n, "")
            : n === "float"
              ? (e.cssFloat = "")
              : (e[n] = ""));
      for (var a in t)
        ((n = t[a]), t.hasOwnProperty(a) && l[a] !== n && vo(e, a, n));
    } else for (var u in t) t.hasOwnProperty(u) && vo(e, u, t[u]);
  }
  function es(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Zh = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Vh =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function lu(e) {
    return Vh.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function xt() {}
  var ts = null;
  function ls(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Il = null,
    Pl = null;
  function Eo(e) {
    var t = Jl(e);
    if (t && (e = t.stateNode)) {
      var l = e[_e] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Ii(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + $e("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var n = l[t];
              if (n !== e && n.form === e.form) {
                var a = n[_e] || null;
                if (!a) throw Error(N(90));
                Ii(
                  n,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name,
                );
              }
            }
            for (t = 0; t < l.length; t++)
              ((n = l[t]), n.form === e.form && po(n));
          }
          break e;
        case "textarea":
          bo(e, l.value, l.defaultValue);
          break e;
        case "select":
          ((t = l.value), t != null && Fl(e, !!l.multiple, t, !1));
      }
    }
  }
  var ns = !1;
  function No(e, t, l) {
    if (ns) return e(t, l);
    ns = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (
        ((ns = !1),
        (Il !== null || Pl !== null) &&
          (Qu(), Il && ((t = Il), (e = Pl), (Pl = Il = null), Eo(t), e)))
      )
        for (t = 0; t < e.length; t++) Eo(e[t]);
    }
  }
  function Kn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var n = l[_e] || null;
    if (n === null) return null;
    l = n[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((n = !n.disabled) ||
          ((e = e.type),
          (n = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !n));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(N(231, t, typeof l));
    return l;
  }
  var vt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    as = !1;
  if (vt)
    try {
      var Jn = {};
      (Object.defineProperty(Jn, "passive", {
        get: function () {
          as = !0;
        },
      }),
        window.addEventListener("test", Jn, Jn),
        window.removeEventListener("test", Jn, Jn));
    } catch {
      as = !1;
    }
  var Qt = null,
    us = null,
    nu = null;
  function To() {
    if (nu) return nu;
    var e,
      t = us,
      l = t.length,
      n,
      a = "value" in Qt ? Qt.value : Qt.textContent,
      u = a.length;
    for (e = 0; e < l && t[e] === a[e]; e++);
    var i = l - e;
    for (n = 1; n <= i && t[l - n] === a[u - n]; n++);
    return (nu = a.slice(e, 1 < n ? 1 - n : void 0));
  }
  function au(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function uu() {
    return !0;
  }
  function jo() {
    return !1;
  }
  function ze(e) {
    function t(l, n, a, u, i) {
      ((this._reactName = l),
        (this._targetInst = a),
        (this.type = n),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null));
      for (var s in e)
        e.hasOwnProperty(s) && ((l = e[s]), (this[s] = l ? l(u) : u[s]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? uu
          : jo),
        (this.isPropagationStopped = jo),
        this
      );
    }
    return (
      W(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = uu));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = uu));
        },
        persist: function () {},
        isPersistent: uu,
      }),
      t
    );
  }
  var pl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    iu = ze(pl),
    kn = W({}, pl, { view: 0, detail: 0 }),
    Kh = ze(kn),
    is,
    ss,
    $n,
    su = W({}, kn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: fs,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== $n &&
              ($n && e.type === "mousemove"
                ? ((is = e.screenX - $n.screenX), (ss = e.screenY - $n.screenY))
                : (ss = is = 0),
              ($n = e)),
            is);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ss;
      },
    }),
    Ao = ze(su),
    Jh = W({}, su, { dataTransfer: 0 }),
    kh = ze(Jh),
    $h = W({}, kn, { relatedTarget: 0 }),
    cs = ze($h),
    Fh = W({}, pl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wh = ze(Fh),
    Ih = W({}, pl, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ph = ze(Ih),
    ey = W({}, pl, { data: 0 }),
    _o = ze(ey),
    ty = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    ly = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    ny = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ay(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = ny[e])
        ? !!t[e]
        : !1;
  }
  function fs() {
    return ay;
  }
  var uy = W({}, kn, {
      key: function (e) {
        if (e.key) {
          var t = ty[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = au(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? ly[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: fs,
      charCode: function (e) {
        return e.type === "keypress" ? au(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? au(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    iy = ze(uy),
    sy = W({}, su, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    zo = ze(sy),
    cy = W({}, kn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fs,
    }),
    fy = ze(cy),
    oy = W({}, pl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ry = ze(oy),
    dy = W({}, su, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    my = ze(dy),
    hy = W({}, pl, { newState: 0, oldState: 0 }),
    yy = ze(hy),
    py = [9, 13, 27, 32],
    os = vt && "CompositionEvent" in window,
    Fn = null;
  vt && "documentMode" in document && (Fn = document.documentMode);
  var gy = vt && "TextEvent" in window && !Fn,
    Oo = vt && (!os || (Fn && 8 < Fn && 11 >= Fn)),
    Ro = " ",
    Do = !1;
  function Co(e, t) {
    switch (e) {
      case "keyup":
        return py.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Mo(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var en = !1;
  function by(e, t) {
    switch (e) {
      case "compositionend":
        return Mo(t);
      case "keypress":
        return t.which !== 32 ? null : ((Do = !0), Ro);
      case "textInput":
        return ((e = t.data), e === Ro && Do ? null : e);
      default:
        return null;
    }
  }
  function xy(e, t) {
    if (en)
      return e === "compositionend" || (!os && Co(e, t))
        ? ((e = To()), (nu = us = Qt = null), (en = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Oo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var vy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Uo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!vy[e.type] : t === "textarea";
  }
  function wo(e, t, l, n) {
    (Il ? (Pl ? Pl.push(n) : (Pl = [n])) : (Il = n),
      (t = Fu(t, "onChange")),
      0 < t.length &&
        ((l = new iu("onChange", "change", null, l, n)),
        e.push({ event: l, listeners: t })));
  }
  var Wn = null,
    In = null;
  function Sy(e) {
    gm(e, 0);
  }
  function cu(e) {
    var t = Vn(e);
    if (po(t)) return e;
  }
  function Bo(e, t) {
    if (e === "change") return t;
  }
  var Ho = !1;
  if (vt) {
    var rs;
    if (vt) {
      var ds = "oninput" in document;
      if (!ds) {
        var qo = document.createElement("div");
        (qo.setAttribute("oninput", "return;"),
          (ds = typeof qo.oninput == "function"));
      }
      rs = ds;
    } else rs = !1;
    Ho = rs && (!document.documentMode || 9 < document.documentMode);
  }
  function Yo() {
    Wn && (Wn.detachEvent("onpropertychange", Lo), (In = Wn = null));
  }
  function Lo(e) {
    if (e.propertyName === "value" && cu(In)) {
      var t = [];
      (wo(t, In, e, ls(e)), No(Sy, t));
    }
  }
  function Ey(e, t, l) {
    e === "focusin"
      ? (Yo(), (Wn = t), (In = l), Wn.attachEvent("onpropertychange", Lo))
      : e === "focusout" && Yo();
  }
  function Ny(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return cu(In);
  }
  function Ty(e, t) {
    if (e === "click") return cu(t);
  }
  function jy(e, t) {
    if (e === "input" || e === "change") return cu(t);
  }
  function Ay(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ye = typeof Object.is == "function" ? Object.is : Ay;
  function Pn(e, t) {
    if (Ye(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      n = Object.keys(t);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!Qi.call(t, a) || !Ye(e[a], t[a])) return !1;
    }
    return !0;
  }
  function Go(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Xo(e, t) {
    var l = Go(e);
    e = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (((n = e + l.textContent.length), e <= t && n >= t))
          return { node: l, offset: t - e };
        e = n;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Go(l);
    }
  }
  function Qo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Qo(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Zo(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = tu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = tu(e.document);
    }
    return t;
  }
  function ms(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var _y = vt && "documentMode" in document && 11 >= document.documentMode,
    tn = null,
    hs = null,
    ea = null,
    ys = !1;
  function Vo(e, t, l) {
    var n =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ys ||
      tn == null ||
      tn !== tu(n) ||
      ((n = tn),
      "selectionStart" in n && ms(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (ea && Pn(ea, n)) ||
        ((ea = n),
        (n = Fu(hs, "onSelect")),
        0 < n.length &&
          ((t = new iu("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: n }),
          (t.target = tn))));
  }
  function gl(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var ln = {
      animationend: gl("Animation", "AnimationEnd"),
      animationiteration: gl("Animation", "AnimationIteration"),
      animationstart: gl("Animation", "AnimationStart"),
      transitionrun: gl("Transition", "TransitionRun"),
      transitionstart: gl("Transition", "TransitionStart"),
      transitioncancel: gl("Transition", "TransitionCancel"),
      transitionend: gl("Transition", "TransitionEnd"),
    },
    ps = {},
    Ko = {};
  vt &&
    ((Ko = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ln.animationend.animation,
      delete ln.animationiteration.animation,
      delete ln.animationstart.animation),
    "TransitionEvent" in window || delete ln.transitionend.transition);
  function bl(e) {
    if (ps[e]) return ps[e];
    if (!ln[e]) return e;
    var t = ln[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in Ko) return (ps[e] = t[l]);
    return e;
  }
  var Jo = bl("animationend"),
    ko = bl("animationiteration"),
    $o = bl("animationstart"),
    zy = bl("transitionrun"),
    Oy = bl("transitionstart"),
    Ry = bl("transitioncancel"),
    Fo = bl("transitionend"),
    Wo = new Map(),
    gs =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  gs.push("scrollEnd");
  function it(e, t) {
    (Wo.set(e, t), yl(t, [e]));
  }
  var fu =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Fe = [],
    nn = 0,
    bs = 0;
  function ou() {
    for (var e = nn, t = (bs = nn = 0); t < e; ) {
      var l = Fe[t];
      Fe[t++] = null;
      var n = Fe[t];
      Fe[t++] = null;
      var a = Fe[t];
      Fe[t++] = null;
      var u = Fe[t];
      if (((Fe[t++] = null), n !== null && a !== null)) {
        var i = n.pending;
        (i === null ? (a.next = a) : ((a.next = i.next), (i.next = a)),
          (n.pending = a));
      }
      u !== 0 && Io(l, a, u);
    }
  }
  function ru(e, t, l, n) {
    ((Fe[nn++] = e),
      (Fe[nn++] = t),
      (Fe[nn++] = l),
      (Fe[nn++] = n),
      (bs |= n),
      (e.lanes |= n),
      (e = e.alternate),
      e !== null && (e.lanes |= n));
  }
  function xs(e, t, l, n) {
    return (ru(e, t, l, n), du(e));
  }
  function xl(e, t) {
    return (ru(e, null, null, t), du(e));
  }
  function Io(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, u = e.return; u !== null; )
      ((u.childLanes |= l),
        (n = u.alternate),
        n !== null && (n.childLanes |= l),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (a = !0)),
        (e = u),
        (u = u.return));
    return e.tag === 3
      ? ((u = e.stateNode),
        a &&
          t !== null &&
          ((a = 31 - qe(l)),
          (e = u.hiddenUpdates),
          (n = e[a]),
          n === null ? (e[a] = [t]) : n.push(t),
          (t.lane = l | 536870912)),
        u)
      : null;
  }
  function du(e) {
    if (50 < Ea) throw ((Ea = 0), (zc = null), Error(N(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var an = {};
  function Dy(e, t, l, n) {
    ((this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Le(e, t, l, n) {
    return new Dy(e, t, l, n);
  }
  function vs(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function St(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = Le(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function Po(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function mu(e, t, l, n, a, u) {
    var i = 0;
    if (((n = e), typeof e == "function")) vs(e) && (i = 1);
    else if (typeof e == "string")
      i = Bp(e, l, dt.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case Bi:
          return (
            (e = Le(31, l, t, a)),
            (e.elementType = Bi),
            (e.lanes = u),
            e
          );
        case Xl:
          return vl(l.children, a, u, t);
        case $f:
          ((i = 8), (a |= 24));
          break;
        case Di:
          return (
            (e = Le(12, l, t, a | 2)),
            (e.elementType = Di),
            (e.lanes = u),
            e
          );
        case Mi:
          return (
            (e = Le(13, l, t, a)),
            (e.elementType = Mi),
            (e.lanes = u),
            e
          );
        case Ui:
          return (
            (e = Le(19, l, t, a)),
            (e.elementType = Ui),
            (e.lanes = u),
            e
          );
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case gt:
                i = 10;
                break e;
              case Ff:
                i = 9;
                break e;
              case Ci:
                i = 11;
                break e;
              case wi:
                i = 14;
                break e;
              case Yt:
                ((i = 16), (n = null));
                break e;
            }
          ((i = 29),
            (l = Error(N(130, e === null ? "null" : typeof e, ""))),
            (n = null));
      }
    return (
      (t = Le(i, l, t, a)),
      (t.elementType = e),
      (t.type = n),
      (t.lanes = u),
      t
    );
  }
  function vl(e, t, l, n) {
    return ((e = Le(7, e, n, t)), (e.lanes = l), e);
  }
  function Ss(e, t, l) {
    return ((e = Le(6, e, null, t)), (e.lanes = l), e);
  }
  function er(e) {
    var t = Le(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Es(e, t, l) {
    return (
      (t = Le(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var tr = new WeakMap();
  function We(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = tr.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: Pf(t) }), tr.set(e, t), t);
    }
    return { value: e, source: t, stack: Pf(t) };
  }
  var un = [],
    sn = 0,
    hu = null,
    ta = 0,
    Ie = [],
    Pe = 0,
    Zt = null,
    mt = 1,
    ht = "";
  function Et(e, t) {
    ((un[sn++] = ta), (un[sn++] = hu), (hu = e), (ta = t));
  }
  function lr(e, t, l) {
    ((Ie[Pe++] = mt), (Ie[Pe++] = ht), (Ie[Pe++] = Zt), (Zt = e));
    var n = mt;
    e = ht;
    var a = 32 - qe(n) - 1;
    ((n &= ~(1 << a)), (l += 1));
    var u = 32 - qe(t) + a;
    if (30 < u) {
      var i = a - (a % 5);
      ((u = (n & ((1 << i) - 1)).toString(32)),
        (n >>= i),
        (a -= i),
        (mt = (1 << (32 - qe(t) + a)) | (l << a) | n),
        (ht = u + e));
    } else ((mt = (1 << u) | (l << a) | n), (ht = e));
  }
  function Ns(e) {
    e.return !== null && (Et(e, 1), lr(e, 1, 0));
  }
  function Ts(e) {
    for (; e === hu; )
      ((hu = un[--sn]), (un[sn] = null), (ta = un[--sn]), (un[sn] = null));
    for (; e === Zt; )
      ((Zt = Ie[--Pe]),
        (Ie[Pe] = null),
        (ht = Ie[--Pe]),
        (Ie[Pe] = null),
        (mt = Ie[--Pe]),
        (Ie[Pe] = null));
  }
  function nr(e, t) {
    ((Ie[Pe++] = mt),
      (Ie[Pe++] = ht),
      (Ie[Pe++] = Zt),
      (mt = t.id),
      (ht = t.overflow),
      (Zt = e));
  }
  var be = null,
    I = null,
    G = !1,
    Vt = null,
    et = !1,
    js = Error(N(519));
  function Kt(e) {
    var t = Error(
      N(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (la(We(t, e)), js);
  }
  function ar(e) {
    var t = e.stateNode,
      l = e.type,
      n = e.memoizedProps;
    switch (((t[ge] = e), (t[_e] = n), l)) {
      case "dialog":
        (Y("cancel", t), Y("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        Y("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ta.length; l++) Y(Ta[l], t);
        break;
      case "source":
        Y("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (Y("error", t), Y("load", t));
        break;
      case "details":
        Y("toggle", t);
        break;
      case "input":
        (Y("invalid", t),
          go(
            t,
            n.value,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
            !0,
          ));
        break;
      case "select":
        Y("invalid", t);
        break;
      case "textarea":
        (Y("invalid", t), xo(t, n.value, n.defaultValue, n.children));
    }
    ((l = n.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      n.suppressHydrationWarning === !0 ||
      Sm(t.textContent, l)
        ? (n.popover != null && (Y("beforetoggle", t), Y("toggle", t)),
          n.onScroll != null && Y("scroll", t),
          n.onScrollEnd != null && Y("scrollend", t),
          n.onClick != null && (t.onclick = xt),
          (t = !0))
        : (t = !1),
      t || Kt(e, !0));
  }
  function ur(e) {
    for (be = e.return; be; )
      switch (be.tag) {
        case 5:
        case 31:
        case 13:
          et = !1;
          return;
        case 27:
        case 3:
          et = !0;
          return;
        default:
          be = be.return;
      }
  }
  function cn(e) {
    if (e !== be) return !1;
    if (!G) return (ur(e), (G = !0), !1);
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || Qc(e.type, e.memoizedProps))),
        (l = !l)),
      l && I && Kt(e),
      ur(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(N(317));
      I = Rm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(N(317));
      I = Rm(e);
    } else
      t === 27
        ? ((t = I), il(e.type) ? ((e = kc), (kc = null), (I = e)) : (I = t))
        : (I = be ? lt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Sl() {
    ((I = be = null), (G = !1));
  }
  function As() {
    var e = Vt;
    return (
      e !== null &&
        (Ce === null ? (Ce = e) : Ce.push.apply(Ce, e), (Vt = null)),
      e
    );
  }
  function la(e) {
    Vt === null ? (Vt = [e]) : Vt.push(e);
  }
  var _s = rt(null),
    El = null,
    Nt = null;
  function Jt(e, t, l) {
    ($(_s, t._currentValue), (t._currentValue = l));
  }
  function Tt(e) {
    ((e._currentValue = _s.current), he(_s));
  }
  function zs(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
          : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function Os(e, t, l, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var u = a.dependencies;
      if (u !== null) {
        var i = a.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var s = u;
          u = a;
          for (var c = 0; c < t.length; c++)
            if (s.context === t[c]) {
              ((u.lanes |= l),
                (s = u.alternate),
                s !== null && (s.lanes |= l),
                zs(u.return, l, e),
                n || (i = null));
              break e;
            }
          u = s.next;
        }
      } else if (a.tag === 18) {
        if (((i = a.return), i === null)) throw Error(N(341));
        ((i.lanes |= l),
          (u = i.alternate),
          u !== null && (u.lanes |= l),
          zs(i, l, e),
          (i = null));
      } else i = a.child;
      if (i !== null) i.return = a;
      else
        for (i = a; i !== null; ) {
          if (i === e) {
            i = null;
            break;
          }
          if (((a = i.sibling), a !== null)) {
            ((a.return = i.return), (i = a));
            break;
          }
          i = i.return;
        }
      a = i;
    }
  }
  function fn(e, t, l, n) {
    e = null;
    for (var a = t, u = !1; a !== null; ) {
      if (!u) {
        if (a.flags & 524288) u = !0;
        else if (a.flags & 262144) break;
      }
      if (a.tag === 10) {
        var i = a.alternate;
        if (i === null) throw Error(N(387));
        if (((i = i.memoizedProps), i !== null)) {
          var s = a.type;
          Ye(a.pendingProps.value, i.value) ||
            (e !== null ? e.push(s) : (e = [s]));
        }
      } else if (a === Va.current) {
        if (((i = a.alternate), i === null)) throw Error(N(387));
        i.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
          (e !== null ? e.push(Oa) : (e = [Oa]));
      }
      a = a.return;
    }
    (e !== null && Os(t, e, l, n), (t.flags |= 262144));
  }
  function yu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ye(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Nl(e) {
    ((El = e),
      (Nt = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function xe(e) {
    return ir(El, e);
  }
  function pu(e, t) {
    return (El === null && Nl(e), ir(e, t));
  }
  function ir(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Nt === null)) {
      if (e === null) throw Error(N(308));
      ((Nt = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else Nt = Nt.next = t;
    return l;
  }
  var Cy =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, n) {
                  e.push(n);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                }));
            };
          },
    My = de.unstable_scheduleCallback,
    Uy = de.unstable_NormalPriority,
    se = {
      $$typeof: gt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Rs() {
    return { controller: new Cy(), data: new Map(), refCount: 0 };
  }
  function na(e) {
    (e.refCount--,
      e.refCount === 0 &&
        My(Uy, function () {
          e.controller.abort();
        }));
  }
  var aa = null,
    Ds = 0,
    on = 0,
    rn = null;
  function wy(e, t) {
    if (aa === null) {
      var l = (aa = []);
      ((Ds = 0),
        (on = Uc()),
        (rn = {
          status: "pending",
          value: void 0,
          then: function (n) {
            l.push(n);
          },
        }));
    }
    return (Ds++, t.then(sr, sr), t);
  }
  function sr() {
    if (--Ds === 0 && aa !== null) {
      rn !== null && (rn.status = "fulfilled");
      var e = aa;
      ((aa = null), (on = 0), (rn = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function By(e, t) {
    var l = [],
      n = {
        status: "pending",
        value: null,
        reason: null,
        then: function (a) {
          l.push(a);
        },
      };
    return (
      e.then(
        function () {
          ((n.status = "fulfilled"), (n.value = t));
          for (var a = 0; a < l.length; a++) (0, l[a])(t);
        },
        function (a) {
          for (n.status = "rejected", n.reason = a, a = 0; a < l.length; a++)
            (0, l[a])(void 0);
        },
      ),
      n
    );
  }
  var cr = D.S;
  D.S = function (e, t) {
    ((Vd = Be()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        wy(e, t),
      cr !== null && cr(e, t));
  };
  var Tl = rt(null);
  function Cs() {
    var e = Tl.current;
    return e !== null ? e : k.pooledCache;
  }
  function gu(e, t) {
    t === null ? $(Tl, Tl.current) : $(Tl, t.pool);
  }
  function fr() {
    var e = Cs();
    return e === null ? null : { parent: se._currentValue, pool: e };
  }
  var dn = Error(N(460)),
    Ms = Error(N(474)),
    bu = Error(N(542)),
    xu = { then: function () {} };
  function or(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function rr(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(xt, xt), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), mr(e), e);
      default:
        if (typeof t.status == "string") t.then(xt, xt);
        else {
          if (((e = k), e !== null && 100 < e.shellSuspendCounter))
            throw Error(N(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (n) {
                if (t.status === "pending") {
                  var a = t;
                  ((a.status = "fulfilled"), (a.value = n));
                }
              },
              function (n) {
                if (t.status === "pending") {
                  var a = t;
                  ((a.status = "rejected"), (a.reason = n));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), mr(e), e);
        }
        throw ((Al = t), dn);
    }
  }
  function jl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((Al = l), dn)
        : l;
    }
  }
  var Al = null;
  function dr() {
    if (Al === null) throw Error(N(459));
    var e = Al;
    return ((Al = null), e);
  }
  function mr(e) {
    if (e === dn || e === bu) throw Error(N(483));
  }
  var mn = null,
    ua = 0;
  function vu(e) {
    var t = ua;
    return ((ua += 1), mn === null && (mn = []), rr(mn, e, t));
  }
  function ia(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Su(e, t) {
    throw t.$$typeof === Eh
      ? Error(N(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          N(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function hr(e) {
    function t(y, h) {
      if (e) {
        var b = y.deletions;
        b === null ? ((y.deletions = [h]), (y.flags |= 16)) : b.push(h);
      }
    }
    function l(y, h) {
      if (!e) return null;
      for (; h !== null; ) (t(y, h), (h = h.sibling));
      return null;
    }
    function n(y) {
      for (var h = new Map(); y !== null; )
        (y.key !== null ? h.set(y.key, y) : h.set(y.index, y), (y = y.sibling));
      return h;
    }
    function a(y, h) {
      return ((y = St(y, h)), (y.index = 0), (y.sibling = null), y);
    }
    function u(y, h, b) {
      return (
        (y.index = b),
        e
          ? ((b = y.alternate),
            b !== null
              ? ((b = b.index), b < h ? ((y.flags |= 67108866), h) : b)
              : ((y.flags |= 67108866), h))
          : ((y.flags |= 1048576), h)
      );
    }
    function i(y) {
      return (e && y.alternate === null && (y.flags |= 67108866), y);
    }
    function s(y, h, b, v) {
      return h === null || h.tag !== 6
        ? ((h = Ss(b, y.mode, v)), (h.return = y), h)
        : ((h = a(h, b)), (h.return = y), h);
    }
    function c(y, h, b, v) {
      var A = b.type;
      return A === Xl
        ? r(y, h, b.props.children, v, b.key)
        : h !== null &&
            (h.elementType === A ||
              (typeof A == "object" &&
                A !== null &&
                A.$$typeof === Yt &&
                jl(A) === h.type))
          ? ((h = a(h, b.props)), ia(h, b), (h.return = y), h)
          : ((h = mu(b.type, b.key, b.props, null, y.mode, v)),
            ia(h, b),
            (h.return = y),
            h);
    }
    function o(y, h, b, v) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== b.containerInfo ||
        h.stateNode.implementation !== b.implementation
        ? ((h = Es(b, y.mode, v)), (h.return = y), h)
        : ((h = a(h, b.children || [])), (h.return = y), h);
    }
    function r(y, h, b, v, A) {
      return h === null || h.tag !== 7
        ? ((h = vl(b, y.mode, v, A)), (h.return = y), h)
        : ((h = a(h, b)), (h.return = y), h);
    }
    function p(y, h, b) {
      if (
        (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
      )
        return ((h = Ss("" + h, y.mode, b)), (h.return = y), h);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Za:
            return (
              (b = mu(h.type, h.key, h.props, null, y.mode, b)),
              ia(b, h),
              (b.return = y),
              b
            );
          case Hn:
            return ((h = Es(h, y.mode, b)), (h.return = y), h);
          case Yt:
            return ((h = jl(h)), p(y, h, b));
        }
        if (Yn(h) || qn(h))
          return ((h = vl(h, y.mode, b, null)), (h.return = y), h);
        if (typeof h.then == "function") return p(y, vu(h), b);
        if (h.$$typeof === gt) return p(y, pu(y, h), b);
        Su(y, h);
      }
      return null;
    }
    function d(y, h, b, v) {
      var A = h !== null ? h.key : null;
      if (
        (typeof b == "string" && b !== "") ||
        typeof b == "number" ||
        typeof b == "bigint"
      )
        return A !== null ? null : s(y, h, "" + b, v);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Za:
            return b.key === A ? c(y, h, b, v) : null;
          case Hn:
            return b.key === A ? o(y, h, b, v) : null;
          case Yt:
            return ((b = jl(b)), d(y, h, b, v));
        }
        if (Yn(b) || qn(b)) return A !== null ? null : r(y, h, b, v, null);
        if (typeof b.then == "function") return d(y, h, vu(b), v);
        if (b.$$typeof === gt) return d(y, h, pu(y, b), v);
        Su(y, b);
      }
      return null;
    }
    function m(y, h, b, v, A) {
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return ((y = y.get(b) || null), s(h, y, "" + v, A));
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Za:
            return (
              (y = y.get(v.key === null ? b : v.key) || null),
              c(h, y, v, A)
            );
          case Hn:
            return (
              (y = y.get(v.key === null ? b : v.key) || null),
              o(h, y, v, A)
            );
          case Yt:
            return ((v = jl(v)), m(y, h, b, v, A));
        }
        if (Yn(v) || qn(v))
          return ((y = y.get(b) || null), r(h, y, v, A, null));
        if (typeof v.then == "function") return m(y, h, b, vu(v), A);
        if (v.$$typeof === gt) return m(y, h, b, pu(h, v), A);
        Su(h, v);
      }
      return null;
    }
    function g(y, h, b, v) {
      for (
        var A = null, O = null, T = h, z = (h = 0), U = null;
        T !== null && z < b.length;
        z++
      ) {
        T.index > z ? ((U = T), (T = null)) : (U = T.sibling);
        var _ = d(y, T, b[z], v);
        if (_ === null) {
          T === null && (T = U);
          break;
        }
        (e && T && _.alternate === null && t(y, T),
          (h = u(_, h, z)),
          O === null ? (A = _) : (O.sibling = _),
          (O = _),
          (T = U));
      }
      if (z === b.length) return (l(y, T), G && Et(y, z), A);
      if (T === null) {
        for (; z < b.length; z++)
          ((T = p(y, b[z], v)),
            T !== null &&
              ((h = u(T, h, z)),
              O === null ? (A = T) : (O.sibling = T),
              (O = T)));
        return (G && Et(y, z), A);
      }
      for (T = n(T); z < b.length; z++)
        ((U = m(T, y, z, b[z], v)),
          U !== null &&
            (e && U.alternate !== null && T.delete(U.key === null ? z : U.key),
            (h = u(U, h, z)),
            O === null ? (A = U) : (O.sibling = U),
            (O = U)));
      return (
        e &&
          T.forEach(function (Ee) {
            return t(y, Ee);
          }),
        G && Et(y, z),
        A
      );
    }
    function S(y, h, b, v) {
      if (b == null) throw Error(N(151));
      for (
        var A = null, O = null, T = h, z = (h = 0), U = null, _ = b.next();
        T !== null && !_.done;
        z++, _ = b.next()
      ) {
        T.index > z ? ((U = T), (T = null)) : (U = T.sibling);
        var Ee = d(y, T, _.value, v);
        if (Ee === null) {
          T === null && (T = U);
          break;
        }
        (e && T && Ee.alternate === null && t(y, T),
          (h = u(Ee, h, z)),
          O === null ? (A = Ee) : (O.sibling = Ee),
          (O = Ee),
          (T = U));
      }
      if (_.done) return (l(y, T), G && Et(y, z), A);
      if (T === null) {
        for (; !_.done; z++, _ = b.next())
          ((_ = p(y, _.value, v)),
            _ !== null &&
              ((h = u(_, h, z)),
              O === null ? (A = _) : (O.sibling = _),
              (O = _)));
        return (G && Et(y, z), A);
      }
      for (T = n(T); !_.done; z++, _ = b.next())
        ((_ = m(T, y, z, _.value, v)),
          _ !== null &&
            (e && _.alternate !== null && T.delete(_.key === null ? z : _.key),
            (h = u(_, h, z)),
            O === null ? (A = _) : (O.sibling = _),
            (O = _)));
      return (
        e &&
          T.forEach(function (Ke) {
            return t(y, Ke);
          }),
        G && Et(y, z),
        A
      );
    }
    function E(y, h, b, v) {
      if (
        (typeof b == "object" &&
          b !== null &&
          b.type === Xl &&
          b.key === null &&
          (b = b.props.children),
        typeof b == "object" && b !== null)
      ) {
        switch (b.$$typeof) {
          case Za:
            e: {
              for (var A = b.key; h !== null; ) {
                if (h.key === A) {
                  if (((A = b.type), A === Xl)) {
                    if (h.tag === 7) {
                      (l(y, h.sibling),
                        (v = a(h, b.props.children)),
                        (v.return = y),
                        (y = v));
                      break e;
                    }
                  } else if (
                    h.elementType === A ||
                    (typeof A == "object" &&
                      A !== null &&
                      A.$$typeof === Yt &&
                      jl(A) === h.type)
                  ) {
                    (l(y, h.sibling),
                      (v = a(h, b.props)),
                      ia(v, b),
                      (v.return = y),
                      (y = v));
                    break e;
                  }
                  l(y, h);
                  break;
                } else t(y, h);
                h = h.sibling;
              }
              b.type === Xl
                ? ((v = vl(b.props.children, y.mode, v, b.key)),
                  (v.return = y),
                  (y = v))
                : ((v = mu(b.type, b.key, b.props, null, y.mode, v)),
                  ia(v, b),
                  (v.return = y),
                  (y = v));
            }
            return i(y);
          case Hn:
            e: {
              for (A = b.key; h !== null; ) {
                if (h.key === A)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === b.containerInfo &&
                    h.stateNode.implementation === b.implementation
                  ) {
                    (l(y, h.sibling),
                      (v = a(h, b.children || [])),
                      (v.return = y),
                      (y = v));
                    break e;
                  } else {
                    l(y, h);
                    break;
                  }
                else t(y, h);
                h = h.sibling;
              }
              ((v = Es(b, y.mode, v)), (v.return = y), (y = v));
            }
            return i(y);
          case Yt:
            return ((b = jl(b)), E(y, h, b, v));
        }
        if (Yn(b)) return g(y, h, b, v);
        if (qn(b)) {
          if (((A = qn(b)), typeof A != "function")) throw Error(N(150));
          return ((b = A.call(b)), S(y, h, b, v));
        }
        if (typeof b.then == "function") return E(y, h, vu(b), v);
        if (b.$$typeof === gt) return E(y, h, pu(y, b), v);
        Su(y, b);
      }
      return (typeof b == "string" && b !== "") ||
        typeof b == "number" ||
        typeof b == "bigint"
        ? ((b = "" + b),
          h !== null && h.tag === 6
            ? (l(y, h.sibling), (v = a(h, b)), (v.return = y), (y = v))
            : (l(y, h), (v = Ss(b, y.mode, v)), (v.return = y), (y = v)),
          i(y))
        : l(y, h);
    }
    return function (y, h, b, v) {
      try {
        ua = 0;
        var A = E(y, h, b, v);
        return ((mn = null), A);
      } catch (T) {
        if (T === dn || T === bu) throw T;
        var O = Le(29, T, null, y.mode);
        return ((O.lanes = v), (O.return = y), O);
      } finally {
      }
    };
  }
  var _l = hr(!0),
    yr = hr(!1),
    kt = !1;
  function Us(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ws(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function $t(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ft(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), Q & 2)) {
      var a = n.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (n.pending = t),
        (t = du(e)),
        Io(e, null, l),
        t
      );
    }
    return (ru(e, n, t, l), du(e));
  }
  function sa(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var n = t.lanes;
      ((n &= e.pendingLanes), (l |= n), (t.lanes = l), uo(e, l));
    }
  }
  function Bs(e, t) {
    var l = e.updateQueue,
      n = e.alternate;
    if (n !== null && ((n = n.updateQueue), l === n)) {
      var a = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (u === null ? (a = u = i) : (u = u.next = i), (l = l.next));
        } while (l !== null);
        u === null ? (a = u = t) : (u = u.next = t);
      } else a = u = t;
      ((l = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: u,
        shared: n.shared,
        callbacks: n.callbacks,
      }),
        (e.updateQueue = l));
      return;
    }
    ((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t));
  }
  var Hs = !1;
  function ca() {
    if (Hs) {
      var e = rn;
      if (e !== null) throw e;
    }
  }
  function fa(e, t, l, n) {
    Hs = !1;
    var a = e.updateQueue;
    kt = !1;
    var u = a.firstBaseUpdate,
      i = a.lastBaseUpdate,
      s = a.shared.pending;
    if (s !== null) {
      a.shared.pending = null;
      var c = s,
        o = c.next;
      ((c.next = null), i === null ? (u = o) : (i.next = o), (i = c));
      var r = e.alternate;
      r !== null &&
        ((r = r.updateQueue),
        (s = r.lastBaseUpdate),
        s !== i &&
          (s === null ? (r.firstBaseUpdate = o) : (s.next = o),
          (r.lastBaseUpdate = c)));
    }
    if (u !== null) {
      var p = a.baseState;
      ((i = 0), (r = o = c = null), (s = u));
      do {
        var d = s.lane & -536870913,
          m = d !== s.lane;
        if (m ? (L & d) === d : (n & d) === d) {
          (d !== 0 && d === on && (Hs = !0),
            r !== null &&
              (r = r.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var g = e,
              S = s;
            d = t;
            var E = l;
            switch (S.tag) {
              case 1:
                if (((g = S.payload), typeof g == "function")) {
                  p = g.call(E, p, d);
                  break e;
                }
                p = g;
                break e;
              case 3:
                g.flags = (g.flags & -65537) | 128;
              case 0:
                if (
                  ((g = S.payload),
                  (d = typeof g == "function" ? g.call(E, p, d) : g),
                  d == null)
                )
                  break e;
                p = W({}, p, d);
                break e;
              case 2:
                kt = !0;
            }
          }
          ((d = s.callback),
            d !== null &&
              ((e.flags |= 64),
              m && (e.flags |= 8192),
              (m = a.callbacks),
              m === null ? (a.callbacks = [d]) : m.push(d)));
        } else
          ((m = {
            lane: d,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            r === null ? ((o = r = m), (c = p)) : (r = r.next = m),
            (i |= d));
        if (((s = s.next), s === null)) {
          if (((s = a.shared.pending), s === null)) break;
          ((m = s),
            (s = m.next),
            (m.next = null),
            (a.lastBaseUpdate = m),
            (a.shared.pending = null));
        }
      } while (!0);
      (r === null && (c = p),
        (a.baseState = c),
        (a.firstBaseUpdate = o),
        (a.lastBaseUpdate = r),
        u === null && (a.shared.lanes = 0),
        (tl |= i),
        (e.lanes = i),
        (e.memoizedState = p));
    }
  }
  function pr(e, t) {
    if (typeof e != "function") throw Error(N(191, e));
    e.call(t);
  }
  function gr(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) pr(l[e], t);
  }
  var hn = rt(null),
    Eu = rt(0);
  function br(e, t) {
    ((e = Mt), $(Eu, e), $(hn, t), (Mt = e | t.baseLanes));
  }
  function qs() {
    ($(Eu, Mt), $(hn, hn.current));
  }
  function Ys() {
    ((Mt = Eu.current), he(hn), he(Eu));
  }
  var Ge = rt(null),
    tt = null;
  function Wt(e) {
    var t = e.alternate;
    ($(ue, ue.current & 1),
      $(Ge, e),
      tt === null &&
        (t === null || hn.current !== null || t.memoizedState !== null) &&
        (tt = e));
  }
  function Ls(e) {
    ($(ue, ue.current), $(Ge, e), tt === null && (tt = e));
  }
  function xr(e) {
    e.tag === 22
      ? ($(ue, ue.current), $(Ge, e), tt === null && (tt = e))
      : It();
  }
  function It() {
    ($(ue, ue.current), $(Ge, Ge.current));
  }
  function Xe(e) {
    (he(Ge), tt === e && (tt = null), he(ue));
  }
  var ue = rt(0);
  function Nu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || Kc(l) || Jc(l)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var jt = 0,
    B = null,
    K = null,
    ce = null,
    Tu = !1,
    yn = !1,
    zl = !1,
    ju = 0,
    oa = 0,
    pn = null,
    Hy = 0;
  function ne() {
    throw Error(N(321));
  }
  function Gs(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Ye(e[l], t[l])) return !1;
    return !0;
  }
  function Xs(e, t, l, n, a, u) {
    return (
      (jt = u),
      (B = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (D.H = e === null || e.memoizedState === null ? ld : nc),
      (zl = !1),
      (u = l(n, a)),
      (zl = !1),
      yn && (u = Sr(t, l, n, a)),
      vr(e),
      u
    );
  }
  function vr(e) {
    D.H = ma;
    var t = K !== null && K.next !== null;
    if (((jt = 0), (ce = K = B = null), (Tu = !1), (oa = 0), (pn = null), t))
      throw Error(N(300));
    e === null ||
      fe ||
      ((e = e.dependencies), e !== null && yu(e) && (fe = !0));
  }
  function Sr(e, t, l, n) {
    B = e;
    var a = 0;
    do {
      if ((yn && (pn = null), (oa = 0), (yn = !1), 25 <= a))
        throw Error(N(301));
      if (((a += 1), (ce = K = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((D.H = nd), (u = t(l, n)));
    } while (yn);
    return u;
  }
  function qy() {
    var e = D.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? ra(t) : t),
      (e = e.useState()[0]),
      (K !== null ? K.memoizedState : null) !== e && (B.flags |= 1024),
      t
    );
  }
  function Qs() {
    var e = ju !== 0;
    return ((ju = 0), e);
  }
  function Zs(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function Vs(e) {
    if (Tu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Tu = !1;
    }
    ((jt = 0), (ce = K = B = null), (yn = !1), (oa = ju = 0), (pn = null));
  }
  function Ae() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (ce === null ? (B.memoizedState = ce = e) : (ce = ce.next = e), ce);
  }
  function ie() {
    if (K === null) {
      var e = B.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = K.next;
    var t = ce === null ? B.memoizedState : ce.next;
    if (t !== null) ((ce = t), (K = e));
    else {
      if (e === null)
        throw B.alternate === null ? Error(N(467)) : Error(N(310));
      ((K = e),
        (e = {
          memoizedState: K.memoizedState,
          baseState: K.baseState,
          baseQueue: K.baseQueue,
          queue: K.queue,
          next: null,
        }),
        ce === null ? (B.memoizedState = ce = e) : (ce = ce.next = e));
    }
    return ce;
  }
  function Au() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ra(e) {
    var t = oa;
    return (
      (oa += 1),
      pn === null && (pn = []),
      (e = rr(pn, e, t)),
      (t = B),
      (ce === null ? t.memoizedState : ce.next) === null &&
        ((t = t.alternate),
        (D.H = t === null || t.memoizedState === null ? ld : nc)),
      e
    );
  }
  function _u(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ra(e);
      if (e.$$typeof === gt) return xe(e);
    }
    throw Error(N(438, String(e)));
  }
  function Ks(e) {
    var t = null,
      l = B.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var n = B.alternate;
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (t = {
              data: n.data.map(function (a) {
                return a.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = Au()), (B.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++) l[n] = Nh;
    return (t.index++, l);
  }
  function At(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function zu(e) {
    var t = ie();
    return Js(t, K, e);
  }
  function Js(e, t, l) {
    var n = e.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = l;
    var a = e.baseQueue,
      u = n.pending;
    if (u !== null) {
      if (a !== null) {
        var i = a.next;
        ((a.next = u.next), (u.next = i));
      }
      ((t.baseQueue = a = u), (n.pending = null));
    }
    if (((u = e.baseState), a === null)) e.memoizedState = u;
    else {
      t = a.next;
      var s = (i = null),
        c = null,
        o = t,
        r = !1;
      do {
        var p = o.lane & -536870913;
        if (p !== o.lane ? (L & p) === p : (jt & p) === p) {
          var d = o.revertLane;
          if (d === 0)
            (c !== null &&
              (c = c.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: o.action,
                  hasEagerState: o.hasEagerState,
                  eagerState: o.eagerState,
                  next: null,
                }),
              p === on && (r = !0));
          else if ((jt & d) === d) {
            ((o = o.next), d === on && (r = !0));
            continue;
          } else
            ((p = {
              lane: 0,
              revertLane: o.revertLane,
              gesture: null,
              action: o.action,
              hasEagerState: o.hasEagerState,
              eagerState: o.eagerState,
              next: null,
            }),
              c === null ? ((s = c = p), (i = u)) : (c = c.next = p),
              (B.lanes |= d),
              (tl |= d));
          ((p = o.action),
            zl && l(u, p),
            (u = o.hasEagerState ? o.eagerState : l(u, p)));
        } else
          ((d = {
            lane: p,
            revertLane: o.revertLane,
            gesture: o.gesture,
            action: o.action,
            hasEagerState: o.hasEagerState,
            eagerState: o.eagerState,
            next: null,
          }),
            c === null ? ((s = c = d), (i = u)) : (c = c.next = d),
            (B.lanes |= p),
            (tl |= p));
        o = o.next;
      } while (o !== null && o !== t);
      if (
        (c === null ? (i = u) : (c.next = s),
        !Ye(u, e.memoizedState) && ((fe = !0), r && ((l = rn), l !== null)))
      )
        throw l;
      ((e.memoizedState = u),
        (e.baseState = i),
        (e.baseQueue = c),
        (n.lastRenderedState = u));
    }
    return (a === null && (n.lanes = 0), [e.memoizedState, n.dispatch]);
  }
  function ks(e) {
    var t = ie(),
      l = t.queue;
    if (l === null) throw Error(N(311));
    l.lastRenderedReducer = e;
    var n = l.dispatch,
      a = l.pending,
      u = t.memoizedState;
    if (a !== null) {
      l.pending = null;
      var i = (a = a.next);
      do ((u = e(u, i.action)), (i = i.next));
      while (i !== a);
      (Ye(u, t.memoizedState) || (fe = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, n];
  }
  function Er(e, t, l) {
    var n = B,
      a = ie(),
      u = G;
    if (u) {
      if (l === void 0) throw Error(N(407));
      l = l();
    } else l = t();
    var i = !Ye((K || a).memoizedState, l);
    if (
      (i && ((a.memoizedState = l), (fe = !0)),
      (a = a.queue),
      Ws(jr.bind(null, n, a, e), [e]),
      a.getSnapshot !== t || i || (ce !== null && ce.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        gn(9, { destroy: void 0 }, Tr.bind(null, n, a, l, t), null),
        k === null)
      )
        throw Error(N(349));
      u || jt & 127 || Nr(n, t, l);
    }
    return l;
  }
  function Nr(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = B.updateQueue),
      t === null
        ? ((t = Au()), (B.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
  }
  function Tr(e, t, l, n) {
    ((t.value = l), (t.getSnapshot = n), Ar(t) && _r(e));
  }
  function jr(e, t, l) {
    return l(function () {
      Ar(t) && _r(e);
    });
  }
  function Ar(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Ye(e, l);
    } catch {
      return !0;
    }
  }
  function _r(e) {
    var t = xl(e, 2);
    t !== null && Me(t, e, 2);
  }
  function $s(e) {
    var t = Ae();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), zl)) {
        Gt(!0);
        try {
          l();
        } finally {
          Gt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: At,
        lastRenderedState: e,
      }),
      t
    );
  }
  function zr(e, t, l, n) {
    return ((e.baseState = l), Js(e, K, typeof n == "function" ? n : At));
  }
  function Yy(e, t, l, n, a) {
    if (Du(e)) throw Error(N(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: a,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      (D.T !== null ? l(!0) : (u.isTransition = !1),
        n(u),
        (l = t.pending),
        l === null
          ? ((u.next = t.pending = u), Or(t, u))
          : ((u.next = l.next), (t.pending = l.next = u)));
    }
  }
  function Or(e, t) {
    var l = t.action,
      n = t.payload,
      a = e.state;
    if (t.isTransition) {
      var u = D.T,
        i = {};
      D.T = i;
      try {
        var s = l(a, n),
          c = D.S;
        (c !== null && c(i, s), Rr(e, t, s));
      } catch (o) {
        Fs(e, t, o);
      } finally {
        (u !== null && i.types !== null && (u.types = i.types), (D.T = u));
      }
    } else
      try {
        ((u = l(a, n)), Rr(e, t, u));
      } catch (o) {
        Fs(e, t, o);
      }
  }
  function Rr(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (n) {
            Dr(e, t, n);
          },
          function (n) {
            return Fs(e, t, n);
          },
        )
      : Dr(e, t, l);
  }
  function Dr(e, t, l) {
    ((t.status = "fulfilled"),
      (t.value = l),
      Cr(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), Or(e, l))));
  }
  function Fs(e, t, l) {
    var n = e.pending;
    if (((e.pending = null), n !== null)) {
      n = n.next;
      do ((t.status = "rejected"), (t.reason = l), Cr(t), (t = t.next));
      while (t !== n);
    }
    e.action = null;
  }
  function Cr(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Mr(e, t) {
    return t;
  }
  function Ur(e, t) {
    if (G) {
      var l = k.formState;
      if (l !== null) {
        e: {
          var n = B;
          if (G) {
            if (I) {
              t: {
                for (var a = I, u = et; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break t;
                  }
                  if (((a = lt(a.nextSibling)), a === null)) {
                    a = null;
                    break t;
                  }
                }
                ((u = a.data), (a = u === "F!" || u === "F" ? a : null));
              }
              if (a) {
                ((I = lt(a.nextSibling)), (n = a.data === "F!"));
                break e;
              }
            }
            Kt(n);
          }
          n = !1;
        }
        n && (t = l[0]);
      }
    }
    return (
      (l = Ae()),
      (l.memoizedState = l.baseState = t),
      (n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mr,
        lastRenderedState: t,
      }),
      (l.queue = n),
      (l = Pr.bind(null, B, n)),
      (n.dispatch = l),
      (n = $s(!1)),
      (u = lc.bind(null, B, !1, n.queue)),
      (n = Ae()),
      (a = { state: t, dispatch: null, action: e, pending: null }),
      (n.queue = a),
      (l = Yy.bind(null, B, a, u, l)),
      (a.dispatch = l),
      (n.memoizedState = e),
      [t, l, !1]
    );
  }
  function wr(e) {
    var t = ie();
    return Br(t, K, e);
  }
  function Br(e, t, l) {
    if (
      ((t = Js(e, t, Mr)[0]),
      (e = zu(At)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var n = ra(t);
      } catch (i) {
        throw i === dn ? bu : i;
      }
    else n = t;
    t = ie();
    var a = t.queue,
      u = a.dispatch;
    return (
      l !== t.memoizedState &&
        ((B.flags |= 2048),
        gn(9, { destroy: void 0 }, Ly.bind(null, a, l), null)),
      [n, u, e]
    );
  }
  function Ly(e, t) {
    e.action = t;
  }
  function Hr(e) {
    var t = ie(),
      l = K;
    if (l !== null) return Br(t, l, e);
    (ie(), (t = t.memoizedState), (l = ie()));
    var n = l.queue.dispatch;
    return ((l.memoizedState = e), [t, n, !1]);
  }
  function gn(e, t, l, n) {
    return (
      (e = { tag: e, create: l, deps: n, inst: t, next: null }),
      (t = B.updateQueue),
      t === null && ((t = Au()), (B.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((n = l.next), (l.next = e), (e.next = n), (t.lastEffect = e)),
      e
    );
  }
  function qr() {
    return ie().memoizedState;
  }
  function Ou(e, t, l, n) {
    var a = Ae();
    ((B.flags |= e),
      (a.memoizedState = gn(
        1 | t,
        { destroy: void 0 },
        l,
        n === void 0 ? null : n,
      )));
  }
  function Ru(e, t, l, n) {
    var a = ie();
    n = n === void 0 ? null : n;
    var u = a.memoizedState.inst;
    K !== null && n !== null && Gs(n, K.memoizedState.deps)
      ? (a.memoizedState = gn(t, u, l, n))
      : ((B.flags |= e), (a.memoizedState = gn(1 | t, u, l, n)));
  }
  function Yr(e, t) {
    Ou(8390656, 8, e, t);
  }
  function Ws(e, t) {
    Ru(2048, 8, e, t);
  }
  function Gy(e) {
    B.flags |= 4;
    var t = B.updateQueue;
    if (t === null) ((t = Au()), (B.updateQueue = t), (t.events = [e]));
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function Lr(e) {
    var t = ie().memoizedState;
    return (
      Gy({ ref: t, nextImpl: e }),
      function () {
        if (Q & 2) throw Error(N(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Gr(e, t) {
    return Ru(4, 2, e, t);
  }
  function Xr(e, t) {
    return Ru(4, 4, e, t);
  }
  function Qr(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Zr(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), Ru(4, 4, Qr.bind(null, t, e), l));
  }
  function Is() {}
  function Vr(e, t) {
    var l = ie();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && Gs(t, n[1]) ? n[0] : ((l.memoizedState = [e, t]), e);
  }
  function Kr(e, t) {
    var l = ie();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && Gs(t, n[1])) return n[0];
    if (((n = e()), zl)) {
      Gt(!0);
      try {
        e();
      } finally {
        Gt(!1);
      }
    }
    return ((l.memoizedState = [n, t]), n);
  }
  function Ps(e, t, l) {
    return l === void 0 || (jt & 1073741824 && !(L & 261930))
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = Jd()), (B.lanes |= e), (tl |= e), l);
  }
  function Jr(e, t, l, n) {
    return Ye(l, t)
      ? l
      : hn.current !== null
        ? ((e = Ps(e, l, n)), Ye(e, t) || (fe = !0), e)
        : !(jt & 42) || (jt & 1073741824 && !(L & 261930))
          ? ((fe = !0), (e.memoizedState = l))
          : ((e = Jd()), (B.lanes |= e), (tl |= e), t);
  }
  function kr(e, t, l, n, a) {
    var u = X.p;
    X.p = u !== 0 && 8 > u ? u : 8;
    var i = D.T,
      s = {};
    ((D.T = s), lc(e, !1, t, l));
    try {
      var c = a(),
        o = D.S;
      if (
        (o !== null && o(s, c),
        c !== null && typeof c == "object" && typeof c.then == "function")
      ) {
        var r = By(c, n);
        da(e, t, r, Ve(e));
      } else da(e, t, n, Ve(e));
    } catch (p) {
      da(e, t, { then: function () {}, status: "rejected", reason: p }, Ve());
    } finally {
      ((X.p = u),
        i !== null && s.types !== null && (i.types = s.types),
        (D.T = i));
    }
  }
  function Xy() {}
  function ec(e, t, l, n) {
    if (e.tag !== 5) throw Error(N(476));
    var a = $r(e).queue;
    kr(
      e,
      a,
      t,
      dl,
      l === null
        ? Xy
        : function () {
            return (Fr(e), l(n));
          },
    );
  }
  function $r(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: dl,
      baseState: dl,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: At,
        lastRenderedState: dl,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: At,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Fr(e) {
    var t = $r(e);
    (t.next === null && (t = e.alternate.memoizedState),
      da(e, t.next.queue, {}, Ve()));
  }
  function tc() {
    return xe(Oa);
  }
  function Wr() {
    return ie().memoizedState;
  }
  function Ir() {
    return ie().memoizedState;
  }
  function Qy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Ve();
          e = $t(l);
          var n = Ft(t, e, l);
          (n !== null && (Me(n, t, l), sa(n, t, l)),
            (t = { cache: Rs() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Zy(e, t, l) {
    var n = Ve();
    ((l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Du(e)
        ? ed(t, l)
        : ((l = xs(e, t, l, n)), l !== null && (Me(l, e, n), td(l, t, n))));
  }
  function Pr(e, t, l) {
    var n = Ve();
    da(e, t, l, n);
  }
  function da(e, t, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Du(e)) ed(t, a);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var i = t.lastRenderedState,
            s = u(i, l);
          if (((a.hasEagerState = !0), (a.eagerState = s), Ye(s, i)))
            return (ru(e, t, a, 0), k === null && ou(), !1);
        } catch {
        } finally {
        }
      if (((l = xs(e, t, a, n)), l !== null))
        return (Me(l, e, n), td(l, t, n), !0);
    }
    return !1;
  }
  function lc(e, t, l, n) {
    if (
      ((n = {
        lane: 2,
        revertLane: Uc(),
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Du(e))
    ) {
      if (t) throw Error(N(479));
    } else ((t = xs(e, l, n, 2)), t !== null && Me(t, e, 2));
  }
  function Du(e) {
    var t = e.alternate;
    return e === B || (t !== null && t === B);
  }
  function ed(e, t) {
    yn = Tu = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t));
  }
  function td(e, t, l) {
    if (l & 4194048) {
      var n = t.lanes;
      ((n &= e.pendingLanes), (l |= n), (t.lanes = l), uo(e, l));
    }
  }
  var ma = {
    readContext: xe,
    use: _u,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useLayoutEffect: ne,
    useInsertionEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useSyncExternalStore: ne,
    useId: ne,
    useHostTransitionStatus: ne,
    useFormState: ne,
    useActionState: ne,
    useOptimistic: ne,
    useMemoCache: ne,
    useCacheRefresh: ne,
  };
  ma.useEffectEvent = ne;
  var ld = {
      readContext: xe,
      use: _u,
      useCallback: function (e, t) {
        return ((Ae().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: xe,
      useEffect: Yr,
      useImperativeHandle: function (e, t, l) {
        ((l = l != null ? l.concat([e]) : null),
          Ou(4194308, 4, Qr.bind(null, t, e), l));
      },
      useLayoutEffect: function (e, t) {
        return Ou(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Ou(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = Ae();
        t = t === void 0 ? null : t;
        var n = e();
        if (zl) {
          Gt(!0);
          try {
            e();
          } finally {
            Gt(!1);
          }
        }
        return ((l.memoizedState = [n, t]), n);
      },
      useReducer: function (e, t, l) {
        var n = Ae();
        if (l !== void 0) {
          var a = l(t);
          if (zl) {
            Gt(!0);
            try {
              l(t);
            } finally {
              Gt(!1);
            }
          }
        } else a = t;
        return (
          (n.memoizedState = n.baseState = a),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: a,
          }),
          (n.queue = e),
          (e = e.dispatch = Zy.bind(null, B, e)),
          [n.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ae();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = $s(e);
        var t = e.queue,
          l = Pr.bind(null, B, t);
        return ((t.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: Is,
      useDeferredValue: function (e, t) {
        var l = Ae();
        return Ps(l, e, t);
      },
      useTransition: function () {
        var e = $s(!1);
        return (
          (e = kr.bind(null, B, e.queue, !0, !1)),
          (Ae().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var n = B,
          a = Ae();
        if (G) {
          if (l === void 0) throw Error(N(407));
          l = l();
        } else {
          if (((l = t()), k === null)) throw Error(N(349));
          L & 127 || Nr(n, t, l);
        }
        a.memoizedState = l;
        var u = { value: l, getSnapshot: t };
        return (
          (a.queue = u),
          Yr(jr.bind(null, n, u, e), [e]),
          (n.flags |= 2048),
          gn(9, { destroy: void 0 }, Tr.bind(null, n, u, l, t), null),
          l
        );
      },
      useId: function () {
        var e = Ae(),
          t = k.identifierPrefix;
        if (G) {
          var l = ht,
            n = mt;
          ((l = (n & ~(1 << (32 - qe(n) - 1))).toString(32) + l),
            (t = "_" + t + "R_" + l),
            (l = ju++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "_"));
        } else ((l = Hy++), (t = "_" + t + "r_" + l.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: tc,
      useFormState: Ur,
      useActionState: Ur,
      useOptimistic: function (e) {
        var t = Ae();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = lc.bind(null, B, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Ks,
      useCacheRefresh: function () {
        return (Ae().memoizedState = Qy.bind(null, B));
      },
      useEffectEvent: function (e) {
        var t = Ae(),
          l = { impl: e };
        return (
          (t.memoizedState = l),
          function () {
            if (Q & 2) throw Error(N(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    nc = {
      readContext: xe,
      use: _u,
      useCallback: Vr,
      useContext: xe,
      useEffect: Ws,
      useImperativeHandle: Zr,
      useInsertionEffect: Gr,
      useLayoutEffect: Xr,
      useMemo: Kr,
      useReducer: zu,
      useRef: qr,
      useState: function () {
        return zu(At);
      },
      useDebugValue: Is,
      useDeferredValue: function (e, t) {
        var l = ie();
        return Jr(l, K.memoizedState, e, t);
      },
      useTransition: function () {
        var e = zu(At)[0],
          t = ie().memoizedState;
        return [typeof e == "boolean" ? e : ra(e), t];
      },
      useSyncExternalStore: Er,
      useId: Wr,
      useHostTransitionStatus: tc,
      useFormState: wr,
      useActionState: wr,
      useOptimistic: function (e, t) {
        var l = ie();
        return zr(l, K, e, t);
      },
      useMemoCache: Ks,
      useCacheRefresh: Ir,
    };
  nc.useEffectEvent = Lr;
  var nd = {
    readContext: xe,
    use: _u,
    useCallback: Vr,
    useContext: xe,
    useEffect: Ws,
    useImperativeHandle: Zr,
    useInsertionEffect: Gr,
    useLayoutEffect: Xr,
    useMemo: Kr,
    useReducer: ks,
    useRef: qr,
    useState: function () {
      return ks(At);
    },
    useDebugValue: Is,
    useDeferredValue: function (e, t) {
      var l = ie();
      return K === null ? Ps(l, e, t) : Jr(l, K.memoizedState, e, t);
    },
    useTransition: function () {
      var e = ks(At)[0],
        t = ie().memoizedState;
      return [typeof e == "boolean" ? e : ra(e), t];
    },
    useSyncExternalStore: Er,
    useId: Wr,
    useHostTransitionStatus: tc,
    useFormState: Hr,
    useActionState: Hr,
    useOptimistic: function (e, t) {
      var l = ie();
      return K !== null
        ? zr(l, K, e, t)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    },
    useMemoCache: Ks,
    useCacheRefresh: Ir,
  };
  nd.useEffectEvent = Lr;
  function ac(e, t, l, n) {
    ((t = e.memoizedState),
      (l = l(n, t)),
      (l = l == null ? t : W({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var uc = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var n = Ve(),
        a = $t(n);
      ((a.payload = t),
        l != null && (a.callback = l),
        (t = Ft(e, a, n)),
        t !== null && (Me(t, e, n), sa(t, e, n)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var n = Ve(),
        a = $t(n);
      ((a.tag = 1),
        (a.payload = t),
        l != null && (a.callback = l),
        (t = Ft(e, a, n)),
        t !== null && (Me(t, e, n), sa(t, e, n)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = Ve(),
        n = $t(l);
      ((n.tag = 2),
        t != null && (n.callback = t),
        (t = Ft(e, n, l)),
        t !== null && (Me(t, e, l), sa(t, e, l)));
    },
  };
  function ad(e, t, l, n, a, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(n, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Pn(l, n) || !Pn(a, u)
          : !0
    );
  }
  function ud(e, t, l, n) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, n),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, n),
      t.state !== e && uc.enqueueReplaceState(t, t.state, null));
  }
  function Ol(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var n in t) n !== "ref" && (l[n] = t[n]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = W({}, l));
      for (var a in e) l[a] === void 0 && (l[a] = e[a]);
    }
    return l;
  }
  function id(e) {
    fu(e);
  }
  function sd(e) {
    console.error(e);
  }
  function cd(e) {
    fu(e);
  }
  function Cu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function fd(e, t, l) {
    try {
      var n = e.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function ic(e, t, l) {
    return (
      (l = $t(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Cu(e, t);
      }),
      l
    );
  }
  function od(e) {
    return ((e = $t(e)), (e.tag = 3), e);
  }
  function rd(e, t, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = n.value;
      ((e.payload = function () {
        return a(u);
      }),
        (e.callback = function () {
          fd(t, l, n);
        }));
    }
    var i = l.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (e.callback = function () {
        (fd(t, l, n),
          typeof a != "function" &&
            (ll === null ? (ll = new Set([this])) : ll.add(this)));
        var s = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function Vy(e, t, l, n, a) {
    if (
      ((l.flags |= 32768),
      n !== null && typeof n == "object" && typeof n.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && fn(t, l, a, !0),
        (l = Ge.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              tt === null ? Zu() : l.alternate === null && ae === 0 && (ae = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = a),
              n === xu
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([n])) : t.add(n),
                  Dc(e, n, a)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              n === xu
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([n]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([n])) : l.add(n)),
                  Dc(e, n, a)),
              !1
            );
        }
        throw Error(N(435, l.tag));
      }
      return (Dc(e, n, a), Zu(), !1);
    }
    if (G)
      return (
        (t = Ge.current),
        t !== null
          ? (!(t.flags & 65536) && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = a),
            n !== js && ((e = Error(N(422), { cause: n })), la(We(e, l))))
          : (n !== js && ((t = Error(N(423), { cause: n })), la(We(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (a &= -a),
            (e.lanes |= a),
            (n = We(n, l)),
            (a = ic(e.stateNode, n, a)),
            Bs(e, a),
            ae !== 4 && (ae = 2)),
        !1
      );
    var u = Error(N(520), { cause: n });
    if (
      ((u = We(u, l)),
      Sa === null ? (Sa = [u]) : Sa.push(u),
      ae !== 4 && (ae = 2),
      t === null)
    )
      return !0;
    ((n = We(n, l)), (l = t));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = a & -a),
            (l.lanes |= e),
            (e = ic(l.stateNode, n, e)),
            Bs(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (ll === null || !ll.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (a &= -a),
              (l.lanes |= a),
              (a = od(a)),
              rd(a, e, l, n),
              Bs(l, a),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var sc = Error(N(461)),
    fe = !1;
  function ve(e, t, l, n) {
    t.child = e === null ? yr(t, null, l, n) : _l(t, e.child, l, n);
  }
  function dd(e, t, l, n, a) {
    l = l.render;
    var u = t.ref;
    if ("ref" in n) {
      var i = {};
      for (var s in n) s !== "ref" && (i[s] = n[s]);
    } else i = n;
    return (
      Nl(t),
      (n = Xs(e, t, l, i, u, a)),
      (s = Qs()),
      e !== null && !fe
        ? (Zs(e, t, a), _t(e, t, a))
        : (G && s && Ns(t), (t.flags |= 1), ve(e, t, n, a), t.child)
    );
  }
  function md(e, t, l, n, a) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" &&
        !vs(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = u), hd(e, t, u, n, a))
        : ((e = mu(l.type, null, n, t, t.mode, a)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !yc(e, a))) {
      var i = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Pn), l(i, n) && e.ref === t.ref)
      )
        return _t(e, t, a);
    }
    return (
      (t.flags |= 1),
      (e = St(u, n)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function hd(e, t, l, n, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Pn(u, n) && e.ref === t.ref)
        if (((fe = !1), (t.pendingProps = n = u), yc(e, a)))
          e.flags & 131072 && (fe = !0);
        else return ((t.lanes = e.lanes), _t(e, t, a));
    }
    return cc(e, t, l, n, a);
  }
  function yd(e, t, l, n) {
    var a = n.children,
      u = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.mode === "hidden")
    ) {
      if (t.flags & 128) {
        if (((u = u !== null ? u.baseLanes | l : l), e !== null)) {
          for (n = t.child = e.child, a = 0; n !== null; )
            ((a = a | n.lanes | n.childLanes), (n = n.sibling));
          n = a & ~u;
        } else ((n = 0), (t.child = null));
        return pd(e, t, u, l, n);
      }
      if (l & 536870912)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && gu(t, u !== null ? u.cachePool : null),
          u !== null ? br(t, u) : qs(),
          xr(t));
      else
        return (
          (n = t.lanes = 536870912),
          pd(e, t, u !== null ? u.baseLanes | l : l, l, n)
        );
    } else
      u !== null
        ? (gu(t, u.cachePool), br(t, u), It(), (t.memoizedState = null))
        : (e !== null && gu(t, null), qs(), It());
    return (ve(e, t, a, l), t.child);
  }
  function ha(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function pd(e, t, l, n, a) {
    var u = Cs();
    return (
      (u = u === null ? null : { parent: se._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: l, cachePool: u }),
      e !== null && gu(t, null),
      qs(),
      xr(t),
      e !== null && fn(e, t, n, !0),
      (t.childLanes = a),
      null
    );
  }
  function Mu(e, t) {
    return (
      (t = wu({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function gd(e, t, l) {
    return (
      _l(t, e.child, null, l),
      (e = Mu(t, t.pendingProps)),
      (e.flags |= 2),
      Xe(t),
      (t.memoizedState = null),
      e
    );
  }
  function Ky(e, t, l) {
    var n = t.pendingProps,
      a = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (G) {
        if (n.mode === "hidden")
          return ((e = Mu(t, n)), (t.lanes = 536870912), ha(null, e));
        if (
          (Ls(t),
          (e = I)
            ? ((e = Om(e, et)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Zt !== null ? { id: mt, overflow: ht } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = er(e)),
                (l.return = t),
                (t.child = l),
                (be = t),
                (I = null)))
            : (e = null),
          e === null)
        )
          throw Kt(t);
        return ((t.lanes = 536870912), null);
      }
      return Mu(t, n);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((Ls(t), a))
        if (t.flags & 256) ((t.flags &= -257), (t = gd(e, t, l)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(N(558));
      else if (
        (fe || fn(e, t, l, !1), (a = (l & e.childLanes) !== 0), fe || a)
      ) {
        if (
          ((n = k),
          n !== null && ((i = io(n, l)), i !== 0 && i !== u.retryLane))
        )
          throw ((u.retryLane = i), xl(e, i), Me(n, e, i), sc);
        (Zu(), (t = gd(e, t, l)));
      } else
        ((e = u.treeContext),
          (I = lt(i.nextSibling)),
          (be = t),
          (G = !0),
          (Vt = null),
          (et = !1),
          e !== null && nr(t, e),
          (t = Mu(t, n)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = St(e.child, { mode: n.mode, children: n.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Uu(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(N(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function cc(e, t, l, n, a) {
    return (
      Nl(t),
      (l = Xs(e, t, l, n, void 0, a)),
      (n = Qs()),
      e !== null && !fe
        ? (Zs(e, t, a), _t(e, t, a))
        : (G && n && Ns(t), (t.flags |= 1), ve(e, t, l, a), t.child)
    );
  }
  function bd(e, t, l, n, a, u) {
    return (
      Nl(t),
      (t.updateQueue = null),
      (l = Sr(t, n, l, a)),
      vr(e),
      (n = Qs()),
      e !== null && !fe
        ? (Zs(e, t, u), _t(e, t, u))
        : (G && n && Ns(t), (t.flags |= 1), ve(e, t, l, u), t.child)
    );
  }
  function xd(e, t, l, n, a) {
    if ((Nl(t), t.stateNode === null)) {
      var u = an,
        i = l.contextType;
      (typeof i == "object" && i !== null && (u = xe(i)),
        (u = new l(n, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = uc),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = n),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Us(t),
        (i = l.contextType),
        (u.context = typeof i == "object" && i !== null ? xe(i) : an),
        (u.state = t.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == "function" && (ac(t, l, i, n), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((i = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && uc.enqueueReplaceState(u, u.state, null),
          fa(t, n, u, a),
          ca(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (n = !0));
    } else if (e === null) {
      u = t.stateNode;
      var s = t.memoizedProps,
        c = Ol(l, s);
      u.props = c;
      var o = u.context,
        r = l.contextType;
      ((i = an), typeof r == "object" && r !== null && (i = xe(r)));
      var p = l.getDerivedStateFromProps;
      ((r =
        typeof p == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (s = t.pendingProps !== s),
        r ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((s || o !== i) && ud(t, u, n, i)),
        (kt = !1));
      var d = t.memoizedState;
      ((u.state = d),
        fa(t, n, u, a),
        ca(),
        (o = t.memoizedState),
        s || d !== o || kt
          ? (typeof p == "function" && (ac(t, l, p, n), (o = t.memoizedState)),
            (c = kt || ad(t, l, c, n, d, o, i))
              ? (r ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = n),
                (t.memoizedState = o)),
            (u.props = n),
            (u.state = o),
            (u.context = i),
            (n = c))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (n = !1)));
    } else {
      ((u = t.stateNode),
        ws(e, t),
        (i = t.memoizedProps),
        (r = Ol(l, i)),
        (u.props = r),
        (p = t.pendingProps),
        (d = u.context),
        (o = l.contextType),
        (c = an),
        typeof o == "object" && o !== null && (c = xe(o)),
        (s = l.getDerivedStateFromProps),
        (o =
          typeof s == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((i !== p || d !== c) && ud(t, u, n, c)),
        (kt = !1),
        (d = t.memoizedState),
        (u.state = d),
        fa(t, n, u, a),
        ca());
      var m = t.memoizedState;
      i !== p ||
      d !== m ||
      kt ||
      (e !== null && e.dependencies !== null && yu(e.dependencies))
        ? (typeof s == "function" && (ac(t, l, s, n), (m = t.memoizedState)),
          (r =
            kt ||
            ad(t, l, r, n, d, m, c) ||
            (e !== null && e.dependencies !== null && yu(e.dependencies)))
            ? (o ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(n, m, c),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(n, m, c)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = n),
              (t.memoizedState = m)),
          (u.props = n),
          (u.state = m),
          (u.context = c),
          (n = r))
        : (typeof u.componentDidUpdate != "function" ||
            (i === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 1024),
          (n = !1));
    }
    return (
      (u = n),
      Uu(e, t),
      (n = (t.flags & 128) !== 0),
      u || n
        ? ((u = t.stateNode),
          (l =
            n && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && n
            ? ((t.child = _l(t, e.child, null, a)),
              (t.child = _l(t, null, l, a)))
            : ve(e, t, l, a),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = _t(e, t, a)),
      e
    );
  }
  function vd(e, t, l, n) {
    return (Sl(), (t.flags |= 256), ve(e, t, l, n), t.child);
  }
  var fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function oc(e) {
    return { baseLanes: e, cachePool: fr() };
  }
  function rc(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= Ze), e);
  }
  function Sd(e, t, l) {
    var n = t.pendingProps,
      a = !1,
      u = (t.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          e !== null && e.memoizedState === null ? !1 : (ue.current & 2) !== 0),
      i && ((a = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (G) {
        if (
          (a ? Wt(t) : It(),
          (e = I)
            ? ((e = Om(e, et)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Zt !== null ? { id: mt, overflow: ht } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = er(e)),
                (l.return = t),
                (t.child = l),
                (be = t),
                (I = null)))
            : (e = null),
          e === null)
        )
          throw Kt(t);
        return (Jc(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var s = n.children;
      return (
        (n = n.fallback),
        a
          ? (It(),
            (a = t.mode),
            (s = wu({ mode: "hidden", children: s }, a)),
            (n = vl(n, a, l, null)),
            (s.return = t),
            (n.return = t),
            (s.sibling = n),
            (t.child = s),
            (n = t.child),
            (n.memoizedState = oc(l)),
            (n.childLanes = rc(e, i, l)),
            (t.memoizedState = fc),
            ha(null, n))
          : (Wt(t), dc(t, s))
      );
    }
    var c = e.memoizedState;
    if (c !== null && ((s = c.dehydrated), s !== null)) {
      if (u)
        t.flags & 256
          ? (Wt(t), (t.flags &= -257), (t = mc(e, t, l)))
          : t.memoizedState !== null
            ? (It(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (It(),
              (s = n.fallback),
              (a = t.mode),
              (n = wu({ mode: "visible", children: n.children }, a)),
              (s = vl(s, a, l, null)),
              (s.flags |= 2),
              (n.return = t),
              (s.return = t),
              (n.sibling = s),
              (t.child = n),
              _l(t, e.child, null, l),
              (n = t.child),
              (n.memoizedState = oc(l)),
              (n.childLanes = rc(e, i, l)),
              (t.memoizedState = fc),
              (t = ha(null, n)));
      else if ((Wt(t), Jc(s))) {
        if (((i = s.nextSibling && s.nextSibling.dataset), i)) var o = i.dgst;
        ((i = o),
          (n = Error(N(419))),
          (n.stack = ""),
          (n.digest = i),
          la({ value: n, source: null, stack: null }),
          (t = mc(e, t, l)));
      } else if (
        (fe || fn(e, t, l, !1), (i = (l & e.childLanes) !== 0), fe || i)
      ) {
        if (
          ((i = k),
          i !== null && ((n = io(i, l)), n !== 0 && n !== c.retryLane))
        )
          throw ((c.retryLane = n), xl(e, n), Me(i, e, n), sc);
        (Kc(s) || Zu(), (t = mc(e, t, l)));
      } else
        Kc(s)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = c.treeContext),
            (I = lt(s.nextSibling)),
            (be = t),
            (G = !0),
            (Vt = null),
            (et = !1),
            e !== null && nr(t, e),
            (t = dc(t, n.children)),
            (t.flags |= 4096));
      return t;
    }
    return a
      ? (It(),
        (s = n.fallback),
        (a = t.mode),
        (c = e.child),
        (o = c.sibling),
        (n = St(c, { mode: "hidden", children: n.children })),
        (n.subtreeFlags = c.subtreeFlags & 65011712),
        o !== null ? (s = St(o, s)) : ((s = vl(s, a, l, null)), (s.flags |= 2)),
        (s.return = t),
        (n.return = t),
        (n.sibling = s),
        (t.child = n),
        ha(null, n),
        (n = t.child),
        (s = e.child.memoizedState),
        s === null
          ? (s = oc(l))
          : ((a = s.cachePool),
            a !== null
              ? ((c = se._currentValue),
                (a = a.parent !== c ? { parent: c, pool: c } : a))
              : (a = fr()),
            (s = { baseLanes: s.baseLanes | l, cachePool: a })),
        (n.memoizedState = s),
        (n.childLanes = rc(e, i, l)),
        (t.memoizedState = fc),
        ha(e.child, n))
      : (Wt(t),
        (l = e.child),
        (e = l.sibling),
        (l = St(l, { mode: "visible", children: n.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function dc(e, t) {
    return (
      (t = wu({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function wu(e, t) {
    return ((e = Le(22, e, null, t)), (e.lanes = 0), e);
  }
  function mc(e, t, l) {
    return (
      _l(t, e.child, null, l),
      (e = dc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ed(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    (n !== null && (n.lanes |= t), zs(e.return, t, l));
  }
  function hc(e, t, l, n, a, u) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: l,
          tailMode: a,
          treeForkCount: u,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = n),
        (i.tail = l),
        (i.tailMode = a),
        (i.treeForkCount = u));
  }
  function Nd(e, t, l) {
    var n = t.pendingProps,
      a = n.revealOrder,
      u = n.tail;
    n = n.children;
    var i = ue.current,
      s = (i & 2) !== 0;
    if (
      (s ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      $(ue, i),
      ve(e, t, n, l),
      (n = G ? ta : 0),
      !s && e !== null && e.flags & 128)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ed(e, l, t);
        else if (e.tag === 19) Ed(e, l, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (a) {
      case "forwards":
        for (l = t.child, a = null; l !== null; )
          ((e = l.alternate),
            e !== null && Nu(e) === null && (a = l),
            (l = l.sibling));
        ((l = a),
          l === null
            ? ((a = t.child), (t.child = null))
            : ((a = l.sibling), (l.sibling = null)),
          hc(t, !1, a, l, u, n));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, a = t.child, t.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && Nu(e) === null)) {
            t.child = a;
            break;
          }
          ((e = a.sibling), (a.sibling = l), (l = a), (a = e));
        }
        hc(t, !0, l, null, u, n);
        break;
      case "together":
        hc(t, !1, null, null, void 0, n);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function _t(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (tl |= t.lanes),
      !(l & t.childLanes))
    )
      if (e !== null) {
        if ((fn(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(N(153));
    if (t.child !== null) {
      for (
        e = t.child, l = St(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (l = l.sibling = St(e, e.pendingProps)),
          (l.return = t));
      l.sibling = null;
    }
    return t.child;
  }
  function yc(e, t) {
    return e.lanes & t ? !0 : ((e = e.dependencies), !!(e !== null && yu(e)));
  }
  function Jy(e, t, l) {
    switch (t.tag) {
      case 3:
        (Ka(t, t.stateNode.containerInfo),
          Jt(t, se, e.memoizedState.cache),
          Sl());
        break;
      case 27:
      case 5:
        Yi(t);
        break;
      case 4:
        Ka(t, t.stateNode.containerInfo);
        break;
      case 10:
        Jt(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Ls(t), null);
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null
            ? (Wt(t), (t.flags |= 128), null)
            : l & t.child.childLanes
              ? Sd(e, t, l)
              : (Wt(t), (e = _t(e, t, l)), e !== null ? e.sibling : null);
        Wt(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (
          ((n = (l & t.childLanes) !== 0),
          n || (fn(e, t, l, !1), (n = (l & t.childLanes) !== 0)),
          a)
        ) {
          if (n) return Nd(e, t, l);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          $(ue, ue.current),
          n)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), yd(e, t, l, t.pendingProps));
      case 24:
        Jt(t, se, e.memoizedState.cache);
    }
    return _t(e, t, l);
  }
  function Td(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) fe = !0;
      else {
        if (!yc(e, l) && !(t.flags & 128)) return ((fe = !1), Jy(e, t, l));
        fe = !!(e.flags & 131072);
      }
    else ((fe = !1), G && t.flags & 1048576 && lr(t, ta, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (((e = jl(t.elementType)), (t.type = e), typeof e == "function"))
            vs(e)
              ? ((n = Ol(e, n)), (t.tag = 1), (t = xd(null, t, e, n, l)))
              : ((t.tag = 0), (t = cc(null, t, e, n, l)));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === Ci) {
                ((t.tag = 11), (t = dd(null, t, e, n, l)));
                break e;
              } else if (a === wi) {
                ((t.tag = 14), (t = md(null, t, e, n, l)));
                break e;
              }
            }
            throw ((t = Hi(e) || e), Error(N(306, t, "")));
          }
        }
        return t;
      case 0:
        return cc(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((n = t.type), (a = Ol(n, t.pendingProps)), xd(e, t, n, a, l));
      case 3:
        e: {
          if ((Ka(t, t.stateNode.containerInfo), e === null))
            throw Error(N(387));
          n = t.pendingProps;
          var u = t.memoizedState;
          ((a = u.element), ws(e, t), fa(t, n, null, l));
          var i = t.memoizedState;
          if (
            ((n = i.cache),
            Jt(t, se, n),
            n !== u.cache && Os(t, [se], l, !0),
            ca(),
            (n = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: n, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = vd(e, t, n, l);
              break e;
            } else if (n !== a) {
              ((a = We(Error(N(424)), t)), la(a), (t = vd(e, t, n, l)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                I = lt(e.firstChild),
                  be = t,
                  G = !0,
                  Vt = null,
                  et = !0,
                  l = yr(t, null, n, l),
                  t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
            }
          else {
            if ((Sl(), n === a)) {
              t = _t(e, t, l);
              break e;
            }
            ve(e, t, n, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Uu(e, t),
          e === null
            ? (l = wm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : G ||
                ((l = t.type),
                (e = t.pendingProps),
                (n = Wu(Lt.current).createElement(l)),
                (n[ge] = t),
                (n[_e] = e),
                Se(n, l, e),
                ye(n),
                (t.stateNode = n))
            : (t.memoizedState = wm(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Yi(t),
          e === null &&
            G &&
            ((n = t.stateNode = Cm(t.type, t.pendingProps, Lt.current)),
            (be = t),
            (et = !0),
            (a = I),
            il(t.type) ? ((kc = a), (I = lt(n.firstChild))) : (I = a)),
          ve(e, t, t.pendingProps.children, l),
          Uu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            G &&
            ((a = n = I) &&
              ((n = Np(n, t.type, t.pendingProps, et)),
              n !== null
                ? ((t.stateNode = n),
                  (be = t),
                  (I = lt(n.firstChild)),
                  (et = !1),
                  (a = !0))
                : (a = !1)),
            a || Kt(t)),
          Yi(t),
          (a = t.type),
          (u = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (n = u.children),
          Qc(a, u) ? (n = null) : i !== null && Qc(a, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((a = Xs(e, t, qy, null, null, l)), (Oa._currentValue = a)),
          Uu(e, t),
          ve(e, t, n, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            G &&
            ((e = l = I) &&
              ((l = Tp(l, t.pendingProps, et)),
              l !== null
                ? ((t.stateNode = l), (be = t), (I = null), (e = !0))
                : (e = !1)),
            e || Kt(t)),
          null
        );
      case 13:
        return Sd(e, t, l);
      case 4:
        return (
          Ka(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = _l(t, null, n, l)) : ve(e, t, n, l),
          t.child
        );
      case 11:
        return dd(e, t, t.type, t.pendingProps, l);
      case 7:
        return (ve(e, t, t.pendingProps, l), t.child);
      case 8:
        return (ve(e, t, t.pendingProps.children, l), t.child);
      case 12:
        return (ve(e, t, t.pendingProps.children, l), t.child);
      case 10:
        return (
          (n = t.pendingProps),
          Jt(t, t.type, n.value),
          ve(e, t, n.children, l),
          t.child
        );
      case 9:
        return (
          (a = t.type._context),
          (n = t.pendingProps.children),
          Nl(t),
          (a = xe(a)),
          (n = n(a)),
          (t.flags |= 1),
          ve(e, t, n, l),
          t.child
        );
      case 14:
        return md(e, t, t.type, t.pendingProps, l);
      case 15:
        return hd(e, t, t.type, t.pendingProps, l);
      case 19:
        return Nd(e, t, l);
      case 31:
        return Ky(e, t, l);
      case 22:
        return yd(e, t, l, t.pendingProps);
      case 24:
        return (
          Nl(t),
          (n = xe(se)),
          e === null
            ? ((a = Cs()),
              a === null &&
                ((a = k),
                (u = Rs()),
                (a.pooledCache = u),
                u.refCount++,
                u !== null && (a.pooledCacheLanes |= l),
                (a = u)),
              (t.memoizedState = { parent: n, cache: a }),
              Us(t),
              Jt(t, se, a))
            : (e.lanes & l && (ws(e, t), fa(t, null, null, l), ca()),
              (a = e.memoizedState),
              (u = t.memoizedState),
              a.parent !== n
                ? ((a = { parent: n, cache: n }),
                  (t.memoizedState = a),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = a),
                  Jt(t, se, n))
                : ((n = u.cache),
                  Jt(t, se, n),
                  n !== a.cache && Os(t, [se], l, !0))),
          ve(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(N(156, t.tag));
  }
  function zt(e) {
    e.flags |= 4;
  }
  function pc(e, t, l, n, a) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (a & 335544128) === a))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Wd()) e.flags |= 8192;
        else throw ((Al = xu), Ms);
    } else e.flags &= -16777217;
  }
  function jd(e, t) {
    if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Lm(t)))
      if (Wd()) e.flags |= 8192;
      else throw ((Al = xu), Ms);
  }
  function Bu(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? no() : 536870912), (e.lanes |= t), (Sn |= t)));
  }
  function ya(e, t) {
    if (!G)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            (t.alternate !== null && (l = t), (t = t.sibling));
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var n = null; l !== null; )
            (l.alternate !== null && (n = l), (l = l.sibling));
          n === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function P(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      n = 0;
    if (t)
      for (var a = e.child; a !== null; )
        ((l |= a.lanes | a.childLanes),
          (n |= a.subtreeFlags & 65011712),
          (n |= a.flags & 65011712),
          (a.return = e),
          (a = a.sibling));
    else
      for (a = e.child; a !== null; )
        ((l |= a.lanes | a.childLanes),
          (n |= a.subtreeFlags),
          (n |= a.flags),
          (a.return = e),
          (a = a.sibling));
    return ((e.subtreeFlags |= n), (e.childLanes = l), t);
  }
  function ky(e, t, l) {
    var n = t.pendingProps;
    switch ((Ts(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (P(t), null);
      case 1:
        return (P(t), null);
      case 3:
        return (
          (l = t.stateNode),
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Tt(se),
          Zl(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (cn(t)
              ? zt(t)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), As())),
          P(t),
          null
        );
      case 26:
        var a = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (zt(t),
              u !== null ? (P(t), jd(t, u)) : (P(t), pc(t, a, null, n, l)))
            : u
              ? u !== e.memoizedState
                ? (zt(t), P(t), jd(t, u))
                : (P(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== n && zt(t),
                P(t),
                pc(t, a, e, n, l)),
          null
        );
      case 27:
        if (
          (Ja(t),
          (l = Lt.current),
          (a = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== n && zt(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(N(166));
            return (P(t), null);
          }
          ((e = dt.current),
            cn(t) ? ar(t) : ((e = Cm(a, n, l)), (t.stateNode = e), zt(t)));
        }
        return (P(t), null);
      case 5:
        if ((Ja(t), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== n && zt(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(N(166));
            return (P(t), null);
          }
          if (((u = dt.current), cn(t))) ar(t);
          else {
            var i = Wu(Lt.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a,
                    );
                    break;
                  case "script":
                    ((u = i.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof n.is == "string"
                        ? i.createElement("select", { is: n.is })
                        : i.createElement("select")),
                      n.multiple
                        ? (u.multiple = !0)
                        : n.size && (u.size = n.size));
                    break;
                  default:
                    u =
                      typeof n.is == "string"
                        ? i.createElement(a, { is: n.is })
                        : i.createElement(a);
                }
            }
            ((u[ge] = t), (u[_e] = n));
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break e;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = u;
            e: switch ((Se(u, a, n), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && zt(t);
          }
        }
        return (
          P(t),
          pc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== n && zt(t);
        else {
          if (typeof n != "string" && t.stateNode === null) throw Error(N(166));
          if (((e = Lt.current), cn(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (n = null),
              (a = be),
              a !== null)
            )
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            ((e[ge] = t),
              (e = !!(
                e.nodeValue === l ||
                (n !== null && n.suppressHydrationWarning === !0) ||
                Sm(e.nodeValue, l)
              )),
              e || Kt(t, !0));
          } else
            ((e = Wu(e).createTextNode(n)), (e[ge] = t), (t.stateNode = e));
        }
        return (P(t), null);
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((n = cn(t)), l !== null)) {
            if (e === null) {
              if (!n) throw Error(N(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(N(557));
              e[ge] = t;
            } else
              (Sl(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4));
            (P(t), (e = !1));
          } else
            ((l = As()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (e = !0));
          if (!e) return t.flags & 256 ? (Xe(t), t) : (Xe(t), null);
          if (t.flags & 128) throw Error(N(558));
        }
        return (P(t), null);
      case 13:
        if (
          ((n = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((a = cn(t)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(N(318));
              if (
                ((a = t.memoizedState),
                (a = a !== null ? a.dehydrated : null),
                !a)
              )
                throw Error(N(317));
              a[ge] = t;
            } else
              (Sl(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4));
            (P(t), (a = !1));
          } else
            ((a = As()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = a),
              (a = !0));
          if (!a) return t.flags & 256 ? (Xe(t), t) : (Xe(t), null);
        }
        return (
          Xe(t),
          t.flags & 128
            ? ((t.lanes = l), t)
            : ((l = n !== null),
              (e = e !== null && e.memoizedState !== null),
              l &&
                ((n = t.child),
                (a = null),
                n.alternate !== null &&
                  n.alternate.memoizedState !== null &&
                  n.alternate.memoizedState.cachePool !== null &&
                  (a = n.alternate.memoizedState.cachePool.pool),
                (u = null),
                n.memoizedState !== null &&
                  n.memoizedState.cachePool !== null &&
                  (u = n.memoizedState.cachePool.pool),
                u !== a && (n.flags |= 2048)),
              l !== e && l && (t.child.flags |= 8192),
              Bu(t, t.updateQueue),
              P(t),
              null)
        );
      case 4:
        return (Zl(), e === null && qc(t.stateNode.containerInfo), P(t), null);
      case 10:
        return (Tt(t.type), P(t), null);
      case 19:
        if ((he(ue), (n = t.memoizedState), n === null)) return (P(t), null);
        if (((a = (t.flags & 128) !== 0), (u = n.rendering), u === null))
          if (a) ya(n, !1);
          else {
            if (ae !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((u = Nu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      ya(n, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Bu(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;
                  )
                    (Po(l, e), (l = l.sibling));
                  return (
                    $(ue, (ue.current & 1) | 2),
                    G && Et(t, n.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            n.tail !== null &&
              Be() > Gu &&
              ((t.flags |= 128), (a = !0), ya(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = Nu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Bu(t, e),
                ya(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !u.alternate &&
                  !G)
              )
                return (P(t), null);
            } else
              2 * Be() - n.renderingStartTime > Gu &&
                l !== 536870912 &&
                ((t.flags |= 128), (a = !0), ya(n, !1), (t.lanes = 4194304));
          n.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = n.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (n.last = u));
        }
        return n.tail !== null
          ? ((e = n.tail),
            (n.rendering = e),
            (n.tail = e.sibling),
            (n.renderingStartTime = Be()),
            (e.sibling = null),
            (l = ue.current),
            $(ue, a ? (l & 1) | 2 : l & 1),
            G && Et(t, n.treeForkCount),
            e)
          : (P(t), null);
      case 22:
      case 23:
        return (
          Xe(t),
          Ys(),
          (n = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== n && (t.flags |= 8192)
            : n && (t.flags |= 8192),
          n
            ? l & 536870912 &&
              !(t.flags & 128) &&
              (P(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : P(t),
          (l = t.updateQueue),
          l !== null && Bu(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (n = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          n !== l && (t.flags |= 2048),
          e !== null && he(Tl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Tt(se),
          P(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(N(156, t.tag));
  }
  function $y(e, t) {
    switch ((Ts(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Tt(se),
          Zl(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (Ja(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Xe(t), t.alternate === null)) throw Error(N(340));
          Sl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Xe(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(N(340));
          Sl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (he(ue), null);
      case 4:
        return (Zl(), null);
      case 10:
        return (Tt(t.type), null);
      case 22:
      case 23:
        return (
          Xe(t),
          Ys(),
          e !== null && he(Tl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Tt(se), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ad(e, t) {
    switch ((Ts(t), t.tag)) {
      case 3:
        (Tt(se), Zl());
        break;
      case 26:
      case 27:
      case 5:
        Ja(t);
        break;
      case 4:
        Zl();
        break;
      case 31:
        t.memoizedState !== null && Xe(t);
        break;
      case 13:
        Xe(t);
        break;
      case 19:
        he(ue);
        break;
      case 10:
        Tt(t.type);
        break;
      case 22:
      case 23:
        (Xe(t), Ys(), e !== null && he(Tl));
        break;
      case 24:
        Tt(se);
    }
  }
  function pa(e, t) {
    try {
      var l = t.updateQueue,
        n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        l = a;
        do {
          if ((l.tag & e) === e) {
            n = void 0;
            var u = l.create,
              i = l.inst;
            ((n = u()), (i.destroy = n));
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (s) {
      V(t, t.return, s);
    }
  }
  function Pt(e, t, l) {
    try {
      var n = t.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        n = u;
        do {
          if ((n.tag & e) === e) {
            var i = n.inst,
              s = i.destroy;
            if (s !== void 0) {
              ((i.destroy = void 0), (a = t));
              var c = l,
                o = s;
              try {
                o();
              } catch (r) {
                V(a, c, r);
              }
            }
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (r) {
      V(t, t.return, r);
    }
  }
  function _d(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        gr(t, l);
      } catch (n) {
        V(e, e.return, n);
      }
    }
  }
  function zd(e, t, l) {
    ((l.props = Ol(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (n) {
      V(e, t, n);
    }
  }
  function ga(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(n)) : (l.current = n);
      }
    } catch (a) {
      V(e, t, a);
    }
  }
  function yt(e, t) {
    var l = e.ref,
      n = e.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          V(e, t, a);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          V(e, t, a);
        }
      else l.current = null;
  }
  function Od(e) {
    var t = e.type,
      l = e.memoizedProps,
      n = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break e;
        case "img":
          l.src ? (n.src = l.src) : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (a) {
      V(e, e.return, a);
    }
  }
  function gc(e, t, l) {
    try {
      var n = e.stateNode;
      (gp(n, e.type, l, t), (n[_e] = t));
    } catch (a) {
      V(e, e.return, a);
    }
  }
  function Rd(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && il(e.type)) ||
      e.tag === 4
    );
  }
  function bc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Rd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && il(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function xc(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      ((e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = xt)));
    else if (
      n !== 4 &&
      (n === 27 && il(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (xc(e, t, l), e = e.sibling; e !== null; )
        (xc(e, t, l), (e = e.sibling));
  }
  function Hu(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
    else if (
      n !== 4 &&
      (n === 27 && il(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (Hu(e, t, l), e = e.sibling; e !== null; )
        (Hu(e, t, l), (e = e.sibling));
  }
  function Dd(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var n = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      (Se(t, n, l), (t[ge] = e), (t[_e] = l));
    } catch (u) {
      V(e, e.return, u);
    }
  }
  var Ot = !1,
    oe = !1,
    vc = !1,
    Cd = typeof WeakSet == "function" ? WeakSet : Set,
    pe = null;
  function Fy(e, t) {
    if (((e = e.containerInfo), (Gc = ai), (e = Zo(e)), ms(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var a = n.anchorOffset,
              u = n.focusNode;
            n = n.focusOffset;
            try {
              (l.nodeType, u.nodeType);
            } catch {
              l = null;
              break e;
            }
            var i = 0,
              s = -1,
              c = -1,
              o = 0,
              r = 0,
              p = e,
              d = null;
            t: for (;;) {
              for (
                var m;
                p !== l || (a !== 0 && p.nodeType !== 3) || (s = i + a),
                  p !== u || (n !== 0 && p.nodeType !== 3) || (c = i + n),
                  p.nodeType === 3 && (i += p.nodeValue.length),
                  (m = p.firstChild) !== null;
              )
                ((d = p), (p = m));
              for (;;) {
                if (p === e) break t;
                if (
                  (d === l && ++o === a && (s = i),
                  d === u && ++r === n && (c = i),
                  (m = p.nextSibling) !== null)
                )
                  break;
                ((p = d), (d = p.parentNode));
              }
              p = m;
            }
            l = s === -1 || c === -1 ? null : { start: s, end: c };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Xc = { focusedElem: e, selectionRange: l }, ai = !1, pe = t;
      pe !== null;
    )
      if (
        ((t = pe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (pe = e));
      else
        for (; pe !== null; ) {
          switch (((t = pe), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                e & 4 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (l = 0; l < e.length; l++)
                  ((a = e[l]), (a.ref.impl = a.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (e & 1024 && u !== null) {
                ((e = void 0),
                  (l = t),
                  (a = u.memoizedProps),
                  (u = u.memoizedState),
                  (n = l.stateNode));
                try {
                  var g = Ol(l.type, a);
                  ((e = n.getSnapshotBeforeUpdate(g, u)),
                    (n.__reactInternalSnapshotBeforeUpdate = e));
                } catch (S) {
                  V(l, l.return, S);
                }
              }
              break;
            case 3:
              if (e & 1024) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  Vc(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Vc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (e & 1024) throw Error(N(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (pe = e));
            break;
          }
          pe = t.return;
        }
  }
  function Md(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (Dt(e, l), n & 4 && pa(5, l));
        break;
      case 1:
        if ((Dt(e, l), n & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (i) {
              V(l, l.return, i);
            }
          else {
            var a = Ol(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              V(l, l.return, i);
            }
          }
        (n & 64 && _d(l), n & 512 && ga(l, l.return));
        break;
      case 3:
        if ((Dt(e, l), n & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            gr(e, t);
          } catch (i) {
            V(l, l.return, i);
          }
        }
        break;
      case 27:
        t === null && n & 4 && Dd(l);
      case 26:
      case 5:
        (Dt(e, l), t === null && n & 4 && Od(l), n & 512 && ga(l, l.return));
        break;
      case 12:
        Dt(e, l);
        break;
      case 31:
        (Dt(e, l), n & 4 && Bd(e, l));
        break;
      case 13:
        (Dt(e, l),
          n & 4 && Hd(e, l),
          n & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = up.bind(null, l)), jp(e, l)))));
        break;
      case 22:
        if (((n = l.memoizedState !== null || Ot), !n)) {
          ((t = (t !== null && t.memoizedState !== null) || oe), (a = Ot));
          var u = oe;
          ((Ot = n),
            (oe = t) && !u ? Ct(e, l, (l.subtreeFlags & 8772) !== 0) : Dt(e, l),
            (Ot = a),
            (oe = u));
        }
        break;
      case 30:
        break;
      default:
        Dt(e, l);
    }
  }
  function Ud(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Ud(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Fi(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var ee = null,
    Oe = !1;
  function Rt(e, t, l) {
    for (l = l.child; l !== null; ) (wd(e, t, l), (l = l.sibling));
  }
  function wd(e, t, l) {
    if (He && typeof He.onCommitFiberUnmount == "function")
      try {
        He.onCommitFiberUnmount(Gn, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (oe || yt(l, t),
          Rt(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        oe || yt(l, t);
        var n = ee,
          a = Oe;
        (il(l.type) && ((ee = l.stateNode), (Oe = !1)),
          Rt(e, t, l),
          Aa(l.stateNode),
          (ee = n),
          (Oe = a));
        break;
      case 5:
        oe || yt(l, t);
      case 6:
        if (
          ((n = ee),
          (a = Oe),
          (ee = null),
          Rt(e, t, l),
          (ee = n),
          (Oe = a),
          ee !== null)
        )
          if (Oe)
            try {
              (ee.nodeType === 9
                ? ee.body
                : ee.nodeName === "HTML"
                  ? ee.ownerDocument.body
                  : ee
              ).removeChild(l.stateNode);
            } catch (u) {
              V(l, t, u);
            }
          else
            try {
              ee.removeChild(l.stateNode);
            } catch (u) {
              V(l, t, u);
            }
        break;
      case 18:
        ee !== null &&
          (Oe
            ? ((e = ee),
              _m(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                l.stateNode,
              ),
              On(e))
            : _m(ee, l.stateNode));
        break;
      case 4:
        ((n = ee),
          (a = Oe),
          (ee = l.stateNode.containerInfo),
          (Oe = !0),
          Rt(e, t, l),
          (ee = n),
          (Oe = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Pt(2, l, t), oe || Pt(4, l, t), Rt(e, t, l));
        break;
      case 1:
        (oe ||
          (yt(l, t),
          (n = l.stateNode),
          typeof n.componentWillUnmount == "function" && zd(l, t, n)),
          Rt(e, t, l));
        break;
      case 21:
        Rt(e, t, l);
        break;
      case 22:
        ((oe = (n = oe) || l.memoizedState !== null), Rt(e, t, l), (oe = n));
        break;
      default:
        Rt(e, t, l);
    }
  }
  function Bd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        On(e);
      } catch (l) {
        V(t, t.return, l);
      }
    }
  }
  function Hd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        On(e);
      } catch (l) {
        V(t, t.return, l);
      }
  }
  function Wy(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Cd()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Cd()),
          t
        );
      default:
        throw Error(N(435, e.tag));
    }
  }
  function qu(e, t) {
    var l = Wy(e);
    t.forEach(function (n) {
      if (!l.has(n)) {
        l.add(n);
        var a = ip.bind(null, e, n);
        n.then(a, a);
      }
    });
  }
  function Re(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n],
          u = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (il(s.type)) {
                ((ee = s.stateNode), (Oe = !1));
                break e;
              }
              break;
            case 5:
              ((ee = s.stateNode), (Oe = !1));
              break e;
            case 3:
            case 4:
              ((ee = s.stateNode.containerInfo), (Oe = !0));
              break e;
          }
          s = s.return;
        }
        if (ee === null) throw Error(N(160));
        (wd(u, i, a),
          (ee = null),
          (Oe = !1),
          (u = a.alternate),
          u !== null && (u.return = null),
          (a.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (qd(t, e), (t = t.sibling));
  }
  var st = null;
  function qd(e, t) {
    var l = e.alternate,
      n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Re(t, e),
          De(e),
          n & 4 && (Pt(3, e, e.return), pa(3, e), Pt(5, e, e.return)));
        break;
      case 1:
        (Re(t, e),
          De(e),
          n & 512 && (oe || l === null || yt(l, l.return)),
          n & 64 &&
            Ot &&
            ((e = e.updateQueue),
            e !== null &&
              ((n = e.callbacks),
              n !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? n : l.concat(n))))));
        break;
      case 26:
        var a = st;
        if (
          (Re(t, e),
          De(e),
          n & 512 && (oe || l === null || yt(l, l.return)),
          n & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((n = e.memoizedState), l === null))
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  ((n = e.type),
                    (l = e.memoizedProps),
                    (a = a.ownerDocument || a));
                  t: switch (n) {
                    case "title":
                      ((u = a.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Zn] ||
                          u[ge] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = a.createElement(n)),
                          a.head.insertBefore(
                            u,
                            a.querySelector("head > title"),
                          )),
                        Se(u, n, l),
                        (u[ge] = e),
                        ye(u),
                        (n = u));
                      break e;
                    case "link":
                      var i = qm("link", "href", a).get(n + (l.href || ""));
                      if (i) {
                        for (var s = 0; s < i.length; s++)
                          if (
                            ((u = i[s]),
                            u.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              u.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            i.splice(s, 1);
                            break t;
                          }
                      }
                      ((u = a.createElement(n)),
                        Se(u, n, l),
                        a.head.appendChild(u));
                      break;
                    case "meta":
                      if (
                        (i = qm("meta", "content", a).get(
                          n + (l.content || ""),
                        ))
                      ) {
                        for (s = 0; s < i.length; s++)
                          if (
                            ((u = i[s]),
                            u.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              u.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              u.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            i.splice(s, 1);
                            break t;
                          }
                      }
                      ((u = a.createElement(n)),
                        Se(u, n, l),
                        a.head.appendChild(u));
                      break;
                    default:
                      throw Error(N(468, n));
                  }
                  ((u[ge] = e), ye(u), (n = u));
                }
                e.stateNode = n;
              } else Ym(a, e.type, e.stateNode);
            else e.stateNode = Hm(a, n, e.memoizedProps);
          else
            u !== n
              ? (u === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                n === null
                  ? Ym(a, e.type, e.stateNode)
                  : Hm(a, n, e.memoizedProps))
              : n === null &&
                e.stateNode !== null &&
                gc(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (Re(t, e),
          De(e),
          n & 512 && (oe || l === null || yt(l, l.return)),
          l !== null && n & 4 && gc(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (Re(t, e),
          De(e),
          n & 512 && (oe || l === null || yt(l, l.return)),
          e.flags & 32)
        ) {
          a = e.stateNode;
          try {
            Wl(a, "");
          } catch (g) {
            V(e, e.return, g);
          }
        }
        (n & 4 &&
          e.stateNode != null &&
          ((a = e.memoizedProps), gc(e, a, l !== null ? l.memoizedProps : a)),
          n & 1024 && (vc = !0));
        break;
      case 6:
        if ((Re(t, e), De(e), n & 4)) {
          if (e.stateNode === null) throw Error(N(162));
          ((n = e.memoizedProps), (l = e.stateNode));
          try {
            l.nodeValue = n;
          } catch (g) {
            V(e, e.return, g);
          }
        }
        break;
      case 3:
        if (
          ((ei = null),
          (a = st),
          (st = Iu(t.containerInfo)),
          Re(t, e),
          (st = a),
          De(e),
          n & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            On(t.containerInfo);
          } catch (g) {
            V(e, e.return, g);
          }
        vc && ((vc = !1), Yd(e));
        break;
      case 4:
        ((n = st),
          (st = Iu(e.stateNode.containerInfo)),
          Re(t, e),
          De(e),
          (st = n));
        break;
      case 12:
        (Re(t, e), De(e));
        break;
      case 31:
        (Re(t, e),
          De(e),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), qu(e, n))));
        break;
      case 13:
        (Re(t, e),
          De(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Lu = Be()),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), qu(e, n))));
        break;
      case 22:
        a = e.memoizedState !== null;
        var c = l !== null && l.memoizedState !== null,
          o = Ot,
          r = oe;
        if (
          ((Ot = o || a),
          (oe = r || c),
          Re(t, e),
          (oe = r),
          (Ot = o),
          De(e),
          n & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = a ? t._visibility & -2 : t._visibility | 1,
              a && (l === null || c || Ot || oe || Rl(e)),
              l = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                c = l = t;
                try {
                  if (((u = c.stateNode), a))
                    ((i = u.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    s = c.stateNode;
                    var p = c.memoizedProps.style,
                      d =
                        p != null && p.hasOwnProperty("display")
                          ? p.display
                          : null;
                    s.style.display =
                      d == null || typeof d == "boolean" ? "" : ("" + d).trim();
                  }
                } catch (g) {
                  V(c, c.return, g);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                c = t;
                try {
                  c.stateNode.nodeValue = a ? "" : c.memoizedProps;
                } catch (g) {
                  V(c, c.return, g);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                c = t;
                try {
                  var m = c.stateNode;
                  a ? zm(m, !0) : zm(c.stateNode, !1);
                } catch (g) {
                  V(c, c.return, g);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (l === t && (l = null), (t = t.return));
            }
            (l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        n & 4 &&
          ((n = e.updateQueue),
          n !== null &&
            ((l = n.retryQueue),
            l !== null && ((n.retryQueue = null), qu(e, l))));
        break;
      case 19:
        (Re(t, e),
          De(e),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), qu(e, n))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Re(t, e), De(e));
    }
  }
  function De(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, n = e.return; n !== null; ) {
          if (Rd(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(N(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode,
              u = bc(e);
            Hu(e, u, a);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (Wl(i, ""), (l.flags &= -33));
            var s = bc(e);
            Hu(e, s, i);
            break;
          case 3:
          case 4:
            var c = l.stateNode.containerInfo,
              o = bc(e);
            xc(e, o, c);
            break;
          default:
            throw Error(N(161));
        }
      } catch (r) {
        V(e, e.return, r);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Yd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Yd(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function Dt(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Md(e, t.alternate, t), (t = t.sibling));
  }
  function Rl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Pt(4, t, t.return), Rl(t));
          break;
        case 1:
          yt(t, t.return);
          var l = t.stateNode;
          (typeof l.componentWillUnmount == "function" && zd(t, t.return, l),
            Rl(t));
          break;
        case 27:
          Aa(t.stateNode);
        case 26:
        case 5:
          (yt(t, t.return), Rl(t));
          break;
        case 22:
          t.memoizedState === null && Rl(t);
          break;
        case 30:
          Rl(t);
          break;
        default:
          Rl(t);
      }
      e = e.sibling;
    }
  }
  function Ct(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate,
        a = e,
        u = t,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Ct(a, u, l), pa(4, u));
          break;
        case 1:
          if (
            (Ct(a, u, l),
            (n = u),
            (a = n.stateNode),
            typeof a.componentDidMount == "function")
          )
            try {
              a.componentDidMount();
            } catch (o) {
              V(n, n.return, o);
            }
          if (((n = u), (a = n.updateQueue), a !== null)) {
            var s = n.stateNode;
            try {
              var c = a.shared.hiddenCallbacks;
              if (c !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < c.length; a++)
                  pr(c[a], s);
            } catch (o) {
              V(n, n.return, o);
            }
          }
          (l && i & 64 && _d(u), ga(u, u.return));
          break;
        case 27:
          Dd(u);
        case 26:
        case 5:
          (Ct(a, u, l), l && n === null && i & 4 && Od(u), ga(u, u.return));
          break;
        case 12:
          Ct(a, u, l);
          break;
        case 31:
          (Ct(a, u, l), l && i & 4 && Bd(a, u));
          break;
        case 13:
          (Ct(a, u, l), l && i & 4 && Hd(a, u));
          break;
        case 22:
          (u.memoizedState === null && Ct(a, u, l), ga(u, u.return));
          break;
        case 30:
          break;
        default:
          Ct(a, u, l);
      }
      t = t.sibling;
    }
  }
  function Sc(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && na(l)));
  }
  function Ec(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && na(e)));
  }
  function ct(e, t, l, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Ld(e, t, l, n), (t = t.sibling));
  }
  function Ld(e, t, l, n) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (ct(e, t, l, n), a & 2048 && pa(9, t));
        break;
      case 1:
        ct(e, t, l, n);
        break;
      case 3:
        (ct(e, t, l, n),
          a & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && na(e))));
        break;
      case 12:
        if (a & 2048) {
          (ct(e, t, l, n), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              i = u.id,
              s = u.onPostCommit;
            typeof s == "function" &&
              s(
                i,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (c) {
            V(t, t.return, c);
          }
        } else ct(e, t, l, n);
        break;
      case 31:
        ct(e, t, l, n);
        break;
      case 13:
        ct(e, t, l, n);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? ct(e, t, l, n)
              : ba(e, t)
            : u._visibility & 2
              ? ct(e, t, l, n)
              : ((u._visibility |= 2),
                bn(e, t, l, n, (t.subtreeFlags & 10256) !== 0 || !1)),
          a & 2048 && Sc(i, t));
        break;
      case 24:
        (ct(e, t, l, n), a & 2048 && Ec(t.alternate, t));
        break;
      default:
        ct(e, t, l, n);
    }
  }
  function bn(e, t, l, n, a) {
    for (
      a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var u = e,
        i = t,
        s = l,
        c = n,
        o = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (bn(u, i, s, c, a), pa(8, i));
          break;
        case 23:
          break;
        case 22:
          var r = i.stateNode;
          (i.memoizedState !== null
            ? r._visibility & 2
              ? bn(u, i, s, c, a)
              : ba(u, i)
            : ((r._visibility |= 2), bn(u, i, s, c, a)),
            a && o & 2048 && Sc(i.alternate, i));
          break;
        case 24:
          (bn(u, i, s, c, a), a && o & 2048 && Ec(i.alternate, i));
          break;
        default:
          bn(u, i, s, c, a);
      }
      t = t.sibling;
    }
  }
  function ba(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          n = t,
          a = n.flags;
        switch (n.tag) {
          case 22:
            (ba(l, n), a & 2048 && Sc(n.alternate, n));
            break;
          case 24:
            (ba(l, n), a & 2048 && Ec(n.alternate, n));
            break;
          default:
            ba(l, n);
        }
        t = t.sibling;
      }
  }
  var xa = 8192;
  function xn(e, t, l) {
    if (e.subtreeFlags & xa)
      for (e = e.child; e !== null; ) (Gd(e, t, l), (e = e.sibling));
  }
  function Gd(e, t, l) {
    switch (e.tag) {
      case 26:
        (xn(e, t, l),
          e.flags & xa &&
            e.memoizedState !== null &&
            Hp(l, st, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        xn(e, t, l);
        break;
      case 3:
      case 4:
        var n = st;
        ((st = Iu(e.stateNode.containerInfo)), xn(e, t, l), (st = n));
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = xa), (xa = 16777216), xn(e, t, l), (xa = n))
            : xn(e, t, l));
        break;
      default:
        xn(e, t, l);
    }
  }
  function Xd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function va(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          ((pe = n), Zd(n, e));
        }
      Xd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Qd(e), (e = e.sibling));
  }
  function Qd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (va(e), e.flags & 2048 && Pt(9, e, e.return));
        break;
      case 3:
        va(e);
        break;
      case 12:
        va(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Yu(e))
          : va(e);
        break;
      default:
        va(e);
    }
  }
  function Yu(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          ((pe = n), Zd(n, e));
        }
      Xd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Pt(8, t, t.return), Yu(t));
          break;
        case 22:
          ((l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Yu(t)));
          break;
        default:
          Yu(t);
      }
      e = e.sibling;
    }
  }
  function Zd(e, t) {
    for (; pe !== null; ) {
      var l = pe;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Pt(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          na(l.memoizedState.cache);
      }
      if (((n = l.child), n !== null)) ((n.return = l), (pe = n));
      else
        e: for (l = e; pe !== null; ) {
          n = pe;
          var a = n.sibling,
            u = n.return;
          if ((Ud(n), n === l)) {
            pe = null;
            break e;
          }
          if (a !== null) {
            ((a.return = u), (pe = a));
            break e;
          }
          pe = u;
        }
    }
  }
  var Iy = {
      getCacheForType: function (e) {
        var t = xe(se),
          l = t.data.get(e);
        return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
      },
      cacheSignal: function () {
        return xe(se).controller.signal;
      },
    },
    Py = typeof WeakMap == "function" ? WeakMap : Map,
    Q = 0,
    k = null,
    q = null,
    L = 0,
    Z = 0,
    Qe = null,
    el = !1,
    vn = !1,
    Nc = !1,
    Mt = 0,
    ae = 0,
    tl = 0,
    Dl = 0,
    Tc = 0,
    Ze = 0,
    Sn = 0,
    Sa = null,
    Ce = null,
    jc = !1,
    Lu = 0,
    Vd = 0,
    Gu = 1 / 0,
    Xu = null,
    ll = null,
    me = 0,
    nl = null,
    En = null,
    Ut = 0,
    Ac = 0,
    _c = null,
    Kd = null,
    Ea = 0,
    zc = null;
  function Ve() {
    return Q & 2 && L !== 0 ? L & -L : D.T !== null ? Uc() : so();
  }
  function Jd() {
    if (Ze === 0)
      if (!(L & 536870912) || G) {
        var e = Fa;
        ((Fa <<= 1), !(Fa & 3932160) && (Fa = 262144), (Ze = e));
      } else Ze = 536870912;
    return ((e = Ge.current), e !== null && (e.flags |= 32), Ze);
  }
  function Me(e, t, l) {
    (((e === k && (Z === 2 || Z === 9)) || e.cancelPendingCommit !== null) &&
      (Nn(e, 0), al(e, L, Ze, !1)),
      Qn(e, l),
      (!(Q & 2) || e !== k) &&
        (e === k && (!(Q & 2) && (Dl |= l), ae === 4 && al(e, L, Ze, !1)),
        pt(e)));
  }
  function kd(e, t, l) {
    if (Q & 6) throw Error(N(327));
    var n = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Xn(e, t),
      a = n ? lp(e, t) : Rc(e, t, !0),
      u = n;
    do {
      if (a === 0) {
        vn && !n && al(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), u && !ep(l))) {
          ((a = Rc(e, t, !1)), (u = !1));
          continue;
        }
        if (a === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            ((i = e.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            e: {
              var s = e;
              a = Sa;
              var c = s.current.memoizedState.isDehydrated;
              if ((c && (Nn(s, i).flags |= 256), (i = Rc(s, i, !1)), i !== 2)) {
                if (Nc && !c) {
                  ((s.errorRecoveryDisabledLanes |= u), (Dl |= u), (a = 4));
                  break e;
                }
                ((u = Ce),
                  (Ce = a),
                  u !== null &&
                    (Ce === null ? (Ce = u) : Ce.push.apply(Ce, u)));
              }
              a = i;
            }
            if (((u = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          (Nn(e, 0), al(e, t, 0, !0));
          break;
        }
        e: {
          switch (((n = e), (u = a), u)) {
            case 0:
            case 1:
              throw Error(N(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              al(n, t, Ze, !el);
              break e;
            case 2:
              Ce = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(N(329));
          }
          if ((t & 62914560) === t && ((a = Lu + 300 - Be()), 10 < a)) {
            if ((al(n, t, Ze, !el), Ia(n, 0, !0) !== 0)) break e;
            ((Ut = t),
              (n.timeoutHandle = jm(
                $d.bind(
                  null,
                  n,
                  l,
                  Ce,
                  Xu,
                  jc,
                  t,
                  Ze,
                  Dl,
                  Sn,
                  el,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                a,
              )));
            break e;
          }
          $d(n, l, Ce, Xu, jc, t, Ze, Dl, Sn, el, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    pt(e);
  }
  function $d(e, t, l, n, a, u, i, s, c, o, r, p, d, m) {
    if (
      ((e.timeoutHandle = -1),
      (p = t.subtreeFlags),
      p & 8192 || (p & 16785408) === 16785408)
    ) {
      ((p = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: xt,
      }),
        Gd(t, u, p));
      var g =
        (u & 62914560) === u ? Lu - Be() : (u & 4194048) === u ? Vd - Be() : 0;
      if (((g = qp(p, g)), g !== null)) {
        ((Ut = u),
          (e.cancelPendingCommit = g(
            nm.bind(null, e, t, u, l, n, a, i, s, c, r, p, null, d, m),
          )),
          al(e, u, i, !o));
        return;
      }
    }
    nm(e, t, u, l, n, a, i, s, c);
  }
  function ep(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var n = 0; n < l.length; n++) {
          var a = l[n],
            u = a.getSnapshot;
          a = a.value;
          try {
            if (!Ye(u(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        ((l.return = t), (t = l));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function al(e, t, l, n) {
    ((t &= ~Tc),
      (t &= ~Dl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      n && (e.warmLanes |= t),
      (n = e.expirationTimes));
    for (var a = t; 0 < a; ) {
      var u = 31 - qe(a),
        i = 1 << u;
      ((n[u] = -1), (a &= ~i));
    }
    l !== 0 && ao(e, l, t);
  }
  function Qu() {
    return Q & 6 ? !0 : (Na(0), !1);
  }
  function Oc() {
    if (q !== null) {
      if (Z === 0) var e = q.return;
      else ((e = q), (Nt = El = null), Vs(e), (mn = null), (ua = 0), (e = q));
      for (; e !== null; ) (Ad(e.alternate, e), (e = e.return));
      q = null;
    }
  }
  function Nn(e, t) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), vp(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (Ut = 0),
      Oc(),
      (k = e),
      (q = l = St(e.current, null)),
      (L = t),
      (Z = 0),
      (Qe = null),
      (el = !1),
      (vn = Xn(e, t)),
      (Nc = !1),
      (Sn = Ze = Tc = Dl = tl = ae = 0),
      (Ce = Sa = null),
      (jc = !1),
      t & 8 && (t |= t & 32));
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - qe(n),
          u = 1 << a;
        ((t |= e[a]), (n &= ~u));
      }
    return ((Mt = t), ou(), l);
  }
  function Fd(e, t) {
    ((B = null),
      (D.H = ma),
      t === dn || t === bu
        ? ((t = dr()), (Z = 3))
        : t === Ms
          ? ((t = dr()), (Z = 4))
          : (Z =
              t === sc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Qe = t),
      q === null && ((ae = 1), Cu(e, We(t, e.current))));
  }
  function Wd() {
    var e = Ge.current;
    return e === null
      ? !0
      : (L & 4194048) === L
        ? tt === null
        : (L & 62914560) === L || L & 536870912
          ? e === tt
          : !1;
  }
  function Id() {
    var e = D.H;
    return ((D.H = ma), e === null ? ma : e);
  }
  function Pd() {
    var e = D.A;
    return ((D.A = Iy), e);
  }
  function Zu() {
    ((ae = 4),
      el || ((L & 4194048) !== L && Ge.current !== null) || (vn = !0),
      (!(tl & 134217727) && !(Dl & 134217727)) ||
        k === null ||
        al(k, L, Ze, !1));
  }
  function Rc(e, t, l) {
    var n = Q;
    Q |= 2;
    var a = Id(),
      u = Pd();
    ((k !== e || L !== t) && ((Xu = null), Nn(e, t)), (t = !1));
    var i = ae;
    e: do
      try {
        if (Z !== 0 && q !== null) {
          var s = q,
            c = Qe;
          switch (Z) {
            case 8:
              (Oc(), (i = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ge.current === null && (t = !0);
              var o = Z;
              if (((Z = 0), (Qe = null), Tn(e, s, c, o), l && vn)) {
                i = 0;
                break e;
              }
              break;
            default:
              ((o = Z), (Z = 0), (Qe = null), Tn(e, s, c, o));
          }
        }
        (tp(), (i = ae));
        break;
      } catch (r) {
        Fd(e, r);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Nt = El = null),
      (Q = n),
      (D.H = a),
      (D.A = u),
      q === null && ((k = null), (L = 0), ou()),
      i
    );
  }
  function tp() {
    for (; q !== null; ) em(q);
  }
  function lp(e, t) {
    var l = Q;
    Q |= 2;
    var n = Id(),
      a = Pd();
    k !== e || L !== t
      ? ((Xu = null), (Gu = Be() + 500), Nn(e, t))
      : (vn = Xn(e, t));
    e: do
      try {
        if (Z !== 0 && q !== null) {
          t = q;
          var u = Qe;
          t: switch (Z) {
            case 1:
              ((Z = 0), (Qe = null), Tn(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (or(u)) {
                ((Z = 0), (Qe = null), tm(t));
                break;
              }
              ((t = function () {
                ((Z !== 2 && Z !== 9) || k !== e || (Z = 7), pt(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              Z = 7;
              break e;
            case 4:
              Z = 5;
              break e;
            case 7:
              or(u)
                ? ((Z = 0), (Qe = null), tm(t))
                : ((Z = 0), (Qe = null), Tn(e, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (q.tag) {
                case 26:
                  i = q.memoizedState;
                case 5:
                case 27:
                  var s = q;
                  if (i ? Lm(i) : s.stateNode.complete) {
                    ((Z = 0), (Qe = null));
                    var c = s.sibling;
                    if (c !== null) q = c;
                    else {
                      var o = s.return;
                      o !== null ? ((q = o), Vu(o)) : (q = null);
                    }
                    break t;
                  }
              }
              ((Z = 0), (Qe = null), Tn(e, t, u, 5));
              break;
            case 6:
              ((Z = 0), (Qe = null), Tn(e, t, u, 6));
              break;
            case 8:
              (Oc(), (ae = 6));
              break e;
            default:
              throw Error(N(462));
          }
        }
        np();
        break;
      } catch (r) {
        Fd(e, r);
      }
    while (!0);
    return (
      (Nt = El = null),
      (D.H = n),
      (D.A = a),
      (Q = l),
      q !== null ? 0 : ((k = null), (L = 0), ou(), ae)
    );
  }
  function np() {
    for (; q !== null && !Ah(); ) em(q);
  }
  function em(e) {
    var t = Td(e.alternate, e, Mt);
    ((e.memoizedProps = e.pendingProps), t === null ? Vu(e) : (q = t));
  }
  function tm(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = bd(l, t, t.pendingProps, t.type, void 0, L);
        break;
      case 11:
        t = bd(l, t, t.pendingProps, t.type.render, t.ref, L);
        break;
      case 5:
        Vs(t);
      default:
        (Ad(l, t), (t = q = Po(t, Mt)), (t = Td(l, t, Mt)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Vu(e) : (q = t));
  }
  function Tn(e, t, l, n) {
    ((Nt = El = null), Vs(t), (mn = null), (ua = 0));
    var a = t.return;
    try {
      if (Vy(e, a, t, l, L)) {
        ((ae = 1), Cu(e, We(l, e.current)), (q = null));
        return;
      }
    } catch (u) {
      if (a !== null) throw ((q = a), u);
      ((ae = 1), Cu(e, We(l, e.current)), (q = null));
      return;
    }
    t.flags & 32768
      ? (G || n === 1
          ? (e = !0)
          : vn || L & 536870912
            ? (e = !1)
            : ((el = e = !0),
              (n === 2 || n === 9 || n === 3 || n === 6) &&
                ((n = Ge.current),
                n !== null && n.tag === 13 && (n.flags |= 16384))),
        lm(t, e))
      : Vu(t);
  }
  function Vu(e) {
    var t = e;
    do {
      if (t.flags & 32768) {
        lm(t, el);
        return;
      }
      e = t.return;
      var l = ky(t.alternate, t, Mt);
      if (l !== null) {
        q = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        q = t;
        return;
      }
      q = t = e;
    } while (t !== null);
    ae === 0 && (ae = 5);
  }
  function lm(e, t) {
    do {
      var l = $y(e.alternate, e);
      if (l !== null) {
        ((l.flags &= 32767), (q = l));
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        q = e;
        return;
      }
      q = e = l;
    } while (e !== null);
    ((ae = 6), (q = null));
  }
  function nm(e, t, l, n, a, u, i, s, c) {
    e.cancelPendingCommit = null;
    do Ku();
    while (me !== 0);
    if (Q & 6) throw Error(N(327));
    if (t !== null) {
      if (t === e.current) throw Error(N(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= bs),
        Bh(e, l, u, i, s, c),
        e === k && ((q = k = null), (L = 0)),
        (En = t),
        (nl = e),
        (Ut = l),
        (Ac = u),
        (_c = a),
        (Kd = n),
        t.subtreeFlags & 10256 || t.flags & 10256
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            sp(ka, function () {
              return (cm(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (n = (t.flags & 13878) !== 0),
        t.subtreeFlags & 13878 || n)
      ) {
        ((n = D.T), (D.T = null), (a = X.p), (X.p = 2), (i = Q), (Q |= 4));
        try {
          Fy(e, t, l);
        } finally {
          ((Q = i), (X.p = a), (D.T = n));
        }
      }
      ((me = 1), am(), um(), im());
    }
  }
  function am() {
    if (me === 1) {
      me = 0;
      var e = nl,
        t = En,
        l = (t.flags & 13878) !== 0;
      if (t.subtreeFlags & 13878 || l) {
        ((l = D.T), (D.T = null));
        var n = X.p;
        X.p = 2;
        var a = Q;
        Q |= 4;
        try {
          qd(t, e);
          var u = Xc,
            i = Zo(e.containerInfo),
            s = u.focusedElem,
            c = u.selectionRange;
          if (
            i !== s &&
            s &&
            s.ownerDocument &&
            Qo(s.ownerDocument.documentElement, s)
          ) {
            if (c !== null && ms(s)) {
              var o = c.start,
                r = c.end;
              if ((r === void 0 && (r = o), "selectionStart" in s))
                ((s.selectionStart = o),
                  (s.selectionEnd = Math.min(r, s.value.length)));
              else {
                var p = s.ownerDocument || document,
                  d = (p && p.defaultView) || window;
                if (d.getSelection) {
                  var m = d.getSelection(),
                    g = s.textContent.length,
                    S = Math.min(c.start, g),
                    E = c.end === void 0 ? S : Math.min(c.end, g);
                  !m.extend && S > E && ((i = E), (E = S), (S = i));
                  var y = Xo(s, S),
                    h = Xo(s, E);
                  if (
                    y &&
                    h &&
                    (m.rangeCount !== 1 ||
                      m.anchorNode !== y.node ||
                      m.anchorOffset !== y.offset ||
                      m.focusNode !== h.node ||
                      m.focusOffset !== h.offset)
                  ) {
                    var b = p.createRange();
                    (b.setStart(y.node, y.offset),
                      m.removeAllRanges(),
                      S > E
                        ? (m.addRange(b), m.extend(h.node, h.offset))
                        : (b.setEnd(h.node, h.offset), m.addRange(b)));
                  }
                }
              }
            }
            for (p = [], m = s; (m = m.parentNode); )
              m.nodeType === 1 &&
                p.push({ element: m, left: m.scrollLeft, top: m.scrollTop });
            for (
              typeof s.focus == "function" && s.focus(), s = 0;
              s < p.length;
              s++
            ) {
              var v = p[s];
              ((v.element.scrollLeft = v.left), (v.element.scrollTop = v.top));
            }
          }
          ((ai = !!Gc), (Xc = Gc = null));
        } finally {
          ((Q = a), (X.p = n), (D.T = l));
        }
      }
      ((e.current = t), (me = 2));
    }
  }
  function um() {
    if (me === 2) {
      me = 0;
      var e = nl,
        t = En,
        l = (t.flags & 8772) !== 0;
      if (t.subtreeFlags & 8772 || l) {
        ((l = D.T), (D.T = null));
        var n = X.p;
        X.p = 2;
        var a = Q;
        Q |= 4;
        try {
          Md(e, t.alternate, t);
        } finally {
          ((Q = a), (X.p = n), (D.T = l));
        }
      }
      me = 3;
    }
  }
  function im() {
    if (me === 4 || me === 3) {
      ((me = 0), _h());
      var e = nl,
        t = En,
        l = Ut,
        n = Kd;
      t.subtreeFlags & 10256 || t.flags & 10256
        ? (me = 5)
        : ((me = 0), (En = nl = null), sm(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (
        (a === 0 && (ll = null),
        ki(l),
        (t = t.stateNode),
        He && typeof He.onCommitFiberRoot == "function")
      )
        try {
          He.onCommitFiberRoot(Gn, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (n !== null) {
        ((t = D.T), (a = X.p), (X.p = 2), (D.T = null));
        try {
          for (var u = e.onRecoverableError, i = 0; i < n.length; i++) {
            var s = n[i];
            u(s.value, { componentStack: s.stack });
          }
        } finally {
          ((D.T = t), (X.p = a));
        }
      }
      (Ut & 3 && Ku(),
        pt(e),
        (a = e.pendingLanes),
        l & 261930 && a & 42
          ? e === zc
            ? Ea++
            : ((Ea = 0), (zc = e))
          : (Ea = 0),
        Na(0));
    }
  }
  function sm(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), na(t)));
  }
  function Ku() {
    return (am(), um(), im(), cm());
  }
  function cm() {
    if (me !== 5) return !1;
    var e = nl,
      t = Ac;
    Ac = 0;
    var l = ki(Ut),
      n = D.T,
      a = X.p;
    try {
      ((X.p = 32 > l ? 32 : l), (D.T = null), (l = _c), (_c = null));
      var u = nl,
        i = Ut;
      if (((me = 0), (En = nl = null), (Ut = 0), Q & 6)) throw Error(N(331));
      var s = Q;
      if (
        ((Q |= 4),
        Qd(u.current),
        Ld(u, u.current, i, l),
        (Q = s),
        Na(0, !1),
        He && typeof He.onPostCommitFiberRoot == "function")
      )
        try {
          He.onPostCommitFiberRoot(Gn, u);
        } catch {}
      return !0;
    } finally {
      ((X.p = a), (D.T = n), sm(e, t));
    }
  }
  function fm(e, t, l) {
    ((t = We(l, t)),
      (t = ic(e.stateNode, t, 2)),
      (e = Ft(e, t, 2)),
      e !== null && (Qn(e, 2), pt(e)));
  }
  function V(e, t, l) {
    if (e.tag === 3) fm(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          fm(t, e, l);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof n.componentDidCatch == "function" &&
              (ll === null || !ll.has(n)))
          ) {
            ((e = We(l, e)),
              (l = od(2)),
              (n = Ft(t, l, 2)),
              n !== null && (rd(l, n, t, e), Qn(n, 2), pt(n)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Dc(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Py();
      var a = new Set();
      n.set(t, a);
    } else ((a = n.get(t)), a === void 0 && ((a = new Set()), n.set(t, a)));
    a.has(l) ||
      ((Nc = !0), a.add(l), (e = ap.bind(null, e, t, l)), t.then(e, e));
  }
  function ap(e, t, l) {
    var n = e.pingCache;
    (n !== null && n.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      k === e &&
        (L & l) === l &&
        (ae === 4 || (ae === 3 && (L & 62914560) === L && 300 > Be() - Lu)
          ? !(Q & 2) && Nn(e, 0)
          : (Tc |= l),
        Sn === L && (Sn = 0)),
      pt(e));
  }
  function om(e, t) {
    (t === 0 && (t = no()), (e = xl(e, t)), e !== null && (Qn(e, t), pt(e)));
  }
  function up(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), om(e, l));
  }
  function ip(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode,
          a = e.memoizedState;
        a !== null && (l = a.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(N(314));
    }
    (n !== null && n.delete(t), om(e, l));
  }
  function sp(e, t) {
    return Zi(e, t);
  }
  var Ju = null,
    jn = null,
    Cc = !1,
    ku = !1,
    Mc = !1,
    ul = 0;
  function pt(e) {
    (e !== jn &&
      e.next === null &&
      (jn === null ? (Ju = jn = e) : (jn = jn.next = e)),
      (ku = !0),
      Cc || ((Cc = !0), fp()));
  }
  function Na(e, t) {
    if (!Mc && ku) {
      Mc = !0;
      do
        for (var l = !1, n = Ju; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var i = n.suspendedLanes,
                s = n.pingedLanes;
              ((u = (1 << (31 - qe(42 | e) + 1)) - 1),
                (u &= a & ~(i & ~s)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((l = !0), hm(n, u));
          } else
            ((u = L),
              (u = Ia(
                n,
                n === k ? u : 0,
                n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
              )),
              !(u & 3) || Xn(n, u) || ((l = !0), hm(n, u)));
          n = n.next;
        }
      while (l);
      Mc = !1;
    }
  }
  function cp() {
    rm();
  }
  function rm() {
    ku = Cc = !1;
    var e = 0;
    ul !== 0 && xp() && (e = ul);
    for (var t = Be(), l = null, n = Ju; n !== null; ) {
      var a = n.next,
        u = dm(n, t);
      (u === 0
        ? ((n.next = null),
          l === null ? (Ju = a) : (l.next = a),
          a === null && (jn = l))
        : ((l = n), (e !== 0 || u & 3) && (ku = !0)),
        (n = a));
    }
    ((me !== 0 && me !== 5) || Na(e), ul !== 0 && (ul = 0));
  }
  function dm(e, t) {
    for (
      var l = e.suspendedLanes,
        n = e.pingedLanes,
        a = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var i = 31 - qe(u),
        s = 1 << i,
        c = a[i];
      (c === -1
        ? (!(s & l) || s & n) && (a[i] = wh(s, t))
        : c <= t && (e.expiredLanes |= s),
        (u &= ~s));
    }
    if (
      ((t = k),
      (l = L),
      (l = Ia(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (n = e.callbackNode),
      l === 0 ||
        (e === t && (Z === 2 || Z === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        n !== null && n !== null && Vi(n),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if (!(l & 3) || Xn(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((n !== null && Vi(n), ki(l))) {
        case 2:
        case 8:
          l = to;
          break;
        case 32:
          l = ka;
          break;
        case 268435456:
          l = lo;
          break;
        default:
          l = ka;
      }
      return (
        (n = mm.bind(null, e)),
        (l = Zi(l, n)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      n !== null && n !== null && Vi(n),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function mm(e, t) {
    if (me !== 0 && me !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (Ku() && e.callbackNode !== l) return null;
    var n = L;
    return (
      (n = Ia(
        e,
        e === k ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      n === 0
        ? null
        : (kd(e, n, t),
          dm(e, Be()),
          e.callbackNode != null && e.callbackNode === l
            ? mm.bind(null, e)
            : null)
    );
  }
  function hm(e, t) {
    if (Ku()) return null;
    kd(e, t, !0);
  }
  function fp() {
    Sp(function () {
      Q & 6 ? Zi(eo, cp) : rm();
    });
  }
  function Uc() {
    if (ul === 0) {
      var e = on;
      (e === 0 && ((e = $a), ($a <<= 1), !($a & 261888) && ($a = 256)),
        (ul = e));
    }
    return ul;
  }
  function ym(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : lu("" + e);
  }
  function pm(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function op(e, t, l, n, a) {
    if (t === "submit" && l && l.stateNode === a) {
      var u = ym((a[_e] || null).action),
        i = n.submitter;
      i &&
        ((t = (t = i[_e] || null)
          ? ym(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((u = t), (i = null)));
      var s = new iu("action", "action", null, n, a);
      e.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (ul !== 0) {
                  var c = i ? pm(a, i) : new FormData(a);
                  ec(
                    l,
                    { pending: !0, data: c, method: a.method, action: u },
                    null,
                    c,
                  );
                }
              } else
                typeof u == "function" &&
                  (s.preventDefault(),
                  (c = i ? pm(a, i) : new FormData(a)),
                  ec(
                    l,
                    { pending: !0, data: c, method: a.method, action: u },
                    u,
                    c,
                  ));
            },
            currentTarget: a,
          },
        ],
      });
    }
  }
  for (var wc = 0; wc < gs.length; wc++) {
    var Bc = gs[wc],
      rp = Bc.toLowerCase(),
      dp = Bc[0].toUpperCase() + Bc.slice(1);
    it(rp, "on" + dp);
  }
  (it(Jo, "onAnimationEnd"),
    it(ko, "onAnimationIteration"),
    it($o, "onAnimationStart"),
    it("dblclick", "onDoubleClick"),
    it("focusin", "onFocus"),
    it("focusout", "onBlur"),
    it(zy, "onTransitionRun"),
    it(Oy, "onTransitionStart"),
    it(Ry, "onTransitionCancel"),
    it(Fo, "onTransitionEnd"),
    $l("onMouseEnter", ["mouseout", "mouseover"]),
    $l("onMouseLeave", ["mouseout", "mouseover"]),
    $l("onPointerEnter", ["pointerout", "pointerover"]),
    $l("onPointerLeave", ["pointerout", "pointerover"]),
    yl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    yl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    yl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    yl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    yl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    yl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Ta =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    mp = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ta),
    );
  function gm(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l],
        a = n.event;
      n = n.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var i = n.length - 1; 0 <= i; i--) {
            var s = n[i],
              c = s.instance,
              o = s.currentTarget;
            if (((s = s.listener), c !== u && a.isPropagationStopped()))
              break e;
            ((u = s), (a.currentTarget = o));
            try {
              u(a);
            } catch (r) {
              fu(r);
            }
            ((a.currentTarget = null), (u = c));
          }
        else
          for (i = 0; i < n.length; i++) {
            if (
              ((s = n[i]),
              (c = s.instance),
              (o = s.currentTarget),
              (s = s.listener),
              c !== u && a.isPropagationStopped())
            )
              break e;
            ((u = s), (a.currentTarget = o));
            try {
              u(a);
            } catch (r) {
              fu(r);
            }
            ((a.currentTarget = null), (u = c));
          }
      }
    }
  }
  function Y(e, t) {
    var l = t[$i];
    l === void 0 && (l = t[$i] = new Set());
    var n = e + "__bubble";
    l.has(n) || (bm(t, e, 2, !1), l.add(n));
  }
  function Hc(e, t, l) {
    var n = 0;
    (t && (n |= 4), bm(l, e, n, t));
  }
  var $u = "_reactListening" + Math.random().toString(36).slice(2);
  function qc(e) {
    if (!e[$u]) {
      ((e[$u] = !0),
        oo.forEach(function (l) {
          l !== "selectionchange" && (mp.has(l) || Hc(l, !1, e), Hc(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$u] || ((t[$u] = !0), Hc("selectionchange", !1, t));
    }
  }
  function bm(e, t, l, n) {
    switch (Jm(t)) {
      case 2:
        var a = Gp;
        break;
      case 8:
        a = Xp;
        break;
      default:
        a = Pc;
    }
    ((l = a.bind(null, t, l, e)),
      (a = void 0),
      !as ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (a = !0),
      n
        ? a !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: a })
          : e.addEventListener(t, l, !0)
        : a !== void 0
          ? e.addEventListener(t, l, { passive: a })
          : e.addEventListener(t, l, !1));
  }
  function Yc(e, t, l, n, a) {
    var u = n;
    if (!(t & 1) && !(t & 2) && n !== null)
      e: for (;;) {
        if (n === null) return;
        var i = n.tag;
        if (i === 3 || i === 4) {
          var s = n.stateNode.containerInfo;
          if (s === a) break;
          if (i === 4)
            for (i = n.return; i !== null; ) {
              var c = i.tag;
              if ((c === 3 || c === 4) && i.stateNode.containerInfo === a)
                return;
              i = i.return;
            }
          for (; s !== null; ) {
            if (((i = Kl(s)), i === null)) return;
            if (((c = i.tag), c === 5 || c === 6 || c === 26 || c === 27)) {
              n = u = i;
              continue e;
            }
            s = s.parentNode;
          }
        }
        n = n.return;
      }
    No(function () {
      var o = u,
        r = ls(l),
        p = [];
      e: {
        var d = Wo.get(e);
        if (d !== void 0) {
          var m = iu,
            g = e;
          switch (e) {
            case "keypress":
              if (au(l) === 0) break e;
            case "keydown":
            case "keyup":
              m = iy;
              break;
            case "focusin":
              ((g = "focus"), (m = cs));
              break;
            case "focusout":
              ((g = "blur"), (m = cs));
              break;
            case "beforeblur":
            case "afterblur":
              m = cs;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              m = Ao;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m = kh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m = fy;
              break;
            case Jo:
            case ko:
            case $o:
              m = Wh;
              break;
            case Fo:
              m = ry;
              break;
            case "scroll":
            case "scrollend":
              m = Kh;
              break;
            case "wheel":
              m = my;
              break;
            case "copy":
            case "cut":
            case "paste":
              m = Ph;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m = zo;
              break;
            case "toggle":
            case "beforetoggle":
              m = yy;
          }
          var S = (t & 4) !== 0,
            E = !S && (e === "scroll" || e === "scrollend"),
            y = S ? (d !== null ? d + "Capture" : null) : d;
          S = [];
          for (var h = o, b; h !== null; ) {
            var v = h;
            if (
              ((b = v.stateNode),
              (v = v.tag),
              (v !== 5 && v !== 26 && v !== 27) ||
                b === null ||
                y === null ||
                ((v = Kn(h, y)), v != null && S.push(ja(h, v, b))),
              E)
            )
              break;
            h = h.return;
          }
          0 < S.length &&
            ((d = new m(d, g, null, l, r)), p.push({ event: d, listeners: S }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((d = e === "mouseover" || e === "pointerover"),
            (m = e === "mouseout" || e === "pointerout"),
            d &&
              l !== ts &&
              (g = l.relatedTarget || l.fromElement) &&
              (Kl(g) || g[Vl]))
          )
            break e;
          if (
            (m || d) &&
            ((d =
              r.window === r
                ? r
                : (d = r.ownerDocument)
                  ? d.defaultView || d.parentWindow
                  : window),
            m
              ? ((g = l.relatedTarget || l.toElement),
                (m = o),
                (g = g ? Kl(g) : null),
                g !== null &&
                  ((E = Bn(g)),
                  (S = g.tag),
                  g !== E || (S !== 5 && S !== 27 && S !== 6)) &&
                  (g = null))
              : ((m = null), (g = o)),
            m !== g)
          ) {
            if (
              ((S = Ao),
              (v = "onMouseLeave"),
              (y = "onMouseEnter"),
              (h = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((S = zo),
                (v = "onPointerLeave"),
                (y = "onPointerEnter"),
                (h = "pointer")),
              (E = m == null ? d : Vn(m)),
              (b = g == null ? d : Vn(g)),
              (d = new S(v, h + "leave", m, l, r)),
              (d.target = E),
              (d.relatedTarget = b),
              (v = null),
              Kl(r) === o &&
                ((S = new S(y, h + "enter", g, l, r)),
                (S.target = b),
                (S.relatedTarget = E),
                (v = S)),
              (E = v),
              m && g)
            )
              t: {
                for (S = hp, y = m, h = g, b = 0, v = y; v; v = S(v)) b++;
                v = 0;
                for (var A = h; A; A = S(A)) v++;
                for (; 0 < b - v; ) ((y = S(y)), b--);
                for (; 0 < v - b; ) ((h = S(h)), v--);
                for (; b--; ) {
                  if (y === h || (h !== null && y === h.alternate)) {
                    S = y;
                    break t;
                  }
                  ((y = S(y)), (h = S(h)));
                }
                S = null;
              }
            else S = null;
            (m !== null && xm(p, d, m, S, !1),
              g !== null && E !== null && xm(p, E, g, S, !0));
          }
        }
        e: {
          if (
            ((d = o ? Vn(o) : window),
            (m = d.nodeName && d.nodeName.toLowerCase()),
            m === "select" || (m === "input" && d.type === "file"))
          )
            var O = Bo;
          else if (Uo(d))
            if (Ho) O = jy;
            else {
              O = Ny;
              var T = Ey;
            }
          else
            ((m = d.nodeName),
              !m ||
              m.toLowerCase() !== "input" ||
              (d.type !== "checkbox" && d.type !== "radio")
                ? o && es(o.elementType) && (O = Bo)
                : (O = Ty));
          if (O && (O = O(e, o))) {
            wo(p, O, l, r);
            break e;
          }
          (T && T(e, d, o),
            e === "focusout" &&
              o &&
              d.type === "number" &&
              o.memoizedProps.value != null &&
              Pi(d, "number", d.value));
        }
        switch (((T = o ? Vn(o) : window), e)) {
          case "focusin":
            (Uo(T) || T.contentEditable === "true") &&
              ((tn = T), (hs = o), (ea = null));
            break;
          case "focusout":
            ea = hs = tn = null;
            break;
          case "mousedown":
            ys = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((ys = !1), Vo(p, l, r));
            break;
          case "selectionchange":
            if (_y) break;
          case "keydown":
          case "keyup":
            Vo(p, l, r);
        }
        var z;
        if (os)
          e: {
            switch (e) {
              case "compositionstart":
                var U = "onCompositionStart";
                break e;
              case "compositionend":
                U = "onCompositionEnd";
                break e;
              case "compositionupdate":
                U = "onCompositionUpdate";
                break e;
            }
            U = void 0;
          }
        else
          en
            ? Co(e, l) && (U = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (U = "onCompositionStart");
        (U &&
          (Oo &&
            l.locale !== "ko" &&
            (en || U !== "onCompositionStart"
              ? U === "onCompositionEnd" && en && (z = To())
              : ((Qt = r),
                (us = "value" in Qt ? Qt.value : Qt.textContent),
                (en = !0))),
          (T = Fu(o, U)),
          0 < T.length &&
            ((U = new _o(U, e, null, l, r)),
            p.push({ event: U, listeners: T }),
            z ? (U.data = z) : ((z = Mo(l)), z !== null && (U.data = z)))),
          (z = gy ? by(e, l) : xy(e, l)) &&
            ((U = Fu(o, "onBeforeInput")),
            0 < U.length &&
              ((T = new _o("onBeforeInput", "beforeinput", null, l, r)),
              p.push({ event: T, listeners: U }),
              (T.data = z))),
          op(p, e, o, l, r));
      }
      gm(p, t);
    });
  }
  function ja(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Fu(e, t) {
    for (var l = t + "Capture", n = []; e !== null; ) {
      var a = e,
        u = a.stateNode;
      if (
        ((a = a.tag),
        (a !== 5 && a !== 26 && a !== 27) ||
          u === null ||
          ((a = Kn(e, l)),
          a != null && n.unshift(ja(e, a, u)),
          (a = Kn(e, t)),
          a != null && n.push(ja(e, a, u))),
        e.tag === 3)
      )
        return n;
      e = e.return;
    }
    return [];
  }
  function hp(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function xm(e, t, l, n, a) {
    for (var u = t._reactName, i = []; l !== null && l !== n; ) {
      var s = l,
        c = s.alternate,
        o = s.stateNode;
      if (((s = s.tag), c !== null && c === n)) break;
      ((s !== 5 && s !== 26 && s !== 27) ||
        o === null ||
        ((c = o),
        a
          ? ((o = Kn(l, u)), o != null && i.unshift(ja(l, o, c)))
          : a || ((o = Kn(l, u)), o != null && i.push(ja(l, o, c)))),
        (l = l.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var yp = /\r\n?/g,
    pp = /\u0000|\uFFFD/g;
  function vm(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        yp,
        `
`,
      )
      .replace(pp, "");
  }
  function Sm(e, t) {
    return ((t = vm(t)), vm(e) === t);
  }
  function J(e, t, l, n, a, u) {
    switch (l) {
      case "children":
        typeof n == "string"
          ? t === "body" || (t === "textarea" && n === "") || Wl(e, n)
          : (typeof n == "number" || typeof n == "bigint") &&
            t !== "body" &&
            Wl(e, "" + n);
        break;
      case "className":
        eu(e, "class", n);
        break;
      case "tabIndex":
        eu(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        eu(e, l, n);
        break;
      case "style":
        So(e, n, u);
        break;
      case "data":
        if (t !== "object") {
          eu(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "symbol" ||
          typeof n == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        ((n = lu("" + n)), e.setAttribute(l, n));
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (l === "formAction"
              ? (t !== "input" && J(e, t, "name", a.name, a, null),
                J(e, t, "formEncType", a.formEncType, a, null),
                J(e, t, "formMethod", a.formMethod, a, null),
                J(e, t, "formTarget", a.formTarget, a, null))
              : (J(e, t, "encType", a.encType, a, null),
                J(e, t, "method", a.method, a, null),
                J(e, t, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        ((n = lu("" + n)), e.setAttribute(l, n));
        break;
      case "onClick":
        n != null && (e.onclick = xt);
        break;
      case "onScroll":
        n != null && Y("scroll", e);
        break;
      case "onScrollEnd":
        n != null && Y("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(N(61));
          if (((l = n.__html), l != null)) {
            if (a.children != null) throw Error(N(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "boolean" ||
          typeof n == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((l = lu("" + n)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol"
          ? e.setAttribute(l, "" + n)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0
          ? e.setAttribute(l, "")
          : n !== !1 &&
              n != null &&
              typeof n != "function" &&
              typeof n != "symbol"
            ? e.setAttribute(l, n)
            : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        !isNaN(n) &&
        1 <= n
          ? e.setAttribute(l, n)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n)
          ? e.removeAttribute(l)
          : e.setAttribute(l, n);
        break;
      case "popover":
        (Y("beforetoggle", e), Y("toggle", e), Pa(e, "popover", n));
        break;
      case "xlinkActuate":
        bt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
        break;
      case "xlinkArcrole":
        bt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
        break;
      case "xlinkRole":
        bt(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
        break;
      case "xlinkShow":
        bt(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
        break;
      case "xlinkTitle":
        bt(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
        break;
      case "xlinkType":
        bt(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
        break;
      case "xmlBase":
        bt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
        break;
      case "xmlLang":
        bt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
        break;
      case "xmlSpace":
        bt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
        break;
      case "is":
        Pa(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Zh.get(l) || l), Pa(e, l, n));
    }
  }
  function Lc(e, t, l, n, a, u) {
    switch (l) {
      case "style":
        So(e, n, u);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(N(61));
          if (((l = n.__html), l != null)) {
            if (a.children != null) throw Error(N(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string"
          ? Wl(e, n)
          : (typeof n == "number" || typeof n == "bigint") && Wl(e, "" + n);
        break;
      case "onScroll":
        n != null && Y("scroll", e);
        break;
      case "onScrollEnd":
        n != null && Y("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = xt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ro.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((a = l.endsWith("Capture")),
              (t = l.slice(2, a ? l.length - 7 : void 0)),
              (u = e[_e] || null),
              (u = u != null ? u[l] : null),
              typeof u == "function" && e.removeEventListener(t, u, a),
              typeof n == "function")
            ) {
              (typeof u != "function" &&
                u !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, n, a));
              break e;
            }
            l in e
              ? (e[l] = n)
              : n === !0
                ? e.setAttribute(l, "")
                : Pa(e, l, n);
          }
    }
  }
  function Se(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Y("error", e), Y("load", e));
        var n = !1,
          a = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null)
              switch (u) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(N(137, t));
                default:
                  J(e, t, u, i, l, null);
              }
          }
        (a && J(e, t, "srcSet", l.srcSet, l, null),
          n && J(e, t, "src", l.src, l, null));
        return;
      case "input":
        Y("invalid", e);
        var s = (u = i = a = null),
          c = null,
          o = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var r = l[n];
            if (r != null)
              switch (n) {
                case "name":
                  a = r;
                  break;
                case "type":
                  i = r;
                  break;
                case "checked":
                  c = r;
                  break;
                case "defaultChecked":
                  o = r;
                  break;
                case "value":
                  u = r;
                  break;
                case "defaultValue":
                  s = r;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (r != null) throw Error(N(137, t));
                  break;
                default:
                  J(e, t, n, r, l, null);
              }
          }
        go(e, u, s, c, o, i, a, !1);
        return;
      case "select":
        (Y("invalid", e), (n = i = u = null));
        for (a in l)
          if (l.hasOwnProperty(a) && ((s = l[a]), s != null))
            switch (a) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                i = s;
                break;
              case "multiple":
                n = s;
              default:
                J(e, t, a, s, l, null);
            }
        ((t = u),
          (l = i),
          (e.multiple = !!n),
          t != null ? Fl(e, !!n, t, !1) : l != null && Fl(e, !!n, l, !0));
        return;
      case "textarea":
        (Y("invalid", e), (u = a = n = null));
        for (i in l)
          if (l.hasOwnProperty(i) && ((s = l[i]), s != null))
            switch (i) {
              case "value":
                n = s;
                break;
              case "defaultValue":
                a = s;
                break;
              case "children":
                u = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(N(91));
                break;
              default:
                J(e, t, i, s, l, null);
            }
        xo(e, n, a, u);
        return;
      case "option":
        for (c in l)
          if (l.hasOwnProperty(c) && ((n = l[c]), n != null))
            switch (c) {
              case "selected":
                e.selected =
                  n && typeof n != "function" && typeof n != "symbol";
                break;
              default:
                J(e, t, c, n, l, null);
            }
        return;
      case "dialog":
        (Y("beforetoggle", e), Y("toggle", e), Y("cancel", e), Y("close", e));
        break;
      case "iframe":
      case "object":
        Y("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ta.length; n++) Y(Ta[n], e);
        break;
      case "image":
        (Y("error", e), Y("load", e));
        break;
      case "details":
        Y("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (Y("error", e), Y("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (o in l)
          if (l.hasOwnProperty(o) && ((n = l[o]), n != null))
            switch (o) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(N(137, t));
              default:
                J(e, t, o, n, l, null);
            }
        return;
      default:
        if (es(t)) {
          for (r in l)
            l.hasOwnProperty(r) &&
              ((n = l[r]), n !== void 0 && Lc(e, t, r, n, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((n = l[s]), n != null && J(e, t, s, n, l, null));
  }
  function gp(e, t, l, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null,
          u = null,
          i = null,
          s = null,
          c = null,
          o = null,
          r = null;
        for (m in l) {
          var p = l[m];
          if (l.hasOwnProperty(m) && p != null)
            switch (m) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = p;
              default:
                n.hasOwnProperty(m) || J(e, t, m, null, n, p);
            }
        }
        for (var d in n) {
          var m = n[d];
          if (((p = l[d]), n.hasOwnProperty(d) && (m != null || p != null)))
            switch (d) {
              case "type":
                u = m;
                break;
              case "name":
                a = m;
                break;
              case "checked":
                o = m;
                break;
              case "defaultChecked":
                r = m;
                break;
              case "value":
                i = m;
                break;
              case "defaultValue":
                s = m;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(N(137, t));
                break;
              default:
                m !== p && J(e, t, d, m, n, p);
            }
        }
        Ii(e, i, s, c, o, r, u, a);
        return;
      case "select":
        m = i = s = d = null;
        for (u in l)
          if (((c = l[u]), l.hasOwnProperty(u) && c != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                m = c;
              default:
                n.hasOwnProperty(u) || J(e, t, u, null, n, c);
            }
        for (a in n)
          if (
            ((u = n[a]),
            (c = l[a]),
            n.hasOwnProperty(a) && (u != null || c != null))
          )
            switch (a) {
              case "value":
                d = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== c && J(e, t, a, u, n, c);
            }
        ((t = s),
          (l = i),
          (n = m),
          d != null
            ? Fl(e, !!l, d, !1)
            : !!n != !!l &&
              (t != null ? Fl(e, !!l, t, !0) : Fl(e, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        m = d = null;
        for (s in l)
          if (
            ((a = l[s]),
            l.hasOwnProperty(s) && a != null && !n.hasOwnProperty(s))
          )
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                J(e, t, s, null, n, a);
            }
        for (i in n)
          if (
            ((a = n[i]),
            (u = l[i]),
            n.hasOwnProperty(i) && (a != null || u != null))
          )
            switch (i) {
              case "value":
                d = a;
                break;
              case "defaultValue":
                m = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(N(91));
                break;
              default:
                a !== u && J(e, t, i, a, n, u);
            }
        bo(e, d, m);
        return;
      case "option":
        for (var g in l)
          if (
            ((d = l[g]),
            l.hasOwnProperty(g) && d != null && !n.hasOwnProperty(g))
          )
            switch (g) {
              case "selected":
                e.selected = !1;
                break;
              default:
                J(e, t, g, null, n, d);
            }
        for (c in n)
          if (
            ((d = n[c]),
            (m = l[c]),
            n.hasOwnProperty(c) && d !== m && (d != null || m != null))
          )
            switch (c) {
              case "selected":
                e.selected =
                  d && typeof d != "function" && typeof d != "symbol";
                break;
              default:
                J(e, t, c, d, n, m);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var S in l)
          ((d = l[S]),
            l.hasOwnProperty(S) &&
              d != null &&
              !n.hasOwnProperty(S) &&
              J(e, t, S, null, n, d));
        for (o in n)
          if (
            ((d = n[o]),
            (m = l[o]),
            n.hasOwnProperty(o) && d !== m && (d != null || m != null))
          )
            switch (o) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(N(137, t));
                break;
              default:
                J(e, t, o, d, n, m);
            }
        return;
      default:
        if (es(t)) {
          for (var E in l)
            ((d = l[E]),
              l.hasOwnProperty(E) &&
                d !== void 0 &&
                !n.hasOwnProperty(E) &&
                Lc(e, t, E, void 0, n, d));
          for (r in n)
            ((d = n[r]),
              (m = l[r]),
              !n.hasOwnProperty(r) ||
                d === m ||
                (d === void 0 && m === void 0) ||
                Lc(e, t, r, d, n, m));
          return;
        }
    }
    for (var y in l)
      ((d = l[y]),
        l.hasOwnProperty(y) &&
          d != null &&
          !n.hasOwnProperty(y) &&
          J(e, t, y, null, n, d));
    for (p in n)
      ((d = n[p]),
        (m = l[p]),
        !n.hasOwnProperty(p) ||
          d === m ||
          (d == null && m == null) ||
          J(e, t, p, d, n, m));
  }
  function Em(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function bp() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType("resource"), n = 0;
        n < l.length;
        n++
      ) {
        var a = l[n],
          u = a.transferSize,
          i = a.initiatorType,
          s = a.duration;
        if (u && s && Em(i)) {
          for (i = 0, s = a.responseEnd, n += 1; n < l.length; n++) {
            var c = l[n],
              o = c.startTime;
            if (o > s) break;
            var r = c.transferSize,
              p = c.initiatorType;
            r &&
              Em(p) &&
              ((c = c.responseEnd), (i += r * (c < s ? 1 : (s - o) / (c - o))));
          }
          if ((--n, (t += (8 * (u + i)) / (a.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Gc = null,
    Xc = null;
  function Wu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Nm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Tm(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Qc(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Zc = null;
  function xp() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Zc
        ? !1
        : ((Zc = e), !0)
      : ((Zc = null), !1);
  }
  var jm = typeof setTimeout == "function" ? setTimeout : void 0,
    vp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Am = typeof Promise == "function" ? Promise : void 0,
    Sp =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Am < "u"
          ? function (e) {
              return Am.resolve(null).then(e).catch(Ep);
            }
          : jm;
  function Ep(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function il(e) {
    return e === "head";
  }
  function _m(e, t) {
    var l = t,
      n = 0;
    do {
      var a = l.nextSibling;
      if ((e.removeChild(l), a && a.nodeType === 8))
        if (((l = a.data), l === "/$" || l === "/&")) {
          if (n === 0) {
            (e.removeChild(a), On(t));
            return;
          }
          n--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          n++;
        else if (l === "html") Aa(e.ownerDocument.documentElement);
        else if (l === "head") {
          ((l = e.ownerDocument.head), Aa(l));
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling,
              s = u.nodeName;
            (u[Zn] ||
              s === "SCRIPT" ||
              s === "STYLE" ||
              (s === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(u),
              (u = i));
          }
        } else l === "body" && Aa(e.ownerDocument.body);
      l = a;
    } while (l);
    On(t);
  }
  function zm(e, t) {
    var l = e;
    e = 0;
    do {
      var n = l.nextSibling;
      if (
        (l.nodeType === 1
          ? t
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (t
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        n && n.nodeType === 8)
      )
        if (((l = n.data), l === "/$")) {
          if (e === 0) break;
          e--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || e++;
      l = n;
    } while (l);
  }
  function Vc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Vc(l), Fi(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function Np(e, t, l, n) {
    for (; e.nodeType === 1; ) {
      var a = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (n) {
        if (!e[Zn])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((u = e.getAttribute("rel")),
                u === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== a.rel ||
                e.getAttribute("href") !==
                  (a.href == null || a.href === "" ? null : a.href) ||
                e.getAttribute("crossorigin") !==
                  (a.crossOrigin == null ? null : a.crossOrigin) ||
                e.getAttribute("title") !== (a.title == null ? null : a.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((u = e.getAttribute("src")),
                (u !== (a.src == null ? null : a.src) ||
                  e.getAttribute("type") !== (a.type == null ? null : a.type) ||
                  e.getAttribute("crossorigin") !==
                    (a.crossOrigin == null ? null : a.crossOrigin)) &&
                  u &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (((e = lt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Tp(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = lt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Om(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = lt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Kc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Jc(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function jp(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading") t();
    else {
      var n = function () {
        (t(), l.removeEventListener("DOMContentLoaded", n));
      };
      (l.addEventListener("DOMContentLoaded", n), (e._reactRetry = n));
    }
  }
  function lt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var kc = null;
  function Rm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0) return lt(e.nextSibling);
          t--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Dm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else (l !== "/$" && l !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Cm(e, t, l) {
    switch (((t = Wu(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(N(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(N(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(N(454));
        return e;
      default:
        throw Error(N(451));
    }
  }
  function Aa(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Fi(e);
  }
  var nt = new Map(),
    Mm = new Set();
  function Iu(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var wt = X.d;
  X.d = { f: Ap, r: _p, D: zp, C: Op, L: Rp, m: Dp, X: Mp, S: Cp, M: Up };
  function Ap() {
    var e = wt.f(),
      t = Qu();
    return e || t;
  }
  function _p(e) {
    var t = Jl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Fr(t) : wt.r(e);
  }
  var An = typeof document > "u" ? null : document;
  function Um(e, t, l) {
    var n = An;
    if (n && typeof t == "string" && t) {
      var a = $e(t);
      ((a = 'link[rel="' + e + '"][href="' + a + '"]'),
        typeof l == "string" && (a += '[crossorigin="' + l + '"]'),
        Mm.has(a) ||
          (Mm.add(a),
          (e = { rel: e, crossOrigin: l, href: t }),
          n.querySelector(a) === null &&
            ((t = n.createElement("link")),
            Se(t, "link", e),
            ye(t),
            n.head.appendChild(t))));
    }
  }
  function zp(e) {
    (wt.D(e), Um("dns-prefetch", e, null));
  }
  function Op(e, t) {
    (wt.C(e, t), Um("preconnect", e, t));
  }
  function Rp(e, t, l) {
    wt.L(e, t, l);
    var n = An;
    if (n && e && t) {
      var a = 'link[rel="preload"][as="' + $e(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((a += '[imagesrcset="' + $e(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (a += '[imagesizes="' + $e(l.imageSizes) + '"]'))
        : (a += '[href="' + $e(e) + '"]');
      var u = a;
      switch (t) {
        case "style":
          u = _n(e);
          break;
        case "script":
          u = zn(e);
      }
      nt.has(u) ||
        ((e = W(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l,
        )),
        nt.set(u, e),
        n.querySelector(a) !== null ||
          (t === "style" && n.querySelector(_a(u))) ||
          (t === "script" && n.querySelector(za(u))) ||
          ((t = n.createElement("link")),
          Se(t, "link", e),
          ye(t),
          n.head.appendChild(t)));
    }
  }
  function Dp(e, t) {
    wt.m(e, t);
    var l = An;
    if (l && e) {
      var n = t && typeof t.as == "string" ? t.as : "script",
        a =
          'link[rel="modulepreload"][as="' + $e(n) + '"][href="' + $e(e) + '"]',
        u = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = zn(e);
      }
      if (
        !nt.has(u) &&
        ((e = W({ rel: "modulepreload", href: e }, t)),
        nt.set(u, e),
        l.querySelector(a) === null)
      ) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(za(u))) return;
        }
        ((n = l.createElement("link")),
          Se(n, "link", e),
          ye(n),
          l.head.appendChild(n));
      }
    }
  }
  function Cp(e, t, l) {
    wt.S(e, t, l);
    var n = An;
    if (n && e) {
      var a = kl(n).hoistableStyles,
        u = _n(e);
      t = t || "default";
      var i = a.get(u);
      if (!i) {
        var s = { loading: 0, preload: null };
        if ((i = n.querySelector(_a(u)))) s.loading = 5;
        else {
          ((e = W({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = nt.get(u)) && $c(e, l));
          var c = (i = n.createElement("link"));
          (ye(c),
            Se(c, "link", e),
            (c._p = new Promise(function (o, r) {
              ((c.onload = o), (c.onerror = r));
            })),
            c.addEventListener("load", function () {
              s.loading |= 1;
            }),
            c.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            Pu(i, t, n));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: s }),
          a.set(u, i));
      }
    }
  }
  function Mp(e, t) {
    wt.X(e, t);
    var l = An;
    if (l && e) {
      var n = kl(l).hoistableScripts,
        a = zn(e),
        u = n.get(a);
      u ||
        ((u = l.querySelector(za(a))),
        u ||
          ((e = W({ src: e, async: !0 }, t)),
          (t = nt.get(a)) && Fc(e, t),
          (u = l.createElement("script")),
          ye(u),
          Se(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        n.set(a, u));
    }
  }
  function Up(e, t) {
    wt.M(e, t);
    var l = An;
    if (l && e) {
      var n = kl(l).hoistableScripts,
        a = zn(e),
        u = n.get(a);
      u ||
        ((u = l.querySelector(za(a))),
        u ||
          ((e = W({ src: e, async: !0, type: "module" }, t)),
          (t = nt.get(a)) && Fc(e, t),
          (u = l.createElement("script")),
          ye(u),
          Se(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        n.set(a, u));
    }
  }
  function wm(e, t, l, n) {
    var a = (a = Lt.current) ? Iu(a) : null;
    if (!a) throw Error(N(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = _n(l.href)),
            (l = kl(a).hoistableStyles),
            (n = l.get(t)),
            n ||
              ((n = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, n)),
            n)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = _n(l.href);
          var u = kl(a).hoistableStyles,
            i = u.get(e);
          if (
            (i ||
              ((a = a.ownerDocument || a),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, i),
              (u = a.querySelector(_a(e))) &&
                !u._p &&
                ((i.instance = u), (i.state.loading = 5)),
              nt.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                nt.set(e, l),
                u || wp(a, e, l, i.state))),
            t && n === null)
          )
            throw Error(N(528, ""));
          return i;
        }
        if (t && n !== null) throw Error(N(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = zn(l)),
              (l = kl(a).hoistableScripts),
              (n = l.get(t)),
              n ||
                ((n = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, n)),
              n)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(N(444, e));
    }
  }
  function _n(e) {
    return 'href="' + $e(e) + '"';
  }
  function _a(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Bm(e) {
    return W({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function wp(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (n.loading = 1)
      : ((t = e.createElement("link")),
        (n.preload = t),
        t.addEventListener("load", function () {
          return (n.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (n.loading |= 2);
        }),
        Se(t, "link", l),
        ye(t),
        e.head.appendChild(t));
  }
  function zn(e) {
    return '[src="' + $e(e) + '"]';
  }
  function za(e) {
    return "script[async]" + e;
  }
  function Hm(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var n = e.querySelector('style[data-href~="' + $e(l.href) + '"]');
          if (n) return ((t.instance = n), ye(n), n);
          var a = W({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (n = (e.ownerDocument || e).createElement("style")),
            ye(n),
            Se(n, "style", a),
            Pu(n, l.precedence, e),
            (t.instance = n)
          );
        case "stylesheet":
          a = _n(l.href);
          var u = e.querySelector(_a(a));
          if (u) return ((t.state.loading |= 4), (t.instance = u), ye(u), u);
          ((n = Bm(l)),
            (a = nt.get(a)) && $c(n, a),
            (u = (e.ownerDocument || e).createElement("link")),
            ye(u));
          var i = u;
          return (
            (i._p = new Promise(function (s, c) {
              ((i.onload = s), (i.onerror = c));
            })),
            Se(u, "link", n),
            (t.state.loading |= 4),
            Pu(u, l.precedence, e),
            (t.instance = u)
          );
        case "script":
          return (
            (u = zn(l.src)),
            (a = e.querySelector(za(u)))
              ? ((t.instance = a), ye(a), a)
              : ((n = l),
                (a = nt.get(u)) && ((n = W({}, l)), Fc(n, a)),
                (e = e.ownerDocument || e),
                (a = e.createElement("script")),
                ye(a),
                Se(a, "link", n),
                e.head.appendChild(a),
                (t.instance = a))
          );
        case "void":
          return null;
        default:
          throw Error(N(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        !(t.state.loading & 4) &&
        ((n = t.instance), (t.state.loading |= 4), Pu(n, l.precedence, e));
    return t.instance;
  }
  function Pu(e, t, l) {
    for (
      var n = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        a = n.length ? n[n.length - 1] : null,
        u = a,
        i = 0;
      i < n.length;
      i++
    ) {
      var s = n[i];
      if (s.dataset.precedence === t) u = s;
      else if (u !== a) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function $c(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Fc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var ei = null;
  function qm(e, t, l) {
    if (ei === null) {
      var n = new Map(),
        a = (ei = new Map());
      a.set(l, n);
    } else ((a = ei), (n = a.get(l)), n || ((n = new Map()), a.set(l, n)));
    if (n.has(e)) return n;
    for (
      n.set(e, null), l = l.getElementsByTagName(e), a = 0;
      a < l.length;
      a++
    ) {
      var u = l[a];
      if (
        !(
          u[Zn] ||
          u[ge] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = u.getAttribute(t) || "";
        i = e + i;
        var s = n.get(i);
        s ? s.push(u) : n.set(i, [u]);
      }
    }
    return n;
  }
  function Ym(e, t, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function Bp(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled),
              typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Lm(e) {
    return !(e.type === "stylesheet" && !(e.state.loading & 3));
  }
  function Hp(e, t, l, n) {
    if (
      l.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      !(l.state.loading & 4)
    ) {
      if (l.instance === null) {
        var a = _n(n.href),
          u = t.querySelector(_a(a));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = ti.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = u),
            ye(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (n = Bm(n)),
          (a = nt.get(a)) && $c(n, a),
          (u = u.createElement("link")),
          ye(u));
        var i = u;
        ((i._p = new Promise(function (s, c) {
          ((i.onload = s), (i.onerror = c));
        })),
          Se(u, "link", n),
          (l.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          !(l.state.loading & 3) &&
          (e.count++,
          (l = ti.bind(e)),
          t.addEventListener("load", l),
          t.addEventListener("error", l)));
    }
  }
  var Wc = 0;
  function qp(e, t) {
    return (
      e.stylesheets && e.count === 0 && ni(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
            var n = setTimeout(function () {
              if ((e.stylesheets && ni(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Wc === 0 && (Wc = 62500 * bp());
            var a = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && ni(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > Wc ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = l),
              function () {
                ((e.unsuspend = null), clearTimeout(n), clearTimeout(a));
              }
            );
          }
        : null
    );
  }
  function ti() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) ni(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var li = null;
  function ni(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (li = new Map()),
        t.forEach(Yp, e),
        (li = null),
        ti.call(e)));
  }
  function Yp(e, t) {
    if (!(t.state.loading & 4)) {
      var l = li.get(e);
      if (l) var n = l.get(null);
      else {
        ((l = new Map()), li.set(e, l));
        for (
          var a = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < a.length;
          u++
        ) {
          var i = a[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (l.set(i.dataset.precedence, i), (n = i));
        }
        n && l.set(null, n);
      }
      ((a = t.instance),
        (i = a.getAttribute("data-precedence")),
        (u = l.get(i) || n),
        u === n && l.set(null, a),
        l.set(i, a),
        this.count++,
        (n = ti.bind(this)),
        a.addEventListener("load", n),
        a.addEventListener("error", n),
        u
          ? u.parentNode.insertBefore(a, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(a, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Oa = {
    $$typeof: gt,
    Provider: null,
    Consumer: null,
    _currentValue: dl,
    _currentValue2: dl,
    _threadCount: 0,
  };
  function Lp(e, t, l, n, a, u, i, s, c) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ki(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ki(0)),
      (this.hiddenUpdates = Ki(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = a),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = c),
      (this.incompleteTransitions = new Map()));
  }
  function Gm(e, t, l, n, a, u, i, s, c, o, r, p) {
    return (
      (e = new Lp(e, t, l, i, c, o, r, p, s)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = Le(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = Rs()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: n, isDehydrated: l, cache: t }),
      Us(u),
      e
    );
  }
  function Xm(e) {
    return e ? ((e = an), e) : an;
  }
  function Qm(e, t, l, n, a, u) {
    ((a = Xm(a)),
      n.context === null ? (n.context = a) : (n.pendingContext = a),
      (n = $t(t)),
      (n.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (n.callback = u),
      (l = Ft(e, n, t)),
      l !== null && (Me(l, e, t), sa(l, e, t)));
  }
  function Zm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Ic(e, t) {
    (Zm(e, t), (e = e.alternate) && Zm(e, t));
  }
  function Vm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = xl(e, 67108864);
      (t !== null && Me(t, e, 67108864), Ic(e, 67108864));
    }
  }
  function Km(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ve();
      t = Ji(t);
      var l = xl(e, t);
      (l !== null && Me(l, e, t), Ic(e, t));
    }
  }
  var ai = !0;
  function Gp(e, t, l, n) {
    var a = D.T;
    D.T = null;
    var u = X.p;
    try {
      ((X.p = 2), Pc(e, t, l, n));
    } finally {
      ((X.p = u), (D.T = a));
    }
  }
  function Xp(e, t, l, n) {
    var a = D.T;
    D.T = null;
    var u = X.p;
    try {
      ((X.p = 8), Pc(e, t, l, n));
    } finally {
      ((X.p = u), (D.T = a));
    }
  }
  function Pc(e, t, l, n) {
    if (ai) {
      var a = ef(n);
      if (a === null) (Yc(e, t, n, ui, l), km(e, n));
      else if (Zp(a, e, t, l, n)) n.stopPropagation();
      else if ((km(e, n), t & 4 && -1 < Qp.indexOf(e))) {
        for (; a !== null; ) {
          var u = Jl(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = hl(u.pendingLanes);
                  if (i !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; i; ) {
                      var c = 1 << (31 - qe(i));
                      ((s.entanglements[1] |= c), (i &= ~c));
                    }
                    (pt(u), !(Q & 6) && ((Gu = Be() + 500), Na(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((s = xl(u, 2)), s !== null && Me(s, u, 2), Qu(), Ic(u, 2));
            }
          if (((u = ef(n)), u === null && Yc(e, t, n, ui, l), u === a)) break;
          a = u;
        }
        a !== null && n.stopPropagation();
      } else Yc(e, t, n, null, l);
    }
  }
  function ef(e) {
    return ((e = ls(e)), tf(e));
  }
  var ui = null;
  function tf(e) {
    if (((ui = null), (e = Kl(e)), e !== null)) {
      var t = Bn(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = Vf(t)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = Kf(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((ui = e), null);
  }
  function Jm(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (zh()) {
          case eo:
            return 2;
          case to:
            return 8;
          case ka:
          case Oh:
            return 32;
          case lo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var lf = !1,
    sl = null,
    cl = null,
    fl = null,
    Ra = new Map(),
    Da = new Map(),
    ol = [],
    Qp =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function km(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        sl = null;
        break;
      case "dragenter":
      case "dragleave":
        cl = null;
        break;
      case "mouseover":
      case "mouseout":
        fl = null;
        break;
      case "pointerover":
      case "pointerout":
        Ra.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Da.delete(t.pointerId);
    }
  }
  function Ca(e, t, l, n, a, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: n,
          nativeEvent: u,
          targetContainers: [a],
        }),
        t !== null && ((t = Jl(t)), t !== null && Vm(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function Zp(e, t, l, n, a) {
    switch (t) {
      case "focusin":
        return ((sl = Ca(sl, e, t, l, n, a)), !0);
      case "dragenter":
        return ((cl = Ca(cl, e, t, l, n, a)), !0);
      case "mouseover":
        return ((fl = Ca(fl, e, t, l, n, a)), !0);
      case "pointerover":
        var u = a.pointerId;
        return (Ra.set(u, Ca(Ra.get(u) || null, e, t, l, n, a)), !0);
      case "gotpointercapture":
        return (
          (u = a.pointerId),
          Da.set(u, Ca(Da.get(u) || null, e, t, l, n, a)),
          !0
        );
    }
    return !1;
  }
  function $m(e) {
    var t = Kl(e.target);
    if (t !== null) {
      var l = Bn(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = Vf(l)), t !== null)) {
            ((e.blockedOn = t),
              co(e.priority, function () {
                Km(l);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = Kf(l)), t !== null)) {
            ((e.blockedOn = t),
              co(e.priority, function () {
                Km(l);
              }));
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ii(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = ef(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(l.type, l);
        ((ts = n), l.target.dispatchEvent(n), (ts = null));
      } else return ((t = Jl(l)), t !== null && Vm(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function Fm(e, t, l) {
    ii(e) && l.delete(t);
  }
  function Vp() {
    ((lf = !1),
      sl !== null && ii(sl) && (sl = null),
      cl !== null && ii(cl) && (cl = null),
      fl !== null && ii(fl) && (fl = null),
      Ra.forEach(Fm),
      Da.forEach(Fm));
  }
  function si(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      lf ||
        ((lf = !0),
        de.unstable_scheduleCallback(de.unstable_NormalPriority, Vp)));
  }
  var ci = null;
  function Wm(e) {
    ci !== e &&
      ((ci = e),
      de.unstable_scheduleCallback(de.unstable_NormalPriority, function () {
        ci === e && (ci = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            n = e[t + 1],
            a = e[t + 2];
          if (typeof n != "function") {
            if (tf(n || l) === null) continue;
            break;
          }
          var u = Jl(l);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            ec(u, { pending: !0, data: a, method: l.method, action: n }, n, a));
        }
      }));
  }
  function On(e) {
    function t(c) {
      return si(c, e);
    }
    (sl !== null && si(sl, e),
      cl !== null && si(cl, e),
      fl !== null && si(fl, e),
      Ra.forEach(t),
      Da.forEach(t));
    for (var l = 0; l < ol.length; l++) {
      var n = ol[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < ol.length && ((l = ol[0]), l.blockedOn === null); )
      ($m(l), l.blockedOn === null && ol.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (n = 0; n < l.length; n += 3) {
        var a = l[n],
          u = l[n + 1],
          i = a[_e] || null;
        if (typeof u == "function") i || Wm(l);
        else if (i) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (((a = u), (i = u[_e] || null))) s = i.formAction;
            else if (tf(a) !== null) continue;
          } else s = i.action;
          (typeof s == "function" ? (l[n + 1] = s) : (l.splice(n, 3), (n -= 3)),
            Wm(l));
        }
      }
  }
  function Im() {
    function e(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (a = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (a !== null && (a(), (a = null)), n || setTimeout(l, 20));
    }
    function l() {
      if (!n && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var n = !1,
        a = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(l, 100),
        function () {
          ((n = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            a !== null && (a(), (a = null)));
        }
      );
    }
  }
  function nf(e) {
    this._internalRoot = e;
  }
  ((fi.prototype.render = nf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(N(409));
      var l = t.current,
        n = Ve();
      Qm(l, n, e, t, null, null);
    }),
    (fi.prototype.unmount = nf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Qm(e.current, 2, null, e, null, null), Qu(), (t[Vl] = null));
        }
      }));
  function fi(e) {
    this._internalRoot = e;
  }
  fi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = so();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < ol.length && t !== 0 && t < ol[l].priority; l++);
      (ol.splice(l, 0, e), l === 0 && $m(e));
    }
  };
  var Pm = Qf.version;
  if (Pm !== "19.2.4") throw Error(N(527, Pm, "19.2.4"));
  X.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(N(188))
        : ((e = Object.keys(e).join(",")), Error(N(268, e)));
    return (
      (e = Sh(t)),
      (e = e !== null ? kf(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Kp = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!oi.isDisabled && oi.supportsFiber)
      try {
        ((Gn = oi.inject(Kp)), (He = oi));
      } catch {}
  }
  ((Ga.createRoot = function (e, t) {
    if (!Zf(e)) throw Error(N(299));
    var l = !1,
      n = "",
      a = id,
      u = sd,
      i = cd;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (l = !0),
        t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (a = t.onUncaughtError),
        t.onCaughtError !== void 0 && (u = t.onCaughtError),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
      (t = Gm(e, 1, !1, null, null, l, n, null, a, u, i, Im)),
      (e[Vl] = t.current),
      qc(e),
      new nf(t)
    );
  }),
    (Ga.hydrateRoot = function (e, t, l) {
      if (!Zf(e)) throw Error(N(299));
      var n = !1,
        a = "",
        u = id,
        i = sd,
        s = cd,
        c = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (n = !0),
          l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (i = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.formState !== void 0 && (c = l.formState)),
        (t = Gm(e, 1, !0, t, l ?? null, n, a, c, u, i, s, Im)),
        (t.context = Xm(null)),
        (l = t.current),
        (n = Ve()),
        (n = Ji(n)),
        (a = $t(n)),
        (a.callback = null),
        Ft(l, a, n),
        (l = n),
        (t.current.lanes = l),
        Qn(t, l),
        pt(t),
        (e[Vl] = t.current),
        qc(e),
        new fi(t)
      );
    }),
    (Ga.version = "19.2.4"));
  function e0() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e0);
      } catch (e) {
        console.error(e);
      }
  }
  (e0(), (Af.exports = Ga));
  var Jp = Af.exports;
  function t0(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const { toString: kp } = Object.prototype,
    { getPrototypeOf: af } = Object,
    { iterator: ri, toStringTag: l0 } = Symbol,
    di = ((e) => (t) => {
      const l = kp.call(t);
      return e[l] || (e[l] = l.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    ft = (e) => ((e = e.toLowerCase()), (t) => di(t) === e),
    mi = (e) => (t) => typeof t === e,
    { isArray: Rn } = Array,
    Dn = mi("undefined");
  function Ma(e) {
    return (
      e !== null &&
      !Dn(e) &&
      e.constructor !== null &&
      !Dn(e.constructor) &&
      Ue(e.constructor.isBuffer) &&
      e.constructor.isBuffer(e)
    );
  }
  const n0 = ft("ArrayBuffer");
  function $p(e) {
    let t;
    return (
      typeof ArrayBuffer < "u" && ArrayBuffer.isView
        ? (t = ArrayBuffer.isView(e))
        : (t = e && e.buffer && n0(e.buffer)),
      t
    );
  }
  const Fp = mi("string"),
    Ue = mi("function"),
    a0 = mi("number"),
    Ua = (e) => e !== null && typeof e == "object",
    Wp = (e) => e === !0 || e === !1,
    hi = (e) => {
      if (di(e) !== "object") return !1;
      const t = af(e);
      return (
        (t === null ||
          t === Object.prototype ||
          Object.getPrototypeOf(t) === null) &&
        !(l0 in e) &&
        !(ri in e)
      );
    },
    Ip = (e) => {
      if (!Ua(e) || Ma(e)) return !1;
      try {
        return (
          Object.keys(e).length === 0 &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      } catch {
        return !1;
      }
    },
    Pp = ft("Date"),
    eg = ft("File"),
    tg = (e) => !!(e && typeof e.uri < "u"),
    lg = (e) => e && typeof e.getParts < "u",
    ng = ft("Blob"),
    ag = ft("FileList"),
    ug = (e) => Ua(e) && Ue(e.pipe);
  function ig() {
    return typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {};
  }
  const u0 = ig(),
    i0 = typeof u0.FormData < "u" ? u0.FormData : void 0,
    sg = (e) => {
      let t;
      return (
        e &&
        ((i0 && e instanceof i0) ||
          (Ue(e.append) &&
            ((t = di(e)) === "formdata" ||
              (t === "object" &&
                Ue(e.toString) &&
                e.toString() === "[object FormData]"))))
      );
    },
    cg = ft("URLSearchParams"),
    [fg, og, rg, dg] = ["ReadableStream", "Request", "Response", "Headers"].map(
      ft,
    ),
    mg = (e) =>
      e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function wa(e, t, { allOwnKeys: l = !1 } = {}) {
    if (e === null || typeof e > "u") return;
    let n, a;
    if ((typeof e != "object" && (e = [e]), Rn(e)))
      for (n = 0, a = e.length; n < a; n++) t.call(null, e[n], n, e);
    else {
      if (Ma(e)) return;
      const u = l ? Object.getOwnPropertyNames(e) : Object.keys(e),
        i = u.length;
      let s;
      for (n = 0; n < i; n++) ((s = u[n]), t.call(null, e[s], s, e));
    }
  }
  function s0(e, t) {
    if (Ma(e)) return null;
    t = t.toLowerCase();
    const l = Object.keys(e);
    let n = l.length,
      a;
    for (; n-- > 0; ) if (((a = l[n]), t === a.toLowerCase())) return a;
    return null;
  }
  const Cl =
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
          ? self
          : typeof window < "u"
            ? window
            : global,
    c0 = (e) => !Dn(e) && e !== Cl;
  function uf() {
    const { caseless: e, skipUndefined: t } = (c0(this) && this) || {},
      l = {},
      n = (a, u) => {
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return;
        const i = (e && s0(l, u)) || u;
        hi(l[i]) && hi(a)
          ? (l[i] = uf(l[i], a))
          : hi(a)
            ? (l[i] = uf({}, a))
            : Rn(a)
              ? (l[i] = a.slice())
              : (!t || !Dn(a)) && (l[i] = a);
      };
    for (let a = 0, u = arguments.length; a < u; a++)
      arguments[a] && wa(arguments[a], n);
    return l;
  }
  const hg = (e, t, l, { allOwnKeys: n } = {}) => (
      wa(
        t,
        (a, u) => {
          l && Ue(a)
            ? Object.defineProperty(e, u, {
                value: t0(a, l),
                writable: !0,
                enumerable: !0,
                configurable: !0,
              })
            : Object.defineProperty(e, u, {
                value: a,
                writable: !0,
                enumerable: !0,
                configurable: !0,
              });
        },
        { allOwnKeys: n },
      ),
      e
    ),
    yg = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    pg = (e, t, l, n) => {
      ((e.prototype = Object.create(t.prototype, n)),
        Object.defineProperty(e.prototype, "constructor", {
          value: e,
          writable: !0,
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "super", { value: t.prototype }),
        l && Object.assign(e.prototype, l));
    },
    gg = (e, t, l, n) => {
      let a, u, i;
      const s = {};
      if (((t = t || {}), e == null)) return t;
      do {
        for (a = Object.getOwnPropertyNames(e), u = a.length; u-- > 0; )
          ((i = a[u]),
            (!n || n(i, e, t)) && !s[i] && ((t[i] = e[i]), (s[i] = !0)));
        e = l !== !1 && af(e);
      } while (e && (!l || l(e, t)) && e !== Object.prototype);
      return t;
    },
    bg = (e, t, l) => {
      ((e = String(e)),
        (l === void 0 || l > e.length) && (l = e.length),
        (l -= t.length));
      const n = e.indexOf(t, l);
      return n !== -1 && n === l;
    },
    xg = (e) => {
      if (!e) return null;
      if (Rn(e)) return e;
      let t = e.length;
      if (!a0(t)) return null;
      const l = new Array(t);
      for (; t-- > 0; ) l[t] = e[t];
      return l;
    },
    vg = (
      (e) => (t) =>
        e && t instanceof e
    )(typeof Uint8Array < "u" && af(Uint8Array)),
    Sg = (e, t) => {
      const n = (e && e[ri]).call(e);
      let a;
      for (; (a = n.next()) && !a.done; ) {
        const u = a.value;
        t.call(e, u[0], u[1]);
      }
    },
    Eg = (e, t) => {
      let l;
      const n = [];
      for (; (l = e.exec(t)) !== null; ) n.push(l);
      return n;
    },
    Ng = ft("HTMLFormElement"),
    Tg = (e) =>
      e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (l, n, a) {
        return n.toUpperCase() + a;
      }),
    f0 = (
      ({ hasOwnProperty: e }) =>
      (t, l) =>
        e.call(t, l)
    )(Object.prototype),
    jg = ft("RegExp"),
    o0 = (e, t) => {
      const l = Object.getOwnPropertyDescriptors(e),
        n = {};
      (wa(l, (a, u) => {
        let i;
        (i = t(a, u, e)) !== !1 && (n[u] = i || a);
      }),
        Object.defineProperties(e, n));
    },
    Ag = (e) => {
      o0(e, (t, l) => {
        if (Ue(e) && ["arguments", "caller", "callee"].indexOf(l) !== -1)
          return !1;
        const n = e[l];
        if (Ue(n)) {
          if (((t.enumerable = !1), "writable" in t)) {
            t.writable = !1;
            return;
          }
          t.set ||
            (t.set = () => {
              throw Error("Can not rewrite read-only method '" + l + "'");
            });
        }
      });
    },
    _g = (e, t) => {
      const l = {},
        n = (a) => {
          a.forEach((u) => {
            l[u] = !0;
          });
        };
      return (Rn(e) ? n(e) : n(String(e).split(t)), l);
    },
    zg = () => {},
    Og = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
  function Rg(e) {
    return !!(e && Ue(e.append) && e[l0] === "FormData" && e[ri]);
  }
  const Dg = (e) => {
      const t = new Array(10),
        l = (n, a) => {
          if (Ua(n)) {
            if (t.indexOf(n) >= 0) return;
            if (Ma(n)) return n;
            if (!("toJSON" in n)) {
              t[a] = n;
              const u = Rn(n) ? [] : {};
              return (
                wa(n, (i, s) => {
                  const c = l(i, a + 1);
                  !Dn(c) && (u[s] = c);
                }),
                (t[a] = void 0),
                u
              );
            }
          }
          return n;
        };
      return l(e, 0);
    },
    Cg = ft("AsyncFunction"),
    Mg = (e) => e && (Ua(e) || Ue(e)) && Ue(e.then) && Ue(e.catch),
    r0 = ((e, t) =>
      e
        ? setImmediate
        : t
          ? ((l, n) => (
              Cl.addEventListener(
                "message",
                ({ source: a, data: u }) => {
                  a === Cl && u === l && n.length && n.shift()();
                },
                !1,
              ),
              (a) => {
                (n.push(a), Cl.postMessage(l, "*"));
              }
            ))(`axios@${Math.random()}`, [])
          : (l) => setTimeout(l))(
      typeof setImmediate == "function",
      Ue(Cl.postMessage),
    ),
    Ug =
      typeof queueMicrotask < "u"
        ? queueMicrotask.bind(Cl)
        : (typeof process < "u" && process.nextTick) || r0,
    x = {
      isArray: Rn,
      isArrayBuffer: n0,
      isBuffer: Ma,
      isFormData: sg,
      isArrayBufferView: $p,
      isString: Fp,
      isNumber: a0,
      isBoolean: Wp,
      isObject: Ua,
      isPlainObject: hi,
      isEmptyObject: Ip,
      isReadableStream: fg,
      isRequest: og,
      isResponse: rg,
      isHeaders: dg,
      isUndefined: Dn,
      isDate: Pp,
      isFile: eg,
      isReactNativeBlob: tg,
      isReactNative: lg,
      isBlob: ng,
      isRegExp: jg,
      isFunction: Ue,
      isStream: ug,
      isURLSearchParams: cg,
      isTypedArray: vg,
      isFileList: ag,
      forEach: wa,
      merge: uf,
      extend: hg,
      trim: mg,
      stripBOM: yg,
      inherits: pg,
      toFlatObject: gg,
      kindOf: di,
      kindOfTest: ft,
      endsWith: bg,
      toArray: xg,
      forEachEntry: Sg,
      matchAll: Eg,
      isHTMLForm: Ng,
      hasOwnProperty: f0,
      hasOwnProp: f0,
      reduceDescriptors: o0,
      freezeMethods: Ag,
      toObjectSet: _g,
      toCamelCase: Tg,
      noop: zg,
      toFiniteNumber: Og,
      findKey: s0,
      global: Cl,
      isContextDefined: c0,
      isSpecCompliantForm: Rg,
      toJSONObject: Dg,
      isAsyncFn: Cg,
      isThenable: Mg,
      setImmediate: r0,
      asap: Ug,
      isIterable: (e) => e != null && Ue(e[ri]),
    };
  let C = class $0 extends Error {
    static from(t, l, n, a, u, i) {
      const s = new $0(t.message, l || t.code, n, a, u);
      return (
        (s.cause = t),
        (s.name = t.name),
        t.status != null && s.status == null && (s.status = t.status),
        i && Object.assign(s, i),
        s
      );
    }
    constructor(t, l, n, a, u) {
      (super(t),
        Object.defineProperty(this, "message", {
          value: t,
          enumerable: !0,
          writable: !0,
          configurable: !0,
        }),
        (this.name = "AxiosError"),
        (this.isAxiosError = !0),
        l && (this.code = l),
        n && (this.config = n),
        a && (this.request = a),
        u && ((this.response = u), (this.status = u.status)));
    }
    toJSON() {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: x.toJSONObject(this.config),
        code: this.code,
        status: this.status,
      };
    }
  };
  ((C.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE"),
    (C.ERR_BAD_OPTION = "ERR_BAD_OPTION"),
    (C.ECONNABORTED = "ECONNABORTED"),
    (C.ETIMEDOUT = "ETIMEDOUT"),
    (C.ERR_NETWORK = "ERR_NETWORK"),
    (C.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS"),
    (C.ERR_DEPRECATED = "ERR_DEPRECATED"),
    (C.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE"),
    (C.ERR_BAD_REQUEST = "ERR_BAD_REQUEST"),
    (C.ERR_CANCELED = "ERR_CANCELED"),
    (C.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT"),
    (C.ERR_INVALID_URL = "ERR_INVALID_URL"));
  const wg = null;
  function sf(e) {
    return x.isPlainObject(e) || x.isArray(e);
  }
  function d0(e) {
    return x.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function cf(e, t, l) {
    return e
      ? e
          .concat(t)
          .map(function (a, u) {
            return ((a = d0(a)), !l && u ? "[" + a + "]" : a);
          })
          .join(l ? "." : "")
      : t;
  }
  function Bg(e) {
    return x.isArray(e) && !e.some(sf);
  }
  const Hg = x.toFlatObject(x, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
  });
  function yi(e, t, l) {
    if (!x.isObject(e)) throw new TypeError("target must be an object");
    ((t = t || new FormData()),
      (l = x.toFlatObject(
        l,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (S, E) {
          return !x.isUndefined(E[S]);
        },
      )));
    const n = l.metaTokens,
      a = l.visitor || r,
      u = l.dots,
      i = l.indexes,
      c = (l.Blob || (typeof Blob < "u" && Blob)) && x.isSpecCompliantForm(t);
    if (!x.isFunction(a)) throw new TypeError("visitor must be a function");
    function o(g) {
      if (g === null) return "";
      if (x.isDate(g)) return g.toISOString();
      if (x.isBoolean(g)) return g.toString();
      if (!c && x.isBlob(g))
        throw new C("Blob is not supported. Use a Buffer instead.");
      return x.isArrayBuffer(g) || x.isTypedArray(g)
        ? c && typeof Blob == "function"
          ? new Blob([g])
          : Buffer.from(g)
        : g;
    }
    function r(g, S, E) {
      let y = g;
      if (x.isReactNative(t) && x.isReactNativeBlob(g))
        return (t.append(cf(E, S, u), o(g)), !1);
      if (g && !E && typeof g == "object") {
        if (x.endsWith(S, "{}"))
          ((S = n ? S : S.slice(0, -2)), (g = JSON.stringify(g)));
        else if (
          (x.isArray(g) && Bg(g)) ||
          ((x.isFileList(g) || x.endsWith(S, "[]")) && (y = x.toArray(g)))
        )
          return (
            (S = d0(S)),
            y.forEach(function (b, v) {
              !(x.isUndefined(b) || b === null) &&
                t.append(
                  i === !0 ? cf([S], v, u) : i === null ? S : S + "[]",
                  o(b),
                );
            }),
            !1
          );
      }
      return sf(g) ? !0 : (t.append(cf(E, S, u), o(g)), !1);
    }
    const p = [],
      d = Object.assign(Hg, {
        defaultVisitor: r,
        convertValue: o,
        isVisitable: sf,
      });
    function m(g, S) {
      if (!x.isUndefined(g)) {
        if (p.indexOf(g) !== -1)
          throw Error("Circular reference detected in " + S.join("."));
        (p.push(g),
          x.forEach(g, function (y, h) {
            (!(x.isUndefined(y) || y === null) &&
              a.call(t, y, x.isString(h) ? h.trim() : h, S, d)) === !0 &&
              m(y, S ? S.concat(h) : [h]);
          }),
          p.pop());
      }
    }
    if (!x.isObject(e)) throw new TypeError("data must be an object");
    return (m(e), t);
  }
  function m0(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
      return t[n];
    });
  }
  function ff(e, t) {
    ((this._pairs = []), e && yi(e, this, t));
  }
  const h0 = ff.prototype;
  ((h0.append = function (t, l) {
    this._pairs.push([t, l]);
  }),
    (h0.toString = function (t) {
      const l = t
        ? function (n) {
            return t.call(this, n, m0);
          }
        : m0;
      return this._pairs
        .map(function (a) {
          return l(a[0]) + "=" + l(a[1]);
        }, "")
        .join("&");
    }));
  function qg(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+");
  }
  function y0(e, t, l) {
    if (!t) return e;
    const n = (l && l.encode) || qg,
      a = x.isFunction(l) ? { serialize: l } : l,
      u = a && a.serialize;
    let i;
    if (
      (u
        ? (i = u(t, a))
        : (i = x.isURLSearchParams(t)
            ? t.toString()
            : new ff(t, a).toString(n)),
      i)
    ) {
      const s = e.indexOf("#");
      (s !== -1 && (e = e.slice(0, s)),
        (e += (e.indexOf("?") === -1 ? "?" : "&") + i));
    }
    return e;
  }
  class p0 {
    constructor() {
      this.handlers = [];
    }
    use(t, l, n) {
      return (
        this.handlers.push({
          fulfilled: t,
          rejected: l,
          synchronous: n ? n.synchronous : !1,
          runWhen: n ? n.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(t) {
      this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(t) {
      x.forEach(this.handlers, function (n) {
        n !== null && t(n);
      });
    }
  }
  const of = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
      legacyInterceptorReqResOrdering: !0,
    },
    Yg = {
      isBrowser: !0,
      classes: {
        URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : ff,
        FormData: typeof FormData < "u" ? FormData : null,
        Blob: typeof Blob < "u" ? Blob : null,
      },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    rf = typeof window < "u" && typeof document < "u",
    df = (typeof navigator == "object" && navigator) || void 0,
    Lg =
      rf &&
      (!df || ["ReactNative", "NativeScript", "NS"].indexOf(df.product) < 0),
    Gg =
      typeof WorkerGlobalScope < "u" &&
      self instanceof WorkerGlobalScope &&
      typeof self.importScripts == "function",
    Xg = (rf && window.location.href) || "http://localhost",
    Ne = {
      ...Object.freeze(
        Object.defineProperty(
          {
            __proto__: null,
            hasBrowserEnv: rf,
            hasStandardBrowserEnv: Lg,
            hasStandardBrowserWebWorkerEnv: Gg,
            navigator: df,
            origin: Xg,
          },
          Symbol.toStringTag,
          { value: "Module" },
        ),
      ),
      ...Yg,
    };
  function Qg(e, t) {
    return yi(e, new Ne.classes.URLSearchParams(), {
      visitor: function (l, n, a, u) {
        return Ne.isNode && x.isBuffer(l)
          ? (this.append(n, l.toString("base64")), !1)
          : u.defaultVisitor.apply(this, arguments);
      },
      ...t,
    });
  }
  function Zg(e) {
    return x
      .matchAll(/\w+|\[(\w*)]/g, e)
      .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
  }
  function Vg(e) {
    const t = {},
      l = Object.keys(e);
    let n;
    const a = l.length;
    let u;
    for (n = 0; n < a; n++) ((u = l[n]), (t[u] = e[u]));
    return t;
  }
  function g0(e) {
    function t(l, n, a, u) {
      let i = l[u++];
      if (i === "__proto__") return !0;
      const s = Number.isFinite(+i),
        c = u >= l.length;
      return (
        (i = !i && x.isArray(a) ? a.length : i),
        c
          ? (x.hasOwnProp(a, i) ? (a[i] = [a[i], n]) : (a[i] = n), !s)
          : ((!a[i] || !x.isObject(a[i])) && (a[i] = []),
            t(l, n, a[i], u) && x.isArray(a[i]) && (a[i] = Vg(a[i])),
            !s)
      );
    }
    if (x.isFormData(e) && x.isFunction(e.entries)) {
      const l = {};
      return (
        x.forEachEntry(e, (n, a) => {
          t(Zg(n), a, l, 0);
        }),
        l
      );
    }
    return null;
  }
  function Kg(e, t, l) {
    if (x.isString(e))
      try {
        return ((t || JSON.parse)(e), x.trim(e));
      } catch (n) {
        if (n.name !== "SyntaxError") throw n;
      }
    return (l || JSON.stringify)(e);
  }
  const Ba = {
    transitional: of,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
      function (t, l) {
        const n = l.getContentType() || "",
          a = n.indexOf("application/json") > -1,
          u = x.isObject(t);
        if ((u && x.isHTMLForm(t) && (t = new FormData(t)), x.isFormData(t)))
          return a ? JSON.stringify(g0(t)) : t;
        if (
          x.isArrayBuffer(t) ||
          x.isBuffer(t) ||
          x.isStream(t) ||
          x.isFile(t) ||
          x.isBlob(t) ||
          x.isReadableStream(t)
        )
          return t;
        if (x.isArrayBufferView(t)) return t.buffer;
        if (x.isURLSearchParams(t))
          return (
            l.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1,
            ),
            t.toString()
          );
        let s;
        if (u) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return Qg(t, this.formSerializer).toString();
          if ((s = x.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
            const c = this.env && this.env.FormData;
            return yi(
              s ? { "files[]": t } : t,
              c && new c(),
              this.formSerializer,
            );
          }
        }
        return u || a ? (l.setContentType("application/json", !1), Kg(t)) : t;
      },
    ],
    transformResponse: [
      function (t) {
        const l = this.transitional || Ba.transitional,
          n = l && l.forcedJSONParsing,
          a = this.responseType === "json";
        if (x.isResponse(t) || x.isReadableStream(t)) return t;
        if (t && x.isString(t) && ((n && !this.responseType) || a)) {
          const i = !(l && l.silentJSONParsing) && a;
          try {
            return JSON.parse(t, this.parseReviver);
          } catch (s) {
            if (i)
              throw s.name === "SyntaxError"
                ? C.from(s, C.ERR_BAD_RESPONSE, this, null, this.response)
                : s;
          }
        }
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: Ne.classes.FormData, Blob: Ne.classes.Blob },
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0,
      },
    },
  };
  x.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    Ba.headers[e] = {};
  });
  const Jg = x.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    kg = (e) => {
      const t = {};
      let l, n, a;
      return (
        e &&
          e
            .split(
              `
`,
            )
            .forEach(function (i) {
              ((a = i.indexOf(":")),
                (l = i.substring(0, a).trim().toLowerCase()),
                (n = i.substring(a + 1).trim()),
                !(!l || (t[l] && Jg[l])) &&
                  (l === "set-cookie"
                    ? t[l]
                      ? t[l].push(n)
                      : (t[l] = [n])
                    : (t[l] = t[l] ? t[l] + ", " + n : n)));
            }),
        t
      );
    },
    b0 = Symbol("internals");
  function Ha(e) {
    return e && String(e).trim().toLowerCase();
  }
  function pi(e) {
    return e === !1 || e == null ? e : x.isArray(e) ? e.map(pi) : String(e);
  }
  function $g(e) {
    const t = Object.create(null),
      l = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let n;
    for (; (n = l.exec(e)); ) t[n[1]] = n[2];
    return t;
  }
  const Fg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
  function mf(e, t, l, n, a) {
    if (x.isFunction(n)) return n.call(this, t, l);
    if ((a && (t = l), !!x.isString(t))) {
      if (x.isString(n)) return t.indexOf(n) !== -1;
      if (x.isRegExp(n)) return n.test(t);
    }
  }
  function Wg(e) {
    return e
      .trim()
      .toLowerCase()
      .replace(/([a-z\d])(\w*)/g, (t, l, n) => l.toUpperCase() + n);
  }
  function Ig(e, t) {
    const l = x.toCamelCase(" " + t);
    ["get", "set", "has"].forEach((n) => {
      Object.defineProperty(e, n + l, {
        value: function (a, u, i) {
          return this[n].call(this, t, a, u, i);
        },
        configurable: !0,
      });
    });
  }
  let we = class {
    constructor(t) {
      t && this.set(t);
    }
    set(t, l, n) {
      const a = this;
      function u(s, c, o) {
        const r = Ha(c);
        if (!r) throw new Error("header name must be a non-empty string");
        const p = x.findKey(a, r);
        (!p || a[p] === void 0 || o === !0 || (o === void 0 && a[p] !== !1)) &&
          (a[p || c] = pi(s));
      }
      const i = (s, c) => x.forEach(s, (o, r) => u(o, r, c));
      if (x.isPlainObject(t) || t instanceof this.constructor) i(t, l);
      else if (x.isString(t) && (t = t.trim()) && !Fg(t)) i(kg(t), l);
      else if (x.isObject(t) && x.isIterable(t)) {
        let s = {},
          c,
          o;
        for (const r of t) {
          if (!x.isArray(r))
            throw TypeError("Object iterator must return a key-value pair");
          s[(o = r[0])] = (c = s[o])
            ? x.isArray(c)
              ? [...c, r[1]]
              : [c, r[1]]
            : r[1];
        }
        i(s, l);
      } else t != null && u(l, t, n);
      return this;
    }
    get(t, l) {
      if (((t = Ha(t)), t)) {
        const n = x.findKey(this, t);
        if (n) {
          const a = this[n];
          if (!l) return a;
          if (l === !0) return $g(a);
          if (x.isFunction(l)) return l.call(this, a, n);
          if (x.isRegExp(l)) return l.exec(a);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(t, l) {
      if (((t = Ha(t)), t)) {
        const n = x.findKey(this, t);
        return !!(n && this[n] !== void 0 && (!l || mf(this, this[n], n, l)));
      }
      return !1;
    }
    delete(t, l) {
      const n = this;
      let a = !1;
      function u(i) {
        if (((i = Ha(i)), i)) {
          const s = x.findKey(n, i);
          s && (!l || mf(n, n[s], s, l)) && (delete n[s], (a = !0));
        }
      }
      return (x.isArray(t) ? t.forEach(u) : u(t), a);
    }
    clear(t) {
      const l = Object.keys(this);
      let n = l.length,
        a = !1;
      for (; n--; ) {
        const u = l[n];
        (!t || mf(this, this[u], u, t, !0)) && (delete this[u], (a = !0));
      }
      return a;
    }
    normalize(t) {
      const l = this,
        n = {};
      return (
        x.forEach(this, (a, u) => {
          const i = x.findKey(n, u);
          if (i) {
            ((l[i] = pi(a)), delete l[u]);
            return;
          }
          const s = t ? Wg(u) : String(u).trim();
          (s !== u && delete l[u], (l[s] = pi(a)), (n[s] = !0));
        }),
        this
      );
    }
    concat(...t) {
      return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
      const l = Object.create(null);
      return (
        x.forEach(this, (n, a) => {
          n != null &&
            n !== !1 &&
            (l[a] = t && x.isArray(n) ? n.join(", ") : n);
        }),
        l
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([t, l]) => t + ": " + l).join(`
`);
    }
    getSetCookie() {
      return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(t) {
      return t instanceof this ? t : new this(t);
    }
    static concat(t, ...l) {
      const n = new this(t);
      return (l.forEach((a) => n.set(a)), n);
    }
    static accessor(t) {
      const n = (this[b0] = this[b0] = { accessors: {} }).accessors,
        a = this.prototype;
      function u(i) {
        const s = Ha(i);
        n[s] || (Ig(a, i), (n[s] = !0));
      }
      return (x.isArray(t) ? t.forEach(u) : u(t), this);
    }
  };
  (we.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    x.reduceDescriptors(we.prototype, ({ value: e }, t) => {
      let l = t[0].toUpperCase() + t.slice(1);
      return {
        get: () => e,
        set(n) {
          this[l] = n;
        },
      };
    }),
    x.freezeMethods(we));
  function hf(e, t) {
    const l = this || Ba,
      n = t || l,
      a = we.from(n.headers);
    let u = n.data;
    return (
      x.forEach(e, function (s) {
        u = s.call(l, u, a.normalize(), t ? t.status : void 0);
      }),
      a.normalize(),
      u
    );
  }
  function x0(e) {
    return !!(e && e.__CANCEL__);
  }
  let qa = class extends C {
    constructor(t, l, n) {
      (super(t ?? "canceled", C.ERR_CANCELED, l, n),
        (this.name = "CanceledError"),
        (this.__CANCEL__ = !0));
    }
  };
  function v0(e, t, l) {
    const n = l.config.validateStatus;
    !l.status || !n || n(l.status)
      ? e(l)
      : t(
          new C(
            "Request failed with status code " + l.status,
            [C.ERR_BAD_REQUEST, C.ERR_BAD_RESPONSE][
              Math.floor(l.status / 100) - 4
            ],
            l.config,
            l.request,
            l,
          ),
        );
  }
  function Pg(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || "";
  }
  function e1(e, t) {
    e = e || 10;
    const l = new Array(e),
      n = new Array(e);
    let a = 0,
      u = 0,
      i;
    return (
      (t = t !== void 0 ? t : 1e3),
      function (c) {
        const o = Date.now(),
          r = n[u];
        (i || (i = o), (l[a] = c), (n[a] = o));
        let p = u,
          d = 0;
        for (; p !== a; ) ((d += l[p++]), (p = p % e));
        if (((a = (a + 1) % e), a === u && (u = (u + 1) % e), o - i < t))
          return;
        const m = r && o - r;
        return m ? Math.round((d * 1e3) / m) : void 0;
      }
    );
  }
  function t1(e, t) {
    let l = 0,
      n = 1e3 / t,
      a,
      u;
    const i = (o, r = Date.now()) => {
      ((l = r), (a = null), u && (clearTimeout(u), (u = null)), e(...o));
    };
    return [
      (...o) => {
        const r = Date.now(),
          p = r - l;
        p >= n
          ? i(o, r)
          : ((a = o),
            u ||
              (u = setTimeout(() => {
                ((u = null), i(a));
              }, n - p)));
      },
      () => a && i(a),
    ];
  }
  const gi = (e, t, l = 3) => {
      let n = 0;
      const a = e1(50, 250);
      return t1((u) => {
        const i = u.loaded,
          s = u.lengthComputable ? u.total : void 0,
          c = i - n,
          o = a(c),
          r = i <= s;
        n = i;
        const p = {
          loaded: i,
          total: s,
          progress: s ? i / s : void 0,
          bytes: c,
          rate: o || void 0,
          estimated: o && s && r ? (s - i) / o : void 0,
          event: u,
          lengthComputable: s != null,
          [t ? "download" : "upload"]: !0,
        };
        e(p);
      }, l);
    },
    S0 = (e, t) => {
      const l = e != null;
      return [(n) => t[0]({ lengthComputable: l, total: e, loaded: n }), t[1]];
    },
    E0 =
      (e) =>
      (...t) =>
        x.asap(() => e(...t)),
    l1 = Ne.hasStandardBrowserEnv
      ? ((e, t) => (l) => (
          (l = new URL(l, Ne.origin)),
          e.protocol === l.protocol &&
            e.host === l.host &&
            (t || e.port === l.port)
        ))(
          new URL(Ne.origin),
          Ne.navigator && /(msie|trident)/i.test(Ne.navigator.userAgent),
        )
      : () => !0,
    n1 = Ne.hasStandardBrowserEnv
      ? {
          write(e, t, l, n, a, u, i) {
            if (typeof document > "u") return;
            const s = [`${e}=${encodeURIComponent(t)}`];
            (x.isNumber(l) && s.push(`expires=${new Date(l).toUTCString()}`),
              x.isString(n) && s.push(`path=${n}`),
              x.isString(a) && s.push(`domain=${a}`),
              u === !0 && s.push("secure"),
              x.isString(i) && s.push(`SameSite=${i}`),
              (document.cookie = s.join("; ")));
          },
          read(e) {
            if (typeof document > "u") return null;
            const t = document.cookie.match(
              new RegExp("(?:^|; )" + e + "=([^;]*)"),
            );
            return t ? decodeURIComponent(t[1]) : null;
          },
          remove(e) {
            this.write(e, "", Date.now() - 864e5, "/");
          },
        }
      : {
          write() {},
          read() {
            return null;
          },
          remove() {},
        };
  function a1(e) {
    return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  }
  function u1(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
  }
  function N0(e, t, l) {
    let n = !a1(t);
    return e && (n || l == !1) ? u1(e, t) : t;
  }
  const T0 = (e) => (e instanceof we ? { ...e } : e);
  function Ml(e, t) {
    t = t || {};
    const l = {};
    function n(o, r, p, d) {
      return x.isPlainObject(o) && x.isPlainObject(r)
        ? x.merge.call({ caseless: d }, o, r)
        : x.isPlainObject(r)
          ? x.merge({}, r)
          : x.isArray(r)
            ? r.slice()
            : r;
    }
    function a(o, r, p, d) {
      if (x.isUndefined(r)) {
        if (!x.isUndefined(o)) return n(void 0, o, p, d);
      } else return n(o, r, p, d);
    }
    function u(o, r) {
      if (!x.isUndefined(r)) return n(void 0, r);
    }
    function i(o, r) {
      if (x.isUndefined(r)) {
        if (!x.isUndefined(o)) return n(void 0, o);
      } else return n(void 0, r);
    }
    function s(o, r, p) {
      if (p in t) return n(o, r);
      if (p in e) return n(void 0, o);
    }
    const c = {
      url: u,
      method: u,
      data: u,
      baseURL: i,
      transformRequest: i,
      transformResponse: i,
      paramsSerializer: i,
      timeout: i,
      timeoutMessage: i,
      withCredentials: i,
      withXSRFToken: i,
      adapter: i,
      responseType: i,
      xsrfCookieName: i,
      xsrfHeaderName: i,
      onUploadProgress: i,
      onDownloadProgress: i,
      decompress: i,
      maxContentLength: i,
      maxBodyLength: i,
      beforeRedirect: i,
      transport: i,
      httpAgent: i,
      httpsAgent: i,
      cancelToken: i,
      socketPath: i,
      responseEncoding: i,
      validateStatus: s,
      headers: (o, r, p) => a(T0(o), T0(r), p, !0),
    };
    return (
      x.forEach(Object.keys({ ...e, ...t }), function (r) {
        if (r === "__proto__" || r === "constructor" || r === "prototype")
          return;
        const p = x.hasOwnProp(c, r) ? c[r] : a,
          d = p(e[r], t[r], r);
        (x.isUndefined(d) && p !== s) || (l[r] = d);
      }),
      l
    );
  }
  const j0 = (e) => {
      const t = Ml({}, e);
      let {
        data: l,
        withXSRFToken: n,
        xsrfHeaderName: a,
        xsrfCookieName: u,
        headers: i,
        auth: s,
      } = t;
      if (
        ((t.headers = i = we.from(i)),
        (t.url = y0(
          N0(t.baseURL, t.url, t.allowAbsoluteUrls),
          e.params,
          e.paramsSerializer,
        )),
        s &&
          i.set(
            "Authorization",
            "Basic " +
              btoa(
                (s.username || "") +
                  ":" +
                  (s.password ? unescape(encodeURIComponent(s.password)) : ""),
              ),
          ),
        x.isFormData(l))
      ) {
        if (Ne.hasStandardBrowserEnv || Ne.hasStandardBrowserWebWorkerEnv)
          i.setContentType(void 0);
        else if (x.isFunction(l.getHeaders)) {
          const c = l.getHeaders(),
            o = ["content-type", "content-length"];
          Object.entries(c).forEach(([r, p]) => {
            o.includes(r.toLowerCase()) && i.set(r, p);
          });
        }
      }
      if (
        Ne.hasStandardBrowserEnv &&
        (n && x.isFunction(n) && (n = n(t)), n || (n !== !1 && l1(t.url)))
      ) {
        const c = a && u && n1.read(u);
        c && i.set(a, c);
      }
      return t;
    },
    i1 =
      typeof XMLHttpRequest < "u" &&
      function (e) {
        return new Promise(function (l, n) {
          const a = j0(e);
          let u = a.data;
          const i = we.from(a.headers).normalize();
          let {
              responseType: s,
              onUploadProgress: c,
              onDownloadProgress: o,
            } = a,
            r,
            p,
            d,
            m,
            g;
          function S() {
            (m && m(),
              g && g(),
              a.cancelToken && a.cancelToken.unsubscribe(r),
              a.signal && a.signal.removeEventListener("abort", r));
          }
          let E = new XMLHttpRequest();
          (E.open(a.method.toUpperCase(), a.url, !0), (E.timeout = a.timeout));
          function y() {
            if (!E) return;
            const b = we.from(
                "getAllResponseHeaders" in E && E.getAllResponseHeaders(),
              ),
              A = {
                data:
                  !s || s === "text" || s === "json"
                    ? E.responseText
                    : E.response,
                status: E.status,
                statusText: E.statusText,
                headers: b,
                config: e,
                request: E,
              };
            (v0(
              function (T) {
                (l(T), S());
              },
              function (T) {
                (n(T), S());
              },
              A,
            ),
              (E = null));
          }
          ("onloadend" in E
            ? (E.onloadend = y)
            : (E.onreadystatechange = function () {
                !E ||
                  E.readyState !== 4 ||
                  (E.status === 0 &&
                    !(E.responseURL && E.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(y);
              }),
            (E.onabort = function () {
              E &&
                (n(new C("Request aborted", C.ECONNABORTED, e, E)), (E = null));
            }),
            (E.onerror = function (v) {
              const A = v && v.message ? v.message : "Network Error",
                O = new C(A, C.ERR_NETWORK, e, E);
              ((O.event = v || null), n(O), (E = null));
            }),
            (E.ontimeout = function () {
              let v = a.timeout
                ? "timeout of " + a.timeout + "ms exceeded"
                : "timeout exceeded";
              const A = a.transitional || of;
              (a.timeoutErrorMessage && (v = a.timeoutErrorMessage),
                n(
                  new C(
                    v,
                    A.clarifyTimeoutError ? C.ETIMEDOUT : C.ECONNABORTED,
                    e,
                    E,
                  ),
                ),
                (E = null));
            }),
            u === void 0 && i.setContentType(null),
            "setRequestHeader" in E &&
              x.forEach(i.toJSON(), function (v, A) {
                E.setRequestHeader(A, v);
              }),
            x.isUndefined(a.withCredentials) ||
              (E.withCredentials = !!a.withCredentials),
            s && s !== "json" && (E.responseType = a.responseType),
            o && (([d, g] = gi(o, !0)), E.addEventListener("progress", d)),
            c &&
              E.upload &&
              (([p, m] = gi(c)),
              E.upload.addEventListener("progress", p),
              E.upload.addEventListener("loadend", m)),
            (a.cancelToken || a.signal) &&
              ((r = (b) => {
                E &&
                  (n(!b || b.type ? new qa(null, e, E) : b),
                  E.abort(),
                  (E = null));
              }),
              a.cancelToken && a.cancelToken.subscribe(r),
              a.signal &&
                (a.signal.aborted
                  ? r()
                  : a.signal.addEventListener("abort", r))));
          const h = Pg(a.url);
          if (h && Ne.protocols.indexOf(h) === -1) {
            n(new C("Unsupported protocol " + h + ":", C.ERR_BAD_REQUEST, e));
            return;
          }
          E.send(u || null);
        });
      },
    s1 = (e, t) => {
      const { length: l } = (e = e ? e.filter(Boolean) : []);
      if (t || l) {
        let n = new AbortController(),
          a;
        const u = function (o) {
          if (!a) {
            ((a = !0), s());
            const r = o instanceof Error ? o : this.reason;
            n.abort(
              r instanceof C ? r : new qa(r instanceof Error ? r.message : r),
            );
          }
        };
        let i =
          t &&
          setTimeout(() => {
            ((i = null), u(new C(`timeout of ${t}ms exceeded`, C.ETIMEDOUT)));
          }, t);
        const s = () => {
          e &&
            (i && clearTimeout(i),
            (i = null),
            e.forEach((o) => {
              o.unsubscribe
                ? o.unsubscribe(u)
                : o.removeEventListener("abort", u);
            }),
            (e = null));
        };
        e.forEach((o) => o.addEventListener("abort", u));
        const { signal: c } = n;
        return ((c.unsubscribe = () => x.asap(s)), c);
      }
    },
    c1 = function* (e, t) {
      let l = e.byteLength;
      if (l < t) {
        yield e;
        return;
      }
      let n = 0,
        a;
      for (; n < l; ) ((a = n + t), yield e.slice(n, a), (n = a));
    },
    f1 = async function* (e, t) {
      for await (const l of o1(e)) yield* c1(l, t);
    },
    o1 = async function* (e) {
      if (e[Symbol.asyncIterator]) {
        yield* e;
        return;
      }
      const t = e.getReader();
      try {
        for (;;) {
          const { done: l, value: n } = await t.read();
          if (l) break;
          yield n;
        }
      } finally {
        await t.cancel();
      }
    },
    A0 = (e, t, l, n) => {
      const a = f1(e, t);
      let u = 0,
        i,
        s = (c) => {
          i || ((i = !0), n && n(c));
        };
      return new ReadableStream(
        {
          async pull(c) {
            try {
              const { done: o, value: r } = await a.next();
              if (o) {
                (s(), c.close());
                return;
              }
              let p = r.byteLength;
              if (l) {
                let d = (u += p);
                l(d);
              }
              c.enqueue(new Uint8Array(r));
            } catch (o) {
              throw (s(o), o);
            }
          },
          cancel(c) {
            return (s(c), a.return());
          },
        },
        { highWaterMark: 2 },
      );
    },
    _0 = 64 * 1024,
    { isFunction: bi } = x,
    r1 = (({ Request: e, Response: t }) => ({ Request: e, Response: t }))(
      x.global,
    ),
    { ReadableStream: z0, TextEncoder: O0 } = x.global,
    R0 = (e, ...t) => {
      try {
        return !!e(...t);
      } catch {
        return !1;
      }
    },
    d1 = (e) => {
      e = x.merge.call({ skipUndefined: !0 }, r1, e);
      const { fetch: t, Request: l, Response: n } = e,
        a = t ? bi(t) : typeof fetch == "function",
        u = bi(l),
        i = bi(n);
      if (!a) return !1;
      const s = a && bi(z0),
        c =
          a &&
          (typeof O0 == "function"
            ? (
                (g) => (S) =>
                  g.encode(S)
              )(new O0())
            : async (g) => new Uint8Array(await new l(g).arrayBuffer())),
        o =
          u &&
          s &&
          R0(() => {
            let g = !1;
            const S = new l(Ne.origin, {
              body: new z0(),
              method: "POST",
              get duplex() {
                return ((g = !0), "half");
              },
            }).headers.has("Content-Type");
            return g && !S;
          }),
        r = i && s && R0(() => x.isReadableStream(new n("").body)),
        p = { stream: r && ((g) => g.body) };
      a &&
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
          !p[g] &&
            (p[g] = (S, E) => {
              let y = S && S[g];
              if (y) return y.call(S);
              throw new C(
                `Response type '${g}' is not supported`,
                C.ERR_NOT_SUPPORT,
                E,
              );
            });
        });
      const d = async (g) => {
          if (g == null) return 0;
          if (x.isBlob(g)) return g.size;
          if (x.isSpecCompliantForm(g))
            return (
              await new l(Ne.origin, { method: "POST", body: g }).arrayBuffer()
            ).byteLength;
          if (x.isArrayBufferView(g) || x.isArrayBuffer(g)) return g.byteLength;
          if ((x.isURLSearchParams(g) && (g = g + ""), x.isString(g)))
            return (await c(g)).byteLength;
        },
        m = async (g, S) => {
          const E = x.toFiniteNumber(g.getContentLength());
          return E ?? d(S);
        };
      return async (g) => {
        let {
            url: S,
            method: E,
            data: y,
            signal: h,
            cancelToken: b,
            timeout: v,
            onDownloadProgress: A,
            onUploadProgress: O,
            responseType: T,
            headers: z,
            withCredentials: U = "same-origin",
            fetchOptions: _,
          } = j0(g),
          Ee = t || fetch;
        T = T ? (T + "").toLowerCase() : "text";
        let Ke = s1([h, b && b.toAbortSignal()], v),
          rl = null;
        const Ht =
          Ke &&
          Ke.unsubscribe &&
          (() => {
            Ke.unsubscribe();
          });
        let Un;
        try {
          if (
            O &&
            o &&
            E !== "get" &&
            E !== "head" &&
            (Un = await m(z, y)) !== 0
          ) {
            let Je = new l(S, { method: "POST", body: y, duplex: "half" }),
              ot;
            if (
              (x.isFormData(y) &&
                (ot = Je.headers.get("content-type")) &&
                z.setContentType(ot),
              Je.body)
            ) {
              const [ql, ut] = S0(Un, gi(E0(O)));
              y = A0(Je.body, _0, ql, ut);
            }
          }
          x.isString(U) || (U = U ? "include" : "omit");
          const j = u && "credentials" in l.prototype,
            H = {
              ..._,
              signal: Ke,
              method: E.toUpperCase(),
              headers: z.normalize().toJSON(),
              body: y,
              duplex: "half",
              credentials: j ? U : void 0,
            };
          rl = u && new l(S, H);
          let M = await (u ? Ee(rl, _) : Ee(S, H));
          const te = r && (T === "stream" || T === "response");
          if (r && (A || (te && Ht))) {
            const Je = {};
            ["status", "statusText", "headers"].forEach((Yl) => {
              Je[Yl] = M[Yl];
            });
            const ot = x.toFiniteNumber(M.headers.get("content-length")),
              [ql, ut] = (A && S0(ot, gi(E0(A), !0))) || [];
            M = new n(
              A0(M.body, _0, ql, () => {
                (ut && ut(), Ht && Ht());
              }),
              Je,
            );
          }
          T = T || "text";
          let re = await p[x.findKey(p, T) || "text"](M, g);
          return (
            !te && Ht && Ht(),
            await new Promise((Je, ot) => {
              v0(Je, ot, {
                data: re,
                headers: we.from(M.headers),
                status: M.status,
                statusText: M.statusText,
                config: g,
                request: rl,
              });
            })
          );
        } catch (j) {
          throw (
            Ht && Ht(),
            j && j.name === "TypeError" && /Load failed|fetch/i.test(j.message)
              ? Object.assign(
                  new C("Network Error", C.ERR_NETWORK, g, rl, j && j.response),
                  { cause: j.cause || j },
                )
              : C.from(j, j && j.code, g, rl, j && j.response)
          );
        }
      };
    },
    m1 = new Map(),
    D0 = (e) => {
      let t = (e && e.env) || {};
      const { fetch: l, Request: n, Response: a } = t,
        u = [n, a, l];
      let i = u.length,
        s = i,
        c,
        o,
        r = m1;
      for (; s--; )
        ((c = u[s]),
          (o = r.get(c)),
          o === void 0 && r.set(c, (o = s ? new Map() : d1(t))),
          (r = o));
      return o;
    };
  D0();
  const yf = { http: wg, xhr: i1, fetch: { get: D0 } };
  x.forEach(yf, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  const C0 = (e) => `- ${e}`,
    h1 = (e) => x.isFunction(e) || e === null || e === !1;
  function y1(e, t) {
    e = x.isArray(e) ? e : [e];
    const { length: l } = e;
    let n, a;
    const u = {};
    for (let i = 0; i < l; i++) {
      n = e[i];
      let s;
      if (
        ((a = n),
        !h1(n) && ((a = yf[(s = String(n)).toLowerCase()]), a === void 0))
      )
        throw new C(`Unknown adapter '${s}'`);
      if (a && (x.isFunction(a) || (a = a.get(t)))) break;
      u[s || "#" + i] = a;
    }
    if (!a) {
      const i = Object.entries(u).map(
        ([c, o]) =>
          `adapter ${c} ` +
          (o === !1
            ? "is not supported by the environment"
            : "is not available in the build"),
      );
      let s = l
        ? i.length > 1
          ? `since :
` +
            i.map(C0).join(`
`)
          : " " + C0(i[0])
        : "as no adapter specified";
      throw new C(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT",
      );
    }
    return a;
  }
  const M0 = { getAdapter: y1, adapters: yf };
  function pf(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new qa(null, e);
  }
  function U0(e) {
    return (
      pf(e),
      (e.headers = we.from(e.headers)),
      (e.data = hf.call(e, e.transformRequest)),
      ["post", "put", "patch"].indexOf(e.method) !== -1 &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1),
      M0.getAdapter(
        e.adapter || Ba.adapter,
        e,
      )(e).then(
        function (n) {
          return (
            pf(e),
            (n.data = hf.call(e, e.transformResponse, n)),
            (n.headers = we.from(n.headers)),
            n
          );
        },
        function (n) {
          return (
            x0(n) ||
              (pf(e),
              n &&
                n.response &&
                ((n.response.data = hf.call(
                  e,
                  e.transformResponse,
                  n.response,
                )),
                (n.response.headers = we.from(n.response.headers)))),
            Promise.reject(n)
          );
        },
      )
    );
  }
  const w0 = "1.13.6",
    xi = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      xi[e] = function (n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    },
  );
  const B0 = {};
  ((xi.transitional = function (t, l, n) {
    function a(u, i) {
      return (
        "[Axios v" +
        w0 +
        "] Transitional option '" +
        u +
        "'" +
        i +
        (n ? ". " + n : "")
      );
    }
    return (u, i, s) => {
      if (t === !1)
        throw new C(
          a(i, " has been removed" + (l ? " in " + l : "")),
          C.ERR_DEPRECATED,
        );
      return (
        l &&
          !B0[i] &&
          ((B0[i] = !0),
          console.warn(
            a(
              i,
              " has been deprecated since v" +
                l +
                " and will be removed in the near future",
            ),
          )),
        t ? t(u, i, s) : !0
      );
    };
  }),
    (xi.spelling = function (t) {
      return (l, n) => (
        console.warn(`${n} is likely a misspelling of ${t}`),
        !0
      );
    }));
  function p1(e, t, l) {
    if (typeof e != "object")
      throw new C("options must be an object", C.ERR_BAD_OPTION_VALUE);
    const n = Object.keys(e);
    let a = n.length;
    for (; a-- > 0; ) {
      const u = n[a],
        i = t[u];
      if (i) {
        const s = e[u],
          c = s === void 0 || i(s, u, e);
        if (c !== !0)
          throw new C("option " + u + " must be " + c, C.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (l !== !0) throw new C("Unknown option " + u, C.ERR_BAD_OPTION);
    }
  }
  const vi = { assertOptions: p1, validators: xi },
    at = vi.validators;
  let Ul = class {
    constructor(t) {
      ((this.defaults = t || {}),
        (this.interceptors = { request: new p0(), response: new p0() }));
    }
    async request(t, l) {
      try {
        return await this._request(t, l);
      } catch (n) {
        if (n instanceof Error) {
          let a = {};
          Error.captureStackTrace
            ? Error.captureStackTrace(a)
            : (a = new Error());
          const u = a.stack ? a.stack.replace(/^.+\n/, "") : "";
          try {
            n.stack
              ? u &&
                !String(n.stack).endsWith(u.replace(/^.+\n.+\n/, "")) &&
                (n.stack +=
                  `
` + u)
              : (n.stack = u);
          } catch {}
        }
        throw n;
      }
    }
    _request(t, l) {
      (typeof t == "string" ? ((l = l || {}), (l.url = t)) : (l = t || {}),
        (l = Ml(this.defaults, l)));
      const { transitional: n, paramsSerializer: a, headers: u } = l;
      (n !== void 0 &&
        vi.assertOptions(
          n,
          {
            silentJSONParsing: at.transitional(at.boolean),
            forcedJSONParsing: at.transitional(at.boolean),
            clarifyTimeoutError: at.transitional(at.boolean),
            legacyInterceptorReqResOrdering: at.transitional(at.boolean),
          },
          !1,
        ),
        a != null &&
          (x.isFunction(a)
            ? (l.paramsSerializer = { serialize: a })
            : vi.assertOptions(
                a,
                { encode: at.function, serialize: at.function },
                !0,
              )),
        l.allowAbsoluteUrls !== void 0 ||
          (this.defaults.allowAbsoluteUrls !== void 0
            ? (l.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
            : (l.allowAbsoluteUrls = !0)),
        vi.assertOptions(
          l,
          {
            baseUrl: at.spelling("baseURL"),
            withXsrfToken: at.spelling("withXSRFToken"),
          },
          !0,
        ),
        (l.method = (l.method || this.defaults.method || "get").toLowerCase()));
      let i = u && x.merge(u.common, u[l.method]);
      (u &&
        x.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (g) => {
            delete u[g];
          },
        ),
        (l.headers = we.concat(i, u)));
      const s = [];
      let c = !0;
      this.interceptors.request.forEach(function (S) {
        if (typeof S.runWhen == "function" && S.runWhen(l) === !1) return;
        c = c && S.synchronous;
        const E = l.transitional || of;
        E && E.legacyInterceptorReqResOrdering
          ? s.unshift(S.fulfilled, S.rejected)
          : s.push(S.fulfilled, S.rejected);
      });
      const o = [];
      this.interceptors.response.forEach(function (S) {
        o.push(S.fulfilled, S.rejected);
      });
      let r,
        p = 0,
        d;
      if (!c) {
        const g = [U0.bind(this), void 0];
        for (
          g.unshift(...s), g.push(...o), d = g.length, r = Promise.resolve(l);
          p < d;
        )
          r = r.then(g[p++], g[p++]);
        return r;
      }
      d = s.length;
      let m = l;
      for (; p < d; ) {
        const g = s[p++],
          S = s[p++];
        try {
          m = g(m);
        } catch (E) {
          S.call(this, E);
          break;
        }
      }
      try {
        r = U0.call(this, m);
      } catch (g) {
        return Promise.reject(g);
      }
      for (p = 0, d = o.length; p < d; ) r = r.then(o[p++], o[p++]);
      return r;
    }
    getUri(t) {
      t = Ml(this.defaults, t);
      const l = N0(t.baseURL, t.url, t.allowAbsoluteUrls);
      return y0(l, t.params, t.paramsSerializer);
    }
  };
  (x.forEach(["delete", "get", "head", "options"], function (t) {
    Ul.prototype[t] = function (l, n) {
      return this.request(
        Ml(n || {}, { method: t, url: l, data: (n || {}).data }),
      );
    };
  }),
    x.forEach(["post", "put", "patch"], function (t) {
      function l(n) {
        return function (u, i, s) {
          return this.request(
            Ml(s || {}, {
              method: t,
              headers: n ? { "Content-Type": "multipart/form-data" } : {},
              url: u,
              data: i,
            }),
          );
        };
      }
      ((Ul.prototype[t] = l()), (Ul.prototype[t + "Form"] = l(!0)));
    }));
  let g1 = class F0 {
    constructor(t) {
      if (typeof t != "function")
        throw new TypeError("executor must be a function.");
      let l;
      this.promise = new Promise(function (u) {
        l = u;
      });
      const n = this;
      (this.promise.then((a) => {
        if (!n._listeners) return;
        let u = n._listeners.length;
        for (; u-- > 0; ) n._listeners[u](a);
        n._listeners = null;
      }),
        (this.promise.then = (a) => {
          let u;
          const i = new Promise((s) => {
            (n.subscribe(s), (u = s));
          }).then(a);
          return (
            (i.cancel = function () {
              n.unsubscribe(u);
            }),
            i
          );
        }),
        t(function (u, i, s) {
          n.reason || ((n.reason = new qa(u, i, s)), l(n.reason));
        }));
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(t) {
      if (this.reason) {
        t(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
    }
    unsubscribe(t) {
      if (!this._listeners) return;
      const l = this._listeners.indexOf(t);
      l !== -1 && this._listeners.splice(l, 1);
    }
    toAbortSignal() {
      const t = new AbortController(),
        l = (n) => {
          t.abort(n);
        };
      return (
        this.subscribe(l),
        (t.signal.unsubscribe = () => this.unsubscribe(l)),
        t.signal
      );
    }
    static source() {
      let t;
      return {
        token: new F0(function (a) {
          t = a;
        }),
        cancel: t,
      };
    }
  };
  function b1(e) {
    return function (l) {
      return e.apply(null, l);
    };
  }
  function x1(e) {
    return x.isObject(e) && e.isAxiosError === !0;
  }
  const gf = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526,
  };
  Object.entries(gf).forEach(([e, t]) => {
    gf[t] = e;
  });
  function H0(e) {
    const t = new Ul(e),
      l = t0(Ul.prototype.request, t);
    return (
      x.extend(l, Ul.prototype, t, { allOwnKeys: !0 }),
      x.extend(l, t, null, { allOwnKeys: !0 }),
      (l.create = function (a) {
        return H0(Ml(e, a));
      }),
      l
    );
  }
  const le = H0(Ba);
  ((le.Axios = Ul),
    (le.CanceledError = qa),
    (le.CancelToken = g1),
    (le.isCancel = x0),
    (le.VERSION = w0),
    (le.toFormData = yi),
    (le.AxiosError = C),
    (le.Cancel = le.CanceledError),
    (le.all = function (t) {
      return Promise.all(t);
    }),
    (le.spread = b1),
    (le.isAxiosError = x1),
    (le.mergeConfig = Ml),
    (le.AxiosHeaders = we),
    (le.formToJSON = (e) => g0(x.isHTMLForm(e) ? new FormData(e) : e)),
    (le.getAdapter = M0.getAdapter),
    (le.HttpStatusCode = gf),
    (le.default = le));
  const {
      Axios: sb,
      AxiosError: cb,
      CanceledError: fb,
      isCancel: ob,
      CancelToken: rb,
      VERSION: db,
      all: mb,
      Cancel: hb,
      isAxiosError: yb,
      spread: pb,
      toFormData: gb,
      AxiosHeaders: bb,
      HttpStatusCode: xb,
      formToJSON: vb,
      getAdapter: Sb,
      mergeConfig: Eb,
    } = le,
    Bt = "https://13h54lzh-8000.inc1.devtunnels.ms/widget/";
  console.log(Bt);
  const Ya = "widget_auth_token",
    bf = "widget_user_email",
    xf = "widget_user_name",
    Si = {
      setAuth(e, t, l) {
        (localStorage.setItem(Ya, e),
          localStorage.setItem(bf, t),
          l && localStorage.setItem(xf, l));
      },
      getToken() {
        return localStorage.getItem(Ya);
      },
      getUser() {
        return {
          email: localStorage.getItem(bf),
          name: localStorage.getItem(xf),
          token: localStorage.getItem(Ya),
        };
      },
      isAuthenticated() {
        return !!localStorage.getItem(Ya);
      },
      clearAuth() {
        (localStorage.removeItem(Ya),
          localStorage.removeItem(bf),
          localStorage.removeItem(xf));
      },
      isTokenExpired() {
        const e = this.getToken();
        if (!e) return !0;
        try {
          return JSON.parse(atob(e.split(".")[1])).exp * 1e3 < Date.now();
        } catch {
          return !0;
        }
      },
      getTokenPayload() {
        const e = this.getToken();
        if (!e) return null;
        try {
          return JSON.parse(atob(e.split(".")[1]));
        } catch (t) {
          return (console.error("Invalid token:", t), null);
        }
      },
    },
    wl = le.create({ baseURL: Bt });
  (wl.interceptors.request.use((e) => {
    const t = Si.getToken();
    return (
      console.log("Attaching token to request:", t ? "Yes" : "No"),
      console.log("logging token", t),
      t && (e.headers.Authorization = `Bearer ${t}`),
      e
    );
  }),
    wl.interceptors.response.use(
      (e) => e,
      async (e) => {
        var t;
        return (
          ((t = e.response) == null ? void 0 : t.status) === 401 &&
            (console.log("Authentication failed. Token invalid or expired."),
            Si.clearAuth(),
            window.dispatchEvent(new CustomEvent("widget:auth-required"))),
          Promise.reject(e)
        );
      },
    ));
  function v1(e, t, l) {
    return le.post(`${Bt}auth/registerWidgetUser`, {
      name: e,
      email: t,
      password: l,
    });
  }
  function S1(e, t) {
    return le.post(`${Bt}auth/loginWidgetUser`, { email: e, password: t });
  }
  function E1(e) {
    return wl.get(`${Bt}property/property-details/${e}`);
  }
  function N1(e) {
    return wl.get(`${Bt}room/get-room-types?hotelId=${e}`);
  }
  function T1(e, t) {
    return wl.get(
      `${Bt}room/get-rooms-for-widget?hotelId=${e}&roomTypeId=${t}`,
    );
  }
  function j1(e) {
    return wl.post(`${Bt}room-booking/book-room`, { ...e });
  }
  function A1(e) {
    return wl.get(`${Bt}services?id=${e}`);
  }
  const q0 = R.createContext(null);
  function _1({ children: e, hotelId: t, accessToken: l, setAccessToken: n }) {
    const [a, u] = R.useState(""),
      [i, s] = R.useState("null"),
      [c, o] = R.useState(null),
      [r, p] = R.useState("rooms");
    (R.useEffect(() => {
      if (i === "null") return;
      const m = setTimeout(() => {
        (s("null"), u(""));
      }, 3e3);
      return () => clearTimeout(m);
    }, [i]),
      R.useEffect(() => {
        async function m() {
          try {
            const g = await E1(t);
            console.log(g.data);
            const S = new Date(g.data.property.createdAt).getFullYear(),
              E = {
                propertyName: g.data.property.name,
                propertyId: g.data.property._id,
                yearEstablished: S,
                city: g.data.property.location.city,
                description: g.data.property.description,
              };
            (console.log("formated data", E), o(E));
          } catch (g) {
            (console.log("Error while fetching property Detials", g),
              u("Something went wrong"),
              s("error"));
          }
        }
        m();
      }, []));
    const d = R.useMemo(
      () => ({
        toastMessage: a,
        setToastMessage: u,
        toastType: i,
        setToastType: s,
        propertyInfo: c,
        setPropertyInfo: o,
        accessToken: l,
        setAccessToken: n,
        activeTab: r,
        setActiveTab: p,
      }),
      [a, i, c, l, r],
    );
    return f.jsxs(q0.Provider, {
      value: d,
      children: [
        e,
        f.jsx("div", {
          className: `fixed transition-all duration-300   left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none  ${i === "null" ? "-top-8" : "top-5"}   `,
          children:
            i &&
            f.jsxs("div", {
              className:
                "animate-slideUp bg-stone-900 text-white text-sm px-5 py-3 rounded-2xl shadow-lg whitespace-nowrap flex items-center gap-2",
              children: [
                i === "success" &&
                  f.jsx("span", { className: "text-amber-400", children: "✓" }),
                i === "error" &&
                  f.jsx("span", { className: "text-red-400", children: "✕" }),
                a,
              ],
            }),
        }),
      ],
    });
  }
  function Bl() {
    const e = R.useContext(q0);
    if (!e) throw new Error("useToast must be used inside ToastProvider");
    return e;
  }
  function vf(e, t, l) {
    const n = t.target.name ? t.target.name : l;
    n && e((a) => ({ ...a, [n]: t.target.value }));
  }
  function z1({ onClose: e }) {
    const [t, l] = R.useState("login"),
      {
        setToastMessage: n,
        setToastType: a,
        setAccessToken: u,
        propertyInfo: i,
      } = Bl(),
      [s, c] = R.useState({ name: "", email: "", password: "" }),
      [o, r] = R.useState(!1);
    async function p() {
      const { email: g, password: S } = s;
      if (!o) {
        if (!g && !S) {
          (n("All the fields are required"), a("info"));
          return;
        }
        r(!0);
        try {
          const E = await S1(g, S);
          (console.log("response", E),
            E.data &&
              E.data.accessToken &&
              (localStorage.setItem("widget_auth_token", E.data.accessToken),
              u(E.data.accessToken),
              n("Login successful!"),
              a("success")));
        } catch (E) {
          (console.log("Error while login user", E),
            n("Login failed. Please try again."),
            a("error"));
        } finally {
          r(!1);
        }
      }
    }
    async function d() {
      if (o) return;
      const { name: g, email: S, password: E } = s;
      r(!0);
      try {
        const y = await v1(g, S, E);
        (console.log("response", y),
          y.data &&
            y.data.accessToken &&
            (localStorage.setItem("widget_auth_token", y.data.accessToken),
            u(y.data.accessToken),
            n("Registration successful!"),
            a("success")));
      } catch (y) {
        const h = y;
        (console.log("Error while register user", y), n(h.message), a("error"));
      } finally {
        r(!1);
      }
    }
    function m() {
      (t === "login" && l("signup"),
        t === "signup" && l("login"),
        c({ name: "", email: "", password: "" }));
    }
    return f.jsxs("div", {
      className: "bg-mesh flex flex-col h-full",
      style: { overflowY: "auto" },
      children: [
        f.jsxs("div", {
          className:
            "flex items-center justify-between px-6 py-4 border-b border-stone-100 flex-shrink-0",
          children: [
            f.jsx("span", {
              className: "italic text-amber-600",
              style: { fontFamily: "var(--font-playfair)", fontSize: "17px" },
              children:
                (i == null ? void 0 : i.propertyName) && `${i.propertyName}`,
            }),
            e &&
              f.jsx("button", {
                onClick: e,
                className:
                  "text-stone-400 hover:text-stone-600 transition-colors cursor-pointer text-2xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100",
                children: "×",
              }),
          ],
        }),
        f.jsx("div", {
          className: "flex-1 flex items-center justify-center p-8",
          children: f.jsxs("div", {
            className: "w-full",
            style: { maxWidth: "420px" },
            children: [
              f.jsxs("div", {
                className: "text-center mb-8",
                style: { animation: "fadeUp 0.4s ease forwards" },
                children: [
                  f.jsxs("p", {
                    className:
                      "text-xs tracking-[4px] text-amber-600 uppercase mb-3 font-medium",
                    children: [
                      "Est.",
                      (i == null ? void 0 : i.city) && i.yearEstablished,
                      " ·",
                      " ",
                      (i == null ? void 0 : i.city) && i.city,
                    ],
                  }),
                  f.jsx("h1", {
                    className:
                      "text-4xl font-normal text-stone-900 leading-tight mb-2",
                    style: { fontFamily: "var(--font-playfair)" },
                    children:
                      (i == null ? void 0 : i.propertyName) && i.propertyName,
                  }),
                  f.jsx("p", {
                    className: "text-xs text-stone-400 tracking-widest",
                    children:
                      (i == null ? void 0 : i.description) && i.description,
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "bg-white rounded-3xl shadow-lg p-8",
                style: {
                  animation: "fadeUp 0.4s 0.1s ease forwards",
                  opacity: 0,
                },
                children: [
                  f.jsx("h2", {
                    className:
                      "text-2xl font-normal italic text-stone-800 mb-1",
                    style: { fontFamily: "var(--font-playfair)" },
                    children: "Welcome back",
                  }),
                  f.jsx("p", {
                    className: "text-xs text-stone-400 mb-6 leading-relaxed",
                    children:
                      "Sign in to manage your reservations and explore our finest rooms.",
                  }),
                  f.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      t === "signup" &&
                        f.jsxs("div", {
                          children: [
                            f.jsx("label", {
                              className:
                                "block text-[10px] tracking-[2px] uppercase text-stone-400 mb-2 font-semibold",
                              children: "User name",
                            }),
                            f.jsx("input", {
                              className: "ob-input",
                              type: "text",
                              placeholder: "guest",
                              name: "name",
                              value: s.name,
                              onChange: (g) => vf(c, g),
                              required: !0,
                            }),
                          ],
                        }),
                      f.jsxs("div", {
                        children: [
                          f.jsx("label", {
                            className:
                              "block text-[10px] tracking-[2px] uppercase text-stone-400 mb-2 font-semibold",
                            children: "Email address",
                          }),
                          f.jsx("input", {
                            className: "ob-input",
                            type: "text",
                            placeholder: "guest@example.com",
                            name: "email",
                            value: s.email,
                            onChange: (g) => vf(c, g),
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        children: [
                          f.jsx("label", {
                            className:
                              "block text-[10px] tracking-[2px] uppercase text-stone-400 mb-2 font-semibold",
                            children: "Password",
                          }),
                          f.jsx("input", {
                            className: "ob-input",
                            type: "password",
                            name: "password",
                            placeholder: "••••••••",
                            value: s.password,
                            onChange: (g) => vf(c, g),
                          }),
                        ],
                      }),
                      f.jsx("button", {
                        onClick: t === "signup" ? d : p,
                        disabled: o,
                        className:
                          "btn-shine w-full py-3.5 rounded-xl text-white text-sm tracking-wide mt-2 font-semibold",
                        children: o
                          ? f.jsxs("span", {
                              className:
                                "flex items-center justify-center gap-2",
                              children: [
                                f.jsx("span", {
                                  className:
                                    "w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block",
                                  style: {
                                    animation: "spin 0.8s linear infinite",
                                  },
                                }),
                                t === "signup"
                                  ? "Signing in…"
                                  : "Preparing ...",
                              ],
                            })
                          : `${t === "signup" ? "Sign In" : "Login"}`,
                      }),
                    ],
                  }),
                  f.jsx("div", {
                    className:
                      "mt-5 flex items-center justify-center gap-3 text-xs text-stone-400",
                    children: f.jsx("button", {
                      onClick: m,
                      className:
                        "hover:text-amber-600 transition-colors cursor-pointer",
                      children:
                        t === "login"
                          ? "New guest? Register"
                          : "Already have an Account? Login",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  }
  const Cn = [
      {
        id: "B001",
        room: "Maharaja Suite",
        type: "Suite",
        checkin: "2025-04-10",
        checkout: "2025-04-14",
        guests: 2,
        nights: 4,
        price: 42e3,
        status: "upcoming",
        confirmNo: "TGI-2025-001",
        emoji: "👑",
      },
      {
        id: "B002",
        room: "Deluxe King Room",
        type: "Deluxe",
        checkin: "2025-05-22",
        checkout: "2025-05-24",
        guests: 1,
        nights: 2,
        price: 14e3,
        status: "upcoming",
        confirmNo: "TGI-2025-002",
        emoji: "🛏",
      },
    ],
    Mn = [
      {
        id: "B003",
        room: "Premier Heritage Room",
        type: "Premier",
        checkin: "2024-12-20",
        checkout: "2024-12-26",
        guests: 2,
        nights: 6,
        price: 36e3,
        status: "past",
        confirmNo: "TGI-2024-118",
        emoji: "🌿",
      },
      {
        id: "B004",
        room: "Deluxe King Room",
        type: "Deluxe",
        checkin: "2024-08-05",
        checkout: "2024-08-07",
        guests: 2,
        nights: 2,
        price: 13e3,
        status: "past",
        confirmNo: "TGI-2024-075",
        emoji: "🛏",
      },
      {
        id: "B005",
        room: "Executive Room",
        type: "Executive",
        checkin: "2024-03-14",
        checkout: "2024-03-15",
        guests: 1,
        nights: 1,
        price: 8500,
        status: "cancelled",
        confirmNo: "TGI-2024-031",
        emoji: "💼",
      },
    ];
  function Ei(e) {
    return new Date(e + "T00:00:00").toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
  function Sf({ title: e, sub: t }) {
    return f.jsxs("div", {
      className: "mb-5",
      children: [
        f.jsx("h2", {
          className: "text-2xl font-normal italic text-stone-800",
          style: { fontFamily: "var(--font-playfair)" },
          children: e,
        }),
        f.jsx("p", {
          className: "text-xs text-stone-400 tracking-wide mt-0.5",
          children: t,
        }),
      ],
    });
  }
  const Y0 = {
      upcoming: "bg-amber-100 text-amber-700 border border-amber-200",
      past: "bg-stone-100 text-stone-500 border border-stone-200",
      cancelled: "bg-red-50 text-red-500 border border-red-100",
    },
    L0 = { upcoming: "Confirmed", past: "Completed", cancelled: "Cancelled" };
  function O1({ onBook: e }) {
    const t = new Date();
    return f.jsxs("div", {
      style: { animation: "fadeUp 0.4s ease forwards" },
      children: [
        Cn.length > 0 &&
          f.jsxs(f.Fragment, {
            children: [
              f.jsx(Sf, {
                title: "Upcoming Stays",
                sub: `${Cn.length} reservation${Cn.length > 1 ? "s" : ""} ahead`,
              }),
              Cn.map((l, n) => {
                const a = Math.ceil(
                  (new Date(l.checkin).getTime() - t.getTime()) / 864e5,
                );
                return f.jsxs(
                  "div",
                  {
                    className:
                      "bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-3",
                    style: {
                      animation: "fadeUp 0.4s ease forwards",
                      animationDelay: `${n * 0.08}s`,
                      opacity: 0,
                    },
                    children: [
                      f.jsxs("div", {
                        className:
                          "flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-xl px-4 py-2.5 mb-4",
                        children: [
                          f.jsx("span", {
                            className: "text-3xl font-normal text-amber-600",
                            style: { fontFamily: "var(--font-playfair)" },
                            children: a,
                          }),
                          f.jsx("span", {
                            className: "text-xs text-stone-500",
                            children: "days until check-in",
                          }),
                          f.jsx("div", {
                            className:
                              "ml-auto w-2 h-2 rounded-full bg-amber-400",
                            style: {
                              animation: "fadeIn 1s ease infinite alternate",
                            },
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "flex items-start justify-between mb-4",
                        children: [
                          f.jsxs("div", {
                            children: [
                              f.jsxs("div", {
                                className: "text-lg text-stone-900",
                                style: { fontFamily: "var(--font-playfair)" },
                                children: [l.emoji, " ", l.room],
                              }),
                              f.jsxs("div", {
                                className: "text-xs text-stone-400 mt-0.5",
                                children: [l.type, " · #", l.confirmNo],
                              }),
                            ],
                          }),
                          f.jsx("span", {
                            className: `text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full font-semibold ${Y0[l.status]}`,
                            children: L0[l.status],
                          }),
                        ],
                      }),
                      f.jsx("div", {
                        className: "grid grid-cols-3 gap-3 mb-4",
                        children: [
                          ["Check-in", Ei(l.checkin)],
                          ["Check-out", Ei(l.checkout)],
                          [
                            "Guests",
                            `${l.guests} Guest${l.guests > 1 ? "s" : ""}`,
                          ],
                        ].map(([u, i]) =>
                          f.jsxs(
                            "div",
                            {
                              children: [
                                f.jsx("p", {
                                  className:
                                    "text-[10px] tracking-wide uppercase text-stone-400 mb-0.5",
                                  children: u,
                                }),
                                f.jsx("p", {
                                  className:
                                    "text-sm text-stone-700 font-medium",
                                  children: i,
                                }),
                              ],
                            },
                            u,
                          ),
                        ),
                      }),
                      f.jsxs("div", {
                        className:
                          "flex items-center justify-between pt-3.5 border-t border-stone-100",
                        children: [
                          f.jsxs("div", {
                            children: [
                              f.jsx("p", {
                                className: "text-[10px] text-stone-400",
                                children: "Total amount",
                              }),
                              f.jsxs("p", {
                                className: "text-xl text-stone-800",
                                style: { fontFamily: "var(--font-playfair)" },
                                children: [
                                  "₹",
                                  l.price.toLocaleString("en-IN"),
                                ],
                              }),
                            ],
                          }),
                          f.jsx("div", {
                            className: "flex gap-2",
                            children: ["Receipt", "Modify"].map((u) =>
                              f.jsx(
                                "button",
                                {
                                  className:
                                    "px-3.5 py-2 rounded-xl text-xs font-semibold border border-stone-200 text-stone-500 hover:border-amber-300 hover:text-amber-600 transition-all cursor-pointer",
                                  children: u,
                                },
                                u,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  },
                  l.id,
                );
              }),
            ],
          }),
        Cn.length > 0 &&
          Mn.length > 0 &&
          f.jsx("div", { className: "my-6 border-t border-stone-200" }),
        Mn.length > 0 &&
          f.jsxs(f.Fragment, {
            children: [
              f.jsx(Sf, {
                title: "Stay History",
                sub: `${Mn.length} past reservation${Mn.length > 1 ? "s" : ""}`,
              }),
              Mn.map((l, n) =>
                f.jsxs(
                  "div",
                  {
                    className:
                      "bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-3",
                    style: {
                      animation: "fadeUp 0.4s ease forwards",
                      animationDelay: `${n * 0.08}s`,
                      opacity: 0,
                    },
                    children: [
                      f.jsxs("div", {
                        className: "flex items-start justify-between mb-4",
                        children: [
                          f.jsxs("div", {
                            children: [
                              f.jsxs("div", {
                                className: "text-lg text-stone-900",
                                style: { fontFamily: "var(--font-playfair)" },
                                children: [l.emoji, " ", l.room],
                              }),
                              f.jsxs("div", {
                                className: "text-xs text-stone-400 mt-0.5",
                                children: [l.type, " · #", l.confirmNo],
                              }),
                            ],
                          }),
                          f.jsx("span", {
                            className: `text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full font-semibold ${Y0[l.status]}`,
                            children: L0[l.status],
                          }),
                        ],
                      }),
                      f.jsx("div", {
                        className: "grid grid-cols-3 gap-3 mb-4",
                        children: [
                          ["Check-in", Ei(l.checkin)],
                          ["Check-out", Ei(l.checkout)],
                          [
                            "Duration",
                            `${l.nights} Night${l.nights > 1 ? "s" : ""}`,
                          ],
                        ].map(([a, u]) =>
                          f.jsxs(
                            "div",
                            {
                              children: [
                                f.jsx("p", {
                                  className:
                                    "text-[10px] tracking-wide uppercase text-stone-400 mb-0.5",
                                  children: a,
                                }),
                                f.jsx("p", {
                                  className:
                                    "text-sm text-stone-700 font-medium",
                                  children: u,
                                }),
                              ],
                            },
                            a,
                          ),
                        ),
                      }),
                      f.jsxs("div", {
                        className:
                          "flex items-center justify-between pt-3.5 border-t border-stone-100",
                        children: [
                          f.jsxs("div", {
                            children: [
                              f.jsx("p", {
                                className: "text-[10px] text-stone-400",
                                children: "Amount paid",
                              }),
                              f.jsxs("p", {
                                className: "text-xl text-stone-800",
                                style: { fontFamily: "var(--font-playfair)" },
                                children: [
                                  "₹",
                                  l.price.toLocaleString("en-IN"),
                                ],
                              }),
                            ],
                          }),
                          f.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              f.jsx("button", {
                                className:
                                  "px-3.5 py-2 rounded-xl text-xs font-semibold border border-stone-200 text-stone-500 hover:border-amber-300 hover:text-amber-600 transition-all cursor-pointer",
                                children: "Invoice",
                              }),
                              l.status === "past" &&
                                f.jsx("button", {
                                  onClick: () => e(l.room),
                                  className:
                                    "btn-shine px-3.5 py-2 rounded-xl text-xs font-semibold text-white",
                                  children: "Book Again",
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  l.id,
                ),
              ),
            ],
          }),
        Cn.length === 0 &&
          Mn.length === 0 &&
          f.jsxs("div", {
            className: "text-center py-12",
            children: [
              f.jsx("div", { className: "text-5xl mb-3", children: "📅" }),
              f.jsx("p", {
                className: "text-stone-400 text-sm",
                children: "No bookings yet",
              }),
              f.jsx("button", {
                onClick: () => e("Deluxe Suite"),
                className:
                  "mt-4 btn-shine px-5 py-2.5 rounded-xl text-sm font-semibold text-white",
                children: "Book Your First Stay",
              }),
            ],
          }),
      ],
    });
  }
  function R1() {
    const e = [
        { num: "7", label: "Total stays" },
        { num: "23", label: "Nights" },
      ],
      t = [
        ["Room type", "Suite / High floor"],
        ["Pillow type", "Soft"],
        ["Dietary", "Vegetarian"],
        ["Newspaper", "The Hindu"],
        ["Wake-up call", "7:00 AM"],
      ];
    return f.jsxs("div", {
      style: { animation: "fadeUp 0.4s ease forwards" },
      children: [
        f.jsx(Sf, { title: "My Profile", sub: "Preferences & loyalty status" }),
        f.jsx("div", {
          className: "grid grid-cols-3 gap-3 mb-4",
          children: e.map((l, n) =>
            f.jsxs(
              "div",
              {
                className:
                  "bg-white border border-stone-100 rounded-2xl p-4 text-center shadow-sm",
                style: {
                  animation: "fadeUp 0.4s ease forwards",
                  animationDelay: `${n * 0.06}s`,
                  opacity: 0,
                },
                children: [
                  f.jsx("p", {
                    className: "text-3xl font-normal text-amber-600",
                    style: { fontFamily: "var(--font-playfair)" },
                    children: l.num,
                  }),
                  f.jsx("p", {
                    className:
                      "text-[10px] tracking-wide uppercase text-stone-400 mt-1",
                    children: l.label,
                  }),
                ],
              },
              l.label,
            ),
          ),
        }),
        f.jsx("div", {
          className:
            "bg-white border border-stone-100 rounded-2xl shadow-sm p-5 mb-3",
          children: f.jsxs("div", {
            className: "flex items-center gap-4 mb-5",
            children: [
              f.jsx("div", {
                className:
                  "w-14 h-14 rounded-full flex items-center justify-center text-lg font-semibold text-white flex-shrink-0",
                style: {
                  background: "linear-gradient(135deg, #fbbf24, #d97706)",
                },
              }),
              f.jsxs("div", {
                children: [
                  f.jsx("p", {
                    className: "text-xl text-stone-800",
                    style: { fontFamily: "var(--font-playfair)" },
                  }),
                  f.jsx("p", {
                    className:
                      "text-xs tracking-[2px] text-amber-600 uppercase mt-0.5",
                  }),
                ],
              }),
            ],
          }),
        }),
        f.jsxs("div", {
          className:
            "bg-white border border-stone-100 rounded-2xl shadow-sm p-5 mb-3",
          children: [
            f.jsx("p", {
              className:
                "text-[10px] tracking-[2px] uppercase text-stone-400 mb-4",
              children: "Preferences",
            }),
            t.map(([l, n]) =>
              f.jsxs(
                "div",
                {
                  className:
                    "flex items-center justify-between py-3 border-b border-stone-50 last:border-0",
                  children: [
                    f.jsx("span", {
                      className: "text-xs tracking-wide text-stone-400",
                      children: l,
                    }),
                    f.jsx("span", {
                      className: "text-sm text-stone-600",
                      children: n,
                    }),
                  ],
                },
                l,
              ),
            ),
          ],
        }),
        f.jsx("button", {
          className:
            "w-full py-4 rounded-2xl border-2 border-dashed border-stone-200 text-sm text-stone-400 hover:border-amber-300 hover:text-amber-600 hover:bg-amber-50 transition-all cursor-pointer",
          children: "Edit profile & preferences",
        }),
      ],
    });
  }
  function D1({ room: e, onClose: t }) {
    const l = (E) => E.toISOString().split("T")[0],
      n = new Date(),
      a = new Date(n);
    a.setDate(a.getDate() + 1);
    const u = new Date(n);
    u.setDate(u.getDate() + 3);
    const [i, s] = R.useState(l(a)),
      [c, o] = R.useState(l(u)),
      [r, p] = R.useState(2),
      [d, m] = R.useState("");
    R.useEffect(() => {
      const E = (y) => {
        y.key === "Escape" && t();
      };
      return (
        window.addEventListener("keydown", E),
        () => window.removeEventListener("keydown", E)
      );
    }, [t]);
    const g = Math.max(
      0,
      Math.round((new Date(c).getTime() - new Date(i).getTime()) / 864e5),
    );
    function S() {
      t();
    }
    return f.jsx("div", {
      className:
        "fixed inset-0 bg-stone-900/50 z-50 flex items-end sm:items-center justify-center p-4",
      onClick: (E) => E.target === E.currentTarget && t(),
      children: f.jsxs("div", {
        className: "bg-white w-full max-w-sm rounded-3xl shadow-xl p-7",
        style: { animation: "slideUp 0.25s ease forwards" },
        children: [
          f.jsxs("div", {
            className: "flex items-start justify-between mb-1",
            children: [
              f.jsx("h3", {
                className: "text-2xl font-normal italic text-stone-800",
                style: { fontFamily: "var(--font-playfair)" },
                children: e,
              }),
              f.jsx("button", {
                onClick: t,
                className:
                  "text-stone-300 hover:text-stone-500 transition-colors text-xl leading-none mt-1 cursor-pointer",
                children: "×",
              }),
            ],
          }),
          f.jsx("p", {
            className: "text-xs text-stone-400 mb-5",
            children: "Select dates and confirm your reservation",
          }),
          f.jsx("div", {
            className: "grid grid-cols-2 gap-3 mb-3",
            children: ["Check-in", "Check-out"].map((E, y) =>
              f.jsxs(
                "div",
                {
                  children: [
                    f.jsx("label", {
                      className:
                        "block text-[10px] tracking-[2px] uppercase text-stone-400 mb-1.5 font-semibold",
                      children: E,
                    }),
                    f.jsx("input", {
                      className: "ob-input",
                      type: "date",
                      value: y === 0 ? i : c,
                      onChange: (h) =>
                        y === 0 ? s(h.target.value) : o(h.target.value),
                    }),
                  ],
                },
                E,
              ),
            ),
          }),
          f.jsxs("div", {
            className: "mb-3",
            children: [
              f.jsx("label", {
                className:
                  "block text-[10px] tracking-[2px] uppercase text-stone-400 mb-1.5 font-semibold",
                children: "Guests",
              }),
              f.jsx("input", {
                className: "ob-input",
                type: "number",
                min: 1,
                max: 6,
                value: r,
                onChange: (E) => p(Number(E.target.value)),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "mb-5",
            children: [
              f.jsx("label", {
                className:
                  "block text-[10px] tracking-[2px] uppercase text-stone-400 mb-1.5 font-semibold",
                children: "Special requests",
              }),
              f.jsx("input", {
                className: "ob-input",
                placeholder: "e.g. high floor, extra pillows…",
                value: d,
                onChange: (E) => m(E.target.value),
              }),
            ],
          }),
          g > 0 &&
            f.jsxs("div", {
              className:
                "bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-4 flex items-center justify-between",
              children: [
                f.jsxs("span", {
                  className: "text-xs text-stone-500",
                  children: [
                    g,
                    " night",
                    g !== 1 ? "s" : "",
                    " · ",
                    r,
                    " guest",
                    r > 1 ? "s" : "",
                  ],
                }),
                f.jsxs("span", {
                  className: "text-lg text-stone-800",
                  style: { fontFamily: "var(--font-playfair)" },
                  children: ["₹", (g * 7e3).toLocaleString("en-IN")],
                }),
              ],
            }),
          f.jsxs("div", {
            className: "flex gap-3",
            children: [
              f.jsx("button", {
                onClick: t,
                className:
                  "flex-1 py-3 rounded-xl border border-stone-200 text-stone-500 text-sm font-semibold hover:border-stone-300 transition-colors cursor-pointer",
                children: "Cancel",
              }),
              f.jsx("button", {
                onClick: S,
                className:
                  "btn-shine flex-[2] py-3 rounded-xl text-white text-sm font-semibold",
                children: "Confirm Reservation",
              }),
            ],
          }),
        ],
      }),
    });
  }
  function C1() {
    const { propertyInfo: e } = Bl();
    async function t(n) {
      try {
        if (!(e != null && e.propertyId)) {
          n([]);
          return;
        }
        const u = (
          await N1(e == null ? void 0 : e.propertyId)
        ).data.roomTypes.map((i) => ({
          lable: i.type,
          id: i.roomTypeId,
          roomCount: i.roomCount,
        }));
        (console.log(u),
          u.length > 0
            ? n([{ id: "all", lable: "All Rooms", roomCount: void 0 }, ...u])
            : n([]));
      } catch (a) {
        console.log("Error while fetching roomtype", a);
      }
    }
    async function l(n, a) {
      if (!(e != null && e.propertyId)) {
        a([]);
        return;
      }
      try {
        const u = n === "all" ? "" : n,
          i = await T1(e.propertyId, u);
        (console.log(i.data), a(i.data.rooms));
      } catch (u) {
        console.log("Error while fetching roomtype", u);
      }
    }
    return { fetchRoomTypes: t, fetchRoomsByType: l };
  }
  function M1() {
    async function e(t) {
      try {
        const l = await j1(t);
        console.log("Room booked successfully:", l.data);
      } catch (l) {
        console.log("Error booking room:", l);
      }
    }
    return { bookRoom: e };
  }
  function U1({ onBook: e }) {
    const [t, l] = R.useState([]),
      [n, a] = R.useState("all"),
      [u, i] = R.useState(null),
      { propertyInfo: s } = Bl(),
      [c, o] = R.useState([]),
      { fetchRoomTypes: r, fetchRoomsByType: p } = C1(),
      d = (m) => {
        i(m);
      };
    return (
      R.useEffect(() => {
        r(l);
      }, [s == null ? void 0 : s.propertyId]),
      R.useEffect(() => {
        p(n, o);
      }, [s == null ? void 0 : s.propertyId, n]),
      f.jsxs("div", {
        className: "max-w-6xl mx-auto h-full",
        children: [
          f.jsxs("div", {
            className: "flex gap-2 mb-6 items-center overflow-x-auto pb-2",
            style: { scrollbarWidth: "none" },
            children: [
              f.jsx("p", {
                className: " text-sm text-stone-500",
                children: "Room Categories",
              }),
              t.map((m) => {
                const g = n === m.id;
                return f.jsxs(
                  "button",
                  {
                    onClick: () => a(m.id),
                    className: `px-4 py-2 rounded-xl whitespace-nowrap transition-all flex items-center gap-2 text-sm font-medium cursor-pointer ${g ? "bg-amber-600 text-white shadow-md" : "bg-white text-stone-600 border border-stone-200 hover:border-amber-300"}`,
                    children: [
                      m.lable,
                      m.roomCount &&
                        f.jsx("span", {
                          className: `flex items-center justify-center min-w-[20px] h-[20px] px-1 text-xs rounded-full ${g ? "bg-white text-amber-600" : "bg-amber-100 text-amber-700"}`,
                          children: m.roomCount,
                        }),
                    ],
                  },
                  m.id,
                );
              }),
            ],
          }),
          c.length === 0 &&
            f.jsxs("div", {
              className: "flex flex-col items-center justify-center py-16 px-4",
              children: [
                f.jsx("div", {
                  className:
                    "w-24 h-24 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mb-6",
                  children: f.jsx("span", {
                    className: "text-5xl",
                    children: "🏨",
                  }),
                }),
                f.jsx("h3", {
                  className: "text-2xl text-stone-800 mb-2 italic",
                  style: { fontFamily: "var(--font-playfair)" },
                  children: "No Rooms Available",
                }),
                f.jsx("p", {
                  className: "text-stone-500 text-center max-w-md mb-6",
                  children:
                    "We couldn't find any rooms in this category at the moment. Try selecting a different category to see available options.",
                }),
              ],
            }),
          f.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
            children: c.map((m) =>
              f.jsxs(
                "div",
                {
                  className:
                    "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100 group cursor-pointer",
                  onClick: () => d(m),
                  children: [
                    f.jsxs("div", {
                      className: "relative h-48 overflow-hidden",
                      children: [
                        f.jsx("img", {
                          src: m.image,
                          alt: m.roomNumber,
                          className:
                            "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500",
                        }),
                        f.jsxs("div", {
                          className:
                            "absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full",
                          children: [
                            f.jsxs("span", {
                              className: "text-sm font-semibold text-amber-700",
                              children: ["₹", m.price.toLocaleString("en-IN")],
                            }),
                            f.jsx("span", {
                              className: "text-xs text-stone-500",
                              children: "/night",
                            }),
                          ],
                        }),
                        f.jsx("div", {
                          className:
                            "absolute top-3 left-3 bg-stone-900/80 backdrop-blur-sm px-2.5 py-1 rounded-full",
                          children: f.jsx("span", {
                            className:
                              "text-[10px] uppercase tracking-wider text-white font-semibold",
                            children: m.category,
                          }),
                        }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "p-4",
                      children: [
                        f.jsx("h3", {
                          className: "text-xl text-stone-800 mb-1 italic",
                          style: { fontFamily: "var(--font-playfair)" },
                          children: m.category,
                        }),
                        f.jsx("p", {
                          className: "text-xs text-stone-500 mb-3 line-clamp-2",
                          children: m.description,
                        }),
                        f.jsxs("div", {
                          className:
                            "flex items-center gap-4 text-xs text-stone-500 mb-3",
                          children: [
                            f.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                f.jsx("span", { children: "📏" }),
                                m.floor,
                              ],
                            }),
                            f.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                f.jsx("span", { children: "👥" }),
                                "Up to ",
                                m.maxGuests,
                              ],
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "flex flex-wrap gap-1.5",
                          children: [
                            m.amenities.slice(0, 3).map((g) =>
                              f.jsx(
                                "span",
                                {
                                  className:
                                    "text-[10px] px-2 py-1 bg-stone-50 text-stone-600 rounded-md",
                                  children: g,
                                },
                                g,
                              ),
                            ),
                            m.amenities.length > 3 &&
                              f.jsxs("span", {
                                className:
                                  "text-[10px] px-2 py-1 text-amber-600 font-medium",
                                children: [
                                  "+",
                                  m.amenities.length - 3,
                                  " more",
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                m.id,
              ),
            ),
          }),
          u && f.jsx(w1, { room: u, onClose: () => i(null) }),
        ],
      })
    );
  }
  function w1({ room: e, onClose: t }) {
    const l = (_) => _.toISOString().split("T")[0],
      n = new Date(),
      a = new Date(n);
    a.setDate(a.getDate() + 1);
    const u = new Date(n);
    u.setDate(u.getDate() + 3);
    const { bookRoom: i } = M1(),
      {
        propertyInfo: s,
        setToastMessage: c,
        setToastType: o,
        setActiveTab: r,
      } = Bl(),
      [p, d] = R.useState(l(a)),
      [m, g] = R.useState(l(u)),
      [S, E] = R.useState(2),
      [y, h] = R.useState(""),
      [b, v] = R.useState(!1),
      [A, O] = R.useState(!1),
      T = Math.max(
        0,
        Math.round((new Date(m).getTime() - new Date(p).getTime()) / 864e5),
      ),
      z = T * e.price;
    async function U() {
      try {
        v(!0);
        const _ = Si.getTokenPayload(),
          Ee = {
            roomId: e.id,
            hotelId: (s == null ? void 0 : s.propertyId) || "",
            guestId: _.userId ? _.userId : "",
            checkIn: new Date(p),
            checkOut: new Date(m),
            guests: S,
            notes: y,
          };
        (await i(Ee),
          O(!0),
          o("success"),
          c("Booking initiated successfully!"));
      } catch (_) {
        (console.error(_),
          o("error"),
          c(
            (_ == null ? void 0 : _.message) ||
              "Something went wrong while booking. Please try again.",
          ));
      } finally {
        v(!1);
      }
    }
    return f.jsxs(f.Fragment, {
      children: [
        f.jsx("div", {
          className: "fixed inset-0 bg-stone-900/30 backdrop-blur-sm z-40",
          onClick: t,
          style: { animation: "fadeIn 0.2s ease" },
        }),
        f.jsxs("div", {
          className:
            "fixed right-0 top-0 bottom-0 w-full max-w-lg bg-white shadow-2xl z-50 overflow-y-auto",
          style: { animation: "slideInRight 0.3s ease" },
          children: [
            f.jsxs("div", {
              className: "relative h-56",
              children: [
                f.jsx("img", {
                  src: e.image,
                  alt: e.category,
                  className: "w-full h-full object-cover",
                }),
                f.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent",
                }),
                f.jsx("button", {
                  onClick: t,
                  className:
                    "absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-stone-600 hover:bg-white transition-colors cursor-pointer shadow-lg",
                  children: "×",
                }),
                f.jsxs("div", {
                  className: "absolute bottom-4 left-6 right-6",
                  children: [
                    f.jsx("h2", {
                      className: "text-3xl text-white mb-1 italic",
                      style: { fontFamily: "var(--font-playfair)" },
                      children: e.roomNumber,
                    }),
                    f.jsxs("div", {
                      className:
                        "flex items-center gap-3 text-white/90 text-sm",
                      children: [
                        f.jsxs("span", { children: ["📏 ", e.floor] }),
                        f.jsxs("span", {
                          children: ["👥 Up to ", e.maxGuests, " guests"],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            f.jsxs("div", {
              className: "p-6",
              children: [
                f.jsx("p", {
                  className: "text-stone-600 mb-6",
                  children: e.description,
                }),
                f.jsxs("div", {
                  className: "mb-6",
                  children: [
                    f.jsx("h3", {
                      className:
                        "text-sm font-semibold text-stone-800 mb-3 uppercase tracking-wider",
                      children: "Amenities",
                    }),
                    f.jsx("div", {
                      className: "grid grid-cols-2 gap-2",
                      children: e.amenities.map((_) =>
                        f.jsxs(
                          "div",
                          {
                            className:
                              "flex items-center gap-2 text-sm text-stone-600",
                            children: [
                              f.jsx("span", {
                                className:
                                  "w-1.5 h-1.5 rounded-full bg-amber-500",
                              }),
                              _,
                            ],
                          },
                          _,
                        ),
                      ),
                    }),
                  ],
                }),
                f.jsx("div", {
                  className: "border-t border-stone-200 pt-6",
                  children: A
                    ? f.jsxs("div", {
                        className:
                          "flex flex-col items-center text-center py-10",
                        children: [
                          f.jsx("div", {
                            className:
                              "w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4",
                            children: f.jsx("span", {
                              className: "text-2xl",
                              children: "✅",
                            }),
                          }),
                          f.jsx("h3", {
                            className:
                              "text-xl font-semibold text-stone-800 mb-2",
                            children: "Booking Initiated!",
                          }),
                          f.jsx("p", {
                            className: "text-stone-600 text-sm mb-4 max-w-sm",
                            children:
                              "We've sent you a secure payment link on your email. Please complete the payment to confirm your reservation.",
                          }),
                          f.jsx("p", {
                            className: "text-stone-500 text-sm mb-6",
                            children:
                              "You can also explore our hotel services for a better stay ✨",
                          }),
                          f.jsxs("div", {
                            className: "flex gap-3 w-full",
                            children: [
                              f.jsx("button", {
                                onClick: t,
                                className:
                                  "flex-1 py-3 rounded-xl border border-stone-200 text-stone-600 text-sm font-semibold hover:bg-stone-50",
                                children: "Close",
                              }),
                              f.jsx("button", {
                                onClick: () => {
                                  (r("services"), t());
                                },
                                className:
                                  "flex-[2] py-3 rounded-xl bg-amber-600 text-white text-sm font-semibold hover:bg-amber-700",
                                children: "Explore Services",
                              }),
                            ],
                          }),
                        ],
                      })
                    : f.jsxs(f.Fragment, {
                        children: [
                          f.jsx("h3", {
                            className:
                              "text-sm font-semibold text-stone-800 mb-4 uppercase tracking-wider",
                            children: "Book Your Stay",
                          }),
                          f.jsxs("div", {
                            className: "grid grid-cols-2 gap-3 mb-4",
                            children: [
                              f.jsxs("div", {
                                children: [
                                  f.jsx("label", {
                                    className:
                                      "block text-[10px] tracking-[2px] uppercase text-stone-400 mb-1.5 font-semibold",
                                    children: "Check-in",
                                  }),
                                  f.jsx("input", {
                                    className: "ob-input",
                                    type: "date",
                                    value: p,
                                    min: l(n),
                                    onChange: (_) => d(_.target.value),
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                children: [
                                  f.jsx("label", {
                                    className:
                                      "block text-[10px] tracking-[2px] uppercase text-stone-400 mb-1.5 font-semibold",
                                    children: "Check-out",
                                  }),
                                  f.jsx("input", {
                                    className: "ob-input",
                                    type: "date",
                                    value: m,
                                    min: p,
                                    onChange: (_) => g(_.target.value),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          f.jsxs("div", {
                            className: "mb-4",
                            children: [
                              f.jsx("label", {
                                className:
                                  "block text-[10px] tracking-[2px] uppercase text-stone-400 mb-1.5 font-semibold",
                                children: "Guests",
                              }),
                              f.jsx("input", {
                                className: "ob-input",
                                type: "number",
                                min: 1,
                                max: e.maxGuests,
                                value: S,
                                onChange: (_) => E(Number(_.target.value)),
                              }),
                            ],
                          }),
                          f.jsxs("div", {
                            className: "mb-5",
                            children: [
                              f.jsx("label", {
                                className:
                                  "block text-[10px] tracking-[2px] uppercase text-stone-400 mb-1.5 font-semibold",
                                children: "Special Requests",
                              }),
                              f.jsx("textarea", {
                                className: "ob-input resize-none",
                                rows: 3,
                                placeholder:
                                  "e.g. high floor, extra pillows, early check-in...",
                                value: y,
                                onChange: (_) => h(_.target.value),
                              }),
                            ],
                          }),
                          T > 0 &&
                            f.jsxs("div", {
                              className:
                                "bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-5 mb-5",
                              children: [
                                f.jsxs("div", {
                                  className:
                                    "flex items-center justify-between mb-2",
                                  children: [
                                    f.jsxs("span", {
                                      className: "text-sm text-stone-600",
                                      children: [
                                        "₹",
                                        e.price.toLocaleString("en-IN"),
                                        " × ",
                                        T,
                                        " night",
                                        T !== 1 ? "s" : "",
                                      ],
                                    }),
                                    f.jsxs("span", {
                                      className: "text-sm text-stone-700",
                                      children: [
                                        "₹",
                                        z.toLocaleString("en-IN"),
                                      ],
                                    }),
                                  ],
                                }),
                                f.jsxs("div", {
                                  className:
                                    "flex items-center justify-between pt-2 border-t border-amber-200",
                                  children: [
                                    f.jsxs("span", {
                                      className:
                                        "text-sm font-semibold text-stone-800",
                                      children: [
                                        "Total (",
                                        S,
                                        " guest",
                                        S > 1 ? "s" : "",
                                        ")",
                                      ],
                                    }),
                                    f.jsxs("span", {
                                      className:
                                        "text-2xl text-amber-700 italic",
                                      children: [
                                        "₹",
                                        z.toLocaleString("en-IN"),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          f.jsxs("div", {
                            className: "flex gap-3",
                            children: [
                              f.jsx("button", {
                                onClick: t,
                                className:
                                  "flex-1 py-3.5 rounded-xl border border-stone-200 text-stone-600 text-sm font-semibold hover:border-stone-300 hover:bg-stone-50 transition-all cursor-pointer",
                                children: "Cancel",
                              }),
                              f.jsx("button", {
                                onClick: U,
                                disabled: T === 0 || b,
                                className:
                                  "btn-shine flex-[2] py-3.5 rounded-xl text-white text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed",
                                children: b
                                  ? "Processing..."
                                  : "Confirm Reservation",
                              }),
                            ],
                          }),
                        ],
                      }),
                }),
              ],
            }),
          ],
        }),
        f.jsx("style", {
          children: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `,
        }),
      ],
    });
  }
  const B1 = [
    { id: "bookings", label: "Bookings", icon: "📅" },
    { id: "rooms", label: "Rooms", icon: "🛏" },
    { id: "services", label: "Services", icon: "🛎" },
    { id: "profile", label: "Profile", icon: "👤" },
  ];
  function G0() {
    const { propertyInfo: e } = Bl();
    async function t(a, u) {
      var s, c;
      const i = e == null ? void 0 : e.propertyId;
      if ((console.log("Fetching services for hotelId:", i), !!i))
        try {
          const o = await A1(i);
          (console.log("services response", o.data),
            a(o.data.services || []),
            u(
              ((c = (s = o.data.services) == null ? void 0 : s[0]) == null
                ? void 0
                : c.serviceId) || "",
            ));
        } catch {
          console.log("Error while fetching hotel Services");
        }
    }
    async function l(a, u, i) {
      i((s) => {
        const c = s.find((o) => o.itemId === u.id);
        if ((console.log("is service exists", c), c)) {
          const o = s.map(
            (r) => (
              r.itemId === u.id &&
                (console.log("Service already in cart, increasing quantity"),
                (r.quantity += 1)),
              r
            ),
          );
          return (console.log("Updated cart after adding service:", o), o);
        } else {
          const o = {
            itemId: u.id,
            serviceId: a,
            name: u.name,
            price: u.price,
            quantity: 1,
            isFree: u.isFree,
          };
          return [...s, o];
        }
      });
    }
    async function n(a, u) {
      u((i) => {
        const s = i.find((c) => c.itemId === a.id);
        return s
          ? s.quantity === 1
            ? i.filter((c) => c.itemId !== a.id)
            : i.map((c) =>
                c.itemId === a.id ? { ...c, quantity: c.quantity - 1 } : c,
              )
          : i;
      });
    }
    return { fetchServices: t, addService: l, removeService: n };
  }
  /**
   * @license lucide-react v1.7.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const X0 = (...e) =>
    e
      .filter((t, l, n) => !!t && t.trim() !== "" && n.indexOf(t) === l)
      .join(" ")
      .trim();
  /**
   * @license lucide-react v1.7.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const H1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  /**
   * @license lucide-react v1.7.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const q1 = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, l, n) =>
      n ? n.toUpperCase() : l.toLowerCase(),
    );
  /**
   * @license lucide-react v1.7.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Q0 = (e) => {
    const t = q1(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  };
  /**
   * @license lucide-react v1.7.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ var Ef = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  /**
   * @license lucide-react v1.7.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Y1 = (e) => {
      for (const t in e)
        if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
      return !1;
    },
    L1 = R.createContext({}),
    G1 = () => R.useContext(L1),
    X1 = R.forwardRef(
      (
        {
          color: e,
          size: t,
          strokeWidth: l,
          absoluteStrokeWidth: n,
          className: a = "",
          children: u,
          iconNode: i,
          ...s
        },
        c,
      ) => {
        const {
            size: o = 24,
            strokeWidth: r = 2,
            absoluteStrokeWidth: p = !1,
            color: d = "currentColor",
            className: m = "",
          } = G1() ?? {},
          g = (n ?? p) ? (Number(l ?? r) * 24) / Number(t ?? o) : (l ?? r);
        return R.createElement(
          "svg",
          {
            ref: c,
            ...Ef,
            width: t ?? o ?? Ef.width,
            height: t ?? o ?? Ef.height,
            stroke: e ?? d,
            strokeWidth: g,
            className: X0("lucide", m, a),
            ...(!u && !Y1(s) && { "aria-hidden": "true" }),
            ...s,
          },
          [
            ...i.map(([S, E]) => R.createElement(S, E)),
            ...(Array.isArray(u) ? u : [u]),
          ],
        );
      },
    );
  /**
   * @license lucide-react v1.7.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Hl = (e, t) => {
    const l = R.forwardRef(({ className: n, ...a }, u) =>
      R.createElement(X1, {
        ref: u,
        iconNode: t,
        className: X0(`lucide-${H1(Q0(e))}`, `lucide-${e}`, n),
        ...a,
      }),
    );
    return ((l.displayName = Q0(e)), l);
  };
  /**
   * @license lucide-react v1.7.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Q1 = Hl("chevron-up", [
    ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
  ]);
  /**
   * @license lucide-react v1.7.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Z1 = Hl("circle-check", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ]);
  /**
   * @license lucide-react v1.7.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const V1 = Hl("minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
  /**
   * @license lucide-react v1.7.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Z0 = Hl("plus", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ]);
  /**
   * @license lucide-react v1.7.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Ni = Hl("shopping-bag", [
    ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
    ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }],
    [
      "path",
      {
        d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
        key: "o988cm",
      },
    ],
  ]);
  /**
   * @license lucide-react v1.7.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const K1 = Hl("sparkles", [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ]);
  /**
   * @license lucide-react v1.7.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const J1 = Hl("trash-2", [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
  ]);
  function k1({ amenity: e, activeService: t, setCartItem: l, cartItem: n }) {
    const {
        name: a,
        description: u,
        price: i,
        isFree: s,
        isAutoIncluded: c,
        id: o,
      } = e,
      { addService: r, removeService: p } = G0(),
      d = n.find((m) => m.itemId === e.id);
    return f.jsxs("div", {
      className:
        "bg-white border border-stone-200 rounded-[14px] overflow-hidden font-sans transition-all duration-[180ms] ease-in-out flex flex-col hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(120,83,30,0.10)]",
      children: [
        f.jsx("div", {
          className: `h-[3px] ${s ? "bg-gradient-to-r from-emerald-500 to-emerald-400" : "bg-gradient-to-r from-amber-400 to-orange-500"}`,
        }),
        f.jsxs("div", {
          className: "p-[14px_16px] flex-1",
          children: [
            f.jsxs("div", {
              className: "flex items-start justify-between gap-2 mb-1.5",
              children: [
                f.jsx("p", {
                  className:
                    "text-sm font-medium text-stone-900 m-0 leading-[1.3]",
                  children: a,
                }),
                f.jsxs("div", {
                  className: "flex gap-[5px] shrink-0",
                  children: [
                    c &&
                      f.jsx("span", {
                        className:
                          "text-[10px] font-medium px-[7px] py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 whitespace-nowrap",
                        children: "Auto",
                      }),
                    f.jsx("span", {
                      className: `text-[10px] font-medium px-[7px] py-0.5 rounded-full whitespace-nowrap border ${s ? "bg-green-50 text-green-700 border-green-200" : "bg-orange-50 text-orange-700 border-orange-200"}`,
                      children: s ? "Free" : `₹${i.toLocaleString("en-IN")}`,
                    }),
                  ],
                }),
              ],
            }),
            f.jsx("p", {
              className: "text-xs text-stone-500 m-0 leading-relaxed",
              children: u,
            }),
          ],
        }),
        f.jsxs("div", {
          className:
            "px-4 py-[9px] bg-stone-50 border-t border-[#f0edea] flex items-center justify-between",
          children: [
            f.jsx("div", {
              className: "flex items-center gap-[5px]",
              children: c
                ? f.jsxs(f.Fragment, {
                    children: [
                      f.jsx(Z1, { size: 12, className: "text-emerald-500" }),
                      f.jsx("span", {
                        className: "text-[11px] text-stone-500",
                        children: "Included by default",
                      }),
                    ],
                  })
                : f.jsxs(f.Fragment, {
                    children: [
                      f.jsx(Z0, { size: 12, className: "text-stone-400" }),
                      f.jsx("span", {
                        className: "text-[11px] text-stone-400",
                        children: "On request",
                      }),
                    ],
                  }),
            }),
            !c &&
              f.jsxs("div", {
                className: "flex gap-[5px]",
                children: [
                  !d &&
                    f.jsx(Nf, {
                      onClick: () => {
                        (console.log("clicked"), r(t, e, l));
                      },
                      children: "Request",
                    }),
                  d &&
                    f.jsxs(f.Fragment, {
                      children: [
                        f.jsxs(Nf, {
                          onClick: () => {
                            r(t, e, l);
                          },
                          children: [d.quantity, " Add"],
                        }),
                        f.jsx(Nf, {
                          onClick: () => {
                            p(e, l);
                          },
                          children: "- Remove",
                        }),
                      ],
                    }),
                ],
              }),
          ],
        }),
      ],
    });
  }
  function Nf({ children: e, danger: t = !1, onClick: l }) {
    return f.jsx("button", {
      onClick: l,
      className: `text-[11px] font-medium px-[10px] py-1 rounded-md cursor-pointer border border-stone-200 bg-white transition-all duration-150 ${t ? "text-rose-600 hover:bg-rose-50 hover:border-rose-200" : "text-stone-500 hover:bg-amber-50 hover:border-amber-200"}`,
      children: e,
    });
  }
  function $1({
    amenities: e,
    activeServiceId: t,
    setCartItem: l,
    cartItem: n,
  }) {
    const [a, u] = R.useState(""),
      i = e.filter((o) => o.isFree).length,
      s = e.filter((o) => !o.isFree).length,
      c = e.filter((o) => o.isAutoIncluded).length;
    return f.jsxs("div", {
      className: "min-h-screen bg-[#fffbf5] p-8 font-sans",
      children: [
        f.jsx("div", {
          className: "flex items-start justify-between flex-wrap gap-3 mb-6",
          children: f.jsxs("div", {
            children: [
              f.jsx("h1", {
                className:
                  "font-serif text-[26px] font-normal text-stone-900 m-0",
                children: "Amenities",
              }),
              f.jsxs("p", {
                className: "text-[13px] text-stone-400 mt-[3px]",
                children: [
                  e.length,
                  " total · ",
                  i,
                  " free · ",
                  s,
                  " paid ·",
                  " ",
                  c,
                  " auto-included",
                ],
              }),
            ],
          }),
        }),
        f.jsx("div", {
          className:
            "grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2.5 mb-6",
          children: [
            { label: "Total", value: e.length, color: "border-amber-400" },
            { label: "Free", value: i, color: "border-emerald-500" },
            { label: "Paid", value: s, color: "border-orange-500" },
            { label: "Auto-included", value: c, color: "border-violet-600" },
          ].map((o) =>
            f.jsxs(
              "div",
              {
                className: `bg-white border  rounded-[10px] px-3.5 py-2.5 border-l-[3px] ${o.color}`,
                children: [
                  f.jsx("p", {
                    className:
                      "text-[10px] text-stone-400 m-0 mb-[3px] uppercase tracking-[0.06em]",
                    children: o.label,
                  }),
                  f.jsx("p", {
                    className: "text-xl font-semibold text-stone-900 m-0",
                    children: o.value,
                  }),
                ],
              },
              o.label,
            ),
          ),
        }),
        e.length === 0
          ? f.jsx("div", {
              className: "text-center py-12 text-stone-400 text-sm",
              children: "No amenities match your search.",
            })
          : f.jsx("div", {
              className:
                "grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-3.5",
              children: e.map((o) =>
                f.jsx(
                  k1,
                  { amenity: o, activeService: t, setCartItem: l, cartItem: n },
                  o.id,
                ),
              ),
            }),
      ],
    });
  }
  function F1(e) {
    return e.reduce((t, l) => t + l.price * l.quantity, 0);
  }
  function W1({ cartItems: e, setCartItems: t, onCheckout: l }) {
    const [n, a] = R.useState(!1),
      u = F1(e),
      i = e.filter((m) => !m.isFree),
      s = e.filter((m) => m.isFree),
      c = e.reduce((m, g) => m + g.quantity, 0);
    function o(m) {
      t((g) =>
        g.map((S) => (S.itemId === m ? { ...S, quantity: S.quantity + 1 } : S)),
      );
    }
    function r(m) {
      t((g) =>
        g
          .map((S) => (S.itemId === m ? { ...S, quantity: S.quantity - 1 } : S))
          .filter((S) => S.quantity > 0),
      );
    }
    function p(m) {
      t((g) => g.filter((S) => S.itemId !== m));
    }
    function d() {
      t([]);
    }
    return n
      ? f.jsxs(f.Fragment, {
          children: [
            f.jsx("div", {
              onClick: () => a(!1),
              className:
                "fixed inset-0 bg-[rgba(28,25,23,0.35)] z-[49] backdrop-blur-sm",
            }),
            f.jsxs("div", {
              className:
                "fixed bottom-0 right-0 left-0 z-50 bg-[#fffbf5] rounded-t-[20px] shadow-[0_-12px_48px_rgba(120,83,30,0.15)] font-[DM_Sans,sans-serif] max-h-[85vh] flex flex-col",
              children: [
                f.jsx("div", {
                  className: "flex justify-center pt-2.5",
                  children: f.jsx("div", {
                    className: "w-10 h-1 rounded bg-stone-300",
                  }),
                }),
                f.jsxs("div", {
                  className:
                    "flex items-center justify-between px-5 py-3.5 border-b border-[#f0edea]",
                  children: [
                    f.jsxs("div", {
                      className: "flex items-center gap-2.5",
                      children: [
                        f.jsx("div", {
                          className:
                            "w-9 h-9 rounded-[10px] bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center",
                          children: f.jsx(Ni, {
                            size: 17,
                            className: "text-amber-600",
                          }),
                        }),
                        f.jsxs("div", {
                          children: [
                            f.jsx("p", {
                              className:
                                "m-0 text-base font-semibold text-stone-900 font-[DM_Serif_Display,serif]",
                              children: "Your requests",
                            }),
                            f.jsxs("p", {
                              className: "m-0 text-[11px] text-stone-400",
                              children: [
                                c,
                                " item",
                                c !== 1 ? "s" : "",
                                " selected",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.length > 0 &&
                          f.jsx("button", {
                            onClick: d,
                            className:
                              "text-[11px] font-medium px-2.5 py-1 rounded-lg border border-rose-200 bg-rose-50 text-rose-600 cursor-pointer font-[DM_Sans,sans-serif] hover:bg-rose-100 transition-colors",
                            children: "Clear all",
                          }),
                        f.jsx("button", {
                          onClick: () => a(!1),
                          className:
                            "w-8 h-8 rounded-lg border border-stone-200 bg-white cursor-pointer flex items-center justify-center hover:bg-stone-50 transition-colors",
                          children: f.jsx(Q1, {
                            size: 16,
                            className: "text-stone-500",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsx("div", {
                  className: "overflow-y-auto flex-1 px-5 py-3",
                  children:
                    e.length === 0
                      ? f.jsxs("div", {
                          className: "text-center py-12 text-stone-400",
                          children: [
                            f.jsx(Ni, {
                              size: 36,
                              className: "text-stone-300 mx-auto mb-2.5",
                            }),
                            f.jsx("p", {
                              className: "text-sm m-0",
                              children: "No items added yet",
                            }),
                            f.jsx("p", {
                              className: "text-xs mt-1",
                              children:
                                "Browse services and add to your request",
                            }),
                          ],
                        })
                      : f.jsxs("div", {
                          className: "flex flex-col gap-2.5",
                          children: [
                            i.length > 0 &&
                              f.jsxs("div", {
                                children: [
                                  f.jsx("p", {
                                    className:
                                      "text-[10px] font-medium text-stone-400 uppercase tracking-[0.06em] mb-2 mt-0",
                                    children: "Paid services",
                                  }),
                                  f.jsx("div", {
                                    className: "flex flex-col gap-2",
                                    children: i.map((m) =>
                                      f.jsx(
                                        V0,
                                        {
                                          item: m,
                                          onIncrement: () => o(m.itemId),
                                          onDecrement: () => r(m.itemId),
                                          onRemove: () => p(m.itemId),
                                        },
                                        m.itemId,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            s.length > 0 &&
                              f.jsxs("div", {
                                className: i.length ? "mt-3" : "",
                                children: [
                                  f.jsx("p", {
                                    className:
                                      "text-[10px] font-medium text-stone-400 uppercase tracking-[0.06em] mb-2 mt-0",
                                    children: "Complimentary",
                                  }),
                                  f.jsx("div", {
                                    className: "flex flex-col gap-2",
                                    children: s.map((m) =>
                                      f.jsx(
                                        V0,
                                        {
                                          item: m,
                                          onIncrement: () => o(m.itemId),
                                          onDecrement: () => r(m.itemId),
                                          onRemove: () => p(m.itemId),
                                        },
                                        m.itemId,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                          ],
                        }),
                }),
                e.length > 0 &&
                  f.jsxs("div", {
                    className:
                      "px-5 py-3.5 border-t border-[#f0edea] bg-white rounded-b-[20px]",
                    children: [
                      f.jsxs("div", {
                        className: "flex flex-col gap-1.5 mb-3.5",
                        children: [
                          i.length > 0 &&
                            f.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                f.jsxs("span", {
                                  className: "text-[13px] text-stone-500",
                                  children: [
                                    "Paid (",
                                    i.reduce((m, g) => m + g.quantity, 0),
                                    " items)",
                                  ],
                                }),
                                f.jsxs("span", {
                                  className:
                                    "text-[13px] font-medium text-stone-900",
                                  children: ["₹", u.toLocaleString("en-IN")],
                                }),
                              ],
                            }),
                          s.length > 0 &&
                            f.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                f.jsxs("span", {
                                  className:
                                    "text-[13px] text-stone-500 flex items-center gap-1",
                                  children: [
                                    f.jsx(K1, {
                                      size: 12,
                                      className: "text-emerald-500",
                                    }),
                                    "Complimentary (",
                                    s.reduce((m, g) => m + g.quantity, 0),
                                    ")",
                                  ],
                                }),
                                f.jsx("span", {
                                  className:
                                    "text-[13px] font-medium text-emerald-500",
                                  children: "Free",
                                }),
                              ],
                            }),
                          f.jsxs("div", {
                            className:
                              "flex justify-between border-t border-[#f0edea] pt-2 mt-0.5",
                            children: [
                              f.jsx("span", {
                                className:
                                  "text-sm font-semibold text-stone-900",
                                children: "Total",
                              }),
                              f.jsxs("span", {
                                className: "text-base font-bold text-amber-600",
                                children: ["₹", u.toLocaleString("en-IN")],
                              }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("button", {
                        onClick: () => (l == null ? void 0 : l(e)),
                        className:
                          "w-full py-3 bg-gradient-to-br from-amber-400 to-orange-500 border-none rounded-xl text-white font-[DM_Sans,sans-serif] text-[15px] font-semibold cursor-pointer flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-150",
                        children: [
                          f.jsx(Ni, { size: 16 }),
                          "Submit request · ₹",
                          u.toLocaleString("en-IN"),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        })
      : f.jsxs("button", {
          onClick: () => a(!0),
          className:
            "fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-gradient-to-br from-amber-400 to-orange-500 border-none rounded-2xl cursor-pointer shadow-[0_6px_20px_rgba(245,158,11,0.4)] hover:shadow-[0_8px_28px_rgba(245,158,11,0.5)] hover:-translate-y-0.5 transition-all duration-200 font-[DM_Sans,sans-serif]",
          children: [
            f.jsxs("div", {
              className: "relative flex items-center justify-center",
              children: [
                f.jsx(Ni, { size: 17, className: "text-white" }),
                c > 0 &&
                  f.jsx("span", {
                    className:
                      "absolute -top-2 -right-2 bg-white text-orange-500 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none",
                    children: c,
                  }),
              ],
            }),
            c > 0 && f.jsx("div", { className: "w-px h-4 bg-white/30 mx-0.5" }),
            c > 0
              ? f.jsxs("span", {
                  className: "text-sm font-semibold text-white tracking-tight",
                  children: ["₹", u.toLocaleString("en-IN")],
                })
              : f.jsx("span", {
                  className: "text-sm font-semibold text-white",
                  children: "Cart",
                }),
          ],
        });
  }
  function V0({ item: e, onIncrement: t, onDecrement: l, onRemove: n }) {
    return f.jsxs("div", {
      className:
        "flex items-center gap-3 bg-white border border-stone-200 rounded-[11px] px-3 py-2.5",
      children: [
        f.jsx("div", {
          className: `w-[3px] self-stretch rounded flex-shrink-0 ${e.isFree ? "bg-emerald-500" : "bg-gradient-to-b from-amber-400 to-orange-500"}`,
        }),
        f.jsxs("div", {
          className: "flex-1 min-w-0",
          children: [
            f.jsx("p", {
              className: "text-[13px] font-medium text-stone-900 m-0 truncate",
              children: e.name,
            }),
            f.jsx("p", {
              className: "text-[11px] text-stone-400 mt-0.5 mb-0",
              children: e.isFree
                ? f.jsx("span", {
                    className: "text-emerald-500 font-medium",
                    children: "Free",
                  })
                : f.jsxs(f.Fragment, {
                    children: [
                      "₹",
                      e.price.toLocaleString("en-IN"),
                      " × ",
                      e.quantity,
                      " =",
                      " ",
                      f.jsxs("strong", {
                        className: "text-amber-600",
                        children: [
                          "₹",
                          (e.price * e.quantity).toLocaleString("en-IN"),
                        ],
                      }),
                    ],
                  }),
            }),
          ],
        }),
        f.jsxs("div", {
          className: "flex items-center gap-1.5",
          children: [
            f.jsx(K0, { onClick: l, children: f.jsx(V1, { size: 11 }) }),
            f.jsx("span", {
              className:
                "text-[13px] font-semibold text-stone-900 min-w-[18px] text-center",
              children: e.quantity,
            }),
            f.jsx(K0, { onClick: t, children: f.jsx(Z0, { size: 11 }) }),
          ],
        }),
        f.jsx("button", {
          onClick: n,
          className:
            "w-7 h-7 rounded-[7px] border border-rose-200 bg-rose-50 cursor-pointer flex items-center justify-center flex-shrink-0 hover:bg-rose-100 transition-colors duration-150",
          children: f.jsx(J1, { size: 12, className: "text-rose-600" }),
        }),
      ],
    });
  }
  function K0({ children: e, onClick: t }) {
    return f.jsx("button", {
      onClick: t,
      className:
        "w-[26px] h-[26px] rounded-[7px] border border-stone-200 bg-white cursor-pointer flex items-center justify-center text-stone-600 hover:bg-amber-50 hover:border-amber-200 transition-all duration-150",
      children: e,
    });
  }
  function I1() {
    const [e, t] = R.useState([]),
      { propertyInfo: l } = Bl(),
      { fetchServices: n } = G0(),
      [a, u] = R.useState(""),
      [i, s] = R.useState([]),
      [c, o] = R.useState([]);
    return (
      R.useEffect(() => {
        n(t, u);
      }, [l == null ? void 0 : l.propertyId]),
      R.useEffect(() => {
        if (!a) return;
        const r = e.find((p) => p.serviceId === a);
        if (r != null && r.serviceItems && r.serviceItems.length > 0) {
          const p = r.serviceItems.map((d) => ({
            id: d._id ? d._id : "",
            name: d.name ? d.name : "",
            description: d.description ? d.description : "",
            price: d.price ? d.price : 0,
            isFree: d.isFree ? d.isFree : !1,
            isAutoIncluded: d.isAutoIncluded ? d.isAutoIncluded : !1,
          }));
          s(p);
        }
        console.log(r);
      }, [a]),
      f.jsxs(f.Fragment, {
        children: [
          f.jsxs("section", {
            children: [
              f.jsx("h1", {
                className: " text-stone-500   text-[25px]",
                children: "Explore Services",
              }),
              f.jsx("div", {
                className: "py-4 flex flex-wrap items-center gap-2",
                children:
                  e &&
                  e.map((r) => {
                    const p = a === r.serviceId;
                    return f.jsxs(
                      "button",
                      {
                        onClick: () => u(r.serviceId),
                        className:
                          "relative cursor-pointer px-3 py-1.5 rounded-full text-sm overflow-hidden transition-all duration-200",
                        style: {
                          border: `1px solid ${p ? r.color + "60" : "#e7e5e4"}`,
                          background: p ? r.color + "18" : "#ffffff",
                          boxShadow: p ? `0 0 0 3px ${r.color}14` : "none",
                        },
                        children: [
                          f.jsx("span", {
                            className:
                              "absolute inset-0 transition-opacity duration-200",
                            style: {
                              background: r.color,
                              opacity: p ? 0.1 : 0,
                            },
                          }),
                          f.jsxs("span", {
                            className:
                              "relative z-10 flex items-center gap-1.5",
                            children: [
                              f.jsx("span", {
                                className:
                                  "inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200",
                                style: {
                                  background: r.color,
                                  opacity: p ? 1 : 0.45,
                                },
                              }),
                              f.jsx("span", {
                                className:
                                  "font-medium text-nowrap text-sm transition-colors duration-200",
                                style: {
                                  color: p ? r.color : "#78716c",
                                  fontFamily: "'DM Sans', sans-serif",
                                },
                                children: r.name,
                              }),
                            ],
                          }),
                        ],
                      },
                      r.serviceId,
                    );
                  }),
              }),
              f.jsx("div", {
                children: f.jsx($1, {
                  amenities: i,
                  activeServiceId: a,
                  setCartItem: o,
                  cartItem: c,
                }),
              }),
            ],
          }),
          f.jsx(W1, {
            cartItems: c,
            setCartItems: o,
            onCheckout: (r) => console.log("Submit", r),
          }),
        ],
      })
    );
  }
  function P1({ onClose: e }) {
    const [t, l] = R.useState(null),
      { activeTab: n, setActiveTab: a } = Bl();
    function u() {
      switch (n) {
        case "bookings":
          return f.jsx(O1, { onBook: l });
        case "rooms":
          return f.jsx(U1, { onBook: l });
        case "services":
          return f.jsx(I1, {});
        case "profile":
          return f.jsx(R1, {});
      }
    }
    return f.jsxs("div", {
      className: "bg-mesh flex flex-col h-full",
      children: [
        f.jsxs("div", {
          className:
            "flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-white flex-shrink-0",
          children: [
            f.jsx("span", {
              className: "italic text-amber-600",
              style: { fontFamily: "var(--font-playfair)", fontSize: "17px" },
              children: "The Grand Imperial",
            }),
            f.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                f.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    f.jsx("div", {
                      className:
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-white flex-shrink-0",
                      style: {
                        background: "linear-gradient(135deg, #fbbf24, #d97706)",
                      },
                    }),
                    f.jsx("span", {
                      className:
                        "text-sm text-stone-600 font-medium hidden sm:block",
                    }),
                    f.jsx("button", {
                      className:
                        "text-[10px] tracking-widest uppercase text-stone-400 hover:text-amber-600 transition-colors cursor-pointer px-2 py-1 rounded-lg",
                      children: "Out",
                    }),
                  ],
                }),
                e &&
                  f.jsx("button", {
                    onClick: e,
                    className:
                      "text-stone-400 hover:text-stone-600 transition-colors cursor-pointer text-2xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 ml-1",
                    children: "×",
                  }),
              ],
            }),
          ],
        }),
        f.jsx("div", {
          className:
            "flex gap-1 px-4 py-2.5 border-b border-stone-100 overflow-x-auto flex-shrink-0 bg-white",
          style: { scrollbarWidth: "none" },
          children: B1.map((i) =>
            f.jsxs(
              "button",
              {
                onClick: () => a(i.id),
                className: `tab-pill ${n === i.id ? "active" : ""}`,
                children: [
                  f.jsx("span", {
                    style: { fontSize: "13px" },
                    children: i.icon,
                  }),
                  i.label,
                ],
              },
              i.id,
            ),
          ),
        }),
        f.jsx(
          "div",
          {
            className: "flex-1 overflow-y-auto p-5",
            style: {
              scrollbarWidth: "thin",
              scrollbarColor: "#e7e5e4 transparent",
            },
            children: u(),
          },
          n,
        ),
        t && f.jsx(D1, { room: t, onClose: () => l(null) }),
      ],
    });
  }
  function eb({ hotelId: e, onClose: t }) {
    const [l, n] = R.useState(Si.getToken());
    return f.jsx(_1, {
      hotelId: e,
      accessToken: l,
      setAccessToken: n,
      children: l ? f.jsx(P1, { onClose: t }) : f.jsx(z1, { onClose: t }),
    });
  }
  function J0(e) {
    if (e.__widgetMounted) return;
    e.__widgetMounted = !0;
    const t = e.dataset.hotelId ?? "default",
      l = e.dataset.hotelName ?? "",
      n = document.createElement("style");
    ((n.textContent = `
    @keyframes hw-float {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-6px); }
    }
    #hw-trigger {
      animation: hw-float 3.5s ease-in-out infinite;
    }
    #hw-trigger:hover {
      animation: none !important;
    }
    #hw-trigger .hw-shine-layer {
      position: absolute; inset: 0; border-radius: inherit;
      background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,.18) 50%, transparent 65%);
      background-size: 200% 100%; background-position: 200% 0;
      transition: background-position .7s ease; pointer-events: none;
    }
    #hw-trigger:hover .hw-shine-layer {
      background-position: -200% 0;
    }
  `),
      document.head.appendChild(n));
    const a = document.createElement("span");
    a.className = "hw-shine-layer";
    const u = document.createElement("span");
    Object.assign(u.style, {
      position: "absolute",
      left: "0",
      top: "18%",
      bottom: "18%",
      width: "3px",
      borderRadius: "0 3px 3px 0",
      boxShadow: "0 0 10px rgba(251,191,36,.5)",
      zIndex: "1",
      pointerEvents: "none",
    });
    const i = document.createElement("span");
    (Object.assign(i.style, {
      position: "relative",
      zIndex: "1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      background: "rgba(201,169,110,.12)",
      border: "1px solid rgba(201,169,110,.25)",
      flexShrink: "0",
      color: "#c9a96e",
    }),
      (i.innerHTML = `
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.8"
      stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  `));
    const s = document.createElement("span");
    (Object.assign(s.style, {
      position: "relative",
      zIndex: "1",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "2px",
    }),
      (s.innerHTML = `
    <span style="
      font-size: 9.5px;
      letter-spacing: .14em;
      text-transform: uppercase;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 600;
      color: rgba(201,169,110,.85);
      line-height: 1;
    ">${l}</span>
    <span style="
      font-size: 15px;
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      color: #f0ede8;
      line-height: 1.2;
      white-space: nowrap;
      letter-spacing: .01em;
    ">Book your stay</span>
  `));
    const c = document.createElement("button");
    ((c.id = "hw-trigger"),
      Object.assign(c.style, {
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: "2147483646",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px 24px 12px 14px",
        background:
          "linear-gradient(135deg, #1c1917 0%, #292524 55%, #1a150f 100%)",
        color: "#f0ede8",
        border: "1px solid rgba(201,169,110,.28)",
        borderRadius: "9999px",
        cursor: "pointer",
        boxShadow: [
          "0 8px 32px rgba(0,0,0,.55)",
          "0 0 0 1px rgba(201,169,110,.1)",
          "inset 0 1px 0 rgba(255,255,255,.06)",
          "inset 0 -1px 0 rgba(0,0,0,.2)",
        ].join(", "),
        transition:
          "transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .25s ease, border-color .25s ease, opacity .25s ease",
        outline: "none",
        overflow: "hidden",
        WebkitFontSmoothing: "antialiased",
      }),
      c.appendChild(a),
      c.appendChild(u),
      c.appendChild(i),
      c.appendChild(s),
      (c.onmouseenter = () => {
        ((c.style.transform = "scale(1.04) translateY(-3px)"),
          (c.style.boxShadow = [
            "0 20px 50px rgba(0,0,0,.6)",
            "0 0 0 1px rgba(201,169,110,.25)",
            "inset 0 1px 0 rgba(255,255,255,.09)",
            "inset 0 -1px 0 rgba(0,0,0,.2)",
          ].join(", ")),
          (c.style.borderColor = "rgba(201,169,110,.5)"));
      }),
      (c.onmouseleave = () => {
        ((c.style.transform = ""),
          (c.style.boxShadow = [
            "0 8px 32px rgba(0,0,0,.55)",
            "0 0 0 1px rgba(201,169,110,.1)",
            "inset 0 1px 0 rgba(255,255,255,.06)",
            "inset 0 -1px 0 rgba(0,0,0,.2)",
          ].join(", ")),
          (c.style.borderColor = "rgba(201,169,110,.28)"));
      }));
    const o = document.createElement("div");
    Object.assign(o.style, {
      position: "fixed",
      inset: "0",
      zIndex: "2147483645",
      background: "rgba(0,0,0,.45)",
      backdropFilter: "blur(4px)",
      opacity: "0",
      pointerEvents: "none",
      transition: "opacity .3s",
    });
    const r = document.createElement("div");
    Object.assign(r.style, {
      position: "fixed",
      top: "1vh",
      left: "50%",
      transform: "translateX(-50%) translateY(110%)",
      zIndex: "2147483646",
      width: "90vw",
      height: "98vh",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 -8px 60px rgba(0,0,0,.25)",
      transition: "transform .35s cubic-bezier(.32,1,.4,1)",
      background: "#fffbf5",
    });
    const p = document.createElement("div");
    ((p.style.height = "100%"), r.appendChild(p));
    let d = !1;
    function m() {
      ((d = !0),
        (o.style.opacity = "1"),
        (o.style.pointerEvents = "auto"),
        (r.style.transform = "translateX(-50%) translateY(0)"),
        (c.style.opacity = "0"),
        (c.style.pointerEvents = "none"),
        (c.style.transform = "scale(0.8) translateY(12px)"),
        (c.style.animation = "none"),
        (document.body.style.overflow = "hidden"));
    }
    function g() {
      ((d = !1),
        (o.style.opacity = "0"),
        (o.style.pointerEvents = "none"),
        (r.style.transform = "translateX(-50%) translateY(110%)"),
        (c.style.opacity = "1"),
        (c.style.pointerEvents = "auto"),
        (c.style.transform = ""),
        (c.style.animation = "hw-float 3.5s ease-in-out infinite"),
        (document.body.style.overflow = ""));
    }
    ((c.onclick = () => (d ? g() : m())),
      (o.onclick = g),
      document.addEventListener("keydown", (S) => {
        S.key === "Escape" && d && g();
      }),
      document.body.appendChild(o),
      document.body.appendChild(r),
      document.body.appendChild(c),
      Jp.createRoot(p).render(f.jsx(eb, { hotelId: t, onClose: g })),
      (window.EmbedWidget = { init: J0, open: m, close: g, version: "1.0.0" }));
  }
  function k0() {
    document.querySelectorAll("[data-booking-widget]").forEach(J0);
  }
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", k0)
    : k0();
})();
