---
title: "Θάψτε άφοβα... με attribute :-)"
date: "2008-11-02"
type: "post"
categories:
  - blogging tips
  - markup
  - SEO
tags:
  - backlinks
  - html
  - links
  - nofollow
  - SEO
  - xhtml
---

Πολλές φορές μου έχει τύχει να θέλω να παρουσιάσω κάποιο site αλλά ταυτόχρονα να μην θέλω να του δώσω [backlink](http://en.wikipedia.org/wiki/Backlink "backlink expaination"), είτε γιατί το παρουσιάζω ως παράδειγμα προς αποφυγή, είτε επειδή κλέβει κάποιο άλλο site (οπότε γιατί να του δώσω και εύσημα) είτε για κάποιον άλλο, σοβαρό πάντα, λόγο.

Όπως όλοι γνωρίζεται τα [backlinks](http://en.wikipedia.org/wiki/Backlink "backlink expaination") παίζουν μεγάλο ρόλο στο [SEO](http://en.wikipedia.org/wiki/Search_engine_optimization "SEO explaination") κομμάτι ενός site, μιας και με κάθε backlink, ενισχύεται η φήμη του site, με την λογική πως όσα πιο πολλά τα backlinks, τόσο πιο έγκυρο, χρήσιμο, ποιοτικό, κτλ κτλ. είναι το site.

Για να επανέλθω στο θέμα μας τώρα, έστω πως θέλω να παρουσιάσω σε όλους σας ένα site, χωρίς να του δώσω backlink. Αυτό γίνεται πολύ εύκολα, προσθέτοντας στο link ένα relationship attribute, με την τιμή &#8220;nofollow&#8221;. Και για όσους μπερδεύτηκαν ας ρίξουν μια ματιά στον παρακάτω κώδικα.

```html
<a rel="nofollow" href="http://www.some-site.com/">site που δεν εγκρίνω</a>
```

Με αυτόν τον απλό τρόπο δηλώνω στα Google (αλλά και Yahoo/MSN) [bots](http://en.wikipedia.org/wiki/Internet_bot "Bots") να μην κατοχυρώσουν το εν λόγω link ως backlink. Έτσι το site που παρουσιάζω, αλλά δεν εγκρίνω, δεν επωφελείται καθόλου από το link μου. Έχετε την εν λόγω λειτουργία υπόψη σας, ποτέ δεν ξέρετε πότε θα σας χρειαστεί&#8230;
