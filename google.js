
for (const el of document.querySelectorAll('[tabindex], [role], a, button')) {
    el.setAttribute('tabindex', '-1')
}

const results = [...document.querySelectorAll("a:has(h3)")]



results.forEach((el) => {
    el.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("result")
    el.addEventListener("focus", () => { el.classList.add("focused") }, true);
    el.addEventListener("blur", () => { el.classList.remove("focused") }, true);
})

// results[0].focus()


const targets = [
    document.querySelector("#searchform textarea"),
    ...results
]

targets.forEach((v, i) => v.setAttribute('tabindex', i + 1))

let url = new URL(window.location)
let startIndex = parseInt(url.searchParams.get('selected') || '1')

targets[startIndex].focus()

let first = true;

setTargetIndex(startIndex)

function setTargetIndex(i) {

    const currentUrl = new URL(window.location);
    currentUrl.searchParams.set('selected', i);
    history.replaceState(null, '', currentUrl);

    targets[i].scrollIntoView({
        behavior: first ? 'instant' : 'smooth',
        block: 'center',
        inline: 'center'
    });

    first = false;
    
}

document.addEventListener('keydown', (e) => {

    const i = targets.indexOf(document.activeElement)
    if ((e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)) return

    if (i != null && i > 0) {
        if (i != targets.length - 1) {
            if (e.key == 'j') {
                targets[i+1].focus();
                setTargetIndex(i+1)
                e.preventDefault();
            }
        }
        if (e.key == 'k') {
            setTargetIndex(i-1)
            targets[i-1].focus();
            e.preventDefault();
        }
        if (e.key == 'l') {
            targets[i].click();
            e.preventDefault();
        }
    }

    // if (e.key == 'j' || e.key == 'k') {
    //     const down = e.key == 'k';

    // }
    // console.log(e);
    // console.log(document.activeElement);
})
