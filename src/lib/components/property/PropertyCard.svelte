<script lang="ts">
  import { Heart, MapPin, Bed, Bath, Square } from 'lucide-svelte';
  
  export let property: {
    id: string;
    title: string;
    price: number;
    address: string;
    city: string;
    state: string;
    beds: number;
    baths: number;
    sqft: number;
    imageUrl: string;
    featured?: boolean;
  };
  
  let isFavorited = false;
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };
</script>

<article class="card group">
  <div class="relative aspect-[4/3] overflow-hidden">
    <img 
      src={property.imageUrl} 
      alt={property.title}
      class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
    
    {#if property.featured}
      <div class="absolute top-4 left-4 bg-luxury text-white px-3 py-1 rounded-full text-sm font-medium">
        Featured
      </div>
    {/if}
    
    <button 
      class="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-colors"
      on:click|preventDefault={() => isFavorited = !isFavorited}
    >
      <Heart 
        size={20} 
        class={isFavorited ? 'fill-red-500 text-red-500' : 'text-neutral-600'}
      />
    </button>
  </div>
  
  <div class="p-6">
    <div class="text-2xl font-bold text-primary-600 mb-2">
      {formatPrice(property.price)}
    </div>
    
    <h3 class="text-lg font-semibold text-neutral-800 mb-2">
      {property.title}
    </h3>
    
    <div class="flex items-center text-neutral-600 mb-4">
      <MapPin size={16} class="mr-1" />
      <span class="text-sm">{property.address}, {property.city}, {property.state}</span>
    </div>
    
    <div class="flex items-center gap-4 text-neutral-600 mb-4">
      <div class="flex items-center gap-1">
        <Bed size={18} />
        <span class="text-sm font-medium">{property.beds} Beds</span>
      </div>
      <div class="flex items-center gap-1">
        <Bath size={18} />
        <span class="text-sm font-medium">{property.baths} Baths</span>
      </div>
      <div class="flex items-center gap-1">
        <Square size={18} />
        <span class="text-sm font-medium">{property.sqft} ft²</span>
      </div>
    </div>
    
    <a 
      href="/properties/{property.id}"
      class="btn-primary w-full text-center"
    >
      View Details
    </a>
  </div>
</article>
