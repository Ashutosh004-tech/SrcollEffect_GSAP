let tl = gsap.timeline();

tl.from(".text1 span", {
  x: 200,
  opacity: 0,
  duration: 1,
  delay: 0.6,
  stagger: 0.1,
})
  .from(".text2 span", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  })
  .from(".page1-box", {
    scale: 0,
    duration: 1,
  })
  .from(".nav-logo", {
    y: -30,
    opacity: 0,
  })
  .to(".page1-box span", {
    rotate: 360,
    duration: 2,
    stagger: 0.3,
    repeat: -1,
    yoyo: true,
    ease: "none",
  });

// Page 2 scrolling Animation
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

// Page 3 animation

let page3Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    start: "top top",
    end: "+=3600",
    scrub: true,
    pin: true,
  },
});

//Scroll effect
window.addEventListener("wheel", (dets) => {
  if (dets.deltaY > 0) {
    gsap.to(".move-y", {
      transform: "translateX(100%)",
      repeat: -1,
      duration: 4,
      ease: "none",
    })
        gsap.to(".move-y i",{
        rotate:0,
    })
  } else {
    gsap.to(".move-y", {
      transform: "translateX(-100%)",
      repeat: -1,
      duration: 4,
      ease: "none",
    })
    gsap.to(".move-y i",{
        rotate:180,
    })
  }
});

// Page 3
page3Tl.from("#scroll-text span", {
  x: 3600,
  ease: "none",
});
gsap.to("#scroll-text span", {
  y: "-=40",
  duration: 1,
  repeat: -1,
  yoyo: true,
  stagger: 0.05,
  ease: "sine.inOut",
});
