---
title: "Πως να κάνετε το site σας πιο γρήγορο: Ο απόλυτος οδηγός για site optimization"
date: "2008-03-05"
type: "post"
categories:
  - articles
tags:
  - compression
  - css
  - javascript
  - optimization
  - optimizers
  - server
  - site
  - web
---

Από καιρό ήθελα να γράψω αυτό το αρθράκι, απλά ήθελα να κάνω περισσότερο και καλύτερο research πάνω στο θέμα, έτσι ώστε να δοκιμάσω περισσότερα εργαλεία και να συστήσω μόνο τα καλύτερα! Ας ξεκινήσουμε όμως από τα βασικά και να πάρουμε τα πράγματα από την αρχή… Όταν γράφουμε ένα [URL](http://en.wikipedia.org/wiki/Uniform_Resource_Locator "URL in Wikipedia") στον browser μας έτσι ώστε να επισκεφθούμε κάποια σελίδα, αυτός συλλέγει πολλές πληροφορίες και εκτελεί διάφορες εργασίες πριν εμείς δούμε την τελική σελίδα (document). Φυσικά όσο πιο γρήγορη είναι η σύνδεση μας (σε επίπεδο download, μιας και το upload είναι ένα απλό http request) τόσο πιο γρήγορα ο browser θα καταφέρει να συλλέξει και να εκτελέσει τις εργασίες που θα αναλύσουμε πιο κάτω. Σε αυτό το σημείο πολλοί web experts δεν δίνουν την απαιτούμενη σημασία μιας και υποστηρίζουν πως οι γρήγορες συνδέσεις βρίσκονται παντού - πλέον και στην Ελλάδα – ωστόσο αυτό δεν σημαίνει πως δεν μπορούμε να κάνουμε κάτι καλό ακόμα καλύτερο ή στην περίπτωση μας κάτι γρήγορο ακόμα πιο γρήγορο! Τα δύο πολύ απλά επιχειρήματα που δίνω σε όσους μου προβάλουν το γρήγορο internet σαν δικαιολογία, είναι τα εξής:

- Το να κάνεις ένα site να φορτώνει ακόμα πιο γρήγορα, χωρίς να του αλλάξεις τίποτα εμφανισιακά, δεν βλάπτει κανέναν (ούτε τους χρήστες με αργές, ούτε αυτούς με γρήγορες συνδέσεις)
- Ξοδεύεις λιγότερα λεφτά σε web hosting μιας και αυτό που πληρώνεις (ακριβά) πλέον στο hosting είναι το [transfered bandwidth](http://en.wikipedia.org/wiki/Bandwidth_%28computers%29#Bandwidth_in_web_hosting "Transfered bandwidth in Wikipedia"), και όχι τα GB χώρου που χρησιμοποιείς (όπως ίσχυε κάποτε). Σε αυτό το επιχείρημα δείχνουν ακόμα περισσότερη προσοχή για κάποιο λόγο!

Ας εξηγήσουμε τώρα πως μπορούμε να κάνουμε το site μας πιο γρήγορο. Η πρώτη απάντηση σε αυτό το ερώτημα είναι η ελαχιστοποίηση των request στον server. Κάθε image, script, css αρχείο και γενικότερα όλα τα εξωτερικά αρχεία (flash, video, κτλ.) απαιτούν από τον browser να κάνει, για το καθένα ξεχωριστά, ένα request στον web server, να το κατεβάσει και τελικά να ενώσει όλα τα κομμάτια του παζλ και να κάνει render την web σελίδα! Τώρα θα μου πουν πολλοί, και με το δίκιο τους, καλέ ρε φίλε, δηλαδή να σταματήσουμε να βάζουμε images, css και scripts στο site μας? Και βέβαια όχι, αντιθέτως οι μοντέρνες web design τεχνικές το επιβάλουν, απλά να γνωρίζουμε τι και για ποιον λόγο το κάνουμε. Επίσης οι μοντέρνοι browser έχουν πολύ καλές caching τεχνικές έτσι ώστε εάν ένα image, script, stylesheet, κτλ. χρησιμοποιείται σε παραπάνω από μια σελίδα, χρησιμοποιούν το αρχείο που έχουν ήδη κατεβάσει (πχ. εάν έχει ήδη κατεβάσει το stylesheet του μενού και τα γραφικά/images του interface, δεν τα ξανακατεβάζει ξανά από την αρχή, αλλά χρησιμοποιεί τα ήδη υπάρχοντα από την cache memory του). Τι μπορούμε να κάνουμε εμείς, οι web experts, επιπλέον όμως? Πρώτα απ’ όλα [optimization](http://en.wikipedia.org/wiki/Optimization_%28computer_science%29 "Code Optimization in Wikipedia") (βελτιστοποίηση) στον κώδικα μας! [Code Optimization](http://en.wikipedia.org/wiki/Optimization_%28computer_science%29 "Code Optimization in Wikipedia") μπορεί να γίνει και στις δύο μεριές (**server-side** και **client-side**), ωστόσο στο συγκεκριμένο post δεν θα ασχοληθώ με server-side optimization (ο φίλος [lexx](http://www.lexx.gr/ "lexx's blog") έχει γράψει [ένα ανάλογο άρθρο πάνω στο θέμα όπου περιγράφει και server-side optimization](http://www.webz.gr/2008/03/03/%ce%ba%ce%ac%ce%bd%ce%b5-%cf%84%ce%bf-wordpress-blog-%cf%83%ce%bf%cf%85-%ce%bd%ce%b1-%cf%86%ce%bf%cf%81%cf%84%cf%8e%ce%bd%ce%b5%ce%b9-%cf%80%ce%b9%ce%bf-%ce%b3%cf%81%ce%ae%cf%81%ce%bf%cf%81%ce%b1/ "Κάνε το WordPress Blog σου να φορτώνει πιο γρήρορα")), μιας και εκτός από ότι αλλάζει ανάλογα με την server-side τεχνολογία που χρησιμοποιείται (πχ. [PHP](http://www.php.net/ "PHP scripting language"), [Ruby](http://www.ruby-lang.org/en/ "Ruby programming language"), κτλ.), πρέπει αυτός που θα αναλάβει την συγκεκριμένη εργασία, να είναι πολύ έμπειρος και να γνωρίζει πάρα πολύ καλά το πώς δουλεύει η συγκεκριμένη τεχνολογία, ο server που την φιλοξενεί αλλά και η βάση δεδομένων που την στηρίζει!

Ερχόμαστε λοιπόν στην client-side μεριά όπου μπορούμε να κάνουμε πολλά και ενδιαφέροντα πράγματα… Πρώτα απ’ όλα μπορούμε να ελαχιστοποιήσουμε τα requests των style μας χρησιμοποιώντας όσο των δυνατών λιγότερα CSS αρχεία γίνεται, όπως για παράδειγμα ένα κεντρικό αρχείο που θα περιλαμβάνει όλα τα style μας, ή έστω 2 - 3 εάν υπάρχουν και styles μόνο για τον IE, για print, κτλ. Αυτό με ακόμα πιο απλά λόγια σημαίνει πως καλό θα είναι να περιορίσουμε στο ελάχιστο τα stylesheet που κάνουμε link στην markup μας χρησιμοποιώντας το

```html
<link
  rel="stylesheet"
  href="stylesheets/screen.css"
  type="text/css"
  media="screen"
  charset="utf-8"
/>
```

αλλά και στα ίδια τα styles χρησιμοποιώντας τον

```css
@import "styles/typography.css";
```

κανόνα.

Οι ακόμα πιο σκληροπυρηνικοί μπορούν να χρησιμοποιήσουν και κάποιον από τους παρακάτω CSS optimizers, έτσι ώστε να συμπιέσουν τους CSS κανόνες τους ακόμα περισσότερο!

- [Icey’s Robson CSS Compressor](http://iceyboard.no-ip.org/projects/css_compressor "Icey's Robson CSS Compressor")
- [CSS Optimizer](http://www.cssoptimiser.com/ "CSS Optimizer")
- [Flumpcakes CSS Optimiser](http://flumpcakes.co.uk/css/optimiser/ "Flumpcakes CSS Optimiser")
- [Clean CSS](http://www.cleancss.com/ "Clean CSS")

Από κάποια γρήγορα τεστ προτείνω τον πρώτο optimizer, μιας και σε μερικές περιπτώσεις μείωσε το file size των CSS αρχείων έως και 50% (!!!), ωστόσο αυτό το ποσοστό αλλάζει ανάλογα με το στυλ του κώδικα που γράφεται αλλά και με το πόσο επαναλαμβάνεστε στους CSS κανόνες σας. Όπως και να έχει ρίξτε τους μια ματιά. Σε αυτό το σημείο να σημειώσω πως χρησιμοποιώντας κάποιον CSS optimizer δεν θυσιάζουμε τίποτα, πέρα από την ευαναγνωστηκότητα (readability) του κώδικα σας.

Οι τεχνικές που ανέφερα στα CSS αρχεία, μπορούν να εφαρμοστούν και στα Javascript αρχεία μας! Περιορίζουμε δηλαδή τα πολλά requests κρατώντας σε όσο λιγότερα Javascript αρχεία γίνεται όλον τον Javascript κώδικα μας. Φυσικά εάν χρησιμοποιούμε κάποια Javascript library (όπως [jQuery](http://jquery.com/ "jQuery Javascript library") για παράδειγμα) linkάρουμε πάντα την compressed version της ενώ μπορούμε να κάνουμε optimized και τον δικό μας Javascript κώδικα, χρησιμοποιώντας κάποιον από τους παρακάτω Javascript optimizers.

- [JSMin](http://crockford.com/javascript/jsmin "JSMin compressor")
- [Javascript Compressor](http://javascriptcompressor.com/ "Javascript Compressor")
- [jscrush](http://www.andrewkesper.com/jscrush/ "jscrush optimisser")
- [Bananascript](http://www.bananascript.com/ "Bananascript Optimiser")
- [packer](http://dean.edwards.name/packer/ "packer Javascript optimisser")

Σε αυτό το σημείο θα ήθελα να σημειώσω πως όποιος ασχοληθεί με Javascript code optimization, πρέπει να είναι πάρα πολύ έμπειρος και προσεκτικός, μιας και πολλά script δεν έπαιζαν σωστά σε κάποιους browsers μετά το optimization! Εάν θα έπρεπε να διαλέξω κάποιον από τους παραπάνω optimizers, θα διάλεγα τον [JSMin](http://crockford.com/javascript/jsmin "JSMin Javascript optimizer"), του [Douglas Crockford](http://crockford.com/ "Douglas Crockford site") από το [Yahoo!](http://www.yahoo.com/ "Yahoo!"), ο οποίος απλά αφαιρεί το extra whitespace και τα comments αφήνοντας τα υπόλοιπα κομμάτια του κώδικα ανέπαφα.

Φυσικά για λόγους maintaining (συντήρησης) θα πρέπει να κρατάμε backup όλων των style και javascript αρχείων μας έτσι ώστε να μπορούμε εύκολα και γρήγορα να διαβάζουμε, ανανεώνουμε και γενικότερα να συντηρούμε τον κώδικα μας, οπότε πρέπει οπωσδήποτε να κρατάτε τα source αρχεία σας ανέπαφα, και να εφαρμόζουμε όλα τα παραπάνω μόνο σε επίπεδο παραγωγής, δηλαδή σε site που βρίσκονται στον αέρα (web server μας)!

Τέλος, εκτός από optimization στον CSS και Javascript κώδικα μας, μπορούμε χρησιμοποιήσουμε και [HTTP Compression](http://en.wikipedia.org/wiki/HTTP_compression "HTTP Compression in Wikipedia") στον server μας, έτσι ώστε να κάνουμε το site μας ακόμα πιο γρήγορο! Η συγκεκριμένη τεχνική γίνεται σε επίπεδο [web server](http://en.wikipedia.org/wiki/Web_server "Web server in Wikipedia") (όπως πχ. [Apache](http://www.apache.org/ "Apache web server"), [IIS](http://www.microsoft.com/windowsserver2003/iis/ "IIS web server"), κτλ.), όπου ο server κάνει compress τα δεδομένα (data) που στέλνει μέσω του [HTTP πρωτοκόλλου](http://en.wikipedia.org/wiki/HTTP "HTTP protocol in Wikipedia"). Έτσι εάν ο browser που χρησιμοποιεί ο client (χρήστης) επιτρέπει την συγκεκριμένη δυνατότητα - όλοι οι μοντέρνοι browsers μπορούν - ο server στέλνει τα δεδομένα συμπιεσμένα (συνήθως με το [gzip](http://en.wikipedia.org/wiki/Gzip "gzip compression tool")), ενώ εάν ο client χρησιμοποιεί κάποιον παλιότερο σε browser ο οποίος δεν υποστηρίζει [HTTP Compression](http://en.wikipedia.org/wiki/HTTP_compression "HTTP Compression in Wikipedia"), ο χρήστης λαμβάνει την κανονική μη συμπιεσμένη (uncompressed) version της σελίδας. Με την συγκεκριμένη τεχνική δεν πρόκειται να δημιουργήθει κανένα πρόβλημα ούτε στους παλιούς ούτε στους καινούργιους browsers, αφού οι χρήστες με καινούργιους browsers θα μπορούν να κατεβάζουν τις σελίδες έως και 40% γρηγορότερα, χωρίς να απορρίπτονται οι χρήστες με τους παλιότερους browsers, οι οποίοι θα συνεχίσουν να κατεβάζουν κανονικά (χωρίς compression) τις σελίδες σας!

Η τελευταία τεχνική ανήκει θεωρητικά στην server-side κατηγορία, μιας και γίνεται στον web server, ωστόσο επειδή είναι πολύ εύκολη στην υλοποίηση της (εάν έχουμε πρόσβαση στον server φυσικά), την αναφέρω σε αυτό το post. Όπως προανέφερα δεν επηρεάζει καθόλου την συμπεριφορά της client-side μεριάς (οι browser που υποστηρίζουν HTTP compression θα το χρησιμοποιούσουν, ενώ οι υπόλοιποι απλά θα το αγνοήσουν) ενώ η βελτίωση που βλέπουμε στην ταχύτητα φόρτωσης μιας σελίδας (document) είναι εμφανής!

Με τεχνικές που ανέφερα παραπάνω και φυσικά με τις κατάλληλες μοντέρνες και σύγχρονες web design τεχνικές μπορούμε να κάνουμε τα site μας να φορτώνουν πάρα μα πάρα πολύ πιο γρήγορα από το συνηθισμένο, και μάλιστα χωρίς να αλλάξουμε κάτι εμφανισιακά! Κανείς δεν θέλει να περιμένει μέχρι να φορτώσει η σελίδα που τον ενδιαφέρει, ενώ είναι γεγονός πως το αργό φόρτωμα των σελίδων είναι ο νούμερο ένα λόγος που κάνει τους χρήστες να εγκαταλείπουν κάποιο site! Οι παραπάνω τεχνικές είναι εύκολα υλοποιήσιμες ενώ όλα τα εργαλεία που περιγράφω προσφέρονται δωρεάν, οπότε δεν υπάρχει κάποια σοβαρή δικαιολογία στο να μην κάνετε το γρήγορο site σας ακόμα πιο γρήγορο!
