let ctaButtonPrincipal = document.querySelector('.principal');
let ctaButtonSecondary = document.querySelector('.second');



ctaButtonPrincipal.addEventListener('mouseenter', () => {
    ctaButtonPrincipal.children[0].src = './assets/imgs/first-btn-alt.svg';
    ctaButtonPrincipal.classList = 'cta-btn principal cta-btn-active'
    console.log(ctaButtonPrincipal.classList)
});
ctaButtonPrincipal.addEventListener('mouseleave', () => {
    ctaButtonPrincipal.children[0].src = './assets/imgs/first-btn.svg';
    ctaButtonPrincipal.classList = 'cta-btn principal'
})

ctaButtonSecondary.addEventListener('mouseenter', () => {
    ctaButtonSecondary.children[0].src = './assets/imgs/second-btn-alt.svg';
    ctaButtonSecondary.classList = 'cta-btn second cta-btn-active'
});
ctaButtonSecondary.addEventListener('mouseleave', () => {
    ctaButtonSecondary.children[0].src = './assets/imgs/second-btn.svg';
    ctaButtonSecondary.classList = 'cta-btn second'
})

