const imageUpload = document.getElementById('imageUpload');
const topTextInput = document.getElementById('topText');
const bottomTextInput = document.getElementById('bottomText');
const generateMemeBtn = document.getElementById('generateMeme');
const deleteMemeBtn = document.getElementById('deleteMeme');
const memeCanvas = document.getElementById('memeCanvas');
const ctx = memeCanvas.getContext('2d');

let uploadedImage = null; //Declare at the top with initial value

//Handle image upload
imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if(!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
            const maxWidth = 600;
            const aspectRatio = img.height / img.width;
            const targetHeight = maxWidth * aspectRatio;

            //Resize canvas to match the target size
            memeCanvas.width = maxWidth;
            memeCanvas.height = targetHeight;

            uploadedImage = img;
            drawMeme();
        };
    };
    reader.readAsDataURL(file);
});

//Draw the meme with both image and text
function drawMeme() {
    if (!uploadedImage) {
        alert('Please upload an image');
        return;
    }

    //Clear the canvas and draw image
    ctx.clearRect(0, 0, memeCanvas.width, memeCanvas.height);
    ctx.drawImage(uploadedImage, 0, 0, memeCanvas.width, memeCanvas.height);

    // Set text styles
  ctx.font = '30px Impact';
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.textAlign = 'center';

  // Draw top text
  const topText = topTextInput.value.toUpperCase();
  ctx.fillText(topText, memeCanvas.width / 2, 50);
  ctx.strokeText(topText, memeCanvas.width / 2, 50);

  // Draw bottom text
  const bottomText = bottomTextInput.value.toUpperCase();
  const bottomYPosition = memeCanvas.height - 30;
  ctx.fillText(bottomText, memeCanvas.width / 2, bottomYPosition);
  ctx.strokeText(bottomText, memeCanvas.width / 2, bottomYPosition);
}

function deleteMeme() {
    ctx.clearRect(0, 0, memeCanvas.width, memeCanvas.height);
    uploadedImage = null; //Reset the image

    //Reset the text input fields
    topTextInput.value = '';
    bottomTextInput.value = '';

    //clear the file input
    imageUpload.value = '';
}

//Generate the Meme
generateMemeBtn.addEventListener('click', drawMeme);
deleteMemeBtn.addEventListener('click', deleteMeme);