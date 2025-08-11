---
layout: single
title: "Research"
permalink: /research/
author_profile: true
---
I have several research experience in the following directions:
* [FPGA In-BRAM Computation](#tensor-based-hardware-efficient-on-device-training-framework-with-fpga-in-bram-computation)
* [Neuronal Synchronization and Oscillation](#how-inhibitory-neural-circuits-govern-multi-band-neuronal-oscillations)
* [Reconfigurable Neuromorphic Hardware Design](#reconfigurable-neuromorphic-hardware-design-for-spiking-neuron-model) 
* [Autonomous Running Robot](#international-contest-of-autonomous-running-robots)
* [FPGA Digital Image Processing System](#digital-image-processing-system-based-on-pynq-z2-fpga)

## Tensor-based Hardware-Efficient On-device Training Framework with FPGA In-BRAM Computation

<img src = "/images/bram.png" width="300" height="200"/>

[Sept 2024 - June 2025, UC Santa Barbara] **Voluntary Researcher advised by Prof. Zheng Zhang**
- Keywords: Compute-in-Memory, FPGA In-BRAM Computation, Tensor-Train Decomposition 
Our goal is to develop a tensor-based hardware-efficient on-device training framework, with the idea of implementing contraction of tensor-train using In-BRAM computation on FPGAs
- Main reference: Kabir, Md Arafat. ReMoDeL-FPGA: Reconfigurable Memory-centric Array Processor Architecture for Deep-Learning Acceleration on FPGA. Diss. University of Arkansas, 2024.
- Paper: to be finished

## How Inhibitory Neural Circuits Govern Multi-band Neuronal Oscillations

<img src = "/images/network.png" width="300" height="200"/>

[July - Sept 2024, New York University Shanghai] **Research Assistant advised by Prof. Zhuocheng Xiao**
- Keywords: Neuronal Oscillation, Spiking Neural Network, Computational Neuroscience
- Designed a scalable spiking neuron network in MATLAB to model a small copy of the mouse visual cortex L2/3, generating multiband neuronal oscillations (gamma, beta, alpha, etc.) using data from the Allen Institute (projection probability, synaptic strength, etc.)
- Conducted extensive simulations to explore the systematic relationship between biological parameters and the various types of neuronal oscillations observed in the network
- Research Document: [How Inhibitory Neural Circuits Govern Multiband Neuronal Oscillations](https://drive.google.com/file/d/1pqIziOuovjc3ZIlvWkT5Ww1aOIFoRuK7/view)
     
## Reconfigurable Neuromorphic Hardware Design for Spiking Neuron Model

<img src = "/images/neuron.png" width="300" height="200"/>

[Feb 2023 - July 2024, HUST] **Five-person Research Team Leader advised by Prof. Chao Wang**
- Keywords: Neuromorphic Hardware Design, Spiking Neuron Model, Hodgkin-Huxley Neuron, Adaptive Exponential Neuron, CORDIC
- Proposed a dual-mode spiking neuron hardware design (Hodgkin-Huxley model & Adaptive Exponential model) using an optimized reconfigurable pipeline based on data flow dependency and Reconfigurable Fast-Convergence CORDIC algorithm
- Simulated the proposed dual-mode neuron design in Python and conducted hardware implementation in Vivado, demonstrated that our design achieves up to 4.8×improvement in latency and 3.0× in accuracy
- Analyzed the implementation results, summarized the design methods, and wrote paper as co-first author
- Led the five-person team, and took charge of project schedule management and task allocations
- Paper(**TENCON'24**): [A Low-Latency and High-Accuracy Dual-Mode Neuron Design for Accelerating Neurological Diseases Simulation and Analysis](https://ieeexplore.ieee.org/abstract/document/10902968) 

## International Contest of Autonomous Running Robots

<img src = "/images/robot.jpg" width="300" height="200"/>

[July - Aug 2023] **Four-person Team Leader**
- Developed surroundings recognition algorithms in Python, allowing the robot to autonomously identify its environment and execute corresponding actions to overcome obstacles such as single-plank bridges, stairs, and minefields
- Designed sequences of servo motor parameters to control the robot's movements, including forward motion, redirection, and rolling over

## Digital Image Processing System Based on PYNQ-Z2 FPGA

<img src = "/images/fpga.png" width="300" height="200"/>

[Dec 2023 - Jan 2024] **Three-person Team Leader**
- Developed a image processing system on FPGA, capable of performing image enlargement, edge extraction, erosion, and dilation, with output displayed via HDMI
- Designed the image processing system's overall framework, the system control unit and HDMI display module using Verilog Hardware Description Language
