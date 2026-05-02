<script lang="ts">
  let formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyInterest: ''
  };
  
  let isSubmitting = false;
  let submitMessage = '';
  
  async function handleSubmit() {
    isSubmitting = true;
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        submitMessage = 'Thank you! Dr. Duffy will contact you soon.';
        formData = {
          name: '',
          email: '',
          phone: '',
          message: '',
          propertyInterest: ''
        };
      } else {
        submitMessage = 'Something went wrong. Please try again.';
      }
    } catch (error) {
      submitMessage = 'Something went wrong. Please try again.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-6">
  <div class="grid md:grid-cols-2 gap-6">
    <div>
      <label for="name" class="block text-sm font-medium text-neutral-700 mb-2">
        Full Name *
      </label>
      <input
        type="text"
        id="name"
        bind:value={formData.name}
        required
        class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
    </div>
    
    <div>
      <label for="email" class="block text-sm font-medium text-neutral-700 mb-2">
        Email Address *
      </label>
      <input
        type="email"
        id="email"
        bind:value={formData.email}
        required
        class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
    </div>
  </div>
  
  <div>
    <label for="phone" class="block text-sm font-medium text-neutral-700 mb-2">
      Phone Number
    </label>
    <input
      type="tel"
      id="phone"
      bind:value={formData.phone}
      class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
    />
  </div>
  
  <div>
    <label for="interest" class="block text-sm font-medium text-neutral-700 mb-2">
      I'm Interested In
    </label>
    <select
      id="interest"
      bind:value={formData.propertyInterest}
      class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
    >
      <option value="">Select an option</option>
      <option value="buying">Buying a Property</option>
      <option value="selling">Selling a Property</option>
      <option value="both">Both Buying and Selling</option>
      <option value="valuation">Home Valuation</option>
      <option value="other">Other</option>
    </select>
  </div>
  
  <div>
    <label for="message" class="block text-sm font-medium text-neutral-700 mb-2">
      Message
    </label>
    <textarea
      id="message"
      bind:value={formData.message}
      rows="4"
      class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
    ></textarea>
  </div>
  
  <button 
    type="submit" 
    disabled={isSubmitting}
    class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isSubmitting ? 'Sending...' : 'Send Message'}
  </button>
  
  {#if submitMessage}
    <p class="text-center {submitMessage.includes('Thank') ? 'text-green-600' : 'text-red-600'}">
      {submitMessage}
    </p>
  {/if}
</form>
