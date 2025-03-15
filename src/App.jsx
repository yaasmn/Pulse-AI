import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { FaUser, FaSignOutAlt, FaHome, FaChartLine, FaHistory, FaHeartbeat, FaUserCircle } from 'react-icons/fa'
import './index.css'

// Page Components

// Home Page
function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent ECG Result */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Recent ECG Result</h2>
          <p className="text-green-600 font-medium">Normal</p>
          <p className="text-gray-500 text-sm">Last analyzed: 3 hours ago</p>
        </div>
        {/* Heart Rate */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Heart Rate</h2>
          <p className="text-blue-600 font-medium">72 bpm</p>
          <p className="text-gray-500 text-sm">Last updated: 5 mins ago</p>
        </div>
      </div>
      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Analyze Now
      </button>
    </div>
  )
}

// Analyzer Page
function Analyzer() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">AI Analyzer</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Upload + Graph */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Upload ECG Data</h2>
            <div className="border-2 border-dashed border-gray-300 p-6 text-center rounded">
              <p className="text-gray-500">Drag & drop your ECG file here</p>
              <p className="text-gray-500">or</p>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Browse Files
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">ECG Wave</h2>
            <p className="text-gray-500">[Placeholder: Imagine a wavy line here 📈]</p>
          </div>
        </div>
        {/* Right: Result + Tips */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Analysis Result</h2>
            <p className="text-red-600 font-medium">Arrhythmia Detected</p>
            <p className="text-gray-500 text-sm">Analyzed: Just now</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">AI Tips</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Consult a cardiologist immediately.</li>
              <li>Avoid strenuous activity until cleared.</li>
              <li>Monitor symptoms like dizziness or chest pain.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// History Page
function History() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">History</h1>
      <div className="space-y-4">
        {/* Past Result 1 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">March 14, 2025</h2>
          <p className="text-green-600 font-medium">Normal</p>
          <p className="text-gray-500 text-sm">Analyzed: 10:00 AM</p>
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Details
          </button>
        </div>
        {/* Past Result 2 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">March 13, 2025</h2>
          <p className="text-red-600 font-medium">Arrhythmia Detected</p>
          <p className="text-gray-500 text-sm">Analyzed: 2:00 PM</p>
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

// Device Page
function Device() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Device</h1>
      <div className="space-y-6">
        {/* Connection Status */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Connection Status</h2>
          <p className="text-green-600 font-medium">Connected</p>
          <p className="text-gray-500 text-sm">Last sync: 5 mins ago</p>
        </div>
        {/* Device Stats */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Device Stats</h2>
          <p className="text-gray-700">Battery: 85%</p>
          <p className="text-gray-700">Firmware: v1.2.3</p>
        </div>
        {/* Pair Button (if disconnected) */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Pair Now
        </button>
      </div>
    </div>
  )
}

// Profile Page
function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="space-y-6">
        {/* User Info */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">User Info</h2>
          <p className="text-gray-700">Name: Alex Doe</p>
          <p className="text-gray-700">Age: 25</p>
          <p className="text-gray-700">Email: alex.doe@example.com</p>
        </div>
        {/* Settings */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Health Settings</h2>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-gray-700">Notify on abnormal results</span>
          </label>
        </div>
        {/* Logout */}
        <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
          Logout
        </button>
      </div>
    </div>
  )
}


// Navbar Component
function Navbar() {
  return (
    <div className="bg-blue-950 bg-opacity-80 backdrop-blur-md text-white p-4 flex justify-between items-center rounded-b-lg shadow-md">
      <div className="text-xl font-bold flex items-center gap-2">
        <FaHeartbeat className="text-blue-300" />
        Pulse AI
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <FaUser className="text-blue-300" />
          <span>Profile</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <FaSignOutAlt className="text-blue-300" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  )
}

// Sidebar Component
function Sidebar() {
  return (
    <div className="w-56 bg-blue-900 bg-opacity-90 backdrop-blur-md text-white h-screen p-6 rounded-r-lg shadow-md">
      <div className="mb-6 text-lg font-semibold flex items-center gap-2">
        <FaHeartbeat className="text-blue-300" />
        Menu
      </div>
      <ul>
        <li className="mb-4">
          <Link to="/" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
            <FaHome />
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/analyzer" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
            <FaChartLine />
            Analyzer
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/history" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
            <FaHistory />
            History
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/device" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
            <FaHeartbeat />
            Device
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/profile" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
            <FaUserCircle />
            Profile
          </Link>
        </li>
      </ul>
    </div>
  )
}

// Main App Layout
function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 bg-gray-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/analyzer" element={<Analyzer />} />
              <Route path="/history" element={<History />} />
              <Route path="/device" element={<Device />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
