const doc1 = {
  id: "doc1",
  text: "I can't shoot straight unless I've had a pint!",
};
const doc2 = { id: "doc2", text: "Don't shoot shoot shoot that thing at me." };
const doc3 = { id: "doc3", text: "I'm your shooter." };
const docs = [doc1, doc2, doc3];

export default function search(docs, searchString) {
  if (docs.length === 0) {
    return docs;
  }

  const result = [];

  docs.forEach((doc) => {
    const docTextArray = doc.text.split(" ");

    for (let i = 0; i < docTextArray.length; i++) {
      if (docTextArray[i] === searchString) {
        result.push(doc.id);

        break;
      }
    }
  });

  return result;
}

search(docs, "shoot");
