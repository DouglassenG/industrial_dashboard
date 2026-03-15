"use client";

import { Settings, Sun, Moon, Wifi, WifiOff } from "lucide-react";

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
    <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex items-center gap-2 min-w-0">
        <Settings
          size={24}
          className="flex-shrink-0 text-green-600 dark:text-green-400"
          aria-hidden="true"
        />
        <span className="font-bold text-lg text-gray-800 dark:text-white truncate">
          Dashboard de Monitoramento
        </span>
      </div>
      <div className="flex items-center gap-2 flex-wrap justify-end">
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {connected ? (
            <Wifi
              size={16}
              className="flex-shrink-0 text-green-500 animate-pulse"
              aria-hidden="true"
            />
          ) : (
            <WifiOff
              size={16}
              className="flex-shrink-0 text-red-500"
              aria-hidden="true"
            />
          )}
          <span className="text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">
            {connected ? "Conectado" : "Sem conexão"}
          </span>
        </div>
        <button
          onClick={onToggleDark}
          aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white text-sm transition-all duration-300 min-w-[80px] whitespace-nowrap flex-shrink-0 hover:-translate-y-0.5 hover:shadow-md active:scale-95"
        >
          {darkMode ? (
            <>
              <Sun size={14} aria-hidden="true" />
              <span>Light</span>
            </>
          ) : (
            <>
              <Moon size={14} aria-hidden="true" />
              <span>Dark</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}
