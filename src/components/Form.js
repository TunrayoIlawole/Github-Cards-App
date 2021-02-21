import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../actions';

class Form extends Component {

    state = {
        username: ""
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await this.props.getProfile(this.state.username);
        console.log(this.props.profile);
        console.log(this.state.username);
    }

    render() {
        console.log(this.props.profile);
        return (
            <form onSubmit = {this.handleSubmit}>
                <input 
                    type = "text" 
                    placeholder = "GitHub Username"
                    value = {this.state.username}
                    onChange = {e => this.setState({ username: e.target.value})}
                    />
                <button>Add Card</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }

}

export default connect(mapStateToProps, {
    getProfile: getProfile
})(Form);