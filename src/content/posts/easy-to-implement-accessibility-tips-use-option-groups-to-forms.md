---
title: "Εύκολα στην υλοποίηση accessibility tips: Χρησιμοποιήστε option groups στις φόρμες σας."
date: "2009-10-12"
type: "post"
categories:
  - accessibility and usability
  - markup
tags:
  - accessibility
  - forms
  - html
  - markup
  - option group
  - xhtml
  - φόρμες
---

Ένα πανεύκολο tip που θα ωφελήσει όλες τις κατηγορίες χρηστών σας και θα κάνει τις φόρμες σας ομορφότερες αλλά και ευκολότερες στο να συμπληρωθούν. Εάν λοιπόν έχετε κάποιο select element  με πολλά option elements, καλό θα ήταν να τα κατηγοριοποιήσετε χρησιμοποιώντας τα **option groups**.

Η χρήση τους είναι εξαιρετικά απλή, απλά ονομάζεται το group δίνοντας του ένα όνομα (label) και στην συνέχεια του προσθέτεται τα option elements που θέλετε. Ρίξτε μια ματιά παρακάτω και προσπαθήστε να το χρησιμοποιήσετε την επόμενη φορά που θα έχετε μια λίστα με πολλές επιλογές...

```html
<label for="bestepisode">Διάλεξε το καλύτερο επεισόδιο τριλογίας!</label>
<select name="bestepisode" id="bestepisode">
  <optgroup label="Star Wars">
    <option value="starwars4">The Star Wars</option>
    <option value="starwars5">The Empire Strikes Back</option>
    <option value="starwars6">Return of the Jedi</option>
  </optgroup>
  <optgroup label="Indiana Jones">
    <option value="ij1">Raiders of the Lost Ark</option>
    <option value="ij2">The Temple of Doom</option>
    <option value="ij3">The Last Crusade</option>
  </optgroup>
  <optgroup label="Matrix">
    <option value="matrix1">The Matrix</option>
    <option value="matrix2">The Matrix Reloaded</option>
    <option value="matrix3">The Matrix Revolutions</option>
  </optgroup>
</select>
```
