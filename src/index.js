console.log('%c HI', 'color: firebrick')

//challenge 1.
// document.addEventListener("DOMContentLoaded", function() {
//     const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

//     fetch(imgUrl)
//         .then(response => response.json())
//         .then(data => {
//             const imageContainer = document.getElementById('dog-image-container');
//             data.message.forEach(imgSrc => {
//                 const imgElement = document.createElement('img');
//                 imgElement.src = imgSrc;
//                 imageContainer.appendChild(imgElement);
//             });
//         })
//         .catch(error => console.error('Error fetching images:', error));
// });

//challenge 2.
// document.addEventListener("DOMContentLoaded", function() {
//     const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
//     const breedUrl = "https://dog.ceo/api/breeds/list/all";

    // Fetch images and add to DOM
//     fetch(imgUrl)
//         .then(response => response.json())
//         .then(data => {
//             const imageContainer = document.getElementById('dog-image-container');
//             data.message.forEach(imgSrc => {
//                 const imgElement = document.createElement('img');
//                 imgElement.src = imgSrc;
//                 imageContainer.appendChild(imgElement);
//             });
//         })
//         .catch(error => console.error('Error fetching images:', error));

//     // Fetch dog breeds and add to DOM
//     fetch(breedUrl)
//         .then(response => response.json())
//         .then(data => {
//             const breedList = document.getElementById('dog-breeds');
//             const breeds = data.message;
//             for (const breed in breeds) {
//                 const breedItem = document.createElement('li');
//                 breedItem.textContent = breed;
//                 breedList.appendChild(breedItem);
//             }
//         })
//         .catch(error => console.error('Error fetching breeds:', error));
// });


//challenge 3;
// 
//challenge 4

document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    let allBreeds = [];

    // Fetch images and add to DOM
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById('dog-image-container');
            data.message.forEach(imgSrc => {
                const imgElement = document.createElement('img');
                imgElement.src = imgSrc;
                imageContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching images:', error));

    // Fetch dog breeds and add to DOM
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedList = document.getElementById('dog-breeds');
            const breeds = data.message;
            allBreeds = Object.keys(breeds);
            displayBreeds(allBreeds);
        })
        .catch(error => console.error('Error fetching breeds:', error));

    // Function to display breeds
    function displayBreeds(breeds) {
        const breedList = document.getElementById('dog-breeds');
        breedList.innerHTML = '';
        breeds.forEach(breed => {
            const breedItem = document.createElement('li');
            breedItem.textContent = breed;
            breedItem.addEventListener('click', function() {
                breedItem.style.color = 'blue'; // Change to the color of your choice
            });
            breedList.appendChild(breedItem);
        });
    }

    // Filter breeds based on selected letter
    const breedDropdown = document.getElementById('breed-dropdown');
    breedDropdown.addEventListener('change', function(event) {
        const selectedLetter = event.target.value;
        const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
        displayBreeds(filteredBreeds);
    });
});