
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });

  var service = new google.maps.places.PlacesService(map);
  service.getDetails({
    placeId: 'YOUR_PLACE_ID',
    fields: ['name', 'rating', 'formatted_address', 'formatted_phone_number', 'reviews']
  }, function (place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var reviews = place.reviews;
      if (reviews) {
        for (var i = 0; i < reviews.length; i++) {
          var review = reviews[i];
          var reviewElement = document.createElement('div');
          reviewElement.innerHTML = '<strong>' + review.author_name + '</strong> - ' + review.rating + '<br>' + review.text + '<br><br>';
          document.getElementById('reviews').appendChild(reviewElement);
        }
      }
    }
  });
}


const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    
  } else {
    menu.classList.add("active");
    
  }
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

function closeSubmenu(e) {
  if (menu.querySelector(".submenu-active")) {
    let isClickInside = menu
      .querySelector(".submenu-active")
      .contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
}

toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("uitgebreid", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("uitgebreid", "false");
    }
  });
});

