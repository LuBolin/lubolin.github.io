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

export const markdownLineSpacing = {
  name: 'markdown-line-spacing',
  paragraph(node, context) {
    const parent = context.parent(node);
    if (parent?.type !== 'root') return;

    const index = context.indexOf(node);
    const previous = index === undefined ? undefined : parent?.children?.[index - 1];
    if (!previous?.position) return;

    const extraBlankLines = (node.position?.start.line ?? 0) - (previous?.position?.end.line ?? 0) - 2;

    if (extraBlankLines > 0) {
      context.insertBefore(node, {
        rawHtml: `<div class="markdown-blank-lines" style="--blank-lines: ${extraBlankLines}" aria-hidden="true"></div>`,
      });
    }
  },
};
