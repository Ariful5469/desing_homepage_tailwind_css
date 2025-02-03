<template>
    <div class="flex flex-col mx-56 space-y-8 ">
        <div>
    <vue-slick-carousel
      :dots="true"
      :arrows="true"
      :autoplay="true"
      class="relative"
    >
      <!-- First slide -->
      <div>
        <div class="relative w-full h-[700px]">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            class="w-full h-[700px] object-cover"
          />
          <div class="absolute top-1/4 left-4 text-white space-y-2">
            <h2 class="text-xl tracking-wider">Man Collection 2024</h2>

            <p class="text-6xl font-bold">Get Up To 50% Off</p>
            <p class="text-6xl font-bold">Select styles</p>
            <div class="mt-8"> <button class="mt-1  bg-red-500 text-white py-2 px-8  rounded-md hover:bg-pink-600">
              Shop Now
            </button> </div>
        </div>
          </div>
         
      </div>
  
      <!-- Second slide -->
      <div>
        <div class="relative w-full h-[700px]">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            class="w-full h-[700px] object-cover"
          />
          <div class="absolute top-1/4 left-4 text-white space-y-2">
            <h2 class="text-xl tracking-wider">Man Collection 2024</h2>

            <p class="text-6xl font-bold">Get Up To 50% Off</p>
            <p class="text-6xl font-bold">Select styles</p>
            <button class="mt-16 bg-red-500 text-white py-2 px-8  rounded-md hover:bg-pink-600">
              Shop Now
            </button>
          </div>
        </div>
      </div>
  
      <!-- Third slide -->
      <div>
        <div class="relative w-full h-[700px]">
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            class="w-full h-[700px] object-cover"
          />
          <div class="absolute top-1/4 left-4 text-white space-y-2">
            <h2 class="text-xl tracking-wider">Man Collection 2024</h2>

            <p class="text-6xl font-bold">Get Up To 50% Off</p>
            <p class="text-6xl font-bold">Select styles</p>
            <button class="mt-16 bg-red-500 text-white py-2 px-8   hover:bg-pink-600">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </vue-slick-carousel>
  </div>
  
      
     <!-- New Row -->
     <div class="container mx-auto sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-36 mt-18 2xl:mt-36">

<!-- Second Row: 3 Columns -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
  <!-- Men Category -->
  <div class="relative flex items-center justify-center rounded-lg">
    <img
      src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
      alt="Men's Collection"
      class="w-full h-[500px] object-cover rounded-md"
    />
    <div class=" my-4 absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center w-full px-4">
  
      <button class="mt-4 py-2 px-6 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-100 focus:outline-none">
        Man
      </button>
    </div>
  </div>

  <!-- Women Category -->
  <div class=" relative flex items-center justify-center rounded-lg">
    <img
      src="https://picsum.photos/600/800?random=1"
      alt="Women's Collection"
      class="w-full h-[500px] object-cover rounded-md"
    />
    <div class="my-4  absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center w-full px-4">
    
      <button class="mt-4 py-2 px-8 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-100 focus:outline-none">
        Women
      </button>
    </div>
  </div>

  <!-- Accessories Category -->
  <div class=" relative flex items-center justify-center rounded-lg">
    <img
      src="https://picsum.photos/600/800?random=2"
      alt="Accessories"
      class="w-full h-[500px] object-cover rounded-md"
    />
    <div class="my-4  absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center w-full px-4">
      
      <button class="mt-4 py-2 px-6 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-100 focus:outline-none">
        Accesories
      </button>
    </div>
  </div>
</div>
</div>



<!--NEW DIV-->

