<script lang="ts">
  import { Eye, Search } from "lucide-svelte";

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
      const heroIds = [1, 425, 16, 424, 420, 423];
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

<header class="flex flex-col sm:flex-row justify-between items-center p-2 sm:p-4 bg-gray-900 border-b-2 border-lime-500 fixed top-0 w-full z-10 gap-3 sm:gap-0">
  <h1 class="text-xl sm:text-2xl font-bold text-lime-400 font-mono text-center sm:text-left">
    Futurama Character Finder
  </h1>

  <div class="relative w-full sm:w-[50%] mt-2 sm:mt-0">
    <input
      type="text"
      bind:value={searchQuery}
      placeholder="Search character by name..."
      class="p-2 pl-4 pr-10 rounded-md border border-lime-600 bg-gray-800 text-white w-full placeholder-gray-500 focus:ring-lime-400 focus:border-lime-400 font-mono transition-all"
      on:input={() => searchCharacters()}
    />
    <button
      class="absolute right-2 top-1/2 -translate-y-1/2 text-lime-400 hover:text-lime-200 transition-colors cursor-pointer pr-1.5"
      on:click={() => searchCharacters()}
      aria-label="Search"
    >
      <Search size={20} />
    </button>
  </div>
</header>

<main class="p-4 min-h-screen bg-gray-950 text-white font-mono pt-38 sm:pt-24 pb-20 sm:pb-32">
  {#if $loading}
    <p class="text-center text-lime-400 text-lg">Loading crew...</p>
  {/if}
  {#if $error}
    <p class="text-red-500 text-center">{$error}</p>
  {/if}

  {#if searchQuery.trim() && !$results.length}
    <p class="text-center text-gray-500 text-lg">Character not found, not even in the 31st Century.</p>
  {:else if !$results.length}
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      {#each $heroCharacters as char}
        <div class="bg-gray-800 p-4 rounded-lg shadow-lg shadow-lime-900/40 flex flex-col items-center relative border-2 border-lime-800 transform transition-transform hover:scale-105">
          <img src={char.image} alt={char.name} class="w-32 h-32 object-contain rounded-full mb-4 border-4 border-lime-600" />
          <h2 class="text-xl font-bold mb-1 text-lime-400">{char.name}</h2>
          <button
            class="absolute top-2 right-2 bg-lime-600 p-2 rounded-full hover:bg-lime-700 text-white transition-colors cursor-pointer"
            on:click={() => openModal(char)}
            aria-label="View details"
          >
            <Eye size={20} />
          </button>
        </div>
      {/each}
    </section>
  {/if}

  {#if $results.length}
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      {#each $results as char}
        <div class="bg-gray-800 p-4 rounded-lg shadow-lg shadow-lime-900/40 flex flex-col items-center relative border-2 border-lime-800 transform transition-transform hover:scale-105">
          <img src={char.image} alt={char.name} class="w-32 h-32 object-contain rounded-full mb-4 border-4 border-lime-600" />
          <h2 class="text-xl font-bold mb-1 text-lime-400">{char.name}</h2>
          <button
            class="absolute top-2 right-2 bg-lime-600 p-2 text-xl rounded-full hover:bg-lime-700 transition-colors"
            on:click={() => openModal(char)}
            aria-label="View details"
          >
            <Eye size={20} class="text-white" />
          </button>
        </div>
      {/each}
    </section>
  {/if}
</main>

<footer class="w-full p-4 bg-gray-900 text-center text-gray-400 font-mono border-t-2 border-lime-700 fixed bottom-0">
  <p class="mb-2 text-sm sm:text-base">Made by Andreas Yuji Fujiki</p>
  <div class="flex sm:flex-row justify-center items-center gap-2 sm:gap-6">
    <a href="https://github.com/andreas-yuji-fujiki-dev" target="_blank" rel="noopener noreferrer"
       class="text-lime-400 hover:text-lime-300 transition-colors hover:underline text-sm sm:text-base">
      GitHub
    </a>
    <a href="https://www.linkedin.com/in/andreas-yuji-fujiki-dev/" target="_blank" rel="noopener noreferrer"
       class="text-lime-400 hover:text-lime-300 transition-colors hover:underline text-sm sm:text-base">
      LinkedIn
    </a>
  </div>
</footer>

{#if $modalOpen && $modalCharacter}
  <div
    class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 text-white font-mono"
    on:click={closeModal}
    role="button"
    tabindex="0"
    aria-label="close modal"
    on:keydown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') closeModal();
    }}
  >
    <div
      class="bg-gray-800 p-6 rounded-lg shadow-2xl shadow-lime-900/50 w-96 relative border-4 border-lime-600"
      on:click|stopPropagation
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabindex="-1"
      on:keydown={(e) => {
        if (e.key === 'Escape') closeModal();
      }}
    >
      <h2 id="modal-title" class="text-3xl font-bold mb-4 text-lime-400 text-center">{$modalCharacter.name}</h2>

      <img src={$modalCharacter.image} alt={$modalCharacter.name} class="w-40 h-40 object-contain rounded-full mb-4 mx-auto border-4 border-lime-500" />
      
      <p class="text-lg">
        <strong class="text-lime-500">Id:</strong> {$modalCharacter.id}
      </p>
      <p class="text-lg">
        <strong class="text-lime-500">Status:</strong> {$modalCharacter.status}
      </p>
      <p class="text-lg">
        <strong class="text-lime-500">Gender:</strong> {$modalCharacter.gender}
      </p>
      <p class="text-lg">
        <strong class="text-lime-500">Species:</strong> {$modalCharacter.species}
      </p>

      <button
        class="mt-6 bg-red-600 hover:bg-lime-700 px-6 py-2 rounded-lg font-bold w-full uppercase tracking-wider transition-colors cursor-pointer"
        on:click={closeModal}
      >
        Close
      </button>
    </div>
  </div>
{/if}