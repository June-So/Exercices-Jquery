class verifregex{
  constructor(prenom, nom, email, tel){
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
    this.tel = tel;
  }

  verifNom(){
    var verifNom = /^[A-Za-z]+([-\s]?[A-Za-z])*$/
    console.log(this.nom+' '+this.prenom);
    console.log(verifNom.test(this.nom));
    console.log(verifNom.test(this.prenom));
}

  verifEmail(){
//Verification email@();
    var verifEmail = /^[a-zA-Z]([\.\-_]?[\w]*)*[\w0-9][@]([A-Za-z]+[\.]){1,2}[A-Za-z0-9]{2,6}$/;
    console.log(this.email);
    console.log(verifEmail.test(this.email));
  }
  // date : ^(([0-2][0-9])|30|31)\/[0-9][0-2]?\/((19[4-9][0-9])|(200[0-9])|(201[0-6]))
  //date verification jj/30 ou 31 : ^((([0-2]?[0-8])|29)\/(0[0-9]|1[0-2])|((([0-2]?[0-9])|30)\/((0[0-13-9])|(1[0-2]?))|(31\/((0[13578])|10|12))))\/((19[4-9][0-9])|(200[0-9])|(201[0-6]))$
  verifTel(){
    //var verifTel = /^0[1-9]([.-\s]?[0-9]{2}){4}$/; //format libre
    var verifTel = /0[1-9](([\s\-\.]?)[0-9]{2})(\2[0-9]{2}){3}$/ //f0[1-9](([\s\-\.])[0-9]{2})(\2[0-9]{2}){3}ormat strict .-
    console.log(this.tel);
    console.log(verifTel.test(this.tel));
    //Verifier nom et prénom;
      //Ne contient que des lettre ou des tirets
  }
}
