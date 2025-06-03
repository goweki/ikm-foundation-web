import ApplyEducationForm from "@/components/forms/ApplyEducation";
import FormLayout from "../../_components/formLayout";

export default function HeadStart() {
  return (
    <FormLayout
      page="headstart"
      // descLink={{ label: "Learn more", link: "/apply/scholarship" }}
    >
      <ApplyEducationForm applicationFor="headstart" />
      {/* <div className="mt-6 text-center">
        <div className="flex items-center justify-center space-x-2">
          <span className="h-px w-16 bg-slate-500" />
          <span className="text-default-500 text-sm">Learn more</span>
          <span className="h-px w-16 bg-slate-500" />
        </div>
      </div> */}
    </FormLayout>
  );
}
