"use client";

import {
  Settings,
  Sun,
  Moon,
  Wifi,
  WifiOff,
  Bell,
  BellRing,
} from "lucide-react";

interface HeaderProps {
  connected: boolean;
  darkMode: boolean;
  onToggleDark: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export default function Header({
  connected,
  darkMode,
  onToggleDark,
  soundEnabled,
  onToggleSound,
}: HeaderProps) {
  const handleToggleSound = () => {
    if (!soundEnabled) new AudioContext();
    onToggleSound();
  };

  return (
    <header className="sticky top-0 z-30 flex flex-col sm:flex-row sm:items-center sm:justify-between px-3 py-3 sm:px-8 sm:py-4 lg:px-10 bg-blue-900 dark:bg-blue-950 border-b border-blue-800 dark:border-blue-900 shadow-md">
      <div className="flex items-center justify-between sm:contents">
        <div className="flex items-center gap-2 min-w-0">
          <Settings
            size={24}
            className="flex-shrink-0 text-white"
            aria-hidden="true"
          />
          <span className="font-semibold text-sm text-white truncate min-w-0">
            Dashboard de Monitoramento
          </span>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {connected ? (
            <Wifi
              size={16}
              className="flex-shrink-0 text-green-400 animate-pulse"
              aria-hidden="true"
            />
          ) : (
            <WifiOff
              size={16}
              className="flex-shrink-0 text-red-400"
              aria-hidden="true"
            />
          )}
          <span className="text-sm text-white whitespace-nowrap">
            {connected ? "Conectado" : "Sem conexão"}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:contents">
        <button
          onClick={handleToggleSound}
          aria-label={soundEnabled ? "Desativar som" : "Ativar som"}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-800 dark:bg-blue-900 text-white text-sm transition-all duration-300 min-w-[80px] whitespace-nowrap flex-shrink-0 hover:bg-blue-700 dark:hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 flex-1 sm:flex-none justify-center"
        >
          {soundEnabled ? (
            <>
              <BellRing size={14} aria-hidden="true" />
              <span>Som Ativo</span>
            </>
          ) : (
            <>
              <Bell size={14} aria-hidden="true" />
              <span>Ativar Som</span>
            </>
          )}
        </button>
        <button
          onClick={onToggleDark}
          aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-800 dark:bg-blue-900 text-white text-sm transition-all duration-300 min-w-[80px] whitespace-nowrap flex-shrink-0 hover:bg-blue-700 dark:hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 flex-1 sm:flex-none justify-center"
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
