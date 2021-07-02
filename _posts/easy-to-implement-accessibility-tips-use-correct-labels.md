---
title: "Εύκολα στην υλοποίηση accessibility tips: Χρησιμοποιήστε (σωστά) labels στις  φόρμες σας."
date: "2009-11-17"
type: "post"
categories:
  - accessibility and usability
  - markup
tags:
  - accessibility
  - forms
  - html
  - markup
  - xhtml
  - φόρμες
---

Ένα πανεύκολο και πολύ απλό στην υλοποίηση accessibility tip που δυστυχώς δεν το συντάω συχνά σε ελληνικά site. Τα πράγματα είναι εξαιρετικά απλά σε αυτό το θέμα. Ο μοναδικός σκοπός του label (ετικέτα) element είναι να &"συνδέεται" και να περιγράφει όσο καλύτερα μπορεί ένα και μοναδικό form control, όπως για παράδειγμα checkbox, radio button, text input κτλ. (εκτός από τα buttons φυσικά). Αντιθέτως, κάθε form control μπορεί "συνδεθεί" με πολλά label elements, έτσι ώστε να παρουσιάσει μηνύματα βοήθειας, λάθους κτλ. Οι δύο παρακάτω τρόποι κάνουν σωστή χρήση του label element. Προσωπικά προτιμώ τον πρώτο γιατί σου αφήνει περισσότερα περιθώρια ελευθερίας τόσο σε markup όσο και σε styling επίπεδο...

```html
<label for="name">Όνομα:</label>
<input id="name" name="name" type="text" />

<label>
  Όνομα:
  <input id="name" name="name" type="text" />
</label>
```

Τα accessibility οφέλη που παίρνουμε είναι πως τα παραπάνω labels ενεργοποιούν κατευθείαν τα controls που περιγράφουν, κάτι πολύ σημαντικό για την ευκολότερη συμπλήρωση φορμών. Πολλά controls είναι μικρά, δυσδιάκριτα και δύσκολα στο να επιλεχθούν (ειδικά τα radio buttons), οπότε επιλέγοντας το κείμενο της ετικέτας μας (label) επιλέγουμε αυτόματα και το ανάλογο control. Τέλος ας μην ξεχνάμε πως βοηθάμε πολύ και τους χρήστες text browser και screen readers...
