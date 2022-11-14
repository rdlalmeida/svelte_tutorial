<script>
	import {FeedbackStore} from './stores.js';
	import FeedbackList from './components/FeedbackList.svelte';
	import FeedbackStats from './components/FeedbackStats.svelte';
	import FeedbackForm from './components/FeedbackForm.svelte';

/* 	const deleteFeedback = (e) => {
		const itemId = e.detail;
		feedback = feedback.filter((item) => item.id != itemId)
	} */

	const addNewFeedback = (e) => {
		const newFeedback = e.detail;
		// feedback = feedback.concat(newFeedback)
		feedback = [newFeedback, ...feedback];
	}
</script>

<main class="container">
	<FeedbackForm on:add-new-feedback={addNewFeedback} />
	<FeedbackStats />
	<FeedbackList />
</main>

<style>
	
</style>