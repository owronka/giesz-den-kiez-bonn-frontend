import { createSelector } from 'reselect';

export const wateredTreesResponse = state => state.wateredTrees;
export const wateredTreesStatusSelector = state => state;
const treeLastWateredSelector = state => state.wateredTrees;

export const litersSpendSelector = createSelector(
  [treeLastWateredSelector],
  data => {
    if (data.length > 0) {
      let liters = 0;
      data.forEach(item => {
        liters += item.amount;
      });
      return liters;
    } else {
      return 0;
    }
  }
);

export const wateredTreesSelector = createSelector(
  [wateredTreesResponse],
  (data: string[]): Record<string, string> | null => {
    if (data) {
      const obj = {};
      data.forEach(id => {
        obj[id] = { included: true };
      });
      return obj;
    } else {
      return null;
    }
  }
);

export default {
  wateredTreesSelector,
  litersSpendSelector,
};
