<template>
  <div class="flex flex-col">

<!-- Row 00 -->
<div class="flex flex-col justify-center bg-stone-800">
        <!-- Hero Section -->
        <div class="flex flex-col mx-4 w-full">
          <!-- Header -->
          <header class="bg-stone-900 py-6">
            <div class="container mx-auto px-8 flex flex-col md:flex-row justify-center items-center flex-wrap">
              
              <!-- Logo and Title -->
              <div class="flex justify-center items-center mb-12 space-x-2">
                <!-- Logo -->
                <img src="@/assets/carlogo.jpg" alt="Custom Cars Logo" class="h-9 w-16">
                <!-- Custom Cars Title -->
                <div class="text-2xl font-bold text-white">
                  <span class="text-yellow-400">Custom</span> <span class="text-red-500">Cars</span>
                </div>
              </div>
  
              <!-- Navigation -->
              <div class="w-full flex justify-center mt-4 md:mt-0">
                <ul class="flex flex-nowrap justify-center md:justify-between w-full max-w-4xl space-x-2">
                  <li>
                    <NuxtLink to="/" class="text-white hover:text-teal-400 border-2 border-white hover:border-teal-400 transition-all duration-300 px-3 py-1 rounded text-sm sm:text-sm md:text-base lg:text-lg">Home</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/design_page" class="text-white hover:text-teal-400 border-2 border-white hover:border-teal-400 transition-all duration-300 px-3 py-1 rounded text-sm sm:text-sm md:text-base lg:text-lg">Design</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/category" class="text-white hover:text-teal-400 border-2 border-white hover:border-teal-400 transition-all duration-300 px-3 py-1 rounded text-sm sm:text-sm md:text-base lg:text-lg">Category</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/category1" class="text-white hover:text-teal-400 border-2 border-white hover:border-teal-400 transition-all duration-300 px-3 py-1 rounded text-sm sm:text-sm md:text-base lg:text-lg">Category1</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/contact" class="text-white hover:text-teal-400 border-2 border-white hover:border-teal-400 transition-all duration-300 px-3 py-1 rounded text-sm sm:text-sm md:text-base lg:text-lg">Community</NuxtLink>
                  </li>
                </ul>
              </div>
  
            </div>
          </header>
        </div>
      </div>


<!-- Another Row -->
<div class="space-y-2 flex flex-col justify-center bg-gray-500 py-12">
  <div class="space-x-4 flex flex-row max-w-6xl mx-auto px-4">
    <!-- Card on the left (takes 50% width) -->
    <div class="antialiased text-gray-900 w-full  flex">
      <div class="bg-gray-200 p-8 flex rounded-lg shadow-2xl hover:shadow-xl  w-full">
        <div class="bg-rose-200 rounded-lg overflow-hidden flex flex-col w-full">
          <!-- Image with adjusted height -->
          <img class="h-48 w-full object-flex object-center" src="@/assets/car1.jpg" alt="Beautiful Car" />
          
          <div class="p-4 flex-grow">
            <div class="flex items-baseline">
              <span class="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">New</span>
              <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                3 beds &bull; 2 baths
              </div>
            </div>
            <h4 class="mt-2 font-semibold text-lg leading-tight truncate text-gray-900">Beautiful Car</h4>

            <div class="mt-1 text-gray-700">
              <span class="font-semibold">$1,900.00</span>
              <span class="text-sm text-gray-600">/ wk</span>
            </div>
            <div class="mt-2 flex items-center">
              <span class="text-teal-600 font-semibold">
                <span>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </span>
              </span>
              <span class="ml-2 text-gray-600 text-sm">34 reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right side text with design (takes 50% width) -->
    <div class="flex flex-col justify-center p-4 w-full md:w-1/2 lg:w-1/2 bg-gray-300 rounded-lg shadow-lg min-h-full">
      <h2 class="text-white hover:text-teal-400 border-2 border-emerald-400 hover:border-teal-400 transition-all duration-300 px-4 py-2 rounded text-3xl font-semibold text-orange-500 mb-6">
        <h2 class="bg-color">Explore Our</h2><h2 class="text-red-500">Amazing</h2><h2 class="text-stone-900">Cars!</h2>
    </h2>
      <p class="text-gray-700 mb-6">Our collection of luxurious cars is available for you to enjoy. Take a look at our carefully selected models for a premium experience. Choose your dream car today!</p>
      
      <!-- Call to Action Button -->
      <!-- Button code here -->
    </div>
  </div>
