# HTW-Berlin-CloudComputing-2016

# Kurs Cloud Computing

## Vorbereitung:
- Node.js: https://nodejs.org/en/
- Virtuelles Windows 10: https://developer.microsoft.com/en-us/windows/downloads/virtual-machines
- Azure Pass: https://www.microsoftazurepass.com/
- Microsoft Account erstellen: https://account.microsoft.com/
- Fiddler: https://www.telerik.com/download/fiddler
- Postman: https://www.getpostman.com/

## Hello Node:
Wenn Sie NodeJs richtig auf Ihrem System installiert haben, können Sie in der Eingabeaufforderung folgenden Code ausführen:

![HelloNode](https://github.com/rherlt/HTW-Berlin-CloudComputing-2016/blob/master/img/HelloNode.png "HelloNode")


## Abgabe 1:

Vorbereitung zum 02.12.206: Bitte informieren Sie sich über das [HTTP](https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol) Protokoll.

Sie haben die Aufgabe, eine Webanwendung in der Cloud bereitzustellen. Bevor Sie das Programm auf einem Server installieren, sollen Sie lokal an Ihrem Computer testen, ob das Programm auch wie gewünscht funktioniert.   
1. Führen Sie die Anwendung [HelloCloud.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2016/blob/master/HelloCloud.js) auf Ihrem Computer aus.  
2. Rufen Sie die Anwendung im Browser auf.  
3. Erstellen Sie eine HTTP-GET-Anfrage mithilfe eines HTTP-Debug-Programms. Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „HTTP-Get.txt“  
4. Erstellen Sie eine HTTP-POST-Anfrage mithilfe eines HTTP-Debug-Programms. Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „HTTP-Post.txt“  
5. Führen Sie die Anwendung [01-SimpleGet.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2016/blob/master/01-SimpleGet.js) auf Ihrem Computer aus. Erstellen Sie eine HTTP-GET-Anfrage mithilfe eines HTTP-Debug-Programms. Übergeben Sie folgende Parameter im Query-String:  
Parameter "ln": Ihren Nachnamen.  
Parameter "fn": Ihren Vornamen.  
Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „01-SimpleGet.txt“.  
6. Führen Sie die Anwendung [02-SimpleJsonPost.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2016/blob/master/02-SimpleJsonPost.js) auf Ihrem Computer aus. Erstellen Sie eine HTTP-POST-Anfrage mithilfe eines HTTP-Debug-Programms. Übergeben Sie folgende Parameter im Query-String:  
Parameter "ln": Ihren Nachnamen.  
Parameter "fn": Ihren Vornamen.  
Übermitteln Sie außerdem eine E-Mail-Adresse Ihrer Wahl im Nachrichtenkörper.
Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „02-SimpleJsonPost.txt“.  

Bonus-Aufgabe:
Ändern Sie den Code der [02-SimpleJsonPost.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2016/blob/master/02-SimpleJsonPost.js)-Anwendung so ab, dass die Anwendung in der Lage ist, in der Antwort-Nachricht den Benutzernamen und das Kennwort im Klartext anzuzeigen, sofern sich der Client mit der "Basic"-Authentication authentifiziert hat. Speichern Sie das Programm als "03-BasicAuth.js". Erstellen Sie eine HTTP-POST-Anfrage mithilfe eines HTTP-Debug-Programms. Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „03-BasicAuth.txt“.

## Berlin Cloud Computing Meetup
- Montag, 12. Dezember 2016, 19.00 Uhr: [Azure - Sensordaten mit IoT Hub und Tensorflow mit Docker auf GPU accelerated VM](https://www.meetup.com/de-DE/Berlin-Cloud/events/235891833/)

## Abgabe 2:

![One does not simply run Node.js on Microsoft Azure](https://i.imgflip.com/alvg4.jpg "One does not simply run Node.js on Microsoft Azure")  
Ihre Aufgabe besteht darin, die [HelloCloud.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2016/blob/master/HelloCloud.js) NodeJs-Anwendung in Microsoft Azure in Form von Platform as a Service auszuführen. Um diese Aufgabe zu bewerkstelligen, führen Sie folgende Teilaufgaben aus:    

1. Erstellen Sie ein neues, öffentlich erreichbares Github Quell-Code-Repository bei [github.com](https://github.com/)  
2. Sorgen Sie dafür, dass Sie die eine Server.js mit dem Quellcode im Repository haben.  
3. Zusätzlich benötigen Sie die Konfigurationsdateien [gulpfile.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2016/blob/master/gulpfile.js) und [web.config](https://github.com/rherlt/HTW-Berlin-CloudComputing-2016/blob/master/web.config) in Ihrem Repository, damit der Webserver in der Lage ist die eingehenden HTTP-Requests an die Node.js-Anwendung weiterzuleiten.
4. Verknüpfen Sie Ihr Github-Repository mit Ihrem Azure App Service und richten Sie [Continuous Delivery](https://de.wikipedia.org/wiki/Continuous_Delivery) ein.
5. Sorgen Sie dafür, dass Sie die [HelloCloud.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2016/blob/master/HelloCloud.js)-Anwendung erfolgreich ausführen können. (Hinweis: Listening-Port des Servers) 
6. Erstellen Sie eine HTTP-GET-Anfrage mithilfe eines HTTP-Debug-Programms. Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „HTTP-Get.txt“  
7. Erstellen Sie eine HTTP-POST-Anfrage mithilfe eines HTTP-Debug-Programms. Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „HTTP-Post.txt“    


Bonus-Aufgaben:  
1. Sorgen Sie dafür, dass die [03-BasicAuth.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2016/blob/master/03-BasicAuth.js)-Anwendung bei Ihnen läuft. Erstellen Sie dafür die notwendigen HTTP-Anfragen aus der Bonus-Aufgabe der vergangenen Woche.  
2. Implementieren Sie eine NodeJs Anwendung, die für einen Request die aktuelle Prozess-Id (des NodeJS-Prozesses im Server-Betriebssystem) zurück liefert. Sorgen Sie dafür, dass Ihre Anwendung auf drei Instanzen skaliert wird. Führen sie viele Requests auf Ihre Anwendung aus. Wenn Sie alles richtig gemacht haben, sehen sie drei verschiedene, immer wiederkehrende Prozess-Ids. Exportieren Sie das Ergebnis mit dem Fiddler. Hinweis: Sie benötigen dazu den Serviceplan Basic B1

## Abgabe 3:

![A 128GB RAM Linux VM in less than 5 minutes - Yes! Azure Can!](https://cdn.meme.am/instances/51302052.jpg "A 128GB RAM Linux VM in less than 5 minutes - Yes! Azure Can!")  
Ihre Aufgabe besteht darin, die [HelloCloud.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2016/blob/master/HelloCloud.js) NodeJs-Anwendung in Microsoft Azure in Form von Infrastructure as a Service auszuführen. Um diese Aufgabe zu bewerkstelligen, führen Sie folgende Teilaufgaben aus: 

1. Schauen Sie sich die Auswahl der Vituellen Maschienen an  
2. Wählen Sie sorgfältig Ihr Betriebssystem aus. Berücksichtigen Sie, dass abhängig von Ihrer Wahl mehr oder meniger Aufwand erforderlich ist, um das Programm auszuführen.  
3. Erstellen Sie die neue VM
4. Verbinden Sie sich mit der VM und sorgen Sie dafür, dass die [HelloCloud.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2016/blob/master/HelloCloud.js) NodeJs-Anwendung auf der Maschiene zur Verfügung steht.
5. Führen Sie die Anwendung aus.
6. Erstellen Sie eine HTTP-GET-Anfrage mithilfe eines HTTP-Debug-Programms. Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „HTTP-Get.txt“  
7. Erstellen Sie eine HTTP-POST-Anfrage mithilfe eines HTTP-Debug-Programms. Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „HTTP-Post.txt“    
8. Beschreiben Sie kurz Stichpunktartig für jede Teilaufgabe, wie Sie vorgegangen sind. Welches Betriebssystem wurde gewählt? Wie haben Sie sich mit der VM verbunden? Wie haben Sie die  [HelloCloud.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2016/blob/master/HelloCloud.js) NodeJs-Anwendung auf die VM übertragen?

Bonus-Aufgaben:  
- Wenn Sie mit einer Windows VM gearbeitet haben: Machen Sie das gleiche mit einem Linux Betriebssystem!  
- Wenn Sie mit einer Linux VM gearbeitet haben: Machen Sie das gleiche mit einem Windows Betriebssystem! 

## Klausurvorbereitung:

Sie befinden Sich im Umfeld Der in der Vorlesung behandelten Fallstudie: [Cloud Computing Studiengang IT Business (Master) Fallstudie – Teil 1](https://moodle.htw-berlin.de/pluginfile.php/369268/mod_resource/content/0/2016-10%20Fallstudie%20Cloud%20Computing%20-%20Teil%201_f.pdf).  

Das Unternehmen hw3r AG hat seinen Online-Unternehmensauftritt erneuert. Dieser soll nun in der Cloud gehostet werden. Es wird erwartet, dass montalich mehr als 10.000 Besucher auf die neue Website zugreifen und sich pro Besuch 5 Unterseiten ansehen.  
Sie werden bauftragt, drei geeignete Cloud-Hosting-Anbieter herauszusuchen und Ihrem Abteilungsleiter in einem fünf-minütigem Vortrag zu präsentieren. Außerdem soll bei der Präsentation der Preis und die Leistungs des Anbeiters gegenübergestellt werden.

Anforderungen der Anwednung: 
- Es ist ein [Drupal 7](https://de.wikipedia.org/wiki/Drupal) CMS System.
- Es soll ein MySQL-Server verwendet werden.  
- PAAS ist favorisiert, jedoch ist IAAS kein Ausschlusskriterium.

Bereiten Sie den Vortrag in Form eines kurzen [Pitches](https://de.wikipedia.org/wiki/Agenturpitch) (maximal 5 Minuten) vor, in dem Sie versuchen Ihren Abteilungsleiter für eine der drei Lösungen zu begeistern.