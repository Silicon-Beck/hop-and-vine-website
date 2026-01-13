import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in React-Leaflet
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: () => string })._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Custom icons
const pubIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
      <circle cx="12" cy="12" r="10" fill="#5a7047" stroke="white" stroke-width="2"/>
      <text x="12" y="16" text-anchor="middle" fill="white" font-size="12">🍺</text>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

const busStopIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <circle cx="12" cy="12" r="8" fill="#9333ea" stroke="white" stroke-width="2"/>
      <text x="12" y="16" text-anchor="middle" fill="white" font-size="10">🚌</text>
    </svg>
  `),
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
})

// Locations - correct coordinates for Cowling
const hopAndVine = { lat: 53.8846, lng: -2.0421, name: 'The Hop & Vine' }
const busStops = [
  { lat: 53.884803, lng: -2.041298, name: 'Royd Court (to Keighley)', code: '3200YNF10329', direction: 'keighley' },
  { lat: 53.884353, lng: -2.042134, name: 'Gibb Street (to Burnley)', code: '3200YNF10301', direction: 'burnley' },
]

// M4 route approximate path through Cowling along A6068/Keighley Road
const routePath: [number, number][] = [
  [53.8800, -2.0550], // West (towards Burnley/Colne)
  [53.8820, -2.0500],
  [53.8835, -2.0450],
  [53.8846, -2.0421], // Near Hop & Vine
  [53.8855, -2.0380],
  [53.8870, -2.0320],
  [53.8890, -2.0250], // East (towards Keighley)
]

export default function BusTracker() {
  const [activeTab, setActiveTab] = useState<'keighley' | 'burnley' | 'map'>('keighley')

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Tab Navigation */}
      <div className="grid grid-cols-3">
        <button
          onClick={() => setActiveTab('keighley')}
          className={`p-3 text-center font-semibold transition-colors ${
            activeTab === 'keighley'
              ? 'bg-sage-600 text-white'
              : 'bg-sage-100 text-sage-700 hover:bg-sage-200'
          }`}
        >
          <span className="text-xs block uppercase tracking-wide">To Keighley</span>
          <span className="text-sm">Royd Court</span>
        </button>
        <button
          onClick={() => setActiveTab('burnley')}
          className={`p-3 text-center font-semibold transition-colors ${
            activeTab === 'burnley'
              ? 'bg-plum-600 text-white'
              : 'bg-plum-100 text-plum-700 hover:bg-plum-200'
          }`}
        >
          <span className="text-xs block uppercase tracking-wide">To Burnley</span>
          <span className="text-sm">Gibb Street</span>
        </button>
        <button
          onClick={() => setActiveTab('map')}
          className={`p-3 text-center font-semibold transition-colors ${
            activeTab === 'map'
              ? 'bg-stone-700 text-white'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          <span className="text-xs block uppercase tracking-wide">Bus Stops</span>
          <span className="text-sm">Map</span>
        </button>
      </div>

      {/* Content */}
      <div className="h-80">
        {activeTab === 'keighley' && (
          <iframe
            src="https://bustimes.org/stops/3200YNF10329/departures"
            title="Live departures to Keighley from Royd Court"
            className="w-full h-full border-0"
          />
        )}
        {activeTab === 'burnley' && (
          <iframe
            src="https://bustimes.org/stops/3200YNF10301/departures"
            title="Live departures to Burnley from Gibb Street"
            className="w-full h-full border-0"
          />
        )}
        {activeTab === 'map' && (
          <MapContainer
            center={[hopAndVine.lat, hopAndVine.lng]}
            zoom={16}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* M4 Route */}
            <Polyline
              positions={routePath}
              color="#9333ea"
              weight={4}
              opacity={0.6}
              dashArray="10, 10"
            />

            {/* The Hop & Vine */}
            <Marker position={[hopAndVine.lat, hopAndVine.lng]} icon={pubIcon}>
              <Popup>
                <strong>The Hop & Vine</strong><br />
                111 Keighley Road, Cowling
              </Popup>
            </Marker>

            {/* Bus Stops */}
            {busStops.map((stop) => (
              <Marker key={stop.code} position={[stop.lat, stop.lng]} icon={busStopIcon}>
                <Popup>
                  <strong>{stop.name}</strong><br />
                  <a
                    href={`https://bustimes.org/stops/${stop.code}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-plum-600 hover:underline"
                  >
                    View live departures →
                  </a>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>

      {/* Info */}
      <div className="p-3 bg-stone-50 text-center">
        <p className="text-stone-500 text-sm">
          M4 Mainline runs every ~30 mins •
          <a
            href="https://bustimes.org/services/m4-keighley-cross-hills-colne-nelson-burnley"
            target="_blank"
            rel="noopener noreferrer"
            className="text-plum-600 hover:underline ml-1"
          >
            Full timetable
          </a>
        </p>
      </div>
    </div>
  )
}
