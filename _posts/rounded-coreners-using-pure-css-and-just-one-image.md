---
title: "Στρογγυλές γωνίες (rounded corners) χρησιμοποιώντας μόνο CSS και 1 γραφικό"
date: "2008-07-10"
type: "post"
categories:
  - css
  - markup
  - tutorials
tags:
  - client-side
  - css
  - design
  - development
  - html
  - javascript
  - markup
  - xhtml
---

Από καιρό ήθελα να γράψω ένα tutorial με θέμα τις στρογγυλές γωνίες (rounded corners) και την HTML/CSS που κρύβεται πίσω από ένα τέτοιο εγχείρημα, όμως πάντα κάτι τύχαινε και δεν το έγραφα. Σήμερα λοιπόν έχετε την ευκαιρία να διαβάσετε ένα πολύ ενδιαφέρον tutorial πάνω στο θέμα, στο οποίο χρησιμοποιώ και πολλές άλλες ενδιαφέρουσες τεχνικές σε CSS κυρίως επίπεδο.

Ας αρχίσουμε λοιπόν φτιάχνοντας ένα div (division) το οποίο θα περιέχει το κείμενο μας (του δίνω και μία κλάση/class έτσι ώστε να ξεχωρίσει από τα υπόλοιπα), και εφαρμόζω κάποια βασικά styles έτσι ώστε να φαίνεται καλύτερα.

```html
<div class="rounded">Κείμενο...</div>
```

```css
* {
  margin: 0;
  padding: 0;
}

body {
  padding: 20px;
}

div.rounded {
  margin-bottom: 10px;
  padding: 10px;
  background: #999;
}
```

Αναγκαίο κακό εάν θέλουμε στρογγυλές γωνίες στο web, είναι η extra non-semantic markup (ούτε και εμένα μ αρέσει, αλλά δεν γίνεται αλλιώς), οπότε βάζουμε αναγκαστικά άλλα 4 span elements μέσα στο div μας, ένα για κάθε γωνία.

```html
<div class="rounded">
  <span class="tl"> </span>
  <span class="tr"> </span>&nbsp; Κείμενο... &nbsp;
</div>
```

