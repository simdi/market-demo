import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { GlobalContext } from '../context';

function Search(props) {
  const context = useContext(GlobalContext);
  const {state, dispatch, searchMarketWithNameCategoryAndLocation } = context;
  const { register, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      search: "",
      nearest: false,
      lng: 3.3792,
      lat: 6.5244,
    }
  });

  const onSubmit = data => {
    searchMarketWithNameCategoryAndLocation(data)(dispatch);
  }

  const getUserLocation = (state) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setValue('lat', position.coords.latitude);
        setValue('lng', position.coords.longitude);
      });
    } else {
      alert("You need to accept google maps location");
    }
  }

  getUserLocation(getValues());

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
            <div className="ui toggle checkbox">
              <input type="text" ref={register} name="lng" hidden />
              <input type="text" ref={register} name="lat" hidden />
              <input type="checkbox" ref={register} name="nearest" />
              <label>Use to search markets nearest to your location?</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Search;

