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
  })