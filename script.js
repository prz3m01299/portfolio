function checkFadeIn() {
  // Get all elements with the class "fade-in"
  const fadeIns = document.querySelectorAll('.fade-in');

  // Loop through each element and check if it's in view
  fadeIns.forEach(fadeIn => {
    const fadeInTop = fadeIn.getBoundingClientRect().top;
    const fadeInBottom = fadeIn.getBoundingClientRect().bottom;

    // If the element is in view, add a CSS class to trigger the fade-in effect
    if (fadeInTop < window.innerHeight && fadeInBottom >= 0) {
      fadeIn.classList.add('fade-in-active');
    }
  });
}

// Call the checkFadeIn function on load and scroll
window.addEventListener('load', checkFadeIn);
window.addEventListener('scroll', checkFadeIn);

function slideInLeft() {
  // Get all elements with the slide-in class
  const slideInEls = document.querySelectorAll('.slide-in-left');

  // Loop through each element and add the active class to trigger the slide-in animation
  slideInEls.forEach(slideInEl => {
    slideInEl.classList.add('active');
  });
}

// Call the slideIn function on load
window.addEventListener('load', slideInLeft);

function slideInRight() {
  // Get all elements with the slide-in class
  const slideInE2s = document.querySelectorAll('.slide-in-right');

  // Loop through each element and add the active class to trigger the slide-in animation
  slideInE2s.forEach(slideInE2 => {
    slideInE2.classList.add('active');
  });
}

// Call the slideIn function on load
window.addEventListener('load', slideInRight);



function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  } else {
    // Show an error message if the input is empty
    alert("Please enter a recommendation.");
  }
  showPopup(true);
}



