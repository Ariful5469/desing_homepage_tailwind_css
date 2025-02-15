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
        maxHeight: '850px',
      }"
    >
      <div class="container mx-auto px-4">
        <!-- Navigation Bar -->
        <div class="flex items-center justify-between text-xl mt-4">
          <!-- Left Side: Logo -->
          <div class="flex items-center">
            <img
              src="@/assets/carlogo.jpg"
              alt="Custom Cars Logo"
              class="h-9 w-16"
            />
          </div>

          <!-- Center: Navigation Links -->
          <ul class="flex justify-center space-x-4 text-zinc-400">
            <li>
              <NuxtLink
                to="/"
                class="text-zinc-400 hover:text-neutral-50 transition-all duration-300 px-3 py-1 rounded text-xl"
                >Design-01</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/design_page"
                class="text-zinc-400 hover:text-neutral-50 transition-all duration-300 px-3 py-1 rounded text-xl"
                >Design-02</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/category"
                class="text-zinc-400 hover:text-neutral-50 transition-all duration-300 px-3 py-1 rounded text-xl"
                >Design-03</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/category1"
                class="text-zinc-400 hover:text-neutral-50 transition-all duration-300 px-3 py-1 rounded text-xl"
                >Design-04</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="text-zinc-400 hover:text-neutral-50 transition-all duration-300 px-3 py-1 rounded text-xl"
                >Design-05</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/today"
                class="text-zinc-400 hover:text-neutral-50 transition-all duration-300 px-3 py-1 rounded text-xl"
                >Design-06</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/today1"
                class="text-zinc-400 hover:text-neutral-50 transition-all duration-300 px-3 py-1 rounded text-xl"
                >Design-07</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/today2"
                class="text-zinc-400 hover:text-neutral-50 transition-all duration-300 px-3 py-1 rounded text-xl"
                >Design-08</NuxtLink
              >
            </li>
          </ul>

          <!-- Right Side: Icons -->
          <div class="flex justify-end space-x-4">
            <a href="#" class="hover:text-teal-400 transition-all duration-300">
              <img
                src="https://img.icons8.com/?size=100&id=59878&format=png&color=FFFFFF"
                alt="Search"
                class="w-5 h-5 sm:w-6 sm:h-6"
              />
            </a>
            <a href="#" class="hover:text-white">
              <select
                id="languageToggle"
                class="bg-transparent text-zinc-400 px-3 py-1 rounded cursor-pointer"
              >
                <option value="en">English</option>
                <option value="bn">বাংলা</option>
              </select>
            </a>

            <a><div class="border-l border-zinc-400 h-full"></div></a>
            <a href="#" class="hover:text-teal-400 transition-all duration-300">
              <img
                src="https://img.icons8.com/?size=100&id=11642&format=png&color=FFFFFF"
                alt="Notifications"
                class="w-5 h-5 sm:w-6 sm:h-6"
              />
            </a>
            <a href="#" class="hover:text-teal-400 transition-all duration-300">
              <img
                src="https://img.icons8.com/?size=100&id=85022&format=png&color=FFFFFF"
                alt="Mail"
                class="w-5 h-5 sm:w-6 sm:h-6"
              />
            </a>
            <span class="text-zinc-400 hover:text-neutral-50 hidden sm:block"
              >Hi, <span class="font-semibold">Your Name</span></span
            >
            <a
              href="#"
              class="text-white hover:text-teal-400 transition-all duration-300"
            >
              <i class="fas fa-user-circle text-lg"></i>
            </a>
          </div>
        </div>
        <!-- Second Row: About Us Section (Now Fully Responsive) -->
        <div class="w-full text-neutral-50 py-6 sm:py-8 md:py-12">
          <div class="container mx-auto px-4 text-center">
            <h2
              class="text-8xl sm:text-3xl md:text-4xl lg:text-8xl xl:text-4xl 2xl:text-5xl font-bold mb-4"
            >
              Best Blog Posts
            </h2>
            <p class="text-md text-zinc-200">
              We are a team of passionate individuals who love cars.
            </p>
            <p class="text-md text-zinc-200">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>

    <!--2nd row-->

    <div
      class="my-16 mx-16 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white rounded-lg"
    >
      <!-- Left Column: Image -->
      <div>
        <img
          src="@/assets/bicycle.jpg"
          alt="Bicycle"
          class="w-full h-auto rounded-lg"
        />
      </div>

      <!-- Right Column -->
      <div class="flex flex-col justify-between p-16">
        <!-- Text Content -->
        <div class="flex flex-col">
          <div>
            <p class="text-blue-500 text-sm">TIPS & ADVICE</p>
            <h2 class="text-zinc-500 font-bold text-xl">
              The stalker's guide to highly effective guest posting
            </h2>
            <p class="text-gray-500 text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <!-- Added 3-4 more lines of text -->
            <p class="text-gray-500 text-sm mt-2">
              Nulla facilisi. Donec egestas orci eu erat vestibulum, nec
              suscipit nisl tempus. Vivamus interdum arcu id metus auctor, ac
              viverra ex fringilla.
            </p>
            <p class="text-gray-500 text-sm mt-2">
              Morbi feugiat, leo ac elementum viverra, libero eros feugiat elit,
              vel feugiat libero mi non mauris. Duis sodales sapien ut euismod
              venenatis.
            </p>
            <p class="text-gray-500 text-sm mt-2">
              Integer lacinia ligula a ligula fermentum, non tempus arcu
              tincidunt. Quisque consectetur odio nisi, vel consequat magna
              hendrerit a.
            </p>
          </div>
        </div>

        <!-- Author Section -->
        <div class="mb-16 mt-4">
          <img
            src="@/assets/man1.jpg"
            alt="Kristin Walton"
            class="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <p class="text-black font-semibold">Kristin Walton</p>
            <div class="flex items-center text-gray-500 text-sm">
              <!-- Date Icon -->
              <img
                src="https://img.icons8.com/?size=100&id=43503&format=png&color=000000"
                alt="Date"
                class="w-4 h-4 mr-2"
              />
              <p>Jan 20</p>
              <!-- Comment Icon -->
              <img
                src="https://img.icons8.com/?size=100&id=461&format=png&color=000000"
                alt="Comment"
                class="w-4 h-4 ml-4 mr-2"
              />
              <p>No Comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3rd Row -->
    <div class="my-16 mx-16 flex space-x-16 p-4 lg rounded">
      <!-- 1st Column: First Div (Image and Text) -->
      <div class="flex flex-col bg-white rounded-lg w-full md:w-1/2">
        <!-- Left Column: Image -->
        <div class="h-96 overflow-hidden rounded-lg">
          <img
            src="@/assets/car4.jpg"
            alt="Car"
            class="w-full h-full object-cover"
          />
          <!-- Changed object-contain to object-cover to make the image cover the full height -->
        </div>

        <!-- Right Column -->
        <div class="flex flex-col justify-between p-4">
          <!-- Text Content -->
          <div class="mt-0">
            <!-- Removed mt-4 to align the text with the image -->
            <p class="text-blue-500 text-sm">Tips & Advice</p>
            <h2 class="text-zinc-500 font-bold text-xl">
              The stalker's guide to highly effective guest posting
            </h2>
            <p class="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>

          <!-- Author Section -->
          <div class="mb-16 flex items-center mt-4">
            <!-- First Column: Image -->
            <img
              src="@/assets/man1.jpg"
              alt="Kristin Walton"
              class="w-12 h-12 rounded-full mr-3"
            />
            <!-- Image with right margin -->

            <!-- Second Column: Text (Name, Date, Comments) -->
            <div>
              <p class="text-black font-semibold">Kristin Walton</p>

              <!-- Date and Comment Section -->
              <div class="flex items-center text-gray-500 text-sm">
                <!-- Date Icon -->
                <img
                  src="https://img.icons8.com/?size=100&id=43503&format=png&color=000000"
                  alt="Date"
                  class="w-4 h-4 mr-2"
                />
                <p>Jan 20</p>

                <!-- Comment Icon -->
                <img
                  src="https://img.icons8.com/?size=100&id=461&format=png&color=000000"
                  alt="Comment"
                  class="w-4 h-4 ml-4 mr-2"
                />
                <p>No Comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2nd Column: Second Div (Image and Text) -->
      <div class="flex flex-col bg-white rounded-lg w-full md:w-1/2">
        <!-- Left Column: Image -->
        <div class="h-96 overflow-hidden rounded-lg">
          <img
            src="@/assets/car3.jpg"
            alt="Car"
            class="w-full h-full object-cover"
          />
          <!-- Changed object-contain to object-cover -->
        </div>

        <!-- Right Column -->
        <div class="flex flex-col justify-between p-4">
          <!-- Text Content -->
          <div class="mt-0">
            <!-- Removed mt-4 to align the text with the image -->
            <p class="text-blue-500 text-sm">Tips & Advice</p>
            <h2 class="text-zinc-500 font-bold text-xl">
              The stalker's guide to highly effective guest posting
            </h2>
            <p class="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>

          <!-- Author Section -->
          <!-- Author Section -->
          <div class="mb-16 flex items-center mt-4">
            <!-- First Column: Image -->
            <img
              src="@/assets/man1.jpg"
              alt="Kristin Walton"
              class="w-12 h-12 rounded-full mr-3"
            />
            <!-- Image with right margin -->

            <!-- Second Column: Text (Name, Date, Comments) -->
            <div>
              <p class="text-black font-semibold">Kristin Walton</p>

              <!-- Date and Comment Section -->
              <div class="flex items-center text-gray-500 text-sm">
                <!-- Date Icon -->
                <img
                  src="https://img.icons8.com/?size=100&id=43503&format=png&color=000000"
                  alt="Date"
                  class="w-4 h-4 mr-2"
                />
                <p>Jan 20</p>

                <!-- Comment Icon -->
                <img
                  src="https://img.icons8.com/?size=100&id=461&format=png&color=000000"
                  alt="Comment"
                  class="w-4 h-4 ml-4 mr-2"
                />
                <p>No Comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--4th row-->
    <div class="container mx-auto p-2">
    <h1 class="text-3xl font-bold text-center mb-6">Car Blog Articles</h1>

    <!-- 4x3 Grid Layout -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      <!-- Use .map() to render the items -->
      <div 
        v-for="(item, index) in paginatedData"
        :key="item.id"
        class="bg-white rounded-lg overflow-hidden"
      >
        <img :src="item.image" alt="Car" class="w-full h-48 object-cover">

        <div class="p-4">
          <span class="text-gray-500 text-sm font-semibold uppercase">{{ item.category }}</span>
          <h2 class="text-lg font-bold text-gray-800 mt-2">{{ item.headline }}</h2>
          <p class="text-gray-600 mt-1">{{ item.description }}</p>
        </div>

        <div class="flex items-center px-4 py-2  bg-white">
          <img :src="item.author.photo" alt="Author" class="w-10 h-10 rounded-full mr-3">
          <div>
            <p class="text-gray-800 font-semibold">{{ item.author.name }}</p>
            <p class="text-sm text-gray-500">{{ item.author.date }} • {{ item.author.comments }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="flex justify-center mt-6">
      <button
        v-if="currentPage > 1"
        @click="currentPage--"
        class="px-4 py-2 text-gray-800 rounded hover:bg-gray-200"
      >
        Previous
      </button>

      <span class="mx-4 text-lg text-gray-800">{{ currentPage }} </span>

      <button
        v-if="currentPage < totalPages"
        @click="currentPage++"
        class="px-4 py-2  text-gray-800 rounded hover:bg-gray-200"
      >
        >
      </button>
    </div>
  </div>
    <!--5th row-->

    <!--footer-->
    <div
      class="bg-stone-700 text-white mx-2 my-2 flex flex-col border border-black mb-4 rounded lg"
    >
      <!-- Row 1: Logo in the middle -->
      <div class="flex justify-center items-center py-4">
        <img src="@/assets/carlogo.jpg" alt="Logo" class="h-12" />
      </div>

      <!-- Row 2: 5 columns with small text -->
      <div class="text-white px-2 py-2 grid grid-cols-5 gap-4 py-4">
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
            <img
              src="https://img.icons8.com/?size=100&id=118487&format=png&color=FFFF00"
              alt="Facebook"
              class="w-6 h-6"
            />
          </a>

          <!-- Twitter Icon -->
          <a href="#" class="text-yellow-500 hover:text-yellow-400">
            <img
              src="https://img.icons8.com/?size=100&id=cKVaqrBj74lT&format=png&color=FFFF00"
              alt="Twitter"
              class="w-6 h-6"
            />
          </a>

          <!-- LinkedIn Icon -->
          <a href="#" class="text-yellow-500 hover:text-yellow-400">
            <img
              src="https://img.icons8.com/?size=100&id=16166&format=png&color=FFFF00"
              alt="LinkedIn"
              class="w-6 h-6"
            />
          </a>
        </div>
      </div>

      <!-- Row 4: Footer -->
      <div class="py-4 text-center text-sm">
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
const itemsPerPage = 9;
const totalPages = computed(() => {
  return Math.ceil(data.length / itemsPerPage);
});

// Computed property to get the paginated data
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return data.slice(start, end);
});
</script>


<style scoped>
/* You can add any additional custom styles here if needed */
</style>
