import React, { Component }                     from 'react';
import { connect }                              from 'react-redux';
import PropTypes                                from 'prop-types';
import {dashStats}                              from '../../actions/DashActions';

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.loadStats()
     }

     loadStats() {
        this.props.dashStats().then(
            (res) => console.log('stats loaded!')
        );
    }

    render() {

        const { stats, isLoaded } = this.props.dash;

        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                <div className="container-fluid">
                <div className="navbar-wrapper">
                    <a className="navbar-brand" href="#pablo">Dashboard</a>
                </div>
                </div>
            </nav>


            <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-warning card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">apps</i>
                      </div>
                      <p className="card-category">Bold Apps</p>
                      <h3 className="card-title">{stats.totalApps || '...'}</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">notification_important</i>
                        You can add more other apps in the database
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">rate_review</i>
                      </div>
                      <p className="card-category">Total reviews</p>
                      <h3 className="card-title">{stats.totalReviews || '...'}</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">date_range</i> Since the last update
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-danger card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">favorite</i>
                      </div>
                      <p className="card-category">Overall Rating</p>
                      <h3 className="card-title">{stats.avgAppRating || '...'}</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">local_offer</i> (all apps)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-info card-header-icon">
                      <div className="card-icon">
                      <i className="material-icons">star</i>
                      </div>
                      <p className="card-category">Ratings Per App</p>
                      <h3 className="card-title">{stats.ratingPerApp || '...'}</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">update</i> Just Updated
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card card-chart">
                    <div className="card-header card-header-success">
                      <div className="ct-chart" id="dailySalesChart"></div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Daily Reviews</h4>
                      <p className="card-category">
                        <span className="text-success"><i className="fa fa-long-arrow-up"></i> XX% </span> increase in today reviews.</p>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">access_time</i> updated x minutes ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-chart">
                    <div className="card-header card-header-warning">
                      <div className="ct-chart" id="websiteViewsChart"></div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Reviews changed</h4>
                      <p className="card-category">Last Campaign Performance</p>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">access_time</i> campaign sent x days ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-chart">
                    <div className="card-header card-header-danger">
                      <div className="ct-chart" id="completedTasksChart"></div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Reviews Healthy</h4>
                      <p className="card-category">Last Campaign Performance</p>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">access_time</i> campaign sent x days ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        )
    }
}

Dashboard.propTypes = {
    dashStats: PropTypes.func.isRequired
}

const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps, { 
    dashStats
} )(Dashboard);