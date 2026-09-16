---
title: "NoodleEscape"
excerpt: "First-person VR action game built in Unity with a custom rendering pipeline using command buffer abstractions and HLSL shader programming.<br/><br/>**Tech:** C#, Unity, ShaderLab, HLSL"
collection: portfolio
---

## Overview

A first-person VR action game built in Unity for **CS 415**. The player stands in a kitchen and must catch dried noodles falling from an overhead cabinet before they hit the floor and break apart — a premise that puts constant, physically grounded objects in the player's hands and makes the room itself the play space.

## Contributions

- **VR environment:** Built the kitchen scene in Unity with interactable cabinet doors the player opens directly, rather than through a menu or pointer
- **Noodle physics:** Implemented rolling noodle physics with collision detection, including the breaking behavior that triggers when a noodle reaches the floor
- **Player movement:** Full-body locomotion supporting walking, squatting, and jumping, mapped to VR headset and controller input
- **Custom rendering pipeline:** Implemented a custom render path built on Unity command buffer abstractions, with effects written in ShaderLab and HLSL

## Tech Stack

C#, Unity, ShaderLab, HLSL, Meta XR SDK

## Links

- [Source on GitHub](https://github.com/nancygehanjia/NoodleEscape)
