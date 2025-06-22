import type React from "react"

interface IconProps {
  className?: string
  size?: number
}

export const GISMappingIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="gis-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <filter id="gis-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.2" />
      </filter>
    </defs>

    {/* Base map layer */}
    <rect x="8" y="12" width="48" height="36" rx="4" fill="url(#gis-gradient)" filter="url(#gis-shadow)" />
    <rect x="10" y="14" width="44" height="32" rx="2" fill="#ffffff" opacity="0.9" />

    {/* Grid lines */}
    <g stroke="#10b981" strokeWidth="0.5" opacity="0.6">
      <line x1="18" y1="14" x2="18" y2="46" />
      <line x1="26" y1="14" x2="26" y2="46" />
      <line x1="34" y1="14" x2="34" y2="46" />
      <line x1="42" y1="14" x2="42" y2="46" />
      <line x1="50" y1="14" x2="50" y2="46" />
      <line x1="10" y1="22" x2="54" y2="22" />
      <line x1="10" y1="30" x2="54" y2="30" />
      <line x1="10" y1="38" x2="54" y2="38" />
    </g>

    {/* Location pins */}
    <circle cx="22" cy="26" r="3" fill="#ef4444" />
    <circle cx="22" cy="26" r="1.5" fill="#ffffff" />
    <circle cx="38" cy="34" r="3" fill="#3b82f6" />
    <circle cx="38" cy="34" r="1.5" fill="#ffffff" />
    <circle cx="46" cy="20" r="3" fill="#f59e0b" />
    <circle cx="46" cy="20" r="1.5" fill="#ffffff" />

    {/* Compass */}
    <circle cx="48" cy="54" r="8" fill="#1f2937" filter="url(#gis-shadow)" />
    <circle cx="48" cy="54" r="6" fill="#374151" />
    <polygon points="48,50 50,54 48,52 46,54" fill="#ef4444" />
    <polygon points="48,58 46,54 48,56 50,54" fill="#ffffff" />
    <text x="48" y="49" textAnchor="middle" fontSize="4" fill="#ffffff" fontWeight="bold">
      N
    </text>
  </svg>
)

export const RemoteSensingIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="satellite-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <radialGradient id="earth-gradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="70%" stopColor="#16a34a" />
        <stop offset="100%" stopColor="#15803d" />
      </radialGradient>
      <filter id="satellite-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Earth */}
    <circle cx="32" cy="40" r="16" fill="url(#earth-gradient)" filter="url(#satellite-shadow)" />
    <path
      d="M20 35 Q25 30 30 35 Q35 40 40 35 Q45 30 48 35"
      stroke="#065f46"
      strokeWidth="2"
      fill="none"
      opacity="0.7"
    />
    <path
      d="M18 45 Q23 42 28 45 Q33 48 38 45 Q43 42 46 45"
      stroke="#065f46"
      strokeWidth="2"
      fill="none"
      opacity="0.7"
    />

    {/* Satellite body */}
    <rect x="8" y="8" width="16" height="12" rx="2" fill="url(#satellite-gradient)" filter="url(#satellite-shadow)" />
    <rect x="10" y="10" width="12" height="8" rx="1" fill="#60a5fa" />

    {/* Solar panels */}
    <rect x="2" y="6" width="6" height="16" rx="1" fill="#1f2937" />
    <rect x="24" y="6" width="6" height="16" rx="1" fill="#1f2937" />
    <g stroke="#3b82f6" strokeWidth="0.5">
      <line x1="3" y1="8" x2="7" y2="8" />
      <line x1="3" y1="10" x2="7" y2="10" />
      <line x1="3" y1="12" x2="7" y2="12" />
      <line x1="3" y1="14" x2="7" y2="14" />
      <line x1="3" y1="16" x2="7" y2="16" />
      <line x1="3" y1="18" x2="7" y2="18" />
      <line x1="3" y1="20" x2="7" y2="20" />
      <line x1="25" y1="8" x2="29" y2="8" />
      <line x1="25" y1="10" x2="29" y2="10" />
      <line x1="25" y1="12" x2="29" y2="12" />
      <line x1="25" y1="14" x2="29" y2="14" />
      <line x1="25" y1="16" x2="29" y2="16" />
      <line x1="25" y1="18" x2="29" y2="18" />
      <line x1="25" y1="20" x2="29" y2="20" />
    </g>

    {/* Signal waves */}
    <g stroke="#10b981" strokeWidth="2" fill="none" opacity="0.6">
      <path d="M16 20 Q24 28 32 36" />
      <path d="M16 22 Q24 30 32 38" />
      <path d="M16 24 Q24 32 32 40" />
    </g>

    {/* Antenna */}
    <line x1="16" y1="8" x2="20" y2="4" stroke="#374151" strokeWidth="2" />
    <circle cx="20" cy="4" r="2" fill="#ef4444" />
  </svg>
)

