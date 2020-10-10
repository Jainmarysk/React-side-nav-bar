import React from 'react';

import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';

export const Sidebar =[
    {
        title: 'Home',
        path: '/home',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon:<IoIcons.IoIosPaper />,
        cName:'nav-text'
    },
    {
        title: 'About us',
        path: '/about',
        icon:<FcIcons.FcAbout />,
        cName:'nav-text'
    },
]