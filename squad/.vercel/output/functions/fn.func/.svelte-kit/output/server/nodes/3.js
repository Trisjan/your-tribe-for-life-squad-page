

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/slice-simulator/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.5eb549fe.js","_app/immutable/chunks/scheduler.44aaca95.js","_app/immutable/chunks/index.b8a03756.js","_app/immutable/chunks/index.31d31a58.js"];
export const stylesheets = ["_app/immutable/assets/index.02c5859f.css","_app/immutable/assets/profile.362b0d87.css"];
export const fonts = [];
