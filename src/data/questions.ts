export interface Question {
  id: number;
  image: string;
  question: string;
  options: string[];
}

export const candidateImages = {
  flavio: "https://i.imgur.com/b6uqoZ2.jpeg",
  lula: "https://i.imgur.com/SLdypPj.jpeg"
};

export const questions: Question[] = [
  {
    id: 1,
    image: "https://i.imgur.com/mPAJz3U.jpeg",
    question: "Qual é a sua opinião sobre a prisão de Jair Bolsonaro?",
    options: [
      "Concordo",
      "Discordo",
      "Tenho dúvidas",
      "Prefiro não responder"
    ]
  },
  {
    id: 2,
    image: "https://i.imgur.com/KKyIKZl.jpeg",
    question: "Qual é a sua opinião sobre a atuação do Supremo Tribunal Federal?",
    options: [
      "Aprovo",
      "Desaprovo",
      "Tenho uma opinião dividida",
      "Prefiro não responder"
    ]
  },
  {
    id: 3,
    image: "https://i.imgur.com/b6uqoZ2.jpeg",
    question: "Como você avalia a possibilidade de Flávio Bolsonaro disputar a Presidência da República?",
    options: [
      "Sou favorável",
      "Sou contrário",
      "Ainda não tenho opinião",
      "Prefiro não responder"
    ]
  },
  {
    id: 4,
    image: "https://i.imgur.com/ARzVbdp.jpeg",
    question: "Como você avalia a possibilidade de Nikolas Ferreira disputar a Presidência da República no futuro?",
    options: [
      "Sou favorável",
      "Sou contrário",
      "Ainda não tenho opinião",
      "Prefiro não responder"
    ]
  },
  {
    id: 5,
    image: "https://i.imgur.com/TqlepJ4.jpeg",
    question: "Como você avalia o cenário atual do Brasil?",
    options: [
      "Muito positivo",
      "Positivo",
      "Negativo",
      "Muito negativo"
    ]
  }
];
