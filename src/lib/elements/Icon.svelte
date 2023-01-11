<script lang="ts">
    import "iconify-icon";
    export let icon: string = 'mdi:user-circle';
    export let size: number = 2;
    export let color: string = "var(--secondary-color)";
</script>

<iconify-icon class="icon" {icon}
    style={
        `font-size: ${size}rem;
        color: ${color};`
    }
/>

<style>

</style>
