export const markdownLayoutDirectives = {
  name: 'markdown-layout-directives',
  containerDirective(node, context) {
    const className = {
      columns: 'post-columns',
      column: 'post-column',
    }[node.name];

    if (className) {
      context.setProperty(node, 'data', {
        hName: 'div',
        hProperties: { className: [className] },
      });
    }
  },
};
