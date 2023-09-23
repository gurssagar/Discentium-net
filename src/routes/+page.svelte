<!-- App.svelte -->
<script>
    ;
    import anime from 'animejs';
    import { afterUpdate } from 'svelte';
    import {onMount} from "svelte";
    import Typewriter from 'svelte-typewriter';
    let LottiePlayer;
	let mainContainer;
    let acceptTerms = false;
    let upperText = "So, you need study material?";
    let lowerText = "We've got you covered!";
    export let data;
    const a ='/static/bg2.jpg';
    let controlsLayout = [];
	const landingPageLottieFile = "threejslandingpage.json";
    const mobilefile= "animat.json";
    onMount(async () => {
		const module = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayer = module.LottiePlayer;
		animateMain();
		// if (data?.animationsLoaded === 'false') {
        //     document.cookie = `animationsLoaded=true; path="/"`;
        // }
	});

    let x = 0;
    let y = 0;

    function handleMouseMove(e) {
        x = e.clientX;
        y = e.clientY;
        const rect = e.currentTarget.getBoundingClientRect();
        document.getElementsByClassName(".spot-blur")[0].animate(
                [
                    {
                        top: x,
                        left: y
                    }
                    ,
                    { top: (y-200).toString() + "px",
                      left: (x-300).toString() + "px",
                    }
                ], {
                    duration: 10000,
                    iterations: 1,
                    delay: 400,
                    easing: "cubic-bezier(0.49, 0.47, 0.63, 0.85)",
                } 
            )
        // x = e.clientX - rect.x;
        // y = e.clientY - rect.y;
        // console.log(`x: ${e.clientX - rect.x}, y: ${e.clientY - rect.y}`)
    };

    // const updateAnimationsLoaded = () => {document.cookie = `animationsLoaded=true; path="/"`};

    function animateMain() {
		anime({
		targets: [".dila-denge"],
		translateY: ['-80%', 0],
		rotate: ["-10deg", 0],
		scale: [0, 1],
		opacity: [0, 1],
		easing: 'spring(1, 80, 10, 4)',
		duration: 200,
		delay: 3200
		});

        anime({
		targets: [".everything-else", "header"],
		opacity: [0,1],
		easing: 'easeInSine',
		duration: 1000,
		delay: 3800
		});

        anime({
		targets: [".lottie"],
		opacity: [0,1],
		easing: 'easeInSine',
		duration: 2000,
		delay: 3000
		});


        
		
	}
    afterUpdate(() => {
		animateMain();
	});
    
    

