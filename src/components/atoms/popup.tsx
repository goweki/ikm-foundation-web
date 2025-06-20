import { Impact } from "@/app/providers";

export default function PopUp({
  popupRef,
  data,
}: {
  popupRef: React.RefObject<HTMLDivElement | null>;
  data?: Impact[];
}) {
  if (!data) return null;

  const renderImpactData = () =>
    data.map((item, i) => (
      <div
        key={i}
        className="flex items-baseline space-x-1 text-lg font-medium"
      >
        <span className="text-gray-600 font-black">{item.label}:</span>
        <span className="text-blue-700 font-bold">{item.quantity}+</span>
        <span className="text-gray-800">{item.unit}</span>
      </div>
    ));

  return (
    <div
      id="popup"
      ref={popupRef}
      tabIndex={-1}
      className={`absolute overflow-y-auto z-10 w-fit md:inset-0 h-fit pointer-events-none m-auto bg-linear-to-r from-cyan-100 to-blue-200 transition-all duration-200 ease-in-out rounded-lg overflow-hidden`}
      hidden={true}
    >
      <div className="p-4 md:p-8">
        <div className="mb-4">{renderImpactData()}</div>
      </div>
    </div>
  );
}
