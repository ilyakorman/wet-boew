/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.0.4-a1 Build: 2013-01-01 06:09 AM
 *
 */
(function(b){var a=window.pe||{fn:{}};a.dic={get:function(d,e,c){var f=(typeof d==="string"&&d!=="")|(typeof e==="string"&&e!=="")<<1|(typeof c==="string"&&c!=="")<<2;switch(f){case 1:return this.ind[d];case 3:return this.ind[d][e];case 7:return this.ind[d][e].replace("[MIXIN]",c);default:return""}},ago:function(d){var g,c,f,e;c=pe.date.convert(d);e=(arguments.length>1?arguments[1]:new Date());g=parseInt((e.getTime()-c)/1000,10);g=g+(e.getTimezoneOffset()*60);f="";if(g<60){f=this.get("%minute-ago")}else{if(g<120){f=this.get("%couple-of-minutes")}else{if(g<(45*60)){f=this.get("%minutes-ago","mixin",(parseInt(g/60,10)).toString())}else{if(g<(90*60)){f=this.get("%hour-ago")}else{if(g<(24*60*60)){f=this.get("%hours-ago","mixin",(parseInt(g/3600,10)).toString())}else{if(g<(48*60*60)){f=this.get("%yesterday")}else{f=this.get("%days-ago","mixin",(parseInt(g/86400,10)).toString())}}}}}}return f},ind:{"%all":"All","%home":"Home","%main-page":"Main page","%top-of-page":"Top of Page","%you-are-in":"You are in: ","%welcome-to":"Welcome to: "+b("#gcwu-title").text(),"%loading":"loading...","%search":"Search","%search-for-terms":"Search for term(s):","%no-match-found":"No match found","%matches-found":{mixin:"[MIXIN] match(es) found"},"%menu":"Menu","%hide":"Hide","%error":"Error","%colon":":","%start":"Start","%stop":"Stop","%back":"Back","%new-window":" (Opens in a new window)","%minute-ago":"a minute ago","%couple-of-minutes":"couple of minutes ago","%minutes-ago":{mixin:"[MIXIN] minutes ago"},"%hour-ago":"an hour ago","%hours-ago":{mixin:"[MIXIN] hours ago"},"%days-ago":{mixin:"[MIXIN] days ago"},"%yesterday":"yesterday","%archived-page":"This Web page has been archived on the Web.","%sub-menu-help":"(open the submenu with the enter key and close with the escape key)","%tab-rotation":{disable:"Stop tab rotation",enable:"Start tab rotation"},"%tab-list":"Tab list","%play":"Play","%pause":"Pause","%close":"Close","%rewind":"Rewind","%next":"Next","%previous":"Previous","%fast-forward":"Fast forward ","%mute":{enable:"Mute",disable:"Unmute"},"%closed-caption":{disable:"Hide Closed captioning",enable:"Show Closed captioning"},"%captionserror":"Error loading closed captions","%audio-description":{enable:"Enable Audio Description",disable:"Disable Audio Description"},"%progress-bar":"use LEFT ARROW and RIGHT ARROW keys to advance and rewind the media's progress","%no-video":"Your browser does not appear to have the capabilities to play this video, please download the video below","%position":"Current Position: ","%percentage":"Playback Percentage: ","%duration":"Total Time: ","%buffered":"Buffered: ","%favourite":"Favourite","%email":"Email","%share-text":"Share this page","%share-hint":" with {s}","%share-email-subject":"Interesting page","%share-email-body":"I thought you might find this page interesting:\n{t} ({u})","%share-fav-title":" (bookmark this page)","%share-manual":"Please close this dialog and\npress Ctrl-D to bookmark this page.","%share-showall":"Show all ({n})","%share-showall-title":"All bookmarking sites","%share-disclaimer":"No endorsement of any products or services is expressed or implied.","%form-not-submitted":"The form could not be submitted because ","%errors-found":" errors were found.","%error-found":" error was found.","%datepicker-hide":"Hide Calendar","%datepicker-show":"Pick a date from a calendar for field: ","%datepicker-selected":"Selected","%calendar-weekDayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"%calendar-monthNames":["January","February","March","April","May","June","July","August","September","October","November","December"],"%calendar-currentDay":" (Current Day)","%calendar-goToLink":'Go To<span class="wb-invisible"> Month of Year</span>',"%calendar-goToTitle":"Go To Month of Year","%calendar-goToMonth":"Month:","%calendar-goToYear":"Year:","%calendar-goToButton":"Go","%calendar-cancelButton":"Cancel","%calendar-previousMonth":"Previous Month: ","%calendar-nextMonth":"Next Month: ","%show-toc":"Show","%show-image":"show.png","%hide-image":"hide.png","%table-contents":" table of contents","%lb-current":"Item {current} of {total}","%lb-next":"Next item","%lb-prev":"Previous item","%lb-xhr-error":"This content failed to load.","%lb-img-error":"This image failed to load.","%lb-slideshow":"slideshow","%jqm-expand":" click to expand contents","%jqm-collapse":" click to collapse contents","%jqm-clear-search":"clear search","%jqm-filter":"Filter items...","%table-mention":"Table","%table-following":"Chart. Details in the following table.","%st-timeout-msg":'Your session is about to expire, you have until #expireTime# to activate the "OK" button below to extend your session.',"%st-msgbox-title":"Session timeout warning","%st-already-timeout-msg":"Sorry your session has already expired. Please login again.","%pe-disable":"Basic HTML version","%pe-enable":"Standard version"}};b(document).trigger("languageloaded");window.pe=a;return a}(jQuery));