import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from "recharts";

const sessions = [
  {
    label: "20/02",
    name: "20/02",
    color: "#f97316",
    avg: 139, max: 158, start: 85, wbs: "~10'",
    time: [0,6,11,17,23,28,34,40,46,51,57,63,68,74,80,85,91,97,103,108,114,120,125,131,137,142,148,154,160,165,171,177,182,188,194,199,205,211,216,222,228,234,239,245,251,256,262,268,273,279,285,291,296,302,308,313,319,325,330,336,342,348,353,359,365,370,376,382,387,393,399,404,410,416,422,427,433,439,444,450,456,461,467,473,479,484,490,496,501,507,513,518,524,530,536,541,547,553,558,564],
    hr:   [85,86,86,87,91,100,111,126,128,125,121,118,118,117,118,122,130,135,136,135,132,130,129,130,132,136,141,142,140,137,134,132,131,130,132,136,142,147,146,144,142,142,143,148,152,151,147,145,144,142,140,141,145,150,154,153,150,146,146,146,148,152,155,156,154,151,148,147,147,150,154,157,158,157,153,152,150,148,146,145,147,150,155,157,156,151,147,143,140,139,138,140,144,149,154,155,152,147,142,138]
  },
  {
    label: "25/02",
    name: "25/02",
    color: "#22d3ee",
    avg: 138, max: 151, start: 102, wbs: "100 WB / 10'",
    time: [0,6,12,18,24,29,35,41,47,53,59,65,71,77,82,88,94,100,106,112,118,124,130,135,141,147,153,159,165,171,177,183,188,194,200,206,212,218,224,230,236,241,247,253,259,265,271,277,283,289,294,300,306,312,318,324,330,336,342,347,353,359,365,371,377,383,389,395,400,406,412,418,424,430,436,442,448,453,459,465,471,477,483,489,495,501,506,512,518,524,530,536,542,548,554,559,565,571,577,583],
    hr:   [102,103,103,105,111,118,125,132,132,130,130,129,131,135,139,141,141,139,135,131,129,131,134,138,142,146,146,143,140,137,137,133,131,135,141,146,147,145,141,139,138,136,133,134,138,142,146,147,145,141,140,139,136,135,138,143,149,150,148,144,141,139,137,138,140,144,149,149,148,143,138,138,135,135,140,145,150,151,147,143,141,141,141,139,138,141,146,148,145,139,136,134,132,129,132,137,144,149,149,143]
  },
  {
    label: "27/02",
    name: "27/02",
    color: "#a78bfa",
    avg: 136, max: 151, start: 107, wbs: "110 WB / 11'",
    time: [0,7,13,20,26,33,39,46,52,59,66,72,79,85,92,98,105,111,118,125,131,138,144,151,157,164,170,177,184,190,197,203,210,216,223,229,236,243,249,256,262,269,275,282,288,295,302,308,315,321,328,334,341,347,354,361,367,374,380,387,393,400,406,413,420,426,433,439,446,452,459,465,472,479,485,492,498,505,511,518,524,531,538,544,551,557,564,570,577,583,590,597,603,610,616,623,629,636,642,649],
    hr:   [107,110,110,109,111,121,132,137,136,131,128,125,122,121,123,129,139,141,139,136,134,131,127,123,125,134,138,142,140,137,136,138,143,148,149,145,141,137,136,135,138,144,147,149,145,141,136,133,132,137,143,147,148,144,140,135,132,128,130,139,144,148,147,144,138,135,132,132,138,144,148,148,142,137,133,131,134,142,148,151,150,146,140,136,130,128,133,140,146,147,144,139,135,130,122,130,140,145,147,144]
  },
  {
    label: "28/02",
    name: "28/02",
    color: "#34d399",
    avg: 127, max: 147, start: 90, wbs: "100 WB / 10'",
    time: [0,6,13,19,25,31,38,44,50,56,63,69,75,82,88,94,100,107,113,119,125,132,138,144,151,157,163,169,176,182,188,194,201,207,213,220,226,232,238,245,251,257,263,270,276,282,289,295,301,307,314,320,326,332,339,345,351,358,364,370,376,383,389,395,401,408,414,420,427,433,439,445,452,458,464,470,477,483,489,496,502,508,514,521,527,533,539,546,552,558,565,571,577,583,590,596,602,608,615,621],
    hr:   [90,90,90,90,93,97,98,98,98,98,100,104,116,128,134,135,132,128,126,126,125,129,136,140,140,135,128,123,119,117,121,128,136,140,138,133,128,123,119,115,120,130,138,141,138,134,130,123,119,117,123,130,137,139,137,133,127,123,123,131,136,143,144,142,137,131,129,129,133,141,146,146,140,134,129,125,121,121,121,128,136,142,144,140,137,132,131,136,142,147,147,144,140,135,131,129,124,119,112,109]
  },
  {
    label: "04/03",
    name: "04/03",
    color: "#f43f5e",
    avg: 140, max: 152, start: 107, wbs: "111 WB / 11'",
    time: [0,6,13,19,26,32,39,45,52,58,64,71,77,84,90,97,103,110,116,122,129,135,142,148,155,161,168,174,180,187,193,200,206,213,219,226,232,238,245,251,258,264,271,277,284,290,296,303,309,316,322,329,335,342,348,354,361,367,374,380,387,393,400,406,412,419,425,432,438,445,451,458,464,470,477,483,490,496,503,509,516,522,528,535,541,548,554,561,567,574,580,586,593,599,606,612,619,625,632,638],
    hr:   [107,109,116,125,133,135,132,130,128,129,129,134,141,143,141,138,135,131,128,128,132,140,145,144,142,139,138,138,139,139,143,147,148,147,143,140,138,136,136,139,145,147,146,142,141,140,138,136,137,143,149,149,148,144,142,141,137,139,144,150,152,150,146,145,141,139,140,145,150,150,147,144,144,142,139,135,138,143,148,148,145,141,140,139,137,139,144,150,150,146,143,142,140,140,138,140,146,149,149,147]
  },
  {
    label: "09/03 ★",
    name: "09/03 ★",
    color: "#facc15",
    avg: 130, max: 164, start: 74, wbs: "110 WB / 10'",
    time: [0,6,13,19,25,32,38,44,50,57,63,69,76,82,88,95,101,107,113,120,126,132,139,145,151,158,164,170,176,183,189,195,202,208,214,221,227,233,240,246,252,258,265,271,277,284,290,296,303,309,315,321,328,334,340,347,353,359,366,372,378,384,391,397,403,410,416,422,429,435,441,448,454,460,466,473,479,485,492,498,504,511,517,523,529,536,542,548,555,561,567,574,580,586,592,599,605,611,618,624],
    hr:   [74,73,76,80,86,87,97,98,107,109,109,102,97,97,88,85,87,88,89,89,87,85,119,120,112,116,117,120,117,115,140,140,136,130,129,129,132,135,141,141,132,141,138,137,135,139,141,144,139,149,146,144,141,137,134,141,142,149,151,145,147,145,148,145,150,146,147,146,148,145,152,148,151,154,156,159,160,164,150,149,142,144,138,137,145,145,138,138,134,133,136,145,143,142,145,147,147,147,151,154]
  }
];

