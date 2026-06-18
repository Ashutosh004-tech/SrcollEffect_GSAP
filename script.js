let tl = gsap.timeline();

tl.from(".text1 span", {
  x: 200,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
})
  .from(".text2 span", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  })
  .from(".black-hole", {
    scale: 0,
    duration: 1,
  })
  .to(".black-hole", {
    rotation: 360,
    duration: 9,
    repeat: -1,
    ease: "none",
  });

const text3 = document.querySelector(".text3");

text3.innerHTML = text3.textContent
  .split("")
  .map((char) => `<span>${char === " " ? "&nbsp;" : char}</span>`)
  .join("");

const text4 = document.querySelector(".text4");

text4.innerHTML = text4.textContent
  .split("")
  .map((char) => `<span>${char === " " ? "&nbsp;" : char}</span>`)
  .join("");

let page2Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
  },
});

page2Tl
  .from(".text3 span", {
    opacity: 0,
    scale: 0,
    stagger: 0.15,
  })

  .from(".text4 span", {
    scale: 0,
    opacity: 0,
  })
  .to(
    ".text3 span",
    {
      x: () => gsap.utils.random(-800, 800),
      y: () => gsap.utils.random(-500, 500),
      rotation: () => gsap.utils.random(-720, 720),
      opacity: 0,
      stagger: 0.02,
    },
    "+=0.5",
  )

  .to(
    ".text4 span",
    {
      x: () => gsap.utils.random(-800, 800),
      y: () => gsap.utils.random(-500, 500),
      rotation: () => gsap.utils.random(-720, 720),
      opacity: 0,
      stagger: 0.02,
    },
    "<",
  )
  .from(".box", {
    scale: 0,
    z: 200,
    opacity: 0,
  });
