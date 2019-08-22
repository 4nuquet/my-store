import { configure } from '@storybook/angular';
import '!style-loader!css-loader!../src/theme/bootstrap.css';
import '!style-loader!css-loader!../src/theme/lovey.theme.css';
import '!style-loader!css-loader!../src/theme/material-icons.css'

// automatically import all files ending in *.stories.ts
const req = require.context('../src/stories', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
