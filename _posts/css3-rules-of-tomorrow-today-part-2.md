---
title: "Οι CSS3 κανόνες του αύριο, σήμερα (μέρος 2ο)"
date: "2014-01-28"
type: "post"
categories:
  - css
tags:
  - css
  - css3
---

**Σημείωση:** Το παρακάτω άρθρο γράφτηκε τον Οκτώβρη του 2008 (πριν 6 χρόνια!) για το [CSS3.gr](http://css3.gr/ "CSS3.gr").

Καλώς ήρθατε στο δεύτερο και τελευταίο μέρος του άρθρου, το οποίο έχει ως στόχο να κάνει γνωστούς και να σας βοηθήσει να εφαρμόσετε κάποιους CSS3 κανόνες που μπορείτε να χρησιμοποιήσετε εδώ και τώρα! Εάν δεν έχετε διαβάσει [το πρώτο μέρος του άρθρου](http://www.tsevdos.com/2014/01/15/css3-rules-of-tomorrow-today-part-1/ "Οι CSS3 κανόνες του αύριο, σήμερα (μέρος 1ο)"), καλό θα είναι να του ρίξετε μια ματιά, μιας και παρουσιάζονται και εκεί πολλά ενδιαφέροντα πραγματάκια.

Σε αυτό το δεύτερο μέρος μέρος λοιπόν, θα ασχοληθούμε με τους νέους κανόνες που μας προσφέρει το CSS σε θέματα background, fonts και columns (o Αλέξανδρος έχει [ήδη γράψει και την δική του άποψη πάνω σε αυτό το θέμα](https://web.archive.org/web/20090407043943/http://css3.gr/articles/article/css3-multi-column-layout/ "CSS3 Multi-column layout (Το μαύρο πρόβατο)")). Ας συνεχίσουμε λοιπόν!

## Multiple background-images, background-origin και background-size

Ας ξεκινήσουμε από τον πρώτο κανόνα, ο οποίος θα σώσει στην κυριολεξία πολλά sites από extra και non-semantic markup η οποία χρησιμοποιείται απλά και μόνο για presentational σκοπούς, κάτι που φυσικά είναι λάθος. Τα καινούργια specifications λοιπόν, δίνουν επιτέλους την δυνατότητα να έχουμε πολλαπλά background γραφικά σε ένα element, και όχι μόνο ένα όπως ισχύει μέχρι τώρα! Φανταστείτε τι ελευθερία κινήσεων δίνεται πλέον τόσο στους styling κανόνες όσο και στην ίδια την markup μας, η οποία θα είναι πολύ πιο καθαρή, χρησιμοποιώντας απλά και μόνο τις νέες δυνατότητες του [background-image κανόνα](http://www.w3.org/TR/css3-background/#the-background-image "background-image CSS rule"), με τις αντίστοιχες ρυθμίσεις του!

Στο παρακάτω παράδειγμα λοιπόν, το element με το id "multiple_backgrounds" θα έχει τέσσερα (ναι σωστά διαβάσατε) background images:

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="qIAoG" data-user="tsevdos" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tsevdos/pen/qIAoG">
  Multiple background-images</a> by John Tsevdos (<a href="https://codepen.io/tsevdos">@tsevdos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Προς το παρόν οι μόνοι browsers που καταλαβαίνουν τον παραπάνω κανόνα είναι αυτοί που στηρίζονται στον Webkit (δηλαδή ο Safari, Konqueror και Chrome), ωστόσο λόγο της μεγάλης σημασίας του συγκεκριμένου κανόνα, πιστεύω πως θα προσπαθήσουν να υποστηρίξουν τον συγκεκριμένο κανόνα και οι υπόλοιποι browsers (Firefox 3 και Internet Explorer 8) όσο πιο γρήγορα γίνεται. Καλό θα ήταν λοιπόν είναι να τον ξέρετε, έτσι ώστε να έχετε κρυμμένο έναν άσσο στο μανίκι σας πριν απ' όλους τους άλλους!

Οι βελτιώσεις στο θέμα background δεν τελειώνουν εδώ όμως. Το W3C έχει βάλει σαν στόχο να προσφέρει πολλές δυνατότητες και ευκολίες στον συγκεκριμένο τομέα, και πολύ καλά κάνει, μιας και τέτοιοι περιορισμοί ανάγκαζαν επί χρόνια τους designers να καταφεύγουν σε άλλες λύσεις. Ο δεύτερος λοιπόν κανόνας με αρκετό ενδιαφέρον, είναι το [background-origin](http://www.w3.org/TR/2005/WD-css3-background-20050216/#the-background-origin "background-origin CSS rule"), το οποίο μπορεί να πάρει 3 τιμές, `border`, `padding` ή `content`. Ο εν λόγω κανόνας μοιάζει πολύ με τον [background-position κανόνα](http://www.w3.org/TR/css3-background/#the-background-position "background-position CSS rule"), με την διαφορά πως αντί να επιλέξουμε μια μονάδα μέτρησης έτσι ώστε να τοποθετήσουμε το background image στην θέση που θέλουμε, χρησιμοποιούμε τις ιδιότητες του ίδιου του element. Έτσι ανάλογα με την επιλογή μας, το background γραφικό μας θα ξεκινήσει να εμφανίζεται είτε από εκεί που ξεκινάει το περιεχόμενο μας (content), είτε από εκεί που ξεκινάει ο border μας ή είτε τέλος από εκεί που ξεκινάει το padding μας&#8230;

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="awkHy" data-user="tsevdos" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tsevdos/pen/awkHy">
  Background Origin</a> by John Tsevdos (<a href="https://codepen.io/tsevdos">@tsevdos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Όπως καταλαβαίνετε ο συγκεκριμένος κανόνας δεν υποστηρίζεται επίσημα από κανέναν browser αυτήν την στιγμή, ωστόσο υπάρχουν οι αντίστοιχοι κανόνες για τον Safari/Chrome και τον Firefox, πράγμα που σημαίνει πως σύντομα θα υποστηριχθεί κανονικά από τους συγκεκριμένους browsers.

Τέλος, το CSS3 μας δίνει την δυνατότητα να ελέγξουμε και το μέγεθος ενός background-image μέσα από την CSS, με τον [background-size κανόνα](http://www.w3.org/TR/css3-background/#the-background-size "background-size CSS rule")! Απλά δώστε τις τιμές που θέλετε (σε pixels ή ποσοστά) και η CSS θα αναλάβει όλα τα υπόλοιπα!

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="JoDAp" data-user="tsevdos" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tsevdos/pen/JoDAp">
  Background Size</a> by John Tsevdos (<a href="https://codepen.io/tsevdos">@tsevdos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Και ο συγκεκριμένος κανόνας δεν υποστηρίζεται από κανέναν browser, τουλάχιστον στην επίσημη W3C μορφή του, ωστόσο όπως μπορείτε να δείτε πολλοί browsers όπως Safari, Konqueror, Opera και Chrome έχουν ήδη έτοιμες τις δικές τους υλοποιήσεις, οπότε και αυτός ο κανόνας βρίσκεται ψηλά στις προτεραιότητες των κατασκευαστών browser.

Γενικότερα οι κανόνες που έχουν να κάνουν με το background θεωρούνται οι πιο σημαντικοί κανόνες, μιας και στην ουσία θα αλλάξουν τον τρόπο με τον οποίο χτίζουμε τις σελίδες μας, τόσο σε CSS όσο και σε markup επίπεδο! Λογικό είναι λοιπόν οι κατασκευαστές να δείξουν πολύ μεγάλη προσοχή σε αυτούς τους κανόνες και να τους υποστηρίξουν όσο πιο γρήγορα γίνεται.

## Custom Web Fonts

Ή αλλιώς η πλήρης απελευθέρωση από τα (βαρετά;) web-safe fonts! Με την CSS3 έχουμε επιτέλους την δυνατότητα να χρησιμοποιήσουμε fonts τα οποία δεν υπάρχουν εγκατεστημένα στον browser του χρήστη! Αυτό γίνεται με ένα απλό CSS include, το [@font-face](http://www.w3.org/TR/REC-CSS2/fonts.html#font-descriptions "@font-face CSS3 include rule"), με το οποίο δηλώνουμε στον browser την τοποθεσία και το font που πρέπει να κατεβάσει. Από εκεί και πέρα μπορούμε να χρησιμοποιήσουμε το font με το όνομα που του έχουμε ορίσει. Στο παρακάτω παράδειγμα, απλά δηλώνω το όνομα του font που γίνεται import και φυσικά την διεύθυνση που βρίσκεται το συγκεκριμένο font. Αφού λοιπόν έχει γίνει import το font στον CSS κώδικα μας, μετά μπορούμε απλούστατα να χρησιμοποιήσουμε την συγκεκριμένη γραμματοσειρά με το όνομα της, όπως κάναμε τόσο καιρό.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="JxKCd" data-user="tsevdos" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tsevdos/pen/JxKCd">
  Custom Web Fonts</a> by John Tsevdos (<a href="https://codepen.io/tsevdos">@tsevdos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Δυστυχώς η συγκεκριμένη δυνατότητα, αν και είναι μια από τις μεγαλύτερες αναβαθμίσεις στους νέους CSS κανόνες, υποστηρίζεται μόνο από τις τελευταία έκδοση του Safari, με τον Firefox και τον Opera να βρίσκονται και αυτοί αρκετά κοντά στην τελική υλοποίηση (νομίζω πως η καινούργια beta του Firefox 3 τον υποστηρίζει!). Το μόνο σίγουρο είναι πως και οι υπόλοιποι browser θα υποστηρίξουν την συγκεκριμένη δυνατότητα αργά ή γρήγορα, για τον απλούστατο λόγο πως η συγκεκριμένη δυνατότητα θα αλλάξει την τυπογραφία στο Web!

## Multi-column layout

Το τελευταίο αλλά εξίσου σημαντικό χαρακτηριστικό της CSS3 που θα παρουσιαστεί σε αυτό το άρθρο έχει να κάνει με την διάταξη (layout) στο web design. Μέχρι και την CSS2, η μόνη επιλογή που είχαμε για να παρουσιάσουμε το περιεχόμενο μας, ήταν μέσα σε κουτιά (boxes), όπως div, p, κτλ., όπου το κείμενο έρεε από αριστερά προς τα δεξιά και από πάνω προς τα κάτω, προσπαθώντας να καλύψει τον χώρο του κουτιού που το φιλοξενούσε. Εάν θέλαμε μια πιο πολύπλοκη διάταξη πέρα από την κανονική, θα έπρεπε να χρησιμοποιήσουμε πολλούς διαφορετικούς CSS κανόνες, πάνω σε πολλά διαφορετικά elements της markup μας και τις περισσότερες φορές πολλά διαφορετικά hacks, έτσι ώστε να πετύχουμε κάτι πιο λειτουργικό και εντυπωσιακό.

Ευτυχώς με την έλευση της τρίτης version του CSS, τα πράγματα αλλάζουν, μιας και μας δίνει πολλές επιπλέον δυνατότητες στο συγκεκριμένο θέμα, με πολλούς καινούργιους κανόνες για [multi-column layouts](http://www.w3.org/TR/css3-multicol/ "multi-column layout CSS3 rule"). Έτσι λοιπόν στο παρακάτω παράδειγμα το div που θα φιλοξενεί το κείμενο, θα είναι χωρισμένο σε 3 στήλες (`column-count: 3;`) με κενό 20px ανάμεσα στην κάθε στήλη (`column-gap: 20px;`) και μαύρο διαχωριστικό 1px (`column-rule: 1px solid #000;`).

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="FKzCi" data-user="tsevdos" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tsevdos/pen/FKzCi">
  Multi-column</a> by John Tsevdos (<a href="https://codepen.io/tsevdos">@tsevdos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Για ακόμα μια φορά οι επίσημοι κανόνες (`column-count`, `column-gap` και `column-rule`) δεν αναγνωρίζονται από τους browsers, ωστόσο όπως μπορείτε να παρατηρήσετε υπάρχουν οι αντίστοιχοι για τις rendering μηχανές Gecko και Webkit. Το W3C δείχνει πως έχει πάρει πολύ σοβαρά το θέμα [multi-column layouts](http://www.w3.org/TR/css3-multicol/ "multi-column layout CSS 3 rules"), για το οποίο έχει δημιουργήσει και πολλούς κανόνες (οι πιο παρατηρητικοί από εσάς θα πρόσεξαν πως έχω και σε comments άλλον έναν κανόνα για το πλάτος της κάθε στήλης, ωστόσο στο παράδειγμα μας αποφάσισα να μην το χρησιμοποιήσω). Όλοι αυτοί οι νέοι κανόνες θα ανοίξουν νέους ορίζοντες στο θέμα διάταξης (layout) του περιεχομένου και πιστεύω πως σύντομα θα δούμε πολλά sites τα οποία θα αξιοποιούν τις νέες δυνατότητες που μας παρέχονται!

## Επίλογος

Προσωπικά νιώθω ενθουσιασμένος με τις καινούργιες δυνατότητες που θα προσφέρει σε όλους εμάς το CSS3 και πραγματικά περιμένω πως και πως να υποστηρίξουν τους κανόνες της όσο πιο γρήγορα γίνεται όλοι οι κατασκευαστές browser! Οι περισσότεροι βρίσκονται ήδη σε πάρα πολύ καλό δρόμο υποστηρίζοντας ήδη είτε τους επίσημους κανόνες, είτε τους ανεπίσημους δικούς τους (κάτω από ένα δικό τους namespace) πράγμα που σημαίνει πως η περισσότερη δουλειά έχει γίνει και είναι θέμα χρόνου να υποστηρίξουν και τα επίσημα standards.

Οι νέες δυνατότητες που θα μπορούμε να χρησιμοποιούμε σύντομα, πραγματικά θα αλλάξουν τον τρόπο με τον οποίο κατασκευάζουμε ιστοσελίδες, τόσο σε styling επίπεδο, όσο και σε markup, μιας και θα βοηθήσει στον περιορισμό της χρήσης presentational και non-semantic markup. Προετοιμαστείτε κατάλληλα λοιπόν και χρησιμοποιείστε όπου νομίζετε κάποιους από τους παραπάνω κανόνες!
