import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import cvDocument from './cvDocument';
import mainContent from './mainContent';
import rowFragment from './rowFragment';
import rows from './rows';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([cvDocument, mainContent, rowFragment, rows]),
});
