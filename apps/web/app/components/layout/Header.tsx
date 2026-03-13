"use client";

interface HeaderProps {
  connected: boolean;
  darkMode: boolean;
  onToggleDark: () => void;
}

export default function Header({
  connected,
  darkMode,
  onToggleDark,
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2">
        <span className="text-2xl">⚙️</span>
        <span className="font-bold text-lg text-gray-800 dark:text-white">
          Dashboard de Monitoramento
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span
            className={`w-3 h-3 rounded-full ${connected ? "bg-green-500" : "bg-red-500"}`}
          />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {connected ? "Conectado" : "Sem conexão"}
          </span>
        </div>
        <button
          onClick={onToggleDark}
          aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
          className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white text-sm transition-all duration-300"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}
