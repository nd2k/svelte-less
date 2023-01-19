<script lang="ts">
    import "$lib/styles/main.css";
	import { Align, Direction, Justify } from "$lib/elements/Flex";
	import Button from "$lib/elements/Button.svelte";
	import Flex from "$lib/elements/Flex.svelte";
	import Icon from "$lib/elements/Icon.svelte";
	import { clickoutside } from "$lib/utils/dom.utils";
    import { toggleSidebarFromStore } from "$lib/store/store";

    let isUserMenuOpened: boolean = false;

    function openUserMenu() {
        isUserMenuOpened = !isUserMenuOpened;
    }
    function toggleSidebar() {
        toggleSidebarFromStore.toggle();
    }
</script>
<nav class={$toggleSidebarFromStore ? "navbar" : "navbar close"}>
    <Flex align={Align.CENTER} height="100%" width="100%">
        <div class="right-menu">
            <Flex justify={Justify.FLEX_START} align={Align.CENTER} columnGap="2rem">
                <Button 
                    border="none" 
                    rounded="50%" 
                    width="2rem" 
                    height="2rem"
                    eventName="toggleSidebar"
                    on:toggleSidebar={toggleSidebar}>
                    {#if $toggleSidebarFromStore}
                        <div class="icon">
                            <Icon icon="material-symbols:menu-open-rounded" />
                        </div>
                    {:else}
                        <div class="icon">
                            <Icon icon="material-symbols:menu-open-rounded" rotate={180} />
                        </div>
                    {/if}
                </Button>
            </Flex>
        </div>
        <div class="search">
            <Flex justify={Justify.FLEX_END}>
                Search
            </Flex>
        </div>
        <div class="left-menu">
            <Flex justify={Justify.FLEX_END} align={Align.CENTER} columnGap="2rem">
                <Button 
                    border="none" 
                    rounded="50%" 
                    width="2rem" 
                    height="2rem"
                    eventName="openUserMenu"
                    on:openUserMenu={openUserMenu}>
                    <div class="icon">
                        <Icon />
                    </div>
                </Button>
            </Flex>
        </div>
    </Flex>
</nav>
{#if isUserMenuOpened}
    <div class="sub-menu" use:clickoutside={
        () => {
            isUserMenuOpened = false;
        }
    }>
        <Flex 
            direction={Direction.COLUMN} 
            align={Align.FLEX_END}
            rowGap="0.5rem">
                <Button href="/">Login</Button>
                <Button href="/">Register</Button>
            
        </Flex>
    </div>
{/if}

<style>
    .navbar {
        height: 2rem;
    }
    .sub-menu {
        position: absolute;
        right: 1rem;
        z-index: 10;
        background-color: var(--grey-color);
        padding: 1rem;
        border-radius: 1rem;
    }
    .search {
        width: 70%;
    }
    .left-menu {
        width: 30%;
        margin-right: 1rem;
    }
</style>