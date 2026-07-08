import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, BarChart, Bar } from 'recharts';

// --- DATASET DEFINITIONS ---
const organicTrafficData = [
  { name: 'Nov', traffic: 500 },
  { name: 'Dec', traffic: 1200 },
  { name: 'Jan', traffic: 2100 },
  { name: 'Feb', traffic: 3100 },
  { name: 'Mar', traffic: 4200 },
  { name: 'Apr', traffic: 5023 },
  { name: 'May', traffic: 6234 },
  { name: 'Jun', traffic: 8412 },
];

const engagementData = [
  { label: '0', value: 2.2 },
  { label: '1', value: 3.8 },
  { label: '2', value: 3.1 },
  { label: '4', value: 5.2 },
  { label: '5', value: 6.4 },
  { label: '6', value: 7.8 },
  { label: 'Jun', value: 8.4 },
];

const leadsData = [
  { month: 'Nov', leads: 18 },
  { month: 'Dec', leads: 26 },
  { month: 'Jan', leads: 38 },
  { month: 'Feb', leads: 55 },
  { month: 'Mar', leads: 78 },
  { month: 'Apr', leads: 104 },
  { month: 'May', leads: 142 },
  { month: 'Jun', leads: 179 },
];

// --- CUSTOM TRAFFIC TOOLTIP ENGINE ---
const CustomTrafficTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="relative bg-[#0C110F] text-white px-3 py-2 rounded-xl text-center min-w-[72px] shadow-xl z-50 -translate-y-4">
        <p className="text-[9px] uppercase tracking-widest text-[#7A8580] font-bold">
          {payload[0].payload.name}
        </p>
        <p className="text-sm font-bold mt-0.5 text-white">
          {payload[0].value.toLocaleString()}
        </p>
        <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0C110F] rotate-45" />
      </div>
    );
  }
  return null;
};

