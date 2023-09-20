import { c as create_ssr_component, f as compute_rest_props, h as spread, i as escape_attribute_value, j as escape_object, k as each, v as validate_component, m as missing_component, e as escape, d as add_attribute } from "./ssr.js";
import { isFilled, asImageWidthSrcSet, asImagePixelDensitySrcSet, asLinkAttrs } from "@prismicio/client";
/* empty css                                       */const PrismicImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "field",
    "imgixParams",
    "alt",
    "fallbackAlt",
    "width",
    "height",
    "widths",
    "pixelDensities"
  ]);
  let { field } = $$props;
  let { imgixParams = {} } = $$props;
  let { alt = void 0 } = $$props;
  let { fallbackAlt = void 0 } = $$props;
  let { width = void 0 } = $$props;
  let { height = void 0 } = $$props;
  let { widths = void 0 } = $$props;
  let { pixelDensities = void 0 } = $$props;
  let src = void 0;
  let srcset = void 0;
  let resolvedWidth = void 0;
  let resolvedHeight = void 0;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.imgixParams === void 0 && $$bindings.imgixParams && imgixParams !== void 0)
    $$bindings.imgixParams(imgixParams);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.fallbackAlt === void 0 && $$bindings.fallbackAlt && fallbackAlt !== void 0)
    $$bindings.fallbackAlt(fallbackAlt);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.widths === void 0 && $$bindings.widths && widths !== void 0)
    $$bindings.widths(widths);
  if ($$props.pixelDensities === void 0 && $$bindings.pixelDensities && pixelDensities !== void 0)
    $$bindings.pixelDensities(pixelDensities);
  {
    {
      if (isFilled.imageThumbnail(field)) {
        const castInt = (input) => {
          if (typeof input === "number" || typeof input === "undefined" || input === null) {
            return input;
          } else {
            const parsed = Number.parseInt(input);
            if (Number.isNaN(parsed)) {
              return void 0;
            } else {
              return parsed;
            }
          }
        };
        const ar = field.dimensions.width / field.dimensions.height;
        const castedWidth = castInt(width);
        const castedHeight = castInt(height);
        resolvedWidth = castedWidth ?? field.dimensions.width;
        resolvedHeight = castedHeight ?? field.dimensions.height;
        if (castedWidth != null && castedHeight == null) {
          resolvedHeight = castedWidth / ar;
        } else if (castedWidth == null && castedHeight != null) {
          resolvedWidth = castedHeight * ar;
        }
        if (widths || !pixelDensities) {
          const res = asImageWidthSrcSet(field, {
            ...imgixParams,
            widths: widths === "defaults" ? void 0 : widths
          });
          src = res.src;
          srcset = res.srcset;
        } else if (pixelDensities) {
          const res = asImagePixelDensitySrcSet(field, {
            ...imgixParams,
            pixelDensities: pixelDensities === "defaults" ? void 0 : pixelDensities
          });
          src = res.src;
          srcset = res.srcset;
        }
      }
    }
  }
  return ` ${isFilled.imageThumbnail(field) ? `<img${spread(
    [
      { src: escape_attribute_value(src) },
      { srcset: escape_attribute_value(srcset) },
      {
        alt: escape_attribute_value(alt ?? (field.alt || fallbackAlt))
      },
      {
        width: escape_attribute_value(resolvedWidth)
      },
      {
        height: escape_attribute_value(resolvedHeight)
      },
      escape_object($$restProps)
    ],
    {}
  )}>` : ``}`;
});
const PrismicLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let linkAttrs;
  let resolvedRel;
  let $$restProps = compute_rest_props($$props, ["field", "document", "rel"]);
  let { field = void 0 } = $$props;
  let { document = void 0 } = $$props;
  let { rel = void 0 } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.document === void 0 && $$bindings.document && document !== void 0)
    $$bindings.document(document);
  if ($$props.rel === void 0 && $$bindings.rel && rel !== void 0)
    $$bindings.rel(rel);
  linkAttrs = asLinkAttrs(field ?? document, {
    rel: typeof rel === "function" ? rel : void 0
  });
  resolvedRel = typeof rel === "string" ? rel : linkAttrs.rel;
  return ` <a${spread(
    [
      escape_object(linkAttrs),
      { rel: escape_attribute_value(resolvedRel) },
      {
        href: escape_attribute_value(linkAttrs.href)
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const TodoComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  "slice_type" in slice ? slice.slice_type : slice.type;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  return `${``}`;
});
const SliceZone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slices = [] } = $$props;
  let { components: components2 = {} } = $$props;
  let { context = {} } = $$props;
  let { defaultComponent = void 0 } = $$props;
  if ($$props.slices === void 0 && $$bindings.slices && slices !== void 0)
    $$bindings.slices(slices);
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0)
    $$bindings.components(components2);
  if ($$props.context === void 0 && $$bindings.context && context !== void 0)
    $$bindings.context(context);
  if ($$props.defaultComponent === void 0 && $$bindings.defaultComponent && defaultComponent !== void 0)
    $$bindings.defaultComponent(defaultComponent);
  return ` ${each(slices, (slice, index) => {
    let type = "slice_type" in slice ? slice.slice_type : slice.type, Component = components2[type] || defaultComponent;
    return `  ${Component ? `${validate_component(Component || missing_component, "svelte:component").$$render($$result, { slice, slices, context, index }, {}, {})}` : `${validate_component(TodoComponent, "TodoComponent").$$render($$result, { slice }, {}, {})}`}`;
  })}`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Syncopate&display=swap');@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');.hero.svelte-1n9kpfa{font-family:'Syncopate', sans-serif;font-size:24px;font-style:normal;font-weight:700;line-height:normal;letter-spacing:0.24px;padding-top:60px;color:white;margin-left:6.5rem;display:flex}.button.svelte-1n9kpfa{margin-left:6.5rem}button.svelte-1n9kpfa{background-color:white;width:17rem;height:3rem;margin-right:1rem;color:#3f3e8a;text-align:center;font-family:Poppins;font-size:1.5rem;font-style:normal;font-weight:700;line-height:normal;letter-spacing:0.015rem;border-radius:1rem}.text.svelte-1n9kpfa{width:44rem;font-size:1.125rem;line-height:161.102%;letter-spacing:0.06188rem}h1.svelte-1n9kpfa{text-transform:uppercase;font-size:4rem;line-height:normal;letter-spacing:0.04rem}.text.svelte-1n9kpfa,h1.svelte-1n9kpfa{color:#fff;font-family:Syncopate;font-style:normal;font-weight:700}.grid-container-a.svelte-1n9kpfa,.grid-container-b.svelte-1n9kpfa{display:none;justify-items:center;grid-template-columns:repeat(1, 1fr);grid-template-rows:1fr 1fr;grid-row-gap:75px;padding-top:100px}.grid.svelte-1n9kpfa{display:flex;flex-direction:column;align-items:flex-start}.name.svelte-1n9kpfa{font-family:'Syncopate', sans-serif;font-size:1rem;font-style:normal;font-weight:700;line-height:normal;letter-spacing:0.24px;padding-top:20px;color:white}.github.svelte-1n9kpfa{font-family:'Poppins', sans-serif;color:white;font-size:0.8rem}.div.svelte-1n9kpfa{width:250px;height:250px;flex-shrink:0;border-radius:20px;background:#d9d9d9}@media only screen and (min-width: 31em){.grid-container-a.svelte-1n9kpfa,.grid-container-b.svelte-1n9kpfa{display:none;justify-items:center;grid-template-columns:repeat(2, 1fr);grid-template-rows:1fr 1fr;grid-row-gap:75px}}@media only screen and (min-width: 45em){.grid-container-a.svelte-1n9kpfa,.grid-container-b.svelte-1n9kpfa{display:none;justify-items:center;grid-template-columns:repeat(3, 1fr);grid-template-rows:1fr 1fr;grid-row-gap:75px}}@media only screen and (min-width: 68em){.grid-container-a.svelte-1n9kpfa,.grid-container-b.svelte-1n9kpfa{display:none;justify-items:center;grid-template-columns:repeat(4, 1fr);grid-template-rows:1fr 1fr;grid-row-gap:75px}}",
  map: null
};
const HeroSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  $$result.css.add(css);
  return ` <section class="hero svelte-1n9kpfa"><section class="text svelte-1n9kpfa">${``} ${``}</section> <section class="img-ufo">${validate_component(PrismicImage, "PrismicImage").$$render($$result, { field: slice.primary.hero_img }, {}, {})}</section></section> <section class="button svelte-1n9kpfa" data-svelte-h="svelte-75oy4d"><button id="button1" class="svelte-1n9kpfa">Squad A</button> <button id="button2" class="svelte-1n9kpfa">Squad B</button></section> <div class="grid-container-a svelte-1n9kpfa" id="option1">${each(slice.items.slice(0, 22), (item) => {
    return `<div class="grid svelte-1n9kpfa"><div class="div svelte-1n9kpfa">${validate_component(PrismicLink, "PrismicLink").$$render($$result, { field: item.github_link }, {}, {
      default: () => {
        return `${validate_component(PrismicImage, "PrismicImage").$$render($$result, { field: item.image }, {}, {})} `;
      }
    })}</div> <div class="name svelte-1n9kpfa">${escape(item.name)}</div> <div class="github svelte-1n9kpfa">@${escape(item.github_tag)}</div> </div>`;
  })}</div> <div class="grid-container-b svelte-1n9kpfa" id="option2">${each(slice.items.slice(22, 48), (item) => {
    return `<div class="grid svelte-1n9kpfa"><div class="div svelte-1n9kpfa">${validate_component(PrismicLink, "PrismicLink").$$render($$result, { field: item.github_link }, {}, {
      default: () => {
        return `${validate_component(PrismicImage, "PrismicImage").$$render($$result, { field: item.image }, {}, {})} `;
      }
    })}</div> <div class="name svelte-1n9kpfa">${escape(item.name)}</div> <div class="github svelte-1n9kpfa">@${escape(item.github_tag)}</div> </div>`;
  })} </div>`;
});
const SquadA = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  return `<section${add_attribute("data-slice-type", slice.slice_type, 0)}${add_attribute("data-slice-variation", slice.variation, 0)}>Placeholder component for ${escape(slice.slice_type)} (variation: ${escape(slice.variation)}) Slices</section>`;
});
const SquadADetailPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  return `<section${add_attribute("data-slice-type", slice.slice_type, 0)}${add_attribute("data-slice-variation", slice.variation, 0)}>Placeholder component for ${escape(slice.slice_type)} (variation: ${escape(slice.variation)}) Slices</section>`;
});
const SquadB = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  return `<section${add_attribute("data-slice-type", slice.slice_type, 0)}${add_attribute("data-slice-variation", slice.variation, 0)}>Placeholder component for ${escape(slice.slice_type)} (variation: ${escape(slice.variation)}) Slices</section>`;
});
const SquadBDetailPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  return `<section${add_attribute("data-slice-type", slice.slice_type, 0)}${add_attribute("data-slice-variation", slice.variation, 0)}>Placeholder component for ${escape(slice.slice_type)} (variation: ${escape(slice.variation)}) Slices</section>`;
});
const components = {
  rich_text: HeroSection,
  squad_a: SquadA,
  squad_a_detail_page: SquadADetailPage,
  squad_b: SquadB,
  squad_b_detail_page: SquadBDetailPage
};
export {
  SliceZone as S,
  components as c
};
