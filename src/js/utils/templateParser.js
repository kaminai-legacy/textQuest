export function element(template, mimeType) {
  return new DOMParser().parseFromString(template, mimeType).body
    .firstElementChild;
}

export function insertReplacement(template, varList = {}) {
  let getValue;
  if (varList instanceof Map) {
    getValue = function (key) {
      return varList.get(key);
    };
  } else {
    getValue = function (key) {
      return varList[key];
    };
  }

  return template.replace(/\$\{(\w+)\}/g, function (match, varname) {
    return getValue(varname);
  });
}

export default function toHtml(template) {
  return element(template, "text/html");
}
