export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ec2db11b1f8f31bc3d55fb5',
                  title: 'Sanity Studio',
                  name: 'fruits-et-legumes-de-saison-studio',
                  apiId: '1dee23c3-d9b1-4a8c-bfbf-4fee16d582b7'
                },
                {
                  buildHookId: '5ec2db1176203209c3225781',
                  title: 'Blog Website',
                  name: 'fruits-et-legumes-de-saison',
                  apiId: 'f9320d1a-cbb3-4755-aa84-45bc3206bad5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Dorkside/fruits-et-legumes-de-saison',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://fruits-et-legumes-de-saison.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