function interpolate(sessionTime, sessionHr, t) {
  const idx = sessionTime.findIndex(v => v >= t);
  if (idx === 0) return sessionHr[0];
  if (idx === -1) return null;
  const t0 = sessionTime[idx - 1], t1 = sessionTime[idx];
  const ratio = (t - t0) / (t1 - t0);
  return Math.round(sessionHr[idx - 1] + ratio * (sessionHr[idx] - sessionHr[idx - 1]));
}

const maxTime = Math.max(...sessions.map(s => s.time[s.time.length - 1]));
const combined = [];
for (let t = 0; t <= maxTime; t += 6) {
  const minutes = Math.floor(t / 60);
  const seconds = t % 60;
  const point = { time: t, label: `${minutes}:${seconds.toString().padStart(2, '0')}` };
  sessions.forEach(s => {
    const v = interpolate(s.time, s.hr, t);
    if (v !== null) point[s.name] = v;
  });
  combined.push(point);
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "#12122a", border: "1px solid #2a2a4a", borderRadius: 8, padding: "10px 14px" }}>
        <p style={{ color: "#888", margin: 0, fontSize: 11 }}>⏱ {label}</p>
        {payload.filter(p => p.value != null).sort((a, b) => b.value - a.value).map((p, i) => (
          <p key={i} style={{ color: p.color, margin: "3px 0 0", fontSize: 12, fontWeight: 600 }}>
            {p.name}: {p.value} bpm
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function App() {
  const emomMarkers = Array.from({ length: 10 }, (_, i) => (i + 1) * 60);

  return (
    <div style={{ background: "#0f0f1a", minHeight: "100vh", padding: "24px 16px", fontFamily: "system-ui, sans-serif", color: "#eee" }}>
      <h1 style={{ textAlign: "center", fontSize: 17, fontWeight: 700, marginBottom: 2, color: "#fff" }}>
        🏋️ Évolution FC – EMOM Wall Balls
      </h1>
      <p style={{ textAlign: "center", color: "#555", fontSize: 12, marginBottom: 20 }}>
        6 séances · 20 fév → 09 mars 2026
      </p>

      {/* Stats cards */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 22, flexWrap: "wrap" }}>
        {sessions.map((s) => (
          <div key={s.label} style={{
            background: s.label.includes("★") ? "#1e1a00" : "#1a1a2e",
            borderRadius: 10, padding: "10px 12px", minWidth: 108,
            borderTop: `3px solid ${s.color}`,
            boxShadow: s.label.includes("★") ? `0 0 12px ${s.color}44` : "none"
          }}>
            <p style={{ margin: 0, fontWeight: 700, color: s.color, fontSize: 14 }}>{s.label}</p>
            <p style={{ margin: "3px 0 1px", fontSize: 10, color: "#555" }}>{s.wbs}</p>
            <p style={{ margin: "2px 0", fontSize: 11, color: "#888" }}>Moy <span style={{ color: "#ddd", fontWeight: 600 }}>{s.avg}</span></p>
            <p style={{ margin: "2px 0", fontSize: 11, color: "#888" }}>Max <span style={{
              color: s.max === 164 ? "#facc15" : "#ddd",
              fontWeight: 600
            }}>{s.max} {s.max === 164 ? "🔺" : ""}</span></p>
            <p style={{ margin: "2px 0", fontSize: 11, color: "#888" }}>Start <span style={{ color: "#ddd", fontWeight: 600 }}>{s.start}</span></p>
          </div>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={340}>
        <LineChart data={combined} margin={{ top: 8, right: 16, left: 0, bottom: 18 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e1e2e" />
          <XAxis
            dataKey="label"
            tick={{ fill: "#555", fontSize: 10 }}
            interval={14}
            label={{ value: "Temps (mm:ss)", position: "insideBottom", offset: -8, fill: "#444", fontSize: 10 }}
          />
          <YAxis
            domain={[70, 170]}
            tick={{ fill: "#555", fontSize: 10 }}
            label={{ value: "FC (bpm)", angle: -90, position: "insideLeft", offset: 10, fill: "#444", fontSize: 10 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ color: "#888", fontSize: 11, paddingTop: 8 }} />
          {emomMarkers.map((t) => (
            <ReferenceLine key={t} x={`${Math.floor(t / 60)}:00`} stroke="#222240" strokeDasharray="3 3" />
          ))}
          <ReferenceLine y={150} stroke="#f43f5e" strokeDasharray="4 3" strokeOpacity={0.2}
            label={{ value: "150", position: "right", fill: "#f43f5e", fontSize: 10, opacity: 0.4 }} />
          <ReferenceLine y={164} stroke="#facc15" strokeDasharray="4 3" strokeOpacity={0.3}
            label={{ value: "164 max", position: "right", fill: "#facc15", fontSize: 10, opacity: 0.6 }} />
          {sessions.map((s) => (
            <Line
              key={s.name}
              type="monotone"
              dataKey={s.name}
              stroke={s.color}
              strokeWidth={s.label.includes("★") ? 2.5 : 1.5}
              dot={false}
              activeDot={{ r: 4 }}
              connectNulls={false}
              opacity={s.label.includes("★") ? 1 : 0.7}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>

      {/* Insight */}
      <div style={{ marginTop: 16, background: "#1a1a2e", borderRadius: 10, padding: "14px 16px", fontSize: 12, color: "#999", lineHeight: 1.8 }}>
        <p style={{ margin: "0 0 6px", fontWeight: 600, color: "#eee", fontSize: 13 }}>📊 Analyse · 09/03</p>
        <p style={{ margin: 0 }}>
          Départ à froid (74 bpm) comme le 20/02 — la montée est lente puis le moteur s'emballe fort en 2e moitié.{" "}
          <span style={{ color: "#facc15", fontWeight: 600 }}>Max à 164 bpm</span>, nouveau record sur ces EMOM.
          La FC moy reste à 130 grâce à la longue phase de chauffe, mais les pics sont clairement plus intenses.
          Deux hypothèses : séance post-musculation (legs fatiguées) ou rythme de répétitions plus soutenu en fin de séance.
        </p>
      </div>
    </div>
  );
}
