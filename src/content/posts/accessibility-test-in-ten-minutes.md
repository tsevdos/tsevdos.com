---
title: "Accessibility test σε 10' λεπτά"
date: "2008-07-01"
type: "post"
categories:
  - accessibility and usability
  - articles
tags:
  - accessibility
  - css
  - javascript
  - markup
  - usability
---

Είναι άπειρες οι φορές όπου φίλοι, γνωστοί ή ακόμα και άγνωστοι ζητάνε την γνώμη μου για το πόσο προσβάσιμο (accessible) είναι site τους. Οι περισσότεροι έχουν την αίσθηση πως εμείς (οι web designers/developers) είμαστε μάγοι ή έχουμε πολύ εξειδικευμένο εξοπλισμό και software για να κάνουμε κάτι τέτοιο. Στην πραγματικότητα το μόνο που χρειάζεται κάποιος, είναι ένας σύγχρονος browser (κατά προτίμηση [Firefox](http://www.mozilla.com/en-US/firefox/ "Firefox browser") με το [web developer toolbar](https://addons.mozilla.org/en-US/firefox/addon/60 "Web developer toolbar for Firefox")) και κάποιες εναλλακτικές ρυθμίσεις, έτσι ώστε να εντοπίσει γρήγορα τα διάφορα accessibility προβλήματα που πιθανόν να υπάρχουν. Στο παρακάτω post λοιπόν περιγράφω πολύ συνοπτικά πως μπορεί κάποιος, να κάνει ένα αξιόλογο web accessibility τεστ μέσα σε 10 μόλις λεπτά (όχι δεν σας κοροϊδεύω!). Για να μπορεί το post να διαβαστεί από όλους (και όχι μόνο από ειδικούς του χώρου), θα παρακάμψω την πολύ θεωρία πίσω από κάθε test, και θα εστιάσω την προσοχή στα παραδείγματα. Έχουμε και λέμε λοιπόν:

## Απενεργοποιήστε τα images και δείτε πως φαίνεται το site σας χωρίς αυτά

Προσπαθείστε το site σας να δείχνει αξιοπρεπέστατο ακόμα και εάν δεν έχουν φορτωθεί τα γραφικά του (είτε γιατί ο χρήστης τα έχει απενεργοποιήσει, είτε επειδή κάποιο πρόβλημα στον server δεν τα αφήνει να κατέβουν, είτε επειδή ο χρήστης δεν έχει καλό bandwidth, κτλ.). Όποιος και να είναι ο λόγος το site σας θα πρέπει να δείχνει σωστά και χωρίς γραφικά. Απλό και κατανοητό νομίζω, και για τον λόγο αυτό δεν θα μακρηγορήσω περισσότερο, αλλά θα περάσω κατευθείαν σε 2 παραδείγματα.

Στο παρακάτω παράδειγμα λοιπόν, το blog του [Γιάννη](http://el.porcupine.gr/ "Porcupine colors blog") δεν "αλλοιώνεται" ούτε "χαλάει" όταν του απενεργοποιήσουμε τα images. Επίσης χρησιμοποιεί σωστά το [alternative text](http://www.w3.org/QA/Tips/altAttribute "Alternative attribute") περιγράφοντας τα γραφικά που δεν εμφανίζονται...

[![](https://i0.wp.com/farm4.static.flickr.com/3265/2623494007_c761a33807_m.jpg?resize=240%2C153 "Porcupine blog - images on")](https://i2.wp.com/farm4.static.flickr.com/3265/2623494007_716cb2e427_o.jpg "porcupine blog - images on")

[![](https://i2.wp.com/farm4.static.flickr.com/3138/2624318448_6a8b21f778_m.jpg?resize=240%2C153 "Porcupine blog - images off")](https://i1.wp.com/farm4.static.flickr.com/3138/2624318448_4cbcf69193_o.jpg "Porcupine blog - images off")

Αντιθέτως, το site [Avopolis](http://www.avopolis.gr/ "Avopolis site"), δείχνει αρκετά άσχημο όταν απενεργοποιούμε τα images. Το χειρότερο από όλα είναι πως το κεντρικό μενού του site εξαφανίζετε, μιας και είναι όλο φτιαγμένο σε ένα [image map](http://www.w3.org/TR/REC-html40/struct/objects.html#h-13.6 "Image map")!

[![](https://i0.wp.com/farm4.static.flickr.com/3255/2623494299_9717e7c858_m.jpg?resize=240%2C153 "Avopolis site - images on")](https://i1.wp.com/farm4.static.flickr.com/3255/2623494299_5f7cded3cb_o.jpg "Avopolis site - images on")

[![](https://i1.wp.com/farm4.static.flickr.com/3170/2624319034_f29edb7c65_m.jpg?resize=240%2C153 "Avopolis site - images off")](https://i1.wp.com/farm4.static.flickr.com/3170/2624319034_fff07e8fba_o.jpg "Avopolis site - images off")

## Απενεργοποιείστε την Javascript

Ο κανόνας που ισχύει είναι αρκετά απλός: Δεν πρέπει να θεωρούμε πως ο χρήστης του site μας έχει την [Javascript](http://en.wikipedia.org/wiki/JavaScript "Javascript") ενεργοποιημένη!

Στο blog το οποίο βρίσκεστε εάν απενεργοποιείστε την Javascript (η οποία χρησιμοποιείτε στην sidabar για τα διάφορα AJAX-like εφεδάκια), δεν θα χάσετε τίποτα από το περιεχόμενο του blog! Η τεχνική αυτή ονομάζεται [Progressive enhancement](http://en.wikipedia.org/wiki/Progressive_Enhancement "Proggressive Enhancement"), και το σκεπτικό πίσω από την τεχνική, είναι πως το site πρέπει να γίνεται σταδιακά πιο δυναμικό (interactive). Έτσι πρέπει πρώτα να έχουμε ένα καθαρό, σωστά δομημένο και σημασιολογικό (semantic) document (ή αλλιώς markup), μετά να τo εμπλουτίζουμε και να το παρουσιάσουμε κατάλληλα με τους ανάλογους styling κανόνες (CSS) και τέλος ότι extra interactivity θα θέλαμε να υπάρχει να κατασκευαστεί με σωστή χρήση της Javascript.

[![](https://i0.wp.com/farm4.static.flickr.com/3290/2623495243_501f967f9b_m.jpg?resize=240%2C153 "Tsevdos.com - Javascript on")](https://i0.wp.com/farm4.static.flickr.com/3290/2623495243_390f5fcf09_o.jpg "Tsevdos.com - Javascript on")

[![](https://i0.wp.com/farm4.static.flickr.com/3029/2624319292_d58206f508_m.jpg?resize=240%2C153 "Tsevdos.com - Javascript off")](https://i2.wp.com/farm4.static.flickr.com/3029/2624319292_ea21274a88_o.jpg "Tsevdos.com - Javascript off")

Αντίθετα στο site του [Pop+Rock](http://www.pop-rock.gr/ "Pop+Rock site") εάν δεν έχετε την Javascript ενεργοποιήμένη δεν δουλεύει το κεντρικό μενού του site! Το συγκεκριμένο λάθος προκαλεί και πολλά SEO προβλήματα που έχω αναφέρει σε [παλιότερο post (Ποτέ μην χρησιμοποιείτε μενού φτιαγμένα από Flash ή Javascript)](http://www.tsevdos.com/2008/06/17/search-engine-optimization-seo-for-bloggers/ "SEO for bloggers").

[![](https://i1.wp.com/farm4.static.flickr.com/3276/2623495601_d45c222791_m.jpg?resize=240%2C192 "Pop+Rock - Javascript on")](https://i0.wp.com/farm4.static.flickr.com/3276/2623495601_f1a58c37b4_o.jpg "Pop+Rock - Javascript on")

[![](https://i2.wp.com/farm4.static.flickr.com/3233/2623496149_898222d9b7_m.jpg?resize=240%2C192 "Pop+Rock - Javascript off")](https://i2.wp.com/farm4.static.flickr.com/3233/2623496149_ba0584d171_o.jpg "Pop+Rock - Javascript off")

## Απενεργοποιείστε την CSS

Με αυτόν τον τρόπο θα καταλάβενετε πως φαίνεται πραγματικά το document σας, τόσο στους text-only browsers και στους screen readers, όσο και στα bots των μηχανών αναζήτησης! H παρακάτω εικόνα παρουσιάζει το blog μου, χωρίς καθόλου styles. Όπως παρατηρείτε, το document δεν έχει χάσει απολύτως τίποτα ούτε σε περιεχόμενο ούτε σε δομή, ενώ συνεχίζει να είναι προσβάσιμο σε όλους! Το μόνο που έχει χάσει είναι τα styles του, τα οποία του δίνουν την τελική μορφή του...

[![](https://i2.wp.com/farm4.static.flickr.com/3156/2624320776_52f60e7612_m.jpg?resize=240%2C153 "Tsevdos.com - CSS off")](https://i1.wp.com/farm4.static.flickr.com/3156/2624320776_15422ea30c_o.jpg "Tsevdos.com - CSS off")

## Αυξήστε το text-size από τον browser σας

Απλό αλλά σημαντικό τεστ. Απλά αυξήστε το text-size στον browser σας τουλάχιστον δύο φορές (πατώντας Ctrl + +). Εάν το site δεν αλλοιώνεται πολύ και γενικότερα το αποτέλεσμα είναι ικανοποιητικό τότε δεν υπάρχει κανένα πρόβλημα. Εάν το site παραμορφώνεται αρκετά, χάνεται κείμενο πίσω από άλλα elements, κτλ., τότε θα πρέπει να ξανασκεφτούμε κάποιες αποφάσεις που πήραμε κατά την δημιουργία του design μας...

## Κάντε validate τον κώδικα σας

Σαν τελικό τεστ, και γενικότερα όποτε τελειώνετε κάποιο site ή template, όσο μεγάλο ή μικρό και να είναι, κάντε μια επίσκεψη στους [(X)HTML](http://validator.w3.org/ "(XHTML) validator") και [CSS](http://jigsaw.w3.org/css-validator/ "CSS validator") validators, και διορθώστε τα προβλήματα που μπορεί να εμφανιστούν κατά το validation... Όσο πιο γρήγορα αποφασίσετε να το κάνετε, τόσο πιο εύκολα και γρήγορα θα επιλύσετε αυτά τα προβλήματα! Και μην ξεχνάτε, valid κώδικας σημαίνει πιο σταθερά και ποιοτικά site, τα οποία θα αντέχουν στον χρόνο!

Η παραπάνω διαδικασία θα σας βοηθήσει να εντοπίσετε πάρα πολύ γρήγορα σχεδόν όλα accessibility προβλήματα που μπορεί να έχει το site σας! Καθόλου άσχημα δηλαδή για τα μόλις 10 λεπτά χρόνου που θα ξοδέψετε! Από εκεί και πέρα μένει να επιλύσετε τα προβλήματα που εντοπίσατε, όπου φυσικά είναι και το δύσκολο αλλά απαραίτητο βήμα έτσι ώστε να κάνετε προσβάσιμο (accessible) το site σας. Ελπίζω τα παραδείγματα οπού ανέφερα να ήταν σαφή και κατανοητά, μιας και ο ελληνικός κυβερνοχώρος χρειάζεται αρκετή δουλειά ακόμα στο θέμα accessibility... Μείνετε συντονισμένοι λοιπόν για να κάνουμε το internet μια πιο σταθερή και λειτουργική πλατφόρμα!
