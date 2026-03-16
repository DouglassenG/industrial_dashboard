export function playAlertSound(level: "CRITICAL" | "WARNING"): void {
  try {
    const ctx = new AudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    if (level === "CRITICAL") {
      // Som alto e urgente para CRITICAL
      oscillator.frequency.value = 880;
      gainNode.gain.value = 0.4;
      oscillator.start();
      oscillator.stop(ctx.currentTime + 0.5);

      // Segundo beep para CRITICAL
      const oscillator2 = ctx.createOscillator();
      const gainNode2 = ctx.createGain();
      oscillator2.connect(gainNode2);
      gainNode2.connect(ctx.destination);
      oscillator2.frequency.value = 660;
      gainNode2.gain.value = 0.4;
      oscillator2.start(ctx.currentTime + 0.6);
      oscillator2.stop(ctx.currentTime + 1.1);
    } else {
      // Som suave para WARNING
      oscillator.frequency.value = 440;
      gainNode.gain.value = 0.2;
      oscillator.start();
      oscillator.stop(ctx.currentTime + 0.3);
    }
  } catch {
    // Silencia erros de AudioContext em ambientes sem suporte
    console.warn("AudioContext não suportado neste ambiente");
  }
}
