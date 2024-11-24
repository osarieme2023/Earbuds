(() => {
  const canvas = document.querySelector("#explode-view");
  const context = canvas.getContext("2d");

  canvas.width = 1170;
  canvas.height = 1080;

  const frameCount = 240;

  const images = [];
  const buds = {
    frame: 0,
  };


  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = `image/canvas/ear-ani2${i.toString().padStart(4, "0")}.png`;
    images.push(img);
  }

  console.log(images);

  console.table(images);

  gsap.to(buds, {
    frame: 239,
    snap: "frame",
    scrollTrigger: {
      trigger: "#explade-view",
      pin: true,
      scrub: 1,
      markers: false,
      start: "top top",
    },
    onUpdate: render,
  });

  images[0].addEventListener("load", render);

  function render() {
    console.log(images[buds.frame]);
    context.drawImage(images[buds.frame], 0, 0);
  }
})();
