---
title: "Οι CSS3 κανόνες του αύριο, σήμερα (μέρος 1ο)"
date: "2014-01-15"
type: "post"
categories:
  - css
tags:
  - css
  - css3
---

**Σημείωση:** Το παρακάτω άρθρο γράφτηκε τον Σεπτέμβρη του 2008 (πριν 6 χρόνια!) για το [CSS3.gr](http://css3.gr/ "CSS3.gr").

Από καιρό ήθελα να γράψω ένα άρθρο με θέμα τις νέες δυνατότητες του [CSS](http://www.w3.org/Style/CSS "Δείτε το επίσημο specification του CSS") και πραγματικά πιστεύω πως αυτή είναι η καλύτερη στιγμή για να το δημοσιεύσω! Δεν έχει να κάνει μόνο με το ολοκαίνουργιο project που ξεκινάμε [όλοι εμείς](http://css3.gr/ "Ποιοι είμαστε πίσω από το CSS3"), αλλά κυρίως με τους browsers, που σιγά-σιγά αρχίζουν επιτέλους να υποστηρίζουν κάποιους **CSS3** κανόνες, είτε επίσημα είτε ανεπίσημα.

Στο παρακάτω πρώτο μέρος του άρθρου λοιπόν, δεν θα προσπαθήσω να εξηγήσω όλους τους καινούργιους κανόνες και δυνατότητες της CSS3, αλλά θα κάνω κάτι πολύ πιο πρακτικό. Θα παρουσιάσω κάποιους CSS3 κανόνες που μπορείτε να χρησιμοποιήσετε αυτήν την στιγμή στα site σας, έτσι ώστε και να τα κάνετε πιο όμορφα - στους browsers που μπορούν να καταλάβουν τους νέους κανόνες φυσικά - αλλά και για να τα προετοιμάσετε κατάλληλα για το μέλλον!

## Μα καλά πως γίνεται αυτό;

Οι περισσότεροι browsers προετοιμάζονται εδώ και καιρό, όπως και τα επίσημα standards άλλωστε, για την έλευση των καινούργιων styling κανόνων. Πιο συγκεκριμένα οι rendering μηχανές [Webkit](http://webkit.org/ "Το επίσημο website του Webkit"), [Gecko](http://www.mozilla.org/newlayout/ "Σχετικά με το Gecko") και [Presto](<http://en.wikipedia.org/wiki/Presto_(layout_engine)> "Διαβάστε περισσότερα για το Presto") ([η μηχανή rendering του Opera](http://dev.opera.com/articles/view/presto-2-1-web-standards-supported-by/ "Διαβάστε για τη μηχανή rendering του Opera")), έχουν κάνει αρκετά βήματα μπροστά, είτε ακολουθώντας τα επίσημα standards είτε δημιουργώντας δικούς κανόνες ανάλογων δυνατοτήτων έτσι ώστε η μετάβαση σε αυτά να γίνει ευκολότερη.

Γι' αυτούς που θα βιαστούν να πουν πως δεν αξίζει ο κόπος να χρησιμοποιήσει κάποιος τις παρακάτω τεχνικές γιατί πολύ απλά οι συγκεκριμένες μηχανές rendering έχουν μικρό ποσοστό στην αγορά, να τους θυμίσω πως οι συγκεκριμένες μηχανές rendering βρίσκονται στην καρδιά των δημοφιλών browser, [Safari](http://www.apple.com/safari/ "Ο browser Safari"), [Chrome](http://www.google.com/chrome "Ο browser Chrome"), [Firefox](http://www.mozilla.com/en-US/firefox/ "Ο browser Firefox") και [Opera](http://www.opera.com/ "Ο browser Opera"), ενώ παράλληλα πολλά κινητά έχουν browsers που στηρίζονται στις εν λόγω μηχανές, όπως ο [Safari](http://www.apple.com/iphone/features/index.html#safari "Ο Safari για το iPhone") για το [iPhone](http://www.apple.com/iphone/ "Το iPhone") και o [Nokia Mini Map](http://www.nokia.com/browser "Ο Nokia Mini Map") για τα Nokia κινητά τηλέφωνα (και οι δύο στηρίζονται στο Webkit, o [Opera Mobile](http://www.opera.com/products/mobile/ "Ο browser Opera Mobile") ο οποίος βρίσκεται σε πολλά κινητά με [Symbian OS](http://www.symbian.com/ "Το λειτουργικό σύστημα Symbian") και όχι μόνο, ενώ τέλος αξίζει να αναφέρω και τις [Rich Internet Applications](http://en.wikipedia.org/wiki/Rich_Internet_application "Διαβάστε περισσότερα για τα Rich Internet Applications") (RIA) πλατφόρμες [Adobe AIR](http://labs.adobe.com/technologies/air/ "Η πλατφόρμα Adobe AIR") και [Mozilla Prism](http://labs.mozilla.com/2007/10/prism/ "Η πλατφόρμα Mozilla Prism") οι οποίες στηρίζονται στο Webkit και την [Gecko](http://www.mozilla.org/newlayout/ "Διαβάστε περισσότερα για το Gecko") rendering engine αντίστοιχα.

Όπως πολύ εύκολα καταλαβαίνετε, ο χρόνος που θα αφιερώσετε εάν αποφασίσετε να εισάγεται κάποιους από τους παρακάτω CSS3 κανόνες στα styles σας, μόνο χαμένος δεν θα πάει! Έχουμε και λέμε λοιπόν...

## Border-radius

Όσοι έχουν παράπονο πως το σημερινό web είναι κάπως "τετραγωνισμένο" ο συγκεκριμένος κανόνας είναι ότι χρειάζεστε, μιας και θα σας "στρογγυλέψει" λίγο το web... Με το [border-radius](http://www.w3.org/TR/2005/WD-css3-background-20050216/#border-radius "Το border-radius στο CSS3") λοιπόν μπορείτε να στρογγυλέψετε τον border οποιουδήποτε element! Αυτήν την στιγμή δυστυχώς, κανένας browser δεν υποστηρίζει τον επίσημο W3C κανόνα (!), ωστόσο ο Safari, ο Firefox και ο Chrome έχουν τους δικούς τους εναλλακτικούς κανόνες που δουλεύουν μια χαρά. Έτσι λοιπόν, με το παρακάτω παράδειγμα το element με id "border_radius" θα έχει έναν μαύρο border ο οποίος θα στρογγυλεύει κατά 10 pixels στις άκρες του!

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="GAjbn" data-user="tsevdos" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tsevdos/pen/GAjbn">
  Border radius</a> by John Tsevdos (<a href="https://codepen.io/tsevdos">@tsevdos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

O πρώτος W3C επίσημος κανόνας border-radius, αν και όπως ανάφερα δεν αναγνωρίζεται από κανέναν browser, καλό θα είναι να εφαρμόζεται έτσι ώστε το style μας να είναι έτοιμο και για τους μελλοντικούς browsers που θα τον υποστηρίξουν. Από εκεί και πέρα, ο δεύτερος `(-moz-border-radius: 10px;)` και τρίτος `(-webkit-border-radius: 10px;)` κανόνας, είναι για τις Gecko και Webkit rendering engines αντίστοιχα. O συγκεκριμένος κανόνας μπορεί να δημιουργήσει ενδιαφέροντα εφέ, ιδιαίτερα εάν χρησιμοποιούμε το radious σε συγκεκριμένες γωνίες, όπως για παράδειγμα:

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="KvAyd" data-user="tsevdos" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tsevdos/pen/KvAyd">
  Custom Border radius</a> by John Tsevdos (<a href="https://codepen.io/tsevdos">@tsevdos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Όπως παρατηρείτε οι διαφορές από τον [επίσημο κανόνα](http://www.w3.org/TR/2005/WD-css3-background-20050216/#border-radius "Ο επίσημος κανόνας για το border radius") είναι μικρές και για τις 2 rendering engines, ενώ πολύ σύντομα πιστεύω πως και οι 2 θα αρχίσουν να αναγνωρίζουν και τον επίσημο κανόνα. Να δούμε πότε θα μπορέσουμε να χρησιμοποιήσουμε και το [border-image](http://www.w3.org/TR/2005/WD-css3-background-20050216/#the-border-image "Το border-image στο CSS3"), το οποίο πιστεύω πως θα είναι η άλλη μεγάλη προσθήκη στο θέμα CSS3 borders!

## Opacity (ή απλά CSS transparency!)

Άλλος ένας κανόνας που θα αλλάξει τόσο τον τρόπο με τον οποίο σχεδιάζουμε sites όσο και τον τρόπο με τον οποίο θα αλληλεπιδρούν τα χρώματα μέσα σε αυτά. Με αυτόν τον απλό κανόνα λοιπόν, μπορούμε να δώσουμε διαφάνεια (transparency) σε οποιοδήποτε element! Όλο το element, συμπεριλαμβανομένου του κειμένου του, του background χρώματος αλλά και του border του, θα είναι όσο διάφανο του ορίσουμε, με την τιμή 0 να το κάνει τελείως διάφανο (αόρατο) και την τιμή 1 πλήρη ορατό. Έτσι λοιπόν με τον παρακάτω κανόνα, το div με id opacity, θα είναι 50% διάφανο!

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="njwCy" data-user="tsevdos" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tsevdos/pen/njwCy">
  Opacity</a> by John Tsevdos (<a href="https://codepen.io/tsevdos">@tsevdos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Ήδη οι καινούργιες εκδόσεις των Firefox, Opera, Safari και Chrome μπορούν να καταλάβουν τον [επίσημο W3C κανόνα (opacity)](https://web.archive.org/web/20090330181709/http://www.w3.org/TR/css3-color/#transparency "Διαβάστε για το opacity στο CSS3"), ενώ με μερικούς extra browser-specific κανόνες μπορούμε να έχουμε το ίδιο εφέ και στον Internet Explorer (6 και 7), σε παλιότερες εκδόσεις του Firefox, ενώ τέλος μπορεί να λειτουργήσει και στον [Konqueror](http://www.konqueror.org/ "Διαβάστε περισσότερα για τον Konqueror") (για να μην παραπονιούντε και οι KDE χρήστες). Απλός και πολύ πρακτικός κανόνας που μπορεί να χρησιμοποιηθεί άμεσα και να δώσει υπέροχους συνδυασμούς χρωμάτων ανάλογα με την διαφάνεια (transparency) που έχει οριστεί στα διάφορα elements.

## Box-shadow και Text-shadow

Θέλετε διάφορα elements της σελίδας σας να έχουν σκιές, αλλά ταυτόχρονα δεν θέλετε να παρά-φορτώσετε τα site σας με επιπλέον γραφικά, πολύπλοκη markup και περίπλοκους styling κανόνες; Με την έλευση του CSS3 η λύση είναι πολύ απλή και λειτουργική και ονομάζεται [box-shadow](http://www.w3.org/TR/2005/WD-css3-background-20050216/#the-box-shadow "Το box-shadow στο CSS3"). Απλά θα επιλέγεται το element που θέλετε να έχει σκιά και η rendering μηχανή του εκάστοτε browser αναλαμβάνει όλα τα υπόλοιπα! Δύσκολο να το πιστέψει κάποιος, έτσι; Ας δούμε ένα παράδειγμα καλύτερα:

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="gKfoE" data-user="tsevdos" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tsevdos/pen/gKfoE">
  Box Shadow</a> by John Tsevdos (<a href="https://codepen.io/tsevdos">@tsevdos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Ο συγκεκριμένος κανόνας δέχεται τρεις τιμές και ένα χρώμα.  Η πρώτη τιμή καθορίζει την οριζόντια θέση της σκιάς. Μία αρνητική τιμή θα μετακινήσει την σκιά πιο αριστερά ενώ μία θετική πιο δεξιά από το element στο οποίο εφαρμόζουμε τον κανόνα. Η δεύτερη τιμή καθορίζει την κάθετη θέση της σκιάς. Μία αρνητική τιμή θα μετακινήσει την σκιά πιο πάνω ενώ μία θετική πιο κάτω από το element στο οποίο εφαρμόζουμε τον κανόνα. Η τρίτη τιμή έχει να κάνει με το πόσο "σκοτεινή" θα είναι η σκιά. Εάν επιλέξουμε 0 η σκιά θα είναι πάρα πολύ "σκοτεινή", ενώ όσο η τιμή μεγαλώνει τόσο περισσότερο θα "θολώνει" και η σκιά μας. Ο ακριβής αλγόριθμος δεν έχει αποφασιστεί ακόμα ούτε από το [W3C](http://www.w3.org/ "W3C")! Η τέταρτη τιμή είναι κάποια τιμή χρώματος, η οποία χρωματίζει ανάλογα την σκιά μας.

Και σε αυτό το παράδειγμα καμία μηχανή rendering δεν θα καταλάβει τον επίσημο κανόνα, ενώ δυστυχώς η μόνη rendering μηχανή που έχει κάνει κάποια δουλειά στον συγκεκριμένο κανόνα είναι το Webkit (όπως βλέπετε και στο παράδειγμα). Στην ίδια ακριβώς φιλοσοφία κινείται και ο αντίστοιχος κανόνας για [σκιές στο κείμενο (text-shadow)](http://www.w3.org/TR/REC-CSS2/text.html#text-shadow-props "Το text-shadow στο CSS3"). Ο συγκεκριμένος κανόνας δεν είναι καν CSS3 κανόνας, αλλά "παλιός" και καλός CSS2 κανόνας, και μπορεί να εμφανιστεί σωστά τόσο στους browsers που χρησιμοποιούν το Webkit σαν rendering engine (όχι στον Chrome για κάποιον περίεργο λόγο) όσο και από τον Opera, και μάλιστα χρησιμοποιώντας κατευθείαν τον επίσημο W3C κανόνα (δείτε το παρακάτω παράδειγμα):

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="fsJhC" data-user="tsevdos" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tsevdos/pen/fsJhC">
  Text Shadow</a> by John Tsevdos (<a href="https://codepen.io/tsevdos">@tsevdos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Απλές και εύκολες σκιές λοιπόν, τόσο για τα elements όσο και για το κείμενο μας, χωρίς extra markup και πολύπλοκους styling κανόνες! Γιατί να κουραζόμαστε άλλωστε...

## Μείνετε συντονισμένοι

Το ξέρω πως σας άνοιξα την όρεξη και θέλετε να μάθετε και άλλους τέτοιους πρακτικούς CSS3 κανόνες, ωστόσο θα πρέπει να κάνετε λίγη υπομονή μέχρι να δημοσιευθεί το δεύτερο και τελευταίο μέρος του άρθρου. Για την ώρα, το μόνο που μπορώ να εγγυηθώ είναι πως και εκεί θα ανακαλύψετε πολλούς κανόνες που θα σας λύσουν τα χέρια! Μείνετε συντονισμένοι στο [CSS3.gr](http://www.css3.gr/ "Το CSS3.gr") και δεν θα χάσετε.
