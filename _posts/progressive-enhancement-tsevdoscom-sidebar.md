---
title: "Progressive enhancement: Tsevdos.com sidebar"
date: "2008-08-29"
type: "post"
categories:
  - accessibility and usability
  - css
  - javascript
  - markup
  - tutorials
tags:
  - accessibility
  - client-side
  - css
  - design
  - development
  - javascript
  - jquery
  - markup
  - xhtml
---

Το δεύτερο και ίσως αγαπημένο μου feature στο [Whitepress theme](http://www.tsevdos.com/2008/06/10/whitepress-tsevdos-com-official-wordpress-theme/ "Whitepress theme page"), είναι η AJAX-powered, αλλά ταυτόχρονα accessible sidebar του! Την τεχνική την δανείστηκα από το blog [jQuery for designers](http://jqueryfordesigners.com/ "jQuery for Designers") και πιο συγκεκριμένα από το post [jQuery Tabs](http://jqueryfordesigners.com/jquery-tabs/ "jQuery Tabs"), και ο λόγος που την λάτρεψα είναι επειδή χρησιμοποιεί σωστά αυτό που ονομάζουμε [**progressive enhancement**](http://en.wikipedia.org/wiki/Progressive_Enhancement "Proggressive Enhancement"). [**Progressive enhancement**](http://en.wikipedia.org/wiki/Progressive_Enhancement "Proggressive Enhancement") με πολύ απλά λόγια σημαίνει πως ο χρήστης έστω και εάν δεν έχει την javascript ενεργοποιημένη στον browser, η sidebar και ολόκληρο το περιεχόμενο της θα εμφανίζεται κανονικά! Το μόνο που θα χάσει ο χρήστης σε αυτήν την περίπτωση είναι το AJAX-like εφέ που δημιουργεί η Javascript (και πιο συγκεκριμένα το [**jQuery**](http://jquery.com/ "jQuery site")), ενώ θα βλέπει και όλα τα tabs ανοιχτά, το ένα κάτω από το άλλο. Όπως μπορείτε να παρατηρήσετε και από τις 2 παρακάτω εικόνες, ο χρήστης με ενεργοποιημένη Javascript έχει περισσότερο ελεύθερο χώρο στην sidebar του, και μπορεί να επιλέξει ποιο tab θα είναι ενεργοποιημένο. Αντίθετα κάποιος χρήστης με απενεργοποιημένη Javascript ή screen reader απλά βλέπει κανονικά και στην σειρά όλο το περιεχόμενο της sidebar με την σειρά που εμφανίζεται στην markup!

[![](https://i0.wp.com/farm4.static.flickr.com/3290/2623495243_501f967f9b_m.jpg?resize=240%2C153 "Tsevdos.com with Javascript on")](https://i0.wp.com/farm4.static.flickr.com/3290/2623495243_390f5fcf09_o.jpg "Tsevdos.com with Javascript on")

Η sidebar όπως εμφανίζεται σε browser που έχει ενεργοποιημένη την Javascript.

[![](https://i0.wp.com/farm4.static.flickr.com/3029/2624319292_d58206f508_m.jpg?resize=240%2C153 "Tsevdos.com with Javascript off")](https://i2.wp.com/farm4.static.flickr.com/3029/2624319292_ea21274a88_o.jpg "Tsevdos.com with Javascript off")

Η sidebar όπως εμφανίζεται σε browser που **δεν** έχει ενεργοποιημένη την Javascript.

## Η markup (XHTML)

Ας δούμε όμως πως μπορούμε να φτιάξουμε το συγκεκριμένο εφέ εύκολα και γρήγορα. Εν αρχή λοιπόν (όπως πάντα) η markup μας.

```html
<div id="sidebar">
  <ul id="navigation">
    <li>
      <a href="#first_div" title="First container">Section 1</a>
    </li>

    <li>
      <a href="#second_div" title="Second container">Section 2</a>
    </li>

    <li>
      <a href="#third_div" title="Third container">Section 3</a>
    </li>
  </ul>

  <div id="first_div">...</div>
  <div id="second_div">...</div>
  <div id="third_div">...</div>
</div>
```

Όπως βλέπεται ένα div με το id sidebar, περιέχει μια unordered list (ul), με τρία list items (li), τα οποία στην ουσία λειτουργούν ως navigation list για τα τρία divs που ακολουθούν και θα περιέχουν το περιεχόμενο μας. Φυσικά η navigation list μπορεί να έχει περισσότερα links, αρκεί να υπάρχουν και τα ανάλογα divs περιεχομένου από κάτω. Αυτό ήταν, η markup είναι έτοιμη! Το μόνο που θα πρέπει να προσέξει κάποιος (θα εξηγήσω παρακάτω το γιατί), είναι πως σε περίπτωση που θέλει να προσθέσει επιπλέον ζευγάρια links και divs (για να έχει επιπλέον tabs και περιεχόμενο δηλαδή), θα πρέπει το link μέσα στο list item, να έχει για href attribute ακριβώς το ίδιο string με το id του div που θα προσθέσει. Όπως ήδη μπορείτε να δείτε, όλα τα links έχουν για href attribute τα id των div που θα εμφανίζουν.

## CSS

To styling (CSS) της συγκεκριμένης markup δεν παίζει κανέναν απολύτως ρόλο στον κώδικα μας (όλη η δουλειά γίνεται μέσω Javascript/jQuery), ωστόσο γι αυτούς που θέλουν να δημιουργήσουν κάτι στα γρήγορα, ας αντιγράψουν τον παρακάτω κώδικα, τον οποίο χρησιμοποιώ και στο παράδειγμα που μπορείτε να [δείτε](/uploads/sidebar/sidebar-example.html "Sidebar live example") και φυσικά να [κατεβάσετε](/uploads/sidebar/sidebar.zip "Download sidebar example")!

```css
* {
  margin: 0;
  padding: 0;
}

#sidebar {
  width: 500px;
  margin: 20px;
  margin-bottom: 15px;
  border-left: 1px solid #999;
}

#navigation {
  list-style-type: none;
}

a:link,
a:visited {
  color: #fff;
  background: #ccc;
  padding: 1px 5px 0;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active,
a.selected {
  color: #fff;
  background: #999;
}

#navigation li {
  list-style-type: none;
  float: left;
  border: 1px solid #999;
  border-width: 1px 1px 0 0;
}

#sidebar div {
  clear: left;
  padding: 10px;
  border: 1px solid #999;
  border-width: 1px 1px 1px 0;
}
```

## Και τέλος η Javascript (jQuery)

Και επιτέλους περνάμε στην καρδιά αυτού του tutorial, δηλαδή στην Javascript και το [jQuery](http://jquery.com/ "jQuery library") πιο συγκεκριμένα! Για τους ανυπόμονους, ο κώδικας είναι ο παρακάτω, ωστόσο καλό θα είναι να τον εξηγήσουμε και λίγο, γιατί πολλά πράγματα γίνονται, μέσα σε πολύ λίγες γραμμές κώδικα&#8230;

```js
$(document).ready(function () {
  $("#sidebar #navigation li a")
    .click(function () {
      $("#sidebar > div").hide().filter(this.hash).fadeIn();
      $("#sidebar #navigation li a").removeClass("selected");
      $(this).addClass("selected");
      return false;
    })
    .filter(":first")
    .click();
});
```

Στην πρώτη γραμμή λοιπόν, δηλώνουμε στην markup πως θα κάνουμε χρήση της [jQuery library](http://jquery.com/ "jQuery site"). Η συγκεκριμένη library (όπως και οι περισσότερες άλλωστε) λειτουργεί όταν το [DOM (Document Object Model)](http://en.wikipedia.org/wiki/Document_Object_Model "What is DOM") είναι έτοιμο. Αυτό ακριβώς κάνει ο παρακάτω κώδικας. Μέσα του θα προσθέσουμε όλον το Javascript κώδικα ο οποίος με την βοήθεια και της βιβλιοθήκης θα δημιουργήσει το εφέ μας.

```js
$(document).ready(function(){
...
});
```

Επιλέγουμε λοιπόν τα links (anchor elements) που βρίσκονται μέσα στην unordered list με id navigation, και τους προσθέτουμε ένα απλό click event. Με άλλα όταν γίνει click σε κάποιο link της λίστας, τότε ο κώδικας που βρίσκεται ανάμεσα στις αγκύλες ενεργοποιήται.

```js
$('#sidebar #navigation li a').click(function() {
...
});
```

Και πάμε πλέον στο τι γίνεται όταν πατηθεί κάποιο από τα παραπάνω links. Αρχικά επιλέγουμε όλα τα divs της sidebar (#sidebar > div) και τα κρύβουμε (hide()). Ταυτόχρονα εμφανίζουμε το div (με ένα απλό fadeIn εφέ) το οποίο έχει id ίδια τιμή με το string της href attribute του link (hash). Για τον λόγο αυτό σας προειδοποίησα παραπάνω πως πρέπει να προσέξουμε πολύ στην markup μας αυτήν την μικρή λεπτομέρεια. Εάν δεν έχουν ίδια τιμή ο κώδικας απλά δεν παίζει&#8230; Για να το κάνω ακόμα πιο κατανοητό (για αυτούς που κάνουν τώρα τα πρώτα τους βήματα σε jQuery), ας υποθέσουμε πως πατήθηκε το link Section 1, το οποίο έχει για href attribute την τιμή &#8220;#first_div&#8221;. Μόλις γίνει click λοιπόν, το jQuery θα κρύψει όλα τα divs της sidebar, και θα επιλέξει το div το οποίο έχει για id την τιμή #first_div. Αυτό γίνεται επειδή το this.hash εκείνη την στιγμή παίρνει την τιμή #first_div. Μόλις ολοκληρωθεί και αυτό, απλά εμφανίζουμε με fade in το συγκεκριμένο div. Και όλα αυτά γίνονται μόλις σε 1 γραμμή κώδικα!

```js
$("#sidebar > div").hide().filter(this.hash).fadeIn();
```

Ευτυχώς ο υπόλοιπος κώδικας είναι πολύ πιο κατανοητός και εύκολος. Στις παρακάτω 3 γραμμές απλά επιλέγουμε όλα τα links και τους αφαιρούμε (εάν έχουν, όμως πάντα ένα link θα έχει) την κλάση &#8220;selected&#8221;, η οποία και δίνει το ανάλογο style στο επιλεγμένο link. Τέλος προσθέτουμε στο link που έχει γίνει το click την κλάση &#8220;selected&#8221;, έτσι ώστε να φαίνεται πως είναι επιλεγμένο (highlighted), και δηλώνουμε στον browser να σταματήσει την default ενέργεια του click event (return false;), μιας και έχουμε πετύχει το εφέ που θέλουμε!

```js
$("#sidebar #navigation li a").removeClass("selected");
$(this).addClass("selected");
return false;
```

Τέλος σε όλο αυτό το click event προσθέτουμε ένα από τα αγαπημένα μου χαρακτηριστικά που έχει το jQuery. Φιλτράρουμε το πρώτο element που έχει επιλεχθεί, δηλαδή το πρώτο link της λίστας μας, και κάνουμε click πάνω του, μέσω κώδικα! Έτσι όταν στο τέλος εμφανίζεται η σελίδα το πρώτο link (ή tab ή όπως αλλιώς θέλετε να το πείτε), θα είναι πάντα επιλεγμένο!!! Αυτό ήταν, είναι έτοιμο, δουλεύει και πάνω από όλα, είναι φιλικό προς όλους τους χρήστες! Δοκιμάστε να απενεργοποιήσετε την Javascript και θα δείτε πως θα συνεχίζει να δουλεύει χωρίς κανένα πρόβλημα, απλά θα χάσει λίγη από την μαγεία του&#8230;

```js
.filter(':first').click();
```

## Επίλογος

To [jQuery](http://jquery.com/ "jQuery library") είναι πραγματικά μια φανταστική Javascript library η οποία κάνει τα δύσκολα πράγματα απλά! Όπως βλέπεται μέσα σε μόλις 6-7 γραμμές κώδικα έχουμε ένα πολύ όμορφο και accessible αποτέλεσμα το οποίο μπορεί να χρησιμοποιηθεί παντού! Η δυνατότητα του να κάνεις εύκολα και γρήγορα αυτά που έχεις στο μυαλό σου, χωρίς να σε απασχολούν οι μικρολεπτομέρειες τις Javascript (οι οποίες πιστέψτε με είναι πολλές και ενοχλητικές), είναι αυτό που κάνει το [jQuery](http://jquery.com/ "jQuery library") να ξεχωρίζει από τις άλλες libraries. Τέλος για όσους θέλουν μια ακόμα πιο εύκολη και φυσικά accessible λύση καλό θα είναι να ρίξουν και μια ματιά στο [UI Tabs](http://docs.jquery.com/UI/Tabs "UI plug in for jQuery") το οποίο είναι ένα επίσημο plug-in για το [jQuery](http://jquery.com/ "jQuery library") και κάνει με πολύ λιγότερο κόπο αυτό που δημιουργήσαμε παραπάνω ()&#8230;

- [**Δείτε το παράδειγμα στον browser σας**](/uploads/sidebar/sidebar-example.html "See live example")
- [**Κατεβάστε τα αρχεία του tutorial**](/uploads/sidebar/sidebar.zip "Download sidebar files")