export const DataAnalyticsIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="chart-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#34d399" />
      </linearGradient>
      <linearGradient id="screen-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1f2937" />
        <stop offset="100%" stopColor="#374151" />
      </linearGradient>
      <filter id="analytics-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.2" />
      </filter>
    </defs>

    {/* Monitor base */}
    <rect x="6" y="8" width="52" height="36" rx="4" fill="url(#screen-gradient)" filter="url(#analytics-shadow)" />
    <rect x="8" y="10" width="48" height="32" rx="2" fill="#000000" />

    {/* Stand */}
    <rect x="28" y="44" width="8" height="8" fill="#374151" />
    <rect x="20" y="52" width="24" height="4" rx="2" fill="#374151" />

    {/* Chart bars */}
    <rect x="12" y="32" width="4" height="8" fill="url(#chart-gradient)" />
    <rect x="18" y="28" width="4" height="12" fill="url(#chart-gradient)" />
    <rect x="24" y="24" width="4" height="16" fill="url(#chart-gradient)" />
    <rect x="30" y="20" width="4" height="20" fill="url(#chart-gradient)" />
    <rect x="36" y="26" width="4" height="14" fill="url(#chart-gradient)" />
    <rect x="42" y="22" width="4" height="18" fill="url(#chart-gradient)" />
    <rect x="48" y="30" width="4" height="10" fill="url(#chart-gradient)" />

    {/* Grid lines */}
    <g stroke="#10b981" strokeWidth="0.5" opacity="0.3">
      <line x1="10" y1="16" x2="54" y2="16" />
      <line x1="10" y1="20" x2="54" y2="20" />
      <line x1="10" y1="24" x2="54" y2="24" />
      <line x1="10" y1="28" x2="54" y2="28" />
      <line x1="10" y1="32" x2="54" y2="32" />
      <line x1="10" y1="36" x2="54" y2="36" />
    </g>

    {/* Trend line */}
    <path d="M12 36 Q20 32 28 28 Q36 24 44 26 Q48 28 52 30" stroke="#3b82f6" strokeWidth="2" fill="none" />
    <circle cx="14" cy="35" r="2" fill="#3b82f6" />
    <circle cx="26" cy="29" r="2" fill="#3b82f6" />
    <circle cx="38" cy="25" r="2" fill="#3b82f6" />
    <circle cx="50" cy="29" r="2" fill="#3b82f6" />
  </svg>
)

