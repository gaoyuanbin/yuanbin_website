document.getElementById('fetchButton').addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dogImage').src = data.message;
        })
        .catch(error => {
            console.error('Error fetching the image:', error);
        });
});
