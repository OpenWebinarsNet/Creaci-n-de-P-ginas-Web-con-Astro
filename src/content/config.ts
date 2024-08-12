import { z, defineCollection, reference } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.date(),
        draft: z.boolean(),
        tags: z.array(z.string()),
        category: z.string(),
        author: reference('authors')
    })
});

const authorsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        email: z.string(),
        linkedin: z.string(),
        image: z.string()
    })
})

export const collections = {
    'blog': blogCollection,
    'authors': authorsCollection
}