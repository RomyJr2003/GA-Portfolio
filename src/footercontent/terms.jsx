function TermsAndConditions() {

  return (
    <main className="mx-auto w-full max-w-[960px] px-4 pb-20 pt-35 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#12363a]/80">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="flex-1">
            <h1 className="mb-4 text-5xl font-black text-gray-900 dark:text-white text-center font-head">
              Terms and Conditions
            </h1>
            <ul className="list-disc px-25">
              <li className="pb-5">Strictly no contract, no project!</li>
              <li className="pb-5">Must pay 50% downpayment upon agreement and before starting comission/project
                (Downpayments are non-refundable).
              </li>
              <li className="pb-5">Additional charges may apply once exceeded three (3) revisions.</li>
              <li className="pb-5">Must pay the remaining balance left before i submit the final soft copy
                of the project.
              </li>
              <li className="pb-5">Each project might take up to 3 to 5 days before it is finished. (RUSHED PROJECTS
                WILL HAVE ADDITIONAL FEES.)
              </li>
              <li className="pb-5">Client must provide the complete, final, and concise outline
                of the commission project.
              </li>
              <li className="pb-5">Client must sign a contract before on boarding/starting the commission (TO BE PROVIDED).</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TermsAndConditions