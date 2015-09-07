---
layout: post
title: "Chrome becomes a bit less of a memory hog with version 45"
date: 2015-09-06
published: true
expires: never
external-url:
categories: [news, tech, opinions]
---

### Chrome becomes a bit less of a memory hog with version 45

![Oink
oink! SHANLISS_SNAPPER](http://cdn.arstechnica.net/wp-content/uploads/2015/09/pig-640x480.jpg)

While the Chrome browser is extremely popular, it has gained something of a
reputation. What hippos are to little plastic balls, Chrome is to memory:
hungry, hungry.

Chrome 45, released earlier this week, should make Google's browser a little
lighter. The company described some improvements yesterday that should reduce
the browser's footprint.

Perhaps the most significant change for tab hoarders is the new behavior when reloading all your tabs when you first launch the browser.
Chrome 45 does a couple of things differently. First, it loads the tabs from most to least recently used. This should mean that the tabs you're most interested in and want to use first will be the first to load. Second, if your system is low on memory, it will stop restoring tabs in the background.
Clicking the tab to view it will, of course, load it, but otherwise it'll
remain dormant.

Idle tabs, too, should see reduced memory usage, especially when they're used to run complex Web applications with lots of JavaScript. JavaScript is a garbage collected language; the JavaScript engine periodically scans its memory for unused objects and frees all those that it finds. The Chrome JavaScript engine, V8, in common with many other typical garbage collectors, also compacts memory; during garbage collection, objects are packed to be closer together to eliminate or reduce the number of gaps between objects.
This in turn allows the garbage collector to free up larger blocks of memory and return those to the operating system.

In Chrome 45, the garbage collector has been tuned to detect when a page is idle and then be more aggressive about collecting and compacting memory. The result is that background tabs should over time have their memory usage trimmed to become closer to the minimum possible usage. Google has a video demonstrating this in action; two Gmail tabs are opened, one in Chrome 45, the
other in Chrome 43. While initially the memory usage is very similar, as the tabs are left to idle for longer, the Chrome 45 tab starts shrinking its
memory usage aggressively. After a couple of minutes spent idle, Chrome 45's JavaScript memory is about 55 percent of Chrome 43's. That's a substantial savings. While this obviously won't do much for simple static pages, popular long-running Web apps like Gmail and Slack are likely to reap big rewards.

Chrome 45 also includes a power-saving feature that was first turned on in Chrome betas in June. The browser attempts to distinguish between Flash content that's essential to a page—an embedded video, say—and Flash content that's non-essential—typically, ads. The important content will continue to play normally, but with the new power feature enabled; the unimportant content will be automatically paused. Google says that its preliminary testing of this feature has shown positive results, with as much as 15 percent longer battery life, and it will be turned on by default over the next few weeks.

This is not to say that Chrome is now actually a slimline browser. It's still greedy, and the jokes about it swallowing all your memory aren't going to stop any time soon. Nonetheless, it's encouraging that Google is working to make this problem—arguably one of Chrome's biggest issues—a little bit better.
