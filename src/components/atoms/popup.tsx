export default function PopUp({
  popupRef,
  data,
}: {
  popupRef: React.RefObject<HTMLDivElement | null>;
  data?: { name: string; [key: string]: unknown };
}) {
  if (!data) return null;
  const { name, ...data_ } = data;

  return (
    <div
      id="region-popup"
      ref={popupRef}
      tabIndex={-1}
      className={`absolute overflow-y-auto overflow-hidden z-10 w-fit md:inset-0 h-modal pointer-events-none`}
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative p-4 bg-blue-200 rounded-lg shadow md:p-8">
          <div className="mb-4">
            <h3 className="mb-3 md:text-2xl font-bold text-gray-900">{name}</h3>
            {data_ &&
              Object.entries(data_).map(([key, value]) => (
                <div key={key} className="text-lg">
                  <span className="font-semibold">{key}:</span> {String(value)}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
