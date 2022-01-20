import * as React from 'react';
import { CommonActions } from '@react-navigation/native';
/** navigation reference created */
export const navigationRef = React.createRef();
export const routeNameRef = React.createRef();
/** navigate to a specific route */
export function navigate(routeName, params) {
    navigationRef.current?.navigate(routeName, params);
}
/** reset the navigation state to the given route */
export function navigateToClearStack(routeName, params) {
    navigationRef.current?.dispatch(
        CommonActions.reset({
            index: 1,
            routes: [{ name: routeName, params: params }],
        }),
    );
}

/** reset the navigation state to the initial route */
export function navigateToClearStackInitial(routeName, params) {
    navigationRef.current?.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{ name: routeName, params: params }],
        }),
    );
}
/** reset the navigation state to the given routeArray */
export function navigateManyToClearStack(routeArray, index) {
    navigationRef.current?.dispatch(
        CommonActions.reset({
            index: index,
            routes: routeArray,
        }),
    );
}
/** navigate back */
export function goBack() {
    navigationRef.current?.dispatch(CommonActions.goBack());
}
/** navigation reference created */
export const drawerNavigationRef = React.createRef();
/** open drawer */
export function openDrawer() {
    // drawerNavigationRef.current?.openDrawer();

}
