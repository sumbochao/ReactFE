import React, { Component } from 'react'
import _ from 'lodash'
export default class ChildComponent extends Component {

  shouldComponentUpdate(newProps, newState){
    console.log('newProps', newProps)
    if(!_.isEqual(this.props.user, newProps.user)){
      return true;
    }
    return false;
  }
  render() {
    console.log("child component")
    return (
      <div>
        <h1>User Child: {this.props.user.name}</h1>
        <div>
          {/* Nav tabs */}
          <ul className="nav nav-tabs" id="navId">
            <li className="nav-item">
              <a href="#tab1Id" className="nav-link active">
                Active
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="/"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#tab2Id">
                  Action
                </a>
                <a className="dropdown-item" href="#tab3Id">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#tab4Id">
                  Action
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a href="#tab5Id" className="nav-link">
                Another link
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link disabled">
                Disabled
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="tab1Id"
              role="tabpanel"
            />
            <div className="tab-pane fade" id="tab2Id" role="tabpanel" />
            <div className="tab-pane fade" id="tab3Id" role="tabpanel" />
            <div className="tab-pane fade" id="tab4Id" role="tabpanel" />
            <div className="tab-pane fade" id="tab5Id" role="tabpanel" />
          </div>
        </div>
      </div>
    );
  }
}
