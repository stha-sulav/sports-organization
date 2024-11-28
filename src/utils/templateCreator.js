export function templateCreator(content) {
  const template = document.createElement("template");
  template.innerHTML = content;

  return template;
}
