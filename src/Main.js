import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Demo from './components/Demo.js';
import User from './components/User.js';
import Python from './components/Python.js';
import CSP from './components/CSP.js';

/*import for python*/
import PyUnit1Lesson1 from './courses/Python/Unit1/Unit1Lesson1.js';
import PyUnit1Lesson2 from './courses/Python/Unit1/Unit1Lesson2.js';

import PyUnit2Lesson1 from './courses/Python/Unit2/Unit2Lesson1.js';
import PyUnit2Lesson2 from './courses/Python/Unit2/Unit2Lesson2.js';
import PyUnit2Lesson3 from './courses/Python/Unit2/Unit2Lesson3.js';
import PyUnit2Lesson4 from './courses/Python/Unit2/Unit2Lesson4.js';
import PyUnit2Lesson5 from './courses/Python/Unit2/Unit2Lesson5.js';
import PyUnit2Lesson6 from './courses/Python/Unit2/Unit2Lesson6.js';
import PyUnit2Lesson7 from './courses/Python/Unit2/Unit2Lesson7.js';
import PyUnit2Lesson8 from './courses/Python/Unit2/Unit2Lesson8.js';
import PyUnit2Lesson9 from './courses/Python/Unit2/Unit2Lesson9.js';
import PyUnit2Lesson10 from './courses/Python/Unit2/Unit2Lesson10.js';
import PyUnit2Lesson11 from './courses/Python/Unit2/Unit2Lesson11.js';
import PyUnit2Lesson12 from './courses/Python/Unit2/Unit2Lesson12.js';

import PyUnit3Lesson1 from './courses/Python/Unit3/Unit3Lesson1.js';
import PyUnit3Lesson2 from './courses/Python/Unit3/Unit3Lesson2.js';

import PyUnit4Lesson1 from './courses/Python/Unit4/Unit4Lesson1.js';
import PyUnit4Lesson2 from './courses/Python/Unit4/Unit4Lesson2.js';
import PyUnit4Lesson3 from './courses/Python/Unit4/Unit4Lesson3.js';
import PyUnit4Lesson4 from './courses/Python/Unit4/Unit4Lesson4.js';

import PyUnit5Lesson1 from './courses/Python/Unit5/Unit5Lesson1.js';
import PyUnit5Lesson2 from './courses/Python/Unit5/Unit5Lesson2.js';
import PyUnit5Lesson3 from './courses/Python/Unit5/Unit5Lesson3.js';
import PyUnit5Lesson4 from './courses/Python/Unit5/Unit5Lesson4.js';
import PyUnit5Lesson5 from './courses/Python/Unit5/Unit5Lesson5.js';
import PyUnit5Lesson6 from './courses/Python/Unit5/Unit5Lesson6.js';
import PyUnit5Lesson7 from './courses/Python/Unit5/Unit5Lesson7.js';
import PyUnit5Lesson8 from './courses/Python/Unit5/Unit5Lesson8.js';

import PyUnit6Lesson1 from './courses/Python/Unit6/Unit6Lesson1.js';
import PyUnit6Lesson2 from './courses/Python/Unit6/Unit6Lesson2.js';
import PyUnit6Lesson3 from './courses/Python/Unit6/Unit6Lesson3.js';
import PyUnit6Lesson4 from './courses/Python/Unit6/Unit6Lesson4.js';
import PyUnit6Lesson5 from './courses/Python/Unit6/Unit6Lesson5.js';
import PyUnit6Lesson6 from './courses/Python/Unit6/Unit6Lesson6.js';

import PyUnit7Lesson1 from './courses/Python/Unit7/Unit7Lesson1.js';

import PyUnit8Lesson1 from './courses/Python/Unit8/Unit8Lesson1.js';
import PyUnit8Lesson2 from './courses/Python/Unit8/Unit8Lesson2.js';
import PyUnit8Lesson3 from './courses/Python/Unit8/Unit8Lesson3.js';
import PyUnit8Lesson4 from './courses/Python/Unit8/Unit8Lesson4.js';
import PyUnit8Lesson5 from './courses/Python/Unit8/Unit8Lesson5.js';

