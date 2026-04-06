"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Dummy booking data
const DUMMY_BOOKING_DATA = {
  _id: "67a1b2c3d4e5f6g7h8i9",
  guestName: "Rajesh Kumar",
  guestEmail: "rajesh.kumar@example.com",
  roomId: {
    roomNumber: "205",
    floor: 2,
  },
  roomTypeId: {
    type: "Deluxe Suite",
    price: 4250,
  },
  checkIn: "2026-04-15T14:00:00.000Z",
  checkOut: "2026-04-17T11:00:00.000Z",
  numberOfGuests: 2,
  totalAmount: 8500,
  status: "CONFIRMED",
  paidAt: new Date().toISOString(),
};

interface BookingDetails {
  _id: string;
  guestName: string;
  guestEmail: string;
  roomId: {
    roomNumber: string;
    floor: number;
  };
  roomTypeId: {
    type: string;
    price: number;
  };
  checkIn: string;
  checkOut: string;
  numberOfGuests: number;
  totalAmount: number;
  status: string;
  paidAt: string;
}

export default function BookingSuccessPage({ id }: { id: string }) {
  const router = useRouter();

  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call - Replace with actual API
    setTimeout(() => {
      setBooking(DUMMY_BOOKING_DATA);
      setLoading(false);
    }, 800);
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#fffbf5" }}
      >
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center gradient-amber">
            <svg
              className="animate-spin h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
          <p style={{ color: "#57534e" }}>Loading booking details...</p>
        </div>
        <style jsx>{`
          .gradient-amber {
            background: linear-gradient(135deg, #fbbf24, #d97706);
          }
        `}</style>
      </div>
    );
  }

  if (!booking) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#fffbf5" }}
      >
        <div className="text-center">
          <p style={{ color: "#57534e" }}>Booking not found</p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 px-6 py-2 rounded-lg btn-gradient"
          >
            Back to Home
          </button>
        </div>
        <style jsx>{`
          .btn-gradient {
            background: linear-gradient(135deg, #f59e0b, #f97316);
            color: white;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: "#fffbf5" }}>
      {/* Background mesh */}
      <div className="fixed inset-0 pointer-events-none bg-mesh"></div>

      <div className="relative max-w-3xl mx-auto px-4">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 success-badge">
            <svg
              className="w-10 h-10"
              style={{ color: "#10b981" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-3" style={{ color: "#1c1917" }}>
            Payment Successful!
          </h1>
          <p className="text-lg mb-2" style={{ color: "#44403c" }}>
            Your booking has been confirmed
          </p>
          <p className="text-sm" style={{ color: "#78716c" }}>
            Confirmation sent to{" "}
            <span className="font-medium" style={{ color: "#d97706" }}>
              {booking.guestEmail}
            </span>
          </p>
        </div>

        {/* Booking Details Card */}
        <div
          className="bg-white rounded-2xl shadow-lg border overflow-hidden mb-6"
          style={{ borderColor: "#e7e5e4" }}
        >
          {/* Header */}
          <div className="px-8 py-6 gradient-header">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2
                  className="text-2xl font-bold mb-1"
                  style={{ color: "#1c1917" }}
                >
                  Booking Confirmed
                </h2>
                <p className="text-sm" style={{ color: "#78716c" }}>
                  Booking Reference:{" "}
                  <span
                    className="font-mono font-semibold"
                    style={{ color: "#d97706" }}
                  >
                    #{booking._id.slice(-8).toUpperCase()}
                  </span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm mb-1" style={{ color: "#78716c" }}>
                  Payment Date
                </p>
                <p className="font-semibold" style={{ color: "#44403c" }}>
                  {formatDate(booking.paidAt)}
                </p>
                <p className="text-sm" style={{ color: "#78716c" }}>
                  {formatTime(booking.paidAt)}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-8 space-y-8">
            {/* Room Details */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#fef3c7" }}
                >
                  <svg
                    className="w-5 h-5"
                    style={{ color: "#d97706" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#1c1917" }}
                >
                  Room Details
                </h3>
              </div>
              <div
                className="grid grid-cols-2 gap-4 p-4 rounded-xl"
                style={{
                  backgroundColor: "#fafaf9",
                  border: "1px solid #f5f5f4",
                }}
              >
                <div>
                  <p className="text-sm mb-1" style={{ color: "#78716c" }}>
                    Room Type
                  </p>
                  <p className="font-semibold" style={{ color: "#44403c" }}>
                    {booking.roomTypeId.type}
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-1" style={{ color: "#78716c" }}>
                    Room Number
                  </p>
                  <p className="font-semibold" style={{ color: "#44403c" }}>
                    {booking.roomId.roomNumber}
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-1" style={{ color: "#78716c" }}>
                    Floor
                  </p>
                  <p className="font-semibold" style={{ color: "#44403c" }}>
                    {booking.roomId.floor}
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-1" style={{ color: "#78716c" }}>
                    Guests
                  </p>
                  <p className="font-semibold" style={{ color: "#44403c" }}>
                    {booking.numberOfGuests}{" "}
                    {booking.numberOfGuests > 1 ? "Guests" : "Guest"}
                  </p>
                </div>
              </div>
            </div>

            {/* Check-in/Check-out */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#fef3c7" }}
                >
                  <svg
                    className="w-5 h-5"
                    style={{ color: "#d97706" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#1c1917" }}
                >
                  Stay Dates
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className="p-4 rounded-xl"
                  style={{
                    backgroundColor: "#fffbeb",
                    border: "1px solid #fde68a",
                  }}
                >
                  <p
                    className="text-sm font-medium mb-2"
                    style={{ color: "#92400e" }}
                  >
                    Check-in
                  </p>
                  <p className="text-lg font-bold" style={{ color: "#78350f" }}>
                    {formatDate(booking.checkIn)}
                  </p>
                  <p className="text-sm mt-1" style={{ color: "#92400e" }}>
                    After 2:00 PM
                  </p>
                </div>
                <div
                  className="p-4 rounded-xl"
                  style={{
                    backgroundColor: "#fffbeb",
                    border: "1px solid #fde68a",
                  }}
                >
                  <p
                    className="text-sm font-medium mb-2"
                    style={{ color: "#92400e" }}
                  >
                    Check-out
                  </p>
                  <p className="text-lg font-bold" style={{ color: "#78350f" }}>
                    {formatDate(booking.checkOut)}
                  </p>
                  <p className="text-sm mt-1" style={{ color: "#92400e" }}>
                    Before 11:00 AM
                  </p>
                </div>
              </div>
            </div>

            {/* Guest Information */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#fef3c7" }}
                >
                  <svg
                    className="w-5 h-5"
                    style={{ color: "#d97706" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#1c1917" }}
                >
                  Guest Information
                </h3>
              </div>
              <div
                className="p-4 rounded-xl"
                style={{
                  backgroundColor: "#fafaf9",
                  border: "1px solid #f5f5f4",
                }}
              >
                <p className="font-semibold mb-2" style={{ color: "#44403c" }}>
                  {booking.guestName}
                </p>
                <p className="text-sm" style={{ color: "#78716c" }}>
                  {booking.guestEmail}
                </p>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="pt-6 border-t-2" style={{ borderColor: "#e7e5e4" }}>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#d1fae5" }}
                >
                  <svg
                    className="w-5 h-5"
                    style={{ color: "#10b981" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#1c1917" }}
                >
                  Payment Summary
                </h3>
              </div>
              <div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: "#ecfdf5",
                  border: "1px solid #a7f3d0",
                }}
              >
                <div className="flex justify-between items-center mb-2">
                  <p style={{ color: "#047857" }}>Total Amount Paid</p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "#065f46" }}
                  >
                    ₹{booking.totalAmount.toLocaleString()}
                  </p>
                </div>
                <p className="text-xs" style={{ color: "#059669" }}>
                  Payment completed via Razorpay
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div
          className="bg-white rounded-xl shadow-sm border p-6 mb-6"
          style={{ borderColor: "#e7e5e4" }}
        >
          <h3
            className="font-semibold mb-4 flex items-center gap-2"
            style={{ color: "#1c1917" }}
          >
            <svg
              className="w-5 h-5"
              style={{ color: "#d97706" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Important Information
          </h3>
          <ul className="space-y-2 text-sm" style={{ color: "#57534e" }}>
            <li className="flex items-start gap-2">
              <svg
                className="w-4 h-4 mt-0.5 flex-shrink-0"
                style={{ color: "#d97706" }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Please bring a valid ID proof for check-in
            </li>
            <li className="flex items-start gap-2">
              <svg
                className="w-4 h-4 mt-0.5 flex-shrink-0"
                style={{ color: "#d97706" }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Early check-in subject to availability
            </li>
            <li className="flex items-start gap-2">
              <svg
                className="w-4 h-4 mt-0.5 flex-shrink-0"
                style={{ color: "#d97706" }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              A confirmation email has been sent to your registered email
            </li>
            <li className="flex items-start gap-2">
              <svg
                className="w-4 h-4 mt-0.5 flex-shrink-0"
                style={{ color: "#d97706" }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              For any queries, contact our support team
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 flex-col sm:flex-row">
          <button
            onClick={() => window.print()}
            className="flex-1 py-3 px-6 rounded-xl font-medium transition-all border btn-print"
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Print Confirmation
            </span>
          </button>
          <button
            onClick={() => router.push("/")}
            className="flex-1 py-3 px-6 rounded-xl font-medium text-white transition-all shadow-lg hover:shadow-xl btn-home"
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Back to Home
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .bg-mesh {
          background:
            radial-gradient(
              at 15% 20%,
              rgba(251, 191, 36, 0.13) 0,
              transparent 55%
            ),
            radial-gradient(
              at 85% 10%,
              rgba(167, 198, 172, 0.18) 0,
              transparent 50%
            ),
            radial-gradient(
              at 60% 85%,
              rgba(251, 191, 36, 0.08) 0,
              transparent 45%
            ),
            radial-gradient(
              at 5% 80%,
              rgba(167, 198, 172, 0.12) 0,
              transparent 50%
            );
        }
        .success-badge {
          background-color: #d1fae5;
          border: 3px solid #10b981;
          animation: bounce 1s infinite;
        }
        .gradient-header {
          background: linear-gradient(145deg, #fefce8, #fff7ed);
          border-bottom: 1px solid #e7e5e4;
        }
        .btn-print {
          border-color: #e7e5e4;
          color: #44403c;
          background-color: white;
        }
        .btn-print:hover {
          background-color: #fafaf9;
        }
        .btn-home {
          background: linear-gradient(135deg, #f59e0b, #f97316);
        }
        .btn-home:hover {
          transform: scale(1.02);
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
      `}</style>
    </div>
  );
}
