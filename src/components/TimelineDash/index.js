import { DashboardItem } from "./DashboardItem";

export const Dashboard = ({ items, timelineDatesRange }) => {
  return (
    <div className="dashboard ">
      <DashboardItem items={items} timelineDatesRange={timelineDatesRange} />
    </div>
  );
};
