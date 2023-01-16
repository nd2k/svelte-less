<script lang="ts">
	import { Align, Direction, Justify } from "$lib/elements/Flex";
	import Flex from "$lib/elements/Flex.svelte";
    import logo from "$lib/assets/logo.png";
	import Icon from "$lib/elements/Icon.svelte";
    import { toggleSidebarFromStore } from "$lib/store/store";

</script>
<div class={ $toggleSidebarFromStore ? "sidebar open" : "sidebar" }>
    <Flex 
        direction={Direction.COLUMN} 
        height="100%"
        className={ $toggleSidebarFromStore ? "sidebar open" : "sidebar" }>
        <div class="top-sidebar">
            <a href="/" class="logo">
                <img src={logo} alt="Logo">
            </a>
        </div>
        <div class="middle-sidebar">
            <Flex direction={Direction.COLUMN} justify={Justify.CENTER} align={Align.CENTER}>
                <a href="/">
                    <Icon icon="ic:round-dashboard" />
                    <div class="nav-link-label">Dashboard</div>
                </a>
                <a href="/">
                    <Icon icon="fluent:people-team-24-filled" />
                    <div class="nav-link-label">Teams</div>
                </a>
                <a href="/">
                    <Icon icon="ic:round-home" />
                    <div class="nav-link-label">Home</div>
                </a>
            </Flex>
        </div>
        <div class="bottom-sidebar">
            <Flex justify={Justify.CENTER} align={Align.CENTER}>
                <a href="/">
                    <Icon icon="ph:gear-six-fill" />
                    <div class="nav-link-label">Settings</div>
                </a>
            </Flex>
        </div>
    </Flex>
</div>

<style>
    .sidebar {
        height: 100vh;
        flex-shrink: 0;
        border-right: 1px solid var(--grey-color);
        width: 3rem;
        transition: all 0.5s;
    }
    .sidebar.open {
        width: 15rem;
    }
    .open img {
        width: 8rem;
        height: 8rem;
    }
    .top-sidebar {
        border-bottom: 1px solid var(--grey-color);
        width: 3rem;
        height: 3rem;
        display: block;
    }
    .open .top-sidebar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15rem;
        height: 10rem;
    }
    img {
        width: 3rem;
        height: 3rem;
        transition: all 0.5s;        
    }
    .middle-sidebar {
        flex: 1;
        margin: 2rem 0;
        height: 100%;
    }
    .bottom-sidebar {
        margin-bottom: 1rem;
    }
    .open a {
        justify-content: flex-start;
        padding-left: 3rem;
        width: calc(100% - 3.4rem);
    }
    a {
        width: calc(100% - 0.4rem);
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 0;
    }
    .middle-sidebar a:hover,
    .bottom-sidebar a:hover {
        background-color: var(--grey-color);
        border-left: 6px solid var(--secondary-color);
        color: var(--secondary-color);
    }
    a:hover > * {
        background-color: var(--grey-color);
        color: var(--secondary-color);
    }
    .nav-link-label {
        padding-left: 0.5rem;
        opacity: 0;
        display: none;
    }
    .open .nav-link-label {
        opacity: 1;
        display: block;
        transition: opacity 0.5s;
    }
</style>