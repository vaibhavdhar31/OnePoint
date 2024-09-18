import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>About Us<br className='sm:block hidden'/> </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          * Started Consultancy in 2007(>17 Year Old)
          <br></br>
          * Executed more 700 projects.
          <br></br>
          * Trained more than 1000 persons.
          <br></br>
          * Consulting on more than 30 standards.
          <br></br>
          * Competent team having diversified background.
          <br></br>
          * Explored fields of Railways, Automotive, Medical, Chemical and many more. 
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
