import { BrowserRouter } from 'react-router-dom';

import { Menu } from './index';

export default {
  title: 'Menu',
  component: Menu
};

const Template = () => (
  <BrowserRouter>
    <Menu />;
  </BrowserRouter>
);

export const Main = Template.bind({});
