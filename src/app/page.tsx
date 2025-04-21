export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container">
        <div className="rounded-lg shadow-lg p-5 md:p-20 mx-2">
          <div className="text-center">
            <h2 className="text-xl md:text-3xl mt-10 uppercase font-bold mb-4">
              Coming Soon...
            </h2>
            <h3 className="text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-6xl">
              IKM <span className="text-indigo-500">Foundation</span>
            </h3>
            <p className="text-md md:text-xl mt-10 mb-4">
              currently under mainternance by
            </p>
            <p>
              <a
                href="https://www.goweki.com/"
                title="Goweki"
                className="md:w-32 tracking-wide  font-bold rounded border-2 border-indigo-500 hover:border-indigo-500 hover:bg-indigo-500 shadow-md py-2 px-6 inline-flex items-center"
              >
                <span className="mx-auto">Goweki</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
