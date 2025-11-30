const gallerySets = {
  set1: {
    source: "assets/gallery/set1_source.glb",
    prompt: "Chamfer the front edge and add a recessed logo pocket.",
    result: "assets/gallery/set1_result.glb"
  },
  set2: {
    source: "assets/gallery/set2_source.glb",
    prompt: "Thin the side walls and fillet the mounting tabs to improve aerodynamics.",
    result: "assets/gallery/set2_result.glb"
  },
  set3: {
    source: "assets/gallery/set3_source.glb",
    prompt: "Cut ventilation slots across the center band and raise the rear flange.",
    result: "assets/gallery/set3_result.glb"
  },
  set4: {
    source: "assets/gallery/set4_source.glb",
    prompt: "Add a locking notch and drill two alignment holes on the hinge side.",
    result: "assets/gallery/set4_result.glb"
  },
  set5: {
    source: "assets/gallery/set5_source.glb",
    prompt: "Expand the outlet diameter and add rib reinforcements along the bend.",
    result: "assets/gallery/set5_result.glb"
  }
};

const galleryTabs = document.querySelectorAll(".gallery-tab");
const sourceViewer = document.getElementById("gallery-source");
const resultViewer = document.getElementById("gallery-result");
const promptBlock = document.getElementById("gallery-prompt");

galleryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.dataset.gallery;
    const data = gallerySets[key];
    if (!data) {
      return;
    }

    galleryTabs.forEach((otherTab) => {
      const isActive = otherTab === tab;
      otherTab.classList.toggle("is-active", isActive);
      otherTab.setAttribute("aria-selected", String(isActive));
    });

    sourceViewer.setAttribute("src", data.source);
    resultViewer.setAttribute("src", data.result);
    promptBlock.textContent = data.prompt;
  });
});
