const phraseGenerator = (setPhraseToShow, value) => {
  if (value === "age") {
    setPhraseToShow("'we are seeking new, ... young, ... inexperienced'");
  } else if (value === "arrest record") {
    setPhraseToShow("'what'd you do'");
  } else if (value === "audible expression") {
    setPhraseToShow("'speak english'");
  } else if (value === "color") {
    setPhraseToShow("'you will not replace us'");
  } else if (value === "conviction record") {
    setPhraseToShow("'are you dangerous'");
  } else if (value === "creed") {
    setPhraseToShow("'barbarians think like that'");
  } else if (value === "employment") {
    setPhraseToShow("'you wouldn't be a good cultural fit'");
  } else if (value === "national origin") {
    setPhraseToShow("'go back where you came from'");
  } else if (value === "race") {
    setPhraseToShow("'you are a credit to your people'");
  } else if (value === "religion") {
    setPhraseToShow("'you worship false gods'");
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
    setPhraseToShow("'you got a bad seed'");
  } else if (value === "sex") {
    setPhraseToShow("'it's your own fault'");
  } else if (value === "sexual orientation") {
    setPhraseToShow("'sure you're gay, you don't look it'");
  }
};

export default phraseGenerator;
