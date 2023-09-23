
<!-- App.svelte -->
<script>

    import anime from "animejs";
    import { afterUpdate, onMount } from 'svelte';
    import Footer from "../Footer.svelte";
    let acceptTerms = false;
    let open = false;
    let showThumbs=false
    let showCaptions=false
    let darkMode = true;
    import { Carousel, CarouselTransition } from 'flowbite-svelte'
    export const images = [
        {
            id: 0,
            name: "Cosmic timetraveler",
            imgurl: "1671973261169.jpeg",
            attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
        },
        {
            id: 1,
            name: "Cristina Gottardi",
            imgurl: "1671973261465.jpeg",
            attribution: "cristina-gottardi-CSpjU6hYo_0-unsplash.com",
        },
        {
            id: 2,
            name: "Johannes Plenio",
            imgurl: "1671973261465.jpeg",
            attribution: "johannes-plenio-RwHv7LgeC7s-unsplash.com",
        },
        {
            id: 3,
            name: "Jonatan Pie",
            imgurl: "1681299044961.jpeg",
            attribution: "jonatan-pie-3l3RwQdHRHg-unsplash.com",
        },
        {
            id: 4,
            name: "Mark Harpur",
            imgurl: "16812990451757.jpeg",
            attribution: "mark-harpur-K2s_YE031CA-unsplash",
        },
        {
            id: 5,
            name: "Pietro De Grandi",
            imgurl: "1681299045694.jpeg",
            attribution: "pietro-de-grandi-T7K4aEPoGGk-unsplash",
        },
        {
            id: 6,
            name: "Sergey Pesterev",
            imgurl: "1681299045175.jpeg",
            attribution: "sergey-pesterev-tMvuB9se2uQ-unsplash",
        },

    ];
    
	onMount(() => {
		animateMain();
	});

	afterUpdate(() => {
		animateMain();
	});

	function animateMain() {
		anime({
		targets: [".gallery-title"],
		translateX: ['-150%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 1000,
		});
        anime({
		targets: [".gallery-text"],
		translateX: ['-150%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 1000,
        delay: 700,
		});
        anime({
		targets: [".carousel-container2"],
		translateX: ['150%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 1000,
        delay: 700,
		});
        
    };
</script>
<div class=" flex justify-center items-center pb-24 pt-[200px] lg:flex-row flex-col dark:bg-gray-950 overflow-hidden">
    <div class="lg:w-1/3 flex flex-col justify-center items-center">
        <h1 class="p-4 gallery-title text-6xl tracking-[0.05em] lg:leading-8 font-final leading-[150px] lg:text-7xl select-none bg-gradient-to-r from-cyan-500 to-emerald-300 text-transparent bg-clip-text">
            GALLERY
        </h1>
    </div>
    <div class="carousel-container2 bg-black rounded-[50px] overflow-hidden lg:w-3/5 lg:py-10 py-5 w-5/6 lg:px-10 px-5 lg:h-[800px] flex items-center justify-center">

        <div>
            <Carousel {images} {showCaptions} {showThumbs} transtion="fade" duration="3000" divClass="overflow-hidden rounded-lg relative lg:h-[800px]"/>
        </div>
    </div>
</div>


<style>
    :global(body) {
        padding: 0;
        background-color:black;
    }
</style>

<Footer/>
