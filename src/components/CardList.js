import React from 'react';
import Card from './Card';

const CardList = (props) => {
    const testData = props.profile;
    const cards = testData.map(profile => {
        return <Card {...profile} />
    })
    return (
        <div>
            {cards}
        </div>
    )
}

export default CardList;