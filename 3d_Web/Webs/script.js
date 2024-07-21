document.addEventListener('DOMContentLoaded', function() {
  var typedElement = document.querySelector(".text");

  if (typedElement) {
      var typed = new Typed(typedElement, {
          strings: ["Frontend", "Animated", "Awesome"],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 150,
          loop: true
      });
  }

  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".smooth-scroll", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector(".smooth-scroll") && document.querySelector(".smooth-scroll").style && document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  const mainElement = document.getElementById('main');

  mainElement.addEventListener('scroll', function() {
      if (mainElement.scrollTop === 0) {
          locoScroll.scrollTo(0, 0, 0); // Ensure smooth-scroll is scrolled to top
      }
  });
});
