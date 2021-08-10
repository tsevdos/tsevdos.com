---
title: "Γρήγορο development: 5 συμβουλές για γρήγορα αποτελέσματα"
date: "2009-01-19"
type: "post"
categories:
  - development
  - opinions
tags:
  - ajax
  - client-side
  - code
  - css
  - debugging
  - development
  - framework
  - ide
  - library
  - mvc
  - php
  - project management
  - rails
  - ruby
  - server-side
  - snippets
  - text editors
  - tools
---

Πολλοί δεν έχουν πίστη στο λαϊκό ρητό "το γοργό και χάριν έχει", ωστόσο είναι πάρα πολλές οι φορές που απλά πρέπει να βγει κάτι στον αέρα γρήγορα! Οι πιο σκληροπυρηνικοί developers, ανήκα και εγώ κάποτε σε αυτήν την κατηγορία, θέλουν να ξεκινάνε τα πάντα από το μηδέν έτσι ώστε να ελέγχουν πλήρως τον κώδικα και γενικότερα να φτιάχνουν τα πάντα με τα χεράκια τους. Όπως καταλαβαίνεται, αυτές οι εποχές έχουν περάσει πλέον, και γενικότερα δεν εξυπηρετεί σε τίποτα να προσπαθείς να ξανά-ανακαλύψεις τον τροχό, όταν το έχει κάνει ήδη κάποιος άλλος... Παρακάτω δίνω 5 συμβουλές που πιστεύω πως εάν ακολουθηθούν, θα έχετε σε πολύ γρήγορο χρονικό διάστημα φοβερές βελτιώσεις στους development χρόνους σας, και θα σώσετε αρκετό χρόνο από κάθε σας project (και θεωρητικά θα έχετε περισσότερο χρόνο για την οικογένεια σας και τους φίλους σας, κάτι που φυσικά δεν ισχύει γιατί τα projects δεν σταματάνε ποτέ!). Έχουμε και λέμε λοιπόν:

## 1. Χρησιμοποιήστε frameworks και libraries

