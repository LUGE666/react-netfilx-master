import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  console.log('series', series);
  console.log('films', films);
  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}