</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="lg:bg-background">
    <nav class="main-container h-[100%] flex justify-center text-center lg:px-16 px-4 dark:bg-gray-950 overflow-hidden lg:overflow-hidden pb-12 z-[99999]">
        <div class="xl:pt-[350px] pt-[150px] xl:pb-[200px] pb-[100px] flex justify-center items-center xl:gap-40 md:gap-28 select-none xl:flex-row flex-col">
            <div class="flex justify-center items-center flex-col lg:px-0 px-2 gap-2">
                <!-- {console.log(data?.animationsLoaded)} -->
                {#if data?.animationsLoaded === "false"}
                    <Typewriter cursor={true} interval=85 mode="concurrent">
                        <h2 class="lg:text-4xl text-xl select-none text-black/90 font-instrument">
                           {upperText}
                        </h2> 
                    </Typewriter>
                {/if}
                {#if data?.animationsLoaded === "true"}
                    <h2 class="lg:text-4xl text-xl select-none text-black/90 font-instrument">
                        {upperText}
                    </h2> 
                {/if}
                
                <h2 class="dila-denge bg-gradient-to-r from-gradient1 to-gradient2  text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible h-[80px] font-bold">{lowerText}</h2>
                <!-- <button class="know-more mt-4 py-2 px-4 text-xl font-instrument text-text border-2 border-gradient2 hover:bg-gradient2 rounded-xl cursor-pointer">
                    Know More
                </button> -->
                <!-- <p class="font-instrument lg:text-2xl text-md lg:max-w-[650px] max-w-[350px]">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem.</p> -->
            </div>

            
        </div>
    </nav>
    <nav class=" everything-else overflow-hidden">
        <div class="lg:py-48 py-24 lg:flex flex-col dark:bg-gray-950 overflow-hidden">
            <!-- <Saos animation="-global-from-left 1.2s cubic-bezier(.62,.04,.51,.98) both" once={true}></Saos> -->
                <h1 class="text-5xl text-center justify-center lg:text-7xl lg:pt-12 font-final  text-transparent bg-clip-text bg-gradient-to-br from-gradient1 to-gradient2 select-none">EVENTS</h1>
                <div class="p-10 justify-center items-center text-text m-0 flex">
                    <p class="font-instrument lg:text-xl text-md text-  center select-none max-w-[750px]">🚀 Prepare to embark on an electrifying journey destined to elevate your engineering prowess to new heights at the Creative Conclave 2023!</p>
                </div>
            <!-- </Saos> -->
            <!-- <Saos animation="-global-from-right 1.2s cubic-bezier(.62,.04,.51,.98) 0.5s both" once={true}> -->
                <div class=" py-20 px-4 lg:px-20 just font-instrument select-none flex justify-center items-center flex-wrap gap-8">
                    {#each data?.records as record}
                        <article class="lg:flex bg-secondary/40 transition xl:max-w-[800px] dark:bg-gray-900 hover:shadow-lg">
                            <div class="lg:block hidden rotate-180 p-2 [writing-mode:_vertical-lr]">
                                <time
                                        datetime="2022-10-10"
                                        class="flex items-center justify-between gap-4 lg:text-xs text-xs font-bold uppercase text-text"
                                >
                                    <span>{`${record.Year}`}</span>
                                    <span class="w-px flex-1 bg-gray-900/10"></span>
                                    <span>{`${record.Date}`}</span>
                                </time>
                            </div>
            
                            <div class="lg:block lg:basis-56">
                                <img
                                        alt="Guitar"
                                        src={`${record.Image_Link}`}
                                        class="aspect-square h-full w-full object-cover"
                                />
                            </div>
            
                            <div class="flex flex-1 flex-col justify-between">
                                <div class="border-s border-gray-900/10 p-4 lg:border-l-transparent lg:p-6">
                                    <a href="/">
                                        <h3 class="font-bold uppercase text-lg lg:text-xl  text-text">
                                            {`${record.Heading}`}
                                        </h3>
                                    </a>
            
                                    <p class="mt-2 line-clamp-3 lg:text-lg/relaxed text-lg  text-text">
                                        {`${record.Text_Input}`}
                                    </p>
                                </div>
            
                                <div class="lg:flex lg:items-end lg:justify-end">
                                    <a
                                            href={`/Events/${record.Link}`}
                                            class="block bg-secondary px-5 py-3 text-center lg:text-xs text-xs uppercase text-text transition "
                                    >
                                        Know More
                                    </a>
                                </div>
                            </div>
                        </article>
                    {/each}
                </div>
            <!-- </Saos> -->
        </div>
    </nav>
    <div class="w-[100%] h-[100%]">
        <div class="lottie absolute xl:left-[calc(50%-700px)] xl:top-[-300px] xl:w-[1400px] xl:translate-x-0 w-screen left-[calc(50%)] translate-x-[-50%] top-[0px] h-auto overflow-hidden xl:block hidden animate-rotateInfinite">
            <lottie-player src={landingPageLottieFile} background="transparent" speed="0.5" direction="1" mode="normal" loop autoplay></lottie-player>
        </div>
        
    </div>
    <div class="w-[100%] h-[50%] overflow-hidden">
        <div class="lottie absolute xl:left-[calc(50%-700px)] xl:top-[-300px] xl:w-[1400px] xl:translate-x-0 w-screen left-[50%] translate-x-[-50%] top-[0px] h-[50%] object-cover overflow-hidden xl:hidden block">
            <lottie-player src={mobilefile} background="transparent" speed="0.4" direction="1" mode="normal" loop autoplay></lottie-player>

        </div>
    </div>

    <!-- <div style={`left: ${x}px; top: ${y}px`}  class={`spot-blur absolute w-28 h-28 blur-[50px] rounded-full bg-gradient-to-t from-gradient1 to-gradient2`}>
    </div> -->

</div>
