import { createReducer, Action } from '@ngrx/store';

import { Bookmark } from './../../../shared/models/bookmark.model';

export interface BookmarkState {
  list: Bookmark[];
}
