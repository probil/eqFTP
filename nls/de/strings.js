define({
    "ERR_LOADING" : "Laden fehlgeschlagen :(",
    
    "SIDEPANEL_TITLE" : "eqFTP",
    "SIDEPANEL_OPENCONNMANGR" : "Öffne Verbindungsmanager",
    "SIDEPANEL_FILETREE_NAME" : "Name",
    "SIDEPANEL_FILETREE_SIZE" : "Größe",
    "SIDEPANEL_FILETREE_TYPE" : "Typ",
    "SIDEPANEL_FILETREE_MODIFIED" : "Geändert",
    "SIDEPANEL_CONDISCONNECT" : "Trennen/Verbinden",
    "SIDEPANEL_REFRESH" : "Aktualisieren",
    "SIDEPANEL_RELOADSETTINGS" : "Einstellungen neu laden",

    "ERR_DIAG_SERVNOEXIST_TITLE" : "Server existiert nicht",
    "ERR_DIAG_SERVNOEXIST_CONTENT" : "Der Server scheint nicht zu existieren.<br>Schaue, ob der Server im Verbindungsmanager eingetragen ist.",
    "ERR_DIAG_SERVCANTREACH_TITLE" : "Der Server ist nicht erreichbar",
    "ERR_DIAG_SERVCANTREACH_CONTENT" : "Ich kann den Server nicht erreichen.<br>Vielleicht liegt es an deiner Firewall.",
    "ERR_DIAG_AUTHORIZEERR_TITLE" : "Falsche Autorisierungsdaten",
    "ERR_DIAG_AUTHORIZEERR_CONTENT" : "Vermutlich ist dein Passwort oder dein Username falsch.<br>Überprüfe bitte deine Eingaben nochmal",
    
    "PASSWDWIND_TITLE" : "Bitte gebe dein Passwort ein",
    "PASSWDWIND_CONTENT" : "Dein Passwort für eqFTP:",
    
    "SETTINGSWIND_TITLE" : "eqFTP Verbindungsmanager",
    "SETTINGSWIND_ERR_BLANKS" : "Oh hier ist irgendwas falsch gelaufen :/. Überprüfe deine Eingaben und probiere es erneut.",
    "SETTINGSWIND_ERR_CANTWRITE" : "Irgendwas läuft hier gewaltig schief! Es ist nicht möglich die Einstellungen zu speichern!",
    "SETTINGSWIND_NOTIF_DONE" : "Alles gespeichert! :)",
    "SETTINGSWIND_SAVEDCONN" : "Gespeicherte FTP Verbindungen",
    "SETTINGSWIND_DELETECONN_HOVER" : "Lösche diese Verbindung",
    "SETTINGSWIND_ADDCONN_HOVER" : "Neue Verbindung hinzufügen",
    "SETTINGSWIND_ADDCONN_STRING" : "Neue Verbindungen erstellen...",
    // Those 2 strings below are going like this: SETTINGSWIND_DELETECONNCONF_1 + VAL + SETTINGSWIND_DELETECONNCONF_2
    // So if in your language there's no need in 2 strings, just leave one of them blank
    "SETTINGSWIND_DELETECONNCONF_1" : "Bitte bestätige das Löschen",
    "SETTINGSWIND_DELETECONNCONF_2" : " der Verbindung.",
    "SETTINGSWIND_OPENGLOBSET" : "Öffne globale FTP Einstellungen...",
    "SETTINGSWIND_NOTHINGYETMSG" : "Wähle eine Verbindung in der Sidebar oder erstelle eine neue.",
    "SETTINGSWIND_GLOB_FOLDERFORPROJ" : "Ordner für Projekte:",
    "SETTINGSWIND_GLOB_FOLDERFORPROJ_DIAGTITLE" : "Ordner für Projekte mit heruntergeladen Dateien",
    "SETTINGSWIND_GLOB_FOLDERFORSET" : "Einstellungsordner:",
    "SETTINGSWIND_GLOB_FOLDERFORSET_DIAGTITLE" : "Ordner für die Einstellungsdatei",
    "SETTINGSWIND_GLOB_DONTOPENPROJECTS" : "Öffne das Projekt nicht, nachdem es heruntergeladen wurde",
    "SETTINGSWIND_GLOB_STORESAFELY" : "Speichere die Passwörter gesichert",
    "SETTINGSWIND_GLOB_CONNECTIONNAME_TITLE" : "Verbindungsname:",
    "SETTINGSWIND_GLOB_CONNECTIONNAME_FIELD" : "Verbindungsname",
    "SETTINGSWIND_GLOB_SERVER_TITLE" : "Server:",
    "SETTINGSWIND_GLOB_PROTOCOL_TITLE" : "Protokoltyp:",
    "SETTINGSWIND_GLOB_USERNAME_TITLE" : "Username:",
    "SETTINGSWIND_GLOB_USERNAME_FIELD" : "FTP Username",
    "SETTINGSWIND_GLOB_PASSWORD_TITLE" : "Passwort:",
    "SETTINGSWIND_GLOB_PASSWORD_FIELD" : "FTP Passwort",
    "SETTINGSWIND_GLOB_REMOTEPATH_TITLE" : "Pfad auf dem Server:",
    "SETTINGSWIND_GLOB_REMOTEPATH_FIELD" : "Gib bitte den Serverpfad ein",
    "SETTINGSWIND_GLOB_LOCALPATH_TITLE" : "Lokaler Pfad:",
    "SETTINGSWIND_GLOB_LOCALPATH_FIELD" : "Neuer Ordner, wenn leer",
    "SETTINGSWIND_GLOB_UPLOADONSAVE" : "Lade Datei beim Speichern hoch",
    "SETTINGSWIND_GLOB_EVENDISCONN" : "Auch wenn die Verbindung getrennt ist",
    "SETTINGSWIND_GLOB_EVENDISCONN_EXPLAIN" : "Diese Option ermöglicht es, dass automatische Verbinden mit dem Server, wenn eine Datei die sich in einem Projektordner befindet, der mit eqFTP erstellt wurde, gespeichert wurde. Ich hoffe ich habe es gut erklärt :D",
    
    "QUEUE_TITLE" : "eqFTP Warteschlange",
    "QUEUE_TITLE_HOVER" : "Klicke um die Warteschlange zu öffnen",
    "QUEUE_HEADER_NAME" : "Name",
    "QUEUE_HEADER_PATH" : "Pfad",
    "QUEUE_HEADER_STATUS" : "Status",
    "QUEUE_CONTEXTM_STARTQ" : "Starte Auftrag",
    "QUEUE_CONTEXTM_PAUSEQ" : "Pausiere Auftrag",
    "QUEUE_CONTEXTM_CLEARQ" : "Warteschlange leeren",
    "QUEUE_CONTEXTM_CLEARCOMPQ" : "Leere fertig gestellte Aufträge",
    "QUEUE_CONTEXTM_CLEARFAILQ" : "Leere fehlgeschlagene Aufträge",
    "QUEUE_CONTEXTM_RESTARTFAILQ" : "Versuche fehlgeschlagene Aufträge erneut auszuführen",
    "ERR_FILE_ACCESSDENIED" : "Zugriff verweigert. Überprüfe die Dateiberechtigungen.",
    "ERR_FILE_AUTHORIZATION" : "Autorisierungsfehler. Überprüfe deine Anmeldedaten.",
    "ERR_FILE_SERVNOEXIST" : "Server existiert nicht. Möglicherweise hast du dich vertippt.",
    "ERR_FILE_SERVCANTREACH" : "Server nicht erreichbar. Überprüfe die Einstellungen der Firewall.",
    
    "CONTEXTM_DOWNLOAD" : "Download",
    "CONTEXTM_UPLOAD" : "Upload",
    "CONTEXTM_ADDQUEUE" : "Zur Warteschlange hinzufügen",
    "CONTEXTM_OPEN" : "Öffnen",
    
    "OTHER_SELECT_SERVER_DROPDOWN" : "Wähle einen Server aus...",
    "OTHER_ERROR" : "Fehler",
    "OTHER_PAUSED" : "Pausiert",
    "OTHER_COMPLETED" : "Fertig gestellt",
    "OTHER_WAITING" : "Warten",
    "OTHER_OK" : "Ok",
    "OTHER_CANCEL" : "Abbruch",
    "OTHER_APPLY" : "Anwenden",
    "OTHER_CLOSE" : "Schließen",
});