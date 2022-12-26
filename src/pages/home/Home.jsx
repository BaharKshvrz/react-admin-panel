import React from 'react'
import { userData } from '../../DummyData';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLg from '../../components/WidgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import "./home.css";

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart title="User Analytics" data={userData} dataKey="Active User" grid />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home
