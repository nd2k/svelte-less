import { writable } from 'svelte/store';

function toggleSidebar() {
    const { subscribe, set, update } = writable(true);

    return {
        subscribe,
        set,
        toggle: () => update(state => state = !state)
    }
}

export const toggleSidebarFromStore = toggleSidebar();