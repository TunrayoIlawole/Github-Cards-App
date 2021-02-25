import React from 'react';
import { connect } from 'react-redux';
import { useMemo, useEffect } from 'react';
import RingLoader from 'react-spinners/RingLoader';
import { toast } from 'react-hot-toast';
import Card from './Card';

// this.props.profile
const CardList = ({ profile }) => {
    const { profiles, isLoading, hasError, errorMessage } = profile;

    const cards = useMemo(() => {
        return profiles.map(profile => {
            return <Card key = {profile.id} {...profile} />
        })
    }, [profiles]);

    useEffect(() => {
        if(hasError) {
            toast.error(errorMessage)
        }
    }, [hasError, errorMessage])

    const dataLoading = () => {
        if (isLoading) {
            return <RingLoader size = {30} color = "violet" />
        } else {
            return
        }
    }

    return (
        <div>
            {/* {isLoading && <RingLoader size = {30} color = "violet" />} */}
            {dataLoading}
            {cards}
        </div>
    )
};

// state in this case is the combineReducers?
const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps)(CardList);