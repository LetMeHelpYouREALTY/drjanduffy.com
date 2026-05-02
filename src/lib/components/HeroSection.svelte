<script lang="ts">
  import { Search, MapPin, DollarSign, Home, Bed, Bath } from 'lucide-svelte';
  
  let searchForm = {
    location: '',
    minPrice: '',
    maxPrice: '',
    propertyType: '',
    beds: '',
    baths: ''
  };
  
  const priceRanges = [
    { value: '', label: 'Any Price' },
    { value: '0-250000', label: 'Under $250K' },
    { value: '250000-500000', label: '$250K - $500K' },
    { value: '500000-750000', label: '$500K - $750K' },
    { value: '750000-1000000', label: '$750K - $1M' },
    { value: '1000000-1500000', label: '$1M - $1.5M' },
    { value: '1500000-2000000', label: '$1.5M - $2M' },
    { value: '2000000+', label: '$2M+' }
  ];
  
  const propertyTypes = [
    { value: '', label: 'Any Type' },
    { value: 'single-family', label: 'Single Family' },
    { value: 'condo', label: 'Condo' },
    { value: 'townhome', label: 'Townhome' },
    { value: 'land', label: 'Land' },
    { value: 'multi-family', label: 'Multi-Family' }
  ];
  
  const bedOptions = [
    { value: '', label: 'Any Beds' },
    { value: '1', label: '1+' },
    { value: '2', label: '2+' },
    { value: '3', label: '3+' },
    { value: '4', label: '4+' },
    { value: '5', label: '5+' }
  ];
  
  const bathOptions = [
    { value: '', label: 'Any Baths' },
    { value: '1', label: '1+' },
    { value: '1.5', label: '1.5+' },
    { value: '2', label: '2+' },
    { value: '2.5', label: '2.5+' },
    { value: '3', label: '3+' },
    { value: '4', label: '4+' }
  ];
  
  const stats = [
    { value: '247', label: 'Active Listings', icon: Home },
    { value: '89', label: 'Sold This Year', icon: DollarSign },
    { value: '21', label: 'Avg Days on Market', icon: Search }
  ];
  
  function handleSearch() {
    // Build search URL with parameters
    const params = new URLSearchParams();
    if (searchForm.location) params.set('location', searchForm.location);
    if (searchForm.minPrice) params.set('minPrice', searchForm.minPrice);
    if (searchForm.maxPrice) params.set('maxPrice', searchForm.maxPrice);
    if (searchForm.propertyType) params.set('type', searchForm.propertyType);
    if (searchForm.beds) params.set('beds', searchForm.beds);
    if (searchForm.baths) params.set('baths', searchForm.baths);
    
    const searchUrl = `/properties?${params.toString()}`;
    window.location.href = searchUrl;
  }
</script>

<!-- Hero Section -->
<section class="relative h-[700px] flex items-center justify-center overflow-hidden">
  <!-- Background Image -->
  <div class="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop&crop=center" 
      alt="Las Vegas skyline"
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-600/60"></div>
  </div>
  
  <div class="relative container mx-auto px-4 text-center text-white z-10">
    <!-- Tagline -->
    <div class="mb-8">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
        Your Trusted Las Vegas Real Estate Expert
      </h1>
      <p class="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
        Find your dream home in Las Vegas with Dr. Jan Duffy's expert guidance and local market knowledge
      </p>
    </div>
    
    <!-- Search Form -->
    <div class="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8">
      <form on:submit|preventDefault={handleSearch} class="space-y-6">
        <!-- Location Input -->
        <div class="relative">
          <MapPin size={20} class="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            bind:value={searchForm.location}
            placeholder="City, Neighborhood, ZIP, or MLS#"
            class="w-full pl-12 pr-4 py-4 text-lg border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-800"
          />
        </div>
        
        <!-- Search Filters Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <!-- Min Price -->
          <div class="relative">
            <DollarSign size={18} class="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            <select
              bind:value={searchForm.minPrice}
              class="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-800 appearance-none bg-white"
            >
              {#each priceRanges as range}
                <option value={range.value}>{range.label}</option>
              {/each}
            </select>
          </div>
          
          <!-- Max Price -->
          <div class="relative">
            <DollarSign size={18} class="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            <select
              bind:value={searchForm.maxPrice}
              class="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-800 appearance-none bg-white"
            >
              {#each priceRanges as range}
                <option value={range.value}>{range.label}</option>
              {/each}
            </select>
          </div>
          
          <!-- Property Type -->
          <div class="relative">
            <Home size={18} class="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            <select
              bind:value={searchForm.propertyType}
              class="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-800 appearance-none bg-white"
            >
              {#each propertyTypes as type}
                <option value={type.value}>{type.label}</option>
              {/each}
            </select>
          </div>
          
          <!-- Beds -->
          <div class="relative">
            <Bed size={18} class="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            <select
              bind:value={searchForm.beds}
              class="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-800 appearance-none bg-white"
            >
              {#each bedOptions as bed}
                <option value={bed.value}>{bed.label}</option>
              {/each}
            </select>
          </div>
          
          <!-- Baths -->
          <div class="relative">
            <Bath size={18} class="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            <select
              bind:value={searchForm.baths}
              class="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-800 appearance-none bg-white"
            >
              {#each bathOptions as bath}
                <option value={bath.value}>{bath.label}</option>
              {/each}
            </select>
          </div>
        </div>
        
        <!-- Search Button -->
        <div class="text-center">
          <button
            type="submit"
            class="bg-primary-600 hover:bg-primary-700 text-white px-12 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 mx-auto"
          >
            <Search size={20} />
            Search Properties
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

<!-- Quick Stats Bar -->
<section class="bg-primary-600 text-white py-8">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {#each stats as stat}
        <div class="flex items-center justify-center gap-4">
          <svelte:component this={stat.icon} size={32} class="text-primary-200" />
          <div>
            <div class="text-3xl font-bold text-white">{stat.value}</div>
            <div class="text-primary-100 text-sm font-medium">{stat.label}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Custom select arrow styling */
  select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
  }
</style>
