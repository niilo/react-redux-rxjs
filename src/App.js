import React from 'react'

import {connect} from 'react-redux'
import {fetchData} from './actions'

const App = props => {
  return (
    <div className='container'>
      <button
        className='button button-primary'
        onClick={() => props.fetchData()}
      >
        Hae data
      </button>
      <div>
        {props.appData.isFetching && <p>Loading</p>}
        {props.appData.data.length
          ? props.appData.data.map((person, i) => {
              return (
                <ul key={i}>
                  <li>Name: {person.name}</li>
                  <li>Age: {person.age}</li>
                </ul>
              )
            })
          : null}
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
