import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function FlightItinerary() {
  return (
    <div className="max-w-3xl mx-auto font-sans">
      {/* Flight Itinerary Section */}
      <div className="rounded-t-lg overflow-hidden">
        <div className="bg-purple-400 text-white px-4 py-3 font-medium">Flight Itinerary</div>

        {/* Flight Details - Repeated 4 times */}
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="flex items-center border-b p-4 bg-white">
            {/* Airline Logo and Info */}
            <div className="flex items-start w-1/4">
              <div className="mr-3">
                <Image
                  src="/EK Logo.svg"
                  alt="Emirates Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-indigo-800 font-medium">Emirates</div>
                <div className="text-sm text-gray-600">EK 587 | Economy</div>
              </div>
            </div>

            {/* Departure */}
            <div className="w-1/6">
              <div className="text-gray-500 text-sm">Dhaka</div>
              <div className="font-medium">DAC</div>
              <div className="text-xs text-gray-500">20 Nov, Wed</div>
            </div>

            {/* Time and Duration */}
            <div className="w-1/4 flex flex-col items-center">
              <div className="font-medium text-lg">18:45</div>
              <div className="flex items-center w-full justify-center my-1">
                <div className="h-[1px] bg-gray-300 w-1/3"></div>
                <div className="text-xs text-gray-500 mx-2">5h 20m</div>
                <div className="h-[1px] bg-gray-300 w-1/3"></div>
              </div>
              <div className="font-medium text-lg">20:50</div>
            </div>

            {/* Arrival */}
            <div className="w-1/6">
              <div className="text-gray-500 text-sm">Dubai</div>
              <div className="font-medium">DXB</div>
              <div className="text-xs text-gray-500">21 Nov, Thu</div>
            </div>

            {/* Baggage Info */}
            <div className="w-1/6 text-right">
              <div className="text-xs text-gray-500 flex items-center justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 5a3 3 0 016 0v1h1a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h1V5zm4 1H7v1h2V6zm0 3H7v8h6V9H9V6z"
                    clipRule="evenodd"
                  />
                </svg>
                7 KG
              </div>
              <div className="text-xs text-gray-500 flex items-center justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 5a3 3 0 016 0v1h1a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h1V5zm4 1H7v1h2V6zm0 3H7v8h6V9H9V6z"
                    clipRule="evenodd"
                  />
                </svg>
                23 KG
              </div>
              <div className="text-xs text-gray-500 flex items-center justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM6 12a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm7.283 3.283A1 1 0 0112 14.5V14h-4v.5a1 1 0 01-1.707.707l-.043-.043a1 1 0 01.043-1.414A3 3 0 019.88 13h.24a3 3 0 013.587.786 1 1 0 01.043 1.414l-.043.043a1 1 0 01-1.424 0z"
                    clipRule="evenodd"
                  />
                </svg>
                777
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fare Information Section */}
      <div>
        <div className="bg-purple-400 text-white px-4 py-3 font-medium">Fare Information</div>

        <div className="bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-indigo-900">Passenger</th>
                <th className="text-left py-3 px-4 font-medium text-indigo-900">Base Fare</th>
                <th className="text-left py-3 px-4 font-medium text-indigo-900">Taxes</th>
                <th className="text-left py-3 px-4 font-medium text-indigo-900">Other</th>
                <th className="text-left py-3 px-4 font-medium text-indigo-900">Count</th>
                <th className="text-left py-3 px-4 font-medium text-indigo-900">Sub-total (Gross)</th>
                <th className="text-left py-3 px-4 font-medium text-indigo-900">Discount</th>
                <th className="text-left py-3 px-4 font-medium text-indigo-900">Sub-total (Net)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">Adult</td>
                <td className="py-3 px-4">85500</td>
                <td className="py-3 px-4">16500</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">2</td>
                <td className="py-3 px-4">204000</td>
                <td className="py-3 px-4">7500</td>
                <td className="py-3 px-4">196500</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Child</td>
                <td className="py-3 px-4">85500</td>
                <td className="py-3 px-4">16500</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4">204000</td>
                <td className="py-3 px-4">7500</td>
                <td className="py-3 px-4">196500</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Infant</td>
                <td className="py-3 px-4">85500</td>
                <td className="py-3 px-4">16500</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4">204000</td>
                <td className="py-3 px-4">7500</td>
                <td className="py-3 px-4">196500</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5} className="py-3 px-4"></td>
                <td className="py-3 px-4 font-medium text-indigo-900">Total Gross</td>
                <td colSpan={2} className="py-3 px-4 font-medium text-indigo-900">
                  850,000
                </td>
              </tr>
              <tr>
                <td colSpan={5} className="py-3 px-4"></td>
                <td className="py-3 px-4 bg-pink-500 text-white font-medium">Total Net</td>
                <td colSpan={2} className="py-3 px-4 bg-pink-500 text-white font-medium">
                  820,000
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Passenger Information Section */}
      <div>
        <div className="bg-purple-400 text-white px-4 py-3 font-medium">Passenger Information</div>

        <div className="bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-indigo-900"></th>
                <th className="text-left py-3 px-4 font-medium text-indigo-900"></th>
                <th className="text-left py-3 px-4 font-medium text-indigo-900"></th>
                <th className="text-left py-3 px-4 font-medium text-indigo-900"></th>
                <th className="text-left py-3 px-4 font-medium text-indigo-900"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">Pax 1</td>
                <td className="py-3 px-4 font-medium">MOHAMMOD SHAHEDUL ALAM SABBIR</td>
                <td className="py-3 px-4 text-gray-600">Adult</td>
                <td className="py-3 px-4 text-gray-600">Male</td>
                <td className="py-3 px-4 text-gray-600">12-Jan-1980</td>
                <td className="py-3 px-4 text-indigo-800 font-medium">BGD</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Pax 2</td>
                <td className="py-3 px-4 font-medium">MOHAMMOD SHAHEDUL ALAM SABBIR</td>
                <td className="py-3 px-4 text-gray-600">Adult</td>
                <td className="py-3 px-4 text-gray-600">Female</td>
                <td className="py-3 px-4 text-gray-600">12-Jan-1980</td>
                <td className="py-3 px-4 text-indigo-800 font-medium">BGD</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Pax 3</td>
                <td className="py-3 px-4 font-medium">MOHAMMOD SHAHEDUL ALAM SABBIR</td>
                <td className="py-3 px-4 text-gray-600">Child</td>
                <td className="py-3 px-4 text-gray-600">Female</td>
                <td className="py-3 px-4 text-gray-600">12-Jan-1980</td>
                <td className="py-3 px-4 text-indigo-800 font-medium">BGD</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Pax 4</td>
                <td className="py-3 px-4 font-medium">MOHAMMOD SHAHEDUL ALAM SABBIR</td>
                <td className="py-3 px-4 text-gray-600">Infant</td>
                <td className="py-3 px-4 text-gray-600">Male</td>
                <td className="py-3 px-4 text-gray-600">12-Jan-1980</td>
                <td className="py-3 px-4 text-indigo-800 font-medium">BGD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2 mt-4 mb-8">
        <Button variant="outline" className="bg-gray-300 hover:bg-gray-400 text-gray-700 border-0">
          Close
        </Button>
        <Button className="bg-purple-800 hover:bg-purple-900 text-white">Confirm</Button>
      </div>
    </div>
  )
}

