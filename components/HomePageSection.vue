<template>
  <div class="flex flex-col mx-2">
    <!-- Hero Section -->
    <div
      class="flex flex-col mx-2 bg-gray-100 w-full"
      :style="{
        backgroundImage: 'url(' + require('@/assets/car.jpg') + ')',
        backgroundPosition: 'center',
        backgroundSize: '95%',
        maxHeight: '850px'
      }"
    >
      <!-- Header -->
      <header>
        <div class="container mx-auto px-4 py-8 flex justify-between items-center flex-wrap">
          <div>
            <img src="@/assets/carlogo.jpg" alt="Custom Cars Logo" class="h-9 w-16">
          </div>
          <nav>
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
          </nav>
          <div class="text-white flex items-center mt-4 md:mt-0">
            <select id="languageToggle" class="bg-gray-700 text-white px-3 py-1 rounded cursor-pointer">
  <option value="en">English</option>
  <option value="bn">বাংলা</option>
</select>
            <button class="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</button>
            <button class="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
          </div>
        </div>
      </header>

      <!-- Hero Content -->
      <main class="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start text-white">
        <!-- Left Section -->
        <div class="w-full md:w-2/3 pr-4 mb-8 md:mb-0">
          <div class="text-left">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 mt-10">Deals for Cars & Parts:</h1>
            <p class="text-4xl text-5xl font-bold">
              <span class="text-red-500 font-semibold">Buy</span>,
              <span class="text-blue-500 font-semibold">Sell</span> & 
              <span class="text-amber-500 font-semibold">Auction!</span>
            </p>
            <p class="text-lg mt-12">Find the Perfect Car & Motor Parts for Every Need.</p>
            <p class="text-lg">Buy, Sell & Auction in One Simple Platform.</p>
            <div class="mt-12 flex flex-col sm:flex-row">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mr-4 mb-4 sm:mb-0">
                Buy Now
              </button>
              <button class="bg-white hover:bg-yellow-700 text-blue-700 font-bold py-4 px-8 rounded mr-4 mb-4 sm:mb-0">
                Sell Now
              </button>
            </div>
          </div>
        </div>

        <!-- Right Section (Card) -->
        <div class="flex justify-center">
          <div class="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <!-- Tabs -->
            <div class="border p-1 rounded-lg flex space-x-8">
              <div 
                @click="activeTab = 'buy'"
                :class="{'border-b-2 border-blue-500': activeTab === 'buy'}"
                class="p-2 text-blue-500 hover:text-blue-700 cursor-pointer">
                Buy Cars For Sale
              </div>
              <div 
                @click="activeTab = 'sell'"
                :class="{'border-b-2 border-blue-500': activeTab === 'sell'}"
                class="p-2 text-blue-500 hover:text-blue-700 cursor-pointer">
                Sell Your Car
              </div>
            </div>

            <!-- Tab Content -->
            <div class="mt-6">
              <p v-if="activeTab === 'buy'" class="text-gray-700">Browse cars for sale.</p>
              <p v-if="activeTab === 'sell'" class="text-gray-700">Sell your car with ease.</p>
            </div>

            <!-- Form -->
            <div class="mt-6 space-y-4">
              <div class="flex space-x-6">
                <div class="w-full">
                  <label class="block text-sm font-medium text-gray-700">License Plate</label>
                  <input type="text" class="p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Enter License Plate">
                </div>
                <div class="w-full">
                  <label class="block text-sm font-medium text-gray-700">VIN</label>
                  <input type="text" class="p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Enter VIN">
                </div>
              </div>
              <div class="flex items-center">
                <input type="checkbox" class="form-checkbox text-blue-500 mr-2">
                <label class="text-gray-700">Instant Offer</label>
              </div>
              <button class="bg-amber-500 w-full hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                Get Estimate
              </button>
            </div>
          </div>
        </div>
      </main>

      <div class="border-t-2 border-gray-300 mt-12 pt-4">
        <div class="container mx-auto px-4 text-center">
          <div class="flex justify-center space-x-12">
            <a href="#" class="text-white hover:text-blue-700">Live Wholesale Auction</a>
            <a href="#" class="text-white hover:text-blue-700">Fast & Safe Transaction</a>
            <a href="#" class="text-white hover:text-blue-700">Reputation-Driven Rating</a>
          </div>
        </div>
      </div>


    </div>

   
 <!-- row 2 -->

<div class="mt-8 ml-2 flex relative">