Η πιο απλή και χρήσιμη συμβουλή. Μην ξανά-ανακαλύπτετε τον τροχό όπως έγραψα και παραπάνω, το έχουν ήδη κάνει άλλοι για εσάς, εκμεταλλευθείτε το! Σε όλες τις server-side τεχνολογίες υπάρχουν frameworks που σας βοηθάνε να γράψετε ποιοτικότερο κώδικά πολύ πιο γρήγορα, πολύ πιο εύκολα και μάλιστα επαναχρησιμοποιήσιμο (σε αρκετές περιπτώσεις τουλάχιστον). Στις web εφαρμογές το pattern που έχει επικρατήσει πλέον, είναι το [MVC (Model-View-Controller)](http://en.wikipedia.org/wiki/Model-view-controller "Model View Controller pattern"), και όλες οι server-side τεχνολογίες έχουν αναπτύξει πολλά και διάφορα frameworks γύρω από αυτό. Έτσι από την [Ruby](http://www.ruby-lang.org/en/ "Ruby programming language") με το [Rails](http://rubyonrails.org/ "Rails framework") ως και την [PHP](http://www.php.net/ "PHP scripting language") με το [CakePHP](http://cakephp.org/ "CakePHP framework"), το αγαπημένο μου (αν και έχω καιρό να ασχοληθώ) [CodeIgniter](http://codeigniter.com/ "CodeIgniter PHP framework") ή το πολύπλοκο [Zend](http://framework.zend.com/ "Zend PHP framework"), δεν υπάρχει περίπτωση να μην βρείτε κάποιο framework που να κάνει την δουλειά σας πιο γρήγορα και παραγωγικά. Μέχρι και η Microsoft εισήγαγε MVC δυνατότητες στη [ASP.ΝΕΤ](http://www.asp.net/mvc/ "ASP.NET MVC"), οπότε ποιος ο λόγος να μην εκμεταλλευθείτε το συγκεκριμένο pattern;

Στην client-side μεριά τώρα, αν [δεν θέλετε να χρησιμοποιήσετε για διάφορους λόγους CSS frameworks/libraries](http://www.tsevdos.com/2008/09/22/css-frameworks-good-or-evil/ "CSS frameworks good or evil"), θα είσασταν αρκετά περίεργοι (για να μην γράψω κάτι πιο χοντρό), εάν προσπαθούσατε να κάνετε όλα αυτά τα ωραία Javascript animation/εφέ και AJAX κολπάκια χωρίς την χρήση κάποιας library... Και εδώ οι επιλογές είναι πάρα πολλές με σημαντικότερες το [jQuery](http://jquery.com/ "jQuery library"), [MooTools](http://mootools.net/ "MooTools library"), [Prototype](http://www.prototypejs.org/ "Prototype library") και [YUI](http://developer.yahoo.com/yui/ "YUI library"), οπότε δοκιμάζετε και κρατάτε αυτήν που σας ταιριάζει και που κάνει  γρηγορότερα την δουλειά!

## 2. Χρησιμοποιήστε έναν πολύ καλό text editor ή κάποιο IDE

Φυσικά και μπορείτε να κάνετε την δουλειά σας με το Notepad των Windows, το ερώτημα όμως είναι πόσο γρήγορα την κάνετε? Το θέμα text editor ή [IDE](http://en.wikipedia.org/wiki/Integrated_development_environment "IDE in Wiki") είναι κάτι καθαρά προσωπικό και ο καθένας έχει τις προτιμήσεις του. Προσωπικά προτιμώ τους text editors μιας και είναι πιο ελαφριοί από τα IDE (επίσης δουλεύω ελάχιστα σε server-side επίπεδο πλέον), ενώ θέλω οπωσδήποτε να υποστηρίζουν και τα παρακάτω χαρακτηριστικά:

- syntax highlighting
- auto-fill
- syntax suggestions

Τα IDE έχουν συνήθως και άλλα πιο εξεζητημένα χαρακτηριστικά, όπως FTP access, διαγνωστικά εργαλεία, εργαλεία για debugging και διάφορα άλλα που αν και χρήσιμα, συνήθως κάνουν αρκετά πιο βαριές τις εφαρμογές, κάτι που δεν μ' αρέσει. Έτσι προτιμώ να χρησιμοποιώ τον [<span>Ε Τext Εditor</span>](http://www.e-texteditor.com/ "E Text Editor") (μοιάζει με το [TextMate](http://macromates.com/ "TextMate")), [Intype](http://intype.info/home/index.php "Intype") (project που δυστυχώς αργοπεθαίνει) και [Notepad ++](http://notepad-plus.sourceforge.net/uk/site.htm "Notepad ++") από τα διάφορα IDE όπως [<span>Εclipse</span>](http://www.eclipse.org/ "Eclipse"), [<span>NetBeans</span>](http://www.netbeans.org/ "NetBeans"), [Aptana Studio](http://www.aptana.com/studio "Aptana Studio") και [Komodo IDE](http://www.activestate.com/komodo/ "Komodo IDE"). Όπως και να έχει δοκιμάστε μερικά από αυτά, βρείτε πιο σας ταιριάζει και γράψτε πιο γρήγορα κώδικα!

## 3. Reusable code ή free code

Έχετε γράψει κάτι ανάλογο παλιότερα; Τότε απλά προσαρμόστε το στις καινούργιες απαιτήσεις σας και ξανά-χρησιμοποιήστε το! Επίσης, ρίχνετε πάντα μια ματιά σε [code](http://devsnippets.com/ "Devsnippets") [snippets](http://www.hotscripts.com/ "Hotscripts") που μπορείτε να χρησιμοποιήσετε. Το μόνο που πρέπει να προσέξετε πάρα πολύ σε αυτήν την περίπτωση είναι η άδεια χρήσης τους. Καλό είναι επίσης να δίνετε και credits στους δημιουργούς (έστω και εάν δεν το ζητάνε), αλλά να το αναφέρεται και στους υπόλοιπους εμπλεκόμενους στο project (εάν υπάρχουν).

## 4. Σωστά debugging tools

Το θέμα debugging είναι και αυτό αρκετά προσωπικό. Σε server-side επίπεδο μπορείτε να το κάνετε είτε μέσω των errors/warnings που παίρνεται κατευθείαν από τον server και την server-side γλώσσα που χρησιμοποιείται, είτε μέσω IDE εργαλείων που ανέφερα και πιο πάνω.

Σε client-side επίπεδο τώρα, απλά πρέπει να έχετε το [Firebug](http://getfirebug.com/ "Firebug")! Ειλικρινά δεν μπορώ να καταλάβω πως μερικοί συνάδελφοι δεν το χρησιμοποιούν... Το [Web Developer Toolbar](http://chrispederick.com/work/web-developer/ "Web Developer Toolbar") είναι και αυτό ένα πολύ αξιόλογο εργαλείο, ωστόσο πιστεύω πως το [Firebug](http://getfirebug.com/ "Firebug") κάνει τα πάντα και συμφέρει... Για Internet Explorer τώρα (και μόνο για να λύσετε προβλήματα που έχουν προκύψει στον συγκεκριμένο browser), μπορείτε να χρησιμοποιήσετε την [Internet Explorer Toolbar](http://www.microsoft.com/downloads/details.aspx?familyid=E59C3964-672D-4511-BB3E-2D5E1DB91038&displaylang=en "Internet Explorer Toolbar"), η οποία όμως δεν θα σας βοηθήσει και πολύ, ωστόσο κάτι είναι και αυτό. Τέλος περιμένω να δω και το [Opera Dragonfly](http://www.opera.com/dragonfly/ "Opera Dragonfly"), αν και πιστεύω πως πολύ δύσκολα θα καταφέρει να κερδίσει τον συνδυασμό Firefox/Firebug. Δεν είναι άλλωστε τυχαία η επιλογή του συγκεκριμένου συνδιασμού από όλους σχεδόν τους web designers/developers...

## 5. On-line collaboration

Το θέμα συνεργασίας αλλά και γενικότερα project management, είναι ένα από τα πιο δύσκολα, ιδιαίτερα όταν οι εμπλεκόμενοι βρίσκονται σε διαφορετικές πόλεις, έχουν διαφορετικά time zones κτλ. Φυσικά με το πατροπαράδοτο e-mail μπορείτε να λύσετε τέτοια προβληματάκια, όταν όμως το project είναι μεγάλο και η ομάδα αποτελείτε από πολλά μέλη, τότε η χρήση e-mail πιο πολύ θα καθυστερεί παρά θα βοηθάει την κατάσταση... Αντιθέτως web collaboration εργαλεία, όπως το [Basecamp](http://www.basecamphq.com/ "Basecamp") για παράδειγμα, μπορούν να οργανώσουν καλύτερα ένα project σε όλα τα επίπεδα, όπως σε επίπεδο συνεργασίας, to do tasks, project status, ανταλλαγή αρχείων, ενημέρωση των μελών κτλ. Γιατί λοιπόν να σπαταλάτε πολύτιμο χρόνο στο παλιομοδίτικο e-mail; Προσωπικά εκτός από το [Basecamp](http://www.basecamphq.com/ "Basecamp") το οποίο χρησιμοποιώ για το [CSS3.gr](http://www.css3.gr/ "CSS3.gr") μου αρέσει πολύ και το [Google Groups](http://groups.google.com/ "Google Groups") το οποίο χρησιμοποιώ σε μικρότερα projects αλλά πολλές φορές και μόνος μου!

Αυτά τα λίγα από εμένα. Όποιοι έχετε βάλει στόχο να κάνετε γρήγορα κάποια πράγματα ακολουθήστε μερικές από τις παραπάνω συμβουλές, όλο και πιο γρήγοροι θα γίνεται 😉
