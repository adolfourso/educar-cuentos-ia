import { Injectable } from '@nestjs/common';

export interface Story {
  id: number;
  content: string;
  sourceUrl1: string;
  sourceUrl2: string;
}

@Injectable()
export class StoryRepository {
  private stories: Story[] = [];
  private idCounter = 1;

  async save(data: Omit<Story, 'id'>): Promise<Story> {
    const newStory: Story = {
      id: this.idCounter++,
      ...data,
    };
    this.stories.push(newStory);
    return newStory;
  }

  async findAll(): Promise<Story[]> {
    return this.stories;
  }

  async findById(id: number): Promise<Story | undefined> {
    return this.stories.find((story) => story.id === id);
  }
}
