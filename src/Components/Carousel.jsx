
// pour la gestion de l'index des images
const { questionNumber } = useParams()
const questionNumberInt = parseInt(questionNumber)
const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
const nextQuestionNumber = questionNumberInt + 1


import React from 'react'

function Carousel() {
  return (
    <div>Carousel</div>
  )
}

export default Carousel