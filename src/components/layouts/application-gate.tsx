import { CalendarClock } from "lucide-react";

import AirtableForm from "@/components/forms/AirtableForm";

import { FormName, getApplicationStatus } from "@/lib/application-windows";

interface Props {
  page: FormName;
}

const dateFormatter = new Intl.DateTimeFormat("en-KE", {
  dateStyle: "long",
  //   timeStyle: "short",
});

export default function ApplicationGate({ page }: Props) {
  const application = getApplicationStatus(page);

  if (application.status === "open") {
    return <AirtableForm form={page} />;
  }

  return (
    <div className="flex min-h-96 flex-col items-center justify-center gap-5 py-12 text-center">
      <CalendarClock className="h-10 w-10 text-muted-foreground" />

      {application.status === "upcoming" ? (
        <>
          <h2 className="text-2xl font-semibold">
            Applications are not yet open
          </h2>

          <p className="max-w-md text-muted-foreground">
            Applications for this programme have not opened yet. Please check
            back when the application window begins.
          </p>

          <p className="text-lg font-medium">
            Opens on {dateFormatter.format(application.opensAt)}
          </p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold">Applications have closed</h2>

          <p className="max-w-md text-muted-foreground">
            The current application cycle has ended. The next application window
            will open on:
          </p>

          <p className="text-lg font-medium">
            {dateFormatter.format(application.nextOpensAt)}
          </p>
        </>
      )}
    </div>
  );
}
