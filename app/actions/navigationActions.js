/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';

export function navigateToHome(params) {
    NavigationService.navigate('App', params);
}

export function navigateToLogin(params) {
    NavigationService.navigate('Auth', params);
}