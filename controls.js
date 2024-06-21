
document.addEventListener('keydown', (e) => {

    if (document.activeElement !== document.body) return
    if ((e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)) return

    if (e.key == 'j' || e.key == 'k') {
        e.preventDefault();
        const direction = e.key == 'j' ? 1 : -1
        const distance = e.repeat ? 150 : 300
        window.scrollBy({
            top: distance * direction,
            behavior: e.repeat ? "instant" : "smooth"
        });
    } else if (e.key == 'h') {
        e.preventDefault();   
        history.back();
    } else if (e.key == 'l') {
        e.preventDefault();   
        history.forward();
    }
})
