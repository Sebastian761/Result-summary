import React from 'react'
import './results.css'


export const Results = () => {
    return (
        <section className='container'>
            <div className='left__card'>
                <h3 className='card__title'>Your Results</h3>
                <div className='card__results'>
                    <h1 className='results__total'>76</h1>
                    <p className='results__range'>of 100</p>
                </div>
                <div className='card__info'>
                    <h2 className='info__title'>Great</h2>
                    <p className='info__text'>You scored higher than 65% of the people who have taken these tests.</p>
                </div>
            </div>
            <div className='right__card'>
                <h2>Summary</h2>
                <div className="card__topic">
                    <p>Reaction</p>
                    <p> 80 / 100</p>
                </div>
                <div className="card__topic">
                    <p>Memory</p>
                    <p>92 / 100</p>
                </div>
                <div className="card__topic">
                    <p>Verbal</p>
                    <p>61 / 100</p>
                </div>
                <div className="card__topic">
                    <p>Visual</p>
                    <p>72 / 100</p>
                </div>
                <button>Continue</button>
            </div>
        </section>
    )
}
