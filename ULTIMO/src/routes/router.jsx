import React from 'react'
import { createBrowserRouter } from "react-router-dom";


//paginas
import TIPS from '../pages/TIPS';
import CONTACTO from '../pages/CONTACTO';
import NotFound from '../pages/NotFound';
import INFORMACION from '../pages/INFORMACION';
import LOGIN from '../pages/LOGIN';

import LAYOUT from '../layout/LAYOUT';


const router = createBrowserRouter([

    {

        path:"/",

        element: <LAYOUT/>,

        errorElement: <NotFound/>,

        children: [

            {

                errorElement: <NotFound/>,

                children:[

                    {

                        path: "/",

                        element: <LOGIN/>

                    },
                    {

                        path: "/CONTACTO",

                        element: <CONTACTO/>

                    },

                    {

                        path: "/INFORMACION",

                        element: <INFORMACION/>

                    },

                    {

                        path: "/TIPS",

                        element: <TIPS/>

                    },

                ]

            }

        ]

    }

])

export default router