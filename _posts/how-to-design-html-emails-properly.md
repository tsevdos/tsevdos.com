---
title: "HTML e-mails και πως πρέπει να σχεδιάζονται"
date: "2007-12-20"
type: "post"
categories:
  - articles
  - css
  - markup
tags:
  - clients
  - css
  - design
  - development
  - email
  - html
  - rendering
---

Αν και έχουν γίνει αρκετά βήματα μπροστά στο θέμα HTML e-mails/newsletters, όπως το [Email Standards Project](http://www.email-standards.org/ "Email Standards Project") (όπως έχω αναφέρει και σε παλιότερο [post](http://www.tsevdos.com/2007/11/29/email-standards-project/ "Tsevdos.com and Email Standards Project")), τα πράγματα για τους developers παραμένουν άσχημα, μιας και οι mail clients εκτός από από πολλοί, έχουν μείνει και αρκετά πίσω στο θέμα rendering HTML περιεχομένου. Οι περισσότεροι, για λόγους ασφαλείας κυρίως, κόβουν πολλά χαρακτηριστικά όπως Javascript, CSS και πολλές φορές ακόμα και εικόνες, οπότε η κατάσταση είναι δύσκολο να ελεγχθεί από τον developer/designer που έχει αναλάβει την δημιουργία του περιεχομένου! Επιπλέον πρόβλημα είναι και η ύπαρξη on-line αλλά και off-line (desktop) mail clients, όπου ο καθένας ακολουθεί τους δικούς του κανόνες στο τι θα κάνει render και με ποιον τρόπο! Το παρακάτω άρθρο θα προσπαθήσει να δώσει συμβουλές αλλά και να προβάλει τεχνικές έτσι ώστε να σχεδιάζετε καλύτερα και πιο συμβατά HTML mails.

Το πρώτο πράγμα που πρέπει να ασπαστείται είναι η [**inline CSS**](http://www.tizag.com/cssT/inline.php "inline CSS")! Αν και στο web design η [**inline CSS**](http://www.tizag.com/cssT/inline.php "inline CSS") θεωρείτε τόσο κακή πρακτική όσο και τα παλιομοδίτικα font tags, στην περίπτωση των HTML mails η [**inline CSS**](http://www.tizag.com/cssT/inline.php "inline CSS") είναι το μόνο είδος [**CSS**](http://www.w3.org/Style/CSS/ "What is CSS") που λειτουργεί στους περισσότερους clients! Έτσι εάν θέλετε να χρησιμοποιήσετε σε κάποιο span element Arial font, σε γκρι χρώμα και bold, ο κανόνας που πρέπει να γράψετε (inline) είναι ο εξής :

```html
<span style="font-family: Arial; color: #cccccc; font-weight: bold">
  Span element με Arial font, γκρι χρώμα και bold!
</span>
```

Από εκεί και πέρα προσπαθήστε να χρησιμοποιήσετε τις βασικές CSS properties οι οποίες υποστηρίζονται στους περισσότερους clients, και αποφύγετε τις πιο σπάνιες (όπως πχ list-style-image). Παρακάτω συγκέντρωσα μία λίστα η οποία εξηγεί τι εννοώ γράφοντας βασικές properties. Την λίστα την έφτιαξα μετά από μελέτη ενός καταπληκτικού άρθρου πάνω στο θέμα το οποίο έχει κάνει ολόκληρη μελέτη για το [ποιες CSS properties υποστηρίζονται και ποιες όχι](http://www.campaignmonitor.com/blog/archives/2006/03/a_guide_to_css_support_in_emai.html "CSS properties that mail clients support") (γράφτηκε το 2006, αλλά υπάρχει και το [2007 review](http://www.campaignmonitor.com/blog/archives/2007/04/a_guide_to_css_support_in_emai_2.html "CSS properties that mail clients support 2007 edition")).

- color
- background-color
- border
- font-family
- font-size
- font-style
- font-variant
- font-weight
- letter-spacing
- line-height
- margin
- padding
- text-align
- text-decoration
- text-transform

Κάποιοι παρατηρητικοί θα είδαν πως στις παραπάνω CSS properties δεν αναφέρω πουθενά [positioning properties](http://www.w3schools.com/css/css_positioning.asp "Positioning properties"). Ο λόγος είναι πολύ απλός, για HTML e-mail (και μόνο για τον συγκεκριμένο λόγο) η καλύτερη λύση είναι να χρησιμοποιήσετε **tables**! Το ξέρω πως σε αυτό το blog γράφω πάντα κατά των tables και υποστηρίζω τις μοντέρνες web design τεχνικές, αλλά στην συγκεκριμένη περίπτωση όλα αυτά απλά δεν ισχύουν! Χρησιμοποιήστε tables λοιπόν και μάλιστα αποφύγετε τα πολλά tables μέσα σε tables (γνωστά και ως **nested tables**). Ένα απλό table-based layout, με λίγα rows και columns είναι το ιδανικότερο, μετά με την εισαγωγή κάποιων βασικών styles στο περιεχόμενο (content) του πίνακα και ακολουθώντας τις παραπάνω συμβουλές, μπορείτε εύκολα να δημιουργήσετε ένα πολύ ευανάγνωστο και εντυπωσιακό HTML e-mail/newsletter.

Άλλο ένα σημαντικό λάθος, που το κάνουν ακόμα και μεγάλες εταιρείες, είναι η αλόγιστη χρήση γραφικών (images) και το ακόμα χειρότερο, η χρήση γραφικών για την προβολή περιεχομένου (content). Ο λόγος που δεν πρέπει να χρησιμοποιούμε πολλά γραφικά, είναι πως πολλοί mail clients (on-line και off-line) δεν αφήνουν τα γραφικά να &#8220;περάσουν&#8221;, με αποτέλεσμα να μην εμφανίζονται! Όπως καταλαβαίνεται τα πράγματα γίνονται ακόμα χειρότερα εάν τα γραφικά περιέχουν και μέρος του περιεχόμενου μας, όπως για παράδειγμα κείμενο, γραφήματα κτλ. Καλό θα είναι το κείμενο (τίτλοι, παράγραφοι, κτλ.) να είναι κείμενο, και όχι γραφικά με περίεργα Photoshop fonts, γιατί εκτός από το κίνδυνο να μην τα δουν ποτέ οι παραλήπτες, υπάρχει και μεγάλο accessibility πρόβλημα όταν κάποιος θέλει να κάνει copy κάποιο κομμάτι του κειμένου σας!

Τέλος κάντε όσα πιο πολλά τεστ μπορείτε! Και για να γίνω πιο συγκεκριμένος εξετάστε τα HTML mails τουλάχιστον σε :

- [Hotmail](http://www.hotmail.com/ "Hotmail")
- [Yahoo Mail](http://mail.yahoo.com/ "Yahoo Mail")
- [Gmail](http://www.gmail.com/ "Gmail")
- [Outlook](http://www.microsoft.com/outlook/ "Outlook")
- [Thunderbird](http://www.mozilla.com/en-US/thunderbird/ "Thunderbird")
- [Mac Mail](http://www.apple.com/macosx/features/mail.html "Mac Mail")
- [Entourage](http://www.microsoft.com/mac/products/entourage2004/ "Entourage")
- [Kmail](http://kontact.kde.org/kmail/ "Kmail")
- [Eudora](http://www.eudora.com/ "Eudora")

Αυτά τα βασικά και πιο τεχνικά πράγματα για τα HTML e-mails (προς το παρόν). Ελπίζω να με διαβάζουν και κάποιοι που δημιουργούν τέτοια mails, γιατί όπως πάντα η κατάσταση στην Ελλάδα είναι πάλι αρκετά πίσω από τον μέσο όρο, οπότε όσοι πιστοί νοιάζεστε, διορθώστε όσο μπορείτε την κατάσταση!
