import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/MenuItem';

import './directory.scss';

const Directory = ({sections}) => (
  <div className='directory-menu'>
      {
          sections.map(({id, ...otherSectionProps}) =>(
              <MenuItem 
                  key={id}
                  {...otherSectionProps}
              />
          ))
      }
  </div>
);

const mapStateToProps = state => ({
  sections: selectDirectorySections(state)
});

export default connect(mapStateToProps)(Directory);