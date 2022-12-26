import React from 'react';
import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({type}) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
       <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Cutstomer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="/images/users/3.jpg" alt="" className="widgetLImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">$122.5</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
          <img src="/images/users/1.jpg" alt="" className="widgetLImg" />
            <span className="widgetLgName">Michel Carol</span>
          </td>
          <td className="widgetLgDate">20 May 2022</td>
          <td className="widgetLgAmount">$122.5</td>
          <td className="widgetLgStatus">
            <Button type="Pending"/>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
          <img src="/images/users/2.jpg" alt="" className="widgetLImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">19 Feb 2022</td>
          <td className="widgetLgAmount">$9999.5</td>
          <td className="widgetLgStatus">
            <Button type="Declined"/>
          </td>
        </tr>
       </table>
    </div>
  )
}

export default WidgetLg
