const createScript = (options: Pick<HTMLScriptElement, 'async' | 'src'>) => {
  const script = document.createElement('script');
  script.src = options.src;
  script.async = options.async;
  return script;
};

const appendToBody = (node: Node) => {
  const body = document.querySelector('body');
  body.appendChild(node);
};

const script = createScript({ src: '/Hello.js', async: true });
// appendToBody(script);

// document.body.onload = () => {
// };
