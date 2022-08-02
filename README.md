# Flickr Creative Commons Attribution Helper

by Alan Levine http://cog.dog/


-----
*If this kind of stuff has any value to you, please consider supporting me so I can do more!*

[![Support me on Patreon](https://cogdog.github.io/images/badge-patreon.png)](https://patreon.com/cogdog) [![Support me on via PayPal](http://cogdog.github.io/images/badge-paypal.png)](https://paypal.me/cogdog)

Those who support [at the Roll the Credits Tier and up level on patreon](https://patreon.com/cogdog) get mention in the flickr cc attributor's random loading messages. Think of the fame! Thanks and mentions already included for

*Alain Frederic Obed, Anne-Marie Scott, Autumm Caines, Barbara Ganley, Brian Lamb, Bryan Mathers, Catherine Cronin, Christina Hendricks, Clint Lalonde, Colin Madland, Frances Bell, Hugh Blackmer, Irwin DeVries, Jenni Hayman, Jim Luke, Jim McGee, JR Dingwall, Karen Cangialosi, Kim Carter, Lora Gibbs, Lorna Campbell, Mark Otter, Paul Stacey, Rajiv Jhangiani, Robert Daniel, Robin DeRosa, Shannon Hauser, Sheila MacNeill, Terry Greene.*

----- 

[![flickr needs help attribution](docs/images/flickr-cc-logo.jpg "cc logo")](https://cogdog.github.io/flickr-cc-helper/)

Turns the laborious task of giving attribution of creative commons flickr photos into a one click operation. If you just want to run with it [make your own now](https://cogdog.github.io/flickr-cc-helper/).

This idea and tool has [evolved over several iterations](https://cogdogblog.com/tag/cc-attribution-helper/) from Greasemonkey script to browser bookmarklet tool, but I use it often several times a day. New enhancements as of December 26, 2019 include a new tool for use in the WordPress block editor and update to all attribution tools to use the newer version of static flickr URLs.

It is time for a new generation approach that might include:

* complete redesign so all options in the tool maker (image, attribution type) are options from the tool window.
* re-deployment as Chrome/Firefox Extensions (because bookmarklet tools are from the 1990s)
* add support for other image services, e.g. Pixabay, Unsplash, MediaWiki Commons (any service that provides information about images via a Javascript open web api 

This can all be accelerated by dinging the tip jar links above (shameless self-promotion, indeed).

## USING

[This tool](https://cogdog.github.io/flickr-cc-helper/) will create the code for a web browser bookmarklet. You can then drag it to your browser bar. Whenever viewing a flickr image that is open licensed, clicking the tool will open a small window with different options of attribution code you can copy and paste as needed.

![Screen shot of image helper](docs/images/flickr-cc-helper-in-action.jpg "Example of the helper tool in action, showing the relationship of content in flickr.")

**Note** This bookmarklet tool currently works as is in Chrome and Safari web browsers but not Firefox (due to Content Security Policy restrictions). If you are using Firefox you might notice that the window does not open when using the tool on Flickr. This has to do with an issue with the Firefox's Content Security Policy restrictions. 

A quick workaround for this problem is to install the [Bookmarklets Context Menu Extension](https://addons.mozilla.org/en-US/firefox/addon/bookmarklets-context-menu/) and use the bookmarklet from the contextual menu (all your bookmarklets will be available there). Thanks to [Jocapear](https://github.com/Jocapear)

![using in firefox from contextual menu](docs/images/firefox-helper.jpg "using in firefox from contextual menu")

## WHY

Darn you flickr! You make it so complex to give proper attribution for Creative Commons images. The photos available are a bag of gold-- [collection of creative commons licensed photos on flickr](http://flickr.com/creativecommon). Yet to use said images in a blog post requires no less than 12 clicks and 4 copy/paste operations (estimate).

In 2009 I thought there should be an easier way and created the [first flickr cc attribution helper](http://userscripts.org/scripts/show/49395) as a Firefox Greasemonkey script.  The script detected if a given flickr photo was Create Commons licensed. If so, it inserted directly into the flickr page a cut and paste set of HTML that had everything to put into a blog post- the image code to display the photo, a link back to the original, and a display of the license, the photo owner, and links back.  It also provided a second text attribution string that could be used in documents or presentations.

![how I like to give attribution](docs/images/cc-attribution-example.jpg "cc logo")

[I later modified this script](http://cogdogblog.com/flickr-cc-helper/) to work as a [Chrome extension](https://chrome.google.com/webstore/detail/flickr-cc-attribution-hel/gcnphdhkhoepofbahkgfifigellgklbp). I've used this on literally hundreds of blog posts primarily on [CogDogBlog](http://cogdogblog.com/).

The pitfall of this approach was that it was completely dependent on knowing the structure of the flickr photo display page-- it is tied to the names of CSS  components. The flickr display format has changed 3 times since 2009.  Each change required a re-write of the script. Flickr does not provide any standard meta data on the page to identify the creative commons license, so getting details called for a set of XPATH parsing and Javascript gymnastics.
			
And finally the [update of the flickr site in March 2014 again rendered the script nonfunctional](http://cogdogblog.com/2014/03/26/new-flickr-trashes-creative-commons-attribution-helper/); it makes it imposible for me to update my scripts because much of the display is generated dynamically via complex YUI scripts; the information could not be easily parsed.

So I looked for another way.

More steps along the way blogged at https://cogdogblog.com/tag/cc-attribution-helper/

Because attribution is the right thing to do, to express gratitude, no matter the flavor of the license, no matter if the law requires it or not.

Always Be Attributing.
	
## THE WAY FORWARD

As an addition, when you make the bookmarklet tool, you have options to change the size of image used, so you can make use of flickr's different image widths (240, 500, 620, 800, 1024 px). Note that the larger sizes will not work if the original is of smaller dimensions.

This new version takes a different approach; a person interested  in using the tool intalls a [web browser bookmarklet](http://en.wikipedia.org/wiki/Bookmarklet). Just drag the link text on the blur button to your browser's bookmark bar.

Upon viewing a flickr photo, if you are viewing a flickr photo licensed under creative commons, it will launch a small window with a few one click copy/paste attributions fit for use in a blog post or a presentation.

![Screen shot of image helper](docs/images/flickr-cc-helper-in-action.jpg "Example")

The first one is a full HTML attribution with the image embedded, suitable for cutting and pasting into an HTML editor. The second is the attribution in HTML, to be maybe for a footer credit or a caption field. The third is text only, for presentation slides or written works.

[Start here...](https://cogdog.github.io/flickr-cc-helper/)

THE EASY WAY VS THE CUSTOM WAY
-----

If you want to do basic attribution, you can use the [bookmarklet generating tool](https://cogdog.github.io/flickr-cc-helper/), and go off attributing.  It is powered by the helper tool page residing on github (I love you github).

![The Bookmarklet maker](docs/images/cc-helper-maker.jpg "The Maker")

The work of the attribution helper is done via an HTML page boosted with some jQuery code. The bookmarklet passes the unique flickr id (it's in the URL), and the tool page uses the [flickr api vis JSON](https://www.flickr.com/services/api/response.json.html) to get all of the information needed to build and display an attribution string.

These pages act almost like plugins, so the bookmarklet maker can make different varieties of output. There are currently [various flavors of attributions generated](https://cogdog.github.io/flickr-cc-helper/flavors.html). Note that the HTML copied from the WordPress versions can be pasted directly into a block if you are brave enough to be using the new Gutenberg editor (though the captions end up below in a separate paragraph block, oh Gutenberg...).

* **Plain HTML** - embeds the image and puts a proper and linked attribution text below
* **Attribution w/image (WordPress Block Editor)** - Suited for the new block editor, inserts the image via an automatic embed (and thus sized for theme) and adds attribution in txt block.
* **WordPress Attributor (Classic Editor with caption codes)** - embeds the image  wrapped in the [caption]...[/caption] short codes that Wordpress themes use to format images with captions.
* **Stamped** - generates a downloadable copy of the image with the attribution stamped right into it (thanks to [John Johnston](http://johnjohnston.info) who created a [nifty mobile version of a flicker finder / attribution stamper](http://johnjohnston.info/flickrcctouch/).
* **Medium.com** - Cut and paste made for the medium.com editor (by request of Noah Giesel)
* **Markdown** - Suitable for static blog generators, Github, and other popular Markdown-friendly tools, original by [Glen Smith](http://blogs.bytecode.com.au/glen).
			