<!-- Left Side (Main Services Overview) - Relative Positioning -->
<div class="bg-blue-500 w-full h-80 p-4 rounded-lg relative">
  <div class="bg-blue-500">
  <h2 class="pl-2 text-4xl font-semibold mb-4 text-white">All the services we</h2>
  <h2 class="pl-2 text-4xl font-semibold mb-4 text-white">provide</h2>
  <p class="pl-2 text-white">Get the car of your dreams with flexible installments</p>
</div>
<div> 

  

</div>
</div>

<!-- Right Side (Sidebar Section for Main Cards) - Absolute Positioning -->
<div class="w-full lg:w-1/3 h-1/3 p-4 mb-2 absolute right-0 top-1/4">
  <div class="space-y-1">

    <!-- Buy Car Card -->
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <div class="flex items-center space-x-2">
  <h3 class="font-bold text-xl text-gray-800">Buy Car</h3>
  <p class="text-gray-700">16K cars available</p>
</div>

      <p class="text-gray-700 mb-4">
        Get the car of your dreams with the installments of your choice
      </p>
            <hr>
            <div class="flex items-center space-x-2">
  <h3 class="font-bold text-xl text-gray-800">Sell Car</h3>
  <button class="bg-amber-100 text-yellow-400 px-4 py-2 rounded hover:bg-gray-800">
    Sign In Now
  </button>
</div>



      
      <p class="text-gray-700 mb-4">
        Get the car of your dreams with the installments of your choice.
      </p>

      <hr>

      <div class="flex items-center space-x-2">
  <h3 class="font-bold text-xl text-gray-800">Auction Car</h3>
  <p class="text-gray-700">9K cars available</p>
</div>

     
      <p class="text-gray-700 mb-4">
        Get the car of your dreams with the installments of your choice.
      </p>
     
    </div>

    

   

  </div>
</div>

</div>



<!-- row extra -->
<div class="ml-1 w-1/2 mx-auto p-6 bg-white-200">

<div class="flex justify-between space-x-8 ">
  <!-- First Box -->
  <div class="bg-gray-100 text-center p-4 bg-white shadow-md rounded-lg w-1/3">
    <h2 class="text-2xl font-bold">180K+</h2>
    <p class="text-gray-600">ACTIVE USERS</p>
  </div>

  <!-- Second Box -->
  <div class="bg-gray-100 text-center p-4 bg-white shadow-md rounded-lg w-1/3">
    <h2 class="text-2xl font-bold">12K+</h2>
    <p class="text-gray-600">GOOD REVIEWS</p>
  </div>

  <!-- Third Box -->
  <div class="bg-gray-100 text-center p-4 bg-white shadow-md rounded-lg w-1/3">
    <h2 class="text-2xl font-bold">48K+</h2>
    <p class="text-gray-600">CAR AVAILABLE</p>
  </div>
</div>

</div>



<!-- row 3 -->
<div class="container mx-auto p-4 mt-8"> <!-- Adjusted margin-top to make space below row 2 -->
<div class="text-4xl font-bold mb-6">
  Live & Online Auction
</div>

<!-- Second Row: 3 Columns -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-10">

  <!-- Product Card 1 -->
  <div class="bg-white shadow-lg p-4 rounded-lg">
    <div class="flex flex-col items-center">
      <img src="@/assets/car1.jpg" alt="Product Image" class="w-full h-40 object-cover rounded-md">
      <p class="mt-2 text-gray-700 text-center">Product Description Here</p>
    </div>
    <div class="flex justify-between items-center mt-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Buy Now</button>
      <span class="text-lg font-semibold text-gray-800">$99.99</span>
    </div>
  </div>

  <!-- Product Card 2 -->
  <div class="bg-white shadow-lg p-4 rounded-lg">
    <div class="flex flex-col items-center">
      <img src="@/assets/car2.jpg" alt="Product Image" class="w-full h-40 object-cover rounded-md">
      <p class="mt-2 text-gray-700 text-center">Product Description Here</p>
    </div>
    <div class="flex justify-between items-center mt-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Buy Now</button>
      <span class="text-lg font-semibold text-gray-800">$99.99</span>
    </div>
  </div>

  <!-- Product Card 3 -->
  <div class="bg-white shadow-lg p-4 rounded-lg">
    <div class="flex flex-col items-center">
      <img src="@/assets/car3.jpg" alt="Product Image" class="w-full h-40 object-cover rounded-md">
      <p class="mt-2 text-gray-700 text-center">Product Description Here</p>
    </div>
    <div class="flex justify-between items-center mt-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Buy Now</button>
      <span class="text-lg font-semibold text-gray-800">$99.99</span>
    </div>
  </div>

