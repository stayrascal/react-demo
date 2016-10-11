import React from 'react';

declare type $React$Element = React.Element<*>;

declare type $React$Node = string | number | $React$Element | Array<$React$Element>;

declare type $React$Child = $React$Node | boolean | void | null;

declare type $React$Children = $React$Child | Array($React$Children);
