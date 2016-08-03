# [FORK] jQuery UI Touch Punch
## Touch Event Support for jQuery UI

**This is fork of the plugin - _[Visit the official Touch Punch website](http://touchpunch.furf.com)._**

I've stumbled upon Touch Punch while I was looking, well - exactly for that plugin. It did not exactly cover my use case though. So I decided to fix it.

## What was the problem?

I've found that while:
- using jQuery UI Sortable (and probably other plugins also) with touch punch
- zooming in on mobile

there is significant problem with offset of placeholder and helper. Their positioning is way off and plugin becomes unusable.

## Test case

I created test case in which you can see behavior of original version and my fork

### How to test?

- *Use your mobile phone to test*
- Go to each test file
- Zoom in the page
- Try dragging the items
- Notice that with original plugin dragging is not very efective ;)
- Look at the source code if you want

### Test cases

1. Original - drag rows of a table :(
2. Original - drag divs :(
3. Fork - drag rows of a table :)
4. Fork - drag divs :)
5. Fork - drag rows of a table - w/o relative container :(
6. Fork - drag divs - w/o relative container :(

## How does it work?

Two things change between original plugin and fork:

Container of the sortable element has position: relative
I add scroll left and top to position touch.client* while sending simulated mouse event