</div>
</div>


<!-- row 4 -->

<div class="flex mt-4 mx-8">

<!-- First Column: Text and Button -->
<div class="w-1/2 p-4">
  <h2 class="text-4xl font-semibold">The best price according</h2>
  <h2 class="text-4xl font-semibold">the world market</h2>
  <p class="text-gray-400 mt-2">We want to make sure your getting the best deal possible that's why we are believe in car sell buy $ sell pricing the perks of being family owned.</p>
  <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Learn More</button>
</div>

<!-- Second Column: Images -->
<div class="w-1/2 relative p-4">

  <!-- Relative Image -->
  <img src="@/assets/expenditure-pupil.jpg" alt="Relative Image" class="w-full h-64" id="relative-image">

  <!-- Absolute Image positioned to match height of relative image -->
  <img src="@/assets/car2.jpg" alt="Absolute Image" class="absolute top-1/2 right-2 h-64 w-auto transform -translate-y-1/2">

</div>

</div>




<!-- row 5 -->
<div class="flex flex-col space-y-1 bg-gray-200 my-2">
<div class="space-y-1 container mx-auto p-4 mt-4"> <!-- Adjusted margin-top to make space below row 2 -->
  <div class="text-4xl font-bold mb-6">
  <h2>Most Popular Cars</h2>
</div>
   <div><p class="text-gray-400 mt-2">Add the virtue of your Garage</p></div>
   <br>



<!-- Second Row: 3 Columns -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">

  <!-- Product Card 1 -->
  <div class="bg-white shadow-lg p-4 rounded-lg">
    <div class="flex flex-col items-center">
      <img src="@/assets/car1.jpg" alt="Product Image" class="w-full h-40 object-cover rounded-md">
      <p class="mt-2 text-gray-700 text-center">Product Description Here</p>
    </div>
    <div class="flex justify-between items-center mt-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Buy Now</button>
      <span class="text-lg font-semibold text-gray-800">$99.99</span>
    </div>
  </div>

  <!-- Product Card 2 -->
  <div class="bg-white shadow-lg p-4 rounded-lg">
    <div class="flex flex-col items-center">
      <img src="@/assets/car2.jpg" alt="Product Image" class="w-full h-40 object-cover rounded-md">
      <p class="mt-2 text-gray-700 text-center">Product Description Here</p>
    </div>
    <div class="flex justify-between items-center mt-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Buy Now</button>
      <span class="text-lg font-semibold text-gray-800">$99.99</span>
    </div>
  </div>

  <!-- Product Card 3 -->
  <div class="bg-white shadow-lg p-4 rounded-lg">
    <div class="flex flex-col items-center">
      <img src="@/assets/car3.jpg" alt="Product Image" class="w-full h-40 object-cover rounded-md">
      <p class="mt-2 text-gray-700 text-center">Product Description Here</p>
    </div>
    <div class="flex justify-between items-center mt-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Buy Now</button>
      <span class="text-lg font-semibold text-gray-800">$99.99</span>
    </div>
  </div>

</div>
</div>



<div class="container mx-auto p-4 mt-64"> <!-- Adjusted margin-top to make space below row 2 -->


<!-- Second Row: 3 Columns -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">

  <!-- Product Card 1 -->
  <div class="bg-white shadow-lg p-4 rounded-lg">
    <div class="flex flex-col items-center">
      <img src="@/assets/car3.jpg" alt="Product Image" class="w-full h-40 object-cover rounded-md">
      <p class="mt-2 text-gray-700 text-center">Product Description Here</p>
    </div>
    <div class="flex justify-between items-center mt-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Buy Now</button>
      <span class="text-lg font-semibold text-gray-800">$99.99</span>
    </div>
  </div>

  <!-- Product Card 2 -->
  <div class="bg-white shadow-lg p-4 rounded-lg">
    <div class="flex flex-col items-center">
      <img src="@/assets/car2.jpg" alt="Product Image" class="w-full h-40 object-cover rounded-md">
      <p class="mt-2 text-gray-700 text-center">Product Description Here</p>
    </div>
    <div class="flex justify-between items-center mt-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Buy Now</button>
      <span class="text-lg font-semibold text-gray-800">$99.99</span>
    </div>
  </div>

  <!-- Product Card 3 -->
  <div class="bg-white shadow-lg p-4 rounded-lg">
    <div class="flex flex-col items-center">
      <img src="@/assets/car1.jpg" alt="Product Image" class="w-full h-40 object-cover rounded-md">
      <p class="mt-2 text-gray-700 text-center">Product Description Here</p>
    </div>
    <div class="flex justify-between items-center mt-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Buy Now</button>
      <span class="text-lg font-semibold text-gray-800">$99.99</span>
    </div>
  </div>

