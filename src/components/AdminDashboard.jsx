import React, { useEffect, useState } from "react";
import { Trash2, Mail, Phone, Loader2, CheckCircle } from "lucide-react";
import inquiriesData from "../data/inquiries.js";

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = inquiriesData; // Use static data
    if (stored && stored.length > 0) {
      setInquiries(stored);
    }
    setLoading(false);
  }, []);

  const handleDelete = (index) => {
    const updated = inquiries.filter((_, i) => i !== index);
    setInquiries(updated);
  };

  const handleResolve = (index) => {
    const updated = inquiries.map((inq, i) =>
      i === index ? { ...inq, resolved: !inq.resolved } : inq
    );
    setInquiries(updated);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        <Loader2 className="animate-spin mr-2" /> Loading inquiries...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-wide">
            Admin Dashboard
          </h1>
          <div className="text-sm opacity-90">
            Total Inquiries:{" "}
            <span className="font-semibold">{inquiries.length}</span>
          </div>
        </div>

        {/* Table Section */}
        <div className="p-6 overflow-x-auto">
          {inquiries.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              No inquiries found 😅
            </p>
          ) : (
            <table className="w-full border-collapse text-sm text-left">
              <thead>
                <tr className="bg-blue-100 text-blue-800 font-medium uppercase">
                  <th className="p-3 rounded-tl-lg">#</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Contact</th>
                  <th className="p-3">Message</th>
                  <th className="p-3 text-center rounded-tr-lg">Actions</th>
                </tr>
              </thead>

              <tbody>
                {inquiries.map((inq, index) => (
                  <tr
                    key={index}
                    className={`border-b last:border-0 transition hover:bg-blue-50 ${
                      inq.resolved ? "bg-gray-100 opacity-70" : ""
                    }`}
                  >
                    <td className="p-3 font-medium text-gray-700">
                      {index + 1}
                    </td>
                    <td className="p-3 font-semibold text-gray-800">
                      {inq.name}
                    </td>
                    <td className="p-3 text-gray-700">
                      <div className="flex flex-col gap-1">
                        <a
                          href={`mailto:${inq.email}`}
                          className="flex items-center text-blue-600 hover:underline"
                        >
                          <Mail size={14} className="mr-1" /> {inq.email}
                        </a>
                        <a
                          href={`tel:${inq.phone}`}
                          className="flex items-center text-green-600 hover:underline"
                        >
                          <Phone size={14} className="mr-1" /> {inq.phone}
                        </a>
                      </div>
                    </td>
                    <td className="p-3 text-gray-600">{inq.message}</td>

                    <td className="p-3 text-center">
                      <button
                        onClick={() => handleResolve(index)}
                        className={`px-3 py-1.5 rounded-lg text-white text-xs font-medium flex items-center justify-center gap-1 transition ${
                          inq.resolved
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-green-600 hover:bg-green-700"
                        }`}
                      >
                        <CheckCircle size={14} />
                        {inq.resolved ? "Resolved" : "Mark Resolved"}
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="px-3 py-1.5 mt-2 bg-red-600 hover:bg-red-700 text-white text-xs rounded-lg flex items-center justify-center gap-1 transition"
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 text-center py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Explorer Wheels | Admin Panel
        </div>
      </div>
    </div>
  );
}
