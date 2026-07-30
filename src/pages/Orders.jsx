import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../context/AuthContext";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    if (user?._id) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/orders/customer/${user._id}`,
      );

      setOrders(response.data.orders);
    } catch (error) {
      console.error("Fethcing Orders Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0c0c0c] text-white">
        Fetching Orders...
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Orders | Sevenplus Consultancy</title>
        <meta name="description" content="Orders" />
        <link rel="canonical" href="https://sevenplusconsultancy.in/orders" />
      </Helmet>

      <div className="bg-[#0c0c0c] text-white min-h-screen pt-28 md:pt-30 pb-20 md:pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-12">
            <p className="uppercase tracking-[6px] text-amber-400 mb-4">
              Orders
            </p>

            <h1 className="text-4xl font-bold mb-8 leading-tight">
              Purchase History
            </h1>
          </div>

          {/* Empty */}
          {orders.length === 0 ? (
            <div className="bg-[#0c0c0c] p-10 rounded-3xl shadow text-center">
              <h2 className="text-2xl font-semibold">No orders found</h2>
            </div>
          ) : (
            <div className="space-y-10">
              {orders.map((order) => (
                <div
                  key={order._id}
                  className="bg-gray-300 rounded-3xl shadow-md p-6 md:p-8 text-black"
                >
                  {/* Order Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 mb-6 md:mb-8 border-b pb-4 md:pb-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div>
                        <h2 className="text-2xl font-semibold">
                          {order.orderId}
                        </h2>

                        <p className="text-gray-500 text-sm mt-1">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="text-xl font-bold">
                      ₹{order.totalAmount.toLocaleString()}
                    </div>
                  </div>

                  {/* Products */}
                  <div className="space-y-5">
                    {order.products.map((item) => (
                      <div key={item._id || item.productId} className="flex items-center gap-5">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 rounded-2xl object-cover"
                        />

                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{item.name}</h3>

                          <p className="text-gray-500">Qty: {item.quantity}</p>
                        </div>

                        <div className="font-semibold">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Customer */}
                  <div className="flex justify-between border-t mt-8 pt-6">
                    <div className="flex flex-col items-start">
                      <h3 className="text-xl font-semibold mb-4">
                        Payment Status
                      </h3>
                      <span
                        className={`px-5 py-2 rounded-xl inline-block ${
                          order.paymentStatus === "SUCCESS"
                            ? "bg-green-500"
                            : order.paymentStatus === "FAILED"
                              ? "bg-red-500"
                              : "bg-yellow-500"
                        }`}
                      >
                        {order.paymentStatus}
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <h3 className="text-xl font-semibold mb-4">
                        Orders Status
                      </h3>
                      <Link
                        to={`/orders/${order.orderId}`}
                        onClick={scrollToTop}
                        className="bg-black text-white px-5 py-2 rounded-xl hover:bg-amber-400 hover:text-black transition"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
