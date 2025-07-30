
let $isotope = null;

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }

    return false;
}

function sortList(select) {

    if($isotope !== null) {

        if(select.value === "alpha-asc") {

            $isotope.isotope({
                sortBy : 'name',
                sortAscending: true
            });

        } else if(select.value === "alpha-desc") {

            $isotope.isotope({
                sortBy : 'name',
                sortAscending: false
            });

        } else if(select.value === "created-asc") {

            $isotope.isotope({
                sortBy : 'original-order',
                sortAscending: false
            });

        } else if(select.value === "created-desc") {

            $isotope.isotope({
                sortBy : 'original-order',
                sortAscending: true
            });
        }
    }
}

function filterCategory(button, category) {

    if($isotope !== null) {

        let category_buttons = document.querySelectorAll(".category-button");

        Array.prototype.forEach.call(category_buttons, function(item) {

            classie.remove(item, "btn-primary");

            if(!classie.has(item, "btn-default")) {

                classie.add(item, "btn-default");
            }
        });

        classie.remove(button, "btn-default");
        classie.add(button, "btn-primary");

        $isotope.isotope({ filter: (category === "*" ? "*" : '.' + category) });

    } else throw "Isotope not set.";
}

function handleIsotope() {

    let isotope = document.querySelectorAll(".isotope");

    Array.prototype.forEach.call(isotope, function(item) {

        $isotope = jQuery(item).isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows',
            getSortData: {
                name: '.name',
            }
        });
    });
}

function handleMasonry() {

    let masonry_exists = document.querySelectorAll(".masonry-grid").length;

    if(masonry_exists > 0) {

        return new Masonry('.masonry-grid', {
            itemSelector: '.masonry-item'
        });

    } else return false;
}

function showElement(element) {

    setTimeout(function() {

        jQuery(element).removeClass("opacity-0");
    }, 150);
}

function handleSlickSlides() {

    let slider_section = document.querySelectorAll("section.main-slider");

    if(slider_section !== null && typeof slider_section !== "undefined")  {

        Array.prototype.forEach.call(slider_section, function(section) {

            let slider = section.querySelector(".slick-slider");
            let navigation = section.querySelector(".slick-navigation");

            jQuery(slider).on('init', showElement(section));
            jQuery(slider).on('reInit', showElement(section));

            jQuery(slider).slick({
                autoplay: true,
                dots: true,
                fade: true,
                cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
                swipeToSlide: true,
                arrows: true,
                appendArrows: navigation,
                appendDots: navigation,
                nextArrow: "<button type=\"button\" class=\"slick-next\">></button>",
                prevArrow: "<button type=\"button\" class=\"slick-prev\"><</button>"

            });
        });
    }

    slider_section = document.querySelector("section.members-slider");

    if(slider_section !== null && typeof slider_section !== "undefined") {

        let slider = slider_section.querySelector(".slick-slider");
        let navigation = slider_section.querySelector(".slick-navigation");

        jQuery(slider).on('init', showElement(slider_section));
        jQuery(slider).on('reInit', showElement(slider_section));

        jQuery(slider).slick({
            autoplay: true,
            dots: true,
            swipeToSlide: true,
            arrows: true,
            appendArrows: navigation,
            appendDots: navigation,
            nextArrow: "<button type=\"button\" class=\"slick-next\">></button>",
            prevArrow: "<button type=\"button\" class=\"slick-prev\"><</button>",
            rows: 2,
            slidesPerRow: 6,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        rows: 2,
                        slidesPerRow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        rows: 2,
                        slidesPerRow: 4
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        rows: 2,
                        slidesPerRow: 2
                    }
                }
            ]

        });
    }

}

function handleWOWAnimations() {

    new WOW().init();
}

function handleSmoothScroll() {

    new SmoothScroll('a[href*="#"]');
}

function closeModal(modalId, disable, daysDisabled) {

    if(disable !== null && typeof disable !== "undefined" && disable) {

        setCookie("dm_" + modalId, 1, daysDisabled)
    }

    let modal = document.querySelector("#" + modalId);

    if(modal === null || typeof modal === "undefined") {

        throw "#" + modalId + " does not exist.";
    }

    modal.style.display = "none";
}

function showModal(modalId, forced = false) {

    let modal = document.querySelector("#" + modalId);

    if(modal === null || typeof modal === "undefined") {

        throw "#" + modalId + " does not exist.";
    }

    if(!getCookie("dm_" + modalId) || forced) {

        modal.style.display = "block";
    }
}

function confirmCookies() {

    closeModal("cookieConsentModal", true, 365);

    setCookie("c_enabled", 1, 365);

    dataLayer.push({
        'event': 'cookies_set'
    });


    if(!window.location.href.includes("prijava-na-e-novice")) {

        setTimeout(function() {

            showModal("newsletterModal");

        }, 7000);
    }
}

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
}

function animateCount() {

    var count_animations = document.querySelectorAll(".animate-count");
    var numbers = document.querySelector(".numbers");

    var hT = jQuery(numbers).offset().top,
        hH = jQuery(numbers).outerHeight(),
        wH = jQuery(window).height(),
        wS = jQuery(this).scrollTop();
    if (wS > (hT+hH-wH)) {

        window.removeEventListener("scroll", animateCount);

        Array.prototype.forEach.call(count_animations, function(node) {

            var value = node.innerText;
            value = value.split('.').join("");
            value = value.replace("€", "");
            value = value.trim();

            jQuery(node).animateNumber({
                    number: value,
                    numberStep: function (now, tween) {
                        var floored_number = Math.floor(now),
                            target = jQuery(tween.elem);

                        target.text(formatMoney(floored_number, 0, ",", ".") + (classie.has(node, "add-euro") ? ' €' : ""));
                    }
                }, 2000
            );
        });
    }
}

jQuery(document).ready(function() {

    try {

        handleSlickSlides();

    } catch(e) {

        console.log("handleSlickSlides", e);
    }

    try {

        handleMasonry();

    } catch(e) {

        console.log("handleMasonry", e);
    }

    try {

        handleWOWAnimations();

    } catch(e) {

        console.log("handleWOWAnimations", e);
    }

    try {

        handleIsotope();

    } catch(e) {

        console.log("handleIsotope", e);
    }

    try {

        if(!getCookie("c_enabled") &&
            !window.location.href.includes("legal/pogoji-uporabe")) {

            showModal("cookieConsentModal", true);

        } else if(getCookie("c_enabled")) {

            confirmCookies();
        }

    } catch(e) {

        console.log("handleCookies", e);
    }

    try {

        handleSmoothScroll();

    } catch(e) {

        console.log("handleSmoothScroll", e);
    }

    try {

        var count_animations = document.querySelectorAll(".animate-count");

        if(count_animations.length > 0) {

            window.addEventListener("scroll", animateCount);
        }

    } catch(e) {

        console.log("animateCount", e);
    }
});
