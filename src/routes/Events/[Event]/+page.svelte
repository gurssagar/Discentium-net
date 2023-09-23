<script>
    import Footer from "../../Footer.svelte";
    let open = false
    import { page } from '$app/stores';
    const Event =$page.params.Event;
    // Function to split text into paragraphs based on #
    function splitContent(content) {
        return content.split("#");
    }
    // let paragraphs = splitContent(record.Text_Input);
    console.log(Event);
    export let data;
</script>



{#each data?.records as record}
    {#if Event===record.Link}
    <div class="flex mb-50 items-center justify-center flex-col select-none">
        <article class=" px-6 py-24 space-y-12 text-text">
            <div class="w-full mx-auto space-y-4 text-center">
                <h1 class="text-4xl font-final md:text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-gradient1 to-gradient2">{`${record.Heading}`}</h1>
            </div>
        </article>

        <div class="px-6 gap-6 flex space-x-3 xl:flex-row flex-col">
            <div class="border-2 border-gray-800 rounded-3xl">
                <img class="rounded-3xl"
                     width="500px"

                     alt=""
                     src={`${record.Image_Link}`}
                     draggable="false"
                >
            </div>
            <div class="first bg-secondary/10 m-[0px] text-text border-2 border-gray-800 rounded-3xl xl:p-8 lg:pt-12 flex-col text-center">
                <div class="pb-5">

                    <h2 class="xl:text-3xl text-xl pb-4 pt-16 text-text ">Events Starts On</h2>
                    <div class="flex space-x-2 py-3 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" width="24px" height="24px"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16 13h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm0-10v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1zm2 17H6c-.55 0-1-.45-1-1V9h14v10c0 .55-.45 1-1 1z" fill="#000000" class="color000 svgShape"></path></svg>
                        <div class="flex ">
                            <h3 class="xl:text-xl text-lg"> {`${record.Date}`},{`${record.Year}`} </h3>
                        </div>
                    </div>

                </div>
                <div>
                    <h2 class="xl:text-3xl text-xl py-4 text-text   justify-center">Happening In</h2>
                    <div class="flex pb-8 justify-center">
                        <h3 class="xl:text-xl text-lg "> {`${record.Location}`}</h3>
                    </div>
                </div>
                <a href={`${record.Register}`} rel="noopener" target="_blank">
                    <button class="font-final font-bold bg-gradient-to-r from-secondary to-gradient2/40 rounded-[50px] py-3 px-8 mb-10  text-[17px] text-white hover:scale-110 transition-all duration-300 ease-in-out">
                        REGISTER NOW
                    </button>
                </a>
                
            </div>
        </div>
        <div class="second px-6 py-10 pb-40 xl:max-w-[1050px] lg:max-w-[600px] max-w-[550px]">
            <div class="border-2 bg-secondary/10 border-gray-800 rounded-3xl text-text p-10">
                <div class="flex justify-center items-center">
                    <h1 class="text-3xl pb-5 font-final md:text-4xl">{`${record.Heading}`}</h1>

                </div>
                <div class="text-justify">
                    {#each splitContent(record.Text_Input) as paragraph}
                        <p>{paragraph}</p>
                    {/each}
                </div>
                
            </div>
        </div>
    </div>
    {/if}
{/each}


<Footer/>