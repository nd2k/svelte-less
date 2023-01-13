<script lang="ts">
    import "$lib/styles/main.css";
	import { Wrap } from "$lib/elements/Flex";
	import Navbar from "$lib/components/Navbar.svelte";
	import Flex from "$lib/elements/Flex.svelte";
    import { toggleSidebarFromStore } from "$lib/store/store";
    import { fly } from "svelte/transition";
</script>

<Flex wrap={Wrap.WRAP}>
    <div class="sidebar">Side</div>
    {#if $toggleSidebarFromStore}
        <div class="sidebar-1" transition:fly="{{ x: -150, duration: 1000 }}">Sidebar</div>
        <div class="content" transition:fly="{{ x: -150, duration: 1000 }}">
            <Navbar/>
            <slot />
        </div>
    {:else}
        <div class="content extended">
            <Navbar/>
            <slot />
        </div>
    {/if}
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
    .extended {
        width: 95%;
    }
</style>