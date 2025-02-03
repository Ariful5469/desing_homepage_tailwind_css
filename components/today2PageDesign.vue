<template>
    <div class="flex flex-col">
    <div class="carousel-container">
      <!-- Left arrow button -->
      <button class="carousel-arrow left" @click="moveLeft">&#8592;</button>
  
      <!-- Carousel wrapper to display images -->
      <div class="carousel-items-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(item, index) in items" :key="index" class="carousel-item">
          <img :src="item" class="carousel-image" draggable="false" />
        </div>
      </div>
  
      <!-- Right arrow button -->
      <button class="carousel-arrow right" @click="moveRight">&#8594;</button>
  
      <!-- Text overlay at the bottom center of the carousel -->
      <div class="mb-8 carousel-text text-4xl">Welcome to the page</div>
    </div>




 
        <div class="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900" id="reviews">

<div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">

    <div class="mb-10 space-y-4 px-6 md:px-0">
        <h2 class="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            We have some fans.
        </h2>
    </div>


    <div class="md:columns-2 lg:columns-3 gap-8 space-y-8">


        <div
            class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div class="flex gap-4">
                <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy">
                <div>
                    <h6 class="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h6>
                    <p class="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                </div>
            </div>
            <p class="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos
                illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam
                ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
            </p>
        </div>


        <div
            class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div class="flex gap-4">
                <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" width="200" height="200" loading="lazy">
                <div>
                    <h6 class="text-lg font-medium text-gray-700 dark:text-white">Jane doe</h6>
                    <p class="text-sm text-gray-500 dark:text-gray-300">Marketing</p>
                </div>
            </div>
            <p class="mt-8"> Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore
                cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
            </p>
        </div>


        <div
            class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div class="flex gap-4">
                <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/18.jpg" alt="user avatar" width="200" height="200" loading="lazy">
                <div>
                    <h6 class="text-lg font-medium text-gray-700 dark:text-white">Yanick Doe</h6>
                    <p class="text-sm text-gray-500 dark:text-gray-300">Developer</p>
                </div>
            </div>
            <p class="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
            </p>
        </div>


        <div
            class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div class="flex gap-4">
                <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg" alt="user avatar" width="200" height="200" loading="lazy">
                <div>
                    <h6 class="text-lg font-medium text-gray-700 dark:text-white">Jane Doe</h6>
                    <p class="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                </div>
            </div>
            <p class="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
            </p>
        </div>


        <div
            class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div class="flex gap-4">
                <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/62.jpg" alt="user avatar" width="200" height="200" loading="lazy">
                <div>
                    <h6 class="text-lg font-medium text-gray-700 dark:text-white">Andy Doe</h6>
                    <p class="text-sm text-gray-500 dark:text-gray-300">Manager</p>
                </div>
            </div>
            <p class="mt-8"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam
                deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
            </p>
        </div>


        <div
            class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div class="flex gap-4">
                <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar" width="400" height="400" loading="lazy">
                <div>
                    <h6 class="text-lg font-medium text-gray-700 dark:text-white">Yanndy Doe</h6>
                    <p class="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                </div>
            </div>
            <p class="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
            </p>
        </div>

    </div>

</div>

    </div>


<div> 
    <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
      <div class="flex justify-between items-center">
        <h3 class="text-xl font-semibold">Welcome to Our Page</h3>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div class="mt-4">
        <p class="text-gray-700">This is a simple modal popup designed with Tailwind CSS.</p>
      </div>
      <div class="mt-6 flex justify-end">
        <button @click="closeModal" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Close</button>
      </div>
    </div>
  </div>
</div>       
    


<div>  
  <!-- Modal toggle -->
<button data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button>

<!-- Main modal -->
<div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
            </div>
        </div>
    </div>
</div>
</div>




    </div>
  </template>
  
  <script>
  export default {
   
    data() {
      return {
        isVisible: false,
        items: [
          'https://picsum.photos/1920/1080?random=1',
          'https://picsum.photos/1920/1080?random=2',
          'https://picsum.photos/1920/1080?random=3',
          'https://picsum.photos/1920/1080?random=4',
          'https://picsum.photos/1920/1080?random=5',
          'https://picsum.photos/1920/1080?random=6'
        ],
        currentIndex: 0 // Track the currently displayed item
      };
    },
    methods: {
        openModal() {
      this.isVisible = true; // Open the modal
    },
    closeModal() {
      this.isVisible = false; // Close the modal
    },
      moveLeft() {
        this.currentIndex = this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1;
      },
      moveRight() {
        this.currentIndex = this.currentIndex === this.items.length - 1 ? 0 : this.currentIndex + 1;
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel-container {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%; /* Full width of the screen */
    height: 50vh; /* Half of the screen height */
    overflow: hidden;
    margin: 0 auto; /* Center the carousel */
  }
  
  .carousel-items-wrapper {
    display: flex;
    transition: transform 0.5s ease;
    width: 100%;
  }
  
  .carousel-item {
    min-width: 100%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
  }
  
  .carousel-image {
    border-radius: 10px;
    width: 100%; /* Full width of the container */
    height: 100%; /* Full height of the container */
    object-fit: cover; /* Maintain the aspect ratio and fill the space */
  }
  
  .carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    font-size: 24px;
    cursor: pointer;
    z-index: 10;
    border-radius: 50%;
  }
  
  .carousel-arrow.left {
    left: 10px;
  }
  
  .carousel-arrow.right {
    right: 10px;
  }
  
  /* Text at the bottom center of the carousel */
  .carousel-text {
    position: absolute;
    bottom: 10px; /* 10px from the bottom */
    left: 50%;
    transform: translateX(-50%); /* Center the text */
    font-size: 2xl; /* Large text size */
    font-weight: bold;
    color: white;
    z-index: 1;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .carousel-container {
      height: 40vh; /* Slightly smaller height for medium devices */
    }
  
    .carousel-image {
      object-fit: cover;
    }
  }
  
  @media (max-width: 480px) {
    .carousel-container {
      height: 30vh; /* Even smaller height for very small screens */
    }
  }
  </style>
  