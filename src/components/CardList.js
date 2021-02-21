import React from 'react';
import Card from './Card';
import {connect} from 'react-redux';
import RingLoader from 'react-spinners/RingLoader';
import {useMemo, useState} from 'react';

const CardList = ({ profile }) => {
    const { profiles, isLoading } = profile;

    const cards = useMemo(() => {
        return profiles.map(profile => {
            return <Card {...profile} />
        })
    }, [profiles])

    return (
        <div>
            {isLoading && <RingLoader size={30} color='violet'/>}
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
