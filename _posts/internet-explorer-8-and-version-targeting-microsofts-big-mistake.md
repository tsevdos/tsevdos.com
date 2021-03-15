---
title: "Internet Explorer 8 και version targeting : Το μεγάλο λάθος της Microsoft"
date: "2008-01-29"
type: "post"
categories:
  - browsers
  - opinions
tags:
  - browsers
  - engine
  - explorer
  - ie
  - internet
  - microsoft
  - rendering
  - standards
  - web
---

Και ενώ τα νέα που είχαμε στην διάθεση μας σχετικά με την νέα έκδοση του [**Internet Explorer**](http://internetexplorer8.net/ "Internet Explorer 8") ήταν παραπάνω από καλά, όπως την (σχεδόν) πλήρης υποστήριξη των [**web standards**](http://www.w3.org/ "Web standards") καθώς και το γεγονός ότι πέρασε με απόλυτη επιτυχία το [ACID 2 test](http://blogs.msdn.com/ie/archive/2007/12/19/internet-explorer-8-and-acid2-a-milestone.aspx "IE8 passes Acid 2 test"), ξαφνικά η [Microsoft](http://www.microsoft.com/ "Microsoft site") κάνει κατά την γνώμη μου την χειρότερη κίνηση στο να εκμεταλλευτεί πλήρως όλα τα παραπάνω και να ξεπλύνει το κακό όνομα που έχει ο browser της! Ο λόγος είναι το λεγόμενο version targeting που θα χρησιμοποιήσει η εταιρεία στον [**Internet Explorer 8**](http://internetexplorer8.net/ "Internet Explorer 8") το οποίο και βρίσκω πραγματικά ανούσιο και δεν καταλαβαίνω γιατί αποφασίστηκε ένας τέτοιος μηχανισμός επιλογής rendering μηχανής στον νέο browser και όχι κάτι πιο απλό και κατανοητό (και για τον απλό χρήστη και για τον developer). Στο [A List Apart](http://alistapart.com/ "A List Apart blog") έχουν δημοσιευθεί δύο πολύ ενδιαφέροντα άρθρα πάνω στο θέμα, με το ένα να τίθεται υπέρ και το άλλο κατά του version targeting, με τίτλους &#8220;[Beyond DOCTYPE: Web Standards, Forward Compatibility, and IE8](http://alistapart.com/articles/beyonddoctype "Beyond Doctype - A List Apart article")&#8221; και &#8220;[From Switches to Targets: A Standardista&#8217;s Journey](http://alistapart.com/articles/fromswitchestotargets "From Switches to Targets - A List Apart article")&#8220;, τα οποία και συστήνω σε όλους τους web designers/developers.

Γιατί πιστεύω πως η [Microsoft](http://www.microsoft.com/ "Microsoft site") κάνει λάθος λοιπόν. Έχουμε και λέμε, η [Microsoft](http://www.microsoft.com/ "Microsoft site") μετά από πολλά χρόνια καταφέρνει να φτιάξει επιτέλους έναν πολύ αξιόλογο browser ([**Internet Explorer 8**](http://internetexplorer8.net/ "Internet Explorer 8")), ο οποίος και περνάει το διάσημο [ACID 2 test](http://blogs.msdn.com/ie/archive/2007/12/19/internet-explorer-8-and-acid2-a-milestone.aspx "IE8 passes Acid 2 test"), πράγμα που σημαίνει πως η rendering μηχανή του ανταποκρίνεται σωστά (ή έστω με πολύ μεγάλη ακρίβεια) στα [web standards](http://www.w3.org/ "Web standards"). Το λάθος της εταιρείας λοιπόν είναι πως αντί να χρησιμοποιήσει σαν default την καινούργια, web standards compliant rendering engine στον [**Internet Explorer 8**](http://internetexplorer8.net/ "Internet Explorer 8"), αποφασίζει να δώσει [3 rendering modes](http://blogs.msdn.com/ie/archive/2008/01/21/compatibility-and-ie8.aspx "IE8 and its 3 rendering modes") στον browser, ανάλογα με τον κώδικα που βρίσκει σε κάθε σελίδα, και πιο συγκεκριμένα :

- &#8220;**Quirks mode**&#8221; όπου θα χρησιμοποιείτε σε σελίδες με μη web standard κώδικα και θα είναι συμβατός με παλιό και μη ενημερωμένο περιεχόμενο.
- &#8220;**Standards mode**&#8221; όπου θα συμπεριφέρεται σαν το standards mode του [Internet Explorer 7](http://www.microsoft.com/windows/products/winfamily/ie/ "Internet Explorer 7"). Έτσι τα site με valid code θα γίνονται render όπως ακριβώς γίνονται στον [Internet Explorer 7](http://www.microsoft.com/windows/products/winfamily/ie/ "Internet Explorer 7") και όχι με την καινούργια web standards compliant rendering engine του [**Internet Explorer 8**](http://internetexplorer8.net/ "Internet Explorer 8")!
- Εάν θέλετε να χρησιμοποιήσετε την καινούργια web standards compliant rendering engine του **[Internet Explorer 8](http://internetexplorer8.net/ "Internet Explorer 8")** θα πρέπει να χρησιμοποιήσετε ένα **<meta>** element!

To meta element που θα πρέπει να χρησιμοποιηθεί παρουσιάζεται στον είναι το παρακάτω code snippet,

```html
<meta http-equiv="X-UA-Compatible" content="IE=8" />
```

με δυνατότητα επέκτασης και σε άλλους browsers και versions ως :

```html
<meta http-equiv="X-UA-Compatible" content="IE=8;FF=3;OtherUA=4" />
```

Και που είναι το πρόβλημα τώρα, θα αναρωτιέστε πολλοί. Τα πρόβλημα που βλέπω εγώ (και όχι μόνο) είναι το εξής. Γιατί θα πρέπει ο οποιοσδήποτε web designer/developer να δημιουργήσει ένα meta element για να χρησιμοποιήσει την καινούργια rendering μηχανή του ΙΕ8 σε valid κώδικα? &#8211; Αλλιώς όπως αναφέρω παραπάνω η default rendering engine που θα χρησιμοποιηθεί είναι αυτή του **IE7**! Καταλαβαίνω (σε αντίθεση με πιο σκληροπυρηνικούς) τον λόγο ύπαρξης ενός &#8220;Quirks mode&#8221; για την προβολή παλιού και μη valid περιεχομένου, αλλά από εκεί και πέρα η default rendering μηχανή σε valid σελίδες θα έπρεπε να είναι η καινούργια (αυτή του **ΙΕ8**) και όχι αυτή του **ΙΕ7**! Είναι σαν μια αναβάθμιση που στην ουσία για να χρησιμοποιήσει κάποιος θα πρέπει να κάνει κάποιο hack! Στην χειρότερη περίπτωση, εάν θέλανε τόσο πολύ να μην χαλάσουν κάποια site που λειτουργούν μια χαρά αυτήν την στιγμή σε ΙΕ7, ας κάνανε το αντίθετο, δηλαδή να δημιουργούσαν ένα meta element το οποίο θα ανάγκαζε τον IE8 να συμπεριφερόταν σαν ΙΕ7 (και όχι το αντίθετο)! Πραγματικά δεν μπορώ να καταλάβω γιατί η [Microsoft](http://www.microsoft.com/ "Microsoft site") πνίγεται σε μια κουταλιά νερό σε τέτοια θέματα. Θες να βγάλεις τον browser σου και να υποστηρίζεις όλες τις προηγούμενες και κακές υλοποιήσεις του, πολύ ωραία, κάντο, αλλά κάντο έξυπνα και προπαντός χωρίς να πηγαίνεις πίσω το καινούργιο προϊόν σου! Η πρόοδος έχει πάντα ένα μικρό κόστος και στην συγκεκριμένη περίπτωση θα ήταν πάρα πολύ μικρό σε σχέση με το γενικότερο κέρδος που θα είχε και από την web κοινότητα και από την development κοινότητα! Τέλος δεν μπορώ να καταλάβω γιατί εφόσον θέλει να υποστηρίξει τα κακογραμμένα sites που έχουν φτιαχτεί 5 και 10 χρόνια πριν, γιατί δεν κάνει ευκολότερη την ζωή και των χρηστών τέτοιων site αλλά και των developers, δίνοντας την επιλογή στον browser της να διαλέξει rendering μηχανή (μέσα από κάποιο μενού ας πούμε &#8211; όπως κάνουμε πχ. με το μενού encoding) ή έστω να επιτρέψει την εγκατάσταση διαφορετικών εκδόσεων του browser της στο ίδιο σύστημα!

Προσωπικά πιστεύω πως η [Microsoft](http://www.microsoft.com/ "Microsoft site") πνίγηκε σε μια κουταλιά νερό και χάλασε άδοξα τις πάρα πολύ καλές εντυπώσεις που είχε κερδίσει ο καινούργιος [**Explorer**](http://internetexplorer8.net/ "Internet Explorer 8"). Τώρα πόσο θα επηρεάσει αυτή η απόφαση εμάς τους developers, ο χρόνος θα δείξει&#8230; Άποψη μου είναι πως έκανε το απλό, πολύπλοκο, χωρίς κανέναν ιδιαίτερο λόγο.
