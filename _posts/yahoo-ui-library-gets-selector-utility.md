---
title: "H Yahoo! UI Library προσθέτει selector utility"
date: "2007-12-05"
type: "post"
categories:
  - javascript
tags:
  - ajax
  - effects
  - javascript
  - jquery
  - library
  - ui
  - yahoo
---

Η γνωστή effects, Ajax και γενικότερα UI (user interface) [**library της Yahoo!**](http://developer.yahoo.com/yui/ "Yahoo! UI") απέκτησε ένα ολοκαίνουργιο [**selector utility**](http://developer.yahoo.com/yui/selector/ "Yahoo! UI selector Utility") το οποίο αντιγράφει την μέθοδο επιλογής του [jQuery](http://jquery.com/ "jQuery library") στην [**Yahoo! UΙ library**](http://developer.yahoo.com/yui/ "Yahoo! UI")! Έτσι χρησιμοποιώντας κάποιος την library της [Yahoo!](http://www.yahoo.com/ "Yahoo!") μπορεί πλέον να επιλέξει κάποιο element με τον γνωστό [jQuery](http://jquery.com/ "Jquery") τρόπο:

```js
var p_nodes = YAHOO.util.Selector.query("p");
```

Όπως φαίνεται όλες οι Javascript/AJAX libraries έχουν αρχίσει να καταλαβαίνουν πόσο δυνατό είναι το [jQuery](http://jquery.com/ "jQuery library") στον συγκεκριμένο τομέα και προσπαθούν να το εντάξουν στην εκάστοτε library τους. Προσωπικά θα συνεχίσω να χρησιμοποιώ το [jQuery](http://jquery.com/ "jQuery library") γιατί εκτός από το ότι είναι απλό, με πολλές δυνατότητες και πολύ εύκολο στην εκμάθηση, είναι και πολύ πιο ελαφρύ σε file size συγκρινόμενο με άλλες libraries (ιδιαίτερα με την [**Yahoo! UΙ library**](http://developer.yahoo.com/yui/ "Yahoo! UI")).
