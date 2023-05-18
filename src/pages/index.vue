<script setup lang="ts">
import dayjs from 'dayjs'
import { Ref, ref } from 'vue'

const date = ref(null)
const entity = ref('day')
const count = ref(1)

const results: Ref<any[]> = ref([])

const formattedDate = (date: any) => {
	return dayjs(date).format('DD.MM.YYYY hh:mm')
}

const handleCalc = () => {
	// @ts-ignore
	const dd = dayjs(date.value).add(count.value, entity.value)
	// @ts-ignore
	results.value.push(JSON.parse(JSON.stringify({ from: formattedDate(date.value), to: formattedDate(dd) })))
}
</script>

<template>
	<main class="p-[16px]">
		<header class="grid grid-cols-3 gap-[16px]">
			<VueDatePicker v-model="date" />
			<span>-></span>
			<div>
				<input
					v-model.number="count"
					type="number"
				>
				<select v-model="entity">
					<option value="day">
						Day
					</option>
					<option value="month">
						Month
					</option>
					<option value="year">
						Year
					</option>
				</select>
			</div>
		</header>
		<div>
			<button @click="handleCalc">
				Submit
			</button>
		</div>

		<section
			v-for="(r, rIdx) in results"
			:key="rIdx"
		>
			{{ r.from }} -> {{ r.to }}
		</section>
	</main>
</template>
