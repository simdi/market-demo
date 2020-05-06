import React, { useContext } from 'react';
import { Radio } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { GlobalContext } from '../context';

function Search(props) {
  const context = useContext(GlobalContext);
  const {state, dispatch, searchMarketWithNameCategoryAndLocation } = context;
  console.log('Context', context);
  console.log('State', state);
  const { register, errors, handleSubmit } = useForm();
  console.log('Error', errors);
  const onSubmit = data => {
    console.log(data);
    searchMarketWithNameCategoryAndLocation(data)(dispatch);
  }

  return (
    <div className="ui fluid card">
      <form onSubmit={handleSubmit(onSubmit)} loading={state.loading} className="content">
        <div className="ui grid">
          <div className="sixteen wide column">
            <div className="ui action fluid input">
              <input name="search" ref={register({ required: true, minLength: 2 })} type="text" placeholder="Search by market name or category..." />
              <button className="ui left labeled icon button">
                <i className="search icon"></i>
                Search
              </button>
            </div>
          </div>
          <div className="sixteen wide column">
            <Radio name="nearest" toggle label="Use nearest location to search?" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Search;

