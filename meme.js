// Attributed Help: ChatGPT: How to submit the form on the page to generate meme
document.getElementById('memeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const topText = document.getElementById('topText').value;
    const bottomText = document.getElementById('bottomText').value;
    const imageUrl = document.getElementById('imageUrl').value;
    
    const memeContainer = document.getElementById('memeContainer');
    
    //Attributed Help: ChatGPT: How to be able to add multiple memes to the page by submitting the form muliple times

    const memeDiv = document.createElement('div');
    memeDiv.className = 'meme';
    
    const img = document.createElement('img');
    img.src = imageUrl;
    
    const topTextDiv = document.createElement('div');
    topTextDiv.className = 'top-text';
    topTextDiv.textContent = topText;
    
    const bottomTextDiv = document.createElement('div');
    bottomTextDiv.className = 'bottom-text';
    bottomTextDiv.textContent = bottomText;

    //Attrbute Help: ChatGPT: How to add a delete button to delete the meme

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function(){
        memeDiv.remove();
    });
    
    memeDiv.appendChild(img);
    memeDiv.appendChild(topTextDiv);
    memeDiv.appendChild(bottomTextDiv);
    memeDiv.appendChild(deleteButton);
    
    memeContainer.appendChild(memeDiv);
    
    // Attributed Help: ChatGPT: How to clear fields automatically  after the submit button is clicked.
    document.getElementById('topText').value = '';
    document.getElementById('bottomText').value = '';
    document.getElementById('imageUrl').value = '';
});