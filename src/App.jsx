import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import PageTracker from "./components/PageTracker";
import PrivacyPolicy from "./legals/PrivacyPolicy";
import RefundPolicy from "./legals/RefundPolicy";
import TermsAndConditions from "./legals/TermsAndConditions";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const WhyMilaKarton = lazy(() => import("./pages/WhyMilaKarton"));
const Contact = lazy(() => import("./pages/Contact"));
const CustomerSupport = lazy(() => import("./pages/CustomerSupport"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/CheckOut"));
const SingleProduct = lazy(() => import("./pages/SingleProduct"));
const AdminOrders = lazy(() => import("./pages/AdminOrders"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));
const PaymentFailed = lazy(() => import("./pages/PaymentFailed"));

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <PageTracker />
      <Navbar />
      <main className="flex-1 pt-[73px]">
        <Suspense fallback={<div className="flex min-h-[60vh] items-center justify-center bg-slate-50 text-slate-600">Loading Mila-Karton...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-mila-karton" element={<WhyMilaKarton />} />
            <Route path="/services" element={<Navigate to="/why-mila-karton" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/customer-support" element={<CustomerSupport />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin/orders@26" element={<AdminOrders />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/payment-failed" element={<PaymentFailed />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  );
}

export default App;
