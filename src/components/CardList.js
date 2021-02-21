import React from 'react';
import Card from './Card';
import {connect} from 'react-redux';

const CardList = (props) => {
    const testData = props.profile.profiles;
    const cards = testData.map(profile => {
        return <Card {...profile} />
    })
    return (
        <div>
            {cards}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps)(CardList)