export const WebGISIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="globe-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#1d4ed8" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
      <linearGradient id="web-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <filter id="web-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.2" />
      </filter>
    </defs>

    {/* Globe */}
    <circle cx="32" cy="32" r="20" fill="url(#globe-gradient)" filter="url(#web-shadow)" />

    {/* Continents */}
    <path
      d="M20 25 Q25 20 30 25 Q35 30 40 25 Q42 28 44 30"
      stroke="#1e40af"
      strokeWidth="3"
      fill="none"
      opacity="0.8"
    />
    <path
      d="M18 35 Q23 32 28 35 Q33 38 38 35 Q43 32 46 35"
      stroke="#1e40af"
      strokeWidth="3"
      fill="none"
      opacity="0.8"
    />
    <ellipse cx="25" cy="40" rx="4" ry="2" fill="#1e40af" opacity="0.8" />
    <ellipse cx="40" cy="20" rx="3" ry="2" fill="#1e40af" opacity="0.8" />

    {/* Latitude/Longitude lines */}
    <ellipse cx="32" cy="32" rx="20" ry="10" stroke="#60a5fa" strokeWidth="1" fill="none" opacity="0.5" />
    <ellipse cx="32" cy="32" rx="20" ry="5" stroke="#60a5fa" strokeWidth="1" fill="none" opacity="0.5" />
    <ellipse cx="32" cy="32" rx="10" ry="20" stroke="#60a5fa" strokeWidth="1" fill="none" opacity="0.5" />
    <ellipse cx="32" cy="32" rx="5" ry="20" stroke="#60a5fa" strokeWidth="1" fill="none" opacity="0.5" />

    {/* Network nodes */}
    <circle cx="20" cy="20" r="3" fill="url(#web-gradient)" />
    <circle cx="44" cy="20" r="3" fill="url(#web-gradient)" />
    <circle cx="20" cy="44" r="3" fill="url(#web-gradient)" />
    <circle cx="44" cy="44" r="3" fill="url(#web-gradient)" />
    <circle cx="32" cy="12" r="3" fill="url(#web-gradient)" />
    <circle cx="32" cy="52" r="3" fill="url(#web-gradient)" />

    {/* Connection lines */}
    <g stroke="#10b981" strokeWidth="2" opacity="0.6">
      <line x1="20" y1="20" x2="32" y2="32" />
      <line x1="44" y1="20" x2="32" y2="32" />
      <line x1="20" y1="44" x2="32" y2="32" />
      <line x1="44" y1="44" x2="32" y2="32" />
      <line x1="32" y1="12" x2="32" y2="32" />
      <line x1="32" y1="52" x2="32" y2="32" />
    </g>

    {/* Central hub */}
    <circle cx="32" cy="32" r="4" fill="#ffffff" />
    <circle cx="32" cy="32" r="2" fill="url(#web-gradient)" />
  </svg>
)

export const ExpertTeamIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="team-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <filter id="team-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.2" />
      </filter>
    </defs>

    {/* Person 1 */}
    <circle cx="20" cy="20" r="8" fill="url(#team-gradient)" filter="url(#team-shadow)" />
    <circle cx="20" cy="18" r="3" fill="#ffffff" />
    <path d="M14 32 Q20 28 26 32 L26 40 Q20 44 14 40 Z" fill="url(#team-gradient)" />

    {/* Person 2 */}
    <circle cx="44" cy="20" r="8" fill="#3b82f6" filter="url(#team-shadow)" />
    <circle cx="44" cy="18" r="3" fill="#ffffff" />
    <path d="M38 32 Q44 28 50 32 L50 40 Q44 44 38 40 Z" fill="#3b82f6" />

    {/* Person 3 (center, larger) */}
    <circle cx="32" cy="35" r="10" fill="#f59e0b" filter="url(#team-shadow)" />
    <circle cx="32" cy="32" r="4" fill="#ffffff" />
    <path d="M20 50 Q32 44 44 50 L44 60 Q32 64 20 60 Z" fill="#f59e0b" />

    {/* Connection lines */}
    <g stroke="#10b981" strokeWidth="2" opacity="0.4">
      <line x1="26" y1="26" x2="32" y2="30" />
      <line x1="38" y1="26" x2="32" y2="30" />
    </g>

    {/* Collaboration symbols */}
    <circle cx="32" cy="8" r="3" fill="#ef4444" opacity="0.8" />
    <polygon points="32,6 33,8 35,8 33.5,9.5 34,12 32,10.5 30,12 30.5,9.5 29,8 31,8" fill="#ffffff" />
  </svg>
)

