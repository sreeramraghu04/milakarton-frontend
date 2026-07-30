import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  const totalOrders = orders.length;

  const { user, token, authLoading } = useAuth();

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0c0c0c] text-white">
        Admin Order Loading...
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  const totalRevenue = orders
    .filter((order) => order.paymentStatus === "SUCCESS")
    .reduce((acc, order) => acc + order.totalAmount, 0);

  const pendingPayments = orders.filter(
    (order) => order.paymentStatus === "PENDING",
  ).length;

  const successPayments = orders.filter(
    (order) => order.paymentStatus === "SUCCESS",
  ).length;

  useEffect(() => {
    if (!authLoading && user?.role === "admin" && token) {
      fetchOrders();
    }
  }, [authLoading, user, token]);

  const fetchOrders = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/orders/admin`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setOrders(response.data.orders);
    } catch (error) {
      console.error("Fetching Orders Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, orderStatus, paymentMode) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/orders/${id}`,
        {
          orderStatus,
          paymentMode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      fetchOrders();
    } catch (error) {
      console.error("Updating Order Status Error:", error);
    }
  };

  const deleteOrder = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?",
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchOrders();
    } catch (error) {
      console.error("Deleting Order Error:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white bg-[#0c0c0c]">
        Fetching Admin Orders...
      </div>
    );
  }

  return (
    <div className="bg-[#0c0c0c] min-h-screen text-white pt-28 md:pt-40 px-4 sm:px-6 lg:px-12 pb-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Admin Orders</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          <div className="bg-gray-300 text-black p-6 rounded-3xl">
            <h2 className="font-semibold">Total Orders</h2>
            <p className="text-3xl font-bold">{totalOrders}</p>
          </div>
          <div className="bg-gray-300 text-black p-6 rounded-3xl">
            <h2 className="font-semibold">Revenue</h2>
            <p className="text-3xl font-bold">
              ₹{totalRevenue.toLocaleString("en-IN")}
            </p>
          </div>
          <div className="bg-gray-300 text-black p-6 rounded-3xl">
            <h2 className="font-semibold">Pending</h2>
            <p className="text-3xl font-bold">{pendingPayments}</p>
          </div>
          <div className="bg-gray-300 text-black p-6 rounded-3xl">
            <h2 className="font-semibold">Success</h2>
            <p className="text-3xl font-bold">{successPayments}</p>
          </div>
        </div>

        <div className="bg-gray-300 text-black p-5 md:p-6 rounded-3xl space-y-3 md:space-y-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-gray-300 text-black p-5 md:p-6 rounded-3xl border-b"
            >
              <div className="flex flex-row items-center justify-between gap-2 mb-4">
                <h2 className="font-bold">{order.orderId}</h2>

                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      order.paymentStatus === "SUCCESS"
                        ? "bg-green-500"
                        : order.paymentStatus === "FAILED"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                    }`}
                  >
                    {order.paymentStatus}
                  </span>

                  {order.paymentStatus === "FAILED" && (
                    <button
                      onClick={() => deleteOrder(order._id)}
                      className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-full text-sm transition cursor-pointer"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base">
                <div>
                  <span className="font-semibold">Customer:</span>{" "}
                  {order.customerName}
                </div>

                <div>
                  <span className="font-semibold">Phone:</span> {order.phone}
                </div>

                <div>
                  <span className="font-semibold">Email:</span> {order.email}
                </div>

                <div>
                  <span className="font-semibold">Total:</span> ₹
                  {order.totalAmount.toLocaleString()}
                </div>

                <div>
                  <span className="font-semibold">Payment Method:</span>{" "}
                  {order.paymentMethod}
                </div>

                {/* <div>
                  <span className="font-semibold">Payment Mode:</span>{" "}
                  {order.paymentMode || "N/A"}
                </div> */}

                <div className="sm:col-span-2">
                  <span className="font-semibold">Address:</span>{" "}
                  {order.address}
                </div>

                <div className="sm:col-span-2 text-gray-600">
                  <span className="font-semibold">Date:</span>{" "}
                  {new Date(order.createdAt).toLocaleString()}
                </div>
              </div>
              <div>
                <div className="mt-4">
                  <label className="font-semibold">Order Status:</label>

                  <select
                    value={order.orderStatus}
                    onChange={(e) => updateStatus(order._id, e.target.value)}
                    className="border rounded-xl ml-0 md:ml-2 mt-2 md:mt-0 px-3 py-2 w-full md:w-auto"
                  >
                    <option value="PLACED">PLACED</option>
                    <option value="PROCESSING">PROCESSING</option>
                    <option value="SHIPPED">SHIPPED</option>
                    <option value="DELIVERED">DELIVERED</option>
                    <option value="CANCELLED">CANCELLED</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="font-semibold">Payment Mode:</label>

                  <select
                    value={order.paymentMode || ""}
                    onChange={(e) =>
                      updateStatus(order._id, order.orderStatus, e.target.value)
                    }
                    className="border rounded-xl ml-0 md:ml-2 mt-2 md:mt-0 px-3 py-2 w-full md:w-auto"
                  >
                    <option value="N/A">N/A</option>

                    <option value="Cash">Cash</option>
                    <option value="Cheque">Cheque</option>
                    <option value="UPI">UPI</option>
                    <option value="Card">Card</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
