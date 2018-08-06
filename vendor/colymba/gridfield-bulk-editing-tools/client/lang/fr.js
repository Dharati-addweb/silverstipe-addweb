if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
  if(typeof(console) != 'undefined') console.error('Class ss.i18n not defined');
} else {
  ss.i18n.addDictionary('fr', {
    "GRIDFIELD_BULK_UPLOAD.PROGRESS_INFO": "%s fichier(s) en transfert. %s terminer. %s erreur(s).",
    "GRIDFIELD_BULK_MANAGER.BULKACTION_EMPTY_SELECT": "Vous devez sélectionner au moins une entrée.",
    "GRIDFIELD_BULK_MANAGER.CONFIRM_DESTRUCTIVE_ACTION": "Les données serons perdu définitivement. Voulez vous continuer?"
});
}