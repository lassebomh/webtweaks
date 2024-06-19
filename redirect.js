
if (location.href.startsWith("https://www.google.com/search?q=") && location.href.indexOf("udm=14") === -1) {
    window.location.href = window.location.href + "&udm=14"
}

const REDDIT_URL = 'https://www.reddit.com'

if (location.href.startsWith(REDDIT_URL)) {
    window.location.href = location.href.replace(REDDIT_URL, 'https://old.reddit.com')
}



document.addEventListener('DOMContentLoaded', () => {
    for (const anchor of document.body.querySelectorAll('a')) {
        if (anchor.href.startsWith(REDDIT_URL)) {
            anchor.href = anchor.href.replace(REDDIT_URL, 'https://old.reddit.com')
        }
    }

    if (location.href.startsWith("https://www.quora.com/")) {
        const button = document.querySelector(".dom_annotate_question_answer_item_0 .q-relative > button.q-click-wrapper")
        console.log(button);
        button.click()
    }
})

