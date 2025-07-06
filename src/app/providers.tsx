"use client";

import { createContext, useState, useEffect } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

export interface Impact {
  label: string;
  quantity: number;
  unit: string;
}
export interface Event {
  name: string;
  date: string;
  description: string;
  image?: Record<string, unknown>[];
}
// Define the type for the context data
interface DataContext {
  data: { impact: Impact[]; events?: Event[] };
  refreshData: () => Promise<void>;
}
export const DataContext = createContext<DataContext | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [uiData, setUIdata] = useState<{ impact: Impact[] } | null>(null);
  const [UIstate, setUIstate] = useState<Record<
    string,
    string | boolean
  > | null>({
    error: false,
    loading: true,
  });

  async function fetchData() {
    const ui_data_ = await fetch("/api/ui", {
      method: "GET",
    });
    if (!ui_data_.ok) {
      console.warn("FAILED: fetching ui data, status - ", ui_data_.status);
      const errorData = await ui_data_.json();
      const error_message_ =
        errorData.message || `Error Status-${ui_data_.status}`;
      console.warn("FAILED: fetching ui data ", error_message_);

      setUIdata({
        impact: [],
      });

      return;
    }

    const ui_data = await ui_data_.json();
    if (ui_data.data) {
      console.log("ui data fetched > : ", ui_data.data);
      setUIdata(ui_data.data);
      setUIstate({ loading: false, error: false });
    } else {
      setUIstate({ loading: false, error: "Failed to parse ui data" });
    }
  }

  useEffect(() => {
    const fetchUIdata_ = async () => {
      try {
        await fetchData();
      } catch (error) {
        console.error("Error fetching ui data: ", error);
      }
    };

    fetchUIdata_();
  }, []);

  return UIstate?.error ? (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        <h1 className="font-bold text-red-500">Error</h1>
        <p className="mt-4 text-lg text-gray-500">{UIstate?.error}</p>
        <button
          onClick={async () => {
            try {
              await fetchData();
            } catch (error) {
              console.error("Error fetching ui data: ", error);
            }
          }}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Reload
        </button>
      </div>
    </div>
  ) : uiData ? (
    <DataContext.Provider value={{ data: uiData, refreshData: fetchData }}>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </DataContext.Provider>
  ) : (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
        <svg
          fill="none"
          className="w-12 h-12 animate-spin m-4"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>

        <div className="text-xl font-semibold">Loading ...</div>
      </div>
    </div>
  );
}

export function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return null;
}
