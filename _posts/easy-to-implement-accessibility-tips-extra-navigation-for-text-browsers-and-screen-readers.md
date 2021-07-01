---
title: "Εύκολα στην υλοποίηση accessibility tips: Extra navigation για text browsers / screen readers (και όχι μόνο)"
date: "2009-07-30"
type: "post"
categories:
  - accessibility and usability
  - markup
tags:
  - accessibility
  - browsers
  - html
  - markup
  - navigation
  - screen readers
  - text browsers
  - xhtml
---

Η αλήθεια είναι πως όσο καλός και ενημερωμένος να είσαι στο χώρο του web, πάντα υπάρχει κάτι καινούργιο να μάθεις. Επειδή λοιπόν και εγώ πρόσφατα (πριν από έναν χρόνο για την ακρίβεια, αλλά ας μείνουμε στο πρόσφατα), ανακάλυψα μερικά ενδιαφέροντα και πολύ εύκολα στην υλοποίηση accessibility tips, θα τα παρουσιάσω σε αυτή την μίνι σειρά post.

Οι περισσότεροι γνωρίζετε το [link element](http://www.w3.org/TR/REC-html40/struct/links.html#h-12.3 "Link element") που βάζουμε στο head κομμάτι του κώδικα μας, και δηλώνει πως το εν λόγω document έχει κάποια σχέση (relationship - rel) με κάποιο άλλο document ή πηγή. Ο πιο κλασικός τρόπος χρήσης του είναι η εισαγωγή κάποιου εξωτερικού stylesheet (CSS), όπως για παράδειγμα :

```html
<link rel="stylesheet" href="default.css" type="text/css" media="screen" />
```

Αυτό που δεν γνωρίζουν οι περισσότεροι, είναι πως με το εν λόγω element μπορούμε να προσφέρουμε επιπλέον navigation χαρακτηριστικά στους χρήστες screen readers, text browsers αλλά και σε κάποιους κανονικούς browsers (όπως Opera) οι οποίοι αρχίζουν να υποστηρίζουν και αυτήν την ιδιότητα του link element. Μερικά παραδείγματα και τρόπους χρήσης του μπορείτε να δείτε παρακάτω :

```html
<link rel="home" title="Home" href="http://www.tsevdos.com/" />
<link
  rel="prev"
  title="Title of previous page"
  href="http://www.tsevdos.com/</code><code>previous-page"
/>
<link
  rel="next"
  title="Title of next page"
  href="http://www.tsevdos.com/</code><code>next-page"
/>
```

Όπως βλέπεται η χρήση του είναι πανεύκολη και τα πλεονεκτήματα αρκετά, έτσι ώστε να το χρησιμοποιήσουμε.

Τέλος το συγκεκριμένο tag μπορεί να χρησιμοποιηθεί και για άλλους σκοπούς, όπως για παράδειγμα στο να [ενημερώσει τις μηχανές αναζήτησης εάν το περιεχόμενο της σελίδας μας υπάρχει και σε άλλες γλώσσες ή σε άλλη μορφή](http://www.w3.org/TR/REC-html40/struct/links.html#h-12.3.3 "Links and search engines"). Παρακάτω μπορείτε να βρείτε τα ανάλογα παραδείγματα, ωστόσο δεν θα σταθώ πολύ σε αυτά μιας και θέλω στο συγκεκριμένο post να συγκεντρωθώ κυρίως στο θέμα προσβασημότητας/accessibility. Όπως και να έχει ρίξτε οπωσδήποτε μια πιο λεπτομερή ματιά στο [link element](http://www.w3.org/TR/REC-html40/struct/links.html#h-12.3 "Link element") και δεν θα χάσετε.

```html
<link
  lang="fr"
  title="La documentation en Français"
  type="text/html"
  rel="alternate"
  hreflang="fr"
  href="http://someplace.com/manual/french.html"
/>
<link
  media="print"
  title="The manual in postscript"
  type="application/postscript"
  rel="alternate"
  href="http://someplace.com/manual/postscript.ps"
/>
<link
  rel="Start"
  title="The first page of the manual"
  type="text/html"
  href="http://someplace.com/manual/start.html"
/>
```

Μείνετε συντονισμένοι και για τα επόμενα!
