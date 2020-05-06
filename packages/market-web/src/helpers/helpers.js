/* 
    @Author: Chisimdi Damian Ezeanieto
    @Date: 05/05/2020
*/
import axios from 'axios';

const Helpers = {
  // This method is to check if a field or object is empty
  isEmpty(value) {
      return(
          value === undefined ||
          value === null ||
          (typeof value === 'object' && Object.keys(value).length === 0) ||
          (typeof value === 'string' && value.trim().length === 0)
      );
  },
  setAuthToken(token) {
    if (token) {
        // Apply to every request
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
  }
};

export default Helpers;