</div>
</div>

<div class="container mx-auto p-4 mt-64"> <!-- Adjusted margin-top to make space below row 2 -->


<!-- Second Row: 3 Columns -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">

  <!-- Product Card 1 -->
  <div class="bg-white shadow-lg p-4 rounded-lg">
    <div class="flex flex-col items-center">
      <img src="@/assets/car2.jpg" alt="Product Image" class="w-full h-40 object-cover rounded-md">
      <p class="mt-2 text-gray-700 text-center">Product Description Here</p>
    </div>
    <div class="flex justify-between items-center mt-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Buy Now</button>
      <span class="text-lg font-semibold text-gray-800">$99.99</span>
    </div>
  </div>

  <!-- Product Card 2 -->
  <div class="bg-white shadow-lg p-4 rounded-lg">
    <div class="flex flex-col items-center">
      <img src="@/assets/car1.jpg" alt="Product Image" class="w-full h-40 object-cover rounded-md">
      <p class="mt-2 text-gray-700 text-center">Product Description Here</p>
    </div>
    <div class="flex justify-between items-center mt-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Buy Now</button>
      <span class="text-lg font-semibold text-gray-800">$99.99</span>
    </div>
  </div>

  <!-- Product Card 3 -->
  <div class="bg-white shadow-lg p-4 rounded-lg">
    <div class="flex flex-col items-center">
      <img src="@/assets/car3.jpg" alt="Product Image" class="w-full h-40 object-cover rounded-md">
      <p class="mt-2 text-gray-700 text-center">Product Description Here</p>
    </div>
    <div class="flex justify-between items-center mt-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Buy Now</button>
      <span class="text-lg font-semibold text-gray-800">$99.99</span>
    </div>
  </div>
  


</div>





</div>

<button class="relative inline-flex items-center justify-center mb-2 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-black-900 rounded-lg group bg-gray-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative mb-2 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
View all
</span>
</button>





</div>


<!-- row 6 -->

<div class="container mx-auto mb-2 p-4">

<!-- First Row: Headline -->
<div class="text-center text-4xl font-bold mb-6">
   <p> What sets</p> 
   <p> custom cars apart? </p>
</div>

<!-- Second Row: Two Columns -->
<!-- Second Row: Two Columns -->
<div class="flex justify-between items-start">

<!-- First Column: 3 Subcolumns -->
<div class="text-sm font-bold flex flex-col w-1/2 space-y-4 pr-4">
    <div class="bg-white p-4 rounded-lg ">
        <p class="text-black-700">Over 1 Million Listing</p>
        <p class="text-gray-400">Custom cars are modified vehicles that have been altered to reflect unique tastes and preferences. From upgraded engines to personalized paint jobs, these cars stand out on the road. Enthusiasts often invest in customizing their vehicles to enhance performance, aesthetics, and individuality.</p>

    </div>
    <div class="bg-white p-4 rounded-lg ">
        <p class="text-black-700">Personalized Search</p>
        <p class="text-gray-400">Custom cars are modified vehicles that have been altered to reflect unique tastes and preferences. From upgraded engines to personalized paint jobs, these cars stand out on the road. Enthusiasts often invest in customizing their vehicles to enhance performance, aesthetics, and individuality.</p>

    </div>
    <div class="bg-white p-4 rounded-lg">
        <p class="text-black-700">Non-Stop Innovation</p>
        <p class="text-gray-400">Custom cars are modified vehicles that have been altered to reflect unique tastes and preferences. From upgraded engines to personalized paint jobs, these cars stand out on the road. Enthusiasts often invest in customizing their vehicles to enhance performance, aesthetics, and individuality.</p>

    </div>
</div>

<!-- Vertical Line -->
<div class="border-l-2 border-dotted border-gray-500 h-[400px]"></div>


