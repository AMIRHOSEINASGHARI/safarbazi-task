export const shorterText = (text, maxCharacter) => {
  const t = String(text);

  if (t.length > maxCharacter) {
    return `${t.substring(0, maxCharacter)}...`;
  } else {
    return text;
  }
};

// accepts the english numbers and convert them to persian numbers
export const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
