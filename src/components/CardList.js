import React from 'react';
import Card from './Card';
import {connect} from 'react-redux';
import RingLoader from 'react-spinners/RingLoader';
import {useMemo, useEffect} from 'react';
import {toast} from 'react-hot-toast';

const CardList = ({ profile }) => {
    const { profiles, isLoading, hasError, errorMessage } = profile;

    const cards = useMemo(() => {
        return profiles.map(profile => {
            return <Card {...profile} />
        })
    }, [profiles])

    useEffect(() => {
        if(hasError){
            toast.error(errorMessage)
        }
    }, [hasError, errorMessage])

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
