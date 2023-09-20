import * as server from '../entries/pages/_uid_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_uid_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[uid]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.d9edeac8.js","_app/immutable/chunks/scheduler.44aaca95.js","_app/immutable/chunks/index.b8a03756.js","_app/immutable/chunks/index.31d31a58.js"];
export const stylesheets = ["_app/immutable/assets/index.02c5859f.css","_app/immutable/assets/profile.362b0d87.css"];
export const fonts = [];
