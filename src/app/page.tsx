"use client"
import Topbar from "./topbar/Topbar";
import Card from "./overview/cards/Card";
import Charts from "./overview/charts/Charts";
import Activities from "./overview/activities/activities";

export default function Home() {   
  return (
    <div className="">
      <Topbar />
      <div className="p-4">
        <Card />
        <Charts />
        <Activities />
      </div>
    </div>
  );
}
