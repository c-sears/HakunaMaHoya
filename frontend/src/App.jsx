import { useState } from 'react'
import ShippingForm from './components/ShippingForm'
import RateSelector from './components/RateSelector'
import LabelDisplay from './components/LabelDisplay'
import { createLabel, getShippingRates } from './services/api'

function App() {
  const [shipmentData, setShipmentData] = useState(null)
  const [rates, setRates] = useState([])
  const [selectedRate, setSelectedRate] = useState(null)
  const [label, setLabel] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [step, setStep] = useState(1) // 1: form, 2: rates, 3: label

  const handleFormSubmit = async (data) => {
    setLoading(true)
    setError(null)
    
    try {
      setShipmentData(data)
      const response = await getShippingRates(data)
      setRates(response.rates || [])
      setStep(2)
    } catch (err) {
      setError(err.message || 'Failed to get shipping rates')
    } finally {
      setLoading(false)
    }
  }

  const handleRateSelect = async (rate) => {
    setLoading(true)
    setError(null)
    setSelectedRate(rate)

    try {
      // Send the rate object_id to purchase the label
      const labelData = {
        rate: rate.object_id
      }
      
      const response = await createLabel(labelData)
      setLabel(response)
      setStep(3)
    } catch (err) {
      setError(err.message || 'Failed to create label')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setShipmentData(null)
    setRates([])
    setSelectedRate(null)
    setLabel(null)
    setError(null)
    setStep(1)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Hakuna MaHoya
          </h1>
          <p className="text-gray-600">Product Label Creator</p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>1</div>
                <div className={`ml-2 mr-4 ${
                  step >= 1 ? 'text-blue-600 font-semibold' : 'text-gray-600'
                }`}>Shipping Info</div>
              </div>
              <div className="w-16 h-1 mx-2 bg-gray-300"></div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>2</div>
                <div className={`ml-2 mr-4 ${
                  step >= 2 ? 'text-blue-600 font-semibold' : 'text-gray-600'
                }`}>Select Rate</div>
              </div>
              <div className="w-16 h-1 mx-2 bg-gray-300"></div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>3</div>
                <div className={`ml-2 ${
                  step >= 3 ? 'text-blue-600 font-semibold' : 'text-gray-600'
                }`}>Label</div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          {/* Loading Overlay */}
          {loading && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-700">Processing...</p>
              </div>
            </div>
          )}

          {/* Step Content */}
          {step === 1 && <ShippingForm onSubmit={handleFormSubmit} />}
          {step === 2 && (
            <RateSelector 
              rates={rates} 
              onSelect={handleRateSelect}
              onBack={() => setStep(1)}
            />
          )}
          {step === 3 && (
            <LabelDisplay 
              label={label} 
              onReset={handleReset}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App

