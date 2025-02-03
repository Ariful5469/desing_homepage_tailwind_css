<template>
    <div class="flex flex-col">
      <div class="grid grid-cols-2 h-screen p-8 bg-gray-100 relative">
        <!-- First Column -->
        <div class="relative h-screen p-8 bg-gray-100">
    <div class="flex flex-col space-y-16">
      <!-- First Row: Logo -->
      <div class="flex items-start">
        <div class="border border-black bg-black text-white text-4xl font-bold px-2 py-4">PR</div>
      </div>

      <!-- Second Row: Headline -->
      <div class="flex items-start">
  <div class="text-8xl font-bold space-y-6"> 
    <div>Build.</div>
    <div>Review.</div>
    <div>Ship.</div>
  </div>
</div>


<div class="flex flex-col font-sm">
  <p class="text-gray-700 text-2xl max-w-md">
    The next big thing starts here.
  </p>
  <p class="text-gray-700 text-2xl max-w-md">
    Get Prodify and be the first to market
  </p>
  <p class="text-gray-700 text-2xl max-w-md">
      with an integrated product that you love.
  </p>
</div>




      <!-- Fourth Row: Button -->
      <div class="flex items-start">
        <button class="bg-pink-500 text-white px-32 py-4 rounded-lg font-bold">Let's Build</button>
      </div>
    </div>
  </div>
     







<!-- Second Column -->
<div
  class="flex flex-col mx-2 bg-gray-100 w-full"
  :style="{
    backgroundImage: 'url(' + require('@/assets/bg.jpg') + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh'
  }"
>
  <!-- Navbar at the top -->
  <div class="flex flex-col items-center text-stone-50 pb-6 z-10 font-bold">
    <nav class="flex space-x-6 text-lg">
      <a class="mt-6" href="#">Home</a>
      <a class="mt-6" href="#">About Us</a>
      <a class="mt-6" href="#">Pricing</a>
      <a class="mt-6" href="#">Resources</a>
      <button class="border border-white bg-gray-300 px-4 py-2 text-lg mt-4">Sign In</button>
    </nav>
  </div>

  <!-- Absolute Div with Middle 1/3 of Height and 1/2 of Width -->
  <div class="absolute top-1/3 right-1/4 bg-white p-6 shadow-lg rounded-lg z-0" style="height: 56vh; width: 35%; p-8">
    <div class="space-y-4">
      <!-- First Row - Empty Box -->
      <div class="border border-gray-300 h-8 mx-16 p-2"></div>

      
      <!-- Second Row -->
      <div class="grid grid-cols-3 gap-4">
        <!-- First Column -->
        <div class="flex flex-col space-x-4 space-y-4 mt-1 p-8">
  <!-- First Column: Two Pictures with one being absolute -->
  <div class="relative w-full">
    <!-- Relative Image -->
    <img src="@/assets/leaf.jpg" alt="" class="w-full h-96 rounded-lg" />
    
    <!-- Absolute Image (Logo) with slight overflow at the top-left corner -->
    <div class="absolute -top-8 -left-8 rounded-full p-4">
      <img src="@/assets/car2.jpg" alt="Logo" class="w-16 h-16 rounded-full" />
    </div>
  </div>

  <!-- Second Column: Grid with Icon in the center -->
  <div class="flex flex-col w-full  px-4">
    <div class="flex- place-items-start">
      <div class="border border-gray-300 p-6 rounded-lg">
        <!-- Icon in the center -->
        <img src="https://img.icons8.com/?size=100&id=41562&format=png&color=000000" alt="Icon" class="w-24 h-24 mx-auto" />
      </div>
    </div>
  </div>
</div>



        
        <!-- Second Column -->
        <div class="space-y-2">
          <input type="text" placeholder="Search..." class="border border-gray-300 w-full p-2" />
          <div class="grid grid-cols-2 gap-2">
            <div class="border border-gray-300 h-12"></div>
            <div class="border border-gray-300 h-12"></div>
          </div>
          <div class="border border-gray-300 p-4">Some text here</div>
        </div>
        
        <!-- Third Column -->
        <div class="relative space-y-2">
          <div class="flex space-x-2">
            <div class="border border-gray-300 p-2">🔔</div>
            <div class="border border-gray-300 p-2">⚙️</div>
          </div>
          <div class="border-dotted border-2 border-gray-400 p-4">Dotted Box</div>
          <div class="border border-gray-300 p-4">Another Box</div>
        </div>
      </div>



    </div>
  </div>
</div>




      </div>








<!--2nd row-->

<div class="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
    <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div class="text-left">
            <h2
                class="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                Hero
                <span class="font-bold text-blue-500">Section</span>
                <span class="text-xl font-semibold rounded-full text-blueGray-500">2.0</span>
            </h2>
            <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate dignissim augue, Nullam vulputate dignissim augue.
            </p>
            <div class="mt-5 sm:flex md:mt-8">
                <div class="rounded-md shadow"><a href=""
                        class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                        Getting started
                    </a></div>
                <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <a href=""
                        class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                        Contribute
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div class="relative w-full p-3 rounded  md:p-8">
            <div class="rounded-lg bg-white text-black w-full">
                <img src="https://picsum.photos/400/300" />
            </div>
        </div>
    </div>
