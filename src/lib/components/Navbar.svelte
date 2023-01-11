<script lang="ts">
    import "$lib/styles/main.css";
	import { Align, Justify } from "$lib/elements/Flex";
	import Button from "$lib/elements/Button.svelte";
	import Flex from "$lib/elements/Flex.svelte";
	import Icon from "$lib/elements/Icon.svelte";
</script>

<nav class="navbar">
    <Flex align={Align.CENTER} height="100%" width="100%">
        <div class="search">
            <Flex justify={Justify.FLEX_END}>
                Search
            </Flex>
        </div>
        <div class="left-menu">
            <Flex justify={Justify.FLEX_END} columnGap="2rem">
                <Button border="none" rounded="50%" width="2rem" height="2rem">
                    <div class="icon">
                        <Icon />
                    </div>
                </Button>
                <Button href="/">Login</Button>
                <Button href="/">Register</Button>   
            </Flex>
        </div>
    </Flex>
</nav>

<style>
    .navbar {
        width: 100%;
        height: 2rem;
    }
    .search {
        width: 70%;
    }
    .left-menu {
        width: 30%;
        margin-right: 1rem;
    }
</style>