import { CounterStateManager, StateManagerTypes } from "../config";
import {
    useCounterStateData as useCounterStateDataCtx,
    useCounterStateActions as useCounterStateActionsCtx
} from './counterStateSelectorCtx';
import {
    useCounterStateData as useCounterStateDataRedux,
    useCounterStateActions as useCounterStateActionsRedux
} from './counterStateSelectorRdx';

let useCounterStateData = () => { }
let useCounterStateActions = () => { }

if (CounterStateManager === StateManagerTypes.Context) {
    useCounterStateData = useCounterStateDataCtx;
    useCounterStateActions = useCounterStateActionsCtx;
}
else if (CounterStateManager === StateManagerTypes.Redux) {
    useCounterStateData = useCounterStateDataRedux;
    useCounterStateActions = useCounterStateActionsRedux;
}
else {
    throw new Error('Not supported state manager config!!!');
}

export { useCounterStateData, useCounterStateActions };