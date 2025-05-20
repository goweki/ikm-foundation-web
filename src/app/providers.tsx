"use client";

import { createContext, useState, useEffect } from "react";

export interface Impact {
  label: string;
  quantity: number;
  unit: string;
}
// Define the type for the context data
interface DataContext {
  data: { impact: Impact[] };
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

      setUIstate({
        loading: false,
        error: error_message_,
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

  return uiData ? (
    <DataContext.Provider value={{ data: uiData, refreshData: fetchData }}>
      {children}
    </DataContext.Provider>
  ) : UIstate?.error ? (
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
  ) : (
    <div className="min-h-[calc(100vh-64px)]"></div>
  );
}
