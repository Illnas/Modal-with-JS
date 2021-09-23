/*    Images from Unsplash

        Mark Basarab (bear image): url(https://unsplash.com/photos/y421kXlUOQk),
        Max van den Oetelaar (tiger image): url(https://unsplash.com/photos/S0txA-JnUFA),
        Sam Carter (sheep image): url(https://unsplash.com/photos/GHOiyov2TSQ),
        Philipp Pilz (wolf image): url(https://unsplash.com/photos/QZ2EQuPpQJs),
        Mohan Moolepetlu (snake image): url(https://unsplash.com/photos/VUr5nmC1IM4),
        Andrea Chioldin (deer image): url(https://unsplash.com/photos/6LChsc9M2rA),
        Keyang Zheng (doe image): url(https://unsplash.com/photos/tY4Op7DdBrc),
        Christopher Carson (piglet image): url(https://unsplash.com/photos/i4XLJmlYit4)
*/

let buttonCarni = document.getElementById("btn-carni");
let buttonHerbi = document.getElementById("btn-herbi");
let buttonOmni = document.getElementById("btn-omni");
let buttonAll = document.getElementById("btn-all");
let images = document.querySelectorAll(".image-container > img");
let searchText = document.getElementById("inputs");


//Button Logic
buttonCarni.onclick = () => {
  images.forEach((e) => {
    if (e.dataset.animal !== "carnivore") {
      e.classList.add("hide");
      buttonCarni.disabled = true;
      buttonHerbi.disabled = true;
      buttonOmni.disabled = true;
      searchText.disabled = true;
    }
  });
};

buttonOmni.onclick = () => {
  images.forEach((e) => {
    if (e.dataset.animal !== "omnivore") {
      e.classList.add("hide");
      buttonCarni.disabled = true;
      buttonHerbi.disabled = true;
      buttonOmni.disabled = true;
      searchText.disabled = true;
    }
  });
};

buttonHerbi.onclick = () => {
  images.forEach((e) => {
    if (e.dataset.animal !== "herbivore") {
      e.classList.add("hide");
      buttonCarni.disabled = true;
      buttonHerbi.disabled = true;
      buttonOmni.disabled = true;
      searchText.disabled = true;
    }
  });
};

buttonAll.onclick = () => [
  images.forEach((e) => {
    if (e.classList.contains("hide")) {
      e.classList.remove("hide");
      buttonCarni.disabled = false;
      buttonHerbi.disabled = false;
      buttonOmni.disabled = false;
      searchText.disabled = false;
    }
    if (searchText.value.length > 0) {
      searchText.value = "";
    }
  }),
];

//Input Logic
const search = () => {
  if (searchText.value.length > 0) {
    images.forEach((image) => {
      image.classList.add("hide");
      let miniSearchText = searchText.value.toLowerCase();
      if (image.dataset.animal.indexOf(miniSearchText) > -1) {
        image.classList.remove("hide");
        buttonCarni.disabled = true;
        buttonHerbi.disabled = true;
        buttonOmni.disabled = true;
      }
    });
  } else {
    images.forEach((image) => {
      image.classList.remove("hide");
      buttonCarni.disabled = false;
      buttonHerbi.disabled = false;
      buttonOmni.disabled = false;
    });
  }
};


//Modal Logic

let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");

images.forEach(image => {
  //console.log(image.src)
  image.onclick = () => {
    modal.style.display = "block";
    modalImg.src = image.src;
  } 
})

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}