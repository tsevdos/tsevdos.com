---
title: "Η HTML 5 έρχεται..."
date: "2008-02-06"
type: "post"
categories:
  - markup
  - opinions
tags:
  - api
  - applications
  - client-side
  - css
  - design
  - development
  - html
  - html5
  - internet
  - markup
  - w3c
  - web
---

Για τα ανήσυχα μυαλά που θέλουν να είναι έτοιμοι πριν από όλους τους άλλους, το [W3C](http://www.w3.org/ "W3C") δημοσίευσε την προηγούμενη εβδομάδα τα πρώτα [**specifications της HTML 5**](http://www.w3.org/TR/2008/WD-html5-20080122/ "HTML 5")! Μαζί με τις [**διαφορές που υπάρχουν μεταξύ HTML 5 και HTML 4**](http://www.w3.org/TR/2008/WD-html5-diff-20080122/ "differences between HTML 5 and HTML 4") καθώς και τον [**επίσημο οδηγό του web developer στην HTML 5**](http://dev.w3.org/html5/html-author/ "Web developer's guide on HTML 5"), είναι τα πληρέστερα (και επίσημα) κείμενα που υπάρχουν για την νέα markup language, αυτήν την στιγμή.

Αν και δεν μπορώ να πω πως έχω μελετήσει αναλυτικά όλα τα παραπάνω [**specifications της HTML 5**](http://www.w3.org/TR/2008/WD-html5-20080122/ "HTML 5"), έχω ανακαλύψει ήδη πολλά ενδιαφέροντα χαρακτηριστικά, όπως:

- Πολλά νέα elements για καλύτερο και πιο semantic structure, όπως header, footer, nav, section, article, aside, dialog κτλ.
- Πολλά βελτιωμένα elements για embedded content, όπως figure, audio και video. Στα δύο τελευταία δίνεται και η δυνατότητα ενσωμάτωσης user interface μέσω της markup αλλά και ενός API, έτσι ώστε ο χρήστης να μπορεί να ελέγχει το video/audio file. Το user interface θα δημιουργείτε από την rendering engine του εκάστοτε user agent!
- time element, που θα αντιπροσωπεύει χρόνο (ημερομηνία, ώρα, κτλ.)
- canvas element, για on-line rendering γραφικών
- Templates elements όπως datatemplate, rule, and nest. Με αυτόν τον τρόπο η ίδια η markup αποκτά templating δυνατότητες!
- Form validation μέσω της markup (σε client-side επίπεδο φυσικά). Έτσι στα input elements, δηλώνοντας απλά τον τύπο τους (type) στην markup (όπως πχ. date, number, email, url, κτλ) θα αναγκάζουμε τον user agent του browser να αναλαμβάνει το client-side validation

Μαζί με τα νέα χαρακτηριστικά, η καινούργια markup αφήνει πίσω της πολλά άχρηστα elements και attributes τα οποία είχαν παρατήσει εδώ και καιρό οι έμπειροι developers, όπως:

- font, επιτέλους όλο το styling θα γίνεται αναγκαστικά μέσω [CSS](http://www.w3.org/Style/CSS/ "CSS")
- frame, frameset και noframes. Δεν νομίζω πως χρειάζονται περαιτέρω διευκρινήσεις για την επιλογή του W3C σε αυτό το θέμα
- applet
- Όλες τις presentational attributes όπως: align, background, bgcolor, cellpadding, cellspacing, border, valign κτλ. Εάν κάποιος θέλει να τις χρησιμοποιήσει, θα πρέπει και πάλι να στραφεί στην [CSS](http://www.w3.org/Style/CSS/ "CSS")

Τέλος αξίζει να σημειωθεί πως πάνω στην καινούργια markup [**θα χτιστούν και πολλά API**](http://www.w3.org/TR/2008/WD-html5-diff-20080122/#apis "HTML 5 and API") για την ευκολότερη υλοποίηση web εφαρμογών, όπως:

- 2D drawing API το οποίο θα χρησιμοποιείται για on-line rendering γραφικών μέσω του νέου canvas element
- API για την δημιουργία interface στοιχείων (όπως play, pause, κτλ.) στα video και audio elements
- Δυνατότητα [client-side αποθήκευσης δεδομένων](http://www.tsevdos.com/2007/10/22/webkit-does-html5-client-side-database-storage/ "Web kit and client-side database"). Τώρα αυτό το κομμάτι δεν ξέρω πως θα υλοποιηθεί από τον κάθε browser, αλλά θα μάθουμε σύντομα περισσότερες λεπτομέρειες
- API για δημιουργία offline web εφαρμογών. Έτσι ακόμα και εάν δεν υπάρχει internet access, η web εφαρμογή θα συνεχίσει να λειτουργεί κανονικά! Σε συνδυασμό με το χαρακτηριστικό μιας client-side database καταλαβαίνουμε όλοι πόσο μπροστά θα πάνε τα πράγματα
- Drag and drop API, το οποίο θα μπορεί να γίνει attached σε σχεδόν οποιοδήποτε element μέσω της νέας draggable attribute
- Editing API, το οποίο θα λειτουργεί με τα elements που έχουν την νέα contenteditable attribute. Όπως καταλαβαίνεται τα Wiki-like και γενικότερα τα social-based sites θα περάσουν σε άλλο επίπεδο
- Network API
- Διάφορα άλλα API μικρότερης σημασίας ή πιο εξειδικευμένων λειτουργιών

Εάν έχετε κάποια εμπειρία σε (X)HTML και βαριέστε να διαβάσετε όλα τα [**specifications της HTML 5**](http://www.w3.org/TR/2008/WD-html5-20080122/ "HTML 5") (όπως εγώ), προτείνω να ξεκινήσετε από το κείμενο που περιγράφει [**τις διαφορές που έχει με την HTML 4**](http://www.w3.org/TR/2008/WD-html5-diff-20080122/ "differences between HTML 5 and HTML 4"). Το κείμενο είναι περιεκτικότατο, σαφέστατο και δεν κουράζει καθόλου (σε αντίθεση με τα επίσημα specifications)! Καλό διάβασμα!
