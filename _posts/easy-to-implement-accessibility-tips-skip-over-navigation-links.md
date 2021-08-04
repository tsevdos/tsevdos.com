---
title: "Εύκολα στην υλοποίηση accessibility tips: Οδηγείστε τους χρήστες screen readers / text browsers κατευθείαν στο περιεχόμενο ή όπου αλλού θέλετε."
date: "2009-08-23"
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

Ένα πανεύκολο στην υλοποίηση accessibility feature, που θα βοηθήσει αφάνταστα τους screen readers και τους χρήστες που χρησιμοποιούν text-browsers. Το μόνο που πρέπει να κάνετε είναι στην αρχή κάθε document, να προσθέσετε τα links που θα οδηγούν τον χρήστη κατευθείαν στο σημείο που έχετε ορίσει. Έτσι για παράδειγμα, σε αυτό το site, το πρώτο πράγμα που "εμφανίζεται" στην markup μου είναι μια λίστα με αυτά τα links (μέσα σε ένα div).

```html
<div id="accessibilitylinks">
  <ul>
    <li><a title="Go to content" href="#content">Skip to content</a></li>
    <li>
      <a title="Go to main navigation" href="#navigation">Skip to main navigation</a>
    </li>
    <li><a title="Go to Search form" href="#search">Skip to Search form</a></li>
  </ul>
</div>
```

Με τον παραπάνω κώδικα, οι χρήστες screen reader μπορούν πολύ εύκολα - στην κυριολεξία με ένα κλικ - να μετακινηθούν στο περιεχόμενο της σελίδας μου, στο navigation ή στην search form. Φυσικά μπορούμε να εφαρμόσουμε και όλους τους γνωστούς styling κανόνες στην λίστα έτσι ώστε να την διαμορφώσουμε όπως θέλουμε. Καλό θα είναι εάν θέλουμε να την κρύψουμε, να μην χρησιμοποιήσουμε τον κανόνα `display:none` αλλά να την κρύψουμε με κάποιο άλλο τρόπο (πχ. `absolute position`), και αυτό γιατί πολλοί screen readers/text browsers δεν διαβάζουν τα elements με `display:none`. Για παράδειγμα, εγώ κρύβω την συγκεκριμένη λίστα links με τον παρακάτω κώδικα:

```css
#accessibilitylinks {
  position: absolute;
  top: -1000px;
}
```

Είναι πραγματικά το πιο εύκολο αλλά και πρακτικό usability χαρακτηριστικό που μπορείτε να έχετε στην σελίδα σας!
