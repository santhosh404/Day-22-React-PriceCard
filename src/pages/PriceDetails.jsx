import React from 'react'
import PriceCard from '../components/reusable/price-card/PriceCard'

const priceDetails = [
    {
        id: 1,
        title: "free",
        price: "0",
        period: "month",
        features: {  available: ["Single User", "5GB Storage", "Unlimited Public Projects", "Community Access"], 
                        notAvailable: ["Unlimited Private Projects", "Dedicated Phone Support", "Free SubDomain", "Mothly Status Reports"]
                },
        active: false
    },
    {
        id: 2,
        title: "plus",
        price: "9",
        period: "month",
        features: {  available: ["Single User", "5GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free SubDomain"], 
                        notAvailable: ["Mothly Status Reports"]
                },
        active: false

    },
    {
        id: 3,
        title: "pro",
        price: "49",
        period: "month",
        features: { available: ["Single User", "5GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free SubDomain", "Mothly Status Reports"], 
                    notAvailable: []
                },
        active: true

    }
]


export default function PriceDetails() {

    return (
        <>
            <div className='container'>
                <div className='row'>
                {
                    priceDetails.map(d => (
                        <PriceCard 
                            key = {d.id} 
                            title = {d.title}
                            price = {d.price}
                            period = {d.period}
                            features = {d.features}
                            active = {d.active}
                        />
                    ))
                }
                </div>
            </div>

        </>
    )
}
