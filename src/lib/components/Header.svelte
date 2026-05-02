<script lang="ts">
  import { page } from '$app/stores';
  import { Menu, X, Phone, ChevronDown } from 'lucide-svelte';
  
  let mobileMenuOpen = false;
  let dropdownOpen = '';
  
  const phoneNumber = '(702) 222-1964';
  
  const navigation = [
    {
      name: 'Buy',
      href: '/buy',
      dropdown: [
        { name: 'Search Homes', href: '/properties' },
        { name: 'New Listings', href: '/properties?sort=newest' },
        { name: 'Open Houses', href: '/open-houses' },
        { name: 'Buyer Resources', href: '/buyers-guide' }
      ]
    },
    {
      name: 'Sell',
      href: '/sell',
      dropdown: [
        { name: 'Home Valuation', href: '/home-valuation' },
        { name: 'Marketing Plan', href: '/marketing' },
        { name: 'Seller Resources', href: '/sellers-guide' }
      ]
    },
    {
      name: 'Communities',
      href: '/communities',
      dropdown: [
        { name: 'West Summerlin', href: '/communities/west-summerlin' },
        { name: 'The Ridges', href: '/communities/the-ridges' },
        { name: 'Red Rock Country Club', href: '/communities/red-rock' },
        { name: 'Anthem Country Club', href: '/communities/anthem' },
        { name: 'MacDonald Highlands', href: '/communities/macdonald' },
        { name: 'Seven Hills', href: '/communities/seven-hills' }
      ]
    },
    {
      name: 'About Dr. Duffy',
      href: '/about'
    },
    {
      name: 'Blog',
      href: '/blog'
    },
    {
      name: 'Contact',
      href: '/contact'
    }
  ];
  
  function toggleDropdown(name: string) {
    dropdownOpen = dropdownOpen === name ? '' : name;
  }
  
  function closeDropdowns() {
    dropdownOpen = '';
  }
  
  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<header class="sticky top-0 z-50 bg-white shadow-lg">
  <!-- Top contact bar -->
  <div class="bg-primary-600 text-white py-2">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center text-sm">
        <div class="flex items-center gap-4">
          <a href="tel:{phoneNumber}" class="flex items-center gap-1 hover:text-primary-100 transition-colors">
            <Phone size={14} />
            Call Dr. Duffy: {phoneNumber}
          </a>
          <span class="hidden md:inline">|</span>
          <a href="mailto:drduffy@bhhsnv.com" class="hidden md:flex items-center gap-1 hover:text-primary-100 transition-colors">
            drduffy@bhhsnv.com
          </a>
        </div>
        <div class="hidden lg:flex items-center gap-1 text-primary-100">
          <span>Serving Las Vegas & Surrounding Areas</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Main navigation -->
  <nav class="container mx-auto px-4">
    <div class="flex justify-between items-center py-4">
      <!-- Logo/Branding -->
      <a href="/" class="flex items-center group">
        <div class="text-2xl lg:text-3xl font-display font-bold text-primary-600 group-hover:text-primary-700 transition-colors">
          Dr. Jan Duffy
        </div>
        <div class="ml-2 text-sm lg:text-base text-neutral-600 font-medium">
          REALTOR<sup>®</sup>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center gap-8">
        {#each navigation as item}
          <div class="relative" on:mouseleave={closeDropdowns}>
            <button
              on:click={() => toggleDropdown(item.name)}
              class="flex items-center gap-1 text-neutral-700 hover:text-primary-600 font-medium transition-colors py-2"
              class:text-primary-600={$page.url.pathname.startsWith(item.href)}
            >
              {item.name}
              {#if item.dropdown}
                <ChevronDown size={16} class="transition-transform" class:rotate-180={dropdownOpen === item.name} />
              {/if}
            </button>
            
            {#if item.dropdown && dropdownOpen === item.name}
              <div class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-neutral-200 py-2">
                {#each item.dropdown as subItem}
                  <a 
                    href={subItem.href}
                    class="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    on:click={closeDropdowns}
                  >
                    {subItem.name}
                  </a>
                {/each}
              </div>
            {/if}
          </div>
        {/each}
        
        <!-- CTA Button -->
        <a href="/contact" class="btn-primary">
          Get Started
        </a>
      </div>

      <!-- Mobile menu button -->
      <button 
        class="lg:hidden p-2 text-neutral-700 hover:text-primary-600 transition-colors"
        on:click={() => mobileMenuOpen = !mobileMenuOpen}
        aria-label="Toggle mobile menu"
      >
        {#if mobileMenuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </button>
    </div>

    <!-- Mobile Navigation -->
    {#if mobileMenuOpen}
      <div class="lg:hidden border-t bg-white">
        <div class="py-4 space-y-2">
          {#each navigation as item}
            <div>
              <a 
                href={item.href}
                class="block py-3 px-4 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors"
                on:click={closeMobileMenu}
              >
                {item.name}
              </a>
              
              {#if item.dropdown}
                <div class="ml-4 space-y-1">
                  {#each item.dropdown as subItem}
                    <a 
                      href={subItem.href}
                      class="block py-2 px-4 text-sm text-neutral-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                      on:click={closeMobileMenu}
                    >
                      {subItem.name}
                    </a>
                  {/each}
                </div>
              {/if}
            </div>
          {/each}
          
          <!-- Mobile CTA -->
          <div class="pt-4 border-t">
            <a href="/contact" class="btn-primary w-full text-center block" on:click={closeMobileMenu}>
              Get Started
            </a>
          </div>
          
          <!-- Mobile Contact Info -->
          <div class="pt-4 border-t">
            <a href="tel:{phoneNumber}" class="flex items-center gap-2 py-2 px-4 text-primary-600 font-medium">
              <Phone size={16} />
              Call Dr. Duffy: {phoneNumber}
            </a>
            <a href="mailto:drduffy@bhhsnv.com" class="block py-2 px-4 text-neutral-600 text-sm">
              drduffy@bhhsnv.com
            </a>
          </div>
        </div>
      </div>
    {/if}
  </nav>
</header>

<style>
  .btn-primary {
    @apply bg-primary-600 text-white px-6 py-3 rounded-lg font-medium 
           hover:bg-primary-700 transition-colors duration-200 
           focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
  }
</style>