import PyUnit9Lesson1 from './courses/Python/Unit9/Unit9Lesson1.js';

import PyUnit10Lesson1 from './courses/Python/Unit10/Unit10Lesson1.js';
import PyUnit10Lesson2 from './courses/Python/Unit10/Unit10Lesson2.js';


/*import for CSP*/
import CspUnit1Lesson1 from './courses/CSP/Unit1/Unit1Lesson1.js';
import CspUnit1Lesson2 from './courses/CSP/Unit1/Unit1Lesson2.js';
import CspUnit1Lesson3 from './courses/CSP/Unit1/Unit1Lesson3.js';
import CspUnit1Lesson4 from './courses/CSP/Unit1/Unit1Lesson4.js';

import CspUnit2Lesson1 from './courses/CSP/Unit2/Unit2Lesson1.js';
import CspUnit2Lesson2 from './courses/CSP/Unit2/Unit2Lesson2.js';
import CspUnit2Lesson3 from './courses/CSP/Unit2/Unit2Lesson3.js';
import CspUnit2Lesson4 from './courses/CSP/Unit2/Unit2Lesson4.js';
import CspUnit2Lesson5 from './courses/CSP/Unit2/Unit2Lesson5.js';
import CspUnit2Lesson6 from './courses/CSP/Unit2/Unit2Lesson6.js';

import CspUnit3Lesson1 from './courses/CSP/Unit3/Unit3Lesson1.js';
import CspUnit3Lesson2 from './courses/CSP/Unit3/Unit3Lesson2.js';
import CspUnit3Lesson3 from './courses/CSP/Unit3/Unit3Lesson3.js';
import CspUnit3Lesson4 from './courses/CSP/Unit3/Unit3Lesson4.js';
import CspUnit3Lesson5 from './courses/CSP/Unit3/Unit3Lesson5.js';

import CspUnit4Lesson1 from './courses/CSP/Unit4/Unit4Lesson1.js';
import CspUnit4Lesson2 from './courses/CSP/Unit4/Unit4Lesson2.js';
import CspUnit4Lesson3 from './courses/CSP/Unit4/Unit4Lesson3.js';

import CspUnit5Lesson1 from './courses/CSP/Unit5/Unit5Lesson1.js';
import CspUnit5Lesson2 from './courses/CSP/Unit5/Unit5Lesson2.js';

import CspUnit6Lesson1 from './courses/CSP/Unit6/Unit6Lesson1.js';
import CspUnit6Lesson2 from './courses/CSP/Unit6/Unit6Lesson2.js';

import CspUnit7Lesson1 from './courses/CSP/Unit7/Unit7Lesson1.js';
import CspUnit7Lesson2 from './courses/CSP/Unit7/Unit7Lesson2.js';
import CspUnit7Lesson3 from './courses/CSP/Unit7/Unit7Lesson3.js';
import CspUnit7Lesson4 from './courses/CSP/Unit7/Unit7Lesson4.js';
import CspUnit7Lesson5 from './courses/CSP/Unit7/Unit7Lesson5.js';

import CspUnit8Lesson1 from './courses/CSP/Unit8/Unit8Lesson1.js';
import CspUnit8Lesson2 from './courses/CSP/Unit8/Unit8Lesson2.js';

