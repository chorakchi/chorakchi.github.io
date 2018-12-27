import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Icon from './Icon'

storiesOf('Icon', module)
  .add('Search icon', ()=>(
    <Icon
      iconId='search'
      size='M'
    ></Icon>
  ))
  .add('Login icon', ()=>(
    <Icon
      iconId='login'
      size='M'
    ></Icon>
  ))
  .add('Logout icon', ()=>(
    <Icon
      iconId='logout'
      size='M'
    ></Icon>
  ))
  .add('Edit icon', ()=>(
    <Icon
      iconId='edit'
      size='M'
    ></Icon>
  ))
  .add('Close icon', ()=>(
    <Icon
      iconId='close'
      size='M'
    ></Icon>
  ))
  .add('Ellipsis Icon', ()=>(
    <Icon
      iconId='ellipsisV'
      size='XL'
      color='PRIMARY'
    ></Icon>
  ))
  .add('User Icon', ()=>(
    <Icon
      iconId='user'
      size='M'
    ></Icon>
  ))
  .add('Triangle Up Icon', ()=>(
    <Icon
      iconId='triangleUp'
      size='M'
    ></Icon>
  ))
  .add('Triangle Down Icon', ()=>(
    <Icon
      iconId='triangleDown'
      size='M'
    ></Icon>
  ))
  .add('Mascot Icon', ()=>(
    <Icon
      iconId='mascot'
      width='60px'
    ></Icon>
  ))
