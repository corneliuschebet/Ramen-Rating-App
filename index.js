document.addEventListener("DOMContentLoaded", () => {
    console.log("Document Loaded");
  
    const ramen = [
        {
            "id": 1,
            "name": "Shoyu Ramen",
            "restaurant": "Nonono",
            "image": "./shoyu.jpg",
            "rating": 7,
            "comment": "Delish. Can't go wrong with a classic!"
        },
        {
            "id": 2,
            "name": "Naruto Ramen",
            "restaurant": "Naruto",
            "image": "./naruto.jpg",
            "rating": 10,
            "comment": "My absolute fave!"
        },
        {
            "id": 3,
            "name": "Nirvana Shiromaru",
            "restaurant": "Ippudo",
            "image": "./nirvana.jpg",
            "rating": 7,
            "comment": "Do buy the hype."
        },
        {
            "id": 4,
            "name": "Gyukotsu Ramen",
            "restaurant": "Za-Ya Ramen",
            "image": "./gyukotsu.jpg",
            "rating": 8,
            "comment": "Good to the last drop."
        }
    ];
  
    function displayRamens() {
        ramen.forEach(addRamenToMenu);
    }
  
    function addRamenToMenu(ramen) {
        const ramenMenu = document.getElementById("ramen-menu");
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
  
        img.addEventListener("click", () => handleClick(ramen));
        
        ramenMenu.appendChild(img);
    }
  
    function handleClick(ramen) {
        document.querySelector(".detail-image").src = ramen.image;
        document.querySelector(".name").textContent = ramen.name;
        document.querySelector(".restaurant").textContent = ramen.restaurant;
        document.getElementById("rating-display").textContent = ramen.rating;
        document.getElementById("comment-display").textContent = ramen.comment;
    }
  

    function addSubmitListener() {
        document.getElementById("new-ramen").addEventListener("submit", (event) => {
            event.preventDefault();
  
            const newRamen = {
                name: document.getElementById("new-name").value,
                restaurant: document.getElementById("new-restaurant").value,
                image: document.getElementById("new-image").value,
                rating: document.getElementById("new-rating").value,
                comment: document.getElementById("new-comment").value,
            };
  
            addRamenToMenu(newRamen);
            handleClick(newRamen); // Display new ramen details immediately
  
            event.target.reset();
        });
    }
  
    // Initialize the app
    function main() {
        displayRamens();
        addSubmitListener();
    }
  
    main();
  });
  
