<template>
    <div>
     <!-- First Row: Content Bar (Navigation Links) -->
     <div
    class="flex flex-col mx-2 bg-gray-100 w-full min-h-[500px]"
    :style="{
      backgroundImage: 'url(' + require('@/assets/aboutCart.png') + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      maxHeight: '850px'
    }"
  >

  <div class="container mx-auto px-4">
    <!-- Navigation Bar -->
    <div class="flex items-center justify-between text-lg mt-4">
      
      <!-- Left Side: Logo -->
      <div class="flex items-center">
        <img src="@/assets/carlogo.jpg" alt="Custom Cars Logo" class="h-9 w-16">
      </div>

      <!-- Center: Navigation Links -->
      <ul class="flex justify-center space-x-8 text-zinc-400 ">
        <li><NuxtLink to="/" class="text-zinc-400 hover:text-neutral-50 transition-all duration-300 px-3 py-1 rounded text-lg">Home</NuxtLink></li>
        <li><NuxtLink to="/design_page" class="text-zinc-400 hover:text-neutral-50 transition-all duration-300 px-3 py-1 rounded text-lg">Design</NuxtLink></li>
        <li><NuxtLink to="/category" class="text-zinc-400 hover:text-neutral-50 transition-all duration-300 px-3 py-1 rounded text-lg">Category</NuxtLink></li>
        <li><NuxtLink to="/category1" class="text-zinc-400 hover:text-neutral-50 transition-all duration-300 px-3 py-1 rounded text-lg">Category1</NuxtLink></li>
        <li><NuxtLink to="/contact" class="text-zinc-400 hover:text-neutral-50 transition-all duration-300 px-3 py-1 rounded text-lg">Community</NuxtLink></li>
      </ul>

      <!-- Right Side: Icons -->
      <div class="flex justify-end space-x-4 ">
        <a href="#" class="hover:text-teal-400 transition-all duration-300">
          <img src="https://img.icons8.com/?size=100&id=59878&format=png&color=FFFFFF" alt="Search" class="w-5 h-5 sm:w-6 sm:h-6">
        </a>
        <a href="#" class="hover:text-white">
  <select id="languageToggle" class="bg-transparent text-zinc-400 px-3 py-1 rounded cursor-pointer">
    <option value="en">English</option>
    <option value="bn">বাংলা</option>
  </select>
</a>


        <a><div class="border-l border-zinc-400 h-full"></div></a>
        <a href="#" class="hover:text-teal-400 transition-all duration-300">
          <img src="https://img.icons8.com/?size=100&id=11642&format=png&color=FFFFFF" alt="Notifications" class="w-5 h-5 sm:w-6 sm:h-6">
        </a>
        <a href="#" class="hover:text-teal-400 transition-all duration-300">
          <img src="https://img.icons8.com/?size=100&id=85022&format=png&color=FFFFFF" alt="Mail" class="w-5 h-5 sm:w-6 sm:h-6">
        </a>
        <span class="text-zinc-400 hover:text-neutral-50 hidden sm:block">Hi, <span class="font-semibold">Your Name</span></span>
        <a href="#" class="text-white hover:text-teal-400 transition-all duration-300">
          <i class="fas fa-user-circle text-lg"></i>
        </a>
      </div>
    </div>
    <!-- Second Row: About Us Section (Now Fully Responsive) -->
    <div class="w-full text-neutral-50 py-6 sm:py-8 md:py-12">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-8xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold mb-4">My Favourite List</h2>
        <p class="text-md text-zinc-200">We are a team of passionate individuals who love cars.</p>
        <p class="text-md text-zinc-200">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </div>
</div>


  
     <!--2nd row-->

     <div class="container mx-auto px-4 py-8">
  <!-- Main Content Container -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="p-4 rounded-lg mb-120">
  <!-- Container for headline and link with border -->
  <div class="text-center mb-4">
    <!-- Wrapper for the headline and link with border -->
    <div class="border-2 border-gray-300 inline-block p-2">
      
      <!-- Headline in black -->
      <div class="text-black text-lg font-semibold">Favorite Car List</div>
      
      <!-- Link in blue -->
      <p class="text-blue-600 text-lg mt-2 cursor-pointer">Favorite Car List</p>
    </div>
  </div>
</div>



  
    <!-- Second Column: Favourite Car List -->
<div class="col-span-2">
  <h1 class="text-2xl font-bold mb-6">Favourite Car List</h1>

  <!-- Sort Options: Newest or Oldest -->
  <div class="flex justify-between items-center mb-4">
    <label for="sort" class="text-sm font-semibold">Sort by:</label>
    <select
      id="sort"
      v-model="sortOrder"
      class="bg-gray-200 text-gray-800 p-2 rounded-md text-sm"
    >
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
    </select>
  </div>

  <!-- Displaying Paginated Data -->
  <div class="space-y-8">
    <div
      v-for="(item, index) in paginatedData"
      :key="item.id"
      class="flex mb-8"
    >
      <!-- First Column: Image with fixed size -->
      <div class="w-1/3">
        <img :src="item.image" :alt="item.headline" class="w-full h-48 object-cover rounded-lg">
      </div>

      <!-- Second Column: Description -->
      <div class="ml-6 w-2/3">
        <h3 class="font-semibold text-lg mb-2">{{ item.headline }}</h3>
        <p class="text-gray-700">{{ item.description }}</p>
      </div>
    </div>
  </div>

  <!-- Pagination Controls -->
  <div class="flex justify-center items-center mt-4 space-x-2">
    <!-- Previous Button -->
    <button
      v-if="currentPage > 1"
      @click="currentPage--"
      class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
    >
      Previous
    </button>

    <!-- Page Numbers -->
    <button
      v-for="page in pageNumbers"
      :key="page"
      @click="currentPage = page"
      :class="{'bg-blue-600 text-white': currentPage === page, 'bg-gray-200 text-gray-800': currentPage !== page}"
      class="px-4 py-2 rounded-md hover:bg-gray-300"
    >
      {{ page }}
    </button>

    <!-- Next Button -->
    <button
      v-if="currentPage < totalPages"
      @click="currentPage++"
      class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
    >
      Next
    </button>
  </div>
