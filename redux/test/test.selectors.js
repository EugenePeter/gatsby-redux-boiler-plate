import { createSelector } from 'reselect';

const selectSteps = state => state.test;

export const steps = createSelector(
    [selectSteps],
    test => test.step
);