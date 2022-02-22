<script>
    // Import the function from Svelte which lets you run browser based functions
    import { browser } from '$app/env'

    // Import the ScrollTo function from svelte
    import * as animateScroll from "svelte-scrollto"

    // Get data from parent component
    export let items
    
    // Variable for binding
    export let itemsUrl
    export let urlUsed

    // Init the url variable
    let urlHash = ""

    // Get url hash from browser
    $: if(browser) {
        if(location.hash.includes('#')) {
            urlUsed = true
            urlHash = location.hash.replace('#', '')
        } else {
            urlUsed = false
            urlHash = null
        }
    }

    // If URL changes, then call the search function
    $: urlHash, openItem(urlHash)

    // Make the result of the search function reactive
    $: itemsUrl = items

    // Function which sets the status of the selected item to true and the others to false
    function openItem(urlHash) {
        // Check if hash is empty and if not, execute the function
        if(urlHash) {
            items.map(item => {
                if(item.uid == urlHash) {
                    item.status = true
                } else {
                    item.status = false
                }
            })

            // Scroll to the current element
            if(browser) {
                animateScroll.scrollTo({ element: "." + urlHash , offset: -50 })
            }
        }
    }
</script>