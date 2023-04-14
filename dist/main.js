acode.setPluginInit('com.example.plugin', (baseUrl, $page, cache) => {
  const { commands } = editorManager.editor;
  commands.addCommand({
    name: 'example-plugin',
    bindKey: { win: 'Ctrl-Alt-E', mac: 'Command-Alt-E' },
    exec: () => {
      $page.content = `
        <h1>Example Plugin</h1>
        <p>This is an example plugin.</p>
      `;
      $page.show();
    },
  });
});

acode.setPluginUnmount('com.example.plugin', () => {
  const { commands } = editorManager.editor;
  commands.removeCommand('example-plugin');
});