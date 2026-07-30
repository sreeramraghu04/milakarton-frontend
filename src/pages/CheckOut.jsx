import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext.jsx";
import { formatINR, site } from "../config/site.js";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    country: "India",
    state: "Kerala",
    shipping: "Standard Delivery",
    payment: "Online Payment",
  });

  const handleChange = (event) =>
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));

  const placeOrder = async (event) => {
    event.preventDefault();
    const { fullName, phone, email, address, country, state } = formData;

    if (!fullName || !phone || !email || !address || !country || !state) {
      toast.error("Please complete your contact and delivery details.");
      return;
    }

    if (!cartItems.length) {
      toast.error("Your cart is empty.");
      navigate("/shop");
      return;
    }

    try {
      setLoading(true);
      const orderId = `MK-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`;
      const isCOD = formData.payment === "Cash On Delivery";
      const orderData = {
        orderId,
        customerName: fullName,
        email,
        phone,
        address,
        country,
        state,
        shippingMethod: formData.shipping,
        paymentMethod: isCOD ? "COD" : "ONLINE",
        products: cartItems.map((item) => ({
          productId: String(item.id),
          name: item.name,
          image: item.image,
          quantity: item.quantity,
          price: item.price,
        })),
        totalAmount: cartTotal,
      };

      const apiUrl = import.meta.env.VITE_API_URL || "";
      const response = await axios.post(
        `${apiUrl}/api/orders/create`,
        orderData,
      );
      if (!response.data.success) throw new Error("Order creation failed");

      if (isCOD) {
        clearCart();
        toast.success("Order placed successfully.");
        navigate("/payment-success");
        return;
      }

      const paymentResponse = await axios.post(
        `${apiUrl}/api/payments/initiate`,
        { orderId },
      );
      const txnToken = paymentResponse.data?.paytmResponse?.body?.txnToken;

      if (!txnToken || !window.Paytm?.CheckoutJS) {
        toast.error(
          "Online payment is not configured yet. Please try Cash on Delivery.",
        );
        return;
      }

      await window.Paytm.CheckoutJS.init({
        root: "",
        flow: "DEFAULT",
        data: {
          orderId,
          token: txnToken,
          tokenType: "TXN_TOKEN",
          amount: String(cartTotal),
        },
        handler: { notifyMerchant: () => {} },
      });
      window.Paytm.CheckoutJS.invoke();
    } catch (error) {
      console.error("Place Order Error:", error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong while placing the order.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (!cartItems.length) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-center text-slate-950">
        <div>
          <h1 className="text-3xl font-bold">Your cart is empty</h1>
          <Link
            to="/shop"
            className="mt-5 inline-flex rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white"
          >
            Browse products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 pb-20 pt-28 text-slate-950 sm:px-6 lg:px-12">
      <Helmet>
        <title>Checkout | {site.name}</title>
        <meta name="description" content="Secure Mila-Karton checkout." />
        <link rel="canonical" href={`${site.url}/checkout`} />
      </Helmet>
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Checkout
        </p>
        <h1 className="mb-10 text-4xl font-bold tracking-tight md:text-5xl">
          A simple finish.
        </h1>

        <form
          onSubmit={placeOrder}
          className="grid gap-8 lg:grid-cols-[1fr_360px]"
        >
          <div className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-6 text-2xl font-semibold">
                Contact information
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full name"
                  className={inputClass}
                />
                <input
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  inputMode="tel"
                  className={inputClass}
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className={inputClass}
                />
                <textarea
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Delivery address"
                  rows="4"
                  className={`${inputClass} md:col-span-2`}
                />
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-6 text-2xl font-semibold">Delivery details</h2>
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  required
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className={inputClass}
                />
                <input
                  required
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className={inputClass}
                />
              </div>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {["Standard Delivery", "Express Delivery"].map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 transition has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50"
                  >
                    <input
                      type="radio"
                      name="shipping"
                      value={option}
                      checked={formData.shipping === option}
                      onChange={handleChange}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-6 text-2xl font-semibold">Payment method</h2>
              <div className="grid gap-3 md:grid-cols-2">
                {["Online Payment", "Cash On Delivery"].map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 transition has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50"
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={option}
                      checked={formData.payment === option}
                      onChange={handleChange}
                    />
                    {option === "Online Payment"
                      ? "Online payment"
                      : "Cash on delivery"}
                  </label>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Payment options and delivery charges are subject to final
                Mila-Karton configuration.
              </p>
            </section>
          </div>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <h2 className="text-2xl font-semibold">Order summary</h2>
            <div className="mt-6 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt=""
                    className="h-14 w-14 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <span className="text-sm font-semibold">
                    {formatINR(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between border-t border-slate-200 pt-5 text-xl font-bold">
              <span>Total</span>
              <span>{formatINR(cartTotal)}</span>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-7 w-full rounded-xl bg-slate-950 px-5 py-4 font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Processing..." : "Place order"}
            </button>
          </aside>
        </form>
      </div>
    </div>
  );
}
