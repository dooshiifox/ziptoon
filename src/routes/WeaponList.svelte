<script lang="ts">
	import { WEAPON_KITS, WeaponKit } from "$lib";
	import { filterByString, SEARCH_PRIORITIES } from "albtc";

	let filter = $state("");
	// create a copy of the array so we can sort it.
	let weapon_kits = $state(WEAPON_KITS.slice());
	let order_by = $state<null | { name: string; descending: boolean }>(null);
	let filtered = $derived(
		filterByString(filter, weapon_kits, (kit) => {
			return [
				kit.name.map((name) => ({
					bias: 5,
					value: name
				})),
				{
					bias: 10,
					value: kit.type.name,
					minPriority: SEARCH_PRIORITIES.STARTS_WITH
				},
				{
					bias: 3,
					value: kit.special.name,
					minPriority: SEARCH_PRIORITIES.INCLUDES
				},
				{
					bias: 3,
					value: kit.sub.name,
					minPriority: SEARCH_PRIORITIES.INCLUDES
				},
				{
					bias: 10,
					value: kit.pfs.toString() + "p",
					minPriority: SEARCH_PRIORITIES.STARTS_WITH
				}
			].flat(1);
		})
	);
</script>

<div
	class="mx-auto mt-10 mb-20 flex w-full max-w-5xl flex-col items-center font-sans"
>
	<input
		bind:value={filter}
		class="mb-4 w-full max-w-md rounded border border-gray-300 px-4 py-1 text-lg font-bold"
		placeholder="Search..."
	/>

	<div class="weapon-grid grid w-full gap-x-4 gap-y-2 px-4">
		{#snippet order(name: string, cmp: (a: WeaponKit, b: WeaponKit) => number)}
			<button
				class="flex flex-row items-center justify-center gap-2 text-gray-700"
				onclick={() => {
					if (order_by === null || order_by.name !== name) {
						order_by = {
							name,
							descending: true
						};
						weapon_kits.sort(cmp);
					} else if (order_by.descending) {
						order_by.descending = false;
						weapon_kits.sort((a, b) => -cmp(a, b));
					} else {
						order_by = null;
						weapon_kits = WEAPON_KITS.slice();
					}
				}}
			>
				<span>{name}</span>
				{#if order_by === null || order_by.name !== name}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="size-4"
					>
						<path
							fill-rule="evenodd"
							d="M13.78 10.47a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l.97.97V5.75a.75.75 0 0 1 1.5 0v5.69l.97-.97a.75.75 0 0 1 1.06 0ZM2.22 5.53a.75.75 0 0 1 0-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1-1.06 1.06l-.97-.97v5.69a.75.75 0 0 1-1.5 0V4.56l-.97.97a.75.75 0 0 1-1.06 0Z"
							clip-rule="evenodd"
						/>
					</svg>
				{:else if order_by.descending}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="size-4"
					>
						<path
							fill-rule="evenodd"
							d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
							clip-rule="evenodd"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="size-4"
					>
						<path
							fill-rule="evenodd"
							d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
							clip-rule="evenodd"
						/>
					</svg>
				{/if}
			</button>
		{/snippet}

		{@render order("Main", (a, b) => a.name[0]!.localeCompare(b.name[0]!))}
		{@render order("Sub", (a, b) => a.sub.name.localeCompare(b.sub.name))}
		{@render order("Special", (a, b) =>
			a.special.name.localeCompare(b.special.name)
		)}
		{@render order("Points", (a, b) => a.pfs - b.pfs)}
		{@render order("Class", (a, b) => a.type.name.localeCompare(b.type.name))}
		{#each filtered as kit}
			<div>
				<p class="text-lg font-semibold text-gray-900">{kit.name[0]}</p>
				{#each kit.name.slice(1) as other_name}
					<p class="text-gray-700">{other_name}</p>
				{/each}
			</div>
			<span class="self-center text-gray-900">{kit.sub.name}</span>
			<span class="self-center text-gray-900">{kit.special.name}</span>
			<span class="mr-2 self-center text-right text-gray-700"
				><span class="font-semibold text-gray-900">{kit.pfs.toString()}</span
				>p</span
			>
			<span class="self-center text-gray-700">{kit.type.name}</span>
		{/each}
	</div>
</div>

<style>
	.weapon-grid {
		grid-template-columns: 3fr 2fr 2fr 80px 1fr;
	}
</style>
