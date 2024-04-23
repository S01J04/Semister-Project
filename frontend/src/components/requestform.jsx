import React from 'react';
import { ArrowRight } from 'lucide-react';

export function SignInFour() {
  return (
    <section className="rounded-md p-2">
      <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-2xl font-bold leading-tight text-black">Request For Proposal</h2>
          <p className="mt-2 text-sm text-gray-600">
            Submit your details and get a proposal for billboard media locations within 3 hours.
          </p>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div className="flex space-x-4">
                <div className="mt-2 flex-1">
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    FirstName
                  </label>
                  <input
                    className="h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="mt-2 flex-1">
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    LastName
                  </label>
                  <input
                    className="h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  Email address
                </label>
                <input
                  className="h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  Contact No
                </label>
                <input
                  className="h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Contact No"
                />
              </div>
              <div className="mt-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    Billboards in Your City
                  </label>
                </div>
                <input
                  className="h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="text"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Get started <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
