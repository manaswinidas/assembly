import React from 'react';
import { CheckboxesRadios } from './checkboxes_radios';
import { Buttons } from './buttons';
import { Pills } from './pills';
import { Grid } from './grid';
import { Typography } from './typography';
import { Elements } from './elements';
import { TablesLists } from './tables_lists';

class Debug extends React.Component {
  render() {
    return (
      <div>
        <div className='mb40'>
          <CheckboxesRadios />
        </div>
        <div className='mb40'>
          <Buttons />
        </div>
        <div className='mb40'>
          <Pills />
        </div>
        <div className='mb40'>
          <Grid />
        </div>
        <div className='mb40'>
          <Typography />
        </div>
        <div className='mb40'>
          <Elements />
        </div>
        <div className='mb40'>
          <TablesLists />
        </div>
      </div>
    );
  }
}

export { Debug };