export default function Growth() {
  // --- BASELINE DEFAULT STATE VALUES ---
  const DEFAULT_TRAFFIC = 8412;
  const DEFAULT_ENGAGEMENT = 8.4;
  const DEFAULT_LEADS = 179;
  
  // --- STATE HOOKS ---
  const [displayedTraffic, setDisplayedTraffic] = useState(DEFAULT_TRAFFIC);
  const [displayedEngagement, setDisplayedEngagement] = useState(DEFAULT_ENGAGEMENT);
  const [displayedLeads, setDisplayedLeads] = useState(DEFAULT_LEADS);

  // --- INTERACTION EVENT HANDLERS ---
  
  // 1. Organic Traffic Card Handlers
  const handleTrafficMove = (nextState) => {
    if (nextState && nextState.activeTooltipIndex !== undefined && organicTrafficData[nextState.activeTooltipIndex]) {
      setDisplayedTraffic(organicTrafficData[nextState.activeTooltipIndex].traffic);
    }
  };
  const handleTrafficLeave = () => {
    setDisplayedTraffic(DEFAULT_TRAFFIC);
  };

  // 2. Engagement Card Handlers (Top Right)
  const handleEngagementMove = (nextState) => {
    if (nextState && nextState.activeTooltipIndex !== undefined && engagementData[nextState.activeTooltipIndex]) {
      setDisplayedEngagement(engagementData[nextState.activeTooltipIndex].value);
    }
  };
  const handleEngagementLeave = () => {
    setDisplayedEngagement(DEFAULT_ENGAGEMENT);
  };

  // 3. Qualified Leads Card Handlers (Bottom Right)
  const handleLeadsMove = (nextState) => {
    if (nextState && nextState.activeTooltipIndex !== undefined && leadsData[nextState.activeTooltipIndex]) {
      setDisplayedLeads(leadsData[nextState.activeTooltipIndex].leads);
    }
  };
  const handleLeadsLeave = () => {
    setDisplayedLeads(DEFAULT_LEADS);
  };

  return (
    <section className="w-full bg-[#F8F9F6] py-16 px-6 md:px-12 flex items-center justify-center font-sans antialiased select-none">
      <div className="w-full max-w-7xl">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 w-full">
          <div style={{ paddingLeft: '15px', paddingTop: '10px' }}>
            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8A9590] mb-2">
              Live Performance
            </p>
            <h2 className="text-5xl md:text-6xl text-[#1E2522] tracking-tight font-normal" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Growth, <span className="italic text-[#7A8580] font-light">visible.</span>
            </h2>
          </div>
          <div className="mt-4 sm:mt-0 bg-[#E3E7DE] text-[#3D4641] text-[10px] font-bold tracking-wider px-4 py-2 rounded-full flex items-center uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#65B997] mr-2"></span>
            Aggregated • Last 8 Months
          </div>
        </div>

        {/* --- GRID CONTAINER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-stretch">
          
          {/* 1. ORGANIC TRAFFIC CARD */}
          <div className="lg:col-span-2 bg-white rounded-[32px] p-8 md:p-10 border border-[#ECEFEA] shadow-[0_20px_40px_rgba(0,0,0,0.01)] flex flex-col justify-between relative h-[440px]">
            
            <div className="w-full flex justify-between items-start">
              <div style={{ paddingLeft: '15px', paddingTop: '10px' }} className="text-left">
                <p className="text-[13px] uppercase tracking-widest font-bold text-[#8A9590] mb-1">
                  Organic Traffic
                </p>
                <h3 className="text-3xl font-medium tracking-tight text-black mt-1">
                  {displayedTraffic.toLocaleString()}
                </h3>
              </div>
              <span style={{ paddingRight: '15px', marginTop:'15px', marginRight: '15px'}} className="text-[#45A882] text-xs font-bold tracking-wide bg-[#EAF7F2] px-3 py-1 rounded-full">
                +312% YoY
              </span>
            </div>

            {/* Area Chart Container */}
            <div style={{ marginBottom: '2rem' }} className="w-full h-[240px] mt-4 overflow-visible">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart 
                  data={organicTrafficData} 
                  margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
                  onMouseMove={handleTrafficMove}
                  onMouseLeave={handleTrafficLeave}
                >
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#EAF5F0" stopOpacity={0.95} />
                      <stop offset="100%" stopColor="#F8FAF7" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  
                  <YAxis hide domain={[0, 9500]} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#8A9590', fontSize: 11, fontWeight: 500 }}
                    padding={{ left: 30, right: 30 }}
                    dy={10}
                  />
                  
                  <Tooltip 
                    content={<CustomTrafficTooltip />} 
                    cursor={{ stroke: '#65B997', strokeWidth: 1.2, strokeDasharray: '4 4' }}
                  />
                  
                  <Area 
                    type="monotone" 
                    dataKey="traffic" 
                    stroke="#000000" 
                    strokeWidth={2.5} 
                    fillOpacity={1} 
                    fill="url(#areaGrad)"
                    activeDot={{ r: 4, fill: '#000000', stroke: '#FFFFFF', strokeWidth: 2.5 }}
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* RIGHT COLUMN CARDS CONTAINER */}
          <div className="flex flex-col gap-6 w-full justify-between">
            
            {/* 2. ENGAGEMENT CARD (DARK) */}
            <div className="bg-[#0D1210] text-white rounded-[28px] p-8 flex flex-col justify-between h-[208px] relative shadow-sm">
              <div style={{ marginLeft: '15px', paddingTop: '10px' }}>
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#6D7772] mb-1">
                  Engagement
                </p>
                <div className="flex items-baseline space-x-2 mt-1">
                  {/* Displays hovered point value dynamically */}
                  <h3 className="text-3xl font-bold tracking-tight text-white">
                    {displayedEngagement}%
                  </h3>
                  <span style={{paddingLeft: '10px' }} className="text-[10px] text-[#6D7772]">vs 1.9% industry avg</span>
                </div>
              </div>

              {/* Line Chart Container */}
              <div className="w-full h-[108px] mt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart 
                    data={engagementData} 
                    margin={{ top: 10, right: 15, left: 15, bottom: 5 }}
                    onMouseMove={handleEngagementMove}
                    onMouseLeave={handleEngagementLeave}
                  >
                    <XAxis dataKey="label" hide />
                    <YAxis hide />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#7CC7A5"
                      strokeWidth={2.6}
                      dot={{ r: 4, fill: '#7CC7A5', strokeWidth: 0 }}
                      activeDot={{ r: 6, fill: '#FFFFFF', stroke: '#7CC7A5', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* 3. QUALIFIED LEADS CARD (LIGHT) */}
            <div className="bg-white rounded-[28px] p-8 border border-[#ECEFEA] shadow-[0_25px_50px_-20px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[208px] relative">
              <div style={{ paddingLeft: '15px', paddingTop: '10px' }}>
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#8A9590] mb-1">
                  Qualified Leads
                </p>
                <div className="flex items-baseline space-x-1 mt-1">
                  {/* Displays hovered bar value dynamically */}
                  <h3 className="text-xl font-bold tracking-tight text-black">
                    {displayedLeads}
                  </h3>
                  <span className="text-xs text-[#8A9590] font-medium">/ mo</span>
                </div>
              </div>

              {/* Bar Chart Container */}
              <div className="w-full h-[108px] mt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={leadsData} 
                    margin={{ top: 10, right: 10, left: 10, bottom: 5 }} 
                    barCategoryGap="28%"
                    onMouseMove={handleLeadsMove}
                    onMouseLeave={handleLeadsLeave}
                  >
                    <XAxis dataKey="month" hide />
                    <YAxis hide />
                    <Bar
                      dataKey="leads"
                      fill="#111915"
                      radius={[6, 6, 0, 0]}
                      maxBarSize={18}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}