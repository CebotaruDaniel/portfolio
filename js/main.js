AOS.init();

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".button", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1.5");
tl.to(".text", { y: "-50%", duration: 1, stagger: 0.25 }, "-=1.5");

