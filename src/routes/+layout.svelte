<script>
  import '../app.css';
  import Header from '$lib/components/layout/Header.svelte';
</script>

<Header />

<main>
  <slot />
</main>

<footer class="bg-neutral-800 text-white py-12 mt-20">
  <div class="container mx-auto grid md:grid-cols-4 gap-8">
    <div>
      <h3 class="font-display text-2xl mb-4">Dr. Jan Duffy</h3>
      <p class="text-neutral-400">Your trusted real estate expert with over 20 years of experience.</p>
    </div>
    
    <div>
      <h4 class="font-semibold mb-4">Quick Links</h4>
      <ul class="space-y-2 text-neutral-400">
        <li><a href="/properties" class="hover:text-white">Search Properties</a></li>
        <li><a href="/home-valuation" class="hover:text-white">Home Valuation</a></li>
        <li><a href="/communities" class="hover:text-white">Communities</a></li>
        <li><a href="/blog" class="hover:text-white">Blog</a></li>
      </ul>
    </div>
    
    <div>
      <h4 class="font-semibold mb-4">Contact</h4>
      <ul class="space-y-2 text-neutral-400">
        <li>(555) 012-3456</li>
        <li>jan@drjanduffy.com</li>
        <li>123 Main St, Suite 100</li>
        <li>Las Vegas, NV 89101</li>
      </ul>
    </div>
    
    <div>
      <h4 class="font-semibold mb-4">Follow Us</h4>
      <div class="flex gap-4">
        <!-- Add social media icons here -->
      </div>
    </div>
  </div>
  
  <div class="container mx-auto mt-8 pt-8 border-t border-neutral-700 text-center text-neutral-400">
    <p>&copy; 2024 Dr. Jan Duffy Realtor. All rights reserved.</p>
  </div>
</footer>
