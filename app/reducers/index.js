/* 
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as signupReducer from './signupReducer';
export default Object.assign(loginReducer, loadingReducer, signupReducer);
