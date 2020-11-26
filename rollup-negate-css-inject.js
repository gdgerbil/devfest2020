import path from "path";

export default function negateCssInject ({ only = [] } = {}) {
  return {
    transform(content, id) {
      if (!id.endsWith(".css")) return;

      const toIgnore =
        only.length !== 0 &&
        !only.some((file) => path.resolve(process.cwd(), file) === id);

      if (toIgnore) return;

      const cssAsValidString = extractCssText(content);

      const code = cssAsValidString.trim();

      return {
        code,
      };
    },
  };
};

function extractCssText(content) {
  // Assumes that the css is stored in a varialbe called `stylesheet`

  const indexOfStylesheet = content.indexOf("export var stylesheet");
  const afterStylesheet = content
    .substring(indexOfStylesheet)
    .replace(/^export var stylesheet/, "")
    .trim()
    .replace(/^=/, "")

  const [firstLine] = afterStylesheet.split(/\n/);

  const onlyString = new Function(`return ${firstLine}`);

  return onlyString();
}
