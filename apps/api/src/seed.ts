import db from "./database";

// Limpa dados antigos
db.exec(`DELETE FROM metric_history;`);
db.exec(`DELETE FROM alerts;`);
db.exec(`DELETE FROM machine_status;`);

// Popula histórico de métricas (últimas 20 leituras)
const insertMetric = db.prepare(`
  INSERT INTO metric_history (timestamp, temperature, rpm, efficiency)
  VALUES (?, ?, ?, ?)
`);

for (let i = 20; i >= 0; i--) {
  const date = new Date(Date.now() - i * 3000);
  insertMetric.run(
    date.toISOString(),
    70 + Math.random() * 20, // 70–90°C
    1100 + Math.random() * 300, // 1100–1400 RPM
    88 + Math.random() * 10, // 88–98%
  );
}

// Popula alertas iniciais
const insertAlert = db.prepare(`
  INSERT INTO alerts (id, level, message, component, timestamp, acknowledged)
  VALUES (?, ?, ?, ?, ?, ?)
`);

insertAlert.run(
  "alert-1",
  "CRITICAL",
  "Temperatura acima do limite",
  "Sensor de Temperatura",
  new Date(Date.now() - 120000).toISOString(),
  0,
);
insertAlert.run(
  "alert-2",
  "WARNING",
  "RPM abaixo do esperado",
  "Motor Principal",
  new Date(Date.now() - 300000).toISOString(),
  0,
);
insertAlert.run(
  "alert-3",
  "INFO",
  "Manutenção preventiva próxima",
  "Sistema",
  new Date(Date.now() - 600000).toISOString(),
  0,
);

// Popula status inicial da máquina
const insertStatus = db.prepare(`
  INSERT INTO machine_status (id, timestamp, state, temperature, rpm, uptime, efficiency, oee_overall, oee_availability, oee_performance, oee_quality)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

insertStatus.run(
  "mixer-01",
  new Date().toISOString(),
  "RUNNING",
  78,
  1200,
  19380,
  92,
  0.92,
  0.98,
  0.95,
  0.94,
);

console.log("Banco de dados populado com sucesso!");
