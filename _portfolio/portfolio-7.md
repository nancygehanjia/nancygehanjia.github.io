---
title: "Poo's Voice Transformer"
excerpt: "Real-time voice effects desktop app with robot, autotune, echo, and 8-bit effects, built on a low-latency audio streaming pipeline.<br/><br/>**Tech:** Python, PyQt6, NumPy, SciPy"
collection: portfolio
---

## Overview

A desktop application that applies voice effects to live microphone input in real time. The app pairs a PyQt6 interface with a streaming audio pipeline, so effects can be switched and tuned while audio is playing rather than applied offline to a recording.

## Features

- **Effect set:** Robot, autotune, echo, and 8-bit effects, implemented with NumPy and SciPy signal processing
- **Real-time pitch shifting:** Continuous adjustment across a 0.5x–2.0x range
- **Low-latency streaming:** Audio is processed in a streaming loop rather than buffered in full, keeping the delay between input and output small enough for live use
- **Configurable I/O:** Input and output devices are selectable, so the app can feed other applications through a virtual audio device

## Tech Stack

Python, PyQt6, NumPy, SciPy

## Links

- [Source on GitHub](https://github.com/nancygehanjia/PoosVoiceTransformer)