</div>






 <!--row3-->

 <div>
        <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
    <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Services</h2>
    <p class="mb-12 text-lg text-gray-500">Here is a few of the awesome Services we provide.</p>
    <div class="flex flex-col w-full">
        <div class="flex flex-col w-full mb-10 sm:flex-row">
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">DAPP Development</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">A decentralized application (dapp) is an application built on a
                            decentralized network that combines a smart contract and a frontend user interface.</p>
                    </div>
                </div>
            </div>
            <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Web 3.0 Development</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Web 3.0 is the third generation of Internet services that will
                            focus on understanding and analyzing data to provide a semantic web.</p>
                    </div>
                </div>
            </div>
        </div>





        <!-- changed -->
        <div class="flex flex-col sm:flex-row md:flex-row xl:flex-row">
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Project Audit</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">A Project Audit is a formal review of a project, which is intended
                            to assess the extent up to which project management standards are being upheld.</p>
                    </div>
                </div>
            </div>
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Hacking / RE</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">A security hacker is someone who explores methods for breaching
                            defenses and exploiting weaknesses in a computer system or network.</p>
                    </div>
                </div>
            </div>
            <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Bot/Script Development</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Bot development frameworks were created as advanced software tools
                            that eliminate a large amount of manual work and accelerate the development process.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>









    <!--row1-->
    <section class="flex flex-row sm:flex-row md:flex-row xl:flex-row 2xl:flex-row py-16 bg-background">
  <div class="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <!-- Feature 1: User Authentication -->
    <div class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
      <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
        <img src="https://img.icons8.com/?size=100&id=59925&format=png&color=000000" alt="User Authentication Icon" class="h-12 w-12" />
        <div class="space-y-2">
          <h3 class="font-bold">User Authentication</h3>
          <p class="text-sm text-muted-foreground">Secure login and registration system for users and admins.</p>
        </div>
      </div>
    </div>

    <!-- Feature 2: Customizable Theme -->
    <div class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
      <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
        <img src="https://img.icons8.com/?size=100&id=FQlr_bFSqEdG&format=png&color=000000" alt="Customizable Theme Icon" class="h-12 w-12" />
        <div class="space-y-2">
          <h3 class="font-bold">Customizable Theme</h3>
          <p class="text-sm text-muted-foreground">Switch between dark and light mode to enhance user experience.</p>
        </div>
      </div>
    </div>

    <!-- Feature 3: Enhanced Security -->
    <div class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
      <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
        <img src="https://img.icons8.com/?size=100&id=zh7me4lnKerp&format=png&color=000000" alt="Enhanced Security Icon" class="h-12 w-12" />
        <div class="space-y-2">
          <h3 class="font-bold">Enhanced Security</h3>
          <p class="text-sm text-muted-foreground">Our platform ensures security with end-to-end encryption and regular audits.</p>
        </div>
      </div>
    </div>
  </div>
</section>




    <!--row2-->
    <div class="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<!-- card 1 -->
<div class="flex flex-col p-4 max-w-sm">
    <div> </div>
    <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
        <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <!-- New Icon -->
                <img src="https://img.icons8.com/?size=100&id=118389&format=png&color=000000" alt="Icon" class="w-5 h-5">
            </div>
            <h2 class="text-white dark:text-white text-lg font-medium">Feature 1</h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
            </p>
            <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
</div>

<!-- card 2 -->
<div class="p-4 max-w-sm">
    <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
        <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <!-- New Icon -->
                <img src="https://img.icons8.com/?size=100&id=118389&format=png&color=000000" alt="Icon" class="w-5 h-5">
            </div>
            <h2 class="text-white dark:text-white text-lg font-medium">Feature 2</h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
            </p>
            <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
</div>

<!-- card 3 -->
<div class="p-4 max-w-sm">
    <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
        <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <!-- New Icon -->
                <img src="https://img.icons8.com/?size=100&id=118389&format=png&color=000000" alt="Icon" class="w-5 h-5">
            </div>
            <h2 class="text-white dark:text-white text-lg font-medium">Feature 3</h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
                Learn about the latest trends in the tech industry and discover new innovations. This feature helps you stay updated.
            </p>
            <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
</div>

</div>



   

    <!--row4-->
<div>
    <section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
   
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p class="leading-relaxed">Downloads</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">1.3K</h2>
          <p class="leading-relaxed">Users</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
          <p class="leading-relaxed">Files</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
          <p class="leading-relaxed">Places</p>
        </div>
      </div>
    </div>
  </div>
</section>



</div>



<!--new row-->

<div>



</div>



    <!--row5-->
    <!-- Parent Container (Relative) -->
    <div class="relative w-full h-64 bg-red-200 flex items-center justify-center p-4 mx-2 rounded-lg">
  
  <!-- Parent Text -->
  <h2 class="border-b-2 border-red-300 text-xl font-bold text-gray-800">
    Stay updated with our latest news.
</h2>


  <!-- Absolute Positioned Text -->
  <div class="absolute bottom-2 right-2 bg-blue-500 text-white p-3 rounded-lg shadow-lg">
    <p class="text-lg font-semibold">contact with us</p>
    <p class="text-sm text-gray-200">if you ask anything,please contact with us</p>
  </div>

</div>


   <!--row 6-->

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

<script lang="ts" setup>

</script>

<style>

</style>