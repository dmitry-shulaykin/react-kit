import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import { Text } from '../components/Text'
import { ListItem, Props } from '../components/ListItem'
import {List} from "../components/List";
import {Card} from "../components/Card";

export default {
  title: 'ListItem',
  component: ListItem,
} as Meta;

const Template: Story<Props> = (args) => (
  <ListItem label='Label label label' {...args} />
);

export const ListItemStory = Template.bind({});
ListItemStory.args = {}

const TemplateImage: Story<Props> = (args) => (
    <Card {...args} >
        <List>
          <ListItem label='Label label label' {...args}/>
          <ListItem label='Label label label' image='avatar.png' {...args} />
        </List>
    </Card>
);

export const ListItemImageStory = TemplateImage.bind({});
ListItemImageStory.args = {}

export const ListItemChildrenTemplate: Story<Props> = (args) => (
  <Card>
    <List>
      <ListItem {...args} label='Label with children'><Text>Children text</Text></ListItem>
      <ListItem {...args} label='Label with very very very very loooooooooooooooooong children text' >
        <Text>Very very very very loooooooooooooooooong children text</Text>
      </ListItem>
      <ListItem {...args} label='Label with very very very very loooooooooooooooooong children text' >
        <Text>Children Text</Text>
      </ListItem>
    </List>
  </Card>
);

export const ListItemChildrenStory = ListItemChildrenTemplate.bind({});
ListItemChildrenStory.args = {}