</div>
  </div>
</div>



<!--5th row-->

   

<!--footer-->
<div class=" bg-stone-700 text-white mx-2 my-2 flex flex-col border border-black mb-4 rounded lg">

<!-- Row 1: Logo in the middle -->
<div class="flex justify-center items-center py-4">
  <img src="@/assets/carlogo.jpg" alt="Logo" class="h-12">
</div>

<!-- Row 2: 5 columns with small text -->
<div class=" text-white px-2 py-2 grid grid-cols-5 gap-4 py-4">
  <!-- Column 1 -->
  <div class="flex flex-col">
    <h3 class="text-lg font-semibold mb-2">Company</h3>
    <a href="#" class="text-sm hover:text-blue-500">About Us</a>
    <a href="#" class="text-sm hover:text-blue-500">Careers</a>
    <a href="#" class="text-sm hover:text-blue-500">Press</a>
    <a href="#" class="text-sm hover:text-blue-500">Investors</a>
    <a href="#" class="text-sm hover:text-blue-500">Newsroom</a>
    <a href="#" class="text-sm hover:text-blue-500">Sustainability</a>
  </div>

  <!-- Column 2: Support -->
  <div class="flex flex-col">
    <h3 class="text-lg font-semibold mb-2">Support</h3>
    <a href="#" class="text-sm hover:text-blue-500">Help Center</a>
    <a href="#" class="text-sm hover:text-blue-500">FAQs</a>
    <a href="#" class="text-sm hover:text-blue-500">Contact Us</a>
    <a href="#" class="text-sm hover:text-blue-500">Report an Issue</a>
    <a href="#" class="text-sm hover:text-blue-500">Live Chat</a>
  </div>

  <!-- Column 3: Services -->
  <div class="flex flex-col">
    <h3 class="text-lg font-semibold mb-2">Services</h3>
    <a href="#" class="text-sm hover:text-blue-500">Web Development</a>
    <a href="#" class="text-sm hover:text-blue-500">Mobile Apps</a>
    <a href="#" class="text-sm hover:text-blue-500">SEO & Marketing</a>
    <a href="#" class="text-sm hover:text-blue-500">E-commerce</a>
    <a href="#" class="text-sm hover:text-blue-500">Cloud Solutions</a>
    <a href="#" class="text-sm hover:text-blue-500">Cybersecurity</a>
  </div>

  <!-- Column 4: Legal -->
  <div class="flex flex-col">
    <h3 class="text-lg font-semibold mb-2">Legal</h3>
    <a href="#" class="text-sm hover:text-blue-500">Privacy Policy</a>
    <a href="#" class="text-sm hover:text-blue-500">Terms of Service</a>
    <a href="#" class="text-sm hover:text-blue-500">Cookie Policy</a>
    <a href="#" class="text-sm hover:text-blue-500">Compliance</a>
  </div>

  <!-- Column 5: Social Media -->
  <div class="flex flex-col">
    <h3 class="text-lg font-semibold mb-2">Follow Us</h3>
    <a href="#" class="text-sm hover:text-blue-500">Facebook</a>
    <a href="#" class="text-sm hover:text-blue-500">Twitter</a>
    <a href="#" class="text-sm hover:text-blue-500">Instagram</a>
    <a href="#" class="text-sm hover:text-blue-500">LinkedIn</a>
  </div>
</div>

<div class="py-4">
  <div class="text-center text-lg font-semibold">Follow us</div>
  <div class="flex justify-center space-x-4 mt-2">
    <!-- Facebook Icon -->
    <a href="#" class="text-yellow-500 hover:text-yellow-400">
      <img src="https://img.icons8.com/?size=100&id=118487&format=png&color=FFFF00" alt="Facebook" class="w-6 h-6">
    </a>
    
    <!-- Twitter Icon -->
    <a href="#" class="text-yellow-500 hover:text-yellow-400">
      <img src="https://img.icons8.com/?size=100&id=cKVaqrBj74lT&format=png&color=FFFF00" alt="Twitter" class="w-6 h-6">
    </a>
    
    <!-- LinkedIn Icon -->
    <a href="#" class="text-yellow-500 hover:text-yellow-400">
      <img src="https://img.icons8.com/?size=100&id=16166&format=png&color=FFFF00" alt="LinkedIn" class="w-6 h-6">
    </a>
  </div>
</div>



<!-- Row 4: Footer -->
<div class=" pb-4 text-center text-sm">
  <p>&copy; 2025 Your Company. All rights reserved.</p>
</div>  

</div>







  
    </div>
  </template>
  
  <script setup>
import { ref, computed } from 'vue';
import { data } from '@/assets/data.js'; // Import the data from the data.js file

// State for current page
const currentPage = ref(1);

// Computed property to calculate total pages based on the number of items per page
const itemsPerPage = 3;
const totalPages = computed(() => {
  return Math.ceil(data.length / itemsPerPage);
});

// Sort the data by 'newest' or 'oldest'
const sortOrder = ref('newest');
const sortedData = computed(() => {
  return data.slice().sort((a, b) => {
    if (sortOrder.value === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });
});

// Computed property to get the paginated data
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return sortedData.value.slice(start, end);
});
</script>
  
  <style scoped>
  /* You can add any additional custom styles here if needed */
  </style>
  