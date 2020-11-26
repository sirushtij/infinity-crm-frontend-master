import React, { useEffect, useState } from "react";
import { DollarSign, PhoneCall } from "react-feather";
import { Col, Row } from "reactstrap";
import StatisticsCard from "../../components/@vuexy/statisticsCard/StatisticsCard";
import { permissions } from "../../configs/permissionsConfig";
import { getDashboardCounters } from "../../services/dashboard.service";

const Dashboard = () => {
  const [counters, setCounters] = useState({});
  useEffect(() => {
    const getCounters = async () => {
      const res = await getDashboardCounters();
      if (res) {
        setCounters(res);
      }
    };
    getCounters();
  }, []);

  return (
    <Row className="match-height">
      {counters[permissions.enquiry] ? (
        <Col lg="3" sm="6">
          <StatisticsCard
            hideChart
            iconRight
            iconBg="primary"
            icon={<PhoneCall className="primary" size={22} />}
            stat={counters[permissions.enquiry]}
            statTitle="Enquiries"
          />
        </Col>
      ) : (
        ""
      )}

      {counters[permissions.sales_lead] ? (
        <Col lg="3" sm="6">
          <StatisticsCard
            hideChart
            iconRight
            iconBg="success"
            icon={<DollarSign className="success" size={22} />}
            stat={counters[permissions.sales_lead]}
            statTitle="Sales Leads"
          />
        </Col>
      ) : (
        ""
      )}
    </Row>
  );
};
export default Dashboard;
