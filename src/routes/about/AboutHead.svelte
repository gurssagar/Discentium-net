<script>
    let acceptTerms = false;
    let open = false;
    let showThumbs=false
    let showCaptions=false
    let darkMode = true;
    import { Carousel, CarouselTransition } from 'flowbite-svelte';
    import Saos from 'saos';
    import anime from 'animejs';

    import { afterUpdate, onMount } from 'svelte';
	onMount(() => {
		animateMain();
	});

	afterUpdate(() => {
		animateMain();
	});

	function animateMain() {
		anime({
		targets: [".about-us"],
		translateX: ['-150%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 1000,
		});
		anime({
		targets: [ ".create"],
		translateX: ['-150%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 1000,
		delay: 700,
		});
		anime({
		targets: [".carousel-container"],
		translateX: ['150%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 1500,
		});
    };

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
</script>

<div class="dark:bg-gray-950 flex xl:flex-row flex-col lg:pr-16 pt-[150px] justify-center items-center overflow-hidden">
    <div class="">
        <div class="flex justify-center text-center px-10  bg-cover font-final ">
            <div class="xl:py-36 py-4 font-hello relative">
                    <h1 class="about-us bg-gradient-to-r from-cyan-500 to-emerald-300 text-transparent bg-clip-text text-4xl tracking-[0.05em] lg:text-8xl select-none">ABOUT US</h1>
            </div>
        </div>
    </div>

        <div class="flex items-center justify-center overflow-hidden xl:w-[900px] xl:h-[500px] w-[400px] h-[500px] px-10 rounded-[20px] over relative">
        <div class="">

            <div class="carousel-container overflow-hidden rounded-[20px] flex justify-center items-center">
                <CarouselTransition {images} loop  slideControls={true} showIndicators="{false}" transitionType="fade" transitionParams="{{ duration: 800 }}" showCaptions={false} showThumbs={false} duration="5000" />
            </div>

        </div>
        </div>

    

</div>

<style>
    div.carousel-container > div > div {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
    }
</style>