let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".rock", 7, { y: -300 })
  .to(".girl", 7, { y: -200 }, "-=7")
  .fromTo(".bg1", { y: -50 }, { y: 0, duration: 7 }, "-=7")
  .to(".content", 7, { top: "0%" }, "-=7")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);