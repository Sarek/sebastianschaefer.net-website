(function() {
    // Helpers
    const select = (el) => {
        el = el.trim()
        return document.querySelector(el)
    }

    const on = (type, el, listener) => {
        let sEl = select(el)
        if (sEl) {
            sEl.addEventListener(type, listener)
        }
    }

    /**
     * Nav toggle for mobile
     */
    on('click', '.mobile-nav-toggle', function(e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    });

    var typed = new Typed('#typed', {
        stringsElement: '#typed-data',
        typeSpeed: 70,
        backSpeed: 70,
        smartBackspace: true,
        backDelay: 1500,
        loop: true,
        fadeOut: true
    });
})()

function send_mail() {
    alert("Sending a mail!");
    var modalElement = document.getElementById("contactModal");
    var contactModal = bootstrap.Modal.getOrCreateInstance(modalElement);
    contactModal.hide();
    alert("FooBar");
}
