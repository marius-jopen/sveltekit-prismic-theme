<script>
    import { browser } from '$app/env'
    import * as animateScroll from "svelte-scrollto"

    export let items
    
    // Variable for binding
    export let itemsUrl

    // Init the url variable
    let urlHash = ""

    // Get url hash from browser
    $: if(browser) {
        urlHash = location.hash.replace('#', '')
    }

    // If URL changes, then call the search function
    $: urlHash, openItem(urlHash)

    // Make the result of the search function reactive
    $: itemsUrl = items

    // Function which sets the status of the selected item to true and the others to false
    function openItem(urlHash) {
        items.map(item => {
            if(item.uid == urlHash) {
                item.status = true
            } else {
                item.status = false
            }
        })

        if(browser) {
            animateScroll.scrollTo({ element: "." + urlHash , offset: -50 })
        }
    }
</script>