# Reactive Design

This document is an attempt to formalize and provide resources to design patterns that are, in a lot of ways, close to [Reactive Systems](http://www.reactivemanifesto.org/). The core principle is that **every user's actions should have a direct consequence**. If the consequence is not straight forward, the user should be provided with feedbacks indicating what is going to happen or at least what is happening. It's all about designing "reactive" interfaces and experiences.

Just as in Reactive Systems, Reactive Design is about splitting an application/interface into independent modules that communicate together. By doing so, modules are not dependent of others' tasks (while still communicating). In design terms, it means that feedbacks should not be restrained by any other "background" processuses. Users shouldn't be confused nor restrained by internal *"limitations"*.

In fact, most of the time the reactions and consequences of an user action are obvious and "natural" (e.g clicking on a link, taping a "next" arrow in a carousel). Things tend to get more complicated when the action result in loading content, which is breaking the natural flow. Loading states are often harder to solve since they are, by definition, periods of time you can't avoid (otherwise they won't be loading states).

A pattern that helps dealing with it has been described as "[placeholder content](http://cloudcannon.com/deconstructions/2014/11/15/facebook-content-placeholder-deconstruction.html)" and "[non-blocking UIs with interface previews](http://www.callumhart.com/blog/non-blocking-uis-with-interface-previews)". It is about conveying a clear idea of what's going to happen some time in the future by displaying a "preview" of the expected result.

## About this document

This is an open, public and work in progress document. "Reactive Design" has been around us for a while now but it still lack of definitions and resources. The purpose of this repository is to give a home to those design patterns. Contributions are more than welcome!

Please also note that even if this document mention [Reactive Systems and The Reactive Manifesto](http://www.reactivemanifesto.org/), there is no relation between the two projects and teams at the time of writing.

# Resources

* [Reactive Systems - The Reactive Manifesto](http://www.reactivemanifesto.org/)
* [Non-blocking UI's with interface previews](http://www.callumhart.com/blog/non-blocking-uis-with-interface-previews)
* [Facebook content placeholder deconstruction](http://cloudcannon.com/deconstructions/2014/11/15/facebook-content-placeholder-deconstruction.html)
* [Reactive Design demo on Codepen](http://codepen.io/Zhouzi/full/ogdxJj/)
