import React, { useContext } from 'react';
import Byline from '@bbc/psammead-byline';
import { ServiceContext } from '#contexts/ServiceContext';
import bylineBlockPropTypes from '#models/propTypes/byline';
import { MediumGridWithMargin } from '#app/components/Grid';

const BylineContainer = ({ blocks, className }) => {
  const { service } = useContext(ServiceContext);

  if (!blocks) {
    return null;
  }

  const { name, title } = blocks[0];

  if (name && title) {
    return (
      <MediumGridWithMargin className={className}>
        <Byline service={service} name={name} title={title} />
      </MediumGridWithMargin>
    );
  }
  return null;
};

BylineContainer.propTypes = bylineBlockPropTypes;

export default BylineContainer;