<!-- Second Column: 3 Subcolumns -->
<div class="text-sm font-bold flex flex-col w-1/2 space-y-4 pr-4 ml-8">
    <div class="bg-white p-4 rounded-lg ">
        <p class="text-black-700">Valuable Insights</p>
        <p class="text-gray-400">Custom cars are modified vehicles that have been altered to reflect unique tastes and preferences. From upgraded engines to personalized paint jobs, these cars stand out on the road. Enthusiasts often invest in customizing their vehicles to enhance performance, aesthetics, and individuality.</p>

    </div>
    <div class="bg-white p-4 rounded-lg ">
        <p class="text-black-700">Consumer-First Mentality</p>
        <p class="text-gray-400">Custom cars are modified vehicles that have been altered to reflect unique tastes and preferences. From upgraded engines to personalized paint jobs, these cars stand out on the road. Enthusiasts often invest in customizing their vehicles to enhance performance, aesthetics, and individuality.</p>

    </div>
    <div class="bg-white p-4 rounded-lg">
        <p class="text-black-700">Online Car Appraisal</p>
        <p class="text-gray-400">Custom cars are modified vehicles that have been altered to reflect unique tastes and preferences. From upgraded engines to personalized paint jobs, these cars stand out on the road. Enthusiasts often invest in customizing their vehicles to enhance performance, aesthetics, and individuality.</p>

    </div>
</div>

</div>


</div>



<!-- row 7 -->

<div class="container mx-auto p-6 mt-12">
  <!-- Section Title -->
  <div class="text-center text-4xl font-bold text-gray-900 mb-8">
    Latest News
  </div>

  <!-- News Grid -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

    <!-- News Card 1 -->
    <div class="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
      <img src="@/assets/car1.jpg" alt="Car Image" class="w-full h-52 object-cover">
      <div class="p-5">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Exciting New Model Launch</h3>
        <p class="text-gray-600 text-sm">
          Discover the latest innovation in automotive design. Cutting-edge features and performance.
        </p>
        <div class="flex justify-between items-center mt-5">
          <button class="bg-blue-600 text-white px-5 py-2 rounded-lg transition hover:bg-blue-700">
            Learn More
          </button>
          <span class="text-xl font-semibold text-gray-800">$99.99</span>
        </div>
      </div>
    </div>

    <!-- News Card 2 -->
    <div class="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
      <img src="@/assets/car2.jpg" alt="Car Image" class="w-full h-52 object-cover">
      <div class="p-5">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Revolutionary Electric Car</h3>
        <p class="text-gray-600 text-sm">
          Explore the future of sustainability with our brand-new electric vehicle lineup.
        </p>
        <div class="flex justify-between items-center mt-5">
          <button class="bg-blue-600 text-white px-5 py-2 rounded-lg transition hover:bg-blue-700">
            Learn More
          </button>
          <span class="text-xl font-semibold text-gray-800">$99.99</span>
        </div>
      </div>
    </div>

    <!-- News Card 3 -->
    <div class="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
      <img src="@/assets/car3.jpg" alt="Car Image" class="w-full h-52 object-cover">
      <div class="p-5">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Exclusive Sneak Peek</h3>
        <p class="text-gray-600 text-sm">
          Get a first look at the upcoming high-performance sports car in our latest series.
        </p>
        <div class="flex justify-between items-center mt-5">
          <button class="bg-blue-600 text-white px-5 py-2 rounded-lg transition hover:bg-blue-700">
            Learn More
          </button>
          <span class="text-xl font-semibold text-gray-800">$99.99</span>
        </div>
      </div>
    </div>

  </div>
</div>


<!-- row 8 -->

<div class="mx-2 my-2 flex flex-col border border-black mb-4">

<!-- Row 1: Logo in the middle -->
<div class="flex justify-center items-center py-4">
  <img src="@/assets/carlogo.jpg" alt="Logo" class="h-12">
</div>

<!-- Row 2: 5 columns with small text -->
<div class="px-2 py-2 grid grid-cols-5 gap-4 py-4">
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

<!-- Row 3: Follow us section -->
<div class="py-4">
  <div class="text-center text-lg font-semibold">Follow us</div>
  <div class="flex justify-center space-x-4 mt-2">
    <a href="#" class="text-blue-500">Facebook</a>
    <a href="#" class="text-blue-500">Twitter</a>
    <a href="#" class="text-blue-500">LinkedIn</a>
  </div>
</div>

<!-- Row 4: Footer -->
<div class="py-4 text-center text-sm">
  <p>&copy; 2025 Your Company. All rights reserved.</p>
</div>

</div>








  </div>
</template>

<script >

export default {

  data() {
    return {
      activeTab: 'buy',
      isEnglish: true
    };
  },
  methods: {
    toggleLanguage() {
      this.isEnglish = !this.isEnglish;
    }
  }
};
</script>

<style scoped>
</style>
