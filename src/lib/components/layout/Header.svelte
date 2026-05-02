<script lang="ts">
  import { page } from '$app/stores';
  import { Menu, X, Phone, Mail, MapPin } from 'lucide-svelte';
  
  let mobileMenuOpen = false;
  
  const navigation = [
    {
      name: 'Buy',
      href: '/buy',
      dropdown: [
        { name: 'Search Properties', href: '/properties' },
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
      href: '/communities'
    },
    {
      name: 'About',
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
</script>

<header class="sticky top-0 z-50 bg-white shadow-sm">
  <!-- Top bar -->
  <div class="bg-primary-600 text-white py-2">
    <div class="container mx-auto flex justify-between items-center text-sm">
      <div class="flex items-center gap-4">
        <a href="tel:555-0123" class="flex items-center gap-1 hover:text-primary-100">
          <Phone size={14} />
          (555) 012-3456
        </a>
        <a href="mailto:jan@drjanduffy.com" class="flex items-center gap-1 hover:text-primary-100">
          <Mail size={14} />
          jan@drjanduffy.com
        </a>
      </div>
      <div class="hidden md:flex items-center gap-1">
        <MapPin size={14} />
        Serving Las Vegas and Surrounding Areas
      </div>
    </div>
  </div>

  <!-- Main navigation -->
  <nav class="container mx-auto">
    <div class="flex justify-between items-center py-4">
      <!-- Logo -->
      <a href="/" class="flex items-center">
        <div class="text-2xl font-display font-bold text-primary-600">
          Dr. Jan Duffy
        </div>
        <div class="ml-2 text-sm text-neutral-600">REALTOR®</div>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center gap-8">
        {#each navigation as item}
          <div class="relative group">
            <a 
              href={item.href} 
              class="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
              class:text-primary-600={$page.url.pathname === item.href}
            >
              {item.name}
            </a>
            
            {#if item.dropdown}
              <div class="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div class="py-2">
                  {#each item.dropdown as subItem}
                    <a 
                      href={subItem.href}
                      class="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {subItem.name}
                    </a>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        {/each}
        
        <button class="btn-primary">
          List Your Property
        </button>
      </div>

      <!-- Mobile menu button -->
      <button 
        class="lg:hidden"
        on:click={() => mobileMenuOpen = !mobileMenuOpen}
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
      <div class="lg:hidden border-t">
        <div class="py-4 space-y-2">
          {#each navigation as item}
            <a 
              href={item.href}
              class="block py-2 text-neutral-700 hover:text-primary-600"
              on:click={() => mobileMenuOpen = false}
            >
              {item.name}
            </a>
          {/each}
          <button class="btn-primary w-full mt-4">
            List Your Property
          </button>
        </div>
      </div>
    {/if}
  </nav>
</header>
