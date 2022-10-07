const phraseGenerator = (setPhraseToShow, value) => {
  if (value === "age") {
    setPhraseToShow("'young folk always ruin everything'");
  } else if (value === "arrest record") {
    setPhraseToShow("'what'd you do, are you dangerous'");
  } else if (value === "audible expression") {
    setPhraseToShow("'speak english, can't understand a word you saying'");
  } else if (value === "color") {
    setPhraseToShow("'your skin's so dark, can i touch it'");
  } else if (value === "conviction record") {
    setPhraseToShow("'how do we know you're not violent'");
  } else if (value === "creed") {
    setPhraseToShow("'can hardly be called human with beliefs like that'");
  } else if (value === "employment") {
    setPhraseToShow("'you wouldn't be a good cultural fit here'");
  } else if (value === "national origin") {
    setPhraseToShow("'go back where you came from'");
  } else if (value === "race") {
    setPhraseToShow("'you are a credit to your people'");
  } else if (value === "religion") {
    setPhraseToShow("'how can you worship false gods'");
  } else if (value === "weight") {
    setPhraseToShow("'you always been this big'");
  } else if (value === "disability") {
    setPhraseToShow("'are you high functioning'");
  } else if (value === "domestic violence victim status") {
    setPhraseToShow("'why didn't you just leave'");
  } else if (value === "employment status") {
    setPhraseToShow("'you just don't want to work'");
  } else if (value === "gender identity") {
    setPhraseToShow("'your birth certificate tells you what you are'");
  } else if (value === "gender expression") {
    setPhraseToShow("'act right'");
  } else if (value === "familial status") {
    setPhraseToShow("'we need dependable folks'");
  } else if (value === "marital status") {
    setPhraseToShow("'you need a man to take care of you'");
  } else if (value === "mental health status") {
    setPhraseToShow("'there's nothing wrong with you'");
  } else if (value === "predisposing genetic characteristics") {
    setPhraseToShow("'you got a bad seed huh'");
  } else if (value === "sex") {
    setPhraseToShow("'it's your fault this happened'");
  } else if (value === "sexual orientation") {
    setPhraseToShow("'sure you're gay, you don't look homosexual'");
  }
};

export default phraseGenerator;
