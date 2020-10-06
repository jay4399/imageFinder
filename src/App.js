import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'

function App() {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect (() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
    .then(res => res.json ())
    .then(data => {
      setImages(data.hits)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  }, [term])

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl text-center mx-auto w-full font-black text-teal-500 
      transition duration-500 ease-in-out hover:text-6xl transform hover:-translate-y-1 hover:scale-110 cursor-default">Image Search from Pixabay</h1>

      <ImageSearch searchText={(text) => setTerm(text)}/>

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found. Please Try Another Search</h1>}

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : 
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        { images.map(image => (
          <ImageCard key={ image.id } image={ image } />
        ))}
      </div>}
    </div>
  );
}

export default App;
