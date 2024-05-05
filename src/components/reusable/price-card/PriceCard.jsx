import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./PriceCard.css"

export default function PriceCard({ title, price, period, features, active }) {
    return (
        <>
            <div className='col-lg-4 mb-3'>
                <Card>
                    <Card.Body>
                        <h5 className='card-title text-muted text-center'>{title.toUpperCase()}</h5>
                        <h6 class="card-price text-center">$ {price}<span class="period">/{period}</span></h6>
                        <hr />
                        <ul class="fa-ul">
                            {
                                features.available.map(feature => (
                                    <li className='mb-3'><span class="fa-li"><i class="fas fa-check"></i></span>{feature}</li>
                                ))


                            }
                            {
                                features.notAvailable.map(feature => (
                                    <li class="text-muted mb-3"><span class="fa-li"><i class="fas fa-times"></i></span>{feature}</li>
                                ))

                            }
                        </ul>
                        <div className='d-grid'>
                            <button className={`btn btn-primary text-uppercase ${active && 'opacity-100'}`}>Button</button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