export const AwardIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="award-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <radialGradient id="medal-gradient" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </radialGradient>
      <filter id="award-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Ribbon */}
    <path d="M20 8 L32 20 L44 8 L44 32 L38 28 L32 32 L26 28 L20 32 Z" fill="#ef4444" filter="url(#award-shadow)" />
    <path d="M22 10 L32 18 L42 10 L42 28 L36 25 L32 28 L28 25 L22 28 Z" fill="#dc2626" />

    {/* Medal */}
    <circle cx="32" cy="40" r="16" fill="url(#medal-gradient)" filter="url(#award-shadow)" />
    <circle cx="32" cy="40" r="12" fill="url(#award-gradient)" />
    <circle cx="32" cy="40" r="8" fill="#fbbf24" />

    {/* Star */}
    <polygon points="32,34 34,38 38,38 35,41 36,45 32,43 28,45 29,41 26,38 30,38" fill="#ffffff" />

    {/* Decorative elements */}
    <circle cx="24" cy="32" r="2" fill="#fbbf24" opacity="0.8" />
    <circle cx="40" cy="32" r="2" fill="#fbbf24" opacity="0.8" />
    <circle cx="20" cy="48" r="2" fill="#fbbf24" opacity="0.6" />
    <circle cx="44" cy="48" r="2" fill="#fbbf24" opacity="0.6" />
  </svg>
)

export const TechnologyIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <filter id="tech-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.2" />
      </filter>
    </defs>

    {/* Main chip */}
    <rect x="16" y="16" width="32" height="32" rx="4" fill="url(#tech-gradient)" filter="url(#tech-shadow)" />
    <rect x="18" y="18" width="28" height="28" rx="2" fill="#1f2937" />

    {/* Circuit patterns */}
    <g stroke="url(#circuit-gradient)" strokeWidth="2" fill="none">
      <path d="M22 22 L26 22 L26 26 L30 26" />
      <path d="M34 26 L38 26 L38 22 L42 22" />
      <path d="M22 30 L26 30 L26 34 L30 34" />
      <path d="M34 34 L38 34 L38 30 L42 30" />
      <path d="M22 38 L26 38 L26 42 L30 42" />
      <path d="M34 42 L38 42 L38 38 L42 38" />
    </g>

    {/* Circuit nodes */}
    <circle cx="22" cy="22" r="2" fill="#10b981" />
    <circle cx="42" cy="22" r="2" fill="#10b981" />
    <circle cx="22" cy="30" r="2" fill="#3b82f6" />
    <circle cx="42" cy="30" r="2" fill="#3b82f6" />
    <circle cx="22" cy="38" r="2" fill="#f59e0b" />
    <circle cx="42" cy="38" r="2" fill="#f59e0b" />

    {/* Central processor */}
    <rect x="28" y="28" width="8" height="8" rx="1" fill="url(#circuit-gradient)" />
    <rect x="30" y="30" width="4" height="4" rx="0.5" fill="#ffffff" />

    {/* Connection pins */}
    <g fill="#6b7280">
      <rect x="12" y="20" width="4" height="2" />
      <rect x="12" y="24" width="4" height="2" />
      <rect x="12" y="28" width="4" height="2" />
      <rect x="12" y="32" width="4" height="2" />
      <rect x="12" y="36" width="4" height="2" />
      <rect x="12" y="40" width="4" height="2" />

      <rect x="48" y="20" width="4" height="2" />
      <rect x="48" y="24" width="4" height="2" />
      <rect x="48" y="28" width="4" height="2" />
      <rect x="48" y="32" width="4" height="2" />
      <rect x="48" y="36" width="4" height="2" />
      <rect x="48" y="40" width="4" height="2" />
    </g>

    {/* Data flow indicators */}
    <g fill="#10b981" opacity="0.8">
      <circle cx="8" cy="21" r="1">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="8" cy="25" r="1">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      <circle cx="8" cy="29" r="1">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="1s" />
      </circle>
    </g>
  </svg>
)