Και τώρα μπορούν να αρχίσουν τα ωραία ;-). Το γραφικό που χρησιμοποιώ είναι ένας κύκλος με διάμετρο 20px (width και height). Αυτό που θέλω να πετύχω είναι όλα τα span elements, να δείχνουν αυτόν τον κύκλο, αλλά διαφορετικό κομμάτι του κάθε φορά! Ας γράψουμε λοιπόν τους γενικούς κανόνες για τα span elements, αφού προσθέσουμε άλλον έναν σημαντικό κανόνα για το positioning στο div μας. (Το γραφικό που χρησιμοποιώ μπορείτε να το κατεβάσετε από [εδώ](https://i2.wp.com/farm4.static.flickr.com/3248/2653187323_57a5ee13be_o.gif?resize=20%2C20 "circle"))

```css
div.rounded {
  margin-bottom: 10px;
  padding: 10px;
  background: #999;
  position: relative;
}

div.rounded span {
  width: 10px;
  height: 10px;
  background-image: url(circle.gif);
  background-repeat: no-repeat;
  position: absolute;
}
```

Με τον κανόνα που πρόσθεσα στο div (position: relative;) θα μπορέσω στην συνέχεια να τοποθετήσω τα span elements ακριβώς εκεί που θέλω με absolute positioning. Τα span προς το παρόν, απλά δείχνουν πάντα την πάνω αριστερή μεριά του κύκλου. Μην ξεχνάτε πως τα span είναι 10px (ύψος-πλάτος) ενώ οι διαστάσεις του γραφικού είναι 20px! Επίσης ρυθμίζω να μην επαναλαμβάνεται το γραφικό στο background, αν και ο συγκεκριμένος κανόνας δεν χρειάζεται, τον έχω προσθέσει για σιγουριά.

Τέλος απλά τοποθετούμε το κάθε span στην σωστή γωνία με absolute positioning (το tl πάνω αριστερά &#8211; top left, το tr πάνω δεξιά &#8211; top right, κοκ.). Αυτό γίνεται πολύ εύκολα με τους positioning κανόνες top, left, right και bottom και τις ανάλογες τιμές τους (0 στο παράδειγμα μας, μιας και θέλουμε να βρίσκονται ακριβώς στις γωνίες του div). Είναι σχεδόν έτοιμο, το μόνο που πρέπει να κάνουμε τώρα είναι να παρουσιάζουμε το σωστό κομμάτι του κύκλου/γραφικού μας στο κάθε span. Αυτό γίνεται με background-positioning στο καθένα από τα span μας!

```css
span.tl {
  top: 0;
  left: 0;
  background-position: top left;
}

span.tr {
  top: 0;
  right: 0;
  background-position: top right;
}

span.bl {
  bottom: 0;
  left: 0;
  background-position: bottom left;
}

span.br {
  bottom: 0;
  right: 0;
  background-position: bottom right;
}
```

Για όσους δεν έπιασαν το τελευταίο κομμάτι (μιας και οι προηγούμενοι κανόνες είναι πιο ξεκάθαροι) θα τους πρότεινα να βάλουν και τον παρακάτω κανόνα στον κώδικα τους και να παρατηρήσουν τις γωνίες τους! Όπως βλέπεται, το γραφικό που έχουν είναι πάντα το ίδιο, απλά το span με κλάση/class tl (top left), εμφανίζει την πάνω αριστερή μεριά του κύκλου, μιας και το span δείχνει μόνο 10px σε ύψος και πλάτος από τα 20px που έχει συνολικά το image μας. Έτσι εμφανίζουμε μόνο την μεριά του κύκλου που θέλουμε σε κάθε γωνία μας.

```css
div.rounded span {
  border: 1px solid red;
}
```

Τέλος για τους λάτρεις του [jQuery](http://jquery.com/ "jQuery library") αλλά και της καθαρής markup, στο [**παράδειγμα** που έχω ανεβάσει](/uploads/rounded_corners/rounded_corners.html "Rounded corners example by Tsevdos.com"), έχω φτιάξει άλλο ένα div, στο οποίο έχω προσθέσει μέσω DOM την απαραίτητα markup του παραπάνω παραδείγματος. Έτσι προσθέτοντας μία μόνο γραμμή Javascipt (και το jQuery φυσικά), μπορούμε να απολαύσουμε την πεντακάθαρη markup έχοντας το ίδιο φυσικά αποτέλεσμα! Δείτε τον παρακάτω κώδικα (ή το για όσους βαριούνται να πληκτρολογούν το δεύτερο div, απλά δείτε το δεύτερο div του [παραδείγματος](/uploads/rounded_corners/rounded_corners.html "Rounded corners example by Tsevdos.com")) και θα καταλάβετε τι εννοώ.

```html
<div class="rounded jquery">Κείμενο...</div>
```

```js
$(document).ready(function () {
  $(".jquery").prepend("").append("");
});
```

Το μόνο πρόβλημα σε αυτήν την περίπτωση είναι πως εάν ο χρήστης δεν έχει ενεργοποιημένη την Javascript, δεν θα δει στρογγυλές τις γωνίες του div, μιας και αυτές &#8220;εισχωρούν&#8221; στο DOM μέσω Javascript. Το τελικό αποτέλεσμα μπορείτε να το [δείτε](/uploads/rounded_corners/rounded_corners.html "Rounded corners example by Tsevdos.com") αλλά και να το [**κατεβάσετε**](uploads/rounded_corners/rounded_corners.zip "Download rounded corners example by Tsevdos.com") (σε zip format).

Η συγκεκριμένη τεχνική δουλεύει σε όλους τους μοντέρνους browsers, αλλά όχι στον IE6 (ο οποίος δεν είναι μοντέρνος, απλά πολλοί χρήστες τον χρησιμοποιούν ακόμα)! Εάν λοιπόν δεν σας ενδιαφέρει ο συγκεκριμένος browser (εδώ δεν ενδιαφέρει την [37signals](http://37signals.blogs.com/products/2008/07/basecamp-phasin.html "37signals and IE6")) μπορείτε να χρησιμοποιήσετε την συγκεκριμένη τεχνική αμέσως! Εάν πάλι σας ενδιαφέρει και ο IE6 καλό θα είναι να δοκιμάσετε κάποια ανάλογη τεχνική με floats και 4 images (δυστυχώς)&#8230; Περιμένω σχόλια και προτάσεις για tutorials (yes, I&#8217;m on fire!!! 😉 )&#8230;
