import {writable} from 'svelte/store';

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'The soup smelled like my grandpa\'s ass!',
    },
    {
        id: 2,
        rating: 9,
        text: 'The fish had a wig on it! Why?',
    },
    {
        id: 3,
        rating: 8,
        text: 'The chicken was rubbery and had 8 tentacles... weird bird...',
    },
    {
        id: 4,
        rating: 2,
        text: 'My wife tried to kill me after she had the shrimp! I also told her that I was banging her sister, but that\'s beside the point!',
    }
])