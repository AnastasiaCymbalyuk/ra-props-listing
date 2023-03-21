import React from "react";

export default function Listing ({data}) {
    const item = data.map(item => {
        if (!item.title) {
            return false;
        }

        const newTitle = item.title.length > 50 ? item.title.slice(0, 49) + '...' : item.title;
        const newPrice = item.currency_code === 'USD' ? '$' : item.currency_code === 'EUR' ? '€' : item.currency_code;
        const newQuantity = item.quantity <= 10 ? 'low' : item.quantity <= 20 ? 'medium' : 'high';

        return (
            <div className="item" key={item.listing_id}>
                <div className="item-image">
                    <a href={item.url}>
                        <img src={item.MainImage.url_570xN} alt={item.title} />
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{newTitle}</p>
                    <p class="item-price">{newPrice}{item.price}</p>
                    <p class={`item-quantity level-${newQuantity}`}>{item.quantity} left</p>
                </div>
            </div>
        )
    })
    return (
        <div className="item-list">{item}</div>
    )
}