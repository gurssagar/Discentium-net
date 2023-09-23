<!-- App.svelte -->
<script>

    import Footer from "../Footer.svelte";
    import Contact from "./Contact.svelte";
    let open = false
</script>


<Contact/>
<Footer/>


<style>
    :global(body) {
        padding: 0;
    }
</style>