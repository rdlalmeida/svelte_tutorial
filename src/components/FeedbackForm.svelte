<script>
    import {v4 as uuidv4} from 'uuid';
    import Card from './Card.svelte';
    import Button from './Button.svelte';
    import RatingSelect from './RatingSelect.svelte';

    let style = "secondary"
    let rating = 10;
    let text = '';
    let btnDisabled = true;
    let min = 10;
    let message;

    const handleInput = () => {
        if (text.trim().length <= min) {
            message = `Text must be at least ${min} characters`;
            btnDisabled = true;
        }
        else {
            message = null;
            btnDisabled = false;
        }
    }

    const handleSelect = (e) => {
        rating = e.detail;
    }

    const handleSubmit = () => {
        if (text.trim().length > min) {
            const newFeedback = {
                id: uuidv4(), 
                text: text,
                rating: +rating
            }

            console.log(newFeedback);
        }
    }
</script>

<Card>
    <header>
        <h2>How would you rate your service with us?</h2>
    </header>
    <form on:submit|preventDefault={handleSubmit}>
        <RatingSelect {rating} on:rating-select={handleSelect} />
        <div class="current-rating">Current rating: {rating}</div>
        <div class="input-group">
            <input type="text" on:input={handleInput} bind:value = {text} placeholder="Tell us something that keeps you coming back">
            <Button type="submit" disabled={btnDisabled} style={style}>Send</Button>
        </div>
        {#if message}
            <div class=message>
                {message}
            </div>
        {/if}
    </form>
</Card>
