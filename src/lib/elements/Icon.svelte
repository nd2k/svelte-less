<script lang="ts">
    import "iconify-icon";
    export let icon: string = 'mdi:user-circle';
    export let size: number = 2;
    export let color: string = "inherit";
    export let backgroundColor: string = "inherit";
    export let rotate: number = 0;
</script>

<iconify-icon class="icon" {icon}
    style={
        `font-size: ${size}rem;
        color: ${color};
        background-color: ${backgroundColor};
        transform: rotate(${rotate}deg);`
    }
/>

