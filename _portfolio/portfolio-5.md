---
title: "Formalizing Graph Burning for Path Graphs in Isabelle/HOL"
excerpt: "Machine-checked proof of the Burning Number Conjecture for all path graphs, formalized in Isabelle/HOL. Establishes b(P_n) ≤ ⌈√n⌉ for every path graph P_n.<br/><br/>**Tech:** Isabelle/HOL, Archive of Formal Proofs"
collection: portfolio
---

## Overview

A formal verification project that machine-checks the proof of the [Burning Number Conjecture](https://arxiv.org/abs/1507.06524) for all path graphs in Isabelle/HOL. The conjecture, introduced by Bonato, Janssen, and Roshanbin (2015), states that every connected graph of order *n* can be fully burnt in at most ⌈√n⌉ rounds. This project establishes the result for path graphs — the graph family that is tight with the bound — as a stepping stone toward a fully general proof.

The proof is constructive: an explicit burning sequence `path_bs` is defined by placing sources at positions (k−1−i)(k−i) for i = 0, …, k−1 where k = ⌈√n⌉, and it is machine-checked that this sequence burns every vertex within the required number of rounds.

## Technical Highlights

- **Bijection-based path graph definition:** Rather than the traditional vertex-degree definition, path graphs are characterized via a bijective labeling f/g between the vertex set and {0, …, n−1}, with adjacency defined by consecutive labels. This reduces graph-distance reasoning to arithmetic on natural numbers.
- **Two-level proof architecture:** Coverage is first argued purely on integer labels via arithmetic lemmas, then the bridge lemma `label_to_closed_nbh` transports label-level bounds to actual graph neighborhood membership, discharging the `burns_with` predicate.
- **Case split on path length:** The proof separates into a perfect-square case (clean interval partition of {0, …, k²−1}) and a non-perfect-square case (tail segment handled separately with capped/uncapped sub-cases).
- **No axiom gaps:** All proofs are complete Isar-style proofs with no `sorry`. Built on Chelsea Edmonds' *Undirected Graph Theory* AFP entry.

## Main Results

- **`path_burns_with`** — `burns_with path_bs` holds for every path graph, regardless of whether its length is a perfect square.
- **`path_burnable`** — Every path graph P_n is `burnable`: there exists a burning sequence of length at most ⌈√|V|⌉. This is the machine-checked statement of the Burning Conjecture for path graphs.

## Tech Stack

Isabelle/HOL, Isar proof language, Archive of Formal Proofs (Undirected Graph Theory by Chelsea Edmonds)

## Links

- [GitHub Repository](https://github.com/nancygehanjia/Formalization-of-Burning-Graph-with-Isabelle)
