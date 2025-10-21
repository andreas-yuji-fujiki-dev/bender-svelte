<script lang="ts">
  import { Eye } from "lucide-svelte";

  import { writable } from "svelte/store";
  import type CharacterInterface from "../interfaces/characterInterface";
  import Fuse from "fuse.js";

  // stores
  const results = writable<CharacterInterface[]>([]);
  const loading = writable(false);
  const error = writable<string | null>(null);
  const heroCharacters = writable<CharacterInterface[]>([]);
  const modalOpen = writable(false);
  const modalCharacter = writable<CharacterInterface | null>(null);

  // state
  let searchQuery = "";
  let charactersCache: CharacterInterface[] = [];

  // fetch all characters once
  async function fetchAllCharacters() {
    loading.set(true);
    try {
      const promises: Promise<CharacterInterface | null>[] = [];
      for (let id = 1; id <= 427; id++) {
        promises.push(fetch(`https://futuramaapi.com/api/characters/${id}`)
          .then(res => res.ok ? res.json() : null)
          .catch(() => null)
        );
      }
      const allChars = (await Promise.all(promises)).filter(Boolean) as CharacterInterface[];
      charactersCache = allChars;

      // set hero characters
      const heroIds = [1, 2, 3, 4, 5, 6];
      heroCharacters.set(allChars.filter(c => heroIds.includes(c.id)));

    } catch (err: any) {
      error.set(err.message || "Failed to fetch characters");
    } finally {
      loading.set(false);
    }
  }

  // search characters locally with fuse
  function searchCharacters() {
    const query = searchQuery.trim();
    if (!query) {
      results.set([]);
      return;
    }

    const fuse = new Fuse(charactersCache, {
      keys: ["name"],
      threshold: 0.3,
      minMatchCharLength: 2
    });

    const matched = fuse.search(query).map(r => r.item);
    results.set(matched);
  }

  // modal
  function openModal(char: CharacterInterface) {
    modalCharacter.set(char);
    modalOpen.set(true);
  }
  function closeModal() {
    modalOpen.set(false);
    modalCharacter.set(null);
  }

  // init
  fetchAllCharacters();
</script>

<!-- header -->
<header class="flex justify-between items-center p-4 bg-gray-800">
  <h1 class="text-3xl font-bold text-white">Futurama Characters</h1>
  <input
    type="text"
    bind:value={searchQuery}
    placeholder="Search character by name..."
    class="p-2 rounded border border-white text-white w-[50%]"
    on:input={() => {
      searchCharacters()
    }}
  />
</header>

<main class="p-4 min-h-screen bg-gray-900 text-white">
  {#if $loading}
    <p>Loading...</p>
  {/if}
  {#if $error}
    <p class="text-red-500">{$error}</p>
  {/if}

  <!-- hero section / default characters or no results message -->
  {#if searchQuery.trim() && !$results.length}
    <p class="text-center text-gray-400">character not found</p>
  {:else if !$results.length}
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      {#each $heroCharacters as char}
        <div class="bg-gray-800 p-4 rounded shadow-md flex flex-col items-center relative">
          <img src={char.image} alt={char.name} class="w-32 h-32 object-cover rounded mb-2" />
          <h2 class="text-xl font-bold mb-1">{char.name}</h2>
          <button
            class="absolute top-2 right-2 bg-blue-600 p-1 rounded hover:bg-blue-700"
            on:click={() => openModal(char)}
            aria-label="Edit"
          >
            <Eye size={24} />
          </button>
        </div>
      {/each}
    </section>
  {/if}

  <!-- search results -->
  {#if $results.length}
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      {#each $results as char}
        <div class="bg-gray-800 p-4 rounded shadow-md flex flex-col items-center relative">
          <img src={char.image} alt={char.name} class="w-32 h-32 object-cover rounded mb-2" />
          <h2 class="text-xl font-bold mb-1">{char.name}</h2>
          <button
            class="absolute top-2 right-2 bg-blue-600 p-1 rounded hover:bg-blue-700"
            on:click={() => openModal(char)}
            aria-label="Edit"
          >
            ✏️
          </button>
        </div>
      {/each}
    </section>
  {/if}
</main>

<!-- modal -->
{#if $modalOpen && $modalCharacter}
  <div
    class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 text-white"
    on:click={closeModal}
    role="button"
    tabindex="0"
    aria-label="close modal"
    on:keydown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') closeModal();
    }}
  >
    <div
      class="bg-gray-800 p-6 rounded shadow-lg w-96 relative"
      on:click|stopPropagation
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabindex="-1"
      on:keydown={(e) => {
        if (e.key === 'Escape') closeModal();
      }}
    >
      <h2 id="modal-title" class="text-2xl font-bold mb-4">{$modalCharacter.name}</h2>

      <img src={$modalCharacter.image} alt={$modalCharacter.name} class="w-40 h-40 object-cover rounded mb-4 mx-auto" />
      
      <p>
        <strong>status:</strong> {$modalCharacter.status}
      </p>
      <p>
        <strong>gender:</strong> {$modalCharacter.gender}
      </p>
      <p>
        <strong>species:</strong> {$modalCharacter.species}
      </p>

      <button
        class="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        on:click={closeModal}
      >
        close
      </button>
    </div>
  </div>
{/if}
