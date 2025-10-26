const LabelDisplay = ({ label, onReset }) => {
  if (!label) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-gray-600 text-center">No label data available.</p>
        <button
          onClick={onReset}
          className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          Create New Label
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Label Created Successfully!</h2>
        <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-lg">
          ✓ {label.success ? 'Success' : 'Processing'}
        </div>
      </div>

      <div className="space-y-6 mb-8">
        {label.label_url && (
          <div className="border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Shipping Label</h3>
            <div className="bg-gray-50 p-4 rounded-md mb-4">
              <img 
                src={label.label_url} 
                alt="Shipping Label" 
                className="max-w-full h-auto mx-auto"
              />
            </div>
            <a
              href={label.label_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Download Label PDF
            </a>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {label.tracking_number && (
            <div className="border border-gray-300 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-600 mb-1">Tracking Number</h3>
              <p className="text-xl font-semibold text-gray-800">{label.tracking_number}</p>
            </div>
          )}

          {label.tracking_url_provider && (
            <div className="border border-gray-300 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-600 mb-1">Tracking URL</h3>
              <a
                href={label.tracking_url_provider}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 break-all"
              >
                Track Package
              </a>
            </div>
          )}
        </div>

        {label.label && (
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Label Details</h3>
            <pre className="bg-gray-50 p-4 rounded-md overflow-auto text-xs">
              {JSON.stringify(label.label, null, 2)}
            </pre>
          </div>
        )}
      </div>

      <button
        onClick={onReset}
        className="w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 font-semibold text-lg"
      >
        Create New Label
      </button>
    </div>
  )
}

export default LabelDisplay

