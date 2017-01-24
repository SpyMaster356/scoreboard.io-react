import * as React from 'react';

import {Appbar} from './appbar/appbar';

export const MainLayout = ({
  children,
  location,
}) => (
  <div className="sbio-scoreboard-io">
    <Appbar curLocation={location} />
    {children}
  </div>
);
