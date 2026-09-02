---
title: NM4259 Assignment 2, Week 4
description: Reflection on group project progress.
published: 2026-09-02
tags:
  - NM4259
  - Mobile Interaction Design
draft: false
slug: nm4259-assignment-2-week-4
---

Last week, our group chose Google Docs and focused on its outline and tabs. Feedback on our initial direction exposed a gap in our reasoning. We had found an awkward interaction, but we had not shown why it mattered on mobile. I had assumed that a useful desktop feature would remain useful on a smaller screen. That assumption was too simple to justify a redesign.

We started by comparing the role of Google Docs across devices. Desktop sessions are often planned and sustained, with a keyboard, several windows, and enough space to view a document beside its structure. Mobile use often fills shorter gaps or continues work begun elsewhere. One scenario we discussed was a student revising on the bus before a lecture or exam. They would probably not write their notes from scratch there. They might instead retrieve a section, move between a summary and detailed notes, and check what they have already reviewed. This made me see mobile Docs as one part of a cross-device workflow, rather than a smaller substitute for desktop Docs.

I also realised that calling our target users "students" tells us surprisingly little. Someone reading shared notes and someone reorganising a group report may open the same app but need different interactions. This explains our disagreement last week over highlighting. We were all students, yet highlighting was central to one teammate's workflow and almost irrelevant to mine. Our disagreement stopped us from treating one preference as representative. The activity and context tell us more than the demographic label alone. We therefore need to ask what users are doing, where they are doing it, and how much attention they can give the task.

Looking more closely at the outline and tabs changed how I described the problem. The popup covers around 40% of the screen in portrait mode and leaves the document visible, yet the document cannot be scrolled while it is open. I realised we had focused on screen space when the deeper issue was how Google Docs treats navigation. The popup works like a menu: choose a destination, close it, then read. During revision, however, the outline can act more like a map. A student may want to scan the document while checking where each section sits, or move through several sections in sequence. Treating the outline as a temporary menu makes this back-and-forth unnecessarily cumbersome.

It is then clear that a plausible use case is a starting point, not evidence. The bus scenario helped us form a clearer hypothesis: people consulting long, structured documents during short mobile sessions need to navigate without repeatedly losing their place. We now need to find out whether people actually work this way, how often the interruption occurs, and whether it is serious enough to redesign. If it is, our solution should preserve the user's position without forcing a desktop layout onto a phone. If it is not, we should reject the pain point rather than defend it simply because we have already chosen it.
