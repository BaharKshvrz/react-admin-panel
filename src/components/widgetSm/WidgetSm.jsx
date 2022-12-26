import { Visibility } from '@material-ui/icons';
import React from 'react';
import "./widgetSm.css";

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
          <span className="widgetSmTitle">New Join Members</span>
          <ul className="widgetSmList">
              <li className="widgetSmListItem">
                  <img src="/images/users/1.jpg" alt="" className='widgetSmImage' />
                   <div className="widgetSmUser">
                      <span className="widgetSmUsername">Anna Keller</span>
                      <span className="widgetSmUserTitle">Software Enginner</span>
                    </div>
                   <button className='widgetSmButton'>
                         <Visibility className='widgetSmIcon' />
                         Display
                   </button>
              </li>

              <li className="widgetSmListItem">
                  <img src="/images/users/2.jpg" alt="" className='widgetSmImage' />
                   <div className="widgetSmUser">
                      <span className="widgetSmUsername">Sara Keller</span>
                      <span className="widgetSmUserTitle">Software Enginner</span>
                  </div>
                <button className='widgetSmButton'>
                    <Visibility className='widgetSmIcon' />
                    Display
                </button>
              </li>

              <li className="widgetSmListItem">
                  <img src="/images/users/3.jpg" alt="" className='widgetSmImage' />
                   <div className="widgetSmUser">
                      <span className="widgetSmUsername">John Doe</span>
                      <span className="widgetSmUserTitle">Software Enginner</span>
                   </div>
                   <button className='widgetSmButton'>
                         <Visibility className='widgetSmIcon' />
                         Display
                   </button>
              </li>
          </ul>
    </div>
  )
}

export default WidgetSm
