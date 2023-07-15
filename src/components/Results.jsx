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
                <div className='topics__container'>
                    <div className="card__topic reaction__container">
                        <div className='summary__title-icon'>
                            <span className='reaction icon'></span>
                            <p>Reaction</p>
                        </div> 
                        <p> <b>80</b> / 100</p>
                    </div>
                    <div className="card__topic memory__container">
                        <div className='summary__title-icon'>
                            <span className='memory icon'></span>
                            <p>Memory</p>
                        </div> 
                        <p><b>92</b> / 100</p>
                    </div>
                    <div className="card__topic verbal__container">
                        <div className='summary__title-icon'>
                            <span className='verbal icon'></span>
                            <p>Verbal</p>
                        </div> 
                        <p><b>61</b> / 100</p>
                    </div>
                    <div className="card__topic visual__container">
                        <div className='summary__title-icon'>
                            <span className='visual icon'></span>
                            <p>Visual</p>
                        </div> 
                        <p><b>72</b> / 100</p>
                    </div>
                    <button className='next__button'>Continue</button>
                </div>
            </div>
        </section>
    )
}
