"use client";

import { useEffect, useRef, useState } from "react";

export default function ToneGenerator() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [freq, setFreq] = useState(432);
  const [vol, setVol] = useState(50);
  const [trem, setTrem] = useState(0);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const tremoloOscRef = useRef<OscillatorNode | null>(null);
  const tremoloGainRef = useRef<GainNode | null>(null);
  const tremRef = useRef(trem);
  const freqRef = useRef(freq);
  const volRef = useRef(vol);

  useEffect(() => {
    tremRef.current = trem;
  }, [trem]);
  useEffect(() => {
    freqRef.current = freq;
  }, [freq]);
  useEffect(() => {
    volRef.current = vol;
  }, [vol]);

  function getCtx() {
    if (!audioCtxRef.current) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      const gainNode = ctx.createGain();
      const tremoloGain = ctx.createGain();
      gainNode.connect(tremoloGain);
      tremoloGain.connect(ctx.destination);
      tremoloGain.gain.setValueAtTime(1, ctx.currentTime);
      audioCtxRef.current = ctx;
      gainNodeRef.current = gainNode;
      tremoloGainRef.current = tremoloGain;
    }
    return audioCtxRef.current;
  }

  function startTremolo(ctx: AudioContext) {
    if (tremoloOscRef.current) {
      try {
        tremoloOscRef.current.stop();
      } catch {}
      tremoloOscRef.current = null;
    }
    const tremoloGain = tremoloGainRef.current!;
    if (tremRef.current === 0) {
      tremoloGain.gain.setValueAtTime(1, ctx.currentTime);
      return;
    }
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.type = "sine";
    lfo.frequency.setValueAtTime(tremRef.current, ctx.currentTime);
    lfoGain.gain.setValueAtTime(0.5, ctx.currentTime);
    tremoloGain.gain.setValueAtTime(0.5, ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(tremoloGain.gain);
    lfo.start();
    tremoloOscRef.current = lfo;
  }

  function stopTremolo() {
    if (tremoloOscRef.current) {
      try {
        tremoloOscRef.current.stop();
      } catch {}
      tremoloOscRef.current = null;
    }
    if (tremoloGainRef.current) {
      tremoloGainRef.current.gain.setValueAtTime(1, getCtx().currentTime);
    }
  }

  function startTone() {
    const ctx = getCtx();
    if (ctx.state === "suspended") ctx.resume();
    const gainNode = gainNodeRef.current!;
    const oscillator = ctx.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(freqRef.current, ctx.currentTime);
    oscillator.connect(gainNode);
    gainNode.gain.cancelScheduledValues(ctx.currentTime);
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime((volRef.current / 100) * 0.7, ctx.currentTime + 0.1);
    oscillator.start();
    oscillatorRef.current = oscillator;
    setIsPlaying(true);
    startTremolo(ctx);
  }

  function stopTone() {
    const oscillator = oscillatorRef.current;
    if (!oscillator) return;
    const ctx = getCtx();
    const gainNode = gainNodeRef.current!;
    oscillatorRef.current = null;
    setIsPlaying(false);
    stopTremolo();
    gainNode.gain.cancelScheduledValues(ctx.currentTime);
    gainNode.gain.setValueAtTime(gainNode.gain.value, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.1);
    setTimeout(() => {
      try {
        oscillator.stop();
      } catch {}
    }, 150);
  }

  function toggleTone() {
    if (isPlaying) stopTone();
    else startTone();
  }

  function updateFrequency(v: number) {
    setFreq(v);
    freqRef.current = v;
    if (oscillatorRef.current && isPlaying) {
      oscillatorRef.current.frequency.setValueAtTime(v, getCtx().currentTime);
    }
  }

  function updateVolume(v: number) {
    setVol(v);
    volRef.current = v;
    if (gainNodeRef.current && isPlaying) {
      gainNodeRef.current.gain.setValueAtTime((v / 100) * 0.7, getCtx().currentTime);
    }
  }

  function updateTremolo(v: number) {
    setTrem(v);
    tremRef.current = v;
    if (isPlaying) {
      stopTremolo();
      if (v > 0) startTremolo(getCtx());
    }
  }

  const labelClass =
    "font-[family-name:var(--font-gordon)] text-[11px] tracking-[0.2em] uppercase text-tic-dark-grey";
  const groupClass = "mb-11";

  return (
    <main className="tone-generator min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 text-center">
      <p className="font-[family-name:var(--font-gordon)] text-[11px] tracking-[0.28em] uppercase text-tic-yellow mb-5">
        TIC Tone Generator
      </p>
      <h1
        className="font-[family-name:var(--font-gordon)] font-normal text-white mb-3"
        style={{ fontSize: "clamp(28px,4vw,42px)", letterSpacing: "0.04em" }}
      >
        Find your frequency.
      </h1>
      <p className="font-[family-name:var(--font-noto-serif)] italic text-[17px] text-tic-dark-grey mb-16 max-w-[440px]">
        Tune in. Notice what shifts.
      </p>

      <div className="mb-[52px]">
        <button
          onClick={toggleTone}
          aria-label="Play or stop tone"
          className={`w-[90px] h-[90px] rounded-full border-[1.5px] flex items-center justify-center mx-auto transition-colors duration-200 ${
            isPlaying
              ? "border-tic-yellow bg-tic-yellow/10"
              : "border-white/20 hover:border-tic-yellow hover:bg-tic-yellow/[0.06]"
          }`}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-tic-yellow">
              <path d="M6 6h12v12H6z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <p
          className={`font-[family-name:var(--font-gordon)] text-[10px] tracking-[0.2em] uppercase mt-4 transition-colors duration-200 ${
            isPlaying ? "text-tic-yellow" : "text-tic-dark-grey"
          }`}
        >
          {isPlaying ? "Playing" : "Tap to play"}
        </p>
      </div>

      <div className="w-full max-w-[440px]">
        <div className={groupClass}>
          <div className={`flex justify-between items-baseline mb-4 ${labelClass}`}>
            <span>Frequency</span>
            <span className="font-[family-name:var(--font-gordon)] text-[15px] tracking-[0.06em] text-tic-yellow normal-case">
              {freq} Hz
            </span>
          </div>
          <input
            type="range"
            min={40}
            max={1000}
            step={1}
            value={freq}
            onChange={(e) => updateFrequency(Number(e.target.value))}
            className="tone-slider"
          />
          <div className="flex justify-between mt-2.5 font-[family-name:var(--font-gordon)] text-[10px] tracking-[0.1em] text-white/45">
            <span>40 Hz</span>
            <span>250 Hz</span>
            <span>500 Hz</span>
            <span>750 Hz</span>
            <span>1000 Hz</span>
          </div>
        </div>

        <div className={groupClass}>
          <div className={`flex justify-between items-baseline mb-4 ${labelClass}`}>
            <span>Volume</span>
            <span className="font-[family-name:var(--font-gordon)] text-[15px] tracking-[0.06em] text-tic-yellow normal-case">
              {vol}%
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={70}
            step={1}
            value={vol}
            onChange={(e) => updateVolume(Number(e.target.value))}
            className="tone-slider"
          />
        </div>

        <div className={groupClass}>
          <div className={`flex justify-between items-baseline mb-4 ${labelClass}`}>
            <span>Tremolo</span>
            <span className="font-[family-name:var(--font-gordon)] text-[15px] tracking-[0.06em] text-tic-yellow normal-case">
              {trem === 0 ? "Off" : `${trem.toFixed(1)} Hz`}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={12}
            step={0.1}
            value={trem}
            onChange={(e) => updateTremolo(Number(e.target.value))}
            className="tone-slider"
          />
          <div className="flex justify-between mt-2.5 font-[family-name:var(--font-gordon)] text-[10px] tracking-[0.1em] text-white/45">
            <span>Off</span>
            <span>Slow</span>
            <span>Medium</span>
            <span>Fast</span>
          </div>
        </div>
      </div>

      <p className="font-[family-name:var(--font-noto-serif)] italic text-base leading-[1.7] text-white/45 mt-5 max-w-[440px]">
        What did you notice in this moment of play?
        <br />
        <a
          href="https://the-infinity-container.mn.co/spaces/17639247/chat"
          target="_blank"
          rel="noopener"
          className="text-tic-yellow no-underline border-b border-tic-yellow/30 hover:opacity-80"
        >
          Share in the Tone Generator chat →
        </a>
      </p>
      <p className="font-[family-name:var(--font-gordon)] text-[10px] tracking-[0.14em] uppercase text-white/45 mt-11">
        Best experienced through speakers rather than headphones
      </p>
    </main>
  );
}
