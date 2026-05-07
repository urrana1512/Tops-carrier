import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";
import { Line, Pie } from "react-chartjs-2";
import { LuUsers, LuPackage, LuIndianRupee, LuShoppingBag, LuMessageSquare, LuStar, LuTrendingUp } from "react-icons/lu";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

function Dashboard() {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [filter, setFilter] = useState("Monthly");

  useEffect(() => {
    axios.get("http://localhost:5000/customers").then((res) => setCustomers(res.data));
    axios.get("http://localhost:5000/products").then((res) => setProducts(res.data));
    axios.get("http://localhost:5000/orders").then((res) => setOrders(res.data));
    axios.get("http://localhost:5000/feedback").then((res) => setFeedbacks(res.data));
  }, []);

  const totalRevenue = orders.reduce((sum, order) => sum + (order.total || 0), 0);

  const monthlySales = {};
  orders.forEach((o) => {
    const month = new Date(o.date).toLocaleString("default", { month: "short" });
    monthlySales[month] = (monthlySales[month] || 0) + (o.total || 0);
  });

  const salesData = {
    labels: Object.keys(monthlySales),
    datasets: [
      {
        label: "Revenue",
        data: Object.values(monthlySales),
        borderColor: "#C0622A",
        backgroundColor: "rgba(192, 98, 42, 0.1)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#C0622A",
      },
    ],
  };

  const salesOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { 
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1C1917",
        padding: 12,
        titleFont: { family: 'DM Sans', size: 13 },
        bodyFont: { family: 'DM Mono', size: 12 },
      }
    ,
    },
    scales: {
      y: { grid: { color: "rgba(0,0,0,0.05)" }, ticks: { font: { family: 'DM Mono' } } },
      x: { grid: { display: false }, ticks: { font: { family: 'DM Sans' } } }
    }
  };

  const orderStatusCount = {
    Delivered: orders.filter((o) => o.status === "Delivered").length,
    Pending: orders.filter((o) => o.status === "Pending").length,
    Cancelled: orders.filter((o) => o.status === "Cancelled").length,
  };

  const ordersData = {
    labels: ["Delivered", "Pending", "Cancelled"],
    datasets: [
      {
        data: Object.values(orderStatusCount),
        backgroundColor: ["#3D6B5E", "#D4924A", "#C4736A"],
        borderWidth: 0,
        hoverOffset: 4
      },
    ],
  };

  return (
    <div className="admin-page-content">
      <header className="admin-page-header mb-5">
        <div className="d-flex justify-content-between align-items-end">
          <div>
            <h1 className="font-display">General Overview</h1>
            <p className="text-secondary">Insight into Jayhind's performance and inventory.</p>
          </div>
          <div className="admin-date-pill badge-pill status-active">
            {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>
      </header>

      {/* ✅ KPI Grid */}
      <div className="admin-stats-grid mb-5">
        <div className="card-premium stats-card">
          <div className="stats-icon-wrapper sales"><LuIndianRupee size={24} /></div>
          <div className="stats-info">
            <span className="stats-label">Total Revenue</span>
            <h2 className="mono">₹<CountUp end={totalRevenue} duration={2} separator="," /></h2>
            <span className="stats-diff positive"><LuTrendingUp size={12} className="me-1" /> +12.5%</span>
          </div>
        </div>

        <div className="card-premium stats-card">
          <div className="stats-icon-wrapper orders"><LuShoppingBag size={24} /></div>
          <div className="stats-info">
            <span className="stats-label">Total Orders</span>
            <h2 className="mono"><CountUp end={orders.length} duration={2} /></h2>
            <span className="stats-diff text-tertiary">Lifetime volume</span>
          </div>
        </div>

        <div className="card-premium stats-card">
          <div className="stats-icon-wrapper customers"><LuUsers size={24} /></div>
          <div className="stats-info">
            <span className="stats-label">Customers</span>
            <h2 className="mono"><CountUp end={customers.length} duration={2} /></h2>
            <span className="stats-diff text-tertiary">Active accounts</span>
          </div>
        </div>

        <div className="card-premium stats-card">
          <div className="stats-icon-wrapper products"><LuPackage size={24} /></div>
          <div className="stats-info">
            <span className="stats-label">Products</span>
            <h2 className="mono"><CountUp end={products.length} duration={2} /></h2>
            <span className="stats-diff text-tertiary">Inventory units</span>
          </div>
        </div>
      </div>

      {/* ✅ Analytics Row */}
      <div className="admin-charts-row mb-5">
        <div className="card-premium chart-container-main">
          <div className="chart-header d-flex justify-content-between mb-4">
            <h3 className="card-title-elegant">Sales Trajectory</h3>
            <div className="chart-actions">
              <span className="badge-pill status-active">{filter}</span>
            </div>
          </div>
          <div className="chart-h-300">
            <Line data={salesData} options={salesOptions} />
          </div>
        </div>

        <div className="card-premium chart-container-side">
          <h3 className="card-title-elegant mb-4 text-center">Fulfillment Mix</h3>
          <div className="chart-h-200">
            <Pie data={ordersData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { font: { family: 'DM Sans', size: 11 } } } } }} />
          </div>
        </div>
      </div>

      {/* ✅ Recent Activity Row */}
      <div className="admin-activity-grid">
        <div className="card-premium activity-card">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="card-title-elegant">Recent Transactions</h3>
            <button className="btn-ghost btn-sm">Export Batch</button>
          </div>
          <div className="table-minimal-wrapper">
            <table className="table-minimal">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.slice(-5).reverse().map((o) => (
                  <tr key={o.id}>
                    <td className="mono small">#{o.id}</td>
                    <td className="text-primary font-weight-500">{o.customer}</td>
                    <td>
                      <span className={`badge-pill ${o.status === 'Delivered' ? 'status-active' : o.status === 'Pending' ? 'status-pending' : 'status-danger'}`}>
                        {o.status}
                      </span>
                    </td>
                    <td className="mono">₹{o.total}</td>
                    <td className="text-tertiary small">{new Date(o.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card-premium feedback-mini-list">
          <h3 className="card-title-elegant mb-4">Artisan Feedback</h3>
          <div className="feedback-scroll">
            {feedbacks.slice(-4).reverse().map((fb) => (
              <div key={fb.id} className="feedback-item-minimal">
                <div className="d-flex justify-content-between mb-1">
                  <span className="fb-author font-display">{fb.customer}</span>
                  <span className="fb-rating text-accent"><LuStar size={12} className="me-1" fill="currentColor" /> {fb.rating}</span>
                </div>
                <p className="fb-message text-secondary small">"{fb.message.length > 80 ? fb.message.substring(0, 80) + '...' : fb.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .admin-page-header h1 { font-size: 36px; margin-bottom: 4px; }
        .admin-date-pill { font-size: 12px; }

        .admin-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .stats-card {
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .stats-icon-wrapper {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--bg-surface);
          color: var(--accent-primary);
        }

        .stats-label { font-size: 12px; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; display: block; }
        .stats-card h2 { font-size: 24px; margin-bottom: 2px; }
        .stats-diff { font-size: 11px; font-weight: 600; display: flex; align-items: center; }
        .stats-diff.positive { color: var(--success); }

        .admin-charts-row { display: grid; grid-template-columns: 2fr 1fr; gap: 24px; }
        .chart-container-main, .chart-container-side { padding: 32px; }
        .card-title-elegant { font-size: 18px; font-weight: 600; color: var(--text-primary); }
        .chart-h-300 { height: 300px; }
        .chart-h-200 { height: 200px; }

        .admin-activity-grid { display: grid; grid-template-columns: 1.8fr 1fr; gap: 24px; }
        .activity-card, .feedback-mini-list { padding: 32px; }

        .table-minimal { width: 100%; border-collapse: collapse; }
        .table-minimal th { text-align: left; font-size: 11px; text-transform: uppercase; color: var(--text-tertiary); padding: 12px 16px; border-bottom: 1px solid var(--border-subtle); letter-spacing: 0.05em; }
        .table-minimal td { padding: 16px; font-size: 14px; border-bottom: 1px solid var(--border-subtle); vertical-align: middle; }
        .table-minimal tr:last-child td { border-bottom: none; }

        .feedback-item-minimal { padding-bottom: 16px; margin-bottom: 16px; border-bottom: 1px solid var(--border-subtle); }
        .feedback-item-minimal:last-child { border-bottom: none; padding-bottom: 0; }
        .fb-author { font-weight: 600; color: var(--text-primary); }
        
        @media (max-width: 1200px) {
          .admin-sidebar { display: none; }
          .admin-page-content { marginLeft: 0 !important; padding: 24px !important; }
          .admin-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .admin-charts-row, .admin-activity-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

export default Dashboard;
