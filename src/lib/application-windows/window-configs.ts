export interface WindowBoundary {
  month: number;
  day: number;
  hour?: number;
  minute?: number;
}

export interface ApplicationWindow {
  open: WindowBoundary;
  close: WindowBoundary;
}

export interface ApplicationSchedule {
  windows: ApplicationWindow[];
  alwaysOpen?: boolean;
}

export type FormName = "scholarship" | "headstart" | "grant" | "fap";

export const applicationWindows: Record<FormName, ApplicationSchedule> = {
  scholarship: {
    windows: [
      {
        open: { month: 12, day: 1 },
        close: { month: 12, day: 31 },
      },
    ],
  },

  headstart: {
    windows: [
      {
        open: { month: 5, day: 1 },
        close: { month: 6, day: 19 },
      },
    ],
  },

  grant: {
    windows: [
      {
        open: { month: 6, day: 1 },
        close: { month: 6, day: 30 },
      },
      {
        open: { month: 12, day: 1 },
        close: { month: 12, day: 31 },
      },
    ],
  },

  fap: {
    // alwaysOpen: true,
    windows: [
      {
        open: { month: 12, day: 1 },
        close: { month: 12, day: 31 },
      },
    ],
  },
};
