<!-- App.svelte -->
<script>
    import Footer from "../Footer.svelte";
    import AboutIEEE from "./AboutIEEE.svelte";
    import AboutHead from "./AboutHead.svelte";

    let open = false
</script>


<AboutHead/>
<AboutIEEE/>
<Footer/>

<style>
    :global(body) {
        padding: 0;
        background-color: black;
    }
</style>