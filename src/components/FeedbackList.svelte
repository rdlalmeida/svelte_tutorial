<script>
    import FeedbackItem from './FeedbackItem.svelte'
    import {fade, scale} from 'svelte/transition'
    import {FeedbackStore} from '../stores.js';

    /*
    let feedback = [];

    const unsubscribe = FeedbackStore.subscribe((data) => feedback = data);

     onMount(() => {
        console.log("App mounted!");
        }
    )

    onDestroy(() => {
            unsubscribe;
        }
    ) */
</script>

Feedback List

{#each $FeedbackStore as fb (fb.id)}
    <div in:fade="{{ duration: 1000 }}" out:scale>
        <FeedbackItem item={fb} />
    </div>
{/each}