let ctaButtonPrincipal = document.querySelector('.principal');
let ctaButtonSecondary = document.querySelector('.second');
let arrow = document.querySelector('.arrow');
let arrowAlt = document.querySelector('.arrow.second');



ctaButtonPrincipal.addEventListener('mouseenter', () => {
    ctaButtonPrincipal.children[0].src = './assets/imgs/first-btn-alt.svg';
    ctaButtonPrincipal.classList = 'cta-btn principal cta-btn-active';
    arrow.src="./assets/imgs/flecha-blanca-alt.svg";
    console.log(arrow.src)
});
ctaButtonPrincipal.addEventListener('mouseleave', () => {
    ctaButtonPrincipal.children[0].src = './assets/imgs/first-btn.svg';
    ctaButtonPrincipal.classList = 'cta-btn principal';
    arrow.src="./assets/imgs/flecha-blanca.svg";
})

ctaButtonSecondary.addEventListener('mouseenter', () => {
    ctaButtonSecondary.children[0].src = './assets/imgs/second-btn-alt.svg';
    ctaButtonSecondary.classList = 'cta-btn second cta-btn-active'
    arrowAlt.src="./assets/imgs/flecha-blanca-alt.svg";
});
ctaButtonSecondary.addEventListener('mouseleave', () => {
    ctaButtonSecondary.children[0].src = './assets/imgs/second-btn.svg';
    ctaButtonSecondary.classList = 'cta-btn second'
    arrowAlt.src="./assets/imgs/flecha-blanca.svg";
})

