// schemas/portfolio.ts

export default {
  name: 'portfolio',
  title: 'ポートフォリオ',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '作品名',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('作品名は必須です。'),
    },
    {
      name: 'slug',
      title: 'スラッグ（URLの一部）',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required().error('スラッグは必須です。'),
    },
    {
      name: 'mainImage',
      title: 'メイン画像',
      type: 'image',
      options: {
        hotspot: true, // 画像の切り抜き位置を調整できるようにする
      },
    },
    {
      name: 'publishedAt',
      title: '制作時期',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM',
      },
    },
    {
      name: 'technologies',
      title: '使用技術',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'description',
      title: '説明',
      type: 'text',
    },
    {
      name: 'body',
      title: '制作の背景・こだわり',
      type: 'array', // リッチテキスト形式
      of: [{type: 'block'}],
    },
    {
      name: 'projectUrl',
      title: 'サイトURL',
      type: 'url',
    },
    {
      name: 'githubUrl',
      title: 'GitHubリポジトリURL',
      type: 'url',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}