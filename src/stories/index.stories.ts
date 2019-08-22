import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from './stories.module';

storiesOf('Button', module)
  .addDecorator(moduleMetadata(StoriesModule))
  .add('with text', () => {
    return {
      template: `<app-alert [data]="data" ></app-alert>`,
      props: {
        data: { id: 0, title: 'Task', info: 'xampleInfo', done: true }
      }
    };
  });
