

const $ = (s) => document.querySelector(s)



fetch(chrome.runtime.getURL('/template.html')).then(r => r.text()).then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
    

    const root = $`#x-root`
    const header = $`#x-header`
    const leftbar = $`#x-leftbar`
    const rightbar = $`#x-rightbar`
    const body = $`#x-body`

    root.style.backgroundColor = document.body.computedStyleMap().get("background-color").toString() || 'white';

    if(location.hostname == 'stackoverflow.com') {
        let x = $`#mainbar`;
        body.append(x)
        x.style.width = '100%';
    
        x = $`#question-header`
        header.append(x)
        x.querySelector(".aside-cta").remove()
    
        header.append($`.inner-content > :first-child`)
    
        $`#post-form`.remove()
        $`.bottom-notice`.remove()
    }

    if (location.hostname == 'developer.mozilla.org') {
        leftbar.append($`.sidebar-body`)
        rightbar.append($`.toc`)
        header.append($`h1`)

        body.append($`.main-page-content`)
    }

    if (location.hostname == 'developer.chrome.com') {
        leftbar.append($`.devsite-mobile-nav-bottom`)
        body.append($`devsite-content`)
        header.append($`h1`)
        $`devsite-feature-tooltip`.remove()
    }
});
