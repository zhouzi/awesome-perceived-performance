# Reactive Design

Reactive Design, an approach to solve loading states.

## Core Principle

Every user's actions should have a direct consequence, indicating what is going to happen or at least what is happening.

## A parallel to Reactive Systems

Just as in [Reactive Systems](http://www.reactivemanifesto.org/), Reactive Design is about splitting an application/interface into independent modules that communicate together.
By doing so, modules are not dependent of others' tasks (while still communicating).

## Is Reactive Design just about solving "loading states"?

From a global perspective, Reactive Design is about [reacting to every user's actions](#core-principle).
So the short answer is no, it is not just about solving loading states.
Actually, most of the time the reactions and consequences of an user action are obvious and "natural" (e.g clicking on a link, taping a "next" arrow in a carousel).
Loading states are often harder to solve since they are, by definition, periods of time that you can't avoid.

## Is Reactive Design something new that emerged lately?

No. In fact, you probably face it every day on Facebook, Slack and other interface-based services.
This document is an attempt to formalize this approach with definitions, examples and resources.

# Resources

* [Non-blocking UI's with interface previews](http://www.callumhart.com/blog/non-blocking-uis-with-interface-previews)
* [Facebook content placeholder deconstruction](http://cloudcannon.com/deconstructions/2014/11/15/facebook-content-placeholder-deconstruction.html)