import { applicationWindows, FormName, WindowBoundary } from "./window-configs";

type ApplicationStatus =
  | {
      status: "open";
      opensAt: Date;
      closesAt: Date;
    }
  | {
      status: "upcoming";
      opensAt: Date;
      closesAt: Date;
    }
  | {
      status: "closed";
      nextOpensAt: Date;
    };

function createDate(year: number, boundary: WindowBoundary, isClosing = false) {
  return new Date(
    year,
    boundary.month - 1,
    boundary.day,
    boundary.hour ?? (isClosing ? 23 : 0),
    boundary.minute ?? (isClosing ? 59 : 0),
    isClosing ? 59 : 0,
    isClosing ? 999 : 0,
  );
}

export function getApplicationStatus(page: FormName): ApplicationStatus {
  const schedule = applicationWindows[page];

  // Always-open programmes
  if (schedule.alwaysOpen) {
    return {
      status: "open",
      opensAt: new Date(),
      closesAt: new Date(8640000000000000), // effectively "never"
    };
  }

  const now = new Date();
  const year = now.getFullYear();

  const windows = schedule.windows
    .map((window) => ({
      opensAt: createDate(year, window.open),
      closesAt: createDate(year, window.close, true),
    }))
    .sort((a, b) => a.opensAt.getTime() - b.opensAt.getTime());

  // Currently open?
  for (const window of windows) {
    if (now >= window.opensAt && now <= window.closesAt) {
      return {
        status: "open",
        opensAt: window.opensAt,
        closesAt: window.closesAt,
      };
    }
  }

  // Upcoming later this year?
  for (const window of windows) {
    if (now < window.opensAt) {
      return {
        status: "upcoming",
        opensAt: window.opensAt,
        closesAt: window.closesAt,
      };
    }
  }

  // All windows for this year are over.
  // Return the first window of next year.
  const firstWindow = schedule.windows.slice().sort((a, b) => {
    if (a.open.month !== b.open.month) {
      return a.open.month - b.open.month;
    }

    return a.open.day - b.open.day;
  })[0];

  return {
    status: "closed",
    nextOpensAt: createDate(year + 1, firstWindow.open),
  };
}
