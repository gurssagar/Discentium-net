<!-- App.svelte -->
<script>

    import Side from "./Side.svelte";
    import { page } from '$app/stores';
    const user =$page.params.user;
    import Footer from "../Footer.svelte";
    let open = false;
    import Login from "../login/login.svelte";

    export let data;
</script>


{#if !data.user}
    <Side/>
{/if}

<Footer/>