<div>
  <div class="container mx-auto sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-36 mt-18 2xl:mt-36">
    <!-- Akira Collections Section -->
    <div class="text-center mb-12 space-y-4">
      <h1 class="text-xl text-gray-500">AKIRA COLLECTIONS</h1>
      <p class="text-2xl text-black font-semibold">FEATURED PRODUCTS</p>
      <p class="text-xl text-gray-500">Nullam gravida, dolor ac ultrices lobortis, mi dolor justo.</p>
    </div>

    <!-- Category Tabs -->
    <div class="flex justify-center space-x-4 mb-6">
      <div
        v-for="(category, index) in categories"
        :key="index"
        @click="selectedCategory = category"
        class="px-4 py-2 text-black text-xl cursor-pointer transition-all duration-300"
        :class="selectedCategory === category ? 'font-bold border-b-4 border-pink-600' : 'font-normal border-b-4 border-transparent'"
      >
        {{ category }}
      </div>
    </div>

    <!-- Selected Category Title -->
    <h2 class="text-center text-2xl font-semibold mb-4 text-gray-700 ">{{ selectedCategory }} Collection</h2>

    <!-- Product Grid (Always Visible) -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 h-[700px]">
      <div v-for="index in 8" :key="index" class="mb-4 relative group">
        <!-- Image -->
        <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img :src="imageSrc" class="w-full h-[400px]" alt="Product Image" />

          <!-- Hover overlay -->
          <div class="absolute bottom-0 left-0 right-0 w-full h-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <div class="flex justify-center items-center h-full">
              <button class="bg-pink-500 text-white px-4 py-4 w-full flex justify-center items-center gap-2 rounded-md">
                <span>Select Option</span>
              </button>
            </div>
          </div>

          <!-- Top right icons (visible on hover) -->
          <div class="bg-stone-50 absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-1 rounded-md shadow">
            <img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" alt="Icon 1" class="w-6 h-6" />
            <img src="https://img.icons8.com/?size=100&id=yydb76lTrba9&format=png&color=000000" alt="Icon 2" class="w-6 h-6" />
            <img src="https://img.icons8.com/?size=100&id=37225&format=png&color=000000" alt="Icon 3" class="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




<div> 
    <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" arrows>
    <img :src="item" class="w-full" draggable="false">
  </UCarousel>

</div>






      <!-- End of New Row -->
    </div>
  </template>
  
  <script>
import VueSlickCarousel from "vue-slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default {
   
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      categories: ["Women's", "Men's", "Kid's"],
      selectedCategory: "Women's",
      imageSrc: "https://picsum.photos/600/800?random=4",
    };
  }
};
</script>

  
<style scoped>
  /* Customize the arrow buttons */
  .slick-prev, .slick-next {
    color: white;
    font-size: 2.5rem; /* Slightly smaller for better proportion */
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10; /* Ensure arrows are on top */
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    border-radius: 50%; /* Make arrows round */
    width: 50px; /* Set width of the arrow buttons */
    height: 50px; /* Set height of the arrow buttons */
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transition */
  }

  /* Position for the left arrow */
  .slick-prev {
    left: 15px;
  }

  /* Position for the right arrow */
  .slick-next {
    right: 15px;
  }

  /* Hover effect */
  .slick-prev:hover, .slick-next:hover {
    background-color: rgba(0, 0, 0, 0.8); /* Darker background on hover */
    cursor: pointer;
    transform: scale(1.1); /* Slightly enlarge the arrow on hover */
  }

  /* Change the arrow icons using pseudo-elements */
  .slick-prev:before, .slick-next:before {
    font-family: "slick"; /* Ensure correct icons are displayed */
    font-size: 2rem; /* Adjust the size of the icons */
  }

  /* Responsive styling for smaller screens */
  @media (max-width: 768px) {
    .slick-prev, .slick-next {
      font-size: 2rem; /* Smaller arrows for mobile */
      width: 40px;
      height: 40px;
    }
  }

  /* Ensure no conflicting padding or margin issues */
  .container,
  .slick-slide,
  .bg-white {
    margin: 0;
    padding: 16px;
  }

  .grid {
    gap: 16px;
  }

  /* Add spacing for images */
  img {
    margin-bottom: 16px;
  }
</style>
