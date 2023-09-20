

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.84a11c76.js","_app/immutable/chunks/scheduler.44aaca95.js","_app/immutable/chunks/index.b8a03756.js","_app/immutable/chunks/stores.aa7dfcad.js","_app/immutable/chunks/singletons.0b08bbcf.js"];
export const stylesheets = [];
export const fonts = [];
