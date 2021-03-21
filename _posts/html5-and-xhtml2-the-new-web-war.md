---
title: "HTML 5 και XHTML 2: ο νέος πόλεμος στο web"
date: "2007-12-06"
type: "post"
categories:
  - articles
  - markup
  - opinions
tags:
  - api
  - browsers
  - css
  - html
  - html5
  - javascript
  - markup
  - standards
  - w3c
  - web
  - web2.0
  - xhtml
  - xhtml2
  - xml
---

Έτσι όπως εξελίσσεται η κατάσταση, ο νέος πόλεμος στο web δεν θα γίνει ανάμεσα σε browsers αλλά σε τεχνολογίες (υπάρχει και η πιθανότητα να συνεχιστεί και στους browsers, αλλά το πρόβλημα θα προκύψει από τις τεχνολογίες που θα αποφασίσουν να υποστηρίξουν)! Αυτήν την στιγμή λοιπόν, οι αντικαταστάτες της κλασικής μας [(X)HTML markup](http://www.w3.org/TR/2007/CR-xhtml-basic-20070713/ "XHTML specification") είναι δύο, και μάλιστα με αρκετές διαφορές τόσο στον κώδικα (elements, attributes, κτλ.) όσο και στην φιλοσοφία τους. Φυσικά κάνω λόγο για την [**HTML 5**](http://www.w3.org/html/wg/html5/ "HTML 5 specifications") και την [**XHTML 2**](http://www.w3.org/TR/xhtml2/ "XHTML 2 specifications") οι οποίες βρίσκονται αυτήν την στιγμή σε κατάσταση working drafts, πράγμα που σημαίνει ότι θα καθυστερήσουν αρκετά να ολοκληρωθούν και ακόμα πιο πολύ να τις υποστηρίξουν οι διάφοροι browsers, αλλά όπως και να έχει η ερώτηση είναι εξής : Πως προέκυψαν δύο web standards για την ίδια δουλεία?!?!

Καλύτερα να τα πάρουμε τα πράγματα από την αρχή. Στην αρχή λοιπόν τα πράγματα ήταν πολύ απλά με την [HTML 1](http://www.w3.org/TR/html401/ "HTML 1 specifications") να είναι η μοναδική markup στον internet, απόγονος της πολύ παλιάς αλλά και δοκιμασμένης [SGML](http://www.w3.org/MarkUp/SGML/ "SGML specifications"). Επειδή σιγά-σιγά το internet άρχισε να γίνεται πιο διάσημο και mainstream λοιπόν, κάποιοι, κατασκευαστές browser κυρίως, άρχισαν να προσθέτουν επιπλέον presentational (παρουσιαστικά) tags και ιδιότητες στην λιτή HTML και να χαλάνε την δομή της (structure) με αυτά, όπως font tags, nested tables, και πολλά άλλα, ενώ η κατάσταση είχε ξεφύγει τελείως από το [**W3C**](http://www.w3.org/ "W3C organization") που δρούσε σαν απλός παρατηρητής. Μετά λοιπόν από τις HTML version 2 και 3, και τον πόλεμο τον browsers που υπήρχε μέχρι και εκείνη την στιγμή, κάποιοι developers όπως ο [Jeffrey Zeldman](http://www.zeldman.com/ "Jeffrey Zeldman's blog"), ο [Eric Meyer](http://meyerweb.com/ "Eric Meyer's blog"), και πολλοί άλλοι, αποφάσισαν να πείσουν όλους τους υπόλοιπους, developers και κατασκευαστές browser να χρησιμοποιούν τα επίσημα standards του W3C για την δημιουργία web sites! Είναι η περίοδος που η [HTML 4.01](http://www.w3.org/TR/html401/ "HTML 4.01 specifications") είναι η νεότερη έκδοση της markup για το internet, ενώ έχει ήδη αρχίσει να χρησιμοποιείται από τους πιο σκληροπυρηνικούς και ψαγμένους η νέα [XHTML](http://www.w3.org/TR/2007/CR-xhtml-basic-20070713/ "XHTML specification") όπου είναι στην ουσία η κλασική [HTML 4](http://www.w3.org/TR/html401/ "HTML 4.01 specifications") αναδιατυπωμένη σαν [XML](http://www.w3.org/XML/ "XML specifications") (δεν ήξερα πως αλλιώς να μεταφράσω το reformulation!). Η μεγάλη διαφορά της [XHTML](http://www.w3.org/TR/2007/CR-xhtml-basic-20070713/ "XHTML specification") με την [HTML](http://www.w3.org/TR/html401/ "HTML 4.01 specifications") είναι πως προσπαθεί να συμμαζέψει το περιεχόμενο (content) σε μια ακόμα καθαρότερη δομή (structure), άλλοτε με πιο αυστηρούς κανόνες και άλλοτε όχι &#8211; ανάλογα με το [doctype](http://www.alistapart.com/stories/doctype/ "What is doctype") &#8211; και να αφήσει το παρουσιαστικό (presentation) κομμάτι σε άλλη τεχνολογία, την [CSS](http://www.w3.org/Style/CSS/ "CSS specifications"). Με αυτόν τον τρόπο η markup θα ξαναχρησιμοποιηθεί για τον λόγο που είχε εφευρεθεί, την σωστή δομή του περιεχομένου δηλαδή!

Στην συνέχεια έρχεται μια μεταβατική περίοδος στο web, όπου τα μεγάλα site έχουν φτάσει τις συγκεκριμένες τεχνολογίες στα όρια τους και χρειάζονται κάτι πιο δυνατό για το [**Web 2.0**](http://en.wikipedia.org/wiki/Web_2 "What is Web 2.0") το οποίο έχει ήδη αρχίσει να δημιουργείται. Κάπου εδώ ξεκινάει και το μπέρδεμα. Το επίσημο [**W3C**](http://www.w3.org/ "W3C organization") ξεκινάει λοιπόν το draft της [**XHTML 2**](http://www.w3.org/TR/xhtml2/ "XHTML 2 specifications"), όμως κάποιοι ανεξάρτητοι &#8211; κατασκευαστές browser, web developers, ανεξάρτητοι οργανισμοί κτλ. &#8211; δημιουργούν την [**WHATWG community**](http://www.whatwg.org/ "WHATWG community") και ξεκινάνε το draft της [**HTML 5**](http://www.w3.org/html/wg/html5/ "HTML 5 specifications") (και των [Web Forms 2.0](http://www.whatwg.org/specs/web-forms/current-work/ "Web Forms 2.0 draft")), το οποίο μετά από κάποιο καιρό το παραδίδουν στο [**W3C**](http://www.w3.org/ "W3C organization") και γίνεται και αυτό επίσημο standard! Έτσι αυτήν την στιγμή έχουμε δύο επίσημους διαδόχους τις **(X)HTML** οι οποίοι μάλιστα έχουν πάρει και αρκετά διαφορετικές κατευθύνσεις σε θέματα αρχιτεκτονικής και σχεδιασμού!

Αυτήν την στιγμή κανένα από τα δύο recomendations δεν είναι επίσημο ή έχει περισσότερη υποστήριξη, αλλά το μπέρδεμα έχει ήδη γίνει και μάλιστα είναι πολύ μεγάλο! Καταρχάς, τι θα γίνει εάν κάποιοι browsers επιλέξουν να υποστηρίξουν ένα από τα δύο standards (extreme σενάριο, αλλά ας μην ξεχνάμε πως ακόμα κάποιοι browsers προσπαθούν να υποστηρίξουν standards 7 χρόνων παλιά!). Επίσης τι θα γίνει σε development επίπεδο, όπου κάποια site θα υποστηρίξουν την μία markup και κάποια την άλλη? Όπως ανέφερα οι markup είναι πολύ διαφορετικές μεταξύ τους, ενώ η HTML 5 έρχεται και με διάφορα [Javascript](http://en.wikipedia.org/wiki/JavaScript "Javascript") **APIs** για ευκολότερο development σε αυτήν, το οποίο όμως μπορεί να μπερδέψει πολλούς developers (ιδιαίτερα νέους), αλλά και κατασκευαστές browsers, οι οποίοι θα πρέπει να ενσωματώσουν στους καινούργιους browsers πολλά νέα **APIs**. Και σαν να μην έφταναν τα παραπάνω μπερδέματα, το θέμα μπορεί να γίνει και ακόμα πιο περίπλοκο μιας και η [**HTML 5**](http://www.w3.org/html/wg/html5/ "HTML 5 specifications") για παράδειγμα (στην οποία έχω ρίξει μια καλύτερη ματιά), έχει ήδη δύο parsing modes, ένα σαν **HTML** και ένα σαν **XML**, με το πρώτο να είναι πιο συμβατό με παλιότερους browsers ενώ το δεύτερο η αυστηρότερη έκδοση του και χρήση του σαν **XML** εφαρμογή! Υποθέτω πως και η [**XHTML 2**](http://www.w3.org/TR/xhtml2/ "XHTML 2 specifications") θα έχει ανάλογες επιλογές για parsing.

Όπως εύκολα μπορεί να καταλάβει ο μέσος web developer/designer, η κατάσταση είναι αρκετά μπερδεμένη, ενώ εντύπωση μου κάνει πως κανένας επίσημος φορέας, όπως το [**W3C**](http://www.w3.org/ "W3C organization") ή άλλοι μεγάλοι οργανισμοί και guru, δεν έχουν κάνει κανένα σχόλιο πάνω σε αυτό το σημαντικότατο θέμα. Για την ακρίβεια δεν το έχουν θίξει καν! Ξέρω πως και οι δύο τεχνολογίες έχουν πολύ δρόμο ακόμα να διανύσουν, ο [Lachlan Hunt](http://lachy.id.au/ "Lachlan Hunt blog") στο άρθρο του [A Preview of HTML 5](http://www.alistapart.com/articles/previewofhtml5 "A preview of HTML 5 article") υπολογίζει πως η [**HTML 5**](http://www.w3.org/html/wg/html5/ "HTML 5 specifications") θα χρειαστεί περίπου άλλα 10 με 15 χρόνια (άρα άλλα τόσα θα χρειαστεί και η [**XHTML 2**](http://www.w3.org/TR/xhtml2/ "XHTML 2 specifications")), αλλά γιατί να μην γινόντουσαν τα πράγματα πιο απλά για όλους μας ?!?! Ελπίζω η κατάσταση να αλλάξει σύντομα και το τοπίο να ξεκαθαρίσει στο συγκεκριμένο θέμα έτσι ώστε να βοηθηθούν όλοι και να παρθούν γρηγορότερα κάποιες αποφάσεις, γιατί η αλήθεια είναι πως όλοι μας χρειαζόμαστε μια νέα markup! Πολλές ενδιαφέρουσες απόψεις πάνω στο θέμα μπορεί κάποιος να βρει στο άρθρο της [IBM](http://www.ibm.com/ "IBM site"), [**HTML V5 and XHTML V2**](http://www.ibm.com/developerworks/xml/library/x-html5xhtml2.html "HTML v5 and XHTML v2 article"), ενώ το καινούργιο άρθρο του [A List Apart](http://www.alistapart.com/ "A List Apart site") έχει ένα [αναλυτικό preview στην HTML 5](http://www.alistapart.com/articles/previewofhtml5 "Preview of HTML 5 article"), και φυσικά για τους πιο σκληροπυρηνικούς υπάρχουν και τα [επίσημα](http://www.w3.org/html/wg/html5/ "HTML 5 specifications") [drafts](http://www.w3.org/TR/xhtml2/ "XHTML 2 specifications").