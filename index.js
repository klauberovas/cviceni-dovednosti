console.log('funguju!');
// Dovednosti
// Vizualizujte vědomosti.
// Vytvořte si repozitář ze šablony cviceni-dovednosti. V repozitáři najdete zdrojové soubory stránky se třemi posuvníky. Ty ukazují úroveň dovedností v různých oblastech.

// Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.
// Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: textový řetězec představující id elementu a číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.

// const updateSkill = (idElm, number) => {
//   // přepíše se šířka posuvníku
//   const jsSkillProgress = document.querySelector(
//     '#skill' + idElm + ' .skill__progress',
//   );
//   jsSkillProgress.style.width = number + '%';

//   // přepíše se hodnota
//   const jsSkillValue = document.querySelector(
//     '#skill' + idElm + ' .skill__value',
//   );
//   jsSkillValue.textContent = number + ' / 100';
// };

// let number = prompt('Zadejte číselnou hodnotu úrovně v HTML.');
// updateSkill(1, number);
// number = prompt('Zadejte číselnou hodnotu vaši úrovně v CSS.');
// updateSkill(2, number);
// number = prompt('Zadejte číselnou hodnotu vaši úrovně v JS.');
// updateSkill(3, number);

const updateSkill = (idElm, number) => {
  // přepíše se šířka posuvníku
  const jsSkillProgress = document.querySelector(idElm + ' .skill__progress');
  jsSkillProgress.style.width = number + '%';

  // přepíše se hodnota
  const jsSkillValue = document.querySelector(idElm + ' .skill__value');
  jsSkillValue.textContent = number + ' / 100';
};

let number = prompt('Zadejte číselnou hodnotu úrovně v HTML.');
updateSkill('#skill1', number);
number = prompt('Zadejte číselnou hodnotu vaši úrovně v CSS.');
updateSkill('#skill2', number);
number = prompt('Zadejte číselnou hodnotu vaši úrovně v JS.');
updateSkill('#skill3', number);
