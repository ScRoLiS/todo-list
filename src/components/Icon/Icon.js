import React from 'react';
import classNames from 'classnames';
import './Icon.css';

import IconAddCircle from './IconAddCircle';
import IconBeer from './IconBeer';
import IconBulb from './IconBulb';
import IconBusiness from './IconBusiness';
import IconCall from './IconCall';
import IconCart from './IconCart';
import IconCash from './IconCash';
import IconCreate from './IconCreate';
import IconHome from './IconHome';
import IconList from './IconList';
import IconStar from './IconStar';
import IconTrash from './IconTrash';
import IconWarning from './IconWarning';

function Icon(initProps) {

  const props = { ...initProps };
  const { iconName, className } = props;

  delete props.iconName;
  props.className = classNames('icon', className);

  switch (iconName) {
    case 'add-circle':
      return <IconAddCircle {...props} />;
    case 'beer':
      return <IconBeer {...props} />;
    case 'bulb':
      return <IconBulb {...props} />;
    case 'business':
      return <IconBusiness {...props} />;
    case 'call':
      return <IconCall {...props} />;
    case 'cart':
      return <IconCart {...props} />;
    case 'cash':
      return <IconCash {...props} />;
    case 'create':
      return <IconCreate {...props} />;
    case 'home':
      return <IconHome {...props} />;
    case 'list':
      return <IconList {...props} />;
    case 'trash':
      return <IconTrash {...props} />;
    case 'warning':
      return <IconWarning {...props} />;
    case 'star':
      return <IconStar {...props} />;
    default:
      return <span>Sorry</span>;
  }
}

export default Icon;
