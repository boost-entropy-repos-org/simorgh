import { blockOfTypesAndModel, blocksWithTypes } from '../general';
import { paragraphBlockPropTypes } from '../paragraph';
import { listBlockPropTypes } from '../list';

export const textModelPropTypes = blocksWithTypes([
  paragraphBlockPropTypes.isRequired,
  listBlockPropTypes.isRequired,
]);

export const textModelDefaultProps = {
  blocks: [],
};

export const textBlockPropTypes = blockOfTypesAndModel(
  ['text'],
  textModelPropTypes,
);
