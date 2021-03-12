import { HomeState } from './home.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectHomeState = createFeatureSelector('home');

export const selectHomeText = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.text
);
