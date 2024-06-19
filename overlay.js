
document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('beforeend', `
    <div id="x-overlay"></div>
    `);
    
    var overlay = document.getElementById("x-overlay")
    
    let bgColor = document.body.computedStyleMap().get("background-color").toString();

    if (bgColor.indexOf(', 0)') !== -1) {
        bgColor = 'black'
    }

    overlay.style.backgroundColor = bgColor;
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.zIndex = '2147483646';
    overlay.style.opacity = '1';
    
    // let c = 0
    // document.body.onclick = () => {
    //     c = (c + 1) % 2
    //     overlay.style.display = ['none', 'initial'][c];
    // }

    document.body.style.opacity = '1'
})
