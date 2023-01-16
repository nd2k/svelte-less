<script lang="ts">
    import "$lib/styles/main.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import Flex from "$lib/elements/Flex.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";
</script>

<Flex>
    <Sidebar />
    <div class="content">
        <Navbar/>
        <slot />
    </div>
</Flex> 

<style>
    .content {
        padding: 0 1rem;
    }
</style>