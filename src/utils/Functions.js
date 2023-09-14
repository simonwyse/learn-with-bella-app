export function createInitialQuestions() {
  return [
    ...Array(12)
      .fill()
      .map((a, i) => i + 1),
  ];
}

export function getInitialState() {
    return {
        view: 0,
        userName: null,
        table: null,
        score: 0,
        answered: false,
        questionsToAsk: createInitialQuestions(),
        question: null        
    }
}

export function createScoreData(userName) {
  // {
  //   user: user-name,
  //   scores: [0, 0] // idx == xtable. e.g. idx = 3 xtable = 4. Value == score
  // }
  // if userName, get score if exists.
  // If not, create score object
  let scoreData = {
    tables: [...Array(12).fill(0)],
  };

  if (!userName) return scoreData;

  let localData = JSON.parse(localStorage.getItem(getNameKey(userName)));
  const ret = localData ? localData : scoreData;
  console.log("RET: ", ret);
  return ret;
}

export function getNameKey(s) {
  return `lwb-${s}`;
}
