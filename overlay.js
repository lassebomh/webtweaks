
document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('beforeend', `
    <div id="x-overlay"></div>
    `);
    
    var overlay = document.getElementById("x-overlay")
    
    overlay.style.backgroundColor = document.body.style.backgroundColor ? document.body.style.backgroundColor : 'var(--overlay-color)'
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.zIndex = '2147483646';
    overlay.style.opacity = '1';
    
    // let c = 0
    // document.body.onclick = () => { overlay.style.display = ['none', 'initial'][++c % 2]; }

    document.body.style.opacity = '1'
})
