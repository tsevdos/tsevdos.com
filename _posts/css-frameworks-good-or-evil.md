---
title: "CSS frameworks: Αξίζουν ή όχι"
date: "2008-09-22"
type: "post"
categories:
  - articles
  - css
  - opinions
tags:
  - browsers
  - css
  - design
  - framework
  - styles
  - typography
  - web
---

Τώρα τελευταία τα [CSS frameworks](http://en.wikipedia.org/wiki/CSS_framework "CSS frameworks in Wiki") γίνονται όλο και περισσότερο της μόδας, με αρκετούς φανατικούς θαυμαστές αλλά και εξίσου φανατικούς επικριτές. Προσωπικά δεν είμαι και πολύ fun των περισσότερων framework (εξηγώ παρακάτω το γιατί), ωστόσο κατά καιρούς έχω χρησιμοποιήσει και μάλιστα με μεγάλη επιτυχία κάποια από αυτά. Στο παρακάτω αρθράκι λοιπόν, εξηγώ ποια ιδέα κρύβεται πίσω από τα framework, τα πλεονεκτήματα και μειονεκτήματα τους και τέλος ποια ξεχωρίζω και γιατί.

Η ιδέα πίσω από τα [CSS frameworks](http://en.wikipedia.org/wiki/CSS_framework "CSS frameworks in Wiki") είναι πως σε κάθε site/project που αναλαμβάνουμε, χρησιμοποιούμε πολλά κοινά στοιχεία, όπως για παράδειγμα το κλασικό [CSS reset file](http://meyerweb.com/eric/thoughts/2007/05/01/reset-reloaded/ "CSS reset file from Eric Meyer") (πάντα του [Eric Meyer](http://meyerweb.com/ "Eric Meyer's blog")), κάποια default styles για τα σημαντικότερα elements (όπως headings, tables, φόρμες κτλ.), κάποια styles μόνο για print, ενώ πολλοί πάνε τα πράγματα ακόμα παραπέρα, χρησιμοποιώντας styles για να καθορίσουν την διάταξη του site (columns και rows), να χρησιμοποιήσουν εφέ στις λίστες/μενού τους, και πολλά άλλα. Η ιδέα λοιπόν που κρύβεται πίσω από ένα framework είναι πολύ απλή. Γιατί να ξαναγράφουμε όλους αυτούς τους κανόνες και κώδικα από την αρχή για κάθε site, όταν μπορούμε να τα γράψουμε μόνο μία φορά και να τα χρησιμοποιούμε ξανά και ξανά σε όλα μας τα project? Με τον παραπάνω τρόπο, θα γλιτώνουμε πολύ κόπο και χρόνο!

Φυσικά τα πράγματα δεν είναι και τόσο ρόδινα όπως ακούγονται. Και εγώ χρησιμοποιώ επαναλαμβανόμενο CSS κώδικα στα site μου, όμως προσπαθώ να αποφεύγω τα έτοιμα [CSS frameworks](http://en.wikipedia.org/wiki/CSS_framework "CSS frameworks in Wiki"), για τους παρακάτω λόγους :

- Σε αναγκάζουν να χρησιμοποιείς κάποιο συγκεκριμένο, και πολλές φορές όχι semantic και accessible, στυλ στην markup, τις κλάσεις και τα id σου (πχ. class=”div-xyz”).
- Συνήθως χρειάζεσαι πολύ λιγότερα πράγματα απ&#8217; ότι σου προσφέρει ένα framework, με αποτέλεσμα να αναγκάζεις τον χρήστη να κατεβάζει άσκοπα κώδικα, που δεν χρησιμοποιεί!
- Ακόμα και εάν είσαι έμπειρος στην CSS, αρκετά frameworks είναι πολύπλοκα στην εκμάθηση τους. Επίσης εάν δημιουργηθεί κάποιο πρόβλημα/bug είναι πολύ πιο δύσκολο να εντοπίσεις τι φταίει.

Από εκεί και πέρα δέχομαι πως τα [CSS frameworks](http://en.wikipedia.org/wiki/CSS_framework "CSS frameworks in Wiki") σου προσφέρουν αρκετά πράγματα σχετικά εύκολα και γρήγορα, μιας και δεν κάθεσαι να γράψεις από την αρχή όλους τους CSS κανόνες, ενώ τα περισσότερα υποστηρίζουν αμέσως τους περισσότερους browsers που υπάρχουν. Για όσους θέλουν να ρίξουν μια ματιά σε αυτά, η παρακάτω λίστα αναφέρει όλα τα frameworks που υπάρχουν διαθέσιμα αυτήν την στιγμή (αναφέρομαι στα γνωστά και αυτά που μπορεί να χρησιμοποιήσει κάποιος εδώ και τώρα, και όχι σε αυτά που είναι υπό development ή που βρίσκονται σε beta στάδιο).

- [Elements](http://elements.projectdesigns.org/ "Elements")
- [YUI Grids CSS](http://developer.yahoo.com/yui/grids/ "YUI Grids CSS")
- [YAML](http://www.yaml.de/en/ "YAML")
- [Blueprint](http://www.blueprintcss.org/ "Blueprint")
- [Schema : Web Design Framework](http://www.davidgoldingdesign.com/schema.html "Schema: Web Design Framework")
- [CleverCSS](http://sandbox.pocoo.org/clevercss/ "CleverCSS")
- [Tripoli](http://devkick.com/lab/tripoli/ "Tripoli")
- [Boilerplate](http://code.google.com/p/css-boilerplate/ "Boilerplate")
- [WYMstyle](http://www.wymstyle.org/en/ "WYMstyle")
- [A CSS framework](http://www.contentwithstyle.co.uk/Articles/17/a-css-framework/ "A CSS Framework")
- [Logicss](http://code.google.com/p/logicss/ "Logicss")
- [960](http://960.gs/ "960")
- [emastic](http://code.google.com/p/emastic/ "emastic")

Όπως ανέφερα και παραπάνω λοιπόν, έχω δοκιμάσει τα περισσότερα από αυτά, και λογικό είναι να έχω ξεχωρίσει κάποια από αυτά. Γενικότερα, απορρίπτω αμέσως 2 κατηγορίες framework. Αυτά που είναι πολύ μεγάλα σε μέγεθος και κώδικα, με αποτέλεσμα να αναγκάζουν τον χρήστη να περιμένει να φορτωθούν χίλια-δυο άχρηστα πράγματα, και σε αυτά που σε αναγκάζουν να χρησιμοποιείς non-semantic markup, κλάσεις και ids στον κώδικα σου. Με το παραπάνω σκεπτικό λοιπόν, έχω απορρίψει πολλά διάσημα frameworks, όπως [YUI Grids CSS](http://developer.yahoo.com/yui/grids/ "YUI Grids CSS"), [960](http://960.gs/ "960"), [YAML](http://www.yaml.de/en/ "YAML"), και πολλά άλλα, ενώ αντιθέτως έχω χρησιμοποιήσει αρκετές φορές το [Boilerplate](http://code.google.com/p/css-boilerplate/ "Boilerplate") το οποίο δεν αντιμετωπίζει τα παραπάνω προβλήματα, ενώ το σκεπτικό του βασίζεται στην απλότητα τόσο του κώδικα του, όσο και της λειτουργίας του.

To [Boilerplate](http://code.google.com/p/css-boilerplate/ "Boilerplate") λοιπόν είναι ένα πολύ απλό framework, το οποίο δεν περιέχει περίεργες κλάσεις και ids, αλλά προσφέρει μια πολύ ολοκληρωμένη βάση για τον CSS κώδικα σας. Έτσι κάθε φορά που το χρησιμοποιήτε σε κάποιο project, έχετε τον βασικό CSS κορμό έτοιμο, όπως για παράδειγμα ένα reset file, default styles για όλα τα elements (headings, παραγράφους, λίστες, κτλ.), ένα βασικό print-only style και κάποιες πάρα πολύ βασικές κλάσεις. Το δεύτερο χαρακτηριστικό που μου αρέσει στο συγκεκριμένο framework, είναι πως έχει χωρισμένα τα CSS αρχεία με έξυπνο τρόπο, όπως για παράδειγμα ένα αρχείο για την τυπογραφία (typography.css), άλλο για τις φόρμες (forms.css), άλλο για το UI της οθόνης (screen.css) κτλ., οργανώνοντας έτσι προκαταβολικά τον κώδικα σας! Από εκεί και πέρα, ότι extra θέλετε, το γράφεται μόνοι σας! Προσωπικά με έχει κερδίσει αυτή η μινιμαλιστική προσέγγιση που έχει, γιατί μέσα σε πολύ λίγη ώρα μπορώ να στίσω τον βασικό κορμό CSS ενός project, ενώ ταυτόχρονα για οτιδήποτε θέλω να προσθέσω ή να αλλάξω, γίνεται πολύ εύκολα και γρήγορα λόγο της έξυπνης κατηγοριοποίησης και ονοματολογίας των αρχείων του.

Αυτά τα λίγα λοιπόν για τα [CSS Frameworks](http://en.wikipedia.org/wiki/CSS_framework "CSS frameworks in Wiki"). Γενικότερα δοκιμάστε όσα περισσότερα γίνεται (όπως βλέπεται είναι πάρα πολλά) και προσπαθείστε να βρείτε αυτό που σας ταιριάζει! Εάν ξέχασα κάποιο framework που χρησιμοποιείτε ή που νομίζεται πως αξήζει να αναφερθεί, αφήστε μου ένα σχόλιο, για το κοιτάξω κι αυτό&#8230;
