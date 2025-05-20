const SendMail = () => {
  return (
    <div className="bg-joinus my-32" id="contactus-section">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-blue text-lg font-normal tracking-widest">
            SEND US A MESSAGE
          </h3>
          <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-12">
            {" "}
            Shoot us an <br /> email
          </h2>
          <p className="text-slate-500 text-base font-normal">
            Craven omni memoria patriae zombieland clairvius narcisse religionis
            sunt diri undead <br /> historiarum. Golums, zombies unrelenting et
            Raimi fascinati beheading.
          </p>
        </div>

        <div className="mx-auto max-w-md pt-5">
          <div className="sm:col-span-4 mb-4">
            <label htmlFor="email" className="block text-sm/6 font-medium">
              Email
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-slate-800 pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder="your email"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4 mb-4">
            <label htmlFor="tel" className="block text-sm/6 font-medium">
              Tel No.
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-slate-800 pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder="Telephone No."
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="message"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Message
            </label>
            <div className="mt-2">
              <textarea
                name="message"
                id="message"
                placeholder="Write your message..."
                rows={3}
                className="block w-full rounded-md bg-slate-800 px-3 py-1.5 text-base text-gray-200 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMail;
