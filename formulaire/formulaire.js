class formulaire{
constructor(nom,prenom,dateNaissance,lieuNaissance,emploi,societe){
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.lieuNaissance = lieuNaissance
    this.emploi = emploi;
    this.societe = societe;
}

verification(input,date){
  var dateNaissance = /^((([0-2]?[0-8])|29)\/(0[0-9]|1[0-2])|((([0-2]?[0-9])|30)\/((0[0-13-9])|(1[0-2]?))|(31\/((0[13578])|10|12))))\/((19[4-9][0-9])|(200[0-9])|(201[0-6]))$/
  console.log(date);
  console.log(dateNaissance.test(date));
  if(dateNaissance.test(date)){
    $(input).removeClass("wrong");
    this.afficher();
  } else {
    $(input).addClass('wrong');
    $('body').prepend('<p>La date de naissance n\'est pas valide, merci de verifier le format</p>');
  }

}
  afficher(){
    $('body').prepend('<p>'+this.prenom+' '+this.nom+', né le '+this.dateNaissance+', à '+ this.lieuNaissance +', actuellement '+this.emploi+' à'+this.societe+'</p>');
  }
}