const routes = [
  { path: '/',
    exact: true,
    main: () => <Home />
  },
  { path: '/About',
    main: () => <About />
  },
  { path: '/Contact',
    main: () => <Contact />
  },
  { path: '/Demo',
    main: () => <Demo />
  },
  { path: '/Courses',
    main: () => <User />
  },
  { path: '/Python',
    main: () => <Python />
  },
  { path: '/CSP',
    main: () => <CSP />
  },
  { path: '/Python-Unit1Lesson1',
    main: () => <PyUnit1Lesson1 />
  },
  { path: '/Python-Unit1Lesson2',
    main: () => <PyUnit1Lesson2 />
  },
  { path: '/Python-Unit2Lesson1',
    main: () => <PyUnit2Lesson1 />
  },
  { path: '/Python-Unit2Lesson2',
    main: () => <PyUnit2Lesson2 />
  },
  { path: '/Python-Unit2Lesson3',
    main: () => <PyUnit2Lesson3 />
  },
  { path: '/Python-Unit2Lesson4',
    main: () => <PyUnit2Lesson4 />
  },
  { path: '/Python-Unit2Lesson5',
    main: () => <PyUnit2Lesson5 />
  },
  { path: '/Python-Unit2Lesson6',
    main: () => <PyUnit2Lesson6 />
  },
  { path: '/Python-Unit2Lesson7',
    main: () => <PyUnit2Lesson7 />
  },
  { path: '/Python-Unit2Lesson8',
    main: () => <PyUnit2Lesson8 />
  },
  { path: '/Python-Unit2Lesson9',
    main: () => <PyUnit2Lesson9 />
  },
  { path: '/Python-Unit2Lesson10',
    main: () => <PyUnit2Lesson10 />
  },
  { path: '/Python-Unit2Lesson11',
    main: () => <PyUnit2Lesson11 />
  },
  { path: '/Python-Unit2Lesson12',
    main: () => <PyUnit2Lesson12 />
  },
  { path: '/Python-Unit3Lesson1',
    main: () => <PyUnit3Lesson1 />
  },
  { path: '/Python-Unit3Lesson2',
    main: () => <PyUnit3Lesson2 />
  },
  { path: '/Python-Unit4Lesson1',
    main: () => <PyUnit4Lesson1 />
  },
  { path: '/Python-Unit4Lesson2',
    main: () => <PyUnit4Lesson2 />
  },
  { path: '/Python-Unit4Lesson3',
    main: () => <PyUnit4Lesson3 />
  },
  { path: '/Python-Unit4Lesson4',
    main: () => <PyUnit4Lesson4 />
  },
  { path: '/Python-Unit5Lesson1',
    main: () => <PyUnit5Lesson1 />
  },
  { path: '/Python-Unit5Lesson2',
    main: () => <PyUnit5Lesson2 />
  },
  { path: '/Python-Unit5Lesson3',
    main: () => <PyUnit5Lesson3 />
  },
  { path: '/Python-Unit5Lesson4',
    main: () => <PyUnit5Lesson4 />
  },
  { path: '/Python-Unit5Lesson5',
    main: () => <PyUnit5Lesson5 />
  },
  { path: '/Python-Unit5Lesson6',
    main: () => <PyUnit5Lesson6 />
  },
  { path: '/Python-Unit5Lesson7',
    main: () => <PyUnit5Lesson7 />
  },
  { path: '/Python-Unit5Lesson8',
    main: () => <PyUnit5Lesson8 />
  },
  { path: '/Python-Unit6Lesson1',
    main: () => <PyUnit6Lesson1 />
  },
  { path: '/Python-Unit6Lesson2',
    main: () => <PyUnit6Lesson2 />
  },
  { path: '/Python-Unit6Lesson3',
    main: () => <PyUnit6Lesson3 />
  },
  { path: '/Python-Unit6Lesson4',
    main: () => <PyUnit6Lesson4 />
  },
  { path: '/Python-Unit6Lesson5',
    main: () => <PyUnit6Lesson5 />
  },
  { path: '/Python-Unit6Lesson6',
    main: () => <PyUnit6Lesson6 />
  },
  { path: '/Python-Unit7Lesson1',
    main: () => <PyUnit7Lesson1 />
  },
  { path: '/Python-Unit8Lesson1',
    main: () => <PyUnit8Lesson1 />
  },
  { path: '/Python-Unit8Lesson2',
    main: () => <PyUnit8Lesson2 />
  },
  { path: '/Python-Unit8Lesson3',
    main: () => <PyUnit8Lesson3 />
  },
  { path: '/Python-Unit8Lesson4',
    main: () => <PyUnit8Lesson4 />
  },
  { path: '/Python-Unit8Lesson5',
    main: () => <PyUnit8Lesson5 />
  },
  { path: '/Python-Unit9Lesson1',
    main: () => <PyUnit9Lesson1 />
  },
  { path: '/Python-Unit10Lesson1',
    main: () => <PyUnit10Lesson1 />
  },
  { path: '/Python-Unit10Lesson2',
    main: () => <PyUnit10Lesson2 />
  },
  { path: '/CSP-Unit1Lesson1',
    main: () => <CspUnit1Lesson1 />
  },
  { path: '/CSP-Unit1Lesson2',
    main: () => <CspUnit1Lesson2 />
  },
  { path: '/CSP-Unit1Lesson3',
    main: () => <CspUnit1Lesson3 />
  },
  { path: '/CSP-Unit1Lesson4',
    main: () => <CspUnit1Lesson4 />
  },
  { path: '/CSP-Unit2Lesson1',
    main: () => <CspUnit2Lesson1 />
  },
  { path: '/CSP-Unit2Lesson2',
    main: () => <CspUnit2Lesson2 />
  },
  { path: '/CSP-Unit2Lesson3',
    main: () => <CspUnit2Lesson3 />
  },
  { path: '/CSP-Unit2Lesson4',
    main: () => <CspUnit2Lesson4 />
  },
  { path: '/CSP-Unit2Lesson5',
    main: () => <CspUnit2Lesson5 />
  },
  { path: '/CSP-Unit2Lesson6',
    main: () => <CspUnit2Lesson6 />
  },
  { path: '/CSP-Unit3Lesson1',
    main: () => <CspUnit3Lesson1 />
  },
  { path: '/CSP-Unit3Lesson2',
    main: () => <CspUnit3Lesson2 />
  },
  { path: '/CSP-Unit3Lesson3',
    main: () => <CspUnit3Lesson3 />
  },
  { path: '/CSP-Unit3Lesson4',
    main: () => <CspUnit3Lesson4 />
  },
  { path: '/CSP-Unit3Lesson5',
    main: () => <CspUnit3Lesson5 />
  },
  { path: '/CSP-Unit4Lesson1',
    main: () => <CspUnit4Lesson1 />
  },
  { path: '/CSP-Unit4Lesson2',
    main: () => <CspUnit4Lesson2 />
  },
  { path: '/CSP-Unit4Lesson3',
    main: () => <CspUnit4Lesson3 />
  },
  { path: '/CSP-Unit5Lesson1',
    main: () => <CspUnit5Lesson1 />
  },
  { path: '/CSP-Unit5Lesson2',
    main: () => <CspUnit5Lesson2 />
  },
  { path: '/CSP-Unit6Lesson1',
    main: () => <CspUnit6Lesson1 />
  },
  { path: '/CSP-Unit6Lesson2',
    main: () => <CspUnit6Lesson2 />
  },
  { path: '/CSP-Unit7Lesson1',
    main: () => <CspUnit7Lesson1 />
  },
  { path: '/CSP-Unit7Lesson2',
    main: () => <CspUnit7Lesson2 />
  },
  { path: '/CSP-Unit7Lesson3',
    main: () => <CspUnit7Lesson3 />
  },
  { path: '/CSP-Unit7Lesson4',
    main: () => <CspUnit7Lesson4 />
  },
  { path: '/CSP-Unit7Lesson5',
    main: () => <CspUnit7Lesson5 />
  },
  { path: '/CSP-Unit8Lesson1',
    main: () => <CspUnit8Lesson1 />
  },
  { path: '/CSP-Unit8Lesson2',
    main: () => <CspUnit8Lesson2 />
  },
  
]

class WebPage extends React.Component {
    render() {
        return (
          <Router>
            <div class='main'>
                <Header />
                
                {routes.map((route) => (
                    <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                    />
                ))}
              
                <Footer />

            </div>
          </Router>
        )
      }
}

export default WebPage;