<script lang="ts">
	import { Direction, Wrap, type Align, type Justify } from "./Flex";

    export let direction: Direction = Direction.ROW;
    export let justify: Justify|null = null;
    export let align: Align|null = null;
    export let wrap: Wrap = Wrap.NOWRAP;
    export let rowGap: string = "0";
    export let columnGap: string = "0";
    export let width: string = "auto";
    export let height: string = "auto";
    export let flex: number = 0;
    export let className: string = "";
</script>

<div 
    class={`flex-component ${className}`}
    style={
        `flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
        flex-wrap: ${wrap};
        row-gap: ${rowGap};
        column-gap: ${columnGap};
        width: ${width};
        height: ${height};
        flex: ${flex};
        `}>
    <slot />
</div>

<style>
    .flex-component {
        display: flex;
        background-color: inherit;
        color: inherit;
    }
</style>