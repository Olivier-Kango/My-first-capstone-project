// Change data, only in the object.value below
const speakerContent = [
  {
    imageSpeaker: 'images/olivier.jpg',
    fName: 'Olivier Kango',
    profession: 'Kango is the Founder of K Bible Study',
    about: 'Olivier Kango studied at Microverse. In 2022 he had the wonderful idea of ​​​​creating K. Bible Study'
  },
  {
    imageSpeaker: 'images/theo.jfif',
    fName: 'Theophile Kango',
    profession: 'Theophile Kango is the Co-founder of K Bible Study',
    about: 'Theophile Kango also studied at Microverse.'
  },
  {
    imageSpeaker: 'images/olivier.jpg',
    fName: 'Olivier Kango',
    profession: 'Kango is the Founder of K Bible Study',
    about: 'Olivier Kango studied at Microverse. In 2022 he had the wonderful idea of ​​​​creating K. Bible Study'
  },
  {
    imageSpeaker: 'images/theo.jfif',
    fName: 'Theophile Kango',
    profession: 'Theophile Kango is the Co-founder of K Bible Study',
    about: 'Theophile Kango also studied at Microverse.'
  },
];
// Change data, only in the object.value above

const sectionSpeakers = document.querySelector('.speakers');

const titleSpeakers = document.createElement('h2');
titleSpeakers.textContent = 'Featured Speakers';
titleSpeakers.setAttribute('class', 'title-speakers')
sectionSpeakers.appendChild(titleSpeakers);

const underline = document.createElement('div');
underline.setAttribute('class', 'underline');
sectionSpeakers.appendChild(underline);

const divSpeakers = document.createElement('div');
divSpeakers.setAttribute('class', 'div-speakers')
sectionSpeakers.appendChild(divSpeakers);

speakerContent.forEach(content => {
  const featuredSpeaker = document.createElement('div');
  featuredSpeaker.setAttribute('class', 'featured-speaker');
  divSpeakers.appendChild(featuredSpeaker);

  const {imageSpeaker, fName, profession, about} = content;

  const divBackgroundAndImage = document.createElement('div');
  divBackgroundAndImage.innerHTML = '';
  divBackgroundAndImage.setAttribute('class', 'background-and-image');
  featuredSpeaker.appendChild(divBackgroundAndImage);

  const background = document.createElement('img');
  background.setAttribute('src', 'images/square.jpg');
  background.setAttribute('class', 'square-background');
  background.setAttribute('alt', 'square_background')
  divBackgroundAndImage.appendChild(background);

  const imgSpeaker = document.createElement('img');
  imgSpeaker.setAttribute('src', imageSpeaker);
  imgSpeaker.setAttribute('class', 'imageSpeaker');
  imgSpeaker.setAttribute('alt', 'image_speaker');
  divBackgroundAndImage.appendChild(imgSpeaker);

  const divContent = document.createElement('div');
  divContent.setAttribute('class', 'div-content');
  featuredSpeaker.appendChild(divContent);
  
  const fNameh3 = document.createElement('h3');
  fNameh3.setAttribute('class', 'fname');
  fNameh3.innerText = fName;
  divContent.appendChild(fNameh3);

  const professionp = document.createElement('p');
  professionp.setAttribute('class', 'profession');
  professionp.innerText = profession;
  divContent.appendChild(professionp);

  const line = document.createElement('div');
  line.setAttribute('class', 'line');
  divContent.appendChild(line);

  const aboutp = document.createElement('p');
  aboutp.setAttribute('class', 'aboutp');
  aboutp.innerText = about;
  divContent.appendChild(aboutp);
});