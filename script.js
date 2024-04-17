function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openPopup(videoSrc) {
  var popupWindow = window.open('', 'Project Demo', 'width=1050, height=600');

  var popupContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Peoject Demo</title>
      <style>
        body, html {
          margin: 0;
          padding: 0;
          height: 100%;
          background: black;
          overflow: hidden;
        }
        .video-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%; 
        }
        video {
          width: auto;
          height: auto%;
          max-width: 100%;
          max-height: 100%;
        }
      </style>
    </head>
    <body>
      <div class="details-container color-container">
        <video controls autoplay>
          <source src="${videoSrc}" type="video/mp4"></source>
          Your browser does not support the video tag.          
        </video>
      </div>
    </body>
  </html>`;

popupWindow.document.write(popupContent);
popupWindow.document.close();
}