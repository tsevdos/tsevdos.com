---
title: "Νέο Tsevdos.com"
date: "2007-10-13"
type: "post"
guid: http://www.tsevdos.com/2007/10/13/new-tsevdos-com/
permalink: /2007/10/13/new-tsevdos-com/
categories:
  - tsevdos.com
tags:
  - blog
  - databases
  - hosting
  - mySQL
  - services
  - site
  - tsevdos.com
  - wordpress
---

Το [site](http://www.tsevdos.com/ "Tsevdos.com") μετά από μία νεκρή περίοδο περίπου 2 εβδομάδων είναι και πάλι on-line! Οι νόμοι του [Murphy](http://www.murphys-laws.com/ "Murphy's laws") επαληθεύτηκαν, και μάλιστα πανηγυρικά, μιας και μετά από το upgrate του [WordPress](http://wordpress.org/ "Wordpress.com") στην version 2.3, η [mySQL database](http://www.mysql.com/ "mySQL site") απλά διέλυσε όλους του ελληνικούς χαρακτήρες που περιείχε (δεν ήταν με λίγα λόγια πρόβλημα στο [charset](http://en.wikipedia.org/wiki/Character_encoding "What is charset")). Μετά την πρώτη ήττα λοιπόν, αποφασίζω να χρησιμοποιήσω το πρώτο backup που είχα πάρει κατευθείαν από το [phpMyAdmin](http://www.phpmyadmin.net/ "phpMyAdmin site"). Ανοίγοντας το, έρχεται και τη δεύτερη ήττα, μιας και ανακαλύπτω πως και πάλι όλοι οι ελληνικοί χαρακτήρες είναι corrupted και το backup στην ουσία άχρηστο! Όπως καταλαβαίνεται με είχε ήδη λούσει κρύος ιδρώτας και για το δεύτερο backup το οποίο το έκανα κατευθείαν μέσω του administration panel [WordPress](http://wordpress.org/ "Wordpress.com"), και που όπως σωστά μαντέψατε, και αυτό το backup ήταν άχρηστο!

Μετά από διάφορες πατέντες και δοκιμές που κάναμε μαζί με τον [Dennis](http://www.serverdome.org/ "Serverdome.com") (ευχαριστώ πολύ παλικάρι), ανακαλύψαμε πως για κάποιο λόγο η παλιά version της [mySQL database](http://www.mysql.com/ "mySQL site") στους server της [One web hosting](https://www.one.com/ "One web hosting") (στην Δανία), ήταν προβληματική όπως και τα backup της (για κάποιο λόγο επέστρεφε πάντα κατεστραμμένους ελληνικούς χαρακτήρες) και ίσως να μην έφταιγε και το WordPress update τελικά (το οποίο είχε γίνει και κανονικά μάλιστα)! Η ιστορία δεν τελειώνει εδώ όμως, μετά από επικοινωνία με την [One web hosting](https://www.one.com/ "One web hosting") και τους ανθρώπους της, και την παράκληση να γυρίσουν τα πάντα στο πιο πρόσφατο backup τους, η απάντηση που έλαβα ήταν πως από την στιγμή που δεν υπήρχε hardware failure, δεν μπορούσαν να κάνουν κάτι τέτοιο (να πατήσουν ένα κουμπάκι με λίγα λόγια)!!! Μετά από πολλές εξηγήσεις και επεξηγήσεις της ιστορίας και κανένα ουσιαστικό δείγμα καλής θέλησης από την μεριά τους, νευρίασα και μετέφερα τα πάντα στην [Dreamhost](http://www.dreamhost.com/ "Dreamhost site"), η οποία είναι η καλύτερη εταιρεία hosting που έχω συνεργαστεί ως αυτήν την στιγμή (και με το καλύτερο administration panel που έχω δει στην ζωή μου)!!!

Κάπως έτσι ξαναζωντανεύει λοιπόν αυτό το blog, το οποίο έχει χάσει ήδη όλα τα comments του (sorry παιδιά), ενώ θα χρειαστώ να περάσω manual (δυστυχώς!) όλα τα παλιά post μου (μιλάμε για περίπου 230 entries) !!! Τι να κάνουμε, η ζωή συνεχίζεται&#8230; Το blog θα αλλάξει και λίγο σε ύφος, αλλά όχι σε θεματολογία, ενώ έχω αποφασίσει να δώσω περισσότερο βάρος στο web design, [SEO](http://en.wikipedia.org/wiki/Search_engine_optimization "What is SEO") και στα εργαλεία γύρω από όλα αυτά (browsers, plug-ins, internet services/tools, κτλ.). Τέλος δώστε μου μερικές μέρες για να &#8220;στρώσω&#8221; λίγο το καινούργιο [theme](http://5thirtyone.com/grid-focus "Grid Focus theme")&#8230;
