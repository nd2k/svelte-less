<script lang="ts">
    import { createEventDispatcher } from "svelte";
    export let href: string = "";
    export let fontColor: string = "inherit";
    export let fontSize: string = "inherit";
    export let weight: string|number = "inherit";
    export let backgroundColor: string = "inherit";
    export let width: string = "auto";
    export let height: string = "auto";
    export let rounded: string = "0";
    export let border: string = "1px solid";
    export let eventName: string = "event";

    const dispatcher = createEventDispatcher();
    function emitEvent() {
        dispatcher(eventName, {}, {
            cancelable: true
        });
    }
</script>

{#if href !== ""}
    <a {href}
    style={
        `--font-size: ${fontSize};
        --font-color: ${fontColor};
        --font-weight: ${weight} ;
        --background-color: ${backgroundColor};
        --width: ${width};
        --height: ${height};
        --rounded: ${rounded};
    `}>
        <slot />
    </a>
{:else}
    <button
    style={
        `--font-size: ${fontSize};
        --font-color: ${fontColor}
        --font-weight: ${weight} ;
        --background-color: ${backgroundColor};
        --width: ${width};
        --height: ${height};
        --rounded: ${rounded};
        --border: ${border}
    `}
    on:click={emitEvent}>
        <slot />
    </button>
{/if}

<style>
    a {
        text-decoration: none;
    }
    button {
        border: var(--border);
    }
    a,
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--font-size);
        font-weight: var(--font-weight);
        color: var(--font-color);
        background-color: var(--background-color);
        width: var(--width);
        height: var(--height);
        border-radius: var(--rounded);
        cursor: pointer;
    }
    button:is(:active, :hover) {
        transform: translateY(2px);
    } 
    a:is(:active, :hover),
    button:is(:active, :hover) {
        filter: brightness(85%);
    }
</style>