import { parse } from 'node-html-parser';

export const shiftHeadingLevels = (
  html: string,
  minLevel: 2 | 3 | 4 | 5 | 6
): string => {
  const root = parse(html);

  root.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach((node) => {
    const currentLevel = Number(node.tagName[1]);

    if (currentLevel < minLevel) {
      node.tagName = `H${minLevel}`;
    }
  });

  return root.toString();
};
