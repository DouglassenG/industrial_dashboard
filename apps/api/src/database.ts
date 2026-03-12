import Database from "better-sqlite3";
import path from "path";

const DB_PATH = path.join(__dirname, "..", "industrial.db");

const db: Database.Database = new Database(DB_PATH);

// Enable WAL mode for better performance
db.pragma("journal_mode = WAL");

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS machine_status (
    id TEXT PRIMARY KEY,
    timestamp TEXT NOT NULL,
    state TEXT NOT NULL CHECK(state IN ('RUNNING', 'STOPPED', 'MAINTENANCE', 'ERROR')),
    temperature REAL NOT NULL,
    rpm REAL NOT NULL,
    uptime REAL NOT NULL,
    efficiency REAL NOT NULL,
    oee_overall REAL NOT NULL,
    oee_availability REAL NOT NULL,
    oee_performance REAL NOT NULL,
    oee_quality REAL NOT NULL
  );

  CREATE TABLE IF NOT EXISTS alerts (
    id TEXT PRIMARY KEY,
    level TEXT NOT NULL CHECK(level IN ('INFO', 'WARNING', 'CRITICAL')),
    message TEXT NOT NULL,
    component TEXT NOT NULL,
    timestamp TEXT NOT NULL,
    acknowledged INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS metric_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp TEXT NOT NULL,
    temperature REAL NOT NULL,
    rpm REAL NOT NULL,
    efficiency REAL NOT NULL
  );
`);

// Seed data only if tables are empty
const machineCount = (
  db.prepare("SELECT COUNT(*) as count FROM machine_status").get() as {
    count: number;
  }
).count;

if (machineCount === 0) {
  const insertMachine = db.prepare(`
    INSERT INTO machine_status
      (id, timestamp, state, temperature, rpm, uptime, efficiency, oee_overall, oee_availability, oee_performance, oee_quality)
    VALUES
      (@id, @timestamp, @state, @temperature, @rpm, @uptime, @efficiency, @oee_overall, @oee_availability, @oee_performance, @oee_quality)
  `);

  insertMachine.run({
    id: "mixer-001",
    timestamp: new Date().toISOString(),
    state: "RUNNING",
    temperature: 72.4,
    rpm: 1450,
    uptime: 98.2,
    efficiency: 91.5,
    oee_overall: 84.3,
    oee_availability: 96.1,
    oee_performance: 92.8,
    oee_quality: 94.5,
  });

  console.log("Seeded machine_status.");
}

const alertCount = (
  db.prepare("SELECT COUNT(*) as count FROM alerts").get() as {
    count: number;
  }
).count;

if (alertCount === 0) {
  const insertAlert = db.prepare(`
    INSERT INTO alerts (id, level, message, component, timestamp, acknowledged)
    VALUES (@id, @level, @message, @component, @timestamp, @acknowledged)
  `);

  const seedAlerts = [
    {
      id: "alert-001",
      level: "WARNING",
      message: "Temperatura acima do limite recomendado (72°C > 70°C)",
      component: "Motor Principal",
      timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
      acknowledged: 0,
    },
    {
      id: "alert-002",
      level: "INFO",
      message: "Manutenção preventiva agendada para amanhã às 08:00",
      component: "Sistema",
      timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
      acknowledged: 1,
    },
    {
      id: "alert-003",
      level: "CRITICAL",
      message: "Vibração excessiva detectada no rolamento",
      component: "Rolamento B2",
      timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
      acknowledged: 0,
    },
  ];

  for (const alert of seedAlerts) {
    insertAlert.run(alert);
  }

  console.log("Seeded alerts.");
}

const historyCount = (
  db.prepare("SELECT COUNT(*) as count FROM metric_history").get() as {
    count: number;
  }
).count;

if (historyCount === 0) {
  const insertHistory = db.prepare(`
    INSERT INTO metric_history (timestamp, temperature, rpm, efficiency)
    VALUES (@timestamp, @temperature, @rpm, @efficiency)
  `);

  const now = Date.now();
  const seedHistory = db.transaction(() => {
    for (let i = 23; i >= 0; i--) {
      const ts = new Date(now - i * 60 * 60 * 1000).toISOString();
      const tempVariance = (Math.random() - 0.5) * 6;
      const rpmVariance = (Math.random() - 0.5) * 100;
      const effVariance = (Math.random() - 0.5) * 8;

      insertHistory.run({
        timestamp: ts,
        temperature: parseFloat((70 + tempVariance).toFixed(1)),
        rpm: parseFloat((1450 + rpmVariance).toFixed(0)),
        efficiency: parseFloat((91 + effVariance).toFixed(1)),
      });
    }
  });

  seedHistory();
  console.log("Seeded metric_history (24 hourly records).");
}

console.log(`Database ready at: ${DB_PATH}`);

export default db;
