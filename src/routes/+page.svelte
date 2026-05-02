<script lang="ts">
  import PropertyCard from '$lib/components/property/PropertyCard.svelte';
  import ContactForm from '$lib/components/forms/ContactForm.svelte';
  import { Search, Home, TrendingUp, Users } from 'lucide-svelte';
  
  // Sample data - replace with real data
  const featuredProperties = [
    {
      id: '1',
      title: 'Modern Downtown Condo',
      price: 450000,
      address: '123 Main St',
      city: 'Downtown',
      state: 'NV',
      beds: 2,
      baths: 2,
      sqft: 1200,
      imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600',
      featured: true
    },
    {
      id: '2',
      title: 'Suburban Family Home',
      price: 650000,
      address: '456 Oak Ave',
      city: 'Westside',
      state: 'NV',
      beds: 4,
      baths: 3,
      sqft: 2400,
      imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600'
    },
    {
      id: '3',
      title: 'Luxury Estate',
      price: 1200000,
      address: '789 Hills Dr',
      city: 'Hillside',
      state: 'NV',
      beds: 5,
      baths: 4,
      sqft: 4500,
      imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600'
    }
  ];
  
  const stats = [
    { icon: Home, value: '500+', label: 'Properties Sold' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '98%', label: 'Sale Price Ratio' },
    { icon: Search, value: '21', label: 'Days Average' }
  ];
</script>

<svelte:head>
  <title>Dr. Jan Duffy Realtor - Las Vegas Real Estate</title>
  <meta name="description" content="Find your dream home with Dr. Jan Duffy, your trusted Las Vegas real estate expert with over 20 years of experience." />
</svelte:head>

<!-- Hero Section -->
<section class="relative h-[600px] flex items-center justify-center">
  <div class="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920" 
      alt="Luxury home"
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-600/50"></div>
	</div>
	
  <div class="relative container mx-auto text-center text-white">
    <h1 class="font-display text-5xl md:text-6xl font-bold mb-4">
      Find Your Dream Home
			</h1>
    <p class="text-xl mb-8">
      With Dr. Jan Duffy, Your Trusted Real Estate Expert
    </p>
    
    <!-- Quick Search -->
    <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-6">
      <form class="grid md:grid-cols-4 gap-4">
        <input 
          type="text" 
          placeholder="City, Neighborhood, or ZIP"
          class="md:col-span-2 px-4 py-2 border rounded-lg text-neutral-800"
        />
        <select class="px-4 py-2 border rounded-lg text-neutral-800">
          <option>All Types</option>
          <option>House</option>
          <option>Condo</option>
          <option>Townhome</option>
        </select>
        <button class="btn-primary">
          Search
        </button>
      </form>
		</div>
	</div>
</section>

<!-- Stats Section -->
<section class="py-16 bg-primary-600">
  <div class="container mx-auto">
    <div class="grid md:grid-cols-4 gap-8">
      {#each stats as stat}
        <div class="text-center text-white">
          <svelte:component this={stat.icon} size={48} class="mx-auto mb-4" />
          <div class="text-4xl font-bold mb-2">{stat.value}</div>
          <div class="text-primary-100">{stat.label}</div>
						</div>
					{/each}
		</div>
	</div>
</section>

<!-- Featured Properties -->
<section class="py-20">
  <div class="container mx-auto">
    <div class="text-center mb-12">
      <h2 class="font-display text-4xl font-bold text-neutral-800 mb-4">
        Featured Properties
			</h2>
      <p class="text-xl text-neutral-600">
        Handpicked properties that match your lifestyle
				</p>
			</div>
			
    <div class="grid md:grid-cols-3 gap-8">
      {#each featuredProperties as property}
        <PropertyCard {property} />
      {/each}
			</div>
			
    <div class="text-center mt-12">
      <a href="/properties" class="btn-primary">
        View All Properties
      </a>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section class="py-20 bg-neutral-100">
  <div class="container mx-auto">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="font-display text-4xl font-bold text-neutral-800 mb-4">
          Let's Find Your Perfect Home
				</h2>
        <p class="text-lg text-neutral-600 mb-6">
          With over 20 years of experience in real estate, Dr. Jan Duffy has helped hundreds of families find their dream homes. Whether you're buying, selling, or investing, I'm here to guide you every step of the way.
        </p>
        <ul class="space-y-3 text-neutral-700">
          <li class="flex items-start">
            <span class="text-primary-600 mr-2">✓</span>
            Expert knowledge of local markets
          </li>
          <li class="flex items-start">
            <span class="text-primary-600 mr-2">✓</span>
            Personalized service tailored to your needs
          </li>
          <li class="flex items-start">
            <span class="text-primary-600 mr-2">✓</span>
            Proven track record of successful transactions
          </li>
					</ul>
				</div>
				
      <div class="bg-white p-8 rounded-xl shadow-lg">
        <h3 class="text-2xl font-bold text-neutral-800 mb-6">
          Get In Touch
        </h3>
        <ContactForm />
			</div>
		</div>
	</div>
</section>