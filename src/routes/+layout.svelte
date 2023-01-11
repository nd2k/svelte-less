<script lang="ts">
    import "$lib/styles/main.css";
	import { Align, Justify, Wrap } from "$lib/elements/Flex";
	import Navbar from "$lib/components/Navbar.svelte";
	import Flex from "$lib/elements/Flex.svelte";
</script>

<Flex wrap={Wrap.WRAP}>
    <div class="sidebar">Side</div>
    <div class="sidebar-1">Sidebar</div>
    <div class="content">
        <Navbar />
        <slot />
    </div>
</Flex> 

<style>
    .sidebar {
        width: 5%;
        background-color: var(--primary-color);
    }
    .sidebar-1 {
        width: 20%;
        background-color: var(--background-color-1);
    }
    .content {  
        width: 75%;
        height: 100vh;
    }
</style>