import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";

export default function OrderDetails() {
  const { orderId } = useParams();

  const [order, setOrder] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/orders/${orderId}`,
      );

      setOrder(response.data.order);
    } catch (error) {
      console.error("Fetching Order Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const generateInvoice = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Sevenplus Consultancy Interiors", 20, 20);

    doc.setFontSize(12);
    doc.text(`Order ID: ${order.orderId}`, 20, 40);
    doc.text(`Customer: ${order.customerName}`, 20, 50);
    doc.text(`Email: ${order.email}`, 20, 60);
    doc.text(`Phone: ${order.phone}`, 20, 70);

    doc.text(`Address: ${order.address}`, 20, 80);

    doc.text(`Payment Status: ${order.paymentStatus}`, 20, 95);
    doc.text(`Order Status: ${order.orderStatus}`, 20, 105);

    let y = 125;

    doc.setFontSize(14);
    doc.text("Products", 20, y);

    y += 10;

    order.products.forEach((product) => {
      doc.setFontSize(11);

      doc.text(`Product: ${product.name}`, 20, y);
      y += 8;

      doc.text(`Quantity: ${product.quantity}`, 20, y);
      y += 8;

      doc.text(`Price: Rs.${product.price}`, 20, y);
      y += 12;

      y += 10;
    });

    y += 10;

    doc.setFontSize(13);
    doc.text(`Total Amount: Rs.${order.totalAmount}`, 20, y);

    doc.save(`Invoice-${order.orderId}.pdf`);
  };

  if (!order) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white bg-[#0c0c0c]">
        Fetching Order Details...
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Order Details | Sevenplus Consultancy</title>
        <meta name="description" content="Order Details" />
        <link
          rel="canonical"
          href="https://sevenplusconsultancy.in//orders/:orderId"
        />
      </Helmet>

      <div className="bg-[#0c0c0c] text-white min-h-screen pt-30 pb-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="mb-12">
            <p className="uppercase tracking-[6px] text-amber-400 mb-4">
              Order Details
            </p>
            <h1 className="text-4xl font-bold mb-8 leading-tight">
              {order.orderId}
            </h1>
          </div>
          <button
            onClick={generateInvoice}
            className="mb-8 bg-amber-400 text-black hover:bg-amber-500 px-5 py-3 rounded-xl font-semibold"
          >
            Download Invoice
          </button>
          <div className="bg-gray-300 text-black p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6">{order.orderId}</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <p>
                <strong>Name:</strong> {order.customerName}
              </p>

              <p>
                <strong>Email:</strong> {order.email}
              </p>

              <p>
                <strong>Phone:</strong> {order.phone}
              </p>

              <p>
                <strong>Total:</strong> ₹{order.totalAmount}
              </p>

              <p>
                <strong>Payment Status:</strong> {order.paymentStatus}
              </p>

              <p>
                <strong>Order Status:</strong> {order.orderStatus}
              </p>

              <p>
                <strong>Payment Method:</strong> {order.paymentMethod}
              </p>

              <p className="md:col-span-2">
                <strong>Transaction ID:</strong> {order.bankTransactionId}
              </p>

              <p className="md:col-span-2">
                <strong>Address:</strong> {order.address}
              </p>
              <div className="sm:col-span-2 text-gray-600">
                <span className="font-semibold">Date:</span>{" "}
                {new Date(order.createdAt).toLocaleString()}
              </div>
            </div>

            <hr className="my-8" />

            <h3 className="text-xl font-bold mb-5">Products</h3>

            <div className="space-y-4">
              {order.products.map((product, index) => (
                <div key={index} className="flex justify-between border-b pb-3">
                  <div>{product.name}</div>

                  <div>Qty: {product.quantity}</div>

                  <div>₹{product.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
