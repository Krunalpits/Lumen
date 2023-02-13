import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';

function App() {
  const [photoGalleryArray, updatePhotoGalleryArray] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5")
      .then(function (response) {

        updatePhotoGalleryArray(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })

  }, [])

  return (
    <div className="App" >

      <div class="photo-gallery  m-5">
        <div className="container ">
          <h1 className="heading">Photo Gallery</h1>
          <div className="row justify-content-center">
            {
              photoGalleryArray.map((photoGalleryArrayItem, index) => {

                return (
                  <div className="img-main col-lg-4 col-md-6 col-sm-12 ">
                    <div className="image-container" key={index}>
                      <img src={photoGalleryArrayItem.url}
                        alt={`image_${photoGalleryArrayItem.id}`}

                      />

                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;