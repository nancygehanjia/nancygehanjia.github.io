---
title: "Toward Verifiable NN4Sys: Certified Environment Transition Modeling"
excerpt: "A formally bounded neural environment model for adaptive bitrate video streaming, with statistically certified error guarantees via Clopper–Pearson intervals.<br/><br/>**Tech:** Python, neural network training, statistical certification"
collection: portfolio
---

## Overview

Course research project (CS 521, UIUC) with Xinyi Wei, addressing a gap in the verification of Neural Networks for Systems (NN4Sys). Neural controllers for adaptive bitrate (ABR) video streaming — such as Pensieve — outperform hand-tuned heuristics, but they are black boxes, and prior work showed that perturbing a single input feature by at most 10% can cut average bitrate by 35–65% and Quality of Experience by 30–40%.

Verifying such a controller requires more than analyzing the policy: it requires a trustworthy model of the environment the policy acts on. This project builds that missing piece — a neural predictor *f\** for the environment transition function *f*, carrying rigorous confidence guarantees on its own approximation error.

## Approach

- **Neuro-symbolic formulation:** ABR streaming is modeled as a closed-loop system pairing a neural controller with an environment transition function, expressed as an algorithm with a safety assertion over average QoE and consecutive-violation tolerance.
- **Environment predictor:** A fully connected network (2- and 3-hidden-layer variants) predicts normalized next-chunk download time from a 19-dimensional feature vector — 8 past bandwidth measurements, 8 past download times, 8 past chunk sizes, and the upcoming chunk size — drawn from real-world traces in the Puffer dataset. Trained with Adam and an L1 loss chosen for robustness to heavy-tailed download times.
- **Statistical certification:** Rather than reporting point-wise error, predictions are treated as Bernoulli trials against a 10% normalized-error success criterion, and exact Clopper–Pearson binomial confidence intervals give a distribution-free certified lower bound on the success rate.

## Results

The best model — trained on 10,000 samples drawn from 10 days of traces and tested on 9,000 samples from 9 different days — achieves a 90% Clopper–Pearson interval of [0.9846, 0.9887] on test accuracy, certifying that at least **98.46% of predictions fall within 10% normalized error, with 90% confidence**. Three-layer models yield tighter intervals on most traces but show mild overfitting on the most challenging ones.

## Tech Stack

Python, neural network training (Adam, L1 loss), Clopper–Pearson binomial confidence intervals, Puffer network trace dataset

## Links

- [Full paper](/files/Verifiable_NN4Sys.pdf) (PDF)