</div>


<!--3rd row-->
<div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

<!-- Image Column -->
<div class="w-full h-64 lg:w-1/2 lg:h-auto">
    <img class="h-full w-full object-cover" src="https://picsum.photos/id/1018/2000" alt="Winding mountain road">
</div>
<!-- Close Image Column -->

<!-- Text Column -->
<div
    class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
    <!-- Text Wrapper -->
    <div class="flex flex-col p-12 md:px-16">
        <h2 class="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Winding Mountain Road</h2>
        <p class="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
        </p>
        <!-- Button Container -->
        <div class="mt-8">
            <a href="#"
                class="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                More</a>
        </div>
    </div>
    <!-- Close Text Wrapper -->
</div>
<!-- Close Text Column -->

</div>



<!--2nd row -->

<div class="flex items-center justify-center p-6">
  <!-- Author: FormBold Team -->
  <!-- Learn More: https://formbold.com -->
  <div class="bg-white max-w-xl w-full p-8">
    <div class="mb-10">
      <h3 class="text-3xl font-extrabold text-gray-800 mb-4">Subscribe Now to Get Our Latest Offers!</h3>
      <p class="text-base text-gray-500">There are many variations of passages of Lorem Ipsum available but the majority have.</p>
    </div>
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email address"
        class="w-full p-4 rounded-lg border border-gray-300 bg-gray-50 text-gray-600 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
      <button
        type="submit"
        class="w-full mt-6 p-4 rounded-lg text-white bg-indigo-600 text-base font-medium hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Subscribe Now
      </button>
    </form>
  </div>
</div>











<!--row3 form-->
<div class="flex items-center justify-center p-2">
  <!-- Author: FormBold Team -->
  <!-- Learn More: https://formbold.com -->
  <div class="w-full max-w-4xl bg-white p-12 rounded-lg"> <!-- Increased padding and width-->
    <div class="flex justify-center mb-12"> <!-- Centering the image -->
      <img src="@/assets/car2.jpg" class="w-1/2 h-auto"> <!-- Adjust image size -->
    </div>

    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900">Register now</h2>
        <p class="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>

      <div class="flex gap-5 mb-4">
        <div class="w-1/2">
          <label for="firstname" class="block text-sm text-gray-600">First name</label>
          <input type="text" name="firstname" id="firstname" class="w-full p-4 border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="w-1/2">
          <label for="lastname" class="block text-sm text-gray-600">Last name</label>
          <input type="text" name="lastname" id="lastname" class="w-full p-4 border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
      </div>

      <div class="flex gap-5 mb-4">
        <div class="w-1/2">
          <label for="email" class="block text-sm text-gray-600">Email</label>
          <input type="email" name="email" id="email" class="w-full p-4 border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="w-1/2">
          <label for="phone" class="block text-sm text-gray-600">Phone number</label>
          <input type="text" name="phone" id="phone" class="w-full p-4 border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
      </div>

      <div class="mb-4">
        <label for="address" class="block text-sm text-gray-600">Street Address</label>
        <input type="text" name="address" id="address" class="w-full p-4 border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>

      <div class="mb-4">
        <label for="address2" class="block text-sm text-gray-600">Street Address Line 2</label>
        <input type="text" name="address2" id="address2" class="w-full p-4 border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>

      <div class="flex gap-5 mb-4">
        <div class="w-1/2">
          <label for="state" class="block text-sm text-gray-600">State/Province</label>
          <input type="text" name="state" id="state" class="w-full p-4 border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="w-1/2">
          <label for="country" class="block text-sm text-gray-600">Country</label>
          <input type="text" name="country" id="country" class="w-full p-4 border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
      </div>

      <div class="flex gap-5 mb-4">
        <div class="w-1/2">
          <label for="post" class="block text-sm text-gray-600">Post/Zip code</label>
          <input type="text" name="post" id="post" class="w-full p-4 border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="w-1/2">
          <label for="area" class="block text-sm text-gray-600">Area Code</label>
          <input type="text" name="area" id="area" class="w-full p-4 border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
      </div>

      <div class="flex items-center mb-6">
        <input type="checkbox" id="supportCheckbox" class="h-5 w-5 text-indigo-600 border-gray-300 rounded" />
        <label for="supportCheckbox" class="ml-2 text-sm text-gray-600">
          I agree to the defined <a href="#" class="text-indigo-600">terms, conditions, and policies</a>
        </label>
      </div>

      <button type="submit" class="w-full py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Register Now</button>
    </form>
  </div>
</div>






    </div>
  </template>
  
  <script setup>
  // Vue 3 Composition API script setup
  </script>
  
  <style scoped>
  /* You can add any additional custom styles here if needed */
  </style>