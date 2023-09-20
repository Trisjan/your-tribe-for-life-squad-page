import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { getDefaultProps, getDefaultSlices, getDefaultMessage, SimulatorManager, StateEventType, simulatorClass, simulatorRootClass } from "@prismicio/simulator/kit";
import { c as components, S as SliceZone } from "../../../chunks/index.js";
const SliceSimulator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const defaultProps = getDefaultProps();
  let { zIndex = defaultProps.zIndex } = $$props;
  let { background = defaultProps.background } = $$props;
  let slices = getDefaultSlices();
  let message = getDefaultMessage();
  if (typeof window !== "undefined") {
    const simulatorManager = new SimulatorManager();
    simulatorManager.state.on(
      StateEventType.Slices,
      (newSlices) => {
        slices = newSlices;
      },
      "simulator-slices"
    );
    simulatorManager.state.on(
      StateEventType.Message,
      (newMessage) => {
        message = newMessage;
      },
      "simulator-message"
    );
    simulatorManager.init();
  }
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  return `<div class="${escape(simulatorClass, true) + " " + escape($$props.class, true)}" style="${"z-index: " + escape(zIndex, true) + "; position: fixed; top: 0; left: 0; width: 100%; height: 100vh; overflow: auto; background: " + escape(background, true)}">${message ? `<article> <!-- HTML_TAG_START -->${message}<!-- HTML_TAG_END --></article>` : `${slices.length ? ` <div id="root"${add_attribute("class", simulatorRootClass, 0)}>${slots.default ? slots.default({ slices }) : ``}</div>` : ``}`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SliceSimulator, "SliceSimulator").$$render($$result, {}, {}, {
    default: ({ slices }) => {
      return `${validate_component(SliceZone, "SliceZone").$$render($$result, { slices, components }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
