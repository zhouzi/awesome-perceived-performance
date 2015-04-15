The purpose of this repository is to collect design insights about perceived speed.
The name comes from the fact that it's all about designing reactive interfaces.
It's also a reference to [Reactive Systems](http://www.reactivemanifesto.org/) as I consider those patterns to be the design translation of this approach.

Feel free to contribute by [submitting an "issue"](https://github.com/Zhouzi/reactivedesign/issues).

# Articles

* [Progress & Activity](http://www.google.com/design/spec/components/progress-activity.html)
* [The Need for Speed](https://cloudup.com/blog/the-need-for-speed)
* [Asynchronous UIs - the future of web user interfaces](http://old.alexmaccaw.com/posts/async_ui)
* [The 3 White Lies Behind Instagram's Lightning Speed](http://www.fastcodesign.com/1669788/the-3-white-lies-behind-instagrams-lightning-speed)
* [UX Tactics To Make Slow Things Seem Faster](http://blog.placeit.net/ux-tactics-make-slow-things-seem-faster/)
* [Building interface previews with React](http://www.callumhart.com/blog/building-interface-previews-with-react)
* [Non-blocking UI's with interface previews](http://www.callumhart.com/blog/non-blocking-uis-with-interface-previews)
* [Facebook content placeholder deconstruction](http://cloudcannon.com/deconstructions/2014/11/15/facebook-content-placeholder-deconstruction.html)
* [Making Wait Times Feel Shorter](http://usabilitypost.com/2009/01/23/making-wait-times-feel-shorter/)

# Demos & Examples

* [Demo of "Building interface previews with React"](http://www.callumhart.com/demo/building-interface-previews-with-react)
* [Reactive Design on Codepen](http://codepen.io/Zhouzi/full/ogdxJj/)

# Tools

* [Network Link Conditioner](http://nshipster.com/network-link-conditioner/)

---

## An operation should only be represented by one indicator

For example, one refresh operation should not display both a refresh bar and an activity circle.

* [Progress & Activity](http://www.google.com/design/spec/components/progress-activity.html)

## If the percentage of completion is known, use a determinate indicator

They give users a quick sense of how long an operation will take.

* [Progress & Activity](http://www.google.com/design/spec/components/progress-activity.html)



## Perceived speed matters a lot

Speed is critical and can make a huge difference to user experience, engagement and revenue.

* [Asynchronous UIs - the future of web user interfaces](http://old.alexmaccaw.com/posts/async_ui)

## Interactions should be resolved instantly

There should be no loading messages or spinners.
Requests to the server should be decoupled from the interface.

* [Asynchronous UIs - the future of web user interfaces](http://old.alexmaccaw.com/posts/async_ui)

## Users want to use your application without any interruptions

They don't give a damn if a request to the server is still pending.

* [Asynchronous UIs - the future of web user interfaces](http://old.alexmaccaw.com/posts/async_ui)

## Feedback is useful and doesn't block further interaction

Not all feedback is bad. Unobtrusive feedback that's actually useful to your users is completely fine.

* [Asynchronous UIs - the future of web user interfaces](http://old.alexmaccaw.com/posts/async_ui)



## Load Content Based On Importance, Not Order

If a lot of friends have liked something, load it first.

* [The 3 White Lies Behind Instagram's Lightning Speed](http://www.fastcodesign.com/1669788/the-3-white-lies-behind-instagrams-lightning-speed)



## Use prerendering

When reading a blog, a lot of people will click "next post".
So you could get the next page ready before they even click it.

* [UX Tactics To Make Slow Things Seem Faster](http://blog.placeit.net/ux-tactics-make-slow-things-seem-faster/)

## Work ahead of the user

One example (from Instagram) is that whenever you pick a photo to share, as soon as you pick it, it uploads it.

* [UX Tactics To Make Slow Things Seem Faster](http://blog.placeit.net/ux-tactics-make-slow-things-seem-faster/)
* [The 3 White Lies Behind Instagram's Lightning Speed](http://www.fastcodesign.com/1669788/the-3-white-lies-behind-instagrams-lightning-speed)

## Feedback shouldn't depend on servers

What this means is that no matter what your coverage situation is, you still get the visual feedback of your action.

* [UX Tactics To Make Slow Things Seem Faster](http://blog.placeit.net/ux-tactics-make-slow-things-seem-faster/)
* [The 3 White Lies Behind Instagram's Lightning Speed](http://www.fastcodesign.com/1669788/the-3-white-lies-behind-instagrams-lightning-speed)

## Use progressive image rendering

Progressive image rendering is when an image is loaded blurrily, and then becomes clearer as it finishes up.

* [UX Tactics To Make Slow Things Seem Faster](http://blog.placeit.net/ux-tactics-make-slow-things-seem-faster/)

## Give the user something to do

If people have something to do sitting in front of them, they're much less likely to be grumpy that they're waiting.

* [UX Tactics To Make Slow Things Seem Faster](http://blog.placeit.net/ux-tactics-make-slow-things-seem-faster/)

## Make buttons respond super-fast

All you have to do is make the button look pressed as soon as it’s pressed.

* [UX Tactics To Make Slow Things Seem Faster](http://blog.placeit.net/ux-tactics-make-slow-things-seem-faster/)



## Interface should feel fast, regardless of network speed

Any action such as loading a new page or clicking a button should have an immediate reaction.

* [Non-blocking UI's with interface previews](http://www.callumhart.com/blog/non-blocking-uis-with-interface-previews)

## Don't block the parts that aren't dependent on the server

Which means that users are not forced to wait for the whole page to load before navigating away from it.

* [Non-blocking UI's with interface previews](http://www.callumhart.com/blog/non-blocking-uis-with-interface-previews)

## Client side rendering is a must

Interface previews would be very hard to achieve using the conventional server driven approach.

* [Non-blocking UI's with interface previews](http://www.callumhart.com/blog/non-blocking-uis-with-interface-previews)

## Separate placeholder elements from the real ones

Generally, their structure differs.

* [Non-blocking UI's with interface previews](http://www.callumhart.com/blog/non-blocking-uis-with-interface-previews)

## Test your designs at different internet speeds

Seeing how your app performs across slow networks gives you an insight into the degree to which interface previews should be used.

* [Non-blocking UI's with interface previews](http://www.callumhart.com/blog/non-blocking-uis-with-interface-previews)
* [Network Link Conditioner](http://nshipster.com/network-link-conditioner/)



## Give some indication of what is going on

This is exactly like putting a progress bar on a long action. Apart from the fact it's some fancy polish, it's great usability.

* [Facebook content placeholder deconstruction](http://cloudcannon.com/deconstructions/2014/11/15/facebook-content-placeholder-deconstruction.html)



## Waiting isn't positive, minimize it

Waiting means you're spending your time doing nothing because of something else that's out of your control.

* [Making Wait Times Feel Shorter](http://usabilitypost.com/2009/01/23/making-wait-times-feel-shorter/)

## Wait time presents us with is uncertainty

Uncertainty about when the wait will end (and indeed, in some cases uncertainty about whether anything is happening at all).

* [Making Wait Times Feel Shorter](http://usabilitypost.com/2009/01/23/making-wait-times-feel-shorter/)

## Absence of loading indicator lengthens perception

This means that without progress bars or some other indicators your application will feel slower to your users.

* [Making Wait Times Feel Shorter](http://usabilitypost.com/2009/01/23/making-wait-times-feel-shorter/)
