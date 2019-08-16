export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d5737a4d3c1424dea851f81',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-ytjxq8jc',
                  apiId: '6d3b51e9-56f9-476a-b48f-4ac6dc164fc0'
                },
                {
                  buildHookId: '5d5737a45a197c343205d3f9',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-k1996fz1',
                  apiId: 'bb873c39-83eb-4579-a137-72f0dec6b2d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/huayra/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-k1996fz1.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
