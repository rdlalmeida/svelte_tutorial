<script>

	import FeedbackList from './components/FeedbackList.svelte';
	import FeedbackStats from './components/FeedbackStats.svelte';
	import FeedbackForm from './components/FeedbackForm.svelte';

	let feedback = [
		{
			id: 1,
			rating: 10,
			text: 'lorem ipsum dolor sit amet consecterur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
		},
		{
			id: 2,
			rating: 9,
			text: 'lorem ipsum dolor sit amet consecterur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
		},
		{
			id: 3,
			rating: 8,
			text: 'lorem ipsum dolor sit amet consecterur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
		},
		{
			id: 4,
			rating: 2,
			text: 'lorem ipsum dolor sit amet consecterur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
		}
	]

	$: count = feedback.length
	$: average = feedback.reduce((total, {rating}) => {
		return total + rating;
	}, 0)/feedback.length;

	const deleteFeedback = (e) => {
		const itemId = e.detail;
		feedback = feedback.filter((item) => item.id != itemId)
	}
</script>

<main class="container">
	<FeedbackForm />
	<FeedbackStats {count} {average}/>
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback}/>
	Something, something	
</main>

<style>
	
</style>