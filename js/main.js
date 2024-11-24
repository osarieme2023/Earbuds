(() => {
  console.log("IIFE Fired");
  const divisor = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");

  const infoHotspot = [
    {
      slot: "hotspot-1",
      title: "Water Resistant",
      description:
        "Rain or shine, our earbuds keep up with your lifestyle. With a water-resistant design, they’re built to withstand sweat, splashes, and light rain—perfect for workouts, outdoor adventures, or everyday use.",
      imgSrc: "image/earbuds-log.svg",
    },
    {
      slot: "hotspot-2",
      title: "Comfortable Ear-tips",
      description:
        "Experience unmatched comfort with our earbuds' soft, silicone ear tips, designed to fit naturally and securely in your ears. With multiple tip sizes included, you’ll find the perfect fit that stays put, even during extended listening sessions.",
      imgSrc: "image/earbuds-log.svg",
    },
    {
      slot: "hotspot-3",
      title: "Extended Battery Life",
      description:
        "Stay powered up all day with our earbuds’ impressive battery life. Enjoy up to 8 hours of continuous playtime on a single charge, with an additional 24 hours provided by the compact charging case..",
      imgSrc: "image/earbuds-log.svg",
    },
  ];

  // Populate content dynamically
  function populateContent(hotspotDataItem, container) {
    container.innerHTML = `
            <h2>${hotspotDataItem.title}</h2> 
            <p>${hotspotDataItem.description}</p> 
            <img src="${hotspotDataItem.imgSrc}" alt="${hotspotDataItem.title}">
        `;
  }

  // Show info on hover
  function showInfo(e) {
    const slot = e.currentTarget.getAttribute("slot");
    const hotspotDataItem = infoHotspot.find((item) => item.slot === slot);

    if (hotspotDataItem) {
      const infoContainer = e.currentTarget.querySelector(".HotspotAnnotation");
      populateContent(hotspotDataItem, infoContainer);
      gsap.to(infoContainer, { duration: 1, autoAlpha: 1 });
    }
  }

  // Hide info function
  function hideInfo(e) {
    const infoContainer = e.currentTarget.querySelector(".HotspotAnnotation");
    gsap.to(infoContainer, { duration: 1, autoAlpha: 0 });
  }

  const hotspots = document.querySelectorAll(".Hotspot");
  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });

  function moveDivisor() {
    console.log(slider.value);
    divisor.style.width = slider.value + "%";
  }

  slider.addEventListener("input", moveDivisor);

})();