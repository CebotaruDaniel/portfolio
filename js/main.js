AOS.init();

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1.5 });
tl.fromTo(".button", { opacity: 0 }, { opacity: 1, duration: 1.5 });
tl.fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1.5");


