import React, { Component }                     from 'react';
import { connect }                              from 'react-redux';
import PropTypes                                from 'prop-types';
import {appsList}                               from '../../actions/AppsActions';
import {listReviews}                            from '../../actions/ReviewsAction';

class Reviews extends Component {

    constructor(props) {
        super(props);

        this.state = {
          selectedApp: null,
          selectedSlug: null,
          orderBy: 'updated_at',
          dir: true
        };
    }

    componentDidMount() {
        this.loadApps()
     }

     loadApps() {
        this.props.appsList()
    }

    openApp(name, slug, order = 'updated_at', dir = true) {
      this.setState({selectedApp: name, selectedSlug: slug});
      this.props.reviews.reviews = [];
      this.props.listReviews(slug, {'order': order, 'dir': dir});
    }

    orderBy(field) {
      let newDir = !this.state.dir;
      this.setState({orderBy: field, dir: newDir})
      this.openApp(this.state.selectedApp, this.state.selectedSlug, field, newDir);
    }

    starLabel(rate) {
      var label = 'light';
      switch (rate) {
        case '5':
          label = 'success';
          break;
        case '4':
          label = 'info';
          break;
        case '3':
          label = 'warning';
          break;
        case '2':
          label = 'secondary';
          break;
        case '1':
          label = 'danger';
          break;
      }
      return <span className={'badge badge-pill badge-'+label}>{rate}</span>;
    }

    analyzeChanges(current, previous) {
      if (!previous) {
        return <i className="material-icons">minimize</i>;
      }
      return (current > previous) ? <span className='text-success'><i className='material-icons'>thumb_up</i></span> : <span className='text-danger'><i className='material-icons'>thumb_down</i></span>
    }

    render() {

        const { apps } = this.props.apps;
        const { reviews } = this.props.reviews;
        const { selectedApp } = this.state;

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
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header card-header-warning">
                        <div className="dropdown">
                          <button className="btn btn-transparent dropdown-toggle" type="button" id="dropdownBoldApp" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {selectedApp || 'Select Bold App'}
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownBoldApp">
                          { !apps ? <a className="dropdown-item" href="#">loading...</a> : (apps.map((app, i) => <a key={i} className="dropdown-item" href="#" onClick={() => this.openApp(app.name, app.slug)}>{app.name}</a> )) }
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        
                        { reviews[0] ?
                        (<div className="table-responsive">
                          <table className="table">
                            <thead className=" text-primary">
                              <tr>
                                <th><a onClick={() => this.orderBy('star_rating')} href="#">Rating</a></th>
                                <th><a onClick={() => this.orderBy('previous_star_rating')} href="#">Previous Rating</a></th>
                                <th><a onClick={() => this.orderBy('shopify_domain')} href="#">App Domain</a></th>
                                <th><a onClick={() => this.orderBy('created_at')} href="#">Created</a></th>
                                <th><a onClick={() => this.orderBy('updated_at')} href="#">Updated</a></th>
                                <th>Review Changed</th>
                              </tr>
                            </thead>
                            <tbody>
                            {reviews.map((review, i) => (
                              <tr key={i}>
                                <td>{this.starLabel(review.star_rating)}</td>
                                <td>{review.previous_star_rating ? <span className="badge badge-pill badge-light">{review.previous_star_rating}</span> : '-'}</td>
                                <td><a href={'http://'+review.shopify_domain} target="_blank">{review.shopify_domain}</a></td>
                                <td>{review.created_at}</td>
                                <td>{review.updated_at}</td>
                                <td>{this.analyzeChanges(review.star_rating, review.previous_star_rating)}</td>
                              </tr>
                            ))}
                            </tbody>
                          </table>
                        </div>)
                        : ''}
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

Reviews.propTypes = {
  appsList: PropTypes.func.isRequired,
  listReviews: PropTypes.func.isRequired
}

const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps, { 
  appsList,
  listReviews
} )(Reviews);