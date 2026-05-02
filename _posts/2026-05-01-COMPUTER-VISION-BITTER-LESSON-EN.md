---
layout: blog-standalone
lang: en
title: "Is Computer Vision Heading for the Dustbin of History?"
date: 2026-05-01
permalink: /posts/2026/05/computer-vision-bitter-lesson-en/
published: true
tags:
  - computer vision
  - artificial intelligence
  - reflection
---

Reflections on Vincent Sitzmann's [“The flavor of the bitter lesson for computer vision”](https://www.vincentsitzmann.com/blog/bitter_lesson_of_cv/).

“Many problems treated as the core of a field may simply be scaffolding left behind by an era of insufficient capability.”

# Why Traditional CV Looks Like Scaffolding

Sitzmann argues that traditional computer vision has split vision into intermediate tasks such as classification, segmentation, optical flow, 3D reconstruction, and SLAM not because these tasks are naturally equivalent to intelligence, but because they were a historical compromise. When it was not yet feasible to learn the full perception-to-action loop end to end, researchers could only define intermediate problems that were labelable, measurable, and publishable.

Rich Sutton's 2019 essay on the Bitter Lesson makes a broader point about seven decades of AI progress: in the long run, the methods that win are usually not clever algorithms or structures handcrafted by humans, but general learning methods that can absorb more data and compute. As data and compute scale up, human-designed modules, priors, and representations gradually become bottlenecks. It may be better to remove human-designed domain knowledge from the machine's reasoning path altogether.

# The Bitter Lesson in Vision

Many CV researchers have already accepted the algorithmic version of the Bitter Lesson: handcrafted features are replaced by deep networks, and complex pipelines are absorbed by large models. One representative example is VGGT, the CVPR 2025 Best Paper.

Future vision models should not stop at producing masks, point clouds, or camera poses. They should become part of agents that can act and accomplish goals. Sitzmann even predicts that explicit 3D representations and camera poses will eventually leave the main path.

# From Correct Representations to Correct Consequences

Perhaps CV is moving from “representational correctness” to “consequential correctness.” In the past, we cared about whether the objects in an image were segmented accurately or whether a 3D reconstruction looked reasonable. In the future, the more important question may be whether, after receiving visual input, a machine can pick up a cup steadily, avoid obstacles, or turn an ambiguous instruction into reliable action.

For CV researchers, this implies a reconstruction of the loss function and even the field's evaluation system.

## Is Explicit 3D Dead and Latents Eternal?

I do not think so. 3D representations will not simply disappear. What may disappear is the engineering paradigm that treats 3D as a mandatory intermediate step.

Explicit representations can still exist for a long time as supervision signals and debugging windows. Robotic systems today also often rely on low-dimensional geometric information such as depth, pose, and joint state to improve efficiency and stability.

More precisely, explicit representations may be downgraded: from ground truth to tool, from the mandatory route through a model's internal reasoning to a language humans use to understand and constrain models.

# Not Gone, but Transformed

So, is computer vision heading for the dustbin of history? My answer is this: if CV means a set of isolated intermediate tasks and leaderboards, then yes, it will likely be swallowed by larger intelligent systems. But if CV means the ability to extract action-relevant structure from perception, then it will not disappear. It will become even more important.

It will simply exist in another form: no longer standing outside the world to annotate it, but learning to see for the sake of action inside the loop of machine-world interaction.

That path is longer than any benchmark, but I believe it is also more worth pursuing.

![computer vision](/images/blog/computer-vision-bitter-lesson/figure-1-computer-vision.png)
