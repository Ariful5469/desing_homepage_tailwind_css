<template>
    <div class="mt-2">
      <!-- First Row: Content Bar (Navigation Links) -->
      <div class="bg-neutral-600 text-white py-4">
        <div class="container mx-auto px-4">
          <div class="w-full flex justify-between items-center mt-4 md:mt-0">
            <!-- Logo -->
            <img src="@/assets/carlogo.jpg" alt="Custom Cars Logo" class="h-9 w-16">
            
            <!-- Navigation Links -->
            <ul class="flex justify-center space-x-2">
              <li>
                <NuxtLink to="/" class="text-white hover:text-teal-400 transition-all duration-300 px-3 py-1 rounded text-sm sm:text-sm md:text-base lg:text-lg">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/design_page" class="text-white hover:text-teal-400 transition-all duration-300 px-3 py-1 rounded text-sm sm:text-sm md:text-base lg:text-lg">Design</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category" class="text-white hover:text-teal-400 transition-all duration-300 px-3 py-1 rounded text-sm sm:text-sm md:text-base lg:text-lg">Category</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category1" class="text-white hover:text-teal-400 transition-all duration-300 px-3 py-1 rounded text-sm sm:text-sm md:text-base lg:text-lg">Category1</NuxtLink>
              </li>
              <NuxtLink to="/contact" class="text-white hover:text-teal-400 transition-all duration-300 px-3 py-1 rounded text-sm sm:text-sm md:text-base lg:text-lg">Community</NuxtLink>

            </ul>
  
            <!-- Right Side Icons and User Info -->
            <div class="flex items-center space-x-4">
              <!-- Search Icon -->
              <a href="#" class="text-white hover:text-teal-400 transition-all duration-300">
                <i class="fas fa-search"></i>
              </a>
              <!-- Notification Icon -->
              <a href="#" class="text-white hover:text-teal-400 transition-all duration-300">
                <i class="fas fa-bell"></i>
              </a>
              <!-- Mail Icon -->
              <a href="#" class="text-white hover:text-teal-400 transition-all duration-300">
                <i class="fas fa-envelope"></i>
              </a>
              <!-- User Greeting -->
              <span class="text-white">Hi, <span class="font-semibold">Your Name</span></span>
              <!-- Man Icon (User Icon) -->
              <a href="#" class="text-white hover:text-teal-400 transition-all duration-300">
                <i class="fas fa-user-circle"></i>
              </a>
            </div>
          </div>
  
          <!-- Second Row: About Us Section -->
          <div class="text-white py-12">
            <div class="container mx-auto px-4 text-center">
              <h2 class="text-3xl font-bold mb-4">About Us</h2>
              <p class="text-lg mb-4">We are a team of passionate individuals who love cars. Our goal is to provide you with the best designs and services related to custom cars.</p>
            </div>
          </div>
        </div>
      </div>
  
     <!--2nd row-->

     <div class="mx-4 my-4 px-8 py-8">
    <!-- First Row: Headline -->
    <div class="text-black text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-6">
      Who We Are?
    </div>

    <!-- Second Row: Two Columns -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- First Column: Small letter 5-line sentence -->
      <div class="text-sm text-gray-700">
        <p>We are a team of dedicated professionals committed to delivering high-quality solutions.</p>
        <p>Our mission is to innovate and improve the lives of our customers.</p>
        <p>We believe in sustainable growth and fostering a collaborative environment.</p>
        <p>Our focus is on providing exceptional service with integrity and passion.</p>
        <p>We strive to be the best in everything we do, from customer service to product development.</p>
      </div>

      <!-- Second Column: Another 5-line sentence -->
      <div class="text-sm text-gray-700">
        <p>We are always ready to face new challenges and turn them into opportunities.</p>
        <p>Our approach is customer-centric, focusing on meeting their needs with precision and care.</p>
        <p>We embrace technology to stay ahead in the industry and bring innovative ideas to life.</p>
        <p>Our team works tirelessly to ensure each project exceeds expectations and delivers results.</p>
        <p>We value trust, transparency, and quality in every aspect of our work.</p>
      </div>
    </div>

    <!-- Third Row: Two Columns (Image and Text) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <!-- First Column: Image -->
      <div>
        <img src="@/assets/room1.jpg" alt="About Us Image" class="w-full h-auto rounded-lg shadow-md">
      </div>

      <!-- Second Column: Some Text -->
      <div class="text-lg text-gray-800">
        <p>Our team has been growing steadily, and we are proud of the relationships we’ve built with our clients. With a wealth of experience, we aim to continue innovating in the industry. We look forward to the future with excitement and confidence, ready to tackle the challenges ahead.</p>
      </div>
    </div>
  </div>



      <!-- 3nd row -->

      <div class="mx-4 my-4 px-8 py-8 flex flex-col">
  <!-- First Row: Headline and Text -->
  <div class="bg-white mb-6">
    <!-- Headline -->
    <div class="text-black text-2xl font-bold mb-2">
      Our Team Speaks
    </div>
    <!-- Sub Text -->
    <div class="text-sm text-gray-700">
      Meet the voices behind our success. Our team is made up of dedicated professionals working towards delivering exceptional results. Here's what some of them have to say:
    </div>
  </div>

  <!-- Second Row: Two Columns with Two People Speaking -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
    <!-- First Column: First Person -->
    <div class="flex items-start">
      <img src="@/assets/man1.jpg" alt="Person 1" class="w-16 h-16 rounded-full mr-4">
      <div class="text-gray-800">
        <div class="font-semibold">John Doe</div>
        <p class="text-sm">
          "Our goal is to continuously innovate and provide solutions that exceed expectations. I believe we’re just getting started."
        </p>
      </div>
    </div>

    <!-- Second Column: Second Person -->
    <div class="flex items-start">
      <img src="@/assets/man2.jpg" alt="Person 2" class="w-16 h-16 rounded-full mr-4">
      <div class="text-gray-800">
        <div class="font-semibold">Jane Smith</div>
        <p class="text-sm">
          "Collaboration is key to achieving success, and I’m proud to be part of a team that truly values this. Together, we can do amazing things."
        </p>
      </div>
    </div>
  </div>
</div>




   

<!--footer-->
<div class=" bg-neutral-500 text-white mx-2 my-2 flex flex-col border border-black mb-4">

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
  
  <script setup>
  // Your script goes here (like methods for toggling language, etc.)
  </script>
  
  <style scoped>
  /* You can add any additional custom styles here if needed */
  </style>
  