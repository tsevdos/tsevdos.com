---
title: "Google Chrome: Μια πιο τεχνολογική ματιά"
date: "2008-09-04"
type: "post"
categories:
  - browsers
  - opinions
  - reviews
tags:
  - apple
  - browsers
  - chrome
  - design
  - development
  - engine
  - firefox
  - free
  - gears
  - gecko
  - google
  - internet
  - javascript
  - mozilla
  - prism
  - rendering
  - RIA
  - safari
  - sqlite
  - standards
  - web
  - webkit
---

Δοκίμασα και εγώ τον νέο [open-source](http://en.wikipedia.org/wiki/Open_source "What is Open source (Wiki)") browser της [Google](http://www.google.com "Google company"), τον [**Chrome**](http://www.google.com/chrome "Google Chrome browser"), και προσωπικά με εντυπωσίασε! Ακόμα και στην beta έκδοση, ο **[**Chrome**](http://www.google.com/chrome "Google Chrome browser")** είναι πάρα πολύ γρήγορος, κάτι που έπρεπε να δω με τα ίδια μου τα μάτια, μιας και δεν πιστεύω ποτέ ούτε τα fanboys, ούτε τις υπερβολές των επίσημων κατασκευαστών. Δεν θα μπω στο τρυπάκι του να (αντι)γράψω για μια ακόμα φορά [τα χαρακτηριστικά του](http://www.google.com/chrome/intl/en/features.html "Google Chrome browser features"), τα οποία είναι πραγματικά πολλά και αξιόλογα (δείτε και τα video που τα παρουσιάζουν, είναι πολύ μικρά και αξιόλογα), ωστόσο θα σταθώ σε μερικά σημεία που θα απασχολήσουν στο μέλλον τους πιο έμπειρους χρήστες και επαγγελματίες.

Το πρώτο και σημαντικότερο είναι πως ο **[**Chrome**](http://www.google.com/chrome "Google Chrome browser")** χρησιμοποιεί το [Webkit](http://webkit.org/ "Webkit rendering engine") για μηχανή rendering. Προς το παρών η [Google](http://www.google.com "Google company") δηλώνει πως όποιο site εμφανίζεται σωστά σε [Safari](http://www.apple.com/safari/ "Apple Safari browser") (ο οποίος στηρίζεται και αυτός στο [Webkit](http://webkit.org/ "Webkit rendering engine")) θα εμφανίζεται σωστά και στον **[**Chrome**](http://www.google.com/chrome "Google Chrome browser")**. Με λίγα λόγια αυτήν την στιγμή οι δύο browsers έχουν κατά κάποιον τρόπο "συμβατή" version του [Webkit](http://webkit.org/ "Webkit rendering engine"), ωστόσο κανείς δεν ξέρει εάν η [Google](http://www.google.com "Google company") ή η [Apple](http://www.apple.com/ "Apple company site") θα κρατήσουν αυτήν την συμβατότητα...

Το δεύτερο σημαντικό στοιχείο του browser είναι η ολοκαίνουργια Javascript engine που χρησιμοποιεί, η [**V8**](http://code.google.com/apis/v8/ "V8 Javascript engine")! Πραγματικά δείχνει πολύ γρήγορη, ενώ περνάει και με 100% επιτυχία το [ACID2 test](http://www.acidtests.org/ "ACID tests") (στο 3 θέλει λίγο δουλειά ακόμα). Γενικά πιστεύω πως η αγορά χρειαζόταν μια καινούργια και γρήγορη Javascript engine, ενώ το γεγονός ότι και αυτή είναι open source την κάνει ακόμα πιο σημαντική.

Ένα άλλο σημείο που κάνει τον [**Chrome**](http://www.google.com/chrome "Google Chrome browser") να ξεχωρίζει από τους άλλους browsers, είναι η ενσωμάτωση του [**Google Gears**](http://gears.google.com/ "Google Gears site") μέσα στον ίδιο τον browser (δεν χρειάζεται να εγκαταστήσετε κάποιο plug in). Αυτό αλλάζει πολλά δεδομένα για τους developers που θέλουν να αναπτύξουν εφαρμογές με επιπλέον δυνατότητες, πέρα από τις κλασικές τεχνολογίες. Μιλάμε για φοβερές δυνατότητες όπως [local server](http://code.google.com/apis/gears/api_localserver.html "Google Gears local server API") μέσα στον browser (ο browser με λίγα λόγια θα είναι και client και server !!!), [local database](http://code.google.com/apis/gears/api_database.html "Google Gears local database API")/[SQLite](http://www.sqlite.org/ "SQLite site") και πολλά άλλα καλούδια!!! Σκεφτείτε πόσα επιπλέον features μπορεί να αποκτήσει οποιοδήποτε site/web application, γνωρίζοντας πως οι χρήστες του χρησιμοποιούν τον συγκεκριμένο browser!

Αν και δεν σχολιάστηκε όσο θα έπρεπε, ο [**Chrome**](http://www.google.com/chrome "Google Chrome browser") χτυπάει, και μάλιστα πολύ δυνατά, άλλο ένα προϊόν της Mozilla - πέρα του [Firefox](http://www.mozilla.com/en-US/firefox/ "Mozilla Firefox") - το [**Mozilla Prism**](http://labs.mozilla.com/2007/10/prism/ "Mozilla Prism") ([είχα γράψει και παλιότερα γι αυτό](http://www.tsevdos.com/2007/10/28/mozilla-prism/ "Mozilla Prism article")). Με μία κίνηση λοιπόν μπορείτε να δημιουργήσετε application shortcuts (έτσι τα ονομάζει τουλάχιστον), τα οποία με την βοήθεια του browser και των χαρακτηριστικών του ([Gears](http://gears.google.com/ "Google Gears site"), κτλ.) μπορούν να λειτουργήσουν σαν [**RIA**](http://en.wikipedia.org/wiki/Ria "RIA applications (Wikipedia)") εφαρμογές! Ακριβώς ότι κάνει το [**Prism**](http://labs.mozilla.com/2007/10/prism/ "Mozilla Prism") με την [Gecko rendering engine](http://developer.mozilla.org/en/Gecko "Gecko rendering engine"), μόνο που όλα γίνονται πιο εύκολα και γρήγορα!

Τέλος, για εμάς τους developers, ο [**Chrome**](http://www.google.com/chrome "Google Chrome browser") διαθέτει 2 πολύ ενδιαφέροντα εγαλειάκια, το **Web Inspector** και το **JavaScript Debugger** (έχω την αίσθηση πως είναι τα κλασικά web tools έρχονται με το [Webkit](http://webkit.org/ "Webkit rendering engine")), αλλά τίποτα παραπάνω προς το παρόν (ξεχάστε το [Firebug](http://getfirebug.com/ "Firebug") δηλαδή)... Είναι πολύ νωρίς ακόμα για να ζητάω add-ons, ιδιαίτερα τέτοιου επιπέδου, ωστόσο έχω την αίσθηση πως θα φτιαχτούν γρήγορα πολλά και ποιοτικά add-ons για τον browser. Μην ξεχνάτε πως τα πάντα είναι open source! Τα πιο ανήσυχα μυαλά μπορούν να ρίξουν και μια ματιά [στο επίσημο FAQ των web developers](http://www.google.com/chrome/intl/en/webmasters.html "Google Chrome Web Developers FAQ") το οποίο θα τους λύσει αρκετές απορίες για τον browser και τις παραξενιές του.

Μετά από μία ολόκληρη μέρα με τον [**Chrome**](http://www.google.com/chrome "Google Chrome browser") λοιπόν, δηλώνω fan του στο κομμάτι του browsing, ωστόσο μερικά add-on του [Firefox](http://www.mozilla.com/en-US/firefox/ "Firefox browser") ([Firebug](http://getfirebug.com/ "Firebug"), [FireShot](https://addons.mozilla.org/en-US/firefox/addon/5648 "Fireshot"), [Web Developer Bar](http://chrispederick.com/work/web-developer/ "Web Developer Bar"), [Delicious Bookmarks](https://addons.mozilla.org/en-US/firefox/addon/3615 "Delicious Bookmarks") και διάφορα άλλα μικρότερης σημασίας), με αναγκάζουν να κρατάω τον [Firefox](http://www.mozilla.com/en-US/firefox/ "Firefox browser") ως default browser. Θα περιμένω λοιπόν ακόμα να δω τι add ons θα δημιουργηθούν για τον νέο browser, και θα ξανασκεφτώ σοβαρά το θέμα switching, ωστόσο εάν ψάχνεται έναν γρήγορο browser μόνο για surfing, κατεβάστε και χρησιμοποιήστε άφοβα τον [**Chrome**](http://www.google.com/chrome "Google Chrome browser")!
