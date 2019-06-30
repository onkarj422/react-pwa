import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Tile from '../app/components/Tile';

storiesOf('Tile', module).add('Tile', () => <Tile />);
