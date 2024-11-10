$("a.prevent-default").click(function (e) {
  // Cancel the default action
  e.preventDefault();
});

// Dark mode selector
const toggler = document.getElementById("toggler");
const headOne = document.getElementsByTagName("h1");
const headFive = document.getElementsByTagName("h5");
const aTags = document.getElementsByTagName("a");
const ulSubheading = document.getElementsByClassName("ul-subheading");
const titleDiscussion = document.getElementsByClassName("title-discussion");
const accordionBody = document.getElementsByClassName("accordion-body");
const accordionButton = document.getElementsByClassName("accordion-button");
const spans = document.getElementsByTagName("span");

toggler.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  for (let i = 0; i < headOne.length; i++) {
    headOne[i].classList.toggle("dark-mode");
  }
  for (let i = 0; i < headFive.length; i++) {
    headFive[i].classList.toggle("dark-mode");
  }
  for (let i = 0; i < aTags.length; i++) {
    aTags[i].classList.toggle("dark-mode");
  }
  for (let i = 0; i < accordionBody.length; i++) {
    accordionBody[i].classList.toggle("dark-mode");
  }
  for (let i = 0; i < accordionButton.length; i++) {
    accordionButton[i].classList.toggle("dark-mode");
  }  
  for (let i = 0; i < titleDiscussion.length; i++) {
    titleDiscussion[i].classList.toggle("dark-mode");
  }  
  for (let i = 0; i < ulSubheading.length; i++) {
    ulSubheading[i].classList.toggle("dark-mode");
  }  
  for (let i = 0; i < spans.length; i++) {
    spans[i].classList.toggle("dark-mode");
  }  
});
