Flickr Creative Commons Attribution Helper
=========================
by Alan Levine http://cogdog.info/

![flickr needs help attribution](images/flickr-cc-logo.jpg "cc logo")

Turns the laborious task of giving attribution of creative commons flickr photos into a one click operation.


WHY
-----

Darn you flickr! You make it so complex to give proper attribution for Creative Commons images. The photos available are a bag of gold-- [collection of creative commons licensed photos on flickr](http://flickr.com/creativecommon). Yet to use said images to create a blog post requires no less than 12 clicks and 4 copy/paste operations (estimate)

In 2009 I thought there should be an easier way, and created the [first flickr cc attribution helper](http://userscripts.org/scripts/show/49395) as a Firefox Greasemonkey script.  The script detected if a given flickr photo was Create Commons licensed. If so, it inserted directly into the flickr page a cut and paste set of HTML that had everything to put into a blog post- the image code to display the photo, a link back to the original, and a display of the license, the photo owner, and links back.  It also provided a second text attribution string that could be used in documents or presentations.

![how I like to give attribution](images/cc-sttribution-example.jpg "cc logo")

[Since then I modified this script(http://cogdogblog.com/flickr-cc-helper/) to work as a [Chrome extension](https://chrome.google.com/webstore/detail/flickr-cc-attribution-hel/gcnphdhkhoepofbahkgfifigellgklbp). I've used this on literally hundreds of blog posts primarily on [CogDogBlog](http://cogdogblog.com/).

The pitfall of this approach was that it was completely dependent on knowing the structure of the flickr photo display page-- it is tied to the names of CSS  components. The flickr display fprmat has changed 3 times since 2009.  Each change requiring a re-write of the script. Flickr does not provide any standard meta data on the page to identify the creative commons license, so getting details called for a set of XPATH parsing and Javascript gymnastics.
			
The [update of the flickr site in March 2014 again rendered the script nonfunctional](http://cogdogblog.com/2014/03/26/new-flickr-trashes-creative-commons-attribution-helper/); it makes it imposible for me yo update my scripts because much of the display is generated dynamically via complex YUI scripts; the information could not be easily parsed.

Because attribution is love.
	
THE WAY FORWARD
-----

This new version takes a different approach; a person interested  in using the tool intalls a [web browser bookmarklet](http://en.wikipedia.org/wiki/Bookmarklet). Upon viewing a flickr photo, the bookmarklet spawns a window containing the one click copy attribution. 

So the new method is triggered via a browser bookmarklet tool- install and whenever you are viewing a flickr photo licensed under creative commons, it will launch a small window with the one click copy/paste attribution fit for use in a blog post or a presentation.

![Screen shot of image helper](images/cc-helper-shot.jpg "Example")

Yes pop up windows are not elegant. Hopefully in the future I might eb able to generate it as a light-box overlay. Or maybe you can fork this code, and do it for me?

The work of the attribution helper is done via an HTML page boosted with some jQuery code. The bookmarklet passes the unique flickr id (it's in the URL), and the tool page uses the [flickr api vis JSON](https://www.flickr.com/services/api/response.json.html) to get all of the information needed to build and display an attribution string.


THE EASY WAY VS THE CUSTOM WAY
-----

Of you want to do basic attribution, you can use the bookmarklet generating tool below, and go off attributiing., It is powered by the helper tool page residing on github (I love you github).
			
If you would like to customize the attribution output in any way, or just prefer to run your own,  you can grab a copy of the attribtion helper on github here, fork and modify, and run on your own web server. It just needs to be available at a public web page. And you can still use the nookmarklet generator below to build your browser tool.


BOOKMARKLET MAKER
-----
(Add link to the tool)


TO RUN YOUR OWN
------------

You need place to put a HTML page at a public URL and you will need to get your own Flickr API key 

1. Get a flickr API key https://www.flickr.com/services/apps/create/apply
2. Edit the  flickr-cc-helper.html to enter the API key value at

	var fpai = 'YOUR-OWN-APIKEY';


3. Upload to your web server in directory of your choice.  Check the URL. You know how to do this?
4. Use the bookmarklet maker, and drag the link to your toolbar.
5. Attribute away


