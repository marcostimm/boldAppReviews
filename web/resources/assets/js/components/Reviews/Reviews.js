import React, { Component }                     from 'react';
import { connect }                              from 'react-redux';
import PropTypes                                from 'prop-types';
import {appsList}                               from '../../actions/AppsActions';

class Reviews extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.loadApps()
     }

     loadApps() {
        this.props.appsList().then(
            (res) => console.log('app list loaded!')
        );
    }

    render() {

        const { stats, isLoaded } = this.props.dash;

        return (
          <div>
            <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                <div className="container-fluid">
                <div className="navbar-wrapper">
                    <a className="navbar-brand" href="#pablo">App Reviews</a>
                </div>
                </div>
            </nav>
            
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                Olar
                </div>
              </div>
            </div>
          </div>
        )
    }
}

Reviews.propTypes = {
  appsList: PropTypes.func.isRequired
}

const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps, { 
  appsList
} )(Reviews);