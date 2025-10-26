const RateSelector = ({ rates, onSelect, onBack }) => {
  if (!rates || rates.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center text-gray-600 mb-6">
          <p className="mb-4">No shipping rates available for this shipment.</p>
          <button
            onClick={onBack}
            className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  const handleSelect = (rate) => {
    onSelect(rate)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Select Shipping Rate</h2>
      
      <div className="space-y-4">
        {rates.map((rate, index) => (
          <div
            key={rate.object_id || index}
            className="border border-gray-300 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition duration-200 cursor-pointer"
            onClick={() => handleSelect(rate)}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {rate.provider} - {rate.servicelevel?.name || rate.servicelevel?.token || 'Standard'}
                </h3>
                <p className="text-sm text-gray-600">
                  {rate.estimated_days && `Est. ${rate.estimated_days} days`}
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">
                  ${rate.amount}
                </div>
                <div className="text-sm text-gray-500">
                  {rate.currency}
                </div>
              </div>
            </div>
            
            {rate.attributes && (
              <div className="flex flex-wrap gap-2 mt-3">
                {rate.attributes.map((attr, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                  >
                    {attr}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={onBack}
          className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-200"
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default RateSelector

