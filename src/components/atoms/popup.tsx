export default function PopUp({
  title,
  message,
}: {
  message?: string;
  title?: string;
}) {
  return (
    <div
      id="county-popup"
      tabIndex={-1}
      className={`${
        !title ? "hidden" : "absolute"
      } overflow-y-auto overflow-x-hidden z-50 w-full md:inset-0 h-modal pointer-events-none`}
    >
      <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
        <div className="relative p-4 bg-blue-200 rounded-lg shadow md:p-8">
          <div className="mb-4 text-sm font-light text-gray-500">
            <h3 className="mb-3 md:text-2xl font-bold text-gray-900">
              {title}
            </h3>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
