import React from 'react'

const ImageCard = ({ image }) => {

    const tags = image.tags.split(',')

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={ image.webformatURL } alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-teal-500 text-xl mb-8 text-center 
        transition duration-500 ease-in-out hover:text-2xl transform hover:-translate-y-1 hover:scale-110 cursor-default">
          By <strong>{ image.user }</strong>
        </div>
        <ul className="space-y-3">
          <li>
            <strong>Views: </strong>
            { image.views }
          </li>
          <li>
            <strong>Downloads: </strong>
            { image.downloads }
          </li>
          <li>
            <strong>Likes: </strong>
            { image.likes }
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        { tags.map((tag, index) => (
            <span key={ index } className="inline-block bg-gray-100 rounded-full px-3 py-1 my-1 text-sm font-semibold text-teal-500 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-default">
            #{ tag }
          </span>
        ))}
      </div>
    </div>
    )
}

export default ImageCard
