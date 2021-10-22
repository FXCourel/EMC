function setContent(content){
    return
}

VanillaTilt.init(document.querySelectorAll(".tilt"), {
    reverse: false,
    max: 5,
    perspective: 1000,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    scale: 1.03,
    speed: 300,
    transition: true,
    axis: null,
    glare: false,
    "max-glare": 1,
    "glare-prerender": false,
    "mouse-event-element": null,
    reset: true
  });