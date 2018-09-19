// export action creators
import * as loginActions from './loginActions';
import * as profileActions from './profileActions';
import * as navigationActions from './navigationActions';

export const ActionCreators = Object.assign(
    {},
    loginActions,
    profileActions,
    navigationActions
);
